class HotbiteSpiceLevels extends HTMLElement {
  constructor() {
    super()
    const s = this.attachShadow({ mode: 'closed' })
    s.innerHTML = `
      <style>
        .wrap {
          padding: 40px 24px 120px;
          max-width: 1200px;
          margin: auto;
        }
        .label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          box-shadow: 0 0 0 6px rgba(255, 75, 43, 0.25);
        }
        .title {
          margin-top: 16px;
          font-weight: 800;
          font-size: 32px;
          color: var(--text-invert);
        }
        .subtitle {
          margin-top: 8px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.78);
          max-width: 460px;
        }
        .grid {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 18px;
        }
        .card {
          position: relative;
          border-radius: 18px;
          padding: 18px 16px 18px;
          background: radial-gradient(circle at top left, rgba(255, 159, 10, 0.25), rgba(26, 11, 11, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.55);
          overflow: hidden;
          transform: translateY(0);
          transition: transform 180ms ease-out, box-shadow 180ms ease-out, border-color 180ms ease-out;
        }
        .card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 75, 43, 0.2), transparent 50%, rgba(255, 159, 10, 0.22));
          opacity: 0;
          transition: opacity 180ms ease-out;
        }
        .cardInner {
          position: relative;
          z-index: 1;
        }
        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 22px 40px rgba(0, 0, 0, 0.7);
          border-color: rgba(255, 159, 10, 0.4);
        }
        .card:hover::before {
          opacity: 1;
        }
        .levelLabel {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .pill {
          padding: 3px 8px;
          border-radius: 9999px;
          background: rgba(0, 0, 0, 0.25);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.82);
        }
        .name {
          margin-top: 12px;
          font-size: 17px;
          font-weight: 700;
          color: var(--text-invert);
        }
        .desc {
          margin-top: 6px;
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.8);
        }
        .heat {
          margin-top: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.78);
        }
        .bars {
          display: flex;
          gap: 4px;
        }
        .bar {
          width: 10px;
          height: 18px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.14);
          overflow: hidden;
        }
        .barFill {
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, #ff4b2b, #ff9f0a);
          transform-origin: bottom;
          transform: scaleY(0.25);
          opacity: 0.9;
        }
        .barFill.medium {
          transform: scaleY(0.6);
        }
        .barFill.hot {
          transform: scaleY(0.85);
        }
        .barFill.inferno {
          transform: scaleY(1);
        }
        .tagline {
          margin-top: 28px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.72);
        }
        @media (max-width: 768px) {
          .wrap {
            padding-top: 20px;
            padding-bottom: 80px;
          }
          .title {
            font-size: 26px;
          }
        }
      </style>

      <section class="wrap" id="level-pedas">
        <div>
          <div class="label">
            <span class="dot"></span>
            <span>Level Pedas</span>
          </div>
          <h2 class="title">Pilih level pedas sesuai batas kemampuan kamu.</h2>
          <p class="subtitle">Dari yang cuma hangat di lidah sampai yang bikin teman satu kosan kebangun.</p>
        </div>

        <div class="grid">
          <article class="card">
            <div class="cardInner">
              <div class="levelLabel">
                Santai dulu
                <span class="pill">LV 0</span>
              </div>
              <h3 class="name">Mild Breeze</h3>
              <p class="desc">Pedas tipis manis, cocok buat yang baru kenalan sama seblak spicy.</p>
              <div class="heat">
                <div class="bars">
                  <div class="bar"><div class="barFill"></div></div>
                  <div class="bar"><div class="barFill"></div></div>
                  <div class="bar"><div class="barFill"></div></div>
                </div>
                <span>🔥 Cuma nyeletik dikit</span>
              </div>
            </div>
          </article>

          <article class="card">
            <div class="cardInner">
              <div class="levelLabel">
                Mulai serius
                <span class="pill">LV 1</span>
              </div>
              <h3 class="name">Medium Rush</h3>
              <p class="desc">Pedas gurih yang bikin susah berhenti ngunyah, masih aman buat daily.</p>
              <div class="heat">
                <div class="bars">
                  <div class="bar"><div class="barFill medium"></div></div>
                  <div class="bar"><div class="barFill medium"></div></div>
                  <div class="bar"><div class="barFill"></div></div>
                </div>
                <span>🔥🔥 Bikin keringetan halus</span>
              </div>
            </div>
          </article>

          <article class="card">
            <div class="cardInner">
              <div class="levelLabel">
                Serius banget
                <span class="pill">LV 2</span>
              </div>
              <h3 class="name">Hot Burst</h3>
              <p class="desc">Bibir mulai kebas, tapi nagih. Favorit pejuang seblak kampus.</p>
              <div class="heat">
                <div class="bars">
                  <div class="bar"><div class="barFill hot"></div></div>
                  <div class="bar"><div class="barFill hot"></div></div>
                  <div class="bar"><div class="barFill medium"></div></div>
                </div>
                <span>🔥🔥🔥 Siap satu teko es teh</span>
              </div>
            </div>
          </article>

          <article class="card">
            <div class="cardInner">
              <div class="levelLabel">
                Mode nekat
                <span class="pill">LV 3</span>
              </div>
              <h3 class="name">Inferno Zone</h3>
              <p class="desc">Pedas brutal buat yang suka tantangan. Wajib makan bareng bestie satu tongkrongan.</p>
              <div class="heat">
                <div class="bars">
                  <div class="bar"><div class="barFill inferno"></div></div>
                  <div class="bar"><div class="barFill inferno"></div></div>
                  <div class="bar"><div class="barFill hot"></div></div>
                </div>
                <span>🔥🔥🔥🔥 Bikin konten challenge</span>
              </div>
            </div>
          </article>
        </div>

        <p class="tagline">Semua level bisa dipadukan dengan menu favorit kamu, tinggal tulis level saat pesan.</p>
      </section>
    `
  }
}

customElements.define('hotbite-spice-levels', HotbiteSpiceLevels)

