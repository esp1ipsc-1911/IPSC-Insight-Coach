import{initializeApp as Ae}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as je,onAuthStateChanged as Oe,signInWithEmailAndPassword as Ue,createUserWithEmailAndPassword as He,signOut as ze}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Ve,getDoc as q,doc as k,setDoc as se,query as ae,collection as J,where as ne,getDocs as ve,onSnapshot as ue,serverTimestamp as ee,updateDoc as D,arrayUnion as Le,deleteDoc as Ge}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Ke,httpsCallable as qe}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();const Je={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},Ee=Ae(Je),re=je(Ee),f=Ve(Ee),We=Ke();let ge=null,F=null;function Ye(t){Oe(re,async i=>{if(i){ge=i;try{const e=await q(k(f,"users",i.uid));e.exists()?F={uid:i.uid,...e.data()}:F={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},t(F)}catch(e){console.error("Feil ved lasting av brukerprofil:",e),F={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},t(F)}}else ge=null,F=null,t(null)})}async function Qe(t,i){try{const e=(t||"").trim();return{success:!0,user:(await Ue(re,e,i||"")).user}}catch(e){console.error("Innlogging feilet:",e);let s="Innlogging feilet";return e.code==="auth/user-not-found"||e.code==="auth/wrong-password"||e.code==="auth/invalid-credential"?s="Feil e-post eller passord":e.code==="auth/invalid-email"?s="Ugyldig e-postadresse":e.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function Ze(t,i,e,s,a,l,o,p,v,y){try{const u=(t||"").trim(),h=i||"",I=(e||"").trim(),P=(s||"").trim(),W=(a||"").trim(),Y=(l||"").trim(),de=(o||"").trim(),H=(p||"minor").trim(),z=(v||"").trim(),Q=(y||"").trim(),_=(await He(re,u,h)).user,ce=qe(We,"validateInviteCode");try{await ce({code:I,userId:_.uid,userEmail:u})}catch(C){await _.delete();let g="Ugyldig invitasjonskode";return C.code==="functions/not-found"?g="Ugyldig invitasjonskode":C.code==="functions/permission-denied"?g="Denne koden er deaktivert":C.code==="functions/resource-exhausted"?g="Denne koden har nådd maksimalt antall bruk":C.code==="functions/already-exists"?g="Du har allerede brukt denne koden":C.message&&(g=C.message),{success:!1,error:g}}return await se(k(f,"users",_.uid),{email:u,firstName:P,lastName:W,division:Y,category:de,powerFactor:H,region:z,club:Q,role:"user",inviteCode:I,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:_}}catch(u){console.error("Registrering feilet:",u);let h="Registrering feilet";return u.code==="auth/email-already-in-use"?h="E-postadressen er allerede i bruk":u.code==="auth/weak-password"?h="Passordet må være minst 6 tegn":u.code==="auth/invalid-email"?h="Ugyldig e-postadresse":u.message&&(h=u.message),{success:!1,error:h}}}async function Xe(){try{return await ze(re),{success:!0}}catch(t){return console.error("Utlogging feilet:",t),{success:!1,error:"Kunne ikke logge ut"}}}function S(){return ge}function me(){return F}const et=`
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
`;function tt(t,i){const e=document.getElementById("gdpr-modal");e&&e.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${et}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),l=s.querySelector(".gdpr-btn-accept"),o=s.querySelector(".gdpr-btn-decline"),p=s.querySelector(".gdpr-modal-overlay"),v=()=>{s.remove()};a.addEventListener("click",()=>{v(),i&&i()}),p.addEventListener("click",()=>{v(),i&&i()}),o.addEventListener("click",()=>{v(),i&&i()}),l.addEventListener("click",()=>{v(),t&&t()}),document.body.style.overflow="hidden";const y=v,u=()=>{document.body.style.overflow="",y()};a.onclick=()=>{u(),i&&i()},p.onclick=()=>{u(),i&&i()},o.onclick=()=>{u(),i&&i()},l.onclick=()=>{u(),t&&t()}}function it(){const t=document.createElement("div");return t.className="gdpr-checkbox-container",t.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const i=t.querySelector("#gdpr-open-modal");i&&i.addEventListener("click",e=>{e.preventDefault(),tt(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),t}function st(){const t=document.getElementById("gdpr-consent-checkbox");return!t||!t.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function at(t,i){t.innerHTML=`
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
  `;const e={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const l=document.getElementById("error"),o=document.getElementById("loginSection"),p=document.getElementById("registerSection"),v=document.getElementById("showRegisterBtn"),y=document.getElementById("cancelRegisterBtn"),u=document.getElementById("loginBtn"),h=document.getElementById("registerBtn"),I=document.getElementById("langNo"),P=document.getElementById("langEn"),W=document.getElementById("registerPassword"),Y=document.getElementById("passwordStrengthBar"),de=document.getElementById("passwordStrengthText"),H=document.getElementById("pfMinor"),z=document.getElementById("pfMajor");H.onclick=()=>{a="minor",H.classList.add("selected"),z.classList.remove("selected")},z.onclick=()=>{a="major",z.classList.add("selected"),H.classList.remove("selected")};function Q(g){let c=0;return g?(g.length>=8&&(c+=1),g.length>=12&&(c+=1),/[a-z]/.test(g)&&/[A-Z]/.test(g)&&(c+=1),/\d/.test(g)&&(c+=1),/[^A-Za-z0-9]/.test(g)&&(c+=1),c<=1?{score:c,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:c===2?{score:c,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:c===3?{score:c,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:c===4?{score:c,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:c,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function Z(){const g=e[s],c=W.value,T=Q(c);Y.style.width=T.width,Y.style.background=T.color,de.innerText=g[T.labelKey]}function _(g){s=g;const c=e[g];document.getElementById("brandSubtitle").innerText=c.subtitle,document.getElementById("loginEmailLabel").innerText=c.loginEmailLabel,document.getElementById("loginEmail").placeholder=c.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=c.loginPasswordLabel,document.getElementById("loginPassword").placeholder=c.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=c.login,document.getElementById("separatorText").innerText=c.or,document.getElementById("showRegisterBtn").innerText=c.showRegister,document.getElementById("registerFirstNameLabel").innerText=c.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=c.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=c.registerLastNameLabel,document.getElementById("registerLastName").placeholder=c.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=c.registerEmailLabel,document.getElementById("registerEmail").placeholder=c.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=c.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=c.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=c.registerPasswordLabel,document.getElementById("registerPassword").placeholder=c.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=c.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=c.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=c.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=c.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=c.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=c.registerRegionLabel,document.getElementById("registerClubLabel").innerText=c.registerClubLabel,document.getElementById("registerCodeLabel").innerText=c.registerCodeLabel,document.getElementById("registerCode").placeholder=c.registerCodePlaceholder,document.getElementById("registerBtn").innerText=c.register,document.getElementById("cancelRegisterBtn").innerText=c.cancel,I.classList.toggle("active",g==="no"),P.classList.toggle("active",g==="en"),Z()}function ce(){o.classList.remove("active"),p.classList.add("active"),l.innerText="";const g=document.getElementById("gdprCheckboxContainer");if(g&&!g.hasChildNodes()){const c=it();g.appendChild(c)}}function C(){p.classList.remove("active"),o.classList.add("active"),l.innerText=""}I.onclick=()=>_("no"),P.onclick=()=>_("en"),v.onclick=ce,y.onclick=C,W.oninput=Z,u.onclick=async()=>{l.innerText="";const g=document.getElementById("loginEmail").value.trim(),c=document.getElementById("loginPassword").value,T=await Qe(g,c);T.success?i():l.innerText=T.error},h.onclick=async()=>{l.innerText="";const g=e[s],c=document.getElementById("registerFirstName").value.trim(),T=document.getElementById("registerLastName").value.trim(),pe=document.getElementById("registerEmail").value.trim(),we=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,ke=document.getElementById("registerPasswordConfirm").value,xe=document.getElementById("registerDivision").value,Be=document.getElementById("registerCategory").value,De=document.getElementById("registerRegion").value,Re=document.getElementById("registerClub").value.trim(),Se=document.getElementById("registerCode").value.trim();if(!c||!T){l.innerText=g.missingName;return}if(!pe||!we||!X||!ke||!Se){l.innerText=g.missingFields;return}if(!xe){l.innerText=g.missingDivision;return}if(pe!==we){l.innerText=g.emailMismatch;return}if(X!==ke){l.innerText=g.passwordMismatch;return}if(Q(X).score<=1){l.innerText=g.weakPassword;return}if(!st().valid){l.innerText=g.gdprRequired;return}const Pe=await Ze(pe,X,Se,c,T,xe,Be,a,De,Re);Pe.success?i():l.innerText=Pe.error},_("no"),Z()}async function nt(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{return await D(k(f,"users",i.uid),{...t,updatedAt:ee()}),{success:!0}}catch(e){return console.error("Save profile error:",e),{success:!1,error:e.message}}}async function rt(){const t=S();if(!t)return null;try{const i=await q(k(f,"users",t.uid));return i.exists()?{uid:t.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function ot(){const t=k(f,"counters","matchId");try{const i=await q(t);if(!i.exists())return await se(t,{value:1}),1;const s=i.data().value+1;return await D(t,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function lt(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await ot(),s={id:e,...t,searchable:t.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:ee(),updatedAt:ee()};return await se(k(f,"matches",e.toString()),s),{success:!0,matchId:e}}catch(e){return console.error("Create match error:",e),{success:!1,error:e.message}}}async function oe(t,i){if(!S())return{success:!1,error:"Not authenticated"};try{return await D(k(f,"matches",t.toString()),{...i,updatedAt:ee()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function dt(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await q(k(f,"matches",t.toString()));return e.exists()?e.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await Ge(k(f,"matches",t.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(e){return console.error("Delete match error:",e),{success:!1,error:e.message}}}async function ct(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await q(k(f,"matches",t.toString()));if(!e.exists())return{success:!1,error:"Match not found"};const s={id:e.id,...e.data()};return s.searchable?(s.participants.includes(i.uid)||await D(k(f,"matches",t.toString()),{participants:Le(i.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(e){return console.error("Search match error:",e),{success:!1,error:e.message}}}async function pt(){const t=S();if(!t)return[];try{const i=ae(J(f,"matches"),ne("participants","array-contains",t.uid)),e=await ve(i),s=[];return e.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,l)=>{var v,y;const o=a.date||((v=a.createdAt)==null?void 0:v.toDate())||new Date(0);return(l.date||((y=l.createdAt)==null?void 0:y.toDate())||new Date(0))-o}),s}catch(i){return console.error("Get user matches error:",i),[]}}function gt(t){const i=S();if(!i)return()=>{};const e=ae(J(f,"matches"),ne("participants","array-contains",i.uid));return ue(e,a=>{const l=[];a.forEach(o=>{l.push({id:o.id,...o.data()})}),l.sort((o,p)=>{var u,h;const v=o.date||((u=o.createdAt)==null?void 0:u.toDate())||new Date(0);return(p.date||((h=p.createdAt)==null?void 0:h.toDate())||new Date(0))-v}),t(l)},a=>{console.error("Listen to matches error:",a)})}function vt(t,i){return ue(k(f,"matches",t.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Listen to match error:",s)})}async function he(t,i){const e=S();if(!e)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",t);const s=ae(J(f,"users"),ne("email","==",t)),a=await ve(s);if(a.empty)return console.error("❌ Bruker ikke funnet:",t),{success:!1,error:"Bruker ikke funnet"};const l=a.docs[0],o=l.id;return console.log("✅ Bruker funnet:",o,l.data()),console.log("📨 Sender invitasjon..."),await se(k(f,"users",o,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:e.email,invitedByUid:e.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function fe(t){const i=S();if(!i)return[];try{const e=t.toLowerCase().trim();if(e.length===0)return[];console.log("🔍 Søker etter brukere:",e);const s=await ve(J(f,"users")),a=[];return s.forEach(l=>{const o=l.data(),p=`${o.firstName||""} ${o.lastName||""}`.toLowerCase(),v=(o.email||"").toLowerCase();l.id!==i.uid&&(p.includes(e)||v.includes(e))&&a.push({uid:l.id,email:o.email,firstName:o.firstName||"",lastName:o.lastName||"",displayName:`${o.firstName||""} ${o.lastName||""}`.trim()})}),console.log(`✅ Fant ${a.length} brukere`),a}catch(e){return console.error("❌ Search users error:",e),[]}}async function ut(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{return await D(k(f,"matches",t.toString()),{participants:Le(i.uid)}),await D(k(f,"users",i.uid,"invitations",t.toString()),{status:"accepted"}),{success:!0}}catch(e){return console.error("Accept invitation error:",e),{success:!1,error:e.message}}}async function mt(t){const i=S();if(!i)return{success:!1,error:"Not authenticated"};try{return await D(k(f,"users",i.uid,"invitations",t.toString()),{status:"declined"}),{success:!0}}catch(e){return console.error("Decline invitation error:",e),{success:!1,error:e.message}}}function ht(t){const i=S();if(!i)return()=>{};const e=J(f,"users",i.uid,"invitations"),s=ae(e,ne("status","==","pending"));return ue(s,a=>{const l=[];a.forEach(o=>{l.push({id:o.id,...o.data()})}),t(l)})}let d,w=null,R="all",b=[],V=null,G=null;const ft={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let Ie="no";function n(t){return ft[Ie][t]||t}const bt={Standard:{minor:21,major:21},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30}},yt=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],wt={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},kt=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],xt=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function St(t,i){const e=bt[t];return e&&(e[i]||e.minor)||15}function Pt(t,i,e){return Math.max(0,Math.ceil(t/St(i,e))-1)}function A(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Te(t){if(!t)return"";try{const i=Ie==="no"?"nb-NO":"en-US";return new Date(t).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return t}}function r(t){return document.getElementById(t)}function m(t){const i=r(t);return i?i.value:""}function K(t,i){const e=parseFloat(m(t));return isNaN(e)?i||0:e}function x(t,i){const e=parseInt(m(t));return isNaN(e)?i||0:e}function B(){const t=(d==null?void 0:d.firstName)||"",i=(d==null?void 0:d.lastName)||"";return(t.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function Lt(t){var s;const i=await rt(),e=me();i?d=i:d={firstName:e.name||((s=e.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},b=await pt(),V&&V(),V=gt(a=>{b=a,U(),$()}),ht(a=>{M=a,ye()}),t.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${n("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${B()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${n("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${n("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${n("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${n("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${n("profile")}</span></div>
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
      <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${B()}</div>
    </div>
  </div>
  <div class="scroll-content">
    <div class="search-wrap"><span class="search-icon">🔢</span><input class="search-input" id="match-id-search" placeholder="${n("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Søk</button></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${n("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${n("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${n("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${n("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${n("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${n("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${B()}</div>
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
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${n("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${n("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${n("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${n("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${d.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${n("draw_seconds")}</div></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${n("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${n("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${n("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${n("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${n("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${n("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${B()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${n("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${n("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${n("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${n("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${n("profile")}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${B()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${B()}</div>
      <div class="profile-name" id="prof-name">${d.firstName||""} ${d.lastName||""}</div>
      <div class="profile-div" id="prof-div">${d.division||"—"} · ${d.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${d.powerFactor?A(d.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${d.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${n("edit_profile")}</button>
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
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${n("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${n("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${n("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${n("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${n("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${n("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${n("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${n("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${n("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${n("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${n("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${n("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Trening">${n("match_types_trening")}</option>
          <option value="Level 1">${n("match_types_level1")}</option>
          <option value="Level 2">${n("match_types_level2")}</option>
          <option value="Level 3">${n("match_types_level3")}</option>
          <option value="Level 4">${n("match_types_level4")}</option>
          <option value="Level 5">${n("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${n("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${n("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${n("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="new-match-searchable" checked style="width:18px;height:18px;">
          <span>${n("allow_search")}</span>
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
      <button class="btn-primary" onclick="createMatch()">${n("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("edit_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${n("match_name")}</div>
        <input class="field-input" type="text" id="edit-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${n("type")}</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">${n("match_types_trening")}</option>
          <option value="Level 1">${n("match_types_level1")}</option>
          <option value="Level 2">${n("match_types_level2")}</option>
          <option value="Level 3">${n("match_types_level3")}</option>
          <option value="Level 4">${n("match_types_level4")}</option>
          <option value="Level 5">${n("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${n("date")}</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">${n("location")}</div>
        <input class="field-input" type="text" id="edit-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${n("planned_stages")}</div>
        <input class="field-input" type="number" id="edit-match-stages">
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
          <span>${n("allow_search")}</span>
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
      <button class="btn-primary" onclick="saveEditMatch()">${n("save")}</button>
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;margin-top:10px;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;display:none;">Slett match</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${n("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${d.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${n("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${d.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${n("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${n("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${n("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${n("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${d.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${n("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${d.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${n("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${d.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${n("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${n("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${n("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${n("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${n("save_shooter")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("add_result")}</div>
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
      <button class="btn-primary" onclick="addStageResult()">${n("save_result")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-create-stage" onclick="closeModalOutside(event,'modal-create-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title" id="stage-modal-title">${n("create_stage")}</div>
      <div class="modal-close" onclick="closeModal('modal-create-stage')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${n("stage_number")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageNumber(-1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-number" value="1" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageNumber(1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("stage_name")}</div>
        <input class="field-input" type="text" id="stage-name" placeholder="Name">
      </div>
      <div class="field-group">
        <div class="field-label">${n("paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("poppers")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('poppers', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('poppers', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("plates")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('plates', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('plates', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("no_shoots")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('no-shoots', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('no-shoots', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${n("bonus_paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="stage-bonus-included" style="width:18px;height:18px;">
          <span>${n("included")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="saveStage()">${n("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-invite-user" onclick="closeModalOutside(event,'modal-invite-user')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${n("invite_user")}</div>
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
      <div class="modal-title">${n("invitations")}</div>
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
  `,Et(),_e(),$(),U(),Ce(),le()}function Et(){window.switchTab=It,window.setFilter=Mt,window.openModal=N,window.closeModal=L,window.closeModalOutside=Tt,window.createMatch=_t,window.searchMatchByIdHandler=Ct,window.openEditProfile=Xt,window.saveProfileData=ti,window.selectPF=ei,window.updatePFOptions=$e,window.calcPrognose=le,window.renderMatchList=U,window.selectMatch=$t,window.addShooter=ii,window.addStageResult=si,window.handleLogout=ai,window.openEditMatch=Nt,window.saveEditMatch=Ft,window.openCreateStage=Rt,window.openEditStage=At,window.changeStageNumber=jt,window.changeStageField=Ot,window.saveStage=Ut,window.openInviteUser=Ht,window.sendInvitation=sendInvitation,window.openInvitationsModal=Yt,window.acceptInvitation=Qt,window.declineInvitation=Zt,window.searchUsers=zt,window.toggleUserSelection=Vt,window.sendMultipleInvitations=Gt,window.searchUsersNewMatch=Kt,window.toggleUserNewMatch=qt,window.searchUsersEditMatch=Jt,window.toggleUserEditMatch=Wt,window.confirmDeleteMatch=Bt,window.deleteMatchConfirmed=Dt}function It(t){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),r(t).classList.add("active");const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(t),e=document.querySelectorAll(".tab-item");e[i]&&e[i].classList.add("active"),t==="screen-home"&&$(),t==="screen-matches"&&U(),t==="screen-results"&&ie()}function N(t){r(t).classList.add("open")}function L(t){r(t).classList.remove("open")}function Tt(t,i){t.target.id===i&&L(i)}function Mt(t,i){R=t,document.querySelectorAll(".filter-chip").forEach(e=>e.classList.remove("active")),i.classList.add("active"),U()}async function _t(){var e;const t={name:m("new-match-name")||"Ny match",type:m("new-match-type")||"Trening",date:m("new-match-date")||new Date().toISOString().split("T")[0],location:m("new-match-location")||"",plannedStages:x("new-match-stages",6),searchable:((e=r("new-match-searchable"))==null?void 0:e.checked)!==!1,stages:[],shooters:[],stageDefs:[]},i=await lt(t);if(i.success){let s=0;for(const a of j)(await he(a.email,{matchId:i.matchId,matchName:t.name})).success&&s++;L("modal-new-match"),r("new-match-name").value="",r("new-match-location").value="",r("new-match-stages").value="6",r("new-match-searchable")&&(r("new-match-searchable").checked=!0),r("new-match-user-search").value="",r("new-match-search-results").innerHTML="",j=[],s>0&&alert(`Match opprettet! Invitasjoner sendt til ${s} bruker(e).`)}else alert("Kunne ikke opprette match: "+i.error)}async function Ct(){const t=m("match-id-search").trim();if(!t){alert("Skriv inn et match-ID");return}const i=await ct(t);i.success?(alert(`Match funnet: ${i.match.name} (ID: ${i.match.id})`),r("match-id-search").value=""):alert(`Fant ingen match med ID ${t}${i.error?": "+i.error:""}`)}function $t(t){w=t;const i=b.find(e=>e.id==t);if(i){const e=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const l=r(a);l&&(l.textContent=e)})}G&&G(),t&&(G=vt(t,e=>{const s=b.findIndex(a=>a.id==t);s!==-1&&e&&(b[s]=e,$(),ie())})),$(),ie(),le()}function Nt(){const t=b.find(s=>s.id==w);if(!t){alert("Ingen match valgt");return}r("edit-match-name").value=t.name||"",r("edit-match-type").value=t.type||"Trening",r("edit-match-date").value=t.date||"",r("edit-match-location").value=t.location||"",r("edit-match-stages").value=t.plannedStages||0,r("edit-match-searchable")&&(r("edit-match-searchable").checked=t.searchable!==!1),r("edit-match-user-search").value="",r("edit-match-search-results").innerHTML="",O=[];const i=me(),e=r("delete-match-btn");e&&i&&t.ownerId===i.uid?e.style.display="block":e&&(e.style.display="none"),N("modal-edit-match")}async function Ft(){var s;const t=b.find(a=>a.id==w);if(!t){alert("Ingen match valgt");return}const i={name:m("edit-match-name")||t.name,type:m("edit-match-type")||t.type,date:m("edit-match-date")||t.date,location:m("edit-match-location")||t.location,plannedStages:x("edit-match-stages",t.plannedStages),searchable:((s=r("edit-match-searchable"))==null?void 0:s.checked)!==!1},e=await oe(t.id,i);if(e.success){let a=0;for(const l of O)(await he(l.email,{matchId:t.id,matchName:i.name})).success&&a++;L("modal-edit-match"),a>0&&alert(`Match oppdatert! Invitasjoner sendt til ${a} bruker(e).`)}else alert("Kunne ikke oppdatere match: "+e.error)}function Bt(){const t=b.find(e=>e.id==w);if(!t){alert("Ingen match valgt");return}const i=t.id?"Match ID "+t.id+" "+t.name:t.name;r("delete-match-name").textContent=i,N("modal-confirm-delete")}async function Dt(){const t=b.find(e=>e.id==w);if(!t){alert("Ingen match valgt");return}const i=await dt(t.id);i.success?(L("modal-confirm-delete"),L("modal-edit-match"),w=null,$(),U(),alert("Match slettet")):alert("Kunne ikke slette match: "+i.error)}let te=null;function Rt(){var i;const t=b.find(e=>e.id==w);if(!t){alert("Ingen match valgt");return}te=null,r("stage-modal-title").textContent=n("create_stage"),r("stage-number").value=(((i=t.stages)==null?void 0:i.length)||0)+1,r("stage-name").value="",r("stage-paper-targets").value=0,r("stage-poppers").value=0,r("stage-plates").value=0,r("stage-no-shoots").value=0,r("stage-bonus-paper-targets").value=0,r("stage-bonus-included").checked=!1,N("modal-create-stage")}function At(t){const i=b.find(s=>s.id==w);if(!i||!i.stages||!i.stages[t]){alert("Stage ikke funnet");return}te=t;const e=i.stages[t];r("stage-modal-title").textContent=n("edit_stage"),r("stage-number").value=e.number||t+1,r("stage-name").value=e.name||"",r("stage-paper-targets").value=e.paperTargets||0,r("stage-poppers").value=e.poppers||0,r("stage-plates").value=e.plates||0,r("stage-no-shoots").value=e.noShoots||0,r("stage-bonus-paper-targets").value=e.bonusPaperTargets||0,r("stage-bonus-included").checked=e.bonusIncluded||!1,N("modal-create-stage")}function jt(t){const i=r("stage-number"),e=Math.max(1,parseInt(i.value)+t);i.value=e}function Ot(t,i){const e=r("stage-"+t),s=Math.max(0,parseInt(e.value)+i);e.value=s}async function Ut(){var a;const t=b.find(l=>l.id==w);if(!t){alert("Ingen match valgt");return}const i={number:x("stage-number",1),name:m("stage-name")||"",paperTargets:x("stage-paper-targets",0),poppers:x("stage-poppers",0),plates:x("stage-plates",0),noShoots:x("stage-no-shoots",0),bonusPaperTargets:x("stage-bonus-paper-targets",0),bonusIncluded:((a=r("stage-bonus-included"))==null?void 0:a.checked)||!1},e=t.stages||[];te!==null?e[te]=i:e.push(i);const s=await oe(t.id,{stages:e});s.success?L("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let M=[],E=[],j=[],O=[];function Ht(){if(!w){alert("Ingen match valgt");return}E=[],r("user-search-input").value="",r("user-search-results").innerHTML="",r("send-invitations-btn").style.display="none",N("modal-invite-user")}async function zt(){const t=m("user-search-input").trim();if(t.length===0){r("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await fe(t),e=r("user-search-results");if(!e)return;if(i.length===0){e.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const l=a.displayName||a.email,o=E.some(p=>p.uid===a.uid);s+=`
      <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" ${o?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email}', '${l}')" style="width:18px;height:18px;">
        <div>
          <div style="font-weight:600;">${l}</div>
          <div style="font-size:14px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s,Me()}function Vt(t,i,e){const s=E.findIndex(a=>a.uid===t);s>-1?E.splice(s,1):E.push({uid:t,email:i,displayName:e}),Me()}function Me(){const t=r("send-invitations-btn");t&&(E.length>0?(t.style.display="block",t.textContent=`Send invitasjoner (${E.length} valgt)`):t.style.display="none")}async function Gt(){if(E.length===0){alert("Ingen brukere valgt");return}const t=b.find(s=>s.id==w);if(!t)return;let i=0,e=0;for(const s of E)(await he(s.email,{matchId:t.id,matchName:t.name})).success?i++:e++;L("modal-invite-user"),i>0&&alert(`Invitasjoner sendt til ${i} bruker(e)!`),e>0&&alert(`${e} invitasjon(er) feilet.`),E=[]}async function Kt(){const t=m("new-match-user-search").trim();if(t.length===0){r("new-match-search-results").innerHTML="";return}const i=await fe(t),e=r("new-match-search-results");if(!e)return;if(i.length===0){e.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const l=a.displayName||a.email,o=j.some(p=>p.uid===a.uid);s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${o?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email}', '${l}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${l}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s}function qt(t,i,e){const s=j.findIndex(a=>a.uid===t);s>-1?j.splice(s,1):j.push({uid:t,email:i,displayName:e})}async function Jt(){const t=m("edit-match-user-search").trim();if(t.length===0){r("edit-match-search-results").innerHTML="";return}const i=await fe(t),e=r("edit-match-search-results");if(!e)return;if(i.length===0){e.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const l=a.displayName||a.email,o=O.some(p=>p.uid===a.uid);s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${o?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email}', '${l}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${l}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s}function Wt(t,i,e){const s=O.findIndex(a=>a.uid===t);s>-1?O.splice(s,1):O.push({uid:t,email:i,displayName:e})}function Yt(){be(),N("modal-invitations")}function be(){const t=r("invitations-list");if(!t)return;if(!M||M.length===0){t.innerHTML='<div class="empty-state"><div class="empty-sub">'+n("no_invitations")+"</div></div>";return}let i="";M.forEach((e,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+n("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+e.matchId+" "+e.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+e.invitedBy+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+n("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+n("decline")+"</button>",i+="</div>",i+="</div>"}),t.innerHTML=i}async function Qt(t){const i=M[t];if(!i)return;const e=await ut(i.matchId);e.success?(M.splice(t,1),ye(),be()):alert("Kunne ikke akseptere invitasjon: "+e.error)}async function Zt(t){const i=M[t];if(!i)return;const e=await mt(i.matchId);e.success?(M.splice(t,1),ye(),be()):alert("Kunne ikke avvise invitasjon: "+e.error)}function ye(){const t=r("invitation-badge");if(!t)return;const i=M.length;i>0?(t.textContent=i,t.style.display="flex"):t.style.display="none"}function $(){var a,l;const t=r("home-content");if(!t)return;const i=b.find(o=>o.id===w);if(!i){t.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let e="";e+='<div class="card">',e+='<div class="mhc-name">'+i.name+"</div>",e+='<div class="mhc-meta">'+Te(i.date)+" · "+i.type+"</div>",e+='<div class="mhc-stats">',e+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',e+='<div><div class="mhc-val">'+(((l=i.shooters)==null?void 0:l.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',e+="</div>",e+='<div style="display:flex;gap:10px;margin-top:15px;">',e+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',e+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',e+="</div>",e+='<div style="margin-top:10px;">',e+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',e+="</div>";const s=me();s&&i.ownerId===s.uid&&(e+='<div style="margin-top:10px;">',e+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',e+="</div>"),e+="</div>",i.stages&&i.stages.length>0&&(e+='<div class="section-title">Stages</div>',e+='<div class="card">',i.stages.forEach((o,p)=>{e+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+p+')">',e+='<div class="stage-num">S'+(o.number||p+1)+"</div>",e+='<div class="stage-info">',e+='<div class="stage-name">'+(o.name||"Stage "+(o.number||p+1))+"</div>",e+='<div class="stage-meta">',o.paperTargets&&(e+="Paper: "+o.paperTargets+" "),o.poppers&&(e+="Poppers: "+o.poppers+" "),o.plates&&(e+="Plates: "+o.plates+" "),o.noShoots&&(e+="NS: "+o.noShoots+" "),o.bonusPaperTargets&&(e+="Bonus: "+o.bonusPaperTargets+(o.bonusIncluded?" (included)":"")),e+="</div>",e+="</div>",e+="</div>"}),e+="</div>"),t.innerHTML=e}function U(){const t=r("match-list-container");if(!t)return;let i=b.filter(s=>{if(R==="all")return!0;if(R==="active")return s.id===w;if(R==="trening")return s.type==="Trening";if(R==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return R===a});if(i.length===0){t.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let e="";i.forEach(s=>{var o;const a=s.id===w,l=s.id?"Match ID "+s.id+" "+s.name:s.name;e+='<div class="match-row">',e+='<div class="match-row-icon'+(a?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,e+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,e+='<div class="match-row-name">'+l+"</div>",e+='<div class="match-row-meta">'+Te(s.date)+" · "+(s.location||s.type)+"</div>",e+="</div>",e+='<div class="match-row-right">',e+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,e+='<div class="match-stg-count">'+(((o=s.stages)==null?void 0:o.length)||0)+"</div>",e+='<div class="match-stg-lbl">stages</div>',e+="</div>",e+="</div>"}),t.innerHTML=e}function ie(){var l;const t=r("results-content");if(!t)return;const i=b.find(o=>o.id===w);if(!i){t.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!i.shooters||i.shooters.length===0){t.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let e='<div class="card">';e+='<div class="card-header"><div class="card-title">Standings</div></div>',e+='<div class="standings-table-wrap"><table class="standings-table">',e+='<thead><tr class="standings-header-row">',e+='<th class="standings-th standings-th-rank">#</th>',e+='<th class="standings-th standings-th-shooter">Skytter</th>',e+='<th class="standings-th standings-th-pts">Pts</th>',e+='<th class="standings-th standings-th-pct">%</th>',e+="</tr></thead>",e+="<tbody>";const s=i.shooters.map(o=>{var v;const p=((v=o.stages)==null?void 0:v.reduce((y,u)=>y+(u.pts||0),0))||0;return{...o,totalPts:p}}).sort((o,p)=>p.totalPts-o.totalPts),a=((l=s[0])==null?void 0:l.totalPts)||0;s.forEach((o,p)=>{const v=a>0?(o.totalPts/a*100).toFixed(2):"0.00";e+='<tr class="standings-row">',e+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",e+='<td class="standings-td standings-td-shooter">',e+='<div class="standings-shooter-name">'+o.firstName+" "+o.lastName+"</div>",e+='<div class="standings-shooter-meta">'+o.division+" · "+A(o.pf||"minor")+"</div>",e+="</td>",e+='<td class="standings-td standings-td-pts">'+o.totalPts.toFixed(2)+"</td>",e+='<td class="standings-td standings-td-pct">'+v+"%</td>",e+="</tr>"}),e+="</tbody></table></div>",e+="</div>",t.innerHTML=e}function _e(){const t=B();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const v=r(p);v&&(v.textContent=t)});const e=r("prof-name");e&&(e.textContent=(d.firstName||"")+" "+(d.lastName||""));const s=r("prof-div");s&&(s.textContent=(d.division||"—")+" · "+(d.club||"—"));const a=r("prof-badge-pf");a&&(a.textContent=d.powerFactor?A(d.powerFactor):"—");const l=r("prof-badge-region");l&&(l.textContent=d.region||"—");const o={"info-firstname":d.firstName||"—","info-lastname":d.lastName||"—","info-division":d.division||"—","info-category":d.category||"—","info-pf":d.powerFactor?A(d.powerFactor):"—","info-region":d.region||"—","info-club":d.club||"—"};Object.keys(o).forEach(p=>{const v=r(p);v&&(v.textContent=o[p])}),Ce()}function Ce(){const t=[];b.forEach(h=>{h.stages&&h.stages.forEach(I=>t.push(I))});let i=0,e=0,s=0;t.forEach(h=>{i+=h.a||0,e+=(h.a||0)+(h.c||0)+(h.d||0),s+=h.hf||0});const a=t.length?(s/t.length).toFixed(2):"—",l=e?Math.round(i/e*100)+"%":"—",o=r("stat-matches");o&&(o.textContent=b.length);const p=r("stat-stages");p&&(p.textContent=t.length);const v=r("stat-avg-hf");v&&(v.textContent=a);const y=r("stat-a-rate");y&&(y.textContent=l);const u=r("prog-a-rate");u&&(u.textContent=l)}function Xt(){r("edit-firstname").value=d.firstName||"",r("edit-lastname").value=d.lastName||"",r("edit-club").value=d.club||"",r("edit-draw").value=d.draw||"",r("edit-reload").value=d.reloadTime||"";let t="";yt.forEach(s=>{t+='<option value="'+s+'"'+(s===d.division?" selected":"")+">"+s+"</option>"}),r("edit-division").innerHTML=t;let i="";kt.forEach(s=>{i+='<option value="'+s+'"'+(s===d.category?" selected":"")+">"+s+"</option>"}),r("edit-category").innerHTML=i;let e="";xt.forEach(s=>{e+='<option value="'+s+'"'+(s===d.region?" selected":"")+">"+s+"</option>"}),r("edit-region").innerHTML=e,$e(),N("modal-edit-profile")}function $e(){const t=m("edit-division"),i=wt[t]||["minor","major"];let e="";i.forEach(s=>{const a=d.powerFactor===s;e+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,e+='<input type="radio" name="pf" value="'+s+'">',e+='<div class="pf-label">'+s.toUpperCase()+"</div>",e+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",e+="</label>"}),r("pf-options").innerHTML=e,i.indexOf(d.powerFactor)<0&&(d.powerFactor=i[0])}function ei(t,i){document.querySelectorAll(".pf-option").forEach(e=>e.classList.remove("active")),t.classList.add("active"),d.powerFactor=i}async function ti(){d.firstName=m("edit-firstname").trim()||"",d.lastName=m("edit-lastname").trim()||"",d.division=m("edit-division")||"",d.category=m("edit-category")||"",d.region=m("edit-region")||"",d.club=m("edit-club").trim()||"",d.draw=K("edit-draw")||null,d.reloadTime=K("edit-reload")||null;const t=await nt(d),i=r("save-profile-btn");t.success?(i.textContent="✓ Lagret!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=n("save_profile"),i.style.background=""},1800)):(i.textContent="❌ Feil!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=n("save_profile"),i.style.background=""},1800)),_e(),le(),$(),L("modal-edit-profile")}function le(){const t=x("prog-shots",12),i=x("prog-targets",6),e=x("prog-steel",2),s=K("prog-move",3),a=K("prog-draw",d.draw||1.42),l=d.division||"Classic",o=d.powerFactor||"minor",p=Pt(t,l,o);r("prog-reloads").value=p;const v=d.reloadTime||1.8,y=.18,u=a+t*y+p*v+s,h=i*10+e*10,I=u>0?h/u:0;r("prog-hf-out").textContent=I.toFixed(2);let P="";P+='<div class="prog-breakdown-detail">',P+="Trekk: "+a.toFixed(2)+"s · ",P+="Skudd: "+(t*y).toFixed(2)+"s · ",P+="Reload: "+(p*v).toFixed(2)+"s · ",P+="Beveg: "+s.toFixed(2)+"s",P+="</div>",r("prog-breakdown").innerHTML=P}async function ii(){const t=b.find(l=>l.id===w);if(!t)return;const i=m("new-shooter-firstname").trim(),e=m("new-shooter-lastname").trim(),s=m("new-shooter-division")||"Classic";if(!i||!e){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:e,division:s,pf:"minor",club:"",stages:[]};t.shooters||(t.shooters=[]),t.shooters.push(a),await oe(t.id,t),L("modal-add-shooter"),ie()}async function si(){const t=b.find(o=>o.id===w);if(!t)return;const i=x("new-result-stage",1),e=K("new-result-time",0),s=x("new-result-points",0),a=e>0?s/e:0,l={num:i,name:"Stage "+i,hf:a,time:e,pts:s,pf:d.powerFactor||"minor"};t.stages||(t.stages=[]),t.stages.push(l),await oe(t.id,t),L("modal-add"),$()}async function ai(){V&&V(),G&&G(),await Xe(),window.location.reload()}const Ne=document.getElementById("app");function ni(){at(Ne,Fe)}function Fe(){Lt(Ne)}Ye(t=>{t?Fe():ni()});
