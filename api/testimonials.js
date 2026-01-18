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
      if (!url) {
        res.status(500).json({ error: 'Missing APPS_SCRIPT_URL' })
        return
      }
      const r = await fetch(url)
      if (!r.ok) throw new Error('Bad response')
      const data = await r.json()
      const items = Array.isArray(data.items) ? data.items : []
      res.status(200).json({ items })
      return
    } catch {
      res.status(500).json({ error: 'Failed to load' })
      return
    }
  }

  if (req.method === 'POST') {
    const body = req.body || {}
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
      if (!url) {
        res.status(500).json({ error: 'Missing APPS_SCRIPT_URL' })
        return
      }
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stored)
      })
      res.status(200).json({ status: 'ok', item: stored })
      return
    } catch {
      res.status(500).json({ error: 'Failed to save' })
      return
    }

    res.status(200).json({ status: 'ok' })
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}
