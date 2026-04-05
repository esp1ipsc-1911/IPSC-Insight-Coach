import{initializeApp as $e}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as Ne,onAuthStateChanged as Be,signInWithEmailAndPassword as De,createUserWithEmailAndPassword as Ae,signOut as Re}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as je,getDoc as V,doc as k,setDoc as X,query as ee,collection as te,where as ie,getDocs as we,onSnapshot as ce,serverTimestamp as Y,updateDoc as B,arrayUnion as ke,deleteDoc as Oe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as He,httpsCallable as ze}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(n){if(n.ep)return;n.ep=!0;const l=t(n);fetch(n.href,l)}})();const Ue={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},xe=$e(Ue),se=Ne(xe),y=je(xe),Ve=He();let de=null,$=null;function Ge(i){Be(se,async e=>{if(e){de=e;try{const t=await V(k(y,"users",e.uid));t.exists()?$={uid:e.uid,...t.data()}:$={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},i($)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),$={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},i($)}}else de=null,$=null,i(null)})}async function Ke(i,e){try{const t=(i||"").trim();return{success:!0,user:(await De(se,t,e||"")).user}}catch(t){console.error("Innlogging feilet:",t);let s="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Feil e-post eller passord":t.code==="auth/invalid-email"?s="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function qe(i,e,t,s,n,l,r,p,v,f){try{const u=(i||"").trim(),m=e||"",L=(t||"").trim(),P=(s||"").trim(),G=(n||"").trim(),K=(l||"").trim(),oe=(r||"").trim(),j=(p||"minor").trim(),O=(v||"").trim(),q=(f||"").trim(),T=(await Ae(se,u,m)).user,re=ze(Ve,"validateInviteCode");try{await re({code:L,userId:T.uid,userEmail:u})}catch(C){await T.delete();let g="Ugyldig invitasjonskode";return C.code==="functions/not-found"?g="Ugyldig invitasjonskode":C.code==="functions/permission-denied"?g="Denne koden er deaktivert":C.code==="functions/resource-exhausted"?g="Denne koden har nådd maksimalt antall bruk":C.code==="functions/already-exists"?g="Du har allerede brukt denne koden":C.message&&(g=C.message),{success:!1,error:g}}return await X(k(y,"users",T.uid),{email:u,firstName:P,lastName:G,division:K,category:oe,powerFactor:j,region:O,club:q,role:"user",inviteCode:L,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:T}}catch(u){console.error("Registrering feilet:",u);let m="Registrering feilet";return u.code==="auth/email-already-in-use"?m="E-postadressen er allerede i bruk":u.code==="auth/weak-password"?m="Passordet må være minst 6 tegn":u.code==="auth/invalid-email"?m="Ugyldig e-postadresse":u.message&&(m=u.message),{success:!1,error:m}}}async function We(){try{return await Re(se),{success:!0}}catch(i){return console.error("Utlogging feilet:",i),{success:!1,error:"Kunne ikke logge ut"}}}function S(){return de}function pe(){return $}const Je=`
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
`;function Ye(i,e){const t=document.getElementById("gdpr-modal");t&&t.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
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
  `,document.body.appendChild(s);const n=s.querySelector(".gdpr-close-btn"),l=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),p=s.querySelector(".gdpr-modal-overlay"),v=()=>{s.remove()};n.addEventListener("click",()=>{v(),e&&e()}),p.addEventListener("click",()=>{v(),e&&e()}),r.addEventListener("click",()=>{v(),e&&e()}),l.addEventListener("click",()=>{v(),i&&i()}),document.body.style.overflow="hidden";const f=v,u=()=>{document.body.style.overflow="",f()};n.onclick=()=>{u(),e&&e()},p.onclick=()=>{u(),e&&e()},r.onclick=()=>{u(),e&&e()},l.onclick=()=>{u(),i&&i()}}function Qe(){const i=document.createElement("div");return i.className="gdpr-checkbox-container",i.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const e=i.querySelector("#gdpr-open-modal");e&&e.addEventListener("click",t=>{t.preventDefault(),Ye(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),i}function Ze(){const i=document.getElementById("gdpr-consent-checkbox");return!i||!i.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Xe(i,e){i.innerHTML=`
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
  `;const t={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",n="minor";const l=document.getElementById("error"),r=document.getElementById("loginSection"),p=document.getElementById("registerSection"),v=document.getElementById("showRegisterBtn"),f=document.getElementById("cancelRegisterBtn"),u=document.getElementById("loginBtn"),m=document.getElementById("registerBtn"),L=document.getElementById("langNo"),P=document.getElementById("langEn"),G=document.getElementById("registerPassword"),K=document.getElementById("passwordStrengthBar"),oe=document.getElementById("passwordStrengthText"),j=document.getElementById("pfMinor"),O=document.getElementById("pfMajor");j.onclick=()=>{n="minor",j.classList.add("selected"),O.classList.remove("selected")},O.onclick=()=>{n="major",O.classList.add("selected"),j.classList.remove("selected")};function q(g){let c=0;return g?(g.length>=8&&(c+=1),g.length>=12&&(c+=1),/[a-z]/.test(g)&&/[A-Z]/.test(g)&&(c+=1),/\d/.test(g)&&(c+=1),/[^A-Za-z0-9]/.test(g)&&(c+=1),c<=1?{score:c,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:c===2?{score:c,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:c===3?{score:c,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:c===4?{score:c,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:c,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function W(){const g=t[s],c=G.value,I=q(c);K.style.width=I.width,K.style.background=I.color,oe.innerText=g[I.labelKey]}function T(g){s=g;const c=t[g];document.getElementById("brandSubtitle").innerText=c.subtitle,document.getElementById("loginEmailLabel").innerText=c.loginEmailLabel,document.getElementById("loginEmail").placeholder=c.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=c.loginPasswordLabel,document.getElementById("loginPassword").placeholder=c.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=c.login,document.getElementById("separatorText").innerText=c.or,document.getElementById("showRegisterBtn").innerText=c.showRegister,document.getElementById("registerFirstNameLabel").innerText=c.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=c.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=c.registerLastNameLabel,document.getElementById("registerLastName").placeholder=c.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=c.registerEmailLabel,document.getElementById("registerEmail").placeholder=c.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=c.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=c.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=c.registerPasswordLabel,document.getElementById("registerPassword").placeholder=c.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=c.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=c.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=c.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=c.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=c.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=c.registerRegionLabel,document.getElementById("registerClubLabel").innerText=c.registerClubLabel,document.getElementById("registerCodeLabel").innerText=c.registerCodeLabel,document.getElementById("registerCode").placeholder=c.registerCodePlaceholder,document.getElementById("registerBtn").innerText=c.register,document.getElementById("cancelRegisterBtn").innerText=c.cancel,L.classList.toggle("active",g==="no"),P.classList.toggle("active",g==="en"),W()}function re(){r.classList.remove("active"),p.classList.add("active"),l.innerText="";const g=document.getElementById("gdprCheckboxContainer");if(g&&!g.hasChildNodes()){const c=Qe();g.appendChild(c)}}function C(){p.classList.remove("active"),r.classList.add("active"),l.innerText=""}L.onclick=()=>T("no"),P.onclick=()=>T("en"),v.onclick=re,f.onclick=C,G.oninput=W,u.onclick=async()=>{l.innerText="";const g=document.getElementById("loginEmail").value.trim(),c=document.getElementById("loginPassword").value,I=await Ke(g,c);I.success?e():l.innerText=I.error},m.onclick=async()=>{l.innerText="";const g=t[s],c=document.getElementById("registerFirstName").value.trim(),I=document.getElementById("registerLastName").value.trim(),le=document.getElementById("registerEmail").value.trim(),me=document.getElementById("registerEmailConfirm").value.trim(),J=document.getElementById("registerPassword").value,he=document.getElementById("registerPasswordConfirm").value,fe=document.getElementById("registerDivision").value,Ce=document.getElementById("registerCategory").value,Me=document.getElementById("registerRegion").value,Fe=document.getElementById("registerClub").value.trim(),be=document.getElementById("registerCode").value.trim();if(!c||!I){l.innerText=g.missingName;return}if(!le||!me||!J||!he||!be){l.innerText=g.missingFields;return}if(!fe){l.innerText=g.missingDivision;return}if(le!==me){l.innerText=g.emailMismatch;return}if(J!==he){l.innerText=g.passwordMismatch;return}if(q(J).score<=1){l.innerText=g.weakPassword;return}if(!Ze().valid){l.innerText=g.gdprRequired;return}const ye=await qe(le,J,be,c,I,fe,Ce,n,Me,Fe);ye.success?e():l.innerText=ye.error},T("no"),W()}async function et(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await B(k(y,"users",e.uid),{...i,updatedAt:Y()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function tt(){const i=S();if(!i)return null;try{const e=await V(k(y,"users",i.uid));return e.exists()?{uid:i.uid,...e.data()}:null}catch(e){return console.error("Get profile error:",e),null}}async function it(){const i=k(y,"counters","matchId");try{const e=await V(i);if(!e.exists())return await X(i,{value:1}),1;const s=e.data().value+1;return await B(i,{value:s}),s}catch(e){throw console.error("Error getting next match ID:",e),e}}async function st(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const t=await it(),s={id:t,...i,searchable:i.searchable!==!1,ownerId:e.uid,participants:[e.uid],createdAt:Y(),updatedAt:Y()};return await X(k(y,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function ae(i,e){if(!S())return{success:!1,error:"Not authenticated"};try{return await B(k(y,"matches",i.toString()),{...e,updatedAt:Y()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function at(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const t=await V(k(y,"matches",i.toString()));return t.exists()?t.data().ownerId!==e.uid?{success:!1,error:"Only the creator can delete this match"}:(await Oe(k(y,"matches",i.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(t){return console.error("Delete match error:",t),{success:!1,error:t.message}}}async function nt(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{const t=await V(k(y,"matches",i.toString()));if(!t.exists())return{success:!1,error:"Match not found"};const s={id:t.id,...t.data()};return s.searchable?(s.participants.includes(e.uid)||await B(k(y,"matches",i.toString()),{participants:ke(e.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(t){return console.error("Search match error:",t),{success:!1,error:t.message}}}async function ot(){const i=S();if(!i)return[];try{const e=ee(te(y,"matches"),ie("participants","array-contains",i.uid)),t=await we(e),s=[];return t.forEach(n=>{s.push({id:n.id,...n.data()})}),s.sort((n,l)=>{var v,f;const r=n.date||((v=n.createdAt)==null?void 0:v.toDate())||new Date(0);return(l.date||((f=l.createdAt)==null?void 0:f.toDate())||new Date(0))-r}),s}catch(e){return console.error("Get user matches error:",e),[]}}function rt(i){const e=S();if(!e)return()=>{};const t=ee(te(y,"matches"),ie("participants","array-contains",e.uid));return ce(t,n=>{const l=[];n.forEach(r=>{l.push({id:r.id,...r.data()})}),l.sort((r,p)=>{var u,m;const v=r.date||((u=r.createdAt)==null?void 0:u.toDate())||new Date(0);return(p.date||((m=p.createdAt)==null?void 0:m.toDate())||new Date(0))-v}),i(l)},n=>{console.error("Listen to matches error:",n)})}function lt(i,e){return ce(k(y,"matches",i.toString()),s=>{s.exists()?e({id:s.id,...s.data()}):e(null)},s=>{console.error("Listen to match error:",s)})}async function ve(i,e){const t=S();if(!t)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",i);const s=ee(te(y,"users"),ie("email","==",i)),n=await we(s);if(n.empty)return console.error("❌ Bruker ikke funnet:",i),{success:!1,error:"Bruker ikke funnet"};const l=n.docs[0],r=l.id;return console.log("✅ Bruker funnet:",r,l.data()),console.log("📨 Sender invitasjon..."),await X(k(y,"users",r,"invitations",e.matchId.toString()),{matchId:e.matchId,matchName:e.matchName,invitedBy:t.email,invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function dt(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await B(k(y,"matches",i.toString()),{participants:ke(e.uid)}),await B(k(y,"users",e.uid,"invitations",i.toString()),{status:"accepted"}),{success:!0}}catch(t){return console.error("Accept invitation error:",t),{success:!1,error:t.message}}}async function ct(i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{return await B(k(y,"users",e.uid,"invitations",i.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function pt(i){const e=S();if(!e)return()=>{};const t=te(y,"users",e.uid,"invitations"),s=ee(t,ie("status","==","pending"));return ce(s,n=>{const l=[];n.forEach(r=>{l.push({id:r.id,...r.data()})}),i(l)})}let d,w=null,D="all",b=[],H=null,z=null;const vt={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let Pe="no";function a(i){return vt[Pe][i]||i}const gt={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},ut=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],mt={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},ht=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],ft=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function bt(i,e){const t=gt[i];return t&&(t[e]||t.minor)||15}function yt(i,e,t){return Math.max(0,Math.ceil(i/bt(e,t))-1)}function A(i){return i.charAt(0).toUpperCase()+i.slice(1)}function Se(i){if(!i)return"";try{const e=Pe==="no"?"nb-NO":"en-US";return new Date(i).toLocaleDateString(e,{day:"numeric",month:"short",year:"numeric"})}catch{return i}}function o(i){return document.getElementById(i)}function h(i){const e=o(i);return e?e.value:""}function U(i,e){const t=parseFloat(h(i));return isNaN(t)?e||0:t}function x(i,e){const t=parseInt(h(i));return isNaN(t)?e||0:t}function N(){const i=(d==null?void 0:d.firstName)||"",e=(d==null?void 0:d.lastName)||"";return(i.charAt(0)+e.charAt(0)).toUpperCase()||"U"}async function wt(i){var s;const e=await tt(),t=pe();e?d=e:d={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},b=await ot(),H&&H(),H=rt(n=>{b=n,R(),M()}),pt(n=>{_=n,ue()}),i.innerHTML=`
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
        <div class="stat-block"><div class="stat-value">${d.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${d.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
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
        <div class="prog-field"><input type="number" id="prog-draw" value="${d.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${a("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${d.powerFactor?A(d.powerFactor):"Minor"} · ${d.division||"Classic"}</div>
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
      <div class="profile-name" id="prof-name">${d.firstName||""} ${d.lastName||""}</div>
      <div class="profile-div" id="prof-div">${d.division||"—"} · ${d.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${d.powerFactor?A(d.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${d.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${a("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${d.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${d.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${d.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${d.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${d.powerFactor?A(d.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${d.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${d.club||"—"}</span>
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
      <div class="field-group">
        <div class="field-label">${a("invite_user")} (${a("stages_added_later").toLowerCase()})</div>
        <div id="edit-invite-emails-container">
          <div style="display:flex;gap:8px;margin-bottom:8px;">
            <input class="field-input edit-invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
            <button onclick="addEditInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
          </div>
        </div>
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
        <input class="field-input" type="text" id="edit-firstname" value="${d.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${d.lastName||""}">
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
        <input class="field-input" type="text" id="edit-club" value="${d.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${d.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${a("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${d.reloadTime||""}">
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
  `,kt(),Ee(),M(),R(),Le(),ne()}function kt(){window.switchTab=xt,window.setFilter=St,window.openModal=F,window.closeModal=E,window.closeModalOutside=Pt,window.createMatch=Et,window.searchMatchByIdHandler=Lt,window.openEditProfile=Vt,window.saveProfileData=Kt,window.selectPF=Gt,window.updatePFOptions=Ie,window.calcPrognose=ne,window.renderMatchList=R,window.selectMatch=It,window.addShooter=qt,window.addStageResult=Wt,window.handleLogout=Jt,window.openEditMatch=_t,window.saveEditMatch=Tt,window.openCreateStage=Ft,window.openEditStage=$t,window.changeStageNumber=Nt,window.changeStageField=Bt,window.saveStage=Dt,window.openInviteUser=jt,window.sendInvitation=Ot,window.openInvitationsModal=Ht,window.acceptInvitation=zt,window.declineInvitation=Ut,window.addInviteEmailField=At,window.addEditInviteEmailField=Rt,window.confirmDeleteMatch=Ct,window.deleteMatchConfirmed=Mt}function xt(i){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),o(i).classList.add("active");const e=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(i),t=document.querySelectorAll(".tab-item");t[e]&&t[e].classList.add("active"),i==="screen-home"&&M(),i==="screen-matches"&&R(),i==="screen-results"&&Z()}function F(i){o(i).classList.add("open")}function E(i){o(i).classList.remove("open")}function Pt(i,e){i.target.id===e&&E(e)}function St(i,e){D=i,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),e.classList.add("active"),R()}async function Et(){var t;const i={name:h("new-match-name")||"Ny match",type:h("new-match-type")||"Trening",date:h("new-match-date")||new Date().toISOString().split("T")[0],location:h("new-match-location")||"",plannedStages:x("new-match-stages",6),searchable:((t=o("new-match-searchable"))==null?void 0:t.checked)!==!1,stages:[],shooters:[],stageDefs:[]},e=await st(i);if(e.success){const s=document.querySelectorAll(".invite-email-input"),n=Array.from(s).map(p=>p.value.trim()).filter(p=>p.length>0);let l=0;for(const p of n)(await ve(p,{matchId:e.matchId,matchName:i.name})).success&&l++;E("modal-new-match"),o("new-match-name").value="",o("new-match-location").value="",o("new-match-stages").value="6",o("new-match-searchable")&&(o("new-match-searchable").checked=!0);const r=o("invite-emails-container");r&&(r.innerHTML=`
        <div style="display:flex;gap:8px;margin-bottom:8px;">
          <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
          <button onclick="addInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
        </div>
      `),l>0&&alert(`Match opprettet! Invitasjoner sendt til ${l} bruker(e).`)}else alert("Kunne ikke opprette match: "+e.error)}async function Lt(){const i=h("match-id-search").trim();if(!i){alert("Skriv inn et match-ID");return}const e=await nt(i);e.success?(alert(`Match funnet: ${e.match.name} (ID: ${e.match.id})`),o("match-id-search").value=""):alert(`Fant ingen match med ID ${i}${e.error?": "+e.error:""}`)}function It(i){w=i;const e=b.find(t=>t.id==i);if(e){const t=e.id?"Match ID "+e.id+" "+e.name:e.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(n=>{const l=o(n);l&&(l.textContent=t)})}z&&z(),i&&(z=lt(i,t=>{const s=b.findIndex(n=>n.id==i);s!==-1&&t&&(b[s]=t,M(),Z())})),M(),Z(),ne()}function _t(){const i=b.find(n=>n.id==w);if(!i){alert("Ingen match valgt");return}o("edit-match-name").value=i.name||"",o("edit-match-type").value=i.type||"Trening",o("edit-match-date").value=i.date||"",o("edit-match-location").value=i.location||"",o("edit-match-stages").value=i.plannedStages||0,o("edit-match-searchable")&&(o("edit-match-searchable").checked=i.searchable!==!1);const e=o("edit-invite-emails-container");e&&(e.innerHTML=`
      <div style="display:flex;gap:8px;margin-bottom:8px;">
        <input class="field-input edit-invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
        <button onclick="addEditInviteEmailField()" style="width:40px;height:40px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">+</button>
      </div>
    `);const t=pe(),s=o("delete-match-btn");s&&t&&i.ownerId===t.uid?s.style.display="block":s&&(s.style.display="none"),F("modal-edit-match")}async function Tt(){var s;const i=b.find(n=>n.id==w);if(!i){alert("Ingen match valgt");return}const e={name:h("edit-match-name")||i.name,type:h("edit-match-type")||i.type,date:h("edit-match-date")||i.date,location:h("edit-match-location")||i.location,plannedStages:x("edit-match-stages",i.plannedStages),searchable:((s=o("edit-match-searchable"))==null?void 0:s.checked)!==!1},t=await ae(i.id,e);if(t.success){const n=document.querySelectorAll(".edit-invite-email-input"),l=Array.from(n).map(v=>v.value.trim()).filter(v=>v.length>0);let r=0,p=0;for(const v of l){const f=await ve(v,{matchId:i.id,matchName:e.name});f.success?r++:(p++,console.error(`Failed to invite ${v}:`,f.error))}E("modal-edit-match"),r>0?alert(`Match oppdatert! Invitasjoner sendt til ${r} bruker(e).`):l.length>0&&p>0&&alert(`Match oppdatert, men ${p} invitasjon(er) feilet. Sjekk at e-postadressene er registrert.`)}else alert("Kunne ikke oppdatere match: "+t.error)}function Ct(){const i=b.find(t=>t.id==w);if(!i){alert("Ingen match valgt");return}const e=i.id?"Match ID "+i.id+" "+i.name:i.name;o("delete-match-name").textContent=e,F("modal-confirm-delete")}async function Mt(){const i=b.find(t=>t.id==w);if(!i){alert("Ingen match valgt");return}const e=await at(i.id);e.success?(E("modal-confirm-delete"),E("modal-edit-match"),w=null,M(),R(),alert("Match slettet")):alert("Kunne ikke slette match: "+e.error)}let Q=null;function Ft(){var e;const i=b.find(t=>t.id==w);if(!i){alert("Ingen match valgt");return}Q=null,o("stage-modal-title").textContent=a("create_stage"),o("stage-number").value=(((e=i.stages)==null?void 0:e.length)||0)+1,o("stage-name").value="",o("stage-paper-targets").value=0,o("stage-poppers").value=0,o("stage-plates").value=0,o("stage-no-shoots").value=0,o("stage-bonus-paper-targets").value=0,o("stage-bonus-included").checked=!1,F("modal-create-stage")}function $t(i){const e=b.find(s=>s.id==w);if(!e||!e.stages||!e.stages[i]){alert("Stage ikke funnet");return}Q=i;const t=e.stages[i];o("stage-modal-title").textContent=a("edit_stage"),o("stage-number").value=t.number||i+1,o("stage-name").value=t.name||"",o("stage-paper-targets").value=t.paperTargets||0,o("stage-poppers").value=t.poppers||0,o("stage-plates").value=t.plates||0,o("stage-no-shoots").value=t.noShoots||0,o("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,o("stage-bonus-included").checked=t.bonusIncluded||!1,F("modal-create-stage")}function Nt(i){const e=o("stage-number"),t=Math.max(1,parseInt(e.value)+i);e.value=t}function Bt(i,e){const t=o("stage-"+i),s=Math.max(0,parseInt(t.value)+e);t.value=s}async function Dt(){var n;const i=b.find(l=>l.id==w);if(!i){alert("Ingen match valgt");return}const e={number:x("stage-number",1),name:h("stage-name")||"",paperTargets:x("stage-paper-targets",0),poppers:x("stage-poppers",0),plates:x("stage-plates",0),noShoots:x("stage-no-shoots",0),bonusPaperTargets:x("stage-bonus-paper-targets",0),bonusIncluded:((n=o("stage-bonus-included"))==null?void 0:n.checked)||!1},t=i.stages||[];Q!==null?t[Q]=e:t.push(e);const s=await ae(i.id,{stages:t});s.success?E("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let _=[];function At(){const i=o("invite-emails-container");if(!i)return;const e=document.createElement("div");e.style.display="flex",e.style.gap="8px",e.style.marginBottom="8px",e.innerHTML=`
    <input class="field-input invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
    <button onclick="this.parentElement.remove()" style="width:40px;height:40px;background:#374151;color:white;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">−</button>
  `,i.appendChild(e)}function Rt(){const i=o("edit-invite-emails-container");if(!i)return;const e=document.createElement("div");e.style.display="flex",e.style.gap="8px",e.style.marginBottom="8px",e.innerHTML=`
    <input class="field-input edit-invite-email-input" type="email" placeholder="bruker@example.com" style="flex:1;">
    <button onclick="this.parentElement.remove()" style="width:40px;height:40px;background:#374151;color:white;border:none;border-radius:8px;font-size:20px;font-weight:bold;cursor:pointer;">−</button>
  `,i.appendChild(e)}function jt(){if(!w){alert("Ingen match valgt");return}o("invite-user-email").value="",F("modal-invite-user")}async function Ot(){const i=h("invite-user-email").trim();if(!i){alert("Skriv inn en e-postadresse");return}const e=b.find(s=>s.id==w);if(!e)return;const t=await ve(i,{matchId:e.id,matchName:e.name});t.success?(E("modal-invite-user"),alert(a("invitation_sent"))):alert("Kunne ikke sende invitasjon: "+t.error)}function Ht(){ge(),F("modal-invitations")}function ge(){const i=o("invitations-list");if(!i)return;if(!_||_.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">'+a("no_invitations")+"</div></div>";return}let e="";_.forEach((t,s)=>{e+='<div class="card" style="margin-bottom:10px;">',e+='<div style="margin-bottom:10px;"><strong>'+a("invited_to_match")+"</strong></div>",e+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",e+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+t.invitedBy+"</div>",e+='<div style="display:flex;gap:10px;">',e+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+a("accept")+"</button>",e+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+a("decline")+"</button>",e+="</div>",e+="</div>"}),i.innerHTML=e}async function zt(i){const e=_[i];if(!e)return;const t=await dt(e.matchId);t.success?(_.splice(i,1),ue(),ge()):alert("Kunne ikke akseptere invitasjon: "+t.error)}async function Ut(i){const e=_[i];if(!e)return;const t=await ct(e.matchId);t.success?(_.splice(i,1),ue(),ge()):alert("Kunne ikke avvise invitasjon: "+t.error)}function ue(){const i=o("invitation-badge");if(!i)return;const e=_.length;e>0?(i.textContent=e,i.style.display="flex"):i.style.display="none"}function M(){var n,l;const i=o("home-content");if(!i)return;const e=b.find(r=>r.id===w);if(!e){i.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+e.name+"</div>",t+='<div class="mhc-meta">'+Se(e.date)+" · "+e.type+"</div>",t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((n=e.stages)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((l=e.shooters)==null?void 0:l.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',t+="</div>";const s=pe();s&&e.ownerId===s.uid&&(t+='<div style="margin-top:10px;">',t+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',t+="</div>"),t+="</div>",e.stages&&e.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',e.stages.forEach((r,p)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+p+')">',t+='<div class="stage-num">S'+(r.number||p+1)+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(r.name||"Stage "+(r.number||p+1))+"</div>",t+='<div class="stage-meta">',r.paperTargets&&(t+="Paper: "+r.paperTargets+" "),r.poppers&&(t+="Poppers: "+r.poppers+" "),r.plates&&(t+="Plates: "+r.plates+" "),r.noShoots&&(t+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(t+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),t+="</div>",t+="</div>",t+="</div>"}),t+="</div>"),i.innerHTML=t}function R(){const i=o("match-list-container");if(!i)return;let e=b.filter(s=>{if(D==="all")return!0;if(D==="active")return s.id===w;if(D==="trening")return s.type==="Trening";if(D==="stevne")return s.type==="Stevne";const n=s.date?new Date(s.date).getFullYear().toString():"";return D===n});if(e.length===0){i.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let t="";e.forEach(s=>{var r;const n=s.id===w,l=s.id?"Match ID "+s.id+" "+s.name:s.name;t+='<div class="match-row">',t+='<div class="match-row-icon'+(n?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,t+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,t+='<div class="match-row-name">'+l+"</div>",t+='<div class="match-row-meta">'+Se(s.date)+" · "+(s.location||s.type)+"</div>",t+="</div>",t+='<div class="match-row-right">',t+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,t+='<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>",t+='<div class="match-stg-lbl">stages</div>',t+="</div>",t+="</div>"}),i.innerHTML=t}function Z(){var l;const i=o("results-content");if(!i)return;const e=b.find(r=>r.id===w);if(!e){i.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!e.shooters||e.shooters.length===0){i.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let t='<div class="card">';t+='<div class="card-header"><div class="card-title">Standings</div></div>',t+='<div class="standings-table-wrap"><table class="standings-table">',t+='<thead><tr class="standings-header-row">',t+='<th class="standings-th standings-th-rank">#</th>',t+='<th class="standings-th standings-th-shooter">Skytter</th>',t+='<th class="standings-th standings-th-pts">Pts</th>',t+='<th class="standings-th standings-th-pct">%</th>',t+="</tr></thead>",t+="<tbody>";const s=e.shooters.map(r=>{var v;const p=((v=r.stages)==null?void 0:v.reduce((f,u)=>f+(u.pts||0),0))||0;return{...r,totalPts:p}}).sort((r,p)=>p.totalPts-r.totalPts),n=((l=s[0])==null?void 0:l.totalPts)||0;s.forEach((r,p)=>{const v=n>0?(r.totalPts/n*100).toFixed(2):"0.00";t+='<tr class="standings-row">',t+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",t+='<td class="standings-td standings-td-shooter">',t+='<div class="standings-shooter-name">'+r.firstName+" "+r.lastName+"</div>",t+='<div class="standings-shooter-meta">'+r.division+" · "+A(r.pf||"minor")+"</div>",t+="</td>",t+='<td class="standings-td standings-td-pts">'+r.totalPts.toFixed(2)+"</td>",t+='<td class="standings-td standings-td-pct">'+v+"%</td>",t+="</tr>"}),t+="</tbody></table></div>",t+="</div>",i.innerHTML=t}function Ee(){const i=N();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const v=o(p);v&&(v.textContent=i)});const t=o("prof-name");t&&(t.textContent=(d.firstName||"")+" "+(d.lastName||""));const s=o("prof-div");s&&(s.textContent=(d.division||"—")+" · "+(d.club||"—"));const n=o("prof-badge-pf");n&&(n.textContent=d.powerFactor?A(d.powerFactor):"—");const l=o("prof-badge-region");l&&(l.textContent=d.region||"—");const r={"info-firstname":d.firstName||"—","info-lastname":d.lastName||"—","info-division":d.division||"—","info-category":d.category||"—","info-pf":d.powerFactor?A(d.powerFactor):"—","info-region":d.region||"—","info-club":d.club||"—"};Object.keys(r).forEach(p=>{const v=o(p);v&&(v.textContent=r[p])}),Le()}function Le(){const i=[];b.forEach(m=>{m.stages&&m.stages.forEach(L=>i.push(L))});let e=0,t=0,s=0;i.forEach(m=>{e+=m.a||0,t+=(m.a||0)+(m.c||0)+(m.d||0),s+=m.hf||0});const n=i.length?(s/i.length).toFixed(2):"—",l=t?Math.round(e/t*100)+"%":"—",r=o("stat-matches");r&&(r.textContent=b.length);const p=o("stat-stages");p&&(p.textContent=i.length);const v=o("stat-avg-hf");v&&(v.textContent=n);const f=o("stat-a-rate");f&&(f.textContent=l);const u=o("prog-a-rate");u&&(u.textContent=l)}function Vt(){o("edit-firstname").value=d.firstName||"",o("edit-lastname").value=d.lastName||"",o("edit-club").value=d.club||"",o("edit-draw").value=d.draw||"",o("edit-reload").value=d.reloadTime||"";let i="";ut.forEach(s=>{i+='<option value="'+s+'"'+(s===d.division?" selected":"")+">"+s+"</option>"}),o("edit-division").innerHTML=i;let e="";ht.forEach(s=>{e+='<option value="'+s+'"'+(s===d.category?" selected":"")+">"+s+"</option>"}),o("edit-category").innerHTML=e;let t="";ft.forEach(s=>{t+='<option value="'+s+'"'+(s===d.region?" selected":"")+">"+s+"</option>"}),o("edit-region").innerHTML=t,Ie(),F("modal-edit-profile")}function Ie(){const i=h("edit-division"),e=mt[i]||["minor","major"];let t="";e.forEach(s=>{const n=d.powerFactor===s;t+='<label class="pf-option'+(n?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",t+="</label>"}),o("pf-options").innerHTML=t,e.indexOf(d.powerFactor)<0&&(d.powerFactor=e[0])}function Gt(i,e){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),i.classList.add("active"),d.powerFactor=e}async function Kt(){d.firstName=h("edit-firstname").trim()||"",d.lastName=h("edit-lastname").trim()||"",d.division=h("edit-division")||"",d.category=h("edit-category")||"",d.region=h("edit-region")||"",d.club=h("edit-club").trim()||"",d.draw=U("edit-draw")||null,d.reloadTime=U("edit-reload")||null;const i=await et(d),e=o("save-profile-btn");i.success?(e.textContent="✓ Lagret!",e.style.background="var(--green)",setTimeout(()=>{e.textContent=a("save_profile"),e.style.background=""},1800)):(e.textContent="❌ Feil!",e.style.background="var(--red)",setTimeout(()=>{e.textContent=a("save_profile"),e.style.background=""},1800)),Ee(),ne(),M(),E("modal-edit-profile")}function ne(){const i=x("prog-shots",12),e=x("prog-targets",6),t=x("prog-steel",2),s=U("prog-move",3),n=U("prog-draw",d.draw||1.42),l=d.division||"Classic",r=d.powerFactor||"minor",p=yt(i,l,r);o("prog-reloads").value=p;const v=d.reloadTime||1.8,f=.18,u=n+i*f+p*v+s,m=e*10+t*10,L=u>0?m/u:0;o("prog-hf-out").textContent=L.toFixed(2);let P="";P+='<div class="prog-breakdown-detail">',P+="Trekk: "+n.toFixed(2)+"s · ",P+="Skudd: "+(i*f).toFixed(2)+"s · ",P+="Reload: "+(p*v).toFixed(2)+"s · ",P+="Beveg: "+s.toFixed(2)+"s",P+="</div>",o("prog-breakdown").innerHTML=P}async function qt(){const i=b.find(l=>l.id===w);if(!i)return;const e=h("new-shooter-firstname").trim(),t=h("new-shooter-lastname").trim(),s=h("new-shooter-division")||"Classic";if(!e||!t){alert("Fyll inn navn");return}const n={id:"s_"+Date.now(),isMe:!1,firstName:e,lastName:t,division:s,pf:"minor",club:"",stages:[]};i.shooters||(i.shooters=[]),i.shooters.push(n),await ae(i.id,i),E("modal-add-shooter"),Z()}async function Wt(){const i=b.find(r=>r.id===w);if(!i)return;const e=x("new-result-stage",1),t=U("new-result-time",0),s=x("new-result-points",0),n=t>0?s/t:0,l={num:e,name:"Stage "+e,hf:n,time:t,pts:s,pf:d.powerFactor||"minor"};i.stages||(i.stages=[]),i.stages.push(l),await ae(i.id,i),E("modal-add"),M()}async function Jt(){H&&H(),z&&z(),await We(),window.location.reload()}const _e=document.getElementById("app");function Yt(){Xe(_e,Te)}function Te(){wt(_e)}Ge(i=>{i?Te():Yt()});
