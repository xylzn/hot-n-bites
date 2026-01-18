class HotbiteHero extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .wrap {
          padding:160px 24px 120px;
          max-width:1200px;
          margin:auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:50px;
        }
        .title {
          font-family:'Plus Jakarta Sans', sans-serif;
          font-size:48px;
          font-weight:800;
          line-height:1.1;
          color:var(--text);
        }
        .sub {
          font-size:16px;
          opacity:.8;
          margin:12px 0 24px;
        }
        .cta {
          display:inline-block;
          padding:14px 36px;
          border-radius:9999px;
          background:linear-gradient(135deg, var(--primary), var(--accent));
          color:white;
          font-weight:600;
          text-decoration:none;
          font-size:15px;
        }
        .imgWrap {
          position:relative;
          width:480px;
          height:420px;
        }
        .blob {
          position:absolute;
          width:100%;
          height:100%;
          top:0; left:0;
          z-index:1;
        }
        .food {
          position:absolute;
          top:50%; left:50%;
          width:380px;
          transform:translate(-50%,-50%);
          border-radius:18px;
          z-index:2;
        }
      </style>

      <section class="wrap">
        <div>
          <div class="title">Seblak Pedas<br>yang Bikin Nagih 🔥</div>
          <div class="sub">Aroma seblak khas, pedas nagih, harga mahasiswa.<br>Flatlay aesthetic buat foto-foto juga cakep.</div>
          <a class="cta" href="#menu">Lihat Menu</a>
        </div>

        <div class="imgWrap">
          <img class="blob" src="./assets/blob.svg">
          <img class="food" src="./assets/placeholder.png">
        </div>
      </section>
    `
  }
}

customElements.define('hotbite-hero', HotbiteHero)
