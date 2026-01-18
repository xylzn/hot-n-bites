class HotbiteHighlights extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          background:rgba(0,0,0,.4);
          padding:80px 24px 90px;
          max-width:full;
          margin:auto;
        }
        .header {
          display:flex;
          justify-content:space-between;
          align-items:flex-end;
          gap:20px;
          margin-bottom:26px;
        }
        .title {
          font-size:24px;
          font-weight:700;
          color:var(--text-invert);
        }
        .subtitle {
          font-size:13px;
          color:rgba(255,255,255,.78);
          max-width:420px;
        }
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:24px;
        }
        .card {
          background:radial-gradient(circle at top left, rgba(255,159,10,.18), rgba(0,0,0,.92));
          padding:22px 20px;
          border-radius:18px;
          box-shadow:0 14px 30px rgba(0,0,0,.75);
          font-weight:600;
          font-size:15px;
          color:var(--text-invert);
          border:1px solid rgba(255,255,255,.12);
          transform:translateY(0);
          transition:transform 140ms ease-out, box-shadow 140ms ease-out, border-color 140ms ease-out;
        }
        .card span {
          display:block;
          margin-top:6px;
          font-weight:400;
          font-size:13px;
          color:rgba(255,255,255,.8);
        }
        .card:hover {
          transform:translateY(-5px);
          box-shadow:0 20px 40px rgba(0,0,0,.9);
          border-color:rgba(255,159,10,.5);
        }
      </style>

      <section class="wrap">
        <div class="header">
          <div class="title">Kenapa pedas kami beda?</div>
          <div class="subtitle">Bukan cuma pedas dan viral, tapi diracik supaya pas buat lidah dan kantong anak kampus.</div>
        </div>
        <div class="grid">
          <div class="card">Pedas khas Jawa Barat 🌶️<span>Base bumbu seblak dengan racikan cabai yang berlapis, bukan cuma pedas doang.</span></div>
          <div class="card">Aroma seblak nagih 😋<span>Wangi kencur dan bawang yang kuat, enak dimakan di kampus atau kosan.</span></div>
          <div class="card">Harga anak kampus 🧑‍🎓<span>Range harga tetap bersahabat, tetap bisa traktir satu geng.</span></div>
          <div class="card">Offline dan online 🚀<span>Bisa makan di spot kampus atau order via platform favorit kamu.</span></div>
        </div>
      </section>
    `
  }
}

customElements.define('hotbite-highlights', HotbiteHighlights)
