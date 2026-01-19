class HotbiteTestimonials extends HTMLElement {
  constructor() {
    super()
    const s = this.attachShadow({ mode: 'closed' })
    s.innerHTML = `
      <style>
        .wrap {
          padding: 100px 24px 110px;
          max-width: 1200px;
          margin: auto;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 26px;
        }
        .title {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-invert);
        }
        .subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          max-width: 420px;
        }
        .marqueeShell {
          position: relative;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: radial-gradient(circle at top left, rgba(255, 159, 10, 0.16), rgba(0, 0, 0, 0.88));
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
          padding: 18px 0;
          margin-bottom: 26px;
        }
        .track {
          display: flex;
          align-items: stretch;
          gap: 16px;
          will-change: transform;
        }
        .track.auto {
          animation: scrollLeft 30s linear infinite;
        }
        .card {
          flex: 0 0 320px;
          max-width: 320px;
          padding: 16px 18px 18px;
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.9);
          font-size: 13px;
        }
        .product {
          font-size: 12px;
          opacity: 0.9;
        }
        .name {
          margin-top: 6px;
          font-weight: 600;
          font-size: 14px;
        }
        .level {
          margin-top: 4px;
          font-size: 12px;
          color: rgba(255, 214, 10, 0.9);
        }
        .message {
          margin-top: 10px;
          font-size: 13px;
          line-height: 1.5;
        }
        .formWrap {
          margin-top: 20px;
          padding: 18px 18px 20px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.85);
        }
        .formTitle {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-invert);
          margin-bottom: 10px;
        }
        .formGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px 16px;
          margin-bottom: 12px;
        }
        .field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.85);
        }
        .field label span {
          color: rgba(255, 214, 10, 0.9);
        }
        .input,
        .select,
        .textarea {
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(0, 0, 0, 0.7);
          color: rgba(255, 255, 255, 0.95);
          font-size: 12px;
          padding: 8px 11px;
          outline: none;
        }
        .textarea {
          border-radius: 14px;
          min-height: 80px;
          resize: vertical;
        }
        .input::placeholder,
        .textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        .rowBottom {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .notice {
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          background: rgba(0,0,0,.5);
          border: 1px solid rgba(255,255,255,.18);
          color: rgba(255,255,255,.85);
        }
        .notice.hidden { display: none; }
        .notice.success { background: rgba(10, 120, 40, .4); border-color: rgba(10, 160, 50, .4); }
        .notice.error { background: rgba(160, 20, 20, .4); border-color: rgba(200, 40, 40, .5); }
        .notice.info { background: rgba(0, 0, 0, .5); border-color: rgba(255,255,255,.18); }
        .hint {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }
        .submit {
          padding: 10px 20px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7);
          transform: translateY(0);
          transition: transform 150ms ease-out, box-shadow 150ms ease-out, opacity 150ms ease-out;
        }
        .submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.85);
        }
        .submit:disabled {
          opacity: 0.5;
          cursor: default;
          transform: none;
          box-shadow: none;
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 768px) {
          .wrap {
            padding-top: 80px;
            padding-bottom: 90px;
          }
          .header {
            flex-direction: column;
            align-items: flex-start;
          }
          .title {
            font-size: 24px;
          }
          .card {
            flex: 0 0 260px;
            max-width: 260px;
          }
        }
      </style>

      <section class="wrap" id="testimoni">
        <div class="header">
          <div class="title">Cerita mereka setelah kepedesan.</div>
          <p class="subtitle">Testimoni dari teman-teman kampus yang sudah nyobain berbagai level pedas Hot N’ Bite.</p>
        </div>

        <div class="marqueeShell">
          <div class="track">
            <article class="card">
              <div class="product">Cicos Seblak Bowl</div>
              <div class="name">Rani – Teknologi Informasi</div>
              <div class="level">Level: Medium Rush</div>
              <p class="message">Pedasnya pas buat nugas malam-malam, crunchy-nya bikin tangan nggak berhenti ngambil.</p>
            </article>
            <article class="card">
              <div class="product">Tulang Rangu Pedas</div>
              <div class="name">Dimas – Sistem Informasi</div>
              <div class="level">Level: Hot Burst</div>
              <p class="message">Kuahnya kental, tulangnya lembut. Wajib siapin es teh satu gelas penuh.</p>
            </article>
            <article class="card">
              <div class="product">Cicos Seblak Bowl</div>
              <div class="name">Nia – Desain Komunikasi Visual</div>
              <div class="level">Level: Mild Breeze</div>
              <p class="message">Ini level aman buat yang suka rasa seblak tapi nggak tahan pedas.</p>
            </article>
            <article class="card">
              <div class="product">Tulang Rangu Pedas</div>
              <div class="name">Farhan – Manajemen</div>
              <div class="level">Level: Inferno Zone</div>
              <p class="message">Perfect buat konten challenge bareng temen sekos. Pedas tapi nagih.</p>
            </article>
          </div>
        </div>

        <div class="formWrap">
          <div class="formTitle">Tulis pengalaman kepedesan versi kamu.</div>
          <form>
            <div class="formGrid">
              <div class="field">
                <label>Nama <span>*</span></label>
                <input class="input" name="name" placeholder="Nama kamu" required>
              </div>
              <div class="field">
                <label>Produk <span>*</span></label>
                <input class="input" name="product" placeholder="Contoh: Cicos Seblak Bowl" required>
              </div>
              <div class="field">
                <label>Level pedas <span>*</span></label>
                <select class="select" name="level" required>
                  <option value="">Pilih level</option>
                  <option value="Mild Breeze">Mild Breeze</option>
                  <option value="Medium Rush">Medium Rush</option>
                  <option value="Hot Burst">Hot Burst</option>
                  <option value="Inferno Zone">Inferno Zone</option>
                </select>
              </div>
            </div>
            <div class="field" style="margin-bottom: 12px;">
              <label>Deskripsi pengalaman <span>*</span></label>
              <textarea class="textarea" name="message" placeholder="Ceritain singkat pengalaman kamu setelah nyobain Hot N’ Bite." required></textarea>
            </div>
            <div class="rowBottom">
              <p class="hint">Testimoni baru akan langsung muncul di deretan kartu di atas.</p>
              <button type="submit" class="submit">Kirim testimoni</button>
            </div>
            <div class="notice hidden" aria-live="polite"></div>
          </form>
        </div>
      </section>
    `

    const track = s.querySelector('.track')
    const form = s.querySelector('form')
    const submit = s.querySelector('.submit')
    const endpoint = window.__API_URL || '/api/testimonials'
    const notice = s.querySelector('.notice')

    const initialCards = Array.from(track.children)

    const setupMarquee = () => {
      const cards = Array.from(track.children)
      if (cards.length > 3) {
        const clone = cards.map(card => card.cloneNode(true))
        clone.forEach(node => track.appendChild(node))
        track.classList.add('auto')
      }
    }

    const renderFromItems = items => {
      track.innerHTML = ''
      items.forEach(item => {
        const card = document.createElement('article')
        card.className = 'card'

        const productEl = document.createElement('div')
        productEl.className = 'product'
        productEl.textContent = item.product || ''

        const nameEl = document.createElement('div')
        nameEl.className = 'name'
        nameEl.textContent = item.name || ''

        const levelEl = document.createElement('div')
        levelEl.className = 'level'
        levelEl.textContent = item.level ? 'Level: ' + item.level : ''

        const messageEl = document.createElement('p')
        messageEl.className = 'message'
        messageEl.textContent = item.message || ''

        card.appendChild(productEl)
        card.appendChild(nameEl)
        card.appendChild(levelEl)
        card.appendChild(messageEl)

        track.appendChild(card)
      })
    }

    const renderFallback = () => {
      track.innerHTML = ''
      initialCards.forEach(card => {
        track.appendChild(card.cloneNode(true))
      })
    }

    const loadFromSheet = () => {
      fetch(endpoint)
        .then(async res => {
          if (!res.ok) {
            let txt = ''
            try { txt = await res.text() } catch {}
            throw new Error(txt || ('status ' + res.status))
          }
          return res.json()
        })
        .then(data => {
          const items = Array.isArray(data.items) ? data.items : []
          if (items.length) {
            renderFromItems(items)
          } else {
            renderFallback()
          }
          setupMarquee()
        })
        .catch(err => {
          renderFallback()
          setupMarquee()
          notice.textContent = 'Gagal memuat data: ' + (err && err.message || 'unknown')
          notice.className = 'notice error'
        })
    }

    loadFromSheet()

    form.addEventListener('submit', e => {
      e.preventDefault()
      if (submit.disabled) return

      const name = form.elements.namedItem('name').value.trim()
      const product = form.elements.namedItem('product').value.trim()
      const level = form.elements.namedItem('level').value
      const message = form.elements.namedItem('message').value.trim()

      if (!name || !product || !level || !message) return

      submit.disabled = true
      notice.textContent = 'Mengirim testimoni…'
      notice.className = 'notice info'

      const card = document.createElement('article')
      card.className = 'card'
      card.innerHTML = `
        <div class="product"></div>
        <div class="name"></div>
        <div class="level"></div>
        <p class="message"></p>
      `
      card.querySelector('.product').textContent = product
      card.querySelector('.name').textContent = name
      card.querySelector('.level').textContent = 'Level: ' + level
      card.querySelector('.message').textContent = message

      track.appendChild(card)

      const payload = {
        name,
        product,
        level,
        message,
        createdAt: new Date().toISOString()
      }

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      }).then(async res => {
        if (!res.ok) {
          let txt = ''
          try { txt = await res.text() } catch {}
          notice.textContent = txt ? ('Gagal kirim: ' + txt) : ('Gagal kirim: ' + res.status)
          notice.className = 'notice error'
          return
        }
        notice.textContent = 'Berhasil kirim testimoni'
        notice.className = 'notice success'
      }).catch(err => {
        notice.textContent = 'Gagal kirim: ' + (err && err.message || 'unknown')
        notice.className = 'notice error'
      }).finally(() => {
        setTimeout(() => {
          fetch(endpoint)
            .then(res => {
              if (!res.ok) throw new Error()
              return res.json()
            })
            .then(data => {
              const items = Array.isArray(data.items) ? data.items : []
              if (items.length) {
                renderFromItems(items)
              }
              setupMarquee()
              notice.textContent = 'Data testimoni diperbarui'
              notice.className = 'notice success'
            })
            .catch(async err => {
              let msg = ''
              try { msg = await err?.message } catch {}
              notice.textContent = 'Gagal perbarui data: ' + (msg || 'unknown')
              notice.className = 'notice error'
            })
        }, 400)
      })

      form.reset()
      submit.disabled = false
    })
  }
}

customElements.define('hotbite-testimonials', HotbiteTestimonials)
