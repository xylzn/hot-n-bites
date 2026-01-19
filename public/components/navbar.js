class HotbiteNavbar extends HTMLElement {
  constructor(){
    super()
    const shadow = this.attachShadow({mode:"closed"})
    shadow.innerHTML = `
      <style>
        .navShell {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 1180px;
          z-index: 120;
        }
        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 20px;
          border-radius: 9999px;
          background: radial-gradient(circle at top left, rgba(255, 159, 10, 0.16), rgba(0, 0, 0, 0.72));
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 15px;
          color: var(--text-invert);
          text-decoration: none;
        }
        .brandLogo {
          width: 28px;
          height: 28px;
          border-radius: 9999px;
          box-shadow: 0 0 0 6px rgba(255, 75, 43, 0.24);
          object-fit: cover;
          display:block;
        }
        .links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .link {
          position: relative;
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          padding-block: 4px;
        }
        .link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          border-radius: 9999px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 160ms ease-out;
        }
        .link:hover::after {
          width: 100%;
        }
        .linkPrimary {
          padding-inline: 12px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.32);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .toggle {
          display: none;
          width: 34px;
          height: 34px;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: rgba(0, 0, 0, 0.35);
          color: rgba(255, 255, 255, 0.88);
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
        }
        .mobileLinks {
          display: none;
        }
        @media (max-width: 768px) {
          .navShell {
            top: 14px;
            width: calc(100% - 28px);
          }
          .links {
            display: none;
          }
          .toggle {
            display: inline-flex;
          }
          .navShell.open .mobileLinks {
            display: flex;
            position: absolute;
            right: 0;
            top: 54px;
            padding: 10px 14px;
            border-radius: 16px;
            background: rgba(0, 0, 0, 0.86);
            border: 1px solid rgba(255, 255, 255, 0.14);
            flex-direction: column;
            gap: 10px;
            min-width: 170px;
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.85);
          }
          .navShell.open .mobileLinks .link {
            font-size: 13px;
          }
        }
      </style>

      <div class="navShell">
        <nav class="nav">
          <a class="brand" href="#beranda">
            <img class="brandLogo" src="./assets/Hot n Bites.jpeg" alt="Hot N’ Bite">
            <span>Hot N’ Bite</span>
          </a>
          <div class="links">
            <a class="link" href="#beranda">Beranda</a>
            <a class="link" href="#about">Tentang</a>
            <a class="link" href="#menu">Menu</a>
            <a class="link" href="#testimoni">Testimoni</a>
            <a class="link linkPrimary" href="#location">Lokasi</a>
          </div>
          <button class="toggle" aria-label="Buka navigasi">☰</button>
        </nav>
        <div class="mobileLinks">
          <a class="link" href="#beranda">Beranda</a>
          <a class="link" href="#about">Tentang</a>
          <a class="link" href="#menu">Menu</a>
          <a class="link" href="#location">Lokasi</a>
          <a class="link" href="#testimoni">Testimoni</a>
        </div>
      </div>
    `

    const shell = shadow.querySelector('.navShell')
    const toggle = shadow.querySelector('.toggle')
    const mobileLinks = shadow.querySelectorAll('.mobileLinks .link')

    toggle.addEventListener('click', () => {
      shell.classList.toggle('open')
    })

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        shell.classList.remove('open')
      })
    })
  }
}

customElements.define('hotbite-navbar', HotbiteNavbar)
