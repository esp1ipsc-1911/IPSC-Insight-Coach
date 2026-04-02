// ════════════════════════════════════════════════════════════════════════════
// LOGIN UI COMPONENT
// ════════════════════════════════════════════════════════════════════════════

import { login, register } from './auth.js';

const COLORS = {
  gold: '#e8b84b',
  goldDark: '#d4a43a',
  bg: '#0a0c10',
  panel: 'rgba(15, 20, 35, 0.82)',
  panelBorder: 'rgba(56, 69, 102, 0.5)',
  input: '#141c32',
  inputBorder: '#263251',
  muted: '#8b92a7',
  dangerBg: '#4a1a1a',
  dangerBorder: '#7a2a2a',
  dangerText: '#ff8f8f'
};

function t(isNorwegian, no, en) {
  return isNorwegian ? no : en;
}

function getSavedTab() {
  return localStorage.getItem('ipsc_auth_tab') || 'login';
}

export function renderLoginScreen() {
  const lang = localStorage.getItem('ipsc_lang') || 'no';
  const isNorwegian = lang === 'no';
  const activeTab = getSavedTab();
  const showLogin = activeTab !== 'register';

  return `
    <div id="login-screen" style="
      position: fixed;
      inset: 0;
      width: 100%;
      min-height: 100vh;
      background:
        radial-gradient(circle at 78% 12%, rgba(232, 184, 75, 0.14), transparent 28%),
        radial-gradient(circle at 14% 88%, rgba(0, 83, 255, 0.12), transparent 30%),
        linear-gradient(135deg, #04070d 0%, #0b0f18 40%, #121212 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      z-index: 9999;
      overflow-y: auto;
      box-sizing: border-box;
    ">
      <div style="
        width: min(100%, 460px);
        color: #fff;
        font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      ">
        <div style="margin-bottom: 28px;">
          <div style="
            width: 72px;
            height: 72px;
            border-radius: 22px;
            background: ${COLORS.gold};
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 14px 34px rgba(232, 184, 75, 0.18);
            margin-bottom: 28px;
          ">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.5l6.5 3.6v7.8L12 19.5l-6.5-3.6V8.1L12 4.5z" fill="#06080d"/>
            </svg>
          </div>

          <h1 style="
            font-size: clamp(44px, 8vw, 58px);
            line-height: 0.95;
            letter-spacing: -0.04em;
            font-weight: 800;
            margin: 0;
          ">IPSC<br><span style="color: ${COLORS.gold};">INSIGHT</span></h1>

          <p style="
            margin: 24px 0 0 0;
            color: ${COLORS.muted};
            font-size: 17px;
            line-height: 1.45;
            font-weight: 500;
          ">${t(isNorwegian, 'Analyse. Prognose. Resultat.', 'Analysis. Prognosis. Results.')}</p>
        </div>

        <div style="display:flex; justify-content:flex-start; margin-bottom: 18px; gap: 8px;">
          <button type="button" onclick="setLanguage('no')" style="
            background: ${lang === 'no' ? COLORS.gold : 'rgba(255,255,255,0.04)'};
            color: ${lang === 'no' ? COLORS.bg : COLORS.muted};
            border: 1px solid ${lang === 'no' ? COLORS.gold : 'rgba(255,255,255,0.08)'};
            padding: 8px 14px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 700;
          ">🇳🇴 Norsk</button>
          <button type="button" onclick="setLanguage('en')" style="
            background: ${lang === 'en' ? COLORS.gold : 'rgba(255,255,255,0.04)'};
            color: ${lang === 'en' ? COLORS.bg : COLORS.muted};
            border: 1px solid ${lang === 'en' ? COLORS.gold : 'rgba(255,255,255,0.08)'};
            padding: 8px 14px;
            border-radius: 999px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 700;
          ">🇬🇧 English</button>
        </div>

        <div style="
          background: ${COLORS.panel};
          border: 1px solid ${COLORS.panelBorder};
          border-radius: 24px;
          padding: 22px;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
        ">
          <div style="
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-bottom: 20px;
          ">
            <button id="tab-login" class="auth-tab ${showLogin ? 'active' : ''}" type="button" onclick="switchAuthTab('login')" style="
              border: none;
              border-radius: 14px;
              padding: 12px 14px;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              background: ${showLogin ? `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)` : 'rgba(255,255,255,0.04)'};
              color: ${showLogin ? COLORS.bg : '#d9dfed'};
            ">${t(isNorwegian, 'Logg inn', 'Log in')}</button>
            <button id="tab-register" class="auth-tab ${!showLogin ? 'active' : ''}" type="button" onclick="switchAuthTab('register')" style="
              border: none;
              border-radius: 14px;
              padding: 12px 14px;
              cursor: pointer;
              font-size: 15px;
              font-weight: 700;
              background: ${!showLogin ? `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)` : 'rgba(255,255,255,0.04)'};
              color: ${!showLogin ? COLORS.bg : '#d9dfed'};
            ">${t(isNorwegian, 'Registrer', 'Register')}</button>
          </div>

          <form id="login-form" style="display: ${showLogin ? 'block' : 'none'};">
            <div style="margin-bottom: 16px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'E-post', 'Email')}
              </label>
              <input
                type="email"
                id="login-email"
                required
                autocomplete="username"
                placeholder="name@example.com"
                style="${inputStyle()}"
              />
            </div>

            <div style="margin-bottom: 22px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'Passord', 'Password')}
              </label>
              <input
                type="password"
                id="login-password"
                required
                autocomplete="current-password"
                placeholder="••••••••"
                style="${inputStyle()}"
              />
            </div>

            <button id="login-submit" type="submit" style="${primaryButtonStyle()}">
              ${t(isNorwegian, 'Logg inn', 'Log in')}
            </button>

            <div id="login-error" style="${errorStyle()}"></div>

            <p style="margin:16px 0 0 0; color:${COLORS.muted}; font-size:13px; text-align:center;">
              ${t(isNorwegian, 'Ny bruker?', 'New user?')}
              <button type="button" onclick="switchAuthTab('register')" style="background:none;border:none;color:${COLORS.gold};cursor:pointer;font-weight:700;padding:0 0 0 6px;">
                ${t(isNorwegian, 'Registrer deg med autorisasjonskode', 'Register with authorization code')}
              </button>
            </p>
          </form>

          <form id="register-form" style="display: ${showLogin ? 'none' : 'block'};">
            <div style="margin-bottom: 16px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'Navn', 'Name')}
              </label>
              <input
                type="text"
                id="register-name"
                required
                autocomplete="name"
                placeholder="${t(isNorwegian, 'Ditt navn', 'Your name')}"
                style="${inputStyle()}"
              />
            </div>

            <div style="margin-bottom: 16px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'E-post', 'Email')}
              </label>
              <input
                type="email"
                id="register-email"
                required
                autocomplete="username"
                placeholder="name@example.com"
                style="${inputStyle()}"
              />
            </div>

            <div style="margin-bottom: 16px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'Passord', 'Password')} (${t(isNorwegian, 'minst 6 tegn', 'minimum 6 characters')})
              </label>
              <input
                type="password"
                id="register-password"
                required
                minlength="6"
                autocomplete="new-password"
                placeholder="••••••••"
                style="${inputStyle()}"
              />
            </div>

            <div style="margin-bottom: 10px;">
              <label style="display:block; color:${COLORS.muted}; font-size:13px; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.06em;">
                ${t(isNorwegian, 'Autorisasjonskode', 'Authorization code')}
              </label>
              <input
                type="text"
                id="register-invite"
                required
                placeholder="${t(isNorwegian, 'F.eks. IPSC2026', 'e.g. IPSC2026')}"
                style="${inputStyle('text-transform: uppercase; letter-spacing: 0.04em;')}"
              />
            </div>

            <p style="
              margin: 0 0 18px 0;
              color: ${COLORS.muted};
              font-size: 12px;
              line-height: 1.5;
            ">
              ${t(
                isNorwegian,
                'Kun brukere med gyldig autorisasjonskode kan opprette konto.',
                'Only users with a valid authorization code can create an account.'
              )}
            </p>

            <button id="register-submit" type="submit" style="${primaryButtonStyle()}">
              ${t(isNorwegian, 'Opprett konto', 'Create account')}
            </button>

            <div id="register-error" style="${errorStyle()}"></div>

            <p style="margin:16px 0 0 0; color:${COLORS.muted}; font-size:13px; text-align:center;">
              ${t(isNorwegian, 'Har du allerede konto?', 'Already have an account?')}
              <button type="button" onclick="switchAuthTab('login')" style="background:none;border:none;color:${COLORS.gold};cursor:pointer;font-weight:700;padding:0 0 0 6px;">
                ${t(isNorwegian, 'Logg inn', 'Log in')}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  `;
}

