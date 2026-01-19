export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

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
      const r = await fetch(url, { headers: { 'Accept': 'application/json' } })
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
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stored)
      })
      if (!r.ok) {
        let txt = ''
        try { txt = await r.text() } catch {}
        res.status(500).json({ error: 'Apps Script error', details: txt || ('status ' + r.status) })
        return
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
