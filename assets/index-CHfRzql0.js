import{initializeApp as Ue}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as He,onAuthStateChanged as ze,signInWithEmailAndPassword as Ve,createUserWithEmailAndPassword as Ge,signOut as Ke}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as qe,getDoc as Z,doc as L,setDoc as ae,query as ne,collection as X,where as re,getDocs as ve,onSnapshot as ue,serverTimestamp as te,updateDoc as U,arrayUnion as Ie,deleteDoc as Je}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as We,httpsCallable as Ye}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const Qe={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},Me=Ue(Qe),oe=He(Me),w=qe(Me),Ze=We();let ge=null,j=null;function Xe(t){ze(oe,async i=>{if(i){ge=i;try{const e=await Z(L(w,"users",i.uid));e.exists()?j={uid:i.uid,...e.data()}:j={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},t(j)}catch(e){console.error("Feil ved lasting av brukerprofil:",e),j={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},t(j)}}else ge=null,j=null,t(null)})}async function et(t,i){try{const e=(t||"").trim();return{success:!0,user:(await Ve(oe,e,i||"")).user}}catch(e){console.error("Innlogging feilet:",e);let s="Innlogging feilet";return e.code==="auth/user-not-found"||e.code==="auth/wrong-password"||e.code==="auth/invalid-credential"?s="Feil e-post eller passord":e.code==="auth/invalid-email"?s="Ugyldig e-postadresse":e.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function tt(t,i,e,s,a,o,r,p,g,u){try{const v=(t||"").trim(),h=i||"",T=(e||"").trim(),P=(s||"").trim(),k=(a||"").trim(),_=(o||"").trim(),A=(r||"").trim(),b=(p||"minor").trim(),H=(g||"").trim(),J=(u||"").trim(),E=(await Ge(oe,v,h)).user,ce=Ye(Ze,"validateInviteCode");try{await ce({code:T,userId:E.uid,userEmail:v})}catch(B){await E.delete();let m="Ugyldig invitasjonskode";return B.code==="functions/not-found"?m="Ugyldig invitasjonskode":B.code==="functions/permission-denied"?m="Denne koden er deaktivert":B.code==="functions/resource-exhausted"?m="Denne koden har nådd maksimalt antall bruk":B.code==="functions/already-exists"?m="Du har allerede brukt denne koden":B.message&&(m=B.message),{success:!1,error:m}}return await ae(L(w,"users",E.uid),{email:v,firstName:P,lastName:k,division:_,category:A,powerFactor:b,region:H,club:J,role:"user",inviteCode:T,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:E}}catch(v){console.error("Registrering feilet:",v);let h="Registrering feilet";return v.code==="auth/email-already-in-use"?h="E-postadressen er allerede i bruk":v.code==="auth/weak-password"?h="Passordet må være minst 6 tegn":v.code==="auth/invalid-email"?h="Ugyldig e-postadresse":v.message&&(h=v.message),{success:!1,error:h}}}async function it(){try{return await Ke(oe),{success:!0}}catch(t){return console.error("Utlogging feilet:",t),{success:!1,error:"Kunne ikke logge ut"}}}function M(){return ge}function me(){return j}const st=`
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
`;function at(t,i){const e=document.getElementById("gdpr-modal");e&&e.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${st}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),o=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),p=s.querySelector(".gdpr-modal-overlay"),g=()=>{s.remove()};a.addEventListener("click",()=>{g(),i&&i()}),p.addEventListener("click",()=>{g(),i&&i()}),r.addEventListener("click",()=>{g(),i&&i()}),o.addEventListener("click",()=>{g(),t&&t()}),document.body.style.overflow="hidden";const u=g,v=()=>{document.body.style.overflow="",u()};a.onclick=()=>{v(),i&&i()},p.onclick=()=>{v(),i&&i()},r.onclick=()=>{v(),i&&i()},o.onclick=()=>{v(),t&&t()}}function nt(){const t=document.createElement("div");return t.className="gdpr-checkbox-container",t.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const i=t.querySelector("#gdpr-open-modal");i&&i.addEventListener("click",e=>{e.preventDefault(),at(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),t}function rt(){const t=document.getElementById("gdpr-consent-checkbox");return!t||!t.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function ot(t,i){t.innerHTML=`
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
  `;const e={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const o=document.getElementById("error"),r=document.getElementById("loginSection"),p=document.getElementById("registerSection"),g=document.getElementById("showRegisterBtn"),u=document.getElementById("cancelRegisterBtn"),v=document.getElementById("loginBtn"),h=document.getElementById("registerBtn"),T=document.getElementById("langNo"),P=document.getElementById("langEn"),k=document.getElementById("registerPassword"),_=document.getElementById("passwordStrengthBar"),A=document.getElementById("passwordStrengthText"),b=document.getElementById("pfMinor"),H=document.getElementById("pfMajor");b.onclick=()=>{a="minor",b.classList.add("selected"),H.classList.remove("selected")},H.onclick=()=>{a="major",H.classList.add("selected"),b.classList.remove("selected")};function J(m){let c=0;return m?(m.length>=8&&(c+=1),m.length>=12&&(c+=1),/[a-z]/.test(m)&&/[A-Z]/.test(m)&&(c+=1),/\d/.test(m)&&(c+=1),/[^A-Za-z0-9]/.test(m)&&(c+=1),c<=1?{score:c,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:c===2?{score:c,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:c===3?{score:c,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:c===4?{score:c,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:c,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function N(){const m=e[s],c=k.value,$=J(c);_.style.width=$.width,_.style.background=$.color,A.innerText=m[$.labelKey]}function E(m){s=m;const c=e[m];document.getElementById("brandSubtitle").innerText=c.subtitle,document.getElementById("loginEmailLabel").innerText=c.loginEmailLabel,document.getElementById("loginEmail").placeholder=c.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=c.loginPasswordLabel,document.getElementById("loginPassword").placeholder=c.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=c.login,document.getElementById("separatorText").innerText=c.or,document.getElementById("showRegisterBtn").innerText=c.showRegister,document.getElementById("registerFirstNameLabel").innerText=c.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=c.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=c.registerLastNameLabel,document.getElementById("registerLastName").placeholder=c.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=c.registerEmailLabel,document.getElementById("registerEmail").placeholder=c.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=c.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=c.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=c.registerPasswordLabel,document.getElementById("registerPassword").placeholder=c.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=c.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=c.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=c.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=c.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=c.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=c.registerRegionLabel,document.getElementById("registerClubLabel").innerText=c.registerClubLabel,document.getElementById("registerCodeLabel").innerText=c.registerCodeLabel,document.getElementById("registerCode").placeholder=c.registerCodePlaceholder,document.getElementById("registerBtn").innerText=c.register,document.getElementById("cancelRegisterBtn").innerText=c.cancel,T.classList.toggle("active",m==="no"),P.classList.toggle("active",m==="en"),N()}function ce(){r.classList.remove("active"),p.classList.add("active"),o.innerText="";const m=document.getElementById("gdprCheckboxContainer");if(m&&!m.hasChildNodes()){const c=nt();m.appendChild(c)}}function B(){p.classList.remove("active"),r.classList.add("active"),o.innerText=""}T.onclick=()=>E("no"),P.onclick=()=>E("en"),g.onclick=ce,u.onclick=B,k.oninput=N,v.onclick=async()=>{o.innerText="";const m=document.getElementById("loginEmail").value.trim(),c=document.getElementById("loginPassword").value,$=await et(m,c);$.success?i():o.innerText=$.error},h.onclick=async()=>{o.innerText="";const m=e[s],c=document.getElementById("registerFirstName").value.trim(),$=document.getElementById("registerLastName").value.trim(),pe=document.getElementById("registerEmail").value.trim(),ke=document.getElementById("registerEmailConfirm").value.trim(),ee=document.getElementById("registerPassword").value,xe=document.getElementById("registerPasswordConfirm").value,Se=document.getElementById("registerDivision").value,Ae=document.getElementById("registerCategory").value,je=document.getElementById("registerRegion").value,Oe=document.getElementById("registerClub").value.trim(),Pe=document.getElementById("registerCode").value.trim();if(!c||!$){o.innerText=m.missingName;return}if(!pe||!ke||!ee||!xe||!Pe){o.innerText=m.missingFields;return}if(!Se){o.innerText=m.missingDivision;return}if(pe!==ke){o.innerText=m.emailMismatch;return}if(ee!==xe){o.innerText=m.passwordMismatch;return}if(J(ee).score<=1){o.innerText=m.weakPassword;return}if(!rt().valid){o.innerText=m.gdprRequired;return}const Le=await tt(pe,ee,Pe,c,$,Se,Ae,a,je,Oe);Le.success?i():o.innerText=Le.error},E("no"),N()}async function lt(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{return await U(L(w,"users",i.uid),{...t,updatedAt:te()}),{success:!0}}catch(e){return console.error("Save profile error:",e),{success:!1,error:e.message}}}async function dt(){const t=M();if(!t)return null;try{const i=await Z(L(w,"users",t.uid));return i.exists()?{uid:t.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function ct(){const t=L(w,"counters","matchId");try{const i=await Z(t);if(!i.exists())return await ae(t,{value:1}),1;const s=i.data().value+1;return await U(t,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function pt(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await ct(),s={id:e,...t,searchable:t.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:te(),updatedAt:te()};return await ae(L(w,"matches",e.toString()),s),{success:!0,matchId:e}}catch(e){return console.error("Create match error:",e),{success:!1,error:e.message}}}async function le(t,i){if(!M())return{success:!1,error:"Not authenticated"};try{return await U(L(w,"matches",t.toString()),{...i,updatedAt:te()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function gt(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await Z(L(w,"matches",t.toString()));return e.exists()?e.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await Je(L(w,"matches",t.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(e){return console.error("Delete match error:",e),{success:!1,error:e.message}}}async function vt(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{const e=await Z(L(w,"matches",t.toString()));if(!e.exists())return{success:!1,error:"Match not found"};const s={id:e.id,...e.data()};return s.searchable?(s.participants.includes(i.uid)||await U(L(w,"matches",t.toString()),{participants:Ie(i.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(e){return console.error("Search match error:",e),{success:!1,error:e.message}}}async function ut(){const t=M();if(!t)return[];try{const i=ne(X(w,"matches"),re("participants","array-contains",t.uid)),e=await ve(i),s=[];return e.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,o)=>{var g,u;const r=a.date||((g=a.createdAt)==null?void 0:g.toDate())||new Date(0);return(o.date||((u=o.createdAt)==null?void 0:u.toDate())||new Date(0))-r}),s}catch(i){return console.error("Get user matches error:",i),[]}}function mt(t){const i=M();if(!i)return()=>{};const e=ne(X(w,"matches"),re("participants","array-contains",i.uid));return ue(e,a=>{const o=[];a.forEach(r=>{o.push({id:r.id,...r.data()})}),o.sort((r,p)=>{var v,h;const g=r.date||((v=r.createdAt)==null?void 0:v.toDate())||new Date(0);return(p.date||((h=p.createdAt)==null?void 0:h.toDate())||new Date(0))-g}),t(o)},a=>{console.error("Listen to matches error:",a)})}function ht(t,i){return ue(L(w,"matches",t.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Listen to match error:",s)})}async function he(t,i){const e=M();if(!e)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",t);const s=ne(X(w,"users"),re("email","==",t)),a=await ve(s);if(a.empty)return console.error("❌ Bruker ikke funnet:",t),{success:!1,error:"Bruker ikke funnet"};const o=a.docs[0],r=o.id;return console.log("✅ Bruker funnet:",r,o.data()),console.log("📨 Sender invitasjon..."),await ae(L(w,"users",r,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:e.email,invitedByUid:e.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function fe(t){const i=M();if(!i)return[];try{const e=t.toLowerCase().trim();if(e.length===0)return[];console.log("🔍 Søker etter brukere:",e);const s=await ve(X(w,"users")),a=[];return s.forEach(o=>{const r=o.data(),p=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),g=(r.email||"").toLowerCase();o.id!==i.uid&&(p.includes(e)||g.includes(e))&&a.push({uid:o.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(`✅ Fant ${a.length} brukere`),a}catch(e){return console.error("❌ Search users error:",e),[]}}async function ft(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{return await U(L(w,"matches",t.toString()),{participants:Ie(i.uid)}),await U(L(w,"users",i.uid,"invitations",t.toString()),{status:"accepted"}),{success:!0}}catch(e){return console.error("Accept invitation error:",e),{success:!1,error:e.message}}}async function bt(t){const i=M();if(!i)return{success:!1,error:"Not authenticated"};try{return await U(L(w,"users",i.uid,"invitations",t.toString()),{status:"declined"}),{success:!0}}catch(e){return console.error("Decline invitation error:",e),{success:!1,error:e.message}}}function yt(t){const i=M();if(!i)return()=>{};const e=X(w,"users",i.uid,"invitations"),s=ne(e,re("status","==","pending"));return ue(s,a=>{const o=[];a.forEach(r=>{o.push({id:r.id,...r.data()})}),t(o)})}let d,x=null,z="all",y=[],W=null,Y=null;const wt={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let Te="no";function n(t){return wt[Te][t]||t}const Ee={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},kt={Standard:{minor:21,major:21},Open:{minor:29,major:29},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:21,major:21}},xt=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],St={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Pt=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Lt=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function Et(t,i){const e=kt[t];return e&&(e[i]||e.minor)||15}function _e(t,i,e){return Math.max(0,Math.ceil(t/Et(i,e))-1)}function It(){const t=y.find(k=>k.id==x);if(!t||!t.stages||t.stages.length===0)return null;const i=t.stages.filter(k=>k.time&&k.pts);if(i.length===0)return null;const e=d.division||"Classic",s=d.powerFactor||"minor",a=d.draw||1.42,o=d.reloadTime||1.8;let r=0,p=0,g=0,u=0,v=0,h=0;for(const k of i){const _=(k.paperTargets||0)*2+(k.poppers||0)+(k.plates||0);if(_===0)continue;const A=_e(_,e,s),b=k.time-a-A*o;b>0&&(r+=_,p+=b,g+=k.a||0,u+=k.c||0,v+=k.d||0,h+=k.miss||0)}if(r===0)return null;const T=p/r,P=g+u+v+h;return{avgSplit:T,completedStages:i.length,totalStages:t.stages.length,aPercent:P>0?g/P:0,cPercent:P>0?u/P:0,dPercent:P>0?v/P:0,missPercent:P>0?h/P:0}}function V(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ce(t){if(!t)return"";try{const i=Te==="no"?"nb-NO":"en-US";return new Date(t).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return t}}function l(t){return document.getElementById(t)}function f(t){const i=l(t);return i?i.value:""}function Q(t,i){const e=parseFloat(f(t));return isNaN(e)?i||0:e}function S(t,i){const e=parseInt(f(t));return isNaN(e)?i||0:e}function O(){const t=(d==null?void 0:d.firstName)||"",i=(d==null?void 0:d.lastName)||"";return(t.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function Mt(t){var s;const i=await dt(),e=me();if(i?d=i:d={firstName:e.name||((s=e.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},y=await ut(),y&&y.length>0){const a=new Date,o=y.filter(r=>r.status!=="finished"&&r.date);if(o.length>0){let r=o[0],p=Math.abs(new Date(o[0].date)-a);for(const g of o){const u=new Date(g.date),v=Math.abs(u-a);v<p&&(p=v,r=g)}x=r.id}}W&&W(),W=mt(a=>{y=a,q(),D()}),yt(a=>{F=a,we()}),t.innerHTML=`
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
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${O()}</div>
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
      <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${O()}</div>
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
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${O()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="prog-split-display">0.18s</div><div class="stat-label">Split</div></div>
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
        <div class="prog-pf-note" id="prog-pf-note">${d.powerFactor?V(d.powerFactor):"Minor"} · ${d.division||"Classic"}</div>
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
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${O()}</div>
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
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${O()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${O()}</div>
      <div class="profile-name" id="prof-name">${d.firstName||""} ${d.lastName||""}</div>
      <div class="profile-div" id="prof-div">${d.division||"—"} · ${d.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${d.powerFactor?V(d.powerFactor):"—"}</span>
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
        <span id="info-pf">${d.powerFactor?V(d.powerFactor):"—"}</span>
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
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromNewMatch()" style="width:100%;">Ny stage</button>
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
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromEdit()" style="width:100%;">Ny stage</button>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
          <span>${n("allow_search")}</span>
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
  `,Tt(),$e(),D(),q(),Fe(),de()}function Tt(){window.switchTab=_t,window.setFilter=Nt,window.openModal=R,window.closeModal=I,window.closeModalOutside=Ct,window.createMatch=$t,window.searchMatchByIdHandler=Ft,window.openEditProfile=si,window.saveProfileData=ni,window.selectPF=ai,window.updatePFOptions=Be,window.calcPrognose=de,window.renderMatchList=q,window.selectMatch=Bt,window.addShooter=ri,window.addStageResult=oi,window.handleLogout=li,window.openEditMatch=Dt,window.saveEditMatch=Rt,window.openCreateStage=be,window.openCreateStageFromEdit=Ot,window.openCreateStageFromNewMatch=Ut,window.openEditStage=Ht,window.changeStageNumber=zt,window.changeStageField=Vt,window.saveStage=Gt,window.openInviteUser=Kt,window.openInvitationsModal=ei,window.acceptInvitation=ti,window.declineInvitation=ii,window.searchUsers=qt,window.toggleUserSelection=Jt,window.sendMultipleInvitations=Wt,window.searchUsersNewMatch=Yt,window.toggleUserNewMatch=Qt,window.searchUsersEditMatch=Zt,window.toggleUserEditMatch=Xt,window.confirmDeleteMatch=At,window.deleteMatchConfirmed=jt}function _t(t){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),l(t).classList.add("active");const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(t),e=document.querySelectorAll(".tab-item");e[i]&&e[i].classList.add("active"),t==="screen-home"&&D(),t==="screen-matches"&&q(),t==="screen-results"&&se()}function R(t){l(t).classList.add("open")}function I(t){l(t).classList.remove("open")}function Ct(t,i){t.target.id===i&&I(i)}function Nt(t,i){z=t,document.querySelectorAll(".filter-chip").forEach(e=>e.classList.remove("active")),i.classList.add("active"),q()}async function $t(){var e;const t={name:f("new-match-name")||"Ny match",type:f("new-match-type")||"Trening",date:f("new-match-date")||new Date().toISOString().split("T")[0],location:f("new-match-location")||"",plannedStages:S("new-match-stages",6),searchable:((e=l("new-match-searchable"))==null?void 0:e.checked)!==!1,status:"active",stages:[],shooters:[],stageDefs:[]},i=await pt(t);if(i.success){let s=0;for(const a of G)(await he(a.email,{matchId:i.matchId,matchName:t.name})).success&&s++;I("modal-new-match"),l("new-match-name").value="",l("new-match-location").value="",l("new-match-stages").value="6",l("new-match-searchable")&&(l("new-match-searchable").checked=!0),l("new-match-user-search").value="",l("new-match-search-results").innerHTML="",G=[],s>0&&alert(`Match opprettet! Invitasjoner sendt til ${s} bruker(e).`)}else alert("Kunne ikke opprette match: "+i.error)}async function Ft(){const t=f("match-id-search").trim();if(!t){alert("Skriv inn et match-ID");return}const i=await vt(t);i.success?(alert(`Match funnet: ${i.match.name} (ID: ${i.match.id})`),l("match-id-search").value=""):alert(`Fant ingen match med ID ${t}${i.error?": "+i.error:""}`)}function Bt(t){x=t;const i=y.find(e=>e.id==t);if(i){const e=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const o=l(a);o&&(o.textContent=e)})}Y&&Y(),t&&(Y=ht(t,e=>{const s=y.findIndex(a=>a.id==t);s!==-1&&e&&(y[s]=e,D(),se())})),D(),se(),de()}function Dt(){const t=y.find(s=>s.id==x);if(!t){alert("Ingen match valgt");return}l("edit-match-name").value=t.name||"",l("edit-match-type").value=t.type||"Trening",l("edit-match-date").value=t.date||"",l("edit-match-location").value=t.location||"",l("edit-match-stages").value=t.plannedStages||0,l("edit-match-searchable")&&(l("edit-match-searchable").checked=t.searchable!==!1),l("edit-match-finished")&&(l("edit-match-finished").checked=t.status==="finished"),l("edit-match-user-search").value="",l("edit-match-search-results").innerHTML="",K=[];const i=me(),e=l("delete-match-btn");e&&i&&t.ownerId===i.uid?e.style.display="block":e&&(e.style.display="none"),R("modal-edit-match")}async function Rt(){var s,a;const t=y.find(o=>o.id==x);if(!t){alert("Ingen match valgt");return}const i={name:f("edit-match-name")||t.name,type:f("edit-match-type")||t.type,date:f("edit-match-date")||t.date,location:f("edit-match-location")||t.location,plannedStages:S("edit-match-stages",t.plannedStages),searchable:((s=l("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=l("edit-match-finished"))!=null&&a.checked?"finished":"active"},e=await le(t.id,i);if(e.success){let o=0;for(const r of K)(await he(r.email,{matchId:t.id,matchName:i.name})).success&&o++;I("modal-edit-match"),o>0&&alert(`Match oppdatert! Invitasjoner sendt til ${o} bruker(e).`)}else alert("Kunne ikke oppdatere match: "+e.error)}function At(){const t=y.find(e=>e.id==x);if(!t){alert("Ingen match valgt");return}const i=t.id?"Match ID "+t.id+" "+t.name:t.name;l("delete-match-name").textContent=i,R("modal-confirm-delete")}async function jt(){const t=y.find(e=>e.id==x);if(!t){alert("Ingen match valgt");return}const i=await gt(t.id);i.success?(I("modal-confirm-delete"),I("modal-edit-match"),x=null,D(),q(),alert("Match slettet")):alert("Kunne ikke slette match: "+i.error)}let ie=null;function be(){var i;const t=y.find(e=>e.id==x);if(!t){alert("Ingen match valgt");return}ie=null,l("stage-modal-title").textContent=n("create_stage"),l("stage-number").value=(((i=t.stages)==null?void 0:i.length)||0)+1,l("stage-name").value="",l("stage-paper-targets").value=0,l("stage-poppers").value=0,l("stage-plates").value=0,l("stage-no-shoots").value=0,l("stage-bonus-paper-targets").value=0,l("stage-bonus-included").checked=!1,R("modal-create-stage")}function Ot(){I("modal-edit-match"),be()}function Ut(){I("modal-new-match"),be()}function Ht(t){const i=y.find(s=>s.id==x);if(!i||!i.stages||!i.stages[t]){alert("Stage ikke funnet");return}ie=t;const e=i.stages[t];l("stage-modal-title").textContent=n("edit_stage"),l("stage-number").value=e.number||t+1,l("stage-name").value=e.name||"",l("stage-paper-targets").value=e.paperTargets||0,l("stage-poppers").value=e.poppers||0,l("stage-plates").value=e.plates||0,l("stage-no-shoots").value=e.noShoots||0,l("stage-bonus-paper-targets").value=e.bonusPaperTargets||0,l("stage-bonus-included").checked=e.bonusIncluded||!1,R("modal-create-stage")}function zt(t){const i=l("stage-number"),e=Math.max(1,parseInt(i.value)+t);i.value=e}function Vt(t,i){const e=l("stage-"+t),s=Math.max(0,parseInt(e.value)+i);e.value=s}async function Gt(){var a;const t=y.find(o=>o.id==x);if(!t){alert("Ingen match valgt");return}const i={number:S("stage-number",1),name:f("stage-name")||"",paperTargets:S("stage-paper-targets",0),poppers:S("stage-poppers",0),plates:S("stage-plates",0),noShoots:S("stage-no-shoots",0),bonusPaperTargets:S("stage-bonus-paper-targets",0),bonusIncluded:((a=l("stage-bonus-included"))==null?void 0:a.checked)||!1},e=t.stages||[];ie!==null?e[ie]=i:e.push(i);const s=await le(t.id,{stages:e});s.success?I("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let F=[],C=[],G=[],K=[];function Kt(){if(!x){alert("Ingen match valgt");return}C=[],l("user-search-input").value="",l("user-search-results").innerHTML="",l("send-invitations-btn").style.display="none",R("modal-invite-user")}async function qt(){const t=f("user-search-input").trim();if(t.length===0){l("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await fe(t),e=l("user-search-results");if(!e)return;if(i.length===0){e.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const o=a.displayName||a.email,r=C.some(g=>g.uid===a.uid),p=o.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${p}')" style="width:18px;height:18px;">
        <div>
          <div style="font-weight:600;">${o}</div>
          <div style="font-size:14px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s,Ne()}function Jt(t,i,e){const s=C.findIndex(a=>a.uid===t);s>-1?C.splice(s,1):C.push({uid:t,email:i,displayName:e}),Ne()}function Ne(){const t=l("send-invitations-btn");t&&(C.length>0?(t.style.display="block",t.textContent=`Send invitasjoner (${C.length} valgt)`):t.style.display="none")}async function Wt(){if(C.length===0){alert("Ingen brukere valgt");return}const t=y.find(s=>s.id==x);if(!t)return;let i=0,e=0;for(const s of C)(await he(s.email,{matchId:t.id,matchName:t.name})).success?i++:e++;I("modal-invite-user"),i>0&&alert(`Invitasjoner sendt til ${i} bruker(e)!`),e>0&&alert(`${e} invitasjon(er) feilet.`),C=[]}async function Yt(){const t=f("new-match-user-search").trim();if(t.length===0){l("new-match-search-results").innerHTML="";return}const i=await fe(t),e=l("new-match-search-results");if(!e)return;if(i.length===0){e.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const o=a.displayName||a.email,r=G.some(g=>g.uid===a.uid),p=o.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${p}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${o}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s}function Qt(t,i,e){const s=G.findIndex(a=>a.uid===t);s>-1?G.splice(s,1):G.push({uid:t,email:i,displayName:e})}async function Zt(){console.log("🔍 searchUsersEditMatch called");const t=f("edit-match-user-search").trim();if(console.log("📝 Search term:",t),t.length===0){console.log("⚠️ Empty search term"),l("edit-match-search-results").innerHTML="";return}console.log("🌐 Calling searchUsersByNameOrEmail...");const i=await fe(t);console.log("✅ Results received:",i);const e=l("edit-match-search-results");if(!e){console.error("❌ Container not found: edit-match-search-results");return}if(i.length===0){console.log("⚠️ No users found"),e.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}console.log("🎨 Rendering",i.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const o=a.displayName||a.email,r=K.some(g=>g.uid===a.uid),p=o.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${p}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${o}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),e.innerHTML=s,console.log("✅ HTML rendered to container")}function Xt(t,i,e){const s=K.findIndex(a=>a.uid===t);s>-1?K.splice(s,1):K.push({uid:t,email:i,displayName:e})}function ei(){ye(),R("modal-invitations")}function ye(){const t=l("invitations-list");if(!t)return;if(!F||F.length===0){t.innerHTML='<div class="empty-state"><div class="empty-sub">'+n("no_invitations")+"</div></div>";return}let i="";F.forEach((e,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+n("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+e.matchId+" "+e.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+e.invitedBy+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+n("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+n("decline")+"</button>",i+="</div>",i+="</div>"}),t.innerHTML=i}async function ti(t){const i=F[t];if(!i)return;const e=await ft(i.matchId);e.success?(F.splice(t,1),we(),ye()):alert("Kunne ikke akseptere invitasjon: "+e.error)}async function ii(t){const i=F[t];if(!i)return;const e=await bt(i.matchId);e.success?(F.splice(t,1),we(),ye()):alert("Kunne ikke avvise invitasjon: "+e.error)}function we(){const t=l("invitation-badge");if(!t)return;const i=F.length;i>0?(t.textContent=i,t.style.display="flex"):t.style.display="none"}function D(){var a,o;const t=l("home-content");if(!t)return;const i=y.find(r=>r.id==x);if(!i){t.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let e="";e+='<div class="card">',e+='<div class="mhc-name">'+i.name+"</div>",e+='<div class="mhc-meta">'+Ce(i.date)+" · "+i.type+"</div>",e+='<div class="mhc-stats">',e+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',e+='<div><div class="mhc-val">'+(((o=i.shooters)==null?void 0:o.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',e+="</div>",e+='<div style="display:flex;gap:10px;margin-top:15px;">',e+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',e+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',e+="</div>",e+='<div style="margin-top:10px;">',e+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',e+="</div>";const s=me();s&&i.ownerId===s.uid&&(e+='<div style="margin-top:10px;">',e+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',e+="</div>"),e+="</div>",i.stages&&i.stages.length>0&&(e+='<div class="section-title">Stages</div>',e+='<div class="card">',i.stages.forEach((r,p)=>{e+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+p+')">',e+='<div class="stage-num">S'+(r.number||p+1)+"</div>",e+='<div class="stage-info">',e+='<div class="stage-name">'+(r.name||"Stage "+(r.number||p+1))+"</div>",e+='<div class="stage-meta">',r.paperTargets&&(e+="Paper: "+r.paperTargets+" "),r.poppers&&(e+="Poppers: "+r.poppers+" "),r.plates&&(e+="Plates: "+r.plates+" "),r.noShoots&&(e+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(e+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),e+="</div>",e+="</div>",e+="</div>"}),e+="</div>"),t.innerHTML=e}function q(){const t=l("match-list-container");if(!t)return;let i=y.filter(s=>{if(z==="all")return!0;if(z==="active")return s.status!=="finished";if(z==="trening")return s.type==="Trening";if(z==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return z===a});if(i.length===0){t.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let e="";i.forEach(s=>{var r;const a=s.id===x,o=s.id?"Match ID "+s.id+" "+s.name:s.name;e+='<div class="match-row">',e+='<div class="match-row-icon'+(a?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,e+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,e+='<div class="match-row-name">'+o+"</div>",e+='<div class="match-row-meta">'+Ce(s.date)+" · "+(s.location||s.type)+"</div>",e+="</div>",e+='<div class="match-row-right">',e+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,e+='<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>",e+='<div class="match-stg-lbl">stages</div>',e+="</div>",e+="</div>"}),t.innerHTML=e}function se(){var o;const t=l("results-content");if(!t)return;const i=y.find(r=>r.id===x);if(!i){t.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!i.shooters||i.shooters.length===0){t.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let e='<div class="card">';e+='<div class="card-header"><div class="card-title">Standings</div></div>',e+='<div class="standings-table-wrap"><table class="standings-table">',e+='<thead><tr class="standings-header-row">',e+='<th class="standings-th standings-th-rank">#</th>',e+='<th class="standings-th standings-th-shooter">Skytter</th>',e+='<th class="standings-th standings-th-pts">Pts</th>',e+='<th class="standings-th standings-th-pct">%</th>',e+="</tr></thead>",e+="<tbody>";const s=i.shooters.map(r=>{var g;const p=((g=r.stages)==null?void 0:g.reduce((u,v)=>u+(v.pts||0),0))||0;return{...r,totalPts:p}}).sort((r,p)=>p.totalPts-r.totalPts),a=((o=s[0])==null?void 0:o.totalPts)||0;s.forEach((r,p)=>{const g=a>0?(r.totalPts/a*100).toFixed(2):"0.00";e+='<tr class="standings-row">',e+='<td class="standings-td standings-td-rank">'+(p+1)+"</td>",e+='<td class="standings-td standings-td-shooter">',e+='<div class="standings-shooter-name">'+r.firstName+" "+r.lastName+"</div>",e+='<div class="standings-shooter-meta">'+r.division+" · "+V(r.pf||"minor")+"</div>",e+="</td>",e+='<td class="standings-td standings-td-pts">'+r.totalPts.toFixed(2)+"</td>",e+='<td class="standings-td standings-td-pct">'+g+"%</td>",e+="</tr>"}),e+="</tbody></table></div>",e+="</div>",t.innerHTML=e}function $e(){const t=O();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(p=>{const g=l(p);g&&(g.textContent=t)});const e=l("prof-name");e&&(e.textContent=(d.firstName||"")+" "+(d.lastName||""));const s=l("prof-div");s&&(s.textContent=(d.division||"—")+" · "+(d.club||"—"));const a=l("prof-badge-pf");a&&(a.textContent=d.powerFactor?V(d.powerFactor):"—");const o=l("prof-badge-region");o&&(o.textContent=d.region||"—");const r={"info-firstname":d.firstName||"—","info-lastname":d.lastName||"—","info-division":d.division||"—","info-category":d.category||"—","info-pf":d.powerFactor?V(d.powerFactor):"—","info-region":d.region||"—","info-club":d.club||"—"};Object.keys(r).forEach(p=>{const g=l(p);g&&(g.textContent=r[p])}),Fe()}function Fe(){const t=[];y.forEach(h=>{h.stages&&h.stages.forEach(T=>t.push(T))});let i=0,e=0,s=0;t.forEach(h=>{i+=h.a||0,e+=(h.a||0)+(h.c||0)+(h.d||0),s+=h.hf||0});const a=t.length?(s/t.length).toFixed(2):"—",o=e?Math.round(i/e*100)+"%":"—",r=l("stat-matches");r&&(r.textContent=y.length);const p=l("stat-stages");p&&(p.textContent=t.length);const g=l("stat-avg-hf");g&&(g.textContent=a);const u=l("stat-a-rate");u&&(u.textContent=o);const v=l("prog-a-rate");v&&(v.textContent=o)}function si(){l("edit-firstname").value=d.firstName||"",l("edit-lastname").value=d.lastName||"",l("edit-club").value=d.club||"",l("edit-draw").value=d.draw||"",l("edit-reload").value=d.reloadTime||"";let t="";xt.forEach(s=>{t+='<option value="'+s+'"'+(s===d.division?" selected":"")+">"+s+"</option>"}),l("edit-division").innerHTML=t;let i="";Pt.forEach(s=>{i+='<option value="'+s+'"'+(s===d.category?" selected":"")+">"+s+"</option>"}),l("edit-category").innerHTML=i;let e="";Lt.forEach(s=>{e+='<option value="'+s+'"'+(s===d.region?" selected":"")+">"+s+"</option>"}),l("edit-region").innerHTML=e,Be(),R("modal-edit-profile")}function Be(){const t=f("edit-division"),i=St[t]||["minor","major"];let e="";i.forEach(s=>{const a=d.powerFactor===s;e+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,e+='<input type="radio" name="pf" value="'+s+'">',e+='<div class="pf-label">'+s.toUpperCase()+"</div>",e+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",e+="</label>"}),l("pf-options").innerHTML=e,i.indexOf(d.powerFactor)<0&&(d.powerFactor=i[0])}function ai(t,i){document.querySelectorAll(".pf-option").forEach(e=>e.classList.remove("active")),t.classList.add("active"),d.powerFactor=i}async function ni(){d.firstName=f("edit-firstname").trim()||"",d.lastName=f("edit-lastname").trim()||"",d.division=f("edit-division")||"",d.category=f("edit-category")||"",d.region=f("edit-region")||"",d.club=f("edit-club").trim()||"",d.draw=Q("edit-draw")||null,d.reloadTime=Q("edit-reload")||null;const t=await lt(d),i=l("save-profile-btn");t.success?(i.textContent="✓ Lagret!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=n("save_profile"),i.style.background=""},1800)):(i.textContent="❌ Feil!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=n("save_profile"),i.style.background=""},1800)),$e(),de(),D(),I("modal-edit-profile")}function de(){const t=S("prog-shots",12),i=S("prog-targets",6),e=S("prog-steel",2),s=Q("prog-move",3),a=Q("prog-draw",d.draw||1.42),o=d.division||"Classic",r=d.powerFactor||"minor",p=_e(t,o,r);l("prog-reloads").value=p;const g=d.reloadTime||1.8,u=It();let v=.18,h="—";u&&u.avgSplit&&(v=u.avgSplit,u.aPercent!==void 0&&(h=(u.aPercent*100).toFixed(0)+"%")),l("prog-split-display")&&(l("prog-split-display").textContent=v.toFixed(3)+"s");const T=l("prog-a-rate");T&&(T.textContent=h);const P=a+t*v+p*g+s;let _=i*10+e*10;if(u&&u.aPercent!==void 0){const N=i*2+e,E=Ee[r]||Ee.minor;_=N*u.aPercent*E.A+N*u.cPercent*E.C+N*u.dPercent*E.D+N*u.missPercent*E.miss}const A=P>0?_/P:0;l("prog-hf-out").textContent=A.toFixed(2);let b="";b+='<div class="prog-breakdown-detail">',b+="Trekk: "+a.toFixed(2)+"s · ",b+="Skudd: "+(t*v).toFixed(2)+"s · ",b+="Reload: "+(p*g).toFixed(2)+"s · ",b+="Beveg: "+s.toFixed(2)+"s",b+="</div>",u?(b+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',b+="Basert på "+u.completedStages+" av "+u.totalStages+" stages",u.aPercent!==void 0?b+=" (t/skudd: "+v.toFixed(3)+"s, "+(u.aPercent*100).toFixed(0)+"%A)":b+=" (t/skudd: "+v.toFixed(3)+"s)",b+="</div>"):(b+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',b+="Ingen data ennå - bruker standard 0.18s split",b+="</div>"),l("prog-breakdown").innerHTML=b}async function ri(){const t=y.find(o=>o.id===x);if(!t)return;const i=f("new-shooter-firstname").trim(),e=f("new-shooter-lastname").trim(),s=f("new-shooter-division")||"Classic";if(!i||!e){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:e,division:s,pf:"minor",club:"",stages:[]};t.shooters||(t.shooters=[]),t.shooters.push(a),await le(t.id,t),I("modal-add-shooter"),se()}async function oi(){const t=y.find(v=>v.id===x);if(!t)return;const i=S("new-result-stage",1),e=Q("new-result-time",0),s=S("new-result-points",0),a=S("new-result-a",0),o=S("new-result-c",0),r=S("new-result-d",0),p=S("new-result-miss",0),g=e>0?s/e:0,u={num:i,name:"Stage "+i,hf:g,time:e,pts:s,pf:d.powerFactor||"minor",a,c:o,d:r,miss:p};t.stages||(t.stages=[]),t.stages.push(u),await le(t.id,t),I("modal-add"),D()}async function li(){W&&W(),Y&&Y(),await it(),window.location.reload()}const De=document.getElementById("app");function di(){ot(De,Re)}function Re(){Mt(De)}Xe(t=>{t?Re():di()});
