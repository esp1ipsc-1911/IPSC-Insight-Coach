import{initializeApp as Ee}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as Se,onAuthStateChanged as Te,signInWithEmailAndPassword as Ce,createUserWithEmailAndPassword as Fe,signOut as Ie}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as _e,getDoc as re,doc as B,setDoc as Be,query as oe,collection as ee,where as le,getDocs as Ne,onSnapshot as de,serverTimestamp as q,addDoc as Me,updateDoc as ce}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as $e,httpsCallable as De}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const Re={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},ge=Ee(Re),W=Se(ge),P=_e(ge),Ae=$e();let X=null,E=null;function je(s){Te(W,async e=>{if(e){X=e;try{const t=await re(B(P,"users",e.uid));t.exists()?E={uid:e.uid,...t.data()}:E={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},s(E)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),E={uid:e.uid,email:e.email,name:e.email?e.email.split("@")[0]:"Bruker",role:"user"},s(E)}}else X=null,E=null,s(null)})}async function Oe(s,e){try{const t=(s||"").trim();return{success:!0,user:(await Ce(W,t,e||"")).user}}catch(t){console.error("Innlogging feilet:",t);let i="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?i="Feil e-post eller passord":t.code==="auth/invalid-email"?i="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(i="Denne kontoen er deaktivert"),{success:!1,error:i}}}async function He(s,e,t,i,a,o,l,p,v,h){try{const m=(s||"").trim(),u=e||"",w=(t||"").trim(),b=(i||"").trim(),H=(a||"").trim(),G=(o||"").trim(),Y=(l||"").trim(),$=(p||"minor").trim(),D=(v||"").trim(),V=(h||"").trim(),x=(await Fe(W,m,u)).user,Z=De(Ae,"validateInviteCode");try{await Z({code:w,userId:x.uid,userEmail:m})}catch(L){await x.delete();let c="Ugyldig invitasjonskode";return L.code==="functions/not-found"?c="Ugyldig invitasjonskode":L.code==="functions/permission-denied"?c="Denne koden er deaktivert":L.code==="functions/resource-exhausted"?c="Denne koden har nådd maksimalt antall bruk":L.code==="functions/already-exists"?c="Du har allerede brukt denne koden":L.message&&(c=L.message),{success:!1,error:c}}return await Be(B(P,"users",x.uid),{email:m,firstName:b,lastName:H,division:G,category:Y,powerFactor:$,region:D,club:V,role:"user",inviteCode:w,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:x}}catch(m){console.error("Registrering feilet:",m);let u="Registrering feilet";return m.code==="auth/email-already-in-use"?u="E-postadressen er allerede i bruk":m.code==="auth/weak-password"?u="Passordet må være minst 6 tegn":m.code==="auth/invalid-email"?u="Ugyldig e-postadresse":m.message&&(u=m.message),{success:!1,error:u}}}async function Ge(){try{return await Ie(W),{success:!0}}catch(s){return console.error("Utlogging feilet:",s),{success:!1,error:"Kunne ikke logge ut"}}}function N(){return X}function Ve(){return E}const Ue=`
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
`;function Ke(s,e){const t=document.getElementById("gdpr-modal");t&&t.remove();const i=document.createElement("div");i.id="gdpr-modal",i.className="gdpr-modal",i.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Ue}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(i);const a=i.querySelector(".gdpr-close-btn"),o=i.querySelector(".gdpr-btn-accept"),l=i.querySelector(".gdpr-btn-decline"),p=i.querySelector(".gdpr-modal-overlay"),v=()=>{i.remove()};a.addEventListener("click",()=>{v(),e&&e()}),p.addEventListener("click",()=>{v(),e&&e()}),l.addEventListener("click",()=>{v(),e&&e()}),o.addEventListener("click",()=>{v(),s&&s()}),document.body.style.overflow="hidden";const h=v,m=()=>{document.body.style.overflow="",h()};a.onclick=()=>{m(),e&&e()},p.onclick=()=>{m(),e&&e()},l.onclick=()=>{m(),e&&e()},o.onclick=()=>{m(),s&&s()}}function qe(){const s=document.createElement("div");return s.className="gdpr-checkbox-container",s.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const e=s.querySelector("#gdpr-open-modal");e&&e.addEventListener("click",t=>{t.preventDefault(),Ke(()=>{const i=document.getElementById("gdpr-consent-checkbox");i&&(i.checked=!0)},()=>{const i=document.getElementById("gdpr-consent-checkbox");i&&(i.checked=!1)})})},0),s}function ze(){const s=document.getElementById("gdpr-consent-checkbox");return!s||!s.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function We(s,e){s.innerHTML=`
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
  `;const t={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let i="no",a="minor";const o=document.getElementById("error"),l=document.getElementById("loginSection"),p=document.getElementById("registerSection"),v=document.getElementById("showRegisterBtn"),h=document.getElementById("cancelRegisterBtn"),m=document.getElementById("loginBtn"),u=document.getElementById("registerBtn"),w=document.getElementById("langNo"),b=document.getElementById("langEn"),H=document.getElementById("registerPassword"),G=document.getElementById("passwordStrengthBar"),Y=document.getElementById("passwordStrengthText"),$=document.getElementById("pfMinor"),D=document.getElementById("pfMajor");$.onclick=()=>{a="minor",$.classList.add("selected"),D.classList.remove("selected")},D.onclick=()=>{a="major",D.classList.add("selected"),$.classList.remove("selected")};function V(c){let d=0;return c?(c.length>=8&&(d+=1),c.length>=12&&(d+=1),/[a-z]/.test(c)&&/[A-Z]/.test(c)&&(d+=1),/\d/.test(c)&&(d+=1),/[^A-Za-z0-9]/.test(c)&&(d+=1),d<=1?{score:d,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:d===2?{score:d,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:d===3?{score:d,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:d===4?{score:d,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:d,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function U(){const c=t[i],d=H.value,k=V(d);G.style.width=k.width,G.style.background=k.color,Y.innerText=c[k.labelKey]}function x(c){i=c;const d=t[c];document.getElementById("brandSubtitle").innerText=d.subtitle,document.getElementById("loginEmailLabel").innerText=d.loginEmailLabel,document.getElementById("loginEmail").placeholder=d.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=d.loginPasswordLabel,document.getElementById("loginPassword").placeholder=d.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=d.login,document.getElementById("separatorText").innerText=d.or,document.getElementById("showRegisterBtn").innerText=d.showRegister,document.getElementById("registerFirstNameLabel").innerText=d.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=d.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=d.registerLastNameLabel,document.getElementById("registerLastName").placeholder=d.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=d.registerEmailLabel,document.getElementById("registerEmail").placeholder=d.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=d.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=d.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=d.registerPasswordLabel,document.getElementById("registerPassword").placeholder=d.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=d.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=d.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=d.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=d.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=d.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=d.registerRegionLabel,document.getElementById("registerClubLabel").innerText=d.registerClubLabel,document.getElementById("registerCodeLabel").innerText=d.registerCodeLabel,document.getElementById("registerCode").placeholder=d.registerCodePlaceholder,document.getElementById("registerBtn").innerText=d.register,document.getElementById("cancelRegisterBtn").innerText=d.cancel,w.classList.toggle("active",c==="no"),b.classList.toggle("active",c==="en"),U()}function Z(){l.classList.remove("active"),p.classList.add("active"),o.innerText="";const c=document.getElementById("gdprCheckboxContainer");if(c&&!c.hasChildNodes()){const d=qe();c.appendChild(d)}}function L(){p.classList.remove("active"),l.classList.add("active"),o.innerText=""}w.onclick=()=>x("no"),b.onclick=()=>x("en"),v.onclick=Z,h.onclick=L,H.oninput=U,m.onclick=async()=>{o.innerText="";const c=document.getElementById("loginEmail").value.trim(),d=document.getElementById("loginPassword").value,k=await Oe(c,d);k.success?e():o.innerText=k.error},u.onclick=async()=>{o.innerText="";const c=t[i],d=document.getElementById("registerFirstName").value.trim(),k=document.getElementById("registerLastName").value.trim(),Q=document.getElementById("registerEmail").value.trim(),te=document.getElementById("registerEmailConfirm").value.trim(),K=document.getElementById("registerPassword").value,se=document.getElementById("registerPasswordConfirm").value,ie=document.getElementById("registerDivision").value,Pe=document.getElementById("registerCategory").value,xe=document.getElementById("registerRegion").value,Le=document.getElementById("registerClub").value.trim(),ae=document.getElementById("registerCode").value.trim();if(!d||!k){o.innerText=c.missingName;return}if(!Q||!te||!K||!se||!ae){o.innerText=c.missingFields;return}if(!ie){o.innerText=c.missingDivision;return}if(Q!==te){o.innerText=c.emailMismatch;return}if(K!==se){o.innerText=c.passwordMismatch;return}if(V(K).score<=1){o.innerText=c.weakPassword;return}if(!ze().valid){o.innerText=c.gdprRequired;return}const ne=await He(Q,K,ae,d,k,ie,Pe,a,xe,Le);ne.success?e():o.innerText=ne.error},x("no"),U()}async function Je(s){const e=N();if(!e)return{success:!1,error:"Not authenticated"};try{return await ce(B(P,"users",e.uid),{...s,updatedAt:q()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function Ye(){const s=N();if(!s)return null;try{const e=await re(B(P,"users",s.uid));return e.exists()?{uid:s.uid,...e.data()}:null}catch(e){return console.error("Get profile error:",e),null}}async function Ze(s){const e=N();if(!e)return{success:!1,error:"Not authenticated"};try{const t={...s,ownerId:e.uid,participants:[e.uid],createdAt:q(),updatedAt:q()};return{success:!0,matchId:(await Me(ee(P,"matches"),t)).id}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function ve(s,e){if(!N())return{success:!1,error:"Not authenticated"};try{return await ce(B(P,"matches",s),{...e,updatedAt:q()}),{success:!0}}catch(i){return console.error("Update match error:",i),{success:!1,error:i.message}}}async function Qe(){const s=N();if(!s)return[];try{const e=oe(ee(P,"matches"),le("participants","array-contains",s.uid)),t=await Ne(e),i=[];return t.forEach(a=>{i.push({id:a.id,...a.data()})}),i.sort((a,o)=>{var v,h;const l=a.date||((v=a.createdAt)==null?void 0:v.toDate())||new Date(0);return(o.date||((h=o.createdAt)==null?void 0:h.toDate())||new Date(0))-l}),i}catch(e){return console.error("Get user matches error:",e),[]}}function Xe(s){const e=N();if(!e)return()=>{};const t=oe(ee(P,"matches"),le("participants","array-contains",e.uid));return de(t,a=>{const o=[];a.forEach(l=>{o.push({id:l.id,...l.data()})}),o.sort((l,p)=>{var m,u;const v=l.date||((m=l.createdAt)==null?void 0:m.toDate())||new Date(0);return(p.date||((u=p.createdAt)==null?void 0:u.toDate())||new Date(0))-v}),s(o)},a=>{console.error("Listen to matches error:",a)})}function et(s,e){return de(B(P,"matches",s),i=>{i.exists()?e({id:i.id,...i.data()}):e(null)},i=>{console.error("Listen to match error:",i)})}let n,T=null,F="all",y=[],R=null,A=null;const tt={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Planlagte stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_stevne:"Stevne",match_types_trening:"Trening",match_types_klubbmatch:"Klubbmatch",match_types_landsmesterskap:"Landsmesterskap",match_types_internasjonalt:"Internasjonalt",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Planned Stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_stevne:"Competition",match_types_trening:"Training",match_types_klubbmatch:"Club Match",match_types_landsmesterskap:"Nationals",match_types_internasjonalt:"International",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let pe="no";function r(s){return tt[pe][s]||s}const st={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},it=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],at={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},nt=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],rt=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function ot(s,e){const t=st[s];return t&&(t[e]||t.minor)||15}function lt(s,e,t){return Math.max(0,Math.ceil(s/ot(e,t))-1)}function I(s){return s.charAt(0).toUpperCase()+s.slice(1)}function me(s){if(!s)return"";try{const e=pe==="no"?"nb-NO":"en-US";return new Date(s).toLocaleDateString(e,{day:"numeric",month:"short",year:"numeric"})}catch{return s}}function g(s){return document.getElementById(s)}function f(s){const e=g(s);return e?e.value:""}function j(s,e){const t=parseFloat(f(s));return isNaN(t)?e||0:t}function _(s,e){const t=parseInt(f(s));return isNaN(t)?e||0:t}function S(){const s=(n==null?void 0:n.firstName)||"",e=(n==null?void 0:n.lastName)||"";return(s.charAt(0)+e.charAt(0)).toUpperCase()||"U"}async function dt(s){var i;const e=await Ye(),t=Ve();e?n=e:n={firstName:t.name||((i=t.email)==null?void 0:i.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},y=await Qe(),R&&R(),R=Xe(a=>{y=a,O(),C()}),s.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${r("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${r("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${r("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${r("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${r("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${r("profile")}</span></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${r("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${r("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${r("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${r("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${r("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${r("no_match_selected")}</div>
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
        <div class="stat-block"><div class="stat-value">${n.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${n.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
    </div>
    <div class="section-title">Stage-parametre</div>
    <div class="card">
      <div class="section-label">Stageinnhold</div>
      <div class="prognose-inputs">
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${r("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${r("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${r("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${r("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${n.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${r("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${n.powerFactor?I(n.powerFactor):"Minor"} · ${n.division||"Classic"}</div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${r("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${r("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${r("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${r("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${r("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${r("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${S()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${r("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${r("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${r("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${r("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${r("profile")}</span></div>
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
      <div class="profile-name" id="prof-name">${n.firstName||""} ${n.lastName||""}</div>
      <div class="profile-div" id="prof-div">${n.division||"—"} · ${n.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${n.powerFactor?I(n.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${n.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${r("edit_profile")}</button>
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
        <span id="info-pf">${n.powerFactor?I(n.powerFactor):"—"}</span>
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
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${r("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${r("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${r("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${r("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${r("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${r("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${r("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${r("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${r("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${r("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${r("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${r("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${r("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Stevne">${r("match_types_stevne")}</option>
          <option value="Trening">${r("match_types_trening")}</option>
          <option value="Klubbmatch">${r("match_types_klubbmatch")}</option>
          <option value="Landsmesterskap">${r("match_types_landsmesterskap")}</option>
          <option value="Internasjonalt">${r("match_types_internasjonalt")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${r("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${r("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${r("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <button class="btn-primary" onclick="createMatch()">${r("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${r("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${r("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${n.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${r("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${n.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${r("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${r("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${r("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${r("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${r("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${n.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${r("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${n.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${r("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${n.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${r("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${r("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${r("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${r("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${r("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${r("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${r("add_result")}</div>
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
      <button class="btn-primary" onclick="addStageResult()">${r("save_result")}</button>
    </div>
  </div>
</div>

</div>
  `,ct(),fe(),C(),O(),be(),J()}function ct(){window.switchTab=ue,window.setFilter=vt,window.openModal=he,window.closeModal=M,window.closeModalOutside=gt,window.createMatch=pt,window.openEditProfile=ut,window.saveProfileData=ft,window.selectPF=ht,window.updatePFOptions=ye,window.calcPrognose=J,window.renderMatchList=O,window.selectMatch=mt,window.addShooter=bt,window.addStageResult=yt,window.handleLogout=wt}function ue(s){document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(i=>i.classList.remove("active")),g(s).classList.add("active");const e=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(s),t=document.querySelectorAll(".tab-item");t[e]&&t[e].classList.add("active"),s==="screen-home"&&C(),s==="screen-matches"&&O(),s==="screen-results"&&z()}function he(s){g(s).classList.add("open")}function M(s){g(s).classList.remove("open")}function gt(s,e){s.target.id===e&&M(e)}function vt(s,e){F=s,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),e.classList.add("active"),O()}async function pt(){const s={name:f("new-match-name")||"Ny match",type:f("new-match-type")||"Stevne",date:f("new-match-date")||new Date().toISOString().split("T")[0],location:f("new-match-location")||"",plannedStages:_("new-match-stages",6),stages:[],shooters:[],stageDefs:[]},e=await Ze(s);e.success?M("modal-new-match"):alert("Kunne ikke opprette match: "+e.error)}function mt(s){T=s;const e=y.find(t=>t.id===s);if(e){const t=e.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const o=g(a);o&&(o.textContent=t)})}A&&A(),s&&(A=et(s,t=>{const i=y.findIndex(a=>a.id===s);i!==-1&&t&&(y[i]=t,C(),z())})),C(),z(),J(),ue("screen-home")}function C(){var i,a;const s=g("home-content");if(!s)return;const e=y.find(o=>o.id===T);if(!e){s.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+e.name+"</div>",t+='<div class="mhc-meta">'+me(e.date)+" · "+e.type+"</div>",t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((i=e.stages)==null?void 0:i.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((a=e.shooters)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+="</div>",e.stages&&e.stages.length>0&&(t+='<div class="section-title">Siste resultater</div>',t+='<div class="card">',e.stages.slice(-3).reverse().forEach(l=>{t+='<div class="stage-row">',t+='<div class="stage-num">S'+l.num+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(l.name||"Stage "+l.num)+"</div>",t+='<div class="stage-meta">'+l.time+"s · "+l.pts+" pts</div>",t+="</div>",t+='<div class="stage-hf">'+l.hf.toFixed(2)+"</div>",t+="</div>"}),t+="</div>"),s.innerHTML=t}function O(){const s=g("match-list-container");if(!s)return;const e=f("match-search").toLowerCase();let t=y.filter(a=>{var l;if(e&&!a.name.toLowerCase().includes(e)&&!((l=a.location)!=null&&l.toLowerCase().includes(e)))return!1;if(F==="all")return!0;if(F==="active")return a.id===T;if(F==="trening")return a.type==="Trening";if(F==="stevne")return a.type==="Stevne";const o=a.date?new Date(a.date).getFullYear().toString():"";return F===o});if(t.length===0){s.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let i="";t.forEach(a=>{var l;const o=a.id===T;i+=`<div class="match-row" onclick="selectMatch('`+a.id+`')">`,i+='<div class="match-row-icon'+(o?" is-active":"")+'">🏆</div>',i+='<div class="match-row-info">',i+='<div class="match-row-name">'+a.name+"</div>",i+='<div class="match-row-meta">'+me(a.date)+" · "+(a.location||a.type)+"</div>",i+="</div>",i+='<div class="match-row-right">',i+='<div class="match-stg-count">'+(((l=a.stages)==null?void 0:l.length)||0)+"</div>",i+='<div class="match-stg-lbl">stages</div>',i+="</div>",i+="</div>"}),s.innerHTML=i}function z(){var o;const s=g("results-content");if(!s)return;const e=y.find(l=>l.id===T);if(!e){s.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!e.shooters||e.shooters.length===0){s.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let t='<div class="card">';t+='<div class="card-header"><div class="card-title">Standings</div></div>',t+='<div class="standings-table-wrap"><table class="standings-table">',t+='<thead><tr class="standings-header-row">',t+='<th class="standings-th standings-th-rank">#</th>',t+='<th class="standings-th standings-th-shooter">Skytter</th>',t+='<th class="standings-th standings-th-pts">Pts</th>',t+='<th class="standings-th standings-th-pct">%</th>',t+="</tr></thead>",t+="<tbody>";const i=e.shooters.map(l=>{var v;const p=((v=l.stages)==null?void 0:v.reduce((h,m)=>h+(m.pts||0),0))||0;return{...l,totalPts:p}}).sort((l,p)=>p.totalPts-l.totalPts),a=((o=i[0])==null?void 0:o.totalPts)||0;i.forEach((l,p)=>{const v=a>0?(l.totalPts/a*100).toFixed(2):"0.00";t+='<tr class="standings-row">',t+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",t+='<td class="standings-td standings-td-shooter">',t+='<div class="standings-shooter-name">'+l.firstName+" "+l.lastName+"</div>",t+='<div class="standings-shooter-meta">'+l.division+" · "+I(l.pf||"minor")+"</div>",t+="</td>",t+='<td class="standings-td standings-td-pts">'+l.totalPts.toFixed(2)+"</td>",t+='<td class="standings-td standings-td-pct">'+v+"%</td>",t+="</tr>"}),t+="</tbody></table></div>",t+="</div>",s.innerHTML=t}function fe(){const s=S();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const v=g(p);v&&(v.textContent=s)});const t=g("prof-name");t&&(t.textContent=(n.firstName||"")+" "+(n.lastName||""));const i=g("prof-div");i&&(i.textContent=(n.division||"—")+" · "+(n.club||"—"));const a=g("prof-badge-pf");a&&(a.textContent=n.powerFactor?I(n.powerFactor):"—");const o=g("prof-badge-region");o&&(o.textContent=n.region||"—");const l={"info-firstname":n.firstName||"—","info-lastname":n.lastName||"—","info-division":n.division||"—","info-category":n.category||"—","info-pf":n.powerFactor?I(n.powerFactor):"—","info-region":n.region||"—","info-club":n.club||"—"};Object.keys(l).forEach(p=>{const v=g(p);v&&(v.textContent=l[p])}),be()}function be(){const s=[];y.forEach(u=>{u.stages&&u.stages.forEach(w=>s.push(w))});let e=0,t=0,i=0;s.forEach(u=>{e+=u.a||0,t+=(u.a||0)+(u.c||0)+(u.d||0),i+=u.hf||0});const a=s.length?(i/s.length).toFixed(2):"—",o=t?Math.round(e/t*100)+"%":"—",l=g("stat-matches");l&&(l.textContent=y.length);const p=g("stat-stages");p&&(p.textContent=s.length);const v=g("stat-avg-hf");v&&(v.textContent=a);const h=g("stat-a-rate");h&&(h.textContent=o);const m=g("prog-a-rate");m&&(m.textContent=o)}function ut(){g("edit-firstname").value=n.firstName||"",g("edit-lastname").value=n.lastName||"",g("edit-club").value=n.club||"",g("edit-draw").value=n.draw||"",g("edit-reload").value=n.reloadTime||"";let s="";it.forEach(i=>{s+='<option value="'+i+'"'+(i===n.division?" selected":"")+">"+i+"</option>"}),g("edit-division").innerHTML=s;let e="";nt.forEach(i=>{e+='<option value="'+i+'"'+(i===n.category?" selected":"")+">"+i+"</option>"}),g("edit-category").innerHTML=e;let t="";rt.forEach(i=>{t+='<option value="'+i+'"'+(i===n.region?" selected":"")+">"+i+"</option>"}),g("edit-region").innerHTML=t,ye(),he("modal-edit-profile")}function ye(){const s=f("edit-division"),e=at[s]||["minor","major"];let t="";e.forEach(i=>{const a=n.powerFactor===i;t+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+i+`')">`,t+='<input type="radio" name="pf" value="'+i+'">',t+='<div class="pf-label">'+i.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(i==="major"?"≥170 PF":"<170 PF")+"</div>",t+="</label>"}),g("pf-options").innerHTML=t,e.indexOf(n.powerFactor)<0&&(n.powerFactor=e[0])}function ht(s,e){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),s.classList.add("active"),n.powerFactor=e}async function ft(){n.firstName=f("edit-firstname").trim()||"",n.lastName=f("edit-lastname").trim()||"",n.division=f("edit-division")||"",n.category=f("edit-category")||"",n.region=f("edit-region")||"",n.club=f("edit-club").trim()||"",n.draw=j("edit-draw")||null,n.reloadTime=j("edit-reload")||null;const s=await Je(n),e=g("save-profile-btn");s.success?(e.textContent="✓ Lagret!",e.style.background="var(--green)",setTimeout(()=>{e.textContent=r("save_profile"),e.style.background=""},1800)):(e.textContent="❌ Feil!",e.style.background="var(--red)",setTimeout(()=>{e.textContent=r("save_profile"),e.style.background=""},1800)),fe(),J(),C(),M("modal-edit-profile")}function J(){const s=_("prog-shots",12),e=_("prog-targets",6),t=_("prog-steel",2),i=j("prog-move",3),a=j("prog-draw",n.draw||1.42),o=n.division||"Classic",l=n.powerFactor||"minor",p=lt(s,o,l);g("prog-reloads").value=p;const v=n.reloadTime||1.8,h=.18,m=a+s*h+p*v+i,u=e*10+t*10,w=m>0?u/m:0;g("prog-hf-out").textContent=w.toFixed(2);let b="";b+='<div class="prog-breakdown-detail">',b+="Trekk: "+a.toFixed(2)+"s · ",b+="Skudd: "+(s*h).toFixed(2)+"s · ",b+="Reload: "+(p*v).toFixed(2)+"s · ",b+="Beveg: "+i.toFixed(2)+"s",b+="</div>",g("prog-breakdown").innerHTML=b}async function bt(){const s=y.find(o=>o.id===T);if(!s)return;const e=f("new-shooter-firstname").trim(),t=f("new-shooter-lastname").trim(),i=f("new-shooter-division")||"Classic";if(!e||!t){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:e,lastName:t,division:i,pf:"minor",club:"",stages:[]};s.shooters||(s.shooters=[]),s.shooters.push(a),await ve(s.id,s),M("modal-add-shooter"),z()}async function yt(){const s=y.find(l=>l.id===T);if(!s)return;const e=_("new-result-stage",1),t=j("new-result-time",0),i=_("new-result-points",0),a=t>0?i/t:0,o={num:e,name:"Stage "+e,hf:a,time:t,pts:i,pf:n.powerFactor||"minor"};s.stages||(s.stages=[]),s.stages.push(o),await ve(s.id,s),M("modal-add"),C()}async function wt(){R&&R(),A&&A(),await Ge(),window.location.reload()}const we=document.getElementById("app");function kt(){We(we,ke)}function ke(){dt(we)}je(s=>{s?ke():kt()});
