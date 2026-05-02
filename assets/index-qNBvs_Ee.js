import{initializeApp as bt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as yt,onAuthStateChanged as wt,signInWithEmailAndPassword as kt,createUserWithEmailAndPassword as xt,signOut as St}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Lt,getDoc as be,doc as U,setDoc as Ne,query as $e,collection as Le,where as Fe,getDocs as He,onSnapshot as ze,serverTimestamp as Ie,updateDoc as de,arrayUnion as st,deleteDoc as Pt,writeBatch as wb}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Et,httpsCallable as Tt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const Mt={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},at=bt(Mt),Ae=yt(at),O=Lt(at),It=Et();let je=null,oe=null;function Ct(e){wt(Ae,async i=>{if(i){je=i;try{const t=await be(U(O,"users",i.uid));t.exists()?oe={uid:i.uid,...t.data()}:oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}catch(t){console.error("Feil ved lasting av brukerprofil:",t),oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}}else je=null,oe=null,e(null)})}async function _t(e,i){try{const t=(e||"").trim();return{success:!0,user:(await kt(Ae,t,i||"")).user}}catch(t){console.error("Innlogging feilet:",t);let s="Innlogging feilet";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Feil e-post eller passord":t.code==="auth/invalid-email"?s="Ugyldig e-postadresse":t.code==="auth/user-disabled"&&(s="Denne kontoen er deaktivert"),{success:!1,error:s}}}async function Nt(e,i,t,s,a,n,r,u,m,b){try{const f=(e||"").trim(),p=i||"",h=(t||"").trim(),E=(s||"").trim(),k=(a||"").trim(),P=(n||"").trim(),C=(r||"").trim(),L=(u||"minor").trim(),M=(m||"").trim(),D=(b||"").trim(),_=(await xt(Ae,f,p)).user,K=Tt(It,"validateInviteCode");try{await K({code:h,userId:_.uid,userEmail:f})}catch(j){await _.delete();let w="Ugyldig invitasjonskode";return j.code==="functions/not-found"?w="Ugyldig invitasjonskode":j.code==="functions/permission-denied"?w="Denne koden er deaktivert":j.code==="functions/resource-exhausted"?w="Denne koden har nådd maksimalt antall bruk":j.code==="functions/already-exists"?w="Du har allerede brukt denne koden":j.message&&(w=j.message),{success:!1,error:w}}return await Ne(U(O,"users",_.uid),{email:f,firstName:E,lastName:k,division:P,category:C,powerFactor:L,region:M,club:D,role:"user",inviteCode:h,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:_}}catch(f){console.error("Registrering feilet:",f);let p="Registrering feilet";return f.code==="auth/email-already-in-use"?p="E-postadressen er allerede i bruk":f.code==="auth/weak-password"?p="Passordet må være minst 6 tegn":f.code==="auth/invalid-email"?p="Ugyldig e-postadresse":f.message&&(p=f.message),{success:!1,error:p}}}async function $t(){try{return await St(Ae),{success:!0}}catch(e){return console.error("Utlogging feilet:",e),{success:!1,error:"Kunne ikke logge ut"}}}function W(){return je}function Pe(){return oe}const Ft=`
<div class="gdpr-content">
 <h2>Personvernerklæring og samtykke</h2>
 
 <p class="gdpr-intro">
 Ved å registrere deg i Insight Dynamics Shooting godtar du at vi behandler dine personopplysninger 
 i henhold til denne personvernerklæringen og GDPR (Personvernforordningen).
 </p>

 <h3>1. Behandlingsansvarlig</h3>
 <p>
 Insight Dynamics Shooting er ansvarlig for behandlingen av dine personopplysninger.
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
 <a href="mailto:post@insight-dynamics-shooting.org"><strong>post@insight-dynamics-shooting.org</strong></a>
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
 <img src="Logo_IPSC-insight.png" alt="Insight Dynamics Shooting">
 </div>
 <div class="lang-flags">
 <button id="langNo" class="lang-btn active" type="button" aria-label="Norsk">🇳🇴</button>
 <button id="langEn" class="lang-btn" type="button" aria-label="English">🇺🇸</button>
 </div>
 </div>

 <div class="brand-title">
 <span class="top">INSIGHT</span>
 <span class="bottom">DYNAMICS</span>
 </div>

 <div id="brandSubtitle" class="brand-subtitle">Analyse. Presisjon. Resultat.</div>

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
 `;const t={no:{subtitle:"Analyse. Presisjon. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyse. Presisjon. Resultat.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),u=document.getElementById("registerSection"),m=document.getElementById("showRegisterBtn"),b=document.getElementById("cancelRegisterBtn"),f=document.getElementById("loginBtn"),p=document.getElementById("registerBtn"),h=document.getElementById("langNo"),E=document.getElementById("langEn"),k=document.getElementById("registerPassword"),P=document.getElementById("passwordStrengthBar"),C=document.getElementById("passwordStrengthText"),L=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");L.onclick=()=>{a="minor",L.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),L.classList.remove("selected")};function D(w){let y=0;return w?(w.length>=8&&(y+=1),w.length>=12&&(y+=1),/[a-z]/.test(w)&&/[A-Z]/.test(w)&&(y+=1),/\d/.test(w)&&(y+=1),/[^A-Za-z0-9]/.test(w)&&(y+=1),y<=1?{score:y,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:y===2?{score:y,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:y===3?{score:y,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:y===4?{score:y,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:y,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function B(){const w=t[s],y=k.value,H=D(y);P.style.width=H.width,P.style.background=H.color,C.innerText=w[H.labelKey]}function _(w){s=w;const y=t[w];document.getElementById("brandSubtitle").innerText=y.subtitle,document.getElementById("loginEmailLabel").innerText=y.loginEmailLabel,document.getElementById("loginEmail").placeholder=y.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=y.loginPasswordLabel,document.getElementById("loginPassword").placeholder=y.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=y.login,document.getElementById("separatorText").innerText=y.or,document.getElementById("showRegisterBtn").innerText=y.showRegister,document.getElementById("registerFirstNameLabel").innerText=y.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=y.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=y.registerLastNameLabel,document.getElementById("registerLastName").placeholder=y.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=y.registerEmailLabel,document.getElementById("registerEmail").placeholder=y.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=y.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=y.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=y.registerPasswordLabel,document.getElementById("registerPassword").placeholder=y.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=y.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=y.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=y.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=y.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=y.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=y.registerRegionLabel,document.getElementById("registerClubLabel").innerText=y.registerClubLabel,document.getElementById("registerCodeLabel").innerText=y.registerCodeLabel,document.getElementById("registerCode").placeholder=y.registerCodePlaceholder,document.getElementById("registerBtn").innerText=y.register,document.getElementById("cancelRegisterBtn").innerText=y.cancel,h.classList.toggle("active",w==="no"),E.classList.toggle("active",w==="en"),B()}function K(){r.classList.remove("active"),u.classList.add("active"),n.innerText="";const w=document.getElementById("gdprCheckboxContainer");if(w&&!w.hasChildNodes()){const y=Rt();w.appendChild(y)}}function j(){u.classList.remove("active"),r.classList.add("active"),n.innerText=""}h.onclick=()=>_("no"),E.onclick=()=>_("en"),m.onclick=K,b.onclick=j,k.oninput=B,f.onclick=async()=>{n.innerText="";const w=document.getElementById("loginEmail").value.trim(),y=document.getElementById("loginPassword").value,H=await _t(w,y);H.success?i():n.innerText=H.error},p.onclick=async()=>{n.innerText="";const w=t[s],y=document.getElementById("registerFirstName").value.trim(),H=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,T=document.getElementById("registerRegion").value,I=document.getElementById("registerClub").value.trim(),c=document.getElementById("registerCode").value.trim();if(!y||!H){n.innerText=w.missingName;return}if(!Y||!ce||!X||!pe||!c){n.innerText=w.missingFields;return}if(!se){n.innerText=w.missingDivision;return}if(Y!==ce){n.innerText=w.emailMismatch;return}if(X!==pe){n.innerText=w.passwordMismatch;return}if(D(X).score<=1){n.innerText=w.weakPassword;return}if(!Dt().valid){n.innerText=w.gdprRequired;return}const v=await Nt(Y,X,c,y,H,se,ae,a,T,I);v.success?i():n.innerText=v.error},_("no"),B()}async function Ot(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"users",i.uid),{...e,updatedAt:Ie()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function jt(){const e=W();if(!e)return null;try{const i=await be(U(O,"users",e.uid));return i.exists()?{uid:e.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function Ut(e){try{const i=await be(U(O,"users",e));return i.exists()?{uid:e,...i.data()}:null}catch(i){return console.error("Get user by ID error:",i),null}}async function Ht(){const e=U(O,"counters","matchId");try{const i=await be(e);if(!i.exists())return await Ne(e,{value:1}),1;const s=i.data().value+1;return await de(e,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function zt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await Ht(),s={id:t,...e,searchable:e.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:Ie(),updatedAt:Ie()};return await Ne(U(O,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function Ee(e,i){if(!W())return{success:!1,error:"Not authenticated"};try{return await de(U(O,"matches",e.toString()),{...i,updatedAt:Ie()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Gt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await be(U(O,"matches",e.toString()));return t.exists()?t.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await Pt(U(O,"matches",e.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(t){return console.error("Delete match error:",t),{success:!1,error:t.message}}}async function Kt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=e.toString().trim(),s=await Vt(),a=s.find(n=>n.id&&n.id.toString()===t);return a?{success:!0,match:a}:{success:!1,error:"Du har ikke tilgang til denne matchen. Bruk invitasjoner for å få tilgang."}}catch(t){return console.error("Search match error:",t),{success:!1,error:t.message}}}async function Vt(){const e=W();if(!e)return[];try{const i=$e(Le(O,"matches"),Fe("participants","array-contains",e.uid)),t=await He(i),s=[];return t.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,n)=>{var m,b;const r=a.date||((m=a.createdAt)==null?void 0:m.toDate())||new Date(0);return(n.date||((b=n.createdAt)==null?void 0:b.toDate())||new Date(0))-r}),s}catch(i){return console.error("Get user matches error:",i),[]}}function qt(e){const i=W();if(!i)return()=>{};const t=$e(Le(O,"matches"),Fe("participants","array-contains",i.uid));return ze(t,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),n.sort((r,u)=>{var f,p;const m=r.date||((f=r.createdAt)==null?void 0:f.toDate())||new Date(0);return(u.date||((p=u.createdAt)==null?void 0:p.toDate())||new Date(0))-m}),e(n)},a=>{console.error("Listen to matches error:",a)})}function Wt(e,i){return ze(U(O,"matches",e.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Listen to match error:",s)})}async function Ge(e,i){const t=W();if(!t)return{success:!1,error:"Not authenticated"};try{console.log(" Søker etter bruker med email:",e);const s=$e(Le(O,"users"),Fe("email","==",e)),a=await He(s);if(a.empty)return console.error(" Bruker ikke funnet:",e),{success:!1,error:"Bruker ikke funnet"};const n=a.docs[0],r=n.id;return console.log(" Bruker funnet:",r,n.data()),console.log(" Sender invitasjon..."),await Ne(U(O,"users",r,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:(t.displayName||t.email||""),invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log(" Invitasjon sendt!"),{success:!0}}catch(s){return console.error(" Send invitation error:",s),{success:!1,error:s.message}}}async function Ke(e){const i=W();if(!i)return[];try{const t=e.toLowerCase().trim();if(t.length===0)return[];console.log(" Søker etter brukere:",t);const s=await He(Le(O,"users")),a=[];return s.forEach(n=>{const r=n.data(),u=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),m=(r.email||"").toLowerCase();n.id!==i.uid&&(u.includes(t)||m.includes(t))&&a.push({uid:n.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(` Fant ${a.length} brukere`),a}catch(t){return console.error(" Search users error:",t),[]}}async function Jt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{
console.log("[Jt] Start - matchId:",e,"uid:",i.uid);
// Steg 1: Les match-dokumentet
let matchDoc;
try{matchDoc=await be(U(O,"matches",e.toString()));console.log("[Jt] Steg 1 OK - match lest, exists:",matchDoc.exists());}catch(e1){console.error("[Jt] Steg 1 FEIL - getDoc:",e1.message);return{success:!1,error:"Steg1: "+e1.message};}
if(!matchDoc.exists())return{success:!1,error:"Match ikke funnet"};
const existingParticipants=matchDoc.data().participants||[];
console.log("[Jt] Eksisterende participants:",existingParticipants);
const newParticipants=existingParticipants.includes(i.uid)?existingParticipants:[...existingParticipants,i.uid];
console.log("[Jt] Ny participants-liste:",newParticipants);
// Steg 2: Oppdater match
try{await de(U(O,"matches",e.toString()),{participants:newParticipants});console.log("[Jt] Steg 2 OK - match oppdatert");}catch(e2){console.error("[Jt] Steg 2 FEIL - updateDoc match:",e2.message);return{success:!1,error:"Steg2: "+e2.message};}
// Steg 3: Marker invitasjonen som akseptert
try{await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"accepted"});console.log("[Jt] Steg 3 OK - invitasjon akseptert");}catch(e3){console.error("[Jt] Steg 3 FEIL - updateDoc invitasjon:",e3.message);return{success:!1,error:"Steg3: "+e3.message};}
return{success:!0}}catch(t){return console.error("[Jt] Uventet feil:",t),{success:!1,error:t.message}}}async function Yt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function Zt(e){const i=W();if(!i)return()=>{};const t=Le(O,"users",i.uid,"invitations"),s=$e(t,Fe("status","==","pending"));return ze(s,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),e(n)})}async function loadReferenceShooters(){try{const e=await He(Le(O,"referenceShooters")),i=[];return e.forEach(t=>{i.push({id:t.id,...t.data()})}),i}catch(e){return console.error("Load reference shooters error:",e),[]}}function initReferenceEditState(e){refEditState={enabled:!!(e&&e.referenceShootersEnabled),ids:Array.isArray(e&&e.referenceShooterIds)?e.referenceShooterIds.slice():[],overrides:JSON.parse(JSON.stringify(e&&e.referenceOverrides||{}))}}function renderReferenceShooterConfig(){const e=o("reference-shooters-config"),i=o("edit-match-reference-enabled");if(!e)return;const t=i?!!i.checked:!!refEditState.enabled;if(refEditState.enabled=t,e.style.display=t?"block":"none",!t){e.innerHTML="";return}let s='<div style="padding:12px;background:var(--bg);border-radius:8px;">';refShooters.length===0?s+='<div style="color:var(--muted);font-size:13px;">Ingen referanseskyttere lastet.</div>':refShooters.forEach(a=>{const n=refEditState.ids.includes(a.id),r=refEditState.overrides[a.id]||{},u=r.drawTime!=null?r.drawTime:a.drawTime,m=r.reloadTime!=null?r.reloadTime:a.reloadTime;s+='<div style="padding:10px 0;border-bottom:1px solid var(--border);">',s+='<label style="display:flex;align-items:center;gap:10px;cursor:pointer;">',s+='<input type="checkbox" '+(n?"checked":"")+' onchange="toggleReferenceShooterChoice(\''+a.id+'\')" style="width:18px;height:18px;">',s+='<span style="font-weight:600;">'+a.name+'</span>',s+='</label>',s+='<div style="font-size:12px;color:var(--muted);margin-top:4px;">'+(a.division||"")+' · '+(a.powerFactor||"")+' · HF S/M/L: '+(a.shortHF||0).toFixed(2)+' / '+(a.mediumHF||0).toFixed(2)+' / '+(a.longHF||0).toFixed(2)+'</div>',n&&(s+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">',s+='<div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Draw</div><input class="field-input" type="number" step="0.01" id="ref-draw-'+a.id+'" value="'+u+'" oninput="updateReferenceShooterOverride(\''+a.id+'\',\'drawTime\',this.value)"></div>',s+='<div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Reload</div><input class="field-input" type="number" step="0.01" id="ref-reload-'+a.id+'" value="'+m+'" oninput="updateReferenceShooterOverride(\''+a.id+'\',\'reloadTime\',this.value)"></div>',s+='</div>'),s+='</div>'}),s+='</div>',e.innerHTML=s}function toggleReferenceShootersEnabled(){const e=o("edit-match-reference-enabled");refEditState.enabled=!!(e&&e.checked),renderReferenceShooterConfig()}function toggleReferenceShooterChoice(e){const i=refEditState.ids.indexOf(e);if(i>=0)refEditState.ids.splice(i,1);else{refEditState.ids.push(e);const t=refShooters.find(s=>s.id===e);t&&!refEditState.overrides[e]&&(refEditState.overrides[e]={drawTime:t.drawTime,reloadTime:t.reloadTime})}renderReferenceShooterConfig()}function updateReferenceShooterOverride(e,i,t){refEditState.overrides[e]||(refEditState.overrides[e]={});const s=parseFloat(t);isNaN(s)||(refEditState.overrides[e][i]=s)}function getActiveReferenceShooters(e){if(!e||!e.referenceShootersEnabled)return[];const i=Array.isArray(e.referenceShooterIds)?e.referenceShooterIds:[],t=e.referenceOverrides||{};return refShooters.filter(s=>i.includes(s.id)).map(s=>{const a=t[s.id]||{};return{...s,drawTime:a.drawTime!=null?a.drawTime:s.drawTime,reloadTime:a.reloadTime!=null?a.reloadTime:s.reloadTime}})}function getReferenceCourseType(e){const i=icStageMaxPts(e);return i<=60?"short":i<=120?"medium":"long"}function projectReferenceShooterForStage(e,i){if(!e||!i)return null;const t=icStageShots(i),s=icStageMaxPts(i),a=getReferenceCourseType(i),n=a==="short"?e.shortHF:a==="medium"?e.mediumHF:e.longHF;if(!n||n<=0||!t)return null;const r=Math.max(0,Math.ceil(t/10)-1),u=a==="short"?"short":a==="medium"?"medium":"long",m=Number(e.drawTime||0),b=Number(e.reloadTime||0),f=Number(e[u+"AP"]??0),p=Number(e[u+"CP"]??0),h=Number(e[u+"DP"]??0),E=Number(e[u+"MP"]??e[u+"MissP"]??0),k=Number(e[u+"NSP"]??0),P=Number(e[u+"PP"]??e[u+"ProcP"]??0),C=i.powerFactor||i.pf||e.powerFactor||e.pf||"minor",L=C==="major"?4:3,M=C==="major"?2:1,D=f+p+h+E+k,_=D>0?(t*(f*5+p*L+h*M-k*10)/100)-t*(P/100)*10:s,K=Math.max(0,_),j=K/n,w=Math.max(0,j-m-r*b),y=t>0?w/t:0;return{shooterId:e.id,name:e.name,courseType:a,shots:t,maxPoints:s,benchmarkHF:n,reloads:r,drawTime:m,reloadTime:b,expectedPoints:K,projectedTotalTime:j,shootingTime:w,avgSplit:y,aPct:f,cPct:p,dPct:h,mPct:E,nsPct:k,pPct:P}}function renderReferenceBenchmarkBlock(e,i,t){const s=getActiveReferenceShooters(e);if(!i||!s.length)return"";const shots=icStageShots(i);const ct=getReferenceCourseType(i);let a='<div style="margin-top:15px;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--accent);">';a+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">REFERANSESKYTTERE</div>';s.forEach(function(n){const r=projectReferenceShooterForStage(n,i);if(!r)return;const u=t&&t.estHF!=null?r.benchmarkHF-t.estHF:null;const m=t&&t.expTime!=null?t.expTime-r.projectedTotalTime:null;const ap=r.aPct!=null?r.aPct:ct==="short"?n.shortAP:ct==="medium"?n.mediumAP:n.longAP;const cp=r.cPct!=null?r.cPct:ct==="short"?n.shortCP:ct==="medium"?n.mediumCP:n.longCP;const dp=r.dPct!=null?r.dPct:ct==="short"?n.shortDP:ct==="medium"?n.mediumDP:n.longDP;const estA=ap!=null&&shots>0?Math.round(shots*ap/100):null;const estC=cp!=null&&shots>0?Math.round(shots*cp/100):null;const estD=dp!=null&&shots>0?Math.round(shots*dp/100):null;a+='<div style="padding:10px 0;border-bottom:1px solid var(--border);">';a+='<div style="font-size:14px;font-weight:700;margin-bottom:8px;">'+r.name+'</div>';a+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:12px;">';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Benchmark HF</div><div style="font-weight:700;color:var(--accent);">'+r.benchmarkHF.toFixed(2)+'</div></div>';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Forventet tid</div><div style="font-weight:700;">'+r.projectedTotalTime.toFixed(2)+'s</div></div>';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Reloads</div><div style="font-weight:700;">'+r.reloads+'</div></div>';a+='</div>';a+='<div style="display:grid;grid-template-columns:1fr;gap:10px;font-size:12px;margin-top:8px;">';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Snitt/skudd</div><div style="font-weight:700;">'+r.avgSplit.toFixed(3)+'s</div></div>';a+='</div>';if(u!=null||m!=null){a+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;margin-top:8px;">';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Delta HF mot deg</div><div style="font-weight:700;color:'+(u!=null&&u>0?'var(--red)':'var(--green)')+';">'+( u!=null?(u>0?'+':'')+u.toFixed(2):'—')+'</div></div>';a+='<div><div style="color:var(--muted);margin-bottom:4px;">Delta tid mot deg</div><div style="font-weight:700;color:'+(m!=null&&m>0?'var(--green)':'var(--red)')+';">'+( m!=null?(m>0?'-':'')+Math.abs(m).toFixed(2)+'s':'—')+'</div></div>';a+='</div>';}if(estA!=null||estC!=null||estD!=null){a+='<div style="margin-top:8px;padding:8px;background:rgba(255,255,255,0.04);border-radius:6px;">';a+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;">EST. TREFFBILDE ('+shots+' skudd)</div>';a+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;">';a+='<div><div style="color:var(--muted);font-size:11px;">A</div><div style="font-weight:700;color:var(--green);">'+( estA!=null?estA:'—')+'</div></div>';a+='<div><div style="color:var(--muted);font-size:11px;">C</div><div style="font-weight:700;">'+( estC!=null?estC:'—')+'</div></div>';a+='<div><div style="color:var(--muted);font-size:11px;">D</div><div style="font-weight:700;">'+( estD!=null?estD:'—')+'</div></div>';a+='</div></div>';}a+='</div>';});a+='</div>';return a;}function Qt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xt={exports:{}};(function(e){var i=function(t){var s=Object.prototype,a=s.hasOwnProperty,n=Object.defineProperty||function(c,l,v){c[l]=v.value},r,u=typeof Symbol=="function"?Symbol:{},m=u.iterator||"@@iterator",b=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(c,l,v){return Object.defineProperty(c,l,{value:v,enumerable:!0,configurable:!0,writable:!0}),c[l]}try{p({},"")}catch{p=function(l,v,S){return l[v]=S}}function h(c,l,v,S){var x=l&&l.prototype instanceof D?l:D,N=Object.create(x.prototype),z=new ae(S||[]);return n(N,"_invoke",{value:ce(c,v,z)}),N}t.wrap=h;function E(c,l,v){try{return{type:"normal",arg:c.call(l,v)}}catch(S){return{type:"throw",arg:S}}}var k="suspendedStart",P="suspendedYield",C="executing",L="completed",M={};function D(){}function B(){}function _(){}var K={};p(K,m,function(){return this});var j=Object.getPrototypeOf,w=j&&j(j(T([])));w&&w!==s&&a.call(w,m)&&(K=w);var y=_.prototype=D.prototype=Object.create(K);B.prototype=_,n(y,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:B,configurable:!0}),B.displayName=p(_,f,"GeneratorFunction");function H(c){["next","throw","return"].forEach(function(l){p(c,l,function(v){return this._invoke(l,v)})})}t.isGeneratorFunction=function(c){var l=typeof c=="function"&&c.constructor;return l?l===B||(l.displayName||l.name)==="GeneratorFunction":!1},t.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,_):(c.__proto__=_,p(c,f,"GeneratorFunction")),c.prototype=Object.create(y),c},t.awrap=function(c){return{__await:c}};function Y(c,l){function v(N,z,V,J){var q=E(c[N],c,z);if(q.type==="throw")J(q.arg);else{var Be=q.arg,we=Be.value;return we&&typeof we=="object"&&a.call(we,"__await")?l.resolve(we.__await).then(function(ne){v("next",ne,V,J)},function(ne){v("throw",ne,V,J)}):l.resolve(we).then(function(ne){Be.value=ne,V(Be)},function(ne){return v("throw",ne,V,J)})}}var S;function x(N,z){function V(){return new l(function(J,q){v(N,z,J,q)})}return S=S?S.then(V,V):V()}n(this,"_invoke",{value:x})}H(Y.prototype),p(Y.prototype,b,function(){return this}),t.AsyncIterator=Y,t.async=function(c,l,v,S,x){x===void 0&&(x=Promise);var N=new Y(h(c,l,v,S),x);return t.isGeneratorFunction(l)?N:N.next().then(function(z){return z.done?z.value:N.next()})};function ce(c,l,v){var S=k;return function(N,z){if(S===C)throw new Error("Generator is already running");if(S===L){if(N==="throw")throw z;return I()}for(v.method=N,v.arg=z;;){var V=v.delegate;if(V){var J=X(V,v);if(J){if(J===M)continue;return J}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(S===k)throw S=L,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);S=C;var q=E(c,l,v);if(q.type==="normal"){if(S=v.done?L:P,q.arg===M)continue;return{value:q.arg,done:v.done}}else q.type==="throw"&&(S=L,v.method="throw",v.arg=q.arg)}}}function X(c,l){var v=l.method,S=c.iterator[v];if(S===r)return l.delegate=null,v==="throw"&&c.iterator.return&&(l.method="return",l.arg=r,X(c,l),l.method==="throw")||v!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+v+"' method")),M;var x=E(S,c.iterator,l.arg);if(x.type==="throw")return l.method="throw",l.arg=x.arg,l.delegate=null,M;var N=x.arg;if(!N)return l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,M;if(N.done)l[c.resultName]=N.value,l.next=c.nextLoc,l.method!=="return"&&(l.method="next",l.arg=r);else return N;return l.delegate=null,M}H(y),p(y,f,"Generator"),p(y,m,function(){return this}),p(y,"toString",function(){return"[object Generator]"});function pe(c){var l={tryLoc:c[0]};1 in c&&(l.catchLoc=c[1]),2 in c&&(l.finallyLoc=c[2],l.afterLoc=c[3]),this.tryEntries.push(l)}function se(c){var l=c.completion||{};l.type="normal",delete l.arg,c.completion=l}function ae(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(pe,this),this.reset(!0)}t.keys=function(c){var l=Object(c),v=[];for(var S in l)v.push(S);return v.reverse(),function x(){for(;v.length;){var N=v.pop();if(N in l)return x.value=N,x.done=!1,x}return x.done=!0,x}};function T(c){if(c){var l=c[m];if(l)return l.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var v=-1,S=function x(){for(;++v<c.length;)if(a.call(c,v))return x.value=c[v],x.done=!1,x;return x.value=r,x.done=!0,x};return S.next=S}}return{next:I}}t.values=T;function I(){return{value:r,done:!0}}return ae.prototype={constructor:ae,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(se),!c)for(var l in this)l.charAt(0)==="t"&&a.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=r)},stop:function(){this.done=!0;var c=this.tryEntries[0],l=c.completion;if(l.type==="throw")throw l.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var l=this;function v(J,q){return N.type="throw",N.arg=c,l.next=J,q&&(l.method="next",l.arg=r),!!q}for(var S=this.tryEntries.length-1;S>=0;--S){var x=this.tryEntries[S],N=x.completion;if(x.tryLoc==="root")return v("end");if(x.tryLoc<=this.prev){var z=a.call(x,"catchLoc"),V=a.call(x,"finallyLoc");if(z&&V){if(this.prev<x.catchLoc)return v(x.catchLoc,!0);if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else if(z){if(this.prev<x.catchLoc)return v(x.catchLoc,!0)}else if(V){if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(c,l){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.tryLoc<=this.prev&&a.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var x=S;break}}x&&(c==="break"||c==="continue")&&x.tryLoc<=l&&l<=x.finallyLoc&&(x=null);var N=x?x.completion:{};return N.type=c,N.arg=l,x?(this.method="next",this.next=x.finallyLoc,M):this.complete(N)},complete:function(c,l){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&l&&(this.next=l),M},finish:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.finallyLoc===c)return this.complete(v.completion,v.afterLoc),se(v),M}},catch:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.tryLoc===c){var S=v.completion;if(S.type==="throw"){var x=S.arg;se(v)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(c,l,v){return this.delegate={iterator:T(c),resultName:l,nextLoc:v},this.method==="next"&&(this.arg=r),M}},t}(e.exports);try{regeneratorRuntime=i}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})(Xt);var Ve=(e,i)=>`${e}-${i}-${Math.random().toString(16).slice(3,8)}`;const ei=Ve;let Ze=0;var nt=({id:e,action:i,payload:t={}})=>{let s=e;return typeof s>"u"&&(s=ei("Job",Ze),Ze+=1),{id:s,action:i,payload:t}},ye={};let qe=!1;ye.logging=qe;ye.setLogging=e=>{qe=e};ye.log=(...e)=>qe?console.log.apply(void 0,e):null;const ti=nt,{log:Te}=ye,ii=Ve;let Qe=0;var si=()=>{const e=ii("Scheduler",Qe),i={},t={};let s=[];Qe+=1;const a=()=>s.length,n=()=>Object.keys(i).length,r=()=>{if(s.length!==0){const p=Object.keys(i);for(let h=0;h<p.length;h+=1)if(typeof t[p[h]]>"u"){s[0](i[p[h]]);break}}},u=(p,h)=>new Promise((E,k)=>{const P=ti({action:p,payload:h});s.push(async C=>{s.shift(),t[C.id]=P;try{E(await C[p].apply(void 0,[...h,P.id]))}catch(L){k(L)}finally{delete t[C.id],r()}}),Te(`[${e}]: Add ${P.id} to JobQueue`),Te(`[${e}]: JobQueue length=${s.length}`),r()});return{addWorker:p=>(i[p.id]=p,Te(`[${e}]: Add ${p.id}`),Te(`[${e}]: Number of workers=${n()}`),r(),p.id),addJob:async(p,...h)=>{if(n()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(p,h)},terminate:async()=>{Object.keys(i).forEach(async p=>{await i[p].terminate()}),s=[]},getQueueLen:a,getNumWorkers:n}};function ai(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ni=e=>{const i={};return typeof WorkerGlobalScope<"u"?i.type="webworker":typeof document=="object"?i.type="browser":typeof process=="object"&&typeof ai=="function"&&(i.type="node"),typeof e>"u"?i:i[e]};const ri=ni("type")==="browser",oi=ri?e=>new URL(e,window.location.href).href:e=>e;var li=e=>{const i={...e};return["corePath","workerPath","langPath"].forEach(t=>{e[t]&&(i[t]=oi(i[t]))}),i},rt={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const di="7.0.0",ci={version:di};var pi={workerBlobURL:!0,logger:()=>{}};const ui=ci.version,gi=pi;var vi={...gi,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${ui}/dist/worker.min.js`},mi=({workerPath:e,workerBlobURL:i})=>{let t;if(Blob&&URL&&i){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});t=new Worker(URL.createObjectURL(s))}else t=new Worker(e);return t},hi=e=>{e.terminate()},fi=(e,i)=>{e.onmessage=({data:t})=>{i(t)}},bi=async(e,i)=>{e.postMessage(i)};const Oe=e=>new Promise((i,t)=>{const s=new FileReader;s.onload=()=>{i(s.result)},s.onerror=({target:{error:{code:a}}})=>{t(Error(`File could not be read! Code=${a}`))},s.readAsArrayBuffer(e)}),Ue=async e=>{let i=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?i=atob(e.split(",")[1]).split("").map(t=>t.charCodeAt(0)):i=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(i=await Ue(e.src)),e.tagName==="VIDEO"&&(i=await Ue(e.poster)),e.tagName==="CANVAS"&&await new Promise(t=>{e.toBlob(async s=>{i=await Oe(s),t()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const t=await e.convertToBlob();i=await Oe(t)}else(e instanceof File||e instanceof Blob)&&(i=await Oe(e));return new Uint8Array(i)};var yi=Ue;const wi=vi,ki=mi,xi=hi,Si=fi,Li=bi,Pi=yi;var Ei={defaultOptions:wi,spawnWorker:ki,terminateWorker:xi,onMessage:Si,send:Li,loadImage:Pi};const Ti=li,Z=nt,{log:Xe}=ye,Mi=Ve,re=rt,{defaultOptions:Ii,spawnWorker:Ci,terminateWorker:_i,onMessage:Ni,loadImage:et,send:$i}=Ei;let tt=0;var ot=async(e="eng",i=re.LSTM_ONLY,t={},s={})=>{const a=Mi("Worker",tt),{logger:n,errorHandler:r,...u}=Ti({...Ii,...t}),m={},b=typeof e=="string"?e.split("+"):e;let f=i,p=s;const h=[re.DEFAULT,re.LSTM_ONLY].includes(i)&&!u.legacyCore;let E,k;const P=new Promise((T,I)=>{k=T,E=I}),C=T=>{E(T.message)};let L=Ci(u);L.onerror=C,tt+=1;const M=({id:T,action:I,payload:c})=>new Promise((l,v)=>{Xe(`[${a}]: Start ${T}, action=${I}`);const S=`${I}-${T}`;m[S]={resolve:l,reject:v},$i(L,{workerId:a,jobId:T,action:I,payload:c})}),D=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),B=T=>M(Z({id:T,action:"load",payload:{options:{lstmOnly:h,corePath:u.corePath,logging:u.logging}}})),_=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:"writeFile",args:[T,I]}})),K=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"readFile",args:[T,{encoding:"utf8"}]}})),j=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"unlink",args:[T]}})),w=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:T,args:I}})),y=(T,I)=>M(Z({id:I,action:"loadLanguage",payload:{langs:T,options:{langPath:u.langPath,dataPath:u.dataPath,cachePath:u.cachePath,cacheMethod:u.cacheMethod,gzip:u.gzip,lstmOnly:[re.DEFAULT,re.LSTM_ONLY].includes(f)&&!u.legacyLang}}})),H=(T,I,c,l)=>M(Z({id:l,action:"initialize",payload:{langs:T,oem:I,config:c}})),Y=(T="eng",I,c,l)=>{if(h&&[re.TESSERACT_ONLY,re.TESSERACT_LSTM_COMBINED].includes(I))throw Error("Legacy model requested but code missing.");const v=I||f;f=v;const S=c||p;p=S;const N=(typeof T=="string"?T.split("+"):T).filter(z=>!b.includes(z));return b.push(...N),N.length>0?y(N,l).then(()=>H(T,v,S,l)):H(T,v,S,l)},ce=(T={},I)=>M(Z({id:I,action:"setParameters",payload:{params:T}})),X=async(T,I={},c={text:!0},l)=>M(Z({id:l,action:"recognize",payload:{image:await et(T),options:I,output:c}})),pe=async(T,I)=>{if(h)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return M(Z({id:I,action:"detect",payload:{image:await et(T)}}))},se=async()=>(L!==null&&(_i(L),L=null),Promise.resolve());Ni(L,({workerId:T,jobId:I,status:c,action:l,data:v})=>{const S=`${l}-${I}`;if(c==="resolve")Xe(`[${T}]: Complete ${I}`),m[S].resolve({jobId:I,data:v}),delete m[S];else if(c==="reject")if(m[S].reject(v),delete m[S],l==="load"&&E(v),r)r(v);else throw Error(v);else c==="progress"&&n({...v,userJobId:I})});const ae={id:a,worker:L,load:D,writeText:_,readText:K,removeFile:j,FS:w,reinitialize:Y,setParameters:ce,recognize:X,detect:pe,terminate:se};return B().then(()=>y(e)).then(()=>H(e,i,s)).then(()=>k(ae)).catch(()=>{}),P};const lt=ot,Fi=async(e,i,t)=>{const s=await lt(i,1,t);return s.recognize(e).finally(async()=>{await s.terminate()})},Ai=async(e,i)=>{const t=await lt("osd",0,i);return t.detect(e).finally(async()=>{await t.terminate()})};var Ri={recognize:Fi,detect:Ai},Di={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Bi={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Oi=si,ji=ot,Ui=Ri,Hi=Di,zi=rt,Gi=Bi,{setLogging:Ki}=ye;var Vi={languages:Hi,OEM:zi,PSM:Gi,createScheduler:Oi,createWorker:ji,setLogging:Ki,...Ui};const qi=Qt(Vi);let g,R=null,ue="all",$=[],ke=null,xe=null,refShooters=[],refEditState={enabled:!1,ids:[],overrides:{}},liveShowAll=!1;const Wi={no:{tracker:"DYNAMICS",tagline:"Analyse. Presisjon. Resultat.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"Ingen match valgt",new_match:"Ny match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Lagre",cancel:"Avbryt",delete:"Slett",edit_profile:"Rediger profil",first_name:"Fornavn",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Logg ut",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Snitt HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Lagre resultat",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Tillat at andre kan finne denne matchen",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Rediger stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You are invited to",no_invitations:"No invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"Du er invitert til",no_invitations:"Ingen invitasjoner"},en:{tracker:"INSIGHT",tagline:"Analysis. Precision. Results.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter match ID (e.g. 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages will be added later"}};let dt="no";function d(e){return Wi[dt][e]||e}const it={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},Ji={Standard:{minor:20,major:17},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:20,major:17}},Yi=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics"],Zi={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"]},Qi=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Xi=["Norge","Sverige","Danmark","Finland","Tyskland","Storbritannia","USA","Annet"];function es(e,i){const t=Ji[e];return t&&(t[i]||t.minor)||15}function Se(e,i,t){return Math.max(0,Math.ceil(e/es(i,t))-1)}function icStageShots(e){return Math.max(0,((e==null?void 0:e.paperTargets)||0)*2+((e==null?void 0:e.poppers)||0)+((e==null?void 0:e.plates)||0))}function icStageMaxPts(e){return Math.max(0,((e==null?void 0:e.paperTargets)||0)*10+(((e==null?void 0:e.poppers)||0)+((e==null?void 0:e.plates)||0))*5)}function icResultPF(e){const i=(e||"").toString().toLowerCase();return i==="major"?"major":"minor"}function icScoreFromHits(e,i,t,s,a,n){const r=it[icResultPF(e)]||it.minor;return Math.max(0,(i||0)*r.A+(t||0)*r.C+(s||0)*r.D+(a||0)*r.miss+(n||0)*r.ns+((arguments.length>6?arguments[6]:0)||0)*r.proc)}let icResultEntryMode="ocr",icUploadShooterSel=null;function icSetResultDialogMode(e){icResultEntryMode=e;const i=o("ocr-confirm-title"),t=o("ocr-confirm-desc"),s=o("ocr-save-btn");i&&(i.textContent=e==="manual"?"Registrer resultat":"Bekreft resultat"),t&&(t.textContent=e==="manual"?"Legg inn resultat manuelt. Poeng beregnes automatisk fra Minor/Major og treffbildet.":"Kontroller og rediger verdiene fra skanningen. Poeng beregnes automatisk fra Minor/Major og treffbildet."),s&&(s.textContent=e==="manual"?"Lagre manuelt resultat":"Lagre resultat")}function icUpdateNewShooterPFOptions(){const e=o("new-shooter-division"),i=o("new-shooter-pf");if(!e||!i)return;const t=Zi[e.value]||["minor","major"],s=(i.value||"").toLowerCase();i.innerHTML=t.map(a=>`<option value="${a}">${a.toUpperCase()}</option>`).join(""),i.value=t.includes(s)?s:t[0]}function icNextStageNumber(e){const i=icStageDefs(e),t=icCurrentShooter(e),s=(t&&Array.isArray(t.stages)?t.stages:[]).map(a=>Number(a.num||a.number));for(const a of i)if(!s.includes(Number(a.number)))return Number(a.number);return i[0]?Number(i[0].number):1}function icUpdateManualStageInfo(){const e=$.find(i=>i.id!=null&&i.id.toString()===String(R)),i=o("new-result-stage-info");if(!e||!i)return 0;const t=A("new-result-stage",icNextStageNumber(e)),s=icStageDefs(e).find(a=>Number(a.number)===Number(t));if(!s)return i.textContent="Velg stage",0;const a=icStageShots(s),n=icStageMaxPts(s);return i.textContent=`${s.name||"Stage "+s.number} · ${a} treff · maks ${n} poeng`,a}function icNormalizeManualHits(){const e=icUpdateManualStageInfo();function rv(id){const h=document.getElementById(id+"-val");return h?Math.max(0,parseInt(h.value||"0")):0}const i=rv("new-result-c"),t=rv("new-result-d"),s=rv("new-result-miss"),a=rv("new-result-ns"),n=rv("new-result-proc"),r=Math.min(e,i+t+s),u=Math.max(0,e-r),m=o("new-result-a");return m&&(m.value=u),{totalHits:e,a:u,c:i,d:t,miss:s,ns:a,proc:n}}function adjustResultField(e,i){const hidden=document.getElementById(e+"-val");const display=document.getElementById(e+"-disp");const cur=hidden?parseInt(hidden.value||"0"):0;if(i>0&&["new-result-c","new-result-d","new-result-miss"].includes(e)){const match=$.find(x=>x.id!=null&&x.id.toString()===String(R));const stageNum=match?parseInt(document.getElementById("new-result-stage")?document.getElementById("new-result-stage").value:"1"):0;const stageDef=match?icStageDefs(match).find(x=>Number(x.number)===Number(stageNum)):null;const totalHits=stageDef?icStageShots(stageDef):0;function rv(id){const h=document.getElementById(id+"-val");return h?Math.max(0,parseInt(h.value||"0")):0}const usedC=rv("new-result-c"),usedD=rv("new-result-d"),usedMiss=rv("new-result-miss");const currentTotal=usedC+usedD+usedMiss;if(currentTotal>=totalHits)return;}const s=Math.max(0,cur+i);if(hidden)hidden.value=s;if(display)display.textContent=s;icNormalizeManualHits(),icRecalcPoints("new-result")}function icRenderEditMatchShootersList(e){const i=o("edit-match-shooters-list");if(!i||!e)return;const t=(e.shooters||[]).filter(s=>!(s!=null&&s.isMe));if(!t.length){i.innerHTML=`<div style="padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--muted);font-size:13px;">Ingen ekstra skyttere lagt til.</div>`;return}i.innerHTML=t.map(s=>{const a=[s.firstName||"",s.lastName||""].join(" ").trim()||"Ukjent skytter",n=s.division||"—",r=(s.pf||"minor").toUpperCase();return `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;margin-bottom:8px;"><div><div style="font-weight:600;">${a}</div><div style="font-size:12px;color:var(--muted);">${n} · ${r}</div></div><button type="button" class="btn-secondary" style="border:none;border-radius:8px;padding:10px 12px;cursor:pointer;" data-shooter-id="${s.id}">Slett</button></div>`}).join(""),i.querySelectorAll("[data-shooter-id]").forEach(s=>{s.onclick=()=>removeEditMatchShooter(s.dataset.shooterId)})}async function removeEditMatchShooter(e){const i=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!i)return;const t=(i.shooters||[]).find(n=>n.id===e&&!(n!=null&&n.isMe));if(!t)return;if(!confirm(`Slette ${(t.firstName||"")+" "+(t.lastName||"")}`.trim()+"?"))return;i.shooters=(i.shooters||[]).filter(n=>n.id!==e),i.rivalId===e&&(i.rivalId=null);const s=await Ee(i.id,{shooters:i.shooters,rivalId:i.rivalId||null});s.success?(icRenderEditMatchShootersList(i),te(),_e(),De()):alert("Kunne ikke slette skytter: "+s.error)}function icInitManualResult(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen aktiv match valgt");return}const i=icNextStageNumber(e),t=o("new-result-stage"),s=o("new-result-time");t&&(t.value=i),s&&(s.value=""),["new-result-c","new-result-d","new-result-miss","new-result-ns","new-result-proc"].forEach(a=>{const h=document.getElementById(a+"-val");const d=document.getElementById(a+"-disp");if(h)h.value=0;if(d)d.textContent="0"}),icNormalizeManualHits(),icRecalcPoints("new-result");const _nameEl=document.getElementById("modal-add-shooter-name");if(_nameEl){const _nm=[g.firstName||"",g.lastName||""].join(" ").trim();_nameEl.textContent=_nm;}}function icRecalcPoints(e){const i=o(e+"-points");if(!i)return 0;const t=e==="ocr"?icUploadShooterSel||F("upload-shooter-select")||icCurrentShooterId():icCurrentShooterId(),s=$.find(a=>a.id!=null&&a.id.toString()===String(R)),n=s?icFindShooter(s,t):null,r=icResultPF((n==null?void 0:n.pf)||g.powerFactor||"minor");if(e==="new-result"){const u=icNormalizeManualHits(),m=icScoreFromHits(r,u.a,u.c,u.d,u.miss,u.ns,u.proc);return i.value=m,m}const u=A(e+"-a",0),m=A(e+"-c",0),b=A(e+"-d",0),p=A(e+"-miss",0),h=A(e+"-ns",0),E=A(e+"-proc",0),k=icScoreFromHits(r,u,m,b,p,h,E);return i.value=k,k}function icOpenManualResult(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen aktiv match valgt");return}const i=o("upload-stage-select"),t=o("upload-shooter-select");if(!i.value||!t.value){alert("Velg stage og skytter");return}Me=i.value,icUploadShooterSel=t.value;const s=o("new-result-stage");s&&(s.value=Me),o("new-result-time")&&(o("new-result-time").value=""),["new-result-c","new-result-d","new-result-miss","new-result-ns","new-result-proc"].forEach(a=>{const h=document.getElementById(a+"-val");const d=document.getElementById(a+"-disp");if(h)h.value=0;if(d)d.textContent="0"}),icNormalizeManualHits(),icRecalcPoints("new-result"),G("modal-ocr-confirm"),G("modal-upload-result");const _snEl=document.getElementById("modal-add-shooter-name");if(_snEl){const _sel=document.getElementById("upload-shooter-select");const _snTxt=_sel&&_sel.selectedIndex>=0?_sel.options[_sel.selectedIndex].text:"";_snEl.textContent=_snTxt;} o("modal-add").classList.add("open")}function icCurrentShooterId(){const e=Pe();return e&&e.uid?e.uid:"me"}function icFindShooter(e,i){if(!e||!e.shooters)return null;for(const t of e.shooters)if(t.id===i||i==="me"&&t.isMe)return t;return null}function icCurrentShooter(e){const i=icCurrentShooterId();return icFindShooter(e,i)||icFindShooter(e,"me")}function icLegacyResults(e){return[]}function icCurrentResults(e){const i=icCurrentShooter(e);if(i&&i.stages&&i.stages.length)return i.stages.slice().sort((t,s)=>(t.num||0)-(s.num||0));return[]}function icStageDefs(e){if(!e||!e.stages)return[];return e.stages.filter(i=>i&&((i.number!=null)||(i.num!=null)||i.name||i.paperTargets||i.poppers||i.plates)).map((i,t)=>{const s=i.number!=null?i.number:i.num!=null?i.num:t+1;return{number:s,name:i.name||("Stage "+s),paperTargets:i.paperTargets||0,poppers:i.poppers||0,plates:i.plates||0,noShoots:i.noShoots||0,bonusPaperTargets:i.bonusPaperTargets||0,bonusIncluded:!!i.bonusIncluded}}).sort((i,t)=>(i.number||0)-(t.number||0))}async function icEnsureShooter(e,i){e.shooters||(e.shooters=[]);let t=icFindShooter(e,i);if(t)return t;const s=icCurrentShooterId();if(i===s||i==="me")return t={id:s,isMe:!0,firstName:g.firstName||"Meg",lastName:g.lastName||"",division:g.division||"Classic",pf:g.powerFactor||"minor",club:g.club||"",stages:[]},e.shooters.push(t),t;try{const a=await Ut(i);return t={id:i,isMe:!1,firstName:(a==null?void 0:a.firstName)||"Skytter",lastName:(a==null?void 0:a.lastName)||"",division:(a==null?void 0:a.division)||"Classic",pf:(a==null?void 0:a.powerFactor)||"minor",club:(a==null?void 0:a.club)||"",stages:[]},e.shooters.push(t),t}catch{return null}}function icUpsertStageResult(e,i,isTraining){e.stages||(e.stages=[]);const t=e.stages.findIndex(s=>(s.num||s.number)==i.num);if(isTraining){const existing=t>=0?e.stages[t]:null;const runs=existing&&existing.runs?existing.runs.slice():[];if(existing&&!existing.runs&&existing.time)runs.push({...existing,runNum:1});const runNum=runs.length+1;runs.push({...i,runNum});const best=runs.reduce((a,b)=>(b.hf||0)>(a.hf||0)?b:a,runs[0]);const stageObj={...best,num:i.num,name:i.name,runs};if(t>=0)e.stages[t]=stageObj;else e.stages.push(stageObj);}else{t>=0?e.stages[t]={...e.stages[t],...i}:e.stages.push(i);}e.stages.sort((s,a)=>(s.num||0)-(a.num||0));}function icFormFromResults(e,i,t){const s=(e||[]).filter(m=>m&&m.time&&m.pts&&(!i||(m.num||m.number)<=i));if(!s.length)return null;const a=(t==null?void 0:t.division)||g.division||"Classic",n=(t==null?void 0:t.pf)||g.powerFactor||"minor",r=(t==null?void 0:t.draw)||g.draw||1.42,u=(t==null?void 0:t.reloadTime)||g.reloadTime||1.8;let m=0,b=0,f=0,p=0,h=0,E=0;for(const k of s){const P=icStageShots(k);if(!P)continue;const C=Se(P,a,n),L=(k.time||0)-r-C*u;L>0&&(m+=P,b+=L,f+=k.a||0,p+=k.c||0,h+=k.d||0,E+=k.miss||0)}if(!m||!b)return null;const k=f+p+h+E;return{avgSplit:b/m,aPercent:k>0?f/k:0,cPercent:k>0?p/k:0,dPercent:k>0?h/k:0,missPercent:k>0?E/k:0,completedStages:s.length,division:a,pf:n,draw:r,reloadTime:u}}function icProjectNext(e,i){if(!e||!i)return null;const t=icStageShots(i);if(!t)return null;const s=Se(t,e.division||"Classic",e.pf||"minor"),a=e.draw+t*e.avgSplit+s*e.reloadTime,n=it[e.pf]||it.minor,r=t*(e.aPercent*n.A+e.cPercent*n.C+e.dPercent*n.D),u=a>0?r/a:0;return{shots:t,reloads:s,expTime:a,expPts:r,maxPts:icStageMaxPts(i),estHF:u}}function icStageMetricsForMatch(e,i){if(!e||!i)return[];const t=[],s=i.number!=null?i.number:i.num,a=icStageMaxPts(i);(e.shooters||[]).forEach(n=>{const r=(n.stages||[]).find(u=>String(u.num||u.number)===String(s)&&u.time&&u.pts>=0);if(r){const u=((n.firstName||"")+" "+(n.lastName||"")).trim()||"Skytter",m=r.hf&&r.hf>0?r.hf:(r.time>0?(r.pts||0)/r.time:0);t.push({id:n.id,name:u,isMe:!!n.isMe,pts:r.pts||0,hf:m,res:r,division:n.division||"",pf:n.pf||"minor"})}});t.sort((n,r)=>(r.hf||0)-(n.hf||0)||((r.pts||0)-(n.pts||0)));const n=t.length>0?(t[0].hf||0):0;return t.map((r,u)=>{const m=n>0?r.hf/n*100:0,b=n>0?r.hf/n*a:0,stageTotal=(r.res.a||0)+(r.res.c||0)+(r.res.d||0)+(r.res.miss||0),stageAPercent=stageTotal>0?(r.res.a||0)/stageTotal*100:0;return{...r,rank:u+1,stagePct:m,stagePts:b,maxStagePts:a,stageAPercent}})}function icCommonStageNumbers(e){if(!e||!e.shooters||e.shooters.length===0)return[];const i=icStageDefs(e);if(!i.length)return[];const t=(e.shooters||[]).filter(s=>s&&(s.stages||[]).length>0);if(!t.length)return[];return i.map(s=>String(s.number)).filter(s=>t.every(a=>(a.stages||[]).some(n=>String(n.num||n.number)===s&&n.time&&n.pts>=0)))}function icMatchTotals(e,onlyCommon=!1){const i={};if(!e)return[];const commonNums=onlyCommon?icCommonStageNumbers(e):null;(e.shooters||[]).forEach(t=>{i[String(t.id)]={id:t.id,name:((t.firstName||"")+" "+(t.lastName||"")).trim()||"Skytter",division:t.division||"",pf:t.pf||"minor",totalStagePts:0,totalRawPts:0,totalA:0,totalHits:0}});icStageDefs(e).forEach(t=>{if(commonNums&&!commonNums.includes(String(t.number)))return;icStageMetricsForMatch(e,t).forEach(s=>{const a=String(s.id);i[a]||(i[a]={id:s.id,name:s.name,division:s.division||"",pf:s.pf||"minor",totalStagePts:0,totalRawPts:0,totalA:0,totalHits:0}),i[a].totalStagePts+=(s.stagePts||0),i[a].totalRawPts+=(s.pts||0),i[a].totalA+=(s.res&&s.res.a||0),i[a].totalHits+=(s.res?(s.res.a||0)+(s.res.c||0)+(s.res.d||0)+(s.res.miss||0):0)})});return Object.values(i).sort((t,s)=>s.totalStagePts-t.totalStagePts||s.totalRawPts-t.totalRawPts)}function ct(){const e=$.find(k=>k.id!=null&&k.id.toString()===String(R));if(!e)return null;const i=icCurrentShooter(e),t=icCurrentResults(e),s=icFormFromResults(t,null,i);return s?{avgSplit:s.avgSplit,completedStages:s.completedStages,totalStages:icStageDefs(e).length,aPercent:s.aPercent,cPercent:s.cPercent,dPercent:s.dPercent,missPercent:s.missPercent,division:s.division,pf:s.pf,draw:s.draw,reloadTime:s.reloadTime}:null}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function We(e){if(!e)return"";try{const i=dt==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function o(e){return document.getElementById(e)}function F(e){const i=o(e);return i?i.value:""}function he(e,i){const t=parseFloat(F(e));return isNaN(t)?i||0:t}function A(e,i){const t=parseInt(F(e));return isNaN(t)?i||0:t}function le(){const e=(g==null?void 0:g.firstName)||"",i=(g==null?void 0:g.lastName)||"";return(e.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function ts(e){var s;const t=Pe();const[i,_refs,_matches]=await Promise.all([jt(),loadReferenceShooters(),Vt(),new Promise(r=>setTimeout(r,2000))]);i?g=i:g={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null};refShooters=_refs;$=_matches;if($&&$.length>0){const a=new Date,n=$.filter(r=>r.status!=="finished"&&r.date);if(n.length>0){let r=n[0],u=Math.abs(new Date(n[0].date)-a);for(const m of n){const b=new Date(m.date),f=Math.abs(b-a);f<u&&(u=f,r=m)}R=r.id}}ke&&ke(),ke=qt(a=>{$=a,fe(),te()}),Zt(a=>{ee=a,Ye()}),e.innerHTML=`
<div id="global-spinner" style="display:none;pointer-events:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.55);align-items:center;justify-content:center;flex-direction:column;gap:14px;"><div class="spinner-ring"></div><div class="spinner-text" id="spinner-text"></div></div>
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
 <div class="navbar">
 <div class="nav-title">INSIGHT <span>DYNAMICS</span></div>
 <div class="match-chip-wrapper">
 <div class="match-chip" onclick="toggleMatchDropdown('home')">
 <div class="match-chip-dot"></div>
 <div class="match-chip-name" id="home-chip-name">${d("no_match_selected")}</div>
 <div class="match-chip-arrow">&#9660;</div>
 </div>
 <div class="match-dropdown" id="home-match-dropdown"></div>
 </div>
 <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${le()}</div>
 </div>
 <div class="scroll-content" id="home-content"></div>
 <button class="fab" onclick="openModal('modal-add')">+</button>
 <div class="tab-bar">
 <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')" style="position:relative;"><div class="tab-icon">&#127942;</div><div id="tab-invitation-badge" style="display:none;position:absolute;top:0;right:0;background:#ef4444;color:white;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:bold;align-items:center;justify-content:center;"></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
 <div class="navbar">
 <div class="nav-title">MATCH<span>ER</span></div>
 <div style="display:flex;align-items:center;gap:15px;">
 <div style="position:relative;cursor:pointer;" onclick="openInvitationsModal()">
 <div style="font-size:24px;"></div>
 <div id="invitation-badge" style="display:none;position:absolute;top:-5px;right:-5px;background:#ef4444;color:white;border-radius:50%;width:20px;height:20px;font-size:12px;font-weight:bold;align-items:center;justify-content:center;">0</div>
 </div>
 <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${le()}</div>
 </div>
 </div>
 <div class="scroll-content">
 <div class="search-wrap"><span class="search-icon"></span><input class="search-input" id="match-id-search" placeholder="${d("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Søk</button></div>
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
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
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
  Ingen skutte stages ennå. Data vil vises etter at du har lagt til resultater.
 </div>
 </div>
 <div id="prog-stages-container"></div>
 </div>
 <button class="fab" onclick="openModal('modal-upload-result')">+</button>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
 <div class="navbar">
 <div class="nav-title">LIVE<span></span></div>
 <div class="match-chip-wrapper">
 <div class="match-chip" onclick="toggleMatchDropdown('results')">
 <div class="match-chip-dot"></div>
 <div class="match-chip-name" id="results-chip-name">${d("no_match_selected")}</div>
 <div class="match-chip-arrow">&#9660;</div>
 </div>
 <div class="match-dropdown" id="results-match-dropdown"></div>
 </div>
 <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${le()}</div>
 </div>
 <div class="scroll-content" id="results-content"></div>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
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
 <button class="btn-primary" onclick="openEditProfile()"> ${d("edit_profile")}</button>
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
 <div class="stat-block"><div class="stat-value" id="stat-hf-short">—</div><div class="stat-label">SHORT HF</div></div><div class="stat-block"><div class="stat-value" id="stat-hf-medium">—</div><div class="stat-label">MEDIUM HF</div></div><div class="stat-block"><div class="stat-value" id="stat-hf-long">—</div><div class="stat-label">LONG HF</div></div>
 <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${d("a_rate")}</div></div>
 </div>
 </div>

 <div id="profile-match-tips"></div>
 <button class="btn-primary btn-logout" onclick="handleLogout()"> ${d("logout")}</button>
 <div class="profile-spacer"></div>
 </div>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
 <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<div class="screen" id="screen-teams">
 <div class="navbar">
 <div class="nav-title">LAG<span>ET</span></div>
 <div class="match-chip-wrapper">
 <div class="match-chip" onclick="toggleMatchDropdown('teams')">
 <div class="match-chip-dot"></div>
 <div class="match-chip-name" id="teams-chip-name">${d("no_match_selected")}</div>
 <div class="match-chip-arrow">&#9660;</div>
 </div>
 <div class="match-dropdown" id="teams-match-dropdown"></div>
 </div>
 <div class="nav-avatar" id="nav-av-teams" onclick="switchTab('screen-profile')">${le()}</div>
 </div>
 <div class="scroll-content">
 <div id="teams-standings-container"></div>
 <div style="margin-top:16px;">
 <button class="btn-primary" onclick="openCreateTeam()" style="width:100%;">+ Opprett nytt lag</button>
 </div>
 <div style="margin-top:16px;" id="teams-list-container"></div>
 </div>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-teams')"><div class="tab-icon">👕</div><span>Lag</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${d("profile")}</span></div>
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
 <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split("T")[0]}" style="width:100%;box-sizing:border-box;">
 </div>
 <div class="field-group">
 <div class="field-label">${d("location")}</div>
 <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
 </div>
 <input type="hidden" id="new-match-stages" value="0">
 <div class="field-group">
 <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
 <input type="checkbox" id="new-match-searchable" checked style="width:18px;height:18px;">
 <span>${d("allow_search")}</span>
 </label>
 </div>
 <div class="field-group">
 <div class="field-label">Inviter brukere (valgfritt)</div>
 <div style="display:flex;gap:8px;margin-bottom:10px;">
 <input class="field-input" type="text" id="new-match-user-search" oninput="searchUsersNewMatch()" placeholder="Søk etter navn eller e-post..." style="flex:1;">
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
 <input class="field-input" type="date" id="edit-match-date" style="width:100%;box-sizing:border-box;">
 </div>
 <div class="field-group">
 <div class="field-label">${d("location")}</div>
 <input class="field-input" type="text" id="edit-match-location" placeholder="Bergen">
 </div>
 <input type="hidden" id="edit-match-stages" value="0">
 <div style="margin-top:10px;">
 <button class="btn-primary" onclick="openCreateStageFromEdit()" style="width:100%;">Legg til stage</button>
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
 <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
 <input type="checkbox" id="edit-match-reference-enabled" onchange="toggleReferenceShootersEnabled()" style="width:18px;height:18px;">
 <span>Bruk referanseskyttere</span>
 </label>
 </div>
 <div class="field-group" id="reference-shooters-config" style="display:none;"></div>
 <div class="field-group">
 <div class="field-label">Inviter brukere (valgfritt)</div>
 <div style="display:flex;gap:8px;margin-bottom:10px;">
 <input class="field-input" type="text" id="edit-match-user-search" oninput="searchUsersEditMatch()" placeholder="Søk etter navn eller e-post..." style="flex:1;">
 <button onclick="searchUsersEditMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Søk</button>
 </div>
 <div id="edit-match-search-results"></div>
 </div>
 <div class="field-group">
 <div class="field-label">Ekstra skyttere i matchen</div>
 <button class="btn-secondary" onclick="openModal('modal-add-shooter')" style="width:100%;margin-bottom:10px;">+ Legg til skytter</button>
 <div id="edit-match-shooters-list"></div>
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
 <select class="field-select" id="new-shooter-division" onchange="updateNewShooterPFOptions()">
 <option value="Standard">Standard</option>
 <option value="Open">Open</option>
 <option value="Production">Production</option>
 <option value="Production Optics">Production Optics</option>
 <option value="Production Optics Carbine">Production Optics Carbine</option>
 <option value="Classic" selected>Classic</option>
 <option value="Revolver">Revolver</option>
 <option value="Pistol Caliber Carbine">Pistol Caliber Carbine</option>
 <option value="Pistol Caliber Carbine Optics">Pistol Caliber Carbine Optics</option>
 </select>
 </div>
 <div class="field-group">
 <div class="field-label">${d("select_power_factor")}</div>
 <select class="field-select" id="new-shooter-pf">
 <option value="minor" selected>MINOR</option>
 <option value="major">MAJOR</option>
 </select>
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
 <button class="btn-secondary" style="margin-top:10px;" onclick="openCreateStageFromUpload()">Legg til stage</button>
 </div>
 <div class="field-group">
 <div class="field-label">Velg skytter</div>
 <select class="field-select" id="upload-shooter-select"></select>
 </div>
 <div class="field-group">
 <div class="field-label">Last opp bilde (png, jpg, pdf)</div>
 <input class="field-input" type="file" id="upload-result-file" accept="image/png,image/jpeg,image/jpg,application/pdf">
 </div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><button class="btn-secondary" id="upload-manual-btn" onclick="icOpenManualResult()">Registrer manuelt</button><button class="btn-primary" id="upload-ess-btn" onclick="importESSVerify(event)">Importer ESS verify</button></div>
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
 <div><div class="modal-title">${d("add_result")}</div><div id="modal-add-shooter-name" style="font-size:13px;color:var(--accent);font-weight:600;margin-top:2px;"></div></div>
 <div class="modal-close" onclick="closeModal('modal-add')">✕</div>
 </div>
 <div class="modal-body">
 <div class="field-group">
 <div class="field-label">Stage Number</div>
 <input class="field-input" type="number" id="new-result-stage" oninput="icRecalcPoints('new-result')">
 </div>
 <div class="field-group">
 <div class="field-label">Time (s)</div>
 <input class="field-input" type="number" step="0.01" id="new-result-time">
 </div>
 <div class="field-group">
 <div class="field-label">Stage krav</div>
 <div id="new-result-stage-info" style="padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--muted);font-size:13px;">Velg stage</div>
 </div>
 <div class="field-group">
 <div class="field-label">Points</div>
 <input class="field-input" type="number" id="new-result-points" readonly style="background:var(--bg);">
 </div>
 <div class="section-label" style="margin-top:15px;">Treffbilde</div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
 <div class="field-group">
 <div class="field-label">A (auto)</div>
 <input class="field-input" type="number" id="new-result-a" value="0" readonly style="text-align:center;background:var(--card);color:var(--text);-webkit-text-fill-color:var(--text);opacity:1;">
 </div>
 <div class="field-group">
 <div class="field-label">C</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-c',-1)">−</button>
 <div id="new-result-c-disp" style="text-align:center;font-size:16px;font-weight:600;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-c-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-c',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">D</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-d',-1)">−</button>
 <div id="new-result-d-disp" style="text-align:center;font-size:16px;font-weight:600;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-d-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-d',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">Miss</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-miss',-1)">−</button>
 <div id="new-result-miss-disp" style="text-align:center;font-size:16px;font-weight:600;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-miss-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-miss',1)">+</button>
 </div>
 </div>
 </div>
 <div class="section-label" style="margin-top:15px;">Straffer</div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
 <div class="field-group">
 <div class="field-label">NS (No-Shoot)</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-ns',-1)">−</button>
 <div id="new-result-ns-disp" style="text-align:center;font-size:16px;font-weight:600;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-ns-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-ns',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">Proc (Procedural)</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-proc',-1)">−</button>
 <div id="new-result-proc-disp" style="text-align:center;font-size:16px;font-weight:600;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-proc-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-proc',1)">+</button>
 </div>
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
 <button onclick="changeStageNumber(-1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
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
 <button onclick="changeStageField('paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
 <button onclick="changeStageField('paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">${d("poppers")}</div>
 <div style="display:flex;align-items:center;gap:10px;">
 <button onclick="changeStageField('poppers', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
 <button onclick="changeStageField('poppers', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">${d("plates")}</div>
 <div style="display:flex;align-items:center;gap:10px;">
 <button onclick="changeStageField('plates', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
 <button onclick="changeStageField('plates', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">${d("no_shoots")}</div>
 <div style="display:flex;align-items:center;gap:10px;">
 <button onclick="changeStageField('no-shoots', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
 <button onclick="changeStageField('no-shoots', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">${d("bonus_paper_targets")}</div>
 <div style="display:flex;align-items:center;gap:10px;">
 <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:20px;width:80px;">
 <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:50px;height:50px;font-size:24px;background:#2d3748;color:white;border:none;border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
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
 <input class="field-input" type="text" id="user-search-input" placeholder="Søk..." style="flex:1;" oninput="searchUsers()">
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

<div class="modal-overlay" id="modal-create-team" onclick="closeModalOutside(event,'modal-create-team')">
 <div class="modal-sheet" onclick="event.stopPropagation()">
 <div class="modal-header">
 <div class="modal-title" id="team-modal-title">Opprett lag</div>
 <div class="modal-close" onclick="closeModal('modal-create-team')">✕</div>
 </div>
 <div class="modal-body">
 <div class="field-group">
 <div class="field-label">Lagnavn</div>
 <input class="field-input" type="text" id="team-name-input" placeholder="f.eks. Team Norge">
 </div>
 <div class="field-group">
 <div class="field-label">Velg skyttere (maks 4)</div>
 <div id="team-shooter-list" style="margin-top:8px;"></div>
 </div>
 <button class="btn-primary" onclick="saveTeam()">Lagre lag</button>
 </div>
 </div>
</div>

</div>
 `,is(),gt(),te(),fe(),vt(),De();if(R)pt(R)}function is(){window.switchTab=ss,window.setFilter=rs,window.showSpinner=function(t){var s=document.getElementById("global-spinner"),l=document.getElementById("spinner-text");if(s){s.style.display="flex";s.style.pointerEvents="auto"}if(l)l.textContent=t||""},window.hideSpinner=function(){var s=document.getElementById("global-spinner");if(s){s.style.display="none";s.style.pointerEvents="none"}},window.openModal=ie,window.closeModal=G,window.closeModalOutside=ns,window.createMatch=os,window.searchMatchByIdHandler=ls,window.openEditProfile=Ns,window.saveProfileData=Fs,window.selectPF=$s,window.updatePFOptions=mt,window.calcPrognose=De,window.renderMatchList=fe,window.selectMatch=pt,window.addShooter=Os,window.addStageResult=js,window.adjustResultField=adjustResultField,window.updateNewShooterPFOptions=icUpdateNewShooterPFOptions,window.removeEditMatchShooter=removeEditMatchShooter,window.handleLogout=Ks,window.openEditMatch=ps,window.saveEditMatch=us,window.openCreateStage=Re,window.openCreateStageFromEdit=ms,window.openCreateStageFromNewMatch=hs,window.openEditStage=fs,window.changeStageNumber=bs,window.changeStageField=ys,window.saveStage=ws,window.openInviteUser=ks,window.openInvitationsModal=Is,window.acceptInvitation=Cs,window.declineInvitation=_s,window.searchUsers=xs,window.toggleUserSelection=Ss,window.sendMultipleInvitations=Ls,window.searchUsersNewMatch=Ps,window.toggleUserNewMatch=Es,window.searchUsersEditMatch=Ts,window.toggleUserEditMatch=Ms,window.confirmDeleteMatch=gs,window.deleteMatchConfirmed=vs,window.uploadAndScanResult=Hs,window.saveOCRResult=Gs,window.icOpenManualResult=icOpenManualResult,window.importESSVerify=importESSVerify,window.openCreateStageFromUpload=Us,window.toggleMatchDropdown=ds,window.selectMatchFromDropdown=cs,window.toggleReferenceShootersEnabled=toggleReferenceShootersEnabled,window.toggleReferenceShooterChoice=toggleReferenceShooterChoice,window.updateReferenceShooterOverride=updateReferenceShooterOverride,window.toggleLiveFilter=toggleLiveFilter,window.toggleTips=toggleTips,window.deleteRun=deleteRun,window.openCreateTeam=openCreateTeam,window.editTeam=editTeam,window.deleteTeam=deleteTeam,window.saveTeam=saveTeam,window.renderTeamsScreen=renderTeamsScreen}function toggleLiveFilter(){liveShowAll=!liveShowAll,_e()}function toggleTips(id){const el=document.getElementById(id);if(el)el.style.display=el.style.display==="none"?"block":"none"}async function deleteRun(stageNum,runIdx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match)return;const shooter=icCurrentShooter(match);if(!shooter)return;const stageIdx=shooter.stages.findIndex(s=>(s.num||s.number)==stageNum);if(stageIdx<0)return;const stage=shooter.stages[stageIdx];if(!stage.runs||stage.runs.length<=1){alert("Kan ikke slette siste run. Slett hele resultatet i stedet.");return;}if(!confirm("Slette Run "+(runIdx+1)+"?"))return;stage.runs.splice(runIdx,1);stage.runs.forEach((r,i)=>{r.runNum=i+1});const best=stage.runs.reduce((a,b)=>(b.hf||0)>(a.hf||0)?b:a,stage.runs[0]);Object.assign(stage,best,{num:stage.num,name:stage.name,runs:stage.runs});const res=await Ee(match.id,{shooters:match.shooters});if(res.success){te(),_e(),De()}else alert("Kunne ikke slette run: "+res.error);}function icTeamStandings(e){if(!e||!e.teams||!e.teams.length)return[];const stages=icStageDefs(e);return e.teams.map(team=>{let totalPts=0;stages.forEach(stage=>{const metrics=icStageMetricsForMatch(e,stage);const teamMetrics=metrics.filter(m=>team.shooterIds&&team.shooterIds.includes(m.id));const sorted=teamMetrics.slice().sort((a,b)=>(b.stagePts||0)-(a.stagePts||0));const top3=sorted.slice(0,3);top3.forEach(m=>{totalPts+=(m.stagePts||0)})});return{id:team.id,name:team.name,shooterIds:team.shooterIds||[],totalPts}}).sort((a,b)=>b.totalPts-a.totalPts)}function renderTeamsScreen(){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));const sc=o("teams-standings-container");const lc=o("teams-list-container");if(!sc||!lc)return;if(!match){sc.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';lc.innerHTML="";return;}const teams=match.teams||[];if(!teams.length){sc.innerHTML='<div class="empty-state"><div class="empty-title">Ingen lag ennå</div><div class="empty-sub">Opprett et lag for å se standings</div></div>';lc.innerHTML="";return;}const standings=icTeamStandings(match);const topPts=standings.length?standings[0].totalPts:0;let sh='<div class="card"><div class="card-header"><div class="card-title">Lag-standings</div></div>';sh+='<div class="standings-table-wrap"><table class="standings-table">';sh+='<thead><tr class="standings-header-row"><th class="standings-th">#</th><th class="standings-th">LAG</th><th class="standings-th standings-th-pts">STG PTS</th><th class="standings-th standings-th-pct">%</th></tr></thead><tbody>';standings.forEach((t,i)=>{const pct=topPts>0?(t.totalPts/topPts*100).toFixed(2):"0.00";sh+='<tr class="standings-row">';sh+='<td class="standings-td">'+(i+1)+"</td>";sh+='<td class="standings-td">'+t.name+"</td>";sh+='<td class="standings-td standings-td-pts">'+t.totalPts.toFixed(2)+"</td>";sh+='<td class="standings-td standings-td-pct">'+pct+"%</td>";sh+="</tr>"});sh+="</tbody></table></div></div>";sc.innerHTML=sh;let lh="";teams.forEach((team,idx)=>{const allShooters=(match.shooters||[]);const memberNames=allShooters.filter(s=>team.shooterIds&&team.shooterIds.includes(s.id)).map(s=>((s.firstName||"")+" "+(s.lastName||"")).trim()||"Skytter");lh+='<div class="card" style="margin-bottom:10px;">';lh+='<div class="card-header"><div class="card-title">'+team.name+"</div>";lh+='<div style="display:flex;gap:8px;">';lh+='<button onclick="editTeam('+idx+')" style="padding:6px 12px;background:var(--accent);color:#1a202c;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;">Rediger</button>';lh+='<button onclick="deleteTeam('+idx+')" style="padding:6px 12px;background:#ef4444;color:white;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;">Slett</button>';lh+="</div></div>";lh+='<div style="font-size:13px;color:var(--muted);margin-top:8px;">'+( memberNames.length?memberNames.join(", "):"Ingen skyttere")+"</div>";lh+="</div>"});lc.innerHTML=lh}let currentEditTeamIdx=null;function openCreateTeam(){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match){alert("Velg en match først");return;}currentEditTeamIdx=null;o("team-modal-title").textContent="Opprett lag";o("team-name-input").value="";renderTeamShooterList(match,null);ie("modal-create-team")}function editTeam(idx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match||!match.teams||!match.teams[idx])return;currentEditTeamIdx=idx;const team=match.teams[idx];o("team-modal-title").textContent="Rediger lag";o("team-name-input").value=team.name||"";renderTeamShooterList(match,team.shooterIds||[]);ie("modal-create-team")}function renderTeamShooterList(match,selectedIds){const container=o("team-shooter-list");if(!container)return;const allShooters=(match.shooters||[]);const usedIds=new Set();(match.teams||[]).forEach((t,i)=>{if(i===currentEditTeamIdx)return;(t.shooterIds||[]).forEach(id=>usedIds.add(id))});let html="";allShooters.forEach(s=>{const name=((s.firstName||"")+" "+(s.lastName||"")).trim()||"Skytter";const checked=selectedIds&&selectedIds.includes(s.id);const disabled=!checked&&usedIds.has(s.id);html+='<label style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg);border-radius:8px;margin-bottom:8px;cursor:'+(disabled?"not-allowed":"pointer")+';">';html+='<input type="checkbox" value="'+s.id+'" '+(checked?"checked":"")+(disabled?" disabled":"")+(disabled?"":' onchange="enforceTeamLimit(this)"')+ ' style="width:18px;height:18px;">';html+='<div><div style="font-weight:600;"'+(disabled?' style="color:var(--muted);"':'')+">"+ name+"</div>";if(disabled)html+='<div style="font-size:11px;color:var(--muted);">Allerede på et lag</div>';html+="</div></label>"});if(!allShooters.length)html='<div style="color:var(--muted);font-size:13px;">Ingen skyttere i matchen. Legg til skyttere først.</div>';container.innerHTML=html}function enforceTeamLimit(el){const checked=o("team-shooter-list").querySelectorAll("input:checked");if(checked.length>4){el.checked=false;alert("Maks 4 skyttere per lag")}}async function saveTeam(){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match)return;const name=(o("team-name-input").value||"").trim();if(!name){alert("Lagnavn kan ikke være tomt");return;}const checkboxes=o("team-shooter-list").querySelectorAll("input[type=checkbox]:checked");const shooterIds=Array.from(checkboxes).map(c=>c.value);if(shooterIds.length>4){alert("Maks 4 skyttere per lag");return;}match.teams=match.teams||[];if(currentEditTeamIdx!==null){match.teams[currentEditTeamIdx]={...match.teams[currentEditTeamIdx],name,shooterIds}}else{match.teams.push({id:"team_"+Date.now(),name,shooterIds})}const res=await Ee(match.id,{teams:match.teams});if(res.success){G("modal-create-team");renderTeamsScreen()}else alert("Kunne ikke lagre lag: "+res.error)}async function deleteTeam(idx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match||!match.teams)return;const team=match.teams[idx];if(!confirm("Slette laget "+team.name+"?"))return;match.teams.splice(idx,1);const res=await Ee(match.id,{teams:match.teams});if(res.success)renderTeamsScreen();else alert("Kunne ikke slette lag: "+res.error)}function ss(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),o(e).classList.add("active");const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-teams","screen-profile"].indexOf(e),t=document.querySelectorAll(".tab-item");t[i]&&t[i].classList.add("active"),e==="screen-home"&&te(),e==="screen-matches"&&fe(),e==="screen-results"&&_e(),e==="screen-teams"&&renderTeamsScreen()}function ie(e){o(e).classList.add("open"),e==="modal-upload-result"&&as(),e==="modal-add-shooter"&&icUpdateNewShooterPFOptions(),e==="modal-add"&&icInitManualResult()}async function as(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e)return;const i=o("upload-match-name");i&&(i.textContent=e.name||"Ukjent match");const t=o("upload-stage-select"),s=icStageDefs(e);if(t.innerHTML="",s.length>0)s.forEach(n=>{const r=document.createElement("option");r.value=n.number,r.textContent=n.name&&n.name!=="Stage "+n.number?`Stage ${n.number} - ${n.name}`:`Stage ${n.number}`,t.appendChild(r)});else{const n=document.createElement("option");n.value="",n.textContent="Ingen stages - opprett ny",t.appendChild(n)}const a=o("upload-shooter-select");a.innerHTML="";const n=new Set,r=icCurrentShooterId(),u=document.createElement("option");u.value=r,u.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",a.appendChild(u),n.add(r);if(e.participants&&e.participants.length>0)for(const m of e.participants)if(!n.has(m))try{const b=await Ut(m);if(b){const f=document.createElement("option");f.value=m,f.textContent=(b.firstName||"")+" "+(b.lastName||""),a.appendChild(f),n.add(m)}}catch(b){console.error("Error fetching user:",m,b)}e.shooters&&e.shooters.length>0&&e.shooters.forEach(m=>{if(!n.has(m.id)){const b=document.createElement("option");b.value=m.id,b.textContent=(m.firstName||"")+" "+(m.lastName||""),a.appendChild(b),n.add(m.id)}})}function G(e){o(e).classList.remove("open")}function ns(e,i){e.target.id===i&&G(i)}function rs(e,i){ue=e,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),i.classList.add("active"),fe()}async function os(){var t;const e={name:F("new-match-name")||"Ny match",type:F("new-match-type")||"Trening",date:F("new-match-date")||new Date().toISOString().split("T")[0],location:F("new-match-location")||"",plannedStages:A("new-match-stages",6),searchable:((t=o("new-match-searchable"))==null?void 0:t.checked)!==!1,status:"active",stages:[],shooters:[],referenceShootersEnabled:!1,referenceShooterIds:[],referenceOverrides:{}};showSpinner("Oppretter match…");zt(e).then(function(i){hideSpinner();if(i.success){let s=0;Promise.all(ve.map(function(a){return Ge(a.email,{matchId:i.matchId,matchName:e.name})})).then(function(results){results.forEach(function(r){if(r.success)s++});G("modal-new-match");o("new-match-name").value="";o("new-match-location").value="";o("new-match-stages").value="6";o("new-match-searchable")&&(o("new-match-searchable").checked=!0);o("new-match-user-search").value="";o("new-match-search-results").innerHTML="";ve=[];if(s>0)alert("Match opprettet! Invitasjoner sendt til "+s+" bruker(e).")})}else alert("Kunne ikke opprette match: "+i.error)})}async function ls(){const e=F("match-id-search").trim();if(!e){alert("Skriv inn et match-ID");return}const i=await Kt(e);if(i.success){const t=$.findIndex(s=>s.id&&s.id.toString()===i.match.id.toString());t!==-1?R=$[t].id:($.unshift(i.match),R=i.match.id),pt(R),oe&&oe("screen-home"),o("match-id-search").value=""}else alert(`Fant ingen match med ID ${e}${i.error?": "+i.error:""}`)}function pt(e){R=e!=null?e.toString():e;const i=$.find(t=>t.id!=null&&t.id.toString()===R);if(i){const t=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name","teams-chip-name"].forEach(a=>{const n=o(a);n&&(n.textContent=t)})}xe&&xe(),R&&(xe=Wt(R,t=>{const s=$.findIndex(a=>a.id!=null&&a.id.toString()===R);s!==-1&&t&&($[s]=t,te(),_e())})),te(),_e(),De(),fe()}function ds(e){const i=e+"-match-dropdown",t=o(i);if(!t)return;if(t.classList.contains("open")){t.classList.remove("open");return}document.querySelectorAll(".match-dropdown").forEach(a=>a.classList.remove("open"));let s="";$.length===0?s+='<div class="match-dropdown-item" style="color:var(--muted);text-align:center;">Ingen matcher ennå</div>':$.forEach(a=>{const n=a.id!=null&&a.id.toString()===String(R),r=a.id?"Match ID "+a.id+" "+a.name:a.name||"Match";s+='<div class="match-dropdown-item '+(n?"active":"")+`" onclick="selectMatchFromDropdown('`+a.id+"', '"+e+`')">`,s+='<div class="match-dropdown-dot"></div>',s+='<div class="match-dropdown-info">',s+='<div class="match-dropdown-name">'+r+"</div>",s+='<div class="match-dropdown-meta">'+We(a.date)+" · "+a.location+"</div>",s+="</div>",s+="</div>"}),t.innerHTML=s,t.classList.add("open")}function cs(e,i){pt(e);const t=i+"-match-dropdown",s=o(t);s&&s.classList.remove("open")}function ps(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}o("edit-match-name").value=e.name||"",o("edit-match-type").value=e.type||"Trening",o("edit-match-date").value=e.date||"",o("edit-match-location").value=e.location||"",o("edit-match-stages").value=e.plannedStages||0,o("edit-match-searchable")&&(o("edit-match-searchable").checked=e.searchable!==!1),o("edit-match-finished")&&(o("edit-match-finished").checked=e.status==="finished");const i=o("edit-match-rival");i.innerHTML='<option value="">Ingen rival valgt</option>';const t=document.createElement("option");t.value="me",t.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",i.appendChild(t),e.shooters&&e.shooters.length>0&&e.shooters.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.firstName+" "+n.lastName,i.appendChild(r)}),e.rivalId&&(i.value=e.rivalId),o("edit-match-user-search").value="",o("edit-match-search-results").innerHTML="",me=[],initReferenceEditState(e),o("edit-match-reference-enabled")&&(o("edit-match-reference-enabled").checked=!!e.referenceShootersEnabled),renderReferenceShooterConfig();const s=Pe(),a=o("delete-match-btn");a&&s&&e.ownerId===s.uid?a.style.display="block":a&&(a.style.display="none"),icRenderEditMatchShootersList(e),ie("modal-edit-match")}async function us(){var s,a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}refEditState.enabled=!!((o("edit-match-reference-enabled")||{}).checked);const i={name:F("edit-match-name")||e.name,type:F("edit-match-type")||e.type,date:F("edit-match-date")||e.date,location:F("edit-match-location")||e.location,plannedStages:A("edit-match-stages",e.plannedStages),searchable:((s=o("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=o("edit-match-finished"))!=null&&a.checked?"finished":"active",rivalId:F("edit-match-rival")||null,referenceShootersEnabled:!!refEditState.enabled,referenceShooterIds:(refEditState.ids||[]).slice(),referenceOverrides:JSON.parse(JSON.stringify(refEditState.overrides||{}))};showSpinner("Lagrer match…");Ee(e.id,i).then(function(t){hideSpinner();if(t.success){let n=0;Promise.all(me.map(function(r){return Ge(r.email,{matchId:e.id,matchName:i.name})})).then(function(results){results.forEach(function(r){if(r.success)n++});G("modal-edit-match");if(n>0)alert("Match oppdatert! Invitasjoner sendt til "+n+" bruker(e).")})}else alert("Kunne ikke oppdatere match: "+t.error)})}function gs(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}const i=e.id?"Match ID "+e.id+" "+e.name:e.name;o("delete-match-name").textContent=i,ie("modal-confirm-delete")}async function vs(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}showSpinner("Sletter match…");Gt(e.id).then(function(i){hideSpinner();if(i.success){G("modal-confirm-delete");G("modal-edit-match");R=null;te();fe();alert("Match slettet")}else alert("Kunne ikke slette match: "+i.error)})}let Ce=null,Me=null;function Re(){var i;const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}Ce=null,o("stage-modal-title").textContent=d("create_stage"),o("stage-number").value=(((i=e.stages)==null?void 0:i.length)||0)+1,o("stage-name").value="",o("stage-paper-targets").value=0,o("stage-poppers").value=0,o("stage-plates").value=0,o("stage-no-shoots").value=0,o("stage-bonus-paper-targets").value=0,ie("modal-create-stage")}function ms(){G("modal-edit-match"),Re()}function hs(){G("modal-new-match"),Re()}function fs(e){const i=$.find(s=>s.id!=null&&s.id.toString()===String(R));if(!i||!i.stages||!i.stages[e]){alert("Stage ikke funnet");return}Ce=e;const t=i.stages[e];o("stage-modal-title").textContent=d("edit_stage"),o("stage-number").value=t.number||e+1,o("stage-name").value=t.name||"",o("stage-paper-targets").value=t.paperTargets||0,o("stage-poppers").value=t.poppers||0,o("stage-plates").value=t.plates||0,o("stage-no-shoots").value=t.noShoots||0,o("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,ie("modal-create-stage")}function bs(e){const i=o("stage-number"),t=Math.max(1,parseInt(i.value)+e);i.value=t}function ys(e,i){const t=o("stage-"+e),s=Math.max(0,parseInt(t.value)+i);t.value=s}async function ws(){var a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("Ingen match valgt");return}const i={number:A("stage-number",1),name:F("stage-name")||"",paperTargets:A("stage-paper-targets",0),poppers:A("stage-poppers",0),plates:A("stage-plates",0),noShoots:A("stage-no-shoots",0),bonusPaperTargets:A("stage-bonus-paper-targets",0),bonusIncluded:true},t=e.stages||[];Ce!==null?t[Ce]=i:t.push(i);showSpinner("Lagrer stage…");Ee(e.id,{stages:t}).then(function(s){hideSpinner();if(s.success)G("modal-create-stage");else alert("Kunne ikke lagre stage: "+s.error)})}let ee=[],Q=[],ve=[],me=[];function ks(){if(!R){alert("Ingen match valgt");return}Q=[],o("user-search-input").value="",o("user-search-results").innerHTML="",o("send-invitations-btn").style.display="none",ie("modal-invite-user")}async function xs(){const e=F("user-search-input").trim();if(e.length===0){o("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await Ke(e),t=o("user-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=Q.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:18px;height:18px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s,ut()}function Ss(e,i,t){const s=Q.findIndex(a=>a.uid===e);s>-1?Q.splice(s,1):Q.push({uid:e,email:i,displayName:t}),ut()}function ut(){const e=o("send-invitations-btn");e&&(Q.length>0?(e.style.display="block",e.textContent=`Send invitasjoner (${Q.length} valgt)`):e.style.display="none")}async function Ls(){if(Q.length===0){alert("Ingen brukere valgt");return}const e=$.find(s=>s.id!=null&&s.id.toString()===String(R));if(!e)return;let i=0,t=0;showSpinner("Inviterer bruker…");Promise.all(Q.map(function(s){return Ge(s.email,{matchId:e.id,matchName:e.name})})).then(function(results){var i=0,t=0;results.forEach(function(r){if(r.success)i++;else t++});hideSpinner();G("modal-invite-user"),i>0&&alert(`Invitasjoner sendt til ${i} bruker(e)!`),t>0&&alert(`${t} invitasjon(er) feilet.`),Q=[]})}async function Ps(){const e=F("new-match-user-search").trim();if(e.length===0){o("new-match-search-results").innerHTML="";return}const i=await Ke(e),t=o("new-match-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=ve.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s}function Es(e,i,t){const s=ve.findIndex(a=>a.uid===e);s>-1?ve.splice(s,1):ve.push({uid:e,email:i,displayName:t})}async function Ts(){console.log(" searchUsersEditMatch called");const e=F("edit-match-user-search").trim();if(console.log(" Search term:",e),e.length===0){console.log(" Empty search term"),o("edit-match-search-results").innerHTML="";return}console.log(" Calling searchUsersByNameOrEmail...");const i=await Ke(e);console.log(" Results received:",i);const t=o("edit-match-search-results");if(!t){console.error(" Container not found: edit-match-search-results");return}if(i.length===0){console.log(" No users found"),t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">Ingen brukere funnet</p>';return}console.log(" Rendering",i.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTATER ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=me.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s,console.log(" HTML rendered to container")}function Ms(e,i,t){const s=me.findIndex(a=>a.uid===e);s>-1?me.splice(s,1):me.push({uid:e,email:i,displayName:t})}function Is(){Je(),ie("modal-invitations")}function Je(){const e=o("invitations-list");if(!e)return;if(!ee||ee.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d("no_invitations")+"</div></div>";return}let i="";ee.forEach((t,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+d("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">Fra: '+(t.invitedBy||t.invitedByUid||"Ukjent")+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+d("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+d("decline")+"</button>",i+="</div>",i+="</div>"}),e.innerHTML=i}async function Cs(e){const i=ee[e];if(!i)return;showSpinner("Aksepterer invitasjon…");Jt(i.matchId).then(function(t){hideSpinner();if(t.success){ee.splice(e,1);Ye();Je()}else alert("Kunne ikke akseptere invitasjon: "+t.error)})}async function _s(e){const i=ee[e];if(!i)return;const t=await Yt(i.matchId);t.success?(ee.splice(e,1),Ye(),Je()):alert("Kunne ikke avvise invitasjon: "+t.error)}function Ye(){const e=o("invitation-badge");if(!e)return;const i=ee.length;i>0?(e.textContent=i,e.style.display="flex"):e.style.display="none";const tb=o("tab-invitation-badge");if(tb){if(i>0){tb.textContent=i;tb.style.display="flex";}else{tb.style.display="none";}}}function te(){var a,n;const e=o("home-content");if(!e)return;const i=$.find(r=>r.id!=null&&r.id.toString()===String(R));if(!i){e.innerHTML=`
 <div class="empty-state">
 <div class="empty-icon"></div>
 <div class="empty-title">Velg en match</div>
 <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
 <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
 </div>
 `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+i.name+"</div>",t+='<div class="mhc-meta">'+We(i.date)+' · <span style="color:#e8b84b;font-weight:600;">'+( i.type||"")+'</span></div>',t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((n=i.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">Skyttere</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">Rediger match</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">Legg til stage</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">Inviter bruker</button>',t+="</div>";const s=Pe();s&&i.ownerId===s.uid&&(t+='<div style="margin-top:10px;">',t+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>',t+="</div>"),t+="</div>",i.stages&&i.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',i.stages.forEach((r,u)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;" onclick="openEditStage('+u+')">',t+='<div class="stage-num">S'+(r.number||u+1)+"</div>",t+='<div class="stage-info">',t+='<div class="stage-name">'+(r.name||"Stage "+(r.number||u+1))+' <span style="color:#e8b84b;font-weight:600;">'+(icStageMaxPts(r)<=60?"Short":icStageMaxPts(r)<=120?"Medium":"Long")+"</span></div>",t+='<div class="stage-meta">',r.paperTargets&&(t+="Paper: "+r.paperTargets+" "),r.poppers&&(t+="Poppers: "+r.poppers+" "),r.plates&&(t+="Plates: "+r.plates+" "),r.noShoots&&(t+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(t+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),t+="</div>",t+="</div>",t+="</div>"}),t+="</div>"),e.innerHTML=t}function fe(){const e=o("match-list-container");if(!e)return;let i=$.filter(s=>{if(ue==="all")return!0;if(ue==="active")return s.status!=="finished";if(ue==="trening")return s.type==="Trening";if(ue==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return ue===a});if(i.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';return}let t="";i.forEach(s=>{var r;const a=s.id!=null&&s.id.toString()===String(R),n=s.id?"Match ID "+s.id+" "+s.name:s.name;const isOwner=(()=>{const _cu=$.find(_m=>_m.id!=null&&_m.id.toString()===s.id.toString());const _pu=Pe();return _cu&&_pu&&_cu.ownerId===_pu.uid;})();t+=`<div class="match-row${a?" is-active":""}">`;t+=`<div class="match-row-top" onclick="selectMatch('${s.id}')">`;t+=`<div class="match-row-info">`;t+=`<div class="match-row-name${a?" is-active":""}">${n}</div>`;t+=`<div class="match-row-meta">${We(s.date)}${s.location?" · "+s.location:""} · <span style="color:#e8b84b;font-weight:600;">${s.type||""}</span></div>`;t+="</div>";t+='<div class="match-row-right">'+'<div class="match-stg-count">'+(((r=s.stages)==null?void 0:r.length)||0)+"</div>"+'<div class="match-stg-lbl">stages</div></div>';t+="</div>";t+='<div class="match-row-btns">';t+=`<button onclick="selectMatch('${s.id}');openEditMatch();" class="mrb-btn mrb-gold">Rediger</button>`;t+=`<button onclick="selectMatch('${s.id}');openCreateStage();" class="mrb-btn mrb-gold">Legg til stage</button>`;t+=`<button onclick="selectMatch('${s.id}');openInviteUser();" class="mrb-btn mrb-dark">Inviter bruker</button>`;if(isOwner){t+=`<button onclick="selectMatch('${s.id}');confirmDeleteMatch();" class="mrb-btn mrb-red">Slett match</button>`;}t+="</div>";t+="</div>";}),e.innerHTML=t}function _e(){var n;const e=o("results-content");if(!e)return;const i=$.find(r=>r.id!=null&&r.id.toString()===String(R));if(!i){e.innerHTML='<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';return}if(!i.shooters||i.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon"></div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';return}const t=icMatchTotals(i,!liveShowAll);if(!t.length){e.innerHTML='<div class="empty-state"><div class="empty-title">Ingen resultater ennå</div><div class="empty-sub">Live vises når stages har resultater</div></div>';return}const commonNums=icCommonStageNumbers(i),toggleLabel=liveShowAll?"Kun felles stages":"Vis alle stages";let s='<div class="card">';s+='<div class="card-header"><div class="card-title">Standings</div><button onclick="toggleLiveFilter()" style="padding:6px 12px;background:var(--accent);color:#1a202c;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;">'+toggleLabel+"</button></div>",s+=!liveShowAll&&commonNums.length>0?'<div style="font-size:12px;color:var(--muted);padding:8px 0;">Basert på '+commonNums.length+" felles stage"+(commonNums.length===1?"":"s")+"</div>":"",s+='<div class="standings-table-wrap"><table class="standings-table">',s+='<thead><tr class="standings-header-row">',s+='<th class="standings-th standings-th-rank">#</th>',s+='<th class="standings-th standings-th-shooter">Skytter</th>',s+='<th class="standings-th standings-th-pts">STG PTS</th>',s+='<th class="standings-th standings-th-pct">%</th>',s+="</tr></thead>",s+="<tbody>";const a=((n=t[0])==null?void 0:n.totalStagePts)||0;t.forEach((r,u)=>{const m=a>0?(r.totalStagePts/a*100).toFixed(2):"0.00";s+='<tr class="standings-row">',s+='<td class="standings-td standings-td-rank">'+(u+1)+"</td>",s+='<td class="standings-td standings-td-shooter">',s+='<div class="standings-shooter-name">'+r.name+"</div>",s+='<div class="standings-shooter-meta">'+r.division+" · "+ge(r.pf||"minor")+"</div>",s+="</td>",s+='<td class="standings-td standings-td-pts">'+r.totalStagePts.toFixed(2)+"</td>",s+='<td class="standings-td standings-td-pct">'+m+"%</td>",s+="</tr>"}),s+="</tbody></table></div>",s+="</div>";// ── MATCHUTVIKLING ────────────────────────────────────────────────────────
(function(){
  var stageDefs=icStageDefs(i);
  var shooters=(i.shooters||[]);
  if(!stageDefs.length||!shooters.length)return;
  var stageNums=stageDefs.map(function(sd){return String(sd.number);});
  var shotNums=stageNums.filter(function(sn){
    return shooters.some(function(sh){
      return (sh.stages||[]).some(function(sr){return String(sr.num||sr.number)===sn&&sr.time&&sr.pts>=0;});
    });
  });
  if(!shotNums.length)return;

  var colors=['#e8b84b','#4caf7d','#60a5fa','#f87171','#a78bfa','#fb923c','#34d399','#f472b6'];

  // Build per-shooter cumulative STG pts using icStageMetricsForMatch
  var shooterData=shooters.map(function(sh,si){
    var name=((sh.firstName||'')+(sh.lastName?' '+sh.lastName:'')).trim()||'Skytter';
    var color=colors[si%colors.length];
    var cumStg=0;
    var stagePoints=shotNums.map(function(sn){
      var stageDef=stageDefs.find(function(sd){return String(sd.number)===sn;});
      if(!stageDef)return{stageNum:sn,stgPts:0,cumStg:0,hasResult:false};
      var metrics=icStageMetricsForMatch(i,stageDef);
      var me=metrics.find(function(m){return String(m.id)===String(sh.id)||(sh.isMe&&m.isMe);});
      var stgPts=me?me.stagePts:0;
      var hasResult=!!me;
      cumStg+=stgPts;
      return{stageNum:sn,stgPts:stgPts,cumStg:cumStg,hasResult:hasResult};
    });
    return{id:sh.id,name:name,color:color,isMe:!!sh.isMe,stagePoints:stagePoints};
  });

  // winner cumulative STG per stage index
  var winnerCumAtStage=shotNums.map(function(sn,si){
    var max=0;
    shooterData.forEach(function(sd){var v=sd.stagePoints[si].cumStg;if(v>max)max=v;});
    return max;
  });

  // compute match% per shooter per stage
  shooterData.forEach(function(sd){
    sd.cumPct=sd.stagePoints.map(function(sp,si){
      var w=winnerCumAtStage[si]||0;
      return w>0?(sp.cumStg/w*100):0;
    });
  });

  // sort by last cumPct desc
  var sorted=shooterData.slice().sort(function(a,b){
    var ai=a.cumPct[a.cumPct.length-1]||0;
    var bi=b.cumPct[b.cumPct.length-1]||0;
    return bi-ai;
  });

  // ── DYNAMIC Y-AXIS BOUNDS ──
  var allPcts=[];
  sorted.forEach(function(sd){
    sd.cumPct.forEach(function(pct,si){if(sd.stagePoints[si].hasResult)allPcts.push(pct);});
  });
  var minPct=allPcts.length?Math.min.apply(null,allPcts):0;
  var maxPct=100;
  var pad=Math.max(3,(maxPct-minPct)*0.15);
  var yMin=Math.max(0,minPct-pad);
  var yMax=Math.min(100,maxPct+1);

  // ── SVG GRAPH ──
  var W=320,H=170,PL=38,PR=16,PT=12,PB=28;
  var gW=W-PL-PR,gH=H-PT-PB;
  var nStages=shotNums.length;
  function xPos(si){return nStages>1?PL+si*(gW/(nStages-1)):PL+gW/2;}
  function yPos(pct){return PT+gH*(1-(pct-yMin)/(yMax-yMin));}

  var svg='<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:'+W+'px;display:block;margin:0 auto;">';

  // dynamic grid lines — 4 evenly spaced between yMin and yMax
  var gridSteps=4;
  for(var gi=0;gi<=gridSteps;gi++){
    var gPct=yMin+(yMax-yMin)*gi/gridSteps;
    var gy=yPos(gPct);
    svg+='<line x1="'+PL+'" y1="'+gy.toFixed(1)+'" x2="'+(W-PR)+'" y2="'+gy.toFixed(1)+'" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>';
    svg+='<text x="'+(PL-3)+'" y="'+(gy+4)+'" font-size="8" fill="#7d8598" text-anchor="end">'+gPct.toFixed(0)+'%</text>';
  }
  // x labels
  shotNums.forEach(function(sn,si){
    svg+='<text x="'+xPos(si)+'" y="'+(H-6)+'" font-size="8" fill="#7d8598" text-anchor="middle">S'+sn+'</text>';
  });
  // lines
  sorted.forEach(function(sd){
    var pts=[];
    sd.cumPct.forEach(function(pct,si){if(sd.stagePoints[si].hasResult)pts.push([xPos(si),yPos(pct)]);});
    if(pts.length<1)return;
    var d=pts.map(function(p,i){return(i===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ');
    svg+='<path d="'+d+'" fill="none" stroke="'+sd.color+'" stroke-width="'+(sd.isMe?'2.5':'1.5')+'" stroke-linejoin="round" stroke-linecap="round" opacity="'+(sd.isMe?'1':'0.75')+'"/>';
    var lp=pts[pts.length-1];
    svg+='<circle cx="'+lp[0].toFixed(1)+'" cy="'+lp[1].toFixed(1)+'" r="3" fill="'+sd.color+'"/>';
  });
  svg+='</svg>';

  // ── LEGEND ──
  var leg='<div style="display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:10px;">';
  sorted.forEach(function(sd){
    leg+='<div style="display:flex;align-items:center;gap:4px;font-size:11px;">';
    leg+='<span style="display:inline-block;width:12px;height:3px;background:'+sd.color+';border-radius:2px;"></span>';
    leg+='<span style="color:'+(sd.isMe?'var(--accent)':'var(--text)')+';">'+sd.name+'</span>';
    leg+='</div>';
  });
  leg+='</div>';

  // ── TABLE ──
  var tbl='<div style="overflow-x:auto;margin-top:12px;">';
  tbl+='<table style="width:100%;font-size:11px;border-collapse:collapse;min-width:300px;">';
  // header
  tbl+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);">';
  tbl+='<th style="padding:4px 6px;text-align:left;">SKYTTER</th>';
  shotNums.forEach(function(sn){tbl+='<th style="padding:4px 4px;text-align:right;">S'+sn+'</th>';});
  tbl+='</tr>';
  // shooter rows
  sorted.forEach(function(sd){
    var rowStyle=sd.isMe?'background:var(--accent-fade);':'';
    tbl+='<tr style="border-bottom:1px solid rgba(255,255,255,0.04);'+rowStyle+'">';
    tbl+='<td style="padding:6px 6px;font-weight:'+(sd.isMe?'700':'400')+';">';
    tbl+='<span style="color:'+sd.color+';margin-right:5px;">●</span>'+sd.name+'</td>';
    sd.stagePoints.forEach(function(sp,si){
      var isLeader=winnerCumAtStage[si]>0&&Math.abs(sp.cumStg-winnerCumAtStage[si])<0.01&&sp.hasResult;
      var pct=sd.cumPct[si];
      tbl+='<td style="padding:6px 4px;text-align:right;">';
      if(sp.hasResult){
        tbl+='<div style="font-weight:'+(isLeader?'700':'400')+';color:'+(isLeader?'var(--accent)':'var(--text)')+';">'+pct.toFixed(1)+'%</div>';
        tbl+='<div style="font-size:10px;color:var(--muted);">'+sp.cumStg.toFixed(1)+'</div>';
      }else{
        tbl+='<div style="color:var(--muted);">—</div>';
      }
      tbl+='</td>';
    });
    tbl+='</tr>';
  });
  // delta row — gap to leader per stage
  tbl+='<tr style="border-top:1px solid var(--border);background:rgba(255,255,255,0.02);">';
  tbl+='<td style="padding:6px 6px;font-size:10px;color:var(--muted);font-weight:700;">Δ til leder</td>';
  shotNums.forEach(function(sn,si){
    var w=winnerCumAtStage[si]||0;
    tbl+='<td style="padding:6px 4px;text-align:right;">';
    sorted.forEach(function(sd,rank){
      var sp=sd.stagePoints[si];
      if(!sp.hasResult){tbl+='<div style="font-size:10px;color:var(--muted);">—</div>';return;}
      var delta=sp.cumStg-w;
      var isLeader=Math.abs(delta)<0.01;
      var col=isLeader?'var(--accent)':delta>-5?'var(--text)':'var(--red)';
      tbl+='<div style="font-size:10px;font-weight:'+(isLeader?'700':'400')+';color:'+col+';">';
      tbl+=isLeader?'●':(delta>0?'+':'')+delta.toFixed(1);
      tbl+='</div>';
    });
    tbl+='</td>';
  });
  tbl+='</tr>';
  tbl+='</table></div>';

  // ── WRAPPER ──
  s+='<div style="margin-top:16px;">';
  s+='<button onclick="var x=document.getElementById(\'mu-body\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.mu-arrow\').textContent=x&&x.style.display===\'block\'?\'▼\':\'▶\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.1);border-radius:12px;color:var(--text);font-size:14px;font-weight:700;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">';
  s+='<span>Matchutvikling</span><span class="mu-arrow">▶</span></button>';
  s+='<div id="mu-body" style="display:none;margin-top:4px;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:12px;">';
  s+=svg+leg+tbl;
  s+='</div></div>';
})();
// ── END MATCHUTVIKLING ────────────────────────────────────────────────────
const myShooter=icCurrentShooter(i),myResults=myShooter&&myShooter.stages?myShooter.stages.slice().sort((ra,rb)=>(ra.num||0)-(rb.num||0)):[];if(myResults.length>0){s+='<div style="margin-top:16px;">';s+='<button onclick="const x=document.getElementById(\'my-results-table\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.mr-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;"><span>Mine resultater</span><span class=\'mr-arrow\'>&#9654;</span></button>';s+='<div id="my-results-table" style="display:none;margin-top:10px;">';s+='<div><table style="width:100%;font-size:11px;border-collapse:collapse;">';s+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);font-size:11px;">';s+='<th style="padding:4px 3px;text-align:left;">STG</th>';s+='<th style="padding:4px 3px;text-align:right;">TID</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">A</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">C</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">D</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">M</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">NS</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">P</th>';s+='<th style="padding:4px 3px;text-align:right;">HF</th>';s+="</tr>";myResults.forEach(rr=>{const hf=rr.hf&&rr.hf>0?rr.hf:(rr.time>0?(rr.pts||0)/rr.time:0);s+='<tr style="border-bottom:1px solid var(--border);font-size:11px;">';s+='<td style="padding:4px 3px;">'+(rr.num||rr.number)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.time||0).toFixed(2)+"s</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+(rr.a||0)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.c||0)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.d||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.miss||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.ns||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.proc||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+hf.toFixed(2)+"</td>";s+="</tr>";});
// Summeringsrad
const sumTime=myResults.reduce((acc,rr)=>acc+(rr.time||0),0);
const sumA=myResults.reduce((acc,rr)=>acc+(rr.a||0),0);
const sumC=myResults.reduce((acc,rr)=>acc+(rr.c||0),0);
const sumD=myResults.reduce((acc,rr)=>acc+(rr.d||0),0);
const sumMiss=myResults.reduce((acc,rr)=>acc+(rr.miss||0),0);
const sumNS=myResults.reduce((acc,rr)=>acc+(rr.ns||0),0);
const sumProc=myResults.reduce((acc,rr)=>acc+(rr.proc||0),0);
const sumHF=myResults.reduce((acc,rr)=>acc+(rr.hf&&rr.hf>0?rr.hf:(rr.time>0?(rr.pts||0)/rr.time:0)),0);
const avgHFsum=myResults.length>0?(sumHF/myResults.length):0;
const totalHits=sumA+sumC+sumD;
const aPct=totalHits>0?(sumA/totalHits*100).toFixed(1):"0.0";
const cPct=totalHits>0?(sumC/totalHits*100).toFixed(1):"0.0";
const dPct=totalHits>0?(sumD/totalHits*100).toFixed(1):"0.0";
s+='<tr style="border-top:2px solid var(--accent);font-weight:700;background:rgba(232,184,75,0.06);font-size:11px;">';
s+='<td style="padding:4px 3px;">SUM</td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumTime.toFixed(2)+'s</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+sumA+'<br><span style="font-size:10px;color:var(--muted);">'+aPct+'%</span></td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumC+'<br><span style="font-size:10px;color:var(--muted);">'+cPct+'%</span></td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumD+'<br><span style="font-size:10px;color:var(--muted);">'+dPct+'%</span></td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumMiss+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumNS+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumProc+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+avgHFsum.toFixed(2)+'</td>';
s+="</tr>";
s+="</table></div>";s+="</div>";s+="</div>"}e.innerHTML=s}function gt(){const e=le();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results"].forEach(u=>{const m=o(u);m&&(m.textContent=e)});const t=o("prof-name");t&&(t.textContent=(g.firstName||"")+" "+(g.lastName||""));const s=o("prof-div");s&&(s.textContent=(g.division||"—")+" · "+(g.club||"—"));const a=o("prof-badge-pf");a&&(a.textContent=g.powerFactor?ge(g.powerFactor):"—");const n=o("prof-badge-region");n&&(n.textContent=g.region||"—");const r={"info-firstname":g.firstName||"—","info-lastname":g.lastName||"—","info-division":g.division||"—","info-category":g.category||"—","info-pf":g.powerFactor?ge(g.powerFactor):"—","info-region":g.region||"—","info-club":g.club||"—"};Object.keys(r).forEach(u=>{const m=o(u);m&&(m.textContent=r[u])}),vt()}function vt(){const e=[];$.forEach(p=>{icCurrentResults(p).forEach(h=>e.push(h))});let i=0,t=0;let shortHF=0,shortN=0,medHF=0,medN=0,longHF=0,longN=0;e.forEach(p=>{i+=p.a||0;t+=(p.a||0)+(p.c||0)+(p.d||0);const shots=(p.paperTargets||0)*2+(p.poppers||0)+(p.plates||0);if(shots>=1&&shots<=12){shortHF+=p.hf||0;shortN++;}else if(shots>=13&&shots<=24){medHF+=p.hf||0;medN++;}else if(shots>=25&&shots<=32){longHF+=p.hf||0;longN++;}});const n=t?Math.round(i/t*100)+"%":"—";const r=o("stat-matches");r&&(r.textContent=$.length);const u=o("stat-stages");u&&(u.textContent=e.length);const sh=o("stat-hf-short");sh&&(sh.textContent=shortN>0?(shortHF/shortN).toFixed(2):"—");const sm=o("stat-hf-medium");sm&&(sm.textContent=medN>0?(medHF/medN).toFixed(2):"—");const sl=o("stat-hf-long");sl&&(sl.textContent=longN>0?(longHF/longN).toFixed(2):"—");const b=o("stat-a-rate");b&&(b.textContent=n);const f=o("prog-a-rate");f&&(f.textContent=n);renderProfileMatchTips()}function icMatchTips(match){const myShooter=icCurrentShooter(match);if(!myShooter||!myShooter.stages||!myShooter.stages.length)return "";const stages=myShooter.stages.slice().sort(function(a,b){return(a.num||0)-(b.num||0)});const pf=myShooter.pf||g.powerFactor||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;let html="";let totalA=0,totalHits=0,totalMiss=0,totalProc=0,totalHF=0,stageCount=0;const stageAPs=[],stageHFs=[];stages.forEach(function(s){const t=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);totalA+=s.a||0;totalHits+=t;totalMiss+=s.miss||0;totalProc+=s.proc||0;totalHF+=s.hf||0;stageCount++;if(t>0)stageAPs.push({num:s.num||s.number,ap:Math.round((s.a||0)/t*100),hf:s.hf||0});stageHFs.push({num:s.num||s.number,hf:s.hf||0});});if(!stageCount)return "";const avgHF=totalHF/stageCount;const overallAP=totalHits>0?Math.round(totalA/totalHits*100):0;html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">GENERELL ANALYSE</div>';html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;margin-bottom:4px;">Snitt HF: <strong>'+avgHF.toFixed(2)+"</strong> &middot; A%: <strong>"+overallAP+"%</strong> &middot; Miss totalt: <strong>"+totalMiss+"</strong>"+(totalProc>0?" &middot; Proc: <strong>"+totalProc+"</strong>":"")+"</div>";if(overallAP>=90)html+='<div style="font-size:12px;padding:5px 0;color:var(--green);">Meget bra treffbilde ('+overallAP+'%) &mdash; fokuser p&aring; &aring; &oslash;ke tempo</div>';else if(overallAP>=75)html+='<div style="font-size:12px;padding:5px 0;">Bra A% ('+overallAP+'%) &mdash; tempo kan &oslash;kes forsiktig</div>';else html+='<div style="font-size:12px;padding:5px 0;color:var(--red);">A% p&aring; '+overallAP+'% er lav &mdash; prioriter treffkvalitet f&oslash;r tempo</div>';if(totalMiss>0)html+='<div style="font-size:12px;padding:5px 0;">Miss koster ca. '+(totalMiss*10/stageCount).toFixed(1)+' poeng per stage</div>';html+="</div>";if(stageAPs.length>1){const aps=stageAPs.map(function(x){return x.ap;});const maxAP=Math.max.apply(null,aps),minAP=Math.min.apply(null,aps),spread=maxAP-minAP;html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">JEVNHET I TREFFBILDE</div>';stageAPs.forEach(function(x){const col=x.ap>=85?'var(--green)':x.ap>=70?'var(--accent)':'var(--red)';html+='<div style="font-size:12px;display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg);border-radius:4px;margin-bottom:3px;">';html+='<span>Stage '+x.num+'</span>';html+='<span style="color:'+col+';font-weight:600;">'+x.ap+'%A</span>';html+='</div>';});if(spread<=15)html+='<div style="font-size:12px;padding:5px 0;color:var(--green);">Konsistent treffbilde &mdash; sprik p&aring; kun '+spread+' prosentpoeng</div>';else if(spread<=30)html+='<div style="font-size:12px;padding:5px 0;">Moderat variasjon ('+spread+' pp) &mdash; noen stages presser deg mer</div>';else html+='<div style="font-size:12px;padding:5px 0;color:var(--red);">Stort sprik ('+spread+' pp) &mdash; hold teknikken p&aring; alle stage-typer</div>';html+="</div>";}if(stageHFs.length>1){const weakest=stageHFs.reduce(function(a,b){return b.hf<a.hf?b:a},stageHFs[0]);const strongest=stageHFs.reduce(function(a,b){return b.hf>a.hf?b:a},stageHFs[0]);html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">SVAKESTE STAGE</div>';html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;">Stage '+weakest.num+" hadde lavest HF: <strong>"+weakest.hf.toFixed(2)+"</strong> (beste: Stage "+strongest.num+": <strong>"+strongest.hf.toFixed(2)+"</strong> &mdash; differanse: "+(strongest.hf-weakest.hf).toFixed(2)+" HF)</div>";html+="</div>";}const tips=[];if(overallAP<75)tips.push("Fokuser p&aring; &aring; ta mer tid p&aring; hvert m&aring;l &mdash; n&oslash;yaktighet f&oslash;r tempo");else if(overallAP>=90&&avgHF<3.5)tips.push("Treffbildet er bra &mdash; pr&oslash;v &aring; &oslash;ke tempoet gradvis");if(totalMiss>stageCount*0.5)tips.push("H&oslash;y miss-rate &mdash; &oslash;v p&aring; &aring; kontrollere skuddet til siktet sitter");if(totalProc>0)tips.push("Procedurals koster poeng &mdash; g&aring; gjennom stage-reglene f&oslash;r du skyter");if(stageAPs.length>1){const aps=stageAPs.map(function(x){return x.ap;});if(Math.max.apply(null,aps)-Math.min.apply(null,aps)>30)tips.push("Stor variasjon mellom stages &mdash; &oslash;v p&aring; &aring; holde teknikken p&aring; alle stage-typer");}if(tips.length){html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">TRENINGSTIPS</div>';tips.forEach(function(t){html+='<div style="font-size:12px;padding:6px 8px;background:rgba(232,184,75,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">&gt; '+t+"</div>";});html+="</div>";}const refleks=[];if(overallAP<75)refleks.push("A% er lav &mdash; hva tror du er den vanligste &aring;rsaken til C/D-treff?");if(totalMiss>0)refleks.push("Du hadde "+totalMiss+" miss &mdash; var det tempo, konsentrasjon eller noe annet?");if(stageAPs.length>1){const aps=stageAPs.map(function(x){return x.ap;});if(Math.max.apply(null,aps)-Math.min.apply(null,aps)>20)refleks.push("Stor variasjon mellom stages &mdash; hva p&aring;virket treffbildet p&aring; de svake stagene?");}refleks.push("Hva var det du gjorde best i denne matchen?");refleks.push("Hva ville du prioritert &aring; forbedre til neste gang?");html+='<div style="margin-bottom:8px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">REFLEKSJON</div>';refleks.forEach(function(q){html+='<div style="font-size:12px;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">? '+q+"</div>";});
const mentalId="mb"+Math.random().toString(36).substr(2,5);
const mentalTips=[];
if(totalMiss>stageCount*0.5)mentalTips.push({t:"Indre dialog ved miss",b:"Identifiser sabotøren — stemmen som sier du er dårlig. Bruk SOAL: Stopp tanken, Observer uten å reagere, Aksepter at den er der, La den gå. Hjernen husker det siste bildet — visualiser straks hvordan du ville skutt stageen riktig og gå videre med et positivt bilde."});
if(stageAPs.length>1){const _aps=stageAPs.map(function(x){return x.ap;});if(Math.max.apply(null,_aps)-Math.min.apply(null,_aps)>20)mentalTips.push({t:"Visualisering mellom stages",b:"Stor variasjon skyldes ofte ujevnt spenningsnivå. Bruk pustepause: pust inn 4 sek, hold 4, pust ut 6. Identifiser dine knagg-signaler — hva kjenner du i kroppen når du er i flytsonen? Bruk disse bevisst før neste stage."});}
if(overallAP>=90&&avgHF<3.5)mentalTips.push({t:"Spenningsregulering opp",b:"Kroppen er klar for mer tempo. Bruk et energigivende triggerord som Eksplosiv eller Nå, og visualiser stagene med høy intensitet og flyt. Indre motivasjon driver raskere og mer stabilt enn ytre press."});
if(totalProc>0)mentalTips.push({t:"Konsentrasjon og stage-plan",b:"Procedurals skjer når oppmerksomheten er rettet mot feil ting. Øv på å filtrere bort støy som RO-avgjørelser og baneforhold. Før neste stage: lukk øynene, visualiser stage-planen steg for steg og sjekk at alle regler sitter i hodet."});
const _gt=[{t:"Triggerord",b:"Velg 1-2 ord som skaper riktig tilstand umiddelbart. Unngå ikke-ord — underbevisstheten filtrerer dem ut og du fokuserer på det du vil unngå. Gode eksempler: Pust, Flyt, Jeg er klar, Rå. Test dem i trening før du bruker dem i match."},{t:"Selvtillitsboost",b:"Selvtillit bygges av prestasjoner, ikke av resultatmål. Fokuser på mestringsmål: trekk, bevegelse, stage-plan. Etter matchen — skriv ned tre ting du gjorde bra før du ser på forbedringsområder. Dette styrker selvtilliten og gjør evalueringen mer konstruktiv."},{t:"Pustepause",b:"Pust inn 4 sekunder, hold 4, pust ut 6. Gjør dette tre ganger. Stress gjør pusten grunn og rask, noe som svekker koordinasjon og konsentrasjon. Rolig pust signaliserer til kroppen at du er trygg og klar."},{t:"Målsetting",b:"Hva driver deg egentlig? Glede av skyting, fellesskap, personlig utvikling? Nær den indre motivasjonen aktivt — ytre press som resultater og rangering gjør deg sårbar når ting går mot deg. Ha det gøy, nyt fellesskapet og sørg for stadig fremgang."},{t:"Positiv indre dialog",b:"Sett mestringsmål fremfor bare resultatmål. Lag din egen skala 1-10 for f.eks. konsentrasjon, trekk eller stage-plan-etterlevelse. Skriv ned både målet og HVORDAN du skal jobbe for å nå det. Hvert delmål bringer deg ett steg nærmere det langsiktige målet."}];
mentalTips.push(_gt[stageCount%_gt.length]);
html+='<div style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px;">';
html+='<div onclick="toggleTips(\x27'+mentalId+'\x27)" style="cursor:pointer;font-size:11px;color:var(--muted);font-weight:700;margin-bottom:4px;user-select:none;">&#9658; MENTAL TRENING</div>';
html+='<div id="'+mentalId+'" style="display:none;">';
mentalTips.forEach(function(tip){html+='<div style="font-size:12px;padding:8px 10px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:6px;border-left:3px solid #4caf7d;"><div style="font-weight:700;color:#4caf7d;margin-bottom:3px;">'+tip.t+'</div><div style="color:var(--text);">'+tip.b+'</div></div>';});
html+='</div></div>';
html+="</div>";return html;}function icSeasonAnalysis(matches){
  if(!matches||matches.length<2)return "";
  // Aggregate data across all matches
  var matchStats=matches.map(function(m){
    var sh=icCurrentShooter(m);
    if(!sh||!sh.stages||!sh.stages.length)return null;
    var stages=sh.stages;
    var tHF=0,tA=0,tHits=0,tMiss=0,tProc=0,tC=0,tD=0,sc=0;
    stages.forEach(function(s){
      var hits=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);
      tHF+=s.hf||0; tA+=s.a||0; tHits+=hits;
      tMiss+=s.miss||0; tProc+=s.proc||0;
      tC+=s.c||0; tD+=s.d||0; sc++;
    });
    return{
      name:m.name||"Match",date:m.date,
      avgHF:sc>0?tHF/sc:0,
      ap:tHits>0?Math.round(tA/tHits*100):0,
      cp:tHits>0?Math.round(tC/tHits*100):0,
      dp:tHits>0?Math.round(tD/tHits*100):0,
      missRate:sc>0?tMiss/sc:0,
      procRate:sc>0?tProc/sc:0,
      stageCount:sc
    };
  }).filter(Boolean);

  if(matchStats.length<2)return "";

  // Sort by date
  matchStats.sort(function(a,b){return new Date(a.date)-new Date(b.date);});

  var first=matchStats[0],last=matchStats[matchStats.length-1];
  var hfTrend=last.avgHF-first.avgHF;
  var apTrend=last.ap-first.ap;
  var avgAP=Math.round(matchStats.reduce(function(s,m){return s+m.ap;},0)/matchStats.length);
  var avgMiss=matchStats.reduce(function(s,m){return s+m.missRate;},0)/matchStats.length;
  var avgHFall=matchStats.reduce(function(s,m){return s+m.avgHF;},0)/matchStats.length;
  var bestMatch=matchStats.reduce(function(a,b){return b.avgHF>a.avgHF?b:a},matchStats[0]);
  var worstMatch=matchStats.reduce(function(a,b){return b.avgHF<a.avgHF?b:a},matchStats[0]);

  var html='<div style="margin-bottom:16px;">';
  html+='<button onclick="var x=document.getElementById(\'sa-body\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.sa-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px 14px;background:var(--card);border:1px solid rgba(232,184,75,0.2);border-radius:12px;color:var(--text);font-size:13px;font-weight:700;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">';
  html+='<span style="color:var(--accent);">SESONGANALYSE — '+matchStats.length+' MATCHER</span><span class="sa-arrow">▶</span></button>';
  html+='<div id="sa-body" style="display:none;margin-top:4px;padding:14px;background:var(--card);border:1px solid rgba(232,184,75,0.1);border-radius:12px;">';

  // HF trend
  html+='<div style="margin-bottom:12px;">';
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">HF-UTVIKLING</div>';
  html+='<div style="display:grid;grid-template-columns:repeat('+Math.min(matchStats.length,4)+',1fr);gap:6px;">';
  matchStats.slice(-4).forEach(function(m){
    var col=m.avgHF>=avgHFall?'var(--green)':'var(--red)';
    html+='<div style="background:var(--bg);padding:8px;border-radius:8px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;">';
    html+='<div style="font-size:10px;color:var(--muted);height:2.4em;overflow:hidden;">'+(m.name||"").substring(0,10)+'</div>';
    html+='<div style="font-weight:700;font-size:18px;color:'+col+';">'+m.avgHF.toFixed(2)+'</div>';
    html+='<div style="font-size:10px;color:var(--muted);">'+m.ap+'%A</div>';
    html+='</div>';
  });
  html+='</div>';
  if(Math.abs(hfTrend)>0.05){
    var trendCol=hfTrend>0?'var(--green)':'var(--red)';
    var trendTxt=hfTrend>0?'HF har økt med '+hfTrend.toFixed(2)+' siden første match — positiv utvikling.':'HF har falt med '+Math.abs(hfTrend).toFixed(2)+' siden første match — sjekk hva som endret seg.';
    html+='<div style="margin-top:8px;font-size:12px;color:'+trendCol+';">'+trendTxt+'</div>';
  }
  html+='</div>';

  // Styrker
  var styrker=[];
  if(avgAP>=88)styrker.push("Konsistent høy A% ("+avgAP+"%) på tvers av matcher");
  if(avgMiss<0.5)styrker.push("Lav miss-rate — god kontroll på skuddene");
  if(hfTrend>0.1)styrker.push("Tydelig HF-vekst over sesongen");
  if(bestMatch.ap>=90)styrker.push("Beste match: "+bestMatch.name+" ("+bestMatch.avgHF.toFixed(2)+" HF, "+bestMatch.ap+"%A)");

  if(styrker.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">STYRKER</div>';
    styrker.forEach(function(s){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--green);">✓ '+s+'</div>';
    });
    html+='</div>';
  }

  // Problemområder
  var problemer=[];
  if(avgAP<75)problemer.push("A% under 75% i snitt — treffkvalitet er primærfokus");
  else if(avgAP<85)problemer.push("A% på "+avgAP+"% — rom for forbedring i treffbildet");
  if(avgMiss>1)problemer.push("Gjentagende miss ("+avgMiss.toFixed(1)+" per stage) — øv på kontrollert avtrykk");
  if(hfTrend<-0.1)problemer.push("HF-fall over sesongen — vurder om tempoøkning har gått på bekostning av treff");
  var apSpread=Math.max.apply(null,matchStats.map(function(m){return m.ap;}))-Math.min.apply(null,matchStats.map(function(m){return m.ap;}));
  if(apSpread>20)problemer.push("Stor variasjon i A% mellom matcher ("+apSpread+" pp) — konsistens er nøkkelen");

  if(problemer.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">PROBLEMOMRÅDER</div>';
    problemer.forEach(function(p){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(239,68,68,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--red);">⚠ '+p+'</div>';
    });
    html+='</div>';
  }

  // Treningstips
  var tips=[];
  if(avgAP<85)tips.push("Slow-fire drills: 10 skudd på 10 m, fokus på 100%A. Bygg automatikk i siktebilde før du øker tempo.");
  if(avgMiss>0.5)tips.push("Draw-og-skyt på nær blink: trekk, én A, reholster. 20 reps. Eliminér hastverk på første skudd.");
  if(apSpread>15)tips.push("Simuler match-press i trening: tidtak, 3-stage-sekvenser. Bygg mentalt immunforsvar mot variasjon.");
  if(hfTrend<0)tips.push("Gå tilbake til grunnøvelser: trekk, overganger, reloads. Tempo bygges nedenfra, ikke ovenfra.");
  if(tips.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">TRENINGSTIPS</div>';
    tips.forEach(function(t){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(232,184,75,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">&gt; '+t+'</div>';
    });
    html+='</div>';
  }

  // Mental trening
  var mental=[];
  if(apSpread>15)mental.push({t:"Spenningsregulering",b:"Stor variasjon mellom matcher skyldes ofte ujevnt aktiveringsnivå. Finn din optimale sone: hva kjenner du i kroppen når du er i flytsonen? Bruk dette som referansepunkt og juster bevisst før hver match."});
  if(avgMiss>1)mental.push({t:"Indre dialog ved miss",b:"Bruk SOAL: Stopp tanken, Observer uten å reagere, Aksepter at den er der, La den gå. Hjernen husker det siste bildet — visualiser straks hvordan du ville skutt riktig og gå videre."});
  mental.push({t:"Sesongmål",b:"Sett et konkret teknisk mål for neste match — ikke et plasseringsmål. F.eks: 'Hold A% over 88% på alle stages' eller 'Ingen miss'. Mestringsmål gir deg kontroll uavhengig av motstanderne."});

  var mentalId="sea"+Math.random().toString(36).substr(2,5);
  html+='<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:4px;">';
  html+='<div onclick="toggleTips(\''+mentalId+'\')" style="cursor:pointer;font-size:11px;color:var(--muted);font-weight:700;margin-bottom:4px;user-select:none;">&#9658; MENTAL TRENING FOR SESONGEN</div>';
  html+='<div id="'+mentalId+'" style="display:none;">';
  mental.forEach(function(tip){
    html+='<div style="font-size:12px;padding:8px 10px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:6px;border-left:3px solid #4caf7d;">';
    html+='<div style="font-weight:700;color:#4caf7d;margin-bottom:3px;">'+tip.t+'</div>';
    html+='<div style="color:var(--text);">'+tip.b+'</div></div>';
  });
  html+='</div></div>';
  html+='</div></div></div>';
  return html;
}
function icTrainingSeasonAnalysis(matches){
  var tMatches=matches.filter(function(m){return(m.type||"")==="Trening";});
  if(!tMatches.length)return "";
  var matchStats=tMatches.map(function(m){
    var sh=icCurrentShooter(m);
    if(!sh||!sh.stages||!sh.stages.length)return null;
    var stages=sh.stages;
    var tHF=0,tA=0,tHits=0,tMiss=0,sc=0;
    stages.forEach(function(s){var hits=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);tHF+=s.hf||0;tA+=s.a||0;tHits+=hits;tMiss+=s.miss||0;sc++;});
    return{name:m.name||"Trening",date:m.date,avgHF:sc>0?tHF/sc:0,ap:tHits>0?Math.round(tA/tHits*100):0,missRate:sc>0?tMiss/sc:0,stageCount:sc};
  }).filter(Boolean);
  if(!matchStats.length)return "";
  matchStats.sort(function(a,b){return new Date(a.date)-new Date(b.date);});
  var avgAP=Math.round(matchStats.reduce(function(s,m){return s+m.ap;},0)/matchStats.length);
  var avgHFall=matchStats.reduce(function(s,m){return s+m.avgHF;},0)/matchStats.length;
  var hfTrend=matchStats.length>1?matchStats[matchStats.length-1].avgHF-matchStats[0].avgHF:0;
  var html='<div style="margin-bottom:16px;">';
  html+='<button onclick="var x=document.getElementById(\'ta-body\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.ta-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px 14px;background:var(--card);border:1px solid rgba(76,175,125,0.2);border-radius:12px;color:var(--text);font-size:13px;font-weight:700;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">';
  html+='<span style="color:#4caf7d;">TRENINGSANALYSE — '+matchStats.length+' ØKTER</span><span class="ta-arrow">▶</span></button>';
  html+='<div id="ta-body" style="display:none;margin-top:4px;padding:14px;background:var(--card);border:1px solid rgba(76,175,125,0.1);border-radius:12px;">';
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:8px;">HF-UTVIKLING</div>';
  html+='<div style="display:grid;grid-template-columns:repeat('+Math.min(matchStats.length,4)+',1fr);gap:6px;margin-bottom:12px;">';
  matchStats.slice(-4).forEach(function(m){var col=m.avgHF>=avgHFall?'var(--green)':'var(--red)';html+='<div style="background:var(--bg);padding:8px;border-radius:8px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;"><div style="font-size:10px;color:var(--muted);height:2.4em;overflow:hidden;">'+(m.name||'').substring(0,12)+'</div><div style="font-weight:700;font-size:18px;color:'+col+';">'+m.avgHF.toFixed(2)+'</div><div style="font-size:10px;color:var(--muted);">'+m.ap+'%A</div></div>';});
  html+='</div>';
  if(hfTrend>0.05)html+='<div style="font-size:12px;color:var(--green);margin-bottom:10px;">HF økt med '+hfTrend.toFixed(2)+' — positiv utvikling.</div>';
  else if(hfTrend<-0.05)html+='<div style="font-size:12px;color:var(--red);margin-bottom:10px;">HF falt med '+Math.abs(hfTrend).toFixed(2)+' — vurder fokusområdene.</div>';
  var tips=[];
  if(avgAP<85)tips.push("Slow-fire drills: 20 skudd per økt, 100% fokus på A-sone.");
  else tips.push("Bra A% i trening ("+avgAP+"%) — neste steg er å beholde dette under match-press.");
  tips.push("Bruk run-funksjonen aktivt: logg alle runs og analyser hva som skiller beste run fra resten.");
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">TRENINGSTIPS</div>';
  tips.forEach(function(t){html+='<div style="font-size:12px;padding:6px 8px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid #4caf7d;">&gt; '+t+'</div>';});
  html+='</div></div>';
  return html;
}
function renderProfileMatchTips(){const container=o("profile-match-tips");if(!container||!$.length){if(container)container.innerHTML="";return;}const myMatches=$.filter(function(m){const s=icCurrentShooter(m);return s&&s.stages&&s.stages.length>0;});if(!myMatches.length){container.innerHTML="";return;}let html='<div class="card" style="margin-bottom:16px;"><div class="card-header"><div class="card-title">Matcher &amp; tips</div></div>'+icSeasonAnalysis(myMatches)+icTrainingSeasonAnalysis(myMatches);if(myMatches.length){html+='<div style="height:1px;background:var(--border);margin:8px 0;"></div>';}myMatches.forEach(function(match,mi){const myShooter=icCurrentShooter(match);const sc=myShooter.stages.length;let tHF=0,tA=0,tHits=0;myShooter.stages.forEach(function(s){tHF+=s.hf||0;tA+=s.a||0;tHits+=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);});const avgHF=(tHF/sc).toFixed(2);const apStr=tHits>0?Math.round(tA/tHits*100)+"%":"--";const mid="mtips-"+mi;html+='<div style="margin-bottom:10px;padding:12px;background:var(--bg);border-radius:8px;">';html+='<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;">';html+='<div><div style="font-weight:600;font-size:14px;">'+( match.name||"Match")+"</div>";html+='<div style="font-size:12px;color:var(--muted);">'+We(match.date)+' &middot; <span style="color:#e8b84b;font-weight:600;">'+( match.type||"")+'</span> &middot; '+sc+" stages &middot; HF "+avgHF+" &middot; "+apStr+"</div></div>";html+='<button onclick="toggleTips(&quot;mtips-'+mi+'&quot;)" style="flex-shrink:0;padding:6px 10px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:var(--muted);font-size:11px;cursor:pointer;">Vis tips</button>';html+="</div>";html+='<div id="'+mid+'" style="display:none;margin-top:10px;">'+icMatchTips(match)+"</div>";html+="</div>";});html+="</div>";container.innerHTML=html;}function Ns(){o("edit-firstname").value=g.firstName||"",o("edit-lastname").value=g.lastName||"",o("edit-club").value=g.club||"",o("edit-draw").value=g.draw||"",o("edit-reload").value=g.reloadTime||"";let e="";Yi.forEach(s=>{e+='<option value="'+s+'"'+(s===g.division?" selected":"")+">"+s+"</option>"}),o("edit-division").innerHTML=e;let i="";Qi.forEach(s=>{i+='<option value="'+s+'"'+(s===g.category?" selected":"")+">"+s+"</option>"}),o("edit-category").innerHTML=i;let t="";Xi.forEach(s=>{t+='<option value="'+s+'"'+(s===g.region?" selected":"")+">"+s+"</option>"}),o("edit-region").innerHTML=t,mt(),ie("modal-edit-profile")}function mt(){const e=F("edit-division"),i=Zi[e]||["minor","major"];let t="";i.forEach(s=>{const a=g.powerFactor===s;t+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"170 PF":"<170 PF")+"</div>",t+="</label>"}),o("pf-options").innerHTML=t,i.indexOf(g.powerFactor)<0&&(g.powerFactor=i[0])}function $s(e,i){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),e.classList.add("active"),g.powerFactor=i}async function Fs(){g.firstName=F("edit-firstname").trim()||"",g.lastName=F("edit-lastname").trim()||"",g.division=F("edit-division")||"",g.category=F("edit-category")||"",g.region=F("edit-region")||"",g.club=F("edit-club").trim()||"",g.draw=he("edit-draw")||null,g.reloadTime=he("edit-reload")||null;const e=await Ot(g),i=o("save-profile-btn");e.success?(i.textContent=" Lagret!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)):(i.textContent=" Feil!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)),gt(),De(),te(),G("modal-edit-profile")}function As(e,i,t,s){if(!e||!i||!s)return null;const a=icCurrentShooter(e);if(!a)return null;const n=icMatchTotals(e),r=n.find(v=>String(v.id)===String(a.id));if(!r)return null;let u=null;if(e.rivalId&&e.rivalId!=="me")u=(e.shooters||[]).find(v=>v&&String(v.id)===String(e.rivalId));if(!u){const v=n.filter(S=>String(S.id)!==String(a.id)).sort((S,x)=>x.totalStagePts-S.totalStagePts);v.length&&(u=(e.shooters||[]).find(S=>String(S.id)===String(v[0].id))||null)}if(!u)return null;const m=n.find(v=>String(v.id)===String(u.id));if(!m)return null;const b=((u.firstName||"")+" "+(u.lastName||"")).trim()||"Rival",f=(r.totalStagePts||0)-(m.totalStagePts||0),p=f>=0,h=Math.abs(f),E=icProjectNext(i,s);if(!E)return{statusText:(p?"LEDER ":"BAK ")+h.toFixed(1)+" stg pts",advice:p?`Du leder over ${b}. Hold prosessen stabil og unngå unødvendige tap.`:`Du ligger bak ${b}. Neste stage blir viktig.`,rivalName:b,gap:f,targetHF:null,estHF:null,deltaHF:null};const k=((u.stages||[]).slice().sort((v,S)=>(v.num||0)-(S.num||0))),P=icFormFromResults(k,null,u),C=P?icProjectNext(P,s):null,L=Math.max(E.estHF||0,(C&&C.estHF)||0,.01),M=L>0?(E.estHF/L*E.maxPts):0,D=L>0?(((C&&C.estHF)||0)/L*E.maxPts):0;let B=null,_=null,K=null,j="",w="";if(p){B=Math.max(0,D-h);_=L>0?(B/E.maxPts*L):null;K=_!=null?_-E.estHF:null;j=`LEDER ${h.toFixed(1)} stg pts`;w=B<=0?`Du leder over ${b}. Holder du forventet nivå (${E.estHF.toFixed(2)} HF), bør ledelsen holde.`:K!=null&&K<=0?`Du leder over ${b}. Et nivå rundt ${_.toFixed(2)} HF er nok til å beholde ledelsen.`:K!=null&&K<=.35?`Du leder over ${b}, men ikke slipp ned. Du trenger ca. ${_.toFixed(2)} HF for å holde ledelsen.`:`Du leder over ${b}, men denne stagen kan snu bildet. Hold prosessen stabil og unngå miss/procedurals.`}else{B=D+h+.01;_=L>0?(B/E.maxPts*L):null;K=_!=null?_-E.estHF:null;j=`BAK ${h.toFixed(1)} stg pts`;if(_==null)w=`Du ligger bak ${b}. Hold fokus på en ren og effektiv stage.`;else if(K<=.2)w=`Du er tett bak ${b}. For å ta inn forspranget trenger du omtrent ${_.toFixed(2)} HF, altså ca ${K.toFixed(2)} HF over forventet nivå. Dette kan du dekke med litt bedre flyt og null unødvendige feil.`;else if(K<=.75){const y=E.expTime&&_>0?Math.max(0,E.expTime-E.expPts/_):0,H=E.expTime?Math.max(0,_*E.expTime-E.expPts):0;w=`Du er bak ${b}. For å ta inn forspranget må du fra forventet ${E.estHF.toFixed(2)} HF opp mot ca ${_.toFixed(2)} HF. Det er en delta på ${K.toFixed(2)} HF. Tenk ca ${y.toFixed(2)} sek raskere totalt eller rundt ${H.toFixed(1)} flere råpoeng, helst som en kombinasjon av begge.`}else{const y=E.expTime&&_>0?Math.max(0,E.expTime-E.expPts/_):0,H=E.expTime?Math.max(0,_*E.expTime-E.expPts):0;w=`Du er et stykke bak ${b}. Target er omtrent ${_.toFixed(2)} HF mot forventet ${E.estHF.toFixed(2)} HF, altså en delta på ${K.toFixed(2)} HF. Det er krevende. Du må hente dette med både bedre tempo og renere treffbilde — ca ${y.toFixed(2)} sek raskere totalt og/eller rundt ${H.toFixed(1)} flere råpoeng.`}}return{statusText:j,advice:w,rivalName:b,gap:f,targetHF:_,estHF:E.estHF,deltaHF:K,rivalEstHF:(C&&C.estHF)||null,yourEstStagePts:M,rivalEstStagePts:D,requiredStagePts:B,maxStagePts:E.maxPts}}function De(){const e=ct(),i=o("prog-a-rate");i&&(i.textContent=e&&e.aPercent!==void 0?Math.round(e.aPercent*100)+"%":"—");const t=o("prog-data-status");t&&(t.style.display=!e||e.completedStages===0?"block":"none"),Rs()}function Rs(){const e=$.find(a=>a.id!=null&&a.id.toString()===String(R)),i=o("prog-stages-container");if(!i||!e){i&&(i.innerHTML="");return}const t=icStageDefs(e);if(!t.length){i.innerHTML="";return}const s=icCurrentShooter(e),a=icCurrentResults(e),n=icCurrentShooterId(),rActive=getActiveReferenceShooters(e),commonNums=icCommonStageNumbers(e),commonResults=a.filter(u=>commonNums.includes(String(u.num||u.number))),nextStage=t.find(u=>!a.some(m=>String(m.num||m.number)===String(u.number))),overallForm=icFormFromResults(commonResults.length?commonResults:a,null,s),overallProjection=nextStage&&overallForm?icProjectNext(overallForm,nextStage):null;let r="";t.forEach(u=>{const m=icStageMetricsForMatch(e,u).map(E=>({...E,isMe:String(E.id)===String(n)||E.isMe})),b=m.length>0;let h=null;r+='<div class="card" style="margin-top:15px;border-left:4px solid '+(b?"var(--green)":"var(--muted)")+';">',r+='<div class="card-header">',r+='<div class="card-title">Stage '+u.number+". "+(u.name||("Stage "+u.number))+' <span style="color:#e8b84b;font-weight:600;font-size:13px;">'+(icStageMaxPts(u)<=60?"Short":icStageMaxPts(u)<=120?"Medium":"Long")+"</span></div>",r+='<span class="badge '+(b?"badge-green":"badge-gray")+'">'+(b?" SKUTT":" IKKE SKUTT")+"</span>",r+="</div>";if(b){r+='<div style="overflow-x:auto;margin-top:12px;">',r+='<table style="width:100%;font-size:12px;border-collapse:collapse;">',r+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);">',r+='<th style="padding:4px 3px;text-align:left;">#</th>',r+='<th style="padding:4px 3px;text-align:left;">NAVN</th>',r+='<th style="padding:4px 3px;text-align:right;">PTS</th>',r+='<th style="padding:4px 3px;text-align:right;">STG</th>',r+='<th style="padding:4px 3px;text-align:right;">%</th>',r+='<th style="padding:4px 3px;text-align:right;">HF</th>',r+='<th style="padding:4px 3px;text-align:right;">A%</th>',r+="</tr>",m.forEach(E=>{const k=E.isMe?"background:var(--accent-fade);font-weight:600;":"",detailId="stage-detail-"+u.number+"-"+E.id,res=E.res||{};r+='<tr style="'+k+'border-bottom:1px solid var(--border);cursor:pointer;" onclick="const d=document.getElementById(\''+detailId+'\');d&&(d.style.display=d.style.display===\'none\'?\'table-row\':\'none\')">',r+='<td style="padding:4px 3px;">'+E.rank+"</td>",r+='<td style="padding:4px 3px;">'+E.name+"</td>",r+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+E.pts.toFixed(1)+"</td>",r+='<td style="padding:4px 3px;text-align:right;">'+E.stagePts.toFixed(2)+"</td>",r+='<td style="padding:4px 3px;text-align:right;">'+E.stagePct.toFixed(2)+"%</td>",r+='<td style="padding:4px 3px;text-align:right;">'+(E.hf||0).toFixed(2)+"</td>",r+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+E.stageAPercent.toFixed(0)+"%</td>",r+="</tr>",r+='<tr id="'+detailId+'" style="display:none;background:rgba(255,255,255,0.03);">',r+='<td colspan="7" style="padding:10px 8px;">',r+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:11px;">',r+='<div><div style="color:var(--muted);">Tid</div><div style="font-weight:600;">'+(res.time||0).toFixed(2)+"s</div></div>",r+='<div><div style="color:var(--muted);">A</div><div style="font-weight:600;color:var(--green);">'+(res.a||0)+"</div></div>",r+='<div><div style="color:var(--muted);">C</div><div style="font-weight:600;">'+(res.c||0)+"</div></div>",r+='<div><div style="color:var(--muted);">D</div><div style="font-weight:600;">'+(res.d||0)+"</div></div>",r+='<div><div style="color:var(--muted);">Miss</div><div style="font-weight:600;color:var(--red);">'+(res.miss||0)+"</div></div>",r+='<div><div style="color:var(--muted);">NS</div><div style="font-weight:600;color:var(--red);">'+(res.ns||0)+"</div></div>",r+='<div><div style="color:var(--muted);">Proc</div><div style="font-weight:600;color:var(--red);">'+(res.proc||0)+"</div></div>",r+="</div>",r+="</td>",r+="</tr>"}),r+="</table>",r+="</div>";const f=a.filter(E=>(E.num||E.number)<=u.number).sort((E,k)=>(E.num||0)-(k.num||0)),p=m.find(E=>E.isMe);h=p?p.res:null;if((e.type||"")==="Trening"){const myShooterT=icCurrentShooter(e);const myStageRes=myShooterT&&myShooterT.stages?myShooterT.stages.find(function(sr){return(sr.num||sr.number)==u.number}):null;if(myStageRes&&myStageRes.runs&&myStageRes.runs.length>0){r+='<div style="margin-top:15px;padding:12px;background:var(--bg);border-radius:8px;">';r+='<div style="font-size:11px;color:var(--muted);margin-bottom:10px;">MINE RUNS</div>';r+='<table style="width:100%;font-size:12px;border-collapse:collapse;">';r+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);"><th style="padding:6px 4px;text-align:left;">Run</th><th style="padding:6px 4px;text-align:right;">Tid</th><th style="padding:6px 4px;text-align:right;">HF</th><th style="padding:6px 4px;text-align:right;">A</th><th style="padding:6px 4px;text-align:right;">C</th><th style="padding:6px 4px;text-align:right;">D</th><th style="padding:6px 4px;text-align:right;">Miss</th><th style="padding:6px 4px;"></th></tr>';const bestHF=myStageRes.runs.reduce(function(bst,rn){return Math.max(bst,rn.hf||0)},0);myStageRes.runs.forEach(function(rn,ri){const isBest=(rn.hf||0)===bestHF;r+='<tr style="border-bottom:1px solid var(--border);background:'+(isBest?"rgba(232,184,75,0.08)":"transparent")+'">';r+='<td style="padding:6px 4px;font-weight:'+(isBest?"700":"400")+';">'+"Run "+(rn.runNum||ri+1)+(isBest?" ★":"")+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.time||0).toFixed(2)+"s</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--accent);">'+(rn.hf||0).toFixed(2)+"</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--green);">'+(rn.a||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.c||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.d||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--red);">'+(rn.miss||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;"><button onclick="deleteRun('+u.number+','+ri+')" style="padding:2px 6px;background:#ef4444;color:white;border:none;border-radius:4px;font-size:10px;cursor:pointer;">✕</button></td>';r+="</tr>";});r+='</table></div>';const analId='train-anal-'+u.number;r+='<button onclick="var x=document.getElementById(\''+analId+'\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\')" style="margin-top:10px;width:100%;padding:8px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;">▼ Vis treningsanalyse</button>';r+='<div id="'+analId+'" style="display:none;margin-top:8px;">';r+=icTrainingAnalysis(myStageRes.runs,u);r+='</div>';}}const allShootersTotals=icMatchTotals(e,!1);if(allShootersTotals.length>0){r+='<div style="margin-top:12px;padding:10px;background:var(--bg);border-radius:8px;">',r+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">KUMULATIV A% I MATCHEN SÅ LANGT</div>',r+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:6px;">';allShootersTotals.forEach(S=>{const totalAP=S.totalHits>0?(S.totalA/S.totalHits*100).toFixed(0)+"%":"—";r+='<div style="font-size:12px;"><div style="color:var(--muted);font-size:11px;">'+S.name+"</div><div style='font-weight:700;color:var(--green);'>"+totalAP+"</div></div>"});r+="</div>",r+="</div>"}const E=icFormFromResults(f,u.number,s);if(E&&(e.type||"")==="Trening"){const kT=t.find(P=>P.number>u.number);const refCompareT=h?{estHF:h.hf!=null?h.hf:null,expTime:h.time!=null?h.time:null}:null;rActive.length&&(r+=renderReferenceBenchmarkBlock(e,u,refCompareT));}else if(E){const k=(t.find(function(P){return P.number>u.number;})||t.slice().sort(function(a,b){return a.number-b.number;})[0]||null);const P=k?icProjectNext(E,k):null;var estForThisStage=null;{const _pR=a.filter(E=>(E.num||E.number)<u.number);const _pF=_pR.length?icFormFromResults(_pR,null,s):null;estForThisStage=_pF?icProjectNext(_pF,u):null;}P&&k&&(()=>{r+='<div style="margin-top:15px;padding:12px;background:var(--accent-fade);border-radius:8px;border-left:3px solid var(--accent);">',r+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">NESTE: '+(k.name||("STAGE "+k.number)).toUpperCase()+" ("+P.shots+" SKUDD, "+P.reloads+" RELOAD"+(P.reloads===1?"":"S")+", MAX "+P.maxPts+" PTS)</div>",r+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.08);">',r+='<div><div style="color:var(--muted);margin-bottom:3px;">t/skudd</div><div style="font-weight:600;">'+E.avgSplit.toFixed(3)+"s</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:3px;">Treff</div><div style="font-weight:600;color:var(--green);">'+( E.aPercent*100).toFixed(0)+"%A</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:3px;">Est. HF</div><div style="font-weight:600;">'+(estForThisStage?estForThisStage.estHF.toFixed(2):"—")+"</div></div>",r+="</div>",r+='<div style="font-size:14px;line-height:1.5;">'+Ds(h,k,E,e)+"</div>";var myDivN=(E&&E.division)||g.division||"Classic";var ctN=getReferenceCourseType(k);var shotsN=icStageShots(k);var refsN=rActive?rActive.filter(function(rf){return(rf.division||"")==myDivN;}):[];if(refsN.length>0){r+='<div style="margin-top:12px;padding:10px;background:rgba(255,255,255,0.04);border-radius:8px;">';r+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;">REFERANSESKYTTERE â '+ctN.toUpperCase()+' COURSE</div>';refsN.forEach(function(rf){var rHF=ctN==="short"?rf.shortHF:ctN==="medium"?rf.mediumHF:rf.longHF;var rAP=ctN==="short"?rf.shortAP:ctN==="medium"?rf.mediumAP:rf.longAP;var rCP=ctN==="short"?rf.shortCP:ctN==="medium"?rf.mediumCP:rf.longCP;var rDP=ctN==="short"?rf.shortDP:ctN==="medium"?rf.mediumDP:rf.longDP;if(!rHF)return;r+='<div style="margin-bottom:8px;padding:8px;background:var(--bg);border-radius:6px;">';r+='<div style="font-weight:700;font-size:12px;margin-bottom:6px;">'+rf.name+'</div>';r+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:11px;">';r+='<div><div style="color:var(--muted);">HF</div><div style="font-weight:700;color:var(--accent);">'+rHF.toFixed(2)+'</div></div>';if(rAP!=null)r+='<div><div style="color:var(--muted);">A%</div><div style="font-weight:700;color:var(--green);">'+rAP+'%</div></div>';if(rCP!=null)r+='<div><div style="color:var(--muted);">C%</div><div style="font-weight:700;">'+rCP+'%</div></div>';if(rDP!=null)r+='<div><div style="color:var(--muted);">D%</div><div style="font-weight:700;">'+rDP+'%</div></div>';r+='</div>';if(shotsN>0&&P&&P.expTime>0){var pf4=h?h.pf||"minor":"minor";var aV4=5,cV4=pf4==="major"?4:3,dV4=pf4==="major"?2:1;var bt=P.expTime;r+='<div style="margin-top:6px;font-size:10px;color:var(--muted);">Effekt: CâA: +'+((aV4-cV4)/bt).toFixed(2)+' HF | DâA: +'+((aV4-dV4)/bt).toFixed(2)+' HF | Ingen miss: +'+(10/bt).toFixed(2)+' HF</div>';if(rAP!=null&&rCP!=null){var rA4=Math.round(shotsN*rAP/100);var rC4=Math.round(shotsN*rCP/100);var rD4=rDP!=null?Math.round(shotsN*rDP/100):Math.max(0,shotsN-rA4-rC4);var rPts4=Math.max(0,rA4*aV4+rC4*cV4+rD4*dV4);var rHFp=bt>0?rPts4/bt:0;var dHFp=rHFp-P.estHF;r+='<div style="margin-top:4px;font-size:11px;color:var(--accent);">Hvis som '+rf.name+': est. HF '+rHFp.toFixed(2)+' ('+( dHFp>=0?"+":"")+dHFp.toFixed(2)+' vs din '+P.estHF.toFixed(2)+')</div>';}}r+='</div>';});r+='</div>';};r+="</div>";})();const prevE=f.length>1?icFormFromResults(f.slice(0,f.length-1),null,s):null;const prevP=prevE&&k?icProjectNext(prevE,k):null;const _filteredMatch=Object.assign({},e,{shooters:(e.shooters||[]).map(function(sh){return Object.assign({},sh,{stages:(sh.stages||[]).filter(function(sr){return (sr.num||sr.number)<=u.number;})});})});const C=Bs(f.length>1?f[f.length-2]:null,h,E),L=(k&&f.length>1)?As(_filteredMatch,prevE,prevP?prevP.estHF:null,k):null;C&&(r+='<div style="margin-top:15px;padding:12px;background:var(--card-bg);border-radius:8px;">',r+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">💢 REFLEKSJON</div>',r+='<div style="font-size:13px;line-height:1.5;color:var(--text);">'+C+"</div>",r+="</div>"),L&&(r+='<div style="margin-top:15px;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid '+(L.gap>=0?"var(--green)":"var(--red)")+';">',r+='<div style="font-size:12px;color:var(--muted);margin-bottom:8px;">KONKURRANSEBILDE</div>',r+='<div style="font-size:14px;font-weight:700;margin-bottom:8px;">'+L.statusText+"</div>",r+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:12px;margin-bottom:10px;">',r+='<div><div style="color:var(--muted);margin-bottom:4px;">Est HF</div><div style="font-weight:700;color:var(--accent);">'+(L.estHF!=null?L.estHF.toFixed(2):"—")+"</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:4px;">Target HF</div><div style="font-weight:700;color:var(--text);">'+(L.targetHF!=null?L.targetHF.toFixed(2):"—")+"</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:4px;">Delta HF</div><div style="font-weight:700;color:'+(L.deltaHF!=null&&L.deltaHF>0?"var(--red)":"var(--green)")+';">'+(L.deltaHF!=null?(L.deltaHF>0?"+":"")+L.deltaHF.toFixed(2):"—")+"</div></div>",r+="</div>",r+='<div style="font-size:14px;line-height:1.55;">'+L.advice+"</div>",r+="</div>",r+='<div style="margin-top:8px;">',r+='<button onclick="var ax=document.getElementById(\'anal-'+u.number+'\');ax&&(ax.style.display=ax.style.display===\'none\'?\'block\':\'none\');" style="width:100%;padding:8px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;">▼ Vis detaljert analyse</button>',r+='<div id="anal-'+u.number+'" style="display:none;margin-top:8px;padding:10px;background:var(--bg);border-radius:8px;">',r+=icStageDeepAnalysis(h,u,m,E,rActive,estForThisStage),r+="</div>",(function(){const stMentalId="stm"+Math.random().toString(36).substr(2,5);const stTips=[];const stRes=h||{};const stHits=(stRes.a||0)+(stRes.c||0)+(stRes.d||0)+(stRes.miss||0);const stAP=stHits>0?Math.round((stRes.a||0)/stHits*100):0;if((stRes.miss||0)>0)stTips.push({t:"Indre dialog ved miss",b:"Bruk SOAL: Stopp tanken, Observer uten å reagere, Aksepter at den er der, La den gå. Hjernen husker det siste bildet — visualiser straks hvordan du ville skutt stageen riktig og gå videre med et positivt bilde."});if(stAP<75&&stHits>0)stTips.push({t:"Visualisering før neste stage",b:"Lukk øynene og visualiser neste stage i førsteperson — kropp, miljø, timing og følelse. Aktivere alle sanser og inkluder følelsen av kontroll og flyt. Hjernen skiller ikke mellom tanke og handling."});if((stRes.proc||0)>0)stTips.push({t:"Konsentrasjon",b:"Øv på å filtrere bort støy som RO-avgjørelser og baneforhold. Før neste stage: lukk øynene, gå gjennom stage-planen steg for steg og sjekk at alle regler sitter. 100% fokus på oppgaven."});const stGen=[{"t":"Triggerord","b":"Velg ett ord som skaper riktig tilstand umiddelbart: Pust, Flyt eller Klar. Unngå ikke-ord — underbevisstheten filtrerer dem ut. Si triggerordet stille og rolig til deg selv mens du går mot neste stage."},{"t":"Selvtillitsboost","b":"Husk en konkret stage der du presterte bra — se den for deg i detalj. Gjenopplev følelsen av kontroll og mestring. Bruk dette bildet aktivt nå for å styrke troen på egne evner før neste stage."},{"t":"Pustepause","b":"Pust inn 4 sekunder, hold 4, pust ut 6. Gjør dette tre ganger. Stress gjør pusten grunn og rask, noe som svekker koordinasjon og konsentrasjon. Rolig pust signaliserer til kroppen at du er trygg og klar."},{"t":"Positiv indre dialog","b":"Si til deg selv: Jeg er godt forberedt. Jeg kjenner teknikken. Jeg vet hva jeg skal gjøre. Positive tanker øker motivasjonen, styrker selvtilliten og gjør deg bedre rustet til å prestere på ditt beste."},{"t":"Målsetting","b":"Sett ett konkret mestringsmål for neste stage — ikke resultat. F.eks: Rolig trekk, holde stage-planen hele veien, eller ett spesifikt teknisk fokus. Mestringsmål gir deg kontroll over det som skjer her og nå."}];stTips.push(stGen[u.number%stGen.length]);r+='<div style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px;">';r+='<div onclick="toggleTips(\x27'+stMentalId+'\x27)" style="cursor:pointer;font-size:11px;color:var(--muted);font-weight:700;margin-bottom:4px;user-select:none;">&#9658; MENTAL TRENING</div>';r+='<div id="'+stMentalId+'" style="display:none;">';stTips.forEach(function(tip){r+='<div style="font-size:12px;padding:8px 10px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:6px;border-left:3px solid #4caf7d;"><div style="font-weight:700;color:#4caf7d;margin-bottom:3px;">'+tip.t+'</div><div style="color:var(--text);">'+tip.b+'</div></div>';});r+='</div></div>';})(),r+="</div>")}}else r+='<div style="padding:16px 20px;text-align:center;color:var(--muted);font-size:13px;">'+'Ingen resultater ennå. Last opp resultat eller legg til manuelt.'+'<div style="margin-top:8px;font-size:12px;color:var(--muted);">'+(u.paperTargets?'Paper: '+u.paperTargets+' · ':'')+(u.poppers?'Poppers: '+u.poppers+' · ':'')+(u.plates?'Plates: '+u.plates+' · ':'')+'<span style="color:#e8b84b;font-weight:600;">'+(icStageMaxPts(u)<=60?'Short':icStageMaxPts(u)<=120?'Medium':'Long')+'</span>'+(icStageShots(u)?' · '+icStageShots(u)+' skudd':'')+(icStageMaxPts(u)?' · maks '+icStageMaxPts(u)+' pts':'')+'</div></div>';const refCompare=h?{estHF:h.hf!=null?h.hf:null,expTime:h.time!=null?h.time:null}:nextStage&&String(u.number)===String(nextStage.number)&&overallProjection?overallProjection:null;(e.type||"")==="Trening"||(rActive.length&&(r+=renderReferenceBenchmarkBlock(e,u,refCompare))),r+="</div>"}),i.innerHTML=r}function Ds(e,i,t,s){if(!i||!t)return"Hold samme rytme som hittil.";const a=icStageShots(i),n=Se(a,t.division||"Classic",t.pf||"minor"),r=Math.round((t.aPercent||0)*100),u=t.avgSplit?t.avgSplit.toFixed(3):"0.000";return t.aPercent<.7?`Behold tempoet, men gi siktet litt mer tid. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Baseline nå er ${r}%A og ${u}s/skudd.`:t.avgSplit<.22?`Bra flyt. Ikke jag mer tempo enn nødvendig. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Hold ${r}%A og ${u}s/skudd.`:`Hold samme rytme som hittil. Neste stage er ${a} skudd med ${n} reload${n===1?"":"s"}. Baseline nå er ${r}%A og ${u}s/skudd.`}function Bs(e,i,t){if(!e||!i||!t)return null;const s=icStageShots(e),a=icStageShots(i);if(!s||!a)return null;const n=((e.time||0)-t.draw-Se(s,t.division||"Classic",t.pf||"minor")*t.reloadTime)/s,r=((i.time||0)-t.draw-Se(a,t.division||"Classic",t.pf||"minor")*t.reloadTime)/a,u=s>0?(e.a||0)/s:0,m=a>0?(i.a||0)/a:0;if(r>n+.05&&m<u-.1)return`Tempo og treff falt fra forrige stage (${n.toFixed(3)}s  ${r.toFixed(3)}s/skudd, ${(u*100).toFixed(0)}%A  ${(m*100).toFixed(0)}%A). Tenk gjennom hva som stjal tid og fokus.`;if(r>n+.05)return`Tempoet falt fra forrige stage (${n.toFixed(3)}s  ${r.toFixed(3)}s/skudd). Reflekter over hva som stjal tid.`;if(m<u-.1)return`Treffbildet falt fra forrige stage (${(u*100).toFixed(0)}%A  ${(m*100).toFixed(0)}%A). Vurder om du presset for hardt.`;if(r<n-.03&&m>=u-.05)return`Bra flyt. Du gikk raskere enn forrige stage uten stort tap i treffbildet.`;return null}function icStageDeepAnalysis(h,u,m,E,rActive,estProg){if(!h||!u||!m||!m.length)return "";var progBlock="";if(estProg&&h&&h.hf!=null){var actHF=h.hf>0?h.hf:(h.pts||0)/(h.time||1);var deltaHF=actHF-estProg.estHF;var actTotal=(h.a||0)+(h.c||0)+(h.d||0)+(h.miss||0);var actAP=actTotal>0?Math.round((h.a||0)/actTotal*100):0;var hfColor=deltaHF>=0?"var(--green)":"var(--red)";var hfSign=deltaHF>=0?"+":"";progBlock+='<div style="margin-bottom:14px;padding:10px;background:rgba(232,184,75,0.08);border-radius:8px;border-left:3px solid var(--accent);">';progBlock+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;">PROGNOSE VS. FAKTISK</div>';progBlock+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;">';progBlock+='<div><div style="color:var(--muted);">Est. HF</div><div style="font-weight:700;">'+estProg.estHF.toFixed(2)+'</div></div>';progBlock+='<div><div style="color:var(--muted);">Faktisk HF</div><div style="font-weight:700;color:var(--accent);">'+actHF.toFixed(2)+'</div></div>';progBlock+='<div><div style="color:var(--muted);">Delta HF</div><div style="font-weight:700;color:'+hfColor+';">'+hfSign+deltaHF.toFixed(2)+'</div></div>';progBlock+='</div>';var verdict=deltaHF>=0.3?"Betydelig over prognosen — bra skyting!":deltaHF>=0?"Over prognosen — bra jobbet.":deltaHF>=-0.3?"Litt under prognosen — mulig å hente inn.":"Under prognosen — vurder tempo og treffbilde neste stage.";progBlock+='<div style="margin-top:8px;font-size:12px;line-height:1.5;">'+verdict+'</div>';progBlock+='</div>';}var html=progBlock;const shots=icStageShots(u);if(!shots||!h.time||h.time<=0)return "";const myHF=h.hf&&h.hf>0?h.hf:(h.pts||0)/h.time;const myTime=h.time,myPts=h.pts||0;const myA=h.a||0,myC=h.c||0,myD=h.d||0,myMiss=h.miss||0,myProc=h.proc||0;const pf=h.pf||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;const winner=m[0];const winHF=winner?winner.hf||0:0;const allAPts=Math.max(0,shots*aVal+(h.ns||0)*(-10)+myProc*(-10));const hfAllA=myTime>0?allAPts/myTime:0;const deltaHFallA=hfAllA-myHF;const timeAllA=myHF>0?allAPts/myHF:0;const extraTime=timeAllA-myTime;const timeToWin=winHF>0?myPts/winHF:0;const deltaTimeWin=myTime-timeToWin;const secPerMiss=myHF>0?10/myHF:0;const secPerProc=myHF>0?10/myHF:0;const ptsLostC=myC*(aVal-cVal);const ptsLostD=myD*(aVal-dVal);const ptsLostTotal=ptsLostC+ptsLostD;const draw=E&&E.draw?E.draw:g.draw||1.42;const reloadTime=E&&E.reloadTime?E.reloadTime:g.reloadTime||1.8;const reloads=Se(shots,E&&E.division?E.division:g.division||"Classic",pf);const baselineTime=E&&E.avgSplit?draw+shots*E.avgSplit+reloads*reloadTime:0;const baselineHF=baselineTime>0?myPts/baselineTime:0;const deltaBaselineHF=baselineHF-myHF;const myIdx=m.findIndex(function(x){return x.isMe});const above=myIdx>0?m[myIdx-1]:null;const aboveHF=above?above.hf||0:0;const marginHF=aboveHF>0?aboveHF-myHF:0;const marginSec=myHF>0&&aboveHF>0?myPts/myHF-myPts/aboveHF:0;const pts=[];if(deltaHFallA>0.01)pts.push("Hadde du skutt alle A på samme tid, ville HF vært "+hfAllA.toFixed(2)+" (+"+deltaHFallA.toFixed(2)+")");if(extraTime>0.01)pts.push("Med alle A kunne du brukt "+extraTime.toFixed(2)+" sek mer ("+timeAllA.toFixed(2)+" sek totalt) og beholdt samme HF");if(ptsLostTotal>0.5)pts.push("Du mistet "+ptsLostTotal.toFixed(0)+" poeng på C/D-treff (C: "+ptsLostC.toFixed(0)+" poeng, D: "+ptsLostD.toFixed(0)+" poeng) sammenlignet med alle A");if(E&&E.avgSplit&&baselineHF>0&&Math.abs(deltaBaselineHF)>0.05)pts.push("Med din baseline-split ("+E.avgSplit.toFixed(3)+"s/skudd) og samme treffbilde ville HF vært "+(deltaBaselineHF>=0?"+":"")+deltaBaselineHF.toFixed(2)+" ("+baselineHF.toFixed(2)+")");if(myMiss>0)pts.push("Hver miss kostet deg ca. "+secPerMiss.toFixed(2)+" sek i HF-tap");if(myProc>0)pts.push("Hver procedural kostet deg ca. "+secPerProc.toFixed(2)+" sek i HF-tap");if(above&&marginHF>0.01)pts.push("Margin til «"+(above.name||"skytteren over deg")+"» er "+marginHF.toFixed(2)+" HF — tilsvarer ca. "+Math.abs(marginSec).toFixed(2)+" sek på denne stagen");if(winHF>0&&myHF<winHF&&deltaTimeWin>0)pts.push("For å vinne stagen måtte du skutt "+deltaTimeWin.toFixed(2)+" sek raskere ("+timeToWin.toFixed(2)+" sek totalt) med samme treffbilde");else if(winHF>0&&myHF>=winHF)pts.push("Du vant stagen — bra skyting!");if(!pts.length)return html;html='<ul style="margin:0;padding:0 0 0 16px;font-size:12px;color:var(--text);line-height:1.7;">';pts.forEach(function(p){html+='<li style="margin-bottom:6px;">'+p+"</li>"});html+="</ul>";if(rActive&&rActive.length>0&&h&&u){const myDivision=(E&&E.division)||g.division||"Classic";const ct=getReferenceCourseType(u);const shots=icStageShots(u);const myTotal=(h.a||0)+(h.c||0)+(h.d||0)+(h.miss||0);const myAP=myTotal>0?Math.round((h.a||0)/myTotal*100):0;const myCP=myTotal>0?Math.round((h.c||0)/myTotal*100):0;const myDP=myTotal>0?Math.round((h.d||0)/myTotal*100):0;const myHF=h.hf&&h.hf>0?h.hf:(h.pts||0)/h.time;const matchRefs=rActive.filter(function(r){return(r.division||"")===myDivision;});if(matchRefs.length>0){html+='<div style="margin-top:14px;padding:10px;background:rgba(232,184,75,0.06);border-radius:8px;border-left:3px solid var(--accent);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;">REFERANSESKYTTERE — '+ct.toUpperCase()+' COURSE</div>';matchRefs.forEach(function(ref){const refHF=ct==="short"?ref.shortHF:ct==="medium"?ref.mediumHF:ref.longHF;const refAP=ct==="short"?ref.shortAP:ct==="medium"?ref.mediumAP:ref.longAP;const refCP=ct==="short"?ref.shortCP:ct==="medium"?ref.mediumCP:ref.longCP;const refDP=ct==="short"?ref.shortDP:ct==="medium"?ref.mediumDP:ref.longDP;if(!refHF)return;const dHF=myHF-refHF;const dAP=refAP!=null?myAP-refAP:null;const dCP=refCP!=null?myCP-refCP:null;const dDP=refDP!=null?myDP-refDP:null;const pf=(ref.powerFactor||"minor").charAt(0).toUpperCase()+(ref.powerFactor||"minor").slice(1);html+='<div style="margin-bottom:10px;padding:8px;background:var(--bg);border-radius:6px;">';html+='<div style="font-size:12px;font-weight:700;margin-bottom:6px;">'+ref.name+' <span style="font-weight:400;color:var(--muted);">('+ref.division+' '+pf+')</span></div>';html+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:11px;">';html+='<div><div style="color:var(--muted);">HF</div>';html+='<div style="font-weight:700;">'+refHF.toFixed(2)+'</div>';html+='<div style="color:'+(dHF>=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dHF>=0?"+":"")+dHF.toFixed(2)+'</div></div>';if(refAP!=null){html+='<div><div style="color:var(--muted);">A%</div>';html+='<div style="font-weight:700;">'+refAP+'%</div>';html+='<div style="color:'+(dAP>=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dAP>=0?"+":"")+dAP+'%</div></div>';}if(refCP!=null){html+='<div><div style="color:var(--muted);">C%</div>';html+='<div style="font-weight:700;">'+refCP+'%</div>';html+='<div style="color:'+(dCP<=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dCP>=0?"+":"")+dCP+'%</div></div>';}if(refDP!=null){html+='<div><div style="color:var(--muted);">D%</div>';html+='<div style="font-weight:700;">'+refDP+'%</div>';html+='<div style="color:'+(dDP<=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dDP>=0?"+":"")+dDP+'%</div></div>';}html+='</div></div>';});html+='</div>';}}return html;}function icTrainingAnalysis(runs,stageDef){if(!runs||runs.length<1)return "";const shots=icStageShots(stageDef);const pf=runs[0].pf||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;let html="";if(runs.length>1){html+='<div style="margin-bottom:12px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">UTVIKLING MELLOM RUNS</div>';for(let ri=1;ri<runs.length;ri++){const prev=runs[ri-1],curr=runs[ri];const hfDiff=(curr.hf||0)-(prev.hf||0);const timeDiff=(curr.time||0)-(prev.time||0);const pt=(prev.a||0)+(prev.c||0)+(prev.d||0)+(prev.miss||0);const ct=(curr.a||0)+(curr.c||0)+(curr.d||0)+(curr.miss||0);const pAP=pt>0?Math.round((prev.a||0)/pt*100):0;const cAP=ct>0?Math.round((curr.a||0)/ct*100):0;const aPDiff=cAP-pAP;html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;margin-bottom:4px;">';html+="Run "+(prev.runNum||ri)+" → Run "+(curr.runNum||ri+1)+": ";html+='<span style="color:'+(hfDiff>=0?"var(--green)":"var(--red)")+';font-weight:600;">'+(hfDiff>=0?"+":"")+hfDiff.toFixed(2)+" HF</span>";html+=" · ";html+='<span style="color:'+(timeDiff<=0?"var(--green)":"var(--red)")+';">'+(timeDiff>=0?"+":"")+timeDiff.toFixed(2)+"s</span>";html+=" · ";html+='<span style="color:'+(aPDiff>=0?"var(--green)":"var(--red)")+';">'+(aPDiff>=0?"+":"")+aPDiff+"%A</span>";html+="</div>";}html+="</div>";}const bestHFRun=runs.reduce(function(a,b){return(b.hf||0)>(a.hf||0)?b:a},runs[0]);const bestTimeRun=runs.reduce(function(a,b){return(b.time||0)<(a.time||0)?b:a},runs[0]);const bestAPRun=runs.reduce(function(a,b){const at=(a.a||0)+(a.c||0)+(a.d||0)+(a.miss||0);const bt=(b.a||0)+(b.c||0)+(b.d||0)+(b.miss||0);return bt>0&&(b.a||0)/bt>(at>0?(a.a||0)/at:0)?b:a},runs[0]);html+='<div style="margin-bottom:12px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">BESTE PER KATEGORI</div>';html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:11px;">';const bapT=(bestAPRun.a||0)+(bestAPRun.c||0)+(bestAPRun.d||0)+(bestAPRun.miss||0);const bapStr=bapT>0?Math.round((bestAPRun.a||0)/bapT*100)+"%":"--";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Beste HF</div><div style="font-weight:700;color:var(--accent);">'+( bestHFRun.hf||0).toFixed(2)+"</div><div>Run "+(bestHFRun.runNum||1)+"</div></div>";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Beste tid</div><div style="font-weight:700;color:var(--green);">'+( bestTimeRun.time||0).toFixed(2)+"s</div><div>Run "+(bestTimeRun.runNum||1)+"</div></div>";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Beste A%</div><div style="font-weight:700;color:var(--green);">'+bapStr+"</div><div>Run "+(bestAPRun.runNum||1)+"</div></div>";html+="</div></div>";if(runs.length>1){const potTime=bestTimeRun.time||0;const potPts=bestAPRun.pts||0;const potHF=potTime>0?potPts/potTime:0;const bestActual=bestHFRun.hf||0;if(potHF>bestActual+0.01){html+='<div style="margin-bottom:12px;padding:10px;background:rgba(232,184,75,0.08);border-radius:6px;border-left:3px solid var(--accent);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:4px;">POTENSIAL</div>';html+='<div style="font-size:12px;">Med Run '+( bestTimeRun.runNum||1)+" sin tid ("+potTime.toFixed(2)+"s) og Run "+(bestAPRun.runNum||1)+" sitt treffbilde ville HF vært ";html+='<span style="color:var(--accent);font-weight:700;">'+potHF.toFixed(2)+"</span> (+"+( potHF-bestActual).toFixed(2)+" over beste run)</div>";html+="</div>";}}const best=bestHFRun;const bestTime=best.time||0,bestPts=best.pts||0,bestHF=best.hf||0;if(bestTime>0&&shots>0){html+='<div style="margin-bottom:12px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">HVA HVIS (beste run ★)</div>';const allAPts=Math.max(0,shots*aVal+(best.ns||0)*(-10)+(best.proc||0)*(-10));const hfAllA=bestTime>0?allAPts/bestTime:0;if(hfAllA>bestHF+0.01)html+='<div style="font-size:12px;padding:5px 0;">&#8226; Alle A samme tid: HF '+hfAllA.toFixed(2)+" (+"+( hfAllA-bestHF).toFixed(2)+")</div>";if((best.c||0)>0){const noC=Math.max(0,bestPts+(best.c||0)*(aVal-cVal));const hfNoC=bestTime>0?noC/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; Ingen C-treff: HF '+hfNoC.toFixed(2)+" (+"+( hfNoC-bestHF).toFixed(2)+")</div>";}if((best.d||0)>0){const noD=Math.max(0,bestPts+(best.d||0)*(aVal-dVal));const hfNoD=bestTime>0?noD/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; Ingen D-treff: HF '+hfNoD.toFixed(2)+" (+"+( hfNoD-bestHF).toFixed(2)+")</div>";}if((best.miss||0)>0){const noMiss=Math.max(0,bestPts+(best.miss||0)*10);const hfNoMiss=bestTime>0?noMiss/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; Ingen miss: HF '+hfNoMiss.toFixed(2)+" (+"+( hfNoMiss-bestHF).toFixed(2)+")</div>";}if((best.proc||0)>0){const noProc=Math.max(0,bestPts+(best.proc||0)*10);const hfNoProc=bestTime>0?noProc/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; Ingen procedurals: HF '+hfNoProc.toFixed(2)+" (+"+( hfNoProc-bestHF).toFixed(2)+")</div>";}html+="</div>";}const refleks=[];if(runs.length>1){const first=runs[0],last=runs[runs.length-1];const hfUp=(last.hf||0)>(first.hf||0);const timeDown=(last.time||0)<(first.time||0);const ft=(first.a||0)+(first.c||0)+(first.d||0)+(first.miss||0);const lt=(last.a||0)+(last.c||0)+(last.d||0)+(last.miss||0);const fAP=ft>0?(first.a||0)/ft:0;const lAP=lt>0?(last.a||0)/lt:0;if(hfUp&&lAP>fAP+0.05)refleks.push("Du forbedret både HF og treffbilde — hva endret du mellom runs?");else if(hfUp&&timeDown)refleks.push("Du gikk raskere og forbedret HF — hva skapte den bedre flyten?");else if(hfUp)refleks.push("HF gikk opp — hva var den viktigste justeringen mellom runs?");else refleks.push("HF gikk ned — hva tror du stjal tid eller treffkvalitet?");if(lAP>fAP+0.05)refleks.push("A% økte — visste du om C/D-treffene underveis på forrige run, eller oppdaget du dem etterpå?");if(lAP<fAP-0.05)refleks.push("Treffbildet falt — presset du for hardt på tempo?");}if((best.miss||0)>0)refleks.push("Du hadde miss — var det tempo, siktebilde eller noe annet som forårsaket det?");if((best.c||0)>2)refleks.push("Flere C-treff — er det spesifikke mål som er vanskeligere, eller et generelt mønster?");refleks.push("Hva ville du gjort annerledes på neste run?");if(refleks.length){html+='<div style="margin-bottom:8px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">REFLEKSJON</div>';refleks.forEach(function(q){html+='<div style="font-size:12px;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">❓ '+q+"</div>";});html+="</div>";}return html;}async function Os(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e)return;const i=F("new-shooter-firstname").trim(),t=F("new-shooter-lastname").trim(),s=F("new-shooter-division")||"Classic",a=(F("new-shooter-pf")||(Zi[s]||["minor"])[0]||"minor").toLowerCase();if(!i||!t){alert("Fyll inn navn");return}const n={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:t,division:s,pf:a,club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(n);showSpinner("Lagrer skytter…");Ee(e.id,{shooters:e.shooters}).then(function(r){hideSpinner();if(r.success){G("modal-add-shooter");icRenderEditMatchShootersList(e);te();_e();De()}else alert("Kunne ikke lagre skytter: "+r.error)})}async function js(){const e=$.find(f=>f.id!=null&&f.id.toString()===String(R));if(!e)return;const i=A("new-result-stage",1),t=he("new-result-time",0),s=icNormalizeManualHits(),a=icRecalcPoints("new-result"),n=icStageDefs(e).find(r=>Number(r.number)===Number(i));if(!n){alert("Stage ikke funnet");return}if(t<=0||a<=0){alert("Tid og poeng må være større enn 0");return}if(s.a+s.c+s.d+s.miss!==s.totalHits){alert("Treffbildet stemmer ikke med stagekravet");return}const r=await icEnsureShooter(e,icUploadShooterSel||icCurrentShooterId());if(!r){alert("Skytter ikke funnet");return}const u=t>0?a/t:0,m={num:n.number,name:n.name||("Stage "+n.number),hf:u,time:t,pts:a,pf:icResultPF(r.pf||g.powerFactor||"minor"),a:s.a,c:s.c,d:s.d,miss:s.miss,ns:s.ns,proc:s.proc,paperTargets:n.paperTargets||0,poppers:n.poppers||0,plates:n.plates||0};const isTraining=(e.type||"")==="Trening";icUpsertStageResult(r,m,isTraining);showSpinner("Lagrer resultat…");Ee(e.id,{shooters:e.shooters}).then(function(b){hideSpinner();if(b.success){G("modal-add");te();_e();De()}else alert("Kunne ikke lagre resultat: "+b.error)});}function Us(){G("modal-upload-result"),Re()}async function Hs(e){if(!$.find(u=>u.id!=null&&u.id.toString()===String(R))){alert("Ingen aktiv match valgt");return}const i=o("upload-stage-select"),t=o("upload-shooter-select"),s=o("upload-result-file");if(!i.value||!t.value){alert("Velg stage og skytter");return}if(!s.files||s.files.length===0){alert("Velg en fil");return}const a=s.files[0];Me=i.value,icUploadShooterSel=t.value,icSetResultDialogMode("ocr");const n=e&&e.currentTarget?e.currentTarget:o("upload-scan-btn"),r=n?n.textContent:"Last opp og skann";n&&(n.textContent="Skanner...",n.disabled=!0);try{const u=await new Promise((m,b)=>{const f=new FileReader;f.onerror=()=>b(new Error("Kunne ikke lese filen")),f.onload=p=>m(p.target.result),f.readAsDataURL(a)}),m=await qi.recognize(u,"eng+nor",{logger:b=>console.log(b)}),f=(m&&m.data&&m.data.text?m.data.text:"").trim();if(console.log("OCR Text:",f),!f)throw new Error("Ingen tekst funnet i bildet");const p=zs(f);if(p.time==null&&p.a===0&&p.c===0&&p.d===0&&p.miss===0&&p.ns===0&&p.proc===0)throw new Error("Fant ingen resultater i bildet");o("ocr-time").value=p.time||"",o("ocr-a").value=p.a||0,o("ocr-c").value=p.c||0,o("ocr-d").value=p.d||0,o("ocr-miss").value=p.miss||0,o("ocr-ns").value=p.ns||0,o("ocr-proc").value=p.proc||0,icRecalcPoints("ocr"),G("modal-upload-result"),ie("modal-ocr-confirm")}catch(u){console.error("OCR Error:",u),alert("Feil ved skanning: "+u.message)}finally{n&&(n.textContent=r,n.disabled=!1)}}function zs(e){const i={time:null,points:null,a:0,c:0,d:0,miss:0,ns:0,proc:0},t=e.replace(/[\n\r]+/g," ").toLowerCase(),s=[/time[:\s]*(\d+\.?\d*)/i,/(\d+\.\d+)\s*s(?:ec)?/i,/^(\d+\.\d+)$/m];for(const p of s){const h=t.match(p);if(h){i.time=parseFloat(h[1]);break}}const a=[/(?:points?|pts?)[:\s]*(\d+)/i,/score[:\s]*(\d+)/i];for(const p of a){const h=t.match(p);if(h){i.points=parseInt(h[1]);break}}const n=[/(\d+)\s*a(?:lpha)?(?:\s|$)/i,/a(?:lpha)?[:\s]*(\d+)/i];for(const p of n){const h=t.match(p);if(h){i.a=parseInt(h[1]);break}}const r=[/(\d+)\s*c(?:harlie)?(?:\s|$)/i,/c(?:harlie)?[:\s]*(\d+)/i];for(const p of r){const h=t.match(p);if(h){i.c=parseInt(h[1]);break}}const u=[/(\d+)\s*d(?:elta)?(?:\s|$)/i,/d(?:elta)?[:\s]*(\d+)/i];for(const p of u){const h=t.match(p);if(h){i.d=parseInt(h[1]);break}}const m=[/(\d+)\s*m(?:iss)?(?:\s|$)/i,/m(?:iss)?[:\s]*(\d+)/i];for(const p of m){const h=t.match(p);if(h){i.miss=parseInt(h[1]);break}}const b=[/(\d+)\s*ns(?:\s|$)/i,/ns[:\s]*(\d+)/i,/no-?shoot[:\s]*(\d+)/i];for(const p of b){const h=t.match(p);if(h){i.ns=parseInt(h[1]);break}}const f=[/(\d+)\s*p(?:roc)?(?:\s|$)/i,/p(?:roc)?[:\s]*(\d+)/i,/procedural[:\s]*(\d+)/i];for(const p of f){const h=t.match(p);if(h){i.proc=parseInt(h[1]);break}}return i}async function Gs(){const e=$.find(P=>P.id!=null&&P.id.toString()===String(R));if(!e)return;const i=he("ocr-time",0),t=icRecalcPoints("ocr"),s=A("ocr-a",0),a=A("ocr-c",0),n=A("ocr-d",0),r=A("ocr-miss",0),u=A("ocr-ns",0),m=A("ocr-proc",0);if(i<=0||t<=0){alert("Tid og poeng må være større enn 0");return}const b=icStageDefs(e).find(P=>P.number==Me);if(!b){alert("Stage ikke funnet");return}const f=await icEnsureShooter(e,icUploadShooterSel||icCurrentShooterId());if(!f){alert("Skytter ikke funnet");return}const p=i>0?t/i:0,h={num:b.number,name:b.name||("Stage "+b.number),hf:p,time:i,pts:t,pf:icResultPF(f.pf||g.powerFactor||"minor"),a:s,c:a,d:n,miss:r,ns:u,proc:m,paperTargets:b.paperTargets||0,poppers:b.poppers||0,plates:b.plates||0};icUpsertStageResult(f,h),await Ee(e.id,{shooters:e.shooters}),G("modal-ocr-confirm"),te(),_e(),De(),Me=null,icUploadShooterSel=null,icSetResultDialogMode("ocr")}
async function importESSVerify(e){
  const match=$.find(u=>u.id!=null&&u.id.toString()===String(R));
  if(!match){alert("Ingen aktiv match valgt");return;}
  const fileInput=o("upload-result-file");
  if(!fileInput||!fileInput.files||fileInput.files.length===0){alert("Velg en fil (PNG eller JPG) f\u00f8r du importerer");return;}
  const file=fileInput.files[0];
  const mtype=file.type||"image/jpeg";
  if(!mtype.startsWith("image/")){alert("Kun PNG og JPG st\u00f8ttes. Last opp et skjermbilde av ESS verify-eposten.");return;}
  const btn=e&&e.currentTarget?e.currentTarget:o("upload-ess-btn");
  const origText=btn?btn.textContent:"Importer ESS verify";
  if(btn){btn.textContent="Leser...";btn.disabled=true;}
  try{
    const b64=await new Promise((res,rej)=>{
      const fr=new FileReader();
      fr.onerror=()=>rej(new Error("Kunne ikke lese filen"));
      fr.onload=ev=>res(ev.target.result.split(",")[1]);
      fr.readAsDataURL(file);
    });
    const resp=await fetch("https://parseessverify-w2sou35ibq-uc.a.run.app",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({base64:b64,mediaType:mtype})
    });
    if(!resp.ok){const errText=await resp.text();throw new Error("Serverfeil: "+errText);}
    const result=await resp.json();
    if(!result.success||!result.data){throw new Error(result.error||"Ingen data mottatt fra server");}
    const parsed=result.data;
    const stageNum=parseInt(parsed.stageNumber||parsed.stage||0);
    const pTime=parseFloat(parsed.time||0);
    const pA=parseInt(parsed.a||0);
    const pC=parseInt(parsed.c||0);
    const pD=parseInt(parsed.d||0);
    const pMiss=parseInt(parsed.miss||0);
    const pNS=parseInt(parsed.ns||0);
    const pProc=parseInt(parsed.proc||0);
    const pPF=(parsed.powerFactor||parsed.factor||"minor").toLowerCase();
    if(!stageNum||pTime<=0){throw new Error("Fant ikke gyldig stage-nummer eller tid i bildet");}
    const stageDef=icStageDefs(match).find(s=>Number(s.number)===stageNum);
    if(!stageDef){
      const stageNames=icStageDefs(match).map(s=>"Stage "+s.number).join(", ");
      throw new Error("Stage "+stageNum+" finnes ikke i aktiv match. Tilgjengelige stages: "+stageNames);
    }
    const pts=icScoreFromHits(pPF,pA,pC,pD,pMiss,pNS,pProc);
    const hf=pTime>0?pts/pTime:0;
    icSetResultDialogMode("ocr");
    o("ocr-time").value=pTime;
    o("ocr-a").value=pA;
    o("ocr-c").value=pC;
    o("ocr-d").value=pD;
    o("ocr-miss").value=pMiss;
    o("ocr-ns").value=pNS;
    o("ocr-proc").value=pProc;
    icRecalcPoints("ocr");
    Me=stageNum;
    icUploadShooterSel=icCurrentShooterId();
    const ct=o("ocr-confirm-title");
    if(ct)ct.textContent="Bekreft ESS verify - Stage "+stageNum;
    const cd=o("ocr-confirm-desc");
    if(cd)cd.textContent="Kontroller verdiene hentet fra ESS verify. Divisjon: "+(parsed.division||"")+" \u00b7 PF: "+(parsed.powerFactor||"")+" \u00b7 HF: "+hf.toFixed(4);
    G("modal-upload-result");
    ie("modal-ocr-confirm");
  }catch(err){
    console.error("ESS import error:",err);
    alert("Feil ved import: "+err.message);
  }finally{
    if(btn){btn.textContent=origText;btn.disabled=false;}
  }
}async function Ks(){ke&&ke(),xe&&xe(),await $t(),window.location.reload()}const ht=document.getElementById("app");ht.innerHTML=`<div style="position:fixed;inset:0;background:#0a0c10;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;" id="loading-screen"><img src="/Logo_IPSC-insight.png" alt="Insight Dynamics Shooting" style="width:88px;height:88px;border-radius:20px;box-shadow:0 8px 32px rgba(232,184,75,0.18);margin-bottom:28px;"><div style="font-size:26px;font-weight:900;color:#f5f7fb;letter-spacing:1px;margin-bottom:8px;">INSIGHT DYNAMICS</div><div style="font-size:14px;color:#7d8598;font-weight:500;margin-bottom:40px;font-style:italic;">Analyse. Presisjon. Resultat.</div><div style="width:180px;height:3px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden;"><div style="height:100%;width:40%;background:#e8b84b;border-radius:99px;animation:ipsc-loading 1.2s ease-in-out infinite;"></div></div><style>@keyframes ipsc-loading{0%{transform:translateX(-100%);width:40%}50%{width:60%}100%{transform:translateX(350%);width:40%}}</style></div>`;function Vs(){Bt(ht,ft)}function ft(){ts(ht)}Ct(e=>{const l=document.getElementById("loading-screen");if(l){l.style.opacity="0";l.style.transition="opacity 0.3s";setTimeout(()=>{l.remove();e?ft():Vs()},300)}else{e?ft():Vs()}});