function inputStyle(extra = '') {
  return `
    width: 100%;
    box-sizing: border-box;
    padding: 16px 18px;
    background: ${COLORS.input};
    border: 1px solid ${COLORS.inputBorder};
    border-radius: 16px;
    color: #fff;
    font-size: 17px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    ${extra}
  `;
}

function primaryButtonStyle() {
  return `
    width: 100%;
    padding: 16px 18px;
    background: linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%);
    border: none;
    border-radius: 16px;
    color: ${COLORS.bg};
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 16px 28px rgba(232, 184, 75, 0.18);
  `;
}

function errorStyle() {
  return `
    display: none;
    margin-top: 14px;
    padding: 12px 14px;
    background: ${COLORS.dangerBg};
    border: 1px solid ${COLORS.dangerBorder};
    border-radius: 12px;
    color: ${COLORS.dangerText};
    font-size: 14px;
  `;
}

export function attachLoginHandlers() {
  window.setLanguage = function(lang) {
    localStorage.setItem('ipsc_lang', lang);
    window.location.reload();
  };

  window.switchAuthTab = function(tab) {
    localStorage.setItem('ipsc_auth_tab', tab);

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');

    const loginActive = tab === 'login';

    if (loginForm) loginForm.style.display = loginActive ? 'block' : 'none';
    if (registerForm) registerForm.style.display = loginActive ? 'none' : 'block';

    if (tabLogin) {
      tabLogin.style.background = loginActive
        ? `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)`
        : 'rgba(255,255,255,0.04)';
      tabLogin.style.color = loginActive ? COLORS.bg : '#d9dfed';
    }

    if (tabRegister) {
      tabRegister.style.background = !loginActive
        ? `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldDark} 100%)`
        : 'rgba(255,255,255,0.04)';
      tabRegister.style.color = !loginActive ? COLORS.bg : '#d9dfed';
    }
  };

  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginForm?.addEventListener('submit', handleLogin);
  registerForm?.addEventListener('submit', handleRegister);

  const style = document.createElement('style');
  style.textContent = `
    #login-screen input::placeholder {
      color: #7e879d;
    }
    #login-screen input:focus {
      border-color: ${COLORS.gold} !important;
      box-shadow: 0 0 0 4px rgba(232, 184, 75, 0.12);
    }
    #login-screen button:hover {
      filter: brightness(1.03);
    }
  `;
  document.head.appendChild(style);
}

