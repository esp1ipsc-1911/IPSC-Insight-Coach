// ════════════════════════════════════════════════════════════════════════════
// LOGIN UI COMPONENT
// ════════════════════════════════════════════════════════════════════════════

import { login, register } from './auth.js';

export function renderLoginScreen() {
  const lang = localStorage.getItem('ipsc_lang') || 'no';
  const isNorwegian = lang === 'no';
  
  return `
    <div id="login-screen" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #0a0c10 0%, #1a1d25 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    ">
      <div style="
        width: 90%;
        max-width: 400px;
        background: #1a1d25;
        border-radius: 16px;
        padding: 32px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      ">
        <!-- Logo -->
        <div style="text-align: center; margin-bottom: 32px;">
          <h1 style="
            font-size: 32px;
            font-weight: 700;
            color: #e8b84b;
            margin: 0 0 8px 0;
            letter-spacing: 2px;
          ">IPSC INSIGHT</h1>
          <p style="
            color: #8b92a7;
            font-size: 14px;
            margin: 0;
          ">${isNorwegian ? 'Analyse. Prognose. Resultat.' : 'Analysis. Prognosis. Results.'}</p>
        </div>

        <!-- Language Switcher -->
        <div style="text-align: center; margin-bottom: 24px;">
          <button onclick="setLanguage('no')" style="
            background: ${lang === 'no' ? '#e8b84b' : 'transparent'};
            color: ${lang === 'no' ? '#0a0c10' : '#8b92a7'};
            border: none;
            padding: 8px 16px;
            border-radius: 8px 0 0 8px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
          ">🇳🇴 Norsk</button>
          <button onclick="setLanguage('en')" style="
            background: ${lang === 'en' ? '#e8b84b' : 'transparent'};
            color: ${lang === 'en' ? '#0a0c10' : '#8b92a7'};
            border: none;
            padding: 8px 16px;
            border-radius: 0 8px 8px 0;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
          ">🇬🇧 English</button>
        </div>

        <!-- Tabs -->
        <div style="
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid #2a2f3a;
        ">
          <button id="tab-login" class="auth-tab active" onclick="switchAuthTab('login')" style="
            flex: 1;
            background: none;
            border: none;
            padding: 12px;
            color: #e8b84b;
            font-weight: 600;
            cursor: pointer;
            border-bottom: 2px solid #e8b84b;
          ">${isNorwegian ? 'Logg inn' : 'Log in'}</button>
          <button id="tab-register" class="auth-tab" onclick="switchAuthTab('register')" style="
            flex: 1;
            background: none;
            border: none;
            padding: 12px;
            color: #8b92a7;
            font-weight: 600;
            cursor: pointer;
            border-bottom: 2px solid transparent;
          ">${isNorwegian ? 'Registrer' : 'Register'}</button>
        </div>

        <!-- Login Form -->
        <form id="login-form" style="display: block;">
          <div style="margin-bottom: 16px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'E-post' : 'Email'}
            </label>
            <input 
              type="email" 
              id="login-email" 
              required
              autocomplete="username"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
          </div>
          <div style="margin-bottom: 24px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'Passord' : 'Password'}
            </label>
            <input 
              type="password" 
              id="login-password" 
              required
              autocomplete="current-password"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
          </div>
          <button 
            type="submit"
            style="
              width: 100%;
              padding: 14px;
              background: linear-gradient(135deg, #e8b84b 0%, #d4a43a 100%);
              border: none;
              border-radius: 8px;
              color: #0a0c10;
              font-size: 16px;
              font-weight: 700;
              cursor: pointer;
              text-transform: uppercase;
              letter-spacing: 1px;
            "
          >${isNorwegian ? 'Logg inn' : 'Log in'}</button>
          <div id="login-error" style="
            margin-top: 16px;
            padding: 12px;
            background: #4a1a1a;
            border: 1px solid #7a2a2a;
            border-radius: 8px;
            color: #ff6b6b;
            font-size: 14px;
            display: none;
          "></div>
        </form>

        <!-- Register Form -->
        <form id="register-form" style="display: none;">
          <div style="margin-bottom: 16px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'Navn' : 'Name'}
            </label>
            <input 
              type="text" 
              id="register-name" 
              required
              autocomplete="name"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
          </div>
          <div style="margin-bottom: 16px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'E-post' : 'Email'}
            </label>
            <input 
              type="email" 
              id="register-email" 
              required
              autocomplete="username"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
          </div>
          <div style="margin-bottom: 16px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'Passord' : 'Password'} (min 6 tegn)
            </label>
            <input 
              type="password" 
              id="register-password" 
              required
              minlength="6"
              autocomplete="new-password"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
          </div>
          <div style="margin-bottom: 24px;">
            <label style="display: block; color: #8b92a7; font-size: 14px; margin-bottom: 8px;">
              ${isNorwegian ? 'Invitasjonskode' : 'Invite Code'}
            </label>
            <input 
              type="text" 
              id="register-invite" 
              required
              placeholder="${isNorwegian ? 'F.eks. IPSC2026' : 'e.g. IPSC2026'}"
              style="
                width: 100%;
                padding: 12px;
                background: #2a2f3a;
                border: 1px solid #3a3f4a;
                border-radius: 8px;
                color: #fff;
                font-size: 16px;
              "
            />
            <p style="
              margin: 8px 0 0 0;
              color: #8b92a7;
              font-size: 12px;
            ">${isNorwegian ? 'Kontakt administrator for invitasjonskode' : 'Contact administrator for invite code'}</p>
          </div>
          <button 
            type="submit"
            style="
              width: 100%;
              padding: 14px;
              background: linear-gradient(135deg, #e8b84b 0%, #d4a43a 100%);
              border: none;
              border-radius: 8px;
              color: #0a0c10;
              font-size: 16px;
              font-weight: 700;
              cursor: pointer;
              text-transform: uppercase;
              letter-spacing: 1px;
            "
          >${isNorwegian ? 'Registrer' : 'Register'}</button>
          <div id="register-error" style="
            margin-top: 16px;
            padding: 12px;
            background: #4a1a1a;
            border: 1px solid #7a2a2a;
            border-radius: 8px;
            color: #ff6b6b;
            font-size: 14px;
            display: none;
          "></div>
        </form>
      </div>
    </div>
  `;
}

