class HotbiteNavbar extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .nav {
          position: fixed;
          top: 20px; left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 1200px;
          height: 64px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 28px;
          background: rgba(255,255,255,0.6);
          border:1px solid rgba(255,255,255,0.4);
          backdrop-filter: blur(12px);
          border-radius:9999px;
          box-shadow:0 4px 16px rgba(0,0,0,.06);
          z-index:100;
        }
        a {
          font-size:14px;
          font-weight:500;
          color:var(--text);
          text-decoration:none;
        }
        a:hover { opacity:.6; }
      </style>

      <nav class="nav">
        <div style="font-weight:700;">Hot N’ Bite</div>
        <div style="display:flex; gap:20px;">
          <a href="#menu">Menu</a>
          <a href="#about">Tentang</a>
          <a href="#location">Lokasi</a>
        </div>
      </nav>
    `
  }
}

customElements.define('hotbite-navbar', HotbiteNavbar)
