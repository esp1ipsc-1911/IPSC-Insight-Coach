import { loadApp } from './apploader.js';

export async function renderApp(container) {
  container.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b1020;color:#e5e7eb;font-family:Inter,system-ui,sans-serif">
      <div style="text-align:center">
        <div style="font-size:14px;letter-spacing:.18em;text-transform:uppercase;color:#facc15;margin-bottom:10px">IPSC Insight</div>
        <div style="font-size:18px;font-weight:600">Laster appen…</div>
      </div>
    </div>
  `;

  try {
    await loadApp();
  } catch (error) {
    console.error('Kunne ikke laste appen', error);
    container.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0b1020;color:#e5e7eb;font-family:Inter,system-ui,sans-serif;padding:24px">
        <div style="max-width:520px;text-align:center">
          <div style="font-size:14px;letter-spacing:.18em;text-transform:uppercase;color:#facc15;margin-bottom:10px">IPSC Insight</div>
          <div style="font-size:22px;font-weight:700;margin-bottom:10px">Appen kunne ikke lastes</div>
          <div style="font-size:15px;line-height:1.6;color:#cbd5e1">Innloggingen fungerer fortsatt, men visningen etter innlogging feilet. Åpne siden på nytt og prøv igjen.</div>
        </div>
      </div>
    `;
  }
}
