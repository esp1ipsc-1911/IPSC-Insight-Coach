import { login, register } from './auth.js';

export function renderLogin(container, onSuccess) {
  container.innerHTML = `
    <style>
      * {
        box-sizing: border-box;
      }

      html, body {
        margin: 0;
        padding: 0;
      }

      .ipsc-login-page {
        min-height: 100vh;
        width: 100%;
        background:
          radial-gradient(circle at top right, rgba(224, 182, 73, 0.16), transparent 32%),
          radial-gradient(circle at bottom left, rgba(9, 35, 89, 0.24), transparent 34%),
          linear-gradient(135deg, #04070d 0%, #111111 58%, #17130f 100%);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 24px 18px 40px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        color: #f5f7fb;
      }

      .ipsc-login-shell {
        width: 100%;
        max-width: 430px;
        position: relative;
      }

      .ipsc-topbar {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-bottom: 22px;
      }

      .lang-btn {
        width: 60px;
        height: 46px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(19, 25, 40, 0.78);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        opacity: 0.55;
      }

      .lang-btn.active {
        opacity: 1;
        border: 3px solid #e0b649;
        padding-bottom: 1px;
      }

      .brand-icon {
        width: 96px;
        height: 96px;
        border-radius: 24px;
        background: #e0b649;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 30px rgba(224, 182, 73, 0.18);
        margin-bottom: 34px;
      }

      .brand-hex {
        width: 34px;
        height: 34px;
        border: 5px solid #0b1220;
        clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
      }

      .brand-title {
        line-height: 0.92;
        letter-spacing: -1.5px;
        margin-bottom: 24px;
      }

      .brand-title .top {
        display: block;
        font-size: clamp(58px, 12vw, 78px);
        font-weight: 900;
        color: #f5f7fb;
      }

      .brand-title .bottom {
        display: block;
        font-size: clamp(58px, 12vw, 78px);
        font-weight: 900;
        color: #e0b649;
      }

      .brand-subtitle {
        font-size: clamp(18px, 4.5vw, 24px);
        color: #7d8598;
        font-weight: 500;
        margin-bottom: 46px;
      }

      .field-label {
        font-size: clamp(16px, 4vw, 20px);
        color: #7d8598;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 0.8px;
      }

      .field {
        width: 100%;
        height: 74px;
        border-radius: 18px;
        border: 1px solid #27314a;
        background: rgba(18, 26, 50, 0.92);
        color: #f5f7fb;
        font-size: clamp(19px, 5vw, 24px);
        padding: 0 24px;
        outline: none;
        margin-bottom: 24px;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
      }

      .field::placeholder {
        color: #8b91a1;
      }

      .primary-btn {
        width: 100%;
        height: 78px;
        border: none;
        border-radius: 20px;
        background: #e0b649;
        color: #111111;
        font-size: clamp(22px, 5vw, 28px);
        font-weight: 800;
        cursor: pointer;
        margin-top: 8px;
        box-shadow: 0 12px 30px rgba(224, 182, 73, 0.16);
      }

      .separator {
        display: flex;
        align-items: center;
        gap: 16px;
        color: #7d8598;
        font-size: clamp(16px, 4vw, 18px);
        margin: 26px 0;
      }

      .separator::before,
      .separator::after {
        content: "";
        flex: 1;
        height: 1px;
        background: rgba(255,255,255,0.12);
      }

      .secondary-btn {
        width: 100%;
        height: 74px;
        border-radius: 18px;
        border: 1px solid #2c3446;
        background: rgba(19, 25, 40, 0.76);
        color: #f3f5fb;
        font-size: clamp(20px, 4.7vw, 24px);
        font-weight: 700;
        cursor: pointer;
      }

      .ghost-btn {
        width: 100%;
        height: 64px;
        border-radius: 16px;
        border: 1px solid #2c3446;
        background: transparent;
        color: #d7dbe4;
        font-size: clamp(18px, 4vw, 21px);
        font-weight: 700;
        cursor: pointer;
        margin-top: 14px;
      }

      .register-wrap {
        display: none;
      }

      .error-text {
        color: #ff8a8a;
        font-size: 16px;
        margin-top: 18px;
        min-height: 22px;
      }

      @media (min-width: 700px) {
        .ipsc-login-page {
          align-items: center;
          padding: 32px;
        }

        .ipsc-login-shell {
          max-width: 460px;
        }
      }
    </style>

    <div class="ipsc-login-page">
      <div class="ipsc-login-shell">
        <div class="ipsc-topbar">
          <div class="lang-btn active">🇳🇴</div>
          <div class="lang-btn">🇺🇸</div>
        </div>

        <div class="brand-icon">
          <div class="brand-hex"></div>
        </div>

        <div class="brand-title">
          <span class="top">IPSC</span>
          <span class="bottom">INSIGHT</span>
        </div>

        <div class="brand-subtitle">Analyse. Prognose. Resultat.</div>

        <div class="field-label">E-post</div>
        <input id="email" class="field" type="email" placeholder="navn@epost.no" />

        <div class="field-label">Passord</div>
        <input id="password" class="field" type="password" placeholder="Passord" />

        <button id="loginBtn" class="primary-btn">Logg inn</button>

        <div class="separator">eller</div>

        <button id="showRegisterBtn" class="secondary-btn">Registrer ny bruker</button>

        <div id="registerWrap" class="register-wrap">
          <div class="field-label" style="margin-top: 26px;">Navn</div>
          <input id="name" class="field" type="text" placeholder="Ditt navn" />

          <div class="field-label">Invitasjonskode</div>
          <input id="code" class="field" type="text" placeholder="Invitasjonskode" />

          <button id="registerBtn" class="primary-btn">Opprett bruker</button>
          <button id="cancelRegisterBtn" class="ghost-btn">Avbryt</button>
        </div>

        <div id="error" class="error-text"></div>
      </div>
    </div>
  `;

  const errorEl = document.getElementById('error');
  const registerWrap = document.getElementById('registerWrap');
  const showRegisterBtn = document.getElementById('showRegisterBtn');
  const cancelRegisterBtn = document.getElementById('cancelRegisterBtn');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');

  function showRegisterMode() {
    registerWrap.style.display = 'block';
    showRegisterBtn.style.display = 'none';
    errorEl.innerText = '';
  }

  function showLoginMode() {
    registerWrap.style.display = 'none';
    showRegisterBtn.style.display = 'block';
    errorEl.innerText = '';
  }

  showRegisterBtn.onclick = showRegisterMode;
  cancelRegisterBtn.onclick = showLoginMode;

  loginBtn.onclick = async () => {
    errorEl.innerText = '';

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    const result = await login(email, password);

    if (result.success) {
      onSuccess();
    } else {
      errorEl.innerText = result.error;
    }
  };

  registerBtn.onclick = async () => {
    errorEl.innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const code = document.getElementById('code').value.trim();

    const result = await register(email, password, code, name);

    if (result.success) {
      onSuccess();
    } else {
      errorEl.innerText = result.error;
    }
  };
}
