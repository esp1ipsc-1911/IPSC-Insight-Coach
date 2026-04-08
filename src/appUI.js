// ════════════════════════════════════════════════════════════════════════════
// IPSC INSIGHT - MAIN APP UI (CLEAN VERSION - CONSISTENT CARD STYLING)
// ════════════════════════════════════════════════════════════════════════════

import { logout, getCurrentUserProfile, getCurrentUser } from './auth.js';
import {
  saveUserProfile,
  getUserProfile,
  createMatch as createMatchDB,
  updateMatch as updateMatchDB,
  deleteMatch as deleteMatchDB,
  getUserMatches,
  listenToUserMatches,
  listenToMatch
} from './dataLayer.js';

// ════════════════════════════════════════════════════════════════════════════
// GLOBAL STATE
// ════════════════════════════════════════════════════════════════════════════

let profile;

let activeMatchId = null;
let matchFilterVal = 'all';
let matches = [];
let matchUnsubscribe = null;
let currentMatchUnsubscribe = null;

// ════════════════════════════════════════════════════════════════════════════
// TRANSLATIONS
// ════════════════════════════════════════════════════════════════════════════

const LANG = {
  no: {
    tracker: 'INSIGHT',
    tagline: 'Analyse. Prognose. Resultat.',
    home: 'Hjem',
    matches: 'Matcher',
    prognosis: 'Prognose',
    results: 'Live',
    profile: 'Profil',
    leading: 'LEDER',
    behind: 'BAK',
    active: 'Aktiv',
    no_match_selected: 'Ingen match valgt',
    new_match: 'Ny match',
    match_name: 'Matchnavn',
    location: 'Sted',
    date: 'Dato',
    type: 'Type',
    planned_stages: 'Planlagte stages',
    save: 'Lagre',
    cancel: 'Avbryt',
    delete: 'Slett',
    edit_profile: 'Rediger profil',
    first_name: 'Fornavn',
    last_name: 'Etternavn',
    club: 'Klubb',
    region: 'Region',
    category: 'Kategori',
    division: 'Divisjon',
    power_factor: 'Power Factor',
    draw_seconds: 'Trekk (s)',
    reload_seconds: 'Reload (s)',
    save_profile: 'Lagre profil',
    logout: 'Logg ut',
    matches_count: 'Matcher',
    stages_count: 'Stages',
    avg_hf: 'Snitt HF',
    a_rate: 'A-andel',
    shots: 'Skudd',
    targets: 'Skiver',
    steel: 'Stål',
    move_seconds: 'Beveg. (s)',
    calculate: 'Beregn',
    add_shooter: 'Legg til skytter',
    add_result: 'Legg til resultat',
    save_shooter: 'Lagre skytter',
    save_result: 'Lagre resultat',
    match_types_stevne: 'Stevne',
    match_types_trening: 'Trening',
    match_types_klubbmatch: 'Klubbmatch',
    match_types_landsmesterskap: 'Landsmesterskap',
    match_types_internasjonalt: 'Internasjonalt',
    select_power_factor: 'Velg Power Factor',
    stages_added_later: 'Stages legges til senere'
  },
  en: {
    tracker: 'INSIGHT',
    tagline: 'Analysis. Prognosis. Results.',
    home: 'Home',
    matches: 'Matches',
    prognosis: 'Prognosis',
    results: 'Live',
    profile: 'Profile',
    leading: 'LEADING',
    behind: 'BEHIND',
    active: 'Active',
    no_match_selected: 'No match selected',
    new_match: 'New Match',
    match_name: 'Match Name',
    location: 'Location',
    date: 'Date',
    type: 'Type',
    planned_stages: 'Planned Stages',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit_profile: 'Edit Profile',
    first_name: 'First Name',
    last_name: 'Last Name',
    club: 'Club',
    region: 'Region',
    category: 'Category',
    division: 'Division',
    power_factor: 'Power Factor',
    draw_seconds: 'Draw (s)',
    reload_seconds: 'Reload (s)',
    save_profile: 'Save Profile',
    logout: 'Log Out',
    matches_count: 'Matches',
    stages_count: 'Stages',
    avg_hf: 'Avg HF',
    a_rate: 'A-rate',
    shots: 'Shots',
    targets: 'Targets',
    steel: 'Steel',
    move_seconds: 'Move (s)',
    calculate: 'Calculate',
    add_shooter: 'Add Shooter',
    add_result: 'Add Result',
    save_shooter: 'Save Shooter',
    save_result: 'Save Result',
    match_types_stevne: 'Competition',
    match_types_trening: 'Training',
    match_types_klubbmatch: 'Club Match',
    match_types_landsmesterskap: 'Nationals',
    match_types_internasjonalt: 'International',
    select_power_factor: 'Select Power Factor',
    stages_added_later: 'Stages will be added later'
  }
};

let currentLang = 'no';
function t(key) { return LANG[currentLang][key] || key; }

// ════════════════════════════════════════════════════════════════════════════
// IPSC RULES & CONSTANTS
// ════════════════════════════════════════════════════════════════════════════

const SCORE = {
  major: { A: 5, C: 4, D: 2, miss: -10, ns: -10, proc: -10 },
  minor: { A: 5, C: 3, D: 1, miss: -10, ns: -10, proc: -10 }
};

const MAG_CAP = {
  'Standard': { minor: 20, major: 17 },
  'Open': { minor: 28, major: 28 },
  'Production': { minor: 15, major: 15 },
  'Production Optics': { minor: 15, major: 15 },
  'Production Optics Carbine': { minor: 15, major: 15 },
  'Classic': { minor: 10, major: 8 },
  'Revolver': { minor: 8, major: 6 },
  'Pistol Caliber Carbine': { minor: 30, major: 30 },
  'Pistol Caliber Carbine Optics': { minor: 30, major: 30 }
};

const DIVS = ['Standard', 'Open', 'Production', 'Production Optics', 'Production Optics Carbine', 'Classic', 'Revolver', 'Pistol Caliber Carbine', 'Pistol Caliber Carbine Optics'];

const DIV_PF = {
  Standard: ['minor', 'major'],
  Open: ['minor', 'major'],
  Production: ['minor'],
  'Production Optics': ['minor'],
  'Production Optics Carbine': ['minor'],
  Classic: ['minor', 'major'],
  Revolver: ['minor', 'major'],
  'Pistol Caliber Carbine': ['minor', 'major'],
  'Pistol Caliber Carbine Optics': ['minor', 'major']
};

const CATS = ['—', 'Junior', 'Senior', 'Super Senior', 'Lady', 'Lady Junior', 'Lady Senior'];
const REGIONS = ['Norge', 'Sverige', 'Danmark', 'Finland', 'Tyskland', 'Storbritannia', 'USA', 'Annet'];

// ════════════════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

function getMagCap(div, pf) {
  const d = MAG_CAP[div];
  if (!d) return 15;
  return d[pf] || d.minor || 15;
}

function calcReloads(shots, div, pf) {
  return Math.max(0, Math.ceil(shots / getMagCap(div, pf)) - 1);
}

