class HotbiteLocation extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap { padding:100px 24px 110px; max-width:1200px; margin:auto; }
        .title { font-weight:800; font-size:28px; margin-bottom:10px; color:var(--text-invert); }
        .titleRow { display:flex; align-items:center; gap:10px; }
        .titleIcon { width:28px; height:28px; border-radius:9999px; object-fit:cover; box-shadow:0 0 0 6px rgba(255,75,43,.24); }
        .subtitle { font-size:14px; color:rgba(255,255,255,.8); margin-bottom:22px; }
        .row {
          display:flex;
          flex-wrap:wrap;
          gap:20px;
          align-items:flex-start;
        }
        .col {
          flex:1;
          min-width:240px;
        }
        .map {
          width:100%;
          min-height:260px;
          border-radius:18px;
          border:1px solid rgba(255,255,255,.15);
          background:radial-gradient(circle at top left, rgba(255,159,10,.2), rgba(0,0,0,.9));
          box-shadow:0 20px 40px rgba(0,0,0,.85);
          overflow:hidden;
        }
        .map iframe { width:100%; height:220px; display:block; }
        .badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          padding:4px 10px;
          border-radius:9999px;
          background:rgba(0,0,0,.45);
          border:1px solid rgba(255,255,255,.18);
          font-size:11px;
          color:rgba(255,255,255,.82);
          margin-bottom:10px;
        }
        .badgeDot {
          width:8px;
          height:8px;
          border-radius:9999px;
          background:var(--accent);
          box-shadow:0 0 0 6px rgba(255,159,10,.26);
        }
        .whatsappCard {
          border-radius:18px;
          padding:16px 18px 18px;
          background:rgba(0,0,0,.75);
          border:1px solid rgba(255,255,255,.18);
          box-shadow:0 18px 40px rgba(0,0,0,.85);
          color:rgba(255,255,255,.9);
          font-size:13px;
        }
        .whatsappRow {
          display:flex;
          align-items:center;
          gap:10px;
          margin-top:8px;
        }
        .whatsappIcon {
          width:22px;
          height:22px;
          border-radius:9999px;
        }
        .waLink {
          display:inline-flex;
          align-items:center;
          gap:6px;
          margin-top:10px;
          font-size:13px;
          color:rgba(255,255,255,.92);
          text-decoration:none;
        }
        .waLink span {
          padding:4px 8px;
          border-radius:9999px;
          background:rgba(0,0,0,.6);
          border:1px solid rgba(255,255,255,.2);
          font-size:11px;
        }
        @media (max-width: 768px) {
          .wrap {
            padding-bottom:80px;
          }
        }
      </style>

      <section class="wrap" id="location">
        <div class="titleRow">
          <img class="titleIcon" src="assets/placeholder.png" alt="Hot N’ Bite">
          <div class="title">Lokasi & kontak order</div>
        </div>
        <div class="subtitle">Kamu bisa datang langsung ke spot kampus atau order via WhatsApp untuk ambil di tempat.</div>

        <div class="row">
          <div class="col">
            <div class="badge">
              <span class="badgeDot"></span>
              <span>Offline</span>
            </div>
            <div class="map">
              <iframe
                src="https://maps.google.com/maps?q=-6.94128,107.60587&output=embed"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
          <div class="col">
            <div class="badge">
              <span class="badgeDot"></span>
              <span>WhatsApp</span>
            </div>
            <div class="whatsappCard">
              <div>Chat langsung untuk tanya stok menu, level pedas, atau pre-order sebelum jam kuliah selesai.</div>
              <div class="whatsappRow">
                <img class="whatsappIcon" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="">
                <div>
                  <div>Jiya Zara Mutiara - Bisnis Digital</div>
                  <div style="font-size:12px; opacity:.9;">+62 858-6421-4811</div>
                </div>
              </div>
              <a class="waLink" href="https://wa.me/6285864214811" target="_blank" rel="noreferrer">
                <span>Chat sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    `
  }
}
customElements.define('hotbite-location', HotbiteLocation)
