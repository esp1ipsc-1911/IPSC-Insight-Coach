import{initializeApp as bt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";import{getAuth as yt,onAuthStateChanged as wt,signInWithEmailAndPassword as kt,createUserWithEmailAndPassword as xt,signOut as St}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";import{getFirestore as Lt,getDoc as be,doc as U,setDoc as Ne,query as $e,collection as Le,where as Fe,getDocs as He,onSnapshot as ze,serverTimestamp as Ie,updateDoc as de,arrayUnion as st,deleteDoc as Pt,writeBatch as wb}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";import{getFunctions as Et,httpsCallable as Tt}from"https://www.gstatic.com/firebasejs/10.12.2/firebase-functions.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();const Mt={apiKey:"AIzaSyA11OPapSOfwLQzs-oEoF7papT9S3T5p7Q",authDomain:"ipsc-insight-coach.firebaseapp.com",projectId:"ipsc-insight-coach",storageBucket:"ipsc-insight-coach.firebasestorage.app",messagingSenderId:"864793320312",appId:"1:864793320312:web:c586e384bbe365444bc68d",measurementId:"G-3Y4NZTBBS2"},at=bt(Mt),Ae=yt(at),O=Lt(at),It=Et();let je=null,oe=null;function Ct(e){wt(Ae,async i=>{if(i){je=i;try{const t=await be(U(O,"users",i.uid));t.exists()?oe={uid:i.uid,...t.data()}:oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}catch(t){console.error("Error loading user profile:",t),oe={uid:i.uid,email:i.email,name:i.email?i.email.split("@")[0]:"Bruker",role:"user"},e(oe)}}else je=null,oe=null,e(null)})}async function _t(e,i){try{const t=(e||"").trim();return{success:!0,user:(await kt(Ae,t,i||"")).user}}catch(t){console.error("Sign-in failed:",t);let s="Sign-in failed";return t.code==="auth/user-not-found"||t.code==="auth/wrong-password"||t.code==="auth/invalid-credential"?s="Invalid email address or password":t.code==="auth/invalid-email"?s="Invalid email address":t.code==="auth/user-disabled"&&(s="This account has been disabled"),{success:!1,error:s}}}async function Nt(e,i,t,s,a,n,r,u,m,b){try{const f=(e||"").trim(),p=i||"",h=(t||"").trim(),E=(s||"").trim(),k=(a||"").trim(),P=(n||"").trim(),C=(r||"").trim(),L=(u||"minor").trim(),M=(m||"").trim(),D=(b||"").trim(),_=(await xt(Ae,f,p)).user,K=Tt(It,"validateInviteCode");try{await K({code:h,userId:_.uid,userEmail:f})}catch(j){await _.delete();let w="Invalid invitation code";return j.code==="functions/not-found"?w="Invalid invitation code":j.code==="functions/permission-denied"?w="This code has been deactivated":j.code==="functions/resource-exhausted"?w="This invitation code has reached the maximum number of uses":j.code==="functions/already-exists"?w="You have already used this code":j.message&&(w=j.message),{success:!1,error:w}}return await Ne(U(O,"users",_.uid),{email:f,firstName:E,lastName:k,division:P,category:C,powerFactor:L,region:M,club:D,role:"user",inviteCode:h,createdAt:new Date,draw:null,reloadTime:null,gdprConsent:!0,gdprConsentDate:new Date,gdprVersion:"1.0"}),{success:!0,user:_}}catch(f){console.error("Registrering feilet:",f);let p="Registrering feilet";return f.code==="auth/email-already-in-use"?p="This email address is already associated with an account":f.code==="auth/weak-password"?p="Your password must contain at least 6 characters":f.code==="auth/invalid-email"?p="Invalid email address":f.message&&(p=f.message),{success:!1,error:p}}}async function $t(){try{return await St(Ae),{success:!0}}catch(e){return console.error("Sign-out failed:",e),{success:!1,error:"Unable to sign out"}}}function W(){return je}function Pe(){return oe}const Ft=`
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
 <li><strong>Prestasjonsdata:</strong> Match-resultater, stages, shots, tider og poeng fra IPSC-konkurranser</li>
 <li><strong>Teknisk informasjon:</strong> Bruker-ID, registreringsdato, siste oppdatering</li>
 <li><strong>Invitation Code:</strong> For å verifisere din tilgang til tjenesten</li>
 </ul>

 <h3>3. Formål og behandlingsgrunnlag</h3>
 <p>Vi behandler dine personopplysninger for følgende formål:</p>
 <ul>
 <li><strong>Brukerkonto og autentisering:</strong> For å opprette og administrere din konto (behandlingsgrunnlag: samtykke)</li>
 <li><strong>Treningsanalyse:</strong> For å gi deg innsikt i dine prestasjoner og treningsutvikling (behandlingsgrunnlag: samtykke)</li>
 <li><strong>Deling of match-data:</strong> For å dele resultater med andre users du inviterer (behandlingsgrunnlag: samtykke)</li>
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
 <li><strong>Match-deltakere:</strong> Når du inviterer andre users til å se eller samarbeide om en match, vil de se dine match-resultater og ditt navn</li>
 <li><strong>Tekniske leverandører:</strong> Google Firebase og GitHub (databehandlere) har tilgang til opplysningene som nødvendig for å levere tjenesten</li>
 </ul>
 <p>Vi selger eller utleverer aldri dine opplysninger til tredjeparter for markedsføringsformål.</p>

 <h3>6. Lagringstid</h3>
 <p>
 Dine personopplysninger lagres så lenge du har en aktiv konto hos oss. 
 Når du sletter kontoen din, vil alle dine personopplysninger bli slettet innen 30 dager.
 Match-data du har delt med andre users vil fortsatt være synlig for dem, men koblingen til din konto fjernes.
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
 <li>At match-data du deler med andre users blir synlig for dem</li>
 </ul>
 </div>

 <p class="gdpr-version">Versjon 1.0 - Sist oppdatert: ${new Date().toLocaleDateString("nb-NO")}</p>
</div>
`;function At(e,i){const t=document.getElementById("gdpr-modal");t&&t.remove();const s=document.createElement("div");s.id="gdpr-modal",s.className="gdpr-modal",s.innerHTML=`
 <div class="gdpr-modal-overlay"></div>
 <div class="gdpr-modal-container">
 <div class="gdpr-modal-header">
 <h2>${dt==="no"?"Personvernerklæring":"Privacy Policy"}</h2>
 <button class="gdpr-close-btn" aria-label="${dt==="no"?"Lukk":"Close"}">&times;</button>
 </div>
 <div class="gdpr-modal-body">
 ${dt==="no"?Ft:Ft_en}
 </div>
 <div class="gdpr-modal-footer">
 <button class="gdpr-btn gdpr-btn-decline">Decline</button>
 <button class="gdpr-btn gdpr-btn-accept">Accept and Continue</button>
 </div>
 </div>
 `,document.body.appendChild(s);const a=s.querySelector(".gdpr-close-btn"),n=s.querySelector(".gdpr-btn-accept"),r=s.querySelector(".gdpr-btn-decline"),u=s.querySelector(".gdpr-modal-overlay"),m=()=>{s.remove()};a.addEventListener("click",()=>{m(),i&&i()}),u.addEventListener("click",()=>{m(),i&&i()}),r.addEventListener("click",()=>{m(),i&&i()}),n.addEventListener("click",()=>{m(),e&&e()}),document.body.style.overflow="hidden";const b=m,f=()=>{document.body.style.overflow="",b()};a.onclick=()=>{f(),i&&i()},u.onclick=()=>{f(),i&&i()},r.onclick=()=>{f(),i&&i()},n.onclick=()=>{f(),e&&e()}}function Rt(){const e=document.createElement("div");return e.className="gdpr-checkbox-container";e.style.cssText="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:14px 16px;margin-bottom:16px;",e.innerHTML=`
 <label class="gdpr-checkbox-label">
 <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
 <span class="gdpr-checkbox-text">
 ${dt==="no"?"Jeg har lest og godtar":"I have read and accepted"} 
 <a href="#" class="gdpr-link" id="gdpr-open-modal">${dt==="no"?"personvernerklæringen":"the Privacy Policy"}</a>
 </span>
 </label>
 `,setTimeout(()=>{const i=e.querySelector("#gdpr-open-modal");i&&i.addEventListener("click",t=>{t.preventDefault(),At(()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!0)},()=>{const s=document.getElementById("gdpr-consent-checkbox");s&&(s.checked=!1)})})},0),e}function Dt(){const e=document.getElementById("gdpr-consent-checkbox");return!e||!e.checked?{valid:!1,error:dt==="no"?"You must accept the Privacy Policy to create an account":"You must accept the Privacy Policy to create an account"}:{valid:!0}}function Bt(e,i){e.innerHTML=`
<style>
 *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 :root {
  --accent: #e0b649; --accent2: #c49a30;
  --bg: #0d0f12; --card: #141820;
  --border: rgba(255,255,255,0.07); --border-gold: rgba(224,182,73,0.25);
  --text: #f0f2f5; --muted: rgba(255,255,255,0.38);
 }
 html, body { background: var(--bg); color: var(--text); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; min-height: 100vh; }
 .login-page {
  min-height: 100vh; width: 100%;
  background: #0d0f12;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 17.3 L60 42.7 L30 60 L0 42.7 L0 17.3Z' fill='none' stroke='rgba(224,182,73,0.04)' stroke-width='0.5'/%3E%3C/svg%3E");
  display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 16px;
 }
 .login-shell { width: 100%; max-width: 400px; }
 .login-topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 28px; }
 .login-logo { width: 54px; height: 54px; border-radius: 14px; background: linear-gradient(135deg,#1a1e26,#0d0f12); border: 1px solid var(--border-gold); display: flex; align-items: center; justify-content: center; font-size: 26px; box-shadow: 0 0 0 1px rgba(224,182,73,0.12), 0 0 16px rgba(224,182,73,0.08); }
 .login-lang { display: flex; background: rgba(255,255,255,0.05); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
 .lang-btn { background: transparent; border: none; padding: 8px 14px; font-size: 17px; cursor: pointer; line-height: 1; transition: background 0.15s; }
 .lang-btn.active { background: rgba(224,182,73,0.15); }
 .lang-btn:first-child { border-right: 1px solid var(--border); }
 .login-hero { margin-bottom: 24px; }
 .login-title { font-size: 44px; font-weight: 900; letter-spacing: -0.01em; line-height: 1; }
 .login-title .white { color: var(--text); }
 .login-title .gold { color: var(--accent); }
 .login-tagline { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; color: var(--muted); text-transform: uppercase; margin-top: 10px; }
 .login-status { display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-left: 2px solid #22c55e; border-radius: 8px; padding: 10px 14px; margin-bottom: 18px; }
 .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; flex-shrink: 0; }
 .status-text { font-size: 11px; font-weight: 700; letter-spacing: 0.12em; color: rgba(255,255,255,0.55); text-transform: uppercase; }
 .login-card { background: var(--card); border: 1px solid var(--border); border-top: 2px solid var(--accent); border-radius: 16px; padding: 22px; }
 .field-group { margin-bottom: 14px; }
 .field-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; color: var(--muted); text-transform: uppercase; margin-bottom: 7px; display: flex; align-items: center; gap: 6px; }
 .field-lbl svg { width: 11px; height: 11px; stroke: var(--muted); fill: none; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
 .field-wrap { position: relative; }
 .field-ico { position: absolute; left: 12px; top: 50%; transform: translateY(-50%); display: flex; pointer-events: none; }
 .field-ico svg { width: 14px; height: 14px; stroke: rgba(255,255,255,0.25); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
 .field { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; color: var(--text); font-size: 15px; padding: 12px 14px 12px 40px; outline: none; transition: border-color 0.15s, background 0.15s; -webkit-appearance: none; }
 .field.no-ico { padding-left: 14px; }
 .field:focus { border-color: rgba(224,182,73,0.45); background: rgba(255,255,255,0.06); }
 .field::placeholder { color: rgba(255,255,255,0.18); }
 select.field { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.25)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; }
 select.field option { background: #141820; color: var(--text); }
 input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus { -webkit-box-shadow: 0 0 0 100px #141820 inset !important; -webkit-text-fill-color: #f0f2f5 !important; caret-color: #f0f2f5 !important; transition: background-color 9999s !important; }
 .pw-toggle { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; padding: 4px; display: flex; }
 .pw-toggle svg { width: 16px; height: 16px; stroke: rgba(255,255,255,0.3); fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
 .pw-strength-wrap { margin-top: 6px; display: flex; align-items: center; gap: 8px; }
 .pw-strength-track { flex: 1; height: 3px; background: rgba(255,255,255,0.08); border-radius: 2px; overflow: hidden; }
 #passwordStrengthBar { height: 100%; width: 0; border-radius: 2px; transition: width 0.3s, background 0.3s; }
 #passwordStrengthText { font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; min-width: 70px; text-align: right; color: var(--muted); }
 .btn-primary { width: 100%; padding: 13px; background: linear-gradient(135deg,var(--accent),var(--accent2)); color: #0a0c0f; border: none; border-radius: 10px; font-size: 13px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; cursor: pointer; margin-top: 6px; transition: opacity 0.15s; }
 .btn-primary:hover { opacity: 0.88; }
 .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
 .btn-secondary { width: 100%; padding: 12px; background: transparent; color: var(--accent); border: 1px solid rgba(224,182,73,0.28); border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: background 0.15s; }
 .btn-secondary:hover { background: rgba(224,182,73,0.08); }
 .btn-ghost { width: 100%; padding: 10px; background: transparent; color: var(--muted); border: none; font-size: 11px; font-weight: 600; letter-spacing: 0.06em; cursor: pointer; text-transform: uppercase; margin-top: 4px; }
 .or-row { display: flex; align-items: center; gap: 12px; margin: 14px 0; }
 .or-row::before, .or-row::after { content: ''; flex: 1; height: 1px; background: var(--border); }
 #separatorText { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; }
 .error-text { color: #ef4444; font-size: 12px; font-weight: 500; margin-top: 10px; min-height: 16px; text-align: center; }
 .login-section { display: block; }
 .register-section { display: none; }
 .login-section.active { display: block; }
 .register-section.active { display: block; }
 .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
 .pf-row { display: flex; gap: 8px; margin-top: 4px; }
 .pf-btn { flex: 1; padding: 10px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: var(--muted); font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; transition: all 0.15s; text-align: center; }
 .pf-btn.selected { background: var(--accent-fade,rgba(224,182,73,0.12)); border-color: var(--accent); color: var(--accent); }
 .gdpr-row { display: flex; align-items: flex-start; gap: 10px; margin: 12px 0; }
 .gdpr-row input[type=checkbox] { width: 17px; height: 17px; flex-shrink: 0; accent-color: var(--accent); margin-top: 2px; cursor: pointer; }
 .gdpr-row label { font-size: 12px; color: var(--muted); line-height: 1.5; cursor: pointer; }
 .gdpr-row label a { color: var(--accent); text-decoration: none; font-weight: 600; }
 .gdpr-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); backdrop-filter: blur(4px); z-index: 1000; align-items: center; justify-content: center; padding: 16px; }
 .gdpr-modal.open { display: flex; }
 .gdpr-modal-inner { background: #141820; border: 1px solid var(--border); border-top: 2px solid var(--accent); border-radius: 16px; max-width: 500px; width: 100%; max-height: 80vh; overflow-y: auto; padding: 22px; }
 .gdpr-modal-inner h2 { font-size: 15px; font-weight: 800; letter-spacing: 0.06em; color: var(--text); margin-bottom: 14px; text-transform: uppercase; }
 .gdpr-modal-inner h3 { font-size: 10px; font-weight: 700; letter-spacing: 0.1em; color: var(--accent); text-transform: uppercase; margin: 14px 0 5px; }
 .gdpr-modal-inner p, .gdpr-modal-inner li { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; }
 .gdpr-modal-inner ul { padding-left: 16px; margin: 4px 0; }
 .gdpr-close { width: 100%; margin-top: 18px; padding: 12px; background: linear-gradient(135deg,var(--accent),var(--accent2)); color: #0a0c0f; border: none; border-radius: 10px; font-size: 12px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; }
</style>

<div class="login-page" id="loginPage">
 <div class="login-shell">

  <div class="login-topbar">
   <div class="login-logo">
    <img src="/Logo_IPSC-insight.png" alt="Insight Dynamics" style="width:38px;height:38px;object-fit:contain;" />
   </div>
   <div class="login-lang">
    <button class="lang-btn" id="langNo" onclick="">🇳🇴</button>
    <button class="lang-btn" id="langEn" onclick="">🇺🇸</button>
   </div>
  </div>

  <div class="login-hero">
   <div class="login-title"><span class="white">INSIGHT</span><br><span class="gold">DYNAMICS</span></div>
   <div class="login-tagline" id="brandSubtitle">Performance. Precision. Progress.</div>
  </div>

  <div class="login-status">
   <div class="status-dot"></div>
   <div class="status-text">System Online</div>
  </div>

  <div class="login-card">

   <!-- LOGIN SECTION -->
   <form id="loginSection" class="login-section active" onsubmit="return false;" autocomplete="on">
    <div class="field-group">
     <div class="field-lbl" id="loginEmailLabel">
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,5 12,13 21,5"/></svg>Email
     </div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,5 12,13 21,5"/></svg></div>
      <input id="loginEmail" class="field" type="email" placeholder="name@email.com" autocomplete="username" />
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="loginPasswordLabel">
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Password
     </div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <input id="loginPassword" class="field" type="password" placeholder="Password" autocomplete="current-password" name="password" />
      <button class="pw-toggle" type="button" onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
     </div>
    </div>
    <button class="btn-primary" id="loginBtn">Sign In</button>
    <div class="or-row"><span id="separatorText">or</span></div>
    <button class="btn-secondary" id="showRegisterBtn">Create an Account</button>
   </form>

   <!-- REGISTER SECTION -->
   <div id="registerSection" class="register-section">
    <div class="form-row">
     <div class="field-group">
      <div class="field-lbl" id="registerFirstNameLabel">First Name</div>
      <input id="registerFirstName" class="field no-ico" type="text" placeholder="First name" autocomplete="given-name" />
     </div>
     <div class="field-group">
      <div class="field-lbl" id="registerLastNameLabel">Last Name</div>
      <input id="registerLastName" class="field no-ico" type="text" placeholder="Last name" autocomplete="family-name" />
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerEmailLabel">
      <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,5 12,13 21,5"/></svg>Email
     </div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,5 12,13 21,5"/></svg></div>
      <input id="registerEmail" class="field" type="email" placeholder="name@email.com" autocomplete="email" />
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerEmailConfirmLabel">Confirm Email Address</div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3,5 12,13 21,5"/></svg></div>
      <input id="registerEmailConfirm" class="field" type="email" placeholder="Re-enter email" autocomplete="email" />
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerPasswordLabel">
      <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Password
     </div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <input id="registerPassword" class="field" type="password" placeholder="Password" autocomplete="new-password" />
      <button class="pw-toggle" type="button" onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
     </div>
     <div class="pw-strength-wrap">
      <div class="pw-strength-track"><div id="passwordStrengthBar"></div></div>
      <div id="passwordStrengthText"></div>
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerPasswordConfirmLabel">Re-enter Password</div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
      <input id="registerPasswordConfirm" class="field" type="password" placeholder="Re-enter password" autocomplete="new-password" />
      <button class="pw-toggle" type="button" onclick="this.previousElementSibling.type=this.previousElementSibling.type==='password'?'text':'password'"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button>
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerDivisionLabel">Division</div>
     <select id="registerDivision" class="field no-ico">
      <option value="">Select division…</option>
      <option value="Open">Open</option>
      <option value="Standard">Standard</option>
      <option value="Classic">Classic</option>
      <option value="Production">Production</option>
      <option value="Production Optics">Production Optics</option>
      <option value="Revolver">Revolver</option>
      <option value="Pistol Caliber Carbine">Pistol Caliber Carbine</option>
      <option value="Pistol Caliber Carbine Optics">Pistol Caliber Carbine Optics</option>
     </select>
    </div>
    <div class="form-row">
     <div class="field-group">
      <div class="field-lbl" id="registerCategoryLabel">Category</div>
      <select id="registerCategory" class="field no-ico">
       <option value="">Optional</option>
       <option value="Lady">Lady</option>
       <option value="Junior">Junior</option>
       <option value="Senior">Senior</option>
       <option value="Super Senior">Super Senior</option>
      </select>
     </div>
     <div class="field-group">
      <div class="field-lbl" id="registerClubLabel">Club</div>
      <input id="registerClub" class="field no-ico" type="text" placeholder="Club (optional)" />
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerRegionLabel">Region / Nation</div>
     <select id="registerRegion" class="field no-ico">
      <option value="">Select nation (optional)</option>
      <option value="🇦🇺 Australia">🇦🇺 Australia</option>
      <option value="🇦🇹 Austria">🇦🇹 Austria</option>
      <option value="🇧🇪 Belgium">🇧🇪 Belgium</option>
      <option value="🇧🇷 Brazil">🇧🇷 Brazil</option>
      <option value="🇨🇦 Canada">🇨🇦 Canada</option>
      <option value="🇨🇳 China">🇨🇳 China</option>
      <option value="🇭🇷 Croatia">🇭🇷 Croatia</option>
      <option value="🇨🇿 Czech Republic">🇨🇿 Czech Republic</option>
      <option value="🇩🇰 Denmark">🇩🇰 Denmark</option>
      <option value="🇫🇮 Finland">🇫🇮 Finland</option>
      <option value="🇫🇷 France">🇫🇷 France</option>
      <option value="🇩🇪 Germany">🇩🇪 Germany</option>
      <option value="🇬🇷 Greece">🇬🇷 Greece</option>
      <option value="🇭🇺 Hungary">🇭🇺 Hungary</option>
      <option value="🇮🇸 Iceland">🇮🇸 Iceland</option>
      <option value="🇮🇳 India">🇮🇳 India</option>
      <option value="🇮🇪 Ireland">🇮🇪 Ireland</option>
      <option value="🇮🇱 Israel">🇮🇱 Israel</option>
      <option value="🇮🇹 Italy">🇮🇹 Italy</option>
      <option value="🇯🇵 Japan">🇯🇵 Japan</option>
      <option value="🇱🇻 Latvia">🇱🇻 Latvia</option>
      <option value="🇱🇹 Lithuania">🇱🇹 Lithuania</option>
      <option value="🇲🇽 Mexico">🇲🇽 Mexico</option>
      <option value="🇳🇱 Netherlands">🇳🇱 Netherlands</option>
      <option value="🇳🇿 New Zealand">🇳🇿 New Zealand</option>
      <option value="🇳🇴 Norway">🇳🇴 Norway</option>
      <option value="🇵🇱 Poland">🇵🇱 Poland</option>
      <option value="🇵🇹 Portugal">🇵🇹 Portugal</option>
      <option value="🇷🇴 Romania">🇷🇴 Romania</option>
      <option value="🇷🇺 Russia">🇷🇺 Russia</option>
      <option value="🇸🇦 Saudi Arabia">🇸🇦 Saudi Arabia</option>
      <option value="🇷🇸 Serbia">🇷🇸 Serbia</option>
      <option value="🇸🇰 Slovakia">🇸🇰 Slovakia</option>
      <option value="🇸🇮 Slovenia">🇸🇮 Slovenia</option>
      <option value="🇿🇦 South Africa">🇿🇦 South Africa</option>
      <option value="🇪🇸 Spain">🇪🇸 Spain</option>
      <option value="🇸🇪 Sweden">🇸🇪 Sweden</option>
      <option value="🇨🇭 Switzerland">🇨🇭 Switzerland</option>
      <option value="🇹🇷 Turkey">🇹🇷 Turkey</option>
      <option value="🇺🇦 Ukraine">🇺🇦 Ukraine</option>
      <option value="🇬🇧 United Kingdom">🇬🇧 United Kingdom</option>
      <option value="🇺🇸 United States">🇺🇸 United States</option>
     </select>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerPowerFactorLabel">Power Factor</div>
     <div class="pf-row">
      <div class="pf-btn selected" id="pfMinor">Minor</div>
      <div class="pf-btn" id="pfMajor">Major</div>
     </div>
    </div>
    <div class="field-group">
     <div class="field-lbl" id="registerCodeLabel">
      <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>Invitation Code
     </div>
     <div class="field-wrap">
      <div class="field-ico"><svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <input id="registerCode" class="field" type="text" placeholder="Invitation code (required)" />
     </div>
    </div>
    <div class="gdpr-row">
     <input type="checkbox" id="gdpr-consent-checkbox" />
     <label for="gdpr-consent-checkbox">
      I have read and accepted the <a href="#" onclick="document.getElementById('gdprModal').classList.add('open');return false;">Privacy Policy</a>
     </label>
    </div>
    <div id="gdprCheckboxContainer"></div>
    <button class="btn-primary" id="registerBtn">Create an Account</button>
    <button class="btn-ghost" id="cancelRegisterBtn">Cancel</button>
   </div>

   <div id="error" class="error-text"></div>
  </div>

 </div>
</div>

<div class="gdpr-modal" id="gdprModal">
 <div class="gdpr-modal-inner" id="gdprContent">
  <button class="gdpr-close" onclick="document.getElementById('gdprModal').classList.remove('open')">Close</button>
 </div>
</div>`;const _langInit=localStorage.getItem("appLang")||"en";const t={no:{subtitle:"Performance. Precision. Progress.",loginEmailLabel:"E-post",loginEmailPlaceholder:"navn@epost.no",loginPasswordLabel:"Passord",loginPasswordPlaceholder:"Passord",login:"Sign In",loginSpinner:"Signing in…",or:"or",showRegister:"Create an Account",registerFirstNameLabel:"Fornavn",registerFirstNamePlaceholder:"Fornavn",registerLastNameLabel:"Etternavn",registerLastNamePlaceholder:"Etternavn",registerEmailLabel:"E-post",registerEmailPlaceholder:"navn@epost.no",registerEmailConfirmLabel:"Confirm Email Address",registerEmailConfirmPlaceholder:"Re-enter Email Address",registerPasswordLabel:"Passord",registerPasswordPlaceholder:"Passord",registerPasswordConfirmLabel:"Bekreft passord",registerPasswordConfirmPlaceholder:"Re-enter Password",registerDivisionLabel:"Divisjon",registerCategoryLabel:"Kategori",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Klubb",registerCodeLabel:"Invitation Code",registerCodePlaceholder:"Invitation Code",register:"Create Account",cancel:"Cancel",emailMismatch:"E-postadressene er ikke like",passwordMismatch:"Passordene er ikke like",missingFields:"Please complete all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"Passordet er for svakt",strengthEmpty:"",strengthVeryWeak:"Password Strength: Very Weak",strengthWeak:"Password Strength: Weak",strengthMedium:"Password Strength: Fair",strengthStrong:"Password Strength: Strong",strengthVeryStrong:"Password Strength: Very Strong",gdprRequired:dt==="no"?"You must accept the Privacy Policy to create an account":"You must accept the Privacy Policy to create an account"},en:{subtitle:"Performance. Precision. Progress.",loginEmailLabel:"Email",loginEmailPlaceholder:"name@email.com",loginPasswordLabel:"Password",loginPasswordPlaceholder:"Password",login:"Sign In",loginSpinner:"Signing in…",or:"or",showRegister:"Create an Account",registerFirstNameLabel:"First Name",registerFirstNamePlaceholder:"First name",registerLastNameLabel:"Last Name",registerLastNamePlaceholder:"Last name",registerEmailLabel:"Email",registerEmailPlaceholder:"name@email.com",registerEmailConfirmLabel:"Confirm Email Address",registerEmailConfirmPlaceholder:"Re-enter Email Address",registerPasswordLabel:"Password",registerPasswordPlaceholder:"Password",registerPasswordConfirmLabel:"Confirm Password",registerPasswordConfirmPlaceholder:"Re-enter Password",registerDivisionLabel:"Division",registerCategoryLabel:"Category",registerPowerFactorLabel:"Power Factor",registerRegionLabel:"Region",registerClubLabel:"Club",registerCodeLabel:"Invite code",registerCodePlaceholder:"Invite code",register:"Create an Account",cancel:"Cancel",emailMismatch:"The email addresses you entered do not match",passwordMismatch:"The passwords you entered do not match",missingFields:"Please complete all required fields",missingName:"Please enter your first and last name",missingDivision:"Please select a division",weakPassword:"Your password is too weak",strengthEmpty:"",strengthVeryWeak:"Password Strength: Very Weak",strengthWeak:"Password Strength: Weak",strengthMedium:"Password strength: Medium",strengthStrong:"Password Strength: Strong",strengthVeryStrong:"Password Strength: Very Strong",gdprRequired:"You must accept the Privacy Policy to create an account"}};let s=localStorage.getItem("appLang")||"en",a="minor";const n=document.getElementById("error"),r=document.getElementById("loginSection"),u=document.getElementById("registerSection"),m=document.getElementById("showRegisterBtn"),b=document.getElementById("cancelRegisterBtn"),f=document.getElementById("loginBtn"),p=document.getElementById("registerBtn"),h=document.getElementById("langNo"),E=document.getElementById("langEn"),k=document.getElementById("registerPassword"),P=document.getElementById("passwordStrengthBar"),C=document.getElementById("passwordStrengthText"),L=document.getElementById("pfMinor"),M=document.getElementById("pfMajor");L.onclick=()=>{a="minor",L.classList.add("selected"),M.classList.remove("selected")},M.onclick=()=>{a="major",M.classList.add("selected"),L.classList.remove("selected")};function D(w){let y=0;return w?(w.length>=8&&(y+=1),w.length>=12&&(y+=1),/[a-z]/.test(w)&&/[A-Z]/.test(w)&&(y+=1),/\d/.test(w)&&(y+=1),/[^A-Za-z0-9]/.test(w)&&(y+=1),y<=1?{score:y,width:"20%",labelKey:"strengthVeryWeak",color:"#ff6b6b"}:y===2?{score:y,width:"40%",labelKey:"strengthWeak",color:"#ff9f43"}:y===3?{score:y,width:"60%",labelKey:"strengthMedium",color:"#feca57"}:y===4?{score:y,width:"80%",labelKey:"strengthStrong",color:"#1dd1a1"}:{score:y,width:"100%",labelKey:"strengthVeryStrong",color:"#10ac84"}):{score:0,width:"0%",labelKey:"strengthEmpty",color:"#ff6b6b"}}function B(){const w=t[s],y=k.value,H=D(y);P.style.width=H.width,P.style.background=H.color,C.innerText=w[H.labelKey]}function _(w){s=w;const y=t[w];document.getElementById("brandSubtitle").innerText=y.subtitle,document.getElementById("loginEmailLabel").innerText=y.loginEmailLabel,document.getElementById("loginEmail").placeholder=y.loginEmailPlaceholder,document.getElementById("loginPasswordLabel").innerText=y.loginPasswordLabel,document.getElementById("loginPassword").placeholder=y.loginPasswordPlaceholder,document.getElementById("loginBtn").innerText=y.login,document.getElementById("separatorText").innerText=y.or,document.getElementById("showRegisterBtn").innerText=y.showRegister,document.getElementById("registerFirstNameLabel").innerText=y.registerFirstNameLabel,document.getElementById("registerFirstName").placeholder=y.registerFirstNamePlaceholder,document.getElementById("registerLastNameLabel").innerText=y.registerLastNameLabel,document.getElementById("registerLastName").placeholder=y.registerLastNamePlaceholder,document.getElementById("registerEmailLabel").innerText=y.registerEmailLabel,document.getElementById("registerEmail").placeholder=y.registerEmailPlaceholder,document.getElementById("registerEmailConfirmLabel").innerText=y.registerEmailConfirmLabel,document.getElementById("registerEmailConfirm").placeholder=y.registerEmailConfirmPlaceholder,document.getElementById("registerPasswordLabel").innerText=y.registerPasswordLabel,document.getElementById("registerPassword").placeholder=y.registerPasswordPlaceholder,document.getElementById("registerPasswordConfirmLabel").innerText=y.registerPasswordConfirmLabel,document.getElementById("registerPasswordConfirm").placeholder=y.registerPasswordConfirmPlaceholder,document.getElementById("registerDivisionLabel").innerText=y.registerDivisionLabel,document.getElementById("registerCategoryLabel").innerText=y.registerCategoryLabel,document.getElementById("registerPowerFactorLabel").innerText=y.registerPowerFactorLabel,document.getElementById("registerRegionLabel").innerText=y.registerRegionLabel,document.getElementById("registerClubLabel").innerText=y.registerClubLabel,document.getElementById("registerCodeLabel").innerText=y.registerCodeLabel,document.getElementById("registerCode").placeholder=y.registerCodePlaceholder,document.getElementById("registerBtn").innerText=y.register,document.getElementById("cancelRegisterBtn").innerText=y.cancel,h.classList.toggle("active",w==="no"),E.classList.toggle("active",w==="en"),localStorage.setItem("appLang",w);try{if(typeof setAppLang==="function")setAppLang(w);}catch(e){}B()}function K(){r.classList.remove("active"),u.classList.add("active"),n.innerText="";const w=document.getElementById("gdprCheckboxContainer");if(w&&!w.hasChildNodes()){const y=Rt();w.appendChild(y)}}function j(){u.classList.remove("active"),r.classList.add("active"),n.innerText=""}h.onclick=()=>_("no"),E.onclick=()=>_("en");_(_langInit);m.onclick=K,b.onclick=j,k.oninput=B,f.onclick=async()=>{n.innerText="";f.disabled=true;f.textContent=t[s].loginSpinner||"Signing in…";const w=document.getElementById("loginEmail").value.trim(),y=document.getElementById("loginPassword").value,H=await _t(w,y);H.success?i():(n.innerText=H.error,f.disabled=false,f.textContent=t[s].login)},p.onclick=async()=>{n.innerText="";const w=t[s],y=document.getElementById("registerFirstName").value.trim(),H=document.getElementById("registerLastName").value.trim(),Y=document.getElementById("registerEmail").value.trim(),ce=document.getElementById("registerEmailConfirm").value.trim(),X=document.getElementById("registerPassword").value,pe=document.getElementById("registerPasswordConfirm").value,se=document.getElementById("registerDivision").value,ae=document.getElementById("registerCategory").value,T=document.getElementById("registerRegion").value,I=document.getElementById("registerClub").value.trim(),c=document.getElementById("registerCode").value.trim();if(!y||!H){n.innerText=w.missingName;return}if(!Y||!ce||!X||!pe||!c){n.innerText=w.missingFields;return}if(!se){n.innerText=w.missingDivision;return}if(Y!==ce){n.innerText=w.emailMismatch;return}if(X!==pe){n.innerText=w.passwordMismatch;return}if(D(X).score<=1){n.innerText=w.weakPassword;return}if(!Dt().valid){n.innerText=w.gdprRequired;return}const v=await Nt(Y,X,c,y,H,se,ae,a,T,I);v.success?i():n.innerText=v.error},_(_langInit),B()}async function Ot(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{return await de(U(O,"users",i.uid),{...e,updatedAt:Ie()}),{success:!0}}catch(t){return console.error("Save profile error:",t),{success:!1,error:t.message}}}async function jt(){const e=W();if(!e)return null;try{const i=await be(U(O,"users",e.uid));return i.exists()?{uid:e.uid,...i.data()}:null}catch(i){return console.error("Get profile error:",i),null}}async function Ut(e){try{const i=await be(U(O,"users",e));return i.exists()?{uid:e,...i.data()}:null}catch(i){return console.error("Get user by ID error:",i),null}}async function Ht(){const e=U(O,"counters","matchId");try{const i=await be(e);if(!i.exists())return await Ne(e,{value:1}),1;const s=i.data().value+1;return await de(e,{value:s}),s}catch(i){throw console.error("Error retrieving next match ID:",i),i}}async function zt(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{const t=await Ht(),s={id:t,...e,searchable:e.searchable!==!1,ownerId:i.uid,participants:[i.uid],createdAt:Ie(),updatedAt:Ie()};return await Ne(U(O,"matches",t.toString()),s),{success:!0,matchId:t}}catch(t){return console.error("Create match error:",t),{success:!1,error:t.message}}}async function Ee(e,i){if(!W())return{success:!1,error:"Authentication required"};try{return await de(U(O,"matches",e.toString()),{...i,updatedAt:Ie()}),{success:!0}}catch(s){return console.error("Error updating match:",s),{success:!1,error:s.message}}}async function Gt(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{const t=await be(U(O,"matches",e.toString()));return t.exists()?t.data().ownerId!==i.uid?{success:!1,error:"Only the match creator can delete this match"}:(await Pt(U(O,"matches",e.toString())),{success:!0}):{success:!1,error:"Match could not be found"}}catch(t){return console.error("Error deleting match:",t),{success:!1,error:t.message}}}async function Kt(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{const t=e.toString().trim(),s=await Vt(),a=s.find(n=>n.id&&n.id.toString()===t);return a?{success:!0,match:a}:{success:!1,error:"You do not have access to this match. You must be invited to view it."}}catch(t){return console.error("Error searching for match:",t),{success:!1,error:t.message}}}async function Vt(){const e=W();if(!e)return[];try{const i=$e(Le(O,"matches"),Fe("participants","array-contains",e.uid)),t=await He(i),s=[];return t.forEach(a=>{s.push({id:a.id,...a.data()})}),s.sort((a,n)=>{var m,b;const r=a.date||((m=a.createdAt)==null?void 0:m.toDate())||new Date(0);return(n.date||((b=n.createdAt)==null?void 0:b.toDate())||new Date(0))-r}),s}catch(i){return console.error("Error retrieving user matches:",i),[]}}function qt(e){const i=W();if(!i)return()=>{};const t=$e(Le(O,"matches"),Fe("participants","array-contains",i.uid));return ze(t,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),n.sort((r,u)=>{var f,p;const m=r.date||((f=r.createdAt)==null?void 0:f.toDate())||new Date(0);return(u.date||((p=u.createdAt)==null?void 0:p.toDate())||new Date(0))-m}),e(n)},a=>{console.error("Error listening for match updates:",a)})}function Wt(e,i){return ze(U(O,"matches",e.toString()),s=>{s.exists()?i({id:s.id,...s.data()}):i(null)},s=>{console.error("Error listening for match updates:",s)})}async function Ge(e,i){const t=W();if(!t)return{success:!1,error:"Authentication required"};try{console.log(" Searching for user with email:",e);const s=$e(Le(O,"users"),Fe("email","==",e)),a=await He(s);if(a.empty)return console.error(" Bruker ikke funnet:",e),{success:!1,error:"Bruker ikke funnet"};const n=a.docs[0],r=n.id;return console.log(" Bruker funnet:",r,n.data()),console.log(" Sender invitasjon..."),await Ne(U(O,"users",r,"invitations",i.matchId.toString()),{matchId:i.matchId,matchName:i.matchName,invitedBy:(t.displayName||t.email||""),invitedByUid:t.uid,timestamp:new Date().toISOString(),status:"pending"}),console.log(" Invitasjon sendt!"),{success:!0}}catch(s){return console.error(" Send invitation error:",s),{success:!1,error:s.message}}}async function Ke(e){const i=W();if(!i)return[];try{const t=e.toLowerCase().trim();if(t.length===0)return[];console.log(" Searching for users:",t);const s=await He(Le(O,"users")),a=[];return s.forEach(n=>{const r=n.data(),u=`${r.firstName||""} ${r.lastName||""}`.toLowerCase(),m=(r.email||"").toLowerCase();n.id!==i.uid&&(u.includes(t)||m.includes(t))&&a.push({uid:n.id,email:r.email,firstName:r.firstName||"",lastName:r.lastName||"",displayName:`${r.firstName||""} ${r.lastName||""}`.trim()})}),console.log(`Found ${a.length} users`),a}catch(t){return console.error(" Search users error:",t),[]}}async function Jt(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{
console.log("[Jt] Start - matchId:",e,"uid:",i.uid);
// Steg 1: Les match-dokumentet
let matchDoc;
try{matchDoc=await be(U(O,"matches",e.toString()));console.log("[Jt] Steg 1 OK - match lest, exists:",matchDoc.exists());}catch(e1){console.error("[Jt] Steg 1 FEIL - getDoc:",e1.message);return{success:!1,error:"Steg1: "+e1.message};}
if(!matchDoc.exists())return{success:!1,error:"Match could not be found"};
const existingParticipants=matchDoc.data().participants||[];
console.log("[Jt] Eksisterende participants:",existingParticipants);
const newParticipants=existingParticipants.includes(i.uid)?existingParticipants:[...existingParticipants,i.uid];
console.log("[Jt] Ny participants-liste:",newParticipants);
// Steg 2: Oppdater match
try{await de(U(O,"matches",e.toString()),{participants:newParticipants});console.log("[Jt] Steg 2 OK - match oppdatert");}catch(e2){console.error("[Jt] Steg 2 FEIL - updateDoc match:",e2.message);return{success:!1,error:"Steg2: "+e2.message};}
// Steg 3: Marker invitasjonen som akseptert
try{await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"accepted"});console.log("[Jt] Steg 3 OK - invitasjon akseptert");}catch(e3){console.error("[Jt] Steg 3 FEIL - updateDoc invitasjon:",e3.message);return{success:!1,error:"Steg3: "+e3.message};}
return{success:!0}}catch(t){return console.error("[Jt] Uventet feil:",t),{success:!1,error:t.message}}}async function Yt(e){const i=W();if(!i)return{success:!1,error:"Authentication required"};try{return await de(U(O,"users",i.uid,"invitations",e.toString()),{status:"declined"}),{success:!0}}catch(t){return console.error("Decline invitation error:",t),{success:!1,error:t.message}}}function Zt(e){const i=W();if(!i)return()=>{};const t=Le(O,"users",i.uid,"invitations"),s=$e(t,Fe("status","==","pending"));return ze(s,a=>{const n=[];a.forEach(r=>{n.push({id:r.id,...r.data()})}),e(n)})}async function loadReferenceShooters(){try{const e=await He(Le(O,"referenceShooters")),i=[];return e.forEach(t=>{i.push({id:t.id,...t.data()})}),i}catch(e){return console.error("Error loading reference shooters:",e),[]}}function initReferenceEditState(e){refEditState={enabled:!!(e&&e.referenceShootersEnabled),ids:Array.isArray(e&&e.referenceShooterIds)?e.referenceShooterIds.slice():[],overrides:JSON.parse(JSON.stringify(e&&e.referenceOverrides||{}))}}window.toggleRefDiv=function(btn){var gid=btn.getAttribute('data-group');var el=document.getElementById(gid);if(!el)return;el.style.display=el.style.display==='none'?'block':'none';btn.querySelector('.rdiv-arrow').textContent=el.style.display==='block'?'▼':'▶';};function renderReferenceShooterConfig(){const e=o("reference-shooters-config"),i=o("edit-match-reference-enabled");if(!e)return;const t=i?!!i.checked:!!refEditState.enabled;if(refEditState.enabled=t,e.style.display=t?"block":"none",!t){e.innerHTML="";return}let s='<div style="padding:12px;background:var(--bg);border-radius:8px;">';refShooters.length===0?s+='<div style="color:var(--muted);font-size:13px;">No reference shooters loaded.</div>':(function(){const divGroups={};refShooters.forEach(a=>{const div=a.division||'Unknown';if(!divGroups[div])divGroups[div]=[];divGroups[div].push(a);});Object.keys(divGroups).sort().forEach(div=>{const shooters=divGroups[div];const groupId='ref-div-'+div.replace(/\s+/g,'_');const checkedCount=shooters.filter(a=>refEditState.ids.includes(a.id)).length;s+='<div style="margin-bottom:6px;">';s+='<button type="button" onclick="toggleRefDiv(this)" data-group="'+groupId+'" style="width:100%;display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.06);border:none;border-radius:8px;cursor:pointer;color:var(--text);font-size:13px;font-weight:700;">';s+='<span>'+div+' ('+shooters.length+')'+(checkedCount>0?' <span style="color:var(--accent);">'+checkedCount+' selected</span>':'')+'</span>';s+='<span class="rdiv-arrow">&#9654;</span>';s+='</button>';s+='<div id="'+groupId+'" style="display:none;margin-top:4px;">';shooters.forEach(a=>{const n=refEditState.ids.includes(a.id),r=refEditState.overrides[a.id]||{},u=r.drawTime!=null?r.drawTime:a.drawTime,m=r.reloadTime!=null?r.reloadTime:a.reloadTime;s+='<div style="padding:10px 0;border-bottom:1px solid var(--border);">',s+='<label style="display:flex;align-items:center;gap:10px;cursor:pointer;">',s+='<input type="checkbox" '+(n?"checked":"")+' onchange="toggleReferenceShooterChoice(\''+a.id+'\')" style="width:18px;height:18px;">',s+='<span style="font-weight:600;">'+a.name+'</span>',s+='</label>',s+='<div style="font-size:12px;color:var(--muted);margin-top:4px;">'+(a.division||"")+' · '+(a.powerFactor||"")+' · HF S/M/L: '+(a.shortHF||0).toFixed(2)+' / '+(a.mediumHF||0).toFixed(2)+' / '+(a.longHF||0).toFixed(2)+'</div>',n&&(s+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">',s+='<div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Draw</div><input class="field-input" type="number" step="0.01" id="ref-draw-'+a.id+'" value="'+u+'" oninput="updateReferenceShooterOverride(\''+a.id+'\',\'drawTime\',this.value)"></div>',s+='<div><div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Reload</div><input class="field-input" type="number" step="0.01" id="ref-reload-'+a.id+'" value="'+m+'" oninput="updateReferenceShooterOverride(\''+a.id+'\',\'reloadTime\',this.value)"></div>',s+='</div>'),s+='</div>'});s+='</div>';s+='</div>';});})(),e.innerHTML=s}function toggleReferenceShootersEnabled(){const e=o("edit-match-reference-enabled");refEditState.enabled=!!(e&&e.checked),renderReferenceShooterConfig()}function toggleReferenceShooterChoice(e){const i=refEditState.ids.indexOf(e);if(i>=0)refEditState.ids.splice(i,1);else{refEditState.ids.push(e);const t=refShooters.find(s=>s.id===e);t&&!refEditState.overrides[e]&&(refEditState.overrides[e]={drawTime:t.drawTime,reloadTime:t.reloadTime})}renderReferenceShooterConfig()}function updateReferenceShooterOverride(e,i,t){refEditState.overrides[e]||(refEditState.overrides[e]={});const s=parseFloat(t);isNaN(s)||(refEditState.overrides[e][i]=s)}function getActiveReferenceShooters(e){if(!e||!e.referenceShootersEnabled)return[];const i=Array.isArray(e.referenceShooterIds)?e.referenceShooterIds:[],t=e.referenceOverrides||{};return refShooters.filter(s=>i.includes(s.id)).map(s=>{const a=t[s.id]||{};return{...s,drawTime:a.drawTime!=null?a.drawTime:s.drawTime,reloadTime:a.reloadTime!=null?a.reloadTime:s.reloadTime}})}function getReferenceCourseType(e){const i=icStageMaxPts(e);return i<=60?"short":i<=120?"medium":"long"}function projectReferenceShooterForStage(e,i){if(!e||!i)return null;const t=icStageShots(i),s=icStageMaxPts(i),a=getReferenceCourseType(i),n=a==="short"?e.shortHF:a==="medium"?e.mediumHF:e.longHF;if(!n||n<=0||!t)return null;const r=Math.max(0,Math.ceil(t/10)-1),u=a==="short"?"short":a==="medium"?"medium":"long",m=Number(e.drawTime||0),b=Number(e.reloadTime||0),f=Number(e[u+"AP"]??0),p=Number(e[u+"CP"]??0),h=Number(e[u+"DP"]??0),E=Number(e[u+"MP"]??e[u+"MissP"]??0),k=Number(e[u+"NSP"]??0),P=Number(e[u+"PP"]??e[u+"ProcP"]??0),C=i.powerFactor||i.pf||e.powerFactor||e.pf||"minor",L=C==="major"?4:3,M=C==="major"?2:1,D=f+p+h+E+k,_=D>0?(t*(f*5+p*L+h*M-k*10)/100)-t*(P/100)*10:s,K=Math.max(0,_),j=K/n,w=Math.max(0,j-m-r*b),y=t>0?w/t:0;return{shooterId:e.id,name:e.name,courseType:a,shots:t,maxPoints:s,benchmarkHF:n,reloads:r,drawTime:m,reloadTime:b,expectedPoints:K,projectedTotalTime:j,shootingTime:w,avgSplit:y,aPct:f,cPct:p,dPct:h,mPct:E,nsPct:k,pPct:P}}function renderReferenceBenchmarkBlock(e,i,t){ var s=getActiveReferenceShooters(e); if(!i||!s.length)return""; var shots=icStageShots(i); var ct=getReferenceCourseType(i); var a='<div style="margin-top:12px;padding:12px;background:var(--bg);border-radius:8px;border-left:3px solid var(--accent);">'; a+='<div style="font-size:11px;color:var(--muted);margin-bottom:10px;font-weight:700;letter-spacing:0.05em;>'+(dt==="no"?"Reference Shooters":"Reference Shooters")+' &#8212; '+ct.toUpperCase()+' COURSE</div>'; s.forEach(function(n){ var r=projectReferenceShooterForStage(n,i); if(!r)return; var userHF=t&&t.estHF!=null?t.estHF:null; var userTime=t&&t.expTime!=null?t.expTime:null; var deltaHF=userHF!=null?r.benchmarkHF-userHF:null; var deltaTime=userTime!=null?userTime-r.projectedTotalTime:null; var rfAP=Number(n[ct+"AP"]||0); var rfCP=Number(n[ct+"CP"]||0); var rfDP=Number(n[ct+"DP"]||0); var estA=shots>0&&rfAP?Math.round(shots*rfAP/100):null; var estC=shots>0&&rfCP?Math.round(shots*rfCP/100):null; var estD=shots>0&&rfDP?Math.round(shots*rfDP/100):null; var bt=r.projectedTotalTime>0?r.projectedTotalTime:1; var effCA=shots>0?((5-4)/bt).toFixed(2):null; var effDA=shots>0?((5-2)/bt).toFixed(2):null; var effMiss=shots>0?(10/bt).toFixed(2):null; var ifLikeHF=r.benchmarkHF; var vsUser=userHF!=null?(ifLikeHF-userHF).toFixed(2):null; a+='<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:10px;">'; a+='<div style="font-size:14px;font-weight:800;margin-bottom:10px;">'+n.name+'</div>'; a+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-size:12px;margin-bottom:10px;">'; a+='<div><div style="color:var(--muted);margin-bottom:2px;">HF</div><div style="font-weight:700;color:var(--accent);">'+r.benchmarkHF.toFixed(2)+'</div></div>'; a+='<div><div style="color:var(--muted);margin-bottom:2px;>'+(dt==="no"?"Est. Time":"Est. Time")+'</div><div style="font-weight:700;">'+r.projectedTotalTime.toFixed(2)+'s</div></div>'; a+='<div><div style="color:var(--muted);margin-bottom:2px;>'+(dt==="no"?"Avg/Shot":"Avg/Shot")+'</div><div style="font-weight:700;">'+r.avgSplit.toFixed(3)+'s</div></div>'; a+='<div><div style="color:var(--muted);margin-bottom:2px;">Reloads</div><div style="font-weight:700;">'+r.reloads+'</div></div>'; a+='</div>'; if(estA!=null||estC!=null||estD!=null){ a+='<div style="padding:8px;background:rgba(255,255,255,0.04);border-radius:6px;margin-bottom:10px;">'; a+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;">EST. HIT DISTRIBUTION ('+shots+' shots)</div>'; a+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;">'; a+='<div><div style="color:var(--muted);font-size:11px;">A%</div><div style="font-weight:700;color:var(--green);">'+(estA!=null?estA+' ('+rfAP+'%)':'—')+'</div></div>'; a+='<div><div style="color:var(--muted);font-size:11px;">C%</div><div style="font-weight:700;">'+(estC!=null?estC+' ('+rfCP+'%)':'—')+'</div></div>'; a+='<div><div style="color:var(--muted);font-size:11px;">D%</div><div style="font-weight:700;">'+(estD!=null?estD+' ('+rfDP+'%)':'—')+'</div></div>'; a+='</div></div>'; } if(effCA!=null){ a+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;>'+(dt==="no"?"Effekt":"Effect")+': C&#8594;A: +'+effCA+' HF | D&#8594;A: +'+effDA+' HF | '+(dt==="no"?"No Misses":"No Misses")+': +'+effMiss+' HF</div>'; } if(deltaHF!=null||deltaTime!=null){ var dhCol=deltaHF!=null&&deltaHF<0?'var(--green)':(deltaHF>0?'var(--red)':'var(--text)'); var dtCol=deltaTime!=null&&deltaTime>0?'var(--green)':(deltaTime<0?'var(--red)':'var(--text)'); a+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12px;margin-bottom:8px;">'; a+='<div><div style="color:var(--muted);margin-bottom:2px;>'+(dt==="no"?"HF Difference vs. You":"HF Difference vs. You")+'</div><div style="font-weight:700;color:'+dhCol+';">'+(deltaHF!=null?(deltaHF>0?'+':'')+deltaHF.toFixed(2):'—')+'</div></div>'; a+='<div><div style="color:var(--muted);margin-bottom:2px;>'+(dt==="no"?"Time Difference vs. You":"Time Difference vs. You")+'</div><div style="font-weight:700;color:'+dtCol+';">'+(deltaTime!=null?(deltaTime>0?'':'-')+Math.abs(deltaTime).toFixed(2)+'s':'—')+'</div></div>'; a+='</div>'; } if(vsUser!=null){ var vsColor=parseFloat(vsUser)<0?'var(--red)':'var(--green)'; a+='<div style="font-size:12px;color:'+vsColor+';font-weight:600;>'+(dt==="no"?"Hvis som":"Similar Performance")+' '+n.name+': est. HF '+ifLikeHF.toFixed(2)+' ('+vsUser+' vs din '+userHF.toFixed(2)+')</div>'; } a+='</div>'; }); a+='</div>'; return a; }function Qt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xt={exports:{}};(function(e){var i=function(t){var s=Object.prototype,a=s.hasOwnProperty,n=Object.defineProperty||function(c,l,v){c[l]=v.value},r,u=typeof Symbol=="function"?Symbol:{},m=u.iterator||"@@iterator",b=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(c,l,v){return Object.defineProperty(c,l,{value:v,enumerable:!0,configurable:!0,writable:!0}),c[l]}try{p({},"")}catch{p=function(l,v,S){return l[v]=S}}function h(c,l,v,S){var x=l&&l.prototype instanceof D?l:D,N=Object.create(x.prototype),z=new ae(S||[]);return n(N,"_invoke",{value:ce(c,v,z)}),N}t.wrap=h;function E(c,l,v){try{return{type:"normal",arg:c.call(l,v)}}catch(S){return{type:"throw",arg:S}}}var k="suspendedStart",P="suspendedYield",C="executing",L="completed",M={};function D(){}function B(){}function _(){}var K={};p(K,m,function(){return this});var j=Object.getPrototypeOf,w=j&&j(j(T([])));w&&w!==s&&a.call(w,m)&&(K=w);var y=_.prototype=D.prototype=Object.create(K);B.prototype=_,n(y,"constructor",{value:_,configurable:!0}),n(_,"constructor",{value:B,configurable:!0}),B.displayName=p(_,f,"GeneratorFunction");function H(c){["next","throw","return"].forEach(function(l){p(c,l,function(v){return this._invoke(l,v)})})}t.isGeneratorFunction=function(c){var l=typeof c=="function"&&c.constructor;return l?l===B||(l.displayName||l.name)==="GeneratorFunction":!1},t.mark=function(c){return Object.setPrototypeOf?Object.setPrototypeOf(c,_):(c.__proto__=_,p(c,f,"GeneratorFunction")),c.prototype=Object.create(y),c},t.awrap=function(c){return{__await:c}};function Y(c,l){function v(N,z,V,J){var q=E(c[N],c,z);if(q.type==="throw")J(q.arg);else{var Be=q.arg,we=Be.value;return we&&typeof we=="object"&&a.call(we,"__await")?l.resolve(we.__await).then(function(ne){v("next",ne,V,J)},function(ne){v("throw",ne,V,J)}):l.resolve(we).then(function(ne){Be.value=ne,V(Be)},function(ne){return v("throw",ne,V,J)})}}var S;function x(N,z){function V(){return new l(function(J,q){v(N,z,J,q)})}return S=S?S.then(V,V):V()}n(this,"_invoke",{value:x})}H(Y.prototype),p(Y.prototype,b,function(){return this}),t.AsyncIterator=Y,t.async=function(c,l,v,S,x){x===void 0&&(x=Promise);var N=new Y(h(c,l,v,S),x);return t.isGeneratorFunction(l)?N:N.next().then(function(z){return z.done?z.value:N.next()})};function ce(c,l,v){var S=k;return function(N,z){if(S===C)throw new Error("The generator is already running");if(S===L){if(N==="throw")throw z;return I()}for(v.method=N,v.arg=z;;){var V=v.delegate;if(V){var J=X(V,v);if(J){if(J===M)continue;return J}}if(v.method==="next")v.sent=v._sent=v.arg;else if(v.method==="throw"){if(S===k)throw S=L,v.arg;v.dispatchException(v.arg)}else v.method==="return"&&v.abrupt("return",v.arg);S=C;var q=E(c,l,v);if(q.type==="normal"){if(S=v.done?L:P,q.arg===M)continue;return{value:q.arg,done:v.done}}else q.type==="throw"&&(S=L,v.method="throw",v.arg=q.arg)}}}function X(c,l){var v=l.method,S=c.iterator[v];if(S===r)return l.delegate=null,v==="throw"&&c.iterator.return&&(l.method="return",l.arg=r,X(c,l),l.method==="throw")||v!=="return"&&(l.method="throw",l.arg=new TypeError("The iterator does not provide a '"+v+"' method")),M;var x=E(S,c.iterator,l.arg);if(x.type==="throw")return l.method="throw",l.arg=x.arg,l.delegate=null,M;var N=x.arg;if(!N)return l.method="throw",l.arg=new TypeError("iterator result is not an object"),l.delegate=null,M;if(N.done)l[c.resultName]=N.value,l.next=c.nextLoc,l.method!=="return"&&(l.method="next",l.arg=r);else return N;return l.delegate=null,M}H(y),p(y,f,"Generator"),p(y,m,function(){return this}),p(y,"toString",function(){return"[object Generator]"});function pe(c){var l={tryLoc:c[0]};1 in c&&(l.catchLoc=c[1]),2 in c&&(l.finallyLoc=c[2],l.afterLoc=c[3]),this.tryEntries.push(l)}function se(c){var l=c.completion||{};l.type="normal",delete l.arg,c.completion=l}function ae(c){this.tryEntries=[{tryLoc:"root"}],c.forEach(pe,this),this.reset(!0)}t.keys=function(c){var l=Object(c),v=[];for(var S in l)v.push(S);return v.reverse(),function x(){for(;v.length;){var N=v.pop();if(N in l)return x.value=N,x.done=!1,x}return x.done=!0,x}};function T(c){if(c){var l=c[m];if(l)return l.call(c);if(typeof c.next=="function")return c;if(!isNaN(c.length)){var v=-1,S=function x(){for(;++v<c.length;)if(a.call(c,v))return x.value=c[v],x.done=!1,x;return x.value=r,x.done=!0,x};return S.next=S}}return{next:I}}t.values=T;function I(){return{value:r,done:!0}}return ae.prototype={constructor:ae,reset:function(c){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(se),!c)for(var l in this)l.charAt(0)==="t"&&a.call(this,l)&&!isNaN(+l.slice(1))&&(this[l]=r)},stop:function(){this.done=!0;var c=this.tryEntries[0],l=c.completion;if(l.type==="throw")throw l.arg;return this.rval},dispatchException:function(c){if(this.done)throw c;var l=this;function v(J,q){return N.type="throw",N.arg=c,l.next=J,q&&(l.method="next",l.arg=r),!!q}for(var S=this.tryEntries.length-1;S>=0;--S){var x=this.tryEntries[S],N=x.completion;if(x.tryLoc==="root")return v("end");if(x.tryLoc<=this.prev){var z=a.call(x,"catchLoc"),V=a.call(x,"finallyLoc");if(z&&V){if(this.prev<x.catchLoc)return v(x.catchLoc,!0);if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else if(z){if(this.prev<x.catchLoc)return v(x.catchLoc,!0)}else if(V){if(this.prev<x.finallyLoc)return v(x.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(c,l){for(var v=this.tryEntries.length-1;v>=0;--v){var S=this.tryEntries[v];if(S.tryLoc<=this.prev&&a.call(S,"finallyLoc")&&this.prev<S.finallyLoc){var x=S;break}}x&&(c==="break"||c==="continue")&&x.tryLoc<=l&&l<=x.finallyLoc&&(x=null);var N=x?x.completion:{};return N.type=c,N.arg=l,x?(this.method="next",this.next=x.finallyLoc,M):this.complete(N)},complete:function(c,l){if(c.type==="throw")throw c.arg;return c.type==="break"||c.type==="continue"?this.next=c.arg:c.type==="return"?(this.rval=this.arg=c.arg,this.method="return",this.next="end"):c.type==="normal"&&l&&(this.next=l),M},finish:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.finallyLoc===c)return this.complete(v.completion,v.afterLoc),se(v),M}},catch:function(c){for(var l=this.tryEntries.length-1;l>=0;--l){var v=this.tryEntries[l];if(v.tryLoc===c){var S=v.completion;if(S.type==="throw"){var x=S.arg;se(v)}return x}}throw new Error("illegal catch attempt")},delegateYield:function(c,l,v){return this.delegate={iterator:T(c),resultName:l,nextLoc:v},this.method==="next"&&(this.arg=r),M}},t}(e.exports);try{regeneratorRuntime=i}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}})(Xt);var Ve=(e,i)=>`${e}-${i}-${Math.random().toString(16).slice(3,8)}`;const ei=Ve;let Ze=0;var nt=({id:e,action:i,payload:t={}})=>{let s=e;return typeof s>"u"&&(s=ei("Job",Ze),Ze+=1),{id:s,action:i,payload:t}},ye={};let qe=!1;ye.logging=qe;ye.setLogging=e=>{qe=e};ye.log=(...e)=>qe?console.log.apply(void 0,e):null;const ti=nt,{log:Te}=ye,ii=Ve;let Qe=0;var si=()=>{const e=ii("Scheduler",Qe),i={},t={};let s=[];Qe+=1;const a=()=>s.length,n=()=>Object.keys(i).length,r=()=>{if(s.length!==0){const p=Object.keys(i);for(let h=0;h<p.length;h+=1)if(typeof t[p[h]]>"u"){s[0](i[p[h]]);break}}},u=(p,h)=>new Promise((E,k)=>{const P=ti({action:p,payload:h});s.push(async C=>{s.shift(),t[C.id]=P;try{E(await C[p].apply(void 0,[...h,P.id]))}catch(L){k(L)}finally{delete t[C.id],r()}}),Te(`[${e}]: Add ${P.id} to JobQueue`),Te(`[${e}]: JobQueue length=${s.length}`),r()});return{addWorker:p=>(i[p.id]=p,Te(`[${e}]: Add ${p.id}`),Te(`[${e}]: Number of workers=${n()}`),r(),p.id),addJob:async(p,...h)=>{if(n()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return u(p,h)},terminate:async()=>{Object.keys(i).forEach(async p=>{await i[p].terminate()}),s=[]},getQueueLen:a,getNumWorkers:n}};function ai(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ni=e=>{const i={};return typeof WorkerGlobalScope<"u"?i.type="webworker":typeof document=="object"?i.type="browser":typeof process=="object"&&typeof ai=="function"&&(i.type="node"),typeof e>"u"?i:i[e]};const ri=ni("type")==="browser",oi=ri?e=>new URL(e,window.location.href).href:e=>e;var li=e=>{const i={...e};return["corePath","workerPath","langPath"].forEach(t=>{e[t]&&(i[t]=oi(i[t]))}),i},rt={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const di="7.0.0",ci={version:di};var pi={workerBlobURL:!0,logger:()=>{}};const ui=ci.version,gi=pi;var vi={...gi,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${ui}/dist/worker.min.js`},mi=({workerPath:e,workerBlobURL:i})=>{let t;if(Blob&&URL&&i){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});t=new Worker(URL.createObjectURL(s))}else t=new Worker(e);return t},hi=e=>{e.terminate()},fi=(e,i)=>{e.onmessage=({data:t})=>{i(t)}},bi=async(e,i)=>{e.postMessage(i)};const Oe=e=>new Promise((i,t)=>{const s=new FileReader;s.onload=()=>{i(s.result)},s.onerror=({target:{error:{code:a}}})=>{t(Error(`File could not be read! Code=${a}`))},s.readAsArrayBuffer(e)}),Ue=async e=>{let i=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?i=atob(e.split(",")[1]).split("").map(t=>t.charCodeAt(0)):i=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(i=await Ue(e.src)),e.tagName==="VIDEO"&&(i=await Ue(e.poster)),e.tagName==="CANVAS"&&await new Promise(t=>{e.toBlob(async s=>{i=await Oe(s),t()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const t=await e.convertToBlob();i=await Oe(t)}else(e instanceof File||e instanceof Blob)&&(i=await Oe(e));return new Uint8Array(i)};var yi=Ue;const wi=vi,ki=mi,xi=hi,Si=fi,Li=bi,Pi=yi;var Ei={defaultOptions:wi,spawnWorker:ki,terminateWorker:xi,onMessage:Si,send:Li,loadImage:Pi};const Ti=li,Z=nt,{log:Xe}=ye,Mi=Ve,re=rt,{defaultOptions:Ii,spawnWorker:Ci,terminateWorker:_i,onMessage:Ni,loadImage:et,send:$i}=Ei;let tt=0;var ot=async(e="eng",i=re.LSTM_ONLY,t={},s={})=>{const a=Mi("Worker",tt),{logger:n,errorHandler:r,...u}=Ti({...Ii,...t}),m={},b=typeof e=="string"?e.split("+"):e;let f=i,p=s;const h=[re.DEFAULT,re.LSTM_ONLY].includes(i)&&!u.legacyCore;let E,k;const P=new Promise((T,I)=>{k=T,E=I}),C=T=>{E(T.message)};let L=Ci(u);L.onerror=C,tt+=1;const M=({id:T,action:I,payload:c})=>new Promise((l,v)=>{Xe(`[${a}]: Start ${T}, action=${I}`);const S=`${I}-${T}`;m[S]={resolve:l,reject:v},$i(L,{workerId:a,jobId:T,action:I,payload:c})}),D=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),B=T=>M(Z({id:T,action:"load",payload:{options:{lstmOnly:h,corePath:u.corePath,logging:u.logging}}})),_=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:"writeFile",args:[T,I]}})),K=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"readFile",args:[T,{encoding:"utf8"}]}})),j=(T,I)=>M(Z({id:I,action:"FS",payload:{method:"unlink",args:[T]}})),w=(T,I,c)=>M(Z({id:c,action:"FS",payload:{method:T,args:I}})),y=(T,I)=>M(Z({id:I,action:"loadLanguage",payload:{langs:T,options:{langPath:u.langPath,dataPath:u.dataPath,cachePath:u.cachePath,cacheMethod:u.cacheMethod,gzip:u.gzip,lstmOnly:[re.DEFAULT,re.LSTM_ONLY].includes(f)&&!u.legacyLang}}})),H=(T,I,c,l)=>M(Z({id:l,action:"initialize",payload:{langs:T,oem:I,config:c}})),Y=(T="eng",I,c,l)=>{if(h&&[re.TESSERACT_ONLY,re.TESSERACT_LSTM_COMBINED].includes(I))throw Error("Legacy model requested but code missing.");const v=I||f;f=v;const S=c||p;p=S;const N=(typeof T=="string"?T.split("+"):T).filter(z=>!b.includes(z));return b.push(...N),N.length>0?y(N,l).then(()=>H(T,v,S,l)):H(T,v,S,l)},ce=(T={},I)=>M(Z({id:I,action:"setParameters",payload:{params:T}})),X=async(T,I={},c={text:!0},l)=>M(Z({id:l,action:"recognize",payload:{image:await et(T),options:I,output:c}})),pe=async(T,I)=>{if(h)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return M(Z({id:I,action:"detect",payload:{image:await et(T)}}))},se=async()=>(L!==null&&(_i(L),L=null),Promise.resolve());Ni(L,({workerId:T,jobId:I,status:c,action:l,data:v})=>{const S=`${l}-${I}`;if(c==="resolve")Xe(`[${T}]: Complete ${I}`),m[S].resolve({jobId:I,data:v}),delete m[S];else if(c==="reject")if(m[S].reject(v),delete m[S],l==="load"&&E(v),r)r(v);else throw Error(v);else c==="progress"&&n({...v,userJobId:I})});const ae={id:a,worker:L,load:D,writeText:_,readText:K,removeFile:j,FS:w,reinitialize:Y,setParameters:ce,recognize:X,detect:pe,terminate:se};return B().then(()=>y(e)).then(()=>H(e,i,s)).then(()=>k(ae)).catch(()=>{}),P};const lt=ot,Fi=async(e,i,t)=>{const s=await lt(i,1,t);return s.recognize(e).finally(async()=>{await s.terminate()})},Ai=async(e,i)=>{const t=await lt("osd",0,i);return t.detect(e).finally(async()=>{await t.terminate()})};var Ri={recognize:Fi,detect:Ai},Di={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Bi={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const Oi=si,ji=ot,Ui=Ri,Hi=Di,zi=rt,Gi=Bi,{setLogging:Ki}=ye;var Vi={languages:Hi,OEM:zi,PSM:Gi,createScheduler:Oi,createWorker:ji,setLogging:Ki,...Ui};const qi=Qt(Vi);let g,R=null,ue="all",$=[],ke=null,xe=null,refShooters=[],refEditState={enabled:!1,ids:[],overrides:{}},liveShowAll=!1;const Wi={no:{tracker:"DYNAMICS",tagline:"Performance. Precision. Progress.",home:"Hjem",matches:"Matcher",prognosis:"Prognose",results:"Live",profile:"Profil",leading:"LEDER",behind:"BAK",active:"Aktiv",no_match_selected:"No match selected",new_match:"New match",match_name:"Matchnavn",location:"Sted",date:"Dato",type:"Type",planned_stages:"Antall stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Etternavn",club:"Klubb",region:"Region",category:"Kategori",division:"Divisjon",power_factor:"Power Factor",draw_seconds:"Trekk (s)",reload_seconds:"Reload (s)",save_profile:"Lagre profil",logout:"Sign Out",matches_count:"Matcher",stages_count:"Stages",avg_hf:"Avg. HF",a_rate:"A-andel",shots:"Skudd",targets:"Skiver",steel:"Stål",move_seconds:"Beveg. (s)",calculate:"Beregn",add_shooter:"Legg til skytter",add_result:"Legg til resultat",save_shooter:"Lagre skytter",save_result:"Save Result",match_types_trening:"Trening",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Skriv inn match-ID (f.eks. 12345)",select_power_factor:"Velg Power Factor",stages_added_later:"Stages legges til senere",edit_match:"Rediger match",create_stage:"Opprett stage",edit_stage:"Edit Stage",stage_number:"Nummer",stage_name:"Navn",paper_targets:"Paper targets",poppers:"Poppers",plates:"Plates",no_shoots:"No-Shoots",bonus_paper_targets:"Bonus Paper targets",included:"Included",invite_user:"Invite user",invite:"Invite",search_user_email:"Search for user email",invitation_sent:"Invitation sent",invitations:"Invitations",accept:"Accept",decline:"Decline",invited_to_match:"You have been invited to",no_invitations:"No pending invitations",invite_user:"Inviter bruker",invite:"Inviter",search_user_email:"Søk etter brukers e-post",invitation_sent:"Invitasjon sendt",invitations:"Invitasjoner",accept:"Aksepter",decline:"Avvis",invited_to_match:"You have been invited to",no_invitations:"No Pending Invitations",select_match:"Select a Match",select_match_first:"Select a match first",no_shooters:"Ingen skyttere",no_shooters_in_match:"No shooters in the match. Add shooters first.",add_shooters_hint:"Trykk + for å legge til skyttere",no_results_yet:"No results yet",upload_or_manual:"Upload a result or enter it manually",live_when_results:"Live view is available once stages have results",common_stages_only:"Kun felles stages",show_all_stages:"Vis alle stages",based_on:"Basert på",shooter_col:"Shooter",no_matches_found:"No Matches Found",edit_match:"Rediger match",add_stage:"Add Stage",invite_user:"Inviter bruker",delete_match:"Delete Match",edit:"Edit",stage_btn:"+ Stage",invite:"Inviter",stages_title:"Stages",stage_results:"Stage resultater",results_ref_shooters:"Resultater referanseskyttere",mine_resultater:"Mine resultater",matchutvikling:"Matchutvikling",pct_of_match:"% of match",max_pts:"maks",col_stg:"STG",col_tid:"TIME",col_sum:"SUM",show_detailed:"Vis detaljert analyse",show_training:"Vis treningsanalyse",no_active_match:"No active match selected",cumulative_a:"KUMULATIV A% I MATCHEN SÅ LANGT",won_stage:"You won the stage — great shooting!",hold_rhythm:"Keep the rhythm. Trust your baseline.",below_prognosis:"Slightly below projection — still recoverable.",all_a_hf:"If you had shot all A at the same time, HF would have been",to_win_stage:"To win the stage you would have needed to shoot",tip_low_a:"A% below 75% average — hit quality is primary focus",tip_hold_a:"Hold A% over 88% på alle stages",tip_consistent_a:"Konsistent høy A%",tip_low_miss:"Low miss rate — good shot control",tip_variation:"Stor variasjon i A% mellom matcher",tip_hf_increase:"HF has increased by",tip_no_miss:"No Misses",tip_first_positive:"since the first match — positive development.",tip_first_check:"since the first match — check what changed.",tip_drill:"per stage) — practice controlled trigger press",tip_consistency:"pp) — consistency is the key",tip_visual:"Visualization between stages",tip_a_pct_on:"A% at",tip_across_matches:"%) across matches",language_title:"Language",personal_info:"Personal Information",season_stats:"Season Statistics",shooter_data:"Shooter Data (Avg.)",avg_hf:"Avg. HF",stage_win:"Stage-seier",prognose:"Prognose",team_standings:"Lagstandings",team_col:"TEAM",mixed_divisions:"Blandede divisjoner",mark_dq:"Marker DQ",undo_dq:"Angre DQ",edit_btn:"Edit",delete_btn:"Slett",training:"Trening",match_event:"Stevne",stagetype_analyse:"STAGETYPE-ANALYSE",ref_prognose_header:"REFERENCE PROGNOSIS",ref_hf:"Ref HF",forv_tid:"Est. Time",snitt_skudd:"Avg/Shot",forv_a:"Est. A",forv_c:"Est. C",forv_d:"Est. D",snitt_hf:"Avg HF",match_chip_hint:"Trykk på match-chip over eller gå til Matcher-fanen",shooters_lbl:"Skyttere",edit_match_btn:"Rediger match",invite_user_btn:"Inviter bruker",pct_of_match_lbl:"av match",shot_badge:"SKUTT",not_shot_badge:"IKKE SKUTT",name_col:"NAVN",time_per_shot:"t/skudd",hits_lbl:"Treff",no_teams:"No teams yet",create_team_hint:"Opprett et lag for å se standings",create_new_team:"+ Create New Team",show_all_stages_btn:"Vis alle stages",common_stages_btn:"Kun felles stages",common_stages_of:"felles stages",shooter_default:"Shooter",effekt_lbl:"Effekt",hvis_som:"Hvis som",forv_tid_lbl:"Est. Time",forv_a_lbl:"Est. A",forv_c_lbl:"Est. C",forv_d_lbl:"Est. D",snitt_skudd_lbl:"Avg/Shot",ingen_miss:"No Misses",delta_hf:"HF Difference vs. You",delta_tid:"Time Difference vs. You",ref_shooters_hdr:"Reference Shooters",ref_prognose_hdr:"REFERENCE PROGNOSIS",create_team_btn:"Create team",shooting_badge:"SKUTT",coach_baseline:"Keep the rhythm. Trust your baseline.",coach_treff_sekundaer:"Hit Patternt kan forbedres. Gi siktet litt mer tid — tempo er sekundært.",coach_fokus_treff:"Fokus på sight picture nå. Du har tempo — bruk litt av det på presisjon.",coach_loft_a:"Raise your A-rate — that's where the points are. Keep the rhythm, but let the sight settle.",coach_koster:"A% is costing you more than you think. Slow your approach to each target.",coach_ikke_jag:"Don't chase tempo at the expense of hit quality. You can improve next stage.",coach_sikt:"Sight control next stage. Give each target the time it needs.",coach_svikter:"Hit Patternt svikter litt. Prioriter A-treff fremfor split-tid.",coach_solid:"Solid and consistent. %A at s/shot is right where it should be.",coach_rytmen:"Rytmen sitter. Baseline er %A og s/skudd — kjør det samme.",coach_under:"Du ligger bak. Neste stage blir viktig.",coach_neste:"Neste stage",shots_lbl:"skudd",reload_lbl:"reload",reloads_lbl:"reloads",next_stage_lbl:"Neste stage"},en:{tracker:"INSIGHT",tagline:"Performance. Precision. Progress.",home:"Home",matches:"Matches",prognosis:"Prognosis",results:"Live",profile:"Profile",leading:"LEADING",behind:"BEHIND",active:"Active",no_match_selected:"No match selected",new_match:"New Match",match_name:"Match Name",location:"Location",date:"Date",type:"Type",planned_stages:"Number of stages",save:"Save",cancel:"Cancel",delete:"Delete",edit_profile:"Edit Profile",first_name:"First Name",last_name:"Last Name",club:"Club",region:"Region",category:"Category",division:"Division",power_factor:"Power Factor",draw_seconds:"Draw (s)",reload_seconds:"Reload (s)",save_profile:"Save Profile",logout:"Log Out",matches_count:"Matches",stages_count:"Stages",avg_hf:"Avg HF",a_rate:"A-rate",shots:"Shots",targets:"Targets",steel:"Steel",move_seconds:"Move (s)",calculate:"Calculate",add_shooter:"Add Shooter",add_result:"Add Result",save_shooter:"Save Shooter",save_result:"Save Result",match_types_trening:"Training",match_types_level1:"Level 1",match_types_level2:"Level 2",match_types_level3:"Level 3",match_types_level4:"Level 4",match_types_level5:"Level 5",allow_search:"Allow others to find this match",search_match_placeholder:"Enter a Match ID (e.g., 12345)",select_power_factor:"Select Power Factor",stages_added_later:"Stages can be added later",select_match:"Select a match",match_chip_hint:"Tap the match chip above or go to Matches",select_match_first:"Select a match first",no_shooters:"No shooters",no_shooters_in_match:"No shooters in the match. Add shooters first.",add_shooters_hint:"Tap + to add shooters",no_results_yet:"No results yet",upload_or_manual:"Upload a result or enter it manually",live_when_results:"Live view is available once stages have results",common_stages_only:"Common Stages Only",show_all_stages:"Show All Stages",based_on:"Based on",shooter_col:"Shooter",no_matches_found:"No Matches Found",edit_match:"Edit match",add_stage:"Add stage",invite_user:"Invite user",delete_match:"DELETE MATCH",edit:"Edit",stage_btn:"+ Stage",invite:"Invite",stages_title:"Stages",stage_results:"Stage results",results_ref_shooters:"Results reference shooters",mine_resultater:"My results",matchutvikling:"Match progress",pct_of_match:"% of match",max_pts:"max",col_stg:"STG",col_tid:"TIME",col_sum:"SUM",show_detailed:"Show Detailed Analysis",show_training:"Show Training Analysis",no_active_match:"No active match selected",cumulative_a:"CUMULATIVE A% IN MATCH SO FAR",won_stage:"You won the stage — great shooting!",hold_rhythm:"Keep the rhythm. Trust your baseline.",below_prognosis:"Slightly below projection — still recoverable.",all_a_hf:"If you had shot all A at the same time, HF would have been",to_win_stage:"To win the stage you would have needed to shoot",tip_low_a:"A% below 75% average — hit quality is primary focus",tip_hold_a:"Keep A% above 88% on all stages",tip_consistent_a:"Consistent high A%",tip_low_miss:"Low miss rate — good shot control",tip_variation:"Large variation in A% between matches",tip_hf_increase:"HF has increased by",tip_no_miss:"No Misses",tip_first_positive:"since first match — positive development.",tip_first_check:"since first match — check what changed.",tip_drill:"per stage) — practice controlled trigger press",tip_consistency:"pp) — consistency is the key",tip_visual:"Visualization between stages",tip_a_pct_on:"A% on",tip_across_matches:"%) across matches",language_title:"Language",personal_info:"Personal Information",season_stats:"Season Statistics",shooter_data:"Shooter Data (Avg.)",avg_hf:"Avg HF",stage_win:"Stage win",prognose:"Prognosis",team_standings:"Team Standings",team_col:"TEAM",mixed_divisions:"Mixed Divisions",mark_dq:"Mark as DQ",undo_dq:"Undo DQ",edit_btn:"Edit",delete_btn:"Delete",training:"Training",match_event:"Match",stagetype_analyse:"STAGE TYPE ANALYSIS",ref_prognose_header:"REFERENCE PROGNOSIS",ref_hf:"Ref HF",forv_tid:"Est. Time",snitt_skudd:"Avg/Shot",forv_a:"Est. A",forv_c:"Est. C",forv_d:"Est. D",snitt_hf:"Avg HF",accept:"Accept",bonus_paper_targets:"Bonus Paper targets",create_stage:"Create stage",decline:"Decline",edit_stage:"Edit stage",invitations:"Invitations",invited_to_match:"You have been invited to",no_invitations:"No pending invitations",no_shoots:"No-Shoots",paper_targets:"Paper targets",plates:"Plates",poppers:"Poppers",stage_name:"Name",stage_number:"Number",shooters_lbl:"Shooters",edit_match_btn:"Edit match",invite_user_btn:"Invite user",pct_of_match_lbl:"of match",shot_badge:"SHOT",not_shot_badge:"NOT SHOT",name_col:"NAME",time_per_shot:"time/shot",hits_lbl:"Hits",no_teams:"No teams yet",create_team_hint:"Create a team to see standings",create_new_team:"+ Create New Team",show_all_stages_btn:"Show All Stages",common_stages_btn:"Common Stages Only",common_stages_of:"common stages",shooter_default:"Shooter",effekt_lbl:"Effect",hvis_som:"Similar Performance",forv_tid_lbl:"Est. Time",forv_a_lbl:"Est. A",forv_c_lbl:"Est. C",forv_d_lbl:"Est. D",snitt_skudd_lbl:"Avg/Shot",ingen_miss:"No Misses",delta_hf:"HF Difference vs. You",delta_tid:"Time Difference vs. You",ref_shooters_hdr:"Reference Shooters",ref_prognose_hdr:"REFERENCE PROGNOSIS",create_team_btn:"Create team",shooting_badge:"SHOT",coach_baseline:"Keep the rhythm. Trust your baseline.",coach_treff_sekundaer:"Hit quality can improve. Give the sight a bit more time — speed is secondary.",coach_fokus_treff:"Focus on hit quality now. You have the speed — use some of it for precision.",coach_loft_a:"Raise your A% — that's where the points are. Keep the rhythm, but let the sight settle.",coach_koster:"A% is costing you more than you think. Slow your entry to each target.",coach_ikke_jag:"Don't chase speed at the expense of hits. You can improve next stage.",coach_sikt:"Sight control next stage. Give each target the time it needs.",coach_svikter:"Hit quality is slipping. Prioritize A-hits over split time.",coach_solid:"Solid and consistent. %A and s/shot is right where it should be.",coach_rytmen:"Rhythm is locked in. Baseline is %A and s/shot — run it the same.",coach_under:"You're behind. Next stage is important.",coach_neste:"Next stage",shots_lbl:"shots",reload_lbl:"reload",reloads_lbl:"reloads",next_stage_lbl:"Next stage"}};let dt=localStorage.getItem("appLang")||"en";function d(e){return Wi[dt][e]||e}const it={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}},Ji={Standard:{minor:20,major:17},Open:{minor:28,major:28},Production:{minor:15,major:15},"Production Optics":{minor:15,major:15},"Production Optics Carbine":{minor:15,major:15},Classic:{minor:10,major:8},Revolver:{minor:8,major:6},"Pistol Caliber Carbine":{minor:30,major:30},"Pistol Caliber Carbine Optics":{minor:30,major:30},Optics:{minor:20,major:17}},Yi=["Standard","Open","Production","Production Optics","Production Optics Carbine","Classic","Revolver","Pistol Caliber Carbine","Pistol Caliber Carbine Optics","Optics"],Zi={Standard:["minor","major"],Open:["minor","major"],Production:["minor"],"Production Optics":["minor"],"Production Optics Carbine":["minor"],Classic:["minor","major"],Revolver:["minor","major"],"Pistol Caliber Carbine":["minor","major"],"Pistol Caliber Carbine Optics":["minor","major"],Optics:["minor"]},Qi=["—","Junior","Senior","Super Senior","Lady","Lady Junior","Lady Senior"],Xi=["🇦🇫 Afghanistan","🇦🇱 Albania","🇩🇿 Algerie","🇦🇷 Argentina","🇦🇺 Australia","🇧🇪 Belgia","🇧🇷 Brasil","🇧🇬 Bulgaria","🇨🇦 Canada","🇨🇱 Chile","🇨🇴 Colombia","🇭🇷 Croatia","🇩🇰 Danmark","🇪🇬 Egypt","🇫🇮 Finland","🇫🇷 Frankrike","🇬🇷 Hellas","🇮🇳 India","🇮🇩 Indonesia","🇮🇪 Irland","🇮🇸 Island","🇮🇱 Israel","🇮🇹 Italia","🇯🇵 Japan","🇨🇳 Kina","🇱🇻 Latvia","🇱🇹 Litauen","🇱🇺 Luxembourg","🇲🇾 Malaysia","🇲🇽 Mexico","🇳🇱 Nederland","🇳🇿 New Zealand","🇳🇴 Norge","🇴🇲 Oman","🇵🇰 Pakistan","🇵🇭 Filippinene","🇵🇱 Polen","🇵🇹 Portugal","🇷🇴 Romania","🇷🇺 Russland","🇸🇦 Saudi-Arabia","🇷🇸 Serbia","🇸🇬 Singapore","🇸🇰 Slovakia","🇸🇮 Slovenia","🇰🇷 Sorskorea","🇪🇸 Spania","🇬🇧 Storbritannia","🇨🇭 Sveits","🇸🇪 Sverige","🇨🇿 Tsjekkia","🇹🇷 Tyrkia","🇩🇪 Tyskland","🇦🇪 UAE","🇺🇦 Ukraina","🇭🇺 Ungarn","🇺🇸 USA","🇦🇹 Østerrike","🌍 Annet"];function es(e,i){const t=Ji[e];return t&&(t[i]||t.minor)||15}function Se(e,i,t){return Math.max(0,Math.ceil(e/es(i,t))-1)}function icStageShots(e){return Math.max(0,((e==null?void 0:e.paperTargets)||0)*2+((e==null?void 0:e.poppers)||0)+((e==null?void 0:e.plates)||0))}function icStageMaxPts(e){return Math.max(0,((e==null?void 0:e.paperTargets)||0)*10+(((e==null?void 0:e.poppers)||0)+((e==null?void 0:e.plates)||0))*5)}function icResultPF(e){const i=(e||"").toString().toLowerCase();return i==="major"?"major":"minor"}function icScoreFromHits(e,i,t,s,a,n){const r=it[icResultPF(e)]||it.minor;return Math.max(0,(i||0)*r.A+(t||0)*r.C+(s||0)*r.D+(a||0)*r.miss+(n||0)*r.ns+((arguments.length>6?arguments[6]:0)||0)*r.proc)}let icResultEntryMode="ocr",icUploadShooterSel=null;function icSetResultDialogMode(e){icResultEntryMode=e;const i=o("ocr-confirm-title"),t=o("ocr-confirm-desc"),s=o("ocr-save-btn");i&&(i.textContent=e==="manual"?"Register Result":"Confirm Result"),t&&(t.textContent=e==="manual"?"Enter the result manually. Points are calculated automatically based on Minor/Major and hit distribution.":"Review and edit the scanned values below. Points are calculated automatically based on Minor/Major and hit distribution."),s&&(s.textContent=e==="manual"?"Save Manual Result":"Save Result")}function icUpdateNewShooterPFOptions(){const e=o("new-shooter-division"),i=o("new-shooter-pf");if(!e||!i)return;const t=Zi[e.value]||["minor","major"],s=(i.value||"").toLowerCase();i.innerHTML=t.map(a=>`<option value="${a}">${a.toUpperCase()}</option>`).join(""),i.value=t.includes(s)?s:t[0]}function icNextStageNumber(e){const i=icStageDefs(e),t=icCurrentShooter(e),s=(t&&Array.isArray(t.stages)?t.stages:[]).map(a=>Number(a.num||a.number));for(const a of i)if(!s.includes(Number(a.number)))return Number(a.number);return i[0]?Number(i[0].number):1}function icUpdateManualStageInfo(){const e=$.find(i=>i.id!=null&&i.id.toString()===String(R)),i=o("new-result-stage-info");if(!e||!i)return 0;const t=A("new-result-stage",icNextStageNumber(e)),s=icStageDefs(e).find(a=>Number(a.number)===Number(t));if(!s)return i.innerHTML="<span style='color:var(--muted);font-size:13px;'>Select Stage</span>",0;const a=icStageShots(s),n=icStageMaxPts(s);return i.innerHTML=`<span style="color:var(--accent);font-weight:700;font-size:14px;">${s.name||"Stage "+s.number} · ${a} treff · max ${n} poeng</span>`,a}function icNormalizeManualHits(){const e=icUpdateManualStageInfo();function rv(id){const h=document.getElementById(id+"-val");return h?Math.max(0,parseInt(h.value||"0")):0}function sv(id,val){const h=document.getElementById(id+"-val");const dp=document.getElementById(id+"-disp");if(h)h.value=val;if(dp)dp.textContent=val;}let i=rv("new-result-c"),t=rv("new-result-d"),s=rv("new-result-miss");const a=rv("new-result-ns"),n=rv("new-result-proc");// Hardcap: C+D+Miss must not exceed totalHits; cap each field proportionally if needed
if(e>0&&(i+t+s)>e){const _excess=i+t+s-e;// Cap miss first, then D, then C
const _missCap=Math.max(0,s-Math.min(s,_excess));const _excessAfterMiss=i+t+s-e-Math.min(s,_excess);const _dCap=Math.max(0,t-Math.min(t,_excessAfterMiss));const _excessAfterD=i+t+s-e-Math.min(s,_excess)-Math.min(t,_excessAfterMiss);const _cCap=Math.max(0,i-Math.min(i,_excessAfterD));s=_missCap;t=_dCap;i=_cCap;sv("new-result-c",i);sv("new-result-d",t);sv("new-result-miss",s);}else if(e===0){i=0;t=0;s=0;sv("new-result-c",0);sv("new-result-d",0);sv("new-result-miss",0);}const r=Math.min(e,i+t+s),u=Math.max(0,e-r),m=o("new-result-a");return m&&(m.value=u),{totalHits:e,a:u,c:i,d:t,miss:s,ns:a,proc:n}}function adjustResultField(e,i){const hidden=document.getElementById(e+"-val");const display=document.getElementById(e+"-disp");const cur=hidden?parseInt(hidden.value||"0"):0;if(i>0&&["new-result-c","new-result-d","new-result-miss"].includes(e)){const match=$.find(x=>x.id!=null&&x.id.toString()===String(R));const stageNum=match?parseInt(document.getElementById("new-result-stage")?document.getElementById("new-result-stage").value:"1"):0;const stageDef=match?icStageDefs(match).find(x=>Number(x.number)===Number(stageNum)):null;const totalHits=stageDef?icStageShots(stageDef):0;function rv(id){const h=document.getElementById(id+"-val");return h?Math.max(0,parseInt(h.value||"0")):0}const usedC=rv("new-result-c"),usedD=rv("new-result-d"),usedMiss=rv("new-result-miss");const currentTotal=usedC+usedD+usedMiss;if(currentTotal>=totalHits)return;}const s=Math.max(0,cur+i);if(hidden)hidden.value=s;if(display)display.textContent=s;icNormalizeManualHits(),icRecalcPoints("new-result")}function icRenderEditMatchShootersList(e){const i=o("edit-match-shooters-list");if(!i||!e)return;const t=(e.shooters||[]).filter(s=>!(s!=null&&s.isMe));if(!t.length){i.innerHTML=`<div style="padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--muted);font-size:13px;">No additional shooters have been added.</div>`;return}i.innerHTML=t.map(s=>{const a=[s.firstName||"",s.lastName||""].join(" ").trim()||"Ukjent skytter",n=s.division||"—",r=(s.pf||"minor").toUpperCase();return `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;margin-bottom:8px;"><div><div style="font-weight:600;">${a}</div><div style="font-size:12px;color:var(--muted);">${n} · ${r}</div></div><button type="button" class="btn-secondary" style="border:none;border-radius:8px;padding:10px 12px;cursor:pointer;" data-shooter-id="${s.id}">Delete</button></div>`}).join(""),i.querySelectorAll("[data-shooter-id]").forEach(s=>{s.onclick=()=>removeEditMatchShooter(s.dataset.shooterId)})}async function removeEditMatchShooter(e){const i=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!i)return;const t=(i.shooters||[]).find(n=>n.id===e&&!(n!=null&&n.isMe));if(!t)return;if(!confirm(`Delete ${(t.firstName||"")+" "+(t.lastName||"")}`.trim()+"?"))return;i.shooters=(i.shooters||[]).filter(n=>n.id!==e),i.rivalId===e&&(i.rivalId=null);const s=await Ee(i.id,{shooters:i.shooters,rivalId:i.rivalId||null});s.success?(icRenderEditMatchShootersList(i),te(),_e(),De()):alert("Unable to delete shooter: "+s.error)}function icInitManualResult(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("No active match selected");return}const i=icNextStageNumber(e),t=o("new-result-stage"),s=o("new-result-time");t&&(t.value=i),s&&(s.value=""),["new-result-c","new-result-d","new-result-miss","new-result-ns","new-result-proc"].forEach(a=>{const h=document.getElementById(a+"-val");const d=document.getElementById(a+"-disp");if(h)h.value=0;if(d)d.textContent="0"}),icNormalizeManualHits(),icRecalcPoints("new-result");const _nameEl=document.getElementById("modal-add-shooter-name");if(_nameEl){const _nm=[g.firstName||"",g.lastName||""].join(" ").trim();_nameEl.textContent=_nm;}const _titleEl=document.getElementById("modal-add-title");if(_titleEl){_titleEl.textContent=d("add_result")+" · Stage "+i;}}function icRecalcPoints(e){const i=o(e+"-points");if(!i)return 0;const t=e==="ocr"?icUploadShooterSel||F("upload-shooter-select")||icCurrentShooterId():icCurrentShooterId(),s=$.find(a=>a.id!=null&&a.id.toString()===String(R)),n=s?icFindShooter(s,t):null,r=icResultPF((n==null?void 0:n.pf)||g.powerFactor||"minor");if(e==="new-result"){const u=icNormalizeManualHits(),m=icScoreFromHits(r,u.a,u.c,u.d,u.miss,u.ns,u.proc);return i.value=m,m}const u=A(e+"-a",0),m=A(e+"-c",0),b=A(e+"-d",0),p=A(e+"-miss",0),h=A(e+"-ns",0),E=A(e+"-proc",0),k=icScoreFromHits(r,u,m,b,p,h,E);return i.value=k,k}function icOpenManualResult(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("No active match selected");return}const i=o("upload-stage-select"),t=o("upload-shooter-select");if(!i.value||!t.value){alert("Please select a stage and shooter");return}Me=i.value,icUploadShooterSel=t.value;const s=o("new-result-stage");s&&(s.value=Me),o("new-result-time")&&(o("new-result-time").value=""),["new-result-c","new-result-d","new-result-miss","new-result-ns","new-result-proc"].forEach(a=>{const h=document.getElementById(a+"-val");const d=document.getElementById(a+"-disp");if(h)h.value=0;if(d)d.textContent="0"}),icNormalizeManualHits(),icRecalcPoints("new-result"),G("modal-ocr-confirm"),G("modal-upload-result");const _snEl=document.getElementById("modal-add-shooter-name");if(_snEl){const _sel=document.getElementById("upload-shooter-select");const _snTxt=_sel&&_sel.selectedIndex>=0?_sel.options[_sel.selectedIndex].text:"";_snEl.textContent=_snTxt;}const _titleEl2=document.getElementById("modal-add-title");if(_titleEl2){_titleEl2.textContent=d("add_result")+" · Stage "+Me;}o("modal-add").classList.add("open")}function icCurrentShooterId(){const e=Pe();return e&&e.uid?e.uid:"me"}function icFindShooter(e,i){if(!e||!e.shooters)return null;for(const t of e.shooters)if(t.id===i||i==="me"&&t.isMe)return t;return null}function icCurrentShooter(e){const i=icCurrentShooterId();return icFindShooter(e,i)||icFindShooter(e,"me")}function icLegacyResults(e){return[]}function icCurrentResults(e){const i=icCurrentShooter(e);if(i&&i.stages&&i.stages.length)return i.stages.slice().sort((t,s)=>(t.num||0)-(s.num||0));return[]}function icStageDefs(e){if(!e||!e.stages)return[];return e.stages.filter(i=>i&&((i.number!=null)||(i.num!=null)||i.name||i.paperTargets||i.poppers||i.plates)).map((i,t)=>{const s=i.number!=null?i.number:i.num!=null?i.num:t+1;return{number:s,name:i.name||("Stage "+s),paperTargets:i.paperTargets||0,poppers:i.poppers||0,plates:i.plates||0,noShoots:i.noShoots||0,bonusPaperTargets:i.bonusPaperTargets||0,bonusIncluded:!!i.bonusIncluded}}).sort((i,t)=>(i.number||0)-(t.number||0))}async function icEnsureShooter(e,i){e.shooters||(e.shooters=[]);let t=icFindShooter(e,i);if(t)return t;const s=icCurrentShooterId();if(i===s||i==="me")return t={id:s,isMe:!0,firstName:g.firstName||"Meg",lastName:g.lastName||"",division:g.division||"Classic",pf:g.powerFactor||"minor",club:g.club||"",stages:[]},e.shooters.push(t),t;try{const a=await Ut(i);return t={id:i,isMe:!1,firstName:(a==null?void 0:a.firstName)||"Shooter",lastName:(a==null?void 0:a.lastName)||"",division:(a==null?void 0:a.division)||"Classic",pf:(a==null?void 0:a.powerFactor)||"minor",club:(a==null?void 0:a.club)||"",stages:[]},e.shooters.push(t),t}catch{return null}}function icUpsertStageResult(e,i,isTraining){e.stages||(e.stages=[]);const t=e.stages.findIndex(s=>(s.num||s.number)==i.num);if(isTraining){const existing=t>=0?e.stages[t]:null;const runs=existing&&existing.runs?existing.runs.slice():[];if(existing&&!existing.runs&&existing.time)runs.push({...existing,runNum:1});const runNum=runs.length+1;runs.push({...i,runNum});const best=runs.reduce((a,b)=>(b.hf||0)>(a.hf||0)?b:a,runs[0]);const stageObj={...best,num:i.num,name:i.name,runs};if(t>=0)e.stages[t]=stageObj;else e.stages.push(stageObj);}else{t>=0?e.stages[t]={...e.stages[t],...i,savedAt:e.stages[t].savedAt||Date.now()}:e.stages.push({...i,savedAt:Date.now()});}e.stages.sort((s,a)=>(s.num||0)-(a.num||0));}function icFormFromResults(e,i,t){const s=(e||[]).filter(m=>m&&m.time&&m.pts&&(!i||(m.num||m.number)<=i));if(!s.length)return null;const a=(t==null?void 0:t.division)||g.division||"Classic",n=(t==null?void 0:t.pf)||g.powerFactor||"minor",r=(t==null?void 0:t.draw)||g.draw||1.42,u=(t==null?void 0:t.reloadTime)||g.reloadTime||1.8;let m=0,b=0,f=0,p=0,h=0,E=0;for(const k of s){const P=icStageShots(k);if(!P)continue;const C=Se(P,a,n),L=(k.time||0)-r-C*u;L>0&&(m+=P,b+=L,f+=k.a||0,p+=k.c||0,h+=k.d||0,E+=k.miss||0)}if(!m||!b)return null;const k=f+p+h+E;return{avgSplit:b/m,aPercent:k>0?f/k:0,cPercent:k>0?p/k:0,dPercent:k>0?h/k:0,missPercent:k>0?E/k:0,completedStages:s.length,division:a,pf:n,draw:r,reloadTime:u}}function icProjectNext(e,i){if(!e||!i)return null;const t=icStageShots(i);if(!t)return null;const s=Se(t,e.division||"Classic",e.pf||"minor"),a=e.draw+t*e.avgSplit+s*e.reloadTime,n=it[e.pf]||it.minor,r=t*(e.aPercent*n.A+e.cPercent*n.C+e.dPercent*n.D),u=a>0?r/a:0;return{shots:t,reloads:s,expTime:a,expPts:r,maxPts:icStageMaxPts(i),estHF:u}}function icStageMetricsForMatch(e,i){if(!e||!i)return[];const t=[],s=i.number!=null?i.number:i.num,a=icStageMaxPts(i);(e.shooters||[]).forEach(n=>{const r=(n.stages||[]).find(u=>String(u.num||u.number)===String(s)&&u.time&&u.pts>=0);if(r){const u=((n.firstName||"")+" "+(n.lastName||"")).trim()||"Shooter",m=r.hf&&r.hf>0?r.hf:(r.time>0?(r.pts||0)/r.time:0);t.push({id:n.id,name:u,isMe:!!n.isMe,pts:r.pts||0,hf:m,res:r,division:n.division||"",pf:n.pf||"minor"})}});t.sort((n,r)=>(r.hf||0)-(n.hf||0)||((r.pts||0)-(n.pts||0)));const n=t.length>0?(t[0].hf||0):0;return t.map((r,u)=>{const m=n>0?r.hf/n*100:0,b=n>0?r.hf/n*a:0,stageTotal=(r.res.a||0)+(r.res.c||0)+(r.res.d||0)+(r.res.miss||0),stageAPercent=stageTotal>0?(r.res.a||0)/stageTotal*100:0;return{...r,rank:u+1,stagePct:m,stagePts:b,maxStagePts:a,stageAPercent}})}function icCommonStageNumbers(e){if(!e||!e.shooters||e.shooters.length===0)return[];const i=icStageDefs(e);if(!i.length)return[];const t=(e.shooters||[]).filter(s=>s&&(s.stages||[]).length>0);if(!t.length)return[];return i.map(s=>String(s.number)).filter(s=>t.every(a=>(a.stages||[]).some(n=>String(n.num||n.number)===s&&n.time&&n.pts>=0)))}function icMatchTotals(e,onlyCommon=!1){const i={};if(!e)return[];const commonNums=onlyCommon?icCommonStageNumbers(e):null;(e.shooters||[]).forEach(t=>{i[String(t.id)]={id:t.id,name:((t.firstName||"")+" "+(t.lastName||"")).trim()||"Shooter",division:t.division||"",pf:t.pf||"minor",totalStagePts:0,totalRawPts:0,totalA:0,totalHits:0}});icStageDefs(e).forEach(t=>{if(commonNums&&!commonNums.includes(String(t.number)))return;icStageMetricsForMatch(e,t).forEach(s=>{const a=String(s.id);i[a]||(i[a]={id:s.id,name:s.name,division:s.division||"",pf:s.pf||"minor",totalStagePts:0,totalRawPts:0,totalA:0,totalHits:0}),i[a].totalStagePts+=(s.stagePts||0),i[a].totalRawPts+=(s.pts||0),i[a].totalA+=(s.res&&s.res.a||0),i[a].totalHits+=(s.res?(s.res.a||0)+(s.res.c||0)+(s.res.d||0)+(s.res.miss||0):0)})});return Object.values(i).sort((t,s)=>s.totalStagePts-t.totalStagePts||s.totalRawPts-t.totalRawPts)}function ct(){const e=$.find(k=>k.id!=null&&k.id.toString()===String(R));if(!e)return null;const i=icCurrentShooter(e),t=icCurrentResults(e),s=icFormFromResults(t,null,i);return s?{avgSplit:s.avgSplit,completedStages:s.completedStages,totalStages:icStageDefs(e).length,aPercent:s.aPercent,cPercent:s.cPercent,dPercent:s.dPercent,missPercent:s.missPercent,division:s.division,pf:s.pf,draw:s.draw,reloadTime:s.reloadTime}:null}function ge(e){return e.charAt(0).toUpperCase()+e.slice(1)}function We(e){if(!e)return"";try{const i=dt==="no"?"nb-NO":"en-US";return new Date(e).toLocaleDateString(i,{day:"numeric",month:"short",year:"numeric"})}catch{return e}}function o(e){return document.getElementById(e)}function F(e){const i=o(e);return i?i.value:""}function he(e,i){const t=parseFloat(F(e));return isNaN(t)?i||0:t}function A(e,i){const t=parseInt(F(e));return isNaN(t)?i||0:t}function le(){if(g&&g.photoURL){return'<img src="'+g.photoURL+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" alt="avatar">'}const e=(g==null?void 0:g.firstName)||"",i=(g==null?void 0:g.lastName)||"";return(e.charAt(0)+i.charAt(0)).toUpperCase()||"U"}async function ts(e){var s;(function(){
var _st=document.createElement("style");
_st.textContent="\
:root{--accent:#e0b649;--accent2:#c49a30;--accent-fade:rgba(224,182,73,0.12);--accent-glow:rgba(224,182,73,0.25);--bg:#0d0f12;--bg2:#111418;--bg3:#161a1f;--card:#141820;--card2:#181d24;--border:rgba(255,255,255,0.07);--border-gold:rgba(224,182,73,0.25);--text:#f0f2f5;--muted:rgba(255,255,255,0.38);--green:#4caf7d;--red:#ef4444;--radius:12px;--radius-sm:8px;}\
html,body,*{background-color:inherit;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif!important;}html,body{background:var(--bg)!important;color:var(--text)!important;}\
.screen{background:var(--bg)!important;min-height:100vh;}\
/* === TABULAR NUMS on all data === */\
.hf-val,.pct-val,.time-val,[class*='hf'],[class*='pct'],[class*='pts'],td,th{font-variant-numeric:tabular-nums!important;}\
/* === CARDS === */\
.card{background:var(--card)!important;border:1px solid var(--border)!important;border-radius:var(--radius)!important;margin-bottom:10px!important;overflow:hidden;position:relative;}\
.card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,var(--accent) 0%,var(--accent2) 100%);border-radius:3px 0 0 3px;}\
.card-header{padding:12px 16px 10px!important;background:rgba(255,255,255,0.02)!important;border-bottom:1px solid var(--border)!important;display:flex!important;align-items:center!important;justify-content:space-between!important;}\
.card-title{font-size:10px!important;font-weight:700!important;letter-spacing:0.12em!important;color:var(--accent)!important;text-transform:uppercase!important;display:flex!important;align-items:center!important;gap:6px!important;}\
.card-title svg{width:13px;height:13px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex-shrink:0;}\
/* === NAV AVATAR === */\
.nav-avatar{width:38px!important;height:38px!important;border-radius:50%!important;background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)!important;color:#0a0c0f!important;font-weight:800!important;font-size:13px!important;display:flex!important;align-items:center!important;justify-content:center!important;cursor:pointer!important;box-shadow:0 0 0 2px rgba(224,182,73,0.3),0 0 12px rgba(224,182,73,0.15)!important;letter-spacing:0.03em;flex-shrink:0;}\
@keyframes rfSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}\
.nav-refresh-btn{background:none!important;border:none!important;cursor:pointer!important;color:rgba(255,255,255,0.35)!important;padding:6px!important;display:flex!important;align-items:center!important;justify-content:center!important;border-radius:8px!important;transition:color 0.15s,background 0.15s!important;flex-shrink:0;}\
.nav-refresh-btn:hover{color:var(--accent)!important;background:rgba(224,182,73,0.08)!important;}\
.nav-refresh-btn.spinning svg{animation:rfSpin 0.7s linear infinite!important;}\
.nav-refresh-btn svg{width:18px!important;height:18px!important;stroke:currentColor!important;fill:none!important;stroke-width:2.2!important;stroke-linecap:round!important;stroke-linejoin:round!important;}\
/* === TAB BAR === */\
.tab-bar{background:var(--bg2)!important;border-top:1px solid var(--border)!important;padding:10px 0 22px!important;}\
.tab-item{color:var(--muted)!important;font-size:7.5px!important;font-weight:700!important;letter-spacing:0.05em!important;text-transform:uppercase!important;transition:color 0.15s!important;position:relative!important;padding:2px 0!important;display:flex!important;flex-direction:column!important;align-items:center!important;gap:2px!important;}\
.tab-item.active{color:var(--accent)!important;background:none!important;border-radius:0!important;}\
.tab-item.active::before{content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:20px;height:2px;background:var(--accent);border-radius:2px;}\
.tab-icon svg{stroke:currentColor!important;fill:none!important;}\
/* === FILTER CHIPS === */\
.filter-chip{background:rgba(255,255,255,0.04)!important;border:1px solid rgba(255,255,255,0.08)!important;border-radius:20px!important;color:var(--muted)!important;font-size:10px!important;font-weight:700!important;letter-spacing:0.08em!important;text-transform:uppercase!important;padding:5px 13px!important;transition:all 0.15s!important;}\
.filter-chip.active{background:var(--accent-fade)!important;border-color:var(--accent)!important;color:var(--accent)!important;}\
/* === BUTTONS === */\
.btn-primary,.primary-btn{background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)!important;color:#0a0c0f!important;border:none!important;border-radius:var(--radius-sm)!important;font-weight:800!important;font-size:12px!important;letter-spacing:0.12em!important;text-transform:uppercase!important;padding:12px 18px!important;cursor:pointer!important;transition:opacity 0.15s!important;}\
.btn-primary:hover,.primary-btn:hover{opacity:0.88!important;}\
.btn-secondary,.secondary-btn{background:transparent!important;border:1px solid rgba(224,182,73,0.28)!important;border-radius:var(--radius-sm)!important;color:var(--accent)!important;font-size:11px!important;font-weight:700!important;letter-spacing:0.08em!important;text-transform:uppercase!important;padding:8px 12px!important;cursor:pointer!important;transition:background 0.15s,border-color 0.15s!important;}\
.btn-secondary:hover{background:var(--accent-fade)!important;border-color:rgba(224,182,73,0.5)!important;}\
/* === FAB === */\
.fab{background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)!important;color:#0a0c0f!important;border:none!important;border-radius:50%!important;width:54px!important;height:54px!important;font-size:22px!important;cursor:pointer!important;box-shadow:0 4px 20px rgba(224,182,73,0.35)!important;display:flex!important;align-items:center!important;justify-content:center!important;position:fixed!important;bottom:78px!important;right:18px!important;z-index:100!important;transition:transform 0.15s!important;}\
.fab:hover{transform:scale(1.06)!important;}\
/* === MODALS === */\
.modal{background:rgba(0,0,0,0.75)!important;backdrop-filter:blur(6px)!important;}\
.modal-content,.modal-inner{background:var(--card2)!important;border:1px solid var(--border)!important;border-radius:18px!important;border-top:2px solid var(--accent)!important;}\
.modal-title{color:var(--text)!important;font-weight:800!important;font-size:15px!important;letter-spacing:0.04em!important;}\
/* === FORM FIELDS === */\
.field-input,input[type=text],input[type=email],input[type=number],input[type=password],textarea,select{background:rgba(255,255,255,0.04)!important;border:1px solid rgba(255,255,255,0.08)!important;border-radius:var(--radius-sm)!important;color:var(--text)!important;padding:11px 14px!important;font-size:14px!important;outline:none!important;width:100%!important;box-sizing:border-box!important;transition:border-color 0.15s,background 0.15s!important;}\
.field-input:focus,input:focus,textarea:focus,select:focus{border-color:rgba(224,182,73,0.45)!important;background:rgba(255,255,255,0.06)!important;}\
/* === STANDINGS TABLE === */\
.standings-table td,.standings-table th{font-variant-numeric:tabular-nums;}\n.standings-shooter-name{font-size:13px!important;font-weight:600!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:140px!important;}\n.standings-shooter-meta{font-size:11px!important;color:var(--muted)!important;white-space:nowrap!important;}\n.standings-td-pts{font-size:13px!important;font-weight:600!important;white-space:nowrap!important;}\n.standings-td-pct{font-size:14px!important;font-weight:700!important;color:var(--accent)!important;white-space:nowrap!important;}\n.standings-td-rank{font-size:13px!important;font-weight:800!important;}\n.standings-td{vertical-align:middle!important;padding:8px 6px!important;}\
.rank-1{color:#e0b649!important;font-weight:800!important;}\
.rank-2{color:#c0c0c0!important;font-weight:700!important;}\
.rank-3{color:#cd7f32!important;font-weight:700!important;}\
/* === MATCH CARDS === */\
.match-card,[class*='match-item']{background:var(--card)!important;border:1px solid var(--border)!important;border-radius:var(--radius)!important;border-left:3px solid var(--accent)!important;margin-bottom:10px!important;padding:14px 16px!important;position:relative;}\
/* === STAGE CARDS === */\
.stage-card{background:var(--card)!important;border:1px solid var(--border)!important;border-radius:var(--radius)!important;margin-bottom:8px!important;overflow:hidden!important;}\
.stage-card-header{padding:12px 14px!important;background:var(--bg3)!important;cursor:pointer!important;display:flex!important;align-items:center!important;justify-content:space-between!important;}\
.stage-card-title{font-weight:700!important;font-size:14px!important;color:var(--text)!important;}\
/* === BADGES === */\
.badge-shot{background:rgba(76,175,125,0.15)!important;color:var(--green)!important;border:1px solid rgba(76,175,125,0.3)!important;border-radius:6px!important;font-size:10px!important;font-weight:700!important;padding:3px 8px!important;letter-spacing:0.06em!important;}\
.badge-next{background:var(--accent-fade)!important;color:var(--accent)!important;border:1px solid var(--border-gold)!important;border-radius:6px!important;font-size:10px!important;font-weight:700!important;padding:3px 8px!important;}\
.badge-pending{background:rgba(255,255,255,0.04)!important;color:var(--muted)!important;border:1px solid var(--border)!important;border-radius:6px!important;font-size:10px!important;font-weight:700!important;padding:3px 8px!important;}\
/* === PROFILE AVATAR === */\
#prof-avatar{width:78px!important;height:78px!important;border-radius:50%!important;background:linear-gradient(135deg,var(--accent) 0%,var(--accent2) 100%)!important;color:#0a0c0f!important;font-weight:900!important;font-size:26px!important;display:flex!important;align-items:center!important;justify-content:center!important;box-shadow:0 0 0 3px var(--bg2),0 0 0 5px rgba(224,182,73,0.35),0 0 20px rgba(224,182,73,0.2)!important;overflow:hidden!important;cursor:pointer!important;}\
.prof-avatar-wrap{position:relative;display:inline-block;flex-shrink:0;}\
.prof-avatar-cam{position:absolute;bottom:0;left:0;right:0;height:26px;background:rgba(0,0,0,0.52);display:flex;align-items:center;justify-content:center;pointer-events:none;border-radius:0 0 50px 50px;}\
.prof-avatar-cam svg{width:13px;height:13px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\
/* === DROPDOWN === */\
.match-dropdown{background:var(--card2)!important;border:1px solid var(--border)!important;border-radius:var(--radius)!important;box-shadow:0 8px 32px rgba(0,0,0,0.5)!important;}\
.match-dropdown-item{border-bottom:1px solid var(--border)!important;padding:11px 14px!important;}\
.match-dropdown-item.active{background:var(--accent-fade)!important;}\
.match-dropdown-dot{width:7px!important;height:7px!important;border-radius:50%!important;background:var(--accent)!important;flex-shrink:0!important;}\
/* === SPINNERS === */\
#global-spinner{background:rgba(0,0,0,0.78)!important;backdrop-filter:blur(6px)!important;}\
/* === SCROLLBARS === */\
::-webkit-scrollbar{width:3px;height:3px;}\
::-webkit-scrollbar-track{background:transparent;}\
::-webkit-scrollbar-thumb{background:rgba(224,182,73,0.25);border-radius:3px;}\
/* === SECTION HEADERS WITH ICON === */\
.section-icon-header{display:flex;align-items:center;gap:7px;}\
.section-icon-header svg{width:13px;height:13px;stroke:var(--accent);fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}\
/* === PROGRESS BAR for standings % === */\
.pct-bar-wrap{display:inline-flex;align-items:center;gap:8px;width:100%;}\
.pct-bar{flex:1;height:3px;background:rgba(255,255,255,0.08);border-radius:2px;overflow:hidden;min-width:40px;max-width:60px;}\
.pct-bar-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--accent) 0%,var(--accent2) 100%);}\
/* === AUTOFILL FIX === */\
input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 100px rgba(20,24,32,0.98) inset!important;-webkit-text-fill-color:#f5f7fb!important;caret-color:#f5f7fb!important;border:1px solid rgba(255,255,255,0.1)!important;transition:background-color 9999s ease-in-out 0s!important;}\
/* === IPAD LANDSCAPE DASHBOARD === */\
.ipad-sidebar{display:none;position:fixed;left:0;top:0;bottom:0;width:72px;background:linear-gradient(180deg,#0d0f12 0%,#111418 100%);border-right:1px solid rgba(224,182,73,0.12);flex-direction:column;align-items:center;padding:20px 0 16px;gap:2px;z-index:200;box-shadow:4px 0 32px rgba(0,0,0,0.5);}\
.ipad-logo{font-size:13px;font-weight:900;color:var(--accent);letter-spacing:0.08em;margin-bottom:16px;text-shadow:0 0 20px rgba(224,182,73,0.4);}\
.ipad-nav-item{display:flex;flex-direction:column;align-items:center;gap:5px;padding:11px 0;width:100%;cursor:pointer;color:var(--muted);font-size:8px;font-weight:700;letter-spacing:0.06em;transition:all 0.25s cubic-bezier(0.4,0,0.2,1);border-left:2px solid transparent;text-transform:uppercase;}\
.ipad-nav-item:hover{color:rgba(224,182,73,0.7);background:rgba(224,182,73,0.04);}\
.ipad-nav-item.active{color:var(--accent);border-left-color:var(--accent);background:rgba(224,182,73,0.08);text-shadow:0 0 12px rgba(224,182,73,0.3);}\
.ipad-nav-item svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:transform 0.25s;}\
.ipad-nav-item:hover svg{transform:scale(1.1);}\
.ipad-panel-label{display:none;font-size:10px;font-weight:800;letter-spacing:0.1em;color:var(--accent);margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid rgba(224,182,73,0.15);text-transform:uppercase;}\
@media (min-width:1024px) and (orientation:landscape){\
.ipad-sidebar{display:flex!important;}\
.tab-bar{display:none!important;}\
.phone{max-width:none!important;width:100%!important;margin:0!important;border-radius:0!important;box-shadow:none!important;}\
.screen{padding-bottom:0!important;min-height:100vh!important;}\
.navbar{padding-left:84px!important;}\
.scroll-content{padding-left:72px!important;}\
.fab{right:20px!important;bottom:20px!important;}\
#screen-results>.scroll-content{display:flex!important;flex-direction:row!important;padding:0 0 0 72px!important;overflow:hidden!important;height:calc(100vh - 56px)!important;}\
#screen-prognose>.scroll-content{display:flex!important;flex-direction:row!important;padding:0 0 0 72px!important;overflow:hidden!important;height:calc(100vh - 56px)!important;}\
.ipad-left-panel{width:44%!important;padding:20px!important;overflow-y:auto!important;height:100%!important;box-sizing:border-box!important;border-right:1px solid rgba(224,182,73,0.08)!important;background:rgba(0,0,0,0.15)!important;}\
.ipad-right-panel{width:56%!important;padding:20px!important;overflow-y:auto!important;height:100%!important;box-sizing:border-box!important;}\
.ipad-panel-label{display:block!important;}\
#screen-matches>.scroll-content{padding-left:72px!important;}\
#match-list-container{display:grid!important;grid-template-columns:repeat(3,1fr)!important;gap:16px!important;padding:20px!important;}\
}\
";
document.head.appendChild(_st);
})();const t=Pe();const[i,_refs,_matches]=await Promise.all([jt(),loadReferenceShooters(),Vt(),Promise.resolve()]);i?g=i:g={firstName:t.name||((s=t.email)==null?void 0:s.split("@")[0])||"",lastName:"",division:"",category:"",powerFactor:"",region:"",club:"",draw:null,reloadTime:null};refShooters=_refs;$=_matches;if($&&$.length>0){const a=new Date,n=$.filter(r=>r.status!=="finished"&&r.date);if(n.length>0){let r=n[0],u=Math.abs(new Date(n[0].date)-a);for(const m of n){const b=new Date(m.date),f=Math.abs(b-a);f<u&&(u=f,r=m)}R=r.id}}ke&&ke(),ke=qt(a=>{$=a,fe(),te()}),Zt(a=>{ee=a,Ye()}),e.innerHTML=`
<div id="global-spinner" style="display:none;pointer-events:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.55);align-items:center;justify-content:center;flex-direction:column;gap:14px;"><div class="spinner-ring"></div><div class="spinner-text" id="spinner-text"></div></div>
<div class="ipad-sidebar" style="display:none;">
  <div class="ipad-logo">IC</div>
  <div class="ipad-nav-item active" id="ipad-nav-home" onclick="switchTab('screen-home')">
    <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg>
    <span>Home</span>
  </div>
  <div class="ipad-nav-item" id="ipad-nav-matches" onclick="switchTab('screen-matches')">
    <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    <span>Matches</span>
  </div>
  <div class="ipad-nav-item" id="ipad-nav-prog" onclick="switchTab('screen-prognose')">
    <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    <span>Score</span>
  </div>
  <div class="ipad-nav-item" id="ipad-nav-results" onclick="switchTab('screen-results')">
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
    <span>Live</span>
  </div>
  <div class="ipad-nav-item" id="ipad-nav-teams" onclick="switchTab('screen-teams')">
    <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
    <span>Teams</span>
  </div>
  <div class="ipad-nav-item" id="ipad-nav-profile" onclick="switchTab('screen-profile')">
    <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    <span>Profile</span>
  </div>
</div>
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
 <div class="navbar">
 <div class="nav-title">I<span>D</span></div>
 <button class="nav-refresh-btn" id="rfbtn-home" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
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
 <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')" style="position:relative;"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><div id="tab-invitation-badge" style="display:none;position:absolute;top:0;right:0;background:#ef4444;color:white;border-radius:50%;width:18px;height:18px;font-size:11px;font-weight:bold;align-items:center;justify-content:center;"></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
 <div class="navbar">
 <div class="nav-title">MATCH<span>ES</span></div>
 <button class="nav-refresh-btn" id="rfbtn-matches" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
 <div style="display:flex;align-items:center;gap:15px;">
 <div style="position:relative;cursor:pointer;" onclick="openInvitationsModal()">
 <div style="font-size:16px;"></div>
 <div id="invitation-badge" style="display:none;position:absolute;top:-5px;right:-5px;background:#ef4444;color:white;border-radius:50%;width:20px;height:20px;font-size:12px;font-weight:bold;align-items:center;justify-content:center;">0</div>
 </div>
 <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${le()}</div>
 </div>
 </div>
 <div class="scroll-content">
 <div class="search-wrap"><span class="search-icon"></span><input class="search-input" id="match-id-search" placeholder="${d("search_match_placeholder")}" type="number"><button class="btn-primary" style="margin-left:10px;padding:8px 16px;font-size:14px;" onclick="searchMatchByIdHandler()">Search</button></div>
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
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
 <div class="navbar">
 <div class="nav-title">SC<span>ORE</span></div>
 <button class="nav-refresh-btn" id="rfbtn-prog" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
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
  <div class="ipad-left-panel">
   <div class="ipad-panel-label">SCORE ANALYSIS</div>
   <div id="prog-match-context"></div>
   <div id="snapshot-container"></div>
 
 <div class="card" style="margin-bottom:12px;padding:14px 16px;">
<button onclick="var _sp=document.getElementById('stageplan-body');var _arr=document.getElementById('stageplan-arrow');if(_sp){_sp.style.display=_sp.style.display==='none'?'block':'none';_arr.textContent=_sp.style.display==='block'?'▼':'▶';}" style="width:100%;padding:0;background:transparent;border:none;color:var(--text);cursor:pointer;display:flex;justify-content:space-between;align-items:center;"><div style="font-size:11px;font-weight:700;letter-spacing:0.06em;color:var(--muted);">STAGE PLANNING</div><span id="stageplan-arrow" style="font-size:12px;color:var(--muted);">▶</span></button><div id="stageplan-body" style="display:none;margin-top:12px;"><ol style="margin:0;padding:0 0 0 18px;font-size:13px;line-height:1.9;color:var(--text);"><li style="margin-bottom:6px;">Map all targets — paper targets, poppers, plates, and swingers — before deciding your shooting sequence</li><li style="margin-bottom:6px;">Think hit factor in every decision — assess time, points, and risk simultaneously. Don’t choose the fastest or safest solution in isolation — choose the one that gives the best expected total score</li><li style="margin-bottom:6px;">Identify risk zones: where is no-shoot exposure greatest, and where is the probability of a miss highest?</li><li style="margin-bottom:6px;">Break the stage into segments — aggressive zones where you can push, and control zones where you must protect your points</li><li style="margin-bottom:6px;">Activate swingers and mechanical targets as early as possible — don’t build waiting into your plan</li><li style="margin-bottom:6px;">Synchronize movement, target acquisition, and timing — work while mechanics happen, avoid passive stops in front of activators and swingers</li><li style="margin-bottom:6px;">Plan reloads into movement, not as separate stops</li><li style="margin-bottom:6px;">Think exit: plan how you leave the position after the last shot, not just your arrival</li><li>Choose a plan you can actually execute consistently — a simple plan run clean beats a hero plan with mistakes</li></ol></div></div>
  </div>
  <div class="ipad-right-panel">
   <div class="ipad-panel-label">STAGE BREAKDOWN</div>
   <div id="prog-stages-container"></div>
  </div>
 </div>
 <button class="fab" onclick="openModal('modal-upload-result')">+</button>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
 <div class="navbar">
 <div class="nav-title">LIVE<span></span></div>
 <button class="nav-refresh-btn" id="rfbtn-results" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
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
 <div class="scroll-content">
  <div class="ipad-left-panel">
   <div class="ipad-panel-label">STAGE RESULTS</div>
   <div id="results-content"></div>
  </div>
  <div class="ipad-right-panel" id="results-right-panel" style="display:none;">
   <div class="ipad-panel-label">LIVE STATISTICS</div>
   <div id="results-stats-panel"></div>
  </div>
 </div>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
 <div class="navbar">
  <div class="nav-title">PRO<span>FILE</span></div>
 <button class="nav-refresh-btn" id="rfbtn-profile" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
 </div>
 <div class="scroll-content">
  <div class="profile-header" style="display:flex;flex-direction:column;align-items:flex-start;padding:16px 16px 0;">
   <div style="display:flex;align-items:center;gap:16px;margin-bottom:14px;width:100%;">
    <div class="prof-avatar-wrap"><div class="profile-avatar" id="prof-avatar" style="flex-shrink:0;" onclick="document.getElementById('avatar-upload').click()">${le()}</div><div class="prof-avatar-cam"><svg viewBox="0 0 24 24"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg></div><input type="file" id="avatar-upload" accept="image/*" style="display:none" onchange="uploadProfilePhoto(this)"></div>
    <div style="flex:1;min-width:0;">
     <div class="profile-name" id="prof-name" style="font-size:22px;font-weight:800;margin-bottom:2px;">${g.firstName||""} ${g.lastName||""}</div>
     <div class="profile-div" id="prof-div" style="font-size:13px;color:var(--muted);">${g.division||"—"} · ${g.club||"—"}</div>
    </div>
   </div>
   <div class="profile-badges" style="margin-bottom:14px;">
    <span class="badge badge-gold" id="prof-badge-pf">${g.powerFactor?ge(g.powerFactor):"—"}</span>
    <span class="badge badge-green">&#10003; Verified</span>
    <span class="badge badge-blue" id="prof-badge-region">${g.region||"—"}</span>
   </div>
   <button class="btn-primary" style="width:100%;margin-bottom:16px;" onclick="openEditProfile()"> ${d("edit_profile")}</button>
  </div>

  <div class="card">
   <div class="card-header" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="(function(){var b=document.getElementById('pi-body');var c=document.getElementById('pi-chev');if(b){var o=b.style.display!=='none';b.style.display=o?'none':'block';c.style.transform=o?'rotate(0deg)':'rotate(180deg)';}})()">
    <div style="display:flex;align-items:center;gap:8px;">
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
     <div class="card-title">Personal Information</div>
    </div>
    <svg id="pi-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
   </div>
   <div id="pi-body" style="display:none;">
   <div class="info-row"><span class="info-key">First name</span><span id="info-firstname">${g.firstName||"—"}</span></div>
   <div class="info-row"><span class="info-key">Last name</span><span id="info-lastname">${g.lastName||"—"}</span></div>
   <div class="info-row"><span class="info-key">Division</span><span id="info-division">${g.division||"—"}</span></div>
   <div class="info-row"><span class="info-key">Category</span><span id="info-category">${g.category||"—"}</span></div>
   <div class="info-row"><span class="info-key">Power Factor</span><span id="info-pf">${g.powerFactor?ge(g.powerFactor):"—"}</span></div>
   <div class="info-row"><span class="info-key">Region</span><span id="info-region">${g.region||"—"}</span></div>
   <div class="info-row"><span class="info-key">Club</span><span id="info-club">${g.club||"—"}</span></div>
  </div></div>

  <div class="card">
   <div class="card-header" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="(function(){var b=document.getElementById('ss-body');var c=document.getElementById('ss-chev');if(b){var o=b.style.display!=='none';b.style.display=o?'none':'block';c.style.transform=o?'rotate(0deg)':'rotate(180deg)';}})()">
    <div style="display:flex;align-items:center;gap:8px;">
     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
     <div class="card-title">Season Statistics</div>
    </div>
    <svg id="ss-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
   </div>
   <div id="ss-body" style="display:none;">
   <div class="stats-grid">
    <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${d("matches_count")}</div></div>
    <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${d("stages_count")}</div></div>
    <div class="stat-block"><div class="stat-value" id="stat-hf-short">—</div><div class="stat-label">SHORT HF</div></div>
    <div class="stat-block"><div class="stat-value" id="stat-hf-medium">—</div><div class="stat-label">MEDIUM HF</div></div>
    <div class="stat-block"><div class="stat-value" id="stat-hf-long">—</div><div class="stat-label">LONG HF</div></div>
    <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${d("a_rate")}</div></div>
   </div>
  </div></div>

  <div id="profile-match-tips"></div>

  <div class="card" style="margin-bottom:12px;">
   <div class="card-header" style="display:flex;align-items:center;gap:8px;">
    <div class="card-title" id="prof-lang-title">${dt==="no"?"Language":"Language"}</div>
   </div>
   <div style="display:flex;gap:10px;padding:4px 0;">
    <button id="prof-lang-no" onclick="setAppLang(\'no\')" style="flex:1;padding:10px;border-radius:10px;border:2px solid var(--accent);background:rgba(212,168,67,0.15);color:var(--accent);font-weight:700;font-size:14px;cursor:pointer;">🇳🇴 Norsk</button>
    <button id="prof-lang-en" onclick="setAppLang(\'en\')" style="flex:1;padding:10px;border-radius:10px;border:2px solid rgba(255,255,255,0.15);background:transparent;color:var(--muted);font-weight:700;font-size:15px;cursor:pointer;">🇺🇸 English</button>
   </div>
  </div>

  <button class="btn-primary btn-logout" onclick="handleLogout()"> ${d("logout")}</button>
  <div class="profile-spacer"></div>
 </div>

<div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
 </div>
</div>

<div class="screen" id="screen-teams">
 <div class="navbar">
 <div class="nav-title">TEAM<span>S</span></div>
 <button class="nav-refresh-btn" id="rfbtn-teams" onclick="refreshFromFirebase()" title="Refresh"><svg viewBox="0 0 24 24"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg></button>
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
 <button class="btn-primary" onclick="openCreateTeam()" style="width:100%;">${dt==="no"?"+ Create New Team":"+ Create New Team"}</button>
 </div>
 <div style="margin-top:16px;" id="teams-list-container"></div>
 </div>
 <div class="tab-bar">
 <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H5a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg></div><span class="lang-home">${d("home")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div><span class="lang-matches">${d("matches")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon"><svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg></div><span class="lang-prognosis">${d("prognosis")}</span></div>
 <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg></div><span class="lang-results">${d("results")}</span></div>
 <div class="tab-item active" onclick="switchTab('screen-teams')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div><span>Teams</span></div>
 <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span class="lang-profile">${d("profile")}</span></div>
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
 <div class="field-label">Invite users (optional)</div>
 <div style="display:flex;gap:8px;margin-bottom:10px;">
 <input class="field-input" type="text" id="new-match-user-search" oninput="searchUsersNewMatch()" placeholder="Search by name or email…" style="flex:1;">
 <button onclick="searchUsersNewMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Search</button>
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
 <button class="btn-primary" onclick="openCreateStageFromEdit()" style="width:100%;>+ Stage</button>
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
 <span>Mark as finished</span>
 </label>
 </div>
 <div class="field-group">
 <div class="field-label">Select rival/opponent (optional)</div>
 <select class="field-select" id="edit-match-rival">
 <option value="">No rival selected</option>
 </select>
 </div>
 <div class="field-group">
 <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
 <input type="checkbox" id="edit-match-reference-enabled" onchange="toggleReferenceShootersEnabled()" style="width:18px;height:18px;">
 <span>Use reference shooters</span>
 </label>
 </div>
 <div class="field-group" id="reference-shooters-config" style="display:none;"></div>
 <div class="field-group">
 <div class="field-label">Invite users (optional)</div>
 <div style="display:flex;gap:8px;margin-bottom:10px;">
 <input class="field-input" type="text" id="edit-match-user-search" oninput="searchUsersEditMatch()" placeholder="Search by name or email…" style="flex:1;">
 <button onclick="searchUsersEditMatch()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Search</button>
 </div>
 <div id="edit-match-search-results"></div>
 </div>
 <div class="field-group">
 <div class="field-label">Additional Shooters in This Match</div>
 <button class="btn-secondary" onclick="openModal('modal-add-shooter')" style="width:100%;margin-bottom:10px;">Add shooter</button>
 <div id="edit-match-shooters-list"></div>
 </div>
 <button class="btn-primary" onclick="saveEditMatch()">${d("save")}</button>
 <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;margin-top:10px;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;display:none;">${dt==="no"?"Delete Match":"DELETE MATCH"}</button>
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
 <option value="Optics">Optics</option>
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
 <div class="modal-title">Upload Result</div>
 <div class="modal-close" onclick="closeModal('modal-upload-result')">✕</div>
 </div>
 <div class="modal-body">
 <div style="margin-bottom:15px;padding:10px;background:var(--bg);border-radius:8px;">
 <div style="font-size:12px;color:var(--muted);margin-bottom:4px;">Match:</div>
 <div id="upload-match-name" style="font-size:14px;font-weight:600;color:var(--text);">—</div>
 </div>
 <div class="field-group">
 <div class="field-label">Select Stage</div>
 <select class="field-select" id="upload-stage-select"></select>
 <button class="btn-secondary" style="margin-top:10px;" onclick="openCreateStageFromUpload()>+ Stage</button>
 </div>
 <div class="field-group">
 <div class="field-label">Select Shooter</div>
 <select class="field-select" id="upload-shooter-select"></select>
 </div>
 <div class="field-group">
 <div class="field-label">Last opp bilde (png, jpg, pdf)</div>
 <input class="field-input" type="file" id="upload-result-file" accept="image/png,image/jpeg,image/jpg,application/pdf">
 </div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><button class="btn-secondary" id="upload-manual-btn" onclick="icOpenManualResult()">Enter Manually</button><button class="btn-primary" id="upload-ess-btn" onclick="importESSVerify(event)">ESS/SSI</button></div>
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
 <div id="ocr-confirm-desc" style="margin-bottom:15px;color:var(--muted);font-size:13px;">Review and edit the values below. Points are calculated automatically based on Minor/Major and hit distribution.</div>
 <div class="field-group">
 <div class="field-label">Time (s)</div>
 <input class="field-input" type="number" step="0.01" id="ocr-time">
 </div>
 <div class="field-group">
 <div class="field-label">Points</div>
 <input class="field-input" type="number" id="ocr-points" readonly style="background:var(--bg);">
 </div>
 <div class="section-label" style="margin-top:15px;">Hit Pattern</div>
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
 <button class="btn-primary" id="ocr-save-btn" onclick="saveOCRResult()">Save Result</button>
 </div>
 </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
 <div class="modal-sheet" onclick="event.stopPropagation()">
 <div class="modal-header">
 <div><div class="modal-title" id="modal-add-title">${d("add_result")}</div><div id="modal-add-shooter-name" style="font-size:13px;color:var(--accent);font-weight:600;margin-top:2px;"></div></div>
 <div class="modal-close" onclick="closeModal('modal-add')">✕</div>
 </div>
 <div class="modal-body">
 <input type="hidden" id="new-result-stage">
 <div class="field-group">
 </div>
 <div class="field-group">
 <div class="field-label">Time (s)</div>
 <input class="field-input" type="number" step="0.01" id="new-result-time">
 </div>
 <div class="field-group">
 <div class="field-label">Stage Requirements</div>
 <div id="new-result-stage-info" style="padding:12px;background:var(--bg);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--muted);font-size:13px;">Select Stage</div>
 </div>
 <div class="field-group">
 <div class="field-label">Points</div>
 <input class="field-input" type="number" id="new-result-points" readonly style="background:var(--bg);">
 </div>
 <div class="section-label" style="margin-top:15px;">Hit Pattern</div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
 <div class="field-group">
 <div class="field-label">A (auto)</div>
 <input class="field-input" type="number" id="new-result-a" value="0" readonly style="text-align:center;background:var(--card);color:var(--text);-webkit-text-fill-color:var(--text);opacity:1;">
 </div>
 <div class="field-group">
 <div class="field-label">C</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-c',-1)">−</button>
 <div id="new-result-c-disp" style="text-align:center;font-size:15px;font-weight:700;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-c-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-c',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">D</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-d',-1)">−</button>
 <div id="new-result-d-disp" style="text-align:center;font-size:15px;font-weight:700;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-d-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-d',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">Miss</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-miss',-1)">−</button>
 <div id="new-result-miss-disp" style="text-align:center;font-size:15px;font-weight:700;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-miss-val" value="0">
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
 <div id="new-result-ns-disp" style="text-align:center;font-size:15px;font-weight:700;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-ns-val" value="0">
 <button type="button" class="btn-primary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-ns',1)">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">Proc (Procedural)</div>
 <div style="display:grid;grid-template-columns:52px 1fr 52px;gap:10px;align-items:center;">
 <button type="button" class="btn-secondary" style="height:44px;border:none;border-radius:8px;cursor:pointer;" onclick="adjustResultField('new-result-proc',-1)">−</button>
 <div id="new-result-proc-disp" style="text-align:center;font-size:15px;font-weight:700;color:var(--text);background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:11px 16px;min-width:0;">0</div><input type="hidden" id="new-result-proc-val" value="0">
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
 <button onclick="changeStageNumber(-1)" style="width:44px;height:44px;font-size:18px;background:rgba(255,255,255,0.06);color:var(--text);border:1px solid rgba(255,255,255,0.1);border-radius:8px;cursor:pointer;"></button>
 <input class="field-input" type="number" id="stage-number" value="1" readonly style="text-align:center;font-size:15px;font-weight:700;width:80px;">
 <button onclick="changeStageNumber(1)" style="width:44px;height:44px;font-size:18px;background:rgba(255,255,255,0.06);color:var(--text);border:1px solid rgba(255,255,255,0.1);border-radius:8px;cursor:pointer;">+</button>
 </div>
 </div>
 <div class="field-group">
 <div class="field-label">${d("stage_name")}</div>
 <input class="field-input" type="text" id="stage-name" placeholder="Name" style="font-size:15px;font-weight:700;">
 </div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px;">
  <div style="display:flex;flex-direction:column;gap:4px;">
 <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.38);text-transform:uppercase;">${d("paper_targets")}</div>
 <div style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
  <button onclick="changeStageField('paper-targets', -1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-right:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">−</button>
  <input class="field-input" type="number" id="stage-paper-targets" value="0" readonly style="text-align:center;font-size:16px;font-weight:700;width:100%;background:transparent;border:none;color:#f0f2f5;padding:0;">
  <button onclick="changeStageField('paper-targets', 1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-left:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">+</button>
 </div>
</div>
  <div style="display:flex;flex-direction:column;gap:4px;">
 <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.38);text-transform:uppercase;">${d("poppers")}</div>
 <div style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
  <button onclick="changeStageField('poppers', -1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-right:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">−</button>
  <input class="field-input" type="number" id="stage-poppers" value="0" readonly style="text-align:center;font-size:16px;font-weight:700;width:100%;background:transparent;border:none;color:#f0f2f5;padding:0;">
  <button onclick="changeStageField('poppers', 1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-left:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">+</button>
 </div>
</div>
  <div style="display:flex;flex-direction:column;gap:4px;">
 <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.38);text-transform:uppercase;">${d("plates")}</div>
 <div style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
  <button onclick="changeStageField('plates', -1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-right:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">−</button>
  <input class="field-input" type="number" id="stage-plates" value="0" readonly style="text-align:center;font-size:16px;font-weight:700;width:100%;background:transparent;border:none;color:#f0f2f5;padding:0;">
  <button onclick="changeStageField('plates', 1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-left:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">+</button>
 </div>
</div>
  <div style="display:flex;flex-direction:column;gap:4px;">
 <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.38);text-transform:uppercase;">${d("no_shoots")}</div>
 <div style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
  <button onclick="changeStageField('no-shoots', -1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-right:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">−</button>
  <input class="field-input" type="number" id="stage-no-shoots" value="0" readonly style="text-align:center;font-size:16px;font-weight:700;width:100%;background:transparent;border:none;color:#f0f2f5;padding:0;">
  <button onclick="changeStageField('no-shoots', 1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-left:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">+</button>
 </div>
</div>
  <div style="display:flex;flex-direction:column;gap:4px;">
 <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;color:rgba(255,255,255,0.38);text-transform:uppercase;">${d("bonus_paper_targets")}</div>
 <div style="display:flex;align-items:center;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;">
  <button onclick="changeStageField('bonus-paper-targets', -1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-right:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">−</button>
  <input class="field-input" type="number" id="stage-bonus-paper-targets" value="0" readonly style="text-align:center;font-size:16px;font-weight:700;width:100%;background:transparent;border:none;color:#f0f2f5;padding:0;">
  <button onclick="changeStageField('bonus-paper-targets', 1)" style="width:40px;height:42px;font-size:18px;font-weight:700;background:transparent;color:rgba(255,255,255,0.6);border:none;border-left:1px solid rgba(255,255,255,0.08);cursor:pointer;flex-shrink:0;">+</button>
 </div>
</div>
  <div></div>
 </div>
 <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"><button onclick="deleteCurrentStage()" style="padding:14px;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.4);border-radius:12px;color:#f87171;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">DELETE STAGE</button><button class="btn-primary" onclick="saveStage()" style="margin-top:0;">${d("save")}</button></div>
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
 <div class="field-label">Search by name or email</div>
 <div style="display:flex;gap:8px;">
 <input class="field-input" type="text" id="user-search-input" placeholder="Search..." style="flex:1;" oninput="searchUsers()">
 <button onclick="searchUsers()" style="width:80px;padding:12px;background:#e8b84b;color:#1a202c;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Search</button>
 </div>
 </div>
 <div id="user-search-results" style="margin-top:15px;">
 <!-- Populated by JavaScript -->
 </div>
 <button id="send-invitations-btn" class="btn-primary" onclick="sendMultipleInvitations()" style="margin-top:15px;display:none;">Send Invitations (0 selected)</button>
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
 <div class="modal-title">&#128465;</div>
 <div class="modal-close" onclick="closeModal('modal-confirm-delete')">✕</div>
 </div>
 <div class="modal-body">
 <p style="margin-bottom:15px;">Are you sure you want to delete denne matchen?</p>
 <div id="delete-match-name" style="padding:12px;background:#374151;border-radius:8px;margin-bottom:15px;font-weight:600;"></div>
 <p style="color:#ef4444;margin-bottom:20px;">This action cannot be undone.</p>
 <div style="display:flex;gap:10px;">
 <button onclick="closeModal('modal-confirm-delete')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Cancel</button>
 <button onclick="deleteMatchConfirmed()" style="flex:1;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">&#128465;</button>
 </div>
 </div>
 </div>
</div>

<div class="modal-overlay" id="modal-create-team" onclick="closeModalOutside(event,'modal-create-team')">
 <div class="modal-sheet" onclick="event.stopPropagation()">
 <div class="modal-header">
 <div class="modal-title" id="team-modal-title">Create team</div>
 <div class="modal-close" onclick="closeModal('modal-create-team')">✕</div>
 </div>
 <div class="modal-body">
 <div class="field-group">
 <div class="field-label">Team name</div>
 <input class="field-input" type="text" id="team-name-input" placeholder="e.g. Team USA">
 </div>
 <div class="field-group">
 <div class="field-label">Country</div>
 <select class="field-select" id="team-country-input">
 <option value="">Select Country...</option>
 </select>
 </div>
 <div class="field-group">
 <div class="field-label">Select Shooters (max 4)</div>
 <div id="team-shooter-list" style="margin-top:8px;"></div>
 </div>
 <button class="btn-primary" onclick="saveTeam()">Save team</button>
 </div>
 </div>
</div>

</div>
 `,is(),gt(),te(),fe(),vt(),De();if(R)pt(R)}function is(){window.toggleMatchDropdown=ds,window.switchTab=ss,window.setFilter=rs,window.showSpinner=function(t){var s=document.getElementById("global-spinner"),l=document.getElementById("spinner-text");if(s){s.style.display="flex";s.style.pointerEvents="auto"}if(l)l.textContent=t||""},window.hideSpinner=function(){var s=document.getElementById("global-spinner");if(s){s.style.display="none";s.style.pointerEvents="none"}},window.openModal=ie,window.closeModal=G,window.closeModalOutside=ns,window.createMatch=os,window.searchMatchByIdHandler=ls,window.openEditProfile=Ns,window.saveProfileData=Fs,window.selectPF=$s,window.updatePFOptions=mt,window.calcPrognose=De,window.renderMatchList=fe,window.selectMatch=pt,window.addShooter=Os,window.addStageResult=js,window.adjustResultField=adjustResultField,window.updateNewShooterPFOptions=icUpdateNewShooterPFOptions,window.removeEditMatchShooter=removeEditMatchShooter,window.handleLogout=Ks,window.openEditMatch=ps,window.saveEditMatch=us,window.openCreateStage=Re,window.openCreateStageFromEdit=ms,window.openCreateStageFromNewMatch=hs,window.openEditStage=fs,window.changeStageNumber=bs,window.changeStageField=ys,window.saveStage=ws,
window.icOpenEditStageResult=icOpenEditStageResult;function icPopulateTeamCountry(selected){
  var el=document.getElementById("team-country-input");
  if(!el)return;
  el.innerHTML='<option value="">Select Country...</option>';
  Xi.forEach(function(c){
    var opt=document.createElement("option");
    opt.value=c;opt.textContent=c;
    if(c===selected)opt.selected=true;
    el.appendChild(opt);
  });
}
window.icPopulateTeamCountry=icPopulateTeamCountry,window.deleteCurrentStage=deleteCurrentStage,window.openInviteUser=ks,window.openInvitationsModal=Is,window.acceptInvitation=Cs,window.declineInvitation=_s,window.searchUsers=xs,window.toggleUserSelection=Ss,window.sendMultipleInvitations=Ls,window.searchUsersNewMatch=Ps,window.toggleUserNewMatch=Es,window.searchUsersEditMatch=Ts,window.toggleUserEditMatch=Ms,window.confirmDeleteMatch=gs,window.deleteMatchConfirmed=vs,window.uploadAndScanResult=Hs,window.saveOCRResult=Gs,window.icOpenManualResult=icOpenManualResult,window.importESSVerify=importESSVerify,window.essConfirmPaste=essConfirmPaste;window.essSelectAllStages=essSelectAllStages,window.openCreateStageFromUpload=Us,window.toggleMatchDropdown=ds,window.selectMatchFromDropdown=cs,window.toggleReferenceShootersEnabled=toggleReferenceShootersEnabled,window.toggleReferenceShooterChoice=toggleReferenceShooterChoice,window.updateReferenceShooterOverride=updateReferenceShooterOverride,window.toggleLiveFilter=toggleLiveFilter,window.toggleTips=toggleTips,window.deleteRun=deleteRun,window.openCreateTeam=openCreateTeam,window.editTeam=editTeam,window.deleteTeam=deleteTeam,window.saveTeam=saveTeam,window.renderTeamsScreen=renderTeamsScreen;window.toggleTeamDetail=toggleTeamDetail;window.toggleDQ=toggleDQ;window.refreshFromFirebase=refreshFromFirebase;window.uploadProfilePhoto=uploadProfilePhoto}async function refreshFromFirebase(){const btns=document.querySelectorAll('.nav-refresh-btn');btns.forEach(function(b){b.classList.add('spinning');b.disabled=true;});try{const results=await Promise.all([jt(),loadReferenceShooters(),Vt()]);const newProfile=results[0];const newRefs=results[1];const newMatches=results[2];if(newProfile){g=newProfile;}refShooters=newRefs;$=newMatches;if($&&$.length>0&&R){const still=$.find(function(m){return m.id!=null&&m.id.toString()===String(R);});if(!still){R=null;}}if($&&$.length>0&&!R){const now=new Date();const active=$.filter(function(m){return m.status!=='finished'&&m.date;});if(active.length>0){let best=active[0];let bestDiff=Math.abs(new Date(active[0].date)-now);for(const m of active){const diff=Math.abs(new Date(m.date)-now);if(diff<bestDiff){bestDiff=diff;best=m;}}R=best.id;}}const screens=document.querySelectorAll('.screen.active');const activeId=screens.length>0?screens[0].id:null;try{gt();}catch(e){}try{fe();}catch(e){}try{te();}catch(e){}try{_e();}catch(e){}try{De();}catch(e){}try{vt();}catch(e){}if(activeId==='screen-teams'){try{renderTeamsScreen();}catch(e){}}if(R){try{pt(R);}catch(e){}}}catch(err){console.error('refreshFromFirebase error:',err);}finally{btns.forEach(function(b){b.classList.remove('spinning');b.disabled=false;});}}function toggleTeamDetail(el){var id=el.dataset?el.dataset.tid:el;var row=document.getElementById(id);if(row)row.style.display=row.style.display==='none'?'table-row':'none';}
function toggleDQ(matchId,shooterId){
  const match=$.find(e=>e.id!=null&&e.id.toString()===String(matchId));
  if(!match)return;
  const shooter=(match.shooters||[]).find(s=>String(s.id)===String(shooterId));
  if(!shooter)return;
  shooter.dq=!shooter.dq;
  Ee(matchId,{shooters:match.shooters}).then(function(res){
    if(res.success){renderTeamsScreen();}
    else{shooter.dq=!shooter.dq;alert("Unable to update DQ status: "+res.error);}
  });
}
function essSelectAllStages(checked){
  var boxes=document.querySelectorAll("#ess-stage-checkboxes input[type=checkbox]");
  boxes.forEach(function(b){b.checked=checked;});
}
function toggleLiveFilter(){liveShowAll=!liveShowAll,_e()}function toggleTips(id){const el=document.getElementById(id);if(el){const open=el.style.display!=="none";el.style.display=open?"none":"block";const ch=document.getElementById("chev-"+id);if(ch)ch.style.transform=open?"rotate(0deg)":"rotate(180deg)";}}async function deleteRun(stageNum,runIdx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match)return;const shooter=icCurrentShooter(match);if(!shooter)return;const stageIdx=shooter.stages.findIndex(s=>(s.num||s.number)==stageNum);if(stageIdx<0)return;const stage=shooter.stages[stageIdx];if(!stage.runs||stage.runs.length<=1){alert("Cannot delete the last run. Delete the entire result instead.");return;}if(!confirm("Delete Run "+(runIdx+1)+"?"))return;stage.runs.splice(runIdx,1);stage.runs.forEach((r,i)=>{r.runNum=i+1});const best=stage.runs.reduce((a,b)=>(b.hf||0)>(a.hf||0)?b:a,stage.runs[0]);Object.assign(stage,best,{num:stage.num,name:stage.name,runs:stage.runs});const res=await Ee(match.id,{shooters:match.shooters});if(res.success){te(),_e(),De()}else alert("Unable to delete run: "+res.error);}function icTeamStandings(e){
  if(!e||!e.teams||!e.teams.length)return[];
  const stages=icStageDefs(e);
  // Build DQ set
  const dqIds=new Set((e.shooters||[]).filter(s=>s.dq).map(s=>String(s.id)));

  return e.teams.map(team=>{
    const shooterIds=(team.shooterIds||[]);
    const allShooters=(e.shooters||[]).filter(s=>shooterIds.includes(s.id));

    // Step 1: compute total stage points per shooter across ALL stages
    const shooterTotals={};
    shooterIds.forEach(id=>{shooterTotals[id]=0;});
    stages.forEach(stage=>{
      const metrics=icStageMetricsForMatch(e,stage);
      shooterIds.forEach(id=>{
        if(dqIds.has(String(id)))return; // DQ = 0
        const m=metrics.find(mm=>String(mm.id)===String(id));
        if(m)shooterTotals[id]+=(m.stagePts||0);
      });
    });

    // Step 2: pick top 3 shooters by total (fixed for entire match)
    const ranked=shooterIds
      .map(id=>({id,total:shooterTotals[id]||0}))
      .sort((a,b)=>b.total-a.total);
    const top3Ids=ranked.slice(0,3).map(r=>r.id);
    const benchId=ranked.length>3?ranked[3].id:null;

    // Step 3: compute team total using ONLY top 3 shooters across all stages
    let totalPts=0;
    const stageBreakdown=[];
    stages.forEach(stage=>{
      const metrics=icStageMetricsForMatch(e,stage);
      let stagePts=0;
      const top3Details=[];
      top3Ids.forEach(id=>{
        const m=metrics.find(mm=>String(mm.id)===String(id));
        const pts=dqIds.has(String(id))?0:(m?m.stagePts||0:0);
        const hf=dqIds.has(String(id))?0:(m?m.hf||0:0);
        const name=allShooters.find(s=>String(s.id)===String(id));
        const shortName=name?((name.firstName||'')+' '+(name.lastName||'')).trim():'?';
        stagePts+=pts;
        top3Details.push({id,name:shortName,stagePts:pts,hf,dq:dqIds.has(String(id))});
      });
      totalPts+=stagePts;
      stageBreakdown.push({stageNum:stage.number||stage.num,stagePts,top3:top3Details});
    });

    // Build shooter summary for display
    const shooterSummary=ranked.map((r,ri)=>{
      const s=allShooters.find(sh=>String(sh.id)===String(r.id));
      const name=s?((s.firstName||'')+' '+(s.lastName||'')).trim():'?';
      return{id:r.id,name,total:r.total,counting:ri<3,dq:dqIds.has(String(r.id))};
    });

    return{
      id:team.id,name:team.name,country:team.country||'',
      shooterIds,totalPts,stageBreakdown,
      shooterSummary,top3Ids,benchId,
      shooters:allShooters,dqIds
    };
  }).sort((a,b)=>b.totalPts-a.totalPts);
}function renderTeamsScreen(){
  const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));
  const sc=o("teams-standings-container");
  const lc=o("teams-list-container");
  if(!sc||!lc)return;
  if(!match){
    sc.innerHTML="<div class='empty-state'><div class='empty-sub'>"+d("select_match_first")+"</div></div>";
    lc.innerHTML="";return;
  }
  const teams=match.teams||[];
  if(!teams.length){
    sc.innerHTML="<div class='empty-state'><div class='empty-title'>"+d("no_teams")+"</div><div class='empty-sub'>"+d("create_team_hint")+"</div></div>";
    lc.innerHTML="";return;
  }
  const standings=icTeamStandings(match);
  const topPts=standings.length?standings[0].totalPts:0;

  // Build standings table
  var sh="<div class='card'><div class='card-header'><div class='card-title'>"+d("team_standings")+"</div></div>";
  sh+="<div class='standings-table-wrap'><table class='standings-table'>";
  sh+="<thead><tr class='standings-header-row'><th class='standings-th'>#</th><th class='standings-th'>"+d("team_col")+"</th><th class='standings-th standings-th-pts'>STG PTS</th><th class='standings-th standings-th-pct'>%</th></tr></thead><tbody>";
  standings.forEach(function(t,i){
    var pct=topPts>0?(t.totalPts/topPts*100).toFixed(2):"0.00";
    var detId="team-detail-"+t.id;
    sh+="<tr class='standings-row' onclick='toggleTeamDetail(this)' data-tid='"+detId+"' style='cursor:pointer;'>";
    sh+="<td class='standings-td'>"+(i+1)+"</td>";
    sh+="<td class='standings-td'>"+t.name+"</td>";
    sh+="<td class='standings-td standings-td-pts'>"+t.totalPts.toFixed(2)+"</td>";
    sh+="<td class='standings-td standings-td-pct'>"+pct+"%</td>";
    sh+="</tr>";
    // Expandable detail row
    sh+="<tr id='"+detId+"' style='display:none;'><td colspan='4' style='padding:0;'>";
    sh+="<table style='width:100%;font-size:11px;border-collapse:collapse;background:rgba(255,255,255,0.03);'>";
    sh+="<tr style='color:var(--muted);border-bottom:1px solid var(--border);'><th style='padding:4px 8px;text-align:left;'>Stage</th><th style='padding:4px 4px;text-align:right;'>STG PTS</th><th style='padding:4px 8px;text-align:left;'>Top 3 (pts)</th></tr>";
    (t.stageBreakdown||[]).forEach(function(sb){
      var shooterList=sb.top3.map(function(m){
        var col=m.dq?"#ef4444":"var(--accent)";
        return "<span style='margin-right:8px;'>"+m.name.split(" ")[0]+" <span style='color:"+col+";'>"+m.stagePts.toFixed(1)+"</span>"+(m.dq?" <span style='color:#ef4444;'>[DQ]</span>":"")+"</span>";
      }).join("");
      sh+="<tr style='border-bottom:1px solid rgba(255,255,255,0.04);'>";
      sh+="<td style='padding:4px 8px;color:var(--muted);'>S"+sb.stageNum+"</td>";
      sh+="<td style='padding:4px 4px;text-align:right;font-weight:600;'>"+sb.stagePts.toFixed(2)+"</td>";
      sh+="<td style='padding:4px 8px;'>"+shooterList+"</td>";
      sh+="</tr>";
    });
    sh+="</table></td></tr>";
  });
  sh+="</tbody></table></div></div>";
  sc.innerHTML=sh;

  // Build team cards
  var lh="";
  standings.forEach(function(t){
    var origIdx=(match.teams||[]).findIndex(function(tm){return tm.id===t.id;});
    var divs=[...new Set((t.shooters||[]).map(function(s){return s.division||"";}).filter(Boolean))];
    var divWarning=divs.length>1?"<div style='font-size:11px;color:#ef4444;margin-top:6px;'>&#9888; "+d("mixed_divisions")+": "+divs.join(", ")+"</div>":"";
    lh+="<div class='card' style='margin-bottom:10px;'>";
    lh+="<div class='card-header'><div class='card-title'>"+(t.country?t.country+" ":"")+t.name+"</div>";
    lh+="<div style='display:flex;gap:8px;'>";
    lh+="<button onclick='editTeam("+origIdx+")' style='padding:6px 12px;background:var(--accent);color:#1a202c;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;'>"+d("edit_btn")+"</button>";
    lh+="<button onclick='deleteTeam("+origIdx+")' style='padding:6px 12px;background:#ef4444;color:white;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;'>"+d("delete_btn")+"</button>";
    lh+="</div></div>";
    lh+=divWarning;
    lh+="<div style='margin-top:10px;'>";
    (t.shooterSummary||[]).forEach(function(s){
      var isDQ=s.dq;
      var counting=s.counting&&!isDQ;
      var bg=counting?"rgba(76,175,125,0.08)":"rgba(255,255,255,0.02)";
      var badge=isDQ
        ?"<span style='font-size:10px;padding:2px 6px;background:rgba(239,68,68,0.2);color:#ef4444;border-radius:4px;margin-left:6px;'>DQ</span>"
        :counting
          ?"<span style='font-size:10px;padding:2px 6px;background:rgba(76,175,125,0.2);color:var(--green);border-radius:4px;margin-left:6px;'>&#9679;</span>"
          :"<span style='font-size:10px;padding:2px 6px;background:rgba(255,255,255,0.08);color:var(--muted);border-radius:4px;margin-left:6px;'>bench</span>";
      var nameStyle=isDQ?"color:#ef4444;text-decoration:line-through;":counting?"":"color:var(--muted);";
      lh+="<div style='display:flex;align-items:center;justify-content:space-between;padding:6px 8px;border-radius:6px;background:"+bg+";margin-bottom:3px;'>";
      lh+="<span style='font-size:13px;"+nameStyle+"'>"+s.name+badge+"</span>";
      lh+="<div style='display:flex;align-items:center;gap:8px;'>";
      lh+="<span style='font-size:12px;color:"+(counting?"var(--accent)":"var(--muted)")+";'>"+s.total.toFixed(1)+" pts</span>";
      lh+="<button onclick='toggleDQ("+JSON.stringify(match.id)+","+JSON.stringify(s.id)+")' style='padding:3px 8px;font-size:11px;border:none;border-radius:6px;cursor:pointer;background:"+(isDQ?"rgba(239,68,68,0.2)":"rgba(255,255,255,0.08)")+";color:"+(isDQ?"#ef4444":"var(--muted)")+";'>"+(isDQ?d("undo_dq"):d("mark_dq"))+"</button>";
      lh+="</div></div>";
    });
    lh+="</div>";
    lh+="</div>";
  });
  lc.innerHTML=lh;
}let currentEditTeamIdx=null;function openCreateTeam(){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match){alert("Select a match first");return;}currentEditTeamIdx=null;o("team-modal-title").textContent="Create team";o("team-name-input").value="";icPopulateTeamCountry("");renderTeamShooterList(match,null);ie("modal-create-team")}function editTeam(idx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match||!match.teams||!match.teams[idx])return;currentEditTeamIdx=idx;const team=match.teams[idx];o("team-modal-title").textContent="Edit Team";o("team-name-input").value=team.name||"";icPopulateTeamCountry(team.country||"");renderTeamShooterList(match,team.shooterIds||[]);ie("modal-create-team")}function renderTeamShooterList(match,selectedIds){const container=o("team-shooter-list");if(!container)return;const allShooters=(match.shooters||[]);const usedIds=new Set();(match.teams||[]).forEach((t,i)=>{if(i===currentEditTeamIdx)return;(t.shooterIds||[]).forEach(id=>usedIds.add(id))});let html="";allShooters.forEach(s=>{const name=((s.firstName||"")+" "+(s.lastName||"")).trim()||"Shooter";const checked=selectedIds&&selectedIds.includes(s.id);const disabled=!checked&&usedIds.has(s.id);html+='<label style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--bg);border-radius:8px;margin-bottom:8px;cursor:'+(disabled?"not-allowed":"pointer")+';">';html+='<input type="checkbox" value="'+s.id+'" '+(checked?"checked":"")+(disabled?" disabled":"")+(disabled?"":' onchange="enforceTeamLimit(this)"')+ ' style="width:18px;height:18px;">';html+='<div><div style="font-weight:600;"'+(disabled?' style="color:var(--muted);"':'')+">"+ name+"</div>";if(disabled)html+='<div style="font-size:11px;color:var(--muted);">Allerede på et lag</div>';html+="</div></label>"});if(!allShooters.length)html='<div style="color:var(--muted);font-size:13px;">'+d('no_shooters_in_match')+'</div>';container.innerHTML=html}function enforceTeamLimit(el){const checked=o("team-shooter-list").querySelectorAll("input:checked");if(checked.length>4){el.checked=false;alert("Maximum 4 shooters per team")}}async function saveTeam(){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match)return;const name=(o("team-name-input").value||"").trim();if(!name){alert("Team name cannot be empty");return;}const country=(o("team-country-input")&&o("team-country-input").value)||"";const checkboxes=o("team-shooter-list").querySelectorAll("input[type=checkbox]:checked");const shooterIds=Array.from(checkboxes).map(c=>c.value);if(shooterIds.length>4){alert("Maximum 4 shooters per team");return;}
// Rule 6.4.2: check one shooter not on two teams
const otherTeams=(match.teams||[]).filter((_,i)=>currentEditTeamIdx===null||i!==currentEditTeamIdx);
const takenIds=otherTeams.flatMap(t=>t.shooterIds||[]);
const duplicate=shooterIds.find(id=>takenIds.includes(id));
if(duplicate){const s=(match.shooters||[]).find(sh=>String(sh.id)===String(duplicate));const sName=s?((s.firstName||"")+" "+(s.lastName||"")).trim():"Shooter";alert(sName+" is already on another team in this match.");return;}
// Rule 6.4.2: check same division
const members=(match.shooters||[]).filter(s=>shooterIds.includes(s.id));
const divs=[...new Set(members.map(s=>s.division||"").filter(Boolean))];
if(divs.length>1){if(!confirm("Warning: shooters are from different divisions ("+divs.join(", ")+"). IPSC rules require the same division. Save anyway?"))return;}
match.teams=match.teams||[];if(currentEditTeamIdx!==null){match.teams[currentEditTeamIdx]={...match.teams[currentEditTeamIdx],name,country,shooterIds}}else{match.teams.push({id:"team_"+Date.now(),name,country,shooterIds})}const res=await Ee(match.id,{teams:match.teams});if(res.success){G("modal-create-team");renderTeamsScreen()}else alert("Unable to save team: "+res.error)}async function deleteTeam(idx){const match=$.find(e=>e.id!=null&&e.id.toString()===String(R));if(!match||!match.teams)return;const team=match.teams[idx];if(!confirm("Delete team "+team.name+"?"))return;match.teams.splice(idx,1);const res=await Ee(match.id,{teams:match.teams});if(res.success)renderTeamsScreen();else alert("Unable to delete team: "+res.error)}function ss(e){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".tab-item").forEach(s=>s.classList.remove("active")),o(e).classList.add("active");document.querySelectorAll(".ipad-nav-item").forEach(s=>s.classList.remove("active"));const _ipadNavMap={"screen-home":"ipad-nav-home","screen-matches":"ipad-nav-matches","screen-prognose":"ipad-nav-prog","screen-results":"ipad-nav-results","screen-teams":"ipad-nav-teams","screen-profile":"ipad-nav-profile"};if(_ipadNavMap[e]){const _n=document.getElementById(_ipadNavMap[e]);if(_n)_n.classList.add("active");}const i=["screen-home","screen-matches","screen-prognose","screen-results","screen-teams","screen-profile"].indexOf(e),t=document.querySelectorAll(".tab-item");t[i]&&t[i].classList.add("active");document.querySelectorAll(".tab-bar").forEach(function(bar){var items=bar.querySelectorAll(".tab-item");if(items[i])items[i].classList.add("active");}),e==="screen-home"&&te(),e==="screen-matches"&&fe(),e==="screen-results"&&_e(),e==="screen-teams"&&(renderTeamsScreen(),R&&pt(R))}function ie(e){o(e).classList.add("open"),e==="modal-upload-result"&&as(),e==="modal-add-shooter"&&icUpdateNewShooterPFOptions(),e==="modal-add"&&icInitManualResult()}async function as(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e)return;const i=o("upload-match-name");i&&(i.textContent=e.name||"Unknown Match");const t=o("upload-stage-select"),s=icStageDefs(e);if(t.innerHTML="",s.length>0)s.forEach(n=>{const r=document.createElement("option");r.value=n.number,r.textContent=n.name&&n.name!=="Stage "+n.number?`Stage ${n.number} - ${n.name}`:`Stage ${n.number}`,t.appendChild(r)});else{const n=document.createElement("option");n.value="",n.textContent="No stages — create one",t.appendChild(n)}const a=o("upload-shooter-select");a.innerHTML="";const n=new Set,r=icCurrentShooterId(),u=document.createElement("option");u.value=r,u.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",a.appendChild(u),n.add(r);if(e.participants&&e.participants.length>0)for(const m of e.participants)if(!n.has(m))try{const b=await Ut(m);if(b){const f=document.createElement("option");f.value=m,f.textContent=(b.firstName||"")+" "+(b.lastName||""),a.appendChild(f),n.add(m)}}catch(b){console.error("Error fetching user:",m,b)}e.shooters&&e.shooters.length>0&&e.shooters.forEach(m=>{if(!n.has(m.id)){const b=document.createElement("option");b.value=m.id,b.textContent=(m.firstName||"")+" "+(m.lastName||""),a.appendChild(b),n.add(m.id)}})}function G(e){o(e).classList.remove("open")}function ns(e,i){e.target.id===i&&G(i)}function rs(e,i){ue=e,document.querySelectorAll(".filter-chip").forEach(t=>t.classList.remove("active")),i.classList.add("active"),fe()}async function os(){var t;const e={name:F("new-match-name")||"New match",type:F("new-match-type")||"Trening",date:F("new-match-date")||new Date().toISOString().split("T")[0],location:F("new-match-location")||"",plannedStages:A("new-match-stages",6),searchable:((t=o("new-match-searchable"))==null?void 0:t.checked)!==!1,status:"active",stages:[],shooters:[],referenceShootersEnabled:!1,referenceShooterIds:[],referenceOverrides:{}};showSpinner("Creating match…");zt(e).then(function(i){hideSpinner();if(i.success){let s=0;Promise.all(ve.map(function(a){return Ge(a.email,{matchId:i.matchId,matchName:e.name})})).then(function(results){results.forEach(function(r){if(r.success)s++});G("modal-new-match");o("new-match-name").value="";o("new-match-location").value="";o("new-match-stages").value="6";o("new-match-searchable")&&(o("new-match-searchable").checked=!0);o("new-match-user-search").value="";o("new-match-search-results").innerHTML="";ve=[];if(s>0)alert("Match created! Invitations sent to "+s+" user(s).")})}else alert("Unable to create match: "+i.error)})}async function ls(){const e=F("match-id-search").trim();if(!e){alert("Please enter a match ID");return}const i=await Kt(e);if(i.success){const t=$.findIndex(s=>s.id&&s.id.toString()===i.match.id.toString());t!==-1?R=$[t].id:($.unshift(i.match),R=i.match.id),pt(R),oe&&oe("screen-home"),o("match-id-search").value=""}else alert(`No match found with ID ${e}${i.error?": "+i.error:""}`)}function pt(e){R=e!=null?e.toString():e;const i=$.find(t=>t.id!=null&&t.id.toString()===R);if(i){const t=i.id?"Match ID "+i.id+" "+i.name:i.name||"Match";["home-chip-name","prog-chip-name","results-chip-name","teams-chip-name"].forEach(a=>{const n=o(a);n&&(n.textContent=t)})}xe&&xe(),R&&(xe=Wt(R,t=>{const s=$.findIndex(a=>a.id!=null&&a.id.toString()===R);s!==-1&&t&&($[s]=t,te(),_e())})),te(),_e(),De(),fe()}function ds(e){const i=e+"-match-dropdown",t=o(i);if(!t)return;if(t.classList.contains("open")){t.classList.remove("open");return}document.querySelectorAll(".match-dropdown").forEach(a=>a.classList.remove("open"));let s="";$.length===0?s+='<div class="match-dropdown-item" style="color:var(--muted);text-align:center;">No matches yet</div>':$.forEach(a=>{const n=a.id!=null&&a.id.toString()===String(R),r=a.id?"Match ID "+a.id+" "+a.name:a.name||"Match";s+='<div class="match-dropdown-item '+(n?"active":"")+`" onclick="selectMatchFromDropdown('`+a.id+"', '"+e+`')">`,s+='<div class="match-dropdown-dot"></div>',s+='<div class="match-dropdown-info">',s+='<div class="match-dropdown-name">'+r+"</div>",s+='<div class="match-dropdown-meta">'+We(a.date)+" · "+a.location+"</div>",s+="</div>",s+="</div>"}),t.innerHTML=s,t.classList.add("open")}function cs(e,i){pt(e);const t=i+"-match-dropdown",s=o(t);s&&s.classList.remove("open")}function ps(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("No match selected");return}o("edit-match-name").value=e.name||"",o("edit-match-type").value=e.type||"Trening",o("edit-match-date").value=e.date||"",o("edit-match-location").value=e.location||"",o("edit-match-stages").value=e.plannedStages||0,o("edit-match-searchable")&&(o("edit-match-searchable").checked=e.searchable!==!1),o("edit-match-finished")&&(o("edit-match-finished").checked=e.status==="finished");const i=o("edit-match-rival");i.innerHTML='<option value="">No rival selected</option>';const t=document.createElement("option");t.value="me",t.textContent="Meg ("+(g.firstName||"")+" "+(g.lastName||"")+")",i.appendChild(t),e.shooters&&e.shooters.length>0&&e.shooters.forEach(n=>{const r=document.createElement("option");r.value=n.id,r.textContent=n.firstName+" "+n.lastName,i.appendChild(r)}),e.rivalId&&(i.value=e.rivalId),o("edit-match-user-search").value="",o("edit-match-search-results").innerHTML="",me=[],initReferenceEditState(e),o("edit-match-reference-enabled")&&(o("edit-match-reference-enabled").checked=!!e.referenceShootersEnabled),renderReferenceShooterConfig();const s=Pe(),a=o("delete-match-btn");a&&s&&e.ownerId===s.uid?a.style.display="block":a&&(a.style.display="none"),icRenderEditMatchShootersList(e),ie("modal-edit-match")}async function us(){var s,a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("No match selected");return}refEditState.enabled=!!((o("edit-match-reference-enabled")||{}).checked);const i={name:F("edit-match-name")||e.name,type:F("edit-match-type")||e.type,date:F("edit-match-date")||e.date,location:F("edit-match-location")||e.location,plannedStages:A("edit-match-stages",e.plannedStages),searchable:((s=o("edit-match-searchable"))==null?void 0:s.checked)!==!1,status:(a=o("edit-match-finished"))!=null&&a.checked?"finished":"active",rivalId:F("edit-match-rival")||null,referenceShootersEnabled:!!refEditState.enabled,referenceShooterIds:(refEditState.ids||[]).slice(),referenceOverrides:JSON.parse(JSON.stringify(refEditState.overrides||{}))};showSpinner("Saving match…");Ee(e.id,i).then(function(t){hideSpinner();if(t.success){let n=0;Promise.all(me.map(function(r){return Ge(r.email,{matchId:e.id,matchName:i.name})})).then(function(results){results.forEach(function(r){if(r.success)n++});G("modal-edit-match");if(n>0)alert("Match updated! Invitations sent to "+n+" user(s).")})}else alert("Unable to update match: "+t.error)})}function gs(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("No match selected");return}const i=e.id?"Match ID "+e.id+" "+e.name:e.name;o("delete-match-name").textContent=i,ie("modal-confirm-delete")}async function vs(){const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("No match selected");return}showSpinner("Deleting match…");Gt(e.id).then(function(i){hideSpinner();if(i.success){G("modal-confirm-delete");G("modal-edit-match");R=null;te();fe();alert("Match deleted")}else alert("Unable to delete match: "+i.error)})}let Ce=null,Me=null;function Re(){var i;const e=$.find(t=>t.id!=null&&t.id.toString()===String(R));if(!e){alert("No match selected");return}Ce=null,o("stage-modal-title").textContent=d("create_stage"),o("stage-number").value=(((i=e.stages)==null?void 0:i.length)||0)+1,o("stage-name").value="",o("stage-paper-targets").value=0,o("stage-poppers").value=0,o("stage-plates").value=0,o("stage-no-shoots").value=0,o("stage-bonus-paper-targets").value=0,ie("modal-create-stage")}function ms(){G("modal-edit-match"),Re()}function hs(){G("modal-new-match"),Re()}function fs(e){const i=$.find(s=>s.id!=null&&s.id.toString()===String(R));if(!i||!i.stages||!i.stages[e]){alert("Stage could not be found");return}Ce=e;const t=i.stages[e];o("stage-modal-title").textContent=d("edit_stage"),o("stage-number").value=t.number||e+1,o("stage-name").value=t.name||"",o("stage-paper-targets").value=t.paperTargets||0,o("stage-poppers").value=t.poppers||0,o("stage-plates").value=t.plates||0,o("stage-no-shoots").value=t.noShoots||0,o("stage-bonus-paper-targets").value=t.bonusPaperTargets||0,ie("modal-create-stage")}function bs(e){const i=o("stage-number"),t=Math.max(1,parseInt(i.value)+e);i.value=t}function ys(e,i){const t=o("stage-"+e),s=Math.max(0,parseInt(t.value)+i);t.value=s}async function ws(){var a;const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e){alert("No match selected");return}const i={number:A("stage-number",1),name:F("stage-name")||"",paperTargets:A("stage-paper-targets",0),poppers:A("stage-poppers",0),plates:A("stage-plates",0),noShoots:A("stage-no-shoots",0),bonusPaperTargets:A("stage-bonus-paper-targets",0),bonusIncluded:true},t=e.stages||[];Ce!==null?t[Ce]=i:t.push(i);showSpinner("Saving stage…");Ee(e.id,{stages:t}).then(function(s){hideSpinner();if(s.success)G("modal-create-stage");else alert("Unable to save stage: "+s.error)})}function icOpenEditStageResult(stageNum,shooterId){
  const match=$.find(n=>n.id!=null&&n.id.toString()===String(R));
  if(!match){alert("No active match selected");return;}
  const stageDef=icStageDefs(match).find(s=>Number(s.number)===Number(stageNum));
  if(!stageDef){alert("Stage could not be found");return;}
  const shooter=match.shooters.find(s=>String(s.id)===String(shooterId)||(shooterId==="me"&&s.isMe));
  if(!shooter){alert("Shooter could not be found");return;}
  const res=(shooter.stages||[]).find(s=>Number(s.num||s.number)===Number(stageNum))||{};
  // Set edit mode BEFORE opening modal
  window._icEditMode={stageNum:Number(stageNum),shooterId:shooterId,shooterName:(shooter.firstName||"")+" "+(shooter.lastName||""),stageName:stageDef.name||("Stage "+stageNum)};
  icUploadShooterSel=shooterId;
  Me=Number(stageNum);
  // Open modal first (icInitManualResult runs inside ie())
  ie("modal-add");
  // Set hit values AFTER modal opens (overrides icInitManualResult)
  const stageEl=document.getElementById("new-result-stage");
  if(stageEl){stageEl.value=stageNum;}
  const shooterEl=document.getElementById("new-result-shooter-select");
  if(shooterEl){shooterEl.value=shooterId;}
  const timeEl=document.getElementById("new-result-time");if(timeEl)timeEl.value=res.time||"";
  // Cap hit values against totalHits to prevent bad data from Firebase
  const _totalHits=icStageShots(stageDef);
  let _resC=Math.max(0,res.c||0);
  let _resD=Math.max(0,res.d||0);
  let _resMiss=Math.max(0,res.miss||0);
  // Proportionally cap C+D+Miss to totalHits
  if(_totalHits>0&&(_resC+_resD+_resMiss)>_totalHits){const _excess=_resC+_resD+_resMiss-_totalHits;const _missCap=Math.max(0,_resMiss-Math.min(_resMiss,_excess));const _exAfterMiss=_resC+_resD+_resMiss-_totalHits-Math.min(_resMiss,_excess);const _dCap=Math.max(0,_resD-Math.min(_resD,_exAfterMiss));const _exAfterD=_resC+_resD+_resMiss-_totalHits-Math.min(_resMiss,_excess)-Math.min(_resD,_exAfterMiss);const _cCap=Math.max(0,_resC-Math.min(_resC,_exAfterD));_resC=_cCap;_resD=_dCap;_resMiss=_missCap;}else if(_totalHits===0){_resC=0;_resD=0;_resMiss=0;}
  const _resA=Math.max(0,_totalHits-(_resC+_resD+_resMiss));
  const aEl=document.getElementById("new-result-a-val");if(aEl)aEl.value=_resA;
  const cEl=document.getElementById("new-result-c-val");if(cEl)cEl.value=_resC;
  const dEl=document.getElementById("new-result-d-val");if(dEl)dEl.value=_resD;
  const missEl=document.getElementById("new-result-miss-val");if(missEl)missEl.value=_resMiss;
  // Update displays
  const cDispEl=document.getElementById("new-result-c-disp");if(cDispEl)cDispEl.textContent=_resC;
  const dDispEl=document.getElementById("new-result-d-disp");if(dDispEl)dDispEl.textContent=_resD;
  const missDispEl=document.getElementById("new-result-miss-disp");if(missDispEl)missDispEl.textContent=_resMiss;
  const nsEl=document.getElementById("new-result-ns-val");if(nsEl)nsEl.value=res.ns||0;
  const procEl=document.getElementById("new-result-proc-val");if(procEl)procEl.value=res.proc||0;
  icRecalcPoints("new-result");
  icUpdateManualStageInfo();
}
function deleteCurrentStage(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e||Ce===null||Ce===undefined){alert("No stage selected");return;}const t=e.stages||[];const st=t[Ce];const stName=st?(st.name||"Stage "+(st.number||"")):"this stage";if(!confirm("Are you sure you want to delete "+stName+"? This action cannot be undone.")){return;}showSpinner("Deleting stage…");t.splice(Ce,1);Ee(e.id,{stages:t}).then(function(s){hideSpinner();if(s.success){G("modal-create-stage");}else alert("Unable to delete stage: "+s.error);});}
let ee=[],Q=[],ve=[],me=[];function ks(){if(!R){alert("No match selected");return}Q=[],o("user-search-input").value="",o("user-search-results").innerHTML="",o("send-invitations-btn").style.display="none",ie("modal-invite-user")}async function xs(){const e=F("user-search-input").trim();if(e.length===0){o("user-search-results").innerHTML='<p style="color:#9ca3af;text-align:center;">Skriv inn et søk</p>';return}const i=await Ke(e),t=o("user-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;">No users found.</p>';return}let s='<div style="margin-bottom:10px;font-weight:600;">RESULTS ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=Q.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:10px;padding:10px;background:#2d3748;border-radius:8px;margin-bottom:8px;cursor:pointer;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserSelection('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:18px;height:18px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s,ut()}function Ss(e,i,t){const s=Q.findIndex(a=>a.uid===e);s>-1?Q.splice(s,1):Q.push({uid:e,email:i,displayName:t}),ut()}function ut(){const e=o("send-invitations-btn");e&&(Q.length>0?(e.style.display="block",e.textContent=`Send Invitations (${Q.length} selected)`):e.style.display="none")}async function Ls(){if(Q.length===0){alert("No users selected");return}const e=$.find(s=>s.id!=null&&s.id.toString()===String(R));if(!e)return;let i=0,t=0;showSpinner("Sending invitation…");Promise.all(Q.map(function(s){return Ge(s.email,{matchId:e.id,matchName:e.name})})).then(function(results){var i=0,t=0;results.forEach(function(r){if(r.success)i++;else t++});hideSpinner();G("modal-invite-user"),i>0&&alert(`Invitations sent to ${i} user(s)!`),t>0&&alert(`${t} invitation(s) could not be sent.`),Q=[]})}async function Ps(){const e=F("new-match-user-search").trim();if(e.length===0){o("new-match-search-results").innerHTML="";return}const i=await Ke(e),t=o("new-match-search-results");if(!t)return;if(i.length===0){t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">No users found.</p>';return}let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTS ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=ve.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserNewMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s}function Es(e,i,t){const s=ve.findIndex(a=>a.uid===e);s>-1?ve.splice(s,1):ve.push({uid:e,email:i,displayName:t})}async function Ts(){console.log(" searchUsersEditMatch called");const e=F("edit-match-user-search").trim();if(console.log(" Search term:",e),e.length===0){console.log(" Empty search term"),o("edit-match-search-results").innerHTML="";return}console.log(" Calling searchUsersByNameOrEmail...");const i=await Ke(e);console.log(" Results received:",i);const t=o("edit-match-search-results");if(!t){console.error(" Container not found: edit-match-search-results");return}if(i.length===0){console.log(" No users found"),t.innerHTML='<p style="color:#9ca3af;text-align:center;font-size:14px;">No users found.</p>';return}console.log(" Rendering",i.length,"results");let s='<div style="margin-bottom:8px;font-size:14px;font-weight:600;">RESULTS ('+i.length+"):</div>";i.forEach(a=>{const n=a.displayName||a.email,r=me.some(m=>m.uid===a.uid),u=n.replace(/'/g,"\\'");s+=`
 <label style="display:flex;align-items:center;gap:8px;padding:8px;background:#2d3748;border-radius:8px;margin-bottom:6px;cursor:pointer;font-size:14px;">
 <input type="checkbox" ${r?"checked":""} onchange="toggleUserEditMatch('${a.uid}', '${a.email.replace(/'/g,"\\'")}', '${u}')" style="width:16px;height:16px;">
 <div>
 <div style="font-weight:600;">${n}</div>
 
 </div>
 </label>
 `}),t.innerHTML=s,console.log(" HTML rendered to container")}function Ms(e,i,t){const s=me.findIndex(a=>a.uid===e);s>-1?me.splice(s,1):me.push({uid:e,email:i,displayName:t})}function Is(){Je(),ie("modal-invitations")}function Je(){const e=o("invitations-list");if(!e)return;if(!ee||ee.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d("no_invitations")+"</div></div>";return}let i="";ee.forEach((t,s)=>{i+='<div class="card" style="margin-bottom:10px;">',i+='<div style="margin-bottom:10px;"><strong>'+d("invited_to_match")+"</strong></div>",i+='<div style="margin-bottom:10px;">Match ID '+t.matchId+" "+t.matchName+"</div>",i+='<div style="margin-bottom:10px;color:#94a3b8;">From: '+(t.invitedBy||t.invitedByUid||"Ukjent")+"</div>",i+='<div style="display:flex;gap:10px;">',i+='<button class="btn-primary" onclick="acceptInvitation('+s+')" style="flex:1;">'+d("accept")+"</button>",i+='<button onclick="declineInvitation('+s+')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+d("decline")+"</button>",i+="</div>",i+="</div>"}),e.innerHTML=i}async function Cs(e){const i=ee[e];if(!i)return;showSpinner("Accepting invitation…");Jt(i.matchId).then(function(t){hideSpinner();if(t.success){ee.splice(e,1);Ye();Je()}else alert("Unable to accept invitation: "+t.error)})}async function _s(e){const i=ee[e];if(!i)return;const t=await Yt(i.matchId);t.success?(ee.splice(e,1),Ye(),Je()):alert("Unable to decline invitation: "+t.error)}function Ye(){const e=o("invitation-badge");if(!e)return;const i=ee.length;i>0?(e.textContent=i,e.style.display="flex"):e.style.display="none";const tb=o("tab-invitation-badge");if(tb){if(i>0){tb.textContent=i;tb.style.display="flex";}else{tb.style.display="none";}}}function te(){var a,n;const e=o("home-content");if(!e)return;const i=$.find(r=>r.id!=null&&r.id.toString()===String(R));if(!i){e.innerHTML=`
 <div class="empty-state">
 <div class="empty-icon"></div>
 <div class="empty-title">'+d('select_match')+'</div>
 <div class="empty-sub">'+d('match_chip_hint')+'</div>
 <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
 </div>
 `;return}let t="";t+='<div class="card">',t+='<div class="mhc-name">'+i.name+"</div>",t+='<div class="mhc-meta">'+We(i.date)+' · <span style="color:#e8b84b;font-weight:600;">'+( i.type||"")+'</span></div>',t+='<div class="mhc-stats">',t+='<div><div class="mhc-val">'+(((a=i.stages)==null?void 0:a.length)||0)+'</div><div class="mhc-lbl">Stages</div></div>',t+='<div><div class="mhc-val">'+(((n=i.shooters)==null?void 0:n.length)||0)+'</div><div class="mhc-lbl">'+d('shooters_lbl')+'</div></div>',t+="</div>",t+='<div style="display:flex;gap:10px;margin-top:15px;">',t+='<button class="btn-primary" onclick="openEditMatch()" style="flex:1;">'+d('edit_match_btn')+'</button>',t+='<button class="btn-primary" onclick="openCreateStage()" style="flex:1;">'+d('add_stage')+'</button>',t+="</div>",t+='<div style="margin-top:10px;">',t+='<button class="btn-primary" onclick="openInviteUser()" style="width:100%;">'+d('invite_user_btn')+'</button>',t+="</div>";const s=Pe();s&&i.ownerId===s.uid&&(t+='<div style="margin-top:10px;">',t+='<button onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">'+d('delete_match')+'</button>',t+="</div>"),t+="</div>",i.stages&&i.stages.length>0&&(t+='<div class="section-title">Stages</div>',t+='<div class="card">',i.stages.forEach((r,u)=>{t+='<div class="stage-row" style="cursor:pointer;border-bottom:1px solid #2d3748;padding:12px 0;display:flex;align-items:center;" onclick="openEditStage('+u+')">',t+='<div class="stage-num">S'+(r.number||u+1)+"</div>",t+='<div class="stage-info" style="flex:1;">',t+='<div class="stage-name">'+(r.name||"Stage "+(r.number||u+1))+' <span style="color:#e8b84b;font-weight:600;">'+(icStageMaxPts(r)<=60?"Short":icStageMaxPts(r)<=120?"Medium":"Long")+"</span></div>",t+='<div class="stage-meta">',r.paperTargets&&(t+="Paper: "+r.paperTargets+" "),r.poppers&&(t+="Poppers: "+r.poppers+" "),r.plates&&(t+="Plates: "+r.plates+" "),r.noShoots&&(t+="NS: "+r.noShoots+" "),r.bonusPaperTargets&&(t+="Bonus: "+r.bonusPaperTargets+(r.bonusIncluded?" (included)":"")),(function(){var _stgMax=icStageMaxPts(r);var _totalMax=(i.stages||[]).reduce(function(acc,s){return acc+icStageMaxPts(s);},0);var _pct=_totalMax>0?(_stgMax/_totalMax*100).toFixed(1):"0.0";if(_stgMax>0)t+='<span style="color:var(--muted);font-size:11px;margin-left:4px;">· '+_stgMax+' pts · '+_pct+'% '+d("pct_of_match_lbl")+'</span>';})(),t+="</div>",t+="</div>",t+='<div style="display:flex;align-items:center;padding-left:12px;color:var(--accent);font-size:16px;opacity:0.8;" title="Edit Stage">✎</div>',t+="</div>"}),t+="</div>"),e.innerHTML=t}function fe(){const e=o("match-list-container");if(!e)return;let i=$.filter(s=>{if(ue==="all")return!0;if(ue==="active")return s.status!=="finished";if(ue==="trening")return s.type===d("training");if(ue==="stevne")return s.type==="Stevne";const a=s.date?new Date(s.date).getFullYear().toString():"";return ue===a});if(i.length===0){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d('no_matches_found')+'</div></div>';return}let t="";i.forEach((s,_mi)=>{var r;const a=s.id!=null&&s.id.toString()===String(R),n=s.id?"Match ID "+s.id+" "+s.name:s.name;const isOwner=(()=>{const _cu=$.find(_m=>_m.id!=null&&_m.id.toString()===s.id.toString());const _pu=Pe();return _cu&&_pu&&_cu.ownerId===_pu.uid;})();const _bg=_mi%2===0?"var(--card)":"var(--bg3)";t+=`<div class="match-row${a?" is-active":""}" style="background:${_bg};border-radius:14px;margin-bottom:2px;border:1px solid ${a?"rgba(232,184,75,.25)":"var(--border)"};">`;t+=`<div onclick="selectMatch('${s.id}')" style="display:flex;align-items:center;padding:12px 14px 8px;cursor:pointer;gap:10px;">`;t+=`<div style="flex:1;min-width:0;">`;t+=`<div class="match-row-name${a?" is-active":""}" style="font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${n}</div>`;t+=`<div style="font-size:12px;color:var(--muted);margin-top:2px;">${We(s.date)}${s.location?" · "+s.location:""}</div><div style="font-size:11px;color:#e8b84b;font-weight:700;letter-spacing:0.04em;margin-top:1px;">${s.type||""}</div>`;t+="</div>";t+=`<button onclick="event.stopPropagation();(function(){var el=document.getElementById('match-actions-${s.id}');var btn=document.getElementById('match-chevron-${s.id}');if(el){var open=el.style.display==='block';el.style.display=open?'none':'block';if(btn)btn.style.transform=open?'rotate(0deg)':'rotate(180deg)';}})();" style="background:none;border:none;cursor:pointer;padding:4px 6px;color:var(--muted);flex-shrink:0;transition:transform 0.2s;"><svg id="match-chevron-${s.id}" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;"><polyline points="6 9 12 15 18 9"/></svg></button>`;t+='<div style="display:flex;flex-direction:column;align-items:center;min-width:36px;">';t+='<div style="font-size:18px;font-weight:800;color:var(--accent);line-height:1;">'+(((r=s.stages)==null?void 0:r.length)||0)+'</div>';t+='<div style="font-size:10px;color:var(--muted);">Stages</div>';t+='</div>';if(isOwner){t+=`<button onclick="event.stopPropagation();selectMatch('${s.id}');confirmDeleteMatch();" style="background:none;border:none;cursor:pointer;padding:4px 6px;color:rgba(239,68,68,0.65);font-size:18px;line-height:1;border-radius:8px;" title="${d('delete_match')}">&#128465;</button>`;}else{t+='<div style="width:30px;"></div>';}t+="</div>";t+="</div>";t+=`<div id="match-actions-${s.id}" style="display:none;padding:0 12px 12px;"><div style="display:flex;gap:6px;">`;t+=`<button onclick="event.stopPropagation();selectMatch(\'${s.id}\');openEditMatch();" style="flex:1;padding:9px 0;background:rgba(232,184,75,0.12);border:1px solid rgba(232,184,75,0.3);color:#e8b84b;border-radius:9px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">${d('edit')}</button>`;t+=`<button onclick="event.stopPropagation();selectMatch(\'${s.id}\');openCreateStage();" style="flex:1;padding:9px 0;background:rgba(232,184,75,0.12);border:1px solid rgba(232,184,75,0.3);color:#e8b84b;border-radius:9px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">+ Stage</button>`;t+=`<button onclick="event.stopPropagation();selectMatch(\'${s.id}\');openInviteUser();" style="flex:1;padding:9px 0;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);color:var(--muted);border-radius:9px;font-size:11px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;">${d('invite')}</button>`;t+="</div></div>";t+="</div>";}),e.innerHTML=t}function _e(){var n;const e=o("results-content");if(!e)return;const i=$.find(r=>r.id!=null&&r.id.toString()===String(R));if(!i){e.innerHTML='<div class="empty-state"><div class="empty-sub">'+d('select_match_first')+'</div></div>';return}if(!i.shooters||i.shooters.length===0){e.innerHTML='<div class="empty-state"><div class="empty-icon"></div><div class="empty-title">'+d('no_shooters')+'</div><div class="empty-sub">'+d('add_shooters_hint')+'</div></div>';return}const t=icMatchTotals(i,!liveShowAll);if(!t.length){e.innerHTML='<div class="empty-state"><div class="empty-title">'+d('no_results_yet')+'</div><div class="empty-sub">'+d('live_when_results')+'</div></div>';return}const commonNums=icCommonStageNumbers(i),toggleLabel=liveShowAll?d('common_stages_btn'):d('show_all_stages_btn');let s='<div class="card">';s+='<div class="card-header"><div class="card-title">Standings</div><button onclick="toggleLiveFilter()" style="padding:6px 12px;background:var(--accent);color:#1a202c;border:none;border-radius:8px;font-size:12px;font-weight:700;cursor:pointer;">'+toggleLabel+"</button></div>",s+=!liveShowAll&&commonNums.length>0?'<div style="font-size:12px;color:var(--muted);padding:8px 0;">'+d('based_on')+' '+commonNums.length+" common stage"+(commonNums.length===1?"":"s")+"</div>":"",s+='<div class="standings-table-wrap"><table class="standings-table">',s+='<thead><tr class="standings-header-row">',s+='<th class="standings-th standings-th-rank">#</th>',s+='<th class="standings-th standings-th-shooter">Shooter</th>',s+='<th class="standings-th standings-th-pts">STG PTS</th>',s+='<th class="standings-th standings-th-pct">%</th>',s+="</tr></thead>",s+="<tbody>";const a=((n=t[0])==null?void 0:n.totalStagePts)||0;t.forEach((r,u)=>{const m=a>0?(r.totalStagePts/a*100).toFixed(2):"0.00";s+='<tr class="standings-row">',s+='<td class="standings-td standings-td-rank">'+(u+1)+"</td>",s+='<td class="standings-td standings-td-shooter">',s+='<div class="standings-shooter-name">'+r.name+"</div>",s+='<div class="standings-shooter-meta">'+r.division+" · "+ge(r.pf||"minor")+"</div>",s+="</td>",s+='<td class="standings-td standings-td-pts">'+r.totalStagePts.toFixed(2)+"</td>",s+='<td class="standings-td standings-td-pct">'+m+"%</td>",s+="</tr>"}),s+="</tbody></table></div>",s+="</div>";// ── MATCHUTVIKLING ─────────────────────────────────────────────────────────
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
  shotNums.sort(function(a,b){
    var tA=Infinity,tB=Infinity;
    shooters.forEach(function(sh){
      (sh.stages||[]).forEach(function(sr){
        if(String(sr.num||sr.number)===a&&sr.savedAt&&sr.savedAt<tA)tA=sr.savedAt;
        if(String(sr.num||sr.number)===b&&sr.savedAt&&sr.savedAt<tB)tB=sr.savedAt;
      });
    });
    if(tA===Infinity&&tB===Infinity)return Number(a)-Number(b);
    if(tA===Infinity)return 1;
    if(tB===Infinity)return -1;
    return tA-tB;
  });
  if(!shotNums.length)return;

  var colors=['#e8b84b','#4caf7d','#60a5fa','#f87171','#a78bfa','#fb923c','#34d399','#f472b6'];

  // Felles data
  var shooterData=shooters.map(function(sh,si){
    var name=((sh.firstName||'')+(sh.lastName?' '+sh.lastName:'')).trim()||'Shooter';
    var color=colors[si%colors.length];
    var cumStg=0;
    var stagePoints=shotNums.map(function(sn){
      var stageDef=stageDefs.find(function(sd){return String(sd.number)===sn;});
      if(!stageDef)return{stageNum:sn,stgPts:0,cumStg:0,hasResult:false,hf:0};
      var metrics=icStageMetricsForMatch(i,stageDef);
      var me=metrics.find(function(m){return String(m.id)===String(sh.id)||(sh.isMe&&m.isMe);});
      var stgPts=me?me.stagePts:0;
      var hasResult=!!me;
      var hf=me?(me.hf||0):0;
      cumStg+=stgPts;
      return{stageNum:sn,stgPts:stgPts,cumStg:cumStg,hasResult:hasResult,hf:hf};
    });
    return{id:sh.id,name:name,color:color,isMe:!!sh.isMe,stagePoints:stagePoints};
  });

  // Kumulativ data
  var winnerCumAtStage=shotNums.map(function(sn,si){
    var max=0;
    shooterData.forEach(function(sd){
      if(sd.stagePoints[si].hasResult){var v=sd.stagePoints[si].cumStg;if(v>max)max=v;}
    });
    return max;
  });
  shooterData.forEach(function(sd){
    sd.cumPct=sd.stagePoints.map(function(sp,si){
      var w=winnerCumAtStage[si]||0;
      return w>0?(sp.cumStg/w*100):0;
    });
  });
  var sorted=shooterData.slice().sort(function(a,b){
    var ai=a.cumPct[a.cumPct.length-1]||0;
    var bi=b.cumPct[b.cumPct.length-1]||0;
    return bi-ai;
  });

  // Stage-seier data (HF/winnerHF per stage)
  var winnerHFAtStage=shotNums.map(function(sn,si){
    var max=0;
    shooterData.forEach(function(sd){
      if(sd.stagePoints[si].hasResult){var v=sd.stagePoints[si].hf;if(v>max)max=v;}
    });
    return max;
  });
  shooterData.forEach(function(sd){
    sd.stagePct=sd.stagePoints.map(function(sp,si){
      var w=winnerHFAtStage[si]||0;
      return(sp.hasResult&&w>0)?(sp.hf/w*100):null;
    });
  });
  var sortedByLast=shooterData.slice().sort(function(a,b){
    var ai=a.cumPct[a.cumPct.length-1]||0;
    var bi=b.cumPct[b.cumPct.length-1]||0;
    return bi-ai;
  });

    // Prognose: leave-one-out per stage
  // For each shot stage N: build form profile from ALL OTHER shot stages, then estimate N
  // For unshot stages: use form profile from all shot stages

  // Helper: build form profile from a set of metrics
  function buildFormProfile(metrics){
    if(!metrics||metrics.length===0)return null;
    var totTime=metrics.reduce(function(a,m){return a+m.time;},0);
    var totShots=metrics.reduce(function(a,m){return a+m.shots;},0);
    return{
      avgSplit:totShots>0?totTime/totShots:0.6,
      aPercent:metrics.reduce(function(a,m){return a+m.aP;},0)/metrics.length,
      cPercent:metrics.reduce(function(a,m){return a+m.cP;},0)/metrics.length,
      dPercent:metrics.reduce(function(a,m){return a+m.dP;},0)/metrics.length,
      draw:1.3,reloadTime:1.5,
      division:metrics[0].div,pf:metrics[0].pf
    };
  }

  shooterData.forEach(function(sd){
    // Collect raw metrics per stage from icStageMetricsForMatch
    var stageMetrics=[];
    sd.stagePoints.forEach(function(sp,si){
      if(!sp.hasResult||sp.hf<=0){stageMetrics.push(null);return;}
      var stageDef=stageDefs.find(function(s){return String(s.number)===String(sp.stageNum);});
      if(!stageDef){stageMetrics.push(null);return;}
      var mets=icStageMetricsForMatch(i,stageDef);
      var me=mets.find(function(m){return String(m.id)===String(sd.id)||(sd.isMe&&m.isMe);});
      if(!me||!me.res){stageMetrics.push(null);return;}
      var res=me.res;
      var shots=icStageShots(stageDef)||1;
      var time=res.time||0;
      var a=res.a||0,c=res.c||0,d=res.d||0,miss=res.miss||0;
      var total=a+c+d+miss||1;
      if(time>0){
        stageMetrics.push({time:time,shots:shots,
          aP:a/total,cP:c/total,dP:d/total,
          div:me.division||'Classic',pf:me.pf||'minor',
          stageNum:sp.stageNum});
      } else {
        stageMetrics.push(null);
      }
    });

    // All valid metrics (for unshot stages and fallback)
    var allValidMetrics=stageMetrics.filter(function(m){return m!==null;});

    // Build prgHF using leave-one-out for shot stages
    sd.prgHF=sd.stagePoints.map(function(sp,si){
      var stageDef=stageDefs.find(function(s){return String(s.number)===String(sp.stageNum);});
      if(!stageDef)return null;

      if(sp.hasResult&&sp.hf>0){
        // Leave-one-out: use all OTHER shot stages to build form profile
        var leaveOutMetrics=stageMetrics.filter(function(m,mi){return mi!==si&&m!==null;});
        var profile=leaveOutMetrics.length>0
          ?buildFormProfile(leaveOutMetrics)
          :buildFormProfile(allValidMetrics); // fallback: only 1 shot stage
        if(!profile)return sp.hf;
        var proj=icProjectNext(profile,stageDef);
        return proj?proj.estHF:sp.hf;
      } else {
        // Unshot: use all shot stages for form estimate
        var profile=buildFormProfile(allValidMetrics);
        if(!profile)return null;
        var proj=icProjectNext(profile,stageDef);
        return proj?proj.estHF:null;
      }
    });

    // avgHF = actual avg from shot stages
    var hfVals=sd.stagePoints.filter(function(sp){return sp.hasResult&&sp.hf>0;}).map(function(sp){return sp.hf;});
    sd.avgHF=hfVals.length>0?(hfVals.reduce(function(a,b){return a+b;},0)/hfVals.length):0;

    // formHF = avg of leave-one-out estimates for shot stages
    var formVals=sd.stagePoints.map(function(sp,si){
      return(sp.hasResult&&sp.hf>0&&sd.prgHF[si]!=null)?sd.prgHF[si]:null;
    }).filter(function(v){return v!==null;});
    sd.formHF=formVals.length>0?(formVals.reduce(function(a,b){return a+b;},0)/formVals.length):0;
  });
  // Normalize: find max prgHF across all shooters and stages
  var allPrgVals=[];
  shooterData.forEach(function(sd){sd.prgHF.forEach(function(v){if(v!=null&&v>0)allPrgVals.push(v);});});
  var bestPrgHF=allPrgVals.length>0?Math.max.apply(null,allPrgVals):1;
  shooterData.forEach(function(sd){
    sd.prognPct=sd.avgHF>0?(sd.avgHF/bestPrgHF*100):0;
  });
  var sortedByPrg=shooterData.slice().sort(function(a,b){return b.prognPct-a.prognPct;});

  var W=320,H=170,PL=38,PR=16,PT=12,PB=28;
  var gW=W-PL-PR,gH=H-PT-PB;
  var nStages=shotNums.length;
  function xPos(si){return nStages>1?PL+si*(gW/(nStages-1)):PL+gW/2;}
  function buildSvg(dataArr,pctKey,yMinIn,yMaxIn){
    var yMin=yMinIn,yMax=yMaxIn;
    function yPos(pct){return PT+gH*(1-(pct-yMin)/(yMax-yMin));}
    var svg='<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:'+W+'px;display:block;margin:0 auto;">';
    var gridSteps=4;
    for(var gi=0;gi<=gridSteps;gi++){
      var gPct=yMin+(yMax-yMin)*gi/gridSteps;
      var gy=yPos(gPct);
      svg+='<line x1="'+PL+'" y1="'+gy.toFixed(1)+'" x2="'+(W-PR)+'" y2="'+gy.toFixed(1)+'" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>';
      svg+='<text x="'+(PL-3)+'" y="'+(gy+4)+'" font-size="8" fill="#7d8598" text-anchor="end">'+gPct.toFixed(0)+'%</text>';
    }
    shotNums.forEach(function(sn,si){
      svg+='<text x="'+xPos(si)+'" y="'+(H-6)+'" font-size="8" fill="#7d8598" text-anchor="middle">S'+sn+'</text>';
    });
    dataArr.forEach(function(sd){
      var pts=[];
      var pcts=sd[pctKey];
      pcts.forEach(function(pct,si){
        if(pct!==null&&pct!==undefined&&sd.stagePoints[si].hasResult)pts.push([xPos(si),yPos(pct)]);
      });
      if(pts.length<1)return;
      var d=pts.map(function(p,idx){return(idx===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ');
      svg+='<path d="'+d+'" fill="none" stroke="'+sd.color+'" stroke-width="'+(sd.isMe?'2.5':'1.5')+'" stroke-linejoin="round" stroke-linecap="round" opacity="'+(sd.isMe?'1':'0.75')+'"/>';
      var lp=pts[pts.length-1];
      svg+='<circle cx="'+lp[0].toFixed(1)+'" cy="'+lp[1].toFixed(1)+'" r="3" fill="'+sd.color+'"/>';
    });
    svg+='</svg>';
    return svg;
  }
  function buildLegend(dataArr){
    var leg='<div style="display:flex;flex-wrap:wrap;gap:8px 14px;margin-top:10px;">';
    dataArr.forEach(function(sd){
      leg+='<div style="display:flex;align-items:center;gap:4px;font-size:11px;">';
      leg+='<span style="display:inline-block;width:12px;height:3px;background:'+sd.color+';border-radius:2px;"></span>';
      leg+='<span style="color:'+(sd.isMe?'var(--accent)':'var(--text)')+';">'+sd.name+'</span>';
      leg+='</div>';
    });
    leg+='</div>';
    return leg;
  }

  // Matchutvikling tabell
  var allCumPcts=[];
  sorted.forEach(function(sd){sd.cumPct.forEach(function(pct,si){if(sd.stagePoints[si].hasResult)allCumPcts.push(pct);});});
  var minCum=allCumPcts.length?Math.min.apply(null,allCumPcts):0;
  var padCum=Math.max(3,(100-minCum)*0.15);
  var yMinCum=Math.max(0,minCum-padCum),yMaxCum=101;
  var svgCum=buildSvg(sorted,'cumPct',yMinCum,yMaxCum);
  var legCum=buildLegend(sorted);
  var tblCum='<div style="overflow-x:auto;margin-top:12px;"><table style="width:100%;font-size:11px;border-collapse:collapse;min-width:300px;">';
  tblCum+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);"><th style="padding:4px 6px;text-align:left;">SHOOTERS</th>';
  shotNums.forEach(function(sn){tblCum+='<th style="padding:4px 4px;text-align:right;">S'+sn+'</th>';});
  tblCum+='</tr>';
  sorted.forEach(function(sd){
    var rowStyle=sd.isMe?'background:var(--accent-fade);':'';
    tblCum+='<tr style="border-bottom:1px solid rgba(255,255,255,0.04);'+rowStyle+'"><td style="padding:6px 6px;font-weight:'+(sd.isMe?'700':'400')+';"><span style="color:'+sd.color+';margin-right:5px;">●</span>'+sd.name+'</td>';
    sd.stagePoints.forEach(function(sp,si){
      var isLeader=winnerCumAtStage[si]>0&&Math.abs(sp.cumStg-winnerCumAtStage[si])<0.01&&sp.hasResult;
      var pct=sd.cumPct[si];
      tblCum+='<td style="padding:6px 4px;text-align:right;">';
      if(sp.hasResult){tblCum+='<div style="font-weight:'+(isLeader?'700':'400')+';color:'+(isLeader?'var(--accent)':'var(--text)')+';">'+pct.toFixed(1)+'%</div><div style="font-size:10px;color:var(--muted);">'+sp.cumStg.toFixed(1)+'</div>';}
      else{tblCum+='<div style="color:var(--muted);">—</div>';}
      tblCum+='</td>';
    });
    tblCum+='</tr>';
  });
  tblCum+='<tr style="border-top:1px solid var(--border);background:rgba(255,255,255,0.02);"><td style="padding:6px 6px;font-size:10px;color:var(--muted);font-weight:700;">Δ to leader</td>';
  shotNums.forEach(function(sn,si){
    var w=winnerCumAtStage[si]||0;
    tblCum+='<td style="padding:6px 4px;text-align:right;">';
    sorted.forEach(function(sd){
      var sp=sd.stagePoints[si];
      if(!sp.hasResult){tblCum+='<div style="font-size:10px;color:var(--muted);">—</div>';return;}
      var delta=sp.cumStg-w;
      var isLeader=Math.abs(delta)<0.01;
      var col=isLeader?'var(--accent)':delta>-5?'var(--text)':'var(--red)';
      tblCum+='<div style="font-size:10px;font-weight:'+(isLeader?'700':'400')+';color:'+col+';">'+(isLeader?'●':(delta>0?'+':'')+delta.toFixed(1))+'</div>';
    });
    tblCum+='</td>';
  });
  tblCum+='</tr></table></div>';

  // Stage-seier tabell
  var allStagePcts=[];
  sortedByLast.forEach(function(sd){sd.stagePct.forEach(function(pct,si){if(pct!==null&&sd.stagePoints[si].hasResult)allStagePcts.push(pct);});});
  var minStg=allStagePcts.length?Math.min.apply(null,allStagePcts):0;
  var padStg=Math.max(3,(100-minStg)*0.15);
  var yMinStg=Math.max(0,minStg-padStg),yMaxStg=101;
  var svgStg=buildSvg(sortedByLast,'stagePct',yMinStg,yMaxStg);
  var legStg=buildLegend(sortedByLast);
  var tblStg='<div style="overflow-x:auto;margin-top:12px;"><table style="width:100%;font-size:11px;border-collapse:collapse;min-width:300px;">';
  tblStg+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);"><th style="padding:4px 6px;text-align:left;">SHOOTERS</th>';
  shotNums.forEach(function(sn){tblStg+='<th style="padding:4px 4px;text-align:right;">S'+sn+'</th>';});
  tblStg+='</tr>';
  sortedByLast.forEach(function(sd){
    var rowStyle=sd.isMe?'background:var(--accent-fade);':'';
    tblStg+='<tr style="border-bottom:1px solid rgba(255,255,255,0.04);'+rowStyle+'"><td style="padding:6px 6px;font-weight:'+(sd.isMe?'700':'400')+';"><span style="color:'+sd.color+';margin-right:5px;">●</span>'+sd.name+'</td>';
    sd.stagePoints.forEach(function(sp,si){
      var pct=sd.stagePct[si];
      var isWinner=sp.hasResult&&winnerHFAtStage[si]>0&&Math.abs(sp.hf-winnerHFAtStage[si])<0.0001;
      tblStg+='<td style="padding:6px 4px;text-align:right;">';
      if(sp.hasResult&&pct!==null){tblStg+='<div style="font-weight:'+(isWinner?'700':'400')+';color:'+(isWinner?'var(--accent)':'var(--text)')+';">'+pct.toFixed(1)+'%</div><div style="font-size:10px;color:var(--muted);">'+sp.hf.toFixed(4)+'</div>';}
      else{tblStg+='<div style="color:var(--muted);">—</div>';}
      tblStg+='</td>';
    });
    tblStg+='</tr>';
  });
  tblStg+='</table></div>';

  // Prognose SVG - stiplet linje per skytter: faktisk HF for skutte stages, estimert for uskutte
  // Prognose SVG: Y-axis = raw HF, dashed=form estimate, solid=actual
  // Find Y axis range across all prgHF and actual HF values
  var allHFVals=[];
  shooterData.forEach(function(sd){
    sd.prgHF.forEach(function(v){if(v!=null&&v>0)allHFVals.push(v);});
    sd.stagePoints.forEach(function(sp){if(sp.hasResult&&sp.hf>0)allHFVals.push(sp.hf);});
  });
  var maxHF=allHFVals.length>0?Math.max.apply(null,allHFVals):8;
  var minHF=allHFVals.length>0?Math.max(0,Math.min.apply(null,allHFVals)-0.5):0;
  var hfRange=maxHF-minHF||1;

  function hfToY(hf){return PT+gH*(1-(hf-minHF)/hfRange);}

  var svgPrg='<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:'+W+'px;display:block;margin:0 auto;">';
  // Grid lines (4 lines)
  for(var gi2=0;gi2<=4;gi2++){
    var hfGrid=minHF+(hfRange*gi2/4);
    var gy2=hfToY(hfGrid);
    svgPrg+='<line x1="'+PL+'" y1="'+gy2.toFixed(1)+'" x2="'+(W-PR)+'" y2="'+gy2.toFixed(1)+'" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>';
    svgPrg+='<text x="'+(PL-3)+'" y="'+(gy2+3)+'" font-size="8" fill="#7d8598" text-anchor="end">'+hfGrid.toFixed(1)+'</text>';
  }
  // X axis labels
  shotNums.forEach(function(sn,si){
    svgPrg+='<text x="'+xPos(si)+'" y="'+(H-6)+'" font-size="8" fill="#7d8598" text-anchor="middle">S'+sn+'</text>';
  });

  sortedByPrg.forEach(function(sd){
    var sw=sd.isMe?'2.5':'1.5';
    var op=sd.isMe?'1':'0.75';

    // -- DASHED LINE: form estimate (prgHF) --
    var dPts=[];
    sd.prgHF.forEach(function(hfVal,si){
      if(hfVal==null||hfVal<=0)return;
      dPts.push({x:xPos(si),y:hfToY(hfVal),hf:hfVal,si:si});
    });
    for(var pi=0;pi<dPts.length-1;pi++){
      var p1=dPts[pi],p2=dPts[pi+1];
      svgPrg+='<line x1="'+p1.x.toFixed(1)+'" y1="'+p1.y.toFixed(1)+'" x2="'+p2.x.toFixed(1)+'" y2="'+p2.y.toFixed(1)+'" stroke="'+sd.color+'" stroke-width="'+sw+'" stroke-dasharray="5,3" opacity="'+op+'"/>';
    }
    dPts.forEach(function(p){
      svgPrg+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="2" fill="'+sd.color+'" opacity="'+(op*0.7)+'" stroke="none"/>';
    });

    // -- SOLID LINE: actual HF (shot stages only) --
    var aPts=[];
    sd.stagePoints.forEach(function(sp,si){
      if(!sp.hasResult||sp.hf<=0)return;
      aPts.push({x:xPos(si),y:hfToY(sp.hf),hf:sp.hf,si:si});
    });
    for(var pi=0;pi<aPts.length-1;pi++){
      var p1=aPts[pi],p2=aPts[pi+1];
      svgPrg+='<line x1="'+p1.x.toFixed(1)+'" y1="'+p1.y.toFixed(1)+'" x2="'+p2.x.toFixed(1)+'" y2="'+p2.y.toFixed(1)+'" stroke="'+sd.color+'" stroke-width="'+sw+'" opacity="'+op+'"/>';
    }
    aPts.forEach(function(p){
      svgPrg+='<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(sd.isMe?'3':'2.5')+'" fill="'+sd.color+'" opacity="'+op+'"/>';
    });
    // HF label at last actual point
    if(aPts.length>0){
      var lp=aPts[aPts.length-1];
      svgPrg+='<text x="'+(lp.x+4)+'" y="'+(lp.y-3)+'" font-size="7" fill="'+sd.color+'" text-anchor="start" opacity="0.9">'+lp.hf.toFixed(2)+'</text>';
    }
  });
  svgPrg+='</svg>';
  var legPrg=buildLegend(sortedByPrg);

  // Table: clickable rows expand to show per-stage delta
  var prgTableId='prg-tbl-'+Math.random().toString(36).substr(2,5);
  var tblPrg='<div style="margin-top:12px;">';
  tblPrg+='<div style="font-size:10px;color:var(--muted);margin-bottom:6px;">— — dashed = form estimate &nbsp; ——&nbsp; solid = actual HF</div>';
  tblPrg+='<table style="width:100%;font-size:12px;border-collapse:collapse;" id="'+prgTableId+'">';
  tblPrg+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);"><th style="padding:4px 6px;text-align:left;">SHOOTERS</th><th style="padding:4px 6px;text-align:right;">Form HF</th><th style="padding:4px 6px;text-align:right;">Actual HF</th><th style="padding:4px 6px;text-align:right;">%</th></tr>';
  sortedByPrg.forEach(function(sd,rowIdx){
    var rowStyle=sd.isMe?'background:var(--accent-fade);':'';
    var pctOfForm=sd.formHF>0&&sd.avgHF>0?(sd.avgHF/sd.formHF*100):0;
    var pctColor=pctOfForm>=100?'var(--green)':pctOfForm>=85?'var(--accent)':'var(--text)';
    var detailId=prgTableId+'-d'+rowIdx;
    // Main row - clickable
    tblPrg+='<tr style="border-bottom:1px solid rgba(255,255,255,0.06);'+rowStyle+';cursor:pointer;" onclick="var d=document.getElementById(\''+detailId+'\');d.style.display=d.style.display===\'none\'?\'table-row-group\':\'none\';">';
    tblPrg+='<td style="padding:6px 6px;font-weight:'+(sd.isMe?'700':'400')+';"><span style="color:'+sd.color+';margin-right:5px;">●</span>'+sd.name+' <span style="font-size:10px;color:var(--muted);">▸</span></td>';
    tblPrg+='<td style="padding:6px 4px;text-align:right;color:var(--muted);">'+(sd.formHF>0?sd.formHF.toFixed(2):'—')+'</td>';
    tblPrg+='<td style="padding:6px 4px;text-align:right;font-weight:'+(sd.isMe?'700':'400')+';color:var(--text);">'+(sd.avgHF>0?sd.avgHF.toFixed(2):'—')+'</td>';
    tblPrg+='<td style="padding:6px 4px;text-align:right;color:'+pctColor+';font-weight:600;">'+(pctOfForm>0?pctOfForm.toFixed(0)+'%':'—')+'</td>';
    tblPrg+='</tr>';
    // Detail rows (hidden by default) - per stage delta
    tblPrg+='<tbody id="'+detailId+'" style="display:none;">';
    tblPrg+='<tr style="background:rgba(255,255,255,0.03);"><td colspan="4" style="padding:0;">';
    tblPrg+='<table style="width:100%;font-size:11px;border-collapse:collapse;">';
    tblPrg+='<tr style="color:var(--muted);border-bottom:1px solid rgba(255,255,255,0.06);"><th style="padding:3px 6px 3px 18px;text-align:left;">Stage</th><th style="padding:3px 4px;text-align:right;">Form</th><th style="padding:3px 4px;text-align:right;">Actual</th><th style="padding:3px 4px;text-align:right;">Δ</th></tr>';
    sd.stagePoints.forEach(function(sp,si){
      var formHFStage=sd.prgHF[si]||0;
      if(!sp.hasResult&&!formHFStage)return;
      var actualHF=sp.hasResult?sp.hf:null;
      var delta=actualHF&&formHFStage?(actualHF-formHFStage):null;
      var dColor=delta==null?'var(--muted)':delta>=0?'var(--green)':'#e05c5c';
      var dStr=delta==null?'—':(delta>=0?'+':'')+delta.toFixed(2);
      tblPrg+='<tr style="border-bottom:1px solid rgba(255,255,255,0.03);">';
      tblPrg+='<td style="padding:3px 6px 3px 18px;color:var(--muted);">S'+sd.stagePoints[si].stageNum+'</td>';
      tblPrg+='<td style="padding:3px 4px;text-align:right;color:var(--muted);">'+(formHFStage>0?formHFStage.toFixed(2):'—')+'</td>';
      tblPrg+='<td style="padding:3px 4px;text-align:right;">'+(actualHF?actualHF.toFixed(2):'—')+'</td>';
      tblPrg+='<td style="padding:3px 4px;text-align:right;font-weight:600;color:'+dColor+';">'+dStr+'</td>';
      tblPrg+='</tr>';
    });
    tblPrg+='</table></td></tr></tbody>';
  });
  tblPrg+='</table></div>';

  // Wrapper med toggle
  s+='<div style="margin-top:16px;">';
  s+='<button onclick="var x=this.nextElementSibling;x.style.display=x.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'.mu-arrow\').textContent=x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.1);border-radius:12px;color:var(--text);font-size:14px;font-weight:700;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">';
  s+='<span>'+d('matchutvikling')+'</span><span class="mu-arrow">\u25b6</span></button>';
  s+='<div class="mu-wrap" style="display:none;margin-top:4px;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:12px;">';
  s+='<div style="display:flex;gap:6px;margin-bottom:12px;">';
  s+='<button onclick="var w=this.closest(\'.mu-wrap\');w.querySelector(\'.mu-cum\').style.display=\'block\';w.querySelector(\'.mu-stg\').style.display=\'none\';w.querySelector(\'.mu-prg\').style.display=\'none\';w.querySelectorAll(\'.mu-tab\').forEach(function(b){b.style.background=\'var(--bg3)\';b.style.color=\'var(--muted)\';});this.style.background=\'var(--accent)\';this.style.color=\'#000\';" class="mu-tab" style="flex:1;padding:7px 0;font-size:12px;font-weight:600;border-radius:8px;border:none;cursor:pointer;background:var(--accent);color:#000;">'+d('matchutvikling')+'</button>';
  s+='<button onclick="var w=this.closest(\'.mu-wrap\');w.querySelector(\'.mu-cum\').style.display=\'none\';w.querySelector(\'.mu-stg\').style.display=\'block\';w.querySelectorAll(\'.mu-tab\').forEach(function(b){b.style.background=\'var(--bg3)\';b.style.color=\'var(--muted)\';});this.style.background=\'var(--accent)\';this.style.color=\'#000\';" class="mu-tab" style="flex:1;padding:7px 0;font-size:12px;font-weight:600;border-radius:8px;border:none;cursor:pointer;background:var(--bg3);color:var(--muted);">'+d('stage_win')+'</button>';
  s+='<button onclick="var w=this.closest(\'.mu-wrap\');w.querySelector(\'.mu-cum\').style.display=\'none\';w.querySelector(\'.mu-stg\').style.display=\'none\';w.querySelector(\'.mu-prg\').style.display=\'block\';w.querySelectorAll(\'.mu-tab\').forEach(function(b){b.style.background=\'var(--bg3)\';b.style.color=\'var(--muted)\';});this.style.background=\'var(--accent)\';this.style.color=\'#000\';" class="mu-tab" style="flex:1;padding:7px 0;font-size:12px;font-weight:600;border-radius:8px;border:none;cursor:pointer;background:var(--bg3);color:var(--muted);">'+d('prognose')+'</button>';
  s+='</div>';
  s+='<div class="mu-cum">'+svgCum+legCum+tblCum+'</div>';
  s+='<div class="mu-stg" style="display:none;">'+svgStg+legStg+tblStg+'</div>';
  s+='<div class="mu-prg" style="display:none;">'+svgPrg+legPrg+tblPrg+'</div>';
  s+='</div></div>';
})();
// ── END MATCHUTVIKLING ────────────────────────────────────────────────────
const myShooter=icCurrentShooter(i),myResults=myShooter&&myShooter.stages?myShooter.stages.slice().sort((ra,rb)=>(ra.num||0)-(rb.num||0)):[];if(myResults.length>0){s+='<div style="margin-top:16px;">';s+='<button onclick="const x=document.getElementById(\'my-results-table\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.mr-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;"><span>'+d('mine_resultater')+'</span><span class=\'mr-arrow\'>&#9654;</span></button>';s+='<div id="my-results-table" style="display:none;margin-top:10px;">';s+='<div><table style="width:100%;font-size:11px;border-collapse:collapse;">';s+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);font-size:11px;">';s+='<th style="padding:4px 3px;text-align:left;">STG</th>';s+='<th style="padding:4px 3px;text-align:right;">TIME</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">A</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">C</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">D</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">M</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">NS</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">P</th>';s+='<th style="padding:4px 3px;text-align:right;">HF</th>';s+="</tr>";myResults.forEach(rr=>{const hf=rr.hf&&rr.hf>0?rr.hf:(rr.time>0?(rr.pts||0)/rr.time:0);s+='<tr style="border-bottom:1px solid var(--border);font-size:11px;">';s+='<td style="padding:4px 3px;">'+(rr.num||rr.number)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.time||0).toFixed(2)+"s</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+(rr.a||0)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.c||0)+"</td>";s+='<td style="padding:4px 3px;text-align:right;">'+(rr.d||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.miss||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.ns||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.proc||0)+"</td>";s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+hf.toFixed(2)+"</td>";s+="</tr>";});
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
const totalHits=sumA+sumC+sumD+sumMiss;
const aPct=totalHits>0?(sumA/totalHits*100).toFixed(1):"0.0";
const cPct=totalHits>0?(sumC/totalHits*100).toFixed(1):"0.0";
const dPct=totalHits>0?(sumD/totalHits*100).toFixed(1):"0.0";
const missPct=totalHits>0?(sumMiss/totalHits*100).toFixed(1):"0.0";
s+='<tr style="border-top:2px solid var(--accent);font-weight:700;background:rgba(232,184,75,0.06);font-size:11px;">';
s+='<td style="padding:4px 3px;">'+d('col_sum')+'</td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumTime.toFixed(2)+'s</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+sumA+'<br><span style="font-size:10px;color:var(--muted);">'+aPct+'%</span></td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumC+'<br><span style="font-size:10px;color:var(--muted);">'+cPct+'%</span></td>';
s+='<td style="padding:4px 3px;text-align:right;">'+sumD+'<br><span style="font-size:10px;color:var(--muted);">'+dPct+'%</span></td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumMiss+(sumMiss>0?'<br><span style=\"font-size:10px;color:var(--muted);\">'+missPct+'%</span>':'')+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumNS+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+sumProc+'</td>';
s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+avgHFsum.toFixed(2)+'</td>';
s+="</tr>";
s+="</table></div>";s+='<div style="margin-top:10px;">';s+='<button onclick="const y=document.getElementById(\'stage-results-table\');y&&(y.style.display=y.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.sr-arrow\').textContent=y&&y.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;"><span>'+d('stage_results')+'</span><span class="sr-arrow">&#9654;</span></button>';s+='<div id="stage-results-table" style="display:none;margin-top:10px;">';var ctGroups={short:[],medium:[],long:[]};myResults.forEach(function(rr){var sd=icStageDefs(i).find(function(x){return Number(x.number)===Number(rr.num||rr.number);});if(!sd)return;var ct=getReferenceCourseType(sd);if(ctGroups[ct])ctGroups[ct].push({rr:rr,sd:sd});});var rAct=(i.referenceShootersEnabled&&refShooters.length)?getActiveReferenceShooters(i):[];["short","medium","long"].forEach(function(ct){var items=ctGroups[ct];if(!items.length)return;s+='<div style="margin-bottom:12px;">';s+='<div style="font-size:11px;font-weight:700;color:var(--accent);padding:6px 0;letter-spacing:0.06em;border-bottom:1px solid var(--border);margin-bottom:6px;">'+ct.toUpperCase()+' COURSE</div>';s+='<table style="width:100%;font-size:11px;border-collapse:collapse;">';s+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);font-size:11px;">';s+='<th style="padding:4px 3px;text-align:left;">STG</th>';s+='<th style="padding:4px 3px;text-align:right;">TIME</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">A</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">C</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">D</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">M</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">NS</th>';s+='<th style="padding:4px 3px;text-align:right;width:32px;">P</th>';s+='<th style="padding:4px 3px;text-align:right;">HF</th>';s+='</tr>';items.forEach(function(x){var rr=x.rr;var hf=rr.hf&&rr.hf>0?rr.hf:(rr.time>0?(rr.pts||0)/rr.time:0);s+='<tr style="border-bottom:1px solid var(--border);font-size:11px;">';s+='<td style="padding:4px 3px;">'+(rr.num||rr.number)+'</td>';s+='<td style="padding:4px 3px;text-align:right;">'+(rr.time||0).toFixed(2)+'s</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+(rr.a||0)+'</td>';s+='<td style="padding:4px 3px;text-align:right;">'+(rr.c||0)+'</td>';s+='<td style="padding:4px 3px;text-align:right;">'+(rr.d||0)+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.miss||0)+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.ns||0)+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+(rr.proc||0)+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+hf.toFixed(2)+'</td>';s+='</tr>';});var ctA=items.reduce(function(a,x){return a+(x.rr.a||0);},0);var ctC=items.reduce(function(a,x){return a+(x.rr.c||0);},0);var ctD=items.reduce(function(a,x){return a+(x.rr.d||0);},0);var ctMiss=items.reduce(function(a,x){return a+(x.rr.miss||0);},0);var ctNS=items.reduce(function(a,x){return a+(x.rr.ns||0);},0);var ctProc=items.reduce(function(a,x){return a+(x.rr.proc||0);},0);var ctTime=items.reduce(function(a,x){return a+(x.rr.time||0);},0);var ctTot=ctA+ctC+ctD+ctMiss;var ctAP=ctTot>0?(ctA/ctTot*100).toFixed(1):"0.0";var ctCP=ctTot>0?(ctC/ctTot*100).toFixed(1):"0.0";var ctDP=ctTot>0?(ctD/ctTot*100).toFixed(1):"0.0";var ctMissP=ctTot>0?(ctMiss/ctTot*100).toFixed(1):"0.0";var ctHFs=items.map(function(x){return x.rr.hf&&x.rr.hf>0?x.rr.hf:(x.rr.time>0?(x.rr.pts||0)/x.rr.time:0);});var ctAvgHF=ctHFs.length?ctHFs.reduce(function(a,b){return a+b;},0)/ctHFs.length:0;s+='<tr style="border-top:2px solid var(--accent);font-weight:700;background:rgba(232,184,75,0.06);font-size:11px;">';s+='<td style="padding:4px 3px;">'+d('col_sum')+'</td>';s+='<td style="padding:4px 3px;text-align:right;">'+ctTime.toFixed(2)+'s</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+ctA+'<br><span style="font-size:10px;color:var(--muted);">'+ctAP+'%</span></td>';s+='<td style="padding:4px 3px;text-align:right;">'+ctC+'<br><span style="font-size:10px;color:var(--muted);">'+ctCP+'%</span></td>';s+='<td style="padding:4px 3px;text-align:right;">'+ctD+'<br><span style="font-size:10px;color:var(--muted);">'+ctDP+'%</span></td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+ctMiss+(ctMiss>0?'<br><span style=\"font-size:10px;color:var(--muted);\">'+ctMissP+'%</span>':'')+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+ctNS+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--red);">'+ctProc+'</td>';s+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+ctAvgHF.toFixed(2)+'</td>';s+='</tr>';s+='</table>';if(rAct.length){rAct.forEach(function(rf){var rfAP=Number(rf[ct+'AP']||0),rfCP=Number(rf[ct+'CP']||0),rfDP=Number(rf[ct+'DP']||0),rfHF=Number(rf[ct+'HF']||0);if(!rfAP&&!rfHF)return;var dA=ctTot>0?parseFloat(ctAP)-rfAP:null,dC=ctTot>0?parseFloat(ctCP)-rfCP:null,dD=ctTot>0?parseFloat(ctDP)-rfDP:null,dHF=rfHF>0?ctAvgHF-rfHF:null;s+='<div style="margin-top:6px;padding:8px;background:rgba(255,255,255,0.04);border-radius:6px;font-size:11px;">';s+='<div style="color:var(--muted);margin-bottom:6px;">vs '+rf.name+'</div>';s+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;text-align:center;margin-bottom:6px;">';s+='<div><div style="color:var(--muted);font-size:10px;">REF HF</div><div style="font-weight:700;color:var(--accent);">'+rfHF.toFixed(2)+'</div></div>';s+='<div><div style="color:var(--muted);font-size:10px;">YOUR HF</div><div style="font-weight:700;">'+ctAvgHF.toFixed(2)+'</div></div>';var dHFcol=dHF==null?'var(--text)':(dHF>=0?'var(--green)':'var(--red)');s+='<div><div style="color:var(--muted);font-size:10px;">DELTA</div><div style="font-weight:700;color:'+dHFcol+';">'+(dHF!=null?(dHF>=0?'+':'')+dHF.toFixed(2):'—')+'</div></div>';s+='</div>';s+='<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;">';[['A%',rfAP,parseFloat(ctAP),dA,true],['C%',rfCP,parseFloat(ctCP),dC,false],['D%',rfDP,parseFloat(ctDP),dD,false]].forEach(function(z){var lbl=z[0],rfVal=z[1],myVal=z[2],delta=z[3],hg=z[4];var col=delta==null?'var(--text)':(hg?(delta>=0?'var(--green)':'var(--red)'):(delta<=0?'var(--green)':'var(--red)'));s+='<div style="text-align:center;padding:4px;background:rgba(255,255,255,0.03);border-radius:4px;">';s+='<div style="color:var(--muted);font-size:10px;">'+lbl+'</div>';s+='<div style="font-size:10px;">Ref: '+rfVal+'%</div>';s+='<div style="font-size:10px;">Yours: '+myVal.toFixed(1)+'%</div>';s+='<div style="font-weight:700;color:'+col+';">'+(delta!=null?(delta>=0?'+':'')+delta.toFixed(1)+'%':'—')+'</div>';s+='</div>';});s+='</div>';s+='</div>';});}s+='</div>';});s+='</div>';s+='<div style="margin-top:10px;">';s+='<button onclick="const z=document.getElementById(\'ref-standings-table\');z&&(z.style.display=z.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.rrs-arrow\').textContent=z&&z.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:12px;background:var(--card);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:var(--text);font-size:14px;font-weight:600;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;"><span>'+d('results_ref_shooters')+'</span><span class="rrs-arrow">&#9654;</span></button>';s+='<div id="ref-standings-table" style="display:none;margin-top:10px;">';var _refShootersActive=(i.referenceShootersEnabled&&refShooters.length)?getActiveReferenceShooters(i):[];if(_refShootersActive.length){var _realTotals=icMatchTotals(i,false);var _stageDefs=icStageDefs(i);var _refHFPerStage={};_stageDefs.forEach(function(_sd){var _sdKey=String(_sd.number);_refHFPerStage[_sdKey]={};_refShootersActive.forEach(function(_rf){var _proj=projectReferenceShooterForStage(_rf,_sd);_refHFPerStage[_sdKey][_rf.id]=_proj?_proj.benchmarkHF:0;});});var _topHFPerStage={};_stageDefs.forEach(function(_sd){var _sdKey=String(_sd.number);var _metrics=icStageMetricsForMatch(i,_sd);var _realTopHF=_metrics.length>0?(_metrics[0].hf||0):0;var _refTopHF=0;_refShootersActive.forEach(function(_rf){var _rHF=_refHFPerStage[_sdKey][_rf.id]||0;if(_rHF>_refTopHF)_refTopHF=_rHF;});_topHFPerStage[_sdKey]=Math.max(_realTopHF,_refTopHF);});var _realTotalsAdj=_realTotals.map(function(_rt){var _adjPts=0;_stageDefs.forEach(function(_sd){var _sdKey=String(_sd.number);var _topHF=_topHFPerStage[_sdKey]||0;if(_topHF<=0)return;var _maxPts=icStageMaxPts(_sd);var _metrics=icStageMetricsForMatch(i,_sd);var _shooterMetric=_metrics.find(function(m){return String(m.id)===String(_rt.id);});if(!_shooterMetric)return;var _shooterHF=_shooterMetric.hf||0;_adjPts+=(_shooterHF/_topHF)*_maxPts;});return Object.assign({},_rt,{totalStagePts:_adjPts});});var _refEntries=_refShootersActive.map(function(_rf){var _totalStagePts=0,_totalA=0,_totalHits=0;_stageDefs.forEach(function(_sd){var _sdKey=String(_sd.number);var _proj=projectReferenceShooterForStage(_rf,_sd);if(!_proj)return;var _maxPts=icStageMaxPts(_sd);if(_maxPts<=0)return;var _topHF=_topHFPerStage[_sdKey]||0;if(_topHF<=0)return;var _stagePts=(_proj.benchmarkHF/_topHF)*_maxPts;_totalStagePts+=_stagePts;var _ct=getReferenceCourseType(_sd);var _shots=icStageShots(_sd);var _rfAP=Number(_rf[_ct+'AP']||0);_totalA+=_shots>0&&_rfAP?Math.round(_shots*_rfAP/100):0;_totalHits+=_shots;});return{id:'ref_'+_rf.id,name:_rf.name+' (ref)',isRef:true,totalStagePts:_totalStagePts,totalA:_totalA,totalHits:_totalHits};});var _combined=_realTotalsAdj.concat(_refEntries);_combined.sort(function(a,b){return b.totalStagePts-a.totalStagePts;});var _topPts=_combined.length>0?_combined[0].totalStagePts:0;s+='<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;overflow:hidden;">';s+='<table style="width:100%;font-size:12px;border-collapse:collapse;">';s+='<thead><tr style="background:var(--bg3);color:var(--muted);">';s+='<th style="padding:10px 12px;text-align:left;">#</th>';s+='<th style="padding:10px 12px;text-align:left;">SHOOTERS</th>';s+='<th style="padding:10px 12px;text-align:right;">STG PTS</th>';s+='<th style="padding:10px 12px;text-align:right;">%</th>';s+='</tr></thead><tbody>';_combined.forEach(function(_e,_idx){var _pct=_topPts>0?(_e.totalStagePts/_topPts*100).toFixed(2):'0.00';var _isMe=!_e.isRef&&_e.id&&($.find(function(m){var sh=icCurrentShooter(m);return sh&&sh.id===_e.id;}));var _nameColor=_e.isRef?'var(--blue)':(_isMe?'var(--accent)':'var(--text)');var _rowBg=_e.isRef?'rgba(74,158,255,0.06)':'';s+='<tr style="border-top:1px solid var(--border);background:'+_rowBg+'">';s+='<td style="padding:10px 12px;font-weight:700;">'+(_idx+1)+'</td>';s+='<td style="padding:10px 12px;font-weight:'+(_e.isRef?'600':'700')+';color:'+_nameColor+';">';s+=_e.name;if(_e.isRef)s+=' <span style="font-size:10px;background:rgba(74,158,255,0.15);color:var(--blue);padding:2px 6px;border-radius:4px;border:1px solid rgba(74,158,255,0.25);">REF</span>';s+='</td>';s+='<td style="padding:10px 12px;text-align:right;font-weight:700;">'+_e.totalStagePts.toFixed(2)+'</td>';s+='<td style="padding:10px 12px;text-align:right;font-weight:700;color:var(--accent);">'+_pct+'%</td>';s+='</tr>';});s+='</tbody></table></div>';}else{s+='<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">Enable reference shooters in the match settings to view simulated standings.</div>';}s+='</div>';s+='</div>';s+='</div>';s+="</div>"}e.innerHTML=s}async function uploadProfilePhoto(input){
  const file=input.files&&input.files[0];
  if(!file)return;
  const uid=Pe()&&Pe().uid;
  if(!uid)return;
  try{
    showSpinner("Uploading photo...");
    const {getStorage,ref,uploadBytes,getDownloadURL}=await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js");
    const _Fstore=getStorage(at);
    const canvas=document.createElement("canvas");
    canvas.width=200;canvas.height=200;
    const ctx=canvas.getContext("2d");
    const img=new Image();
    img.onload=async function(){
      const size=Math.min(img.width,img.height);
      const sx=(img.width-size)/2,sy=(img.height-size)/2;
      ctx.drawImage(img,sx,sy,size,size,0,0,200,200);
      canvas.toBlob(async function(blob){
        try{
          const storageRef=ref(_Fstore,"avatars/"+uid);
          await uploadBytes(storageRef,blob,{contentType:"image/jpeg"});
          const url=await getDownloadURL(storageRef);
          await de(U(O,"users",uid),{photoURL:url});
          g.photoURL=url;
          gt();
          hideSpinner();
        }catch(e){hideSpinner();alert("Upload failed: "+e.message);}
      },"image/jpeg",0.85);
    };
    img.onerror=function(){hideSpinner();alert("Could not read image.");};
    const _reader=new FileReader();
    _reader.onload=function(e){img.src=e.target.result;};
    _reader.onerror=function(){hideSpinner();alert("Could not read image.");};
    _reader.readAsDataURL(file);
  }catch(e){hideSpinner();alert("Upload failed: "+e.message);}
}
function gt(){var _lno=document.getElementById("prof-lang-no"),_len=document.getElementById("prof-lang-en");if(_lno&&_len){if(dt==="en"){_len.style.borderColor="#e8b84b";_len.style.background="rgba(232,184,75,0.15)";_len.style.color="#e8b84b";_lno.style.borderColor="rgba(255,255,255,0.15)";_lno.style.background="transparent";_lno.style.color="var(--muted)";}else{_lno.style.borderColor="#e8b84b";_lno.style.background="rgba(232,184,75,0.15)";_lno.style.color="#e8b84b";_len.style.borderColor="rgba(255,255,255,0.15)";_len.style.background="transparent";_len.style.color="var(--muted)";}}const e=le();["prof-avatar","nav-av-home","nav-av-matches","nav-av-prog","nav-av-results","nav-av-teams"].forEach(u=>{const m=o(u);m&&(m.innerHTML=e)});const t=o("prof-name");t&&(t.textContent=(g.firstName||"")+" "+(g.lastName||""));const s=o("prof-div");s&&(s.textContent=(g.division||"—")+" · "+(g.club||"—"));const a=o("prof-badge-pf");a&&(a.textContent=g.powerFactor?ge(g.powerFactor):"—");const n=o("prof-badge-region");n&&(n.textContent=g.region||"—");const r={"info-firstname":g.firstName||"—","info-lastname":g.lastName||"—","info-division":g.division||"—","info-category":g.category||"—","info-pf":g.powerFactor?ge(g.powerFactor):"—","info-region":g.region||"—","info-club":g.club||"—"};Object.keys(r).forEach(u=>{const m=o(u);m&&(m.textContent=r[u])}),vt()}function vt(){const e=[];$.forEach(p=>{icCurrentResults(p).forEach(h=>e.push(h))});let i=0,t=0;let shortHF=0,shortN=0,medHF=0,medN=0,longHF=0,longN=0;e.forEach(p=>{i+=p.a||0;t+=(p.a||0)+(p.c||0)+(p.d||0)+(p.miss||0);const shots=(p.paperTargets||0)*2+(p.poppers||0)+(p.plates||0);if(shots>=1&&shots<=12){shortHF+=p.hf||0;shortN++;}else if(shots>=13&&shots<=24){medHF+=p.hf||0;medN++;}else if(shots>=25&&shots<=32){longHF+=p.hf||0;longN++;}});const n=t?Math.round(i/t*100)+"%":"—";const r=o("stat-matches");r&&(r.textContent=$.length);const u=o("stat-stages");u&&(u.textContent=e.length);const sh=o("stat-hf-short");sh&&(sh.textContent=shortN>0?(shortHF/shortN).toFixed(2):"—");const sm=o("stat-hf-medium");sm&&(sm.textContent=medN>0?(medHF/medN).toFixed(2):"—");const sl=o("stat-hf-long");sl&&(sl.textContent=longN>0?(longHF/longN).toFixed(2):"—");const b=o("stat-a-rate");b&&(b.textContent=n);const f=o("prog-a-rate");f&&(f.textContent=n);renderProfileMatchTips()}function icMatchTips(match){const myShooter=icCurrentShooter(match);if(!myShooter||!myShooter.stages||!myShooter.stages.length)return "";const stages=myShooter.stages.slice().sort(function(a,b){return(a.num||0)-(b.num||0)});const pf=myShooter.pf||g.powerFactor||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;let html="";let totalA=0,totalHits=0,totalMiss=0,totalProc=0,totalHF=0,stageCount=0;const stageAPs=[],stageHFs=[];stages.forEach(function(s){const t=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);totalA+=s.a||0;totalHits+=t;totalMiss+=s.miss||0;totalProc+=s.proc||0;totalHF+=s.hf||0;stageCount++;if(t>0)stageAPs.push({num:s.num||s.number,ap:Math.round((s.a||0)/t*100),hf:s.hf||0});stageHFs.push({num:s.num||s.number,hf:s.hf||0});});if(!stageCount)return "";const avgHF=totalHF/stageCount;const overallAP=totalHits>0?Math.round(totalA/totalHits*100):0;html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">GENERAL ANALYSIS</div>';html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;margin-bottom:4px;">Avg HF: <strong>'+avgHF.toFixed(2)+"</strong> &middot; A%: <strong>"+overallAP+"%</strong> &middot; Total misses: <strong>"+totalMiss+"</strong>"+(totalProc>0?" &middot; Proc: <strong>"+totalProc+"</strong>":"")+"</div>";if(overallAP>=90)html+='<div style="font-size:12px;padding:5px 0;color:var(--green);">Excellent hit quality ('+overallAP+'%) — focus on increasing tempo</div>';else if(overallAP>=75)html+='<div style="font-size:12px;padding:5px 0;">Good A% ('+overallAP+'%) &mdash; tempo can be increased gradually</div>';else html+='<div style="font-size:12px;padding:5px 0;color:var(--red);">A% at '+overallAP+'% is low &mdash; prioritize hit quality over tempo</div>';if(totalMiss>0)html+='<div style="font-size:12px;padding:5px 0;">Misses cost approx. '+(totalMiss*10/stageCount).toFixed(1)+' points per Stage</div>';html+="</div>";if(stageAPs.length>1){const aps=stageAPs.map(function(x){return x.ap;});const maxAP=Math.max.apply(null,aps),minAP=Math.min.apply(null,aps),spread=maxAP-minAP;html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">HIT QUALITY CONSISTENCY</div>';stageAPs.forEach(function(x){const col=x.ap>=85?'var(--green)':x.ap>=70?'var(--accent)':'var(--red)';html+='<div style="font-size:12px;display:flex;justify-content:space-between;padding:4px 8px;background:var(--bg);border-radius:4px;margin-bottom:3px;">';html+='<span>Stage '+x.num+'</span>';html+='<span style="color:'+col+';font-weight:600;">'+x.ap+'%A</span>';html+='</div>';});if(spread<=15)html+='<div style="font-size:12px;padding:5px 0;color:var(--green);">Consistent hit quality &mdash; spread of only '+spread+' percentage points</div>';else if(spread<=30)html+='<div style="font-size:12px;padding:5px 0;">Moderate variation ('+spread+' pp) &mdash; some stages challenge you more</div>';else html+='<div style="font-size:12px;padding:5px 0;color:var(--red);">Large spread ('+spread+' pp) &mdash; keep your technique across all stage types</div>';html+="</div>";}if(stageHFs.length>1){const weakest=stageHFs.reduce(function(a,b){return b.hf<a.hf?b:a},stageHFs[0]);const strongest=stageHFs.reduce(function(a,b){return b.hf>a.hf?b:a},stageHFs[0]);html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">WEAKEST STAGE</div>';html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;">Stage '+weakest.num+" had the lowest HF: <strong>"+weakest.hf.toFixed(2)+"</strong> (best: Stage "+strongest.num+": <strong>"+strongest.hf.toFixed(2)+"</strong> &mdash; difference: "+(strongest.hf-weakest.hf).toFixed(2)+" HF)</div>";html+="</div>";}const sumNS=stages.reduce(function(a,s){return a+(s.ns||0);},0);const tips=[];if(overallAP<75)tips.push("Low A% indicates you are pushing tempo past the control threshold &mdash; in IPSC it is better to shoot consistently at 92&ndash;95&nbsp;% of capacity than to chase 100&nbsp;% and lose points.");else if(overallAP>=85&&avgHF<3.0)tips.push("Good hit quality, but low hit factor &mdash; tempo is holding you back. A good enough sight&nbsp;picture is faster than a perfect one.");else if(overallAP>=90&&avgHF<3.5)tips.push("Good hit quality &mdash; try increasing tempo gradually. A good enough sight&nbsp;picture holds.");if(totalMiss>stageCount*0.5)tips.push("High miss rate &mdash; misses and no-shoots are the most expensive errors in IPSC. One miss costs as much as losing two seconds on a stage with HF&nbsp;5. Prioritize hit quality over tempo.");else if(totalMiss>0)tips.push("You had "+totalMiss+" misses in this match — misses cost 10 points plus relative hit factor. Consider whether you pushed tempo past the control threshold on the weak stages.");if(sumNS>0)tips.push("No-shoots in this match &mdash; they are as costly as misses and harder to recover from. Consider no-shoot exposure and safety angles when planning the stage.");if(totalProc>0)tips.push("Procedurals cost 10&nbsp;points &mdash; as much as a miss. Review the stage briefing and plan around penalty risks before you shoot.");if(stageAPs.length>1){const aps=stageAPs.map(function(x){return x.ap;});const spreadAP=Math.max.apply(null,aps)-Math.min.apply(null,aps);if(spreadAP>30)tips.push("Large variation in hit quality between stages &mdash; consistency wins matches. A bad stage costs more than a good stage earns.");else if(spreadAP<=15&&stageCount>=4)tips.push("Consistent hit quality throughout the match &mdash; that is how matches are won. Now focus on increasing hit&nbsp;factor.");}if(stageCount>=4){const hfsArr=stageHFs.map(function(x){return x.hf;});const minHFv=Math.min.apply(null,hfsArr);const maxHFv=Math.max.apply(null,hfsArr);if(maxHFv>0&&minHFv/maxHFv<0.6)tips.push("One or more weak stages are pulling down your total &mdash; focus on avoiding collapses rather than chasing stage wins. Matches are won by those who make the fewest costly mistakes.");}if(tips.length){html+='<div style="margin-bottom:12px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">TRAINING TIPS</div>';tips.forEach(function(t){html+='<div style="font-size:12px;padding:6px 8px;background:rgba(232,184,75,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">&gt; '+t+"</div>";});html+="</div>";}const refleks=[];if(overallAP<75)refleks.push("Low A% &mdash; did you push past the control threshold too fast, or was it sight&nbsp;picture and timing that failed?");if(totalMiss>0)refleks.push("You had "+totalMiss+" misses — was it tempo, concentration, or did you take too much risk on difficult targets?");if(sumNS>0)refleks.push("You had no-shoot hits &mdash; was it sight&nbsp;picture, angle of approach, or pressure that failed?");if(totalProc>0)refleks.push("You had a procedural — what in the stage plan could have been clarified better during walk-through?");if(stageAPs.length>1){const aps2=stageAPs.map(function(x){return x.ap;});if(Math.max.apply(null,aps2)-Math.min.apply(null,aps2)>20)refleks.push("Large variation between stages — what was the difference between the good and the weak stages?");}refleks.push("What worked best in this match &mdash; hit quality, tempo, or stage plans?");refleks.push("What would you prioritize working on before the next match?");html+='<div style="margin-bottom:8px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">REFLECTION</div>';refleks.forEach(function(q){html+='<div style="font-size:12px;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">? '+q+"</div>";});
const mentalId="mb"+Math.random().toString(36).substr(2,5);
const mentalTips=[];
if(totalMiss>stageCount*0.5)mentalTips.push({t:"Inner dialogue on a miss",b:"Identify the saboteur — the voice that says you are not good enough. Use SOAL: Stop the thought, Observe without reacting, Accept that it is there, Let it go. The brain remembers the last image — immediately visualize how you would have shot the stage correctly and move forward with a positive image."});
if(stageAPs.length>1){const _aps=stageAPs.map(function(x){return x.ap;});if(Math.max.apply(null,_aps)-Math.min.apply(null,_aps)>20)mentalTips.push({t:"Visualization between stages",b:"Large variation is often caused by uneven activation levels. Use a breathing pause: breathe in 4 sec, hold 4, breathe out 6. Identify your trigger signals — what do you feel i your body when you are in the flow state? Use this deliberately before each match."});}
if(overallAP>=90&&avgHF<3.5)mentalTips.push({t:"Activation regulation",b:"The body is ready for more tempo. Use an energizing trigger word like Explosive or Now, and visualize stages with high intensity and flow. Intrinsic motivation drives performance faster and more consistently than external pressure."});
if(totalProc>0)mentalTips.push({t:"Concentration and stage plan",b:"Procedurals happen when attention is focused on the wrong thing. Practice filtering out noise like RO decisions and range conditions. Before the next stage: close your eyesene, visualize the stage plan step by step and confirm all rules are clear in your head."});
const _gt=[{t:"Trigger word",b:"Choose 1-2 words that create the right state immediately. Avoid negations — the subconscious filters them out and you focus on what you want to avoid. Good examples: Smooth, Flow, Ready, Raw. Test them in training before using them in a match."},{t:"Confidence boost",b:"Confidence is built by performances, not result goals. Focus on mastery goals: draw, movement, stage plan. After the match — write down three things you didjdid well before reviewing areas for improvement. This strengthens confidence and makes the evaluation more constructive."},{t:"Breathing pause",b:"Breathe in 4 seconds, hold 4, breathe out 6. Do this three times. Stress makes breathing shallow and fast, which weakens coordination and concentration. Calm breathing signals to the body that you are ready and in control."},{t:"Goal setting",b:"What really drives you? The joy of shooting, community, personal development? Nurture your inner motivation actively — external pressure like results and rrankings make you vulnerable when things go against you. Have fun, enjoy the community, and strive for continuous progress."},{t:"Positive self-talk",b:"Set mastery goals rather than just result goals. Create your own 1-10 scale for e.g. concentration, draw, or stage plan adherence. Write down both the goalt og HVORDAN du skal work toward it. Each sub-goal brings you one step closer to the long-term goal."}];
mentalTips.push(_gt[stageCount%_gt.length]);
html+='<div style="margin-top:10px;border-top:1px solid var(--border);padding-top:8px;">';
html+='<div onclick="toggleTips(\x27'+mentalId+'\x27)" style="cursor:pointer;font-size:11px;color:var(--muted);font-weight:700;margin-bottom:4px;user-select:none;">&#9658; MENTAL TRAINING</div>';
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

  var html='<button onclick="var x=document.getElementById(\'sa-body\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.sa-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:10px 14px;background:transparent;border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:var(--accent);font-size:13px;font-weight:700;cursor:pointer;text-align:left;margin-bottom:8px;">';
  html+='▶ Season Analysis</button>';
  html+='<div id="sa-body" style="display:none;padding:12px 0 4px 0;">';

  // HF trend
  html+='<div style="margin-bottom:12px;">';
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">HF DEVELOPMENT</div>';
  html+='<div style="display:grid;grid-template-columns:repeat('+Math.min(matchStats.length,4)+',1fr);gap:6px;">';
  matchStats.slice(-4).forEach(function(m){
    var col=m.avgHF>=avgHFall?'var(--green)':'var(--red)';
    html+='<div style="background:var(--bg);padding:8px;border-radius:8px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;">';
    html+='<div style="font-size:10px;color:var(--muted);height:2.4em;overflow:hidden;">'+(m.name||"").substring(0,10)+'</div>';
    html+='<div style="font-weight:700;font-size:16px;color:'+col+';">'+m.avgHF.toFixed(2)+'</div>';
    html+='<div style="font-size:10px;color:var(--muted);">'+m.ap+'%A</div>';
    html+='</div>';
  });
  html+='</div>';
  if(Math.abs(hfTrend)>0.05){
    var trendCol=hfTrend>0?'var(--green)':'var(--red)';
    var trendTxt=hfTrend>0?'HF has increased by '+hfTrend.toFixed(2)+' since the first match — positive development.':'HF har falt med '+Math.abs(hfTrend).toFixed(2)+' since the first match — check what changed.';
    html+='<div style="margin-top:8px;font-size:12px;color:'+trendCol+';">'+trendTxt+'</div>';
  }
  html+='</div>';

  // A% graf
  if(matchStats.length>=2){
    var W=320,H=140,PL=32,PR=12,PT=10,PB=24;
    var gW=W-PL-PR,gH=H-PT-PB;
    var n=matchStats.length;
    var minAP=Math.max(0,Math.min.apply(null,matchStats.map(function(m){return m.ap;}))-10);
    var maxAP=Math.min(100,Math.max.apply(null,matchStats.map(function(m){return m.ap;}))+10);
    var rng=maxAP-minAP||1;
    function xp(i){return n>1?PL+i*(gW/(n-1)):PL+gW/2;}
    function yp(v){return PT+gH*(1-(v-minAP)/rng);}
    var svgAP='<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:'+W+'px;display:block;margin:0 auto;">';
    // Grid lines
    [minAP,Math.round((minAP+maxAP)/2),maxAP].forEach(function(v){
      var gy=yp(v);
      svgAP+='<line x1="'+PL+'" y1="'+gy.toFixed(1)+'" x2="'+(W-PR)+'" y2="'+gy.toFixed(1)+'" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>';
      svgAP+='<text x="'+(PL-3)+'" y="'+(gy+4)+'" font-size="8" fill="#7d8598" text-anchor="end">'+v+'%</text>';
    });
    // X labels
    matchStats.forEach(function(m,i){
      svgAP+='<text x="'+xp(i)+'" y="'+(H-6)+'" font-size="8" fill="#7d8598" text-anchor="middle">'+(m.name||"").substring(0,6)+'</text>';
    });
    // Line
    var pts=matchStats.map(function(m,i){return[xp(i),yp(m.ap)];});
    var d=pts.map(function(p,i){return(i===0?'M':'L')+p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ');
    svgAP+='<path d="'+d+'" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>';
    // Dots
    pts.forEach(function(p,i){
      var col=matchStats[i].ap>=avgAP?'var(--green)':'var(--red)';
      svgAP+='<circle cx="'+p[0].toFixed(1)+'" cy="'+p[1].toFixed(1)+'" r="3" fill="'+col+'"/>';
      svgAP+='<text x="'+p[0].toFixed(1)+'" y="'+(p[1]-6)+'" font-size="8" fill="'+col+'" text-anchor="middle">'+matchStats[i].ap+'%</text>';
    });
    svgAP+='</svg>';
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">A% DEVELOPMENT</div>';
    html+=svgAP;
    html+='</div>';
  }

  // Styrker
  var styrker=[];
  if(avgAP>=88)styrker.push("Consistent high A% ("+avgAP+"%) across matches");
  if(avgMiss<0.5)styrker.push("Low miss rate — good shot control");
  if(hfTrend>0.1)styrker.push("Clear HF growth over the season");
  if(bestMatch.ap>=90)styrker.push("Best match: "+bestMatch.name+" ("+bestMatch.avgHF.toFixed(2)+" HF, "+bestMatch.ap+"%A)");

  if(styrker.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">STRENGTHS</div>';
    styrker.forEach(function(s){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--green);">&#10003; '+s+'</div>';
    });
    html+='</div>';
  }

  // Problemområder
  var problemer=[];
  if(avgAP<75)problemer.push("A% below 75% average — hit quality is primary focus");
  else if(avgAP<85)problemer.push("A% at "+avgAP+"% — room for improvement in hit quality");
  if(avgMiss>1)problemer.push("Recurring misses ("+avgMiss.toFixed(1)+" per stage) — practice controlled trigger press");
  if(hfTrend<-0.1)problemer.push("HF decline over the season — consider whether increased tempo has come at the expense of hit quality");
  var apSpread=Math.max.apply(null,matchStats.map(function(m){return m.ap;}))-Math.min.apply(null,matchStats.map(function(m){return m.ap;}));
  if(apSpread>20)problemer.push("Large variation in A% between matches ("+apSpread+" pp) — consistency is the key");

  if(problemer.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">PROBLEM AREAS</div>';
    problemer.forEach(function(p){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(239,68,68,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--red);">⚠ '+p+'</div>';
    });
    html+='</div>';
  }

  // Treningstips
  var tips=[];
  if(avgAP<85)tips.push("Slow-fire drills: 10 shots at 10 m, focus on 100%A. Build automaticity in sight picture before increasing tempo.");
  if(avgMiss>0.5)tips.push("Draw-and-shoot on close target: draw, one A, reholster. 20 reps. Eliminate rushing on the first shot.");
  if(apSpread>15)tips.push("Simulate match pressure in training: timed runs, 3-stage sequences. Build mental resilience against variation.");
  if(hfTrend<0)tips.push("Return to fundamentals: draw, transitions, reloads. Tempo is built from the bottom up, not the top down.");
  if(tips.length){
    html+='<div style="margin-bottom:12px;">';
    html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">TRAINING TIPS</div>';
    tips.forEach(function(t){
      html+='<div style="font-size:12px;padding:6px 8px;background:rgba(232,184,75,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">&gt; '+t+'</div>';
    });
    html+='</div>';
  }

  // Mental trening
  var mental=[];
  if(apSpread>15)mental.push({t:"Activation regulation",b:"Large variation between matches is often caused by uneven activation levels. Find your optimal zone: what do you feel in your body when you are in the flow state? Use this as your reference point and adjust deliberately before each match."});
  if(avgMiss>1)mental.push({t:"Inner dialogue on a miss",b:"Use SOAL: Stop the thought, Observe without reacting, Accept that it is there, Let it go. The brain remembers the last image — immediately visualize how you wolle skutt rcorrectly and move forward."});
  mental.push({t:"Season goal",b:"Set a concrete technical goal for the next match — not a placement goal. E.g.: e.g. keep A% above 88% or no misses. Mastery goals give you control regardless of opponents."});

  var mentalId="sea"+Math.random().toString(36).substr(2,5);
  html+='<div style="border-top:1px solid var(--border);padding-top:10px;margin-top:4px;">';
  html+='<div onclick="toggleTips(\''+mentalId+'\')" style="cursor:pointer;font-size:11px;color:var(--muted);font-weight:700;margin-bottom:4px;user-select:none;">&#9658; MENTAL TRAINING FOR THE SEASON</div>';
  html+='<div id="'+mentalId+'" style="display:none;">';
  mental.forEach(function(tip){
    html+='<div style="font-size:12px;padding:8px 10px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:6px;border-left:3px solid #4caf7d;">';
    html+='<div style="font-weight:700;color:#4caf7d;margin-bottom:3px;">'+tip.t+'</div>';
    html+='<div style="color:var(--text);">'+tip.b+'</div></div>';
  });
  html+='</div></div>';
  html+='</div>';
  return html;
}
function icTrainingSeasonAnalysis(matches){
  var tMatches=matches.filter(function(m){return(m.type||"")===d("training");});
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
  var html='<button onclick="var x=document.getElementById(\'ta-body\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\');this.querySelector(\'.ta-arrow\').textContent=x&&x.style.display===\'block\'?\'\u25bc\':\'\u25b6\';" style="width:100%;padding:10px 4px;background:transparent;border:none;color:var(--text);font-size:13px;font-weight:700;cursor:pointer;text-align:left;display:flex;justify-content:space-between;align-items:center;">';
  html+='<span style="color:#4caf7d;">TRAINING ANALYSIS — '+matchStats.length+' SESSIONS</span><span class="ta-arrow">▶</span></button>';
  html+='<div id="ta-body" style="display:none;padding:12px 0 4px 0;">';
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:8px;">HF DEVELOPMENT</div>';
  html+='<div style="display:grid;grid-template-columns:repeat('+Math.min(matchStats.length,4)+',1fr);gap:6px;margin-bottom:12px;">';
  matchStats.slice(-4).forEach(function(m){var col=m.avgHF>=avgHFall?'var(--green)':'var(--red)';html+='<div style="background:var(--bg);padding:8px;border-radius:8px;text-align:center;display:flex;flex-direction:column;justify-content:space-between;"><div style="font-size:10px;color:var(--muted);height:2.4em;overflow:hidden;">'+(m.name||'').substring(0,12)+'</div><div style="font-weight:700;font-size:16px;color:'+col+';">'+m.avgHF.toFixed(2)+'</div><div style="font-size:10px;color:var(--muted);">'+m.ap+'%A</div></div>';});
  html+='</div>';
  if(hfTrend>0.05)html+='<div style="font-size:12px;color:var(--green);margin-bottom:10px;">HF increased by '+hfTrend.toFixed(2)+' — positiv utvikling.</div>';
  else if(hfTrend<-0.05)html+='<div style="font-size:12px;color:var(--red);margin-bottom:10px;">HF dropped by '+Math.abs(hfTrend).toFixed(2)+' — review your focus areas.</div>';
  var tips=[];
  if(avgAP<85)tips.push("Slow-fire drills: 20 shots per session with 100% focus on the A-zone.");
  else tips.push("Good A% in training ("+avgAP+"%) — next step is to maintain this under match pressure.");
  tips.push("Use the run feature actively: log all runs and analyze what separates your best run from the rest.");
  html+='<div style="font-size:11px;color:var(--muted);font-weight:700;margin-bottom:6px;">TRAINING TIPS</div>';
  tips.forEach(function(t){html+='<div style="font-size:12px;padding:6px 8px;background:rgba(76,175,125,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid #4caf7d;">&gt; '+t+'</div>';});
  html+='</div>';
  return html;
}
function renderProfileMatchTips(){const container=o("profile-match-tips");if(!container||!$.length){if(container)container.innerHTML="";return;}const myMatches=$.filter(function(m){const s=icCurrentShooter(m);return s&&s.stages&&s.stages.length>0;});if(!myMatches.length){container.innerHTML="";return;}let html='<div class="card" style="margin-bottom:16px;"><div class="card-header" style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;" onclick="(function(){var b=document.getElementById(\'mt-body\');var c=document.getElementById(\'mt-chev\');if(b){var o=b.style.display!==\'none\';b.style.display=o?\'none\':\'block\';c.style.transform=o?\'rotate(0deg)\':\'rotate(180deg)\';}})()"><div style="display:flex;align-items:center;gap:8px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div class="card-title">MATCHES &amp; TIPS</div></div><svg id="mt-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transition:transform 0.2s;flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg></div><div id="mt-body" style="display:none;">'+icSeasonAnalysis(myMatches)+'<div style="height:1px;background:rgba(255,255,255,0.06);margin:4px 0;"></div>'+icTrainingSeasonAnalysis(myMatches);if(myMatches.length){html+='<div style="height:1px;background:var(--border);margin:8px 0;"></div>';html+='<button onclick="(function(){var b=document.getElementById(\'md-body\');var a=this;if(b){var open=b.style.display!==\'none\';b.style.display=open?\'none\':\'block\';a.textContent=open?\'▶ Match Details\':\'▼ Match Details\';}}).call(this)" style="width:100%;padding:10px 14px;background:transparent;border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:var(--accent);font-size:13px;font-weight:700;cursor:pointer;text-align:left;margin-bottom:8px;">▶ Match Details</button>';html+='<div id="md-body" style="display:none;">';myMatches.forEach(function(match,mi){const myShooter=icCurrentShooter(match);const sc=myShooter.stages.length;let tHF=0,tA=0,tHits=0;myShooter.stages.forEach(function(s){tHF+=s.hf||0;tA+=s.a||0;tHits+=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0);});const avgHF=(tHF/sc).toFixed(2);const apStr=tHits>0?Math.round(tA/tHits*100)+"%":"--";const mid="mtips-"+mi;html+='<div style="margin-bottom:8px;background:var(--card2);border:1px solid var(--border);border-radius:10px;overflow:hidden;">';html+='<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 14px;cursor:pointer;" onclick="toggleTips(\''+mid+'\')">';html+='<div style="flex:1;min-width:0;"><div style="font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">'+( match.name||"Match")+"</div>";html+="<div style=\"font-size:12px;color:var(--muted);\">"+We(match.date)+" &middot; <span style=\"color:#e8b84b;font-weight:600;\">"+( match.type||"")+" &middot; "+sc+" stages &middot; HF "+avgHF+" &middot; "+apStr+"</div></div>";html+='<svg viewBox="0 0 24 24" id="chev-'+mid+'" width="16" height="16" fill="none" stroke="var(--muted)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;transition:transform 0.2s;"><polyline points="6 9 12 15 18 9"/></svg>';html+="</div></div>";html+='<div id="'+mid+'" style="display:none;padding:0 14px 14px;">'+icMatchTips(match)+"</div>";});}html+="</div></div></div>";container.innerHTML=html;}function Ns(){o("edit-firstname").value=g.firstName||"",o("edit-lastname").value=g.lastName||"",o("edit-club").value=g.club||"",o("edit-draw").value=g.draw||"",o("edit-reload").value=g.reloadTime||"";let e="";Yi.forEach(s=>{e+='<option value="'+s+'"'+(s===g.division?" selected":"")+">"+s+"</option>"}),o("edit-division").innerHTML=e;let i="";Qi.forEach(s=>{i+='<option value="'+s+'"'+(s===g.category?" selected":"")+">"+s+"</option>"}),o("edit-category").innerHTML=i;let t="";Xi.forEach(s=>{t+='<option value="'+s+'"'+(s===g.region?" selected":"")+">"+s+"</option>"}),o("edit-region").innerHTML=t,mt(),ie("modal-edit-profile")}function mt(){const e=F("edit-division"),i=Zi[e]||["minor","major"];let t="";i.forEach(s=>{const a=g.powerFactor===s;t+='<label class="pf-option'+(a?" active":"")+`" onclick="selectPF(this,'`+s+`')">`,t+='<input type="radio" name="pf" value="'+s+'">',t+='<div class="pf-label">'+s.toUpperCase()+"</div>",t+='<div class="pf-sub">'+(s==="major"?"170 PF":"<170 PF")+"</div>",t+="</label>"}),o("pf-options").innerHTML=t,i.indexOf(g.powerFactor)<0&&(g.powerFactor=i[0])}function $s(e,i){document.querySelectorAll(".pf-option").forEach(t=>t.classList.remove("active")),e.classList.add("active"),g.powerFactor=i}async function Fs(){g.firstName=F("edit-firstname").trim()||"",g.lastName=F("edit-lastname").trim()||"",g.division=F("edit-division")||"",g.category=F("edit-category")||"",g.region=F("edit-region")||"",g.club=F("edit-club").trim()||"",g.draw=he("edit-draw")||null,g.reloadTime=he("edit-reload")||null;const e=await Ot(g),i=o("save-profile-btn");e.success?(i.textContent=" Saved!",i.style.background="var(--green)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)):(i.textContent=" Error!",i.style.background="var(--red)",setTimeout(()=>{i.textContent=d("save_profile"),i.style.background=""},1800)),gt(),De(),te(),G("modal-edit-profile")}function As(e,i,t,s){if(!e||!i||!s)return null;const a=icCurrentShooter(e);if(!a)return null;const n=icMatchTotals(e),r=n.find(v=>String(v.id)===String(a.id));if(!r)return null;let u=null;if(e.rivalId&&e.rivalId!=="me")u=(e.shooters||[]).find(v=>v&&String(v.id)===String(e.rivalId));if(!u){const v=n.filter(S=>String(S.id)!==String(a.id)).sort((S,x)=>x.totalStagePts-S.totalStagePts);v.length&&(u=(e.shooters||[]).find(S=>String(S.id)===String(v[0].id))||null)}if(!u)return null;const m=n.find(v=>String(v.id)===String(u.id));if(!m)return null;const b=((u.firstName||"")+" "+(u.lastName||"")).trim()||"Rival",f=(r.totalStagePts||0)-(m.totalStagePts||0),p=f>=0,h=Math.abs(f),E=icProjectNext(i,s);if(!E)return{statusText:(p?"LEADING ":"BEHIND ")+h.toFixed(1)+" stg pts",advice:p?`You are leading over ${b}. Keep the process stable and avoid unnecessary losses.`:`You're behind ${b}. Next stage is important.`,rivalName:b,gap:f,targetHF:null,estHF:null,deltaHF:null};const _curStageNum=Math.max(...((e.stages||[]).map(function(_s){return _s.number||_s.num||0;}).concat(0)));const k=((u.stages||[]).filter(function(v){return(v.num||v.number||0)<_curStageNum;}).slice().sort((v,S)=>(v.num||0)-(S.num||0))),P=icFormFromResults(k,null,u),C=P?icProjectNext(P,s):null,L=Math.max(E.estHF||0,(C&&C.estHF)||0,.01),M=L>0?(E.estHF/L*E.maxPts):0,D=L>0?(((C&&C.estHF)||0)/L*E.maxPts):0;let B=null,_=null,K=null,j="",w="";if(p){B=Math.max(0,D-h);_=L>0?(B/E.maxPts*L):null;K=_!=null?_-E.estHF:null;j=`LEADING ${h.toFixed(1)} stg pts`;{const _rnd=Math.floor(Math.random()*3);if(B<=0){const _msgs=[`You are leading over ${b}. Maintain ${E.estHF.toFixed(2)} HF and the lead is yours.`,`You are leading over ${b}. ${E.estHF.toFixed(2)} HF holds — run your stage.`,`The lead is safe. Run your stage — ${E.estHF.toFixed(2)} HF is enough.`,`You control the race. Process before result — ${E.estHF.toFixed(2)} HF holds.`,`${b} is behind you. Hold ${E.estHF.toFixed(2)} HF and finish strong.`,`Well positioned. ${E.estHF.toFixed(2)} HF is all you need next stage.`,`You are in control. One more stage at ${E.estHF.toFixed(2)} HF and the lead holds.`];w=_msgs[_rnd];}else if(K!=null&&K<=0){const _msgs=[`You are leading over ${b}. Aim for ${_.toFixed(2)} HF and the lead holds.`,`The lead is there. ${_.toFixed(2)} HF next stage and you keep your position.`,`You are ahead of ${b}. Hold ${_.toFixed(2)} HF — that is enough.`,`${_.toFixed(2)} HF next stage and the rival stays behind you all the way.`,`Good position. ${_.toFixed(2)} HF from you and the lead is secured.`,`You have a lead. ${_.toFixed(2)} HF holds — don't overthink it.`,`The lead is yours to lose. ${_.toFixed(2)} HF next stage keeps the rival back.`];w=_msgs[_rnd];}else if(K!=null&&K<=.35){const _msgs=[`You are leading, but ${b} can close the gap. Aim for ${_.toFixed(2)} HF to keep the rival behind you.`,`Tight at the top. ${_.toFixed(2)} HF next stage protects your lead.`,`The lead could slip. Stay focused — ${_.toFixed(2)} HF is what you need.`,`${b} is closing in. ${_.toFixed(2)} HF keeps the rival behind you — run clean.`,`Margins are tight. A clean stage at ${_.toFixed(2)} HF and the lead is secure.`,`You are still leading — but it takes ${_.toFixed(2)} HF to keep the rival at bay.`,`Stay cool. ${_.toFixed(2)} HF next stage is enough to hold your position.`];w=_msgs[_rnd];}else{const _msgs=[`You are leading over ${b}, but this stage can change everything. ${_.toFixed(2)} HF holds the lead — keep the process stable.`,`Tight race. ${_.toFixed(2)} HF secures the lead — avoid misses and procedurals.`,`Rival is right behind. A clean stage at ${_.toFixed(2)} HF is all it takes.`,`${b} can pass you this stage. ${_.toFixed(2)} HF is the answer — one stage at a time.`,`The lead is hanging by a thread. Focus on the process — ${_.toFixed(2)} HF keeps you ahead.`,`It is tight. Don’t think about the result — run ${_.toFixed(2)} HF and let it happen.`,`You are under pressure. Break it down: one clean stage at ${_.toFixed(2)} HF is enough.`];w=_msgs[_rnd];}}}else{B=D+h+.01;_=L>0?(B/E.maxPts*L):null;K=_!=null?_-E.estHF:null;j=`BEHIND ${h.toFixed(1)} stg pts`;{const _rnd=Math.floor(Math.random()*3);if(_==null){const _msgs=[`You are behind ${b}. Run a clean and efficient stage.`,`${b} is ahead. Stay focused and take what you can.`,`Focus on the process now — a good stage is what matters most.`,`You are behind. Take it one stage at a time and run your best.`,`${b} is leading — but the match is not over. Run your stage all out.`,`No reason to speculate. Run your best stage and see what happens.`,`Behind in the standings — but it is decided on the range, not in your head. Run clean.`];w=_msgs[_rnd];}else if(K<=.2){const _msgs=[`You are right behind ${b}. ${_.toFixed(2)} HF next stage — just above your average of ${E.estHF.toFixed(2)} HF — is enough to turn it around.`,`Not much separates you from ${b}. ${_.toFixed(2)} HF holds — that is only ${K.toFixed(2)} HF above what you expect to deliver.`,`${b} is within reach. One good stage at ${_.toFixed(2)} HF may be enough.`,`The gap is small. ${_.toFixed(2)} HF next stage and you pass the rival.`,`You are close. ${_.toFixed(2)} HF — marginally above your average — turns the match around.`,`${b} is almost within reach. Push a little extra: ${_.toFixed(2)} HF gets the job done.`,`Short distance to the top. A sharp stage at ${_.toFixed(2)} HF and you are leading.`];w=_msgs[_rnd];}else if(K<=.75){const y=E.expTime&&_>0?Math.max(0,E.expTime-E.expPts/_):0,H=E.expTime?Math.max(0,_*E.expTime-E.expPts):0;const _msgs=[`You need ${_.toFixed(2)} HF to take ${b} — that is ${K.toFixed(2)} HF more than expected. Save time in movement phases and hold your A-rate.`,`${b} is ahead. ${_.toFixed(2)} HF next stage takes you past — think ${y.toFixed(2)}s faster total or ${H.toFixed(1)} extra raw points.`,`The gap to ${b} requires ${_.toFixed(2)} HF. Tighten the tempo and avoid penalties.`,`${_.toFixed(2)} HF is what it takes — above average, but within reach with a sharp stage.`,`You need ${_.toFixed(2)} HF to pass the rival. Reduce movement time and keep your hit quality clean.`,`${K.toFixed(2)} HF above your average — it requires focus, but is fully possible with a good stage.`,`${b} can be taken. ${_.toFixed(2)} HF next stage gets the job done — run aggressive and clean.`];w=_msgs[_rnd];}else{const y=E.expTime&&_>0?Math.max(0,E.expTime-E.expPts/_):0,H=E.expTime?Math.max(0,_*E.expTime-E.expPts):0;const _msgs=[`There is ground to cover to ${b}. You need ${_.toFixed(2)} HF — ${K.toFixed(2)} HF above average. Focus on one thing: tempo.`,`${b} is well ahead. ${_.toFixed(2)} HF is the target — aggressive, but possible with a clean stage.`,`Big job next stage. ${_.toFixed(2)} HF requires full pressure — think ${y.toFixed(2)}s faster total and ${H.toFixed(1)} extra raw points.`,`The gap is large but not impossible. ${_.toFixed(2)} HF requires everything to click — go for it.`,`You need a top stage. ${_.toFixed(2)} HF against ${b} — focus on tempo and hit quality from the first shot.`,`${b} is leading comfortably. It takes ${_.toFixed(2)} HF to catch the rival — let everything else go and run all out.`,`No easy answers here. ${_.toFixed(2)} HF is what is required — break the stage down mentally and run it piece by piece.`];w=_msgs[_rnd];}}}return{statusText:j,advice:w,rivalName:b,gap:f,targetHF:_,estHF:E.estHF,deltaHF:K,rivalEstHF:(C&&C.estHF)||null,yourEstStagePts:M,rivalEstStagePts:D,requiredStagePts:B,maxStagePts:E.maxPts}}function De(){const e=ct(),i=o("prog-a-rate");i&&(i.textContent=e&&e.aPercent!==void 0?Math.round(e.aPercent*100)+"%":"—");const t=o("prog-data-status");t&&(t.style.display=!e||e.completedStages===0?"block":"none"),Rs()}window.icToggleSection=function(id){var b=document.getElementById(id);var h=document.getElementById(id+'-hdr');if(!b)return;var open=b.style.display!=='none';b.style.display=open?'none':'block';if(h){var arr=h.querySelector('.ic-arr');if(arr)arr.textContent=open?'▶':'▼';}};
function icSec(label,id,html,open,accent){var col=accent||'var(--border)';var arr=open?'▼':'▶';var disp=open?'block':'none';var s='<div class="ic-section" style="margin-top:12px;border:1px solid '+col+';border-radius:10px;overflow:hidden;">'+'<div id="'+id+'-hdr" onclick="icToggleSection(\''+id+'\')" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;cursor:pointer;background:var(--bg3);user-select:none;">'+'<span style="font-size:12px;font-weight:700;letter-spacing:0.08em;color:var(--muted);text-transform:uppercase;">'+label+'</span>'+'<span class="ic-arr" style="font-size:11px;color:var(--muted);">'+arr+'</span>'+'</div>'+'<div id="'+id+'" style="display:'+disp+';">'+html+'</div>'+'</div>';return s;}
window.toggleStageCard=function(id){var c=document.getElementById(id);if(c)c.classList.toggle("open");};function Rs(){const e=$.find(a=>a.id!=null&&a.id.toString()===String(R));const i=o("prog-stages-container");if(!i||!e){i&&(i.innerHTML="");return}const t=icStageDefs(e);if(!t.length){i.innerHTML="";return}const s=icCurrentShooter(e),a=icCurrentResults(e),n=icCurrentShooterId(),rActive=getActiveReferenceShooters(e),commonNums=icCommonStageNumbers(e),commonResults=a.filter(u=>commonNums.includes(String(u.num||u.number))),nextStage=t.find(u=>!a.some(m=>String(m.num||m.number)===String(u.number))),overallForm=icFormFromResults(commonResults.length?commonResults:a,null,s),overallProjection=nextStage&&overallForm?icProjectNext(overallForm,nextStage):null;let r="";const renderedStageNums=new Set();t.forEach(u=>{const m=icStageMetricsForMatch(e,u).map(E=>({...E,isMe:String(E.id)===String(n)||E.isMe})),b=m.length>0;let h=null;r+='<div class="stage-card '+(b?"shot":String(u.number)===String(nextStage&&nextStage.number)?"next-up":"pending")+'" id="stage-card-'+u.number+'">',r+='<div class="stage-card-header" onclick="toggleStageCard(this.parentElement.id)">',r+='<div class="stage-card-title">Stage '+u.number+'. '+(u.name||("Stage "+u.number))+' <span style="color:var(--accent);font-size:13px;font-weight:600;">'+(icStageMaxPts(u)<=60?"Short":icStageMaxPts(u)<=120?"Medium":"Long")+"</span></div>",r+='<span class="'+(b?"badge-shot":String(u.number)===String(nextStage&&nextStage.number)?"badge-next":"badge-pending")+'">'+(b?'&#10003; SHOT':String(u.number)===String(nextStage&&nextStage.number)?'NEXT':'PENDING')+"</span>",r+='<span class="stage-card-chevron">&#9660;</span>',r+="</div><div class='stage-card-body'><div class='stage-card-body-inner'>";r+="";if(b){r+='<div style="overflow-x:auto;margin-top:12px;">',r+='<table style="width:100%;font-size:12px;border-collapse:collapse;">',r+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);">',r+='<th style="padding:4px 3px;text-align:left;">#</th>',r+='<th style="padding:4px 3px;text-align:left;">'+d('name_col')+'</th>',r+='<th style="padding:4px 3px;text-align:right;">PTS</th>',r+='<th style="padding:4px 3px;text-align:right;">STG</th>',r+='<th style="padding:4px 3px;text-align:right;">%</th>',r+='<th style="padding:4px 3px;text-align:right;">HF</th>',r+='<th style="padding:4px 3px;text-align:right;">A%</th>',r+="</tr>",m.forEach(E=>{const k=E.isMe?"background:var(--accent-fade);font-weight:600;":"",detailId="stage-detail-"+u.number+"-"+E.id,res=E.res||{};r+='<tr style="'+k+'border-bottom:1px solid var(--border);cursor:pointer;" onclick="const d=document.getElementById(\''+detailId+'\');d&&(d.style.display=d.style.display===\'none\'?\'table-row\':\'none\')">',r+='<td style="padding:4px 3px;">'+E.rank+"</td>",r+='<td style="padding:4px 3px;">'+E.name+"</td>",r+='<td style="padding:8px 6px;text-align:right;color:var(--accent);">'+E.pts.toFixed(1)+"</td>",r+='<td style="padding:4px 3px;text-align:right;">'+E.stagePts.toFixed(2)+"</td>",r+='<td style="padding:4px 3px;text-align:right;">'+E.stagePct.toFixed(2)+"%</td>",r+='<td style="padding:4px 3px;text-align:right;">'+(E.hf||0).toFixed(2)+"</td>",r+='<td style="padding:8px 6px;text-align:right;color:var(--green);">'+E.stageAPercent.toFixed(0)+"%</td>",r+="</tr>",r+='<tr id="'+detailId+'" style="display:none;background:rgba(255,255,255,0.03);">',r+='<td colspan="7" style="padding:10px 8px;">',r+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:11px;">',r+='<div><div style="color:var(--muted);">Time</div><div style="font-weight:600;">'+(res.time||0).toFixed(2)+"s</div></div>",r+='<div><div style="color:var(--muted);">A</div><div style="font-weight:600;color:var(--green);">'+(res.a||0)+"</div></div>",r+='<div><div style="color:var(--muted);">C</div><div style="font-weight:600;">'+(res.c||0)+"</div></div>",r+='<div><div style="color:var(--muted);">D</div><div style="font-weight:600;">'+(res.d||0)+"</div></div>",r+='<div><div style="color:var(--muted);">Miss</div><div style="font-weight:600;color:var(--red);">'+(res.miss||0)+"</div></div>",r+='<div><div style="color:var(--muted);">NS</div><div style="font-weight:600;color:var(--red);">'+(res.ns||0)+"</div></div>",r+='<div><div style="color:var(--muted);">Proc</div><div style="font-weight:600;color:var(--red);">'+(res.proc||0)+"</div></div>",r+="</div>",r+='<div style="margin-top:8px;text-align:right;">'+'<button data-stage="'+u.number+'" data-shooter="'+E.id+'" onclick="icOpenEditStageResult(this.dataset.stage,this.dataset.shooter)" style="padding:5px 12px;font-size:11px;font-weight:600;background:var(--bg3);border:1px solid rgba(255,255,255,0.2);border-radius:6px;color:var(--text);cursor:pointer;">✎ Edit</button>'+'</div>',r+="</td>",r+="</tr>"}),r+="</table>",r+="</div>";const f=a.filter(E=>(E.num||E.number)<=u.number).sort((E,k)=>(E.num||0)-(k.num||0)),p=m.find(E=>E.isMe);h=p?p.res:null;if((e.type||"")===d("training")){const myShooterT=icCurrentShooter(e);const myStageRes=myShooterT&&myShooterT.stages?myShooterT.stages.find(function(sr){return(sr.num||sr.number)==u.number}):null;if(myStageRes&&myStageRes.runs&&myStageRes.runs.length>0){r+='<div style="margin-top:15px;padding:12px;background:var(--bg);border-radius:8px;">';r+='<div style="font-size:11px;color:var(--muted);margin-bottom:10px;">MY RUNS</div>';r+='<table style="width:100%;font-size:12px;border-collapse:collapse;">';r+='<tr style="border-bottom:1px solid var(--border);color:var(--muted);"><th style="padding:6px 4px;text-align:left;">Run</th><th style="padding:6px 4px;text-align:right;">Tid</th><th style="padding:6px 4px;text-align:right;">HF</th><th style="padding:6px 4px;text-align:right;">A</th><th style="padding:6px 4px;text-align:right;">C</th><th style="padding:6px 4px;text-align:right;">D</th><th style="padding:6px 4px;text-align:right;">Miss</th><th style="padding:6px 4px;"></th></tr>';const bestHF=myStageRes.runs.reduce(function(bst,rn){return Math.max(bst,rn.hf||0)},0);myStageRes.runs.forEach(function(rn,ri){const isBest=(rn.hf||0)===bestHF;r+='<tr style="border-bottom:1px solid var(--border);background:'+(isBest?"rgba(232,184,75,0.08)":"transparent")+'">';r+='<td style="padding:6px 4px;font-weight:'+(isBest?"700":"400")+';">'+"Run "+(rn.runNum||ri+1)+(isBest?" ★":"")+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.time||0).toFixed(2)+"s</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--accent);">'+(rn.hf||0).toFixed(2)+"</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--green);">'+(rn.a||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.c||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;">'+(rn.d||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;color:var(--red);">'+(rn.miss||0)+"</td>";r+='<td style="padding:6px 4px;text-align:right;"><button onclick="deleteRun('+u.number+','+ri+')" style="padding:2px 6px;background:#ef4444;color:white;border:none;border-radius:4px;font-size:10px;cursor:pointer;">✕</button></td>';r+="</tr>";});r+='</table></div>';const analId='train-anal-'+u.number;r+='<button onclick="var x=document.getElementById(\''+analId+'\');x&&(x.style.display=x.style.display===\'none\'?\'block\':\'none\')" style="margin-top:10px;width:100%;padding:8px;background:transparent;border:1px solid rgba(255,255,255,.12);border-radius:8px;color:var(--muted);font-size:12px;cursor:pointer;text-align:left;">▼ '+d('show_training')+'</button>';r+='<div id="'+analId+'" style="display:none;margin-top:8px;">';r+=icTrainingAnalysis(myStageRes.runs,u);r+='</div>';}}renderedStageNums.add(String(u.number));const _eUpTo=Object.assign({},e,{shooters:(e.shooters||[]).map(function(sh){return Object.assign({},sh,{stages:(sh.stages||[]).filter(function(sr){return renderedStageNums.has(String(sr.num||sr.number));})});})});const allShootersTotals=icMatchTotals(_eUpTo,!1);const E=icFormFromResults(f,u.number,s);if(E&&(e.type||"")===d("training")){const kT=t.find(P=>P.number>u.number);const refCompareT=h?{estHF:h.hf!=null?h.hf:null,expTime:h.time!=null?h.time:null}:null;}else if(E){const k=(t.find(function(P){return P.number>u.number;})||t.slice().sort(function(a,b){return a.number-b.number;})[0]||null);const P=k?icProjectNext(E,k):null;var estForThisStage=null;{const _pR=a.filter(E=>(E.num||E.number)<u.number);const _pF=_pR.length?icFormFromResults(_pR,null,s):null;estForThisStage=_pF?icProjectNext(_pF,u):null;}P&&k&&(()=>{r+='<div style="margin-top:15px;padding:12px;background:var(--accent-fade);border-radius:8px;border-left:3px solid var(--accent);">',r+='<div style="font-size:10px;font-weight:700;letter-spacing:0.08em;color:var(--accent);text-transform:uppercase;margin-bottom:6px;">NEXT STAGE</div>',r+='<div style="font-size:15px;font-weight:700;font-size:14px;margin-bottom:10px;">'+(k.name||("Stage "+k.number))+"</div>",r+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.08);">',r+='<div><div style="color:var(--muted);margin-bottom:3px;>'+d('time_per_shot')+'</div><div style="font-weight:600;">'+E.avgSplit.toFixed(3)+"s</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:3px;>'+d('hits_lbl')+'</div><div style="font-weight:600;color:var(--green);">'+( E.aPercent*100).toFixed(0)+"%A</div></div>",r+='<div><div style="color:var(--muted);margin-bottom:3px;">Est. HF</div><div style="font-weight:600;">'+(estForThisStage?estForThisStage.estHF.toFixed(2):"—")+"</div></div>",r+="</div>",r+='<div style="font-size:14px;line-height:1.5;">'+Ds(h,k,E,e)+"</div>";var myDivN=(E&&E.division)||g.division||"Classic";var ctN=getReferenceCourseType(k);r+="</div>";})();const prevE=f.length>1?icFormFromResults(f.slice(0,f.length-1),null,s):null;const prevP=prevE&&k?icProjectNext(prevE,k):null;const _filteredMatch=Object.assign({},e,{shooters:(e.shooters||[]).map(function(sh){return Object.assign({},sh,{stages:(sh.stages||[]).filter(function(sr){return (sr.num||sr.number)<=u.number;})});})});const C=Bs(f.length>1?f[f.length-2]:null,h,E),L=(k&&f.length>1)?As(_filteredMatch,prevE,prevP?prevP.estHF:null,k):null;L&&(()=>{var _compHtml='<div style="padding:12px 14px;">';_compHtml+='<div style="font-size:14px;font-weight:700;font-size:14px;margin-bottom:10px;">'+L.statusText+'</div>';_compHtml+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;font-size:12px;margin-bottom:12px;">';_compHtml+='<div><div style="color:var(--muted);margin-bottom:4px;">Est HF</div><div style="font-weight:700;color:var(--accent);">'+(L.estHF!=null?L.estHF.toFixed(2):'—')+'</div></div>';_compHtml+='<div><div style="color:var(--muted);margin-bottom:4px;">Target HF</div><div style="font-weight:700;">'+(L.targetHF!=null?L.targetHF.toFixed(2):'—')+'</div></div>';_compHtml+='<div><div style="color:var(--muted);margin-bottom:4px;">Delta HF</div><div style="font-weight:700;color:'+(L.deltaHF!=null&&L.deltaHF>0?'var(--red)':'var(--green)')+'">'+(L.deltaHF!=null?(L.deltaHF>0?'+':'')+L.deltaHF.toFixed(2):'—')+'</div></div>';_compHtml+='</div>';_compHtml+='<div style="font-size:13px;line-height:1.6;">'+L.advice+'</div>';_compHtml+=(function(){var _hfCtx='';var _stHF=u&&L.estHF?L.estHF:0;var _isLeading=L.statusText&&L.statusText.indexOf('LEADING')===0;if(_stHF>=5&&!_isLeading)_hfCtx='<div style="font-size:12px;color:var(--muted);margin-top:8px;padding:6px 8px;background:rgba(255,255,255,0.04);border-radius:6px;border-left:2px solid var(--accent);">▸ High hit factor stage — points and time must be assessed simultaneously.</div>';else if(_stHF>0&&_stHF<3&&!_isLeading)_hfCtx='<div style="font-size:12px;color:var(--muted);margin-top:8px;padding:6px 8px;background:rgba(255,255,255,0.04);border-radius:6px;border-left:2px solid var(--accent);">▸ Low hit factor stage — tempo matters more than perfect hits.</div>';else if(_isLeading)_hfCtx='<div style="font-size:12px;color:var(--muted);margin-top:8px;padding:6px 8px;background:rgba(255,255,255,0.04);border-radius:6px;border-left:2px solid var(--green);">▸ You are leading — protect your points rather than chasing margins.</div>';return _hfCtx;})();_compHtml+='</div>';var _compAccent=L.gap>=0?'var(--green)':'var(--red)';r+=icSec('Competition Picture','comp-'+u.number,_compHtml,true,_compAccent);})(),C&&(r+=icSec('REFLECTION','refl-'+u.number,'<div style="padding:12px 14px;font-size:13px;line-height:1.6;">'+C+'</div>',false,'rgba(255,255,255,0.1)'));if(allShootersTotals.length>0){var _cumHtml='<div style="padding:10px 14px;"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:6px;">';allShootersTotals.forEach(S=>{const totalAP=S.totalHits>0?(S.totalA/S.totalHits*100).toFixed(0)+'%':'—';_cumHtml+='<div style=\"font-size:12px;\"><div style=\"color:var(--muted);font-size:11px;\">'+S.name+'</div><div style=\"font-weight:700;color:var(--green);\">'+totalAP+'</div></div>';});_cumHtml+='</div></div>';r+=icSec(d('cumulative_a'),'cum-'+u.number,_cumHtml,false);}r+=icSec(d('show_detailed'),'anal-'+u.number,'<div style="padding:10px 14px;">'+icStageDeepAnalysis(h,u,m,E,rActive,estForThisStage)+'</div>',false),(function(){const stMentalId="stm"+Math.random().toString(36).substr(2,5);const stTips=[];const stRes=h||{};const stHits=(stRes.a||0)+(stRes.c||0)+(stRes.d||0)+(stRes.miss||0);const stAP=stHits>0?Math.round((stRes.a||0)/stHits*100):0;if((stRes.miss||0)>0)stTips.push({t:"Inner dialogue on a miss",b:"Use SOAL: Stop the thought, Observe without reacting, Accept that it is there, Let it go. The brain remembers the last image — immediately visualize how you would have shot the stage correctly and move forward with a positive image."});if(stAP<75&&stHits>0)stTips.push({t:"Visualization before next stage",b:"Close your eyes and visualize the next stage in first person — body, environment, timing, and feel. Engage all senses and include the feeling of control and flow. The brain does not distinguish between thought and action."});if((stRes.proc||0)>0)stTips.push({t:"Concentration",b:"Practice filtering out noise like RO decisions and range conditions. Before the next stage: close your eyes, go through the stage plan step by step and verify all all rules are clear. 100% focus on the task."});const stGen=[{"t":"Trigger word","b":"Choose one word that creates the right state immediately — Smooth, Flow, or Ready. Avoid negations, the subconscious filters them out. Say the trigger word silently to yourself as you walk toward the next stage."},{"t":"Confidence boost","b":"Recall a specific stage where you performed well — see it in detail. Relive the feeling of control and mastery. Use that image actively now to strengthen belief in your own abilities."},{"t":"Breathing pause","b":"Breathe in for 4 seconds, hold for 4, breathe out for 6. Repeat three times. Stress makes breathing shallow and fast, which weakens coordination and concentration. Calm breathing signals to the body that you are ready."},{"t":"Positive self-talk","b":"Say to yourself: I am prepared. I know the technique. I know what to do. Positive thoughts increase motivation and make you better equipped to perform perform at your best."},{"t":"Mastery goal","b":"Set one concrete mastery goal for the next stage — not a result goal. For example: smooth draw, sticking to the stage plan all the way, or one specific technical focus point. A mastery goal gives you control over what happens in the here and now."},{"t":"Visualization","b":"Close your eyes and go through the next stage in first person — body, environment, timing, and feel. Include the feeling of control and flow. The brain does not distinguish between a clear visualization and reality."},{"t":"Reset","b":"Let go of the last stage completely. It is done — the only thing that matters is the next few seconds. Take a breath, drop your shoulders, and step into the next stage as a blank slate."},{"t":"Focus point","b":"Choose one technical focus point for the next stage — not two, not three. One thing to do well. Simple focus delivers better execution than multiple parallel instructions to yourself."},{"t":"Body language","b":"Keep your back straight, head up, and walk calmly toward the next stage. Body language affects mindset just as much as the reverse. Act like a shooter in the flow state — and you will notice your head follows."},{"t":"Acceptance","b":"Not every stage will be perfect — and they don’t need to be. Accept what happened, take what you learned, and move on. Long-term development is built from many good-enough stages, not from perfectionism."}];stTips.push(stGen[u.number%stGen.length]);var _mentalHtml='<div style="padding:10px 14px;">';stTips.forEach(function(tip){_mentalHtml+='<div style=\"padding:8px 10px;background:rgba(34,197,94,0.08);border-radius:6px;margin-bottom:6px;border-left:3px solid var(--green);\"><div style=\"font-weight:700;color:var(--green);font-size:12px;margin-bottom:3px;\">'+tip.t+'</div><div style=\"color:var(--text);font-size:12px;\">'+tip.b+'</div></div>';});_mentalHtml+='</div>';r+=icSec('Mental Training','stm-'+u.number,_mentalHtml,false,'rgba(34,197,94,0.25)');})(),r+="</div>"}}else r+='<div style="padding:16px 20px;text-align:center;color:var(--muted);font-size:13px;">'+d('no_results_yet')+'. '+d('upload_or_manual')+'.'+'<div style="margin-top:8px;font-size:12px;color:var(--muted);">'+(u.paperTargets?'Paper: '+u.paperTargets+' · ':'')+(u.poppers?'Poppers: '+u.poppers+' · ':'')+(u.plates?'Plates: '+u.plates+' · ':'')+'<span style="color:#e8b84b;font-weight:600;">'+(icStageMaxPts(u)<=60?'Short':icStageMaxPts(u)<=120?'Medium':'Long')+'</span>'+(icStageShots(u)?' · '+icStageShots(u)+' shots':'')+(function(){var _sm=icStageMaxPts(u);var _tm=(e.stages||[]).reduce(function(acc,s){return acc+icStageMaxPts(s);},0);var _pct=_tm>0?(_sm/_tm*100).toFixed(1):'0.0';return _sm?' · max '+_sm+' pts · '+_pct+'% of match':'';})()+'</div></div>';if(rActive&&rActive.length&&(e.type||'')!=='Trening'){var _ct=getReferenceCourseType(u);var _shots=icStageShots(u);var _refHtml='<div style="padding:10px 14px;">';_refHtml+='<div style="font-size:11px;color:var(--muted);margin-bottom:10px;font-weight:700;letter-spacing:0.05em;">'+(dt==="no"?"REFERENCE PROGNOSIS":"REFERENCE PROGNOSIS")+' &#8212; '+_ct.toUpperCase()+' COURSE</div>';rActive.forEach(function(_rf){var _proj=projectReferenceShooterForStage(_rf,u);if(!_proj)return;var _rfAP=Number(_rf[_ct+'AP']||0);var _rfCP=Number(_rf[_ct+'CP']||0);var _rfDP=Number(_rf[_ct+'DP']||0);var _estA=_shots>0&&_rfAP?Math.round(_shots*_rfAP/100):null;var _estC=_shots>0&&_rfCP?Math.round(_shots*_rfCP/100):null;var _estD=_shots>0&&_rfDP?Math.round(_shots*_rfDP/100):null;_refHtml+='<div style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);margin-bottom:10px;">';_refHtml+='<div style="font-size:14px;font-weight:800;margin-bottom:10px;">'+_rf.name+'</div>';_refHtml+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;font-size:12px;margin-bottom:10px;">';_refHtml+='<div><div style="color:var(--muted);margin-bottom:2px;">HF</div><div style="font-weight:700;color:var(--accent);">'+_proj.benchmarkHF.toFixed(2)+'</div></div>';_refHtml+='<div><div style="color:var(--muted);margin-bottom:2px;">'+(dt==="no"?"Est. Time":"Est. Time")+'</div><div style="font-weight:700;">'+_proj.projectedTotalTime.toFixed(2)+'s</div></div>';_refHtml+='<div><div style="color:var(--muted);margin-bottom:2px;">'+(dt==="no"?"Avg/Shot":"Avg/Shot")+'</div><div style="font-weight:700;">'+_proj.avgSplit.toFixed(3)+'s</div></div>';_refHtml+='<div><div style="color:var(--muted);margin-bottom:2px;">Reloads</div><div style="font-weight:700;">'+_proj.reloads+'</div></div>';_refHtml+='</div>';if(_estA!=null||_estC!=null||_estD!=null){_refHtml+='<div style="padding:8px;background:rgba(255,255,255,0.04);border-radius:6px;">';_refHtml+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;">EST. HIT DISTRIBUTION ('+_shots+' shots)</div>';_refHtml+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;">';_refHtml+='<div><div style="color:var(--muted);font-size:11px;">A%</div><div style="font-weight:700;color:var(--green);">'+(_estA!=null?_estA+' ('+_rfAP+'%)':'—')+'</div></div>';_refHtml+='<div><div style="color:var(--muted);font-size:11px;">C%</div><div style="font-weight:700;">'+(_estC!=null?_estC+' ('+_rfCP+'%)':'—')+'</div></div>';_refHtml+='<div><div style="color:var(--muted);font-size:11px;">D%</div><div style="font-weight:700;">'+(_estD!=null?_estD+' ('+_rfDP+'%)':'—')+'</div></div>';_refHtml+='</div></div>';}_refHtml+='</div>';});_refHtml+='</div>';r+=icSec((dt==="no"?'Reference Prognosis':'Reference Prognosis'),'ref-'+u.number,_refHtml,false,'rgba(212,168,67,0.3)');}const refCompare=h?{estHF:h.hf!=null?h.hf:null,expTime:h.time!=null?h.time:null}:nextStage&&String(u.number)===String(nextStage.number)&&overallProjection?overallProjection:null;(e.type||"")===d("training")||void 0,r+="</div></div></div>"}),i.innerHTML=r;(function(){var cards=i.querySelectorAll(".stage-card");cards.forEach(function(c){if(c.classList.contains("next-up"))c.classList.add("open");});})();}function Ds(e,i,t,s){if(!i||!t)return d("coach_baseline");const a=icStageShots(i),n=Se(a,t.division||"Classic",t.pf||"minor"),r=Math.round((t.aPercent||0)*100),u=t.avgSplit?t.avgSplit.toFixed(3):"0.000";const _rnd=Math.floor(Math.random()*12);if(t.aPercent<.7){const _m=[`Hit quality can improve. Give the sight more time — speed is secondary. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}. Baseline: ${r}%A at ${u}s/shot.`,`${r}%A is below ideal. Ease off a bit and prioritize sight picture. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Focus on hit quality. You have the speed — use some of it for precision. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Quality over speed. ${r}%A tells you the sight needs more time. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Raise your A% from ${r}% — that's where the points are. Keep the rhythm, let the sight settle. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Hit quality is below baseline. A deliberate slowdown can recover the points. Next stage: ${a} shots. Baseline: ${u}s/shot.`,`${r}%A is costing you more than you think. Slow your entry to each target. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Don’t chase tempo at the expense of hit quality. ${r}%A is your baseline — you can improve next stage. ${a} shots, ${n} reload${n===1?"":"s"}.`,`Sight control next stage. ${a} shots with ${n} reload${n===1?"":"s"} — give each target the time it needs.`,`Hit quality is slipping. Prioritize A-hits over split time. Baseline: ${r}%A at ${u}s/shot. Next stage: ${a} shots.`,`A deliberate focus on sight picture next stage can significantly shift results. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`${r}%A says there is room to improve hit quality. Drop your shoulders and let the sight come to you. Next stage: ${a} shots.`];return _m[_rnd];}if(t.avgSplit<.22){const _m=[`Solid tempo. Don’t push more than necessary — ${u}s/shot is good. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}. Hold ${r}%A.`,`The flow is there. Run the same rhythm into the next stage — ${a} shots, ${n} reload${n===1?"":"s"}.`,`Good split time. Don't push the tempo further — hit quality is the next step. Baseline: ${r}%A at ${u}s/shot.`,`You are fast enough. Focus on ${r}%A and let the tempo take care of itself. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`${u}s/shot is efficient — don’t push it. Next stage is ${a} shots with ${n} reload${n===1?"":"s"}. Run the plan.`,`Good tempo established. Prioritize hit quality and let the flow carry you forward. Baseline: ${r}%A and ${u}s/shot.`,`You are shooting fast. Use it as an advantage, but let the sight confirm. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`The tempo is there. Now it is about using it correctly — precision in transitions and a clean sight picture. Baseline: ${r}%A.`,`Fast rhythm. Don’t overthink it — run the same into the next stage. ${a} shots, ${n} reload${n===1?"":"s"}.`,`${u}s/shot shows good flow. Hold ${r}%A and let the rest happen. Next stage: ${a} shots.`,`Good progress. Don't change anything — same tempo, same focus. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`You are in the flow state. Don’t analyze too much — just repeat what you are doing. Baseline: ${r}%A and ${u}s/shot.`];return _m[_rnd];}const _m=[`Keep the rhythm. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}. Baseline: ${r}%A at ${u}s/shot.`,`Stable baseline. Run the same plan into the next stage — ${a} shots, ${n} reload${n===1?"":"s"}.`,`You know what you can do. ${r}%A and ${u}s/shot is your baseline — carry it forward.`,`Solid foundation. ${r}%A and ${u}s/shot — next stage is ${a} shots with ${n} reload${n===1?"":"s"}.`,`Rhythm is locked in. Baseline is ${r}%A and ${u}s/shot — run it the same next stage.`,`Solid foundation to build on. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}. Hold ${r}%A and ${u}s/shot.`,`Baseline is established. ${r}%A and ${u}s/shot — trust the process. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`No major adjustments needed. ${r}%A and ${u}s/shot is working. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`,`Consistent delivery. Keep it up — ${a} shots, ${n} reload${n===1?"":"s"}, same focus as the last stage.`,`Consistent shooting. Baseline ${r}%A at ${u}s/shot — carry it forward. Next stage: ${a} shots.`,`Steady course. Next stage is ${a} shots with ${n} reload${n===1?"":"s"} — run your plan and trust the baseline.`,`Solid and consistent. ${r}%A and ${u}s/shot is right where it should be. Next stage: ${a} shots, ${n} reload${n===1?"":"s"}.`];return _m[_rnd];}function Bs(e,i,t){if(!e||!i||!t)return null;const s=icStageShots(e),a=icStageShots(i);if(!s||!a)return null;const n=((e.time||0)-t.draw-Se(s,t.division||"Classic",t.pf||"minor")*t.reloadTime)/s,r=((i.time||0)-t.draw-Se(a,t.division||"Classic",t.pf||"minor")*t.reloadTime)/a,u=s>0?(e.a||0)/s:0,m=a>0?(i.a||0)/a:0;if(r>n+.05&&m<u-.1){const _bMsgs=[`Both tempo and hit quality dropped from the last stage (${n.toFixed(3)}s &#8594; ${r.toFixed(3)}s/shot, ${(u*100).toFixed(0)}%A &#8594; ${(m*100).toFixed(0)}%A). Think through what stole time and focus.`,`Drop in both tempo and hit quality since last stage. What changed — the course, your head, or both?`,`Both split time and A-rate dropped. Was it a deliberate choice, or did it happen without you noticing?`];return _bMsgs[Math.floor(Math.random()*_bMsgs.length)];}if(r>n+.05){const _bMsgs=[`Tempo dropped from the last stage (${n.toFixed(3)}s &#8594; ${r.toFixed(3)}s/shot). Reflect on what stole time.`,`You were slower than last stage. Movement phases or the shooting itself — what took time?`,`Split time increased this stage. Was it the course, or did you become more cautious than necessary?`];return _bMsgs[Math.floor(Math.random()*_bMsgs.length)];}if(m<u-.1){const _bMsgs=[`Hit quality dropped from last stage (${(u*100).toFixed(0)}%A &#8594; ${(m*100).toFixed(0)}%A). Consider whether you pushed too hard on tempo.`,`Fewer A-hits than last stage. Were you chasing too much tempo, or was it something else affecting your sight?`,`A-rate dropped. Was it a deliberate choice to prioritize tempo, or did it happen unconsciously?`];return _bMsgs[Math.floor(Math.random()*_bMsgs.length)];}if(r<n-.03&&m>=u-.05){const _bMsgs=[`Good flow. You went faster than last stage without significant loss in hit quality.`,`Solid stage. Faster tempo and hit quality held — that is the combination that delivers results.`,`Good execution. You pushed the tempo without it affecting your A-rate.`];return _bMsgs[Math.floor(Math.random()*_bMsgs.length)];}return null}function icStageDeepAnalysis(h,u,m,E,rActive,estProg){if(!h||!u||!m||!m.length)return "";var progBlock="";if(estProg&&h&&h.hf!=null){var actHF=h.hf>0?h.hf:(h.pts||0)/(h.time||1);var deltaHF=actHF-estProg.estHF;var actTotal=(h.a||0)+(h.c||0)+(h.d||0)+(h.miss||0);var actAP=actTotal>0?Math.round((h.a||0)/actTotal*100):0;var hfColor=deltaHF>=0?"var(--green)":"var(--red)";var hfSign=deltaHF>=0?"+":"";progBlock+='<div style="margin-bottom:14px;padding:10px;background:rgba(232,184,75,0.08);border-radius:8px;border-left:3px solid var(--accent);">';progBlock+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;">PROJECTED VS. ACTUAL</div>';progBlock+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:12px;">';progBlock+='<div><div style="color:var(--muted);">Est. HF</div><div style="font-weight:700;">'+estProg.estHF.toFixed(2)+'</div></div>';progBlock+='<div><div style="color:var(--muted);">Actual HF</div><div style="font-weight:700;color:var(--accent);">'+actHF.toFixed(2)+'</div></div>';progBlock+='<div><div style="color:var(--muted);">Delta HF</div><div style="font-weight:700;color:'+hfColor+';">'+hfSign+deltaHF.toFixed(2)+'</div></div>';progBlock+='</div>';var verdict=deltaHF>=0.3?"Well above projection — great shooting!":deltaHF>=0?"Above projection — well done.":deltaHF>=-0.3?"Slightly below projection — still recoverable.":"Below projection — review your tempo and sight picture on the next stage.";progBlock+='<div style="margin-top:8px;font-size:12px;line-height:1.5;">'+verdict+'</div>';progBlock+='</div>';}var html=progBlock;const shots=icStageShots(u);if(!shots||!h.time||h.time<=0)return "";const myHF=h.hf&&h.hf>0?h.hf:(h.pts||0)/h.time;const myTime=h.time,myPts=h.pts||0;const myA=h.a||0,myC=h.c||0,myD=h.d||0,myMiss=h.miss||0,myProc=h.proc||0;const pf=h.pf||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;const winner=m[0];const winHF=winner?winner.hf||0:0;const allAPts=Math.max(0,shots*aVal+(h.ns||0)*(-10)+myProc*(-10));const hfAllA=myTime>0?allAPts/myTime:0;const deltaHFallA=hfAllA-myHF;const timeAllA=myHF>0?allAPts/myHF:0;const extraTime=timeAllA-myTime;const timeToWin=winHF>0?myPts/winHF:0;const deltaTimeWin=myTime-timeToWin;const secPerMiss=myHF>0?10/myHF:0;const secPerProc=myHF>0?10/myHF:0;const ptsLostC=myC*(aVal-cVal);const ptsLostD=myD*(aVal-dVal);const ptsLostTotal=ptsLostC+ptsLostD;const draw=E&&E.draw?E.draw:g.draw||1.42;const reloadTime=E&&E.reloadTime?E.reloadTime:g.reloadTime||1.8;const reloads=Se(shots,E&&E.division?E.division:g.division||"Classic",pf);const baselineTime=E&&E.avgSplit?draw+shots*E.avgSplit+reloads*reloadTime:0;const baselineHF=baselineTime>0?myPts/baselineTime:0;const deltaBaselineHF=baselineHF-myHF;const myIdx=m.findIndex(function(x){return x.isMe});const above=myIdx>0?m[myIdx-1]:null;const aboveHF=above?above.hf||0:0;const marginHF=aboveHF>0?aboveHF-myHF:0;const marginSec=myHF>0&&aboveHF>0?myPts/myHF-myPts/aboveHF:0;const myNS=h.ns||0;const ptsLostNS=myNS*10;const ptsLostProc=myProc*10;const secPerNS=myHF>0?10/myHF:0;const pts=[];if(deltaHFallA>0.01)pts.push("If you had shot all A at the same time, HF would have been "+hfAllA.toFixed(2)+" (+"+deltaHFallA.toFixed(2)+")");if(extraTime>0.01)pts.push("With all A-hits at the same time, you could have taken "+extraTime.toFixed(2)+"s longer ("+timeAllA.toFixed(2)+"s total) and kept the same HF");if(ptsLostTotal>0.5)pts.push("You lost "+ptsLostTotal.toFixed(0)+" points on C/D hits (C: "+ptsLostC.toFixed(0)+" pts, D: "+ptsLostD.toFixed(0)+" pts) compared to all A-hits");if(myMiss>0)pts.push("You had "+myMiss+" miss(es) — "+myMiss*10+" points lost, equivalent to approx. "+(myMiss*secPerMiss).toFixed(2)+"s in lost HF ("+secPerMiss.toFixed(2)+"s per miss)");if(myNS>0)pts.push("You had "+myNS+" no-shoot hit(s) — "+ptsLostNS+" points lost, equivalent to approx. "+(myNS*secPerNS).toFixed(2)+"s in lost HF");if(myProc>0)pts.push("You had "+myProc+" procedural"+( myProc>1?"s":"")+" — "+ptsLostProc+" points lost, equivalent to approx. "+(myProc*secPerProc).toFixed(2)+"s in lost HF");if(E&&E.avgSplit&&baselineHF>0&&Math.abs(deltaBaselineHF)>0.05)pts.push("At your baseline split ("+E.avgSplit.toFixed(3)+"s/shot) with the same hit quality, HF would have been "+(deltaBaselineHF>=0?"+":"")+deltaBaselineHF.toFixed(2)+" ("+baselineHF.toFixed(2)+")");if(above&&marginHF>0.01)pts.push("The gap to "+above.name+" is "+marginHF.toFixed(2)+" HF — equivalent to approx. "+Math.abs(marginSec).toFixed(2)+"s on this stage");if(winHF>0&&myHF<winHF&&deltaTimeWin>0)pts.push("To win the stage you would have needed to shoot "+deltaTimeWin.toFixed(2)+"s faster ("+timeToWin.toFixed(2)+"s total) with the same hit quality");else if(winHF>0&&myHF>=winHF)pts.push("You won the stage — great shooting!");if(!pts.length)return html;html='<ul style="margin:0;padding:0 0 0 16px;font-size:12px;color:var(--text);line-height:1.7;">';pts.forEach(function(p){html+='<li style="margin-bottom:6px;">'+p+"</li>"});html+="</ul>";var stageTips=[];if(myMiss>0&&myHF>4)stageTips.push("A miss on a fast stage is especially costly — you pay in both points and relative hit factor. Consider whether sight time can be adjusted on high-risk targets.");if(myNS>0)stageTips.push("A no-shoot costs 10 points regardless of hit factor — review the angle of approach and no-shoot exposure when planning the stage.");if(ptsLostTotal>15&&myHF>4)stageTips.push("Many C/D hits on a high hit factor stage — consider whether you pushed tempo past the control threshold. A good enough sight picture is faster than a perfect one.");else if(ptsLostTotal>10)stageTips.push("Points lost on C/D hits — consider whether your sight picture confirmation can be adjusted. Not perfect, but good enough.");if(myProc>0)stageTips.push("Procedural penalties can be eliminated through thorough stage walk-through. Review the rules for this stage type before you shoot.");if(deltaHFallA>0.5)stageTips.push("Large potential in hit quality on this stage — precision is more important than tempo here. Hit quality before tempo.");if(winHF>0&&myHF>0&&myHF/winHF>=0.9&&myHF<winHF)stageTips.push("You are near the top on this stage — consistency at this level is match-winning.");if(stageTips.length){html+='<div style="margin-top:10px;"><div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">TIPS</div>';stageTips.forEach(function(t){html+='<div style="font-size:12px;padding:6px 8px;background:rgba(232,184,75,0.08);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">&gt; '+t+"</div>";});html+="</div>";}if(rActive&&rActive.length>0&&h&&u){const myDivision=(E&&E.division)||g.division||"Classic";const ct=getReferenceCourseType(u);const shots=icStageShots(u);const myTotal=(h.a||0)+(h.c||0)+(h.d||0)+(h.miss||0);const myAP=myTotal>0?Math.round((h.a||0)/myTotal*100):0;const myCP=myTotal>0?Math.round((h.c||0)/myTotal*100):0;const myDP=myTotal>0?Math.round((h.d||0)/myTotal*100):0;const myHF=h.hf&&h.hf>0?h.hf:(h.pts||0)/h.time;const matchRefs=rActive.filter(function(r){return(r.division||"")===myDivision;});if(matchRefs.length>0){html+='<div style="margin-top:14px;padding:10px;background:rgba(232,184,75,0.06);border-radius:8px;border-left:3px solid var(--accent);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;>'+(dt==="no"?"Reference Shooters":"Reference Shooters")+' &#8212; '+ct.toUpperCase()+' COURSE</div>';matchRefs.forEach(function(ref){const refHF=ct==="short"?ref.shortHF:ct==="medium"?ref.mediumHF:ref.longHF;const refAP=ct==="short"?ref.shortAP:ct==="medium"?ref.mediumAP:ref.longAP;const refCP=ct==="short"?ref.shortCP:ct==="medium"?ref.mediumCP:ref.longCP;const refDP=ct==="short"?ref.shortDP:ct==="medium"?ref.mediumDP:ref.longDP;if(!refHF)return;const dHF=myHF-refHF;const dAP=refAP!=null?myAP-refAP:null;const dCP=refCP!=null?myCP-refCP:null;const dDP=refDP!=null?myDP-refDP:null;const pf=(ref.powerFactor||"minor").charAt(0).toUpperCase()+(ref.powerFactor||"minor").slice(1);html+='<div style="margin-bottom:10px;padding:8px;background:var(--bg);border-radius:6px;">';html+='<div style="font-size:12px;font-weight:700;margin-bottom:6px;">'+ref.name+' <span style="font-weight:400;color:var(--muted);">('+ref.division+' '+pf+')</span></div>';html+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;font-size:11px;">';html+='<div><div style="color:var(--muted);">HF</div>';html+='<div style="font-weight:700;">'+refHF.toFixed(2)+'</div>';html+='<div style="color:'+(dHF>=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dHF>=0?"+":"")+dHF.toFixed(2)+'</div></div>';if(refAP!=null){html+='<div><div style="color:var(--muted);">A%</div>';html+='<div style="font-weight:700;">'+refAP+'%</div>';html+='<div style="color:'+(dAP>=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dAP>=0?"+":"")+dAP+'%</div></div>';}if(refCP!=null){html+='<div><div style="color:var(--muted);">C%</div>';html+='<div style="font-weight:700;">'+refCP+'%</div>';html+='<div style="color:'+(dCP<=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dCP>=0?"+":"")+dCP+'%</div></div>';}if(refDP!=null){html+='<div><div style="color:var(--muted);">D%</div>';html+='<div style="font-weight:700;">'+refDP+'%</div>';html+='<div style="color:'+(dDP<=0?"var(--green)":"var(--red)")+';font-size:11px;">'+(dDP>=0?"+":"")+dDP+'%</div></div>';}html+='</div></div>';});html+='</div>';}}return html;}function icTrainingAnalysis(runs,stageDef){if(!runs||runs.length<1)return "";const shots=icStageShots(stageDef);const pf=runs[0].pf||"minor";const aVal=5,cVal=pf==="major"?4:3,dVal=pf==="major"?2:1;let html="";if(runs.length>1){html+='<div style="margin-bottom:12px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">PROGRESS BETWEEN RUNS</div>';for(let ri=1;ri<runs.length;ri++){const prev=runs[ri-1],curr=runs[ri];const hfDiff=(curr.hf||0)-(prev.hf||0);const timeDiff=(curr.time||0)-(prev.time||0);const pt=(prev.a||0)+(prev.c||0)+(prev.d||0)+(prev.miss||0);const ct=(curr.a||0)+(curr.c||0)+(curr.d||0)+(curr.miss||0);const pAP=pt>0?Math.round((prev.a||0)/pt*100):0;const cAP=ct>0?Math.round((curr.a||0)/ct*100):0;const aPDiff=cAP-pAP;html+='<div style="font-size:12px;padding:8px;background:var(--bg);border-radius:6px;margin-bottom:4px;">';html+="Run "+(prev.runNum||ri)+" &#8594; Run "+(curr.runNum||ri+1)+": ";html+='<span style="color:'+(hfDiff>=0?"var(--green)":"var(--red)")+';font-weight:600;">'+(hfDiff>=0?"+":"")+hfDiff.toFixed(2)+" HF</span>";html+=" · ";html+='<span style="color:'+(timeDiff<=0?"var(--green)":"var(--red)")+';">'+(timeDiff>=0?"+":"")+timeDiff.toFixed(2)+"s</span>";html+=" · ";html+='<span style="color:'+(aPDiff>=0?"var(--green)":"var(--red)")+';">'+(aPDiff>=0?"+":"")+aPDiff+"%A</span>";html+="</div>";}html+="</div>";}const bestHFRun=runs.reduce(function(a,b){return(b.hf||0)>(a.hf||0)?b:a},runs[0]);const bestTimeRun=runs.reduce(function(a,b){return(b.time||0)<(a.time||0)?b:a},runs[0]);const bestAPRun=runs.reduce(function(a,b){const at=(a.a||0)+(a.c||0)+(a.d||0)+(a.miss||0);const bt=(b.a||0)+(b.c||0)+(b.d||0)+(b.miss||0);return bt>0&&(b.a||0)/bt>(at>0?(a.a||0)/at:0)?b:a},runs[0]);html+='<div style="margin-bottom:12px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">BEST BY CATEGORY</div>';html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:11px;">';const bapT=(bestAPRun.a||0)+(bestAPRun.c||0)+(bestAPRun.d||0)+(bestAPRun.miss||0);const bapStr=bapT>0?Math.round((bestAPRun.a||0)/bapT*100)+"%":"--";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Best HF</div><div style="font-weight:700;color:var(--accent);">'+( bestHFRun.hf||0).toFixed(2)+"</div><div>Run "+(bestHFRun.runNum||1)+"</div></div>";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Best time</div><div style="font-weight:700;color:var(--green);">'+( bestTimeRun.time||0).toFixed(2)+"s</div><div>Run "+(bestTimeRun.runNum||1)+"</div></div>";html+='<div style="background:var(--bg);padding:8px;border-radius:6px;"><div style="color:var(--muted);">Best A%</div><div style="font-weight:700;color:var(--green);">'+bapStr+"</div><div>Run "+(bestAPRun.runNum||1)+"</div></div>";html+="</div></div>";if(runs.length>1){const potTime=bestTimeRun.time||0;const potPts=bestAPRun.pts||0;const potHF=potTime>0?potPts/potTime:0;const bestActual=bestHFRun.hf||0;if(potHF>bestActual+0.01){html+='<div style="margin-bottom:12px;padding:10px;background:rgba(232,184,75,0.08);border-radius:6px;border-left:3px solid var(--accent);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:4px;">POTENTIAL</div>';html+='<div style="font-size:12px;">Med Run '+( bestTimeRun.runNum||1)+"'s time ("+potTime.toFixed(2)+"s) with Run "+(bestAPRun.runNum||1)+" their hit quality HF would have been ";html+='<span style="color:var(--accent);font-weight:700;">'+potHF.toFixed(2)+"</span> (+"+( potHF-bestActual).toFixed(2)+" above best run)</div>";html+="</div>";}}const best=bestHFRun;const bestTime=best.time||0,bestPts=best.pts||0,bestHF=best.hf||0;if(bestTime>0&&shots>0){html+='<div style="margin-bottom:12px;">';var _wih=dt==="no"?"HVA HVIS (beste run ★)": "WHAT IF (best run ★)";html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">'+_wih+'</div>';const allAPts=Math.max(0,shots*aVal+(best.ns||0)*(-10)+(best.proc||0)*(-10));const hfAllA=bestTime>0?allAPts/bestTime:0;if(hfAllA>bestHF+0.01)html+='<div style="font-size:12px;padding:5px 0;">&#8226; All A-Hits, Same Time: HF '+hfAllA.toFixed(2)+" (+"+( hfAllA-bestHF).toFixed(2)+")</div>";if((best.c||0)>0){const noC=Math.max(0,bestPts+(best.c||0)*(aVal-cVal));const hfNoC=bestTime>0?noC/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; No C-Hits: HF '+hfNoC.toFixed(2)+" (+"+( hfNoC-bestHF).toFixed(2)+")</div>";}if((best.d||0)>0){const noD=Math.max(0,bestPts+(best.d||0)*(aVal-dVal));const hfNoD=bestTime>0?noD/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; No D-Hits: HF '+hfNoD.toFixed(2)+" (+"+( hfNoD-bestHF).toFixed(2)+")</div>";}if((best.miss||0)>0){const noMiss=Math.max(0,bestPts+(best.miss||0)*10);const hfNoMiss=bestTime>0?noMiss/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; No Misses: HF '+hfNoMiss.toFixed(2)+" (+"+( hfNoMiss-bestHF).toFixed(2)+")</div>";}if((best.proc||0)>0){const noProc=Math.max(0,bestPts+(best.proc||0)*10);const hfNoProc=bestTime>0?noProc/bestTime:0;html+='<div style="font-size:12px;padding:5px 0;">&#8226; No Procedurals: HF '+hfNoProc.toFixed(2)+" (+"+( hfNoProc-bestHF).toFixed(2)+")</div>";}html+="</div>";}const refleks=[];if(runs.length>1){const first=runs[0],last=runs[runs.length-1];const hfUp=(last.hf||0)>(first.hf||0);const timeDown=(last.time||0)<(first.time||0);const ft=(first.a||0)+(first.c||0)+(first.d||0)+(first.miss||0);const lt=(last.a||0)+(last.c||0)+(last.d||0)+(last.miss||0);const fAP=ft>0?(first.a||0)/ft:0;const lAP=lt>0?(last.a||0)/lt:0;if(hfUp&&lAP>fAP+0.05)refleks.push("You improved both HF and hit quality — what did you change between runs?");else if(hfUp&&timeDown)refleks.push("You went faster and improved HF — what created the better flow?");else if(hfUp)refleks.push("HF went up — what was the most important adjustment between runs?");else refleks.push("HF went down — what do you think stole time or hit quality?");if(lAP>fAP+0.05)refleks.push("A% increased — were you aware of the C/D hits during the previous run, or did you discover them afterward?");if(lAP<fAP-0.05)refleks.push("Hit quality dropped — did you push too hard on tempo?");}if((best.miss||0)>0)refleks.push("You had misses — was it tempo, sight picture, or something else that caused it?");if((best.c||0)>2)refleks.push("Multiple C-hits — are there specific targets that are harder, or is it a general pattern?");refleks.push("What would you do differently on the next run?");if(refleks.length){html+='<div style="margin-bottom:8px;">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:6px;font-weight:700;">REFLECTION</div>';refleks.forEach(function(q){html+='<div style="font-size:12px;padding:6px 8px;background:var(--bg);border-radius:6px;margin-bottom:4px;border-left:3px solid var(--accent);">❓ '+q+"</div>";});html+="</div>";}if(rActive&&rActive.length&&u){var ct=getReferenceCourseType(u);var stTotal=(h.a||0)+(h.c||0)+(h.d||0)+(h.miss||0);var myAP=stTotal>0?Math.round((h.a||0)/stTotal*100):null;var myCP=stTotal>0?Math.round((h.c||0)/stTotal*100):null;var myDP=stTotal>0?Math.round((h.d||0)/stTotal*100):null;html+='<div style="margin-top:12px;padding:10px;background:rgba(255,255,255,0.04);border-radius:8px;border-left:3px solid var(--accent);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:8px;font-weight:700;">HIT QUALITY VS. REFERENCE ('+(dt==="no"?ct.toUpperCase()+' COURSE':ct.toUpperCase()+' COURSE')+')</div>';html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:11px;margin-bottom:8px;">';html+='<div style="text-align:center;"><div style="color:var(--muted);">YOUR A%</div><div style="font-weight:700;color:var(--green);">'+(myAP!=null?myAP+'%':'—')+'</div></div>';html+='<div style="text-align:center;"><div style="color:var(--muted);">YOUR C%</div><div style="font-weight:700;">'+(myCP!=null?myCP+'%':'—')+'</div></div>';html+='<div style="text-align:center;"><div style="color:var(--muted);">YOUR D%</div><div style="font-weight:700;">'+(myDP!=null?myDP+'%':'—')+'</div></div>';html+='</div>';rActive.forEach(function(rf){var rfAP=Number(rf[ct+"AP"]||0);var rfCP=Number(rf[ct+"CP"]||0);var rfDP=Number(rf[ct+"DP"]||0);if(!rfAP&&!rfCP&&!rfDP)return;var dA=myAP!=null?myAP-rfAP:null;var dC=myCP!=null?myCP-rfCP:null;var dD=myDP!=null?myDP-rfDP:null;html+='<div style="padding:6px 0;border-top:1px solid var(--border);">';html+='<div style="font-size:11px;color:var(--muted);margin-bottom:4px;">'+rf.name+'</div>';html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;font-size:11px;">';[["A",dA,true],["C",dC,false],["D",dD,false]].forEach(function(z){var zone=z[0],delta=z[1],higherGood=z[2];var rfPct=zone==="A"?rfAP:zone==="C"?rfCP:rfDP;var col=delta==null?"var(--text)":(higherGood?(delta>=0?"var(--green)":"var(--red)"):(delta<=0?"var(--green)":"var(--red)"));html+='<div style="text-align:center;">';html+='<div style="color:var(--muted);">REF '+zone+'%: '+rfPct+'%</div>';html+='<div style="font-weight:700;color:'+col+';">'+(delta!=null?(delta>=0?'+':'')+delta+'%':'—')+'</div>';html+='</div>';});html+='</div></div>';});html+='</div>';}return html;}async function Os(){const e=$.find(n=>n.id!=null&&n.id.toString()===String(R));if(!e)return;const i=F("new-shooter-firstname").trim(),t=F("new-shooter-lastname").trim(),s=F("new-shooter-division")||"Classic",a=(F("new-shooter-pf")||(Zi[s]||["minor"])[0]||"minor").toLowerCase();if(!i||!t){alert("Please enter a name");return}const n={id:"s_"+Date.now(),isMe:!1,firstName:i,lastName:t,division:s,pf:a,club:"",stages:[]};e.shooters||(e.shooters=[]),e.shooters.push(n);showSpinner("Saving shooter…");Ee(e.id,{shooters:e.shooters}).then(function(r){hideSpinner();if(r.success){const _fn=document.getElementById("new-shooter-firstname");const _ln=document.getElementById("new-shooter-lastname");if(_fn)_fn.value="";if(_ln)_ln.value="";G("modal-add-shooter");icRenderEditMatchShootersList(e);te();_e();De()}else alert("Unable to save shooter: "+r.error)})}async function js(){if(window._icEditMode){const _em=window._icEditMode;if(!confirm("Are you sure you want to overwrite the result for "+_em.stageName+" for "+_em.shooterName+"?")){return;}window._icEditMode=null;}const e=$.find(f=>f.id!=null&&f.id.toString()===String(R));if(!e)return;const i=A("new-result-stage",1),t=he("new-result-time",0),s=icNormalizeManualHits(),a=icRecalcPoints("new-result"),n=icStageDefs(e).find(r=>Number(r.number)===Number(i));if(!n){alert("Stage could not be found");return}if(t<=0){alert("Time must be greater than zero");return}if(s.a+s.c+s.d+s.miss!==s.totalHits){alert("Hit distribution does not match the stage requirements");return}const r=await icEnsureShooter(e,icUploadShooterSel||icCurrentShooterId());if(!r){alert("Shooter could not be found");return}const u=t>0?a/t:0,m={num:n.number,name:n.name||("Stage "+n.number),hf:u,time:t,pts:a,pf:icResultPF(r.pf||g.powerFactor||"minor"),a:s.a,c:s.c,d:s.d,miss:s.miss,ns:s.ns,proc:s.proc,paperTargets:n.paperTargets||0,poppers:n.poppers||0,plates:n.plates||0};const isTraining=(e.type||"")===d("training");icUpsertStageResult(r,m,isTraining);showSpinner("Saving result…");Ee(e.id,{shooters:e.shooters}).then(function(b){hideSpinner();if(b.success){window._icEditMode=null;G("modal-add");te();_e();De()}else alert("Unable to save result: "+b.error)});}function Us(){G("modal-upload-result"),Re()}async function Hs(e){if(!$.find(u=>u.id!=null&&u.id.toString()===String(R))){alert("No active match selected");return}const i=o("upload-stage-select"),t=o("upload-shooter-select"),s=o("upload-result-file");if(!i.value||!t.value){alert("Please select a stage and shooter");return}if(!s.files||s.files.length===0){alert("Please select a file");return}const a=s.files[0];Me=i.value,icUploadShooterSel=t.value,icSetResultDialogMode("ocr");const n=e&&e.currentTarget?e.currentTarget:o("upload-scan-btn"),r=n?n.textContent:"Upload and Scan";n&&(n.textContent="Scanning…",n.disabled=!0);try{const u=await new Promise((m,b)=>{const f=new FileReader;f.onerror=()=>b(new Error("Could not read the file")),f.onload=p=>m(p.target.result),f.readAsDataURL(a)}),m=await qi.recognize(u,"eng+nor",{logger:b=>console.log(b)}),f=(m&&m.data&&m.data.text?m.data.text:"").trim();if(console.log("OCR Text:",f),!f)throw new Error("No text was found in the image");const p=zs(f);if(p.time==null&&p.a===0&&p.c===0&&p.d===0&&p.miss===0&&p.ns===0&&p.proc===0)throw new Error("No results were found in the image");o("ocr-time").value=p.time||"",o("ocr-a").value=p.a||0,o("ocr-c").value=p.c||0,o("ocr-d").value=p.d||0,o("ocr-miss").value=p.miss||0,o("ocr-ns").value=p.ns||0,o("ocr-proc").value=p.proc||0,icRecalcPoints("ocr"),G("modal-upload-result"),ie("modal-ocr-confirm")}catch(u){console.error("OCR Error:",u),alert("Scanning error: "+u.message)}finally{n&&(n.textContent=r,n.disabled=!1)}}function zs(e){const i={time:null,points:null,a:0,c:0,d:0,miss:0,ns:0,proc:0},t=e.replace(/[\n\r]+/g," ").toLowerCase(),s=[/time[:\s]*(\d+\.?\d*)/i,/(\d+\.\d+)\s*s(?:ec)?/i,/^(\d+\.\d+)$/m];for(const p of s){const h=t.match(p);if(h){i.time=parseFloat(h[1]);break}}const a=[/(?:points?|pts?)[:\s]*(\d+)/i,/score[:\s]*(\d+)/i];for(const p of a){const h=t.match(p);if(h){i.points=parseInt(h[1]);break}}const n=[/(\d+)\s*a(?:lpha)?(?:\s|$)/i,/a(?:lpha)?[:\s]*(\d+)/i];for(const p of n){const h=t.match(p);if(h){i.a=parseInt(h[1]);break}}const r=[/(\d+)\s*c(?:harlie)?(?:\s|$)/i,/c(?:harlie)?[:\s]*(\d+)/i];for(const p of r){const h=t.match(p);if(h){i.c=parseInt(h[1]);break}}const u=[/(\d+)\s*d(?:elta)?(?:\s|$)/i,/d(?:elta)?[:\s]*(\d+)/i];for(const p of u){const h=t.match(p);if(h){i.d=parseInt(h[1]);break}}const m=[/(\d+)\s*m(?:iss)?(?:\s|$)/i,/m(?:iss)?[:\s]*(\d+)/i];for(const p of m){const h=t.match(p);if(h){i.miss=parseInt(h[1]);break}}const b=[/(\d+)\s*ns(?:\s|$)/i,/ns[:\s]*(\d+)/i,/no-?shoot[:\s]*(\d+)/i];for(const p of b){const h=t.match(p);if(h){i.ns=parseInt(h[1]);break}}const f=[/(\d+)\s*p(?:roc)?(?:\s|$)/i,/p(?:roc)?[:\s]*(\d+)/i,/procedural[:\s]*(\d+)/i];for(const p of f){const h=t.match(p);if(h){i.proc=parseInt(h[1]);break}}return i}async function Gs(){const e=$.find(P=>P.id!=null&&P.id.toString()===String(R));if(!e)return;const i=he("ocr-time",0),t=icRecalcPoints("ocr"),s=A("ocr-a",0),a=A("ocr-c",0),n=A("ocr-d",0),r=A("ocr-miss",0),u=A("ocr-ns",0),m=A("ocr-proc",0);if(i<=0){alert("Time must be greater than zero");return}const b=icStageDefs(e).find(P=>P.number==Me);if(!b){alert("Stage could not be found");return}const f=await icEnsureShooter(e,icUploadShooterSel||icCurrentShooterId());if(!f){alert("Shooter could not be found");return}const p=i>0?t/i:0,h={num:b.number,name:b.name||("Stage "+b.number),hf:p,time:i,pts:t,pf:icResultPF(f.pf||g.powerFactor||"minor"),a:s,c:a,d:n,miss:r,ns:u,proc:m,paperTargets:b.paperTargets||0,poppers:b.poppers||0,plates:b.plates||0};icUpsertStageResult(f,h),await Ee(e.id,{shooters:e.shooters}),G("modal-ocr-confirm"),te(),_e(),De(),Me=null,icUploadShooterSel=null,icSetResultDialogMode("ocr")}
async function importESSVerify(e){
  const match=$.find(u=>u.id!=null&&u.id.toString()===String(R));
  if(!match){alert("No active match selected");return;}
  const stageSelEl=o("upload-stage-select");
  const stageNum=stageSelEl?parseInt(stageSelEl.value):0;
  if(!stageNum){alert("Please select a stage first");return;}
  const stageDef=icStageDefs(match).find(s=>Number(s.number)===stageNum);
  if(!stageDef){alert("Stage could not be found in match");return;}
  var shooters=(match.shooters||[]).slice();
  if(!shooters.some(function(s){return s.isMe;})){shooters.unshift({id:icCurrentShooterId(),isMe:true,firstName:g.firstName||"Meg",lastName:g.lastName||"",division:g.division||"Classic",pf:g.powerFactor||"minor"});}
  let shooterOptions="";
  shooters.forEach(function(sh){
    const name=(sh.isMe?"Meg ("+(sh.firstName||"")+" "+(sh.lastName||"")+")":(sh.firstName||"")+" "+(sh.lastName||"")).trim();
    shooterOptions+=`<option value="${sh.id}">${name}</option>`;
  });
const Ft_en=`
<div class="gdpr-content">
 <h2>Privacy Policy and Consent</h2>

 <p class="gdpr-intro">
 By registering with Insight Dynamics Shooting, you agree that we may process your personal
 information in accordance with this Privacy Policy and the GDPR (General Data Protection Regulation).
 </p>

 <h3>1. Data Controller</h3>
 <p>
 Insight Dynamics Shooting is responsible for processing your personal information collected
 through this application.
 </p>
 <p>Contact: <a href="mailto:post@insight-dynamics-shooting.org">post@insight-dynamics-shooting.org</a></p>

 <h3>2. What Information We Collect</h3>
 <p>We collect and process the following personal information about you:</p>
 <ul>
   <li>Name and email address</li>
   <li>IPSC division, category, and power factor</li>
   <li>IPSC-related data (match results, stage scores, hit factors)</li>
   <li>Performance metrics (hit quality, split times, reload times)</li>
   <li>Technical data (app usage, login timestamps)</li>
 </ul>

 <h3>3. Purpose of Processing</h3>
 <p>We process your information to:</p>
 <ul>
   <li>Provide match tracking and performance analysis</li>
   <li>Generate AI-powered coaching insights</li>
   <li>Enable match sharing and team features</li>
   <li>Ensure the technical operation of the application</li>
 </ul>

 <h3>4. Legal Basis</h3>
 <p>
 The legal basis for processing is your consent, given when you accept this Privacy Policy.
 You may withdraw your consent at any time by deleting your account.
 </p>

 <h3>5. Sharing of Match Data</h3>
 <p>
 Match data you choose to share with other users will be visible to those users.
 We do not sell your personal information to third parties.
 </p>

 <h3>6. Data Storage</h3>
 <p>
 Your information is securely stored and processed using Google Firebase (Firestore and Authentication).
 All services are hosted in the EU/EEA region and comply with GDPR requirements.
 </p>

 <h3>7. Your Rights</h3>
 <p>Under the GDPR, you have the right to:</p>
 <ul>
   <li>Access the personal information we hold about you</li>
   <li>Request correction of inaccurate information</li>
   <li>Request deletion of your information</li>
   <li>Withdraw your consent at any time</li>
 </ul>
 <p>
 When you delete your account, all your personal information will be permanently deleted within 30 days.
 Match data you have shared with other users will remain visible to them, but will no longer be linked to your account.
 </p>

 <h3>8. Updates to This Policy</h3>
 <p>
 We reserve the right to modify this Privacy Policy. You will be notified of any significant changes.
 </p>

 <h3>9. Contact</h3>
 <p>
 For questions regarding your personal information or this Privacy Policy, please contact us at:
 <a href="mailto:post@insight-dynamics-shooting.org">post@insight-dynamics-shooting.org</a>
 </p>

 <p class="gdpr-version">${d("gdpr_version")}</p>
</div>
`
  let existing=o("ess-paste-modal");
  if(existing)existing.remove();
  const overlay=document.createElement("div");
  overlay.id="ess-paste-modal";
  overlay.style.cssText="position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;";
  overlay.innerHTML=`
    <div style="background:var(--card);border-radius:16px;padding:20px;width:100%;max-width:420px;max-height:85vh;overflow-y:auto;">
      <div style="font-size:15px;font-weight:700;margin-bottom:8px;">ESS/SSI Import</div>
      <div style="font-size:13px;color:var(--muted);margin-bottom:12px;">1. Gå til verify-siden • 2. Søk opp skytter-ID • 3. Trykk Cmd+A, Cmd+C • 4. Lim inn under</div>
      <div style="margin-bottom:12px;">
        <div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;margin-bottom:6px;">Select Shooter</div>
        <select id="ess-paste-shooter-select" style="width:100%;padding:10px;background:var(--bg);border:1px solid rgba(255,255,255,.15);border-radius:8px;color:var(--text);font-size:14px;">${shooterOptions}</select>
      </div>
      <textarea id="ess-paste-input" style="width:100%;height:140px;background:var(--bg);border:1px solid rgba(255,255,255,.15);border-radius:8px;color:var(--text);padding:10px;font-size:12px;resize:vertical;" placeholder="Lim inn tekst fra verify-siden her..."></textarea>
      <div id="ess-paste-preview" style="display:none;margin-top:10px;padding:10px;background:var(--bg);border-radius:8px;font-size:12px;"></div>
      <div id="ess-stage-select" style="display:none;margin-top:12px;"><div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:8px;letter-spacing:0.05em;">SELECT STAGES TO IMPORT</div><div id="ess-stage-checkboxes" style="display:flex;flex-direction:column;gap:6px;max-height:180px;overflow-y:auto;margin-bottom:4px;"></div><div style="display:flex;gap:8px;margin-top:4px;"><button onclick="essSelectAllStages(true)" style="font-size:11px;padding:3px 8px;background:var(--bg3);border:none;border-radius:6px;color:var(--muted);cursor:pointer;">Select all</button><button onclick="essSelectAllStages(false)" style="font-size:11px;padding:3px 8px;background:var(--bg3);border:none;border-radius:6px;color:var(--muted);cursor:pointer;">Deselect all</button></div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;">
        
        <button id="ess-import-btn" onclick="essConfirmPaste('selected')" style="padding:10px;background:var(--accent);border:none;border-radius:8px;color:#000;font-weight:700;cursor:pointer;font-size:12px;display:none;">Import selected</button>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  o("ess-paste-input").addEventListener("input",function(){
    var text=this.value;
    var isSSI=essDetectSSI(text);
    var allParsed=isSSI?{shooterName:"SSI",stages:essParseSSIAll(text).map(function(r,i){return Object.assign({num:i+1},r);})}:portalParseAllStages(text);
    var singleParsed=isSSI?essParseSSISingle(text,stageNum):essParseVerifyText(text,stageNum);
    var prev=o("ess-paste-preview");
    if(allParsed&&allParsed.stages&&allParsed.stages.length&&prev){
      prev.style.display="block";
      var hfStr=singleParsed?singleParsed.hf.toFixed(4):"—";
      prev.innerHTML="<strong>"+(isSSI?"SSI Format":allParsed.shooterName)+"</strong>"
        +(isSSI?"":(" · "+allParsed.division+" · "+(allParsed.pf||"").toUpperCase()))
        +"<br><span style=\'color:var(--accent)\'>"+(allParsed.stages.length)+" stages found</span>"
        +(singleParsed?" · Stage "+stageNum+": HF <span style=\'color:var(--accent)\'>"+hfStr+"</span>":"");
      // Populate stage checkboxes
      var stageSelDiv=o("ess-stage-select");
      var stageChkDiv=o("ess-stage-checkboxes");
      var importBtn=o("ess-import-btn");
      if(stageSelDiv&&stageChkDiv){
        var stageDefs2=icStageDefs(match);
        stageChkDiv.innerHTML=allParsed.stages.map(function(sr){
          var sdef=stageDefs2[sr.num-1]||stageDefs2.find(function(x){return x.number===sr.num;})||{};
          var sname=sdef.name||("Stage "+sr.num);
          return '<label style="display:flex;align-items:center;gap:8px;padding:5px 0;cursor:pointer;font-size:13px;">'
            +'<input type="checkbox" value="'+sr.num+'" checked style="width:16px;height:16px;accent-color:var(--accent);">'
            +'<span>S'+sr.num+' — '+sname
            +(sr.hf>0?' <span style="color:var(--accent);font-size:11px;">HF '+sr.hf.toFixed(2)+'</span>':'')+"</span>"
            +'</label>';
        }).join("");
        stageSelDiv.style.display="block";
        if(importBtn)importBtn.style.display="block";
      }
    }else if(prev){
      prev.style.display="none";
      var sd2=o("ess-stage-select");if(sd2)sd2.style.display="none";
      var ib=o("ess-import-btn");if(ib)ib.style.display="none";
    }
  });
  window._essPasteStageNum=stageNum;
  window._essPasteMatch=match;
}

async function essConfirmPaste(mode){
  var stageNum=window._essPasteStageNum;
  var match=window._essPasteMatch;
  var textEl=o("ess-paste-input");
  var text=textEl?textEl.value:"";
  var shooterSelectEl=o("ess-paste-shooter-select");
  var selectedShooterId=shooterSelectEl?shooterSelectEl.value:"";
  var isSSI=essDetectSSI(text);
  if(mode==="all"||mode==="selected"){
    var allParsed=isSSI?{shooterName:"SSI import",stages:essParseSSIAll(text).map(function(r,i){return Object.assign({num:i+1},r);})}:portalParseAllStages(text);
    if(!allParsed||!allParsed.stages||!allParsed.stages.length){alert("Could not read data. Please verify that the text was pasted correctly.");return;}
    // Filter to selected stages if mode==="selected"
    if(mode==="selected"){
      var chkBoxes=document.querySelectorAll("#ess-stage-checkboxes input[type=checkbox]:checked");
      var selectedNums=Array.from(chkBoxes).map(function(cb){return parseInt(cb.value);});
      if(!selectedNums.length){alert("No stages selected.");return;}
      allParsed={shooterName:allParsed.shooterName,stages:allParsed.stages.filter(function(sr){return selectedNums.includes(sr.num);})};
    }
    var shooter=match.shooters?match.shooters.find(function(s){return s.id===selectedShooterId||(selectedShooterId==="me"&&s.isMe);}):null;
    if(!shooter){shooter=await icEnsureShooter(match,selectedShooterId||icCurrentShooterId());}
    if(!shooter){alert("Shooter could not be found");return;}
    if(selectedShooterId===icCurrentShooterId()||selectedShooterId==="me"){shooter.isMe=true;shooter.id=icCurrentShooterId();}
    shooter.stages||(shooter.stages=[]);
    var stageDefs=icStageDefs(match);
    for(var si=0;si<allParsed.stages.length;si++){
      var sr=allParsed.stages[si];
      var sname=(stageDefs[sr.num-1]&&stageDefs[sr.num-1].name)||("Stage "+sr.num);
      var _sd=(stageDefs[sr.num-1]||stageDefs.find(function(x){return x.number===sr.num;})||{});icUpsertStageResult(shooter,{num:sr.num,name:sname,hf:sr.hf,time:sr.time,pts:sr.pts,pf:shooter.pf||"minor",a:sr.a,c:sr.c,d:sr.d,miss:sr.miss,ns:sr.ns,proc:sr.proc,paperTargets:_sd.paperTargets||0,poppers:_sd.poppers||0,plates:_sd.plates||0});
    }
    await Ee(match.id,{shooters:match.shooters});
    var modal=o("ess-paste-modal");if(modal)modal.remove();
    te();_e();De();
    alert(allParsed.shooterName+" • "+allParsed.stages.length+" stage"+(allParsed.stages.length!==1?"r":"")+" imported");
  }else{
    var parsed=isSSI?essParseSSISingle(text,stageNum):essParseVerifyText(text,stageNum);
    if(!parsed){alert("Could not read data for stage "+stageNum+".");return;}
    o("ocr-time").value=parsed.time;
    o("ocr-a").value=parsed.a;
    o("ocr-c").value=parsed.c;
    o("ocr-d").value=parsed.d;
    o("ocr-miss").value=parsed.miss;
    o("ocr-ns").value=parsed.ns;
    o("ocr-proc").value=parsed.proc;
    icRecalcPoints("ocr");
    Me=stageNum;
    icUploadShooterSel=selectedShooterId||icCurrentShooterId();
    var ct=o("ocr-confirm-title");if(ct)ct.textContent="Bekreft ESS/SSI - Stage "+stageNum;
    var cd=o("ocr-confirm-desc");if(cd)cd.textContent="HF: "+parsed.hf.toFixed(4)+" · Tid: "+parsed.time+"s";
    var modal=o("ess-paste-modal");if(modal)modal.remove();
    G("modal-upload-result");ie("modal-ocr-confirm");
  }
}

function essParseVerifyText(text,stageNum){
  if(!text||!text.trim())return null;
  if(essDetectSSI(text))return essParseSSISingle(text,stageNum);
  try{
    var nameMatch=text.match(/[#]?\d*\s*([\w\-]+,\s*[\w\-]+)/i);
    var shooterName=nameMatch?nameMatch[1].trim():"Ukjent";
    var divMatch=text.match(/Division[\s:]+([A-Za-z\s]+?)(?:Class|Factor|$)/i);
    var pfMatch=text.match(/Factor[\s:]+(Minor|Major)/i);
    var division=divMatch?divMatch[1].trim():"";
    var pf=pfMatch?pfMatch[1].toLowerCase():"minor";
    var stageStr="Stage "+String(stageNum).padStart(2,"0");
    var stageStr2="Stage "+stageNum;
    var lines=text.split("\n");
    var stageLine=null;
    for(var li=0;li<lines.length;li++){
      if(lines[li].includes(stageStr)||lines[li].includes(stageStr2)){stageLine=lines[li];break;}
    }
    if(!stageLine)return null;
    var cols=stageLine.trim().split(/\s+/);
    if(cols.length<10)return null;
    var hf=parseFloat(cols[2])||0;
    var pts=parseInt(cols[3])||0;
    var a=parseInt(cols[4])||0;
    var cc=parseInt(cols[5])||0;
    var d=parseInt(cols[6])||0;
    var miss=parseInt(cols[7])||0;
    var ns=parseInt(cols[8])||0;
    var proc=parseInt(cols[9])||0;
    var time=hf>0?pts/hf:0;
    return{shooterName:shooterName,division:division,pf:pf,hf:hf,pts:pts,a:a,c:cc,d:d,miss:miss,ns:ns,proc:proc,time:parseFloat(time.toFixed(2))};
  }catch(err){return null;}
}

function essDetectSSI(text){
  if(!text)return false;
  var lines=text.trim().split("\n").filter(function(l){return l.trim();});
  var dataLines=lines.filter(function(l){
    var t=l.trim();
    return t&&!t.toLowerCase().startsWith("total")&&/^[\d\.]/.test(t);
  });
  if(!dataLines.length)return false;
  var firstCols=dataLines[0].trim().split(/	+/);
  return firstCols.length>=5&&!isNaN(parseFloat(firstCols[0]))&&parseFloat(firstCols[0])>0&&parseFloat(firstCols[0])<100;
}

function essParseSSIAll(text){
  if(!text)return[];
  var lines=text.trim().split("\n");
  var rows=[];
  for(var li=0;li<lines.length;li++){
    var t=lines[li].trim();
    if(!t||t.toLowerCase().startsWith("total"))continue;
    var cols=t.split(/	+/);
    if(cols.length<8)continue;
    if(isNaN(parseFloat(cols[0])))continue;
    var hf=parseFloat(cols[0])||0;
    var time=parseFloat(cols[1])||0;
    var pts=parseInt(cols[2])||0;
    var a=parseInt(cols[3])||0;
    var cc=parseInt(cols[4])||0;
    var d=parseInt(cols[5])||0;
    var miss=parseInt(cols[6])||0;
    var proc=parseInt(cols[7])||0;
    var ns=cols.length>8?parseInt(cols[8])||0:0;
    if(time>0)rows.push({hf:hf,time:time,pts:pts,a:a,c:cc,d:d,miss:miss,ns:ns,proc:proc});
  }
  return rows;
}

function essParseSSISingle(text,stageNum){
  var rows=essParseSSIAll(text);
  if(!rows||!rows.length)return null;
  var row=rows[stageNum-1];
  if(!row)return null;
  return{shooterName:"SSI",division:"",pf:"minor",hf:row.hf,pts:row.pts,a:row.a,c:row.c,d:row.d,miss:row.miss,ns:row.ns,proc:row.proc,time:row.time};
}

function portalParseAllStages(text){
  if(!text||!text.trim())return null;
  if(essDetectSSI(text)){
    var ssiRows=essParseSSIAll(text);
    if(!ssiRows||!ssiRows.length)return null;
    var stages=ssiRows.map(function(r,i){return Object.assign({num:i+1},r);});
    return{shooterName:"SSI import",firstName:"",lastName:"SSI",division:"",pf:"minor",stages:stages};
  }
  try{
    var nameMatch=text.match(/#\d+\s+([^\n]+)/);
    var shooterName=nameMatch?nameMatch[1].trim():"Ukjent";
    var divMatch=text.match(/Division[\s:]+([A-Za-z ]+?)(?:\s+Class|\s+Factor|$)/im);
    var pfMatch=text.match(/Factor[\s:]+(Minor|Major)/i);
    var division=divMatch?divMatch[1].trim():"";
    var pf=pfMatch?pfMatch[1].toLowerCase():"minor";
    var parts=shooterName.split(",");
    var lastName=parts[0]?parts[0].trim():"";
    var firstName=parts[1]?parts[1].trim():"";
    var stages=[];
    var lines=text.split("\n");
    for(var li=0;li<lines.length;li++){
      var m=lines[li].trim().match(/^Stage\s+(\d+)\s+([\d.]+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s*([\d.]+)$/);
      if(m){
        stages.push({num:parseInt(m[1]),hf:parseFloat(m[2]),pts:parseInt(m[3]),a:parseInt(m[4]),c:parseInt(m[5]),d:parseInt(m[6]),miss:parseInt(m[7]),ns:parseInt(m[8]),proc:parseInt(m[9]),time:parseFloat(m[10])});
      }
    }
    if(!stages.length)return null;
    return{shooterName:shooterName,firstName:firstName,lastName:lastName,division:division,pf:pf,stages:stages};
  }catch(err){return null;}
}
window.setAppLang=function setAppLang(lang){
  dt=lang;
  localStorage.setItem("appLang",lang);
  var no=lang==="no";
  // Profile language buttons
  var btnNo=document.getElementById("prof-lang-no");
  var btnEn=document.getElementById("prof-lang-en");
  if(btnNo&&btnEn){
    if(no){
      btnNo.style.borderColor="#e8b84b";btnNo.style.background="rgba(232,184,75,0.15)";btnNo.style.color="#e8b84b";
      btnEn.style.borderColor="rgba(255,255,255,0.15)";btnEn.style.background="transparent";btnEn.style.color="var(--muted)";
    }else{
      btnEn.style.borderColor="#e8b84b";btnEn.style.background="rgba(232,184,75,0.15)";btnEn.style.color="#e8b84b";
      btnNo.style.borderColor="rgba(255,255,255,0.15)";btnNo.style.background="transparent";btnNo.style.color="var(--muted)";
    }
  }
  // Tab bar labels (all screens have copies)
  document.querySelectorAll(".lang-home").forEach(function(el){el.textContent=no?"Hjem":"Home";});
  document.querySelectorAll(".lang-matches").forEach(function(el){el.textContent=no?"Matcher":"Matches";});
  document.querySelectorAll(".lang-prognosis").forEach(function(el){el.textContent=no?"Prognose":"Prognosis";});
  document.querySelectorAll(".lang-results").forEach(function(el){el.textContent=no?"Live":"Live";});
  document.querySelectorAll(".lang-profile").forEach(function(el){el.textContent=no?"Profil":"Profile";});
  // Profile static labels
  var _si=document.getElementById("prof-lang-title");if(_si)_si.textContent=no?"Language":"Language";
  document.querySelectorAll(".info-key").forEach(function(el,i){
    var keys_no=["Fornavn","Etternavn","Divisjon","Kategori","Power Factor","Region","Klubb"];
    var keys_en=["First name","Last name","Division","Category","Power Factor","Region","Club"];
    if(keys_no.indexOf(el.textContent)>=0||keys_en.indexOf(el.textContent)>=0){
      var idx=keys_no.indexOf(el.textContent)>=0?keys_no.indexOf(el.textContent):keys_en.indexOf(el.textContent);
      el.textContent=no?keys_no[idx]:keys_en[idx];
    }
  });
  // Card titles
  document.querySelectorAll(".card-title").forEach(function(el){
    var map={
      "Personal Information":"Personal Information","Personal Information":"Personal Information",
      "Season Statistics":"Season Statistics","Season Statistics":"Season Statistics",
      "Shooter Data (Avg.)":"Shooter Data (Avg.)","Shooter Data (Avg.)":"Shooter Data (Avg.)"
    };
    if(map[el.textContent]){
      if(no&&["Personal Information","Season Statistics","Shooter Data (Avg.)"].indexOf(el.textContent)>=0)el.textContent=map[el.textContent];
      if(!no&&["Personal Information","Season Statistics","Shooter Data (Avg.)"].indexOf(el.textContent)>=0)el.textContent=map[el.textContent];
    }
  });
  // Logout button
  document.querySelectorAll(".btn-logout").forEach(function(el){el.textContent=(no?" Sign Out":" Sign Out");});
  // Update all static text nodes using a translation map
  var _map={
    "Fornavn":"First name","Etternavn":"Last name","Divisjon":"Division",
    "Kategori":"Category","Region":"Region","Klubb":"Club",
    "Select stage":"Select stage","Select Shooter":"Select shooter",
    "Select division":"Select division","No rival selected":"No rival selected",
    "Personal Information":"Personal Information","Season Statistics":"Season Statistics",
    "Shooter Data (Avg.)":"Shooter Data (Avg.)",
    "Delete Match":"DELETE MATCH","Delete Stage":"Delete stage",
    "Hit Pattern":"Hit pattern","Straffer":"Penalties",
    "Save Result":"Save Result","Confirm Result":"Confirm Result",
    "Upload Result":"Upload result","Create team":"Create team",
    "Save team":"Save team","Team name":"Team name","Land":"Country",
    "Additional Shooters in This Match":"Additional Shooters in Match",
    "Mark as Finished":"Mark as finished","Use Reference Shooters":"Use reference shooters",
    "Alle":"All","Aktiv":"Active","Trening":"Training","Stevne":"Match",
    "Sign In":"Sign In","Register New User":"Register New User",
    "Create Account":"Create user","Bekreft passord":"Confirm Password",
    "Invitation Code":"Invitation code","Passord":"Password",
    "Estimated Time":"Expected time","Stage Requirements":"Stage requirements",
    "Add Stage":"Add Stage","Enter Manually":"Enter Manually",
    "Lag":"Team","Søk":"Search","Draw":"Draw","Reload":"Reload","Reloads":"Reloads",
    "Minor":"Minor","Major":"Major","Cancel":"Cancel","Slett":"Delete",
    "Points":"Points","Miss":"Miss","Auto":"Auto"
  };
  var _rmap={};Object.keys(_map).forEach(function(k){_rmap[_map[k]]=k;});
  document.querySelectorAll("div,span,label,button,option,th,td,p,h2,h3").forEach(function(el){
    if(el.children.length>0)return;
    var t=(el.textContent||"").trim();
    if(no&&_rmap[t])el.textContent=_rmap[t];
    else if(!no&&_map[t])el.textContent=_map[t];
  });
  // Re-render all dynamic content
  try{te();}catch(e){}
  try{_e();}catch(e){}
  try{De();}catch(e){}
  try{gt();}catch(e){}
  try{fe();}catch(e){}
  try{Rs();}catch(e){}
  try{vt();}catch(e){}
}
async function Ks(){ke&&ke(),xe&&xe(),await $t(),window.location.reload()}const ht=document.getElementById("app");ht.innerHTML=`<div style="position:fixed;inset:0;background:#0a0c10;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:9999;" id="loading-screen"><img src="/Logo_IPSC-insight.png" alt="Insight Dynamics Shooting" style="width:88px;height:88px;border-radius:20px;box-shadow:0 8px 32px rgba(232,184,75,0.18);margin-bottom:28px;"><div style="font-size:26px;font-weight:900;color:#f5f7fb;letter-spacing:1px;margin-bottom:8px;">INSIGHT DYNAMICS</div><div style="font-size:14px;color:#7d8598;font-weight:500;margin-bottom:40px;font-style:italic;">Performance. Precision. Progress.</div><div style="width:180px;height:3px;background:rgba(255,255,255,0.08);border-radius:99px;overflow:hidden;"><div style="height:100%;width:40%;background:#e8b84b;border-radius:99px;animation:ipsc-loading 1.2s ease-in-out infinite;"></div></div><style>@keyframes ipsc-loading{0%{transform:translateX(-100%);width:40%}50%{width:60%}100%{transform:translateX(350%);width:40%}}</style></div>`;function Vs(){Bt(ht,ft)}function ft(){ts(ht)}Ct(e=>{const l=document.getElementById("loading-screen");if(l){l.style.opacity="0";l.style.transition="opacity 0.3s";setTimeout(()=>{l.remove();e?ft():Vs()},300)}else{e?ft():Vs()}});
