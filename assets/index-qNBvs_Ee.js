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
 Alle tjenester er hostet i EU/EØS-regionen og følger GDPR-kravene. Google Firebase er sertifisert under EU-U.S. Data Privacy Framework.
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
 Dine personopplysninger lagres så lenge du har en aktiv konto hos oss. Når du sletter kontoen din, vil alle dine personopplysninger bli slettet innen 30 dager. Match-data du har delt med andre brukere vil fortsatt være synlig for dem, men koblingen til din konto fjernes.
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
 Vi bruker Firebase Authentication med sikker kryptering for pålogging. All kommunikasjon mellom deg og tjenesten er kryptert med HTTPS. Tilgangskontroll sikrer at kun du og de du inviterer kan se dine match-data.
 </p>

 <h3>9. Kontaktinformasjon</h3>
 <p>
 Har du spørsmål om personvern eller ønsker å utøve dine rettigheter, kan du kontakte oss på:<br>
 <a href="mailto:post@insight-dynamics-shooting.org"><strong>post@insight-dynamics-shooting.org</strong></a>
 </p>

 <h3>10. Endringer i personvernerklæringen</h3>
 <p>
 Vi forbeholder oss retten til å oppdatere denne personvernerklæringen. Ved vesentlige endringer vil du bli varslet ved innlogging.
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
 <input type="checkbox" id="gdpr-consent-checkbox" 
 class="gdpr-checkbox" required>
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
 display: flex; align-items: center; justify-content: center; font-size: 20px; line-height: 1; cursor: pointer; opacity: 0.72;
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
 `;const t={no:{subtitle:"Analyse. Presisjon. Resultat.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Logg inn",or:"eller",showRegister:"Registrer ny bruker",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Bekreft e-post",registerEmailConfirmPlaceholder:"Gjenta e-post",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Gjenta passord",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitasjonskode",registerCodePlaceholder:"Invitasjonskode",register:"Opprett bruker",cancel:"Avbryt",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Fyll ut alle påkrevde feltene",missingName:"Du må skrive inn fornavn og etternavn",missingDivision:"Du må velge divisjon",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Passordstyrke: Svært svak",strengthWeak:"Passordstyrke: Svak",strengthMedium:"Passordstyrke: Middels",strengthStrong:"Passordstyrke: Sterk",strengthVeryStrong:"Passordstyrke: Svært sterk",gdprRequired:"Du må godta personvernerklæringen for å registrere deg"},en:{subtitle:"Analyse. Presisjon. Resultat.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Log in",or:"or",showRegister:"Create new user",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm email",registerEmailConfirmPlaceholder:"Repeat email",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm password",registerPasswordConfirmPlaceholder:"Repeat password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create account",cancel:"Cancel",emailMismatch:"The email addresses do not match",passwordMismatch:"Passwords do not match",missingFields:"Please fill in all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"The password is too weak",strengthEmpty:"",strengthVeryWeak:"Password strength: Very weak",strengthWeak:"Password strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password strength: Strong",strengthVeryStrong:"Password strength: Very strong",gdprRequired:"You must accept the privacy policy to register"}};let s="no",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),u=document.getElementById("registerSection"),m=document.getElementById("showRegisterBtn"),b=document.getElementById("cancelRegisterBtn"),f=document.getElementById("loginBtn"),p=document.getElementById("registerBtn"),h=document.getElementById("langNo"),E=document.getElementById("langEn"),k=document.getElementById("registerPassword"),P=document.getElementById("passwordStrengthBar"),C=document.getElementById("passwordStrengthText"),L=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");L.onclick=()=>{a="minor",L.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),L.classList.remove("selected")};function D(w){let y=0;return w?(w.length>=8&&(y+=1),w.length>=12&&(y+=1),/[a-z]/.test(w)&&/[A-Z]/.test(w)&&(y+=1),/\d/.test(w)&&(y+=1),/[^A-Za-z0-9]/.test(w)&&(y+=1),y<=1?{score:y,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:y===2?{score:y,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:y===3?{score:y,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:y===4?{score:y,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:y,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function B(){const w=t[s],y=k.value,H=D(y);P.style.width=H.width,P.style.background=H.color,C.innerText=w[H.labelKey]}function _(w){s=w;const y=t[w];document.getElementById("brandSubtitle").innerText=y.subtitle,document.getElementById("loginEmailLabel").innerText=y.loginEmailLabel,document.getElementById("loginEmail").placeholder=y.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=y.loginPasswordLabel,document.getElementById("loginPassword").placeholder=y.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=y.login,document.getElementById("separatorText").innerText=y.or,document.getElementById("showRegisterBtn").innerText=y.showRegister,document.getElementById("registerFirstNameLabel").innerText=y.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=y.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=y.registerLastNameLabel,document.getElementById("registerLastName").placeholder=y.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=y.registerEmailLabel,document.getElementById("registerEmail").placeholder=y.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=y.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=y.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=y.registerPasswordLabel,document.getElementById("registerPassword").placeholder=y.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=y.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=y.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=y.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=y.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=y.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=y.registerRegionLabel,document.getElementById("registerClubLabel").innerText=y.registerClubLabel,document.getElementById("registerCodeLabel").innerText=y.registerCodeLabel,document.getElementById("registerCode").placeholder=y.registerCodePlaceholder,document.getElementById("registerBtn").innerText=y.register,document.getElementById("cancelRegisterBtn").innerText=y.cancel,h.classList.toggle("active",w==="no"),E.classList.toggle("active",w==="en"),B()}function K(){r.classList.remove("active"),u.classList.add("active"),n.innerText="";const w=document.getElementById("gdprCheckboxContainer");if(w&&!w.hasChildNodes()){const y=Rt();w.appendChild(y)}}function j(){u.classList.remove("active"),r.classList.add("active"),n.innerText=""}h.onclick=()=>_("no"),E.onclick=()=>_("en"),m.onclick=K,b.onclick=j,k.oninput=B,f.onclick=async()=>{n.innerText="";const w=document.getElementById("loginEmail").value.trim(),y=document.getElementById("loginPassword").value,H=await _t(w,y);H.success?i():n.innerText=H.error},p.onclick=async()=>{n.innerText="";const w=t[s],y=document.getElementById("registerFirstName").value.trim(),H=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,T=document.getElementById("registerRegion").value,I=document.getElementById("registerClub").value.trim(),c=document.getElementById("registerCode").value.trim();if(!y||!H){n.innerText=w.missingName;return}if(!Y||!ce||!X||!pe||!c){n.innerText=w.missingFields;return}if(!se){n.innerText=w.missingDivision;return}if(Y!==ce){n.innerText=w.emailMismatch;return}if(X!==pe){n.innerText=w.passwordMismatch;return}if(D(X).score<=1){n.innerText=w.weakPassword;return}if(!Dt().valid){n.innerText=w.gdprRequired;return}const v=await Nt(Y,X,c,y,H,se,ae,a,T,I);v.success?i():n.innerText=v.error},_("no"),B()}async function Ot(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{return await de(U(O,"users",i.uid),{...e,updatedAt:Ie()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function jt(){const e=W();if(!e)return null;try{const i=await be(U(O,"users",e.uid));return i.exists()?{uid:e.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function Ut(e){try{const i=await be(U(O,"users",e));return i.exists()?{uid:e,...i.data()}:null}catch(i){return console.error("Get user by ID error:",i),null}}async function Ht(){const e=U(O,"counters","matchId");try{const i=await be(e);if(!i.exists())return await Ne(e,{value:1}),1;const s=i.data().value+1;return await de(e,{value:s}),s}catch(i){throw console.error("Error getting next match ID:",i),i}}async function zt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await Ht(),s={id:t,...e,searchable:e.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:Ie(),updatedAt:Ie()};return await Ne(U(O,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function Ee(e,i){if(!W())return{success:!1,error:"Not authenticated"};try{return await de(U(O,"matches",e.toString()),{...i,updatedAt:Ie()}),{success:!0}}catch(s){return console.error("Update match error:",s),{success:!1,error:s.message}}}async function Gt(e){const i=W();if(!i)return{success:!1,error:"Not authenticated"};try{const t=await be(U(O,"matches",e.toString()));return t.exists()?t.data().ownerId!==i.uid?{success:!1,error:"Only the creator can delete this match"}:(await Pt(U(O,"matches",e.toString())),{success:!0}):{success:!1,error:"Match not found"}}catch(t){return console.error("Delete match error:",t),{success:!1,error:t.message}}}