async function handleLogin(e) {
  e.preventDefault();

  const loginError = document.getElementById('login-error');
  const submitButton = document.getElementById('login-submit');

  try {
    hideError(loginError);
    setLoading(submitButton, true);

    const email = document.getElementById('login-email')?.value?.trim();
    const password = document.getElementById('login-password')?.value;

    const result = await login(email, password);

    if (result && result.success === false) {
      showError(loginError, result.error || getErrorMessage(result));
    }
  } catch (error) {
    showError(loginError, getErrorMessage(error));
  } finally {
    setLoading(submitButton, false);
  }
}

async function handleRegister(e) {
  e.preventDefault();

  const registerError = document.getElementById('register-error');
  const submitButton = document.getElementById('register-submit');

  try {
    hideError(registerError);
    setLoading(submitButton, true);

    const name = document.getElementById('register-name')?.value?.trim();
    const email = document.getElementById('register-email')?.value?.trim();
    const password = document.getElementById('register-password')?.value;
    const inviteCode = document.getElementById('register-invite')?.value?.trim().toUpperCase();

    const result = await register(email, password, inviteCode, name);

    if (result && result.success === false) {
      showError(registerError, result.error || getErrorMessage(result));
    }
  } catch (error) {
    showError(registerError, getErrorMessage(error));
  } finally {
    setLoading(submitButton, false);
  }
}

function showError(errorElement, message) {
  if (!errorElement) return;
  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function hideError(errorElement) {
  if (!errorElement) return;
  errorElement.style.display = 'none';
  errorElement.textContent = '';
}

function setLoading(button, isLoading) {
  if (!button) return;
  button.disabled = isLoading;
  button.style.opacity = isLoading ? '0.7' : '1';
  const lang = localStorage.getItem('ipsc_lang') || 'no';

  if (button.id === 'login-submit') {
    button.textContent = isLoading
      ? (lang === 'no' ? 'Logger inn...' : 'Logging in...')
      : (lang === 'no' ? 'Logg inn' : 'Log in');
  }

  if (button.id === 'register-submit') {
    button.textContent = isLoading
      ? (lang === 'no' ? 'Oppretter konto...' : 'Creating account...')
      : (lang === 'no' ? 'Opprett konto' : 'Create account');
  }
}

function getErrorMessage(error) {
  const message = error?.message || error?.error || '';
  const lang = localStorage.getItem('ipsc_lang') || 'no';
  const isNo = lang === 'no';

  if (message.toLowerCase().includes('authorization code') || message.toLowerCase().includes('autorisasjonskode')) {
    return isNo ? 'Ugyldig autorisasjonskode.' : 'Invalid authorization code.';
  }

  if (message.toLowerCase().includes('email')) {
    return isNo ? 'Feil med e-postadresse.' : 'Email error.';
  }

  if (message.toLowerCase().includes('password')) {
    return isNo ? 'Feil passord eller ugyldig passord.' : 'Invalid password.';
  }

  return isNo ? 'Noe gikk galt. Prøv igjen.' : 'Something went wrong. Please try again.';
}
