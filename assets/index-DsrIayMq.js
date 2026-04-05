import{initializeApp as $e}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as Ne,onAuthStateChanged as Be,signInWithEmailAndPassword as De,createUserWithEmailAndPassword as Ae,signOut as Re}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as je,getDoc as V,doc as k,setDoc as X,query as ee,collection as te,where as ie,getDocs as ye,onSnapshot as ce,serverTimestamp as Y,updateDoc as B,arrayUnion as we,deleteDoc as Oe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as He,httpsCallable as ze}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const l of d.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(n){if(n.ep)return;n.ep=!0;const d=e(n);fetch(n.href,d)}})();const Ue={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},ke=$e(Ue),se=Ne(ke),b=je(ke),Ve=He();let de=null,$=null;function Ge(i){Be(se,async t=>{if(t){de=t;try{const e=await V(k(b,"users",t.uid));e.exists()?$={uid:t.uid,...e.data()}:$={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},i($)}catch(e){console.error("Feil ved lasting av brukerprofil:",e),$={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},i($)}}else de=null,$=null,i(null)})}async function Ke(i,t){try{const e=(i||"").trim();return{success:!0,user:(await De(se,e,t||"")).user}}catch(e){console.error("Innlogging feilet:",e);let s="Innlogging feilet";return e.code==="auth/user-not-found"||e.code==="auth/wrong-password"||e.code==="auth/invalid-credential"?s="Feil e-post eller passord":e.code==="auth/invalid-email"?s="Ugyldig e-postadresse":e.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function qe(i,t,e,s,n,d,l,p,g,y){try{const u=(i||"").trim(),m=t||"",E=(e||"").trim(),P=(s||"").trim(),G=(n||"").trim(),K=(d||"").trim(),re=(l||"").trim(),j=(p||"minor").trim(),O=(g||"").trim(),q=(y||"").trim(),T=(await Ae(se,u,m)).user,oe=ze(Ve,"validateInviteCode");try{await oe({code:E,userId:T.uid,userEmail:u})}catch(C){await T.delete();let v="Ugyldig invitasjonskode";return C.code==="functions/not-found"?v="Ugyldig invitasjonskode":C.code==="functions/permission-denied"?v="Denne koden er deaktivert":C.code==="functions/resource-exhausted"?v="Denne koden har nådd maksimalt antall bruk":C.code==="functions/already-exists"?v="Du har allerede brukt denne koden":C.message&&(v=C.message),{success:!1,error:v}}return await X(k(b,"users",T.uid),{email:u,firstName:P,lastName:G,division:K,category:re,powerFactor:j,region:O,club:q,role:"user",inviteCode:E,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:T}}catch(u){console.error("Registrering feilet:",u);let m="Registrering feilet";return u.code==="auth/email-already-in-use"?m="E-postadressen er allerede i bruk":u.code==="auth/weak-password"?m="Passordet må være minst 6 tegn":u.code==="auth/invalid-email"?m="Ugyldig e-postadresse":u.message&&(m=u.message),{success:!1,error:m}}}async function We(){try{return await Re(se),{success:!0}}catch(i){return console.error("Utlogging feilet:",i),{success:!1,error:"Kunne ikke logge ut"}}}function S(){return de}function pe(){return $}const Je=`
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
`;function Ye(i,t){const e=document.getElementById("gdpr-modal");e&&e.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Je}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const n=s.querySelector(".gdpr-close-btn"),d=s.querySelector(".gdpr-btn-accept"),l=s.querySelector(".gdpr-btn-decline"),p=s.querySelector(".gdpr-modal-overlay"),g=()=>{s.remove()};n.addEventListener("click",()=>{g(),t&&t()}),p.addEventListener("click",()=>{g(),t&&t()}),l.addEventListener("click",()=>{g(),t&&t()}),d.addEventListener("click",()=>{g(),i&&i()}),document.body.style.overflow="hidden";const y=g,u=()=>{document.body.style.overflow="",y()};n.onclick=()=>{u(),t&&t()},p.onclick=()=>{u(),t&&t()},l.onclick=()=>{u(),t&&t()},d.onclick=()=>{u(),i&&i()}}function Qe(){const i=document.createElement("div");return i.className="gdpr-checkbox-container",i.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const t=i.querySelector("#gdpr-open-modal");t&&t.addEventListener("click",e=>{e.preventDefault(),Ye(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),i}function Ze(){const i=document.getElementById("gdpr-consent-checkbox");return!i||!i.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Xe(i,t){i.innerHTML=`
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
  `;const e={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",n="minor";const d=document.getElementById("error"),l=document.getElementById("loginSection"),p=document.getElementById("registerSection"),g=document.getElementById("showRegisterBtn"),y=document.getElementById("cancelRegisterBtn"),u=document.getElementById("loginBtn"),m=document.getElementById("registerBtn"),E=document.getElementById("langNo"),P=document.getElementById("langEn"),G=document.getElementById("registerPassword"),K=document.getElementById("passwordStrengthBar"),re=document.getElementById("passwordStrengthText"),j=document.getElementById("pfMinor"),O=document.getElementById("pfMajor");j.onclick=()=>{n="minor",j.classList.add("selected"),O.classList.remove("selected")},O.onclick=()=>{n="major",O.classList.add("selected"),j.classList.remove("selected")};function q(v){let c=0;return v?(v.length>=8&&(c+=1),v.length>=12&&(c+=1),/[a-z]/.test(v)&&/[A-Z]/.test(v)&&(c+=1),/\d/.test(v)&&(c+=1),/[^A-Za-z0-9]/.test(v)&&(c+=1),c<=1?{score:c,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:c===2?{score:c,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:c===3?{score:c,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:c===4?{score:c,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:c,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function W(){const v=e[s],c=G.value,I=q(c);K.style.width=I.width,K.style.background=I.color,re.innerText=v[I.labelKey]}function T(v){s=v;const c=e[v];document.getElementById("brandSubtitle").innerText=c.subtitle,document.getElementById("loginEmailLabel").innerText=c.loginEmailLabel,document.getElementById("loginEmail").placeholder=c.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=c.loginPasswordLabel,document.getElementById("loginPassword").placeholder=c.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=c.login,document.getElementById("separatorText").innerText=c.or,document.getElementById("showRegisterBtn").innerText=c.showRegister,document.getElementById("registerFirstNameLabel").innerText=c.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=c.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=c.registerLastNameLabel,document.getElementById("registerLastName").placeholder=c.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=c.registerEmailLabel,document.getElementById("registerEmail").placeholder=c.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=c.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=c.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=c.registerPasswordLabel,document.getElementById("registerPassword").placeholder=c.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=c.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=c.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=c.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=c.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=c.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=c.registerRegionLabel,document.getElementById("registerClubLabel").innerText=c.registerClubLabel,document.getElementById("registerCodeLabel").innerText=c.registerCodeLabel,document.getElementById("registerCode").placeholder=c.registerCodePlaceholder,document.getElementById("registerBtn").innerText=c.register,document.getElementById("cancelRegisterBtn").innerText=c.cancel,E.classList.toggle("active",v==="no"),P.classList.toggle("active",v==="en"),W()}function oe(){l.classList.remove("active"),p.classList.add("active"),d.innerText="";const v=document.getElementById("gdprCheckboxContainer");if(v&&!v.hasChildNodes()){const c=Qe();v.appendChild(c)}}function C(){p.classList.remove("active"),l.classList.add("active"),d.innerText=""}E.onclick=()=>T("no"),P.onclick=()=>T("en"),g.onclick=oe,y.onclick=C,G.oninput=W,u.onclick=async()=>{d.innerText="";const v=document.getElementById("loginEmail").value.trim(),c=document.getElementById("loginPassword").value,I=await Ke(v,c);I.success?t():d.innerText=I.error},m.onclick=async()=>{d.innerText="";const v=e[s],c=document.getElementById("registerFirstName").value.trim(),I=document.getElementById("registerLastName").value.trim(),le=document.getElementById("registerEmail").value.trim(),ue=document.getElementById("registerEmailConfirm").value.trim(),J=document.getElementById("registerPassword").value,me=document.getElementById("registerPasswordConfirm").value,he=document.getElementById("registerDivision").value,Ce=document.getElementById("registerCategory").value,Me=document.getElementById("registerRegion").value,Fe=document.getElementById("registerClub").value.trim(),fe=document.getElementById("registerCode").value.trim();if(!c||!I){d.innerText=v.missingName;return}if(!le||!ue||!J||!me||!fe){d.innerText=v.missingFields;return}if(!he){d.innerText=v.missingDivision;return}if(le!==ue){d.innerText=v.emailMismatch;return}if(J!==me){d.innerText=v.passwordMismatch;return}if(q(J).score<=1){d.innerText=v.weakPassword;return}if(!Ze().valid){d.innerText=v.gdprRequired;return}const be=await qe(le,J,fe,c,I,he,Ce,n,Me,Fe);be.success?t():d.innerText=be.error},T("no"),W()}async function et(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{return await B(k(b,"users",t.uid),{...i,updatedAt:Y()}),{success:!0}}catch(e){return console.error("Save profile error:",e),{success:!1,error:e.message}}}async function tt(){const i=S();if(!i)return null;try{const t=await V(k(b,"users",i.uid));return t.exists()?{uid:i.uid,...t.data()}:null}catch(t){return console.error("Get profile error:",t),null}}async function it(){const i=k(b,"counters","matchId");try{const t=await V(i);if(!t.exists())return await X(i,{value:1}),1;const s=t.data().value+1;return await B(i,{value:s}),s}catch(t){throw console.error("Error getting next match ID:",t),t}}async function st(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{const e=await it(),s={id:e,...i,searchable:i.searchable!==!1,ownerId:t.uid,participants:[t.uid],createdAt:Y(),updatedAt:Y()};return await X(k(b,"matches",e.toString()),s),{success:!0,matchId:e}}catch(e){return console.error("Create match error:",e),{success:!1,error:e.message}}}async function ae(i,t){if(!S())return{success:!1,error:"Not authenticated"};try{return await B(k(b,"matches",i.toString()),{...t,updatedAt:Y()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function at(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{const e=await V(k(b,"matches",i.toString()));return e.exists()?e.data().ownerId!==t.uid?{success:!1,error:"Only the creator can delete this match"}:(await Oe(k(b,"matches",i.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(e){return console.error("Delete match error:",e),{success:!1,error:e.message}}}async function nt(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{const e=await V(k(b,"matches",i.toString()));if(!e.exists())return{success:!1,error:"Match not found"};const s={id:e.id,...e.data()};return s.searchable?(s.participants.includes(t.uid)||await B(k(b,"matches",i.toString()),{participants:we(t.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(e){return console.error("Search match error:",e),{success:!1,error:e.message}}}async function rt(){const i=S();if(!i)return[];try{const t=ee(te(b,"matches"),ie("participants","array-contains",i.uid)),e=await ye(t),s=[];return e.forEach(n=>{s.push({id:n.id,...n.data()})}),s.sort((n,d)=>{var g,y;const l=n.date||((g=n.createdAt)==null?void 0:g.toDate())||new Date(0);return(d.date||((y=d.createdAt)==null?void 0:y.toDate())||new Date(0))-l}),s}catch(t){return console.error("Get user matches error:",t),[]}}function ot(i){const t=S();if(!t)return()=>{};const e=ee(te(b,"matches"),ie("participants","array-contains",t.uid));return ce(e,n=>{const d=[];n.forEach(l=>{d.push({id:l.id,...l.data()})}),d.sort((l,p)=>{var u,m;const g=l.date||((u=l.createdAt)==null?void 0:u.toDate())||new Date(0);return(p.date||((m=p.createdAt)==null?void 0:m.toDate())||new Date(0))-g}),i(d)},n=>{console.error("Listen to matches error:",n)})}function lt(i,t){return ce(k(b,"matches",i.toString()),s=>{s.exists()?t({id:s.id,...s.data()}):t(null)},s=>{console.error("Listen to match error:",s)})}async function xe(i,t){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const s=ee(te(b,"users"),ie("email","==",i)),n=await ye(s);if(n.empty)return{success:!1,error:"Bruker ikke funnet"};const l=n.docs[0].id;return await X(k(b,"users",l,"invitations",t.matchId.toString()),{matchId:t.matchId,matchName:t.matchName,invitedBy:e.email,invitedByUid:e.uid,timestamp:new Date().toISOString(),status:"pending"}),{success:!0}}catch(s){return console.error("Send invitation error:",s),{success:!1,error:s.message}}}async function dt(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{return await B(k(b,"matches",i.toString()),{participants:we(t.uid)}),await B(k(b,"users",t.uid,"invitations",i.toString()),{status:"accepted"}),{success:!0}}catch(e){return console.error("Accept invitation error:",e),{success:!1,error:e.message}}}async function ct(i){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{return await B(k(b,"users",t.uid,"invitations",i.toString()),{status:"declined"}),{success:!0}}catch(e){return console.error("Decline invitation error:",e),{success:!1,error:e.message}}}function pt(i){const t=S();if(!t)return()=>{};const e=te(b,"users",t.uid,"invitations"),s=ee(e,ie("status","==","pending"));return ce(s,n=>{const d=[];n.forEach(l=>{d.push({id:l.id,...l.data()})}),i(d)})}let r,w=null,D="all",f=[],H=null,z=null;const vt={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let Pe="no";function a(i){return vt[Pe][i]||i}const gt={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},ut=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],mt={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},ht=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],ft=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function bt(i,t){const e=gt[i];return e&&(e[t]||e.minor)||15}function yt(i,t,e){return Math.max(0,Math.ceil(i/bt(t,e))-1)}function A(i){return i.charAt(0).toUpperCase()+i.slice(1)}function Se(i){if(!i)return"";try{const t=Pe==="no"?"nb-NO":"en-US";return new Date(i).toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric"})}catch{return i}}function o(i){return document.getElementById(i)}function h(i){const t=o(i);return t?t.value:""}function U(i,t){const e=parseFloat(h(i));return isNaN(e)?t||0:e}function x(i,t){const e=parseInt(h(i));return isNaN(e)?t||0:e}function N(){const i=(r==null?void 0:r.firstName)||"",t=(r==null?void 0:r.lastName)||"";return(i.charAt(0)+t.charAt(0)).toUpperCase()||"U"}async function wt(i){var s;const t=await tt(),e=pe();t?r=t:r={firstName:e.name||((s=e.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},f=await rt(),H&&H(),H=ot(n=>{f=n,R(),M()}),pt(n=>{_=n,ge()}),i.innerHTML=`
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
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${N()}</div>
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
    <div style="display:flex;align-items:center;gap:15px;">
      <div style="position:relative;cursor:pointer;" onclick="openInvitationsModal()">
        <div style="font-size:24px;">🔔</div>
        <div id="invitation-badge" style="display:none;position:absolute;top:-5px;right:-5px;background:#ef4444;color:white;border-radius:50%;width:20px;height:20px;font-size:12px;font-weight:bold;display:flex;align-items:center;justify-content:center;">0</div>
      </div>
      <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${N()}</div>
    </div>
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
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${N()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value">0.18s</div><div class="stat-label">Split</div></div>
        <div class="stat-block"><div class="stat-value">${r.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${r.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
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
        <div class="prog-field"><input type="number" id="prog-draw" value="${r.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${a("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${r.powerFactor?A(r.powerFactor):"Minor"} · ${r.division||"Classic"}</div>
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
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${N()}</div>
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
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${N()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${N()}</div>
      <div class="profile-name" id="prof-name">${r.firstName||""} ${r.lastName||""}</div>
      <div class="profile-div" id="prof-div">${r.division||"—"} · ${r.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${r.powerFactor?A(r.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${r.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${a("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${r.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${r.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${r.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${r.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${r.powerFactor?A(r.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${r.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${r.club||"—"}</span>
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
      <div class="field-group">
        <div class="field-label">${a("invite_user")} (${a("stages_added_later").toLowerCase()})</div>
        <div id="invite-emails-container">
          <div style="display:flex;gap:8px;margin-bottom:8px;">
            <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
            <button onclick="addInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
          </div>
        </div>
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
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;margin-top:10px;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;display:none;">Slett match</button>
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
        <input class="field-input" type="text" id="edit-firstname" value="${r.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${r.lastName||""}">
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
        <input class="field-input" type="text" id="edit-club" value="${r.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${r.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${r.reloadTime||""}">
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

<div class="modal-overlay" id="modal-invite-user" onclick="closeModalOutside(event,'modal-invite-user')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("invite_user")}</div>
      <div class="modal-close" onclick="closeModal('modal-invite-user')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${a("search_user_email")}</div>
        <input class="field-input" type="email" id="invite-user-email" placeholder="bruker@example.com">
      </div>
      <button class="btn-primary" onclick="sendInvitation()">${a("invite")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-invitations" onclick="closeModalOutside(event,'modal-invitations')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${a("invitations")}</div>
      <div class="modal-close" onclick="closeModal('modal-invitations')">✕</div>
    </div>
    <div class="modal-body" id="invitations-list">
      <!-- Populated by JavaScript -->
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-confirm-delete" onclick="closeModalOutside(event,'modal-confirm-delete')">
  <div class="modal-sheet" onclick="event.stopPropagation()" style="max-width:400px;">
    <div class="modal-header">
      <div class="modal-title">Slett match</div>
      <div class="modal-close" onclick="closeModal('modal-confirm-delete')">✕</div>
    </div>
    <div class="modal-body">
      <p style="margin-bottom:15px;">Er du sikker på at du vil slette denne matchen?</p>
      <div id="delete-match-name" style="padding:12px;background:#374151;border-radius:8px;margin-bottom:15px;font-weight:600;"></div>
      <p style="color:#ef4444;margin-bottom:20px;">Denne handlingen kan ikke angres.</p>
      <div style="display:flex;gap:10px;">
        <button onclick="closeModal('modal-confirm-delete')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Avbryt</button>
        <button onclick="deleteMatchConfirmed()" style="flex:1;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>
      </div>
    </div>
  </div>
</div>

</div>
  `,kt(),Le(),M(),R(),Ee(),ne()}function kt(){window.switchTab=xt,window.setFilter=St,window.openModal=F,window.closeModal=L,window.closeModalOutside=Pt,window.createMatch=Lt,window.searchMatchByIdHandler=Et,window.openEditProfile=Ut,window.saveProfileData=Gt,window.selectPF=Vt,window.updatePFOptions=Ie,window.calcPrognose=ne,window.renderMatchList=R,window.selectMatch=It,window.addShooter=Kt,window.addStageResult=qt,window.handleLogout=Wt,window.openEditMatch=_t,window.saveEditMatch=Tt,window.openCreateStage=Ft,window.openEditStage=$t,window.changeStageNumber=Nt,window.changeStageField=Bt,window.saveStage=Dt,window.openInviteUser=Rt,window.sendInvitation=jt,window.openInvitationsModal=Ot,window.acceptInvitation=Ht,window.declineInvitation=zt,window.addInviteEmailField=At,window.confirmDeleteMatch=Ct,window.deleteMatchConfirmed=Mt}function xt(i){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),o(i).classList.add("active");const t=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(i),e=document.querySelectorAll(".tab-item");e[t]&&e[t].classList.add("active"),i==="screen-home"&&M(),i==="screen-matches"&&R(),i==="screen-results"&&Z()}function F(i){o(i).classList.add("open")}function L(i){o(i).classList.remove("open")}function Pt(i,t){i.target.id===t&&L(t)}function St(i,t){D=i,document.querySelectorAll(".filter-chip").forEach(e=>e.classList.remove("active")),t.classList.add("active"),R()}async function Lt(){var e;const i={name:h("new-match-name")||"Ny match",type:h("new-match-type")||"Trening",date:h("new-match-date")||new Date().toISOString().split("T")[0],location:h("new-match-location")||"",plannedStages:x("new-match-stages",6),searchable:((e=o("new-match-searchable"))==null?void 0:e.checked)!==!1,stages:[],shooters:[],stageDefs:[]},t=await st(i);if(t.success){const s=document.querySelectorAll(".invite-email-input"),n=Array.from(s).map(p=>p.value.trim()).filter(p=>p.length>0);let d=0;for(const p of n)(await xe(p,{matchId:t.matchId,matchName:i.name})).success&&d++;L("modal-new-match"),o("new-match-name").value="",o("new-match-location").value="",o("new-match-stages").value="6",o("new-match-searchable")&&(o("new-match-searchable").checked=!0);const l=o("invite-emails-container");l&&(l.innerHTML=`
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
          <button onclick="addInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
        </div>
      `),d>0&&alert(`Match opprettet! Invitasjoner sendt til ${d} bruker(e).`)}else alert("Kunne ikke opprette match: "+t.error)}async function Et(){const i=h("match-id-search").trim();if(!i){alert("Skriv inn et match-ID");return}const t=await nt(i);t.success?(alert(`Match funnet: ${t.match.name} (ID: ${t.match.id})`),o("match-id-search").value=""):alert(`Fant ingen match med ID ${i}${t.error?": "+t.error:""}`)}function It(i){w=i;const t=f.find(e=>e.id==i);if(t){const e=t.id?"Match ID "+t.id+" "+t.name:t.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(n=>{const d=o(n);d&&(d.textContent=e)})}z&&z(),i&&(z=lt(i,e=>{const s=f.findIndex(n=>n.id==i);s!==-1&&e&&(f[s]=e,M(),Z())})),M(),Z(),ne()}function _t(){const i=f.find(s=>s.id==w);if(!i){alert("Ingen match valgt");return}o("edit-match-name").value=i.name||"",o("edit-match-type").value=i.type||"Trening",o("edit-match-date").value=i.date||"",o("edit-match-location").value=i.location||"",o("edit-match-stages").value=i.plannedStages||0,o("edit-match-searchable")&&(o("edit-match-searchable").checked=i.searchable!==!1);const t=pe(),e=o("delete-match-btn");e&&t&&i.ownerId===t.uid?e.style.display="block":e&&(e.style.display="none"),F("modal-edit-match")}async function Tt(){var s;const i=f.find(n=>n.id==w);if(!i){alert("Ingen match valgt");return}const t={name:h("edit-match-name")||i.name,type:h("edit-match-type")||i.type,date:h("edit-match-date")||i.date,location:h("edit-match-location")||i.location,plannedStages:x("edit-match-stages",i.plannedStages),searchable:((s=o("edit-match-searchable"))==null?void 0:s.checked)!==!1},e=await ae(i.id,t);e.success?L("modal-edit-match"):alert("Kunne ikke oppdatere match: "+e.error)}function Ct(){const i=f.find(e=>e.id==w);if(!i){alert("Ingen match valgt");return}const t=i.id?"Match ID "+i.id+" "+i.name:i.name;o("delete-match-name").textContent=t,F("modal-confirm-delete")}async function Mt(){const i=f.find(e=>e.id==w);if(!i){alert("Ingen match valgt");return}const t=await at(i.id);t.success?(L("modal-confirm-delete"),L("modal-edit-match"),w=null,M(),R(),alert("Match slettet")):alert("Kunne ikke slette match: "+t.error)}let Q=null;function Ft(){var t;const i=f.find(e=>e.id==w);if(!i){alert("Ingen match valgt");return}Q=null,o("stage-modal-title").textContent=a("create_stage"),o("stage-number").value=(((t=i.stages)==null?void 0:t.length)||0)+1,o("stage-name").value="",o("stage-paper-targets").value=0,o("stage-poppers").value=0,o("stage-plates").value=0,o("stage-no-shoots").value=0,o("stage-bonus-paper-targets").value=0,o("stage-bonus-included").checked=!1,F("modal-create-stage")}function $t(i){const t=f.find(s=>s.id==w);if(!t||!t.stages||!t.stages[i]){alert("Stage ikke funnet");return}Q=i;const e=t.stages[i];o("stage-modal-title").textContent=a("edit_stage"),o("stage-number").value=e.number||i+1,o("stage-name").value=e.name||"",o("stage-paper-targets").value=e.paperTargets||0,o("stage-poppers").value=e.poppers||0,o("stage-plates").value=e.plates||0,o("stage-no-shoots").value=e.noShoots||0,o("stage-bonus-paper-targets").value=e.bonusPaperTargets||0,o("stage-bonus-included").checked=e.bonusIncluded||!1,F("modal-create-stage")}function Nt(i){const t=o("stage-number"),e=Math.max(1,parseInt(t.value)+i);t.value=e}function Bt(i,t){const e=o("stage-"+i),s=Math.max(0,parseInt(e.value)+t);e.value=s}async function Dt(){var n;const i=f.find(d=>d.id==w);if(!i){alert("Ingen match valgt");return}const t={number:x("stage-number",1),name:h("stage-name")||"",paperTargets:x("stage-paper-targets",0),poppers:x("stage-poppers",0),plates:x("stage-plates",0),noShoots:x("stage-no-shoots",0),bonusPaperTargets:x("stage-bonus-paper-targets",0),bonusIncluded:((n=o("stage-bonus-included"))==null?void 0:n.checked)||!1},e=i.stages||[];Q!==null?e[Q]=t:e.push(t);const s=await ae(i.id,{stages:e});s.success?L("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let _=[];function At(){const i=o("invite-emails-container");if(!i)return;const t=document.createElement("div");t.style.display="flex",t.style.gap="8px",t.style.marginBottom="8px",t.innerHTML=`
    <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
    <button onclick="this.parentElement.remove()" style="width:40px;height:40px;background:#374151;color:white;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">−</button>
  `,i.appendChild(t)}function Rt(){if(!w){alert("Ingen match valgt");return}o("invite-user-email").value="",F("modal-invite-user")}async function jt(){const i=h("invite-user-email").trim();if(!i){alert("Skriv inn en e-postadresse");return}const t=f.find(s=>s.id==w);if(!t)return;const e=await xe(i,{matchId:t.id,matchName:t.name});e.success?(L("modal-invite-user"),alert(a("invitation_sent"))):alert("Kunne ikke sende invitasjon: "+e.error)}function Ot(){ve(),F("modal-invitations")}function ve(){const i=o("invitations-list");if(!i)return;if(!_||_.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">'+a("no_invitations")+"</div></div>";return}let t="";_.forEach((e,s)=>{t+='<div class="card" style="margin-bottom:10px;">',t+='<div style="margin-bottom:10px;"><strong>'+a("invited_to_match")+"</strong></div>",t+='<div style="margin-bottom:10px;">Match ID '+e.matchId+" "+e.matchName+"</div>",t+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+e.invitedBy+"</div>",t+='<div style="display:flex;gap:10px;">',t+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+a("accept")+"</button>",t+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+a("decline")+"</button>",t+="</div>",t+="</div>"}),i.innerHTML=t}async function Ht(i){const t=_[i];if(!t)return;const e=await dt(t.matchId);e.success?(_.splice(i,1),ge(),ve()):alert("Kunne ikke akseptere invitasjon: "+e.error)}async function zt(i){const t=_[i];if(!t)return;const e=await ct(t.matchId);e.success?(_.splice(i,1),ge(),ve()):alert("Kunne ikke avvise invitasjon: "+e.error)}function ge(){const i=o("invitation-badge");if(!i)return;const t=_.length;t>0?(i.textContent=t,i.style.display="flex"):i.style.display="none"}function M(){var n,d;const i=o("home-content");if(!i)return;const t=f.find(l=>l.id===w);if(!t){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let e="";e+='<div class="card">',e+='<div class="mhc-name">'+t.name+"</div>",e+='<div class="mhc-meta">'+Se(t.date)+" · "+t.type+"</div>",e+='<div class="mhc-stats">',e+='<div><div class="mhc-val">'+(((n=t.stages)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',e+='<div><div class="mhc-val">'+(((d=t.shooters)==null?void 0:d.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',e+="</div>",e+='<div style="display:flex;gap:10px;margin-top:15px;">',e+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',e+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',e+="</div>",e+='<div style="margin-top:10px;">',e+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',e+="</div>";const s=pe();s&&t.ownerId===s.uid&&(e+='<div style="margin-top:10px;">',e+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',e+="</div>"),e+="</div>",t.stages&&t.stages.length>0&&(e+='<div class="section-title">Stages</div>',e+='<div class="card">',t.stages.forEach((l,p)=>{e+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+p+')">',e+='<div class="stage-num">S'+(l.number||p+1)+"</div>",e+='<div class="stage-info">',e+='<div class="stage-name">'+(l.name||"Stage "+(l.number||p+1))+"</div>",e+='<div class="stage-meta">',l.paperTargets&&(e+="Paper: "+l.paperTargets+" "),l.poppers&&(e+="Poppers: "+l.poppers+" "),l.plates&&(e+="Plates: "+l.plates+" "),l.noShoots&&(e+="NS: "+l.noShoots+" "),l.bonusPaperTargets&&(e+="Bonus: "+l.bonusPaperTargets+(l.bonusIncluded?" (included)":"")),e+="</div>",e+="</div>",e+="</div>"}),e+="</div>"),i.innerHTML=e}function R(){const i=o("match-list-container");if(!i)return;let t=f.filter(s=>{if(D==="all")return!0;if(D==="active")return s.id===w;if(D==="trening")return s.type==="Trening";if(D==="stevne")return s.type==="Stevne";const n=s.date?new Date(s.date).getFullYear().toString():"";return D===n});if(t.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let e="";t.forEach(s=>{var l;const n=s.id===w,d=s.id?"Match ID "+s.id+" "+s.name:s.name;e+='<div class="match-row">',e+='<div class="match-row-icon'+(n?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,e+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,e+='<div class="match-row-name">'+d+"</div>",e+='<div class="match-row-meta">'+Se(s.date)+" · "+(s.location||s.type)+"</div>",e+="</div>",e+='<div class="match-row-right">',e+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,e+='<div class="match-stg-count">'+(((l=s.stages)==null?void 0:l.length)||0)+"</div>",e+='<div class="match-stg-lbl">stages</div>',e+="</div>",e+="</div>"}),i.innerHTML=e}function Z(){var d;const i=o("results-content");if(!i)return;const t=f.find(l=>l.id===w);if(!t){i.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!t.shooters||t.shooters.length===0){i.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let e='<div class="card">';e+='<div class="card-header"><div class="card-title">Standings</div></div>',e+='<div class="standings-table-wrap"><table class="standings-table">',e+='<thead><tr class="standings-header-row">',e+='<th class="standings-th standings-th-rank">#</th>',e+='<th class="standings-th standings-th-shooter">Skytter</th>',e+='<th class="standings-th standings-th-pts">Pts</th>',e+='<th class="standings-th standings-th-pct">%</th>',e+="</tr></thead>",e+="<tbody>";const s=t.shooters.map(l=>{var g;const p=((g=l.stages)==null?void 0:g.reduce((y,u)=>y+(u.pts||0),0))||0;return{...l,totalPts:p}}).sort((l,p)=>p.totalPts-l.totalPts),n=((d=s[0])==null?void 0:d.totalPts)||0;s.forEach((l,p)=>{const g=n>0?(l.totalPts/n*100).toFixed(2):"0.00";e+='<tr class="standings-row">',e+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",e+='<td class="standings-td standings-td-shooter">',e+='<div class="standings-shooter-name">'+l.firstName+" "+l.lastName+"</div>",e+='<div class="standings-shooter-meta">'+l.division+" · "+A(l.pf||"minor")+"</div>",e+="</td>",e+='<td class="standings-td standings-td-pts">'+l.totalPts.toFixed(2)+"</td>",e+='<td class="standings-td standings-td-pct">'+g+"%</td>",e+="</tr>"}),e+="</tbody></table></div>",e+="</div>",i.innerHTML=e}function Le(){const i=N();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const g=o(p);g&&(g.textContent=i)});const e=o("prof-name");e&&(e.textContent=(r.firstName||"")+" "+(r.lastName||""));const s=o("prof-div");s&&(s.textContent=(r.division||"—")+" · "+(r.club||"—"));const n=o("prof-badge-pf");n&&(n.textContent=r.powerFactor?A(r.powerFactor):"—");const d=o("prof-badge-region");d&&(d.textContent=r.region||"—");const l={"info-firstname":r.firstName||"—","info-lastname":r.lastName||"—","info-division":r.division||"—","info-category":r.category||"—","info-pf":r.powerFactor?A(r.powerFactor):"—","info-region":r.region||"—","info-club":r.club||"—"};Object.keys(l).forEach(p=>{const g=o(p);g&&(g.textContent=l[p])}),Ee()}function Ee(){const i=[];f.forEach(m=>{m.stages&&m.stages.forEach(E=>i.push(E))});let t=0,e=0,s=0;i.forEach(m=>{t+=m.a||0,e+=(m.a||0)+(m.c||0)+(m.d||0),s+=m.hf||0});const n=i.length?(s/i.length).toFixed(2):"—",d=e?Math.round(t/e*100)+"%":"—",l=o("stat-matches");l&&(l.textContent=f.length);const p=o("stat-stages");p&&(p.textContent=i.length);const g=o("stat-avg-hf");g&&(g.textContent=n);const y=o("stat-a-rate");y&&(y.textContent=d);const u=o("prog-a-rate");u&&(u.textContent=d)}function Ut(){o("edit-firstname").value=r.firstName||"",o("edit-lastname").value=r.lastName||"",o("edit-club").value=r.club||"",o("edit-draw").value=r.draw||"",o("edit-reload").value=r.reloadTime||"";let i="";ut.forEach(s=>{i+='<option value="'+s+'"'+(s===r.division?" selected":"")+">"+s+"</option>"}),o("edit-division").innerHTML=i;let t="";ht.forEach(s=>{t+='<option value="'+s+'"'+(s===r.category?" selected":"")+">"+s+"</option>"}),o("edit-category").innerHTML=t;let e="";ft.forEach(s=>{e+='<option value="'+s+'"'+(s===r.region?" selected":"")+">"+s+"</option>"}),o("edit-region").innerHTML=e,Ie(),F("modal-edit-profile")}function Ie(){const i=h("edit-division"),t=mt[i]||["minor","major"];let e="";t.forEach(s=>{const n=r.powerFactor===s;e+='<label class="pf-option'+(n?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,e+='<input type="radio" name="pf" value="'+s+'">',e+='<div class="pf-label">'+s.toUpperCase()+"</div>",e+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",e+="</label>"}),o("pf-options").innerHTML=e,t.indexOf(r.powerFactor)<0&&(r.powerFactor=t[0])}function Vt(i,t){document.querySelectorAll(".pf-option").forEach(e=>e.classList.remove("active")),i.classList.add("active"),r.powerFactor=t}async function Gt(){r.firstName=h("edit-firstname").trim()||"",r.lastName=h("edit-lastname").trim()||"",r.division=h("edit-division")||"",r.category=h("edit-category")||"",r.region=h("edit-region")||"",r.club=h("edit-club").trim()||"",r.draw=U("edit-draw")||null,r.reloadTime=U("edit-reload")||null;const i=await et(r),t=o("save-profile-btn");i.success?(t.textContent="✓ Lagret!",t.style.background="var(--green)",setTimeout(()=>{t.textContent=a("save_profile"),t.style.background=""},1800)):(t.textContent="❌ Feil!",t.style.background="var(--red)",setTimeout(()=>{t.textContent=a("save_profile"),t.style.background=""},1800)),Le(),ne(),M(),L("modal-edit-profile")}function ne(){const i=x("prog-shots",12),t=x("prog-targets",6),e=x("prog-steel",2),s=U("prog-move",3),n=U("prog-draw",r.draw||1.42),d=r.division||"Classic",l=r.powerFactor||"minor",p=yt(i,d,l);o("prog-reloads").value=p;const g=r.reloadTime||1.8,y=.18,u=n+i*y+p*g+s,m=t*10+e*10,E=u>0?m/u:0;o("prog-hf-out").textContent=E.toFixed(2);let P="";P+='<div class="prog-breakdown-detail">',P+="Trekk: "+n.toFixed(2)+"s · ",P+="Skudd: "+(i*y).toFixed(2)+"s · ",P+="Reload: "+(p*g).toFixed(2)+"s · ",P+="Beveg: "+s.toFixed(2)+"s",P+="</div>",o("prog-breakdown").innerHTML=P}async function Kt(){const i=f.find(d=>d.id===w);if(!i)return;const t=h("new-shooter-firstname").trim(),e=h("new-shooter-lastname").trim(),s=h("new-shooter-division")||"Classic";if(!t||!e){alert("Fyll inn navn");return}const n={id:"s_"+Date.now(),isMe:!1,firstName:t,lastName:e,division:s,pf:"minor",club:"",stages:[]};i.shooters||(i.shooters=[]),i.shooters.push(n),await ae(i.id,i),L("modal-add-shooter"),Z()}async function qt(){const i=f.find(l=>l.id===w);if(!i)return;const t=x("new-result-stage",1),e=U("new-result-time",0),s=x("new-result-points",0),n=e>0?s/e:0,d={num:t,name:"Stage "+t,hf:n,time:e,pts:s,pf:r.powerFactor||"minor"};i.stages||(i.stages=[]),i.stages.push(d),await ae(i.id,i),L("modal-add"),M()}async function Wt(){H&&H(),z&&z(),await We(),window.location.reload()}const _e=document.getElementById("app");function Jt(){Xe(_e,Te)}function Te(){wt(_e)}Ge(i=>{i?Te():Jt()});
