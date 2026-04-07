import{initializeApp as bt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as yt,onAuthStateChanged as wt,signInWithEmailAndPassword as kt,createUserWithEmailAndPassword as xt,signOut as St}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Lt,getDoc as be,doc as U,setDoc as Ne,query as $e,collection as Le,where as Fe,getDocs as He,onSnapshot as ze,serverTimestamp as Ie,updateDoc as de,arrayUnion as st,deleteDoc as Pt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Et,httpsCallable as Tt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const Mt={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},at=bt(Mt),Ae=yt(at),O=Lt(at),It=Et();let je=null,oe=null;function Ct(e){wt(Ae,async i=>{if(i){je=i;try{const t=await be(U(O,"users",i.uid));t.exists()?oe={uid:i.uid,...t.data()}:oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}}else je=null,oe=null,e(null)})}async function _t(e,i){try{const t=(e||"").trim();return{success:!0,user:(await kt(Ae,t,i||"")).user}}catch(t){console.error("Innlogging feilet:",t);let s="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Feil e-post eller passord":t.code==="auth/invalid-email"?s="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function Nt(e,i,t,s,a,n,r,u,m,b){try{const f=(e||"").trim(),p=i||"",h=(t||"").trim(),E=(s||"").trim(),k=(a||"").trim(),P=(n||"").trim(),C=(r||"").trim(),L=(u||"minor").trim(),M=(m||"").trim(),D=(b||"").trim(),_=(await xt(Ae,f,p)).user,K=Tt(It,"validateInviteCode");try{await K({code:h,userId:_.uid,userEmail:f})}catch(j){await _.delete();let w="Ugyldig invitasjonskode";return j.code==="functions/not-found"?w="Ugyldig invitasjonskode":j.code==="functions/permission-denied"?w="Denne koden er deaktivert":j.code==="functions/resource-exhausted"?w="Denne koden har nådd maksimalt antall bruk":j.code==="functions/already-exists"?w="Du har allerede brukt denne koden":j.message&&(w=j.message),{success:!1,error:w}}return await Ne(U(O,"users",_.uid),{email:f,firstName:E,lastName:k,division:P,category:C,powerFactor:L,region:M,club:D,role:"user",inviteCode:h,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:_}}catch(f){console.error("Registrering feilet:",f);let p="Registrering feilet";return f.code==="auth/email-already-in-use"?p="E-postadressen er allerede i bruk":f.code==="auth/weak-password"?p="Passordet må være minst 6 tegn":f.code==="auth/invalid-email"?p="Ugyldig e-postadresse":f.message&&(p=f.message),{success:!1,error:p}}}async function $t(){try{return await St(Ae),{success:!0}}catch(e){return console.error("Utlogging feilet:",e),{success:!1,error:"Kunne ikke logge ut"}}}function W(){return je}function Pe(){return oe}const Ft=`
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
`;function At(e,i){const t=document.getElementById("gdpr-modal");t&&t.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${Ft}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),n=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),u=s.querySelector(".gdpr-modal-overlay"),m=()=>{s.remove()};a.addEventListener("click",()=>{m(),i&&i()}),u.addEventListener("click",()=>{m(),i&&i()}),r.addEventListener("click",()=>{m(),i&&i()}),n.addEventListener("click",()=>{m(),e&&e()}),document.body.style.overflow="hidden";const b=m,f=()=>{document.body.style.overflow="",b()};a.onclick=()=>{f(),i&&i()},u.onclick=()=>{f(),i&&i()},r.onclick=()=>{f(),i&&i()},n.onclick=()=>{f(),e&&e()}}function Rt(){const e=document.createElement("div");return e.className="gdpr-checkbox-container",e.innerHTML=`
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `,setTimeout(()=>{const i=e.querySelector("#gdpr-open-modal");i&&i.addEventListener("click",t=>{t.preventDefault(),At(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),e}function Dt(){const e=document.getElementById("gdpr-consent-checkbox");return!e||!e.checked?{valid:!1,error:"Du må godta personvernerklæringen for å registrere deg"}:{valid:!0}}function Bt(e,i){e.innerHTML=`
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
  `;const t={no:{subtitle:"Analyse. Prognose. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyze. Predict. Perform.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),u=document.getElementById("registerSection"),m=document.getElementById("showRegisterBtn"),b=document.getElementById("cancelRegisterBtn"),f=document.getElementById("loginBtn"),p=document.getElementById("registerBtn"),h=document.getElementById("langNo"),E=document.getElementById("langEn"),k=document.getElementById("registerPassword"),P=document.getElementById("passwordStrengthBar"),C=document.getElementById("passwordStrengthText"),L=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");L.onclick=()=>{a="minor",L.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),L.classList.remove("selected")};function D(w){let y=0;return w?(w.length>=8&&(y+=1),w.length>=12&&(y+=1),/[a-z]/.test(w)&&/[A-Z]/.test(w)&&(y+=1),/\d/.test(w)&&(y+=1),/[^A-Za-z0-9]/.test(w)&&(y+=1),y<=1?{score:y,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:y===2?{score:y,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:y===3?{score:y,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:y===4?{score:y,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:y,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function B(){const w=t[s],y=k.value,H=D(y);P.style.width=H.width,P.style.background=H.color,C.innerText=w[H.labelKey]}function _(w){s=w;const y=t[w];document.getElementById("brandSubtitle").innerText=y.subtitle,document.getElementById("loginEmailLabel").innerText=y.loginEmailLabel,document.getElementById("loginEmail").placeholder=y.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=y.loginPasswordLabel,document.getElementById("loginPassword").placeholder=y.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=y.login,document.getElementById("separatorText").innerText=y.or,document.getElementById("showRegisterBtn").innerText=y.showRegister,document.getElementById("registerFirstNameLabel").innerText=y.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=y.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=y.registerLastNameLabel,document.getElementById("registerLastName").placeholder=y.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=y.registerEmailLabel,document.getElementById("registerEmail").placeholder=y.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=y.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=y.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=y.registerPasswordLabel,document.getElementById("registerPassword").placeholder=y.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=y.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=y.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=y.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=y.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=y.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=y.registerRegionLabel,document.getElementById("registerClubLabel").innerText=y.registerClubLabel,document.getElementById("registerCodeLabel").innerText=y.registerCodeLabel,document.getElementById("registerCode").placeholder=y.registerCodePlaceholder,document.getElementById("registerBtn").innerText=y.register,document.getElementById("cancelRegisterBtn").innerText=y.cancel,h.classList.toggle("active",w==="no"),E.classList.toggle("active",w==="en"),B()}function K(){r.classList.remove("active"),u.classList.add("active"),n.innerText="";const w=document.getElementById("gdprCheckboxContainer");if(w&&!w.hasChildNodes()){const y=Rt();w.appendChild(y)}}function j(){u.classList.remove("active"),r.classList.add("active"),n.innerText=""}h.onclick=()=>_("no"),E.onclick=()=>_("en"),m.onclick=K,b.onclick=j,k.oninput=B,f.onclick=async()=>{n.innerText="";const w=document.getElementById("loginEmail").value.trim(),y=document.getElementById("loginPassword").value,H=await _t(w,y);H.success?i():n.innerText=H.error},p.onclick=async()=>{n.innerText="";const w=t[s],y=document.getElementById("registerFirstName").value.trim(),H=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,T=document.getElementById("registerRegion").value,I=document.getElementById("registerClub").value.trim(),c=document.getElementById("registerCode").value.trim();if(!y||!H){n.innerText=w.missingName;return}if(!Y||!ce||!X||!pe||!c){n.innerText=w.missingFields;return}if(!se){n.innerText=w.missingDivision;return}if(Y!==ce){n.innerText=w.emailMismatch;return}if(X!==pe){n.innerText=w.passwordMismatch;return}if(D(X).score<=1){n.innerText=w.weakPassword;return}if(!Dt().valid){n.innerText=w.gdprRequired;return}const v=await Nt(Y,X,c,y,H,se,ae,a,T,I);v.success?i():n.innerText=v.error},_("no"),B()}async function Ot(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"users",i.uid),{...e,updatedAt:Ie()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function jt(){const e=W();if(!e)return null;try{const i=await be(U(O,"users",e.uid));return i.exists()?{uid:e.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function Ut(e){try{const i=await be(U(O,"users",e));return i.exists()?{uid:e,...i.data()}:null}catch(i){return console.error("Get user by ID error:",i),null}}async function Ht(){const e=U(O,"counters","matchId");try{const i=await be(e);if(!i.exists())return await Ne(e,{value:1}),1;const s=i.data().value+1;return await de(e,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function zt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await Ht(),s={id:t,...e,searchable:e.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:Ie(),updatedAt:Ie()};return await Ne(U(O,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function Ee(e,i){if(!W())return{success:!1,error:"Not authenticated"};try{return await de(U(O,"matches",e.toString()),{...i,updatedAt:Ie()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Gt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await be(U(O,"matches",e.toString()));return t.exists()?t.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await Pt(U(O,"matches",e.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(t){return console.error("Delete match error:",t),{success:!1,error:t.message}}}async function Kt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=e.toString().trim(),s=await Vt(),a=s.find(n=>n.id&&n.id.toString()===t);return a?{success:!0,match:a}:{success:!1,error:"Du har ikke tilgang til denne matchen. Bruk invitasjoner for å få tilgang."}}catch(t){return console.error("Search match error:",t),{success:!1,error:t.message}}}async function Vt(){const e=W();if(!e)return[];try{const i=$e(Le(O,"matches"),Fe("participants","array-contains",e.uid)),t=await He(i),s=[];return t.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,n)=>{var m,b;const r=a.date||((m=a.createdAt)==null?void 0:m.toDate())||new Date(0);return(n.date||((b=n.createdAt)==null?void 0:b.toDate())||new Date(0))-r}),s}catch(i){return console.error("Get user matches error:",i),[]}}function qt(e){const i=W();if(!i)return()=>{};const t=$e(Le(O,"matches"),Fe("participants","array-contains",i.uid));return ze(t,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),n.sort((r,u)=>{var f,p;const m=r.date||((f=r.createdAt)==null?void 0:f.toDate())||new Date(0);return(u.date||((p=u.createdAt)==null?void 0:p.toDate())||new Date(0))-m}),e(n)},a=>{console.error("Listen to matches error:",a)})}function Wt(e,i){return ze(U(O,"matches",e.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Listen to match error:",s)})}async function Ge(e,i){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{console.log("🔍 Søker etter bruker med email:",e);const s=$e(Le(O,"users"),Fe("email","==",e)),a=await He(s);if(a.empty)return console.error("❌ Bruker ikke funnet:",e),{success:!1,error:"Bruker ikke funnet"};const n=a.docs[0],r=n.id;return console.log("✅ Bruker funnet:",r,n.data()),console.log("📨 Sender invitasjon..."),await Ne(U(O,"users",r,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:t.email,invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log("✅ Invitasjon sendt!"),{success:!0}}catch(s){return console.error("❌ Send invitation error:",s),{success:!1,error:s.message}}}async function Ke(e){const i=W();if(!i)return[];try{const t=e.toLowerCase().trim();if(t.length===0)return[];console.log("🔍 Søker etter brukere:",t);const s=await He(Le(O,"users")),a=[];return s.forEach(n=>{const r=n.data(),u=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),m=(r.email||"").toLowerCase();n.id!==i.uid&&(u.includes(t)||m.includes(t))&&a.push({uid:n.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(`✅ Fant ${a.length} brukere`),a}catch(t){return console.error("❌ Search users error:",t),[]}}async function Jt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"matches",e.toString()),{participants:st(i.uid)}),await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"accepted"}),{success:!0}}catch(t){return console.error("Accept invitation error:",t),{success:!1,error:t.message}}}async function Yt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function Zt(e){const i=W();if(!i)return()=>{};const t=Le(O,"users",i.uid,"invitations"),s=$e(t,Fe("status","==","pending"));return ze(s,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),e(n)})}function Qt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xt={exports:{}};(function(e){var i=function(t){var s=Object.prototype,a=s.hasOwnProperty,n=Object.defineProperty||function(c,l,v){c[l]=v.value},r,u=typeof Symbol=="function"?Symbol:{},m=u.iterator||"@@iterator",b=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(c,l,v){return Object.defineProperty(c,l,{value:v,enumerable:!0,configurable:!0,writable:!0}),c[l]}try{p({},"")}catch{p=function(l,v,S){return l[v]=S}}function h(c,l,v,S){var x=l&&l.prototype instanceof D?l:D,N=Object.create(x.prototype),z=new ae(S||[]);return n(N,"_invoke",{value:ce(c,v,z)}),N}t.wrap=h;function E(c,l,v){try{return{type:"normal",arg:c.call(l,v)}}catch(S){return{type:"throw",arg:S}}}var k="suspendedStart",P="suspendedYield",C="executing",L="completed",M={};function D(){}function B(){}function _(){}var K={};p(K,m,function(){return this});var j=Object.getPrototypeOf,w=j&&j(j(T([])));w&&w!==s&&a.call(w,m)&&(K=w);var y=_.prototype=D.prototype=Object.create(K);B.prototype=_,n(y,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:B,configurable:!0}),B.displayName=p(_,f,"GeneratorFunction");function H(c){["next","throw","return"].forEach(function(l){p(c,l,function(v){return this._invoke(l,v)})})}t.isGeneratorFunction=function(c){var l=typeof c=="function"&&c.constructor;return l?l===B||(l.displayName||l.name)==="GeneratorFunction":!1},t.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,_):(c.__proto__=_,p(c,f,"GeneratorFunction")),c.prototype=Object.create(y),c},t.awrap=function(c){return{__await:c}};function Y(c,l){function v(N,z,V,J){var q=E(c[N],c,z);if(q.type==="throw")J(q.arg);else{var Be=q.arg,we=Be.value;return we&&typeof we=="object"&&a.call(we,"__await")?l.resolve(we.__await).then(function(ne){v("next",ne,V,J)},function(ne){v("throw",ne,V,J)}):l.resolve(we).then(function(ne){Be.value=ne,V(Be)},function(ne){return v("throw",ne,V,J)})}}var S;function x(N,z){function V(){return new l(function(J,q){v(N,z,J,q)})}return S=S?S.then(V,V):V()}n(this,"_invoke",{value:x})}H(Y.prototype),p(Y.prototype,b,function(){return this}),t.AsyncIterator=Y,t.async=function(c,l,v,S,x){x===void 0&&(x=Promise);var N=new Y(h(c,l,v,S),x);return t.isGeneratorFunction(l)?N:N.next().then(function(z){return z.done?z.value:N.next()})};function ce(c,l,v){var S=k;return function(N,z){if(S===C)throw new Error("Generator is already running");if(S===L){if(N==="throw")throw z;return I()}for(v.method=N,v.arg=z;;){var V=v.delegate;if(V){var J=X(V,v);if(J){if(J===M)continue;return J}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(S===k)throw S=L,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);S=C;var q=E(c,l,v);if(q.type==="normal"){if(S=v.done?L:P,q.arg===M)continue;return{value:q.arg,done:v.done}}else q.type==="throw"&&(S=L,v.method="throw",v.arg=q.arg)}}}function X(c,l){var v=l.method,S=c.iterator[v];if(S===r)return l.delegate=null,v==="throw"&&c.iterator.return&&(l.method="return",l.arg=r,X(c,l),l.method==="throw")||v!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+v+"' method")),M;var x=E(S,c.iterator,l.arg);if(x.type==="throw")return l.method="throw",l.arg=x.arg,l.delegate=null,M;var N=x.arg;if(!N)return l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,M;if(N.done)l[c.resultName]=N.value,l.next=c.nextLoc,l.method!=="return"&&(l.method="next",l.arg=r);else return N;return l.delegate=null,M}H(y),p(y,f,"Generator"),p(y,m,function(){return this}),p(y,"toString",function(){return"[object Generator]"});function pe(c){var l={tryLoc:c[0]};1 in c&&(l.catchLoc=c[1]),2 in c&&(l.finallyLoc=c[2],l.afterLoc=c[3]),this.tryEntries.push(l)}function se(c){var l=c.completion||{};l.type="normal",delete l.arg,c.completion=l}function ae(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(pe,this),this.reset(!0)}t.keys=function(c){var l=Object(c),v=[];for(var S in l)v.push(S);return v.reverse(),function x(){for(;v.length;){var N=v.pop();if(N in l)return x.value=N,x.done=!1,x}return x.done=!0,x}};function T(c){if(c){var l=c[m];if(l)return l.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var v=-1,S=function x(){for(;++v<c.length;)if(a.call(c,v))return x.value=c[v],x.done=!1,x;return x.value=r,x.done=!0,x};return S.next=S}}return{next:I}}t.values=T;function I(){return{value:r,done:!0}}return ae.prototype={constructor:ae,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(se),!c)for(var l in this)l.charAt(0)==="t"&&a.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=r)},stop:function(){this.done=!0;var c=this.tryEntries[0],l=c.completion;if(l.type==="throw")throw l.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var l=this;function v(J,q){return N.type="throw",N.arg=c,l.next=J,q&&(l.method="next",l.arg=r),!!q}for(var S=this.tryEntries.length-1;S>=0;--S){var x=this.tryEntries[S],N=x.completion;if(x.tryLoc==="root")return v("end");if(x.tryLoc<=this.prev){var z=a.call(x,"catchLoc"),V=a.call(x,"finallyLoc");if(z&&V){if(this.prev<x.catchLoc)return v(x.catchLoc,!0);if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else if(z){if(this.prev<x.catchLoc)return v(x.catchLoc,!0)}else if(V){if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(c,l){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.tryLoc<=this.prev&&a.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var x=S;break}}x&&(c==="break"||c==="continue")&&x.tryLoc<=l&&l<=x.finallyLoc&&(x=null);var N=x?x.completion:{};return N.type=c,N.arg=l,x?(this.method="next",this.next=x.finallyLoc,M):this.complete(N)},complete:function(c,l){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&l&&(this.next=l),M},finish:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.finallyLoc===c)return this.complete(v.completion,v.afterLoc),se(v),M}},catch:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.tryLoc===c){var S=v.completion;if(S.type==="throw"){var x=S.arg;se(v)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(c,l,v){return this.delegate={iterator:T(c),resultName:l,nextLoc:v},this.method==="next"&&(this.arg=r),M}},t}(e.exports);try{regeneratorRuntime=i}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})(Xt);var Ve=(e,i)=>`${e}-${i}-${Math.random().toString(16).slice(3,8)}`;const ei=Ve;let Ze=0;var nt=({id:e,action:i,payload:t={}})=>{let s=e;return typeof s>"u"&&(s=ei("Job",Ze),Ze+=1),{id:s,action:i,payload:t}},ye={};let qe=!1;ye.logging=qe;ye.setLogging=e=>{qe=e};ye.log=(...e)=>qe?console.log.apply(void 0,e):null;const ti=nt,{log:Te}=ye,ii=Ve;let Qe=0;var si=()=>{const e=ii("Scheduler",Qe),i={},t={};let s=[];Qe+=1;const a=()=>s.length,n=()=>Object.keys(i).length,r=()=>{if(s.length!==0){const p=Object.keys(i);for(let h=0;h<p.length;h+=1)if(typeof t[p[h]]>"u"){s[0](i[p[h]]);break}}},u=(p,h)=>new Promise((E,k)=>{const P=ti({action:p,payload:h});s.push(async C=>{s.shift(),t[C.id]=P;try{E(await C[p].apply(void 0,[...h,P.id]))}catch(L){k(L)}finally{delete t[C.id],r()}}),Te(`[${e}]: Add ${P.id} to JobQueue`),Te(`[${e}]: JobQueue length=${s.length}`),r()});return{addWorker:p=>(i[p.id]=p,Te(`[${e}]: Add ${p.id}`),Te(`[${e}]: Number of workers=${n()}`),r(),p.id),addJob:async(p,...h)=>{if(n()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(p,h)},terminate:async()=>{Object.keys(i).forEach(async p=>{await i[p].terminate()}),s=[]},getQueueLen:a,getNumWorkers:n}};function ai(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ni=e=>{const i={};return typeof WorkerGlobalScope<"u"?i.type="webworker":typeof document=="object"?i.type="browser":typeof process=="object"&&typeof ai=="function"&&(i.type="node"),typeof e>"u"?i:i[e]};const ri=ni("type")==="browser",oi=ri?e=>new URL(e,window.location.href).href:e=>e;var li=e=>{const i={...e};return["corePath","workerPath","langPath"].forEach(t=>{e[t]&&(i[t]=oi(i[t]))}),i},rt={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const di="7.0.0",ci={version:di};var pi={workerBlobURL:!0,logger:()=>{}};const ui=ci.version,gi=pi;var vi={...gi,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${ui}/dist/worker.min.js`},mi=({workerPath:e,workerBlobURL:i})=>{let t;if(Blob&&URL&&i){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});t=new Worker(URL.createObjectURL(s))}else t=new Worker(e);return t},hi=e=>{e.terminate()},fi=(e,i)=>{e.onmessage=({data:t})=>{i(t)}},bi=async(e,i)=>{e.postMessage(i)};const Oe=e=>new Promise((i,t)=>{const s=new FileReader;s.onload=()=>{i(s.result)},s.onerror=({target:{error:{code:a}}})=>{t(Error(`File could not be read! Code=${a}`))},s.readAsArrayBuffer(e)}),Ue=async e=>{let i=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?i=atob(e.split(",")[1]).split("").map(t=>t.charCodeAt(0)):i=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(i=await Ue(e.src)),e.tagName==="VIDEO"&&(i=await Ue(e.poster)),e.tagName==="CANVAS"&&await new Promise(t=>{e.toBlob(async s=>{i=await Oe(s),t()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const t=await e.convertToBlob();i=await Oe(t)}else(e instanceof File||e instanceof Blob)&&(i=await Oe(e));return new Uint8Array(i)};var yi=Ue;const wi=vi,ki=mi,xi=hi,Si=fi,Li=bi,Pi=yi;var Ei={defaultOptions:wi,spawnWorker:ki,terminateWorker:xi,onMessage:Si,send:Li,loadImage:Pi};const Ti=li,Z=nt,{log:Xe}=ye,Mi=Ve,re=rt,{defaultOptions:Ii,spawnWorker:Ci,terminateWorker:_i,onMessage:Ni,loadImage:et,send:$i}=Ei;let tt=0;var ot=async(e="eng",i=re.LSTM_ONLY,t={},s={})=>{const a=Mi("Worker",tt),{logger:n,errorHandler:r,...u}=Ti({...Ii,...t}),m={},b=typeof e=="string"?e.split("+"):e;let f=i,p=s;const h=[re.DEFAULT,re.LSTM_ONLY].includes(i)&&!u.legacyCore;let E,k;const P=new Promise((T,I)=>{k=T,E=I}),C=T=>{E(T.message)};let L=Ci(u);L.onerror=C,tt+=1;const M=({id:T,action:I,payload:c})=>new Promise((l,v)=>{Xe(`[${a}]: Start ${T}, action=${I}`);const S=`${I}-${T}`;m[S]={resolve:l,reject:v},$i(L,{workerId:a,jobId:T,action:I,payload:c})}),D=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),B=T=>M(Z({id:T,action:"load",payload:{options:{lstmOnly:h,corePath:u.corePath,logging:u.logging}}})),_=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:"writeFile",args:[T,I]}})),K=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"readFile",args:[T,{encoding:"utf8"}]}})),j=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"unlink",args:[T]}})),w=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:T,args:I}})),y=(T,I)=>M(Z({id:I,action:"loadLanguage",payload:{langs:T,options:{langPath:u.langPath,dataPath:u.dataPath,cachePath:u.cachePath,cacheMethod:u.cacheMethod,gzip:u.gzip,lstmOnly:[re.DEFAULT,re.LSTM_ONLY].includes(f)&&!u.legacyLang}}})),H=(T,I,c,l)=>M(Z({id:l,action:"initialize",payload:{langs:T,oem:I,config:c}})),Y=(T="eng",I,c,l)=>{if(h&&[re.TESSERACT_ONLY,re.TESSERACT_LSTM_COMBINED].includes(I))throw Error("Legacy model requested but code missing.");const v=I||f;f=v;const S=c||p;p=S;const N=(typeof T=="string"?T.split("+"):T).filter(z=>!b.includes(z));return b.push(...N),N.length>0?y(N,l).then(()=>H(T,v,S,l)):H(T,v,S,l)},ce=(T={},I)=>M(Z({id:I,action:"setParameters",payload:{params:T}})),X=async(T,I={},c={text:!0},l)=>M(Z({id:l,action:"recognize",payload:{image:await et(T),options:I,output:c}})),pe=async(T,I)=>{if(h)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return M(Z({id:I,action:"detect",payload:{image:await et(T)}}))},se=async()=>(L!==null&&(_i(L),L=null),Promise.resolve());Ni(L,({workerId:T,jobId:I,status:c,action:l,data:v})=>{const S=`${l}-${I}`;if(c==="resolve")Xe(`[${T}]: Complete ${I}`),m[S].resolve({jobId:I,data:v}),delete m[S];else if(c==="reject")if(m[S].reject(v),delete m[S],l==="load"&&E(v),r)r(v);else throw Error(v);else c==="progress"&&n({...v,userJobId:I})});const ae={id:a,worker:L,load:D,writeText:_,readText:K,removeFile:j,FS:w,reinitialize:Y,setParameters:ce,recognize:X,detect:pe,terminate:se};return B().then(()=>y(e)).then(()=>H(e,i,s)).then(()=>k(ae)).catch(()=>{}),P};const lt=ot,Fi=async(e,i,t)=>{const s=await lt(i,1,t);return s.recognize(e).finally(async()=>{await s.terminate()})},Ai=async(e,i)=>{const t=await lt("osd",0,i);return t.detect(e).finally(async()=>{await t.terminate()})};var Ri={recognize:Fi,detect:Ai},Di={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Bi={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Oi=si,ji=ot,Ui=Ri,Hi=Di,zi=rt,Gi=Bi,{setLogging:Ki}=ye;var Vi={languages:Hi,OEM:zi,PSM:Gi,createScheduler:Oi,createWorker:ji,setLogging:Ki,...Ui};const qi=Qt(Vi);let g,R=null,ue="all",$=[],ke=null,xe=null;const Wi={no:{tracker:"INSIGHT",tagline:"Analyse. Prognose. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Prognosis. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let dt="no";function d(e){return Wi[dt][e]||e}const it={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},Ji={Standard:{minor:20,major:17},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:20,major:17}},Yi=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],Zi={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Qi=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Xi=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function es(e,i){const t=Ji[e];return t&&(t[i]||t.minor)||15}function Se(e,i,t){return Math.max(0,Math.ceil(e/es(i,t))-1)}function icStageShots(e){return Math.max(0,((e==null?void 0:e.paperTargets)||0)*2+((e==null?void 0:e.poppers)||0)+((e==null?void 0:e.plates)||0))}function icStageMaxPts(e){return icStageShots(e)*10}function icResultPF(e){const i=(e||"").toString().toLowerCase();return i==="major"?"major":"minor"}function icScoreFromHits(e,i,t,s,a,n){const r=it[icResultPF(e)]||it.minor;return Math.max(0,(i||0)*r.A+(t||0)*r.C+(s||0)*r.D+(a||0)*r.miss+(n||0)*r.ns+((arguments.length>6?arguments[6]:0)||0)*r.proc)}let icResultEntryMode="ocr",icUploadShooterSel=null;function icSetResultDialogMode(e){icResultEntryMode=e;const i=o("ocr-confirm-title"),t=o("ocr-confirm-desc"),s=o("ocr-save-btn");i&&(i.textContent=e==="manual"?"Registrer resultat":"Bekreft resultat"),t&&(t.textContent=e==="manual"?"Legg inn resultat manuelt. Poeng beregnes automatisk fra Minor/Major og treffbildet.":"Kontroller og rediger verdiene fra skanningen. Poeng beregnes automatisk fra Minor/Major og treffbildet."),s&&(s.textContent=e==="manual"?"Lagre manuelt resultat":"Lagre resultat")}function icRecalcPoints(e){const i=o(e+"-points");if(!i)return 0;const t=A(e+"-a",0),s=A(e+"-c",0),a=A(e+"-d",0),n=A(e+"-miss",0),r=A(e+"-ns",0),u=A(e+"-proc",0),m=e==="ocr"?icUploadShooterSel||F("upload-shooter-select")||icCurrentShooterId():icCurrentShooterId(),b=$.find(f=>f.id!=null&&f.id.toString()===String(R)),p=b?icFindShooter(b,m):null,h=icResultPF((p==null?void 0:p.pf)||g.powerFactor||"minor"),E=icScoreFromHits(h,t,s,a,n,r,u);return i.value=E,E}function icOpenManualResult(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen aktiv match valgt");return}const i=o("upload-stage-select"),t=o("upload-shooter-select");if(!i.value||!t.value){alert("Velg stage og skytter");return}Me=i.value,icUploadShooterSel=t.value,icSetResultDialogMode("manual"),o("ocr-time").value="",o("ocr-a").value=0,o("ocr-c").value=0,o("ocr-d").value=0,o("ocr-miss").value=0,o("ocr-ns").value=0,o("ocr-proc").value=0,icRecalcPoints("ocr"),G("modal-upload-result"),ie("modal-ocr-confirm")}function icCurrentShooterId(){const e=Pe();return e&&e.uid?e.uid:"me"}function icFindShooter(e,i){if(!e||!e.shooters)return null;for(const t of e.shooters)if(t.id===i||i==="me"&&t.isMe)return t;return null}function icCurrentShooter(e){const i=icCurrentShooterId();return icFindShooter(e,i)||icFindShooter(e,"me")}function icLegacyResults(e){return[]}function icCurrentResults(e){const i=icCurrentShooter(e);if(i&&i.stages&&i.stages.length)return i.stages.slice().sort((t,s)=>(t.num||0)-(s.num||0));return[]}function icStageDefs(e){if(!e||!e.stages)return[];return e.stages.filter(i=>i&&((i.number!=null)||(i.num!=null)||i.name||i.paperTargets||i.poppers||i.plates)).map((i,t)=>{const s=i.number!=null?i.number:i.num!=null?i.num:t+1;return{number:s,name:i.name||("Stage "+s),paperTargets:i.paperTargets||0,poppers:i.poppers||0,plates:i.plates||0,noShoots:i.noShoots||0,bonusPaperTargets:i.bonusPaperTargets||0,bonusIncluded:!!i.bonusIncluded}}).sort((i,t)=>(i.number||0)-(t.number||0))}async function icEnsureShooter(e,i){e.shooters||(e.shooters=[]);let t=icFindShooter(e,i);if(t)return t;const s=icCurrentShooterId();if(i===s||i==="me")return t={id:s,isMe:!0,firstName:g.firstName||"Meg",lastName:g.lastName||"",division:g.division||"Classic",pf:g.powerFactor||"minor",club:g.club||"",stages:[]},e.shooters.push(t),t;try{const a=await Ut(i);return t={id:i,isMe:!1,firstName:(a==null?void 0:a.firstName)||"Skytter",lastName:(a==null?void 0:a.lastName)||"",division:(a==null?void 0:a.division)||"Classic",pf:(a==null?void 0:a.powerFactor)||"minor",club:(a==null?void 0:a.club)||"",stages:[]},e.shooters.push(t),t}catch{return null}}function icUpsertStageResult(e,i){e.stages||(e.stages=[]);const t=e.stages.findIndex(s=>(s.num||s.number)==i.num);t>=0?e.stages[t]={...e.stages[t],...i}:e.stages.push(i),e.stages.sort((s,a)=>(s.num||0)-(a.num||0))}function icFormFromResults(e,i,t){const s=(e||[]).filter(m=>m&&m.time&&m.pts&&(!i||(m.num||m.number)<=i));if(!s.length)return null;const a=(t==null?void 0:t.division)||g.division||"Classic",n=(t==null?void 0:t.pf)||g.powerFactor||"minor",r=(t==null?void 0:t.draw)||g.draw||1.42,u=(t==null?void 0:t.reloadTime)||g.reloadTime||1.8;let m=0,b=0,f=0,p=0,h=0,E=0;for(const k of s){const P=icStageShots(k);if(!P)continue;const C=Se(P,a,n),L=(k.time||0)-r-C*u;L>0&&(m+=P,b+=L,f+=k.a||0,p+=k.c||0,h+=k.d||0,E+=k.miss||0)}if(!m||!b)return null;const k=f+p+h+E;return{avgSplit:b/m,aPercent:k>0?f/k:0,cPercent:k>0?p/k:0,dPercent:k>0?h/k:0,missPercent:k>0?E/k:0,completedStages:s.length,division:a,pf:n,draw:r,reloadTime:u}}function icProjectNext(e,i){if(!e||!i)return null;const t=icStageShots(i);if(!t)return null;const s=Se(t,e.division||"Classic",e.pf||"minor"),a=e.draw+t*e.avgSplit+s*e.reloadTime,n=it[e.pf]||it.minor,r=t*(e.aPercent*n.A+e.cPercent*n.C+e.dPercent*n.D),u=a>0?r/a:0;return{shots:t,reloads:s,expTime:a,expPts:r,maxPts:icStageMaxPts(i),estHF:u}}function ct(){const e=$.find(k=>k.id==R);if(!e)return null;const i=icCurrentShooter(e),t=icCurrentResults(e),s=icFormFromResults(t,null,i);return s?{avgSplit:s.avgSplit,completedStages:s.completedStages,totalStages:icStageDefs(e).length,aPercent:s.aPercent,cPercent:s.cPercent,dPercent:s.dPercent,missPercent:s.missPercent,division:s.division,pf:s.pf,draw:s.draw,reloadTime:s.reloadTime}:null}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function We(e){if(!e)return"";try{const i=dt==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function o(e){return document.getElementById(e)}function F(e){const i=o(e);return i?i.value:""}function he(e,i){const t=parseFloat(F(e));return isNaN(t)?i||0:t}function A(e,i){const t=parseInt(F(e));return isNaN(t)?i||0:t}function le(){const e=(g==null?void 0:g.firstName)||"",i=(g==null?void 0:g.lastName)||"";return(e.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function ts(e){var s;const i=await jt(),t=Pe();if(i?g=i:g={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null},$=await Vt(),$&&$.length>0){const a=new Date,n=$.filter(r=>r.status!=="finished"&&r.date);if(n.length>0){let r=n[0],u=Math.abs(new Date(n[0].date)-a);for(const m of n){const b=new Date(m.date),f=Math.abs(b-a);f<u&&(u=f,r=m)}R=r.id}}ke&&ke(),ke=qt(a=>{$=a,fe(),te()}),Zt(a=>{ee=a,Ye()}),e.innerHTML=`
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
        <div id="invitation-badge" style="display:none;position:absolute;top:-5px;right:-5px;background:#ef4444;color:white;border-radius:50%;width:20px;height:20px;font-size:12px;font-weight:bold;align-items:center;justify-content:center;">0</div>
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
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('prog')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="prog-chip-name">${d("no_match_selected")}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="prog-match-dropdown"></div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${le()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div class="card">
      <div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value">${g.draw||"—"}s</div><div class="stat-label">Draw</div></div>
        <div class="stat-block"><div class="stat-value">${g.reloadTime||"—"}s</div><div class="stat-label">Reload</div></div>
        <div class="stat-block"><div class="stat-value" id="prog-a-rate">—</div><div class="stat-label">A-andel</div></div>
      </div>
      <div id="prog-data-status" style="margin-top:12px;padding:12px;background:var(--bg);border-radius:8px;font-size:13px;color:var(--muted);text-align:center;display:none;">
        ℹ️ Ingen skutte stages ennå. Data vil vises etter at du har lagt til resultater.
      </div>
    </div>
    <div id="prog-stages-container"></div><div id="prog-stages-container"></div>
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
      <div class="profile-name" id="prof-name">${g.firstName||""} ${g.lastName||""}</div>
      <div class="profile-div" id="prof-div">${g.division||"—"} · ${g.club||"—"}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${g.powerFactor?ge(g.powerFactor):"—"}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${g.region||"—"}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${d("edit_profile")}</button>
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
        <input class="field-input" type="text" id="edit-firstname" value="${g.firstName||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("last_name")}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${g.lastName||""}">
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
        <input class="field-input" type="text" id="edit-club" value="${g.club||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("draw_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${g.draw||""}">
      </div>
      <div class="field-group">
        <div class="field-label">${d("reload_seconds")}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${g.reloadTime||""}">
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
      <div style="margin-bottom:15px;padding:10px;background:var(--bg);border-radius:8px;">
        <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Match:</div>
        <div id="upload-match-name" style="font-size:14px;font-weight:600;color:var(--text);">—</div>
      </div>
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
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><button class="btn-secondary" id="upload-manual-btn" onclick="icOpenManualResult()">Registrer manuelt</button><button class="btn-primary" id="upload-scan-btn" onclick="uploadAndScanResult(event)">Last opp og skann</button></div>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-ocr-confirm" onclick="closeModalOutside(event,'modal-ocr-confirm')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title" id="ocr-confirm-title">Bekreft resultat</div>
      <div class="modal-close" onclick="closeModal('modal-ocr-confirm')">✕</div>
    </div>
    <div class="modal-body">
      <div id="ocr-confirm-desc" style="margin-bottom:15px;color:var(--muted);font-size:13px;">Kontroller og rediger verdiene. Poeng beregnes automatisk fra Minor/Major og treffbildet.</div>
      <div class="field-group">
        <div class="field-label">Time (s)</div>
        <input class="field-input" type="number" step="0.01" id="ocr-time">
      </div>
      <div class="field-group">
        <div class="field-label">Points</div>
        <input class="field-input" type="number" id="ocr-points" readonly style="background:var(--bg);">
      </div>
      <div class="section-label" style="margin-top:15px;">Treffbilde</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">A</div>
          <input class="field-input" type="number" id="ocr-a" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">C</div>
          <input class="field-input" type="number" id="ocr-c" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">D</div>
          <input class="field-input" type="number" id="ocr-d" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Miss</div>
          <input class="field-input" type="number" id="ocr-miss" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
      </div>
      <div class="section-label" style="margin-top:15px;">Straffer</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">NS (No-Shoot)</div>
          <input class="field-input" type="number" id="ocr-ns" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Proc (Procedural)</div>
          <input class="field-input" type="number" id="ocr-proc" value="0" oninput="icRecalcPoints('ocr')" style="text-align:center;">
        </div>
      </div>
      <button class="btn-primary" id="ocr-save-btn" onclick="saveOCRResult()">Lagre resultat</button>
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
        <input class="field-input" type="number" id="new-result-points" readonly style="background:var(--bg);">
      </div>
      <div class="section-label" style="margin-top:15px;">Treffbilde</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">A</div>
          <input class="field-input" type="number" id="new-result-a" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">C</div>
          <input class="field-input" type="number" id="new-result-c" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">D</div>
          <input class="field-input" type="number" id="new-result-d" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Miss</div>
          <input class="field-input" type="number" id="new-result-miss" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
        </div>
      </div>
      <div class="section-label" style="margin-top:15px;">Straffer</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <div class="field-group">
          <div class="field-label">NS (No-Shoot)</div>
          <input class="field-input" type="number" id="new-result-ns" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
        </div>
        <div class="field-group">
          <div class="field-label">Proc (Procedural)</div>
          <input class="field-input" type="number" id="new-result-proc" value="0" oninput="icRecalcPoints('new-result')" style="text-align:center;">
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
  `,is(),gt(),te(),fe(),vt(),De()}function is(){window.switchTab=ss,window.setFilter=rs,window.openModal=ie,window.closeModal=G,window.closeModalOutside=ns,window.createMatch=os,window.searchMatchByIdHandler=ls,window.openEditProfile=Ns,window.saveProfileData=Fs,window.selectPF=$s,window.updatePFOptions=mt,window.calcPrognose=De,window.renderMatchList=fe,window.selectMatch=pt,window.addShooter=Os,window.addStageResult=js,window.handleLogout=Ks,window.openEditMatch=ps,window.saveEditMatch=us,window.openCreateStage=Re,window.openCreateStageFromEdit=ms,window.openCreateStageFromNewMatch=hs,window.openEditStage=fs,window.changeStageNumber=bs,window.changeStageField=ys,window.saveStage=ws,window.openInviteUser=ks,window.openInvitationsModal=Is,window.acceptInvitation=Cs,window.declineInvitation=_s,window.searchUsers=xs,window.toggleUserSelection=Ss,window.sendMultipleInvitations=Ls,window.searchUsersNewMatch=Ps,window.toggleUserNewMatch=Es,window.searchUsersEditMatch=Ts,window.toggleUserEditMatch=Ms,window.confirmDeleteMatch=gs,window.deleteMatchConfirmed=vs,window.uploadAndScanResult=Hs,window.saveOCRResult=Gs,window.icOpenManualResult=icOpenManualResult,window.openCreateStageFromUpload=Us,window.toggleMatchDropdown=ds,window.selectMatchFromDropdown=cs}function ss(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),o(e).classList.add("active");const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-profile"].indexOf(e),t=document.querySelectorAll(".tab-item");t[i]&&t[i].classList.add("active"),e==="screen-home"&&te(),e==="screen-matches"&&fe(),e==="screen-results"&&_e()}function ie(e){o(e).classList.add("open"),e==="modal-upload-result"&&as()}async function as(){const e=$.find(n=>n.id==R);if(!e)return;const i=o("upload-match-name");i&&(i.textContent=e.name||"Ukjent match");const t=o("upload-stage-select"),s=icStageDefs(e);if(t.innerHTML="",s.length>0)s.forEach(n=>{const r=document.createElement("option");r.value=n.number,r.textContent=n.name&&n.name!=="Stage "+n.number?`Stage ${n.number} - ${n.name}`:`Stage ${n.number}`,t.appendChild(r)});else{const n=document.createElement("option");n.value="",n.textContent="Ingen stages - opprett ny",t.appendChild(n)}const a=o("upload-shooter-select");a.innerHTML="";const n=new Set,r=icCurrentShooterId(),u=document.createElement("option");u.value=r,u.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",a.appendChild(u),n.add(r);if(e.participants&&e.participants.length>0)for(const m of e.participants)if(!n.has(m))try{const b=await Ut(m);if(b){const f=document.createElement("option");f.value=m,f.textContent=(b.firstName||"")+" "+(b.lastName||""),a.appendChild(f),n.add(m)}}catch(b){console.error("Error fetching user:",m,b)}e.shooters&&e.shooters.length>0&&e.shooters.forEach(m=>{if(!n.has(m.id)){const b=document.createElement("option");b.value=m.id,b.textContent=(m.firstName||"")+" "+(m.lastName||""),a.appendChild(b),n.add(m.id)}})}function G(e){o(e).classList.remove("open")}function ns(e,i){e.target.id===i&&G(i)}function rs(e,i){ue=e,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),i.classList.add("active"),fe()}async function os(){var t;const e={name:F("new-match-name")||"Ny match",type:F("new-match-type")||"Trening",date:F("new-match-date")||new Date().toISOString().split("T")[0],location:F("new-match-location")||"",plannedStages:A("new-match-stages",6),searchable:((t=o("new-match-searchable"))==null?void 0:t.checked)!==!1,status:"active",stages:[],shooters:[],stageDefs:[]},i=await zt(e);if(i.success){let s=0;for(const a of ve)(await Ge(a.email,{matchId:i.matchId,matchName:e.name})).success&&s++;G("modal-new-match"),o("new-match-name").value="",o("new-match-location").value="",o("new-match-stages").value="6",o("new-match-searchable")&&(o("new-match-searchable").checked=!0),o("new-match-user-search").value="",o("new-match-search-results").innerHTML="",ve=[],s>0&&alert(`Match opprettet! Invitasjoner sendt til ${s} bruker(e).`)}else alert("Kunne ikke opprette match: "+i.error)}async function ls(){const e=F("match-id-search").trim();if(!e){alert("Skriv inn et match-ID");return}const i=await Kt(e);if(i.success){const t=$.findIndex(s=>s.id&&s.id.toString()===i.match.id.toString());t!==-1?R=$[t].id:($.unshift(i.match),R=i.match.id),pt(R),oe&&oe("screen-home"),o("match-id-search").value=""}else alert(`Fant ingen match med ID ${e}${i.error?": "+i.error:""}`)}function pt(e){R=e!=null?e.toString():e;const i=$.find(t=>t.id!=null&&t.id.toString()===R);if(i){const t=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name"].forEach(a=>{const n=o(a);n&&(n.textContent=t)})}xe&&xe(),R&&(xe=Wt(R,t=>{const s=$.findIndex(a=>a.id!=null&&a.id.toString()===R);s!==-1&&t&&($[s]=t,te(),_e())})),te(),_e(),De()}function ds(e){const i=e+"-match-dropdown",t=o(i);if(!t)return;if(t.classList.contains("open")){t.classList.remove("open");return}document.querySelectorAll(".match-dropdown").forEach(a=>a.classList.remove("open"));let s="";$.length===0?s+='<div class="match-dropdown-item" style="color:var(--muted);text-align:center;">Ingen matcher ennå</div>':$.forEach(a=>{const n=a.id!=null&&a.id.toString()===String(R),r=a.id?"Match ID "+a.id+" "+a.name:a.name||"Match";s+='<div class="match-dropdown-item '+(n?"active":"")+`" onclick="selectMatchFromDropdown('`+a.id+"', '"+e+`')">`,s+='<div class="match-dropdown-dot"></div>',s+='<div class="match-dropdown-info">',s+='<div class="match-dropdown-name">'+r+"</div>",s+='<div class="match-dropdown-meta">'+We(a.date)+" · "+a.location+"</div>",s+="</div>",s+="</div>"}),t.innerHTML=s,t.classList.add("open")}function cs(e,i){pt(e);const t=i+"-match-dropdown",s=o(t);s&&s.classList.remove("open")}function ps(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}o("edit-match-name").value=e.name||"",o("edit-match-type").value=e.type||"Trening",o("edit-match-date").value=e.date||"",o("edit-match-location").value=e.location||"",o("edit-match-stages").value=e.plannedStages||0,o("edit-match-searchable")&&(o("edit-match-searchable").checked=e.searchable!==!1),o("edit-match-finished")&&(o("edit-match-finished").checked=e.status==="finished");const i=o("edit-match-rival");i.innerHTML='<option value="">Ingen rival valgt</option>';const t=document.createElement("option");t.value="me",t.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",i.appendChild(t),e.shooters&&e.shooters.length>0&&e.shooters.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.firstName+" "+n.lastName,i.appendChild(r)}),e.rivalId&&(i.value=e.rivalId),o("edit-match-user-search").value="",o("edit-match-search-results").innerHTML="",me=[];const s=Pe(),a=o("delete-match-btn");a&&s&&e.ownerId===s.uid?a.style.display="block":a&&(a.style.display="none"),ie("modal-edit-match")}async function us(){var s,a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}const i={name:F("edit-match-name")||e.name,type:F("edit-match-type")||e.type,date:F("edit-match-date")||e.date,location:F("edit-match-location")||e.location,plannedStages:A("edit-match-stages",e.plannedStages),searchable:((s=o("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=o("edit-match-finished"))!=null&&a.checked?"finished":"active",rivalId:F("edit-match-rival")||null},t=await Ee(e.id,i);if(t.success){let n=0;for(const r of me)(await Ge(r.email,{matchId:e.id,matchName:i.name})).success&&n++;G("modal-edit-match"),n>0&&alert(`Match oppdatert! Invitasjoner sendt til ${n} bruker(e).`)}else alert("Kunne ikke oppdatere match: "+t.error)}function gs(){const e=$.find(t=>t.id==R);if(!e){alert("Ingen match valgt");return}const i=e.id?"Match ID "+e.id+" "+e.name:e.name;o("delete-match-name").textContent=i,ie("modal-confirm-delete")}async function vs(){const e=$.find(t=>t.id==R);if(!e){alert("Ingen match valgt");return}const i=await Gt(e.id);i.success?(G("modal-confirm-delete"),G("modal-edit-match"),R=null,te(),fe(),alert("Match slettet")):alert("Kunne ikke slette match: "+i.error)}let Ce=null,Me=null;function Re(){var i;const e=$.find(t=>t.id==R);if(!e){alert("Ingen match valgt");return}Ce=null,o("stage-modal-title").textContent=d("create_stage"),o("stage-number").value=(((i=e.stages)==null?void 0:i.length)||0)+1,o("stage-name").value="",o("stage-paper-targets").value=0,o("stage-poppers").value=0,o("stage-plates").value=0,o("stage-no-shoots").value=0,o("stage-bonus-paper-targets").value=0,o("stage-bonus-included").checked=!1,ie("modal-create-stage")}function ms(){G("modal-edit-match"),Re()}function hs(){G("modal-new-match"),Re()}function fs(e){const i=$.find(s=>s.id==R);if(!i||!i.stages||!i.stages[e]){alert("Stage ikke funnet");return}Ce=e;const t=i.stages[e];o("stage-modal-title").textContent=d("edit_stage"),o("stage-number").value=t.number||e+1,o("stage-name").value=t.name||"",o("stage-paper-targets").value=t.paperTargets||0,o("stage-poppers").value=t.poppers||0,o("stage-plates").value=t.plates||0,o("stage-no-shoots").value=t.noShoots||0,o("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,o("stage-bonus-included").checked=t.bonusIncluded||!1,ie("modal-create-stage")}function bs(e){const i=o("stage-number"),t=Math.max(1,parseInt(i.value)+e);i.value=t}function ys(e,i){const t=o("stage-"+e),s=Math.max(0,parseInt(t.value)+i);t.value=s}async function ws(){var a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}const i={number:A("stage-number",1),name:F("stage-name")||"",paperTargets:A("stage-paper-targets",0),poppers:A("stage-poppers",0),plates:A("stage-plates",0),noShoots:A("stage-no-shoots",0),bonusPaperTargets:A("stage-bonus-paper-targets",0),bonusIncluded:((a=o("stage-bonus-included"))==null?void 0:a.checked)||!1},t=e.stages||[];Ce!==null?t[Ce]=i:t.push(i);const s=await Ee(e.id,{stages:t});s.success?G("modal-create-stage"):alert("Kunne ikke lagre stage: "+s.error)}let ee=[],Q=[],ve=[],me=[];function ks(){if(!R){alert("Ingen match valgt");return}Q=[],o("user-search-input").value="",o("user-search-results").innerHTML="",o("send-invitations-btn").style.display="none",ie("modal-invite-user")}async function xs(){const e=F("user-search-input").trim();if(e.length===0){o("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await Ke(e),t=o("user-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=Q.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:18px;height:18px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:14px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s,ut()}function Ss(e,i,t){const s=Q.findIndex(a=>a.uid===e);s>-1?Q.splice(s,1):Q.push({uid:e,email:i,displayName:t}),ut()}function ut(){const e=o("send-invitations-btn");e&&(Q.length>0?(e.style.display="block",e.textContent=`Send invitasjoner (${Q.length} valgt)`):e.style.display="none")}async function Ls(){if(Q.length===0){alert("Ingen brukere valgt");return}const e=$.find(s=>s.id==R);if(!e)return;let i=0,t=0;for(const s of Q)(await Ge(s.email,{matchId:e.id,matchName:e.name})).success?i++:t++;G("modal-invite-user"),i>0&&alert(`Invitasjoner sendt til ${i} bruker(e)!`),t>0&&alert(`${t} invitasjon(er) feilet.`),Q=[]}async function Ps(){const e=F("new-match-user-search").trim();if(e.length===0){o("new-match-search-results").innerHTML="";return}const i=await Ke(e),t=o("new-match-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=ve.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s}function Es(e,i,t){const s=ve.findIndex(a=>a.uid===e);s>-1?ve.splice(s,1):ve.push({uid:e,email:i,displayName:t})}async function Ts(){console.log("🔍 searchUsersEditMatch called");const e=F("edit-match-user-search").trim();if(console.log("📝 Search term:",e),e.length===0){console.log("⚠️ Empty search term"),o("edit-match-search-results").innerHTML="";return}console.log("🌐 Calling searchUsersByNameOrEmail...");const i=await Ke(e);console.log("✅ Results received:",i);const t=o("edit-match-search-results");if(!t){console.error("❌ Container not found: edit-match-search-results");return}if(i.length===0){console.log("⚠️ No users found"),t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}console.log("🎨 Rendering",i.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=me.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
      <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
        <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
        <div>
          <div style="font-weight:600;">${n}</div>
          <div style="font-size:12px;color:#9ca3af;">${a.email}</div>
        </div>
      </label>
    `}),t.innerHTML=s,console.log("✅ HTML rendered to container")}function Ms(e,i,t){const s=me.findIndex(a=>a.uid===e);s>-1?me.splice(s,1):me.push({uid:e,email:i,displayName:t})}function Is(){Je(),ie("modal-invitations")}function Je(){const e=o("invitations-list");if(!e)return;if(!ee||ee.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d("no_invitations")+"</div></div>";return}let i="";ee.forEach((t,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+d("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+t.invitedBy+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+d("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+d("decline")+"</button>",i+="</div>",i+="</div>"}),e.innerHTML=i}async function Cs(e){const i=ee[e];if(!i)return;const t=await Jt(i.matchId);t.success?(ee.splice(e,1),Ye(),Je()):alert("Kunne ikke akseptere invitasjon: "+t.error)}async function _s(e){const i=ee[e];if(!i)return;const t=await Yt(i.matchId);t.success?(ee.splice(e,1),Ye(),Je()):alert("Kunne ikke avvise invitasjon: "+t.error)}function Ye(){const e=o("invitation-badge");if(!e)return;const i=ee.length;i>0?(e.textContent=i,e.style.display="flex"):e.style.display="none"}function te(){var a,n;const e=o("home-content");if(!e)return;const i=$.find(r=>r.id==R);if(!i){e.innerHTML=`
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>
    `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+i.name+"</div>",t+='<div class="mhc-meta">'+We(i.date)+" · "+i.type+"</div>",t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((n=i.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Ny stage</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',t+="</div>";const s=Pe();s&&i.ownerId===s.uid&&(t+='<div style="margin-top:10px;">',t+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',t+="</div>"),t+="</div>",i.stages&&i.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',i.stages.forEach((r,u)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+u+')">',t+='<div class="stage-num">S'+(r.number||u+1)+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(r.name||"Stage "+(r.number||u+1))+"</div>",t+='<div class="stage-meta">',r.paperTargets&&(t+="Paper: "+r.paperTargets+" "),r.poppers&&(t+="Poppers: "+r.poppers+" "),r.plates&&(t+="Plates: "+r.plates+" "),r.noShoots&&(t+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(t+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),t+="</div>",t+="</div>",t+="</div>"}),t+="</div>"),e.innerHTML=t}function fe(){const e=o("match-list-container");if(!e)return;let i=$.filter(s=>{if(ue==="all")return!0;if(ue==="active")return s.status!=="finished";if(ue==="trening")return s.type==="Trening";if(ue==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return ue===a});if(i.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let t="";i.forEach(s=>{var r;const a=s.id!=null&&s.id.toString()===String(R),n=s.id?"Match ID "+s.id+" "+s.name:s.name;t+='<div class="match-row">',t+='<div class="match-row-icon'+(a?" is-active":"")+`" onclick="selectMatch('`+s.id+`')">🏆</div>`,t+=`<div class="match-row-info" onclick="selectMatch('`+s.id+`')">`,t+='<div class="match-row-name">'+n+"</div>",t+='<div class="match-row-meta">'+We(s.date)+" · "+(s.location||s.type)+"</div>",t+="</div>",t+='<div class="match-row-right">',t+=`<button onclick="event.stopPropagation(); selectMatch('`+s.id+`'); openEditMatch();" style="padding:8px 16px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;margin-bottom:8px;">Rediger</button>`,t+='<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>",t+='<div class="match-stg-lbl">stages</div>',t+="</div>",t+="</div>"}),e.innerHTML=t}function _e(){var n;const e=o("results-content");if(!e)return;const i=$.find(r=>r.id!=null&&r.id.toString()===String(R));if(!i){e.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!i.shooters||i.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}let t='<div class="card">';t+='<div class="card-header"><div class="card-title">Standings</div></div>',t+='<div class="standings-table-wrap"><table class="standings-table">',t+='<thead><tr class="standings-header-row">',t+='<th class="standings-th standings-th-rank">#</th>',t+='<th class="standings-th standings-th-shooter">Skytter</th>',t+='<th class="standings-th standings-th-pts">Pts</th>',t+='<th class="standings-th standings-th-pct">%</th>',t+="</tr></thead>",t+="<tbody>";const s=i.shooters.map(r=>{var m;const u=((m=r.stages)==null?void 0:m.reduce((b,f)=>b+(f.pts||0),0))||0;return{...r,totalPts:u}}).sort((r,u)=>u.totalPts-r.totalPts),a=((n=s[0])==null?void 0:n.totalPts)||0;s.forEach((r,u)=>{const m=a>0?(r.totalPts/a*100).toFixed(2):"0.00";t+='<tr class="standings-row">',t+='<td class="standings-td standings-td-rank">'+(u+1)+"</td>",t+='<td class="standings-td standings-td-shooter">',t+='<div class="standings-shooter-name">'+r.firstName+" "+r.lastName+"</div>",t+='<div class="standings-shooter-meta">'+r.division+" · "+ge(r.pf||"minor")+"</div>",t+="</td>",t+='<td class="standings-td standings-td-pts">'+r.totalPts.toFixed(2)+"</td>",t+='<td class="standings-td standings-td-pct">'+m+"%</td>",t+="</tr>"}),t+="</tbody></table></div>",t+="</div>",e.innerHTML=t}function gt(){const e=le();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(u=>{const m=o(u);m&&(m.textContent=e)});const t=o("prof-name");t&&(t.textContent=(g.firstName||"")+" "+(g.lastName||""));const s=o("prof-div");s&&(s.textContent=(g.division||"—")+" · "+(g.club||"—"));const a=o("prof-badge-pf");a&&(a.textContent=g.powerFactor?ge(g.powerFactor):"—");const n=o("prof-badge-region");n&&(n.textContent=g.region||"—");const r={"info-firstname":g.firstName||"—","info-lastname":g.lastName||"—","info-division":g.division||"—","info-category":g.category||"—","info-pf":g.powerFactor?ge(g.powerFactor):"—","info-region":g.region||"—","info-club":g.club||"—"};Object.keys(r).forEach(u=>{const m=o(u);m&&(m.textContent=r[u])}),vt()}function vt(){const e=[];$.forEach(p=>{icCurrentResults(p).forEach(h=>e.push(h))});let i=0,t=0,s=0;e.forEach(p=>{i+=p.a||0,t+=(p.a||0)+(p.c||0)+(p.d||0),s+=p.hf||0});const a=e.length?(s/e.length).toFixed(2):"—",n=t?Math.round(i/t*100)+"%":"—",r=o("stat-matches");r&&(r.textContent=$.length);const u=o("stat-stages");u&&(u.textContent=e.length);const m=o("stat-avg-hf");m&&(m.textContent=a);const b=o("stat-a-rate");b&&(b.textContent=n);const f=o("prog-a-rate");f&&(f.textContent=n)}function Ns(){o("edit-firstname").value=g.firstName||"",o("edit-lastname").value=g.lastName||"",o("edit-club").value=g.club||"",o("edit-draw").value=g.draw||"",o("edit-reload").value=g.reloadTime||"";let e="";Yi.forEach(s=>{e+='<option value="'+s+'"'+(s===g.division?" selected":"")+">"+s+"</option>"}),o("edit-division").innerHTML=e;let i="";Qi.forEach(s=>{i+='<option value="'+s+'"'+(s===g.category?" selected":"")+">"+s+"</option>"}),o("edit-category").innerHTML=i;let t="";Xi.forEach(s=>{t+='<option value="'+s+'"'+(s===g.region?" selected":"")+">"+s+"</option>"}),o("edit-region").innerHTML=t,mt(),ie("modal-edit-profile")}function mt(){const e=F("edit-division"),i=Zi[e]||["minor","major"];let t="";i.forEach(s=>{const a=g.powerFactor===s;t+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"≥170 PF":"<170 PF")+"</div>",t+="</label>"}),o("pf-options").innerHTML=t,i.indexOf(g.powerFactor)<0&&(g.powerFactor=i[0])}function $s(e,i){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),e.classList.add("active"),g.powerFactor=i}async function Fs(){g.firstName=F("edit-firstname").trim()||"",g.lastName=F("edit-lastname").trim()||"",g.division=F("edit-division")||"",g.category=F("edit-category")||"",g.region=F("edit-region")||"",g.club=F("edit-club").trim()||"",g.draw=he("edit-draw")||null,g.reloadTime=he("edit-reload")||null;const e=await Ot(g),i=o("save-profile-btn");e.success?(i.textContent="✓ Lagret!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)):(i.textContent="❌ Feil!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)),gt(),De(),te(),G("modal-edit-profile")}function As(e,i,t,s){var k;if(!e||!e.rivalId||!i)return null;let a=0,n=0;e.stages&&e.stages.forEach(P=>{P.pts&&P.pts>0&&(a+=P.pts,n++)});let r=0,u="";if(e.rivalId==="me")u="Meg (baseline)",r=a;else{const P=(k=e.shooters)==null?void 0:k.find(C=>C.id===e.rivalId);P&&(u=P.firstName+" "+P.lastName,P.stages&&P.stages.forEach(C=>{C.pts&&C.pts>0&&(r+=C.pts)}))}const m=a-r,b=m>0,f=Math.abs(m);let p="",h="",E=null;if(b)p=`LEDER ${f.toFixed(1)} pts`,f>20?h=`Meget god ledelse! Hold tempoet. Skytt ${(i.aPercent*100).toFixed(0)}%A som vanlig, unngå miss.`:f>10?h="God ledelse. Hold fokus på prosessen. Skytt som vanlig, unngå miss.":h=`Jevnt! Hold tempoet. Prøv å holde ${(i.aPercent*100).toFixed(0)}%A, unngå miss.`;else{p=`BAK ${f.toFixed(1)} pts`;const P=(e.plannedStages||6)-n;if(P>0){const C=f/P,L=g.draw||1.42,M=g.reloadTime||1.8,D=g.division||"Classic",B=g.powerFactor||"minor",_=Se(s,D,B),K=L+s*i.avgSplit+_*M+3;E=(t*s+C)/K,f>20?h=`Må presse hardt! Target HF ${E.toFixed(2)} vs estimat ${t.toFixed(2)}. Øk tempo litt, hold ${(i.aPercent*100).toFixed(0)}%A.`:f>10?h=`Må presse litt over vanlig nivå. Target HF ${E.toFixed(2)} vs estimat ${t.toFixed(2)}.`:h=`Meget jevnt! Hold fokus på prosessen. Skytt ${(i.aPercent*100).toFixed(0)}%A som vanlig, unngå miss.`}else h=`BAK ${f.toFixed(1)} pts. Ingen stages igjen.`}return{statusText:p,advice:h,rivalName:u,gap:m,targetHF:E}}function De(){const e=ct(),i=o("prog-a-rate");i&&(i.textContent=e&&e.aPercent!==void 0?Math.round(e.aPercent*100)+"%":"—");const t=o("prog-data-status");t&&(t.style.display=!e||e.completedStages===0?"block":"none"),Rs()}function Rs(){const e=$.find(a=>a.id==R),i=o("prog-stages-container");if(!i||!e){i&&(i.innerHTML="");return}const t=icStageDefs(e);if(!t.length){i.innerHTML="";return}const s=icCurrentShooter(e),a=icCurrentResults(e),n=icCurrentShooterId();let r="";t.forEach(u=>{const m=[];e.shooters&&e.shooters.forEach(E=>{const k=(E.stages||[]).find(P=>(P.num||P.number)==u.number&&P.time&&P.pts);k&&m.push({id:E.id,name:((E.firstName||"")+" "+(E.lastName||"")).trim()||"Skytter",pts:k.pts||0,hf:k.hf||0,isMe:E.id===n||E.isMe,res:k})});if(!m.some(E=>E.isMe)){const E=a.find(k=>(k.num||k.number)==u.number&&k.time&&k.pts);E&&m.push({id:n,name:((g.firstName||"")+" "+(g.lastName||"")).trim()||"Meg",pts:E.pts||0,hf:E.hf||0,isMe:!0,res:E})}const b=m.length>0;r+='<div class="card" style="margin-top:15px;border-left:4px solid '+(b?"var(--green)":"var(--muted)")+';">',r+='<div class="card-header">',r+='<div class="card-title">Stage '+u.number+". "+(u.name||("Stage "+u.number))+"</div>",r+='<span class="badge '+(b?"badge-green":"badge-gray")+'">'+(b?"✅ SKUTT":"⏳ IKKE SKUTT")+"</span>",r+="</div>";if(b){m.sort((E,k)=>k.pts-E.pts);const f=m.length>0?m[0].pts:0;r+='<div style="overflow-x:auto;margin-top:12px;">',r+='<table style="width:100%;font-size:13px;border-collapse:collapse;">',r+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);">',r+='<th style="padding:8px;text-align:left;">#</th>',r+='<th style="padding:8px;text-align:left;">NAVN</th>',r+='<th style="padding:8px;text-align:right;">PTS</th>',r+='<th style="padding:8px;text-align:right;">%</th>',r+='<th style="padding:8px;text-align:right;">HF</th>',r+="</tr>",m.forEach((E,k)=>{const P=f>0?E.pts/f*100:0,C=E.isMe?"background:var(--accent-fade);font-weight:600;":"";r+='<tr style="'+C+'border-bottom:1px solid var(--border);">',r+='<td style="padding:8px;">'+(k+1)+"</td>",r+='<td style="padding:8px;">'+E.name+"</td>",r+='<td style="padding:8px;text-align:right;color:var(--accent);">'+E.pts.toFixed(1)+"</td>",r+='<td style="padding:8px;text-align:right;">'+P.toFixed(2)+"%</td>",r+='<td style="padding:8px;text-align:right;">'+(E.hf||0).toFixed(2)+"</td>",r+="</tr>"}),r+="</table>",r+="</div>";const p=a.filter(E=>(E.num||E.number)<=u.number).sort((E,k)=>(E.num||0)-(k.num||0)),h=m.find(E=>E.isMe),E=h?h.res:null,k=icFormFromResults(p,u.number,s);if(k){const P=t.find(C=>C.number>u.number&&!a.some(L=>(L.num||L.number)==C.number)),C=P?icProjectNext(k,P):null;r+='<div style="margin-top:15px;padding:12px;background:var(--bg);border-radius:8px;">',r+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:13px;">',r+='<div><div style="color:var(--muted);margin-bottom:4px;">t/skudd</div><div style="font-weight:600;">'+k.avgSplit.toFixed(3)+"s</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:4px;">Treff</div><div style="font-weight:600;color:var(--green);">'+(k.aPercent*100).toFixed(0)+"%A</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:4px;">Est. HF neste</div><div style="font-weight:600;color:var(--accent);">'+(C?C.estHF.toFixed(2):"—")+"</div></div>",r+="</div>",r+="</div>",C&&(r+='<div style="margin-top:15px;padding:12px;background:var(--accent-fade);border-radius:8px;border-left:3px solid var(--accent);">',r+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">NESTE: '+(P.name||("STAGE "+P.number)).toUpperCase()+" ("+C.shots+" SKUDD, "+C.reloads+" RELOAD"+(C.reloads===1?"":"S")+", MAX "+C.maxPts+" PTS)</div>",r+='<div style="font-size:14px;line-height:1.5;">'+Ds(E,P,k,e)+"</div>",r+="</div>");const L=Bs(p.length>1?p[p.length-2]:null,E,k);L&&(r+='<div style="margin-top:15px;padding:12px;background:var(--card-bg);border-radius:8px;">',r+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">💢 REFLEKSJON</div>',r+='<div style="font-size:13px;line-height:1.5;color:var(--text);">'+L+"</div>",r+="</div>")}}else r+='<div style="padding:20px;text-align:center;color:var(--muted);font-size:13px;">Ingen resultater ennå. Last opp resultat eller legg til manuelt.</div>';r+="</div>"}),i.innerHTML=r}function Ds(e,i,t,s){if(!i||!t)return"Hold samme rytme som hittil.";const a=icStageShots(i),n=Se(a,t.division||"Classic",t.pf||"minor"),r=Math.round((t.aPercent||0)*100),u=t.avgSplit?t.avgSplit.toFixed(3):"0.000";return t.aPercent<.7?`Behold tempoet, men gi siktet litt mer tid. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Baseline nå er ${r}%A og ${u}s/skudd.`:t.avgSplit<.22?`Bra flyt. Ikke jag mer tempo enn nødvendig. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Hold ${r}%A og ${u}s/skudd.`:`Hold samme rytme som hittil. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Baseline nå er ${r}%A og ${u}s/skudd.`}function Bs(e,i,t){if(!e||!i||!t)return null;const s=icStageShots(e),a=icStageShots(i);if(!s||!a)return null;const n=((e.time||0)-t.draw-Se(s,t.division||"Classic",t.pf||"minor")*t.reloadTime)/s,r=((i.time||0)-t.draw-Se(a,t.division||"Classic",t.pf||"minor")*t.reloadTime)/a,u=s>0?(e.a||0)/s:0,m=a>0?(i.a||0)/a:0;if(r>n+.05&&m<u-.1)return`Tempo og treff falt fra forrige stage (${n.toFixed(3)}s → ${r.toFixed(3)}s/skudd, ${(u*100).toFixed(0)}%A → ${(m*100).toFixed(0)}%A). Tenk gjennom hva som stjal tid og fokus.`;if(r>n+.05)return`Tempoet falt fra forrige stage (${n.toFixed(3)}s → ${r.toFixed(3)}s/skudd). Reflekter over hva som stjal tid.`;if(m<u-.1)return`Treffbildet falt fra forrige stage (${(u*100).toFixed(0)}%A → ${(m*100).toFixed(0)}%A). Vurder om du presset for hardt.`;if(r<n-.03&&m>=u-.05)return`Bra flyt. Du gikk raskere enn forrige stage uten stort tap i treffbildet.`;return null}async function Os(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e)return;const i=F("new-shooter-firstname").trim(),t=F("new-shooter-lastname").trim(),s=F("new-shooter-division")||"Classic";if(!i||!t){alert("Fyll inn navn");return}const a={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:t,division:s,pf:"minor",club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(a),await Ee(e.id,e),G("modal-add-shooter"),_e()}async function js(){const e=$.find(f=>f.id!=null&&f.id.toString()===String(R));if(!e)return;const i=A("new-result-stage",1),t=he("new-result-time",0),s=icRecalcPoints("new-result"),a=A("new-result-a",0),n=A("new-result-c",0),r=A("new-result-d",0),u=A("new-result-miss",0),m=A("new-result-ns",0),b=A("new-result-proc",0);if(t<=0||s<=0){alert("Tid og poeng må være større enn 0");return}const f=icStageDefs(e).find(h=>h.number==i);if(!f){alert("Stage ikke funnet");return}const p=await icEnsureShooter(e,icCurrentShooterId());if(!p){alert("Skytter ikke funnet");return}const E=t>0?s/t:0,k={num:f.number,name:f.name||("Stage "+f.number),hf:E,time:t,pts:s,pf:icResultPF(p.pf||g.powerFactor||"minor"),a:a,c:n,d:r,miss:u,ns:m,proc:b,paperTargets:f.paperTargets||0,poppers:f.poppers||0,plates:f.plates||0};icUpsertStageResult(p,k),await Ee(e.id,{shooters:e.shooters}),G("modal-add"),te(),_e(),De()}function Us(){G("modal-upload-result"),Re()}async function Hs(e){if(!$.find(u=>u.id==R)){alert("Ingen aktiv match valgt");return}const i=o("upload-stage-select"),t=o("upload-shooter-select"),s=o("upload-result-file");if(!i.value||!t.value){alert("Velg stage og skytter");return}if(!s.files||s.files.length===0){alert("Velg en fil");return}const a=s.files[0];Me=i.value,icUploadShooterSel=t.value,icSetResultDialogMode("ocr");const n=e&&e.currentTarget?e.currentTarget:o("upload-scan-btn"),r=n?n.textContent:"Last opp og skann";n&&(n.textContent="Skanner...",n.disabled=!0);try{const u=await new Promise((m,b)=>{const f=new FileReader;f.onerror=()=>b(new Error("Kunne ikke lese filen")),f.onload=p=>m(p.target.result),f.readAsDataURL(a)}),m=await qi.recognize(u,"eng+nor",{logger:b=>console.log(b)}),f=(m&&m.data&&m.data.text?m.data.text:"").trim();if(console.log("OCR Text:",f),!f)throw new Error("Ingen tekst funnet i bildet");const p=zs(f);if(p.time==null&&p.a===0&&p.c===0&&p.d===0&&p.miss===0&&p.ns===0&&p.proc===0)throw new Error("Fant ingen resultater i bildet");o("ocr-time").value=p.time||"",o("ocr-a").value=p.a||0,o("ocr-c").value=p.c||0,o("ocr-d").value=p.d||0,o("ocr-miss").value=p.miss||0,o("ocr-ns").value=p.ns||0,o("ocr-proc").value=p.proc||0,icRecalcPoints("ocr"),G("modal-upload-result"),ie("modal-ocr-confirm")}catch(u){console.error("OCR Error:",u),alert("Feil ved skanning: "+u.message)}finally{n&&(n.textContent=r,n.disabled=!1)}}function zs(e){const i={time:null,points:null,a:0,c:0,d:0,miss:0,ns:0,proc:0},t=e.replace(/[\n\r]+/g," ").toLowerCase(),s=[/time[:\s]*(\d+\.?\d*)/i,/(\d+\.\d+)\s*s(?:ec)?/i,/^(\d+\.\d+)$/m];for(const p of s){const h=t.match(p);if(h){i.time=parseFloat(h[1]);break}}const a=[/(?:points?|pts?)[:\s]*(\d+)/i,/score[:\s]*(\d+)/i];for(const p of a){const h=t.match(p);if(h){i.points=parseInt(h[1]);break}}const n=[/(\d+)\s*a(?:lpha)?(?:\s|$)/i,/a(?:lpha)?[:\s]*(\d+)/i];for(const p of n){const h=t.match(p);if(h){i.a=parseInt(h[1]);break}}const r=[/(\d+)\s*c(?:harlie)?(?:\s|$)/i,/c(?:harlie)?[:\s]*(\d+)/i];for(const p of r){const h=t.match(p);if(h){i.c=parseInt(h[1]);break}}const u=[/(\d+)\s*d(?:elta)?(?:\s|$)/i,/d(?:elta)?[:\s]*(\d+)/i];for(const p of u){const h=t.match(p);if(h){i.d=parseInt(h[1]);break}}const m=[/(\d+)\s*m(?:iss)?(?:\s|$)/i,/m(?:iss)?[:\s]*(\d+)/i];for(const p of m){const h=t.match(p);if(h){i.miss=parseInt(h[1]);break}}const b=[/(\d+)\s*ns(?:\s|$)/i,/ns[:\s]*(\d+)/i,/no-?shoot[:\s]*(\d+)/i];for(const p of b){const h=t.match(p);if(h){i.ns=parseInt(h[1]);break}}const f=[/(\d+)\s*p(?:roc)?(?:\s|$)/i,/p(?:roc)?[:\s]*(\d+)/i,/procedural[:\s]*(\d+)/i];for(const p of f){const h=t.match(p);if(h){i.proc=parseInt(h[1]);break}}return i}async function Gs(){const e=$.find(P=>P.id==R);if(!e)return;const i=he("ocr-time",0),t=icRecalcPoints("ocr"),s=A("ocr-a",0),a=A("ocr-c",0),n=A("ocr-d",0),r=A("ocr-miss",0),u=A("ocr-ns",0),m=A("ocr-proc",0);if(i<=0||t<=0){alert("Tid og poeng må være større enn 0");return}const b=icStageDefs(e).find(P=>P.number==Me);if(!b){alert("Stage ikke funnet");return}const f=await icEnsureShooter(e,icUploadShooterSel||icCurrentShooterId());if(!f){alert("Skytter ikke funnet");return}const p=i>0?t/i:0,h={num:b.number,name:b.name||("Stage "+b.number),hf:p,time:i,pts:t,pf:icResultPF(f.pf||g.powerFactor||"minor"),a:s,c:a,d:n,miss:r,ns:u,proc:m,paperTargets:b.paperTargets||0,poppers:b.poppers||0,plates:b.plates||0};icUpsertStageResult(f,h),await Ee(e.id,{shooters:e.shooters}),G("modal-ocr-confirm"),te(),_e(),De(),Me=null,icUploadShooterSel=null,icSetResultDialogMode("ocr")}async function Ks(){ke&&ke(),xe&&xe(),await $t(),window.location.reload()}const ht=document.getElementById("app");function Vs(){Bt(ht,ft)}function ft(){ts(ht)}Ct(e=>{e?ft():Vs()});
