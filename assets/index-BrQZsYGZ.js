import{initializeApp as Se}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as _e,onAuthStateChanged as Te,signInWithEmailAndPassword as Ce,createUserWithEmailAndPassword as Ie,signOut as Fe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as $e,getDoc as W,doc as k,setDoc as ie,query as le,collection as de,where as ce,getDocs as Be,onSnapshot as pe,serverTimestamp as K,updateDoc as J,arrayUnion as Me}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Ne,httpsCallable as De}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const Re={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},ge=Se(Re),Y=_e(ge),w=$e(ge),Ae=Ne();let te=null,S=null;function je(i){Te(Y,async t=>{if(t){te=t;try{const e=await W(k(w,"users",t.uid));e.exists()?S={uid:t.uid,...e.data()}:S={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},i(S)}catch(e){console.error("Feil ved lasting av brukerprofil:",e),S={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},i(S)}}else te=null,S=null,i(null)})}async function Oe(i,t){try{const e=(i||"").trim();return{success:!0,user:(await Ce(Y,e,t||"")).user}}catch(e){console.error("Innlogging feilet:",e);let s="Innlogging feilet";return e.code==="auth/user-not-found"||e.code==="auth/wrong-password"||e.code==="auth/invalid-credential"?s="Feil e-post eller passord":e.code==="auth/invalid-email"?s="Ugyldig e-postadresse":e.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function He(i,t,e,s,o,r,d,v,g,h){try{const u=(i||"").trim(),m=t||"",x=(e||"").trim(),b=(s||"").trim(),H=(o||"").trim(),z=(r||"").trim(),Q=(d||"").trim(),N=(v||"minor").trim(),D=(g||"").trim(),V=(h||"").trim(),L=(await Ie(Y,u,m)).user,X=De(Ae,"validateInviteCode");try{await X({code:x,userId:L.uid,userEmail:u})}catch(E){await L.delete();let p="Ugyldig invitasjonskode";return E.code==="functions/not-found"?p="Ugyldig invitasjonskode":E.code==="functions/permission-denied"?p="Denne koden er deaktivert":E.code==="functions/resource-exhausted"?p="Denne koden har nådd maksimalt antall bruk":E.code==="functions/already-exists"?p="Du har allerede brukt denne koden":E.message&&(p=E.message),{success:!1,error:p}}return await ie(k(w,"users",L.uid),{email:u,firstName:b,lastName:H,division:z,category:Q,powerFactor:N,region:D,club:V,role:"user",inviteCode:x,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:L}}catch(u){console.error("Registrering feilet:",u);let m="Registrering feilet";return u.code==="auth/email-already-in-use"?m="E-postadressen er allerede i bruk":u.code==="auth/weak-password"?m="Passordet må være minst 6 tegn":u.code==="auth/invalid-email"?m="Ugyldig e-postadresse":u.message&&(m=u.message),{success:!1,error:m}}}async function ze(){try{return await Fe(Y),{success:!0}}catch(i){return console.error("Utlogging feilet:",i),{success:!1,error:"Kunne ikke logge ut"}}}function I(){return te}function Ve(){return S}const Ge=`
<div class="gdpr-content">
  <h2>Personvernerklæring og samtykke</h2>
  
  <p class="gdpr-intro">
    Ved å registrere deg i IPSC Insight godtar du at vi behandler dine personopplysninger 
    i henhold til denne personvernerklæringen og GDPR (Personvernforordningen).
  </p>

  <h3>1. Behandlingsansvarlig</h3>
  <p>
    IPSC Insight er ansvarlig for behandlingen av dine personopplysninger.
  </p>

  <h3>2. Hvilke opplysninger samler vi inn?</h3>
  <p>Vi behandler følgende personopplysninger om deg:</p>
  <ul>
    <li><strong>Kontaktinformasjon:</strong> E-postadresse</li>
    <li><strong>Personlige data:</strong> Fornavn og etternavn</li>
    <li><strong>IPSC-relaterte opplysninger:</strong> Division, kategori, powerfactor, region og klubb</li>
    <li><strong>Prestasjonsdata:</strong> Match-resultater, stages, skudd, tider og poeng fra IPSC-konkurranser</li>
    <li><strong>Teknisk informasjon:</strong> Bruker-ID, registreringsdato, siste oppdatering</li>
    <li><strong>Invitasjonskode:</strong> For å verifisere din tilgang til tjenesten</li>
  </ul>

  <h3>3. Formål og behandlingsgrunnlag</h3>
  <p>Vi behandler dine personopplysninger for følgende formål:</p>
  <ul>
    <li><strong>Brukerkonto og autentisering:</strong> For å opprette og administrere din konto (behandlingsgrunnlag: samtykke)</li>
    <li><strong>Treningsanalyse:</strong> For å gi deg innsikt i dine prestasjoner og treningsutvikling (behandlingsgrunnlag: samtykke)</li>
    <li><strong>Deling av match-data:</strong> For å dele resultater med andre brukere du inviterer (behandlingsgrunnlag: samtykke)</li>
    <li><strong>Teknisk drift:</strong> For å sikre at tjenesten fungerer korrekt (behandlingsgrunnlag: berettiget interesse)</li>
  </ul>

  <h3>4. Lagring og teknisk løsning</h3>
  <p>Dine opplysninger lagres og behandles ved hjelp av:</p>
  <ul>
    <li><strong>Google Firebase Authentication:</strong> Sikker håndtering av pålogging og brukerkonto</li>
    <li><strong>Google Firebase Firestore:</strong> Databaselagring av brukerprofil og match-data</li>
    <li><strong>Google Firebase Cloud Functions:</strong> Validering av invitasjonskoder og serverlogikk</li>
    <li><strong>GitHub Pages:</strong> Hosting av webapplikasjonen</li>
  </ul>
  <p>
    Alle tjenester er hostet i EU/EØS-regionen og følger GDPR-kravene. 
    Google Firebase er sertifisert under EU-U.S. Data Privacy Framework.
  </p>

  <h3>5. Deling av opplysninger</h3>
  <p>Dine personopplysninger deles kun i følgende tilfeller:</p>
  <ul>
    <li><strong>Match-deltakere:</strong> Når du inviterer andre brukere til å se eller samarbeide om en match, vil de se dine match-resultater og ditt navn</li>
    <li><strong>Tekniske leverandører:</strong> Google Firebase og GitHub (databehandlere) har tilgang til opplysningene som nødvendig for å levere tjenesten</li>
  </ul>
  <p>Vi selger eller utleverer aldri dine opplysninger til tredjeparter for markedsføringsformål.</p>

  <h3>6. Lagringstid</h3>
  <p>
    Dine personopplysninger lagres så lenge du har en aktiv konto hos oss. 
    Når du sletter kontoen din, vil alle dine personopplysninger bli slettet innen 30 dager.
    Match-data du har delt med andre brukere vil fortsatt være synlig for dem, men koblingen til din konto fjernes.
  </p>

  <h3>7. Dine rettigheter</h3>
  <p>Du har følgende rettigheter knyttet til dine personopplysninger:</p>
  <ul>
    <li><strong>Innsyn:</strong> Du kan når som helst be om å få innsyn i hvilke opplysninger vi har om deg</li>
    <li><strong>Retting:</strong> Du kan endre dine profildata direkte i appen</li>
    <li><strong>Sletting:</strong> Du kan slette din konto og alle tilhørende data</li>
    <li><strong>Tilbaketrekking av samtykke:</strong> Du kan når som helst trekke tilbake samtykket ditt ved å slette kontoen</li>
    <li><strong>Dataportabilitet:</strong> Du kan be om å få utlevert dine data i et maskinlesbart format</li>
    <li><strong>Klage:</strong> Du kan klage til Datatilsynet dersom du mener vi behandler dine opplysninger i strid med personvernregelverket</li>
  </ul>

  <h3>8. Informasjonssikkerhet</h3>
  <p>
    Vi bruker Firebase Authentication med sikker kryptering for pålogging. 
    All kommunikasjon mellom deg og tjenesten er kryptert med HTTPS. 
    Tilgangskontroll sikrer at kun du og de du inviterer kan se dine match-data.
  </p>

  <h3>9. Kontaktinformasjon</h3>
  <p>
    Har du spørsmål om personvern eller ønsker å utøve dine rettigheter, kan du kontakte oss på:<br>
    <strong>E-post:</strong> [DIN KONTAKT E-POST HER]
  </p>

  <h3>10. Endringer i personvernerklæringen</h3>
  <p>
    Vi forbeholder oss retten til å oppdatere denne personvernerklæringen. 
    Ved vesentlige endringer vil du bli varslet ved innlogging.
  </p>

  <div class="gdpr-consent-box">
    <p><strong>Ved å godta denne erklæringen samtykker du til:</strong></p>
    <ul>
      <li>At vi lagrer og behandler dine personopplysninger som beskrevet over</li>
      <li>At vi bruker Firebase (Google) som databehandler</li>
      <li>At match-data du deler med andre brukere blir synlig for dem</li>
    </ul>
  </div>

  <p class="gdpr-version">Versjon 1.0 - Sist oppdatert: ${new Date().toLocaleDateString("nb-NO")}</p>
</div>
`;function Ue(i,t){const e=document.getElementById("gdpr-modal");e&&e.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Ge}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const o=s.querySelector(".gdpr-close-btn"),r=s.querySelector(".gdpr-btn-accept"),d=s.querySelector(".gdpr-btn-decline"),v=s.querySelector(".gdpr-modal-overlay"),g=()=>{s.remove()};o.addEventListener("click",()=>{g(),t&&t()}),v.addEventListener("click",()=>{g(),t&&t()}),d.addEventListener("click",()=>{g(),t&&t()}),r.addEventListener("click",()=>{g(),i&&i()}),document.body.style.overflow="hidden";const h=g,u=()=>{document.body.style.overflow="",h()};o.onclick=()=>{u(),t&&t()},v.onclick=()=>{u(),t&&t()},d.onclick=()=>{u(),t&&t()},r.onclick=()=>{u(),i&&i()}}function Ke(){const i=document.createElement("div");return i.className="gdpr-checkbox-container",i.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const t=i.querySelector("#gdpr-open-modal");t&&t.addEventListener("click",e=>{e.preventDefault(),Ue(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),i}function qe(){const i=document.getElementById("gdpr-consent-checkbox");return!i||!i.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function We(i,t){i.innerHTML=`
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

          <div id="gdprCheckboxContainer"></div>

          <button id="registerBtn" class="primary-btn">Opprett bruker</button>
          <button id="cancelRegisterBtn" class="ghost-btn">Avbryt</button>
        </div>

        <div id="error" class="error-text"></div>
      </div>
    </div>
  `;const e={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",o="minor";const r=document.getElementById("error"),d=document.getElementById("loginSection"),v=document.getElementById("registerSection"),g=document.getElementById("showRegisterBtn"),h=document.getElementById("cancelRegisterBtn"),u=document.getElementById("loginBtn"),m=document.getElementById("registerBtn"),x=document.getElementById("langNo"),b=document.getElementById("langEn"),H=document.getElementById("registerPassword"),z=document.getElementById("passwordStrengthBar"),Q=document.getElementById("passwordStrengthText"),N=document.getElementById("pfMinor"),D=document.getElementById("pfMajor");N.onclick=()=>{o="minor",N.classList.add("selected"),D.classList.remove("selected")},D.onclick=()=>{o="major",D.classList.add("selected"),N.classList.remove("selected")};function V(p){let l=0;return p?(p.length>=8&&(l+=1),p.length>=12&&(l+=1),/[a-z]/.test(p)&&/[A-Z]/.test(p)&&(l+=1),/\d/.test(p)&&(l+=1),/[^A-Za-z0-9]/.test(p)&&(l+=1),l<=1?{score:l,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:l===2?{score:l,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:l===3?{score:l,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:l===4?{score:l,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:l,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function G(){const p=e[s],l=H.value,P=V(l);z.style.width=P.width,z.style.background=P.color,Q.innerText=p[P.labelKey]}function L(p){s=p;const l=e[p];document.getElementById("brandSubtitle").innerText=l.subtitle,document.getElementById("loginEmailLabel").innerText=l.loginEmailLabel,document.getElementById("loginEmail").placeholder=l.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=l.loginPasswordLabel,document.getElementById("loginPassword").placeholder=l.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=l.login,document.getElementById("separatorText").innerText=l.or,document.getElementById("showRegisterBtn").innerText=l.showRegister,document.getElementById("registerFirstNameLabel").innerText=l.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=l.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=l.registerLastNameLabel,document.getElementById("registerLastName").placeholder=l.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=l.registerEmailLabel,document.getElementById("registerEmail").placeholder=l.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=l.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=l.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=l.registerPasswordLabel,document.getElementById("registerPassword").placeholder=l.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=l.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=l.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=l.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=l.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=l.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=l.registerRegionLabel,document.getElementById("registerClubLabel").innerText=l.registerClubLabel,document.getElementById("registerCodeLabel").innerText=l.registerCodeLabel,document.getElementById("registerCode").placeholder=l.registerCodePlaceholder,document.getElementById("registerBtn").innerText=l.register,document.getElementById("cancelRegisterBtn").innerText=l.cancel,x.classList.toggle("active",p==="no"),b.classList.toggle("active",p==="en"),G()}function X(){d.classList.remove("active"),v.classList.add("active"),r.innerText="";const p=document.getElementById("gdprCheckboxContainer");if(p&&!p.hasChildNodes()){const l=Ke();p.appendChild(l)}}function E(){v.classList.remove("active"),d.classList.add("active"),r.innerText=""}x.onclick=()=>L("no"),b.onclick=()=>L("en"),g.onclick=X,h.onclick=E,H.oninput=G,u.onclick=async()=>{r.innerText="";const p=document.getElementById("loginEmail").value.trim(),l=document.getElementById("loginPassword").value,P=await Oe(p,l);P.success?t():r.innerText=P.error},m.onclick=async()=>{r.innerText="";const p=e[s],l=document.getElementById("registerFirstName").value.trim(),P=document.getElementById("registerLastName").value.trim(),ee=document.getElementById("registerEmail").value.trim(),se=document.getElementById("registerEmailConfirm").value.trim(),U=document.getElementById("registerPassword").value,ae=document.getElementById("registerPasswordConfirm").value,ne=document.getElementById("registerDivision").value,Pe=document.getElementById("registerCategory").value,Le=document.getElementById("registerRegion").value,Ee=document.getElementById("registerClub").value.trim(),re=document.getElementById("registerCode").value.trim();if(!l||!P){r.innerText=p.missingName;return}if(!ee||!se||!U||!ae||!re){r.innerText=p.missingFields;return}if(!ne){r.innerText=p.missingDivision;return}if(ee!==se){r.innerText=p.emailMismatch;return}if(U!==ae){r.innerText=p.passwordMismatch;return}if(V(U).score<=1){r.innerText=p.weakPassword;return}if(!qe().valid){r.innerText=p.gdprRequired;return}const oe=await He(ee,U,re,l,P,ne,Pe,o,Le,Ee);oe.success?t():r.innerText=oe.error},L("no"),G()}async function Je(i){const t=I();if(!t)return{success:!1,error:"Not authenticated"};try{return await J(k(w,"users",t.uid),{...i,updatedAt:K()}),{success:!0}}catch(e){return console.error("Save profile error:",e),{success:!1,error:e.message}}}async function Ye(){const i=I();if(!i)return null;try{const t=await W(k(w,"users",i.uid));return t.exists()?{uid:i.uid,...t.data()}:null}catch(t){return console.error("Get profile error:",t),null}}async function Ze(){const i=k(w,"counters","matchId");try{const t=await W(i);if(!t.exists())return await ie(i,{value:1}),1;const s=t.data().value+1;return await J(i,{value:s}),s}catch(t){throw console.error("Error getting next match ID:",t),t}}async function Qe(i){const t=I();if(!t)return{success:!1,error:"Not authenticated"};try{const e=await Ze(),s={id:e,...i,searchable:i.searchable!==!1,ownerId:t.uid,participants:[t.uid],createdAt:K(),updatedAt:K()};return await ie(k(w,"matches",e.toString()),s),{success:!0,matchId:e}}catch(e){return console.error("Create match error:",e),{success:!1,error:e.message}}}async function ve(i,t){if(!I())return{success:!1,error:"Not authenticated"};try{return await J(k(w,"matches",i.toString()),{...t,updatedAt:K()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Xe(i){const t=I();if(!t)return{success:!1,error:"Not authenticated"};try{const e=await W(k(w,"matches",i.toString()));if(!e.exists())return{success:!1,error:"Match not found"};const s={id:e.id,...e.data()};return s.searchable?(s.participants.includes(t.uid)||await J(k(w,"matches",i.toString()),{participants:Me(t.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(e){return console.error("Search match error:",e),{success:!1,error:e.message}}}async function et(){const i=I();if(!i)return[];try{const t=le(de(w,"matches"),ce("participants","array-contains",i.uid)),e=await Be(t),s=[];return e.forEach(o=>{s.push({id:o.id,...o.data()})}),s.sort((o,r)=>{var g,h;const d=o.date||((g=o.createdAt)==null?void 0:g.toDate())||new Date(0);return(r.date||((h=r.createdAt)==null?void 0:h.toDate())||new Date(0))-d}),s}catch(t){return console.error("Get user matches error:",t),[]}}function tt(i){const t=I();if(!t)return()=>{};const e=le(de(w,"matches"),ce("participants","array-contains",t.uid));return pe(e,o=>{const r=[];o.forEach(d=>{r.push({id:d.id,...d.data()})}),r.sort((d,v)=>{var u,m;const g=d.date||((u=d.createdAt)==null?void 0:u.toDate())||new Date(0);return(v.date||((m=v.createdAt)==null?void 0:m.toDate())||new Date(0))-g}),i(r)},o=>{console.error("Listen to matches error:",o)})}function it(i,t){return pe(k(w,"matches",i.toString()),s=>{s.exists()?t({id:s.id,...s.data()}):t(null)},s=>{console.error("Listen to match error:",s)})}let n,T=null,F="all",y=[],R=null,A=null;const st={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let ue="no";function a(i){return st[ue][i]||i}const at={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},nt=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],rt={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},ot=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],lt=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function dt(i,t){const e=at[i];return e&&(e[t]||e.minor)||15}function ct(i,t,e){return Math.max(0,Math.ceil(i/dt(t,e))-1)}function $(i){return i.charAt(0).toUpperCase()+i.slice(1)}function me(i){if(!i)return"";try{const t=ue==="no"?"nb-NO":"en-US";return new Date(i).toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric"})}catch{return i}}function c(i){return document.getElementById(i)}function f(i){const t=c(i);return t?t.value:""}function j(i,t){const e=parseFloat(f(i));return isNaN(e)?t||0:e}function B(i,t){const e=parseInt(f(i));return isNaN(e)?t||0:e}function _(){const i=(n==null?void 0:n.firstName)||"",t=(n==null?void 0:n.lastName)||"";return(i.charAt(0)+t.charAt(0)).toUpperCase()||"U"}async function pt(i){var s;const t=await Ye(),e=Ve();t?n=t:n={firstName:e.name||((s=e.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},y=await et(),R&&R(),R=tt(o=>{y=o,O(),C()}),i.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${a("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${_()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${a("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${a("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${a("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${a("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${a("profile")}</span></div>
  </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
  <div class="navbar">
    <div class="nav-title">MATCH<span>ER</span></div>
    <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${_()}</div>
  </div>
  <div class="scroll-content">
    <div class="search-wrap"><span class="search-icon">🔢</span><input class="search-input" id="match-id-search" placeholder="${a("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Søk</button></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${a("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${a("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${a("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${a("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${a("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${a("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${_()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value">0.18s</div><div class="stat-label">Split</div></div>
        <div class="stat-block"><div class="stat-value">${n.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${n.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
    </div>
    <div class="section-title">Stage-parametre</div>
    <div class="card">
      <div class="section-label">Stageinnhold</div>
      <div class="prognose-inputs">
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${a("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${a("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${a("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${a("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${n.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${a("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${n.powerFactor?$(n.powerFactor):"Minor"} · ${n.division||"Classic"}</div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${a("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${a("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${a("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${a("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${a("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${a("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${_()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${a("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${a("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${a("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${a("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${a("profile")}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${_()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${_()}</div>
      <div class="profile-name" id="prof-name">${n.firstName||""} ${n.lastName||""}</div>
      <div class="profile-div" id="prof-div">${n.division||"—"} · ${n.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${n.powerFactor?$(n.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${n.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${a("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${n.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${n.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${n.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${n.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${n.powerFactor?$(n.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${n.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${n.club||"—"}</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Sesongstatistikk</div></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${a("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${a("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${a("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${a("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${a("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${a("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${a("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${a("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${a("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${a("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${a("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Trening">${a("match_types_trening")}</option>
          <option value="Level 1">${a("match_types_level1")}</option>
          <option value="Level 2">${a("match_types_level2")}</option>
          <option value="Level 3">${a("match_types_level3")}</option>
          <option value="Level 4">${a("match_types_level4")}</option>
          <option value="Level 5">${a("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${a("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${a("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="new-match-searchable" checked style="width:18px;height:18px;">
          <span>${a("allow_search")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="createMatch()">${a("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("edit_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("match_name")}</div>
        <input class="field-input" type="text" id="edit-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${a("type")}</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">${a("match_types_trening")}</option>
          <option value="Level 1">${a("match_types_level1")}</option>
          <option value="Level 2">${a("match_types_level2")}</option>
          <option value="Level 3">${a("match_types_level3")}</option>
          <option value="Level 4">${a("match_types_level4")}</option>
          <option value="Level 5">${a("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${a("date")}</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">${a("location")}</div>
        <input class="field-input" type="text" id="edit-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${a("planned_stages")}</div>
        <input class="field-input" type="number" id="edit-match-stages">
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
          <span>${a("allow_search")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="saveEditMatch()">${a("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${n.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${n.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${a("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${a("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${a("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${n.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${n.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${n.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${a("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${a("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${a("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${a("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("add_result")}</div>
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
      <button class="btn-primary" onclick="addStageResult()">${a("save_result")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-create-stage" onclick="closeModalOutside(event,'modal-create-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title" id="stage-modal-title">${a("create_stage")}</div>
      <div class="modal-close" onclick="closeModal('modal-create-stage')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("stage_number")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageNumber(-1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-number" value="1" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageNumber(1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("stage_name")}</div>
        <input class="field-input" type="text" id="stage-name" placeholder="Name">
      </div>
      <div class="field-group">
        <div class="field-label">${a("paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("poppers")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('poppers', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('poppers', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("plates")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('plates', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('plates', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("no_shoots")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('no-shoots', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('no-shoots', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${a("bonus_paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="stage-bonus-included" style="width:18px;height:18px;">
          <span>${a("included")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="saveStage()">${a("save")}</button>
    </div>
  </div>
</div>

</div>
  `,gt(),be(),C(),O(),ye(),Z()}function gt(){window.switchTab=he,window.setFilter=ut,window.openModal=fe,window.closeModal=M,window.closeModalOutside=vt,window.createMatch=mt,window.searchMatchByIdHandler=ht,window.openEditProfile=bt,window.saveProfileData=wt,window.selectPF=yt,window.updatePFOptions=we,window.calcPrognose=Z,window.renderMatchList=O,window.selectMatch=ft,window.addShooter=kt,window.addStageResult=xt,window.handleLogout=Pt}function he(i){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),c(i).classList.add("active");const t=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(i),e=document.querySelectorAll(".tab-item");e[t]&&e[t].classList.add("active"),i==="screen-home"&&C(),i==="screen-matches"&&O(),i==="screen-results"&&q()}function fe(i){c(i).classList.add("open")}function M(i){c(i).classList.remove("open")}function vt(i,t){i.target.id===t&&M(t)}function ut(i,t){F=i,document.querySelectorAll(".filter-chip").forEach(e=>e.classList.remove("active")),t.classList.add("active"),O()}async function mt(){var e;const i={name:f("new-match-name")||"Ny match",type:f("new-match-type")||"Trening",date:f("new-match-date")||new Date().toISOString().split("T")[0],location:f("new-match-location")||"",plannedStages:B("new-match-stages",6),searchable:((e=c("new-match-searchable"))==null?void 0:e.checked)!==!1,stages:[],shooters:[],stageDefs:[]},t=await Qe(i);t.success?(M("modal-new-match"),c("new-match-name").value="",c("new-match-location").value="",c("new-match-stages").value="6",c("new-match-searchable")&&(c("new-match-searchable").checked=!0)):alert("Kunne ikke opprette match: "+t.error)}async function ht(){const i=f("match-id-search").trim();if(!i){alert("Skriv inn et match-ID");return}const t=await Xe(i);t.success?(alert(`Match funnet: ${t.match.name} (ID: ${t.match.id})`),c("match-id-search").value=""):alert(`Fant ingen match med ID ${i}${t.error?": "+t.error:""}`)}function ft(i){T=i;const t=y.find(e=>e.id==i);if(t){const e=t.id?"Match ID "+t.id+" "+t.name:t.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(o=>{const r=c(o);r&&(r.textContent=e)})}A&&A(),i&&(A=it(i,e=>{const s=y.findIndex(o=>o.id==i);s!==-1&&e&&(y[s]=e,C(),q())})),C(),q(),Z(),he("screen-home")}function C(){var s,o;const i=c("home-content");if(!i)return;const t=y.find(r=>r.id===T);if(!t){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let e="";e+='<div class="card">',e+='<div class="mhc-name">'+t.name+"</div>",e+='<div class="mhc-meta">'+me(t.date)+" · "+t.type+"</div>",e+='<div class="mhc-stats">',e+='<div><div class="mhc-val">'+(((s=t.stages)==null?void 0:s.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',e+='<div><div class="mhc-val">'+(((o=t.shooters)==null?void 0:o.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',e+="</div>",e+='<div style="display:flex;gap:10px;margin-top:15px;">',e+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',e+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',e+="</div>",e+="</div>",t.stages&&t.stages.length>0&&(e+='<div class="section-title">Stages</div>',e+='<div class="card">',t.stages.forEach((r,d)=>{e+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+d+')">',e+='<div class="stage-num">S'+(r.number||d+1)+"</div>",e+='<div class="stage-info">',e+='<div class="stage-name">'+(r.name||"Stage "+(r.number||d+1))+"</div>",e+='<div class="stage-meta">',r.paperTargets&&(e+="Paper: "+r.paperTargets+" "),r.poppers&&(e+="Poppers: "+r.poppers+" "),r.plates&&(e+="Plates: "+r.plates+" "),r.noShoots&&(e+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(e+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),e+="</div>",e+="</div>",e+="</div>"}),e+="</div>"),i.innerHTML=e}function O(){const i=c("match-list-container");if(!i)return;let t=y.filter(s=>{if(F==="all")return!0;if(F==="active")return s.id===T;if(F==="trening")return s.type==="Trening";if(F==="stevne")return s.type==="Stevne";const o=s.date?new Date(s.date).getFullYear().toString():"";return F===o});if(t.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let e="";t.forEach(s=>{var d;const o=s.id===T,r=s.id?"Match ID "+s.id+" "+s.name:s.name;e+=`<div class="match-row" onclick="selectMatch('`+s.id+`')">`,e+='<div class="match-row-icon'+(o?" is-active":"")+'">🏆</div>',e+='<div class="match-row-info">',e+='<div class="match-row-name">'+r+"</div>",e+='<div class="match-row-meta">'+me(s.date)+" · "+(s.location||s.type)+"</div>",e+="</div>",e+='<div class="match-row-right">',e+='<div class="match-stg-count">'+(((d=s.stages)==null?void 0:d.length)||0)+"</div>",e+='<div class="match-stg-lbl">stages</div>',e+="</div>",e+="</div>"}),i.innerHTML=e}function q(){var r;const i=c("results-content");if(!i)return;const t=y.find(d=>d.id===T);if(!t){i.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!t.shooters||t.shooters.length===0){i.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let e='<div class="card">';e+='<div class="card-header"><div class="card-title">Standings</div></div>',e+='<div class="standings-table-wrap"><table class="standings-table">',e+='<thead><tr class="standings-header-row">',e+='<th class="standings-th standings-th-rank">#</th>',e+='<th class="standings-th standings-th-shooter">Skytter</th>',e+='<th class="standings-th standings-th-pts">Pts</th>',e+='<th class="standings-th standings-th-pct">%</th>',e+="</tr></thead>",e+="<tbody>";const s=t.shooters.map(d=>{var g;const v=((g=d.stages)==null?void 0:g.reduce((h,u)=>h+(u.pts||0),0))||0;return{...d,totalPts:v}}).sort((d,v)=>v.totalPts-d.totalPts),o=((r=s[0])==null?void 0:r.totalPts)||0;s.forEach((d,v)=>{const g=o>0?(d.totalPts/o*100).toFixed(2):"0.00";e+='<tr class="standings-row">',e+='<td class="standings-td standings-td-rank">'+(v+1)+"</td>",e+='<td class="standings-td standings-td-shooter">',e+='<div class="standings-shooter-name">'+d.firstName+" "+d.lastName+"</div>",e+='<div class="standings-shooter-meta">'+d.division+" · "+$(d.pf||"minor")+"</div>",e+="</td>",e+='<td class="standings-td standings-td-pts">'+d.totalPts.toFixed(2)+"</td>",e+='<td class="standings-td standings-td-pct">'+g+"%</td>",e+="</tr>"}),e+="</tbody></table></div>",e+="</div>",i.innerHTML=e}function be(){const i=_();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(v=>{const g=c(v);g&&(g.textContent=i)});const e=c("prof-name");e&&(e.textContent=(n.firstName||"")+" "+(n.lastName||""));const s=c("prof-div");s&&(s.textContent=(n.division||"—")+" · "+(n.club||"—"));const o=c("prof-badge-pf");o&&(o.textContent=n.powerFactor?$(n.powerFactor):"—");const r=c("prof-badge-region");r&&(r.textContent=n.region||"—");const d={"info-firstname":n.firstName||"—","info-lastname":n.lastName||"—","info-division":n.division||"—","info-category":n.category||"—","info-pf":n.powerFactor?$(n.powerFactor):"—","info-region":n.region||"—","info-club":n.club||"—"};Object.keys(d).forEach(v=>{const g=c(v);g&&(g.textContent=d[v])}),ye()}function ye(){const i=[];y.forEach(m=>{m.stages&&m.stages.forEach(x=>i.push(x))});let t=0,e=0,s=0;i.forEach(m=>{t+=m.a||0,e+=(m.a||0)+(m.c||0)+(m.d||0),s+=m.hf||0});const o=i.length?(s/i.length).toFixed(2):"—",r=e?Math.round(t/e*100)+"%":"—",d=c("stat-matches");d&&(d.textContent=y.length);const v=c("stat-stages");v&&(v.textContent=i.length);const g=c("stat-avg-hf");g&&(g.textContent=o);const h=c("stat-a-rate");h&&(h.textContent=r);const u=c("prog-a-rate");u&&(u.textContent=r)}function bt(){c("edit-firstname").value=n.firstName||"",c("edit-lastname").value=n.lastName||"",c("edit-club").value=n.club||"",c("edit-draw").value=n.draw||"",c("edit-reload").value=n.reloadTime||"";let i="";nt.forEach(s=>{i+='<option value="'+s+'"'+(s===n.division?" selected":"")+">"+s+"</option>"}),c("edit-division").innerHTML=i;let t="";ot.forEach(s=>{t+='<option value="'+s+'"'+(s===n.category?" selected":"")+">"+s+"</option>"}),c("edit-category").innerHTML=t;let e="";lt.forEach(s=>{e+='<option value="'+s+'"'+(s===n.region?" selected":"")+">"+s+"</option>"}),c("edit-region").innerHTML=e,we(),fe("modal-edit-profile")}function we(){const i=f("edit-division"),t=rt[i]||["minor","major"];let e="";t.forEach(s=>{const o=n.powerFactor===s;e+='<label class="pf-option'+(o?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,e+='<input type="radio" name="pf" value="'+s+'">',e+='<div class="pf-label">'+s.toUpperCase()+"</div>",e+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",e+="</label>"}),c("pf-options").innerHTML=e,t.indexOf(n.powerFactor)<0&&(n.powerFactor=t[0])}function yt(i,t){document.querySelectorAll(".pf-option").forEach(e=>e.classList.remove("active")),i.classList.add("active"),n.powerFactor=t}async function wt(){n.firstName=f("edit-firstname").trim()||"",n.lastName=f("edit-lastname").trim()||"",n.division=f("edit-division")||"",n.category=f("edit-category")||"",n.region=f("edit-region")||"",n.club=f("edit-club").trim()||"",n.draw=j("edit-draw")||null,n.reloadTime=j("edit-reload")||null;const i=await Je(n),t=c("save-profile-btn");i.success?(t.textContent="✓ Lagret!",t.style.background="var(--green)",setTimeout(()=>{t.textContent=a("save_profile"),t.style.background=""},1800)):(t.textContent="❌ Feil!",t.style.background="var(--red)",setTimeout(()=>{t.textContent=a("save_profile"),t.style.background=""},1800)),be(),Z(),C(),M("modal-edit-profile")}function Z(){const i=B("prog-shots",12),t=B("prog-targets",6),e=B("prog-steel",2),s=j("prog-move",3),o=j("prog-draw",n.draw||1.42),r=n.division||"Classic",d=n.powerFactor||"minor",v=ct(i,r,d);c("prog-reloads").value=v;const g=n.reloadTime||1.8,h=.18,u=o+i*h+v*g+s,m=t*10+e*10,x=u>0?m/u:0;c("prog-hf-out").textContent=x.toFixed(2);let b="";b+='<div class="prog-breakdown-detail">',b+="Trekk: "+o.toFixed(2)+"s · ",b+="Skudd: "+(i*h).toFixed(2)+"s · ",b+="Reload: "+(v*g).toFixed(2)+"s · ",b+="Beveg: "+s.toFixed(2)+"s",b+="</div>",c("prog-breakdown").innerHTML=b}async function kt(){const i=y.find(r=>r.id===T);if(!i)return;const t=f("new-shooter-firstname").trim(),e=f("new-shooter-lastname").trim(),s=f("new-shooter-division")||"Classic";if(!t||!e){alert("Fyll inn navn");return}const o={id:"s_"+Date.now(),isMe:!1,firstName:t,lastName:e,division:s,pf:"minor",club:"",stages:[]};i.shooters||(i.shooters=[]),i.shooters.push(o),await ve(i.id,i),M("modal-add-shooter"),q()}async function xt(){const i=y.find(d=>d.id===T);if(!i)return;const t=B("new-result-stage",1),e=j("new-result-time",0),s=B("new-result-points",0),o=e>0?s/e:0,r={num:t,name:"Stage "+t,hf:o,time:e,pts:s,pf:n.powerFactor||"minor"};i.stages||(i.stages=[]),i.stages.push(r),await ve(i.id,i),M("modal-add"),C()}async function Pt(){R&&R(),A&&A(),await ze(),window.location.reload()}const ke=document.getElementById("app");function Lt(){We(ke,xe)}function xe(){pt(ke)}je(i=>{i?xe():Lt()});
