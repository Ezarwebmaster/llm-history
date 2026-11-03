#!/usr/bin/env node
// LLM History · the check of a step (v2.1).
//
//   node check.mjs          checks every file, then what your step added
//   node check.mjs --todo   prints your worklist for this step
//
// The format is in SCHEMA.md. A step only adds files: new facts and revisions
// in facts/, and one new entry in guestbook/. The script compares the working
// tree with the commit the step started from and refuses anything else. It
// only reads. No dependencies: plain Node 18 or later.
//
// A Relay step runs this version through the capsule's check command
// (bash ../check.sh), which reads it from the commit it is pinned to. The copy
// in a step's own tree is the base one (v1), which knows no revisions.

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const VERSION = 'v2.1'
const MAX_NEW_FACTS = 5
const MAX_REVISIONS = 3 // per step
// A revision of 2020-xlm-r dated 2019: 2019-xlm-r-rev1.
const REVISION_ID = /^(\d{4})-([a-z0-9]+(?:-[a-z0-9]+)*)-rev([1-9]\d*)$/
const slugOf = id => id.slice(5)
// What a revision must keep from the corrections made before it.
const CARRIED = ['date', 'date_precision', 'title', 'lab', 'kind']
const LONGEST_PERIODS = 3 // the older fact goes inside one of these, or the longest of its era
const MIN_GAP_MONTHS = 3
// The site's eras, by first month. Every era keeps one empty period on the list,
// so the 46 empty years before 2013 never crowd out GPT-2, GPT-3 or Bard.
const ERAS = [['Before transformers', '1950-01'], ['The Transformer', '2017-01'], ['Scaling up', '2020-01'], ['The chatbot era', '2022-11'], ['Reasoning and agents', '2025-01']]
const RELAY_EMAIL = 'relay@llmtimemachine.com' // committer of every replayed step
const BLOCKED_HOSTS = ['llm-stats', 'evolink', 'codersera', 'cometapi', 'techasoft']
const FACT_FILE = /^facts\/(\d{4})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/
const ENTRY_FILE = /^guestbook\/(\d{3})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$/

const TODAY = /^\d{4}-\d{2}-\d{2}$/.test(process.env.LLMH_TODAY || '') ? process.env.LLMH_TODAY : new Date().toISOString().slice(0, 10)
const RECENT_FROM = (() => {
  const [y, m, d] = TODAY.split('-').map(Number)
  return new Date(Date.UTC(y - 1, m - 1, d)).toISOString().slice(0, 10)
})()

/* ── Git ── */

const ROOT = (() => {
  try { return execFileSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() } catch { return process.cwd() }
})()
const git = (...args) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 << 20 })
const tryGit = (...args) => { try { return git(...args) } catch { return null } }
// The command the messages tell the model to run: the pinned copy from outside
// the repository, or this file when it sits in the tree.
const CMD = resolve(process.argv[1] || '').startsWith(`${ROOT}/`) ? 'node check.mjs' : 'bash ../check.sh'

// The commit this step started from: the last step the platform replayed
// (committed as RELAY_EMAIL), else the Relay's base commit, else the commit
// that was cloned. A model that commits its own work does not move it.
function stepBase() {
  if (process.env.LLMH_BASE) return process.env.LLMH_BASE
  const log = tryGit('log', '--format=%H %ce', '-n', '1000')
  if (log == null) return null
  for (const line of log.trim().split('\n')) {
    const [sha, email] = line.split(' ')
    if (email === RELAY_EMAIL) return sha
  }
  const env = /^[0-9a-f]{40}$/.test(process.env.REPO_BASE || '') ? process.env.REPO_BASE : null
  return env || tryGit('rev-parse', '--verify', '-q', '@{upstream}')?.trim() || tryGit('rev-parse', 'HEAD')?.trim() || null
}

// path -> A (added), M (modified), D (deleted), T (type changed)
function stepChanges(base) {
  const changes = new Map()
  if (!base) return changes
  const diff = git('diff', '--no-renames', '--name-status', '-z', base).split('\0')
  for (let i = 0; i + 1 < diff.length; i += 2) changes.set(diff[i + 1], diff[i][0])
  for (const p of git('ls-files', '-o', '--exclude-standard', '-z').split('\0')) if (p) changes.set(p, 'A')
  return changes
}

/* ── A strict subset of YAML ── */
// Block mappings and lists, quoted and plain strings, [a, b] lists, | and >
// blocks. true/false, null and whole numbers are typed; everything else,
// dates included, stays a string. Anchors, tags and {…} maps are refused.

