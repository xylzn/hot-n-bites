class HotbiteHero extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .wrap {
          padding:140px 24px 120px;
          max-width:1200px;
          margin:auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:56px;
        }
        .title {
          font-family:'Poppins', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          font-size:46px;
          font-weight:800;
          line-height:1.1;
          color:var(--text-invert);
        }
        .sub {
          font-size:15px;
          color:rgba(255,255,255,.82);
          margin:14px 0 26px;
          max-width:420px;
        }
        .cta {
          display:inline-block;
          padding:14px 34px;
          border-radius:9999px;
          background:linear-gradient(135deg, var(--primary), var(--accent));
          color:white;
          font-weight:600;
          text-decoration:none;
          font-size:14px;
          box-shadow:0 14px 30px rgba(0,0,0,.45);
          transform:translateY(0);
          transition:transform 160ms ease-out, box-shadow 160ms ease-out;
        }
        .cta:hover {
          transform:translateY(-2px);
          box-shadow:0 20px 40px rgba(0,0,0,.7);
        }
        .ctaSecondary {
          display:inline-flex;
          align-items:center;
          gap:8px;
          margin-left:18px;
          font-size:13px;
          color:rgba(255,255,255,.78);
          text-decoration:none;
        }
        .ctaSecondaryDot {
          width:8px;
          height:8px;
          border-radius:9999px;
          background:var(--accent);
          box-shadow:0 0 0 6px rgba(255,159,10,.25);
        }
        .badgeRow {
          display:flex;
          align-items:center;
          gap:10px;
          margin-bottom:14px;
        }
        .badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:6px 14px;
          border-radius:9999px;
          background:rgba(0,0,0,.34);
          color:rgba(255,255,255,.8);
          font-size:11px;
          letter-spacing:.12em;
          text-transform:uppercase;
        }
        .badgeIcon {
          font-size:13px;
        }
        .stats {
          display:flex;
          flex-wrap:wrap;
          gap:18px;
          margin-top:26px;
          font-size:12px;
          color:rgba(255,255,255,.7);
        }
        .statNumber {
          font-weight:700;
          color:var(--text-invert);
        }
        .imgWrap {
          position:relative;
          width:460px;
          height:400px;
        }
        .blob {
          position:absolute;
          width:100%;
          height:100%;
          top:0; left:0;
          z-index:1;
          filter:drop-shadow(0 40px 80px rgba(0,0,0,.85));
        }
        .food {
          position:absolute;
          top:50%; left:50%;
          width:360px;
          z-index:2;
          animation:heroFloat 5s ease-in-out infinite;
        }
        .content {
          animation:fadeUp 700ms ease-out both;
        }
        @keyframes heroFloat {
          0%, 100% { transform:translate(-50%,-50%) translateY(0); }
          50% { transform:translate(-50%,-50%) translateY(-10px); }
        }
        @keyframes fadeUp {
          from {
            opacity:0;
            transform:translateY(14px);
          }
          to {
            opacity:1;
            transform:translateY(0);
          }
        }
        @media (max-width: 900px) {
          .wrap {
            padding-top:120px;
            padding-bottom:80px;
            flex-direction:column;
            text-align:left;
          }
          .imgWrap {
            order:-1;
            width:100%;
            max-width:420px;
            margin:auto;
          }
          .title {
            font-size:34px;
          }
          .sub {
            max-width:none;
          }
          .stats {
            gap:12px;
          }
          .ctaSecondary {
            display:inline-flex;
            margin-left:0;
            margin-top:10px;
          }
        }
        @media (max-width: 640px) {
          .wrap {
            padding-inline:20px;
          }
          .title {
            font-size:30px;
          }
        }
      </style>

      <section class="wrap" id="beranda">
        <div class="content">
          <div class="badgeRow">
            <div class="badge">
              <span class="badgeIcon">🌶️</span>
              <span>Street spicy made aesthetic</span>
            </div>
          </div>
          <div class="title">Seblak pedas aesthetic<br>buat tongkrongan kampus.</div>
          <div class="sub">Racikan bumbu seblak khas Jawa Barat, level pedas bisa diatur, plating kece buat konten, harga tetap anak kampus.</div>
          <div>
            <a class="cta" href="https://wa.me/6285864214811">Beli Sekarang!🔥</a>
          </div>
          <div class="stats">
            <div><span class="statNumber">+500</span> porsi terjual di area kampus</div>
            <div><span class="statNumber">4</span> level pedas fleksibel</div>
            <div><span class="statNumber">Daily</span> buka offline & online</div>
          </div>
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
