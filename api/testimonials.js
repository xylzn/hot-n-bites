module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  const fetchCompat = async (url, options = {}) => {
    if (typeof fetch === 'function') return fetch(url, options)
    const https = require('https')
    const u = new URL(url)
    const opts = {
      method: options.method || 'GET',
      headers: options.headers || {},
      hostname: u.hostname,
      path: u.pathname + (u.search || ''),
      port: u.port || (u.protocol === 'https:' ? 443 : 80)
    }
    return new Promise((resolve, reject) => {
      const req2 = https.default.request(opts, res2 => {
        const chunks = []
        res2.on('data', d => chunks.push(d))
        res2.on('end', () => {
          const bodyTxt = Buffer.concat(chunks).toString('utf8')
          const headers = res2.headers || {}
          resolve({
            ok: (res2.statusCode || 0) >= 200 && (res2.statusCode || 0) < 300,
            status: res2.statusCode || 0,
            headers: { get: k => headers[String(k).toLowerCase()] || '' },
            json: async () => { try { return JSON.parse(bodyTxt) } catch { return { raw: bodyTxt } } },
            text: async () => bodyTxt
          })
        })
      })
      req2.on('error', reject)
      if (options.body) req2.write(options.body)
      req2.end()
    })
  }

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  const url = process.env.APPS_SCRIPT_URL

  if (req.method === 'GET') {
    try {
      if (!url || !url.startsWith('https://script.google.com') || !url.includes('/exec')) {
        res.status(400).json({ error: 'Missing or invalid APPS_SCRIPT_URL' })
        return
      }
      const r = await fetchCompat(url, { headers: { 'Accept': 'application/json' } })
      if (!r.ok) throw new Error('Bad response ' + r.status)
      const ct = r.headers.get('content-type') || ''
      let data
      if (ct.includes('application/json')) {
        data = await r.json()
      } else {
        const txt = await r.text()
        throw new Error('Non-JSON response: ' + (txt || '').slice(0, 200))
      }
      const items = Array.isArray(data.items) ? data.items : []
      res.status(200).json({ items })
      return
    } catch (err) {
      res.status(500).json({ error: 'Failed to load', details: String(err && err.message || err) })
      return
    }
  }

  if (req.method === 'POST') {
    const bodyRaw = req.body
    let body = {}
    if (typeof bodyRaw === 'string') {
      try { body = JSON.parse(bodyRaw) } catch { body = {} }
    } else {
      body = bodyRaw || {}
    }
    const name = body.name || ''
    const product = body.product || ''
    const level = body.level || ''
    const message = body.message || ''
    const createdAt = body.createdAt || ''

    if (!name || !product || !level || !message) {
      res.status(400).json({ error: 'Missing fields' })
      return
    }

    const stored = { name, product, level, message, createdAt }
    try {
      if (!url || !url.startsWith('https://script.google.com') || !url.includes('/exec')) {
        res.status(400).json({ error: 'Missing or invalid APPS_SCRIPT_URL' })
        return
      }
      const r = await fetchCompat(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stored)
      })
      if (!r.ok) {
        let txt = ''
        try { txt = await r.text() } catch {}
        if ((txt && txt.includes('FUNCTION_INVOCATION_FAILED')) || r.status >= 500) {
          const formBody = new URLSearchParams(stored).toString()
          const r2 = await fetchCompat(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody
          })
          if (!r2.ok) {
            let txt2 = ''
            try { txt2 = await r2.text() } catch {}
            res.status(500).json({ error: 'Apps Script error', details: txt2 || ('status ' + r2.status) })
            return
          }
          const ct2 = r2.headers.get('content-type') || ''
          if (ct2.includes('application/json')) {
            const data2 = await r2.json()
            res.status(200).json(data2)
            return
          } else {
            res.status(200).json({ status: 'ok', item: stored })
            return
          }
        } else {
          res.status(500).json({ error: 'Apps Script error', details: txt || ('status ' + r.status) })
          return
        }
      }
      const ct = r.headers.get('content-type') || ''
      if (ct.includes('application/json')) {
        const data = await r.json()
        res.status(200).json(data)
        return
      } else {
        res.status(200).json({ status: 'ok', item: stored })
        return
      }
      return
    } catch (err) {
      res.status(500).json({ error: 'Failed to save', details: String(err && err.message || err) })
      return
    }

    res.status(200).json({ status: 'ok' })
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}