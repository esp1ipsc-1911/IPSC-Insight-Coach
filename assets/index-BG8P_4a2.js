import{initializeApp as Me}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as $e,onAuthStateChanged as Ne,signInWithEmailAndPassword as Be,createUserWithEmailAndPassword as De,signOut as Ae}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Re,getDoc as Z,doc as w,setDoc as X,query as ee,collection as te,where as ie,getDocs as be,onSnapshot as ce,serverTimestamp as J,updateDoc as $,arrayUnion as ye}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as je,httpsCallable as Oe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const He={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},we=Me(He),se=$e(we),b=Re(we),ze=je();let de=null,F=null;function Ue(i){Ne(se,async e=>{if(e){de=e;try{const t=await Z(w(b,"users",e.uid));t.exists()?F={uid:e.uid,...t.data()}:F={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},i(F)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),F={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},i(F)}}else de=null,F=null,i(null)})}async function Ve(i,e){try{const t=(i||"").trim();return{success:!0,user:(await Be(se,t,e||"")).user}}catch(t){console.error("Innlogging feilet:",t);let s="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Feil e-post eller passord":t.code==="auth/invalid-email"?s="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function Ge(i,e,t,s,r,n,d,p,g,y){try{const u=(i||"").trim(),m=e||"",L=(t||"").trim(),P=(s||"").trim(),V=(r||"").trim(),G=(n||"").trim(),re=(d||"").trim(),R=(p||"minor").trim(),j=(g||"").trim(),K=(y||"").trim(),T=(await De(se,u,m)).user,oe=Oe(ze,"validateInviteCode");try{await oe({code:L,userId:T.uid,userEmail:u})}catch(C){await T.delete();let v="Ugyldig invitasjonskode";return C.code==="functions/not-found"?v="Ugyldig invitasjonskode":C.code==="functions/permission-denied"?v="Denne koden er deaktivert":C.code==="functions/resource-exhausted"?v="Denne koden har nådd maksimalt antall bruk":C.code==="functions/already-exists"?v="Du har allerede brukt denne koden":C.message&&(v=C.message),{success:!1,error:v}}return await X(w(b,"users",T.uid),{email:u,firstName:P,lastName:V,division:G,category:re,powerFactor:R,region:j,club:K,role:"user",inviteCode:L,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:T}}catch(u){console.error("Registrering feilet:",u);let m="Registrering feilet";return u.code==="auth/email-already-in-use"?m="E-postadressen er allerede i bruk":u.code==="auth/weak-password"?m="Passordet må være minst 6 tegn":u.code==="auth/invalid-email"?m="Ugyldig e-postadresse":u.message&&(m=u.message),{success:!1,error:m}}}async function Ke(){try{return await Ae(se),{success:!0}}catch(i){return console.error("Utlogging feilet:",i),{success:!1,error:"Kunne ikke logge ut"}}}function S(){return de}function qe(){return F}const We=`
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
`;function Je(i,e){const t=document.getElementById("gdpr-modal");t&&t.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${We}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const r=s.querySelector(".gdpr-close-btn"),n=s.querySelector(".gdpr-btn-accept"),d=s.querySelector(".gdpr-btn-decline"),p=s.querySelector(".gdpr-modal-overlay"),g=()=>{s.remove()};r.addEventListener("click",()=>{g(),e&&e()}),p.addEventListener("click",()=>{g(),e&&e()}),d.addEventListener("click",()=>{g(),e&&e()}),n.addEventListener("click",()=>{g(),i&&i()}),document.body.style.overflow="hidden";const y=g,u=()=>{document.body.style.overflow="",y()};r.onclick=()=>{u(),e&&e()},p.onclick=()=>{u(),e&&e()},d.onclick=()=>{u(),e&&e()},n.onclick=()=>{u(),i&&i()}}function Ye(){const i=document.createElement("div");return i.className="gdpr-checkbox-container",i.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const e=i.querySelector("#gdpr-open-modal");e&&e.addEventListener("click",t=>{t.preventDefault(),Je(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),i}function Qe(){const i=document.getElementById("gdpr-consent-checkbox");return!i||!i.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Ze(i,e){i.innerHTML=`
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
  `;const t={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",r="minor";const n=document.getElementById("error"),d=document.getElementById("loginSection"),p=document.getElementById("registerSection"),g=document.getElementById("showRegisterBtn"),y=document.getElementById("cancelRegisterBtn"),u=document.getElementById("loginBtn"),m=document.getElementById("registerBtn"),L=document.getElementById("langNo"),P=document.getElementById("langEn"),V=document.getElementById("registerPassword"),G=document.getElementById("passwordStrengthBar"),re=document.getElementById("passwordStrengthText"),R=document.getElementById("pfMinor"),j=document.getElementById("pfMajor");R.onclick=()=>{r="minor",R.classList.add("selected"),j.classList.remove("selected")},j.onclick=()=>{r="major",j.classList.add("selected"),R.classList.remove("selected")};function K(v){let c=0;return v?(v.length>=8&&(c+=1),v.length>=12&&(c+=1),/[a-z]/.test(v)&&/[A-Z]/.test(v)&&(c+=1),/\d/.test(v)&&(c+=1),/[^A-Za-z0-9]/.test(v)&&(c+=1),c<=1?{score:c,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:c===2?{score:c,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:c===3?{score:c,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:c===4?{score:c,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:c,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function q(){const v=t[s],c=V.value,E=K(c);G.style.width=E.width,G.style.background=E.color,re.innerText=v[E.labelKey]}function T(v){s=v;const c=t[v];document.getElementById("brandSubtitle").innerText=c.subtitle,document.getElementById("loginEmailLabel").innerText=c.loginEmailLabel,document.getElementById("loginEmail").placeholder=c.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=c.loginPasswordLabel,document.getElementById("loginPassword").placeholder=c.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=c.login,document.getElementById("separatorText").innerText=c.or,document.getElementById("showRegisterBtn").innerText=c.showRegister,document.getElementById("registerFirstNameLabel").innerText=c.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=c.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=c.registerLastNameLabel,document.getElementById("registerLastName").placeholder=c.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=c.registerEmailLabel,document.getElementById("registerEmail").placeholder=c.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=c.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=c.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=c.registerPasswordLabel,document.getElementById("registerPassword").placeholder=c.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=c.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=c.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=c.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=c.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=c.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=c.registerRegionLabel,document.getElementById("registerClubLabel").innerText=c.registerClubLabel,document.getElementById("registerCodeLabel").innerText=c.registerCodeLabel,document.getElementById("registerCode").placeholder=c.registerCodePlaceholder,document.getElementById("registerBtn").innerText=c.register,document.getElementById("cancelRegisterBtn").innerText=c.cancel,L.classList.toggle("active",v==="no"),P.classList.toggle("active",v==="en"),q()}function oe(){d.classList.remove("active"),p.classList.add("active"),n.innerText="";const v=document.getElementById("gdprCheckboxContainer");if(v&&!v.hasChildNodes()){const c=Ye();v.appendChild(c)}}function C(){p.classList.remove("active"),d.classList.add("active"),n.innerText=""}L.onclick=()=>T("no"),P.onclick=()=>T("en"),g.onclick=oe,y.onclick=C,V.oninput=q,u.onclick=async()=>{n.innerText="";const v=document.getElementById("loginEmail").value.trim(),c=document.getElementById("loginPassword").value,E=await Ve(v,c);E.success?e():n.innerText=E.error},m.onclick=async()=>{n.innerText="";const v=t[s],c=document.getElementById("registerFirstName").value.trim(),E=document.getElementById("registerLastName").value.trim(),le=document.getElementById("registerEmail").value.trim(),ge=document.getElementById("registerEmailConfirm").value.trim(),W=document.getElementById("registerPassword").value,ue=document.getElementById("registerPasswordConfirm").value,me=document.getElementById("registerDivision").value,Te=document.getElementById("registerCategory").value,Ce=document.getElementById("registerRegion").value,Fe=document.getElementById("registerClub").value.trim(),he=document.getElementById("registerCode").value.trim();if(!c||!E){n.innerText=v.missingName;return}if(!le||!ge||!W||!ue||!he){n.innerText=v.missingFields;return}if(!me){n.innerText=v.missingDivision;return}if(le!==ge){n.innerText=v.emailMismatch;return}if(W!==ue){n.innerText=v.passwordMismatch;return}if(K(W).score<=1){n.innerText=v.weakPassword;return}if(!Qe().valid){n.innerText=v.gdprRequired;return}const fe=await Ge(le,W,he,c,E,me,Te,r,Ce,Fe);fe.success?e():n.innerText=fe.error},T("no"),q()}async function Xe(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await $(w(b,"users",e.uid),{...i,updatedAt:J()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function et(){const i=S();if(!i)return null;try{const e=await Z(w(b,"users",i.uid));return e.exists()?{uid:i.uid,...e.data()}:null}catch(e){return console.error("Get profile error:",e),null}}async function tt(){const i=w(b,"counters","matchId");try{const e=await Z(i);if(!e.exists())return await X(i,{value:1}),1;const s=e.data().value+1;return await $(i,{value:s}),s}catch(e){throw console.error("Error getting next match ID:",e),e}}async function it(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const t=await tt(),s={id:t,...i,searchable:i.searchable!==!1,ownerId:e.uid,participants:[e.uid],createdAt:J(),updatedAt:J()};return await X(w(b,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function ae(i,e){if(!S())return{success:!1,error:"Not authenticated"};try{return await $(w(b,"matches",i.toString()),{...e,updatedAt:J()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function st(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const t=await Z(w(b,"matches",i.toString()));if(!t.exists())return{success:!1,error:"Match not found"};const s={id:t.id,...t.data()};return s.searchable?(s.participants.includes(e.uid)||await $(w(b,"matches",i.toString()),{participants:ye(e.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(t){return console.error("Search match error:",t),{success:!1,error:t.message}}}async function at(){const i=S();if(!i)return[];try{const e=ee(te(b,"matches"),ie("participants","array-contains",i.uid)),t=await be(e),s=[];return t.forEach(r=>{s.push({id:r.id,...r.data()})}),s.sort((r,n)=>{var g,y;const d=r.date||((g=r.createdAt)==null?void 0:g.toDate())||new Date(0);return(n.date||((y=n.createdAt)==null?void 0:y.toDate())||new Date(0))-d}),s}catch(e){return console.error("Get user matches error:",e),[]}}function nt(i){const e=S();if(!e)return()=>{};const t=ee(te(b,"matches"),ie("participants","array-contains",e.uid));return ce(t,r=>{const n=[];r.forEach(d=>{n.push({id:d.id,...d.data()})}),n.sort((d,p)=>{var u,m;const g=d.date||((u=d.createdAt)==null?void 0:u.toDate())||new Date(0);return(p.date||((m=p.createdAt)==null?void 0:m.toDate())||new Date(0))-g}),i(n)},r=>{console.error("Listen to matches error:",r)})}function rt(i,e){return ce(w(b,"matches",i.toString()),s=>{s.exists()?e({id:s.id,...s.data()}):e(null)},s=>{console.error("Listen to match error:",s)})}async function ke(i,e){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{const s=ee(te(b,"users"),ie("email","==",i)),r=await be(s);if(r.empty)return{success:!1,error:"Bruker ikke funnet"};const d=r.docs[0].id;return await X(w(b,"users",d,"invitations",e.matchId.toString()),{matchId:e.matchId,matchName:e.matchName,invitedBy:t.email,invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),{success:!0}}catch(s){return console.error("Send invitation error:",s),{success:!1,error:s.message}}}async function ot(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await $(w(b,"matches",i.toString()),{participants:ye(e.uid)}),await $(w(b,"users",e.uid,"invitations",i.toString()),{status:"accepted"}),{success:!0}}catch(t){return console.error("Accept invitation error:",t),{success:!1,error:t.message}}}async function lt(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await $(w(b,"users",e.uid,"invitations",i.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function dt(i){const e=S();if(!e)return()=>{};const t=te(b,"users",e.uid,"invitations"),s=ee(t,ie("status","==","pending"));return ce(s,r=>{const n=[];r.forEach(d=>{n.push({id:d.id,...d.data()})}),i(n)})}let o,k=null,D="all",f=[],O=null,H=null;const ct={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let xe="no";function a(i){return ct[xe][i]||i}const pt={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},vt=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],gt={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},ut=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],mt=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function ht(i,e){const t=pt[i];return t&&(t[e]||t.minor)||15}function ft(i,e,t){return Math.max(0,Math.ceil(i/ht(e,t))-1)}function A(i){return i.charAt(0).toUpperCase()+i.slice(1)}function Pe(i){if(!i)return"";try{const e=xe==="no"?"nb-NO":"en-US";return new Date(i).toLocaleDateString(e,{day:"numeric",month:"short",year:"numeric"})}catch{return i}}function l(i){return document.getElementById(i)}function h(i){const e=l(i);return e?e.value:""}function z(i,e){const t=parseFloat(h(i));return isNaN(t)?e||0:t}function x(i,e){const t=parseInt(h(i));return isNaN(t)?e||0:t}function M(){const i=(o==null?void 0:o.firstName)||"",e=(o==null?void 0:o.lastName)||"";return(i.charAt(0)+e.charAt(0)).toUpperCase()||"U"}async function bt(i){var s;const e=await et(),t=qe();e?o=e:o={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},f=await at(),O&&O(),O=nt(r=>{f=r,U(),N()}),dt(r=>{I=r,ve()}),i.innerHTML=`
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
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${M()}</div>
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
      <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${M()}</div>
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
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${M()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value">0.18s</div><div class="stat-label">Split</div></div>
        <div class="stat-block"><div class="stat-value">${o.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${o.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
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
        <div class="prog-field"><input type="number" id="prog-draw" value="${o.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${a("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${o.powerFactor?A(o.powerFactor):"Minor"} · ${o.division||"Classic"}</div>
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
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${M()}</div>
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
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${M()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${M()}</div>
      <div class="profile-name" id="prof-name">${o.firstName||""} ${o.lastName||""}</div>
      <div class="profile-div" id="prof-div">${o.division||"—"} · ${o.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${o.powerFactor?A(o.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${o.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${a("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${o.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${o.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${o.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${o.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${o.powerFactor?A(o.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${o.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${o.club||"—"}</span>
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
        <input class="field-input" type="text" id="edit-firstname" value="${o.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${o.lastName||""}">
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
        <input class="field-input" type="text" id="edit-club" value="${o.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${o.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${o.reloadTime||""}">
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

</div>
  `,yt(),Se(),N(),U(),Le(),ne()}function yt(){window.switchTab=wt,window.setFilter=xt,window.openModal=B,window.closeModal=_,window.closeModalOutside=kt,window.createMatch=Pt,window.searchMatchByIdHandler=St,window.openEditProfile=jt,window.saveProfileData=Ht,window.selectPF=Ot,window.updatePFOptions=Ee,window.calcPrognose=ne,window.renderMatchList=U,window.selectMatch=Lt,window.addShooter=zt,window.addStageResult=Ut,window.handleLogout=Vt,window.openEditMatch=Et,window.saveEditMatch=It,window.openCreateStage=_t,window.openEditStage=Tt,window.changeStageNumber=Ct,window.changeStageField=Ft,window.saveStage=Mt,window.openInviteUser=Nt,window.sendInvitation=Bt,window.openInvitationsModal=Dt,window.acceptInvitation=At,window.declineInvitation=Rt,window.addInviteEmailField=$t}function wt(i){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),l(i).classList.add("active");const e=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(i),t=document.querySelectorAll(".tab-item");t[e]&&t[e].classList.add("active"),i==="screen-home"&&N(),i==="screen-matches"&&U(),i==="screen-results"&&Q()}function B(i){l(i).classList.add("open")}function _(i){l(i).classList.remove("open")}function kt(i,e){i.target.id===e&&_(e)}function xt(i,e){D=i,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),e.classList.add("active"),U()}async function Pt(){var t;const i={name:h("new-match-name")||"Ny match",type:h("new-match-type")||"Trening",date:h("new-match-date")||new Date().toISOString().split("T")[0],location:h("new-match-location")||"",plannedStages:x("new-match-stages",6),searchable:((t=l("new-match-searchable"))==null?void 0:t.checked)!==!1,stages:[],shooters:[],stageDefs:[]},e=await it(i);if(e.success){const s=document.querySelectorAll(".invite-email-input"),r=Array.from(s).map(p=>p.value.trim()).filter(p=>p.length>0);let n=0;for(const p of r)(await ke(p,{matchId:e.matchId,matchName:i.name})).success&&n++;_("modal-new-match"),l("new-match-name").value="",l("new-match-location").value="",l("new-match-stages").value="6",l("new-match-searchable")&&(l("new-match-searchable").checked=!0);const d=l("invite-emails-container");d&&(d.innerHTML=`
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
          <button onclick="addInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
        </div>
      `),n>0&&alert(`Match opprettet! Invitasjoner sendt til ${n} bruker(e).`)}else alert("Kunne ikke opprette match: "+e.error)}async function St(){const i=h("match-id-search").trim();if(!i){alert("Skriv inn et match-ID");return}const e=await st(i);e.success?(alert(`Match funnet: ${e.match.name} (ID: ${e.match.id})`),l("match-id-search").value=""):alert(`Fant ingen match med ID ${i}${e.error?": "+e.error:""}`)}function Lt(i){k=i;const e=f.find(t=>t.id==i);if(e){const t=e.id?"Match ID "+e.id+" "+e.name:e.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(r=>{const n=l(r);n&&(n.textContent=t)})}H&&H(),i&&(H=rt(i,t=>{const s=f.findIndex(r=>r.id==i);s!==-1&&t&&(f[s]=t,N(),Q())})),N(),Q(),ne()}function Et(){const i=f.find(e=>e.id==k);if(!i){alert("Ingen match valgt");return}l("edit-match-name").value=i.name||"",l("edit-match-type").value=i.type||"Trening",l("edit-match-date").value=i.date||"",l("edit-match-location").value=i.location||"",l("edit-match-stages").value=i.plannedStages||0,l("edit-match-searchable")&&(l("edit-match-searchable").checked=i.searchable!==!1),B("modal-edit-match")}async function It(){var s;const i=f.find(r=>r.id==k);if(!i){alert("Ingen match valgt");return}const e={name:h("edit-match-name")||i.name,type:h("edit-match-type")||i.type,date:h("edit-match-date")||i.date,location:h("edit-match-location")||i.location,plannedStages:x("edit-match-stages",i.plannedStages),searchable:((s=l("edit-match-searchable"))==null?void 0:s.checked)!==!1},t=await ae(i.id,e);t.success?_("modal-edit-match"):alert("Kunne ikke oppdatere match: "+t.error)}let Y=null;function _t(){var e;const i=f.find(t=>t.id==k);if(!i){alert("Ingen match valgt");return}Y=null,l("stage-modal-title").textContent=a("create_stage"),l("stage-number").value=(((e=i.stages)==null?void 0:e.length)||0)+1,l("stage-name").value="",l("stage-paper-targets").value=0,l("stage-poppers").value=0,l("stage-plates").value=0,l("stage-no-shoots").value=0,l("stage-bonus-paper-targets").value=0,l("stage-bonus-included").checked=!1,B("modal-create-stage")}function Tt(i){const e=f.find(s=>s.id==k);if(!e||!e.stages||!e.stages[i]){alert("Stage ikke funnet");return}Y=i;const t=e.stages[i];l("stage-modal-title").textContent=a("edit_stage"),l("stage-number").value=t.number||i+1,l("stage-name").value=t.name||"",l("stage-paper-targets").value=t.paperTargets||0,l("stage-poppers").value=t.poppers||0,l("stage-plates").value=t.plates||0,l("stage-no-shoots").value=t.noShoots||0,l("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,l("stage-bonus-included").checked=t.bonusIncluded||!1,B("modal-create-stage")}function Ct(i){const e=l("stage-number"),t=Math.max(1,parseInt(e.value)+i);e.value=t}function Ft(i,e){const t=l("stage-"+i),s=Math.max(0,parseInt(t.value)+e);t.value=s}async function Mt(){var r;const i=f.find(n=>n.id==k);if(!i){alert("Ingen match valgt");return}const e={number:x("stage-number",1),name:h("stage-name")||"",paperTargets:x("stage-paper-targets",0),poppers:x("stage-poppers",0),plates:x("stage-plates",0),noShoots:x("stage-no-shoots",0),bonusPaperTargets:x("stage-bonus-paper-targets",0),bonusIncluded:((r=l("stage-bonus-included"))==null?void 0:r.checked)||!1},t=i.stages||[];Y!==null?t[Y]=e:t.push(e);const s=await ae(i.id,{stages:t});s.success?_("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let I=[];function $t(){const i=l("invite-emails-container");if(!i)return;const e=document.createElement("div");e.style.display="flex",e.style.gap="8px",e.style.marginBottom="8px",e.innerHTML=`
    <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
    <button onclick="this.parentElement.remove()" style="width:40px;height:40px;background:#374151;color:white;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">−</button>
  `,i.appendChild(e)}function Nt(){if(!k){alert("Ingen match valgt");return}l("invite-user-email").value="",B("modal-invite-user")}async function Bt(){const i=h("invite-user-email").trim();if(!i){alert("Skriv inn en e-postadresse");return}const e=f.find(s=>s.id==k);if(!e)return;const t=await ke(i,{matchId:e.id,matchName:e.name});t.success?(_("modal-invite-user"),alert(a("invitation_sent"))):alert("Kunne ikke sende invitasjon: "+t.error)}function Dt(){pe(),B("modal-invitations")}function pe(){const i=l("invitations-list");if(!i)return;if(!I||I.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">'+a("no_invitations")+"</div></div>";return}let e="";I.forEach((t,s)=>{e+='<div class="card" style="margin-bottom:10px;">',e+='<div style="margin-bottom:10px;"><strong>'+a("invited_to_match")+"</strong></div>",e+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",e+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+t.invitedBy+"</div>",e+='<div style="display:flex;gap:10px;">',e+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+a("accept")+"</button>",e+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+a("decline")+"</button>",e+="</div>",e+="</div>"}),i.innerHTML=e}async function At(i){const e=I[i];if(!e)return;const t=await ot(e.matchId);t.success?(I.splice(i,1),ve(),pe()):alert("Kunne ikke akseptere invitasjon: "+t.error)}async function Rt(i){const e=I[i];if(!e)return;const t=await lt(e.matchId);t.success?(I.splice(i,1),ve(),pe()):alert("Kunne ikke avvise invitasjon: "+t.error)}function ve(){const i=l("invitation-badge");if(!i)return;const e=I.length;e>0?(i.textContent=e,i.style.display="flex"):i.style.display="none"}function N(){var s,r;const i=l("home-content");if(!i)return;const e=f.find(n=>n.id===k);if(!e){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+e.name+"</div>",t+='<div class="mhc-meta">'+Pe(e.date)+" · "+e.type+"</div>",t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((s=e.stages)==null?void 0:s.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((r=e.shooters)==null?void 0:r.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',t+="</div>",t+="</div>",e.stages&&e.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',e.stages.forEach((n,d)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+d+')">',t+='<div class="stage-num">S'+(n.number||d+1)+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(n.name||"Stage "+(n.number||d+1))+"</div>",t+='<div class="stage-meta">',n.paperTargets&&(t+="Paper: "+n.paperTargets+" "),n.poppers&&(t+="Poppers: "+n.poppers+" "),n.plates&&(t+="Plates: "+n.plates+" "),n.noShoots&&(t+="NS: "+n.noShoots+" "),n.bonusPaperTargets&&(t+="Bonus: "+n.bonusPaperTargets+(n.bonusIncluded?" (included)":"")),t+="</div>",t+="</div>",t+="</div>"}),t+="</div>"),i.innerHTML=t}function U(){const i=l("match-list-container");if(!i)return;let e=f.filter(s=>{if(D==="all")return!0;if(D==="active")return s.id===k;if(D==="trening")return s.type==="Trening";if(D==="stevne")return s.type==="Stevne";const r=s.date?new Date(s.date).getFullYear().toString():"";return D===r});if(e.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let t="";e.forEach(s=>{var d;const r=s.id===k,n=s.id?"Match ID "+s.id+" "+s.name:s.name;t+='<div class="match-row">',t+='<div class="match-row-icon'+(r?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,t+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,t+='<div class="match-row-name">'+n+"</div>",t+='<div class="match-row-meta">'+Pe(s.date)+" · "+(s.location||s.type)+"</div>",t+="</div>",t+='<div class="match-row-right">',t+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,t+='<div class="match-stg-count">'+(((d=s.stages)==null?void 0:d.length)||0)+"</div>",t+='<div class="match-stg-lbl">stages</div>',t+="</div>",t+="</div>"}),i.innerHTML=t}function Q(){var n;const i=l("results-content");if(!i)return;const e=f.find(d=>d.id===k);if(!e){i.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!e.shooters||e.shooters.length===0){i.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let t='<div class="card">';t+='<div class="card-header"><div class="card-title">Standings</div></div>',t+='<div class="standings-table-wrap"><table class="standings-table">',t+='<thead><tr class="standings-header-row">',t+='<th class="standings-th standings-th-rank">#</th>',t+='<th class="standings-th standings-th-shooter">Skytter</th>',t+='<th class="standings-th standings-th-pts">Pts</th>',t+='<th class="standings-th standings-th-pct">%</th>',t+="</tr></thead>",t+="<tbody>";const s=e.shooters.map(d=>{var g;const p=((g=d.stages)==null?void 0:g.reduce((y,u)=>y+(u.pts||0),0))||0;return{...d,totalPts:p}}).sort((d,p)=>p.totalPts-d.totalPts),r=((n=s[0])==null?void 0:n.totalPts)||0;s.forEach((d,p)=>{const g=r>0?(d.totalPts/r*100).toFixed(2):"0.00";t+='<tr class="standings-row">',t+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",t+='<td class="standings-td standings-td-shooter">',t+='<div class="standings-shooter-name">'+d.firstName+" "+d.lastName+"</div>",t+='<div class="standings-shooter-meta">'+d.division+" · "+A(d.pf||"minor")+"</div>",t+="</td>",t+='<td class="standings-td standings-td-pts">'+d.totalPts.toFixed(2)+"</td>",t+='<td class="standings-td standings-td-pct">'+g+"%</td>",t+="</tr>"}),t+="</tbody></table></div>",t+="</div>",i.innerHTML=t}function Se(){const i=M();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const g=l(p);g&&(g.textContent=i)});const t=l("prof-name");t&&(t.textContent=(o.firstName||"")+" "+(o.lastName||""));const s=l("prof-div");s&&(s.textContent=(o.division||"—")+" · "+(o.club||"—"));const r=l("prof-badge-pf");r&&(r.textContent=o.powerFactor?A(o.powerFactor):"—");const n=l("prof-badge-region");n&&(n.textContent=o.region||"—");const d={"info-firstname":o.firstName||"—","info-lastname":o.lastName||"—","info-division":o.division||"—","info-category":o.category||"—","info-pf":o.powerFactor?A(o.powerFactor):"—","info-region":o.region||"—","info-club":o.club||"—"};Object.keys(d).forEach(p=>{const g=l(p);g&&(g.textContent=d[p])}),Le()}function Le(){const i=[];f.forEach(m=>{m.stages&&m.stages.forEach(L=>i.push(L))});let e=0,t=0,s=0;i.forEach(m=>{e+=m.a||0,t+=(m.a||0)+(m.c||0)+(m.d||0),s+=m.hf||0});const r=i.length?(s/i.length).toFixed(2):"—",n=t?Math.round(e/t*100)+"%":"—",d=l("stat-matches");d&&(d.textContent=f.length);const p=l("stat-stages");p&&(p.textContent=i.length);const g=l("stat-avg-hf");g&&(g.textContent=r);const y=l("stat-a-rate");y&&(y.textContent=n);const u=l("prog-a-rate");u&&(u.textContent=n)}function jt(){l("edit-firstname").value=o.firstName||"",l("edit-lastname").value=o.lastName||"",l("edit-club").value=o.club||"",l("edit-draw").value=o.draw||"",l("edit-reload").value=o.reloadTime||"";let i="";vt.forEach(s=>{i+='<option value="'+s+'"'+(s===o.division?" selected":"")+">"+s+"</option>"}),l("edit-division").innerHTML=i;let e="";ut.forEach(s=>{e+='<option value="'+s+'"'+(s===o.category?" selected":"")+">"+s+"</option>"}),l("edit-category").innerHTML=e;let t="";mt.forEach(s=>{t+='<option value="'+s+'"'+(s===o.region?" selected":"")+">"+s+"</option>"}),l("edit-region").innerHTML=t,Ee(),B("modal-edit-profile")}function Ee(){const i=h("edit-division"),e=gt[i]||["minor","major"];let t="";e.forEach(s=>{const r=o.powerFactor===s;t+='<label class="pf-option'+(r?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",t+="</label>"}),l("pf-options").innerHTML=t,e.indexOf(o.powerFactor)<0&&(o.powerFactor=e[0])}function Ot(i,e){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),i.classList.add("active"),o.powerFactor=e}async function Ht(){o.firstName=h("edit-firstname").trim()||"",o.lastName=h("edit-lastname").trim()||"",o.division=h("edit-division")||"",o.category=h("edit-category")||"",o.region=h("edit-region")||"",o.club=h("edit-club").trim()||"",o.draw=z("edit-draw")||null,o.reloadTime=z("edit-reload")||null;const i=await Xe(o),e=l("save-profile-btn");i.success?(e.textContent="✓ Lagret!",e.style.background="var(--green)",setTimeout(()=>{e.textContent=a("save_profile"),e.style.background=""},1800)):(e.textContent="❌ Feil!",e.style.background="var(--red)",setTimeout(()=>{e.textContent=a("save_profile"),e.style.background=""},1800)),Se(),ne(),N(),_("modal-edit-profile")}function ne(){const i=x("prog-shots",12),e=x("prog-targets",6),t=x("prog-steel",2),s=z("prog-move",3),r=z("prog-draw",o.draw||1.42),n=o.division||"Classic",d=o.powerFactor||"minor",p=ft(i,n,d);l("prog-reloads").value=p;const g=o.reloadTime||1.8,y=.18,u=r+i*y+p*g+s,m=e*10+t*10,L=u>0?m/u:0;l("prog-hf-out").textContent=L.toFixed(2);let P="";P+='<div class="prog-breakdown-detail">',P+="Trekk: "+r.toFixed(2)+"s · ",P+="Skudd: "+(i*y).toFixed(2)+"s · ",P+="Reload: "+(p*g).toFixed(2)+"s · ",P+="Beveg: "+s.toFixed(2)+"s",P+="</div>",l("prog-breakdown").innerHTML=P}async function zt(){const i=f.find(n=>n.id===k);if(!i)return;const e=h("new-shooter-firstname").trim(),t=h("new-shooter-lastname").trim(),s=h("new-shooter-division")||"Classic";if(!e||!t){alert("Fyll inn navn");return}const r={id:"s_"+Date.now(),isMe:!1,firstName:e,lastName:t,division:s,pf:"minor",club:"",stages:[]};i.shooters||(i.shooters=[]),i.shooters.push(r),await ae(i.id,i),_("modal-add-shooter"),Q()}async function Ut(){const i=f.find(d=>d.id===k);if(!i)return;const e=x("new-result-stage",1),t=z("new-result-time",0),s=x("new-result-points",0),r=t>0?s/t:0,n={num:e,name:"Stage "+e,hf:r,time:t,pts:s,pf:o.powerFactor||"minor"};i.stages||(i.stages=[]),i.stages.push(n),await ae(i.id,i),_("modal-add"),N()}async function Vt(){O&&O(),H&&H(),await Ke(),window.location.reload()}const Ie=document.getElementById("app");function Gt(){Ze(Ie,_e)}function _e(){bt(Ie)}Ue(i=>{i?_e():Gt()});
