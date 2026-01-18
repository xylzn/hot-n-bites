class HotbiteFooter extends HTMLElement {
  constructor(){
    super()
    const s = this.attachShadow({mode:"closed"})
    s.innerHTML = `
      <style>
        .wrap {
          padding:40px 24px;
          text-align:center;
          font-size:14px;
          opacity:.6;
        }
      </style>

      <footer class="wrap">© Hot N’ Bite. All spicy rights reserved 🌶️</footer>
    `
  }
}

customElements.define('hotbite-footer', HotbiteFooter)
