// ════════════════════════════════════════════════════════════════════════════
// IPSC INSIGHT - GDPR CONSENT MODULE
// ════════════════════════════════════════════════════════════════════════════

import { doc, setDoc, getDoc, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';
import { db } from './firebase.js';

// ════════════════════════════════════════════════════════════════════════════
// GDPR CONSENT TEXT
// ════════════════════════════════════════════════════════════════════════════

export const GDPR_CONSENT_TEXT = `
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

  <p class="gdpr-version">Versjon 1.0 - Sist oppdatert: ${new Date().toLocaleDateString('nb-NO')}</p>
</div>
`;

// ════════════════════════════════════════════════════════════════════════════
// SHOW GDPR MODAL
// ════════════════════════════════════════════════════════════════════════════

export function showGDPRModal(onAccept, onDecline) {
  // Remove existing modal if present
  const existing = document.getElementById('gdpr-modal');
  if (existing) existing.remove();

  // Create modal
  const modal = document.createElement('div');
  modal.id = 'gdpr-modal';
  modal.className = 'gdpr-modal';
  modal.innerHTML = `
    <div class="gdpr-modal-overlay"></div>
    <div class="gdpr-modal-container">
      <div class="gdpr-modal-header">
        <h2>Personvernerklæring</h2>
        <button class="gdpr-close-btn" aria-label="Lukk">&times;</button>
      </div>
      <div class="gdpr-modal-body">
        ${GDPR_CONSENT_TEXT}
      </div>
      <div class="gdpr-modal-footer">
        <button class="gdpr-btn gdpr-btn-decline">Avvis</button>
        <button class="gdpr-btn gdpr-btn-accept">Godta og fortsett</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Add event listeners
  const closeBtn = modal.querySelector('.gdpr-close-btn');
  const acceptBtn = modal.querySelector('.gdpr-btn-accept');
  const declineBtn = modal.querySelector('.gdpr-btn-decline');
  const overlay = modal.querySelector('.gdpr-modal-overlay');

  const closeModal = () => {
    modal.remove();
  };

  closeBtn.addEventListener('click', () => {
    closeModal();
    if (onDecline) onDecline();
  });

  overlay.addEventListener('click', () => {
    closeModal();
    if (onDecline) onDecline();
  });

  declineBtn.addEventListener('click', () => {
    closeModal();
    if (onDecline) onDecline();
  });

  acceptBtn.addEventListener('click', () => {
    closeModal();
    if (onAccept) onAccept();
  });

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
  
  // Restore on close
  const originalClose = closeModal;
  const closeModalRestore = () => {
    document.body.style.overflow = '';
    originalClose();
  };
  
  closeBtn.onclick = () => {
    closeModalRestore();
    if (onDecline) onDecline();
  };
  overlay.onclick = () => {
    closeModalRestore();
    if (onDecline) onDecline();
  };
  declineBtn.onclick = () => {
    closeModalRestore();
    if (onDecline) onDecline();
  };
  acceptBtn.onclick = () => {
    closeModalRestore();
    if (onAccept) onAccept();
  };
}

// ════════════════════════════════════════════════════════════════════════════
// SAVE CONSENT TO FIRESTORE
// ════════════════════════════════════════════════════════════════════════════

export async function saveGDPRConsent(userId, consentGiven) {
  try {
    await setDoc(
      doc(db, 'users', userId),
      {
        gdprConsent: consentGiven,
        gdprConsentDate: serverTimestamp(),
        gdprVersion: '1.0'
      },
      { merge: true }
    );
    return { success: true };
  } catch (error) {
    console.error('Error saving GDPR consent:', error);
    return { success: false, error: error.message };
  }
}

// ════════════════════════════════════════════════════════════════════════════
// CHECK IF USER HAS CONSENTED
// ════════════════════════════════════════════════════════════════════════════

export async function hasGDPRConsent(userId) {
  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return data.gdprConsent === true;
    }
    return false;
  } catch (error) {
    console.error('Error checking GDPR consent:', error);
    return false;
  }
}

// ════════════════════════════════════════════════════════════════════════════
// CREATE CONSENT CHECKBOX (for registration form)
// ════════════════════════════════════════════════════════════════════════════

export function createGDPRCheckbox() {
  const container = document.createElement('div');
  container.className = 'gdpr-checkbox-container';
  container.innerHTML = `
    <label class="gdpr-checkbox-label">
      <input type="checkbox" id="gdpr-consent-checkbox" class="gdpr-checkbox" required>
      <span class="gdpr-checkbox-text">
        Jeg har lest og godtar 
        <a href="#" class="gdpr-link" id="gdpr-open-modal">personvernerklæringen</a>
      </span>
    </label>
  `;

  // Add click handler for link
  setTimeout(() => {
    const link = container.querySelector('#gdpr-open-modal');
    if (link) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showGDPRModal(
          () => {
            // On accept, check the checkbox
            const checkbox = document.getElementById('gdpr-consent-checkbox');
            if (checkbox) checkbox.checked = true;
          },
          () => {
            // On decline, uncheck the checkbox
            const checkbox = document.getElementById('gdpr-consent-checkbox');
            if (checkbox) checkbox.checked = false;
          }
        );
      });
    }
  }, 0);

  return container;
}

// ════════════════════════════════════════════════════════════════════════════
// VALIDATE CONSENT BEFORE REGISTRATION
// ════════════════════════════════════════════════════════════════════════════

export function validateGDPRConsent() {
  const checkbox = document.getElementById('gdpr-consent-checkbox');
  if (!checkbox || !checkbox.checked) {
    return {
      valid: false,
      error: 'Du må godta personvernerklæringen for å registrere deg'
    };
  }
  return { valid: true };
}