export function attachLoginHandlers() {
  console.log('attachLoginHandlers called');
  
  // Language switching
  window.setLanguage = (lang) => {
    localStorage.setItem('ipsc_lang', lang);
    window.location.reload();
  };
  
  // Tab switching
  window.switchAuthTab = (tab) => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginTab = document.getElementById('tab-login');
    const registerTab = document.getElementById('tab-register');
    
    if (tab === 'login') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      loginTab.style.color = '#e8b84b';
      loginTab.style.borderBottom = '2px solid #e8b84b';
      registerTab.style.color = '#8b92a7';
      registerTab.style.borderBottom = '2px solid transparent';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
      loginTab.style.color = '#8b92a7';
      loginTab.style.borderBottom = '2px solid transparent';
      registerTab.style.color = '#e8b84b';
      registerTab.style.borderBottom = '2px solid #e8b84b';
    }
  };
  
  // Login form
  const loginForm = document.getElementById('login-form');
  console.log('login-form element:', loginForm);
  
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      console.log('Login form submitted!');
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      const errorDiv = document.getElementById('login-error');
      
      console.log('Attempting login with:', email);
      const result = await login(email, password);
      console.log('Login result:', result);
      
      if (!result.success) {
        console.error('Login failed:', result.error);
        errorDiv.textContent = result.error;
        errorDiv.style.display = 'block';
      } else {
        console.log('Login successful!');
      }
    });
  } else {
    console.error('login-form not found in DOM!');
  }
  
  // Register form
  document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const inviteCode = document.getElementById('register-invite').value.toUpperCase();
    const errorDiv = document.getElementById('register-error');
    
    const result = await register(email, password, inviteCode, name);
    if (!result.success) {
      errorDiv.textContent = result.error;
      errorDiv.style.display = 'block';
    } else {
      // Success - auth state listener will handle showing the app
      errorDiv.style.display = 'none';
    }
  });
}
