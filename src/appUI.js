export function renderApp(user, data, onAction) {
  if (!user) return '';

  const hasMatches = data?.matches && data.matches.length > 0;

  return `
    <div class="app-container">

      <header class="topbar">
        <div class="user">
          <div class="avatar">${(user.name || 'U')[0]}</div>
          <div>
            <div class="name">${user.name || 'Bruker'}</div>
            <div class="subtitle">IPSC Insight</div>
          </div>
        </div>
        <button class="btn" onclick="window.__appAction('logout')">Logg ut</button>
      </header>

      <main class="main">

        ${!hasMatches ? renderEmptyState() : renderDashboard(data)}

      </main>

    </div>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty">
      <h2>Ingen matcher ennå</h2>
      <p>Start med å opprette din første match</p>
      <button class="primary" onclick="window.__appAction('createMatch')">
        Opprett match
      </button>
    </div>
  `;
}

function renderDashboard(data) {
  const activeMatch = data.matches.find(m => m.active) || data.matches[0];

  return `
    <div class="dashboard">

      <div class="match-header">
        <h2>${activeMatch.name}</h2>
        <button class="btn" onclick="window.__appAction('newStage')">
          + Stage
        </button>
      </div>

      <div class="stages">
        ${activeMatch.stages.map(renderStage).join('')}
      </div>

    </div>
  `;
}

function renderStage(stage) {
  return `
    <div class="stage-card">

      <div class="stage-header">
        <h3>${stage.name}</h3>
      </div>

      <div class="stage-body">

        <div class="row">
          <span>Poeng</span>
          <strong>${stage.score || '-'}</strong>
        </div>

        <div class="row">
          <span>Tid</span>
          <strong>${stage.time || '-'}</strong>
        </div>

      </div>

      <button class="small" onclick="window.__appAction('addResult','${stage.id}')">
        Legg inn resultat
      </button>

    </div>
  `;
}
