import { login, register } from "./firebase.js";
import { goToApp } from "./main.js";

export function renderLogin(container) {
  container.innerHTML = `
    <div style="max-width:400px;margin:100px auto;font-family:sans-serif">
      <h2>IPSC Insight</h2>

      <input id="email" placeholder="E-post" style="width:100%;padding:10px;margin:5px 0">
      <input id="password" type="password" placeholder="Passord" style="width:100%;padding:10px;margin:5px 0">

      <button id="loginBtn" style="width:100%;padding:10px;margin-top:10px">
        Logg inn
      </button>

      <hr>

      <input id="code" placeholder="Autorisasjonskode" style="width:100%;padding:10px;margin:5px 0">

      <button id="registerBtn" style="width:100%;padding:10px">
        Registrer bruker
      </button>

      <p id="error" style="color:red"></p>
    </div>
  `;

  document.getElementById("loginBtn").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await login(email, password);
      goToApp();
    } catch (e) {
      document.getElementById("error").innerText = e.message;
    }
  };

  document.getElementById("registerBtn").onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const code = document.getElementById("code").value;

    try {
      await register(email, password, code);
      goToApp();
    } catch (e) {
      document.getElementById("error").innerText = e.message;
    }
  };
}
