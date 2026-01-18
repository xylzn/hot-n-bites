class HotbiteMenu extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .wrap {
          padding:120px 24px;
          max-width:1200px;
          margin:auto;
        }
        .title {
          font-family:'Plus Jakarta Sans';
          font-size:36px;
          font-weight:800;
          margin-bottom:40px;
        }
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:28px;
        }
        .card {
          background:white;
          border-radius:18px;
          box-shadow:0 4px 16px rgba(0,0,0,.06);
          padding:20px;
        }
        .img {
          width:100%;
          height:220px;
          object-fit:cover;
          border-radius:14px;
          margin-bottom:16px;
        }
        .name { font-weight:700; font-size:18px; margin-bottom:4px; }
        .desc { font-size:14px; opacity:.8; margin-bottom:10px; }
      </style>

      <section class="wrap" id="menu">
        <div class="title">Menu Kita</div>
        <div class="grid">
          <div class="card">
            <img class="img" src="../assets/placeholder.jpg">
            <div class="name">Cicos</div>
            <div class="desc">Pedas gurih beraroma seblak.</div>
            <div>Level: 🔥🔥 (Medium)</div>
          </div>

          <div class="card">
            <img class="img" src="../assets/placeholder.jpg">
            <div class="name">Tulang Rangu</div>
            <div class="desc">Lembut, nagih, dan pedas pecah.</div>
            <div>Level: 🔥🔥🔥 (Ekstrim)</div>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('hotbite-menu', HotbiteMenu)
