import{initializeApp as Ee}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as Se,onAuthStateChanged as Te,signInWithEmailAndPassword as Ce,createUserWithEmailAndPassword as _e,signOut as Fe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Ie,getDoc as oe,doc as B,setDoc as Be,query as re,collection as ee,where as le,getDocs as $e,onSnapshot as de,serverTimestamp as G,addDoc as Me,updateDoc as ce}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Ne,httpsCallable as Ae}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Re={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},ve=Ee(Re),W=Se(ve),P=Ie(ve),De=Ne();let X=null,E=null;function Oe(s){Te(W,async t=>{if(t){X=t;try{const e=await oe(B(P,"users",t.uid));e.exists()?E={uid:t.uid,...e.data()}:E={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},s(E)}catch(e){console.error("Feil ved lasting av brukerprofil:",e),E={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},s(E)}}else X=null,E=null,s(null)})}async function je(s,t){try{const e=(s||"").trim();return{success:!0,user:(await Ce(W,e,t||"")).user}}catch(e){console.error("Innlogging feilet:",e);let i="Innlogging feilet";return e.code==="auth/user-not-found"||e.code==="auth/wrong-password"||e.code==="auth/invalid-credential"?i="Feil e-post eller passord":e.code==="auth/invalid-email"?i="Ugyldig e-postadresse":e.code==="auth/user-disabled"&&(i="Denne kontoen er deaktivert"),{success:!1,error:i}}}async function He(s,t,e,i,n,r,l,p,g,f){try{const m=(s||"").trim(),u=t||"",y=(e||"").trim(),b=(i||"").trim(),H=(n||"").trim(),U=(r||"").trim(),Z=(l||"").trim(),N=(p||"minor").trim(),A=(g||"").trim(),K=(f||"").trim(),x=(await _e(W,m,u)).user,Q=Ae(De,"validateInviteCode");try{await Q({code:y,userId:x.uid,userEmail:m})}catch(L){await x.delete();let v="Ugyldig invitasjonskode";return L.code==="functions/not-found"?v="Ugyldig invitasjonskode":L.code==="functions/permission-denied"?v="Denne koden er deaktivert":L.code==="functions/resource-exhausted"?v="Denne koden har nådd maksimalt antall bruk":L.code==="functions/already-exists"?v="Du har allerede brukt denne koden":L.message&&(v=L.message),{success:!1,error:v}}return await Be(B(P,"users",x.uid),{email:m,firstName:b,lastName:H,division:U,category:Z,powerFactor:N,region:A,club:K,role:"user",inviteCode:y,createdAt:new Date,draw:null,reloadTime:null}),{success:!0,user:x}}catch(m){console.error("Registrering feilet:",m);let u="Registrering feilet";return m.code==="auth/email-already-in-use"?u="E-postadressen er allerede i bruk":m.code==="auth/weak-password"?u="Passordet må være minst 6 tegn":m.code==="auth/invalid-email"?u="Ugyldig e-postadresse":m.message&&(u=m.message),{success:!1,error:u}}}async function Ue(){try{return await Fe(W),{success:!0}}catch(s){return console.error("Utlogging feilet:",s),{success:!1,error:"Kunne ikke logge ut"}}}function $(){return X}function Ke(){return E}function ze(s,t){s.innerHTML=`
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
  `;const e={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong"}};let i="no",n="minor";const r=document.getElementById("error"),l=document.getElementById("loginSection"),p=document.getElementById("registerSection"),g=document.getElementById("showRegisterBtn"),f=document.getElementById("cancelRegisterBtn"),m=document.getElementById("loginBtn"),u=document.getElementById("registerBtn"),y=document.getElementById("langNo"),b=document.getElementById("langEn"),H=document.getElementById("registerPassword"),U=document.getElementById("passwordStrengthBar"),Z=document.getElementById("passwordStrengthText"),N=document.getElementById("pfMinor"),A=document.getElementById("pfMajor");N.onclick=()=>{n="minor",N.classList.add("selected"),A.classList.remove("selected")},A.onclick=()=>{n="major",A.classList.add("selected"),N.classList.remove("selected")};function K(v){let d=0;return v?(v.length>=8&&(d+=1),v.length>=12&&(d+=1),/[a-z]/.test(v)&&/[A-Z]/.test(v)&&(d+=1),/\d/.test(v)&&(d+=1),/[^A-Za-z0-9]/.test(v)&&(d+=1),d<=1?{score:d,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:d===2?{score:d,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:d===3?{score:d,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:d===4?{score:d,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:d,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function z(){const v=e[i],d=H.value,k=K(d);U.style.width=k.width,U.style.background=k.color,Z.innerText=v[k.labelKey]}function x(v){i=v;const d=e[v];document.getElementById("brandSubtitle").innerText=d.subtitle,document.getElementById("loginEmailLabel").innerText=d.loginEmailLabel,document.getElementById("loginEmail").placeholder=d.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=d.loginPasswordLabel,document.getElementById("loginPassword").placeholder=d.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=d.login,document.getElementById("separatorText").innerText=d.or,document.getElementById("showRegisterBtn").innerText=d.showRegister,document.getElementById("registerFirstNameLabel").innerText=d.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=d.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=d.registerLastNameLabel,document.getElementById("registerLastName").placeholder=d.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=d.registerEmailLabel,document.getElementById("registerEmail").placeholder=d.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=d.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=d.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=d.registerPasswordLabel,document.getElementById("registerPassword").placeholder=d.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=d.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=d.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=d.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=d.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=d.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=d.registerRegionLabel,document.getElementById("registerClubLabel").innerText=d.registerClubLabel,document.getElementById("registerCodeLabel").innerText=d.registerCodeLabel,document.getElementById("registerCode").placeholder=d.registerCodePlaceholder,document.getElementById("registerBtn").innerText=d.register,document.getElementById("cancelRegisterBtn").innerText=d.cancel,y.classList.toggle("active",v==="no"),b.classList.toggle("active",v==="en"),z()}function Q(){l.classList.remove("active"),p.classList.add("active"),r.innerText=""}function L(){p.classList.remove("active"),l.classList.add("active"),r.innerText=""}y.onclick=()=>x("no"),b.onclick=()=>x("en"),g.onclick=Q,f.onclick=L,H.oninput=z,m.onclick=async()=>{r.innerText="";const v=document.getElementById("loginEmail").value.trim(),d=document.getElementById("loginPassword").value,k=await je(v,d);k.success?t():r.innerText=k.error},u.onclick=async()=>{r.innerText="";const v=e[i],d=document.getElementById("registerFirstName").value.trim(),k=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),te=document.getElementById("registerEmailConfirm").value.trim(),V=document.getElementById("registerPassword").value,se=document.getElementById("registerPasswordConfirm").value,ie=document.getElementById("registerDivision").value,Pe=document.getElementById("registerCategory").value,xe=document.getElementById("registerRegion").value,Le=document.getElementById("registerClub").value.trim(),ae=document.getElementById("registerCode").value.trim();if(!d||!k){r.innerText=v.missingName;return}if(!Y||!te||!V||!se||!ae){r.innerText=v.missingFields;return}if(!ie){r.innerText=v.missingDivision;return}if(Y!==te){r.innerText=v.emailMismatch;return}if(V!==se){r.innerText=v.passwordMismatch;return}if(K(V).score<=1){r.innerText=v.weakPassword;return}const ne=await He(Y,V,ae,d,k,ie,Pe,n,xe,Le);ne.success?t():r.innerText=ne.error},x("no"),z()}async function Ve(s){const t=$();if(!t)return{success:!1,error:"Not authenticated"};try{return await ce(B(P,"users",t.uid),{...s,updatedAt:G()}),{success:!0}}catch(e){return console.error("Save profile error:",e),{success:!1,error:e.message}}}async function Ge(){const s=$();if(!s)return null;try{const t=await oe(B(P,"users",s.uid));return t.exists()?{uid:s.uid,...t.data()}:null}catch(t){return console.error("Get profile error:",t),null}}async function qe(s){const t=$();if(!t)return{success:!1,error:"Not authenticated"};try{const e={...s,ownerId:t.uid,participants:[t.uid],createdAt:G(),updatedAt:G()};return{success:!0,matchId:(await Me(ee(P,"matches"),e)).id}}catch(e){return console.error("Create match error:",e),{success:!1,error:e.message}}}async function pe(s,t){if(!$())return{success:!1,error:"Not authenticated"};try{return await ce(B(P,"matches",s),{...t,updatedAt:G()}),{success:!0}}catch(i){return console.error("Update match error:",i),{success:!1,error:i.message}}}async function We(){const s=$();if(!s)return[];try{const t=re(ee(P,"matches"),le("participants","array-contains",s.uid)),e=await $e(t),i=[];return e.forEach(n=>{i.push({id:n.id,...n.data()})}),i.sort((n,r)=>{var g,f;const l=n.date||((g=n.createdAt)==null?void 0:g.toDate())||new Date(0);return(r.date||((f=r.createdAt)==null?void 0:f.toDate())||new Date(0))-l}),i}catch(t){return console.error("Get user matches error:",t),[]}}function Je(s){const t=$();if(!t)return()=>{};const e=re(ee(P,"matches"),le("participants","array-contains",t.uid));return de(e,n=>{const r=[];n.forEach(l=>{r.push({id:l.id,...l.data()})}),r.sort((l,p)=>{var m,u;const g=l.date||((m=l.createdAt)==null?void 0:m.toDate())||new Date(0);return(p.date||((u=p.createdAt)==null?void 0:u.toDate())||new Date(0))-g}),s(r)},n=>{console.error("Listen to matches error:",n)})}function Ze(s,t){return de(B(P,"matches",s),i=>{i.exists()?t({id:i.id,...i.data()}):t(null)},i=>{console.error("Listen to match error:",i)})}let a,T=null,_="all",w=[],R=null,D=null;const Qe={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Planlagte stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_stevne:"Stevne",match_types_trening:"Trening",match_types_klubbmatch:"Klubbmatch",match_types_landsmesterskap:"Landsmesterskap",match_types_internasjonalt:"Internasjonalt",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Planned Stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_stevne:"Competition",match_types_trening:"Training",match_types_klubbmatch:"Club Match",match_types_landsmesterskap:"Nationals",match_types_internasjonalt:"International",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let ge="no";function o(s){return Qe[ge][s]||s}const Ye={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},Xe=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],et={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},tt=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],st=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function it(s,t){const e=Ye[s];return e&&(e[t]||e.minor)||15}function at(s,t,e){return Math.max(0,Math.ceil(s/it(t,e))-1)}function F(s){return s.charAt(0).toUpperCase()+s.slice(1)}function me(s){if(!s)return"";try{const t=ge==="no"?"nb-NO":"en-US";return new Date(s).toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric"})}catch{return s}}function c(s){return document.getElementById(s)}function h(s){const t=c(s);return t?t.value:""}function O(s,t){const e=parseFloat(h(s));return isNaN(e)?t||0:e}function I(s,t){const e=parseInt(h(s));return isNaN(e)?t||0:e}function S(){const s=(a==null?void 0:a.firstName)||"",t=(a==null?void 0:a.lastName)||"";return(s.charAt(0)+t.charAt(0)).toUpperCase()||"U"}async function nt(s){var i;const t=await Ge(),e=Ke();t?a=t:a={firstName:e.name||((i=e.email)==null?void 0:i.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},w=await We(),R&&R(),R=Je(n=>{w=n,j(),C()}),s.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${o("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${o("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${o("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${o("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${o("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${o("profile")}</span></div>
  </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
  <div class="navbar">
    <div class="nav-title">MATCH<span>ER</span></div>
    <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content">
    <div class="search-wrap"><span class="search-icon">&#128269;</span><input class="search-input" id="match-search" placeholder="Søk match, sted..." oninput="renderMatchList()"></div>
    <div class="filter-row">
      <div class="filter-chip active" onclick="setFilter('all',this)">Alle</div>
      <div class="filter-chip" onclick="setFilter('active',this)">Aktiv</div>
      <div class="filter-chip" onclick="setFilter('2026',this)">2026</div>
      <div class="filter-chip" onclick="setFilter('2025',this)">2025</div>
      <div class="filter-chip" onclick="setFilter('trening',this)">Trening</div>
      <div class="filter-chip" onclick="setFilter('stevne',this)">Stevne</div>
    </div>
    <div id="match-list-container"></div>
  </div>
  <button class="fab" onclick="openModal('modal-new-match')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${o("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${o("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${o("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${o("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${o("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${o("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value">0.18s</div><div class="stat-label">Split</div></div>
        <div class="stat-block"><div class="stat-value">${a.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${a.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
    </div>
    <div class="section-title">Stage-parametre</div>
    <div class="card">
      <div class="section-label">Stageinnhold</div>
      <div class="prognose-inputs">
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${o("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${o("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${o("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${o("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${a.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${o("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${a.powerFactor?F(a.powerFactor):"Minor"} · ${a.division||"Classic"}</div>
        <div class="prog-hf-label">Estimert Hit Factor</div>
        <div class="prog-hf-value" id="prog-hf-out">—</div>
        <div id="prog-delta-wrap" class="prog-delta-wrap">
          <div class="prog-delta-label">vs. match-snitt</div>
          <div class="prog-delta-value" id="prog-delta">—</div>
        </div>
        <div class="prog-breakdown" id="prog-breakdown"></div>
      </div>
    </div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${o("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${o("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${o("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${o("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${o("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${o("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${o("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${o("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${o("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${o("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${o("profile")}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${S()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${S()}</div>
      <div class="profile-name" id="prof-name">${a.firstName||""} ${a.lastName||""}</div>
      <div class="profile-div" id="prof-div">${a.division||"—"} · ${a.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${a.powerFactor?F(a.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${a.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${o("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${a.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${a.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${a.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${a.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${a.powerFactor?F(a.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${a.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${a.club||"—"}</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Sesongstatistikk</div></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${o("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${o("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${o("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${o("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${o("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${o("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${o("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${o("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${o("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${o("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${o("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${o("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${o("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Stevne">${o("match_types_stevne")}</option>
          <option value="Trening">${o("match_types_trening")}</option>
          <option value="Klubbmatch">${o("match_types_klubbmatch")}</option>
          <option value="Landsmesterskap">${o("match_types_landsmesterskap")}</option>
          <option value="Internasjonalt">${o("match_types_internasjonalt")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${o("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${o("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${o("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <button class="btn-primary" onclick="createMatch()">${o("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${o("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${o("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${a.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${o("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${a.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${o("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${o("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${o("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${o("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${o("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${a.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${o("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${a.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${o("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${a.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${o("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${o("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${o("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${o("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${o("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${o("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${o("add_result")}</div>
      <div class="modal-close" onclick="closeModal('modal-add')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">Stage Number</div>
        <input class="field-input" type="number" id="new-result-stage">
      </div>
      <div class="field-group">
        <div class="field-label">Time (s)</div>
        <input class="field-input" type="number" step="0.01" id="new-result-time">
      </div>
      <div class="field-group">
        <div class="field-label">Points</div>
        <input class="field-input" type="number" id="new-result-points">
      </div>
      <button class="btn-primary" onclick="addStageResult()">${o("save_result")}</button>
    </div>
  </div>
</div>

</div>
  `,ot(),fe(),C(),j(),be(),J()}function ot(){window.switchTab=ue,window.setFilter=lt,window.openModal=he,window.closeModal=M,window.closeModalOutside=rt,window.createMatch=dt,window.openEditProfile=vt,window.saveProfileData=gt,window.selectPF=pt,window.updatePFOptions=we,window.calcPrognose=J,window.renderMatchList=j,window.selectMatch=ct,window.addShooter=mt,window.addStageResult=ut,window.handleLogout=ht}function ue(s){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(i=>i.classList.remove("active")),c(s).classList.add("active");const t=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(s),e=document.querySelectorAll(".tab-item");e[t]&&e[t].classList.add("active"),s==="screen-home"&&C(),s==="screen-matches"&&j(),s==="screen-results"&&q()}function he(s){c(s).classList.add("open")}function M(s){c(s).classList.remove("open")}function rt(s,t){s.target.id===t&&M(t)}function lt(s,t){_=s,document.querySelectorAll(".filter-chip").forEach(e=>e.classList.remove("active")),t.classList.add("active"),j()}async function dt(){const s={name:h("new-match-name")||"Ny match",type:h("new-match-type")||"Stevne",date:h("new-match-date")||new Date().toISOString().split("T")[0],location:h("new-match-location")||"",plannedStages:I("new-match-stages",6),stages:[],shooters:[],stageDefs:[]},t=await qe(s);t.success?M("modal-new-match"):alert("Kunne ikke opprette match: "+t.error)}function ct(s){T=s;const t=w.find(e=>e.id===s);if(t){const e=t.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(n=>{const r=c(n);r&&(r.textContent=e)})}D&&D(),s&&(D=Ze(s,e=>{const i=w.findIndex(n=>n.id===s);i!==-1&&e&&(w[i]=e,C(),q())})),C(),q(),J(),ue("screen-home")}function C(){var i,n;const s=c("home-content");if(!s)return;const t=w.find(r=>r.id===T);if(!t){s.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let e="";e+='<div class="card">',e+='<div class="mhc-name">'+t.name+"</div>",e+='<div class="mhc-meta">'+me(t.date)+" · "+t.type+"</div>",e+='<div class="mhc-stats">',e+='<div><div class="mhc-val">'+(((i=t.stages)==null?void 0:i.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',e+='<div><div class="mhc-val">'+(((n=t.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',e+="</div>",e+="</div>",t.stages&&t.stages.length>0&&(e+='<div class="section-title">Siste resultater</div>',e+='<div class="card">',t.stages.slice(-3).reverse().forEach(l=>{e+='<div class="stage-row">',e+='<div class="stage-num">S'+l.num+"</div>",e+='<div class="stage-info">',e+='<div class="stage-name">'+(l.name||"Stage "+l.num)+"</div>",e+='<div class="stage-meta">'+l.time+"s · "+l.pts+" pts</div>",e+="</div>",e+='<div class="stage-hf">'+l.hf.toFixed(2)+"</div>",e+="</div>"}),e+="</div>"),s.innerHTML=e}function j(){const s=c("match-list-container");if(!s)return;const t=h("match-search").toLowerCase();let e=w.filter(n=>{var l;if(t&&!n.name.toLowerCase().includes(t)&&!((l=n.location)!=null&&l.toLowerCase().includes(t)))return!1;if(_==="all")return!0;if(_==="active")return n.id===T;if(_==="trening")return n.type==="Trening";if(_==="stevne")return n.type==="Stevne";const r=n.date?new Date(n.date).getFullYear().toString():"";return _===r});if(e.length===0){s.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let i="";e.forEach(n=>{var l;const r=n.id===T;i+=`<div class="match-row" onclick="selectMatch('`+n.id+`')">`,i+='<div class="match-row-icon'+(r?" is-active":"")+'">🏆</div>',i+='<div class="match-row-info">',i+='<div class="match-row-name">'+n.name+"</div>",i+='<div class="match-row-meta">'+me(n.date)+" · "+(n.location||n.type)+"</div>",i+="</div>",i+='<div class="match-row-right">',i+='<div class="match-stg-count">'+(((l=n.stages)==null?void 0:l.length)||0)+"</div>",i+='<div class="match-stg-lbl">stages</div>',i+="</div>",i+="</div>"}),s.innerHTML=i}function q(){var r;const s=c("results-content");if(!s)return;const t=w.find(l=>l.id===T);if(!t){s.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!t.shooters||t.shooters.length===0){s.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let e='<div class="card">';e+='<div class="card-header"><div class="card-title">Standings</div></div>',e+='<div class="standings-table-wrap"><table class="standings-table">',e+='<thead><tr class="standings-header-row">',e+='<th class="standings-th standings-th-rank">#</th>',e+='<th class="standings-th standings-th-shooter">Skytter</th>',e+='<th class="standings-th standings-th-pts">Pts</th>',e+='<th class="standings-th standings-th-pct">%</th>',e+="</tr></thead>",e+="<tbody>";const i=t.shooters.map(l=>{var g;const p=((g=l.stages)==null?void 0:g.reduce((f,m)=>f+(m.pts||0),0))||0;return{...l,totalPts:p}}).sort((l,p)=>p.totalPts-l.totalPts),n=((r=i[0])==null?void 0:r.totalPts)||0;i.forEach((l,p)=>{const g=n>0?(l.totalPts/n*100).toFixed(2):"0.00";e+='<tr class="standings-row">',e+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",e+='<td class="standings-td standings-td-shooter">',e+='<div class="standings-shooter-name">'+l.firstName+" "+l.lastName+"</div>",e+='<div class="standings-shooter-meta">'+l.division+" · "+F(l.pf||"minor")+"</div>",e+="</td>",e+='<td class="standings-td standings-td-pts">'+l.totalPts.toFixed(2)+"</td>",e+='<td class="standings-td standings-td-pct">'+g+"%</td>",e+="</tr>"}),e+="</tbody></table></div>",e+="</div>",s.innerHTML=e}function fe(){const s=S();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const g=c(p);g&&(g.textContent=s)});const e=c("prof-name");e&&(e.textContent=(a.firstName||"")+" "+(a.lastName||""));const i=c("prof-div");i&&(i.textContent=(a.division||"—")+" · "+(a.club||"—"));const n=c("prof-badge-pf");n&&(n.textContent=a.powerFactor?F(a.powerFactor):"—");const r=c("prof-badge-region");r&&(r.textContent=a.region||"—");const l={"info-firstname":a.firstName||"—","info-lastname":a.lastName||"—","info-division":a.division||"—","info-category":a.category||"—","info-pf":a.powerFactor?F(a.powerFactor):"—","info-region":a.region||"—","info-club":a.club||"—"};Object.keys(l).forEach(p=>{const g=c(p);g&&(g.textContent=l[p])}),be()}function be(){const s=[];w.forEach(u=>{u.stages&&u.stages.forEach(y=>s.push(y))});let t=0,e=0,i=0;s.forEach(u=>{t+=u.a||0,e+=(u.a||0)+(u.c||0)+(u.d||0),i+=u.hf||0});const n=s.length?(i/s.length).toFixed(2):"—",r=e?Math.round(t/e*100)+"%":"—",l=c("stat-matches");l&&(l.textContent=w.length);const p=c("stat-stages");p&&(p.textContent=s.length);const g=c("stat-avg-hf");g&&(g.textContent=n);const f=c("stat-a-rate");f&&(f.textContent=r);const m=c("prog-a-rate");m&&(m.textContent=r)}function vt(){c("edit-firstname").value=a.firstName||"",c("edit-lastname").value=a.lastName||"",c("edit-club").value=a.club||"",c("edit-draw").value=a.draw||"",c("edit-reload").value=a.reloadTime||"";let s="";Xe.forEach(i=>{s+='<option value="'+i+'"'+(i===a.division?" selected":"")+">"+i+"</option>"}),c("edit-division").innerHTML=s;let t="";tt.forEach(i=>{t+='<option value="'+i+'"'+(i===a.category?" selected":"")+">"+i+"</option>"}),c("edit-category").innerHTML=t;let e="";st.forEach(i=>{e+='<option value="'+i+'"'+(i===a.region?" selected":"")+">"+i+"</option>"}),c("edit-region").innerHTML=e,we(),he("modal-edit-profile")}function we(){const s=h("edit-division"),t=et[s]||["minor","major"];let e="";t.forEach(i=>{const n=a.powerFactor===i;e+='<label class="pf-option'+(n?" active":"")+`" onclick="selectPF(this,'`+i+`')">`,e+='<input type="radio" name="pf" value="'+i+'">',e+='<div class="pf-label">'+i.toUpperCase()+"</div>",e+='<div class="pf-sub">'+(i==="major"?"≥170 PF":"<170 PF")+"</div>",e+="</label>"}),c("pf-options").innerHTML=e,t.indexOf(a.powerFactor)<0&&(a.powerFactor=t[0])}function pt(s,t){document.querySelectorAll(".pf-option").forEach(e=>e.classList.remove("active")),s.classList.add("active"),a.powerFactor=t}async function gt(){a.firstName=h("edit-firstname").trim()||"",a.lastName=h("edit-lastname").trim()||"",a.division=h("edit-division")||"",a.category=h("edit-category")||"",a.region=h("edit-region")||"",a.club=h("edit-club").trim()||"",a.draw=O("edit-draw")||null,a.reloadTime=O("edit-reload")||null;const s=await Ve(a),t=c("save-profile-btn");s.success?(t.textContent="✓ Lagret!",t.style.background="var(--green)",setTimeout(()=>{t.textContent=o("save_profile"),t.style.background=""},1800)):(t.textContent="❌ Feil!",t.style.background="var(--red)",setTimeout(()=>{t.textContent=o("save_profile"),t.style.background=""},1800)),fe(),J(),C(),M("modal-edit-profile")}function J(){const s=I("prog-shots",12),t=I("prog-targets",6),e=I("prog-steel",2),i=O("prog-move",3),n=O("prog-draw",a.draw||1.42),r=a.division||"Classic",l=a.powerFactor||"minor",p=at(s,r,l);c("prog-reloads").value=p;const g=a.reloadTime||1.8,f=.18,m=n+s*f+p*g+i,u=t*10+e*10,y=m>0?u/m:0;c("prog-hf-out").textContent=y.toFixed(2);let b="";b+='<div class="prog-breakdown-detail">',b+="Trekk: "+n.toFixed(2)+"s · ",b+="Skudd: "+(s*f).toFixed(2)+"s · ",b+="Reload: "+(p*g).toFixed(2)+"s · ",b+="Beveg: "+i.toFixed(2)+"s",b+="</div>",c("prog-breakdown").innerHTML=b}async function mt(){const s=w.find(r=>r.id===T);if(!s)return;const t=h("new-shooter-firstname").trim(),e=h("new-shooter-lastname").trim(),i=h("new-shooter-division")||"Classic";if(!t||!e){alert("Fyll inn navn");return}const n={id:"s_"+Date.now(),isMe:!1,firstName:t,lastName:e,division:i,pf:"minor",club:"",stages:[]};s.shooters||(s.shooters=[]),s.shooters.push(n),await pe(s.id,s),M("modal-add-shooter"),q()}async function ut(){const s=w.find(l=>l.id===T);if(!s)return;const t=I("new-result-stage",1),e=O("new-result-time",0),i=I("new-result-points",0),n=e>0?i/e:0,r={num:t,name:"Stage "+t,hf:n,time:e,pts:i,pf:a.powerFactor||"minor"};s.stages||(s.stages=[]),s.stages.push(r),await pe(s.id,s),M("modal-add"),C()}async function ht(){R&&R(),D&&D(),await Ue(),window.location.reload()}const ye=document.getElementById("app");function ft(){ze(ye,ke)}function ke(){nt(ye)}Oe(s=>{s?ke():ft()});
