class HotbiteMenu extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .wrap {
          padding:110px 24px 80px;
          max-width:1200px;
          margin:auto;
        }
        .title {
          font-family:'Poppins', system-ui, sans-serif;
          font-size:32px;
          font-weight:800;
          margin-bottom:10px;
          color:var(--text-invert);
        }
        .subtitle {
          font-size:14px;
          color:rgba(255,255,255,.78);
          margin-bottom:34px;
        }
        .grid {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:24px;
        }
        .card {
          position:relative;
          border-radius:22px;
          padding:18px 18px 20px;
          background:radial-gradient(circle at top left, rgba(255,159,10,.16), rgba(0,0,0,.86));
          border:1px solid rgba(255,255,255,.16);
          box-shadow:0 18px 40px rgba(0,0,0,.8);
          overflow:hidden;
          transform:translateY(0);
          transition:transform 170ms ease-out, box-shadow 170ms ease-out, border-color 170ms ease-out;
        }
        .card::before {
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(135deg, rgba(255,75,43,.18), transparent 45%, rgba(255,214,10,.18));
          opacity:0;
          transition:opacity 170ms ease-out;
        }
        .cardInner {
          position:relative;
          z-index:1;
        }
        .card:hover {
          transform:translateY(-6px);
          box-shadow:0 24px 60px rgba(0,0,0,.9);
          border-color:rgba(255,159,10,.45);
        }
        .card:hover::before {
          opacity:1;
        }
        .img {
          width:100%;
          height:220px;
          object-fit:cover;
          border-radius:16px;
          margin-bottom:16px;
        }
        .name { font-weight:700; font-size:18px; margin-bottom:4px; color:var(--text-invert); }
        .desc { font-size:13px; color:rgba(255,255,255,.78); margin-bottom:10px; }
        .metaRow {
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:6px;
          font-size:13px;
          color:rgba(255,255,255,.88);
        }
        .price {
          font-weight:700;
        }
        .chip {
          padding:4px 8px;
          border-radius:9999px;
          font-size:11px;
          background:rgba(0,0,0,.4);
          border:1px solid rgba(255,255,255,.14);
          color:rgba(255,255,255,.88);
        }
        .level {
          font-size:12px;
          color:rgba(255,255,255,.86);
          margin-top:6px;
        }
        @media (max-width: 768px) {
          .wrap {
            padding-top:90px;
            padding-bottom:70px;
          }
          .title {
            font-size:26px;
          }
        }
      </style>

      <section class="wrap" id="menu">
        <div class="title">Menu Hot N' Bite</div>
        <div class="subtitle">Menu utama yang paling sering diorder anak kampus, tinggal pilih level pedas.</div>
        <div class="grid">
          <div class="card">
            <div class="cardInner">
              <img class="img" src="../assets/cicos.jpeg">
              <div class="name">Cicos Seblak Bowl</div>
              <div class="desc">Campuran keripik dan seblak kering gurih pedas, tekstur crunchy nagih.</div>
              <div class="metaRow">
                <span class="price">Rp12.000</span>
                <span class="chip">Best seller</span>
              </div>
              <div class="level">Rekomendasi level: Medium Rush atau Hot Burst.</div>
            </div>
          </div>

          <div class="card">
            <div class="cardInner">
              <img class="img" src="../assets/Tulang Rangu.jpeg">
              <div class="name">Tulang Rangu Pedas</div>
              <div class="desc">Tulang rangu lembut dengan kuah seblak kental, cocok buat pecinta pedas berat.</div>
              <div class="metaRow">
                <span class="price">Rp15.000</span>
                <span class="chip">Extra spicy</span>
              </div>
              <div class="level">Rekomendasi level: Hot Burst atau Inferno Zone.</div>
            </div>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('hotbite-menu', HotbiteMenu)
