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
        .counter {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border-radius: 9999px;
          background: rgba(0,0,0,.5);
          border: 1px solid rgba(255,255,255,.16);
          color: rgba(255,255,255,.9);
          font-size: 12px;
        }
        .count {
          font-weight: 700;
          color: rgba(255, 214, 10, 0.95);
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
          overflow-x: 0;
          scrollbar-width: thin;
          scrollbar-color: var(--accent) rgba(255,255,255,.08);
        }
        .track::-webkit-scrollbar { height: 10px; }
        .track::-webkit-scrollbar-track {
          background: rgba(255,255,255,.08);
          border-radius: 9999px;
        }
        .track::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border-radius: 9999px;
          border: 2px solid rgba(0,0,0,.5);
        }
        .track::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, var(--accent), var(--primary));
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
          transition: transform 320ms ease, opacity 320ms ease, box-shadow 320ms ease;
        }
        .card.active {
          opacity: 1;
          transform: scale(1.0);
          border-color: rgba(255,255,255,.2);
        }
        .card.dim {
          opacity: .45;
          transform: scale(.98);
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
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          position: relative;
        }
        .message.long::after {
          content: '…';
          position: absolute;
          right: 0;
          bottom: 0;
          height: 1.2em;
          width: 30%;
          display: block;
          text-align: right;
          padding-right: 10px;
          background: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,.6));
        }
        .modal {
          position: fixed;
          inset: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,.65);
          z-index: 9998;
        }
        .modal.open { display: flex; }
        .modalCard {
          max-width: 600px;
          width: calc(100% - 40px);
          background: rgba(0,0,0,.8);
          border: 1px solid rgba(255,255,255,.2);
          border-radius: 18px;
          color: rgba(255,255,255,.92);
          padding: 16px 18px 18px;
          box-shadow: 0 28px 60px rgba(0,0,0,.9);
          animation: modalIn 220ms ease-out;
        }
        @keyframes modalIn { from { transform: translateY(8px); opacity: .6; } to { transform: none; opacity: 1; } }
        .bubble {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 10000;
          display: none;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 16px;
          background: rgba(0,0,0,.85);
          border: 1px solid rgba(255,255,255,.18);
          color: rgba(255,255,255,.92);
          font-size: 12px;
          box-shadow: 0 18px 40px rgba(0,0,0,.85);
        }
        .bubble.show { display: inline-flex; animation: slideIn 220ms ease-out; }
        .bubble.hide { animation: fadeOut 260ms ease-in forwards; }
        @keyframes slideIn { from { transform: translateX(12px); opacity: .6; } to { transform: none; opacity: 1; } }
        @keyframes fadeOut { to { transform: translateX(12px); opacity: 0; } }
        .formWrap {
          margin-top: 20px;
          padding: 18px 18px 20px;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.18);
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
          pointer-events: none;
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
          .counter {
            margin-left: 0;
          }
          .card {
            flex: 0 0 260px;
            max-width: 260px;
          }
          .track {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding-bottom: 6px;
          }
          .card {
            scroll-snap-align: center;
          }
          .track.auto {
            animation: none;
          }
        }
      </style>

      <section class="wrap" id="testimoni">
        <div class="header">
          <div class="title">Cerita mereka setelah kepedesan.</div>
          <p class="subtitle">Testimoni dari teman-teman kampus yang sudah nyobain berbagai level pedas Hot N’ Bite.</p>
          <div class="counter" aria-live="polite"><span class="count">0</span> testimoni</div>
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
        <div class="modal" aria-hidden="true">
          <div class="modalCard">
            <div class="product mProduct"></div>
            <div class="name mName"></div>
            <div class="level mLevel"></div>
            <p class="message mMessage"></p>
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
               <select class="select" name="product" required>
                  <option value="">Pilih Produk</option>
                  <option value="Cicos Seblak Bowl">Cicos Seblak Bowl</option> 
                  <option value="Tulang Rangu Pedas">Tulang Rangu Pedas</option>
                  <option value="Cicos Seblak Bowl & Tulang Rangu Pedas">Cicos Seblak Bowl & Tulang Rangu Pedas</option>
                </select>
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
          </form>
        </div>
      </section>
    `

    const track = s.querySelector('.track')
    const form = s.querySelector('form')
    const submit = s.querySelector('.submit')
    const endpoint = window.__API_URL || '/api/testimonials'
    // notice dihapus: gunakan bubble global
    const showBubble = (text, type='info') => {
      let b = document.querySelector('.hotbite-bubble')
      if (!b) {
        b = document.createElement('div')
        b.className = 'hotbite-bubble'
        document.body.appendChild(b)
      }
      b.textContent = text
      b.classList.remove('hide')
      b.classList.add('show')
      b.classList.remove('error','success','info')
      if (type === 'error') b.classList.add('error')
      else if (type === 'success') b.classList.add('success')
      else b.classList.add('info')
      setTimeout(() => {
        b.classList.add('hide')
        setTimeout(() => { try { b.remove() } catch {} }, 500)
      }, 5000)
    }

    const initialCards = Array.from(track.children)
    const countEl = s.querySelector('.count')
    const isMobile = () => window.matchMedia('(max-width: 768px)').matches
    const setCount = n => { try { countEl.textContent = String(n || 0) } catch {} }
    const modal = s.querySelector('.modal')
    const mProduct = s.querySelector('.mProduct')
    const mName = s.querySelector('.mName')
    const mLevel = s.querySelector('.mLevel')
    const mMessage = s.querySelector('.mMessage')
    let rafId = null
    let offsetX = 0
    let speed = 0.08
    let cardWidth = 320 + 16
    let activeIdx = 0
    const MAX_LEN = 160
    const getCardWidth = () => {
      try {
        const first = track.querySelector('.card')
        if (!first) return cardWidth
        const w = first.getBoundingClientRect().width
        return Math.round(w + 16)
      } catch { return cardWidth }
    }

    const setupMarquee = () => {
      const cards = Array.from(track.children)
      track.classList.remove('auto')
      if (cards.length > 3 && !isMobile()) {
        const clone = cards.map(card => card.cloneNode(true))
        clone.forEach(node => track.appendChild(node))
        // Continuous RAF animation with seamless modulo
        const totalCards = track.children.length
        const loopWidth = totalCards * cardWidth
        const step = () => {
          offsetX += speed
          if (offsetX >= loopWidth) offsetX -= loopWidth
          track.style.transform = 'translateX(' + (-offsetX) + 'px)'
          rafId = requestAnimationFrame(step)
        }
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(step)
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
        const msg = item.message || ''
        messageEl.textContent = msg

        card.appendChild(productEl)
        card.appendChild(nameEl)
        card.appendChild(levelEl)
        card.appendChild(messageEl)

        track.appendChild(card)
        try {
          const truncatedLayout = messageEl.scrollHeight > Math.ceil(messageEl.clientHeight + 1)
          const truncatedText = (msg || '').length > MAX_LEN
          if (truncatedLayout || truncatedText) {
            messageEl.classList.add('long')
            messageEl.style.cursor = 'pointer'
            messageEl.addEventListener('click', () => {
              mProduct.textContent = productEl.textContent
              mName.textContent = nameEl.textContent
              mLevel.textContent = levelEl.textContent
              mMessage.textContent = msg
              modal.classList.add('open')
            })
          }
        } catch {}
      })
      applyStates()
      cardWidth = getCardWidth()
    }

    const renderFallback = () => {
      track.innerHTML = ''
      initialCards.forEach(card => {
        track.appendChild(card.cloneNode(true))
      })
      applyStates()
      cardWidth = getCardWidth()
    }

    const applyStates = () => {
      const cards = Array.from(track.children)
      cards.forEach((c, i) => {
        c.classList.remove('active','dim')
        if (isMobile()) {
          if (i === activeIdx) c.classList.add('active')
          else c.classList.add('dim')
        } else {
          c.classList.add('active')
        }
      })
    }

    const setupMobileScroll = () => {
      if (!isMobile()) return
      const originalCount = Array.from(track.children).length
      const onScroll = () => {
        const sl = track.scrollLeft
        activeIdx = Math.round(sl / cardWidth)
        applyStates()
      }
      track.addEventListener('scroll', onScroll, { passive: true })
      try {
        const midIdx = Math.floor(originalCount / 2)
        const mid = Math.max(0, Math.floor(midIdx * cardWidth - (track.clientWidth - cardWidth) / 2))
        track.scrollLeft = mid
        activeIdx = midIdx
        applyStates()
      } catch {}
    }

    document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open') })
    modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open') })

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
          setCount(items.length)
          setupMarquee()
          setupMobileScroll()
        })
        .catch(err => {
          renderFallback()
          setupMarquee()
          setupMobileScroll()
          showBubble('Gagal memuat data: ' + (err && err.message || 'unknown'), 'error')
          setCount(0)
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
      showBubble('Mengirim testimoni…','info')

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
          showBubble(txt ? ('Gagal kirim: ' + txt) : ('Gagal kirim: ' + res.status), 'error')
          return
        }
        showBubble('Testimoni berhasil dikirim','success')
      }).catch(async err => {
        showBubble('Gagal kirim: ' + (err && err.message || 'unknown'), 'error')
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
                setCount(items.length)
              }
              setupMobileScroll()
              setupMarquee()
              showBubble('Data testimoni diperbarui','success')
            })
            .catch(() => {
              // Biarkan count tidak berubah saat gagal refresh
            })
        }, 400)
        setTimeout(() => { submit.disabled = false }, 500)
      })

      form.reset()
    })
  }
}

customElements.define('hotbite-testimonials', HotbiteTestimonials)
