import { renderLogin } from "./loginUI.js";
import { renderApp } from "./appUI.js";

const app = document.getElementById("app");

export function goToApp() {
  renderApp(app);
}

export function goToLogin() {
  renderLogin(app);
}

// START
goToLogin();