function calcPoints(a, c, d, miss, ns, proc, pf) {
  const t = SCORE[pf] || SCORE.minor;
  return (a * t.A) + (c * t.C) + (d * t.D) + (miss * t.miss) + (ns * t.ns) + ((proc || 0) * t.proc);
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function fmtDate(d) {
  if (!d) return '';
  try {
    const locale = currentLang === 'no' ? 'nb-NO' : 'en-US';
    return new Date(d).toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' });
  } catch (e) {
    return d;
  }
}

function el(id) {
  return document.getElementById(id);
}

function gv(id) {
  const e = el(id);
  return e ? e.value : '';
}

function gnv(id, def) {
  const v = parseFloat(gv(id));
  return isNaN(v) ? (def || 0) : v;
}

function gnvi(id, def) {
  const v = parseInt(gv(id));
  return isNaN(v) ? (def || 0) : v;
}

function initials() {
  const f = profile?.firstName || '';
  const l = profile?.lastName || '';
  return (f.charAt(0) + l.charAt(0)).toUpperCase() || 'U';
}

function currentUserId() {
  return getCurrentUser()?.uid || getCurrentUserProfile()?.uid || null;
}

function normalizeMatchId(id) {
  return id == null ? null : String(id);
}

function sameMatchId(a, b) {
  return normalizeMatchId(a) === normalizeMatchId(b);
}

function sortByStageNum(a, b) {
  return (a.num || a.number || 0) - (b.num || b.number || 0);
}

function stageMaxPoints(stage) {
  if (!stage) return 0;
  if (typeof stage.maxPoints === 'number') return stage.maxPoints;
  const paper = Number(stage.targets || stage.paperTargets || 0);
  const steel = Number(stage.steel || stage.poppers || stage.plates || 0);
  return (paper + steel) * 10;
}

function stageShots(stage) {
  if (!stage) return 0;
  if (typeof stage.shots === 'number') return stage.shots;
  const paper = Number(stage.targets || stage.paperTargets || 0);
  const steel = Number(stage.steel || stage.poppers || stage.plates || 0);
  return paper * 2 + steel;
}

function buildStageDef(number, partial = {}) {
  const targets = Number(partial.targets ?? partial.paperTargets ?? 0);
  const steel = Number(partial.steel ?? partial.poppers ?? partial.plates ?? 0);
  const shots = Number(partial.shots ?? Math.max(targets * 2 + steel, 0));
  const maxPoints = Number(partial.maxPoints ?? ((targets + steel) * 10));
  return {
    number,
    name: partial.name || `Stage ${number}`,
    targets,
    steel,
    shots,
    maxPoints
  };
}

function getStageDefs(match) {
  if (!match) return [];
  const raw = Array.isArray(match.stages) ? match.stages : [];
  const defs = raw
    .filter(s => s && (s.number != null || s.num != null) && !(s.time != null || s.pts != null || s.hf != null))
    .map((s, idx) => buildStageDef(Number(s.number ?? s.num ?? (idx + 1)), s));
  if (defs.length) return defs.sort(sortByStageNum);
  const planned = Number(match.plannedStages || 0);
  return Array.from({ length: planned }, (_, idx) => buildStageDef(idx + 1));
}

function reconcileStageDefs(match) {
  const defs = getStageDefs(match);
  match.stages = defs;
  match.plannedStages = Math.max(Number(match.plannedStages || 0), defs.length);
  return match;
}

function getCurrentShooter(match) {
  if (!match?.shooters?.length) return null;
  const uid = currentUserId();
  return match.shooters.find(s => s.isMe || (uid && s.id === uid)) || match.shooters[0] || null;
}

function ensureMeShooter(match) {
  if (!match.shooters) match.shooters = [];
  const existing = getCurrentShooter(match);
  if (existing) {
    if (!Array.isArray(existing.stages)) existing.stages = [];
    return existing;
  }
  const shooter = {
    id: currentUserId() || `me_${Date.now()}`,
    isMe: true,
    firstName: profile?.firstName || 'Meg',
    lastName: profile?.lastName || '',
    division: profile?.division || 'Production',
    pf: profile?.powerFactor || 'minor',
    club: profile?.club || '',
    stages: []
  };
  match.shooters.push(shooter);
  return shooter;
}

function getShooterResults(shooter) {
  return (Array.isArray(shooter?.stages) ? shooter.stages : [])
    .filter(Boolean)
    .map(r => ({ ...r, num: Number(r.num ?? r.number) }))
    .filter(r => Number.isFinite(r.num))
    .sort(sortByStageNum);
}

function upsertShooterResult(match, shooterId, result) {
  const shooter = match?.shooters?.find(s => s.id === shooterId);
  if (!shooter) return false;
  if (!Array.isArray(shooter.stages)) shooter.stages = [];
  const num = Number(result.num ?? result.number);
  const idx = shooter.stages.findIndex(r => Number(r.num ?? r.number) === num);
  if (idx >= 0) shooter.stages[idx] = { ...shooter.stages[idx], ...result, num };
  else shooter.stages.push({ ...result, num });
  shooter.stages.sort(sortByStageNum);
  return true;
}

function getStageResult(shooter, stageNumber) {
  return getShooterResults(shooter).find(r => Number(r.num) === Number(stageNumber)) || null;
}

function computeShooterTotals(match, shooter) {
  const defs = getStageDefs(match);
  const results = getShooterResults(shooter);
  const totalPts = results.reduce((sum, r) => sum + Number(r.pts || 0), 0);
  const totalTime = results.reduce((sum, r) => sum + Number(r.time || 0), 0);
  const totalHitsA = results.reduce((sum, r) => sum + Number(r.a || 0), 0);
  const totalHits = results.reduce((sum, r) => sum + Number(r.a || 0) + Number(r.c || 0) + Number(r.d || 0), 0);
  const totalMax = defs.reduce((sum, d) => sum + stageMaxPoints(d), 0);
  const scoredMax = results.reduce((sum, r) => {
    const def = defs.find(d => d.number === r.num);
    return sum + stageMaxPoints(def);
  }, 0);
  return {
    totalPts,
    totalTime,
    aRate: totalHits ? totalHitsA / totalHits : 0,
    scoredMax,
    totalMax,
    percentOfAvailable: scoredMax ? totalPts / scoredMax : 0,
    hf: totalTime > 0 ? totalPts / totalTime : 0
  };
}

function getFormForShooter(match, shooter) {
  const defs = getStageDefs(match);
  const results = getShooterResults(shooter);
  const completed = results.filter(r => Number(r.time) > 0);
  const totalShots = completed.reduce((sum, r) => {
    const def = defs.find(d => d.number === r.num);
    return sum + stageShots(def);
  }, 0);
  const totalTime = completed.reduce((sum, r) => sum + Number(r.time || 0), 0);
  const totalA = completed.reduce((sum, r) => sum + Number(r.a || 0), 0);
  const totalHits = completed.reduce((sum, r) => sum + Number(r.a || 0) + Number(r.c || 0) + Number(r.d || 0), 0);
  const totalPts = completed.reduce((sum, r) => sum + Number(r.pts || 0), 0);
  const scoredMax = completed.reduce((sum, r) => {
    const def = defs.find(d => d.number === r.num);
    return sum + stageMaxPoints(def);
  }, 0);
  return {
    completedCount: completed.length,
    timePerShot: totalShots ? totalTime / totalShots : 0,
    aRate: totalHits ? totalA / totalHits : 0,
    pointsRatio: scoredMax ? totalPts / scoredMax : 0,
    totalPts, totalTime, totalShots, scoredMax
  };
}

function getNextUnshotStage(match, shooter) {
  const defs = getStageDefs(match);
  const shotNums = new Set(getShooterResults(shooter).map(r => Number(r.num)));
  return defs.find(d => !shotNums.has(Number(d.number))) || null;
}

function projectNextStage(match, shooter, stageDef) {
  if (!match || !shooter || !stageDef) return null;
  const form = getFormForShooter(match, shooter);
  if (!form.completedCount || !form.timePerShot) return null;
  const div = shooter.division || profile?.division || 'Production';
  const pf = shooter.pf || profile?.powerFactor || 'minor';
  const reloadCount = calcReloads(stageShots(stageDef), div, pf);
  const draw = Number(profile?.draw || 1.4);
  const reloadTime = Number(profile?.reloadTime || 1.8);
  const estTime = draw + (stageShots(stageDef) * form.timePerShot) + (reloadCount * reloadTime);
  const estPoints = Math.max(0, stageMaxPoints(stageDef) * (form.pointsRatio || 0));
  const estHF = estTime > 0 ? estPoints / estTime : 0;
  return { estHF, estPoints, estTime, reloadCount, form };
}

function buildReflection(match, shooter, stageDef, projection) {
  if (!projection || !stageDef) return 'Skyt stage for stage. Bygg videre på dagsformen.';
  const aPct = Math.round((projection.form.aRate || 0) * 100);
  const tps = projection.form.timePerShot || 0;
  const parts = [];
  if (aPct < 70) parts.push('Gi siktebildet litt mer tid.');
  else parts.push('Behold tempoet.');
  if (projection.reloadCount > 0) parts.push(`Planlegg ${projection.reloadCount} magasinbytte${projection.reloadCount > 1 ? 'r' : ''}.`);
  else parts.push('Ingen reloads forventet.');
  parts.push(`Baseline nå er ${aPct}%A og ${tps.toFixed(3)}s/skudd.`);
  return parts.join(' ');
}

function buildWinMessage(match, shooter) {
  const standings = (match?.shooters || []).map(s => ({ shooter: s, ...computeShooterTotals(match, s) }))
    .sort((a, b) => b.totalPts - a.totalPts);
  const meIdx = standings.findIndex(s => s.shooter.id === shooter?.id);
  if (meIdx < 0) return 'Ingen sammenligningsdata ennå.';
  const me = standings[meIdx];
  const ahead = standings[meIdx - 1] || null;
  const behind = standings[meIdx + 1] || null;
  if (!ahead && !behind) return 'Du leder alene akkurat nå.';
  if (!ahead && behind) return `Du leder med ${(me.totalPts - behind.totalPts).toFixed(1)} poeng. Hold konkurrentene bak deg.`;
  if (ahead && !behind) return `Du trenger ${(ahead.totalPts - me.totalPts + 0.1).toFixed(1)} poeng for å gå forbi ${ahead.shooter.firstName}.`;
  return `Til leder mangler du ${(ahead.totalPts - me.totalPts + 0.1).toFixed(1)} poeng. Bak har du ${(me.totalPts - behind.totalPts).toFixed(1)} poeng margin.`;
}

function populateShooterSelect(selectId, selectedId) {
  const select = el(selectId);
  if (!select) return;
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match?.shooters?.length) {
    select.innerHTML = '<option value="">Ingen skyttere</option>';
    return;
  }
  select.innerHTML = match.shooters.map(s => {
    const label = s.isMe ? `Meg (${s.firstName || ''} ${s.lastName || ''})`.trim() : `${s.firstName || ''} ${s.lastName || ''}`.trim();
    return `<option value="${s.id}"${selectedId === s.id ? ' selected' : ''}>${label}</option>`;
  }).join('');
}

