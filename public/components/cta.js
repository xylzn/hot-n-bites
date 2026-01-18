class HotbiteCTA extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          padding:110px 24px 90px;
          text-align:center;
          background:linear-gradient(135deg,var(--primary),var(--accent));
          color:white;
        }
        .title { font-size:30px; font-weight:800; margin-bottom:10px; }
        .subtitle { font-size:14px; opacity:.9; max-width:460px; margin:0 auto 20px; }
        .btn {
          display:inline-block; margin-top:14px;
          padding:14px 36px; border-radius:9999px;
          background:white; color:var(--primary);
          font-weight:600; text-decoration:none;
          box-shadow:0 16px 40px rgba(0,0,0,.45);
          transform:translateY(0);
          transition:transform 150ms ease-out, box-shadow 150ms ease-out;
        }
        .btn:hover {
          transform:translateY(-3px);
          box-shadow:0 22px 50px rgba(0,0,0,.7);
        }
        .note {
          margin-top:14px;
          font-size:12px;
          opacity:.9;
        }
      </style>

      <section class="wrap">
        <div class="title">Siap Kepedesan?</div>
        <div class="subtitle">Pilih menu favorit, atur level pedas, dan tentukan mau makan di spot kampus atau order online.</div>
        <a class="btn" href="#menu">Lihat Menu</a>
        <div class="note">Tulis level pedas dan catatan order kamu di kolom keterangan saat pesan.</div>
      </section>
    `
  }
}

customElements.define('hotbite-cta', HotbiteCTA)
