import { renderLogin } from './loginUI.js';
import { renderApp } from './appUI.js';
import { initAuth } from './auth.js';

const app = document.getElementById('app');

function showLogin() {
  renderLogin(app, showApp);
}

function showApp() {
  renderApp(app);
}

initAuth((user) => {
  if (user) {
    showApp();
  } else {
    showLogin();
  }
});
