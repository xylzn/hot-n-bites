class HotbiteAbout extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          padding:110px 24px 90px;
          max-width:1200px;
          margin:auto;
          display:flex;
          gap:60px;
          align-items:center;
        }
        .title {
          font-family:'Poppins', system-ui, sans-serif;
          font-weight:800;
          font-size:30px;
          margin-bottom:18px;
          color:var(--text-invert);
        }
        .text {
          font-size:14px;
          line-height:1.7;
          color:rgba(255,255,255,.8);
        }
        .pillRow {
          display:flex;
          flex-wrap:wrap;
          gap:8px;
          margin-bottom:16px;
        }
        .pill {
          padding:4px 10px;
          border-radius:9999px;
          border:1px solid rgba(255,255,255,.24);
          font-size:11px;
          color:rgba(255,255,255,.82);
          background:rgba(0,0,0,.4);
        }
        .image {
          max-width:220px;
          width:100%;
          border-radius:50%;
          border: 2px solid rgba(255,255,255,.22);
          box-shadow: 0 26px 50px rgba(0,0,0,.9);
          object-fit: cover;
        }
        @media (max-width: 900px) {
          .wrap {
            padding-top:90px;
            padding-bottom:80px;
            flex-direction:column-reverse;
            gap:30px;
          }
          .title {
            font-size:26px;
          }
        }
      </style>

      <section class="wrap" id="about">
        <div>
          <div class="title">Tentang Hot N' Bite</div>
          <div class="text">
            Hot N’ Bite lahir dari tongkrongan mahasiswa yang suka jajan pedas.
            Kami meracik seblak dan menu pedas lain dengan tampilan lebih clean dan aesthetic,
            supaya bisa jadi teman nongkrong, teman begadang, sampai bahan konten sosial media kamu.
          </div>
          <div class="pillRow">
            <div class="pill">Racikan bumbu sendiri</div>
            <div class="pill">Level pedas fleksibel</div>
            <div class="pill">Harga ramah mahasiswa</div>
          </div>
        </div>
         <img class="image" src="./assets/Hot n Bites.jpeg" width="220" alt="Hot N’ Bite Logo">
      </section>
    `
  }
}

customElements.define('hotbite-about', HotbiteAbout)
