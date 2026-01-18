class HotbiteCTA extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          padding:120px 24px;
          text-align:center;
          background:linear-gradient(135deg,var(--primary),var(--accent));
          color:white;
        }
        .title { font-size:32px; font-weight:800; margin-bottom:18px; }
        .btn {
          display:inline-block; margin-top:14px;
          padding:14px 36px; border-radius:9999px;
          background:white; color:var(--primary);
          font-weight:600; text-decoration:none;
        }
      </style>

      <section class="wrap">
        <div class="title">Siap Kepedesan?</div>
        <div style="opacity:.9;">Datang langsung atau order online!</div>
        <a class="btn" href="#menu">Lihat Menu</a>
      </section>
    `
  }
}

customElements.define('hotbite-cta', HotbiteCTA)
