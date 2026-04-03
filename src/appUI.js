export function renderApp(container) {
  container.innerHTML = `
    <div style="padding:40px;font-family:sans-serif;max-width:700px;margin:0 auto">
      <h1>IPSC Insight</h1>
      <p>Du er logget inn ✅</p>
      <p>Pålogging og registrering er nå koblet til Firebase Authentication og Firestore.</p>
    </div>
  `;
}
