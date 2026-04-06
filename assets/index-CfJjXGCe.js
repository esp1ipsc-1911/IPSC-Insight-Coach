import{initializeApp as ht}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as ft,onAuthStateChanged as bt,signInWithEmailAndPassword as yt,createUserWithEmailAndPassword as wt,signOut as kt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as xt,getDoc as xe,doc as z,setDoc as Ce,query as _e,collection as Se,where as Ne,getDocs as je,onSnapshot as Ue,serverTimestamp as Te,updateDoc as de,arrayUnion as it,deleteDoc as St}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Lt,httpsCallable as Pt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();const Et={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},st=ht(Et),$e=ft(st),O=xt(st),Tt=Lt();let Oe=null,oe=null;function It(e){bt($e,async t=>{if(t){Oe=t;try{const i=await xe(z(O,"users",t.uid));i.exists()?oe={uid:t.uid,...i.data()}:oe={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},e(oe)}catch(i){console.error("Feil ved lasting av brukerprofil:",i),oe={uid:t.uid,email:t.email,name:t.email?t.email.split("@")[0]:"Bruker",role:"user"},e(oe)}}else Oe=null,oe=null,e(null)})}async function Mt(e,t){try{const i=(e||"").trim();return{success:!0,user:(await yt($e,i,t||"")).user}}catch(i){console.error("Innlogging feilet:",i);let s="Innlogging feilet";return i.code==="auth/user-not-found"||i.code==="auth/wrong-password"||i.code==="auth/invalid-credential"?s="Feil e-post eller passord":i.code==="auth/invalid-email"?s="Ugyldig e-postadresse":i.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function Ct(e,t,i,s,a,n,r,v,h,y){try{const f=(e||"").trim(),g=t||"",m=(i||"").trim(),E=(s||"").trim(),I=(a||"").trim(),P=(n||"").trim(),F=(r||"").trim(),S=(v||"minor").trim(),M=(h||"").trim(),D=(y||"").trim(),A=(await wt($e,f,g)).user,K=Pt(Tt,"validateInviteCode");try{await K({code:m,userId:A.uid,userEmail:f})}catch(_){await A.delete();let x="Ugyldig invitasjonskode";return _.code==="functions/not-found"?x="Ugyldig invitasjonskode":_.code==="functions/permission-denied"?x="Denne koden er deaktivert":_.code==="functions/resource-exhausted"?x="Denne koden har nådd maksimalt antall bruk":_.code==="functions/already-exists"?x="Du har allerede brukt denne koden":_.message&&(x=_.message),{success:!1,error:x}}return await Ce(z(O,"users",A.uid),{email:f,firstName:E,lastName:I,division:P,category:F,powerFactor:S,region:M,club:D,role:"user",inviteCode:m,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:A}}catch(f){console.error("Registrering feilet:",f);let g="Registrering feilet";return f.code==="auth/email-already-in-use"?g="E-postadressen er allerede i bruk":f.code==="auth/weak-password"?g="Passordet må være minst 6 tegn":f.code==="auth/invalid-email"?g="Ugyldig e-postadresse":f.message&&(g=f.message),{success:!1,error:g}}}async function _t(){try{return await kt($e),{success:!0}}catch(e){return console.error("Utlogging feilet:",e),{success:!1,error:"Kunne ikke logge ut"}}}function W(){return Oe}function He(){return oe}const Nt=`
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
`;function $t(e,t){const i=document.getElementById("gdpr-modal");i&&i.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
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
  `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),n=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),v=s.querySelector(".gdpr-modal-overlay"),h=()=>{s.remove()};a.addEventListener("click",()=>{h(),t&&t()}),v.addEventListener("click",()=>{h(),t&&t()}),r.addEventListener("click",()=>{h(),t&&t()}),n.addEventListener("click",()=>{h(),e&&e()}),document.body.style.overflow="hidden";const y=h,f=()=>{document.body.style.overflow="",y()};a.onclick=()=>{f(),t&&t()},v.onclick=()=>{f(),t&&t()},r.onclick=()=>{f(),t&&t()},n.onclick=()=>{f(),e&&e()}}function Ft(){const e=document.createElement("div");return e.className="gdpr-checkbox-container",e.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const t=e.querySelector("#gdpr-open-modal");t&&t.addEventListener("click",i=>{i.preventDefault(),$t(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),e}function At(){const e=document.getElementById("gdpr-consent-checkbox");return!e||!e.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Rt(e,t){e.innerHTML=`
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
  `;const i={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),v=document.getElementById("registerSection"),h=document.getElementById("showRegisterBtn"),y=document.getElementById("cancelRegisterBtn"),f=document.getElementById("loginBtn"),g=document.getElementById("registerBtn"),m=document.getElementById("langNo"),E=document.getElementById("langEn"),I=document.getElementById("registerPassword"),P=document.getElementById("passwordStrengthBar"),F=document.getElementById("passwordStrengthText"),S=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");S.onclick=()=>{a="minor",S.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),S.classList.remove("selected")};function D(x){let b=0;return x?(x.length>=8&&(b+=1),x.length>=12&&(b+=1),/[a-z]/.test(x)&&/[A-Z]/.test(x)&&(b+=1),/\d/.test(x)&&(b+=1),/[^A-Za-z0-9]/.test(x)&&(b+=1),b<=1?{score:b,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:b===2?{score:b,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:b===3?{score:b,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:b===4?{score:b,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:b,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function j(){const x=i[s],b=I.value,U=D(b);P.style.width=U.width,P.style.background=U.color,F.innerText=x[U.labelKey]}function A(x){s=x;const b=i[x];document.getElementById("brandSubtitle").innerText=b.subtitle,document.getElementById("loginEmailLabel").innerText=b.loginEmailLabel,document.getElementById("loginEmail").placeholder=b.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=b.loginPasswordLabel,document.getElementById("loginPassword").placeholder=b.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=b.login,document.getElementById("separatorText").innerText=b.or,document.getElementById("showRegisterBtn").innerText=b.showRegister,document.getElementById("registerFirstNameLabel").innerText=b.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=b.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=b.registerLastNameLabel,document.getElementById("registerLastName").placeholder=b.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=b.registerEmailLabel,document.getElementById("registerEmail").placeholder=b.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=b.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=b.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=b.registerPasswordLabel,document.getElementById("registerPassword").placeholder=b.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=b.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=b.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=b.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=b.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=b.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=b.registerRegionLabel,document.getElementById("registerClubLabel").innerText=b.registerClubLabel,document.getElementById("registerCodeLabel").innerText=b.registerCodeLabel,document.getElementById("registerCode").placeholder=b.registerCodePlaceholder,document.getElementById("registerBtn").innerText=b.register,document.getElementById("cancelRegisterBtn").innerText=b.cancel,m.classList.toggle("active",x==="no"),E.classList.toggle("active",x==="en"),j()}function K(){r.classList.remove("active"),v.classList.add("active"),n.innerText="";const x=document.getElementById("gdprCheckboxContainer");if(x&&!x.hasChildNodes()){const b=Ft();x.appendChild(b)}}function _(){v.classList.remove("active"),r.classList.add("active"),n.innerText=""}m.onclick=()=>A("no"),E.onclick=()=>A("en"),h.onclick=K,y.onclick=_,I.oninput=j,f.onclick=async()=>{n.innerText="";const x=document.getElementById("loginEmail").value.trim(),b=document.getElementById("loginPassword").value,U=await Mt(x,b);U.success?t():n.innerText=U.error},g.onclick=async()=>{n.innerText="";const x=i[s],b=document.getElementById("registerFirstName").value.trim(),U=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,L=document.getElementById("registerRegion").value,T=document.getElementById("registerClub").value.trim(),c=document.getElementById("registerCode").value.trim();if(!b||!U){n.innerText=x.missingName;return}if(!Y||!ce||!X||!pe||!c){n.innerText=x.missingFields;return}if(!se){n.innerText=x.missingDivision;return}if(Y!==ce){n.innerText=x.emailMismatch;return}if(X!==pe){n.innerText=x.passwordMismatch;return}if(D(X).score<=1){n.innerText=x.weakPassword;return}if(!At().valid){n.innerText=x.gdprRequired;return}const p=await Ct(Y,X,c,b,U,se,ae,a,L,T);p.success?t():n.innerText=p.error},A("no"),j()}async function Bt(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{return await de(z(O,"users",t.uid),{...e,updatedAt:Te()}),{success:!0}}catch(i){return console.error("Save profile error:",i),{success:!1,error:i.message}}}async function Ot(){const e=W();if(!e)return null;try{const t=await xe(z(O,"users",e.uid));return t.exists()?{uid:e.uid,...t.data()}:null}catch(t){return console.error("Get profile error:",t),null}}async function Dt(){const e=z(O,"counters","matchId");try{const t=await xe(e);if(!t.exists())return await Ce(e,{value:1}),1;const s=t.data().value+1;return await de(e,{value:s}),s}catch(t){throw console.error("Error getting next match ID:",t),t}}async function jt(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{const i=await Dt(),s={id:i,...e,searchable:e.searchable!==!1,ownerId:t.uid,participants:[t.uid],createdAt:Te(),updatedAt:Te()};return await Ce(z(O,"matches",i.toString()),s),{success:!0,matchId:i}}catch(i){return console.error("Create match error:",i),{success:!1,error:i.message}}}async function Le(e,t){if(!W())return{success:!1,error:"Not authenticated"};try{return await de(z(O,"matches",e.toString()),{...t,updatedAt:Te()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Ut(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{const i=await xe(z(O,"matches",e.toString()));return i.exists()?i.data().ownerId!==t.uid?{success:!1,error:"Only the creator can delete this match"}:(await St(z(O,"matches",e.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(i){return console.error("Delete match error:",i),{success:!1,error:i.message}}}async function Ht(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{const i=await xe(z(O,"matches",e.toString()));if(!i.exists())return{success:!1,error:"Match not found"};const s={id:i.id,...i.data()};return s.searchable?(s.participants.includes(t.uid)||await de(z(O,"matches",e.toString()),{participants:it(t.uid)}),{success:!0,match:s}):{success:!1,error:"Match is not searchable"}}catch(i){return console.error("Search match error:",i),{success:!1,error:i.message}}}async function zt(){const e=W();if(!e)return[];try{const t=_e(Se(O,"matches"),Ne("participants","array-contains",e.uid)),i=await je(t),s=[];return i.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,n)=>{var h,y;const r=a.date||((h=a.createdAt)==null?void 0:h.toDate())||new Date(0);return(n.date||((y=n.createdAt)==null?void 0:y.toDate())||new Date(0))-r}),s}catch(t){return console.error("Get user matches error:",t),[]}}function Gt(e){const t=W();if(!t)return()=>{};const i=_e(Se(O,"matches"),Ne("participants","array-contains",t.uid));return Ue(i,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),n.sort((r,v)=>{var f,g;const h=r.date||((f=r.createdAt)==null?void 0:f.toDate())||new Date(0);return(v.date||((g=v.createdAt)==null?void 0:g.toDate())||new Date(0))-h}),e(n)},a=>{console.error("Listen to matches error:",a)})}function Kt(e,t){return Ue(z(O,"matches",e.toString()),s=>{s.exists()?t({id:s.id,...s.data()}):t(null)},s=>{console.error("Listen to match error:",s)})}async function ze(e,t){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",e);const s=_e(Se(O,"users"),Ne("email","==",e)),a=await je(s);if(a.empty)return console.error("❌ Bruker ikke funnet:",e),{success:!1,error:"Bruker ikke funnet"};const n=a.docs[0],r=n.id;return console.log("✅ Bruker funnet:",r,n.data()),console.log("📨 Sender invitasjon..."),await Ce(z(O,"users",r,"invitations",t.matchId.toString()),{matchId:t.matchId,matchName:t.matchName,invitedBy:i.email,invitedByUid:i.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function Ge(e){const t=W();if(!t)return[];try{const i=e.toLowerCase().trim();if(i.length===0)return[];console.log("🔍 Søker etter brukere:",i);const s=await je(Se(O,"users")),a=[];return s.forEach(n=>{const r=n.data(),v=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),h=(r.email||"").toLowerCase();n.id!==t.uid&&(v.includes(i)||h.includes(i))&&a.push({uid:n.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(`✅ Fant ${a.length} brukere`),a}catch(i){return console.error("❌ Search users error:",i),[]}}async function Vt(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{return await de(z(O,"matches",e.toString()),{participants:it(t.uid)}),await de(z(O,"users",t.uid,"invitations",e.toString()),{status:"accepted"}),{success:!0}}catch(i){return console.error("Accept invitation error:",i),{success:!1,error:i.message}}}async function qt(e){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{return await de(z(O,"users",t.uid,"invitations",e.toString()),{status:"declined"}),{success:!0}}catch(i){return console.error("Decline invitation error:",i),{success:!1,error:i.message}}}function Wt(e){const t=W();if(!t)return()=>{};const i=Se(O,"users",t.uid,"invitations"),s=_e(i,Ne("status","==","pending"));return Ue(s,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),e(n)})}function Jt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Yt={exports:{}};(function(e){var t=function(i){var s=Object.prototype,a=s.hasOwnProperty,n=Object.defineProperty||function(c,o,p){c[o]=p.value},r,v=typeof Symbol=="function"?Symbol:{},h=v.iterator||"@@iterator",y=v.asyncIterator||"@@asyncIterator",f=v.toStringTag||"@@toStringTag";function g(c,o,p){return Object.defineProperty(c,o,{value:p,enumerable:!0,configurable:!0,writable:!0}),c[o]}try{g({},"")}catch{g=function(o,p,k){return o[p]=k}}function m(c,o,p,k){var w=o&&o.prototype instanceof D?o:D,C=Object.create(w.prototype),H=new ae(k||[]);return n(C,"_invoke",{value:ce(c,p,H)}),C}i.wrap=m;function E(c,o,p){try{return{type:"normal",arg:c.call(o,p)}}catch(k){return{type:"throw",arg:k}}}var I="suspendedStart",P="suspendedYield",F="executing",S="completed",M={};function D(){}function j(){}function A(){}var K={};g(K,h,function(){return this});var _=Object.getPrototypeOf,x=_&&_(_(L([])));x&&x!==s&&a.call(x,h)&&(K=x);var b=A.prototype=D.prototype=Object.create(K);j.prototype=A,n(b,"constructor",{value:A,configurable:!0}),n(A,"constructor",{value:j,configurable:!0}),j.displayName=g(A,f,"GeneratorFunction");function U(c){["next","throw","return"].forEach(function(o){g(c,o,function(p){return this._invoke(o,p)})})}i.isGeneratorFunction=function(c){var o=typeof c=="function"&&c.constructor;return o?o===j||(o.displayName||o.name)==="GeneratorFunction":!1},i.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,A):(c.__proto__=A,g(c,f,"GeneratorFunction")),c.prototype=Object.create(b),c},i.awrap=function(c){return{__await:c}};function Y(c,o){function p(C,H,V,J){var q=E(c[C],c,H);if(q.type==="throw")J(q.arg);else{var Re=q.arg,ye=Re.value;return ye&&typeof ye=="object"&&a.call(ye,"__await")?o.resolve(ye.__await).then(function(ne){p("next",ne,V,J)},function(ne){p("throw",ne,V,J)}):o.resolve(ye).then(function(ne){Re.value=ne,V(Re)},function(ne){return p("throw",ne,V,J)})}}var k;function w(C,H){function V(){return new o(function(J,q){p(C,H,J,q)})}return k=k?k.then(V,V):V()}n(this,"_invoke",{value:w})}U(Y.prototype),g(Y.prototype,y,function(){return this}),i.AsyncIterator=Y,i.async=function(c,o,p,k,w){w===void 0&&(w=Promise);var C=new Y(m(c,o,p,k),w);return i.isGeneratorFunction(o)?C:C.next().then(function(H){return H.done?H.value:C.next()})};function ce(c,o,p){var k=I;return function(C,H){if(k===F)throw new Error("Generator is already running");if(k===S){if(C==="throw")throw H;return T()}for(p.method=C,p.arg=H;;){var V=p.delegate;if(V){var J=X(V,p);if(J){if(J===M)continue;return J}}if(p.method==="next")p.sent=p._sent=p.arg;else if(p.method==="throw"){if(k===I)throw k=S,p.arg;p.dispatchException(p.arg)}else p.method==="return"&&p.abrupt("return",p.arg);k=F;var q=E(c,o,p);if(q.type==="normal"){if(k=p.done?S:P,q.arg===M)continue;return{value:q.arg,done:p.done}}else q.type==="throw"&&(k=S,p.method="throw",p.arg=q.arg)}}}function X(c,o){var p=o.method,k=c.iterator[p];if(k===r)return o.delegate=null,p==="throw"&&c.iterator.return&&(o.method="return",o.arg=r,X(c,o),o.method==="throw")||p!=="return"&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+p+"' method")),M;var w=E(k,c.iterator,o.arg);if(w.type==="throw")return o.method="throw",o.arg=w.arg,o.delegate=null,M;var C=w.arg;if(!C)return o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,M;if(C.done)o[c.resultName]=C.value,o.next=c.nextLoc,o.method!=="return"&&(o.method="next",o.arg=r);else return C;return o.delegate=null,M}U(b),g(b,f,"Generator"),g(b,h,function(){return this}),g(b,"toString",function(){return"[object Generator]"});function pe(c){var o={tryLoc:c[0]};1 in c&&(o.catchLoc=c[1]),2 in c&&(o.finallyLoc=c[2],o.afterLoc=c[3]),this.tryEntries.push(o)}function se(c){var o=c.completion||{};o.type="normal",delete o.arg,c.completion=o}function ae(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(pe,this),this.reset(!0)}i.keys=function(c){var o=Object(c),p=[];for(var k in o)p.push(k);return p.reverse(),function w(){for(;p.length;){var C=p.pop();if(C in o)return w.value=C,w.done=!1,w}return w.done=!0,w}};function L(c){if(c){var o=c[h];if(o)return o.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var p=-1,k=function w(){for(;++p<c.length;)if(a.call(c,p))return w.value=c[p],w.done=!1,w;return w.value=r,w.done=!0,w};return k.next=k}}return{next:T}}i.values=L;function T(){return{value:r,done:!0}}return ae.prototype={constructor:ae,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(se),!c)for(var o in this)o.charAt(0)==="t"&&a.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=r)},stop:function(){this.done=!0;var c=this.tryEntries[0],o=c.completion;if(o.type==="throw")throw o.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var o=this;function p(J,q){return C.type="throw",C.arg=c,o.next=J,q&&(o.method="next",o.arg=r),!!q}for(var k=this.tryEntries.length-1;k>=0;--k){var w=this.tryEntries[k],C=w.completion;if(w.tryLoc==="root")return p("end");if(w.tryLoc<=this.prev){var H=a.call(w,"catchLoc"),V=a.call(w,"finallyLoc");if(H&&V){if(this.prev<w.catchLoc)return p(w.catchLoc,!0);if(this.prev<w.finallyLoc)return p(w.finallyLoc)}else if(H){if(this.prev<w.catchLoc)return p(w.catchLoc,!0)}else if(V){if(this.prev<w.finallyLoc)return p(w.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(c,o){for(var p=this.tryEntries.length-1;p>=0;--p){var k=this.tryEntries[p];if(k.tryLoc<=this.prev&&a.call(k,"finallyLoc")&&this.prev<k.finallyLoc){var w=k;break}}w&&(c==="break"||c==="continue")&&w.tryLoc<=o&&o<=w.finallyLoc&&(w=null);var C=w?w.completion:{};return C.type=c,C.arg=o,w?(this.method="next",this.next=w.finallyLoc,M):this.complete(C)},complete:function(c,o){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&o&&(this.next=o),M},finish:function(c){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.finallyLoc===c)return this.complete(p.completion,p.afterLoc),se(p),M}},catch:function(c){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.tryLoc===c){var k=p.completion;if(k.type==="throw"){var w=k.arg;se(p)}return w}}throw new Error("illegal catch attempt")},delegateYield:function(c,o,p){return this.delegate={iterator:L(c),resultName:o,nextLoc:p},this.method==="next"&&(this.arg=r),M}},i}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(Yt);var Ke=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Zt=Ke;let Ye=0;var at=({id:e,action:t,payload:i={}})=>{let s=e;return typeof s>"u"&&(s=Zt("Job",Ye),Ye+=1),{id:s,action:t,payload:i}},be={};let Ve=!1;be.logging=Ve;be.setLogging=e=>{Ve=e};be.log=(...e)=>Ve?console.log.apply(void 0,e):null;const Qt=at,{log:Pe}=be,Xt=Ke;let Ze=0;var ei=()=>{const e=Xt("Scheduler",Ze),t={},i={};let s=[];Ze+=1;const a=()=>s.length,n=()=>Object.keys(t).length,r=()=>{if(s.length!==0){const g=Object.keys(t);for(let m=0;m<g.length;m+=1)if(typeof i[g[m]]>"u"){s[0](t[g[m]]);break}}},v=(g,m)=>new Promise((E,I)=>{const P=Qt({action:g,payload:m});s.push(async F=>{s.shift(),i[F.id]=P;try{E(await F[g].apply(void 0,[...m,P.id]))}catch(S){I(S)}finally{delete i[F.id],r()}}),Pe(`[${e}]: Add ${P.id} to JobQueue`),Pe(`[${e}]: JobQueue length=${s.length}`),r()});return{addWorker:g=>(t[g.id]=g,Pe(`[${e}]: Add ${g.id}`),Pe(`[${e}]: Number of workers=${n()}`),r(),g.id),addJob:async(g,...m)=>{if(n()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return v(g,m)},terminate:async()=>{Object.keys(t).forEach(async g=>{await t[g].terminate()}),s=[]},getQueueLen:a,getNumWorkers:n}};function ti(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ii=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof ti=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const si=ii("type")==="browser",ai=si?e=>new URL(e,window.location.href).href:e=>e;var ni=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(i=>{e[i]&&(t[i]=ai(t[i]))}),t},nt={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const ri="7.0.0",oi={version:ri};var li={workerBlobURL:!0,logger:()=>{}};const di=oi.version,ci=li;var pi={...ci,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${di}/dist/worker.min.js`},ui=({workerPath:e,workerBlobURL:t})=>{let i;if(Blob&&URL&&t){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(s))}else i=new Worker(e);return i},gi=e=>{e.terminate()},vi=(e,t)=>{e.onmessage=({data:i})=>{t(i)}},mi=async(e,t)=>{e.postMessage(t)};const Be=e=>new Promise((t,i)=>{const s=new FileReader;s.onload=()=>{t(s.result)},s.onerror=({target:{error:{code:a}}})=>{i(Error(`File could not be read! Code=${a}`))},s.readAsArrayBuffer(e)}),De=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(i=>i.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await De(e.src)),e.tagName==="VIDEO"&&(t=await De(e.poster)),e.tagName==="CANVAS"&&await new Promise(i=>{e.toBlob(async s=>{t=await Be(s),i()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const i=await e.convertToBlob();t=await Be(i)}else(e instanceof File||e instanceof Blob)&&(t=await Be(e));return new Uint8Array(t)};var hi=De;const fi=pi,bi=ui,yi=gi,wi=vi,ki=mi,xi=hi;var Si={defaultOptions:fi,spawnWorker:bi,terminateWorker:yi,onMessage:wi,send:ki,loadImage:xi};const Li=ni,Z=at,{log:Qe}=be,Pi=Ke,re=nt,{defaultOptions:Ei,spawnWorker:Ti,terminateWorker:Ii,onMessage:Mi,loadImage:Xe,send:Ci}=Si;let et=0;var rt=async(e="eng",t=re.LSTM_ONLY,i={},s={})=>{const a=Pi("Worker",et),{logger:n,errorHandler:r,...v}=Li({...Ei,...i}),h={},y=typeof e=="string"?e.split("+"):e;let f=t,g=s;const m=[re.DEFAULT,re.LSTM_ONLY].includes(t)&&!v.legacyCore;let E,I;const P=new Promise((L,T)=>{I=L,E=T}),F=L=>{E(L.message)};let S=Ti(v);S.onerror=F,et+=1;const M=({id:L,action:T,payload:c})=>new Promise((o,p)=>{Qe(`[${a}]: Start ${L}, action=${T}`);const k=`${T}-${L}`;h[k]={resolve:o,reject:p},Ci(S,{workerId:a,jobId:L,action:T,payload:c})}),D=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),j=L=>M(Z({id:L,action:"load",payload:{options:{lstmOnly:m,corePath:v.corePath,logging:v.logging}}})),A=(L,T,c)=>M(Z({id:c,action:"FS",payload:{method:"writeFile",args:[L,T]}})),K=(L,T)=>M(Z({id:T,action:"FS",payload:{method:"readFile",args:[L,{encoding:"utf8"}]}})),_=(L,T)=>M(Z({id:T,action:"FS",payload:{method:"unlink",args:[L]}})),x=(L,T,c)=>M(Z({id:c,action:"FS",payload:{method:L,args:T}})),b=(L,T)=>M(Z({id:T,action:"loadLanguage",payload:{langs:L,options:{langPath:v.langPath,dataPath:v.dataPath,cachePath:v.cachePath,cacheMethod:v.cacheMethod,gzip:v.gzip,lstmOnly:[re.DEFAULT,re.LSTM_ONLY].includes(f)&&!v.legacyLang}}})),U=(L,T,c,o)=>M(Z({id:o,action:"initialize",payload:{langs:L,oem:T,config:c}})),Y=(L="eng",T,c,o)=>{if(m&&[re.TESSERACT_ONLY,re.TESSERACT_LSTM_COMBINED].includes(T))throw Error("Legacy model requested but code missing.");const p=T||f;f=p;const k=c||g;g=k;const C=(typeof L=="string"?L.split("+"):L).filter(H=>!y.includes(H));return y.push(...C),C.length>0?b(C,o).then(()=>U(L,p,k,o)):U(L,p,k,o)},ce=(L={},T)=>M(Z({id:T,action:"setParameters",payload:{params:L}})),X=async(L,T={},c={text:!0},o)=>M(Z({id:o,action:"recognize",payload:{image:await Xe(L),options:T,output:c}})),pe=async(L,T)=>{if(m)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return M(Z({id:T,action:"detect",payload:{image:await Xe(L)}}))},se=async()=>(S!==null&&(Ii(S),S=null),Promise.resolve());Mi(S,({workerId:L,jobId:T,status:c,action:o,data:p})=>{const k=`${o}-${T}`;if(c==="resolve")Qe(`[${L}]: Complete ${T}`),h[k].resolve({jobId:T,data:p}),delete h[k];else if(c==="reject")if(h[k].reject(p),delete h[k],o==="load"&&E(p),r)r(p);else throw Error(p);else c==="progress"&&n({...p,userJobId:T})});const ae={id:a,worker:S,load:D,writeText:A,readText:K,removeFile:_,FS:x,reinitialize:Y,setParameters:ce,recognize:X,detect:pe,terminate:se};return j().then(()=>b(e)).then(()=>U(e,t,s)).then(()=>I(ae)).catch(()=>{}),P};const ot=rt,_i=async(e,t,i)=>{const s=await ot(t,1,i);return s.recognize(e).finally(async()=>{await s.terminate()})},Ni=async(e,t)=>{const i=await ot("osd",0,t);return i.detect(e).finally(async()=>{await i.terminate()})};var $i={recognize:_i,detect:Ni},Fi={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Ai={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Ri=ei,Bi=rt,Oi=$i,Di=Fi,ji=nt,Ui=Ai,{setLogging:Hi}=be;var zi={languages:Di,OEM:ji,PSM:Ui,createScheduler:Ri,createWorker:Bi,setLogging:Hi,...Oi};const Gi=Jt(zi);let u,B=null,ue="all",N=[],we=null,ke=null;const Ki={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let lt="no";function d(e){return Ki[lt][e]||e}const tt={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},Vi={Standard:{minor:21,major:21},Open:{minor:29,major:29},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:21,major:21}},qi=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],Wi={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Ji=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Yi=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function Zi(e,t){const i=Vi[e];return i&&(i[t]||i.minor)||15}function qe(e,t,i){return Math.max(0,Math.ceil(e/Zi(t,i))-1)}function Qi(){const e=N.find(I=>I.id==B);if(!e||!e.stages||e.stages.length===0)return null;const t=e.stages.filter(I=>I.time&&I.pts);if(t.length===0)return null;const i=u.division||"Classic",s=u.powerFactor||"minor",a=u.draw||1.42,n=u.reloadTime||1.8;let r=0,v=0,h=0,y=0,f=0,g=0;for(const I of t){const P=(I.paperTargets||0)*2+(I.poppers||0)+(I.plates||0);if(P===0)continue;const F=qe(P,i,s),S=I.time-a-F*n;S>0&&(r+=P,v+=S,h+=I.a||0,y+=I.c||0,f+=I.d||0,g+=I.miss||0)}if(r===0)return null;const m=v/r,E=h+y+f+g;return{avgSplit:m,completedStages:t.length,totalStages:e.stages.length,aPercent:E>0?h/E:0,cPercent:E>0?y/E:0,dPercent:E>0?f/E:0,missPercent:E>0?g/E:0}}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function dt(e){if(!e)return"";try{const t=lt==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(t,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function l(e){return document.getElementById(e)}function $(e){const t=l(e);return t?t.value:""}function he(e,t){const i=parseFloat($(e));return isNaN(i)?t||0:i}function R(e,t){const i=parseInt($(e));return isNaN(i)?t||0:i}function le(){const e=(u==null?void 0:u.firstName)||"",t=(u==null?void 0:u.lastName)||"";return(e.charAt(0)+t.charAt(0)).toUpperCase()||"U"}async function Xi(e){var s;const t=await Ot(),i=He();if(t?u=t:u={firstName:i.name||((s=i.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},N=await zt(),N&&N.length>0){const a=new Date,n=N.filter(r=>r.status!=="finished"&&r.date);if(n.length>0){let r=n[0],v=Math.abs(new Date(n[0].date)-a);for(const h of n){const y=new Date(h.date),f=Math.abs(y-a);f<v&&(v=f,r=h)}B=r.id}}we&&we(),we=Gt(a=>{N=a,fe(),te()}),Wt(a=>{ee=a,Je()}),e.innerHTML=`
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">${d("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
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
    <div class="search-wrap"><span class="search-icon">🔢</span><input class="search-input" id="match-id-search" placeholder="${d("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Søk</button></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="prog-chip-name">${d("no_match_selected")}</div>
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
        <div class="stat-block"><div class="stat-value">${u.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${u.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
    </div>
    <div class="section-title">Stage-parametre</div>
    <div class="card">
      <div class="section-label">Stageinnhold</div>
      <div class="prognose-inputs">
        <div class="prog-field"><input type="number" id="prog-shots" value="12" oninput="calcPrognose()"><div class="prog-field-lbl">${d("shots")}</div></div>
        <div class="prog-field"><input type="number" id="prog-targets" value="6" oninput="calcPrognose()"><div class="prog-field-lbl">${d("targets")}</div></div>
        <div class="prog-field"><input type="number" id="prog-steel" value="2" oninput="calcPrognose()"><div class="prog-field-lbl">${d("steel")}</div></div>
      </div>
      <div class="section-label">Tidsjustering</div>
      <div class="prognose-inputs">
        <div class="prog-field" class="prog-readonly"><input type="number" id="prog-reloads" value="1" readonly class="prog-readonly-input"><div class="prog-field-lbl">Reloads (auto)</div></div>
        <div class="prog-field"><input type="number" id="prog-move" value="3" oninput="calcPrognose()"><div class="prog-field-lbl">${d("move_seconds")}</div></div>
        <div class="prog-field"><input type="number" id="prog-draw" value="${u.draw||1.42}" oninput="calcPrognose()" class="prog-accent-input"><div class="prog-field-lbl">${d("draw_seconds")}</div></div>
      </div>
      <div class="prognose-result">
        <div class="prog-pf-note" id="prog-pf-note">${u.powerFactor?ge(u.powerFactor):"Minor"} · ${u.division||"Classic"}</div>
        <div class="prog-hf-label">Estimert Hit Factor</div>
        <div class="prog-hf-value" id="prog-hf-out">—</div>
        <div id="prog-delta-wrap" class="prog-delta-wrap">
          <div class="prog-delta-label">vs. match-snitt</div>
          <div class="prog-delta-value" id="prog-delta">—</div>
        </div>
        <div id="prog-coaching" style="margin-top:15px;"></div>
        <div class="prog-breakdown" id="prog-breakdown"></div>
      </div>
    </div>
  </div>
  <button class="fab" onclick="openModal('modal-upload-result')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="results-chip-name">${d("no_match_selected")}</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal('modal-add-shooter')">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
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
      <div class="profile-name" id="prof-name">${u.firstName||""} ${u.lastName||""}</div>
      <div class="profile-div" id="prof-div">${u.division||"—"} · ${u.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${u.powerFactor?ge(u.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${u.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${d("edit_profile")}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${u.firstName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${u.lastName||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${u.division||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${u.category||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${u.powerFactor?ge(u.powerFactor):"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${u.region||"—"}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${u.club||"—"}</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Sesongstatistikk</div></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${d("matches_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${d("stages_count")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${d("avg_hf")}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${d("a_rate")}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${d("logout")}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${d("new_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${d("match_name")}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${d("type")}</div>
        <select class="field-select" id="new-match-type">
          <option value="Trening">${d("match_types_trening")}</option>
          <option value="Level 1">${d("match_types_level1")}</option>
          <option value="Level 2">${d("match_types_level2")}</option>
          <option value="Level 3">${d("match_types_level3")}</option>
          <option value="Level 4">${d("match_types_level4")}</option>
          <option value="Level 5">${d("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${d("date")}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("location")}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${d("planned_stages")}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromNewMatch()" style="width:100%;">Ny stage</button>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="new-match-searchable" checked style="width:18px;height:18px;">
          <span>${d("allow_search")}</span>
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
      <button class="btn-primary" onclick="createMatch()">${d("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${d("edit_match")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${d("match_name")}</div>
        <input class="field-input" type="text" id="edit-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${d("type")}</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">${d("match_types_trening")}</option>
          <option value="Level 1">${d("match_types_level1")}</option>
          <option value="Level 2">${d("match_types_level2")}</option>
          <option value="Level 3">${d("match_types_level3")}</option>
          <option value="Level 4">${d("match_types_level4")}</option>
          <option value="Level 5">${d("match_types_level5")}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${d("date")}</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">${d("location")}</div>
        <input class="field-input" type="text" id="edit-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${d("planned_stages")}</div>
        <input class="field-input" type="number" id="edit-match-stages">
      </div>
      <div style="margin-top:10px;">
        <button class="btn-primary" onclick="openCreateStageFromEdit()" style="width:100%;">Ny stage</button>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
          <span>${d("allow_search")}</span>
        </label>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="edit-match-finished" style="width:18px;height:18px;">
          <span>Marker som ferdig</span>
        </label>
      </div>
      <div class="field-group">
        <div class="field-label">Velg rival/motstander (valgfritt)</div>
        <select class="field-select" id="edit-match-rival">
          <option value="">Ingen rival valgt</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">Inviter brukere (valgfritt)</div>
        <div style="display:flex;gap:8px;margin-bottom:10px;">
          <input class="field-input" type="text" id="edit-match-user-search" placeholder="Søk etter navn eller e-post..." style="flex:1;">
          <button onclick="searchUsersEditMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Søk</button>
        </div>
        <div id="edit-match-search-results"></div>
      </div>
      <button class="btn-primary" onclick="saveEditMatch()">${d("save")}</button>
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;margin-top:10px;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;display:none;">Slett match</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${d("edit_profile")}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${d("first_name")}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${u.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${u.lastName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("division")}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${d("category")}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${d("select_power_factor")}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("region")}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${d("club")}</div>
        <input class="field-input" type="text" id="edit-club" value="${u.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${u.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${u.reloadTime||""}">
      </div>
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${d("save_profile")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${d("add_shooter")}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${d("first_name")}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${d("last_name")}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${d("division")}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
      <button class="btn-primary" onclick="addShooter()">${d("save_shooter")}</button>
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
      <div class="modal-title">${d("add_result")}</div>
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
      <button class="btn-primary" onclick="addStageResult()">${d("save_result")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-create-stage" onclick="closeModalOutside(event,'modal-create-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title" id="stage-modal-title">${d("create_stage")}</div>
      <div class="modal-close" onclick="closeModal('modal-create-stage')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${d("stage_number")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageNumber(-1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-number" value="1" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageNumber(1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("stage_name")}</div>
        <input class="field-input" type="text" id="stage-name" placeholder="Name">
      </div>
      <div class="field-group">
        <div class="field-label">${d("paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("poppers")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('poppers', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('poppers', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("plates")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('plates', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('plates', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("no_shoots")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('no-shoots', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('no-shoots', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <div class="field-label">${d("bonus_paper_targets")}</div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">−</button>
          <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
          <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
        </div>
      </div>
      <div class="field-group">
        <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
          <input type="checkbox" id="stage-bonus-included" style="width:18px;height:18px;">
          <span>${d("included")}</span>
        </label>
      </div>
      <button class="btn-primary" onclick="saveStage()">${d("save")}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-invite-user" onclick="closeModalOutside(event,'modal-invite-user')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${d("invite_user")}</div>
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
      <div class="modal-title">${d("invitations")}</div>
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
  `,es(),pt(),te(),fe(),ut(),Ae()}function es(){window.switchTab=ts,window.setFilter=as,window.openModal=ie,window.closeModal=G,window.closeModalOutside=ss,window.createMatch=ns,window.searchMatchByIdHandler=rs,window.openEditProfile=Ms,window.saveProfileData=_s,window.selectPF=Cs,window.updatePFOptions=gt,window.calcPrognose=Ae,window.renderMatchList=fe,window.selectMatch=os,window.addShooter=$s,window.addStageResult=Fs,window.handleLogout=Ds,window.openEditMatch=ls,window.saveEditMatch=ds,window.openCreateStage=Fe,window.openCreateStageFromEdit=us,window.openCreateStageFromNewMatch=gs,window.openEditStage=vs,window.changeStageNumber=ms,window.changeStageField=hs,window.saveStage=fs,window.openInviteUser=bs,window.openInvitationsModal=Es,window.acceptInvitation=Ts,window.declineInvitation=Is,window.searchUsers=ys,window.toggleUserSelection=ws,window.sendMultipleInvitations=ks,window.searchUsersNewMatch=xs,window.toggleUserNewMatch=Ss,window.searchUsersEditMatch=Ls,window.toggleUserEditMatch=Ps,window.confirmDeleteMatch=cs,window.deleteMatchConfirmed=ps,window.uploadAndScanResult=Rs,window.saveOCRResult=Os,window.openCreateStageFromUpload=As}function ts(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),l(e).classList.add("active");const t=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(e),i=document.querySelectorAll(".tab-item");i[t]&&i[t].classList.add("active"),e==="screen-home"&&te(),e==="screen-matches"&&fe(),e==="screen-results"&&Me()}function ie(e){l(e).classList.add("open"),e==="modal-upload-result"&&is()}function is(){const e=N.find(a=>a.id==B);if(!e)return;const t=l("upload-stage-select");if(t.innerHTML="",e.stages&&e.stages.length>0)e.stages.forEach(a=>{const n=document.createElement("option");n.value=a.number,n.textContent=`Stage ${a.number} - ${a.name}`,t.appendChild(n)});else{const a=document.createElement("option");a.value="",a.textContent="Ingen stages - opprett ny",t.appendChild(a)}const i=l("upload-shooter-select");i.innerHTML="";const s=document.createElement("option");s.value="me",s.textContent="Meg ("+(u.firstName||"")+" "+(u.lastName||"")+")",i.appendChild(s),e.shooters&&e.shooters.length>0&&e.shooters.forEach(a=>{const n=document.createElement("option");n.value=a.id,n.textContent=a.firstName+" "+a.lastName,i.appendChild(n)})}function G(e){l(e).classList.remove("open")}function ss(e,t){e.target.id===t&&G(t)}function as(e,t){ue=e,document.querySelectorAll(".filter-chip").forEach(i=>i.classList.remove("active")),t.classList.add("active"),fe()}async function ns(){var i;const e={name:$("new-match-name")||"Ny match",type:$("new-match-type")||"Trening",date:$("new-match-date")||new Date().toISOString().split("T")[0],location:$("new-match-location")||"",plannedStages:R("new-match-stages",6),searchable:((i=l("new-match-searchable"))==null?void 0:i.checked)!==!1,status:"active",stages:[],shooters:[],stageDefs:[]},t=await jt(e);if(t.success){let s=0;for(const a of ve)(await ze(a.email,{matchId:t.matchId,matchName:e.name})).success&&s++;G("modal-new-match"),l("new-match-name").value="",l("new-match-location").value="",l("new-match-stages").value="6",l("new-match-searchable")&&(l("new-match-searchable").checked=!0),l("new-match-user-search").value="",l("new-match-search-results").innerHTML="",ve=[],s>0&&alert(`Match opprettet! Invitasjoner sendt til ${s} bruker(e).`)}else alert("Kunne ikke opprette match: "+t.error)}async function rs(){const e=$("match-id-search").trim();if(!e){alert("Skriv inn et match-ID");return}const t=await Ht(e);t.success?(alert(`Match funnet: ${t.match.name} (ID: ${t.match.id})`),l("match-id-search").value=""):alert(`Fant ingen match med ID ${e}${t.error?": "+t.error:""}`)}function os(e){B=e;const t=N.find(i=>i.id==e);if(t){const i=t.id?"Match ID "+t.id+" "+t.name:t.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const n=l(a);n&&(n.textContent=i)})}ke&&ke(),e&&(ke=Kt(e,i=>{const s=N.findIndex(a=>a.id==e);s!==-1&&i&&(N[s]=i,te(),Me())})),te(),Me(),Ae()}function ls(){const e=N.find(n=>n.id==B);if(!e){alert("Ingen match valgt");return}l("edit-match-name").value=e.name||"",l("edit-match-type").value=e.type||"Trening",l("edit-match-date").value=e.date||"",l("edit-match-location").value=e.location||"",l("edit-match-stages").value=e.plannedStages||0,l("edit-match-searchable")&&(l("edit-match-searchable").checked=e.searchable!==!1),l("edit-match-finished")&&(l("edit-match-finished").checked=e.status==="finished");const t=l("edit-match-rival");t.innerHTML='<option value="">Ingen rival valgt</option>';const i=document.createElement("option");i.value="me",i.textContent="Meg ("+(u.firstName||"")+" "+(u.lastName||"")+")",t.appendChild(i),e.shooters&&e.shooters.length>0&&e.shooters.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.firstName+" "+n.lastName,t.appendChild(r)}),e.rivalId&&(t.value=e.rivalId),l("edit-match-user-search").value="",l("edit-match-search-results").innerHTML="",me=[];const s=He(),a=l("delete-match-btn");a&&s&&e.ownerId===s.uid?a.style.display="block":a&&(a.style.display="none"),ie("modal-edit-match")}async function ds(){var s,a;const e=N.find(n=>n.id==B);if(!e){alert("Ingen match valgt");return}const t={name:$("edit-match-name")||e.name,type:$("edit-match-type")||e.type,date:$("edit-match-date")||e.date,location:$("edit-match-location")||e.location,plannedStages:R("edit-match-stages",e.plannedStages),searchable:((s=l("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=l("edit-match-finished"))!=null&&a.checked?"finished":"active",rivalId:$("edit-match-rival")||null},i=await Le(e.id,t);if(i.success){let n=0;for(const r of me)(await ze(r.email,{matchId:e.id,matchName:t.name})).success&&n++;G("modal-edit-match"),n>0&&alert(`Match oppdatert! Invitasjoner sendt til ${n} bruker(e).`)}else alert("Kunne ikke oppdatere match: "+i.error)}function cs(){const e=N.find(i=>i.id==B);if(!e){alert("Ingen match valgt");return}const t=e.id?"Match ID "+e.id+" "+e.name:e.name;l("delete-match-name").textContent=t,ie("modal-confirm-delete")}async function ps(){const e=N.find(i=>i.id==B);if(!e){alert("Ingen match valgt");return}const t=await Ut(e.id);t.success?(G("modal-confirm-delete"),G("modal-edit-match"),B=null,te(),fe(),alert("Match slettet")):alert("Kunne ikke slette match: "+t.error)}let Ie=null,Ee=null;function Fe(){var t;const e=N.find(i=>i.id==B);if(!e){alert("Ingen match valgt");return}Ie=null,l("stage-modal-title").textContent=d("create_stage"),l("stage-number").value=(((t=e.stages)==null?void 0:t.length)||0)+1,l("stage-name").value="",l("stage-paper-targets").value=0,l("stage-poppers").value=0,l("stage-plates").value=0,l("stage-no-shoots").value=0,l("stage-bonus-paper-targets").value=0,l("stage-bonus-included").checked=!1,ie("modal-create-stage")}function us(){G("modal-edit-match"),Fe()}function gs(){G("modal-new-match"),Fe()}function vs(e){const t=N.find(s=>s.id==B);if(!t||!t.stages||!t.stages[e]){alert("Stage ikke funnet");return}Ie=e;const i=t.stages[e];l("stage-modal-title").textContent=d("edit_stage"),l("stage-number").value=i.number||e+1,l("stage-name").value=i.name||"",l("stage-paper-targets").value=i.paperTargets||0,l("stage-poppers").value=i.poppers||0,l("stage-plates").value=i.plates||0,l("stage-no-shoots").value=i.noShoots||0,l("stage-bonus-paper-targets").value=i.bonusPaperTargets||0,l("stage-bonus-included").checked=i.bonusIncluded||!1,ie("modal-create-stage")}function ms(e){const t=l("stage-number"),i=Math.max(1,parseInt(t.value)+e);t.value=i}function hs(e,t){const i=l("stage-"+e),s=Math.max(0,parseInt(i.value)+t);i.value=s}async function fs(){var a;const e=N.find(n=>n.id==B);if(!e){alert("Ingen match valgt");return}const t={number:R("stage-number",1),name:$("stage-name")||"",paperTargets:R("stage-paper-targets",0),poppers:R("stage-poppers",0),plates:R("stage-plates",0),noShoots:R("stage-no-shoots",0),bonusPaperTargets:R("stage-bonus-paper-targets",0),bonusIncluded:((a=l("stage-bonus-included"))==null?void 0:a.checked)||!1},i=e.stages||[];Ie!==null?i[Ie]=t:i.push(t);const s=await Le(e.id,{stages:i});s.success?G("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let ee=[],Q=[],ve=[],me=[];function bs(){if(!B){alert("Ingen match valgt");return}Q=[],l("user-search-input").value="",l("user-search-results").innerHTML="",l("send-invitations-btn").style.display="none",ie("modal-invite-user")}async function ys(){const e=$("user-search-input").trim();if(e.length===0){l("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const t=await Ge(e),i=l("user-search-results");if(!i)return;if(t.length===0){i.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+t.length+"):</div>";t.forEach(a=>{const n=a.displayName||a.email,r=Q.some(h=>h.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:18px;height:18px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:14px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),i.innerHTML=s,ct()}function ws(e,t,i){const s=Q.findIndex(a=>a.uid===e);s>-1?Q.splice(s,1):Q.push({uid:e,email:t,displayName:i}),ct()}function ct(){const e=l("send-invitations-btn");e&&(Q.length>0?(e.style.display="block",e.textContent=`Send invitasjoner (${Q.length} valgt)`):e.style.display="none")}async function ks(){if(Q.length===0){alert("Ingen brukere valgt");return}const e=N.find(s=>s.id==B);if(!e)return;let t=0,i=0;for(const s of Q)(await ze(s.email,{matchId:e.id,matchName:e.name})).success?t++:i++;G("modal-invite-user"),t>0&&alert(`Invitasjoner sendt til ${t} bruker(e)!`),i>0&&alert(`${i} invitasjon(er) feilet.`),Q=[]}async function xs(){const e=$("new-match-user-search").trim();if(e.length===0){l("new-match-search-results").innerHTML="";return}const t=await Ge(e),i=l("new-match-search-results");if(!i)return;if(t.length===0){i.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+t.length+"):</div>";t.forEach(a=>{const n=a.displayName||a.email,r=ve.some(h=>h.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),i.innerHTML=s}function Ss(e,t,i){const s=ve.findIndex(a=>a.uid===e);s>-1?ve.splice(s,1):ve.push({uid:e,email:t,displayName:i})}async function Ls(){console.log("🔍 searchUsersEditMatch called");const e=$("edit-match-user-search").trim();if(console.log("📝 Search term:",e),e.length===0){console.log("⚠️ Empty search term"),l("edit-match-search-results").innerHTML="";return}console.log("🌐 Calling searchUsersByNameOrEmail...");const t=await Ge(e);console.log("✅ Results received:",t);const i=l("edit-match-search-results");if(!i){console.error("❌ Container not found: edit-match-search-results");return}if(t.length===0){console.log("⚠️ No users found"),i.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}console.log("🎨 Rendering",t.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+t.length+"):</div>";t.forEach(a=>{const n=a.displayName||a.email,r=me.some(h=>h.uid===a.uid),v=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${v}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),i.innerHTML=s,console.log("✅ HTML rendered to container")}function Ps(e,t,i){const s=me.findIndex(a=>a.uid===e);s>-1?me.splice(s,1):me.push({uid:e,email:t,displayName:i})}function Es(){We(),ie("modal-invitations")}function We(){const e=l("invitations-list");if(!e)return;if(!ee||ee.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d("no_invitations")+"</div></div>";return}let t="";ee.forEach((i,s)=>{t+='<div class="card" style="margin-bottom:10px;">',t+='<div style="margin-bottom:10px;"><strong>'+d("invited_to_match")+"</strong></div>",t+='<div style="margin-bottom:10px;">Match ID '+i.matchId+" "+i.matchName+"</div>",t+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+i.invitedBy+"</div>",t+='<div style="display:flex;gap:10px;">',t+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+d("accept")+"</button>",t+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+d("decline")+"</button>",t+="</div>",t+="</div>"}),e.innerHTML=t}async function Ts(e){const t=ee[e];if(!t)return;const i=await Vt(t.matchId);i.success?(ee.splice(e,1),Je(),We()):alert("Kunne ikke akseptere invitasjon: "+i.error)}async function Is(e){const t=ee[e];if(!t)return;const i=await qt(t.matchId);i.success?(ee.splice(e,1),Je(),We()):alert("Kunne ikke avvise invitasjon: "+i.error)}function Je(){const e=l("invitation-badge");if(!e)return;const t=ee.length;t>0?(e.textContent=t,e.style.display="flex"):e.style.display="none"}function te(){var a,n;const e=l("home-content");if(!e)return;const t=N.find(r=>r.id==B);if(!t){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let i="";i+='<div class="card">',i+='<div class="mhc-name">'+t.name+"</div>",i+='<div class="mhc-meta">'+dt(t.date)+" · "+t.type+"</div>",i+='<div class="mhc-stats">',i+='<div><div class="mhc-val">'+(((a=t.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',i+='<div><div class="mhc-val">'+(((n=t.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',i+="</div>",i+='<div style="display:flex;gap:10px;margin-top:15px;">',i+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',i+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',i+="</div>",i+='<div style="margin-top:10px;">',i+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',i+="</div>";const s=He();s&&t.ownerId===s.uid&&(i+='<div style="margin-top:10px;">',i+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',i+="</div>"),i+="</div>",t.stages&&t.stages.length>0&&(i+='<div class="section-title">Stages</div>',i+='<div class="card">',t.stages.forEach((r,v)=>{i+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+v+')">',i+='<div class="stage-num">S'+(r.number||v+1)+"</div>",i+='<div class="stage-info">',i+='<div class="stage-name">'+(r.name||"Stage "+(r.number||v+1))+"</div>",i+='<div class="stage-meta">',r.paperTargets&&(i+="Paper: "+r.paperTargets+" "),r.poppers&&(i+="Poppers: "+r.poppers+" "),r.plates&&(i+="Plates: "+r.plates+" "),r.noShoots&&(i+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(i+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),i+="</div>",i+="</div>",i+="</div>"}),i+="</div>"),e.innerHTML=i}function fe(){const e=l("match-list-container");if(!e)return;let t=N.filter(s=>{if(ue==="all")return!0;if(ue==="active")return s.status!=="finished";if(ue==="trening")return s.type==="Trening";if(ue==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return ue===a});if(t.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let i="";t.forEach(s=>{var r;const a=s.id===B,n=s.id?"Match ID "+s.id+" "+s.name:s.name;i+='<div class="match-row">',i+='<div class="match-row-icon'+(a?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,i+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,i+='<div class="match-row-name">'+n+"</div>",i+='<div class="match-row-meta">'+dt(s.date)+" · "+(s.location||s.type)+"</div>",i+="</div>",i+='<div class="match-row-right">',i+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,i+='<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>",i+='<div class="match-stg-lbl">stages</div>',i+="</div>",i+="</div>"}),e.innerHTML=i}function Me(){var n;const e=l("results-content");if(!e)return;const t=N.find(r=>r.id===B);if(!t){e.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!t.shooters||t.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let i='<div class="card">';i+='<div class="card-header"><div class="card-title">Standings</div></div>',i+='<div class="standings-table-wrap"><table class="standings-table">',i+='<thead><tr class="standings-header-row">',i+='<th class="standings-th standings-th-rank">#</th>',i+='<th class="standings-th standings-th-shooter">Skytter</th>',i+='<th class="standings-th standings-th-pts">Pts</th>',i+='<th class="standings-th standings-th-pct">%</th>',i+="</tr></thead>",i+="<tbody>";const s=t.shooters.map(r=>{var h;const v=((h=r.stages)==null?void 0:h.reduce((y,f)=>y+(f.pts||0),0))||0;return{...r,totalPts:v}}).sort((r,v)=>v.totalPts-r.totalPts),a=((n=s[0])==null?void 0:n.totalPts)||0;s.forEach((r,v)=>{const h=a>0?(r.totalPts/a*100).toFixed(2):"0.00";i+='<tr class="standings-row">',i+='<td class="standings-td standings-td-rank">'+(v+1)+"</td>",i+='<td class="standings-td standings-td-shooter">',i+='<div class="standings-shooter-name">'+r.firstName+" "+r.lastName+"</div>",i+='<div class="standings-shooter-meta">'+r.division+" · "+ge(r.pf||"minor")+"</div>",i+="</td>",i+='<td class="standings-td standings-td-pts">'+r.totalPts.toFixed(2)+"</td>",i+='<td class="standings-td standings-td-pct">'+h+"%</td>",i+="</tr>"}),i+="</tbody></table></div>",i+="</div>",e.innerHTML=i}function pt(){const e=le();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(v=>{const h=l(v);h&&(h.textContent=e)});const i=l("prof-name");i&&(i.textContent=(u.firstName||"")+" "+(u.lastName||""));const s=l("prof-div");s&&(s.textContent=(u.division||"—")+" · "+(u.club||"—"));const a=l("prof-badge-pf");a&&(a.textContent=u.powerFactor?ge(u.powerFactor):"—");const n=l("prof-badge-region");n&&(n.textContent=u.region||"—");const r={"info-firstname":u.firstName||"—","info-lastname":u.lastName||"—","info-division":u.division||"—","info-category":u.category||"—","info-pf":u.powerFactor?ge(u.powerFactor):"—","info-region":u.region||"—","info-club":u.club||"—"};Object.keys(r).forEach(v=>{const h=l(v);h&&(h.textContent=r[v])}),ut()}function ut(){const e=[];N.forEach(g=>{g.stages&&g.stages.forEach(m=>e.push(m))});let t=0,i=0,s=0;e.forEach(g=>{t+=g.a||0,i+=(g.a||0)+(g.c||0)+(g.d||0),s+=g.hf||0});const a=e.length?(s/e.length).toFixed(2):"—",n=i?Math.round(t/i*100)+"%":"—",r=l("stat-matches");r&&(r.textContent=N.length);const v=l("stat-stages");v&&(v.textContent=e.length);const h=l("stat-avg-hf");h&&(h.textContent=a);const y=l("stat-a-rate");y&&(y.textContent=n);const f=l("prog-a-rate");f&&(f.textContent=n)}function Ms(){l("edit-firstname").value=u.firstName||"",l("edit-lastname").value=u.lastName||"",l("edit-club").value=u.club||"",l("edit-draw").value=u.draw||"",l("edit-reload").value=u.reloadTime||"";let e="";qi.forEach(s=>{e+='<option value="'+s+'"'+(s===u.division?" selected":"")+">"+s+"</option>"}),l("edit-division").innerHTML=e;let t="";Ji.forEach(s=>{t+='<option value="'+s+'"'+(s===u.category?" selected":"")+">"+s+"</option>"}),l("edit-category").innerHTML=t;let i="";Yi.forEach(s=>{i+='<option value="'+s+'"'+(s===u.region?" selected":"")+">"+s+"</option>"}),l("edit-region").innerHTML=i,gt(),ie("modal-edit-profile")}function gt(){const e=$("edit-division"),t=Wi[e]||["minor","major"];let i="";t.forEach(s=>{const a=u.powerFactor===s;i+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,i+='<input type="radio" name="pf" value="'+s+'">',i+='<div class="pf-label">'+s.toUpperCase()+"</div>",i+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",i+="</label>"}),l("pf-options").innerHTML=i,t.indexOf(u.powerFactor)<0&&(u.powerFactor=t[0])}function Cs(e,t){document.querySelectorAll(".pf-option").forEach(i=>i.classList.remove("active")),e.classList.add("active"),u.powerFactor=t}async function _s(){u.firstName=$("edit-firstname").trim()||"",u.lastName=$("edit-lastname").trim()||"",u.division=$("edit-division")||"",u.category=$("edit-category")||"",u.region=$("edit-region")||"",u.club=$("edit-club").trim()||"",u.draw=he("edit-draw")||null,u.reloadTime=he("edit-reload")||null;const e=await Bt(u),t=l("save-profile-btn");e.success?(t.textContent="✓ Lagret!",t.style.background="var(--green)",setTimeout(()=>{t.textContent=d("save_profile"),t.style.background=""},1800)):(t.textContent="❌ Feil!",t.style.background="var(--red)",setTimeout(()=>{t.textContent=d("save_profile"),t.style.background=""},1800)),pt(),Ae(),te(),G("modal-edit-profile")}function Ns(e,t,i,s){var I;if(!e||!e.rivalId||!t)return null;let a=0,n=0;e.stages&&e.stages.forEach(P=>{P.pts&&P.pts>0&&(a+=P.pts,n++)});let r=0,v="";if(e.rivalId==="me")v="Meg (baseline)",r=a;else{const P=(I=e.shooters)==null?void 0:I.find(F=>F.id===e.rivalId);P&&(v=P.firstName+" "+P.lastName,P.stages&&P.stages.forEach(F=>{F.pts&&F.pts>0&&(r+=F.pts)}))}const h=a-r,y=h>0,f=Math.abs(h);let g="",m="",E=null;if(y)g=`LEDER ${f.toFixed(1)} pts`,f>20?m=`Meget god ledelse! Hold tempoet. Skytt ${(t.aPercent*100).toFixed(0)}%A som vanlig, unngå miss.`:f>10?m="God ledelse. Hold fokus på prosessen. Skytt som vanlig, unngå miss.":m=`Jevnt! Hold tempoet. Prøv å holde ${(t.aPercent*100).toFixed(0)}%A, unngå miss.`;else{g=`BAK ${f.toFixed(1)} pts`;const P=(e.plannedStages||6)-n;if(P>0){const F=f/P,S=u.draw||1.42,M=u.reloadTime||1.8,D=u.division||"Classic",j=u.powerFactor||"minor",A=qe(s,D,j),K=S+s*t.avgSplit+A*M+3;E=(i*s+F)/K,f>20?m=`Må presse hardt! Target HF ${E.toFixed(2)} vs estimat ${i.toFixed(2)}. Øk tempo litt, hold ${(t.aPercent*100).toFixed(0)}%A.`:f>10?m=`Må presse litt over vanlig nivå. Target HF ${E.toFixed(2)} vs estimat ${i.toFixed(2)}.`:m=`Meget jevnt! Hold fokus på prosessen. Skytt ${(t.aPercent*100).toFixed(0)}%A som vanlig, unngå miss.`}else m=`BAK ${f.toFixed(1)} pts. Ingen stages igjen.`}return{statusText:g,advice:m,rivalName:v,gap:h,targetHF:E}}function Ae(){const e=R("prog-shots",12),t=R("prog-targets",6),i=R("prog-steel",2),s=he("prog-move",3),a=he("prog-draw",u.draw||1.42),n=u.division||"Classic",r=u.powerFactor||"minor",v=qe(e,n,r);l("prog-reloads").value=v;const h=u.reloadTime||1.8,y=Qi();let f=.18,g="—";y&&y.avgSplit&&(f=y.avgSplit,y.aPercent!==void 0&&(g=(y.aPercent*100).toFixed(0)+"%")),l("prog-split-display")&&(l("prog-split-display").textContent=f.toFixed(3)+"s");const m=l("prog-a-rate");m&&(m.textContent=g);const E=a+e*f+v*h+s;let P=t*10+i*10;if(y&&y.aPercent!==void 0){const _=t*2+i,x=tt[r]||tt.minor;P=_*y.aPercent*x.A+_*y.cPercent*x.C+_*y.dPercent*x.D+_*y.missPercent*x.miss}const F=E>0?P/E:0;l("prog-hf-out").textContent=F.toFixed(2);let S="";S+='<div class="prog-breakdown-detail">',S+="Trekk: "+a.toFixed(2)+"s · ",S+="Skudd: "+(e*f).toFixed(2)+"s · ",S+="Reload: "+(v*h).toFixed(2)+"s · ",S+="Beveg: "+s.toFixed(2)+"s",S+="</div>",y?(S+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',S+="Basert på "+y.completedStages+" av "+y.totalStages+" stages",y.aPercent!==void 0?S+=" (t/skudd: "+f.toFixed(3)+"s, "+(y.aPercent*100).toFixed(0)+"%A)":S+=" (t/skudd: "+f.toFixed(3)+"s)",S+="</div>"):(S+='<div class="prog-breakdown-detail" style="margin-top:8px;color:var(--muted);font-size:12px;">',S+="Ingen data ennå - bruker standard 0.18s split",S+="</div>"),l("prog-breakdown").innerHTML=S;const M=N.find(A=>A.id==B),D=Ns(M,y,F,e),j=l("prog-coaching");if(D&&j){const K=D.gap>0?"var(--green)":"var(--red)";let _="";_+='<div style="background:var(--card-bg);border-radius:12px;padding:15px;border-left:4px solid '+K+';">',_+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">',_+='<div style="font-size:13px;color:var(--muted);">vs. '+D.rivalName+"</div>",_+='<div style="font-size:18px;font-weight:700;color:'+K+';">'+D.statusText+"</div>",_+="</div>",_+='<div style="font-size:14px;line-height:1.5;color:var(--text);">'+D.advice+"</div>",_+="</div>",j.innerHTML=_}else j&&(j.innerHTML="")}async function $s(){const e=N.find(n=>n.id===B);if(!e)return;const t=$("new-shooter-firstname").trim(),i=$("new-shooter-lastname").trim(),s=$("new-shooter-division")||"Classic";if(!t||!i){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:t,lastName:i,division:s,pf:"minor",club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(a),await Le(e.id,e),G("modal-add-shooter"),Me()}async function Fs(){const e=N.find(f=>f.id===B);if(!e)return;const t=R("new-result-stage",1),i=he("new-result-time",0),s=R("new-result-points",0),a=R("new-result-a",0),n=R("new-result-c",0),r=R("new-result-d",0),v=R("new-result-miss",0),h=i>0?s/i:0,y={num:t,name:"Stage "+t,hf:h,time:i,pts:s,pf:u.powerFactor||"minor",a,c:n,d:r,miss:v};e.stages||(e.stages=[]),e.stages.push(y),await Le(e.id,e),G("modal-add"),te()}function As(){G("modal-upload-result"),Fe()}async function Rs(){if(!N.find(v=>v.id==B)){alert("Ingen aktiv match valgt");return}const t=l("upload-stage-select"),i=l("upload-shooter-select"),s=l("upload-result-file");if(!t.value||!i.value){alert("Velg stage og skytter");return}if(!s.files||s.files.length===0){alert("Velg en fil");return}const a=s.files[0];Ee=t.value,i.value;const n=event.target,r=n.textContent;n.textContent="Skanner...",n.disabled=!0;try{const v=new FileReader;v.onload=async function(h){const y=h.target.result,g=(await Gi.recognize(y,"eng+nor",{logger:E=>console.log(E)})).data.text;console.log("OCR Text:",g);const m=Bs(g);l("ocr-time").value=m.time||"",l("ocr-points").value=m.points||"",l("ocr-a").value=m.a||0,l("ocr-c").value=m.c||0,l("ocr-d").value=m.d||0,l("ocr-miss").value=m.miss||0,l("ocr-ns").value=m.ns||0,l("ocr-proc").value=m.proc||0,G("modal-upload-result"),ie("modal-ocr-confirm"),n.textContent=r,n.disabled=!1},v.readAsDataURL(a)}catch(v){console.error("OCR Error:",v),alert("Feil ved skanning: "+v.message),n.textContent=r,n.disabled=!1}}function Bs(e){const t={time:null,points:null,a:0,c:0,d:0,miss:0,ns:0,proc:0},i=e.replace(/[\n\r]+/g," ").toLowerCase(),s=[/time[:\s]*(\d+\.?\d*)/i,/(\d+\.\d+)\s*s(?:ec)?/i,/^(\d+\.\d+)$/m];for(const g of s){const m=i.match(g);if(m){t.time=parseFloat(m[1]);break}}const a=[/(?:points?|pts?)[:\s]*(\d+)/i,/score[:\s]*(\d+)/i];for(const g of a){const m=i.match(g);if(m){t.points=parseInt(m[1]);break}}const n=[/(\d+)\s*a(?:lpha)?(?:\s|$)/i,/a(?:lpha)?[:\s]*(\d+)/i];for(const g of n){const m=i.match(g);if(m){t.a=parseInt(m[1]);break}}const r=[/(\d+)\s*c(?:harlie)?(?:\s|$)/i,/c(?:harlie)?[:\s]*(\d+)/i];for(const g of r){const m=i.match(g);if(m){t.c=parseInt(m[1]);break}}const v=[/(\d+)\s*d(?:elta)?(?:\s|$)/i,/d(?:elta)?[:\s]*(\d+)/i];for(const g of v){const m=i.match(g);if(m){t.d=parseInt(m[1]);break}}const h=[/(\d+)\s*m(?:iss)?(?:\s|$)/i,/m(?:iss)?[:\s]*(\d+)/i];for(const g of h){const m=i.match(g);if(m){t.miss=parseInt(m[1]);break}}const y=[/(\d+)\s*ns(?:\s|$)/i,/ns[:\s]*(\d+)/i,/no-?shoot[:\s]*(\d+)/i];for(const g of y){const m=i.match(g);if(m){t.ns=parseInt(m[1]);break}}const f=[/(\d+)\s*p(?:roc)?(?:\s|$)/i,/p(?:roc)?[:\s]*(\d+)/i,/procedural[:\s]*(\d+)/i];for(const g of f){const m=i.match(g);if(m){t.proc=parseInt(m[1]);break}}return t}async function Os(){var I;const e=N.find(P=>P.id==B);if(!e)return;const t=he("ocr-time",0),i=R("ocr-points",0),s=R("ocr-a",0),a=R("ocr-c",0),n=R("ocr-d",0),r=R("ocr-miss",0),v=R("ocr-ns",0),h=R("ocr-proc",0);if(t<=0||i<=0){alert("Tid og poeng må være større enn 0");return}const y=t>0?i/t:0,f=(I=e.stages)==null?void 0:I.findIndex(P=>P.number==Ee);if(f===-1||f===void 0){alert("Stage ikke funnet");return}const g=e.stages[f],m={num:g.number,name:g.name,hf:y,time:t,pts:i,pf:u.powerFactor||"minor",a:s,c:a,d:n,miss:r,ns:v,proc:h,paperTargets:g.paperTargets,poppers:g.poppers,plates:g.plates},E=e.stages.findIndex(P=>P.number==Ee);E>=0?e.stages[E]=m:e.stages.push(m),await Le(e.id,e),G("modal-ocr-confirm"),te(),Ee=null}async function Ds(){we&&we(),ke&&ke(),await _t(),window.location.reload()}const vt=document.getElementById("app");function js(){Rt(vt,mt)}function mt(){Xi(vt)}It(e=>{e?mt():js()});
