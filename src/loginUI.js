import { login, register } from './auth.js';

export function renderLogin(container, onSuccess) {
  container.innerHTML = `
    <div style="
      min-height: 100vh;
      margin: 0;
      display: flex;
      align-items: stretch;
      justify-content: center;
      background:
        radial-gradient(circle at top right, rgba(215,167,54,0.18), transparent 35%),
        radial-gradient(circle at bottom left, rgba(10,50,120,0.22), transparent 35%),
        linear-gradient(135deg, #05070c 0%, #121212 55%, #181510 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
      color: #f3f4f6;
      padding: 24px;
      box-sizing: border-box;
    ">
      <div style="
        width: 100%;
        max-width: 760px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px 24px;
        box-sizing: border-box;
      ">
        <div style="
          width: 96px;
          height: 96px;
          border-radius: 24px;
          background: #e0b649;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 36px;
          box-shadow: 0 10px 30px rgba(224, 182, 73, 0.18);
        ">
          <div style="
            width: 34px;
            height: 34px;
            border: 5px solid #0b1220;
            clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
            box-sizing: border-box;
          "></div>
        </div>

        <div style="
          font-size: 72px;
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: -2px;
          margin-bottom: 20px;
        ">
          <div style="color: #f5f7fb;">IPSC</div>
          <div style="color: #e0b649;">INSIGHT</div>
        </div>

        <div style="
          font-size: 28px;
          color: #7f8799;
          margin-bottom: 54px;
          font-weight: 500;
        ">
          Analyse. Prognose. Resultat.
        </div>

        <div style="
          font-size: 22px;
          color: #7f8799;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        ">
          E-post
        </div>

        <input
          id="email"
          type="email"
          placeholder="navn@epost.no"
          style="
            width: 100%;
            height: 96px;
            border-radius: 22px;
            border: 1px solid #27314a;
            background: rgba(18, 26, 50, 0.92);
            color: #f5f7fb;
            font-size: 28px;
            padding: 0 32px;
            box-sizing: border-box;
            outline: none;
            margin-bottom: 28px;
          "
        />

        <div style="
          font-size: 22px;
          color: #7f8799;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
        ">
          Passord
        </div>

        <input
          id="password"
          type="password"
          placeholder="Passord"
          style="
            width: 100%;
            height: 96px;
            border-radius: 22px;
            border: 1px solid #27314a;
            background: rgba(18, 26, 50, 0.92);
            color: #f5f7fb;
            font-size: 28px;
            padding: 0 32px;
            box-sizing: border-box;
            outline: none;
            margin-bottom: 24px;
          "
        />

        <div id="registerFields" style="display:none;">
          <div style="
            font-size: 22px;
            color: #7f8799;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            Navn
          </div>

          <input
            id="name"
            type="text"
            placeholder="Ditt navn"
            style="
              width: 100%;
              height: 96px;
              border-radius: 22px;
              border: 1px solid #27314a;
              background: rgba(18, 26, 50, 0.92);
              color: #f5f7fb;
              font-size: 28px;
              padding: 0 32px;
              box-sizing: border-box;
              outline: none;
              margin-bottom: 24px;
            "
          />

          <div style="
            font-size: 22px;
            color: #7f8799;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
          ">
            Invitasjonskode
          </div>

          <input
            id="code"
            type="text"
            placeholder="Invitasjonskode"
            style="
              width: 100%;
              height: 96px;
              border-radius: 22px;
              border: 1px solid #27314a;
              background: rgba(18, 26, 50, 0.92);
              color: #f5f7fb;
              font-size: 28px;
              padding: 0 32px;
              box-sizing: border-box;
              outline: none;
              margin-bottom: 24px;
            "
          />
        </div>

        <button
          id="loginBtn"
          style="
            width: 100%;
            height: 110px;
            border: none;
            border-radius: 24px;
            background: #e0b649;
            color: #111111;
            font-size: 34px;
            font-weight: 800;
            cursor: pointer;
            margin-top: 8px;
            margin-bottom: 18px;
            box-shadow: 0 12px 30px rgba(224, 182, 73, 0.16);
          "
        >
          Logg inn
        </button>

        <button
          id="toggleRegisterBtn"
          style="
            width: 100%;
            height: 88px;
            border: 1px solid #2c3446;
            border-radius: 22px;
            background: rgba(255,255,255,0.03);
            color: #d7dbe4;
            font-size: 28px;
            font-weight: 700;
            cursor: pointer;
          "
        >
          Registrer bruker
        </button>

        <button
          id="registerBtn"
          style="
            display:none;
            width: 100%;
            height: 110px;
            border: none;
            border-radius: 24px;
            background: #e0b649;
            color: #111111;
            font-size: 34px;
            font-weight: 800;
            cursor: pointer;
            margin-top: 18px;
            box-shadow: 0 12px 30px rgba(224, 182, 73, 0.16);
          "
        >
          Opprett bruker
        </button>

        <button
          id="cancelRegisterBtn"
          style="
            display:none;
            width: 100%;
            height: 88px;
            border: 1px solid #2c3446;
            border-radius: 22px;
            background: rgba(255,255,255,0.03);
            color: #d7dbe4;
            font-size: 28px;
            font-weight: 700;
            cursor: pointer;
            margin-top: 16px;
          "
        >
          Avbryt
        </button>

        <p
          id="error"
          style="
            color: #ff7a7a;
            font-size: 22px;
            margin-top: 22px;
            min-height: 30px;
          "
        ></p>
      </div>
    </div>
  `;

  const errorEl = document.getElementById('error');
  const registerFields = document.getElementById('registerFields');
  const toggleRegisterBtn = document.getElementById('toggleRegisterBtn');
  const registerBtn = document.getElementById('registerBtn');
  const cancelRegisterBtn = document.getElementById('cancelRegisterBtn');
  const loginBtn = document.getElementById('loginBtn');

  function showRegisterMode() {
    registerFields.style.display = 'block';
    registerBtn.style.display = 'block';
    cancelRegisterBtn.style.display = 'block';
    toggleRegisterBtn.style.display = 'none';
    loginBtn.style.display = 'none';
    errorEl.innerText = '';
  }

  function showLoginMode() {
    registerFields.style.display = 'none';
    registerBtn.style.display = 'none';
    cancelRegisterBtn.style.display = 'none';
    toggleRegisterBtn.style.display = 'block';
    loginBtn.style.display = 'block';
    errorEl.innerText = '';
  }

  toggleRegisterBtn.onclick = showRegisterMode;
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
