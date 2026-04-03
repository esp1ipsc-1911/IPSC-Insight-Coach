import { renderApp } from './appUI.js';

let state = {
  user: null,
  data: { matches: [] }
};

window.__appAction = (type, payload) => {
  if (type === 'logout') {
    state.user = null;
  }

  if (type === 'createMatch') {
    state.data.matches.push({
      id: Date.now(),
      name: 'Ny match',
      active: true,
      stages: []
    });
  }

  if (type === 'newStage') {
    const match = state.data.matches[0];
    match.stages.push({
      id: Date.now(),
      name: 'Ny stage'
    });
  }

  render();
};

function render() {
  const app = document.getElementById('app');
  app.innerHTML = renderApp(state.user, state.data);
}

export function setUser(user) {
  state.user = user;
  render();
}

render();
