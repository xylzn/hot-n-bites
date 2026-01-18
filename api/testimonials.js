export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'GET') {
    const items = [
      {
        name: 'Rani \u2013 Teknologi Informasi',
        product: 'Cicos Seblak Bowl',
        level: 'Medium Rush',
        message: 'Pedasnya pas buat nugas malam-malam, crunchy-nya bikin tangan tidak berhenti ngambil.'
      },
      {
        name: 'Dimas \u2013 Sistem Informasi',
        product: 'Tulang Rangu Pedas',
        level: 'Hot Burst',
        message: 'Kuahnya kental, tulangnya lembut. Wajib siap satu gelas es teh.'
      },
      {
        name: 'Nia \u2013 Desain Komunikasi Visual',
        product: 'Cicos Seblak Bowl',
        level: 'Mild Breeze',
        message: 'Level aman buat yang suka seblak tapi tidak kuat pedas.'
      },
      {
        name: 'Farhan \u2013 Manajemen',
        product: 'Tulang Rangu Pedas',
        level: 'Inferno Zone',
        message: 'Pas untuk konten challenge bareng teman sekos. Pedas tapi nagih.'
      }
    ]
    res.status(200).json({ items })
    return
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

    res.status(200).json({ status: 'ok', item: stored })
    return
  }

  res.status(405).json({ error: 'Method not allowed' })
}

