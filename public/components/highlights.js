class HotbiteHighlights extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          background:var(--bg-alt);
          padding:100px 24px;
          max-width:1200px;
          margin:auto;
        }
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:24px;
        }
        .card {
          background:white;
          padding:24px;
          border-radius:18px;
          box-shadow:0 4px 16px rgba(0,0,0,.06);
          font-weight:600;
          font-size:16px;
        }
      </style>

      <section class="wrap">
        <div class="grid">
          <div class="card">Pedas Khas Jawa Barat 🌶️</div>
          <div class="card">Aroma Seblak Nagih 😋</div>
          <div class="card">Harga Anak Kampus 🧑‍🎓</div>
          <div class="card">Online & Offline 🚀</div>
        </div>
      </section>
    `
  }
}

customElements.define('hotbite-highlights', HotbiteHighlights)
