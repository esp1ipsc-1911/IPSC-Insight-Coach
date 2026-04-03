import { login, register } from './auth.js';

export function renderLogin(container, onSuccess) {
  container.innerHTML = `
    <div style="max-width:420px;margin:80px auto;font-family:sans-serif">
      <h2>IPSC Insight</h2>

      <input id="name" placeholder="Navn" style="width:100%;padding:10px;margin:5px 0">
      <input id="email" placeholder="E-post" style="width:100%;padding:10px;margin:5px 0">
      <input id="password" type="password" placeholder="Passord" style="width:100%;padding:10px;margin:5px 0">
      <input id="code" placeholder="Invitasjonskode" style="width:100%;padding:10px;margin:5px 0">

      <button id="loginBtn" style="width:100%;padding:10px;margin-top:10px">
        Logg inn
      </button>

      <button id="registerBtn" style="width:100%;padding:10px;margin-top:10px">
        Registrer bruker
      </button>

      <p id="error" style="color:red;margin-top:12px"></p>
    </div>
  `;

  const errorEl = document.getElementById('error');

  document.getElementById('loginBtn').onclick = async () => {
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

  document.getElementById('registerBtn').onclick = async () => {
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
