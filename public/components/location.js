class HotbiteLocation extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap { padding:100px 24px; max-width:1200px; margin:auto; }
        .title { font-weight:800; font-size:28px; margin-bottom:20px; }
        .grid { display:flex; gap:20px; flex-wrap:wrap; margin-top:14px; }
        .item { display:flex; align-items:center; gap:8px; font-size:15px; }
        img { width:24px; height:24px; }
      </style>

      <section class="wrap" id="location">
        <div class="title">Lokasi & Platform</div>
        <div>Offline: Universitas Teknologi Bandung</div>

        <div class="grid" style="margin-top:20px;">
          <div class="item"><img src="https://cdn-icons-png.flaticon.com/512/3046/3046120.png"> TikTokShop</div>
          <div class="item"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968574.png"> ShopeeFood</div>
          <div class="item"><img src="https://cdn-icons-png.flaticon.com/512/6124/6124992.png"> GoFood</div>
          <div class="item"><img src="https://cdn-icons-png.flaticon.com/512/6124/6124995.png"> GrabFood</div>
        </div>
      </section>
    `
  }
}
customElements.define('hotbite-location', HotbiteLocation)
