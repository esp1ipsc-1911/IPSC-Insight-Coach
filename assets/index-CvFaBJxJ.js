import{initializeApp as ht}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as ft,onAuthStateChanged as bt,signInWithEmailAndPassword as yt,createUserWithEmailAndPassword as wt,signOut as kt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as xt,getDoc as xe,doc as U,setDoc as _e,query as Ce,collection as Se,where as Ne,getDocs as je,onSnapshot as Ue,serverTimestamp as Te,updateDoc as de,arrayUnion as tt,deleteDoc as St}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Lt,httpsCallable as Pt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const Et={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},it=ht(Et),$e=ft(it),R=xt(it),Tt=Lt();let Be=null,oe=null;function It(e){bt($e,async i=>{if(i){Be=i;try{const t=await xe(U(R,"users",i.uid));t.exists()?oe={uid:i.uid,...t.data()}:oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}}else Be=null,oe=null,e(null)})}async function Mt(e,i){try{const t=(e||"").trim();return{success:!0,user:(await yt($e,t,i||"")).user}}catch(t){console.error("Innlogging feilet:",t);let s="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Feil e-post eller passord":t.code==="auth/invalid-email"?s="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function _t(e,i,t,s,a,n,r,v,m,y){try{const b=(e||"").trim(),u=i||"",h=(t||"").trim(),T=(s||"").trim(),I=(a||"").trim(),C=(n||"").trim(),O=(r||"").trim(),L=(v||"minor").trim(),M=(m||"").trim(),W=(y||"").trim(),F=(await wt($e,b,u)).user,Q=Pt(Tt,"validateInviteCode");try{await Q({code:h,userId:F.uid,userEmail:b})}catch(z){await F.delete();let x="Ugyldig invitasjonskode";return z.code==="functions/not-found"?x="Ugyldig invitasjonskode":z.code==="functions/permission-denied"?x="Denne koden er deaktivert":z.code==="functions/resource-exhausted"?x="Denne koden har nådd maksimalt antall bruk":z.code==="functions/already-exists"?x="Du har allerede brukt denne koden":z.message&&(x=z.message),{success:!1,error:x}}return await _e(U(R,"users",F.uid),{email:b,firstName:T,lastName:I,division:C,category:O,powerFactor:L,region:M,club:W,role:"user",inviteCode:h,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:F}}catch(b){console.error("Registrering feilet:",b);let u="Registrering feilet";return b.code==="auth/email-already-in-use"?u="E-postadressen er allerede i bruk":b.code==="auth/weak-password"?u="Passordet må være minst 6 tegn":b.code==="auth/invalid-email"?u="Ugyldig e-postadresse":b.message&&(u=b.message),{success:!1,error:u}}}async function Ct(){try{return await kt($e),{success:!0}}catch(e){return console.error("Utlogging feilet:",e),{success:!1,error:"Kunne ikke logge ut"}}}function K(){return Be}function He(){return oe}const Nt=`
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
`;function $t(e,i){const t=document.getElementById("gdpr-modal");t&&t.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Nt}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),n=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),v=s.querySelector(".gdpr-modal-overlay"),m=()=>{s.remove()};a.addEventListener("click",()=>{m(),i&&i()}),v.addEventListener("click",()=>{m(),i&&i()}),r.addEventListener("click",()=>{m(),i&&i()}),n.addEventListener("click",()=>{m(),e&&e()}),document.body.style.overflow="hidden";const y=m,b=()=>{document.body.style.overflow="",y()};a.onclick=()=>{b(),i&&i()},v.onclick=()=>{b(),i&&i()},r.onclick=()=>{b(),i&&i()},n.onclick=()=>{b(),e&&e()}}function Ft(){const e=document.createElement("div");return e.className="gdpr-checkbox-container",e.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const i=e.querySelector("#gdpr-open-modal");i&&i.addEventListener("click",t=>{t.preventDefault(),$t(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),e}function Rt(){const e=document.getElementById("gdpr-consent-checkbox");return!e||!e.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function At(e,i){e.innerHTML=`
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
  `;const t={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),v=document.getElementById("registerSection"),m=document.getElementById("showRegisterBtn"),y=document.getElementById("cancelRegisterBtn"),b=document.getElementById("loginBtn"),u=document.getElementById("registerBtn"),h=document.getElementById("langNo"),T=document.getElementById("langEn"),I=document.getElementById("registerPassword"),C=document.getElementById("passwordStrengthBar"),O=document.getElementById("passwordStrengthText"),L=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");L.onclick=()=>{a="minor",L.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),L.classList.remove("selected")};function W(x){let f=0;return x?(x.length>=8&&(f+=1),x.length>=12&&(f+=1),/[a-z]/.test(x)&&/[A-Z]/.test(x)&&(f+=1),/\d/.test(x)&&(f+=1),/[^A-Za-z0-9]/.test(x)&&(f+=1),f<=1?{score:f,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:f===2?{score:f,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:f===3?{score:f,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:f===4?{score:f,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:f,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function B(){const x=t[s],f=I.value,D=W(f);C.style.width=D.width,C.style.background=D.color,O.innerText=x[D.labelKey]}function F(x){s=x;const f=t[x];document.getElementById("brandSubtitle").innerText=f.subtitle,document.getElementById("loginEmailLabel").innerText=f.loginEmailLabel,document.getElementById("loginEmail").placeholder=f.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=f.loginPasswordLabel,document.getElementById("loginPassword").placeholder=f.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=f.login,document.getElementById("separatorText").innerText=f.or,document.getElementById("showRegisterBtn").innerText=f.showRegister,document.getElementById("registerFirstNameLabel").innerText=f.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=f.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=f.registerLastNameLabel,document.getElementById("registerLastName").placeholder=f.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=f.registerEmailLabel,document.getElementById("registerEmail").placeholder=f.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=f.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=f.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=f.registerPasswordLabel,document.getElementById("registerPassword").placeholder=f.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=f.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=f.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=f.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=f.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=f.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=f.registerRegionLabel,document.getElementById("registerClubLabel").innerText=f.registerClubLabel,document.getElementById("registerCodeLabel").innerText=f.registerCodeLabel,document.getElementById("registerCode").placeholder=f.registerCodePlaceholder,document.getElementById("registerBtn").innerText=f.register,document.getElementById("cancelRegisterBtn").innerText=f.cancel,h.classList.toggle("active",x==="no"),T.classList.toggle("active",x==="en"),B()}function Q(){r.classList.remove("active"),v.classList.add("active"),n.innerText="";const x=document.getElementById("gdprCheckboxContainer");if(x&&!x.hasChildNodes()){const f=Ft();x.appendChild(f)}}function z(){v.classList.remove("active"),r.classList.add("active"),n.innerText=""}h.onclick=()=>F("no"),T.onclick=()=>F("en"),m.onclick=Q,y.onclick=z,I.oninput=B,b.onclick=async()=>{n.innerText="";const x=document.getElementById("loginEmail").value.trim(),f=document.getElementById("loginPassword").value,D=await Mt(x,f);D.success?i():n.innerText=D.error},u.onclick=async()=>{n.innerText="";const x=t[s],f=document.getElementById("registerFirstName").value.trim(),D=document.getElementById("registerLastName").value.trim(),J=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,S=document.getElementById("registerRegion").value,P=document.getElementById("registerClub").value.trim(),d=document.getElementById("registerCode").value.trim();if(!f||!D){n.innerText=x.missingName;return}if(!J||!ce||!X||!pe||!d){n.innerText=x.missingFields;return}if(!se){n.innerText=x.missingDivision;return}if(J!==ce){n.innerText=x.emailMismatch;return}if(X!==pe){n.innerText=x.passwordMismatch;return}if(W(X).score<=1){n.innerText=x.weakPassword;return}if(!Rt().valid){n.innerText=x.gdprRequired;return}const p=await _t(J,X,d,f,D,se,ae,a,S,P);p.success?i():n.innerText=p.error},F("no"),B()}async function Ot(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(R,"users",i.uid),{...e,updatedAt:Te()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function Bt(){const e=K();if(!e)return null;try{const i=await xe(U(R,"users",e.uid));return i.exists()?{uid:e.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function Dt(){const e=U(R,"counters","matchId");try{const i=await xe(e);if(!i.exists())return await _e(e,{value:1}),1;const s=i.data().value+1;return await de(e,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function jt(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await Dt(),s={id:t,...e,searchable:e.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:Te(),updatedAt:Te()};return await _e(U(R,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function Le(e,i){if(!K())return{success:!1,error:"Not authenticated"};try{return await de(U(R,"matches",e.toString()),{...i,updatedAt:Te()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Ut(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await xe(U(R,"matches",e.toString()));return t.exists()?t.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await St(U(R,"matches",e.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(t){return console.error("Delete match error:",t),{success:!1,error:t.message}}}async function Ht(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await xe(U(R,"matches",e.toString()));if(!t.exists())return{success:!1,error:"Match not found"};const s={id:t.id,...t.data()};return s.searchable?(s.participants.includes(i.uid)||await de(U(R,"matches",e.toString()),{participants:tt(i.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(t){return console.error("Search match error:",t),{success:!1,error:t.message}}}async function zt(){const e=K();if(!e)return[];try{const i=Ce(Se(R,"matches"),Ne("participants","array-contains",e.uid)),t=await je(i),s=[];return t.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,n)=>{var m,y;const r=a.date||((m=a.createdAt)==null?void 0:m.toDate())||new Date(0);return(n.date||((y=n.createdAt)==null?void 0:y.toDate())||new Date(0))-r}),s}catch(i){return console.error("Get user matches error:",i),[]}}function Gt(e){const i=K();if(!i)return()=>{};const t=Ce(Se(R,"matches"),Ne("participants","array-contains",i.uid));return Ue(t,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),n.sort((r,v)=>{var b,u;const m=r.date||((b=r.createdAt)==null?void 0:b.toDate())||new Date(0);return(v.date||((u=v.createdAt)==null?void 0:u.toDate())||new Date(0))-m}),e(n)},a=>{console.error("Listen to matches error:",a)})}function Vt(e,i){return Ue(U(R,"matches",e.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Listen to match error:",s)})}async function ze(e,i){const t=K();if(!t)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",e);const s=Ce(Se(R,"users"),Ne("email","==",e)),a=await je(s);if(a.empty)return console.error("❌ Bruker ikke funnet:",e),{success:!1,error:"Bruker ikke funnet"};const n=a.docs[0],r=n.id;return console.log("✅ Bruker funnet:",r,n.data()),console.log("📨 Sender invitasjon..."),await _e(U(R,"users",r,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:t.email,invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function Ge(e){const i=K();if(!i)return[];try{const t=e.toLowerCase().trim();if(t.length===0)return[];console.log("🔍 Søker etter brukere:",t);const s=await je(Se(R,"users")),a=[];return s.forEach(n=>{const r=n.data(),v=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),m=(r.email||"").toLowerCase();n.id!==i.uid&&(v.includes(t)||m.includes(t))&&a.push({uid:n.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(`✅ Fant ${a.length} brukere`),a}catch(t){return console.error("❌ Search users error:",t),[]}}async function Kt(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(R,"matches",e.toString()),{participants:tt(i.uid)}),await de(U(R,"users",i.uid,"invitations",e.toString()),{status:"accepted"}),{success:!0}}catch(t){return console.error("Accept invitation error:",t),{success:!1,error:t.message}}}async function qt(e){const i=K();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(R,"users",i.uid,"invitations",e.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function Wt(e){const i=K();if(!i)return()=>{};const t=Se(R,"users",i.uid,"invitations"),s=Ce(t,Ne("status","==","pending"));return Ue(s,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),e(n)})}function Jt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yt={exports:{}};(function(e){var i=function(t){var s=Object.prototype,a=s.hasOwnProperty,n=Object.defineProperty||function(d,o,p){d[o]=p.value},r,v=typeof Symbol=="function"?Symbol:{},m=v.iterator||"@@iterator",y=v.asyncIterator||"@@asyncIterator",b=v.toStringTag||"@@toStringTag";function u(d,o,p){return Object.defineProperty(d,o,{value:p,enumerable:!0,configurable:!0,writable:!0}),d[o]}try{u({},"")}catch{u=function(o,p,k){return o[p]=k}}function h(d,o,p,k){var w=o&&o.prototype instanceof W?o:W,E=Object.create(w.prototype),j=new ae(k||[]);return n(E,"_invoke",{value:ce(d,p,j)}),E}t.wrap=h;function T(d,o,p){try{return{type:"normal",arg:d.call(o,p)}}catch(k){return{type:"throw",arg:k}}}var I="suspendedStart",C="suspendedYield",O="executing",L="completed",M={};function W(){}function B(){}function F(){}var Q={};u(Q,m,function(){return this});var z=Object.getPrototypeOf,x=z&&z(z(S([])));x&&x!==s&&a.call(x,m)&&(Q=x);var f=F.prototype=W.prototype=Object.create(Q);B.prototype=F,n(f,"constructor",{value:F,configurable:!0}),n(F,"constructor",{value:B,configurable:!0}),B.displayName=u(F,b,"GeneratorFunction");function D(d){["next","throw","return"].forEach(function(o){u(d,o,function(p){return this._invoke(o,p)})})}t.isGeneratorFunction=function(d){var o=typeof d=="function"&&d.constructor;return o?o===B||(o.displayName||o.name)==="GeneratorFunction":!1},t.mark=function(d){return Object.setPrototypeOf?Object.setPrototypeOf(d,F):(d.__proto__=F,u(d,b,"GeneratorFunction")),d.prototype=Object.create(f),d},t.awrap=function(d){return{__await:d}};function J(d,o){function p(E,j,G,q){var V=T(d[E],d,j);if(V.type==="throw")q(V.arg);else{var Ae=V.arg,ye=Ae.value;return ye&&typeof ye=="object"&&a.call(ye,"__await")?o.resolve(ye.__await).then(function(ne){p("next",ne,G,q)},function(ne){p("throw",ne,G,q)}):o.resolve(ye).then(function(ne){Ae.value=ne,G(Ae)},function(ne){return p("throw",ne,G,q)})}}var k;function w(E,j){function G(){return new o(function(q,V){p(E,j,q,V)})}return k=k?k.then(G,G):G()}n(this,"_invoke",{value:w})}D(J.prototype),u(J.prototype,y,function(){return this}),t.AsyncIterator=J,t.async=function(d,o,p,k,w){w===void 0&&(w=Promise);var E=new J(h(d,o,p,k),w);return t.isGeneratorFunction(o)?E:E.next().then(function(j){return j.done?j.value:E.next()})};function ce(d,o,p){var k=I;return function(E,j){if(k===O)throw new Error("Generator is already running");if(k===L){if(E==="throw")throw j;return P()}for(p.method=E,p.arg=j;;){var G=p.delegate;if(G){var q=X(G,p);if(q){if(q===M)continue;return q}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(k===I)throw k=L,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);k=O;var V=T(d,o,p);if(V.type==="normal"){if(k=p.done?L:C,V.arg===M)continue;return{value:V.arg,done:p.done}}else V.type==="throw"&&(k=L,p.method="throw",p.arg=V.arg)}}}function X(d,o){var p=o.method,k=d.iterator[p];if(k===r)return o.delegate=null,p==="throw"&&d.iterator.return&&(o.method="return",o.arg=r,X(d,o),o.method==="throw")||p!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+p+"' method")),M;var w=T(k,d.iterator,o.arg);if(w.type==="throw")return o.method="throw",o.arg=w.arg,o.delegate=null,M;var E=w.arg;if(!E)return o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,M;if(E.done)o[d.resultName]=E.value,o.next=d.nextLoc,o.method!=="return"&&(o.method="next",o.arg=r);else return E;return o.delegate=null,M}D(f),u(f,b,"Generator"),u(f,m,function(){return this}),u(f,"toString",function(){return"[object Generator]"});function pe(d){var o={tryLoc:d[0]};1 in d&&(o.catchLoc=d[1]),2 in d&&(o.finallyLoc=d[2],o.afterLoc=d[3]),this.tryEntries.push(o)}function se(d){var o=d.completion||{};o.type="normal",delete o.arg,d.completion=o}function ae(d){this.tryEntries=[{tryLoc:"root"}],d.forEach(pe,this),this.reset(!0)}t.keys=function(d){var o=Object(d),p=[];for(var k in o)p.push(k);return p.reverse(),function w(){for(;p.length;){var E=p.pop();if(E in o)return w.value=E,w.done=!1,w}return w.done=!0,w}};function S(d){if(d){var o=d[m];if(o)return o.call(d);if(typeof d.next=="function")return d;if(!isNaN(d.length)){var p=-1,k=function w(){for(;++p<d.length;)if(a.call(d,p))return w.value=d[p],w.done=!1,w;return w.value=r,w.done=!0,w};return k.next=k}}return{next:P}}t.values=S;function P(){return{value:r,done:!0}}return ae.prototype={constructor:ae,reset:function(d){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(se),!d)for(var o in this)o.charAt(0)==="t"&&a.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=r)},stop:function(){this.done=!0;var d=this.tryEntries[0],o=d.completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(d){if(this.done)throw d;var o=this;function p(q,V){return E.type="throw",E.arg=d,o.next=q,V&&(o.method="next",o.arg=r),!!V}for(var k=this.tryEntries.length-1;k>=0;--k){var w=this.tryEntries[k],E=w.completion;if(w.tryLoc==="root")return p("end");if(w.tryLoc<=this.prev){var j=a.call(w,"catchLoc"),G=a.call(w,"finallyLoc");if(j&&G){if(this.prev<w.catchLoc)return p(w.catchLoc,!0);if(this.prev<w.finallyLoc)return p(w.finallyLoc)}else if(j){if(this.prev<w.catchLoc)return p(w.catchLoc,!0)}else if(G){if(this.prev<w.finallyLoc)return p(w.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(d,o){for(var p=this.tryEntries.length-1;p>=0;--p){var k=this.tryEntries[p];if(k.tryLoc<=this.prev&&a.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var w=k;break}}w&&(d==="break"||d==="continue")&&w.tryLoc<=o&&o<=w.finallyLoc&&(w=null);var E=w?w.completion:{};return E.type=d,E.arg=o,w?(this.method="next",this.next=w.finallyLoc,M):this.complete(E)},complete:function(d,o){if(d.type==="throw")throw d.arg;return d.type==="break"||d.type==="continue"?this.next=d.arg:d.type==="return"?(this.rval=this.arg=d.arg,this.method="return",this.next="end"):d.type==="normal"&&o&&(this.next=o),M},finish:function(d){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.finallyLoc===d)return this.complete(p.completion,p.afterLoc),se(p),M}},catch:function(d){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.tryLoc===d){var k=p.completion;if(k.type==="throw"){var w=k.arg;se(p)}return w}}throw new Error("illegal catch attempt")},delegateYield:function(d,o,p){return this.delegate={iterator:S(d),resultName:o,nextLoc:p},this.method==="next"&&(this.arg=r),M}},t}(e.exports);try{regeneratorRuntime=i}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})(Yt);var Ve=(e,i)=>`${e}-${i}-${Math.random().toString(16).slice(3,8)}`;const Zt=Ve;let Je=0;var st=({id:e,action:i,payload:t={}})=>{let s=e;return typeof s>"u"&&(s=Zt("Job",Je),Je+=1),{id:s,action:i,payload:t}},be={};let Ke=!1;be.logging=Ke;be.setLogging=e=>{Ke=e};be.log=(...e)=>Ke?console.log.apply(void 0,e):null;const Qt=st,{log:Pe}=be,Xt=Ve;let Ye=0;var ei=()=>{const e=Xt("Scheduler",Ye),i={},t={};let s=[];Ye+=1;const a=()=>s.length,n=()=>Object.keys(i).length,r=()=>{if(s.length!==0){const u=Object.keys(i);for(let h=0;h<u.length;h+=1)if(typeof t[u[h]]>"u"){s[0](i[u[h]]);break}}},v=(u,h)=>new Promise((T,I)=>{const C=Qt({action:u,payload:h});s.push(async O=>{s.shift(),t[O.id]=C;try{T(await O[u].apply(void 0,[...h,C.id]))}catch(L){I(L)}finally{delete t[O.id],r()}}),Pe(`[${e}]: Add ${C.id} to JobQueue`),Pe(`[${e}]: JobQueue length=${s.length}`),r()});return{addWorker:u=>(i[u.id]=u,Pe(`[${e}]: Add ${u.id}`),Pe(`[${e}]: Number of workers=${n()}`),r(),u.id),addJob:async(u,...h)=>{if(n()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return v(u,h)},terminate:async()=>{Object.keys(i).forEach(async u=>{await i[u].terminate()}),s=[]},getQueueLen:a,getNumWorkers:n}};function ti(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ii=e=>{const i={};return typeof WorkerGlobalScope<"u"?i.type="webworker":typeof document=="object"?i.type="browser":typeof process=="object"&&typeof ti=="function"&&(i.type="node"),typeof e>"u"?i:i[e]};const si=ii("type")==="browser",ai=si?e=>new URL(e,window.location.href).href:e=>e;var ni=e=>{const i={...e};return["corePath","workerPath","langPath"].forEach(t=>{e[t]&&(i[t]=ai(i[t]))}),i},at={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const ri="7.0.0",oi={version:ri};var li={workerBlobURL:!0,logger:()=>{}};const di=oi.version,ci=li;var pi={...ci,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${di}/dist/worker.min.js`},ui=({workerPath:e,workerBlobURL:i})=>{let t;if(Blob&&URL&&i){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});t=new Worker(URL.createObjectURL(s))}else t=new Worker(e);return t},gi=e=>{e.terminate()},vi=(e,i)=>{e.onmessage=({data:t})=>{i(t)}},mi=async(e,i)=>{e.postMessage(i)};const Oe=e=>new Promise((i,t)=>{const s=new FileReader;s.onload=()=>{i(s.result)},s.onerror=({target:{error:{code:a}}})=>{t(Error(`File could not be read! Code=${a}`))},s.readAsArrayBuffer(e)}),De=async e=>{let i=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?i=atob(e.split(",")[1]).split("").map(t=>t.charCodeAt(0)):i=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(i=await De(e.src)),e.tagName==="VIDEO"&&(i=await De(e.poster)),e.tagName==="CANVAS"&&await new Promise(t=>{e.toBlob(async s=>{i=await Oe(s),t()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const t=await e.convertToBlob();i=await Oe(t)}else(e instanceof File||e instanceof Blob)&&(i=await Oe(e));return new Uint8Array(i)};var hi=De;const fi=pi,bi=ui,yi=gi,wi=vi,ki=mi,xi=hi;var Si={defaultOptions:fi,spawnWorker:bi,terminateWorker:yi,onMessage:wi,send:ki,loadImage:xi};const Li=ni,Y=st,{log:Ze}=be,Pi=Ve,re=at,{defaultOptions:Ei,spawnWorker:Ti,terminateWorker:Ii,onMessage:Mi,loadImage:Qe,send:_i}=Si;let Xe=0;var nt=async(e="eng",i=re.LSTM_ONLY,t={},s={})=>{const a=Pi("Worker",Xe),{logger:n,errorHandler:r,...v}=Li({...Ei,...t}),m={},y=typeof e=="string"?e.split("+"):e;let b=i,u=s;const h=[re.DEFAULT,re.LSTM_ONLY].includes(i)&&!v.legacyCore;let T,I;const C=new Promise((S,P)=>{I=S,T=P}),O=S=>{T(S.message)};let L=Ti(v);L.onerror=O,Xe+=1;const M=({id:S,action:P,payload:d})=>new Promise((o,p)=>{Ze(`[${a}]: Start ${S}, action=${P}`);const k=`${P}-${S}`;m[k]={resolve:o,reject:p},_i(L,{workerId:a,jobId:S,action:P,payload:d})}),W=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),B=S=>M(Y({id:S,action:"load",payload:{options:{lstmOnly:h,corePath:v.corePath,logging:v.logging}}})),F=(S,P,d)=>M(Y({id:d,action:"FS",payload:{method:"writeFile",args:[S,P]}})),Q=(S,P)=>M(Y({id:P,action:"FS",payload:{method:"readFile",args:[S,{encoding:"utf8"}]}})),z=(S,P)=>M(Y({id:P,action:"FS",payload:{method:"unlink",args:[S]}})),x=(S,P,d)=>M(Y({id:d,action:"FS",payload:{method:S,args:P}})),f=(S,P)=>M(Y({id:P,action:"loadLanguage",payload:{langs:S,options:{langPath:v.langPath,dataPath:v.dataPath,cachePath:v.cachePath,cacheMethod:v.cacheMethod,gzip:v.gzip,lstmOnly:[re.DEFAULT,re.LSTM_ONLY].includes(b)&&!v.legacyLang}}})),D=(S,P,d,o)=>M(Y({id:o,action:"initialize",payload:{langs:S,oem:P,config:d}})),J=(S="eng",P,d,o)=>{if(h&&[re.TESSERACT_ONLY,re.TESSERACT_LSTM_COMBINED].includes(P))throw Error("Legacy model requested but code missing.");const p=P||b;b=p;const k=d||u;u=k;const E=(typeof S=="string"?S.split("+"):S).filter(j=>!y.includes(j));return y.push(...E),E.length>0?f(E,o).then(()=>D(S,p,k,o)):D(S,p,k,o)},ce=(S={},P)=>M(Y({id:P,action:"setParameters",payload:{params:S}})),X=async(S,P={},d={text:!0},o)=>M(Y({id:o,action:"recognize",payload:{image:await Qe(S),options:P,output:d}})),pe=async(S,P)=>{if(h)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return M(Y({id:P,action:"detect",payload:{image:await Qe(S)}}))},se=async()=>(L!==null&&(Ii(L),L=null),Promise.resolve());Mi(L,({workerId:S,jobId:P,status:d,action:o,data:p})=>{const k=`${o}-${P}`;if(d==="resolve")Ze(`[${S}]: Complete ${P}`),m[k].resolve({jobId:P,data:p}),delete m[k];else if(d==="reject")if(m[k].reject(p),delete m[k],o==="load"&&T(p),r)r(p);else throw Error(p);else d==="progress"&&n({...p,userJobId:P})});const ae={id:a,worker:L,load:W,writeText:F,readText:Q,removeFile:z,FS:x,reinitialize:J,setParameters:ce,recognize:X,detect:pe,terminate:se};return B().then(()=>f(e)).then(()=>D(e,i,s)).then(()=>I(ae)).catch(()=>{}),C};const rt=nt,Ci=async(e,i,t)=>{const s=await rt(i,1,t);return s.recognize(e).finally(async()=>{await s.terminate()})},Ni=async(e,i)=>{const t=await rt("osd",0,i);return t.detect(e).finally(async()=>{await t.terminate()})};var $i={recognize:Ci,detect:Ni},Fi={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ri={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Ai=ei,Oi=nt,Bi=$i,Di=Fi,ji=at,Ui=Ri,{setLogging:Hi}=be;var zi={languages:Di,OEM:ji,PSM:Ui,createScheduler:Ai,createWorker:Oi,setLogging:Hi,...Bi};const Gi=Jt(zi);let g,A=null,ue="all",_=[],we=null,ke=null;const Vi={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let ot="no";function l(e){return Vi[ot][e]||e}const et={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},Ki={Standard:{minor:21,major:21},Open:{minor:29,major:29},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:21,major:21}},qi=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],Wi={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Ji=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Yi=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function Zi(e,i){const t=Ki[e];return t&&(t[i]||t.minor)||15}function lt(e,i,t){return Math.max(0,Math.ceil(e/Zi(i,t))-1)}function Qi(){const e=_.find(I=>I.id==A);if(!e||!e.stages||e.stages.length===0)return null;const i=e.stages.filter(I=>I.time&&I.pts);if(i.length===0)return null;const t=g.division||"Classic",s=g.powerFactor||"minor",a=g.draw||1.42,n=g.reloadTime||1.8;let r=0,v=0,m=0,y=0,b=0,u=0;for(const I of i){const C=(I.paperTargets||0)*2+(I.poppers||0)+(I.plates||0);if(C===0)continue;const O=lt(C,t,s),L=I.time-a-O*n;L>0&&(r+=C,v+=L,m+=I.a||0,y+=I.c||0,b+=I.d||0,u+=I.miss||0)}if(r===0)return null;const h=v/r,T=m+y+b+u;return{avgSplit:h,completedStages:i.length,totalStages:e.stages.length,aPercent:T>0?m/T:0,cPercent:T>0?y/T:0,dPercent:T>0?b/T:0,missPercent:T>0?u/T:0}}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dt(e){if(!e)return"";try{const i=ot==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function c(e){return document.getElementById(e)}function N(e){const i=c(e);return i?i.value:""}function he(e,i){const t=parseFloat(N(e));return isNaN(t)?i||0:t}function $(e,i){const t=parseInt(N(e));return isNaN(t)?i||0:t}function le(){const e=(g==null?void 0:g.firstName)||"",i=(g==null?void 0:g.lastName)||"";return(e.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function Xi(e){var s;const i=await Bt(),t=He();if(i?g=i:g={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},_=await zt(),_&&_.length>0){const a=new Date,n=_.filter(r=>r.status!=="finished"&&r.date);if(n.length>0){let r=n[0],v=Math.abs(new Date(n[0].date)-a);for(const m of n){const y=new Date(m.date),b=Math.abs(y-a);b<v&&(v=b,r=m)}A=r.id}}we&&we(),we=Gt(a=>{_=a,fe(),te()}),Wt(a=>{ee=a,We()}),e.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${l("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${l("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${l("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${l("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${l("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${l("profile")}</span></div>
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
      <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${le()}</div>
    </div>
  </div>
  <div class="scroll-content">
    <div class="search-wrap"><span class="search-icon">🔢</span><input class="search-input" id="match-id-search" placeholder="${l("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Søk</button></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${l("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${l("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${l("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${l("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${l("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${l("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="prog-split-display">0.18s</div><div class="stat-label">Split</div></div>
        <div class="stat-block"><div class="stat-value">${g.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${g.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
    </div>
    <div class="section-title">Stage-parametre</div>
    <div class="card">
      <div class="section-label">Stageinnhold</div>
      <div class="prognose-inputs">
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${l("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${l("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${l("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${l("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${g.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${l("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${g.powerFactor?ge(g.powerFactor):"Minor"} · ${g.division||"Classic"}</div>
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
  <button class="fab" onclick="openModal('modal-upload-result')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${l("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${l("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${l("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${l("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${l("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${l("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${l("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${l("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${l("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${l("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${l("profile")}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${le()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${le()}</div>
      <div class="profile-name" id="prof-name">${g.firstName||""} ${g.lastName||""}</div>
      <div class="profile-div" id="prof-div">${g.division||"—"} · ${g.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${g.powerFactor?ge(g.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${g.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${l("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${g.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${g.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${g.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${g.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${g.powerFactor?ge(g.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${g.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${g.club||"—"}</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Sesongstatistikk</div></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${l("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${l("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${l("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${l("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${l("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${l("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${l("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${l("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${l("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${l("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${l("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${l("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Trening">${l("match_types_trening")}</option>
          <option value="Level 1">${l("match_types_level1")}</option>
          <option value="Level 2">${l("match_types_level2")}</option>
          <option value="Level 3">${l("match_types_level3")}</option>
          <option value="Level 4">${l("match_types_level4")}</option>
          <option value="Level 5">${l("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${l("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${l("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${l("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromNewMatch()" style="width:100%;">Ny stage</button>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="new-match-searchable" checked style="width:18px;height:18px;">
          <span>${l("allow_search")}</span>
        </label>
      </div>
      <div class="field-group">
        <div class="field-label">Inviter brukere (valgfritt)</div>
        <div style="display:flex;gap:8px;margin-bottom:10px;">
          <input class="field-input" type="text" id="new-match-user-search" placeholder="Søk etter navn eller e-post..." style="flex:1;">
          <button onclick="searchUsersNewMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Søk</button>
        </div>
        <div id="new-match-search-results"></div>
      </div>
      <button class="btn-primary" onclick="createMatch()">${l("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("edit_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${l("match_name")}</div>
        <input class="field-input" type="text" id="edit-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${l("type")}</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">${l("match_types_trening")}</option>
          <option value="Level 1">${l("match_types_level1")}</option>
          <option value="Level 2">${l("match_types_level2")}</option>
          <option value="Level 3">${l("match_types_level3")}</option>
          <option value="Level 4">${l("match_types_level4")}</option>
          <option value="Level 5">${l("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${l("date")}</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">${l("location")}</div>
        <input class="field-input" type="text" id="edit-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${l("planned_stages")}</div>
        <input class="field-input" type="number" id="edit-match-stages">
      </div>
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromEdit()" style="width:100%;">Ny stage</button>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
          <span>${l("allow_search")}</span>
        </label>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-finished" style="width:18px;height:18px;">
          <span>Marker som ferdig</span>
        </label>
      </div>
      <div class="field-group">
        <div class="field-label">Inviter brukere (valgfritt)</div>
        <div style="display:flex;gap:8px;margin-bottom:10px;">
          <input class="field-input" type="text" id="edit-match-user-search" placeholder="Søk etter navn eller e-post..." style="flex:1;">
          <button onclick="searchUsersEditMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Søk</button>
        </div>
        <div id="edit-match-search-results"></div>
      </div>
      <button class="btn-primary" onclick="saveEditMatch()">${l("save")}</button>
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;margin-top:10px;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;display:none;">Slett match</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${l("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${g.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${l("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${g.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${l("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${l("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${l("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${l("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${g.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${l("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${g.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${l("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${g.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${l("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${l("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${l("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${l("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${l("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-upload-result" onclick="closeModalOutside(event,'modal-upload-result')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">Last opp resultat</div>
      <div class="modal-close" onclick="closeModal('modal-upload-result')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">Velg stage</div>
        <select class="field-select" id="upload-stage-select"></select>
        <button class="btn-secondary" style="margin-top:10px;" onclick="openCreateStageFromUpload()">Opprett ny stage</button>
      </div>
      <div class="field-group">
        <div class="field-label">Velg skytter</div>
        <select class="field-select" id="upload-shooter-select"></select>
      </div>
      <div class="field-group">
        <div class="field-label">Last opp bilde (png, jpg, pdf)</div>
        <input class="field-input" type="file" id="upload-result-file" accept="image/png,image/jpeg,image/jpg,application/pdf">
      </div>
      <button class="btn-primary" onclick="uploadAndScanResult()">Last opp og skann</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-ocr-confirm" onclick="closeModalOutside(event,'modal-ocr-confirm')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">Bekreft skannet resultat</div>
      <div class="modal-close" onclick="closeModal('modal-ocr-confirm')">✕</div>
    </div>
    <div class="modal-body">
      <div style="margin-bottom:15px;color:var(--muted);font-size:13px;">Kontroller og rediger verdiene om nødvendig:</div>
      <div class="field-group">
        <div class="field-label">Time (s)</div>
        <input class="field-input" type="number" step="0.01" id="ocr-time">
      </div>
      <div class="field-group">
        <div class="field-label">Points</div>
        <input class="field-input" type="number" id="ocr-points">
      </div>
      <div class="section-label" style="margin-top:15px;">Treffbilde</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">A</div>
          <input class="field-input" type="number" id="ocr-a" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">C</div>
          <input class="field-input" type="number" id="ocr-c" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">D</div>
          <input class="field-input" type="number" id="ocr-d" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Miss</div>
          <input class="field-input" type="number" id="ocr-miss" style="text-align:center;">
        </div>
      </div>
      <div class="section-label" style="margin-top:15px;">Straffer</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">NS (No-Shoot)</div>
          <input class="field-input" type="number" id="ocr-ns" value="0" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Proc (Procedural)</div>
          <input class="field-input" type="number" id="ocr-proc" value="0" style="text-align:center;">
        </div>
      </div>
      <button class="btn-primary" onclick="saveOCRResult()">Lagre resultat</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("add_result")}</div>
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
      <div class="section-label" style="margin-top:15px;">Treffbilde</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">A</div>
          <input class="field-input" type="number" id="new-result-a" value="0" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">C</div>
          <input class="field-input" type="number" id="new-result-c" value="0" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">D</div>
          <input class="field-input" type="number" id="new-result-d" value="0" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Miss</div>
          <input class="field-input" type="number" id="new-result-miss" value="0" style="text-align:center;">
        </div>
      </div>
      <button class="btn-primary" onclick="addStageResult()">${l("save_result")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-create-stage" onclick="closeModalOutside(event,'modal-create-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title" id="stage-modal-title">${l("create_stage")}</div>
      <div class="modal-close" onclick="closeModal('modal-create-stage')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${l("stage_number")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageNumber(-1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-number" value="1" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageNumber(1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("stage_name")}</div>
        <input class="field-input" type="text" id="stage-name" placeholder="Name">
      </div>
      <div class="field-group">
        <div class="field-label">${l("paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("poppers")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('poppers', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('poppers', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("plates")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('plates', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('plates', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("no_shoots")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('no-shoots', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('no-shoots', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${l("bonus_paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="stage-bonus-included" style="width:18px;height:18px;">
          <span>${l("included")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="saveStage()">${l("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-invite-user" onclick="closeModalOutside(event,'modal-invite-user')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("invite_user")}</div>
      <div class="modal-close" onclick="closeModal('modal-invite-user')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">Søk etter navn eller e-post</div>
        <div style="display:flex;gap:8px;">
          <input class="field-input" type="text" id="user-search-input" placeholder="Søk..." style="flex:1;">
          <button onclick="searchUsers()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Søk</button>
        </div>
      </div>
      <div id="user-search-results" style="margin-top:15px;">
        <!-- Populated by JavaScript -->
      </div>
      <button id="send-invitations-btn" class="btn-primary" onclick="sendMultipleInvitations()" style="margin-top:15px;display:none;">Send invitasjoner (0 valgt)</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-invitations" onclick="closeModalOutside(event,'modal-invitations')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${l("invitations")}</div>
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
  `,es(),pt(),te(),fe(),ut(),Re()}function es(){window.switchTab=ts,window.setFilter=as,window.openModal=ie,window.closeModal=H,window.closeModalOutside=ss,window.createMatch=ns,window.searchMatchByIdHandler=rs,window.openEditProfile=Ms,window.saveProfileData=Cs,window.selectPF=_s,window.updatePFOptions=gt,window.calcPrognose=Re,window.renderMatchList=fe,window.selectMatch=os,window.addShooter=Ns,window.addStageResult=$s,window.handleLogout=Bs,window.openEditMatch=ls,window.saveEditMatch=ds,window.openCreateStage=Fe,window.openCreateStageFromEdit=us,window.openCreateStageFromNewMatch=gs,window.openEditStage=vs,window.changeStageNumber=ms,window.changeStageField=hs,window.saveStage=fs,window.openInviteUser=bs,window.openInvitationsModal=Es,window.acceptInvitation=Ts,window.declineInvitation=Is,window.searchUsers=ys,window.toggleUserSelection=ws,window.sendMultipleInvitations=ks,window.searchUsersNewMatch=xs,window.toggleUserNewMatch=Ss,window.searchUsersEditMatch=Ls,window.toggleUserEditMatch=Ps,window.confirmDeleteMatch=cs,window.deleteMatchConfirmed=ps,window.uploadAndScanResult=Rs,window.saveOCRResult=Os,window.openCreateStageFromUpload=Fs}function ts(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),c(e).classList.add("active");const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(e),t=document.querySelectorAll(".tab-item");t[i]&&t[i].classList.add("active"),e==="screen-home"&&te(),e==="screen-matches"&&fe(),e==="screen-results"&&Me()}function ie(e){c(e).classList.add("open"),e==="modal-upload-result"&&is()}function is(){const e=_.find(a=>a.id==A);if(!e)return;const i=c("upload-stage-select");if(i.innerHTML="",e.stages&&e.stages.length>0)e.stages.forEach(a=>{const n=document.createElement("option");n.value=a.number,n.textContent=`Stage ${a.number} - ${a.name}`,i.appendChild(n)});else{const a=document.createElement("option");a.value="",a.textContent="Ingen stages - opprett ny",i.appendChild(a)}const t=c("upload-shooter-select");t.innerHTML="";const s=document.createElement("option");s.value="me",s.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",t.appendChild(s),e.shooters&&e.shooters.length>0&&e.shooters.forEach(a=>{const n=document.createElement("option");n.value=a.id,n.textContent=a.firstName+" "+a.lastName,t.appendChild(n)})}function H(e){c(e).classList.remove("open")}function ss(e,i){e.target.id===i&&H(i)}function as(e,i){ue=e,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),i.classList.add("active"),fe()}async function ns(){var t;const e={name:N("new-match-name")||"Ny match",type:N("new-match-type")||"Trening",date:N("new-match-date")||new Date().toISOString().split("T")[0],location:N("new-match-location")||"",plannedStages:$("new-match-stages",6),searchable:((t=c("new-match-searchable"))==null?void 0:t.checked)!==!1,status:"active",stages:[],shooters:[],stageDefs:[]},i=await jt(e);if(i.success){let s=0;for(const a of ve)(await ze(a.email,{matchId:i.matchId,matchName:e.name})).success&&s++;H("modal-new-match"),c("new-match-name").value="",c("new-match-location").value="",c("new-match-stages").value="6",c("new-match-searchable")&&(c("new-match-searchable").checked=!0),c("new-match-user-search").value="",c("new-match-search-results").innerHTML="",ve=[],s>0&&alert(`Match opprettet! Invitasjoner sendt til ${s} bruker(e).`)}else alert("Kunne ikke opprette match: "+i.error)}async function rs(){const e=N("match-id-search").trim();if(!e){alert("Skriv inn et match-ID");return}const i=await Ht(e);i.success?(alert(`Match funnet: ${i.match.name} (ID: ${i.match.id})`),c("match-id-search").value=""):alert(`Fant ingen match med ID ${e}${i.error?": "+i.error:""}`)}function os(e){A=e;const i=_.find(t=>t.id==e);if(i){const t=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const n=c(a);n&&(n.textContent=t)})}ke&&ke(),e&&(ke=Vt(e,t=>{const s=_.findIndex(a=>a.id==e);s!==-1&&t&&(_[s]=t,te(),Me())})),te(),Me(),Re()}function ls(){const e=_.find(s=>s.id==A);if(!e){alert("Ingen match valgt");return}c("edit-match-name").value=e.name||"",c("edit-match-type").value=e.type||"Trening",c("edit-match-date").value=e.date||"",c("edit-match-location").value=e.location||"",c("edit-match-stages").value=e.plannedStages||0,c("edit-match-searchable")&&(c("edit-match-searchable").checked=e.searchable!==!1),c("edit-match-finished")&&(c("edit-match-finished").checked=e.status==="finished"),c("edit-match-user-search").value="",c("edit-match-search-results").innerHTML="",me=[];const i=He(),t=c("delete-match-btn");t&&i&&e.ownerId===i.uid?t.style.display="block":t&&(t.style.display="none"),ie("modal-edit-match")}async function ds(){var s,a;const e=_.find(n=>n.id==A);if(!e){alert("Ingen match valgt");return}const i={name:N("edit-match-name")||e.name,type:N("edit-match-type")||e.type,date:N("edit-match-date")||e.date,location:N("edit-match-location")||e.location,plannedStages:$("edit-match-stages",e.plannedStages),searchable:((s=c("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=c("edit-match-finished"))!=null&&a.checked?"finished":"active"},t=await Le(e.id,i);if(t.success){let n=0;for(const r of me)(await ze(r.email,{matchId:e.id,matchName:i.name})).success&&n++;H("modal-edit-match"),n>0&&alert(`Match oppdatert! Invitasjoner sendt til ${n} bruker(e).`)}else alert("Kunne ikke oppdatere match: "+t.error)}function cs(){const e=_.find(t=>t.id==A);if(!e){alert("Ingen match valgt");return}const i=e.id?"Match ID "+e.id+" "+e.name:e.name;c("delete-match-name").textContent=i,ie("modal-confirm-delete")}async function ps(){const e=_.find(t=>t.id==A);if(!e){alert("Ingen match valgt");return}const i=await Ut(e.id);i.success?(H("modal-confirm-delete"),H("modal-edit-match"),A=null,te(),fe(),alert("Match slettet")):alert("Kunne ikke slette match: "+i.error)}let Ie=null,Ee=null;function Fe(){var i;const e=_.find(t=>t.id==A);if(!e){alert("Ingen match valgt");return}Ie=null,c("stage-modal-title").textContent=l("create_stage"),c("stage-number").value=(((i=e.stages)==null?void 0:i.length)||0)+1,c("stage-name").value="",c("stage-paper-targets").value=0,c("stage-poppers").value=0,c("stage-plates").value=0,c("stage-no-shoots").value=0,c("stage-bonus-paper-targets").value=0,c("stage-bonus-included").checked=!1,ie("modal-create-stage")}function us(){H("modal-edit-match"),Fe()}function gs(){H("modal-new-match"),Fe()}function vs(e){const i=_.find(s=>s.id==A);if(!i||!i.stages||!i.stages[e]){alert("Stage ikke funnet");return}Ie=e;const t=i.stages[e];c("stage-modal-title").textContent=l("edit_stage"),c("stage-number").value=t.number||e+1,c("stage-name").value=t.name||"",c("stage-paper-targets").value=t.paperTargets||0,c("stage-poppers").value=t.poppers||0,c("stage-plates").value=t.plates||0,c("stage-no-shoots").value=t.noShoots||0,c("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,c("stage-bonus-included").checked=t.bonusIncluded||!1,ie("modal-create-stage")}function ms(e){const i=c("stage-number"),t=Math.max(1,parseInt(i.value)+e);i.value=t}function hs(e,i){const t=c("stage-"+e),s=Math.max(0,parseInt(t.value)+i);t.value=s}async function fs(){var a;const e=_.find(n=>n.id==A);if(!e){alert("Ingen match valgt");return}const i={number:$("stage-number",1),name:N("stage-name")||"",paperTargets:$("stage-paper-targets",0),poppers:$("stage-poppers",0),plates:$("stage-plates",0),noShoots:$("stage-no-shoots",0),bonusPaperTargets:$("stage-bonus-paper-targets",0),bonusIncluded:((a=c("stage-bonus-included"))==null?void 0:a.checked)||!1},t=e.stages||[];Ie!==null?t[Ie]=i:t.push(i);const s=await Le(e.id,{stages:t});s.success?H("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let ee=[],Z=[],ve=[],me=[];function bs(){if(!A){alert("Ingen match valgt");return}Z=[],c("user-search-input").value="",c("user-search-results").innerHTML="",c("send-invitations-btn").style.display="none",ie("modal-invite-user")}async function ys(){const e=N("user-search-input").trim();if(e.length===0){c("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await Ge(e),t=c("user-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=Z.some(m=>m.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:18px;height:18px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:14px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s,ct()}function ws(e,i,t){const s=Z.findIndex(a=>a.uid===e);s>-1?Z.splice(s,1):Z.push({uid:e,email:i,displayName:t}),ct()}function ct(){const e=c("send-invitations-btn");e&&(Z.length>0?(e.style.display="block",e.textContent=`Send invitasjoner (${Z.length} valgt)`):e.style.display="none")}async function ks(){if(Z.length===0){alert("Ingen brukere valgt");return}const e=_.find(s=>s.id==A);if(!e)return;let i=0,t=0;for(const s of Z)(await ze(s.email,{matchId:e.id,matchName:e.name})).success?i++:t++;H("modal-invite-user"),i>0&&alert(`Invitasjoner sendt til ${i} bruker(e)!`),t>0&&alert(`${t} invitasjon(er) feilet.`),Z=[]}async function xs(){const e=N("new-match-user-search").trim();if(e.length===0){c("new-match-search-results").innerHTML="";return}const i=await Ge(e),t=c("new-match-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=ve.some(m=>m.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s}function Ss(e,i,t){const s=ve.findIndex(a=>a.uid===e);s>-1?ve.splice(s,1):ve.push({uid:e,email:i,displayName:t})}async function Ls(){console.log("🔍 searchUsersEditMatch called");const e=N("edit-match-user-search").trim();if(console.log("📝 Search term:",e),e.length===0){console.log("⚠️ Empty search term"),c("edit-match-search-results").innerHTML="";return}console.log("🌐 Calling searchUsersByNameOrEmail...");const i=await Ge(e);console.log("✅ Results received:",i);const t=c("edit-match-search-results");if(!t){console.error("❌ Container not found: edit-match-search-results");return}if(i.length===0){console.log("⚠️ No users found"),t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}console.log("🎨 Rendering",i.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=me.some(m=>m.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s,console.log("✅ HTML rendered to container")}function Ps(e,i,t){const s=me.findIndex(a=>a.uid===e);s>-1?me.splice(s,1):me.push({uid:e,email:i,displayName:t})}function Es(){qe(),ie("modal-invitations")}function qe(){const e=c("invitations-list");if(!e)return;if(!ee||ee.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+l("no_invitations")+"</div></div>";return}let i="";ee.forEach((t,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+l("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+t.invitedBy+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+l("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+l("decline")+"</button>",i+="</div>",i+="</div>"}),e.innerHTML=i}async function Ts(e){const i=ee[e];if(!i)return;const t=await Kt(i.matchId);t.success?(ee.splice(e,1),We(),qe()):alert("Kunne ikke akseptere invitasjon: "+t.error)}async function Is(e){const i=ee[e];if(!i)return;const t=await qt(i.matchId);t.success?(ee.splice(e,1),We(),qe()):alert("Kunne ikke avvise invitasjon: "+t.error)}function We(){const e=c("invitation-badge");if(!e)return;const i=ee.length;i>0?(e.textContent=i,e.style.display="flex"):e.style.display="none"}function te(){var a,n;const e=c("home-content");if(!e)return;const i=_.find(r=>r.id==A);if(!i){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+i.name+"</div>",t+='<div class="mhc-meta">'+dt(i.date)+" · "+i.type+"</div>",t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((n=i.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',t+="</div>";const s=He();s&&i.ownerId===s.uid&&(t+='<div style="margin-top:10px;">',t+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',t+="</div>"),t+="</div>",i.stages&&i.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',i.stages.forEach((r,v)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+v+')">',t+='<div class="stage-num">S'+(r.number||v+1)+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(r.name||"Stage "+(r.number||v+1))+"</div>",t+='<div class="stage-meta">',r.paperTargets&&(t+="Paper: "+r.paperTargets+" "),r.poppers&&(t+="Poppers: "+r.poppers+" "),r.plates&&(t+="Plates: "+r.plates+" "),r.noShoots&&(t+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(t+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),t+="</div>",t+="</div>",t+="</div>"}),t+="</div>"),e.innerHTML=t}function fe(){const e=c("match-list-container");if(!e)return;let i=_.filter(s=>{if(ue==="all")return!0;if(ue==="active")return s.status!=="finished";if(ue==="trening")return s.type==="Trening";if(ue==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return ue===a});if(i.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let t="";i.forEach(s=>{var r;const a=s.id===A,n=s.id?"Match ID "+s.id+" "+s.name:s.name;t+='<div class="match-row">',t+='<div class="match-row-icon'+(a?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,t+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,t+='<div class="match-row-name">'+n+"</div>",t+='<div class="match-row-meta">'+dt(s.date)+" · "+(s.location||s.type)+"</div>",t+="</div>",t+='<div class="match-row-right">',t+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,t+='<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>",t+='<div class="match-stg-lbl">stages</div>',t+="</div>",t+="</div>"}),e.innerHTML=t}function Me(){var n;const e=c("results-content");if(!e)return;const i=_.find(r=>r.id===A);if(!i){e.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!i.shooters||i.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let t='<div class="card">';t+='<div class="card-header"><div class="card-title">Standings</div></div>',t+='<div class="standings-table-wrap"><table class="standings-table">',t+='<thead><tr class="standings-header-row">',t+='<th class="standings-th standings-th-rank">#</th>',t+='<th class="standings-th standings-th-shooter">Skytter</th>',t+='<th class="standings-th standings-th-pts">Pts</th>',t+='<th class="standings-th standings-th-pct">%</th>',t+="</tr></thead>",t+="<tbody>";const s=i.shooters.map(r=>{var m;const v=((m=r.stages)==null?void 0:m.reduce((y,b)=>y+(b.pts||0),0))||0;return{...r,totalPts:v}}).sort((r,v)=>v.totalPts-r.totalPts),a=((n=s[0])==null?void 0:n.totalPts)||0;s.forEach((r,v)=>{const m=a>0?(r.totalPts/a*100).toFixed(2):"0.00";t+='<tr class="standings-row">',t+='<td class="standings-td standings-td-rank">'+(v+1)+"</td>",t+='<td class="standings-td standings-td-shooter">',t+='<div class="standings-shooter-name">'+r.firstName+" "+r.lastName+"</div>",t+='<div class="standings-shooter-meta">'+r.division+" · "+ge(r.pf||"minor")+"</div>",t+="</td>",t+='<td class="standings-td standings-td-pts">'+r.totalPts.toFixed(2)+"</td>",t+='<td class="standings-td standings-td-pct">'+m+"%</td>",t+="</tr>"}),t+="</tbody></table></div>",t+="</div>",e.innerHTML=t}function pt(){const e=le();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(v=>{const m=c(v);m&&(m.textContent=e)});const t=c("prof-name");t&&(t.textContent=(g.firstName||"")+" "+(g.lastName||""));const s=c("prof-div");s&&(s.textContent=(g.division||"—")+" · "+(g.club||"—"));const a=c("prof-badge-pf");a&&(a.textContent=g.powerFactor?ge(g.powerFactor):"—");const n=c("prof-badge-region");n&&(n.textContent=g.region||"—");const r={"info-firstname":g.firstName||"—","info-lastname":g.lastName||"—","info-division":g.division||"—","info-category":g.category||"—","info-pf":g.powerFactor?ge(g.powerFactor):"—","info-region":g.region||"—","info-club":g.club||"—"};Object.keys(r).forEach(v=>{const m=c(v);m&&(m.textContent=r[v])}),ut()}function ut(){const e=[];_.forEach(u=>{u.stages&&u.stages.forEach(h=>e.push(h))});let i=0,t=0,s=0;e.forEach(u=>{i+=u.a||0,t+=(u.a||0)+(u.c||0)+(u.d||0),s+=u.hf||0});const a=e.length?(s/e.length).toFixed(2):"—",n=t?Math.round(i/t*100)+"%":"—",r=c("stat-matches");r&&(r.textContent=_.length);const v=c("stat-stages");v&&(v.textContent=e.length);const m=c("stat-avg-hf");m&&(m.textContent=a);const y=c("stat-a-rate");y&&(y.textContent=n);const b=c("prog-a-rate");b&&(b.textContent=n)}function Ms(){c("edit-firstname").value=g.firstName||"",c("edit-lastname").value=g.lastName||"",c("edit-club").value=g.club||"",c("edit-draw").value=g.draw||"",c("edit-reload").value=g.reloadTime||"";let e="";qi.forEach(s=>{e+='<option value="'+s+'"'+(s===g.division?" selected":"")+">"+s+"</option>"}),c("edit-division").innerHTML=e;let i="";Ji.forEach(s=>{i+='<option value="'+s+'"'+(s===g.category?" selected":"")+">"+s+"</option>"}),c("edit-category").innerHTML=i;let t="";Yi.forEach(s=>{t+='<option value="'+s+'"'+(s===g.region?" selected":"")+">"+s+"</option>"}),c("edit-region").innerHTML=t,gt(),ie("modal-edit-profile")}function gt(){const e=N("edit-division"),i=Wi[e]||["minor","major"];let t="";i.forEach(s=>{const a=g.powerFactor===s;t+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",t+="</label>"}),c("pf-options").innerHTML=t,i.indexOf(g.powerFactor)<0&&(g.powerFactor=i[0])}function _s(e,i){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),e.classList.add("active"),g.powerFactor=i}async function Cs(){g.firstName=N("edit-firstname").trim()||"",g.lastName=N("edit-lastname").trim()||"",g.division=N("edit-division")||"",g.category=N("edit-category")||"",g.region=N("edit-region")||"",g.club=N("edit-club").trim()||"",g.draw=he("edit-draw")||null,g.reloadTime=he("edit-reload")||null;const e=await Ot(g),i=c("save-profile-btn");e.success?(i.textContent="✓ Lagret!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=l("save_profile"),i.style.background=""},1800)):(i.textContent="❌ Feil!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=l("save_profile"),i.style.background=""},1800)),pt(),Re(),te(),H("modal-edit-profile")}function Re(){const e=$("prog-shots",12),i=$("prog-targets",6),t=$("prog-steel",2),s=he("prog-move",3),a=he("prog-draw",g.draw||1.42),n=g.division||"Classic",r=g.powerFactor||"minor",v=lt(e,n,r);c("prog-reloads").value=v;const m=g.reloadTime||1.8,y=Qi();let b=.18,u="—";y&&y.avgSplit&&(b=y.avgSplit,y.aPercent!==void 0&&(u=(y.aPercent*100).toFixed(0)+"%")),c("prog-split-display")&&(c("prog-split-display").textContent=b.toFixed(3)+"s");const h=c("prog-a-rate");h&&(h.textContent=u);const T=a+e*b+v*m+s;let C=i*10+t*10;if(y&&y.aPercent!==void 0){const B=i*2+t,F=et[r]||et.minor;C=B*y.aPercent*F.A+B*y.cPercent*F.C+B*y.dPercent*F.D+B*y.missPercent*F.miss}const O=T>0?C/T:0;c("prog-hf-out").textContent=O.toFixed(2);let L="";L+='<div class="prog-breakdown-detail">',L+="Trekk: "+a.toFixed(2)+"s · ",L+="Skudd: "+(e*b).toFixed(2)+"s · ",L+="Reload: "+(v*m).toFixed(2)+"s · ",L+="Beveg: "+s.toFixed(2)+"s",L+="</div>",y?(L+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',L+="Basert på "+y.completedStages+" av "+y.totalStages+" stages",y.aPercent!==void 0?L+=" (t/skudd: "+b.toFixed(3)+"s, "+(y.aPercent*100).toFixed(0)+"%A)":L+=" (t/skudd: "+b.toFixed(3)+"s)",L+="</div>"):(L+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',L+="Ingen data ennå - bruker standard 0.18s split",L+="</div>"),c("prog-breakdown").innerHTML=L}async function Ns(){const e=_.find(n=>n.id===A);if(!e)return;const i=N("new-shooter-firstname").trim(),t=N("new-shooter-lastname").trim(),s=N("new-shooter-division")||"Classic";if(!i||!t){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:t,division:s,pf:"minor",club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(a),await Le(e.id,e),H("modal-add-shooter"),Me()}async function $s(){const e=_.find(b=>b.id===A);if(!e)return;const i=$("new-result-stage",1),t=he("new-result-time",0),s=$("new-result-points",0),a=$("new-result-a",0),n=$("new-result-c",0),r=$("new-result-d",0),v=$("new-result-miss",0),m=t>0?s/t:0,y={num:i,name:"Stage "+i,hf:m,time:t,pts:s,pf:g.powerFactor||"minor",a,c:n,d:r,miss:v};e.stages||(e.stages=[]),e.stages.push(y),await Le(e.id,e),H("modal-add"),te()}function Fs(){H("modal-upload-result"),Fe()}async function Rs(){if(!_.find(v=>v.id==A)){alert("Ingen aktiv match valgt");return}const i=c("upload-stage-select"),t=c("upload-shooter-select"),s=c("upload-result-file");if(!i.value||!t.value){alert("Velg stage og skytter");return}if(!s.files||s.files.length===0){alert("Velg en fil");return}const a=s.files[0];Ee=i.value,t.value;const n=event.target,r=n.textContent;n.textContent="Skanner...",n.disabled=!0;try{const v=new FileReader;v.onload=async function(m){const y=m.target.result,u=(await Gi.recognize(y,"eng+nor",{logger:T=>console.log(T)})).data.text;console.log("OCR Text:",u);const h=As(u);c("ocr-time").value=h.time||"",c("ocr-points").value=h.points||"",c("ocr-a").value=h.a||0,c("ocr-c").value=h.c||0,c("ocr-d").value=h.d||0,c("ocr-miss").value=h.miss||0,c("ocr-ns").value=h.ns||0,c("ocr-proc").value=h.proc||0,H("modal-upload-result"),ie("modal-ocr-confirm"),n.textContent=r,n.disabled=!1},v.readAsDataURL(a)}catch(v){console.error("OCR Error:",v),alert("Feil ved skanning: "+v.message),n.textContent=r,n.disabled=!1}}function As(e){const i={time:null,points:null,a:0,c:0,d:0,miss:0,ns:0,proc:0},t=e.replace(/[\n\r]+/g," ").toLowerCase(),s=[/time[:\s]*(\d+\.?\d*)/i,/(\d+\.\d+)\s*s(?:ec)?/i,/^(\d+\.\d+)$/m];for(const u of s){const h=t.match(u);if(h){i.time=parseFloat(h[1]);break}}const a=[/(?:points?|pts?)[:\s]*(\d+)/i,/score[:\s]*(\d+)/i];for(const u of a){const h=t.match(u);if(h){i.points=parseInt(h[1]);break}}const n=[/(\d+)\s*a(?:lpha)?(?:\s|$)/i,/a(?:lpha)?[:\s]*(\d+)/i];for(const u of n){const h=t.match(u);if(h){i.a=parseInt(h[1]);break}}const r=[/(\d+)\s*c(?:harlie)?(?:\s|$)/i,/c(?:harlie)?[:\s]*(\d+)/i];for(const u of r){const h=t.match(u);if(h){i.c=parseInt(h[1]);break}}const v=[/(\d+)\s*d(?:elta)?(?:\s|$)/i,/d(?:elta)?[:\s]*(\d+)/i];for(const u of v){const h=t.match(u);if(h){i.d=parseInt(h[1]);break}}const m=[/(\d+)\s*m(?:iss)?(?:\s|$)/i,/m(?:iss)?[:\s]*(\d+)/i];for(const u of m){const h=t.match(u);if(h){i.miss=parseInt(h[1]);break}}const y=[/(\d+)\s*ns(?:\s|$)/i,/ns[:\s]*(\d+)/i,/no-?shoot[:\s]*(\d+)/i];for(const u of y){const h=t.match(u);if(h){i.ns=parseInt(h[1]);break}}const b=[/(\d+)\s*p(?:roc)?(?:\s|$)/i,/p(?:roc)?[:\s]*(\d+)/i,/procedural[:\s]*(\d+)/i];for(const u of b){const h=t.match(u);if(h){i.proc=parseInt(h[1]);break}}return i}async function Os(){var I;const e=_.find(C=>C.id==A);if(!e)return;const i=he("ocr-time",0),t=$("ocr-points",0),s=$("ocr-a",0),a=$("ocr-c",0),n=$("ocr-d",0),r=$("ocr-miss",0),v=$("ocr-ns",0),m=$("ocr-proc",0);if(i<=0||t<=0){alert("Tid og poeng må være større enn 0");return}const y=i>0?t/i:0,b=(I=e.stages)==null?void 0:I.findIndex(C=>C.number==Ee);if(b===-1||b===void 0){alert("Stage ikke funnet");return}const u=e.stages[b],h={num:u.number,name:u.name,hf:y,time:i,pts:t,pf:g.powerFactor||"minor",a:s,c:a,d:n,miss:r,ns:v,proc:m,paperTargets:u.paperTargets,poppers:u.poppers,plates:u.plates},T=e.stages.findIndex(C=>C.number==Ee);T>=0?e.stages[T]=h:e.stages.push(h),await Le(e.id,e),H("modal-ocr-confirm"),te(),Ee=null}async function Bs(){we&&we(),ke&&ke(),await Ct(),window.location.reload()}const vt=document.getElementById("app");function Ds(){At(vt,mt)}function mt(){Xi(vt)}It(e=>{e?mt():Ds()});
