export function renderAppHTML() {
  const appContainer = document.getElementById('app');
  
  appContainer.innerHTML = `
<div class="phone">

<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip" onclick="switchTab('screen-matches')">
      <div class="match-chip-dot"></div>
      <div class="match-chip-name" id="home-chip-name">Ingen match valgt</div>
      <div class="match-chip-arrow">&#9660;</div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">EF</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">Hjem</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">Matcher</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognosis')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">Prognose</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">Live</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">Profil</span></div>
  </div>
</div>

<div class="screen" id="screen-matches"></div>
<div class="screen" id="screen-prognosis"></div>
<div class="screen" id="screen-results"></div>
<div class="screen" id="screen-profile"></div>

<div class="modal-backdrop" id="modal-add" onclick="closeModalOutside(event,'modal-add')"></div>
<div class="modal-backdrop" id="modal-match" onclick="closeModalOutside(event,'modal-match')"></div>
<div class="modal-backdrop" id="modal-profile" onclick="closeModalOutside(event,'modal-profile')"></div>

</div>
  `;
}
