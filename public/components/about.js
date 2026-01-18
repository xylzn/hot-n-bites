class HotbiteAbout extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          padding:120px 24px;
          max-width:1200px;
          margin:auto;
          display:flex;
          gap:60px;
          align-items:center;
        }
        .title {
          font-family:'Plus Jakarta Sans';
          font-weight:800;
          font-size:32px;
          margin-bottom:16px;
        }
        .text { font-size:16px; opacity:.85; line-height:1.5; }
      </style>

      <section class="wrap" id="about">
        <div>
          <div class="title">Tentang Hot N' Bite</div>
          <div class="text">
            Hot N’ Bite hadir menjawab tren makanan pedas & viral.
            Aroma seblak, pedas khas Jawa Barat, dan harga yang ramah mahasiswa.
          </div>
        </div>
        <img src="../assets/doodles.svg" width="240">
      </section>
    `
  }
}

customElements.define('hotbite-about', HotbiteAbout)