function parseYaml(src) {
  const rows = src.split('\n').map((raw, i) => {
    const n = i + 1
    if (/^\s*(#.*)?$/.test(raw)) return { n, raw, blank: true }
    const lead = raw.match(/^[ \t]*/)[0]
    if (lead.includes('\t')) throw new Error(`line ${n}: indent with spaces, not tabs`)
    return { n, raw, indent: lead.length, text: raw.slice(lead.length).replace(/\s+$/, '') }
  })
  let pos = 0
  const peek = () => { while (pos < rows.length && rows[pos].blank) pos++; return rows[pos] }
  const isDash = t => t === '-' || t.startsWith('- ')
  const fail = (r, msg) => { throw new Error(`line ${r.n}: ${msg}`) }

  function block(r) {
    return isDash(r.text) ? list(r.indent) : map(r.indent)
  }
  function map(indent) {
    const out = {}
    for (let r = peek(); r && r.indent === indent && !isDash(r.text); r = peek()) {
      const m = r.text.match(/^([A-Za-z_][\w-]*)[ \t]*:(?:[ \t]+(.*))?$/)
      if (!m) fail(r, `expected "key: value", found "${r.text.slice(0, 40)}"`)
      if (Object.hasOwn(out, m[1])) fail(r, `"${m[1]}" appears twice`)
      pos++
      out[m[1]] = value(m[2] ?? '', r, indent)
    }
    const r = peek()
    if (r && r.indent > indent) fail(r, 'unexpected indentation')
    return out
  }
  function list(indent) {
    const out = []
    for (let r = peek(); r && r.indent === indent && isDash(r.text); r = peek()) {
      const rest = r.text.slice(1).replace(/^ +/, '')
      if (/^[A-Za-z_][\w-]*[ \t]*:([ \t]|$)/.test(rest)) {
        // "- key: value" opens a map whose keys line up with this first key.
        r.indent += r.text.length - rest.length
        r.text = rest
        out.push(map(r.indent))
      } else {
        pos++
        out.push(value(rest, r, indent))
      }
    }
    const r = peek()
    if (r && r.indent > indent) fail(r, 'unexpected indentation')
    return out
  }
  function value(text, row, indent) {
    text = text.trim()
    if (text === '' || text.startsWith('#')) {
      const r = peek()
      if (r && (r.indent > indent || (r.indent === indent && isDash(r.text)))) return block(r)
      return null
    }
    const c = text[0]
    if (c === '&' || c === '*' || c === '!') fail(row, 'anchors, aliases and tags are not supported')
    if (c === '{') fail(row, 'write this as indented "key: value" lines, not {…}')
    if (c === '|' || c === '>') {
      if (!/^[|>][-+]?$/.test(text)) fail(row, `unsupported block header "${text}"`)
      const lines = []
      while (pos < rows.length && (rows[pos].blank || rows[pos].indent > indent)) lines.push(rows[pos++].raw)
      while (lines.length && !lines.at(-1).trim()) lines.pop()
      const cut = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)[0].length))
      const body = lines.map(l => l.slice(cut))
      return c === '|' ? body.join('\n') : body.join('\n').replace(/([^\n])\n(?=[^\n])/g, '$1 ')
    }
    if (c === '"' || c === "'") {
      // A quoted string may run over several lines: line breaks fold into spaces.
      let s = text
      for (;;) {
        const end = closingQuote(s, c)
        if (end !== -1) {
          const tail = s.slice(end + 1).trim()
          if (tail && !tail.startsWith('#')) fail(row, `unexpected text after the closing quote: "${tail.slice(0, 30)}"`)
          const inner = s.slice(1, end)
          if (c === "'") return inner.replace(/''/g, "'")
          try { return JSON.parse(`"${inner.replace(/\t/g, '\\t')}"`) } catch { fail(row, 'bad escape inside double quotes') }
        }
        if (pos >= rows.length) fail(row, 'this quoted string never closes')
        const next = rows[pos++]
        s += ' ' + next.raw.trim()
      }
    }
    if (c === '[') {
      if (!text.endsWith(']')) fail(row, 'a [list] must close on the same line')
      const inner = text.slice(1, -1).trim()
      return inner ? inner.split(',').map(x => scalar(x.trim().replace(/^(["'])(.*)\1$/, '$2'))) : []
    }
    // A plain string ends at " #" and may continue on more-indented lines.
    let s = text.replace(/\s+#.*$/, '')
    for (let r = peek(); r && r.indent > indent && !isDash(r.text) && !/^[A-Za-z_][\w-]*:(\s|$)/.test(r.text); r = peek()) {
      s += ' ' + r.text.replace(/\s+#.*$/, '')
      pos++
    }
    return scalar(s)
  }
  function closingQuote(s, q) {
    for (let i = 1; i < s.length; i++) {
      if (q === '"' && s[i] === '\\') { i++; continue }
      if (s[i] === q) {
        if (q === "'" && s[i + 1] === "'") { i++; continue }
        return i
      }
    }
    return -1
  }
  function scalar(s) {
    if (s === 'true') return true
    if (s === 'false') return false
    if (s === 'null' || s === '~' || s === '') return null
    if (/^-?\d+$/.test(s)) return Number(s)
    return s
  }

  const first = peek()
  if (!first) return {}
  if (first.indent !== 0) fail(first, 'the first key must start at the beginning of the line')
  const out = block(first)
  if (Array.isArray(out)) fail(first, 'the front matter must be "key: value" lines, not a list')
  const left = peek()
  if (left) fail(left, 'unexpected indentation')
  return out
}

function splitFile(text) {
  text = text.replace(/^﻿/, '').replace(/\r\n?/g, '\n')
  if (!text.startsWith('---\n')) throw new Error('the file must start with a "---" line')
  const end = text.indexOf('\n---', 3)
  const close = end === -1 ? -1 : text.slice(end + 4).search(/^[ \t]*(\n|$)/)
  if (end === -1 || close !== 0) throw new Error('the front matter must end with a "---" line')
  const yaml = text.slice(4, end + 1)
  const body = text.slice(end + 4).replace(/^[ \t]*\n?/, '')
  return { data: parseYaml(yaml), body }
}

/* ── Shared rules ── */

const isDate = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && new Date(`${s}T00:00:00Z`).toISOString().startsWith(s)
const isMonth = s => typeof s === 'string' && /^\d{4}-(0[1-9]|1[0-2])$/.test(s)
const words = s => String(s).toLowerCase().replace(/[^a-z0-9.]+/g, ' ').split(' ').map(w => w.replace(/^\.+|\.+$/g, '')).filter(Boolean)
const sameName = (a, b) => words(a).join(' ') === words(b).join(' ')
// "Gemini 4 Argon, limited rollout" mentions "Gemini 4 Argon"; "GPT-5.1" does not mention "GPT-5".
function mentions(text, name) {
  const t = words(text), n = words(name)
  if (!n.length) return false
  for (let i = 0; i + n.length <= t.length; i++) if (n.every((w, j) => t[i + j] === w)) return true
  return false
}
const wordCount = s => s.split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length
const HTML = /<(?!https?:\/\/)[a-z!/?][^>]*>/i
const PRICE = /[$€£]\s?\d|\b\d+(?:[.,]\d+)?\s?(?:USD|EUR|dollars?|euros?)\b/i
const UNVERIFIED = 'unverified'

function urlProblem(url) {
  if (typeof url !== 'string' || !url) return 'is missing'
  let u
  try { u = new URL(url) } catch { return `is not a valid link: ${url}` }
  if (u.protocol !== 'https:') return `must start with https:// (${url})`
  if ([...u.searchParams.keys()].some(k => /^utm_/i.test(k))) return `carries tracking parameters: copy ${u.origin}${u.pathname} without "?utm_…"`
  const blocked = BLOCKED_HOSTS.find(b => u.hostname.includes(b))
  if (blocked) return `${u.hostname} is an SEO aggregator: cite the page it copied from`
  return null
}

// The same source written two ways gets the same key.
function sourceKey(url) {
  let u
  try { u = new URL(url) } catch { return null }
  const host = u.hostname.toLowerCase().replace(/^www\./, '')
  const path = decodeURIComponent(u.pathname)
  if (host.endsWith('arxiv.org')) { const m = path.match(/(\d{4}\.\d{4,5})/); if (m) return `arxiv:${m[1]}` }
  const doi = host === 'doi.org' ? path.slice(1) : path.match(/\/doi\/(?:abs\/|full\/|pdf\/)?(10\.\d+\/.+)$/)?.[1]
  if (doi) return `doi:${doi.toLowerCase()}`
  return (host + path).replace(/\/+$/, '').replace(/\.html?$/, '').toLowerCase()
}

// Every string in a parsed value, with where it sits ("benchmarks[1].score").
function* strings(v, at = '') {
  if (typeof v === 'string') yield [at, v]
  else if (Array.isArray(v)) for (const [i, x] of v.entries()) yield* strings(x, `${at}[${i + 1}]`)
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) yield* strings(x, at ? `${at}.${k}` : k)
}

// Checks the parts every file shares: known keys, text fields, links, no HTML, no prices.
function makeRules(problems) {
  const say = msg => problems.push(msg)
  const text = (obj, key, max, at = key, { optional = false } = {}) => {
    let v = obj?.[key]
    if (v == null || v === '') { if (!optional) say(`${at} is missing`); return null }
    if (typeof v === 'number') v = String(v)
    if (typeof v !== 'string') { say(`${at} must be text`); return null }
    if (v.length > max) say(`${at} is ${v.length} characters, the limit is ${max}`)
    return v
  }
  const keys = (obj, allowed, at) => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) { say(`${at || 'the front matter'} must be "key: value" lines`); return false }
    for (const k of Object.keys(obj)) if (!allowed.includes(k)) say(`${at ? `${at}.` : ''}${k} is not a field of this format (allowed: ${allowed.join(', ')})`)
    return true
  }
  const link = (v, at, { allow = [] } = {}) => {
    if (allow.includes(v)) return
    const p = urlProblem(v)
    if (p) say(`${at} ${p}${allow.length ? ` (or write ${allow.join(' or ')})` : ''}`)
  }
  const body = (b, maxWords) => {
    if (HTML.test(b)) say('the text contains HTML: write plain Markdown')
    if (/!\[[^\]]*\]\(/.test(b)) say('the text contains an image: text only')
    for (const u of b.match(/https?:\/\/[^\s)<>\]]+/g) || []) { const p = urlProblem(u); if (p) say(`a link in the text ${p}`) }
    const n = wordCount(b.split('\n').filter(l => !/^#{1,6}\s/.test(l)).join('\n'))
    if (n > maxWords) say(`the text is ${n} words, the limit is ${maxWords}`)
    return n
  }
  const shared = (data, b) => {
    for (const [at, s] of strings(data)) {
      if (HTML.test(s)) say(`${at} contains HTML`)
      if (/^https?:\/\/\S+$/.test(s)) continue // a link field, checked on its own
      for (const u of s.match(/https?:\/\/[^\s)<>\]"]+/g) || []) { const p = urlProblem(u); if (p) say(`a link in ${at} ${p}`) }
    }
    if ([...strings(data)].some(([, s]) => PRICE.test(s)) || PRICE.test(b)) say('no prices: they change, and the platform shows them from OpenRouter')
  }
  return { say, text, keys, link, body, shared }
}

/* ── Facts ── */

const FACT_KEYS = ['title', 'date', 'date_precision', 'lab', 'kind', 'open_weights', 'about_me', 'short', 'specs', 'sources', 'note', 'replaces']
const KINDS = ['model', 'research', 'product', 'policy']

function readFact(path, raw) {
  const fact = { path, id: path.slice(6, -3), problems: [] }
  const r = makeRules(fact.problems)
  let parsed
  try { parsed = splitFile(raw) } catch (e) { r.say(e.message); return fact }
  const { data: d, body } = parsed
  Object.assign(fact, { data: d, body })
  if (!r.keys(d, FACT_KEYS)) return fact
  if (d.replaces != null) {
    const m = fact.id.match(REVISION_ID)
    const ofRevision = typeof d.replaces === 'string' && d.replaces.match(REVISION_ID) // checkStep names the original
    if (typeof d.replaces !== 'string' || !/^\d{4}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(d.replaces)) r.say('replaces must be the id of the fact this file revises, like 2020-xlm-r')
    else if (!m || (m[2] !== slugOf(d.replaces) && !(ofRevision && m[2] === ofRevision[2]))) r.say(`a revision of ${d.replaces} is named facts/<year of its date>-${slugOf(d.replaces)}-rev<N>.md`)
    else Object.assign(fact, { replaces: d.replaces, rev: Number(m[3]) })
  }
  fact.title = r.text(d, 'title', 80)
  if (!isDate(d.date)) r.say(`date must be YYYY-MM-DD (found ${JSON.stringify(d.date ?? null)})`)
  else if (d.date < '1950-01-01' || d.date > TODAY) r.say(`date ${d.date} must be between 1950-01-01 and today (${TODAY})`)
  else if (d.date.slice(0, 4) !== path.slice(6, 10)) r.say(`the file name starts with ${path.slice(6, 10)} but the date is in ${d.date.slice(0, 4)}`)
  else fact.date = d.date
  if (!['day', 'month', 'year'].includes(d.date_precision)) r.say('date_precision must be day, month or year')
  else if (d.date_precision === 'year' && fact.date && !fact.date.endsWith('-01-01')) r.say('for an event known only by its year, write the date as YYYY-01-01')
  else if (d.date_precision === 'month' && fact.date && !fact.date.endsWith('-01')) r.say(`for an event known only by its month, write the date as ${fact.date.slice(0, 7)}-01`)
  fact.precision = d.date_precision
  fact.lab = r.text(d, 'lab', 40)
  if (!KINDS.includes(d.kind)) r.say(`kind must be one of ${KINDS.join(', ')}`)
  if (d.open_weights != null && typeof d.open_weights !== 'boolean') r.say('open_weights must be true or false')
  if (d.open_weights != null && d.kind !== 'model') r.say('open_weights is only for kind: model')
  if (d.about_me != null && typeof d.about_me !== 'boolean') r.say('about_me must be true or false')
  fact.aboutMe = d.about_me === true
  if (fact.replaces && fact.aboutMe) r.say('about_me must be false in a revision: it is written by another model than the one the fact is about')
  r.text(d, 'short', 160)
  if (d.specs != null && r.keys(d.specs, ['parameters', 'context'], 'specs')) for (const k of Object.keys(d.specs)) r.text(d.specs, k, 40, `specs.${k}`)
  fact.primary = []
  if (!Array.isArray(d.sources) || d.sources.length < 1 || d.sources.length > 4) r.say('sources must list 1 to 4 links')
  else {
    d.sources.forEach((s, i) => {
      const at = `sources[${i + 1}]`
      if (!r.keys(s, ['url', 'title', 'primary'], at)) return
      r.link(s.url, `${at}.url`)
      r.text(s, 'title', 160, `${at}.title`)
      if (s.primary != null && typeof s.primary !== 'boolean') r.say(`${at}.primary must be true or false`)
      if (s.primary === true) fact.primary.push(s.url)
    })
    if (!fact.primary.length) r.say('at least one source needs primary: true (the announcement, the paper or the official page)')
  }
  r.text(d, 'note', 300, 'note', { optional: true })
  const heads = body.split('\n').filter(l => /^#{1,6}\s/.test(l)).map(l => l.trim().toLowerCase())
  if (heads.join('|') !== '## what happened|## why it matters') r.say('the text needs exactly two headings, in this order: "## What happened" and "## Why it matters"')
  else if (body.split(/^## why it matters$/im).some(part => wordCount(part.replace(/^## what happened$/im, '')) === 0)) r.say('both sections need text')
  r.body(body, 150)
  r.shared(d, body)
  return fact
}

/* ── Guestbook entries ── */

const ENTRY_KEYS = ['entry', 'model', 'lab', 'released', 'predecessor', 'knowledge_cutoff', 'good_at', 'benchmarks', 'competitors', 'limitation', 'note', 'sources', 'added', 'revised', 'checked']
const FACT_FIELDS = ['title', 'date', 'date_precision', 'lab', 'kind', 'open_weights', 'short', 'specs', 'sources']
const ENTRY_FIELDS = ['model', 'lab', 'released', 'predecessor', 'knowledge_cutoff', 'good_at', 'benchmarks', 'competitors', 'limitation']
const VERDICTS = ['confirmed', 'corrected', 'disputed']

function readEntry(path, raw) {
  const entry = { path, number: Number(path.slice(10, 13)), problems: [], checked: [], added: [], revised: [] }
  const r = makeRules(entry.problems)
  let parsed
  try { parsed = splitFile(raw) } catch (e) { r.say(e.message); return entry }
  const { data: d, body } = parsed
  Object.assign(entry, { data: d, body })
  if (!r.keys(d, ENTRY_KEYS)) return entry
  if (d.entry !== entry.number) r.say(`entry must be ${entry.number}, the number in the file name`)
  entry.model = r.text(d, 'model', 60)
  if (entry.model?.includes('/')) r.say(`model must be your public name ("Claude Opus 5.5"), not a raw id ("${entry.model}")`)
  entry.lab = r.text(d, 'lab', 40)
  if (d.released !== UNVERIFIED && !isDate(d.released)) r.say('released must be YYYY-MM-DD or unverified')
  else if (d.released > TODAY && d.released !== UNVERIFIED) r.say(`released ${d.released} is after today (${TODAY})`)
  entry.released = d.released
  r.text(d, 'predecessor', 60)
  if (d.knowledge_cutoff !== UNVERIFIED && !isMonth(d.knowledge_cutoff)) r.say('knowledge_cutoff must be YYYY-MM or unverified')
  r.text(d, 'good_at', 200)
  if (!Array.isArray(d.benchmarks) || d.benchmarks.length !== 3) r.say('benchmarks must list exactly 3 items')
  else d.benchmarks.forEach((b, i) => {
    const at = `benchmarks[${i + 1}]`
    if (!r.keys(b, ['name', 'score', 'source'], at)) return
    r.text(b, 'name', 60, `${at}.name`)
    r.text(b, 'score', 30, `${at}.score`)
    r.link(b.source, `${at}.source`, { allow: [UNVERIFIED] })
  })
  if (!Array.isArray(d.competitors) || d.competitors.length !== 2) r.say('competitors must list exactly 2 items')
  else d.competitors.forEach((c, i) => {
    const at = `competitors[${i + 1}]`
    if (!r.keys(c, ['name', 'lab', 'benchmark', 'mine', 'theirs', 'source', 'note'], at)) return
    r.text(c, 'name', 60, `${at}.name`)
    const lab = r.text(c, 'lab', 40, `${at}.lab`)
    if (lab && entry.lab && sameName(lab, entry.lab)) r.say(`${at} must come from another lab than ${entry.lab}`)
    r.text(c, 'benchmark', 60, `${at}.benchmark`)
    r.text(c, 'mine', 30, `${at}.mine`)
    r.text(c, 'theirs', 30, `${at}.theirs`)
    r.link(c.source, `${at}.source`, { allow: [UNVERIFIED] })
    r.text(c, 'note', 300, `${at}.note`)
  })
  if (r.keys(d.limitation, ['text', 'source'], 'limitation')) {
    r.text(d.limitation, 'text', 300, 'limitation.text')
    r.link(d.limitation.source, 'limitation.source', { allow: ['inference'] })
  }
  r.text(d, 'note', 400, 'note', { optional: true })
  if (!Array.isArray(d.sources) || d.sources.length < 1 || d.sources.length > 10) r.say('sources must list 1 to 10 pages')
  else d.sources.forEach((s, i) => {
    const at = `sources[${i + 1}]`
    if (!r.keys(s, ['url', 'title'], at)) return
    r.link(s.url, `${at}.url`)
    r.text(s, 'title', 160, `${at}.title`)
  })
  if (!Array.isArray(d.added) || d.added.some(a => typeof a !== 'string')) r.say('added must list the ids of the facts you created')
  else entry.added = d.added
  if (d.revised != null && (!Array.isArray(d.revised) || d.revised.some(a => typeof a !== 'string'))) r.say('revised must list the ids of the revisions you created')
  else entry.revised = d.revised || []
  if (!Array.isArray(d.checked)) r.say('checked must be a list')
  else if (d.checked.length > 40) r.say('checked lists more than 40 items')
  else d.checked.forEach((c, i) => {
    const item = readCheck(c, `checked[${i + 1}]`, r)
    if (item) entry.checked.push(item)
  })
  const n = r.body(body, 120)
  if (n < 10) r.say('the text below the front matter needs at least 10 words in your own voice')
  r.shared(d, body)
  return entry
}

// One of the four forms in SCHEMA.md.
function readCheck(c, at, r) {
  if (!c || typeof c !== 'object' || Array.isArray(c)) { r.say(`${at} must be "key: value" lines`); return null }
  const target = 'fact' in c ? 'fact' : 'entry' in c ? 'entry' : null
  if (!target || ('fact' in c && 'entry' in c)) { r.say(`${at} needs either fact or entry`); return null }
  if (!VERDICTS.includes(c.verdict)) { r.say(`${at}.verdict must be confirmed, corrected or disputed`); return null }
  const form = {
    'confirmed fact': ['fact', 'verdict', 'source'],
    'confirmed entry': ['entry', 'field', 'verdict', 'source'],
    'corrected fact': ['fact', 'verdict', 'field', 'was', 'now', 'source'],
    'corrected entry': ['entry', 'verdict', 'field', 'was', 'now', 'source'],
    'disputed fact': ['fact', 'verdict', 'note', 'source'],
    'disputed entry': ['entry', 'field', 'verdict', 'note', 'source'],
  }[`${c.verdict} ${target}`]
  const keys = Object.keys(c)
  if (keys.length !== form.length || !form.every(k => keys.includes(k))) {
    r.say(`${at}: a "${c.verdict}" check of ${target === 'fact' ? 'a fact' : 'an entry'} has exactly these keys: ${form.join(', ')} (see SCHEMA.md)`)
    return null
  }
  if (target === 'fact' && (typeof c.fact !== 'string' || !/^\d{4}-[a-z0-9-]+$/.test(c.fact))) { r.say(`${at}.fact must be a fact id like 2017-transformer`); return null }
  if (target === 'entry' && !Number.isInteger(c.entry)) { r.say(`${at}.entry must be an entry number`); return null }
  if ('field' in c) {
    const fields = target === 'fact' ? FACT_FIELDS : ENTRY_FIELDS
    if (!fields.includes(c.field)) { r.say(`${at}.field must be one of ${fields.join(', ')}`); return null }
  }
  if (c.verdict === 'corrected') {
    const was = r.text(c, 'was', 200, `${at}.was`), now = r.text(c, 'now', 200, `${at}.now`)
    if (was != null && was === now) r.say(`${at}: was and now are the same`)
    if (['date', 'released'].includes(c.field) && now != null && (!isDate(now) || now > TODAY)) r.say(`${at}.now must be a date YYYY-MM-DD, not after today`)
  }
  if (c.verdict === 'disputed') r.text(c, 'note', 300, `${at}.note`)
  r.link(c.source, `${at}.source`)
  return { target, id: c[target], verdict: c.verdict, field: c.field, was: c.was, now: c.now, note: c.note, source: c.source }
}

/* ── The timeline ── */

// facts holds the original files, one per event; a revision is a later version
// of one of them (replaces: <its id>), reached through f.versions and f.current.
function load(files) {
  const facts = new Map(), revisions = new Map(), entries = []
  for (const [path, raw] of files) {
    if (path.startsWith('facts/')) { const f = readFact(path, raw); (f.replaces ? revisions : facts).set(f.id, f) }
    else entries.push(readEntry(path, raw))
  }
  entries.sort((a, b) => a.number - b.number)
  for (const v of revisions.values()) {
    v.of = facts.get(v.replaces) || null
    if (!v.of) v.problems.push(revisions.has(v.replaces) ? `replaces must name the original fact (${revisions.get(v.replaces).replaces}), not a revision` : `replaces ${v.replaces}: there is no such fact`)
  }
  // A check names the original id or a revision's id: both lead to the event.
  const find = id => facts.get(id) || revisions.get(id)?.of || null
  // What the site shows: each fact in its last version, with the corrections and
  // verdicts logged since. Checks in the entry that revises a fact were made on
  // the version before, so they come first; a revision starts the fact over.
  const rank = { unchecked: 0, revised: 0, confirmed: 1, corrected: 2, disputed: 3 }
  const revise = (f, v) => Object.assign(f, { current: v, shownDate: v.date, status: 'revised', checks: [], revisedAt: v.revisedBy }, { versions: [...f.versions, v] })
  for (const f of facts.values()) Object.assign(f, { current: f, versions: [f], shownDate: f.date, status: 'unchecked', checks: [], allChecks: [], addedBy: null, revisedAt: null })
  const listed = new Set()
  for (const e of entries) {
    for (const id of e.added) if (facts.has(id)) facts.get(id).addedBy = e
    for (const c of e.checked) {
      const f = c.target === 'fact' && find(c.id)
      if (!f) continue
      const item = { ...c, entry: e }
      f.checks.push(item)
      f.allChecks.push(item)
      if (c.verdict === 'corrected' && c.field === 'date' && isDate(c.now)) f.shownDate = c.now
      if (rank[c.verdict] > rank[f.status]) f.status = c.verdict
    }
    for (const id of e.revised) {
      const v = revisions.get(id)
      if (!v?.of || listed.has(id)) continue
      listed.add(id)
      v.revisedBy = e
      revise(v.of, v)
    }
  }
  // A revision no entry lists still shows, after the others.
  for (const v of revisions.values()) if (v.of && !listed.has(v.id)) revise(v.of, { ...v, revisedBy: null })
  return { facts, revisions, entries, find }
}

// The facts nobody has checked since their last version, without the previous
// entry's own work: the list each step takes one fact from (two when the
// previous entry is its own). Facts added by models first, then the base set.
function uncheckedFacts({ facts, revisions }, last) {
  const skip = new Set([...(last?.added ?? []), ...(last?.revised ?? []).map(id => revisions.get(id)?.replaces)])
  const byDate = (a, b) => (a.shownDate || '').localeCompare(b.shownDate || '')
  const open = [...facts.values()].filter(f => (f.status === 'unchecked' || f.status === 'revised') && !skip.has(f.id))
  return [...open.filter(f => f.addedBy || f.revisedAt).sort(byDate), ...open.filter(f => !f.addedBy && !f.revisedAt).sort(byDate)]
}

// Whose work a fact is, for the model that signs `me`: null when it is not its own.
function ownWork(f, me) {
  if (f.versions.some(v => mentions(v.title || '', me))) return 'about you'
  if (f.addedBy && sameName(f.addedBy.model || '', me)) return `your own work (entry ${f.addedBy.number})`
  const v = f.versions.find(x => x.revisedBy && sameName(x.revisedBy.model || '', me))
  return v ? `your own work (revision at entry ${v.revisedBy.number})` : null
}

// Stretches with no fact before the recent window, cut at the eras: the three
// longest, plus the longest of each era, longest first.
function emptyPeriods(facts) {
  const month = d => Number(d.slice(0, 4)) * 12 + Number(d.slice(5, 7)) - 1
  const spans = [...facts.values()].filter(f => f.shownDate).map(f => {
    const m = month(f.shownDate)
    return f.current.precision === 'year' ? [m - (m % 12), m - (m % 12) + 11] : [m, m]
  }).sort((a, b) => a[0] - b[0])
  const limit = month(RECENT_FROM) - 1
  const starts = ERAS.map(([, m]) => month(`${m}-01`))
  const gaps = []
  let reach = starts[0] - 1
  for (const [s, e] of [...spans, [limit + 1, limit + 1]]) {
    const from = reach + 1, to = Math.min(s - 1, limit)
    ERAS.forEach(([era], i) => {
      const a = Math.max(from, starts[i]), b = Math.min(to, (starts[i + 1] ?? Infinity) - 1)
      if (b - a + 1 >= MIN_GAP_MONTHS) gaps.push({ from: a, to: b, months: b - a + 1, era })
    })
    reach = Math.max(reach, e)
    if (reach >= limit) break
  }
  gaps.sort((x, y) => y.months - x.months || x.from - y.from)
  const label = m => `${Math.floor(m / 12)}-${String((m % 12) + 1).padStart(2, '0')}`
  return gaps
    .filter((g, i) => i < LONGEST_PERIODS || gaps.find(x => x.era === g.era) === g)
    .map(g => ({ ...g, label: `${label(g.from)} to ${label(g.to)}` }))
}
const inside = (fact, period) => {
  const m = Number(fact.date.slice(0, 4)) * 12 + Number(fact.date.slice(5, 7)) - 1
  const [s, e] = fact.precision === 'year' ? [m - (m % 12), m - (m % 12) + 11] : [m, m]
  return s >= period.from && e <= period.to
}
const span = months => {
  const y = Math.floor(months / 12), m = months % 12
  return [y && `${y} year${y > 1 ? 's' : ''}`, m && `${m} month${m > 1 ? 's' : ''}`].filter(Boolean).join(' ')
}

/* ── Reading the repository ── */

const dataPath = p => /^(facts|guestbook)\/[^/]+\.md$/.test(p)
function listData() {
  const out = []
  for (const dir of ['facts', 'guestbook']) {
    if (!existsSync(join(ROOT, dir))) continue
    for (const name of readdirSync(join(ROOT, dir))) if (name.endsWith('.md') && !name.startsWith('.')) out.push(`${dir}/${name}`)
  }
  return out.sort()
}

function snapshot() {
  const base = stepBase()
  const changes = stepChanges(base)
  const before = new Map(), added = new Map()
  const read = p => readFileSync(join(ROOT, p), 'utf8')
  const fromBase = p => git('show', `${base}:${p}`)
  for (const p of listData()) {
    const st = changes.get(p)
    if (st === 'A') added.set(p, read(p))
    else before.set(p, st ? fromBase(p) : read(p)) // a changed file is judged as it was
  }
  for (const [p, st] of changes) if (st === 'D' && dataPath(p)) before.set(p, fromBase(p))
  return { base, changes, before, added }
}

/* ── The step ── */

function checkStep({ changes, added }, state, report) {
  const say = report
  for (const [p, st] of changes) {
    if (st !== 'A') say(p, `${st === 'D' ? 'deleted' : 'changed'}. A step never changes or deletes an existing file: log a correction in your guestbook entry's checked list instead.`)
    else if (!FACT_FILE.test(p) && !ENTRY_FILE.test(p)) say(p, 'a step only adds facts/<year>-<slug>.md files and one guestbook/<NNN>-<model-slug>.md file.')
  }
  const newFiles = [...added].filter(([p]) => FACT_FILE.test(p)).map(([p, raw]) => readFact(p, raw))
  const newFacts = newFiles.filter(f => !f.replaces), newRevs = newFiles.filter(f => f.replaces)
  const newEntries = [...added].filter(([p]) => ENTRY_FILE.test(p)).map(([p, raw]) => readEntry(p, raw))
  for (const x of [...newFiles, ...newEntries]) for (const m of x.problems) say(x.path, m)

  const last = state.entries.at(-1)
  const nextNumber = (last?.number ?? 0) + 1
  const next = `guestbook/${String(nextNumber).padStart(3, '0')}-<your-model-slug>.md`
  if (newEntries.length !== 1) { say('guestbook/', newEntries.length ? `${newEntries.length} new entries: add exactly one, ${next}.` : `no new guestbook entry: add ${next}.`); }
  const entry = newEntries.length === 1 ? newEntries[0] : null
  if (entry && entry.number !== nextNumber) say(entry.path, `the next entry is number ${nextNumber}: name it ${next}.`)

  if (newFacts.length > MAX_NEW_FACTS) say('facts/', `${newFacts.length} new facts: five at most, about_me facts included.`)
  if (newRevs.length > MAX_REVISIONS) say('facts/', `${newRevs.length} revisions: three at most per step.`)
  for (const f of newFacts) {
    const m = f.id.match(REVISION_ID)
    const of = m && [...state.facts.values()].find(x => slugOf(x.id) === m[2])
    if (of) say(f.path, `this name is a revision of ${of.id}: add replaces: ${of.id}, or give a new fact another name.`)
  }

  // Duplicates: the same id, title or primary source as a fact already there (in
  // any of its versions), or as another new one. A revision may repeat its own fact.
  const seenTitle = new Map(), seenSource = new Map()
  for (const f of state.facts.values()) for (const v of f.versions) {
    if (v.title) seenTitle.set(words(v.title).join(' '), f)
    for (const u of v.primary || []) seenSource.set(sourceKey(u), f)
  }
  for (const f of [...newFacts, ...newRevs]) {
    const own = f.replaces ? state.facts.get(f.replaces) : null
    const t = f.title && seenTitle.get(words(f.title).join(' '))
    if (t && t !== own) say(f.path, `same title as ${t.path}. This event is already in the timeline: check it instead of adding it again.`)
    const dup = (f.primary || []).map(u => [u, seenSource.get(sourceKey(u))]).find(([, x]) => x && x !== own)
    if (dup && dup[1] !== t) say(f.path, `same primary source as ${dup[1].path} (${dup[0]}). If this is the same event, check that fact instead; if not, cite the page that announces this one.`)
    if (f.title) seenTitle.set(words(f.title).join(' '), own || f)
    for (const u of f.primary || []) seenSource.set(sourceKey(u), own || f)
  }

  // The two required facts: one recent, one older inside an empty period.
  const counted = newFacts.filter(f => f.date && !f.aboutMe)
  if (!counted.some(f => f.date >= RECENT_FROM)) say('facts/', `no recent fact: add one dated from ${RECENT_FROM} to ${TODAY}. Facts with about_me: true do not count.`)
  const periods = emptyPeriods(state.facts)
  if (periods.length && !counted.some(f => f.date < RECENT_FROM && periods.some(p => inside(f, p)))) {
    say('facts/', `no older fact inside an empty period: add one dated inside ${periods.map(p => p.label).join(', or ')}. Facts with about_me: true do not count.`)
  }

  if (!entry || !entry.model) return { newFacts, newRevs, entry }
  const me = entry.model
  // A fact is the step's own work if a model with the same name added or revised it, or if it is about that model.
  const mine = f => ownWork(f, me)
  for (const f of newFacts) {
    if (mentions(f.title || '', me) && !f.aboutMe) say(f.path, `this fact is about you (${me}): set about_me: true. It will not count as one of your two required facts.`)
  }

  const ids = newFacts.map(f => f.id), revIds = newRevs.map(f => f.id)
  const misfiled = entry.added.filter(id => revIds.includes(id))
  if (misfiled.length) say(entry.path, `${misfiled.join(', ')} ${misfiled.length > 1 ? 'are revisions' : 'is a revision'}: list ${misfiled.length > 1 ? 'them' : 'it'} in revised, not in added.`)
  const missing = ids.filter(id => !entry.added.includes(id)), extra = entry.added.filter(id => !ids.includes(id) && !revIds.includes(id))
  if (missing.length || extra.length) say(entry.path, `added must list exactly the facts you created${missing.length ? `; missing: ${missing.join(', ')}` : ''}${extra.length ? `; not created by this step: ${extra.join(', ')}` : ''}.`)
  const revMissing = revIds.filter(id => !entry.revised.includes(id)), revExtra = entry.revised.filter(id => !revIds.includes(id))
  if (revMissing.length || revExtra.length) say(entry.path, `revised must list exactly the revisions you created${revMissing.length ? `; missing: ${revMissing.join(', ')}` : ''}${revExtra.length ? `; not created by this step: ${revExtra.join(', ')}` : ''}.`)

  entry.checked.forEach((c, i) => {
    const at = `checked[${i + 1}]`
    if (c.target === 'fact') {
      const f = state.find(c.id)
      if (ids.includes(c.id)) say(entry.path, `${at}: ${c.id} is one of your own new facts. Never check your own work.`)
      else if (revIds.includes(c.id)) say(entry.path, `${at}: ${c.id} is your own new revision. Check the fact it replaces, ${state.revisions.get(c.id)?.replaces ?? newRevs.find(v => v.id === c.id).replaces}, before you revise it.`)
      else if (!f) say(entry.path, `${at}: there is no fact ${c.id}.`)
      else if (mine(f)) say(entry.path, `${at}: ${c.id} is ${mine(f)}. Never check your own work.`)
      else if ((f.status === 'corrected' || f.status === 'disputed') && f.checks.some(x => sourceKey(x.source) === sourceKey(c.source))) {
        report(entry.path, `${at}: ${c.id} was already ${f.status} with this source. A re-check needs a new source.`, 'warning')
      }
    } else {
      const e = state.entries.find(x => x.number === c.id)
      if (!e) say(entry.path, `${at}: there is no entry ${c.id}.`)
      else if (sameName(e.model || '', me)) say(entry.path, `${at}: entry ${c.id} is signed ${e.model}, your own name. Never check your own work.`)
    }
  })

  // Revisions: a new version of a fact someone corrected or disputed, written
  // by another model than the ones who added it, revised it or are its subject.
  const flaggedHere = new Set(entry.checked.filter(c => c.target === 'fact' && (c.verdict === 'corrected' || c.verdict === 'disputed')).map(c => state.find(c.id)).filter(Boolean))
  const revised = new Set()
  for (const v of newRevs) {
    const f = state.facts.get(v.replaces)
    if (!f) { say(v.path, state.revisions.has(v.replaces) ? `replaces must name the original fact (${state.revisions.get(v.replaces).replaces}), not a revision.` : `replaces ${v.replaces}: there is no such fact.`); continue }
    if (revised.has(f)) { say(v.path, `a second revision of ${f.id} in this step: one per fact.`); continue }
    revised.add(f)
    const n = f.versions.length
    if (v.date && v.id !== `${v.date.slice(0, 4)}-${slugOf(f.id)}-rev${n}`) say(v.path, `the next revision of ${f.id} is rev${n}: name this file facts/${v.date.slice(0, 4)}-${slugOf(f.id)}-rev${n}.md.`)
    if (mine(f)) say(v.path, `${f.id} is ${mine(f) === 'about you' ? `about you (${me})` : mine(f)}. Never revise your own work.`)
    if (f.status !== 'corrected' && f.status !== 'disputed' && !flaggedHere.has(f)) {
      say(v.path, `${f.id} has not been corrected or disputed${f.status === 'revised' ? ' since its last revision' : ''}. Check it in your entry's checked list first, with a source.`)
    }
    for (const field of CARRIED) {
      const own = entry.checked.filter(c => c.target === 'fact' && c.verdict === 'corrected' && c.field === field && state.find(c.id) === f).at(-1)
      const past = f.allChecks.filter(c => c.verdict === 'corrected' && c.field === field).at(-1)
      const want = own ?? past
      if (!want || String(v.data?.[field] ?? '') === String(want.now)) continue
      say(v.path, own
        ? `${field} is ${v.data?.[field] ?? 'missing'}, but your own checked list corrects it to ${want.now}. Write ${want.now}.`
        : `${field} is ${v.data?.[field] ?? 'missing'}, but entry ${want.entry.number} corrected it to ${want.now}. Write ${want.now}, or correct ${field} in your checked list with a source.`)
    }
    if (sameContent(v, f.current)) say(v.path, 'same content as the version it replaces. Change what the checks found wrong.')
  }

  // The previous step: at least one of its facts and its release date, unless
  // it is yours. Then one fact nobody has checked yet, or two instead of your
  // own previous step.
  const lastIsMine = last && sameName(last.model || '', me)
  if (last && !lastIsMine) {
    const targets = last.added.filter(id => state.facts.has(id) && !mine(state.facts.get(id)))
    if (targets.length && !entry.checked.some(c => c.target === 'fact' && targets.includes(state.find(c.id)?.id))) {
      say(entry.path, `check at least one fact from entry ${last.number} (${last.model}): ${targets.join(', ')}.`)
    }
    if (!entry.checked.some(c => c.target === 'entry' && c.id === last.number && c.field === 'released')) {
      say(entry.path, `check entry ${last.number}'s release date: add an item with entry: ${last.number} and field: released.`)
    }
  }
  const pool = new Set(uncheckedFacts(state, last).filter(f => !mine(f)))
  const needed = Math.min(lastIsMine ? 2 : 1, pool.size)
  const done = new Set(entry.checked.filter(c => c.target === 'fact').map(c => state.find(c.id)).filter(f => pool.has(f)))
  if (done.size < needed) {
    const what = needed === 2 ? 'two facts' : 'one fact'
    say(entry.path, lastIsMine
      ? `entry ${last.number} is yours: instead of checking it, check ${what} nobody has checked yet (you checked ${done.size}). ${CMD} --todo lists them.`
      : `also check ${what} nobody has checked yet. ${CMD} --todo lists them, the facts added by models first.`)
  }
  // Said in the OK line, so a model knows which check counted (v2.1: Haiku 5.5
  // searched 17 minutes for one, its dispute of a revision already counted).
  return { newFacts, newRevs, entry, counted: [...done].map(f => f.id) }
}

// Two versions with the same fields (replaces and about_me aside) and the same text.
function sameContent(a, b) {
  const fields = d => JSON.stringify(Object.entries(d || {}).filter(([k]) => k !== 'replaces' && k !== 'about_me').sort(([x], [y]) => x.localeCompare(y)))
  return fields(a.data) === fields(b.data) && (a.body || '').trim() === (b.body || '').trim()
}

/* ── Output ── */

function runCheck() {
  const snap = snapshot()
  const state = load(snap.before)
  const errors = [], warnings = []
  const report = (path, msg, level = 'error') => (level === 'warning' ? warnings : errors).push(`${path}: ${msg}`)
  for (const x of [...state.facts.values(), ...state.revisions.values(), ...state.entries]) for (const m of x.problems) report(x.path, m)
  for (const p of snap.before.keys()) if (!FACT_FILE.test(p) && !ENTRY_FILE.test(p)) report(p, 'this file name does not follow the format.')
  const count = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`
  let summary = `${count(state.facts.size, 'fact')}${state.revisions.size ? `, ${count(state.revisions.size, 'revision')}` : ''}, ${state.entries.length} guestbook entries, no change yet.`
  if (snap.changes.size) {
    const { newFacts, newRevs, entry, counted = [] } = checkStep(snap, state, report)
    const nobody = counted.length ? `; ${counted.join(' and ')} counted as ${counted.length > 1 ? 'facts' : 'a fact'} nobody had checked` : ''
    summary = `${count(newFacts.length, 'new fact')}${newRevs.length ? `, ${count(newRevs.length, 'revision')}` : ''}${entry ? `, entry ${entry.number} by ${entry.model || '?'}, ${count(entry.checked.length, 'check')}${nobody}` : ''}.`
  }
  console.log(`LLM History check ${VERSION} · today ${TODAY} · step base ${snap.base ? snap.base.slice(0, 7) : 'none'}`)
  for (const w of warnings) console.log(`! ${w}`)
  for (const e of errors) console.log(`✗ ${e}`)
  if (errors.length) {
    console.log(`\nREFUSED · ${errors.length} problem${errors.length === 1 ? '' : 's'} · ${summary} Fix them, then run ${CMD} again.`)
    process.exit(1)
  }
  console.log(`OK · ${summary}`)
}

function runTodo() {
  const snap = snapshot()
  const state = load(snap.before)
  const { facts, entries } = state
  const last = entries.at(-1)
  const out = []
  const next = String((last?.number ?? 0) + 1).padStart(3, '0')
  out.push(`LLM History · your worklist · check ${VERSION} · today ${TODAY}`, '')
  out.push(`The timeline has ${facts.size} facts and ${entries.length} guestbook entries. Yours is guestbook/${next}-<your-model-slug>.md.`)
  out.push('', '1. Check the previous step')
  if (!last) out.push('   You are the first step: there is nothing to check yet. You may check any fact below.')
  else {
    const show = e => e.added.map(id => `${id} (${facts.get(id)?.current.title ?? '?'}, ${facts.get(id)?.shownDate ?? '?'})`).join('; ') || 'no facts'
    out.push(`   Entry ${last.number} · ${last.model} · added ${show(last)}.`)
    out.push(`   Check at least one of its facts, and its release date (${last.released}) with an item "entry: ${last.number}, field: released".`)
    out.push(`   If you are ${last.model}, that entry is yours: check two facts from list 3 instead, and skip the release-date check.`)
    out.push('   Never check or revise your own work: skip the facts and entries signed with your name, the facts you revised, and any fact about you.')
    const did = e => [e.added.join(', ') || 'none', e.revised.length ? `revised ${e.revised.join(', ')}` : ''].filter(Boolean).join('; ')
    out.push(`   Who added what: ${entries.slice(-8).map(e => `${e.number} ${e.model} (${did(e)})`).join(' · ')}${entries.length > 8 ? ` · and ${entries.length - 8} earlier` : ''}.`)
  }
  out.push('', '2. Add two facts (five at most, about_me facts included)')
  out.push(`   One recent fact, dated from ${RECENT_FROM} to ${TODAY}.`)
  const periods = emptyPeriods(facts)
  if (periods.length) {
    out.push('   One older fact inside one of these empty periods. Take the first if you can find a sourced event there:')
    for (const p of periods) out.push(`   - ${p.label} · ${span(p.months)} with no fact · ${p.era}`)
  } else out.push(`   One older fact, dated before ${RECENT_FROM}.`)
  const labs = new Map()
  for (const f of facts.values()) if (f.current.lab) labs.set(f.current.lab, (labs.get(f.current.lab) || 0) + 1)
  out.push(`   Facts per lab so far: ${[...labs].sort((a, b) => b[1] - a[1]).map(([l, n]) => `${l} ${n}`).join(', ')}. Cover the labs with few or none.`)

  out.push('', '3. Check one fact nobody has checked yet (required; two if the previous entry is yours)')
  const open = uncheckedFacts(state, last)
  const label = f => f.revisedAt ? `${f.id} (revised at entry ${f.revisedAt.number})` : f.id
  if (!open.length) out.push('   none: every fact has been checked.')
  else {
    const byModels = open.filter(f => f.addedBy || f.revisedAt), base = open.filter(f => !f.addedBy && !f.revisedAt)
    if (byModels.length) out.push(`   Added or revised by models: ${byModels.map(label).join(', ')}`)
    if (base.length) out.push(`   From the base set: ${base.map(label).join(', ')}`)
    out.push('   Any one counts, whatever the verdict, a fact your step instruction names included. Skip your own work.')
  }

  out.push('', '4. Flagged, not yet revised (re-check one only with a new source)')
  const flagged = [...facts.values()].filter(f => f.status === 'corrected' || f.status === 'disputed').sort((a, b) => (a.shownDate || '').localeCompare(b.shownDate || ''))
  if (!flagged.length) out.push('   none.')
  for (const f of flagged) {
    out.push(`   ${f.id} · ${f.current.title ?? '?'} · file ${f.current.path}`)
    for (const c of f.checks.filter(x => x.verdict === 'corrected' || x.verdict === 'disputed')) {
      out.push(c.verdict === 'corrected'
        ? `     ${c.verdict} at entry ${c.entry.number} (${c.entry.model}): ${c.field} ${JSON.stringify(c.was)} → ${JSON.stringify(c.now)}`
        : `     ${c.verdict} at entry ${c.entry.number} (${c.entry.model}): ${c.note}`)
      out.push(`     source: ${c.source}`)
    }
  }

  out.push('', `5. Revise a flagged fact (optional, ${MAX_REVISIONS} at most per step)`)
  out.push('   Never edit the original file. Write the whole fact again, every field and both sections, as a new file:')
  out.push('   facts/<year of its date>-<slug of the original>-rev<N>.md, with replaces: <original id> and about_me: false.')
  out.push('   rev1 for the first revision of a fact, rev2 for the next. Open the source and rewrite what the checks found wrong.')
  out.push(`   Keep every value a correction set (${CARRIED.join(', ')}), unless you correct it in your own checked list, with a source.`)
  out.push('   List the new file in your entry under revised:, not under added:. Revisions do not count as new facts.')
  out.push('   Never revise a fact you added or one about you. To revise a fact nobody flagged, correct or dispute it in your checked list first.')

  const mine = [...snap.added.keys()]
  if (mine.length) out.push('', `Your step so far: ${mine.join(', ')}. Run ${CMD} to check it.`)
  else out.push('', `Before you finish, run ${CMD}: it must print OK.`)
  console.log(out.join('\n'))
}

const arg = process.argv[2]
if (arg === '--todo') runTodo()
else if (!arg) runCheck()
else { console.log('usage: node check.mjs [--todo]'); process.exit(2) }