function populateStageSelect(selectId, selectedNum) {
  const select = el(selectId);
  if (!select) return;
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  const defs = getStageDefs(match);
  if (!defs.length) {
    select.innerHTML = '<option value="">Ingen stages</option>';
    return;
  }
  select.innerHTML = defs.map(s => `<option value="${s.number}"${Number(selectedNum) === Number(s.number) ? ' selected' : ''}>${s.name}</option>`).join('');
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN RENDER FUNCTION
// ════════════════════════════════════════════════════════════════════════════

export async function renderApp(container) {
  // Load user profile from Firestore
  const userProfile = await getUserProfile();
  const currentUser = getCurrentUserProfile();
  
  if (userProfile) {
    profile = userProfile;
  } else {
    // Initialize with empty profile for new user
    profile = {
      firstName: currentUser.name || currentUser.email?.split('@')[0] || '',
      lastName: '',
      division: '',
      category: '',
      powerFactor: '',
      region: '',
      club: '',
      draw: null,
      reloadTime: null
    };
  }

  // Load matches from Firestore
  matches = await getUserMatches();
  
  // Set up real-time listener for matches
  if (matchUnsubscribe) {
    matchUnsubscribe();
  }
  matchUnsubscribe = listenToUserMatches((updatedMatches) => {
    matches = updatedMatches;
    renderMatchList();
    renderHome();
  });

  // Render HTML structure
  container.innerHTML = `
<div class="phone">

<!-- HOME -->
<div class="screen active" id="screen-home">
  <div class="navbar">
    <div class="nav-title">IPSC <span>INSIGHT</span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-home')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="home-chip-name">${t('no_match_selected')}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-home"></div>
    </div>
    <div class="nav-avatar" id="nav-av-home" onclick="switchTab('screen-profile')">${initials()}</div>
  </div>
  <div class="scroll-content" id="home-content"></div>
  <button class="fab" onclick="openModal('modal-add')">+</button>
  <div class="tab-bar">
    <div class="tab-item active" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${t('home')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${t('matches')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${t('prognosis')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${t('results')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${t('profile')}</span></div>
  </div>
</div>

<!-- MATCHES -->
<div class="screen" id="screen-matches">
  <div class="navbar">
    <div class="nav-title">MATCH<span>ER</span></div>
    <div class="nav-avatar" id="nav-av-matches" onclick="switchTab('screen-profile')">${initials()}</div>
  </div>
  <div class="scroll-content">
    <div class="search-wrap"><span class="search-icon">&#128269;</span><input class="search-input" id="match-search" placeholder="Søk match, sted..." oninput="renderMatchList()"></div>
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
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${t('home')}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${t('matches')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${t('prognosis')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${t('results')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${t('profile')}</span></div>
  </div>
</div>

<!-- PROGNOSE -->
<div class="screen" id="screen-prognose">
  <div class="navbar">
    <div class="nav-title">PROG<span>NOSE</span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-prog')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="prog-chip-name">${t('no_match_selected')}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-prog"></div>
    </div>
    <div class="nav-avatar" id="nav-av-prog" onclick="switchTab('screen-profile')">${initials()}</div>
  </div>
  <div class="scroll-content">
    <div id="prog-match-context"></div>
    <div id="snapshot-container"></div>
    <div id="prog-stage-list"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${t('home')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${t('matches')}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${t('prognosis')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${t('results')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${t('profile')}</span></div>
  </div>
</div>

<!-- RESULTS -->
<div class="screen" id="screen-results">
  <div class="navbar">
    <div class="nav-title">LIVE<span></span></div>
    <div class="match-chip-wrapper">
      <div class="match-chip" onclick="toggleMatchDropdown('match-dropdown-results')">
        <div class="match-chip-dot"></div>
        <div class="match-chip-name" id="results-chip-name">${t('no_match_selected')}</div>
        <div class="match-chip-arrow">&#9660;</div>
      </div>
      <div class="match-dropdown" id="match-dropdown-results"></div>
    </div>
    <div class="nav-avatar" id="nav-av-results" onclick="switchTab('screen-profile')">${initials()}</div>
  </div>
  <div class="scroll-content" id="results-content"></div>
  <button class="fab" onclick="openModal(&quot;modal-add-shooter&quot;)">+</button>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${t('home')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${t('matches')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${t('prognosis')}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${t('results')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${t('profile')}</span></div>
  </div>
</div>

<!-- PROFILE -->
<div class="screen" id="screen-profile">
  <div class="navbar">
    <div class="nav-title">PRO<span>FIL</span></div>
    <div class="nav-avatar" id="prof-avatar" onclick="switchTab('screen-home')">${initials()}</div>
  </div>
  <div class="scroll-content">
    <div class="profile-header">
      <div class="profile-avatar">${initials()}</div>
      <div class="profile-name" id="prof-name">${profile.firstName || ''} ${profile.lastName || ''}</div>
      <div class="profile-div" id="prof-div">${profile.division || '—'} · ${profile.club || '—'}</div>
      <div class="profile-badges">
        <span class="badge badge-gold" id="prof-badge-pf">${profile.powerFactor ? cap(profile.powerFactor) : '—'}</span>
        <span class="badge badge-green">Verified</span>
        <span class="badge badge-blue" id="prof-badge-region">${profile.region || '—'}</span>
      </div>
      <button class="btn-primary" onclick="openEditProfile()">✏️ ${t('edit_profile')}</button>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Personlig informasjon</div></div>
      <div class="info-row">
        <span class="info-key">Fornavn</span>
        <span id="info-firstname">${profile.firstName || '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Etternavn</span>
        <span id="info-lastname">${profile.lastName || '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Divisjon</span>
        <span id="info-division">${profile.division || '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Kategori</span>
        <span id="info-category">${profile.category || '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Power Factor</span>
        <span id="info-pf">${profile.powerFactor ? cap(profile.powerFactor) : '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Region</span>
        <span id="info-region">${profile.region || '—'}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Klubb</span>
        <span id="info-club">${profile.club || '—'}</span>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">Sesongstatistikk</div></div>
      <div class="stats-grid">
        <div class="stat-block"><div class="stat-value" id="stat-matches">0</div><div class="stat-label">${t('matches_count')}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-stages">0</div><div class="stat-label">${t('stages_count')}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-avg-hf">—</div><div class="stat-label">${t('avg_hf')}</div></div>
        <div class="stat-block"><div class="stat-value" id="stat-a-rate">—</div><div class="stat-label">${t('a_rate')}</div></div>
      </div>
    </div>

    <button class="btn-primary btn-logout" onclick="handleLogout()">🚪 ${t('logout')}</button>
    <div class="profile-spacer"></div>
  </div>
  <div class="tab-bar">
    <div class="tab-item" onclick="switchTab('screen-home')"><div class="tab-icon">&#127968;</div><span class="lang-home">${t('home')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-matches')"><div class="tab-icon">&#127942;</div><span class="lang-matches">${t('matches')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-prognose')"><div class="tab-icon">&#128200;</div><span class="lang-prognosis">${t('prognosis')}</span></div>
    <div class="tab-item" onclick="switchTab('screen-results')"><div class="tab-icon">&#127970;</div><span class="lang-results">${t('results')}</span></div>
    <div class="tab-item active" onclick="switchTab('screen-profile')"><div class="tab-icon">&#128100;</div><span class="lang-profile">${t('profile')}</span></div>
  </div>
</div>

<!-- MODALS -->
<div class="modal-overlay" id="modal-new-match" onclick="closeModalOutside(event,'modal-new-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${t('new_match')}</div>
      <div class="modal-close" onclick="closeModal('modal-new-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${t('match_name')}</div>
        <input class="field-input" type="text" id="new-match-name" placeholder="Bergen Open 2026">
      </div>
      <div class="field-group">
        <div class="field-label">${t('type')}</div>
        <select class="field-select" id="new-match-type">
          <option value="Stevne">${t('match_types_stevne')}</option>
          <option value="Trening">${t('match_types_trening')}</option>
          <option value="Klubbmatch">${t('match_types_klubbmatch')}</option>
          <option value="Landsmesterskap">${t('match_types_landsmesterskap')}</option>
          <option value="Internasjonalt">${t('match_types_internasjonalt')}</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">${t('date')}</div>
        <input class="field-input" type="date" id="new-match-date" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="field-group">
        <div class="field-label">${t('location')}</div>
        <input class="field-input" type="text" id="new-match-location" placeholder="Bergen">
      </div>
      <div class="field-group">
        <div class="field-label">${t('planned_stages')}</div>
        <input class="field-input" type="number" id="new-match-stages" value="6">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="createMatch()">${t('save')}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-edit-profile" onclick="closeModalOutside(event,'modal-edit-profile')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${t('edit_profile')}</div>
      <div class="modal-close" onclick="closeModal('modal-edit-profile')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${t('first_name')}</div>
        <input class="field-input" type="text" id="edit-firstname" value="${profile.firstName || ''}">
      </div>
      <div class="field-group">
        <div class="field-label">${t('last_name')}</div>
        <input class="field-input" type="text" id="edit-lastname" value="${profile.lastName || ''}">
      </div>
      <div class="field-group">
        <div class="field-label">${t('division')}</div>
        <select class="field-select" id="edit-division" onchange="updatePFOptions()"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${t('category')}</div>
        <select class="field-select" id="edit-category"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${t('select_power_factor')}</div>
        <div id="pf-options" class="pf-options"></div>
      </div>
      <div class="field-group">
        <div class="field-label">${t('region')}</div>
        <select class="field-select" id="edit-region"></select>
      </div>
      <div class="field-group">
        <div class="field-label">${t('club')}</div>
        <input class="field-input" type="text" id="edit-club" value="${profile.club || ''}">
      </div>
      <div class="field-group">
        <div class="field-label">${t('draw_seconds')}</div>
        <input class="field-input" type="number" step="0.01" id="edit-draw" value="${profile.draw || ''}">
      </div>
      <div class="field-group">
        <div class="field-label">${t('reload_seconds')}</div>
        <input class="field-input" type="number" step="0.01" id="edit-reload" value="${profile.reloadTime || ''}">
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" id="save-profile-btn" onclick="saveProfileData()">${t('save_profile')}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-shooter" onclick="closeModalOutside(event,'modal-add-shooter')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${t('add_shooter')}</div>
      <div class="modal-close" onclick="closeModal('modal-add-shooter')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">${t('first_name')}</div>
        <input class="field-input" type="text" id="new-shooter-firstname">
      </div>
      <div class="field-group">
        <div class="field-label">${t('last_name')}</div>
        <input class="field-input" type="text" id="new-shooter-lastname">
      </div>
      <div class="field-group">
        <div class="field-label">${t('division')}</div>
        <select class="field-select" id="new-shooter-division"></select>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="addShooter()">${t('save_shooter')}</button>
    </div>
  </div>
</div>

<div class="modal-overlay" id="modal-add" onclick="closeModalOutside(event,'modal-add')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">${t('add_result')}</div>
      <div class="modal-close" onclick="closeModal('modal-add')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group"><div class="field-label">Skytter</div><select class="field-select" id="new-result-shooter" onchange="updateManualPoints()"></select></div>
      <div class="field-group"><div class="field-label">Stage</div><select class="field-select" id="new-result-stage"></select></div>
      <div class="field-group"><div class="field-label">Time (s)</div><input class="field-input" type="number" step="0.01" id="new-result-time"></div>
      <div class="field-group"><div class="field-label">A</div><input class="field-input" type="number" id="new-result-a" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">C</div><input class="field-input" type="number" id="new-result-c" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">D</div><input class="field-input" type="number" id="new-result-d" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">Miss</div><input class="field-input" type="number" id="new-result-miss" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">NS</div><input class="field-input" type="number" id="new-result-ns" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">Proc</div><input class="field-input" type="number" id="new-result-proc" value="0" oninput="updateManualPoints()"></div>
      <div class="field-group"><div class="field-label">Points</div><input class="field-input" type="number" id="new-result-points" readonly></div>
    </div>
    <div class="modal-footer"><button class="btn-primary" onclick="addStageResult()">${t('save_result')}</button></div>
  </div>
</div>

<div class="modal-overlay" id="modal-add-stage" onclick="closeModalOutside(event,'modal-add-stage')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header"><div class="modal-title">Ny stage</div><div class="modal-close" onclick="closeModal('modal-add-stage')">✕</div></div>
    <div class="modal-body">
      <div class="field-group"><div class="field-label">Navn</div><input class="field-input" type="text" id="new-stage-name" placeholder="Stage 1"></div>
      <div class="field-group"><div class="field-label">Skudd</div><input class="field-input" type="number" id="new-stage-shots" value="12"></div>
      <div class="field-group"><div class="field-label">Paper / targets</div><input class="field-input" type="number" id="new-stage-targets" value="6"></div>
      <div class="field-group"><div class="field-label">Steel</div><input class="field-input" type="number" id="new-stage-steel" value="0"></div>
      <div class="field-group"><div class="field-label">Max points</div><input class="field-input" type="number" id="new-stage-maxpoints" value="60"></div>
    </div>
    <div class="modal-footer"><button class="btn-primary" onclick="saveStage()">Lagre stage</button></div>
  </div>
</div>

<!-- MODAL: EDIT MATCH -->
<div class="modal-overlay" id="modal-edit-match" onclick="closeModalOutside(event,'modal-edit-match')">
  <div class="modal-sheet" onclick="event.stopPropagation()">
    <div class="modal-header">
      <div class="modal-title">Rediger match</div>
      <div class="modal-close" onclick="closeModal('modal-edit-match')">✕</div>
    </div>
    <div class="modal-body">
      <div class="field-group">
        <div class="field-label">MATCHNAVN</div>
        <input class="field-input" type="text" id="edit-match-name">
      </div>
      <div class="field-group">
        <div class="field-label">DATO</div>
        <input class="field-input" type="date" id="edit-match-date">
      </div>
      <div class="field-group">
        <div class="field-label">STED</div>
        <input class="field-input" type="text" id="edit-match-location">
      </div>
      <div class="field-group">
        <div class="field-label">TYPE</div>
        <select class="field-select" id="edit-match-type">
          <option value="Trening">Trening</option>
          <option value="Stevne">Stevne</option>
          <option value="Landsmesterskap">Landsmesterskap</option>
        </select>
      </div>
      <div class="field-group">
        <div class="field-label">ANTALL STAGES</div>
        <input class="field-input" type="number" id="edit-match-stages" min="1">
      </div>
      <div class="field-group" style="display:flex;align-items:center;gap:10px;margin-top:10px;">
        <input type="checkbox" id="edit-match-searchable" style="width:18px;height:18px;">
        <label for="edit-match-searchable" style="font-size:14px;">Tillat at andre kan finne denne matchen</label>
      </div>
      <div class="field-group" style="display:flex;align-items:center;gap:10px;margin-top:10px;">
        <input type="checkbox" id="edit-match-finished" style="width:18px;height:18px;">
        <label for="edit-match-finished" style="font-size:14px;">Marker som ferdig</label>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn-primary" onclick="saveEditMatch()">Lagre</button>
      <button id="delete-match-btn" onclick="confirmDeleteMatch()" style="width:100%;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>
    </div>
  </div>
</div>

<!-- MODAL: CONFIRM DELETE MATCH -->
<div class="modal-overlay" id="modal-confirm-delete" onclick="closeModalOutside(event,'modal-confirm-delete')">
  <div class="modal-sheet" onclick="event.stopPropagation()" style="max-width:400px;">
    <div class="modal-header">
      <div class="modal-title">Slett match</div>
      <div class="modal-close" onclick="closeModal('modal-confirm-delete')">✕</div>
    </div>
    <div class="modal-body">
      <p style="margin-bottom:20px;">Er du sikker på at du vil slette <strong id="delete-match-name"></strong>?</p>
      <p style="color:var(--muted);font-size:13px;">Denne handlingen kan ikke angres.</p>
    </div>
    <div class="modal-footer">
      <div style="display:flex;gap:10px;">
        <button onclick="closeModal('modal-confirm-delete')" style="flex:1;padding:12px;background:#374151;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Avbryt</button>
        <button onclick="deleteMatchConfirmed()" style="flex:1;padding:12px;background:#ef4444;color:white;border:none;border-radius:8px;font-weight:600;cursor:pointer;">Slett match</button>
      </div>
    </div>
  </div>
</div>

</div>
  `;

  // Initialize app logic
  setupApp();
  renderProfile();
  renderHome();
  renderMatchList();
  updateProfileStats();
  calcPrognose();
}

// ════════════════════════════════════════════════════════════════════════════
// APP LOGIC FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

function setupApp() {
  // Expose functions to window for onclick handlers
  window.switchTab = switchTab;
  window.setFilter = setFilter;
  window.openModal = openModal;
  window.closeModal = closeModal;
  window.closeModalOutside = closeModalOutside;
  window.createMatch = createMatchHandler;
  window.toggleMatchDropdown = toggleMatchDropdown;
  window.selectMatchFromDropdown = selectMatchFromDropdown;
  window.renderMatchDropdown = renderMatchDropdown;
  window.openEditProfile = openEditProfile;
  window.saveProfileData = saveProfileData;
  window.selectPF = selectPF;
  window.updatePFOptions = updatePFOptions;
  window.calcPrognose = calcPrognose;
  window.renderMatchList = renderMatchList;
  window.selectMatch = selectMatch;
  window.addShooter = addShooterHandler;
  window.addStageResult = addStageResultHandler;
  window.openAddResult = openAddResultHandler;
  window.openAddStage = openAddStageHandler;
  window.saveStage = saveStageHandler;
  window.updateManualPoints = updateManualPoints;
  window.handleLogout = handleLogoutHandler;
  window.openEditMatch = openEditMatchHandler;
  window.saveEditMatch = saveEditMatchHandler;
  window.confirmDeleteMatch = confirmDeleteMatchHandler;
  window.deleteMatchConfirmed = deleteMatchConfirmedHandler;
  
  // Close dropdown when clicking outside - MUST be after HTML is rendered
  const shooterDiv = el('new-shooter-division');
  if (shooterDiv) shooterDiv.innerHTML = DIVS.map(div => `<option value="${div}">${div}</option>`).join('');

  document.addEventListener('click', function(event) {
    const isChip = event.target.closest('.match-chip');
    const isDropdown = event.target.closest('.match-dropdown');
    
    if (!isChip && !isDropdown) {
      document.querySelectorAll('.match-dropdown').forEach(dd => {
        dd.classList.remove('open');
      });
      document.querySelectorAll('.match-chip').forEach(ch => {
        ch.classList.remove('open');
      });
    }
  });
}

function switchTab(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
  
  el(screenId).classList.add('active');
  
  const tabIndex = ['screen-home', 'screen-matches', 'screen-prognose', 'screen-results', 'screen-profile'].indexOf(screenId);
  const tabs = document.querySelectorAll('.tab-item');
  if (tabs[tabIndex]) tabs[tabIndex].classList.add('active');
  
  if (screenId === 'screen-home') renderHome();
  if (screenId === 'screen-matches') renderMatchList();
  if (screenId === 'screen-results') renderResults();
  if (screenId === 'screen-prognose') calcPrognose();
}

function openModal(modalId) {
  el(modalId).classList.add('open');
}

function closeModal(modalId) {
  el(modalId).classList.remove('open');
}

function closeModalOutside(event, modalId) {
  if (event.target.id === modalId) {
    closeModal(modalId);
  }
}

function setFilter(val, elem) {
  matchFilterVal = val;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  elem.classList.add('active');
  renderMatchList();
}

async function createMatchHandler() {
  const plannedStages = Math.max(1, gnvi('new-match-stages', 6));
  const stageDefs = Array.from({ length: plannedStages }, (_, idx) => buildStageDef(idx + 1));
  const matchData = {
    name: gv('new-match-name') || 'Ny match',
    type: gv('new-match-type') || 'Stevne',
    date: gv('new-match-date') || new Date().toISOString().split('T')[0],
    location: gv('new-match-location') || '',
    plannedStages,
    stages: stageDefs,
    shooters: []
  };
  const result = await createMatchDB(matchData);
  if (result.success) {
    closeModal('modal-new-match');
  } else {
    alert('Kunne ikke opprette match: ' + result.error);
  }
}

function selectMatch(matchId) {
  activeMatchId = normalizeMatchId(matchId);
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (match) {
    const chipName = match.name || 'Match';
    const chips = ['home-chip-name', 'prog-chip-name', 'results-chip-name'];
    chips.forEach(id => {
      const elem = el(id);
      if (elem) elem.textContent = chipName;
    });
  }
  if (currentMatchUnsubscribe) currentMatchUnsubscribe();
  if (activeMatchId) {
    currentMatchUnsubscribe = listenToMatch(activeMatchId, (updatedMatch) => {
      const index = matches.findIndex(m => sameMatchId(m.id, activeMatchId));
      if (index !== -1 && updatedMatch) {
        matches[index] = reconcileStageDefs(updatedMatch);
        renderHome();
        renderResults();
        calcPrognose();
      }
    });
  }
  renderHome();
  renderResults();
  calcPrognose();
  switchTab('screen-home');
}

function renderHome() {
  const container = el('home-content');
  if (!container) return;
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <div class="empty-title">Velg en match</div>
        <div class="empty-sub">Trykk på match-chip over eller gå til Matcher-fanen</div>
        <button class="btn-primary btn-home-action" onclick="switchTab('screen-matches')">Se matcher</button>
      </div>`;
    return;
  }
  reconcileStageDefs(match);
  ensureMeShooter(match);
  const me = getCurrentShooter(match);
  const myResults = getShooterResults(me);
  const defs = getStageDefs(match);
  let html = '';
  html += '<div class="card">';
  html += '<div class="card-header"><div class="mhc-name">' + match.name + '</div><button class="btn-sm accent" onclick="openEditMatch()">⚙ Rediger</button></div>';
  html += '<div class="mhc-meta">' + fmtDate(match.date) + ' · ' + match.type + '</div>';
  html += '<div class="mhc-stats"><div><div class="mhc-val">' + defs.length + '</div><div class="mhc-lbl">Stages</div></div><div><div class="mhc-val">' + (match.shooters?.length || 0) + '</div><div class="mhc-lbl">Skyttere</div></div></div>';
  html += '<div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;"><button class="btn-primary" onclick="openAddStage()">Ny stage</button><button class="btn-primary" onclick="openModal(&quot;modal-add-shooter&quot;)">Ny skytter</button><button class="btn-primary" onclick="openAddResult()">Legg til resultat</button></div>';
  html += '</div>';
  html += '<div class="section-title">Stages</div><div class="card">';
  defs.forEach(def => {
    const res = getStageResult(me, def.number);
    html += '<div class="stage-row"><div class="stage-num">S' + def.number + '</div><div class="stage-info"><div class="stage-name">' + def.name + '</div><div class="stage-meta">' + stageShots(def) + ' skudd · maks ' + stageMaxPoints(def) + ' pts</div></div><div class="stage-hf">' + (res ? Number(res.hf || 0).toFixed(2) : '—') + '</div></div>';
  });
  html += '</div>';
  if (myResults.length) {
    html += '<div class="section-title">Mine siste resultater</div><div class="card">';
    myResults.slice(-3).reverse().forEach(stage => {
      html += '<div class="stage-row"><div class="stage-num">S' + stage.num + '</div><div class="stage-info"><div class="stage-name">Stage ' + stage.num + '</div><div class="stage-meta">' + Number(stage.time || 0).toFixed(2) + 's · ' + Number(stage.pts || 0).toFixed(1) + ' pts</div></div><div class="stage-hf">' + Number(stage.hf || 0).toFixed(2) + '</div></div>';
    });
    html += '</div>';
  }
  container.innerHTML = html;
}

function renderMatchList() {
  const container = el('match-list-container');
  if (!container) return;
  
  const searchTerm = gv('match-search').toLowerCase();
  
  let filtered = matches.filter(m => {
    if (searchTerm && !m.name.toLowerCase().includes(searchTerm) && !m.location?.toLowerCase().includes(searchTerm)) {
      return false;
    }
    
    if (matchFilterVal === 'all') return true;
    if (matchFilterVal === 'active') return m.id === activeMatchId;
    if (matchFilterVal === 'trening') return m.type === 'Trening';
    if (matchFilterVal === 'stevne') return m.type === 'Stevne';
    
    const year = m.date ? new Date(m.date).getFullYear().toString() : '';
    if (matchFilterVal === year) return true;
    
    return false;
  });
  
  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-sub">Ingen matcher funnet</div></div>';
    return;
  }
  
  let html = '';
  filtered.forEach(match => {
    const isActive = sameMatchId(match.id, activeMatchId);
    html += '<div class="match-row" onclick="selectMatch(\'' + match.id + '\')">';
    html += '<div class="match-row-icon' + (isActive ? ' is-active' : '') + '">🏆</div>';
    html += '<div class="match-row-info">';
    html += '<div class="match-row-name">' + match.name + '</div>';
    html += '<div class="match-row-meta">' + fmtDate(match.date) + ' · ' + (match.location || match.type) + '</div>';
    html += '</div>';
    html += '<div class="match-row-right">';
    html += '<div class="match-stg-count">' + (match.stages?.length || 0) + '</div>';
    html += '<div class="match-stg-lbl">stages</div>';
    html += '</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
}

function renderResults() {
  const container = el('results-content');
  if (!container) return;
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) {
    container.innerHTML = '<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';
    return;
  }
  if (!match.shooters || match.shooters.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">👥</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Trykk + for å legge til skyttere</div></div>';
    return;
  }
  const standings = match.shooters.map(shooter => ({ shooter, ...computeShooterTotals(match, shooter) })).sort((a, b) => b.totalPts - a.totalPts);
  const winnerPts = standings[0]?.totalPts || 0;
  let html = '<div class="card"><div class="card-header"><div class="card-title">Standings</div></div><div class="standings-table-wrap"><table class="standings-table"><thead><tr class="standings-header-row"><th class="standings-th standings-th-rank">#</th><th class="standings-th standings-th-shooter">Skytter</th><th class="standings-th standings-th-pts">Pts</th><th class="standings-th standings-th-pct">%</th></tr></thead><tbody>';
  standings.forEach((entry, idx) => {
    const pct = winnerPts > 0 ? ((entry.totalPts / winnerPts) * 100).toFixed(2) : '0.00';
    const shooter = entry.shooter;
    html += '<tr class="standings-row"><td class="standings-td standings-td-rank">' + (idx + 1) + '</td><td class="standings-td standings-td-shooter"><div class="standings-shooter-name">' + shooter.firstName + ' ' + shooter.lastName + '</div><div class="standings-shooter-meta">' + (shooter.division || '—') + ' · ' + cap(shooter.pf || 'minor') + '</div></td><td class="standings-td standings-td-pts">' + entry.totalPts.toFixed(1) + '</td><td class="standings-td standings-td-pct">' + pct + '%</td></tr>';
  });
  html += '</tbody></table></div></div>';
  container.innerHTML = html;
}

function renderProfile() {
  const av = initials();
  const navIds = ['prof-avatar', 'nav-av-home', 'nav-av-matches', 'nav-av-prog', 'nav-av-results'];
  navIds.forEach(id => {
    const elem = el(id);
    if (elem) elem.textContent = av;
  });
  
  const profName = el('prof-name');
  if (profName) profName.textContent = (profile.firstName || '') + ' ' + (profile.lastName || '');
  
  const profDiv = el('prof-div');
  if (profDiv) profDiv.textContent = (profile.division || '—') + ' · ' + (profile.club || '—');
  
  const profBadgePf = el('prof-badge-pf');
  if (profBadgePf) profBadgePf.textContent = profile.powerFactor ? cap(profile.powerFactor) : '—';
  
  const profBadgeRegion = el('prof-badge-region');
  if (profBadgeRegion) profBadgeRegion.textContent = profile.region || '—';
  
  // Update info fields
  const infoFields = {
    'info-firstname': profile.firstName || '—',
    'info-lastname': profile.lastName || '—',
    'info-division': profile.division || '—',
    'info-category': profile.category || '—',
    'info-pf': profile.powerFactor ? cap(profile.powerFactor) : '—',
    'info-region': profile.region || '—',
    'info-club': profile.club || '—'
  };
  
  Object.keys(infoFields).forEach(id => {
    const elem = el(id);
    if (elem) elem.textContent = infoFields[id];
  });
  
  updateProfileStats();
}

function updateProfileStats() {
  const uid = currentUserId();
  const ownResults = [];
  matches.forEach(match => {
    const shooter = match?.shooters?.find(s => s.isMe || (uid && s.id === uid));
    getShooterResults(shooter).forEach(stage => ownResults.push(stage));
  });
  let totalA = 0, totalHits = 0, totalHF = 0;
  ownResults.forEach(stage => {
    totalA += Number(stage.a || 0);
    totalHits += Number(stage.a || 0) + Number(stage.c || 0) + Number(stage.d || 0);
    totalHF += Number(stage.hf || 0);
  });
  const avgHF = ownResults.length ? (totalHF / ownResults.length).toFixed(2) : '—';
  const aRate = totalHits ? Math.round(totalA / totalHits * 100) + '%' : '—';
  const statMatches = el('stat-matches'); if (statMatches) statMatches.textContent = matches.length;
  const statStages = el('stat-stages'); if (statStages) statStages.textContent = ownResults.length;
  const statAvgHf = el('stat-avg-hf'); if (statAvgHf) statAvgHf.textContent = avgHF;
  const statARate = el('stat-a-rate'); if (statARate) statARate.textContent = aRate;
}

function openEditProfile() {
  el('edit-firstname').value = profile.firstName || '';
  el('edit-lastname').value = profile.lastName || '';
  el('edit-club').value = profile.club || '';
  el('edit-draw').value = profile.draw || '';
  el('edit-reload').value = profile.reloadTime || '';
  
  // Division dropdown
  let opts = '';
  DIVS.forEach(div => {
    opts += '<option value="' + div + '"' + (div === profile.division ? ' selected' : '') + '>' + div + '</option>';
  });
  el('edit-division').innerHTML = opts;
  
  // Category dropdown
  let catOpts = '';
  CATS.forEach(cat => {
    catOpts += '<option value="' + cat + '"' + (cat === profile.category ? ' selected' : '') + '>' + cat + '</option>';
  });
  el('edit-category').innerHTML = catOpts;
  
  // Region dropdown
  let regOpts = '';
  REGIONS.forEach(reg => {
    regOpts += '<option value="' + reg + '"' + (reg === profile.region ? ' selected' : '') + '>' + reg + '</option>';
  });
  el('edit-region').innerHTML = regOpts;
  
  updatePFOptions();
  openModal('modal-edit-profile');
}

function updatePFOptions() {
  const div = gv('edit-division');
  const allowed = DIV_PF[div] || ['minor', 'major'];
  
  let html = '';
  allowed.forEach(pf => {
    const isActive = profile.powerFactor === pf;
    html += '<label class="pf-option' + (isActive ? ' active' : '') + '" onclick="selectPF(this,\'' + pf + '\')">';
    html += '<input type="radio" name="pf" value="' + pf + '">';
    html += '<div class="pf-label">' + pf.toUpperCase() + '</div>';
    html += '<div class="pf-sub">' + (pf === 'major' ? '≥170 PF' : '<170 PF') + '</div>';
    html += '</label>';
  });
  
  el('pf-options').innerHTML = html;
  
  if (allowed.indexOf(profile.powerFactor) < 0) {
    profile.powerFactor = allowed[0];
  }
}

function selectPF(elem, pf) {
  document.querySelectorAll('.pf-option').forEach(opt => opt.classList.remove('active'));
  elem.classList.add('active');
  profile.powerFactor = pf;
}

async function saveProfileData() {
  profile.firstName = gv('edit-firstname').trim() || '';
  profile.lastName = gv('edit-lastname').trim() || '';
  profile.division = gv('edit-division') || '';
  profile.category = gv('edit-category') || '';
  profile.region = gv('edit-region') || '';
  profile.club = gv('edit-club').trim() || '';
  profile.draw = gnv('edit-draw') || null;
  profile.reloadTime = gnv('edit-reload') || null;
  
  // Save to Firestore
  const result = await saveUserProfile(profile);
  
  const btn = el('save-profile-btn');
  if (result.success) {
    btn.textContent = '✓ Lagret!';
    btn.style.background = 'var(--green)';
    setTimeout(() => {
      btn.textContent = t('save_profile');
      btn.style.background = '';
    }, 1800);
  } else {
    btn.textContent = '❌ Feil!';
    btn.style.background = 'var(--red)';
    setTimeout(() => {
      btn.textContent = t('save_profile');
      btn.style.background = '';
    }, 1800);
  }
  
  renderProfile();
  calcPrognose();
  renderHome();
  closeModal('modal-edit-profile');
}

function calcPrognose() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  const context = el('prog-match-context');
  const snap = el('snapshot-container');
  const stageList = el('prog-stage-list');
  if (!context || !snap || !stageList) return;
  if (!match) {
    context.innerHTML = '<div class="empty-state"><div class="empty-sub">Velg en match først</div></div>';
    snap.innerHTML = '';
    stageList.innerHTML = '';
    return;
  }
  reconcileStageDefs(match);
  const me = ensureMeShooter(match);
  const form = getFormForShooter(match, me);
  const compareMsg = buildWinMessage(match, me);
  context.innerHTML = '<div class="card"><div class="card-header"><div class="card-title">Skytterdata (snitt)</div><span class="badge badge-blue">Auto</span></div><div class="stats-grid"><div class="stat-block"><div class="stat-value">' + (form.timePerShot ? form.timePerShot.toFixed(3) + 's' : '—') + '</div><div class="stat-label">t/skudd</div></div><div class="stat-block"><div class="stat-value">' + (profile.draw || '—') + 's</div><div class="stat-label">Draw</div></div><div class="stat-block"><div class="stat-value">' + (profile.reloadTime || '—') + 's</div><div class="stat-label">Reload</div></div><div class="stat-block"><div class="stat-value">' + Math.round((form.aRate || 0) * 100) + '%</div><div class="stat-label">A-andel</div></div></div></div>';
  snap.innerHTML = '<div class="card"><div class="card-header"><div class="card-title">Refleksjon</div></div><div class="empty-sub" style="text-align:left;">' + compareMsg + '</div></div>';
  const defs = getStageDefs(match);
  stageList.innerHTML = defs.map(def => {
    const res = getStageResult(me, def.number);
    const projection = !res ? projectNextStage(match, me, def) : null;
    const nextStage = getNextUnshotStage(match, me);
    const advice = !res ? buildReflection(match, me, def, projection) : buildReflection(match, me, nextStage, projectNextStage(match, me, nextStage));
    const status = res ? '<span class="badge" style="background:rgba(34,197,94,.18);color:#4ade80;">SKUTT</span>' : '<span class="badge">IKKE SKUTT</span>';
    const ranking = (match.shooters || []).map(s => ({ shooter: s, result: getStageResult(s, def.number) })).filter(r => r.result).sort((a, b) => Number(b.result.hf || 0) - Number(a.result.hf || 0));
    const rows = ranking.length ? ranking.map((row, idx) => '<tr class="standings-row"><td class="standings-td standings-td-rank">' + (idx + 1) + '</td><td class="standings-td standings-td-shooter">' + row.shooter.firstName + ' ' + row.shooter.lastName + '</td><td class="standings-td standings-td-pts">' + Number(row.result.pts || 0).toFixed(1) + '</td><td class="standings-td standings-th-pct">' + Number(row.result.hf || 0).toFixed(2) + '</td></tr>').join('') : '<tr><td colspan="4" class="empty-sub">Ingen resultater ennå.</td></tr>';
    const stats = res
      ? '<div class="stats-grid"><div class="stat-block"><div class="stat-value">' + (stageShots(def) && res.time ? (res.time / stageShots(def)).toFixed(3) + 's' : '—') + '</div><div class="stat-label">t/skudd</div></div><div class="stat-block"><div class="stat-value">' + Math.round(((Number(res.a || 0)) / Math.max(1, Number(res.a || 0) + Number(res.c || 0) + Number(res.d || 0))) * 100) + '%A</div><div class="stat-label">Treff</div></div><div class="stat-block"><div class="stat-value">' + (projection ? projection.estHF.toFixed(2) : '—') + '</div><div class="stat-label">Est. HF neste</div></div></div>'
      : '<div class="stats-grid"><div class="stat-block"><div class="stat-value">' + (projection ? projection.estHF.toFixed(2) : '—') + '</div><div class="stat-label">Est. HF</div></div><div class="stat-block"><div class="stat-value">' + stageShots(def) + '</div><div class="stat-label">Skudd</div></div><div class="stat-block"><div class="stat-value">' + stageMaxPoints(def) + '</div><div class="stat-label">Maks pts</div></div></div>';
    return '<div class="card"><div class="card-header"><div class="card-title">' + def.name + '</div>' + status + '</div><div class="standings-table-wrap"><table class="standings-table"><thead><tr class="standings-header-row"><th class="standings-th standings-th-rank">#</th><th class="standings-th standings-th-shooter">Navn</th><th class="standings-th standings-th-pts">Pts</th><th class="standings-th standings-th-pct">HF</th></tr></thead><tbody>' + rows + '</tbody></table></div>' + stats + '<div class="card" style="margin-top:12px;background:rgba(232,184,75,.08);">' + advice + '</div></div>';
  }).join('');
}

async function addShooterHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) return;
  const firstName = gv('new-shooter-firstname').trim();
  const lastName = gv('new-shooter-lastname').trim();
  const division = gv('new-shooter-division') || 'Classic';
  if (!firstName || !lastName) {
    alert('Fyll inn navn');
    return;
  }
  const shooter = { id: 's_' + Date.now(), isMe: false, firstName, lastName, division, pf: 'minor', club: '', stages: [] };
  if (!match.shooters) match.shooters = [];
  match.shooters.push(shooter);
  const result = await updateMatchDB(match.id, reconcileStageDefs(match));
  if (!result.success) return alert('Kunne ikke lagre skytter: ' + result.error);
  closeModal('modal-add-shooter');
  renderResults();
  calcPrognose();
}

async function addStageResultHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) return;
  const shooterId = gv('new-result-shooter');
  const stageNum = gnvi('new-result-stage', 1);
  const time = gnv('new-result-time', 0);
  const a = gnvi('new-result-a', 0);
  const c = gnvi('new-result-c', 0);
  const d = gnvi('new-result-d', 0);
  const miss = gnvi('new-result-miss', 0);
  const ns = gnvi('new-result-ns', 0);
  const proc = gnvi('new-result-proc', 0);
  const shooter = match.shooters?.find(s => s.id === shooterId);
  if (!shooter) return alert('Velg skytter');
  const pf = shooter.pf || profile.powerFactor || 'minor';
  const pts = calcPoints(a, c, d, miss, ns, proc, pf);
  const hf = time > 0 ? pts / time : 0;
  const resultObj = { num: stageNum, name: 'Stage ' + stageNum, time, pts, hf, a, c, d, miss, ns, proc, pf };
  upsertShooterResult(match, shooterId, resultObj);
  const save = await updateMatchDB(match.id, reconcileStageDefs(match));
  if (!save.success) return alert('Kunne ikke lagre resultat: ' + save.error);
  closeModal('modal-add');
  renderHome();
  renderResults();
  calcPrognose();
}


function updateManualPoints() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  const shooter = match?.shooters?.find(s => s.id === gv('new-result-shooter')) || getCurrentShooter(match);
  const pf = shooter?.pf || profile?.powerFactor || 'minor';
  const pts = calcPoints(gnvi('new-result-a',0), gnvi('new-result-c',0), gnvi('new-result-d',0), gnvi('new-result-miss',0), gnvi('new-result-ns',0), gnvi('new-result-proc',0), pf);
  const pointsField = el('new-result-points');
  if (pointsField) pointsField.value = pts;
}

function openAddResultHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) return alert('Velg en match først');
  reconcileStageDefs(match);
  ensureMeShooter(match);
  populateShooterSelect('new-result-shooter', getCurrentShooter(match)?.id);
  populateStageSelect('new-result-stage', getNextUnshotStage(match, getCurrentShooter(match))?.number || getStageDefs(match)[0]?.number);
  ['new-result-time','new-result-a','new-result-c','new-result-d','new-result-miss','new-result-ns','new-result-proc'].forEach(id => { const field = el(id); if (field) field.value = field.id === 'new-result-time' ? '' : 0; });
  updateManualPoints();
  openModal('modal-add');
}

function openAddStageHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) return alert('Velg en match først');
  const nextNum = getStageDefs(match).length + 1;
  el('new-stage-name').value = `Stage ${nextNum}`;
  el('new-stage-shots').value = 12;
  el('new-stage-targets').value = 6;
  el('new-stage-steel').value = 0;
  el('new-stage-maxpoints').value = 60;
  openModal('modal-add-stage');
}

async function saveStageHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) return;
  const defs = getStageDefs(match);
  const nextNum = defs.length + 1;
  defs.push(buildStageDef(nextNum, {
    name: gv('new-stage-name') || `Stage ${nextNum}`,
    shots: gnvi('new-stage-shots', 12),
    targets: gnvi('new-stage-targets', 6),
    steel: gnvi('new-stage-steel', 0),
    maxPoints: gnvi('new-stage-maxpoints', 60)
  }));
  match.stages = defs;
  match.plannedStages = defs.length;
  const result = await updateMatchDB(match.id, match);
  if (!result.success) return alert('Kunne ikke lagre stage: ' + result.error);
  closeModal('modal-add-stage');
  renderHome();
  calcPrognose();
}

async function handleLogoutHandler() {
  if (matchUnsubscribe) matchUnsubscribe();
  if (currentMatchUnsubscribe) currentMatchUnsubscribe();
  
  await logout();
  window.location.reload();
}

// ════════════════════════════════════════════════════════════════════════════
// MATCH DROPDOWN FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

function toggleMatchDropdown(dropdownId) {
  const dropdown = el(dropdownId);
  if (!dropdown) return;
  
  const chip = dropdown.previousElementSibling;
  const isOpen = dropdown.classList.contains('open');
  
  // Close all dropdowns first
  document.querySelectorAll('.match-dropdown').forEach(dd => {
    dd.classList.remove('open');
  });
  document.querySelectorAll('.match-chip').forEach(ch => {
    ch.classList.remove('open');
  });
  
  // Toggle current dropdown
  if (!isOpen) {
    dropdown.classList.add('open');
    chip.classList.add('open');
    renderMatchDropdown(dropdownId);
  }
}

function selectMatchFromDropdown(matchId) {
  selectMatch(matchId);
  
  // Close all dropdowns
  document.querySelectorAll('.match-dropdown').forEach(dd => {
    dd.classList.remove('open');
  });
  document.querySelectorAll('.match-chip').forEach(ch => {
    ch.classList.remove('open');
  });
}

function renderMatchDropdown(dropdownId) {
  const dropdown = el(dropdownId);
  if (!dropdown) return;
  
  if (matches.length === 0) {
    dropdown.innerHTML = '<div class="match-dropdown-item" style="text-align:center;color:var(--muted);padding:20px;">Ingen matcher</div>';
    return;
  }
  
  let html = '';
  matches.forEach((match, index) => {
    const isActive = sameMatchId(match.id, activeMatchId);
    html += '<div class="match-dropdown-item' + (isActive ? ' active' : '') + '" onclick="selectMatchFromDropdown(\'' + match.id + '\')">';
    html += '<div class="match-dropdown-name">';
    html += 'Match ID ' + (index + 1) + ' ' + match.name;
    if (isActive) {
      html += '<span class="match-dropdown-active-indicator"></span>';
    }
    html += '</div>';
    html += '<div class="match-dropdown-meta">' + fmtDate(match.date) + ' · ' + (match.location || match.type) + '</div>';
    html += '</div>';
  });
  
  dropdown.innerHTML = html;
}

// ════════════════════════════════════════════════════════════════════════════
// EDIT/DELETE MATCH FUNCTIONS
// ════════════════════════════════════════════════════════════════════════════

function openEditMatchHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) {
    alert('Ingen match valgt');
    return;
  }
  reconcileStageDefs(match);
  el('edit-match-name').value = match.name || '';
  el('edit-match-date').value = match.date || '';
  el('edit-match-location').value = match.location || '';
  el('edit-match-type').value = match.type || 'Trening';
  el('edit-match-stages').value = Math.max(Number(match.plannedStages || 0), getStageDefs(match).length);
  const searchableCheckbox = el('edit-match-searchable');
  if (searchableCheckbox) searchableCheckbox.checked = match.searchable !== false;
  const finishedCheckbox = el('edit-match-finished');
  if (finishedCheckbox) finishedCheckbox.checked = match.status === 'finished';
  const deleteBtn = el('delete-match-btn');
  if (deleteBtn) deleteBtn.style.display = 'block';
  openModal('modal-edit-match');
}

async function saveEditMatchHandler() {
  const match = matches.find(m => sameMatchId(m.id, activeMatchId));
  if (!match) {
    alert('Ingen match valgt');
    return;
  }
  const searchableCheckbox = el('edit-match-searchable');
  const finishedCheckbox = el('edit-match-finished');
  const plannedStages = gnvi('edit-match-stages', match.plannedStages);
  const defs = getStageDefs(match);
  while (defs.length < plannedStages) defs.push(buildStageDef(defs.length + 1));
  const updates = {
    name: gv('edit-match-name') || match.name,
    type: gv('edit-match-type') || match.type,
    date: gv('edit-match-date') || match.date,
    location: gv('edit-match-location') || match.location,
    plannedStages,
    searchable: searchableCheckbox ? searchableCheckbox.checked : true,
    status: finishedCheckbox && finishedCheckbox.checked ? 'finished' : 'active',
    stages: defs
  };
  const result = await updateMatchDB(match.id, updates);
  if (result.success) {
    closeModal('modal-edit-match');
    renderHome();
    renderMatchList();
    calcPrognose();
  } else {
    alert('Kunne ikke oppdatere match: ' + result.error);
  }
}

function confirmDeleteMatchHandler() {
  const match = matches.find(m => m.id === activeMatchId);
  if (!match) {
    alert('Ingen match valgt');
    return;
  }
  
  const matchName = match.id ? 'Match ID ' + match.id + ' ' + match.name : match.name;
  el('delete-match-name').textContent = matchName;
  
  openModal('modal-confirm-delete');
}

async function deleteMatchConfirmedHandler() {
  const match = matches.find(m => m.id === activeMatchId);
  if (!match) {
    alert('Ingen match valgt');
    return;
  }
  
  const result = await deleteMatchDB(match.id);
  
  if (result.success) {
    closeModal('modal-confirm-delete');
    closeModal('modal-edit-match');
    activeMatchId = null;
    renderHome();
    renderMatchList();
    alert('Match slettet');
  } else {
    alert('Kunne ikke slette match: ' + result.error);
  }
}
