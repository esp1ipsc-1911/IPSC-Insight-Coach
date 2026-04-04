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
          radial-gradient(circle at top right, rgba(224, 182, 73, 0.10), transparent 34%),
          radial-gradient(circle at bottom left, rgba(9, 35, 89, 0.16), transparent 34%),
          linear-gradient(135deg, #04070d 0%, #101010 56%, #16120e 100%);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 14px 14px 24px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
        color: #f5f7fb;
      }

      .ipsc-login-shell {
        width: 100%;
        max-width: 360px;
        position: relative;
      }

      .ipsc-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
      }

      .brand-icon {
        width: 58px;
        height: 58px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(224, 182, 73, 0.14);
        flex-shrink: 0;
      }

      .brand-icon img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .lang-flags {
        display: flex;
        gap: 8px;
      }

      .lang-btn {
        width: 46px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.08);
        background: rgba(19, 25, 40, 0.72);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
        opacity: 0.72;
      }

      .lang-btn.active {
        opacity: 1;
        border: 2px solid #e0b649;
        box-shadow: 0 0 0 1px rgba(224, 182, 73, 0.15);
      }

      .brand-title {
        line-height: 0.92;
        letter-spacing: -1px;
        margin-bottom: 12px;
      }

      .brand-title .top,
      .brand-title .bottom {
        display: block;
        font-size: clamp(34px, 8.2vw, 42px);
        font-weight: 900;
      }

      .brand-title .top {
        color: #f5f7fb;
      }

      .brand-title .bottom {
        color: #e0b649;
      }

      .brand-subtitle {
        font-size: clamp(13px, 3.7vw, 16px);
        color: #7d8598;
        font-weight: 500;
        margin-bottom: 26px;
      }

      .field-label {
        font-size: clamp(12px, 3.5vw, 15px);
        color: #7d8598;
        margin-bottom: 6px;
        text-transform: uppercase;
        letter-spacing: 0.7px;
      }

      .field {
        width: 100%;
        height: 50px;
        border-radius: 14px;
        border: 1px solid #27314a;
        background: rgba(18, 26, 50, 0.88);
        color: #f5f7fb;
        font-size: clamp(15px, 4vw, 17px);
        padding: 0 16px;
        outline: none;
        margin-bottom: 14px;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
      }

      .field::placeholder {
        color: #8b91a1;
      }

      .field-select {
        width: 100%;
        height: 50px;
        border-radius: 14px;
        border: 1px solid #27314a;
        background: rgba(18, 26, 50, 0.88);
        color: #f5f7fb;
        font-size: clamp(15px, 4vw, 17px);
        padding: 0 16px;
        outline: none;
        margin-bottom: 14px;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.02);
        -webkit-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238b91a1' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        padding-right: 40px;
      }

      .pf-selector {
        display: flex;
        gap: 10px;
        margin-bottom: 14px;
      }

      .pf-option {
        flex: 1;
        height: 50px;
        border-radius: 14px;
        border: 1px solid #27314a;
        background: rgba(18, 26, 50, 0.88);
        color: #8b91a1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s;
      }

      .pf-option.selected {
        border-color: #e0b649;
        background: rgba(224, 182, 73, 0.1);
        color: #e0b649;
      }

      .primary-btn {
        width: 100%;
        height: 54px;
        border: none;
        border-radius: 16px;
        background: #e0b649;
        color: #111111;
        font-size: clamp(17px, 4vw, 20px);
        font-weight: 800;
        cursor: pointer;
        margin-top: 4px;
        box-shadow: 0 10px 24px rgba(224, 182, 73, 0.14);
      }

      .separator {
        display: flex;
        align-items: center;
        gap: 12px;
        color: #7d8598;
        font-size: 14px;
        margin: 16px 0;
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
        height: 50px;
        border-radius: 14px;
        border: 1px solid #2c3446;
        background: rgba(19, 25, 40, 0.74);
        color: #f3f5fb;
        font-size: clamp(15px, 4vw, 17px);
        font-weight: 700;
        cursor: pointer;
      }

      .ghost-btn {
        width: 100%;
        height: 48px;
        border-radius: 14px;
        border: 1px solid #2c3446;
        background: transparent;
        color: #d7dbe4;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        margin-top: 10px;
      }

      .section {
        display: none;
      }

      .section.active {
        display: block;
      }

      .strength-wrap {
        margin-top: -6px;
        margin-bottom: 12px;
      }

      .strength-bar-bg {
        width: 100%;
        height: 8px;
        border-radius: 999px;
        background: rgba(255,255,255,0.10);
        overflow: hidden;
      }

      .strength-bar-fill {
        height: 100%;
        width: 0%;
        border-radius: 999px;
        transition: width 0.2s ease;
        background: #ff6b6b;
      }

      .strength-text {
        font-size: 13px;
        color: #9aa3b2;
        margin-top: 6px;
        min-height: 18px;
      }

      .error-text {
        color: #ff8a8a;
        font-size: 14px;
        margin-top: 12px;
        min-height: 20px;
      }

      @media (min-width: 700px) {
        .ipsc-login-page {
          align-items: center;
          padding: 24px;
        }

        .ipsc-login-shell {
          max-width: 380px;
        }
      }
    </style>

    <div class="ipsc-login-page">
      <div class="ipsc-login-shell">
        <div class="ipsc-header">
          <div class="brand-icon">
            <img src="Logo_IPSC-insight.png" alt="IPSC Insight">
          </div>
          <div class="lang-flags">
            <button id="langNo" class="lang-btn active" type="button" aria-label="Norsk">🇳🇴</button>
            <button id="langEn" class="lang-btn" type="button" aria-label="English">🇺🇸</button>
          </div>
        </div>

        <div class="brand-title">
          <span class="top">IPSC</span>
          <span class="bottom">INSIGHT</span>
        </div>

        <div id="brandSubtitle" class="brand-subtitle">Analyse. Prognose. Resultat.</div>

        <div id="loginSection" class="section active">
          <div id="loginEmailLabel" class="field-label">E-post</div>
          <input id="loginEmail" class="field" type="email" placeholder="navn@epost.no" />

          <div id="loginPasswordLabel" class="field-label">Passord</div>
          <input id="loginPassword" class="field" type="password" placeholder="Passord" />

          <button id="loginBtn" class="primary-btn">Logg inn</button>

          <div id="separatorText" class="separator">eller</div>

          <button id="showRegisterBtn" class="secondary-btn">Registrer ny bruker</button>
        </div>

        <div id="registerSection" class="section">
          <div id="registerFirstNameLabel" class="field-label">Fornavn</div>
          <input id="registerFirstName" class="field" type="text" placeholder="Fornavn" />

          <div id="registerLastNameLabel" class="field-label">Etternavn</div>
          <input id="registerLastName" class="field" type="text" placeholder="Etternavn" />

          <div id="registerEmailLabel" class="field-label">E-post</div>
          <input id="registerEmail" class="field" type="email" placeholder="navn@epost.no" />

          <div id="registerEmailConfirmLabel" class="field-label">Bekreft e-post</div>
          <input id="registerEmailConfirm" class="field" type="email" placeholder="Gjenta e-post" />

          <div id="registerPasswordLabel" class="field-label">Passord</div>
          <input id="registerPassword" class="field" type="password" placeholder="Passord" />

          <div class="strength-wrap">
            <div class="strength-bar-bg">
              <div id="passwordStrengthBar" class="strength-bar-fill"></div>
            </div>
            <div id="passwordStrengthText" class="strength-text"></div>
          </div>

          <div id="registerPasswordConfirmLabel" class="field-label">Bekreft passord</div>
          <input id="registerPasswordConfirm" class="field" type="password" placeholder="Gjenta passord" />

          <div id="registerDivisionLabel" class="field-label">Divisjon</div>
          <select id="registerDivision" class="field-select">
            <option value="">Velg divisjon</option>
            <option value="Standard">Standard</option>
            <option value="Open">Open</option>
            <option value="Production">Production</option>
            <option value="Production Optics">Production Optics</option>
            <option value="Classic">Classic</option>
            <option value="Revolver">Revolver</option>
          </select>

          <div id="registerCategoryLabel" class="field-label">Kategori</div>
          <select id="registerCategory" class="field-select">
            <option value="">Velg kategori (valgfri)</option>
            <option value="Junior">Junior</option>
            <option value="Senior">Senior</option>
            <option value="Super Senior">Super Senior</option>
            <option value="Lady">Lady</option>
            <option value="Lady Junior">Lady Junior</option>
            <option value="Lady Senior">Lady Senior</option>
          </select>

          <div id="registerPowerFactorLabel" class="field-label">Power Factor</div>
          <div class="pf-selector">
            <div class="pf-option selected" data-pf="minor" id="pfMinor">Minor</div>
            <div class="pf-option" data-pf="major" id="pfMajor">Major</div>
          </div>

          <div id="registerRegionLabel" class="field-label">Region</div>
          <select id="registerRegion" class="field-select">
            <option value="">Velg region (valgfri)</option>
            <option value="Norge">Norge</option>
            <option value="Sverige">Sverige</option>
            <option value="Danmark">Danmark</option>
            <option value="Finland">Finland</option>
            <option value="Tyskland">Tyskland</option>
            <option value="Storbritannia">Storbritannia</option>
            <option value="USA">USA</option>
            <option value="Annet">Annet</option>
          </select>

          <div id="registerClubLabel" class="field-label">Klubb</div>
          <input id="registerClub" class="field" type="text" placeholder="Klubbnavn (valgfri)" />

          <div id="registerCodeLabel" class="field-label">Invitasjonskode</div>
          <input id="registerCode" class="field" type="text" placeholder="Invitasjonskode" />

          <button id="registerBtn" class="primary-btn">Opprett bruker</button>
          <button id="cancelRegisterBtn" class="ghost-btn">Avbryt</button>
        </div>

        <div id="error" class="error-text"></div>
      </div>
    </div>
  `;

  const texts = {
    no: {
      subtitle: 'Analyse. Prognose. Resultat.',
      loginEmailLabel: 'E-post',
      loginEmailPlaceholder: 'navn@epost.no',
      loginPasswordLabel: 'Passord',
      loginPasswordPlaceholder: 'Passord',
      login: 'Logg inn',
      or: 'eller',
      showRegister: 'Registrer ny bruker',
      registerFirstNameLabel: 'Fornavn',
      registerFirstNamePlaceholder: 'Fornavn',
      registerLastNameLabel: 'Etternavn',
      registerLastNamePlaceholder: 'Etternavn',
      registerEmailLabel: 'E-post',
      registerEmailPlaceholder: 'navn@epost.no',
      registerEmailConfirmLabel: 'Bekreft e-post',
      registerEmailConfirmPlaceholder: 'Gjenta e-post',
      registerPasswordLabel: 'Passord',
      registerPasswordPlaceholder: 'Passord',
      registerPasswordConfirmLabel: 'Bekreft passord',
      registerPasswordConfirmPlaceholder: 'Gjenta passord',
      registerDivisionLabel: 'Divisjon',
      registerCategoryLabel: 'Kategori',
      registerPowerFactorLabel: 'Power Factor',
      registerRegionLabel: 'Region',
      registerClubLabel: 'Klubb',
      registerCodeLabel: 'Invitasjonskode',
      registerCodePlaceholder: 'Invitasjonskode',
      register: 'Opprett bruker',
      cancel: 'Avbryt',
      emailMismatch: 'E-postadressene er ikke like',
      passwordMismatch: 'Passordene er ikke like',
      missingFields: 'Fyll ut alle påkrevde feltene',
      missingName: 'Du må skrive inn fornavn og etternavn',
      missingDivision: 'Du må velge divisjon',
      weakPassword: 'Passordet er for svakt',
      strengthEmpty: '',
      strengthVeryWeak: 'Passordstyrke: Svært svak',
      strengthWeak: 'Passordstyrke: Svak',
      strengthMedium: 'Passordstyrke: Middels',
      strengthStrong: 'Passordstyrke: Sterk',
      strengthVeryStrong: 'Passordstyrke: Svært sterk'
    },
    en: {
      subtitle: 'Analyze. Predict. Perform.',
      loginEmailLabel: 'Email',
      loginEmailPlaceholder: 'name@email.com',
      loginPasswordLabel: 'Password',
      loginPasswordPlaceholder: 'Password',
      login: 'Log in',
      or: 'or',
      showRegister: 'Create new user',
      registerFirstNameLabel: 'First Name',
      registerFirstNamePlaceholder: 'First name',
      registerLastNameLabel: 'Last Name',
      registerLastNamePlaceholder: 'Last name',
      registerEmailLabel: 'Email',
      registerEmailPlaceholder: 'name@email.com',
      registerEmailConfirmLabel: 'Confirm email',
      registerEmailConfirmPlaceholder: 'Repeat email',
      registerPasswordLabel: 'Password',
      registerPasswordPlaceholder: 'Password',
      registerPasswordConfirmLabel: 'Confirm password',
      registerPasswordConfirmPlaceholder: 'Repeat password',
      registerDivisionLabel: 'Division',
      registerCategoryLabel: 'Category',
      registerPowerFactorLabel: 'Power Factor',
      registerRegionLabel: 'Region',
      registerClubLabel: 'Club',
      registerCodeLabel: 'Invite code',
      registerCodePlaceholder: 'Invite code',
      register: 'Create account',
      cancel: 'Cancel',
      emailMismatch: 'The email addresses do not match',
      passwordMismatch: 'Passwords do not match',
      missingFields: 'Please fill in all required fields',
      missingName: 'Please enter your first and last name',
      missingDivision: 'Please select a division',
      weakPassword: 'The password is too weak',
      strengthEmpty: '',
      strengthVeryWeak: 'Password strength: Very weak',
      strengthWeak: 'Password strength: Weak',
      strengthMedium: 'Password strength: Medium',
      strengthStrong: 'Password strength: Strong',
      strengthVeryStrong: 'Password strength: Very strong'
    }
  };

  let currentLang = 'no';
  let selectedPowerFactor = 'minor';

  const errorEl = document.getElementById('error');
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const showRegisterBtn = document.getElementById('showRegisterBtn');
  const cancelRegisterBtn = document.getElementById('cancelRegisterBtn');
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const langNo = document.getElementById('langNo');
  const langEn = document.getElementById('langEn');
  const registerPasswordInput = document.getElementById('registerPassword');
  const strengthBar = document.getElementById('passwordStrengthBar');
  const strengthText = document.getElementById('passwordStrengthText');
  const pfMinor = document.getElementById('pfMinor');
  const pfMajor = document.getElementById('pfMajor');

  // Power Factor selection
  pfMinor.onclick = () => {
    selectedPowerFactor = 'minor';
    pfMinor.classList.add('selected');
    pfMajor.classList.remove('selected');
  };

  pfMajor.onclick = () => {
    selectedPowerFactor = 'major';
    pfMajor.classList.add('selected');
    pfMinor.classList.remove('selected');
  };

  function getPasswordStrength(password) {
    let score = 0;

    if (!password) {
      return { score: 0, width: '0%', labelKey: 'strengthEmpty', color: '#ff6b6b' };
    }

    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    if (score <= 1) {
      return { score, width: '20%', labelKey: 'strengthVeryWeak', color: '#ff6b6b' };
    }
    if (score === 2) {
      return { score, width: '40%', labelKey: 'strengthWeak', color: '#ff9f43' };
    }
    if (score === 3) {
      return { score, width: '60%', labelKey: 'strengthMedium', color: '#feca57' };
    }
    if (score === 4) {
      return { score, width: '80%', labelKey: 'strengthStrong', color: '#1dd1a1' };
    }

    return { score, width: '100%', labelKey: 'strengthVeryStrong', color: '#10ac84' };
  }

  function updatePasswordStrength() {
    const t = texts[currentLang];
    const password = registerPasswordInput.value;
    const strength = getPasswordStrength(password);

    strengthBar.style.width = strength.width;
    strengthBar.style.background = strength.color;
    strengthText.innerText = t[strength.labelKey];
  }

  function applyLanguage(lang) {
    currentLang = lang;
    const t = texts[lang];

    document.getElementById('brandSubtitle').innerText = t.subtitle;

    document.getElementById('loginEmailLabel').innerText = t.loginEmailLabel;
    document.getElementById('loginEmail').placeholder = t.loginEmailPlaceholder;
    document.getElementById('loginPasswordLabel').innerText = t.loginPasswordLabel;
    document.getElementById('loginPassword').placeholder = t.loginPasswordPlaceholder;
    document.getElementById('loginBtn').innerText = t.login;
    document.getElementById('separatorText').innerText = t.or;
    document.getElementById('showRegisterBtn').innerText = t.showRegister;

    document.getElementById('registerFirstNameLabel').innerText = t.registerFirstNameLabel;
    document.getElementById('registerFirstName').placeholder = t.registerFirstNamePlaceholder;
    document.getElementById('registerLastNameLabel').innerText = t.registerLastNameLabel;
    document.getElementById('registerLastName').placeholder = t.registerLastNamePlaceholder;
    document.getElementById('registerEmailLabel').innerText = t.registerEmailLabel;
    document.getElementById('registerEmail').placeholder = t.registerEmailPlaceholder;
    document.getElementById('registerEmailConfirmLabel').innerText = t.registerEmailConfirmLabel;
    document.getElementById('registerEmailConfirm').placeholder = t.registerEmailConfirmPlaceholder;
    document.getElementById('registerPasswordLabel').innerText = t.registerPasswordLabel;
    document.getElementById('registerPassword').placeholder = t.registerPasswordPlaceholder;
    document.getElementById('registerPasswordConfirmLabel').innerText = t.registerPasswordConfirmLabel;
    document.getElementById('registerPasswordConfirm').placeholder = t.registerPasswordConfirmPlaceholder;
    document.getElementById('registerDivisionLabel').innerText = t.registerDivisionLabel;
    document.getElementById('registerCategoryLabel').innerText = t.registerCategoryLabel;
    document.getElementById('registerPowerFactorLabel').innerText = t.registerPowerFactorLabel;
    document.getElementById('registerRegionLabel').innerText = t.registerRegionLabel;
    document.getElementById('registerClubLabel').innerText = t.registerClubLabel;
    document.getElementById('registerCodeLabel').innerText = t.registerCodeLabel;
    document.getElementById('registerCode').placeholder = t.registerCodePlaceholder;
    document.getElementById('registerBtn').innerText = t.register;
    document.getElementById('cancelRegisterBtn').innerText = t.cancel;

    langNo.classList.toggle('active', lang === 'no');
    langEn.classList.toggle('active', lang === 'en');

    updatePasswordStrength();
  }

  function showRegisterMode() {
    loginSection.classList.remove('active');
    registerSection.classList.add('active');
    errorEl.innerText = '';
  }

  function showLoginMode() {
    registerSection.classList.remove('active');
    loginSection.classList.add('active');
    errorEl.innerText = '';
  }

  langNo.onclick = () => applyLanguage('no');
  langEn.onclick = () => applyLanguage('en');

  showRegisterBtn.onclick = showRegisterMode;
  cancelRegisterBtn.onclick = showLoginMode;
  registerPasswordInput.oninput = updatePasswordStrength;

  loginBtn.onclick = async () => {
    errorEl.innerText = '';

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    const result = await login(email, password);

    if (result.success) {
      onSuccess();
    } else {
      errorEl.innerText = result.error;
    }
  };

  registerBtn.onclick = async () => {
    errorEl.innerText = '';
    const t = texts[currentLang];

    const firstName = document.getElementById('registerFirstName').value.trim();
    const lastName = document.getElementById('registerLastName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const confirmEmail = document.getElementById('registerEmailConfirm').value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerPasswordConfirm').value;
    const division = document.getElementById('registerDivision').value;
    const category = document.getElementById('registerCategory').value;
    const region = document.getElementById('registerRegion').value;
    const club = document.getElementById('registerClub').value.trim();
    const code = document.getElementById('registerCode').value.trim();

    if (!firstName || !lastName) {
      errorEl.innerText = t.missingName;
      return;
    }

    if (!email || !confirmEmail || !password || !confirmPassword || !code) {
      errorEl.innerText = t.missingFields;
      return;
    }

    if (!division) {
      errorEl.innerText = t.missingDivision;
      return;
    }

    if (email !== confirmEmail) {
      errorEl.innerText = t.emailMismatch;
      return;
    }

    if (password !== confirmPassword) {
      errorEl.innerText = t.passwordMismatch;
      return;
    }

    if (getPasswordStrength(password).score <= 1) {
      errorEl.innerText = t.weakPassword;
      return;
    }

    // Call register with profile data
    const result = await register(email, password, code, firstName, lastName, division, category, selectedPowerFactor, region, club);

    if (result.success) {
      onSuccess();
    } else {
      errorEl.innerText = result.error;
    }
  };

  applyLanguage('no');
  updatePasswordStrength();
}
