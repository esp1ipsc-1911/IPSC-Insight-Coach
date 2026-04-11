import{initializeApp as at}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as ot,onAuthStateChanged as rt,signInWithEmailAndPassword as lt,createUserWithEmailAndPassword as dt,signOut as ct}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as ut,getDoc as we,doc as B,setDoc as pt,query as oe,collection as X,where as re,getDocs as Fe,onSnapshot as pe,serverTimestamp as le,addDoc as gt,updateDoc as $e,deleteDoc as vt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as mt,httpsCallable as ht}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();const ft={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},De=at(ft),de=ot(De),L=ut(De),bt=mt();let ge=null,U=null;function wt(e){rt(de,async t=>{if(t){ge=t;try{const s=await we(B(L,"users",t.uid));s.exists()?U={uid:t.uid,...s.data()}:U={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},e(U)}catch(s){console.error("Feil ved lasting av brukerprofil:",s),U={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},e(U)}}else ge=null,U=null,e(null)})}async function yt(e,t){try{const s=(e||"").trim();return{success:!0,user:(await lt(de,s,t||"")).user}}catch(s){console.error("Innlogging feilet:",s);let i="Innlogging feilet";return s.code==="auth/user-not-found"||s.code==="auth/wrong-password"||s.code==="auth/invalid-credential"?i="Feil e-post eller passord":s.code==="auth/invalid-email"?i="Ugyldig e-postadresse":s.code==="auth/user-disabled"&&(i="Denne kontoen er deaktivert"),{success:!1,error:i}}}async function kt(e,t,s,i,n,a,r,l,v,d){try{const g=(e||"").trim(),u=t||"",b=(s||"").trim(),P=(i||"").trim(),E=(n||"").trim(),I=(a||"").trim(),O=(r||"").trim(),x=(l||"minor").trim(),T=(v||"").trim(),R=(d||"").trim(),$=(await dt(de,g,u)).user,ce=ht(bt,"validateInviteCode");try{await ce({code:b,userId:$.uid,userEmail:g})}catch(D){await $.delete();let h="Ugyldig invitasjonskode";return D.code==="functions/not-found"?h="Ugyldig invitasjonskode":D.code==="functions/permission-denied"?h="Denne koden er deaktivert":D.code==="functions/resource-exhausted"?h="Denne koden har nådd maksimalt antall bruk":D.code==="functions/already-exists"?h="Du har allerede brukt denne koden":D.message&&(h=D.message),{success:!1,error:h}}return await pt(B(L,"users",$.uid),{email:g,firstName:P,lastName:E,division:I,category:O,powerFactor:x,region:T,club:R,role:"user",inviteCode:b,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:$}}catch(g){console.error("Registrering feilet:",g);let u="Registrering feilet";return g.code==="auth/email-already-in-use"?u="E-postadressen er allerede i bruk":g.code==="auth/weak-password"?u="Passordet må være minst 6 tegn":g.code==="auth/invalid-email"?u="Ugyldig e-postadresse":g.message&&(u=g.message),{success:!1,error:u}}}async function xt(){try{return await ct(de),{success:!0}}catch(e){return console.error("Utlogging feilet:",e),{success:!1,error:"Kunne ikke logge ut"}}}function H(){return ge}function _e(){return U}const Et=`
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
`;function St(e,t){const s=document.getElementById("gdpr-modal");s&&s.remove();const i=document.createElement("div");i.id="gdpr-modal",i.className="gdpr-modal",i.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Et}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(i);const n=i.querySelector(".gdpr-close-btn"),a=i.querySelector(".gdpr-btn-accept"),r=i.querySelector(".gdpr-btn-decline"),l=i.querySelector(".gdpr-modal-overlay"),v=()=>{i.remove()};n.addEventListener("click",()=>{v(),t&&t()}),l.addEventListener("click",()=>{v(),t&&t()}),r.addEventListener("click",()=>{v(),t&&t()}),a.addEventListener("click",()=>{v(),e&&e()}),document.body.style.overflow="hidden";const d=v,g=()=>{document.body.style.overflow="",d()};n.onclick=()=>{g(),t&&t()},l.onclick=()=>{g(),t&&t()},r.onclick=()=>{g(),t&&t()},a.onclick=()=>{g(),e&&e()}}function Pt(){const e=document.createElement("div");return e.className="gdpr-checkbox-container",e.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const t=e.querySelector("#gdpr-open-modal");t&&t.addEventListener("click",s=>{s.preventDefault(),St(()=>{const i=document.getElementById("gdpr-consent-checkbox");i&&(i.checked=!0)},()=>{const i=document.getElementById("gdpr-consent-checkbox");i&&(i.checked=!1)})})},0),e}function Lt(){const e=document.getElementById("gdpr-consent-checkbox");return!e||!e.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Mt(e,t){e.innerHTML=`
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
  `;const s={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let i="no",n="minor";const a=document.getElementById("error"),r=document.getElementById("loginSection"),l=document.getElementById("registerSection"),v=document.getElementById("showRegisterBtn"),d=document.getElementById("cancelRegisterBtn"),g=document.getElementById("loginBtn"),u=document.getElementById("registerBtn"),b=document.getElementById("langNo"),P=document.getElementById("langEn"),E=document.getElementById("registerPassword"),I=document.getElementById("passwordStrengthBar"),O=document.getElementById("passwordStrengthText"),x=document.getElementById("pfMinor"),T=document.getElementById("pfMajor");x.onclick=()=>{n="minor",x.classList.add("selected"),T.classList.remove("selected")},T.onclick=()=>{n="major",T.classList.add("selected"),x.classList.remove("selected")};function R(h){let m=0;return h?(h.length>=8&&(m+=1),h.length>=12&&(m+=1),/[a-z]/.test(h)&&/[A-Z]/.test(h)&&(m+=1),/\d/.test(h)&&(m+=1),/[^A-Za-z0-9]/.test(h)&&(m+=1),m<=1?{score:m,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:m===2?{score:m,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:m===3?{score:m,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:m===4?{score:m,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:m,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function ne(){const h=s[i],m=E.value,A=R(m);I.style.width=A.width,I.style.background=A.color,O.innerText=h[A.labelKey]}function $(h){i=h;const m=s[h];document.getElementById("brandSubtitle").innerText=m.subtitle,document.getElementById("loginEmailLabel").innerText=m.loginEmailLabel,document.getElementById("loginEmail").placeholder=m.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=m.loginPasswordLabel,document.getElementById("loginPassword").placeholder=m.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=m.login,document.getElementById("separatorText").innerText=m.or,document.getElementById("showRegisterBtn").innerText=m.showRegister,document.getElementById("registerFirstNameLabel").innerText=m.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=m.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=m.registerLastNameLabel,document.getElementById("registerLastName").placeholder=m.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=m.registerEmailLabel,document.getElementById("registerEmail").placeholder=m.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=m.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=m.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=m.registerPasswordLabel,document.getElementById("registerPassword").placeholder=m.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=m.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=m.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=m.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=m.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=m.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=m.registerRegionLabel,document.getElementById("registerClubLabel").innerText=m.registerClubLabel,document.getElementById("registerCodeLabel").innerText=m.registerCodeLabel,document.getElementById("registerCode").placeholder=m.registerCodePlaceholder,document.getElementById("registerBtn").innerText=m.register,document.getElementById("cancelRegisterBtn").innerText=m.cancel,b.classList.toggle("active",h==="no"),P.classList.toggle("active",h==="en"),ne()}function ce(){r.classList.remove("active"),l.classList.add("active"),a.innerText="";const h=document.getElementById("gdprCheckboxContainer");if(h&&!h.hasChildNodes()){const m=Pt();h.appendChild(m)}}function D(){l.classList.remove("active"),r.classList.add("active"),a.innerText=""}b.onclick=()=>$("no"),P.onclick=()=>$("en"),v.onclick=ce,d.onclick=D,E.oninput=ne,g.onclick=async()=>{a.innerText="";const h=document.getElementById("loginEmail").value.trim(),m=document.getElementById("loginPassword").value,A=await yt(h,m);A.success?t():a.innerText=A.error},u.onclick=async()=>{a.innerText="";const h=s[i],m=document.getElementById("registerFirstName").value.trim(),A=document.getElementById("registerLastName").value.trim(),ue=document.getElementById("registerEmail").value.trim(),Le=document.getElementById("registerEmailConfirm").value.trim(),ae=document.getElementById("registerPassword").value,Me=document.getElementById("registerPasswordConfirm").value,Te=document.getElementById("registerDivision").value,st=document.getElementById("registerCategory").value,it=document.getElementById("registerRegion").value,nt=document.getElementById("registerClub").value.trim(),Ne=document.getElementById("registerCode").value.trim();if(!m||!A){a.innerText=h.missingName;return}if(!ue||!Le||!ae||!Me||!Ne){a.innerText=h.missingFields;return}if(!Te){a.innerText=h.missingDivision;return}if(ue!==Le){a.innerText=h.emailMismatch;return}if(ae!==Me){a.innerText=h.passwordMismatch;return}if(R(ae).score<=1){a.innerText=h.weakPassword;return}if(!Lt().valid){a.innerText=h.gdprRequired;return}const Ce=await kt(ue,ae,Ne,m,A,Te,st,n,it,nt);Ce.success?t():a.innerText=Ce.error},$("no"),ne()}function ee(e){if(!e)return e;const t=e.ownerId||null,s=Array.isArray(e.participants)?e.participants:[],i=[...new Set(s.filter(Boolean))];return t&&!i.includes(t)&&i.unshift(t),{...e,ownerId:t,participants:i,stages:Array.isArray(e.stages)?e.stages:[],shooters:Array.isArray(e.shooters)?e.shooters:[]}}function Tt(e){return e.sort((t,s)=>{var a,r,l,v;const i=t.date||((r=(a=t.createdAt)==null?void 0:a.toDate)==null?void 0:r.call(a))||new Date(0);return(s.date||((v=(l=s.createdAt)==null?void 0:l.toDate)==null?void 0:v.call(l))||new Date(0))-i}),e}function Be(...e){const t=new Map;return e.flat().forEach(s=>{s!=null&&s.id&&t.set(s.id,ee(s))}),Tt([...t.values()])}async function Nt(e){const t=H();if(!t)return{success:!1,error:"Not authenticated"};try{return await $e(B(L,"users",t.uid),{...e,stages:Array.isArray(matchData.stages)?matchData.stages:[],shooters:Array.isArray(matchData.shooters)?matchData.shooters:[],updatedAt:le()}),{success:!0}}catch(s){return console.error("Save profile error:",s),{success:!1,error:s.message}}}async function Ct(e){var t;try{const s=e||((t=H())==null?void 0:t.uid);if(!s)return null;const i=await we(B(L,"users",s));return i.exists()?{uid:s,...i.data()}:null}catch(s){return console.error("Get user profile error:",s),null}}async function Ft(e){const t=H();if(console.log("🔍 [CREATE MATCH] User:",t==null?void 0:t.uid),!t)return console.error("❌ [CREATE MATCH] Not authenticated"),{success:!1,error:"Not authenticated"};try{const s=ee({...e,ownerId:t.uid,participants:[t.uid],createdAt:le(),stages:Array.isArray(e.stages)?e.stages:[],shooters:Array.isArray(e.shooters)?e.shooters:[],updatedAt:le()});console.log("📝 [CREATE MATCH] Match document to save:",{name:s.name,ownerId:s.ownerId,participants:s.participants,date:s.date,type:s.type});const i=await gt(X(L,"matches"),s);return console.log("✅ [CREATE MATCH] Success! Match ID:",i.id),{success:!0,matchId:i.id}}catch(s){return console.error("❌ [CREATE MATCH] Error:",s),console.error("   Error code:",s.code),console.error("   Error message:",s.message),{success:!1,error:s.message}}}async function ie(e,t){if(!H())return{success:!1,error:"Not authenticated"};try{const i=await we(B(L,"matches",e));if(!i.exists())return{success:!1,error:"Match ikke funnet"};const n=ee(i.data()),a={...t,ownerId:n.ownerId,participants:Array.isArray(t.participants)?ee({ownerId:n.ownerId,participants:t.participants}).participants:n.participants,updatedAt:le()};return await $e(B(L,"matches",e),a),{success:!0}}catch(i){return console.error("Update match error:",i),{success:!1,error:i.message}}}async function At(e){if(!H())return{success:!1,error:"Not authenticated"};try{return await vt(B(L,"matches",e)),{success:!0}}catch(s){return console.error("Delete match error:",s),{success:!1,error:s.message}}}async function It(){const e=H();if(console.log("📊 [GET USER MATCHES] User:",e==null?void 0:e.uid),!e)return console.warn("⚠️ [GET USER MATCHES] Not authenticated"),[];try{const t=oe(X(L,"matches"),re("participants","array-contains",e.uid)),s=oe(X(L,"matches"),re("ownerId","==",e.uid));console.log("🔍 [GET USER MATCHES] Running queries...");const[i,n]=await Promise.all([Fe(t),Fe(s)]),a=[];i.forEach(v=>{const d={id:v.id,...v.data()};console.log("  📌 Participant match:",v.id,"-",d.name),a.push(d)});const r=[];n.forEach(v=>{const d={id:v.id,...v.data()};console.log("  👑 Owner match:",v.id,"-",d.name),r.push(d)});const l=Be(a,r);return console.log("✅ [GET USER MATCHES] Total matches:",l.length),l}catch(t){return console.error("❌ [GET USER MATCHES] Error:",t),console.error("   Error code:",t.code),console.error("   Error message:",t.message),[]}}function Rt(e){const t=H();if(console.log("👂 [LISTEN USER MATCHES] Setting up listeners for user:",t==null?void 0:t.uid),!t)return console.warn("⚠️ [LISTEN USER MATCHES] No user, skipping listeners"),()=>{};const s=oe(X(L,"matches"),re("participants","array-contains",t.uid)),i=oe(X(L,"matches"),re("ownerId","==",t.uid));let n=[],a=[];const r=()=>{const d=Be(n,a);console.log("🔄 [LISTEN USER MATCHES] Emitting",d.length,"matches"),e(d)},l=pe(s,d=>{console.log("📊 [LISTEN USER MATCHES] Participant snapshot:",d.size,"docs"),n=[],d.forEach(g=>{const u={id:g.id,...g.data()};console.log("  📌 Participant match:",g.id,"-",u.name),n.push(u)}),r()},d=>{console.error("❌ [LISTEN USER MATCHES] Participant query error:",d),console.error("   Error code:",d.code),console.error("   Error message:",d.message)}),v=pe(i,d=>{console.log("👑 [LISTEN USER MATCHES] Owner snapshot:",d.size,"docs"),a=[],d.forEach(g=>{const u={id:g.id,...g.data()};console.log("  👑 Owner match:",g.id,"-",u.name),a.push(u)}),r()},d=>{console.error("❌ [LISTEN USER MATCHES] Owner query error:",d),console.error("   Error code:",d.code),console.error("   Error message:",d.message)});return()=>{console.log("🔌 [LISTEN USER MATCHES] Unsubscribing from listeners"),l(),v()}}function $t(e,t){return pe(B(L,"matches",e),i=>{i.exists()?t(ee({id:i.id,...i.data()})):t(null)},i=>{console.error("Listen to match error:",i)})}let o,y=null,q="all",w=[],Y=null,Z=null;const Dt={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Planlagte stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_stevne:"Stevne",match_types_trening:"Trening",match_types_klubbmatch:"Klubbmatch",match_types_landsmesterskap:"Landsmesterskap",match_types_internasjonalt:"Internasjonalt",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Planned Stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_stevne:"Competition",match_types_trening:"Training",match_types_klubbmatch:"Club Match",match_types_landsmesterskap:"Nationals",match_types_internasjonalt:"International",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let He="no";function p(e){return Dt[He][e]||e}const Ae={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},_t={Standard:{minor:20,major:17},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},ve=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],je={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Bt=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Ht=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function jt(e,t){const s=_t[e];return s&&(s[t]||s.minor)||15}function Ot(e,t,s){return Math.max(0,Math.ceil(e/jt(t,s))-1)}function Oe(e,t,s,i,n,a,r){const l=Ae[r]||Ae.minor;return e*l.A+t*l.C+s*l.D+i*l.miss+n*l.ns+(a||0)*l.proc}function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function ye(e){if(!e)return"";try{const t=He==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function c(e){return document.getElementById(e)}function f(e){const t=c(e);return t?t.value:""}function me(e,t){const s=parseFloat(f(e));return isNaN(s)?t||0:s}function k(e,t){const s=parseInt(f(e));return isNaN(s)?t||0:s}function K(){const e=(o==null?void 0:o.firstName)||"",t=(o==null?void 0:o.lastName)||"";return(e.charAt(0)+t.charAt(0)).toUpperCase()||"U"}function ke(){var e,t;return((e=H())==null?void 0:e.uid)||((t=_e())==null?void 0:t.uid)||null}function he(e){return e==null?null:String(e)}function S(e,t){return he(e)===he(t)}function xe(e,t){return(e.num||e.number||0)-(t.num||t.number||0)}function z(e){if(!e)return 0;if(typeof e.maxPoints=="number")return e.maxPoints;const t=Number(e.targets||e.paperTargets||0),s=Number(e.steel||e.poppers||e.plates||0);return(t+s)*10}function _(e){if(!e)return 0;if(typeof e.shots=="number")return e.shots;const t=Number(e.targets||e.paperTargets||0),s=Number(e.steel||e.poppers||e.plates||0);return t*2+s}function te(e,t={}){const s=Number(t.targets??t.paperTargets??0),i=Number(t.steel??t.poppers??t.plates??0),n=Number(t.shots??Math.max(s*2+i,0)),a=Number(t.maxPoints??(s+i)*10);return{number:e,name:t.name||`Stage ${e}`,targets:s,steel:i,shots:n,maxPoints:a}}function M(e){if(!e)return[];const s=(Array.isArray(e.stages)?e.stages:[]).filter(n=>n&&(n.number!=null||n.num!=null)&&!(n.time!=null||n.pts!=null||n.hf!=null)).map((n,a)=>te(Number(n.number??n.num??a+1),n));if(s.length)return s.sort(xe);const i=Number(e.plannedStages||0);return Array.from({length:i},(n,a)=>te(a+1))}function j(e){const t=M(e);return e.stages=t,e.plannedStages=Math.max(Number(e.plannedStages||0),t.length),e}function se(e){var s;if(!((s=e==null?void 0:e.shooters)!=null&&s.length))return null;const t=ke();return e.shooters.find(i=>i.isMe||t&&i.id===t)||e.shooters[0]||null}function Ee(e){e.shooters||(e.shooters=[]);const t=se(e);if(t)return Array.isArray(t.stages)||(t.stages=[]),t;const s={id:ke()||`me_${Date.now()}`,isMe:!0,firstName:(o==null?void 0:o.firstName)||"Meg",lastName:(o==null?void 0:o.lastName)||"",division:(o==null?void 0:o.division)||"Production",pf:(o==null?void 0:o.powerFactor)||"minor",club:(o==null?void 0:o.club)||"",stages:[]};return e.shooters.push(s),s}function J(e){return(Array.isArray(e==null?void 0:e.stages)?e.stages:[]).filter(Boolean).map(t=>({...t,num:Number(t.num??t.number)})).filter(t=>Number.isFinite(t.num)).sort(xe)}function Ut(e,t,s){var r;const i=(r=e==null?void 0:e.shooters)==null?void 0:r.find(l=>l.id===t);if(!i)return!1;Array.isArray(i.stages)||(i.stages=[]);const n=Number(s.num??s.number),a=i.stages.findIndex(l=>Number(l.num??l.number)===n);return a>=0?i.stages[a]={...i.stages[a],...s,num:n}:i.stages.push({...s,num:n}),i.stages.sort(xe),!0}function fe(e,t){return J(e).find(s=>Number(s.num)===Number(t))||null}function Ue(e,t){const s=M(e),i=J(t),n=i.reduce((g,u)=>g+Number(u.pts||0),0),a=i.reduce((g,u)=>g+Number(u.time||0),0),r=i.reduce((g,u)=>g+Number(u.a||0),0),l=i.reduce((g,u)=>g+Number(u.a||0)+Number(u.c||0)+Number(u.d||0),0),v=s.reduce((g,u)=>g+z(u),0),d=i.reduce((g,u)=>{const b=s.find(P=>P.number===u.num);return g+z(b)},0);return{totalPts:n,totalTime:a,aRate:l?r/l:0,scoredMax:d,totalMax:v,percentOfAvailable:d?n/d:0,hf:a>0?n/a:0}}function Ke(e,t){const s=M(e),n=J(t).filter(u=>Number(u.time)>0),a=n.reduce((u,b)=>{const P=s.find(E=>E.number===b.num);return u+_(P)},0),r=n.reduce((u,b)=>u+Number(b.time||0),0),l=n.reduce((u,b)=>u+Number(b.a||0),0),v=n.reduce((u,b)=>u+Number(b.a||0)+Number(b.c||0)+Number(b.d||0),0),d=n.reduce((u,b)=>u+Number(b.pts||0),0),g=n.reduce((u,b)=>{const P=s.find(E=>E.number===b.num);return u+z(P)},0);return{completedCount:n.length,timePerShot:a?r/a:0,aRate:v?l/v:0,pointsRatio:g?d/g:0,totalPts:d,totalTime:r,totalShots:a,scoredMax:g}}function Ge(e,t){const s=M(e),i=new Set(J(t).map(n=>Number(n.num)));return s.find(n=>!i.has(Number(n.number)))||null}function Ie(e,t,s){if(!e||!t||!s)return null;const i=Ke(e,t);if(!i.completedCount||!i.timePerShot)return null;const n=t.division||(o==null?void 0:o.division)||"Production",a=t.pf||(o==null?void 0:o.powerFactor)||"minor",r=Ot(_(s),n,a),l=Number((o==null?void 0:o.draw)||1.4),v=Number((o==null?void 0:o.reloadTime)||1.8),d=l+_(s)*i.timePerShot+r*v,g=Math.max(0,z(s)*(i.pointsRatio||0));return{estHF:d>0?g/d:0,estPoints:g,estTime:d,reloadCount:r,form:i}}function Re(e,t,s,i){if(!i||!s)return"Skyt stage for stage. Bygg videre på dagsformen.";const n=Math.round((i.form.aRate||0)*100),a=i.form.timePerShot||0,r=[];return n<70?r.push("Gi siktebildet litt mer tid."):r.push("Behold tempoet."),i.reloadCount>0?r.push(`Planlegg ${i.reloadCount} magasinbytte${i.reloadCount>1?"r":""}.`):r.push("Ingen reloads forventet."),r.push(`Baseline nå er ${n}%A og ${a.toFixed(3)}s/skudd.`),r.join(" ")}function Kt(e,t){const s=((e==null?void 0:e.shooters)||[]).map(l=>({shooter:l,...Ue(e,l)})).sort((l,v)=>v.totalPts-l.totalPts),i=s.findIndex(l=>l.shooter.id===(t==null?void 0:t.id));if(i<0)return"Ingen sammenligningsdata ennå.";const n=s[i],a=s[i-1]||null,r=s[i+1]||null;return!a&&!r?"Du leder alene akkurat nå.":!a&&r?`Du leder med ${(n.totalPts-r.totalPts).toFixed(1)} poeng. Hold konkurrentene bak deg.`:a&&!r?`Du trenger ${(a.totalPts-n.totalPts+.1).toFixed(1)} poeng for å gå forbi ${a.shooter.firstName}.`:`Til leder mangler du ${(a.totalPts-n.totalPts+.1).toFixed(1)} poeng. Bak har du ${(n.totalPts-r.totalPts).toFixed(1)} poeng margin.`}function Gt(e,t){var n;const s=c(e);if(!s)return;const i=w.find(a=>S(a.id,y));if(!((n=i==null?void 0:i.shooters)!=null&&n.length)){s.innerHTML='<option value="">Ingen skyttere</option>';return}s.innerHTML=i.shooters.map(a=>{const r=a.isMe?`Meg (${a.firstName||""} ${a.lastName||""})`.trim():`${a.firstName||""} ${a.lastName||""}`.trim();return`<option value="${a.id}"${t===a.id?" selected":""}>${r}</option>`}).join("")}function Vt(e,t){const s=c(e);if(!s)return;const i=w.find(a=>S(a.id,y)),n=M(i);if(!n.length){s.innerHTML='<option value="">Ingen stages</option>';return}s.innerHTML=n.map(a=>`<option value="${a.number}"${Number(t)===Number(a.number)?" selected":""}>${a.name}</option>`).join("")}async function qt(e){var i;const t=await Ct(),s=_e();t?o=t:o={firstName:s.name||((i=s.email)==null?void 0:i.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},w=await It(),Y&&Y(),Y=Rt(n=>{w=n,V(),N()}),e.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-home')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="home-chip-name">${p("no_match_selected")}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-home"></div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${K()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${p("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${p("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${p("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${p("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${p("profile")}</span></div>
  </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
  <div class="navbar">
    <div class="nav-title">MATCH<span>ER</span></div>
    <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${K()}</div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${p("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${p("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${p("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${p("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${p("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-prog')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="prog-chip-name">${p("no_match_selected")}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-prog"></div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${K()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div id="prog-stage-list"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${p("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${p("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${p("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${p("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${p("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-results')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="results-chip-name">${p("no_match_selected")}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-results"></div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${K()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal(&quot;modal-add-shooter&quot;)">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${p("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${p("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${p("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${p("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${p("profile")}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${K()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${K()}</div>
      <div class="profile-name" id="prof-name">${o.firstName||""} ${o.lastName||""}</div>
      <div class="profile-div" id="prof-div">${o.division||"—"} · ${o.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${o.powerFactor?G(o.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${o.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${p("edit_profile")}</button>
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
        <span id="info-pf">${o.powerFactor?G(o.powerFactor):"—"}</span>
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
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${p("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${p("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${p("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${p("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${p("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${p("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${p("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${p("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${p("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${p("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${p("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${p("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${p("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Stevne">${p("match_types_stevne")}</option>
          <option value="Trening">${p("match_types_trening")}</option>
          <option value="Klubbmatch">${p("match_types_klubbmatch")}</option>
          <option value="Landsmesterskap">${p("match_types_landsmesterskap")}</option>
          <option value="Internasjonalt">${p("match_types_internasjonalt")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${p("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${p("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${p("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="createMatch()">${p("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${p("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${p("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${o.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${p("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${o.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${p("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${p("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${p("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${p("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${p("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${o.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${p("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${o.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${p("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${o.reloadTime||""}">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${p("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${p("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${p("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${p("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${p("division")}</div>
        <select class="field-select" id="new-shooter-division" onchange="updateAddShooterPFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${p("power_factor")}</div>
        <select class="field-select" id="new-shooter-pf"></select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="addShooter()">${p("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${p("add_result")}</div>
      <div class="modal-close" onclick="closeModal('modal-add')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group"><div class="field-label">Skytter</div><select class="field-select" id="new-result-shooter" onchange="updateManualPoints()"></select></div>
      <div class="field-group"><div class="field-label">Stage</div><select class="field-select" id="new-result-stage" onchange="handleResultStageChange()"></select></div>
      <div class="field-group"><div class="field-label">Time (s)</div><input class="field-input" type="number" step="0.01" id="new-result-time"></div>
      <div id="new-result-stage-info" style="font-size:12px;color:var(--muted);margin:-8px 0 8px 0;">Stagekrav: –</div>
      <div class="field-group"><div class="field-label">A (auto)</div><input class="field-input" type="number" id="new-result-a" value="0" readonly></div>
      <div class="field-group"><div class="field-label">C</div><div style="display:flex;gap:8px;align-items:center;"><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-c', -1)">−</button><input class="field-input" style="text-align:center;" type="number" id="new-result-c" value="0" readonly><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-c', 1)">+</button></div></div>
      <div class="field-group"><div class="field-label">D</div><div style="display:flex;gap:8px;align-items:center;"><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-d', -1)">−</button><input class="field-input" style="text-align:center;" type="number" id="new-result-d" value="0" readonly><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-d', 1)">+</button></div></div>
      <div class="field-group"><div class="field-label">Miss</div><div style="display:flex;gap:8px;align-items:center;"><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-miss', -1)">−</button><input class="field-input" style="text-align:center;" type="number" id="new-result-miss" value="0" readonly><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-miss', 1)">+</button></div></div>
      <div class="field-group"><div class="field-label">NS</div><div style="display:flex;gap:8px;align-items:center;"><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-ns', -1)">−</button><input class="field-input" style="text-align:center;" type="number" id="new-result-ns" value="0" readonly><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-ns', 1)">+</button></div></div>
      <div class="field-group"><div class="field-label">Proc</div><div style="display:flex;gap:8px;align-items:center;"><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-proc', -1)">−</button><input class="field-input" style="text-align:center;" type="number" id="new-result-proc" value="0" readonly><button type="button" class="btn-secondary" style="padding:10px 14px;min-width:44px;" onclick="adjustResultField('new-result-proc', 1)">+</button></div></div>
      <div class="field-group"><div class="field-label">Points</div><input class="field-input" type="number" id="new-result-points" readonly></div>
    </div>
    <div class="modal-footer"><button class="btn-primary" onclick="addStageResult()">${p("save_result")}</button></div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-stage" onclick="closeModalOutside(event,'modal-add-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header"><div class="modal-title">Ny stage</div><div class="modal-close" onclick="closeModal('modal-add-stage')">✕</div></div>
    <div class="modal-body">
      <div class="field-group"><div class="field-label">Navn</div><input class="field-input" type="text" id="new-stage-name" placeholder="Stage 1"></div>
      <div class="field-group"><div class="field-label">Skudd</div><input class="field-input" type="number" id="new-stage-shots" value="12"></div>
      <div class="field-group"><div class="field-label">Paper / targets</div><input class="field-input" type="number" id="new-stage-targets" value="6"></div>
      <div class="field-group"><div class="field-label">Steel</div><input class="field-input" type="number" id="new-stage-steel" value="0"></div>
      <div class="field-group"><div class="field-label">Max points</div><input class="field-input" type="number" id="new-stage-maxpoints" value="60"></div>
    </div>
    <div class="modal-footer"><button class="btn-primary" onclick="saveStage()">Lagre stage</button></div>
  </div>
</div>

<!-- MODAL: EDIT MATCH -->
<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">Rediger match</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">MATCHNAVN</div>
        <input class="field-input" type="text" id="edit-match-name">
      </div>
      <div class="field-group">
        <div class="field-label">DATO</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">STED</div>
        <input class="field-input" type="text" id="edit-match-location">
      </div>
      <div class="field-group">
        <div class="field-label">TYPE</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">Trening</option>
          <option value="Stevne">Stevne</option>
          <option value="Landsmesterskap">Landsmesterskap</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">ANTALL STAGES</div>
        <input class="field-input" type="number" id="edit-match-stages" min="1">
      </div>
      <div class="field-group" style="display:flex;align-items:center;gap:10px;margin-top:10px;">
        <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
        <label for="edit-match-searchable" style="font-size:14px;">Tillat at andre kan finne denne matchen</label>
      </div>
      <div class="field-group" style="display:flex;align-items:center;gap:10px;margin-top:10px;">
        <input type="checkbox" id="edit-match-finished" style="width:18px;height:18px;">
        <label for="edit-match-finished" style="font-size:14px;">Marker som ferdig</label>
      </div>
      <div class="field-group" style="margin-top:18px;">
        <div class="field-label">SKYTTERE I MATCHEN</div>
        <div id="edit-match-shooters-list"></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="saveEditMatch()">Lagre</button>
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>
    </div>
  </div>
</div>

<!-- MODAL: CONFIRM DELETE MATCH -->
<div class="modal-overlay" id="modal-confirm-delete" onclick="closeModalOutside(event,'modal-confirm-delete')">
  <div class="modal-sheet" onclick="event.stopPropagation()" style="max-width:400px;">
    <div class="modal-header">
      <div class="modal-title">Slett match</div>
      <div class="modal-close" onclick="closeModal('modal-confirm-delete')">✕</div>
    </div>
    <div class="modal-body">
      <p style="margin-bottom:20px;">Er du sikker på at du vil slette <strong id="delete-match-name"></strong>?</p>
      <p style="color:var(--muted);font-size:13px;">Denne handlingen kan ikke angres.</p>
    </div>
    <div class="modal-footer">
      <div style="display:flex;gap:10px;">
        <button onclick="closeModal('modal-confirm-delete')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Avbryt</button>
        <button onclick="deleteMatchConfirmed()" style="flex:1;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>
      </div>
    </div>
  </div>
</div>

</div>
  `,zt(),ze(),N(),V(),We(),C()}function zt(){window.switchTab=Ve,window.setFilter=Jt,window.openModal=Q,window.closeModal=F,window.closeModalOutside=Wt,window.createMatch=Qt,window.toggleMatchDropdown=cs,window.selectMatchFromDropdown=us,window.renderMatchDropdown=Xe,window.openEditProfile=Yt,window.saveProfileData=Xt,window.selectPF=Zt,window.updatePFOptions=Je,window.calcPrognose=C,window.renderMatchList=V,window.selectMatch=qe,window.addShooter=ns,window.addStageResult=as,window.openAddResult=os,window.openAddStage=rs,window.saveStage=ls,window.updateManualPoints=Pe,window.adjustResultField=ss,window.handleResultStageChange=Ye,window.updateAddShooterPFOptions=()=>be("new-shooter-pf",f("new-shooter-division")||(o==null?void 0:o.division)||"Production",f("new-shooter-pf")||(o==null?void 0:o.powerFactor)||"minor"),window.handleLogout=ds,window.openEditMatch=ps,window.saveEditMatch=gs,window.confirmDeleteMatch=vs,window.deleteMatchConfirmed=ms,Qe("new-shooter-division",(o==null?void 0:o.division)||"Production"),be("new-shooter-pf",f("new-shooter-division")||(o==null?void 0:o.division)||"Production",(o==null?void 0:o.powerFactor)||"minor"),document.addEventListener("click",function(e){const t=e.target.closest(".match-chip"),s=e.target.closest(".match-dropdown");!t&&!s&&(document.querySelectorAll(".match-dropdown").forEach(i=>{i.classList.remove("open")}),document.querySelectorAll(".match-chip").forEach(i=>{i.classList.remove("open")}))})}function Ve(e){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(i=>i.classList.remove("active")),c(e).classList.add("active");const t=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(e),s=document.querySelectorAll(".tab-item");s[t]&&s[t].classList.add("active"),e==="screen-home"&&N(),e==="screen-matches"&&V(),e==="screen-results"&&W(),e==="screen-prognose"&&C()}function Q(e){c(e).classList.add("open")}function F(e){c(e).classList.remove("open")}function Wt(e,t){e.target.id===t&&F(t)}function Jt(e,t){q=e,document.querySelectorAll(".filter-chip").forEach(s=>s.classList.remove("active")),t.classList.add("active"),V()}async function Qt(){const e=Math.max(1,k("new-match-stages",6)),t=Array.from({length:e},(n,a)=>te(a+1)),s={name:f("new-match-name")||"Ny match",type:f("new-match-type")||"Stevne",date:f("new-match-date")||new Date().toISOString().split("T")[0],location:f("new-match-location")||"",plannedStages:e,stages:t,shooters:[]},i=await Ft(s);i.success?F("modal-new-match"):alert("Kunne ikke opprette match: "+i.error)}function qe(e){y=he(e);const t=w.find(s=>S(s.id,y));if(t){const s=t.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(n=>{const a=c(n);a&&(a.textContent=s)})}Z&&Z(),y&&(Z=$t(y,s=>{const i=w.findIndex(n=>S(n.id,y));i!==-1&&s&&(w[i]=j(s),N(),W(),C())})),N(),W(),C(),Ve("screen-home")}function N(){var r;const e=c("home-content");if(!e)return;const t=w.find(l=>S(l.id,y));if(!t){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>`;return}j(t),Ee(t);const s=se(t),i=J(s),n=M(t);let a="";a+='<div class="card">',a+='<div class="card-header"><div class="mhc-name">'+t.name+'</div><button class="btn-sm accent" onclick="openEditMatch()">⚙ Rediger</button></div>',a+='<div class="mhc-meta">'+ye(t.date)+" · "+t.type+"</div>",a+='<div class="mhc-stats"><div><div class="mhc-val">'+n.length+'</div><div class="mhc-lbl">Stages</div></div><div><div class="mhc-val">'+(((r=t.shooters)==null?void 0:r.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div></div>',a+='<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;"><button class="btn-primary" onclick="openAddStage()">Ny stage</button><button class="btn-primary" onclick="openModal(&quot;modal-add-shooter&quot;)">Ny skytter</button><button class="btn-primary" onclick="openAddResult()">Legg til resultat</button></div>',a+="</div>",a+='<div class="section-title">Stages</div><div class="card">',n.forEach(l=>{const v=fe(s,l.number);a+='<div class="stage-row"><div class="stage-num">S'+l.number+'</div><div class="stage-info"><div class="stage-name">'+l.name+'</div><div class="stage-meta">'+_(l)+" skudd · maks "+z(l)+' pts</div></div><div class="stage-hf">'+(v?Number(v.hf||0).toFixed(2):"—")+"</div></div>"}),a+="</div>",i.length&&(a+='<div class="section-title">Mine siste resultater</div><div class="card">',i.slice(-3).reverse().forEach(l=>{a+='<div class="stage-row"><div class="stage-num">S'+l.num+'</div><div class="stage-info"><div class="stage-name">Stage '+l.num+'</div><div class="stage-meta">'+Number(l.time||0).toFixed(2)+"s · "+Number(l.pts||0).toFixed(1)+' pts</div></div><div class="stage-hf">'+Number(l.hf||0).toFixed(2)+"</div></div>"}),a+="</div>"),e.innerHTML=a}function V(){const e=c("match-list-container");if(!e)return;const t=f("match-search").toLowerCase();let s=w.filter(n=>{var r;if(t&&!n.name.toLowerCase().includes(t)&&!((r=n.location)!=null&&r.toLowerCase().includes(t)))return!1;if(q==="all")return!0;if(q==="active")return n.id===y;if(q==="trening")return n.type==="Trening";if(q==="stevne")return n.type==="Stevne";const a=n.date?new Date(n.date).getFullYear().toString():"";return q===a});if(s.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let i="";s.forEach(n=>{var r;const a=S(n.id,y);i+=`<div class="match-row" onclick="selectMatch('`+n.id+`')">`,i+='<div class="match-row-icon'+(a?" is-active":"")+'">🏆</div>',i+='<div class="match-row-info">',i+='<div class="match-row-name">'+n.name+"</div>",i+='<div class="match-row-meta">'+ye(n.date)+" · "+(n.location||n.type)+"</div>",i+="</div>",i+='<div class="match-row-right">',i+='<div class="match-stg-count">'+(((r=n.stages)==null?void 0:r.length)||0)+"</div>",i+='<div class="match-stg-lbl">stages</div>',i+="</div>",i+="</div>"}),e.innerHTML=i}function W(){var a;const e=c("results-content");if(!e)return;const t=w.find(r=>S(r.id,y));if(!t){e.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!t.shooters||t.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}const s=t.shooters.map(r=>({shooter:r,...Ue(t,r)})).sort((r,l)=>l.totalPts-r.totalPts),i=((a=s[0])==null?void 0:a.totalPts)||0;let n='<div class="card"><div class="card-header"><div class="card-title">Standings</div></div><div class="standings-table-wrap"><table class="standings-table"><thead><tr class="standings-header-row"><th class="standings-th standings-th-rank">#</th><th class="standings-th standings-th-shooter">Skytter</th><th class="standings-th standings-th-pts">Pts</th><th class="standings-th standings-th-pct">%</th></tr></thead><tbody>';s.forEach((r,l)=>{const v=i>0?(r.totalPts/i*100).toFixed(2):"0.00",d=r.shooter;n+='<tr class="standings-row"><td class="standings-td standings-td-rank">'+(l+1)+'</td><td class="standings-td standings-td-shooter"><div class="standings-shooter-name">'+d.firstName+" "+d.lastName+'</div><div class="standings-shooter-meta">'+(d.division||"—")+" · "+G(d.pf||"minor")+'</div></td><td class="standings-td standings-td-pts">'+r.totalPts.toFixed(1)+'</td><td class="standings-td standings-td-pct">'+v+"%</td></tr>"}),n+="</tbody></table></div></div>",e.innerHTML=n}function ze(){const e=K();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(l=>{const v=c(l);v&&(v.textContent=e)});const s=c("prof-name");s&&(s.textContent=(o.firstName||"")+" "+(o.lastName||""));const i=c("prof-div");i&&(i.textContent=(o.division||"—")+" · "+(o.club||"—"));const n=c("prof-badge-pf");n&&(n.textContent=o.powerFactor?G(o.powerFactor):"—");const a=c("prof-badge-region");a&&(a.textContent=o.region||"—");const r={"info-firstname":o.firstName||"—","info-lastname":o.lastName||"—","info-division":o.division||"—","info-category":o.category||"—","info-pf":o.powerFactor?G(o.powerFactor):"—","info-region":o.region||"—","info-club":o.club||"—"};Object.keys(r).forEach(l=>{const v=c(l);v&&(v.textContent=r[l])}),We()}function We(){const e=ke(),t=[];w.forEach(u=>{var P;const b=(P=u==null?void 0:u.shooters)==null?void 0:P.find(E=>E.isMe||e&&E.id===e);J(b).forEach(E=>t.push(E))});let s=0,i=0,n=0;t.forEach(u=>{s+=Number(u.a||0),i+=Number(u.a||0)+Number(u.c||0)+Number(u.d||0),n+=Number(u.hf||0)});const a=t.length?(n/t.length).toFixed(2):"—",r=i?Math.round(s/i*100)+"%":"—",l=c("stat-matches");l&&(l.textContent=w.length);const v=c("stat-stages");v&&(v.textContent=t.length);const d=c("stat-avg-hf");d&&(d.textContent=a);const g=c("stat-a-rate");g&&(g.textContent=r)}function Yt(){c("edit-firstname").value=o.firstName||"",c("edit-lastname").value=o.lastName||"",c("edit-club").value=o.club||"",c("edit-draw").value=o.draw||"",c("edit-reload").value=o.reloadTime||"";let e="";ve.forEach(i=>{e+='<option value="'+i+'"'+(i===o.division?" selected":"")+">"+i+"</option>"}),c("edit-division").innerHTML=e;let t="";Bt.forEach(i=>{t+='<option value="'+i+'"'+(i===o.category?" selected":"")+">"+i+"</option>"}),c("edit-category").innerHTML=t;let s="";Ht.forEach(i=>{s+='<option value="'+i+'"'+(i===o.region?" selected":"")+">"+i+"</option>"}),c("edit-region").innerHTML=s,Je(),Q("modal-edit-profile")}function Je(){const e=f("edit-division"),t=je[e]||["minor","major"];let s="";t.forEach(i=>{const n=o.powerFactor===i;s+='<label class="pf-option'+(n?" active":"")+`" onclick="selectPF(this,'`+i+`')">`,s+='<input type="radio" name="pf" value="'+i+'">',s+='<div class="pf-label">'+i.toUpperCase()+"</div>",s+='<div class="pf-sub">'+(i==="major"?"≥170 PF":"<170 PF")+"</div>",s+="</label>"}),c("pf-options").innerHTML=s,t.indexOf(o.powerFactor)<0&&(o.powerFactor=t[0])}function Zt(e,t){document.querySelectorAll(".pf-option").forEach(s=>s.classList.remove("active")),e.classList.add("active"),o.powerFactor=t}async function Xt(){o.firstName=f("edit-firstname").trim()||"",o.lastName=f("edit-lastname").trim()||"",o.division=f("edit-division")||"",o.category=f("edit-category")||"",o.region=f("edit-region")||"",o.club=f("edit-club").trim()||"",o.draw=me("edit-draw")||null,o.reloadTime=me("edit-reload")||null;const e=await Nt(o),t=c("save-profile-btn");e.success?(t.textContent="✓ Lagret!",t.style.background="var(--green)",setTimeout(()=>{t.textContent=p("save_profile"),t.style.background=""},1800)):(t.textContent="❌ Feil!",t.style.background="var(--red)",setTimeout(()=>{t.textContent=p("save_profile"),t.style.background=""},1800)),ze(),C(),N(),F("modal-edit-profile")}function C(){const e=w.find(v=>S(v.id,y)),t=c("prog-match-context"),s=c("snapshot-container"),i=c("prog-stage-list");if(!t||!s||!i)return;if(!e){t.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>',s.innerHTML="",i.innerHTML="";return}j(e);const n=Ee(e),a=Ke(e,n),r=Kt(e,n);t.innerHTML='<div class="card"><div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div><div class="stats-grid"><div class="stat-block"><div class="stat-value">'+(a.timePerShot?a.timePerShot.toFixed(3)+"s":"—")+'</div><div class="stat-label">t/skudd</div></div><div class="stat-block"><div class="stat-value">'+(o.draw||"—")+'s</div><div class="stat-label">Draw</div></div><div class="stat-block"><div class="stat-value">'+(o.reloadTime||"—")+'s</div><div class="stat-label">Reload</div></div><div class="stat-block"><div class="stat-value">'+Math.round((a.aRate||0)*100)+'%</div><div class="stat-label">A-andel</div></div></div></div>',s.innerHTML='<div class="card"><div class="card-header"><div class="card-title">Refleksjon</div></div><div class="empty-sub" style="text-align:left;">'+r+"</div></div>";const l=M(e);i.innerHTML=l.map(v=>{const d=fe(n,v.number),g=d?null:Ie(e,n,v),u=Ge(e,n),b=d?Re(e,n,u,Ie(e,n,u)):Re(e,n,v,g),P=d?'<span class="badge" style="background:rgba(34,197,94,.18);color:#4ade80;">SKUTT</span>':'<span class="badge">IKKE SKUTT</span>',E=(e.shooters||[]).map(x=>({shooter:x,result:fe(x,v.number)})).filter(x=>x.result).sort((x,T)=>Number(T.result.hf||0)-Number(x.result.hf||0)),I=E.length?E.map((x,T)=>'<tr class="standings-row"><td class="standings-td standings-td-rank">'+(T+1)+'</td><td class="standings-td standings-td-shooter">'+x.shooter.firstName+" "+x.shooter.lastName+'</td><td class="standings-td standings-td-pts">'+Number(x.result.pts||0).toFixed(1)+'</td><td class="standings-td standings-th-pct">'+Number(x.result.hf||0).toFixed(2)+"</td></tr>").join(""):'<tr><td colspan="4" class="empty-sub">Ingen resultater ennå.</td></tr>',O=d?'<div class="stats-grid"><div class="stat-block"><div class="stat-value">'+(_(v)&&d.time?(d.time/_(v)).toFixed(3)+"s":"—")+'</div><div class="stat-label">t/skudd</div></div><div class="stat-block"><div class="stat-value">'+Math.round(Number(d.a||0)/Math.max(1,Number(d.a||0)+Number(d.c||0)+Number(d.d||0))*100)+'%A</div><div class="stat-label">Treff</div></div><div class="stat-block"><div class="stat-value">'+(g?g.estHF.toFixed(2):"—")+'</div><div class="stat-label">Est. HF neste</div></div></div>':'<div class="stats-grid"><div class="stat-block"><div class="stat-value">'+(g?g.estHF.toFixed(2):"—")+'</div><div class="stat-label">Est. HF</div></div><div class="stat-block"><div class="stat-value">'+_(v)+'</div><div class="stat-label">Skudd</div></div><div class="stat-block"><div class="stat-value">'+z(v)+'</div><div class="stat-label">Maks pts</div></div></div>';return'<div class="card"><div class="card-header"><div class="card-title">'+v.name+"</div>"+P+'</div><div class="standings-table-wrap"><table class="standings-table"><thead><tr class="standings-header-row"><th class="standings-th standings-th-rank">#</th><th class="standings-th standings-th-shooter">Navn</th><th class="standings-th standings-th-pts">Pts</th><th class="standings-th standings-th-pct">HF</th></tr></thead><tbody>'+I+"</tbody></table></div>"+O+'<div class="card" style="margin-top:12px;background:rgba(232,184,75,.08);">'+b+"</div></div>"}).join("")}function Qe(e,t){const s=c(e);s&&(s.innerHTML=ve.map(i=>`<option value="${i}">${i}</option>`).join(""),t&&ve.includes(t)&&(s.value=t))}function be(e,t,s){const i=c(e);if(!i)return;const n=je[t]||["minor"];i.innerHTML=n.map(r=>`<option value="${r}">${G(r)}</option>`).join("");const a=String(s||n[0]||"minor").toLowerCase();i.value=n.includes(a)?a:n[0]||"minor"}function es(){const e=w.find(s=>S(s.id,y));if(!e)return null;const t=k("new-result-stage",1);return M(e).find(s=>Number(s.number)===Number(t))||null}function Se(){const e=es();return Math.max(0,_(e))}function ts(e){const t=Se(),s=["new-result-c","new-result-d","new-result-miss","new-result-ns"],i={};s.forEach(d=>{i[d]=Math.max(0,k(d,0))});let n=Math.max(0,k("new-result-proc",0)),a=s.reduce((d,g)=>d+i[g],0);if(a>t){if(e&&s.includes(e)){const d=a-i[e];i[e]=Math.max(0,t-d)}else{let d=a-t;s.slice().reverse().forEach(g=>{if(d<=0)return;const u=Math.min(i[g],d);i[g]-=u,d-=u})}a=s.reduce((d,g)=>d+i[g],0)}const l={"new-result-a":Math.max(0,t-a),"new-result-c":i["new-result-c"],"new-result-d":i["new-result-d"],"new-result-miss":i["new-result-miss"],"new-result-ns":i["new-result-ns"],"new-result-proc":n};Object.entries(l).forEach(([d,g])=>{const u=c(d);u&&(u.value=g)});const v=c("new-result-stage-info");v&&(v.textContent=t>0?`Stagekrav: ${t} skudd`:"Stagekrav: –")}function Ye(){const e=Se(),t=c("new-result-a"),s=c("new-result-c"),i=c("new-result-d"),n=c("new-result-miss"),a=c("new-result-ns"),r=c("new-result-proc");t&&(t.value=e),s&&(s.value=0),i&&(i.value=0),n&&(n.value=0),a&&(a.value=0),r&&(r.value=0),Pe()}function ss(e,t){const s=c(e);if(!s)return;const i=Math.max(0,k(e,0));s.value=Math.max(0,i+t),Pe(e)}function Ze(e){const t=c("edit-match-shooters-list");if(!t)return;const s=Array.isArray(e==null?void 0:e.shooters)?e.shooters:[];if(!s.length){t.innerHTML='<div style="font-size:13px;color:var(--muted);padding:10px 0;">Ingen skyttere lagt til ennå.</div>';return}t.innerHTML=s.map(i=>{const n=`${i.firstName||""} ${i.lastName||""}`.trim()||"Ukjent",a=G(String(i.pf||"minor").toLowerCase()),r=i.isMe?'<span class="badge" style="background:rgba(74,158,255,.16);color:#60a5fa;margin-left:8px;">Meg</span>':"",l=!i.isMe;return`
      <div class="stage-row" style="align-items:center;gap:12px;">
        <div class="stage-info">
          <div class="stage-name">${n}${r}</div>
          <div class="stage-meta">${i.division||"—"} · ${a}</div>
        </div>
        ${l?`<button class="btn-secondary" style="padding:8px 12px;min-width:72px;" data-shooter-id="${i.id}">Slett</button>`:""}
      </div>`}).join(""),t.querySelectorAll("[data-shooter-id]").forEach(i=>{i.onclick=()=>is(i.dataset.shooterId)})}async function is(e){const t=w.find(a=>S(a.id,y));if(!t)return;const s=(t.shooters||[]).find(a=>a.id===e);if(!s||s.isMe)return;const i=`${s.firstName||""} ${s.lastName||""}`.trim()||"denne skytteren";if(!confirm(`Slette ${i} fra matchen?`))return;t.shooters=(t.shooters||[]).filter(a=>a.id!==e);const n=await ie(t.id,j(t));if(!n.success)return alert("Kunne ikke slette skytter: "+n.error);Ze(t),N(),W(),C()}async function ns(){const e=w.find(l=>S(l.id,y));if(!e)return;const t=f("new-shooter-firstname").trim(),s=f("new-shooter-lastname").trim(),i=f("new-shooter-division")||"Classic",n=(f("new-shooter-pf")||(o==null?void 0:o.powerFactor)||"minor").toLowerCase();if(!t||!s){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:t,lastName:s,division:i,pf:n,club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(a);const r=await ie(e.id,j(e));if(!r.success)return alert("Kunne ikke lagre skytter: "+r.error);F("modal-add-shooter"),c("new-shooter-firstname")&&(c("new-shooter-firstname").value=""),c("new-shooter-lastname")&&(c("new-shooter-lastname").value=""),Qe("new-shooter-division",(o==null?void 0:o.division)||i),be("new-shooter-pf",f("new-shooter-division")||(o==null?void 0:o.division)||i,(o==null?void 0:o.powerFactor)||n),W(),N(),C()}async function as(){var T;const e=w.find(R=>S(R.id,y));if(!e)return;const t=f("new-result-shooter"),s=k("new-result-stage",1),i=me("new-result-time",0),n=k("new-result-a",0),a=k("new-result-c",0),r=k("new-result-d",0),l=k("new-result-miss",0),v=k("new-result-ns",0),d=k("new-result-proc",0),g=(T=e.shooters)==null?void 0:T.find(R=>R.id===t);if(!g)return alert("Velg skytter");const u=Se(),b=n+a+r+l+v;if(u>0&&b!==u)return alert("Totalt antall treff må være "+u+".");const P=g.pf||o.powerFactor||"minor",E=Oe(n,a,r,l,v,d,P),I=i>0?E/i:0,O={num:s,name:"Stage "+s,time:i,pts:E,hf:I,a:n,c:a,d:r,miss:l,ns:v,proc:d,pf:P};Ut(e,t,O);const x=await ie(e.id,j(e));if(!x.success)return alert("Kunne ikke lagre resultat: "+x.error);F("modal-add"),N(),W(),C()}function Pe(e){var r;const t=w.find(l=>S(l.id,y)),s=((r=t==null?void 0:t.shooters)==null?void 0:r.find(l=>l.id===f("new-result-shooter")))||se(t);ts(e);const i=(s==null?void 0:s.pf)||(o==null?void 0:o.powerFactor)||"minor",n=Oe(k("new-result-a",0),k("new-result-c",0),k("new-result-d",0),k("new-result-miss",0),k("new-result-ns",0),k("new-result-proc",0),i),a=c("new-result-points");a&&(a.value=n)}function os(){var s,i,n;const e=w.find(a=>S(a.id,y));if(!e)return alert("Velg en match først");j(e),Ee(e),Gt("new-result-shooter",(s=se(e))==null?void 0:s.id),Vt("new-result-stage",((i=Ge(e,se(e)))==null?void 0:i.number)||((n=M(e)[0])==null?void 0:n.number));const t=c("new-result-time");t&&(t.value=""),Ye(),Q("modal-add")}function rs(){const e=w.find(s=>S(s.id,y));if(!e)return alert("Velg en match først");const t=M(e).length+1;c("new-stage-name").value=`Stage ${t}`,c("new-stage-shots").value=12,c("new-stage-targets").value=6,c("new-stage-steel").value=0,c("new-stage-maxpoints").value=60,Q("modal-add-stage")}async function ls(){const e=w.find(n=>S(n.id,y));if(!e)return;const t=M(e),s=t.length+1;t.push(te(s,{name:f("new-stage-name")||`Stage ${s}`,shots:k("new-stage-shots",12),targets:k("new-stage-targets",6),steel:k("new-stage-steel",0),maxPoints:k("new-stage-maxpoints",60)})),e.stages=t,e.plannedStages=t.length;const i=await ie(e.id,e);if(!i.success)return alert("Kunne ikke lagre stage: "+i.error);F("modal-add-stage"),N(),C()}async function ds(){Y&&Y(),Z&&Z(),await xt(),window.location.reload()}function cs(e){const t=c(e);if(!t)return;const s=t.previousElementSibling,i=t.classList.contains("open");document.querySelectorAll(".match-dropdown").forEach(n=>{n.classList.remove("open")}),document.querySelectorAll(".match-chip").forEach(n=>{n.classList.remove("open")}),i||(t.classList.add("open"),s.classList.add("open"),Xe(e))}function us(e){qe(e),document.querySelectorAll(".match-dropdown").forEach(t=>{t.classList.remove("open")}),document.querySelectorAll(".match-chip").forEach(t=>{t.classList.remove("open")})}function Xe(e){const t=c(e);if(!t)return;if(w.length===0){t.innerHTML='<div class="match-dropdown-item" style="text-align:center;color:var(--muted);padding:20px;">Ingen matcher</div>';return}let s="";w.forEach((i,n)=>{const a=S(i.id,y);s+='<div class="match-dropdown-item'+(a?" active":"")+`" onclick="selectMatchFromDropdown('`+i.id+`')">`,s+='<div class="match-dropdown-name">',s+="Match ID "+(n+1)+" "+i.name,a&&(s+='<span class="match-dropdown-active-indicator"></span>'),s+="</div>",s+='<div class="match-dropdown-meta">'+ye(i.date)+" · "+(i.location||i.type)+"</div>",s+="</div>"}),t.innerHTML=s}function ps(){const e=w.find(n=>S(n.id,y));if(!e){alert("Ingen match valgt");return}j(e),c("edit-match-name").value=e.name||"",c("edit-match-date").value=e.date||"",c("edit-match-location").value=e.location||"",c("edit-match-type").value=e.type||"Trening",c("edit-match-stages").value=Math.max(Number(e.plannedStages||0),M(e).length);const t=c("edit-match-searchable");t&&(t.checked=e.searchable!==!1);const s=c("edit-match-finished");s&&(s.checked=e.status==="finished");const i=c("delete-match-btn");i&&(i.style.display="block"),Ze(e),Q("modal-edit-match")}async function gs(){const e=w.find(l=>S(l.id,y));if(!e){alert("Ingen match valgt");return}const t=c("edit-match-searchable"),s=c("edit-match-finished"),i=k("edit-match-stages",e.plannedStages),n=M(e);for(;n.length<i;)n.push(te(n.length+1));const a={name:f("edit-match-name")||e.name,type:f("edit-match-type")||e.type,date:f("edit-match-date")||e.date,location:f("edit-match-location")||e.location,plannedStages:i,searchable:t?t.checked:!0,status:s&&s.checked?"finished":"active",stages:n},r=await ie(e.id,a);r.success?(F("modal-edit-match"),N(),V(),C()):alert("Kunne ikke oppdatere match: "+r.error)}function vs(){const e=w.find(s=>s.id===y);if(!e){alert("Ingen match valgt");return}const t=e.id?"Match ID "+e.id+" "+e.name:e.name;c("delete-match-name").textContent=t,Q("modal-confirm-delete")}async function ms(){const e=w.find(s=>s.id===y);if(!e){alert("Ingen match valgt");return}const t=await At(e.id);t.success?(F("modal-confirm-delete"),F("modal-edit-match"),y=null,N(),V(),alert("Match slettet")):alert("Kunne ikke slette match: "+t.error)}const et=document.getElementById("app");function hs(){Mt(et,tt)}function tt(){qt(et)}wt(e=>{e?tt():hs()});


