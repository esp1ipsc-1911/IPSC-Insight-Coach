// ════════════════════════════════════════════════════════════════════════════
// TRANSLATIONS - Complete bilingual system using official IPSC terminology
// ════════════════════════════════════════════════════════════════════════════

const LANG = {
  no: {
    // Login & Auth
    tracker:'INSIGHT',
    tagline:'Analyse. Prognose. Resultat.',
    email:'E-post',
    password:'Passord',
    login:'Logg inn',
    or:'eller',
    continue_github:'Fortsett med GitHub',
    continue_apple:'Fortsett med Apple',
    
    // Navigation
    home:'Hjem',
    matches:'Matcher',
    prognosis:'Prognose',
    results:'Live',
    profile:'Profil',
    
    // Status & Position
    leading:'LEDER',
    behind:'BAK',
    active:'Aktiv',
    
    // Actions
    add:'Legg til',
    edit:'Rediger',
    delete:'Slett',
    save:'Lagre',
    cancel:'Avbryt',
    close:'Lukk',
    search:'Søk',
    filter:'Filter',
    all:'Alle',
    
    // Match UI
    new_match:'Ny match',
    active_match:'Aktiv match',
    match_name:'Matchnavn',
    location:'Sted',
    date:'Dato',
    type:'Type',
    planned_stages:'Planlagte stages',
    select_match:'Velg match',
    no_match_selected:'Ingen match valgt',
    select_or_create_match:'Velg eller opprett en match',
    tap_for_matches_tab:'Trykk for Matcher-fanen',
    
    // Stage UI
    add_stage:'Legg til stage',
    stage_name:'Stagenavn',
    stage_overview:'Stage-oversikt',
    stage_results:'Stage-resultater',
    press_plus_to_add_results:'Trykk + for å legge inn resultater etter hvert som du skyter',
    press_plus_first_result:'Trykk + for å legge til første resultat',
    
    // Measurements
    rounds:'Skudd',
    time:'Tid',
    scoring_hits:'Treff',
    paper:'skiver',
    max:'Max',
    total:'Totalt',
    avg:'Snitt',
    
    // Scoring & Stats
    points:'poeng',
    total_points:'poeng totalt',
    total_pts:'Total pts',
    pts:'pts',
    avg_hf:'Snitt HF',
    best_hf:'Best HF',
    a_rate:'A-andel',
    hf_per_stage:'HF per stage',
    performance:'Ytelse',
    progress:'Fremgang',
    matches_count:'Matcher',
    stages_count:'Stages',
    
    // Prognosis
    draw_time:'Trekk',
    reload_time:'Reload',
    shot_time:'Skuddtid',
    target_hf:'Target HF',
    estimated_hf:'Estimert HF',
    calculate:'Beregn',
    
    // Profile
    first_name:'Fornavn',
    last_name:'Etternavn',
    club:'Klubb',
    region:'Region',
    category:'Kategori',
    
    // Coaching Advice
    extremely_close:'Ekstremt jevnt!',
    very_close:'Svært jevnt!',
    quite_close:'Meget jevnt!',
    pretty_close:'Veldig jevnt',
    close:'Jevnt',
    stay_calm:'Hold deg rolig',
    keep_rhythm:'Hold rytmen',
    focus_process:'Fokuser på prosess',
    maintain_a_rate:'Behold A-raten',
    keep_normal_rhythm:'hold normal rytme',
    avoid_stress:'unngå stress',
    slight_pressure:'presse litt over vanlig',
    realistic_assessment:'realistisk vurdering',
    perfect_execution_required:'krever perfekt gjennomføring',
    good_margin:'god margin',
    average_achieve:'gjennomsnittlig oppnå',
    to_win:'for å ta',
    remaining:'gjenstår',
    per_stage:'per stage',
    
    // Empty States
    no_matches:'Ingen matcher ennå',
    no_stages:'Ingen stages ennå',
    add_first_match:'Legg til din første match',
    no_results:'Ingen resultater',
    no_search_results:'Ingen treff',
    
    // Buttons & Actions
    start_shooting:'Begynn å skyte',
    register_stage:'Registrer stage',
    register_match:'Registrer match',
    
    // Misc
    advice:'Råd',
    details:'Detaljer',
    overview:'Oversikt',
    statistics:'Statistikk',
    settings:'Innstillinger',
    logout:'Logg ut',
    rank:'Plassering',
    shooter:'Skytt',
    import:'Import',
    export:'Eksport',
    paste_data:'Lim inn data',
    select_power_factor:'Velg Power Factor',
    
    // Additional UI elements
    new_match:'Ny match',
    add_result:'Legg til resultat',
    add_shooter:'Legg til skytter',
    edit_profile:'Rediger profil',
    save_result:'Lagre resultat',
    save_shooter:'Lagre skytter',
    save_profile:'Save Profil',
    shots:'Skudd',
    targets:'Skiver',
    steel:'Stål',
    move_seconds:'Beveg. (s)',
    draw_seconds:'Trekk (s)',
    reload_seconds:'Reload (s)',
    type:'Type',
    match_name:'Matchnavn',
    stages_added_later:'Stages legges til etter hvert',
    match_types_stevne:'Stevne',
    match_types_trening:'Trening',
    match_types_klubbmatch:'Klubbmatch',
    match_types_landsmesterskap:'Landsmesterskap',
    match_types_internasjonalt:'Internasjonalt',
  },
  
  en: {
    // Login & Auth
    tracker:'INSIGHT',
    tagline:'Analysis. Forecast. Results.',
    email:'Email',
    password:'Password',
    login:'Log in',
    or:'or',
    continue_github:'Continue with GitHub',
    continue_apple:'Continue with Apple',
    
    // Navigation
    home:'Home',
    matches:'Matches',
    prognosis:'Forecast',
    results:'Live',
    profile:'Profile',
    
    // Status & Position
    leading:'LEADING',
    behind:'BEHIND',
    active:'Active',
    
    // Actions
    add:'Add',
    edit:'Edit',
    delete:'Delete',
    save:'Save',
    cancel:'Cancel',
    close:'Close',
    search:'Search',
    filter:'Filter',
    all:'All',
    
    // Match UI
    new_match:'New Match',
    active_match:'Active Match',
    match_name:'Match Name',
    location:'Location',
    date:'Date',
    type:'Type',
    planned_stages:'Planned Stages',
    select_match:'Select match',
    no_match_selected:'No match selected',
    select_or_create_match:'Select or create a match',
    tap_for_matches_tab:'Tap for Matches tab',
    
    // Stage UI
    add_stage:'Add Stage',
    stage_name:'Stage Name',
    stage_overview:'Stage Overview',
    stage_results:'Stage Results',
    press_plus_to_add_results:'Press + to add results as you shoot',
    press_plus_first_result:'Press + to add first result',
    
    // Measurements
    rounds:'Rounds',
    time:'Time',
    scoring_hits:'Hits',
    paper:'targets',
    max:'Max',
    total:'Total',
    avg:'Avg',
    
    // Scoring & Stats
    points:'points',
    total_points:'total points',
    total_pts:'Total pts',
    pts:'pts',
    avg_hf:'Avg HF',
    best_hf:'Best HF',
    a_rate:'A-rate',
    hf_per_stage:'HF per Stage',
    performance:'Performance',
    progress:'Progress',
    matches_count:'Matches',
    stages_count:'Stages',
    
    // Prognosis
    draw_time:'Draw',
    reload_time:'Reload',
    shot_time:'Shot Time',
    target_hf:'Target HF',
    estimated_hf:'Estimated HF',
    calculate:'Calculate',
    
    // Profile
    first_name:'First Name',
    last_name:'Last Name',
    club:'Club',
    region:'Region',
    category:'Category',
    
    // Coaching Advice
    extremely_close:'Extremely close!',
    very_close:'Very close!',
    quite_close:'Quite close!',
    pretty_close:'Pretty close',
    close:'Close',
    stay_calm:'Stay calm',
    keep_rhythm:'Keep rhythm',
    focus_process:'Focus on process',
    maintain_a_rate:'Maintain A-rate',
    keep_normal_rhythm:'keep normal rhythm',
    avoid_stress:'avoid stress',
    slight_pressure:'push slightly over normal',
    realistic_assessment:'realistic assessment',
    perfect_execution_required:'requires perfect execution',
    good_margin:'good margin',
    average_achieve:'average achieve',
    to_win:'to win',
    remaining:'remaining',
    per_stage:'per stage',
    
    // Empty States
    no_matches:'No matches yet',
    no_stages:'No stages yet',
    add_first_match:'Add your first match',
    no_results:'No results',
    no_search_results:'No results found',
    
    // Buttons & Actions
    start_shooting:'Start Shooting',
    register_stage:'Register Stage',
    register_match:'Register Match',
    
    // Misc
    advice:'Advice',
    details:'Details',
    overview:'Overview',
    statistics:'Statistics',
    settings:'Settings',
    logout:'Log out',
    rank:'Rank',
    shooter:'Shooter',
    import:'Import',
    export:'Export',
    paste_data:'Paste data',
    select_power_factor:'Select Power Factor',
    
    // Additional UI elements
    new_match:'New Match',
    add_result:'Add Result',
    add_shooter:'Add Shooter',
    edit_profile:'Edit Profile',
    save_result:'Save Result',
    save_shooter:'Save Shooter',
    save_profile:'Save Profile',
    shots:'Shots',
    targets:'Targets',
    steel:'Steel',
    move_seconds:'Move. (s)',
    draw_seconds:'Draw (s)',
    reload_seconds:'Reload (s)',
    type:'Type',
    match_name:'Match Name',
    stages_added_later:'Stages will be added later',
    match_types_stevne:'Competition',
    match_types_trening:'Training',
    match_types_klubbmatch:'Club Match',
    match_types_landsmesterskap:'Nationals',
    match_types_internasjonalt:'International',
  }
};

let currentLang='no';
function t(key){return LANG[currentLang][key]||key;}
function setLanguage(lang){
  currentLang=lang;
  localStorage.setItem('ipsc_lang',lang);
  document.querySelectorAll('.lang-flag').forEach(f=>f.classList.toggle('active',f.dataset.lang===lang));
  document.documentElement.lang=lang==='no'?'no':'en';
  // Update ALL static UI elements with lang-* classes
  document.querySelectorAll('.lang-home').forEach(e=>e.textContent=t('home'));
  document.querySelectorAll('.lang-matches').forEach(e=>e.textContent=t('matches'));
  document.querySelectorAll('.lang-prognosis').forEach(e=>e.textContent=t('prognosis'));
  document.querySelectorAll('.lang-results').forEach(e=>e.textContent=t('results'));
  document.querySelectorAll('.lang-profile').forEach(e=>e.textContent=t('profile'));
  document.querySelectorAll('.lang-tagline').forEach(e=>e.textContent=t('tagline'));
  document.querySelectorAll('.lang-tracker').forEach(e=>e.textContent=t('tracker'));
  document.querySelectorAll('.lang-email').forEach(e=>e.textContent=t('email'));
  document.querySelectorAll('.lang-password').forEach(e=>e.textContent=t('password'));
  document.querySelectorAll('.lang-login').forEach(e=>e.textContent=t('login'));
  document.querySelectorAll('.lang-or').forEach(e=>e.textContent=t('or'));
  document.querySelectorAll('.lang-continue_apple').forEach(e=>e.textContent=t('continue_apple'));
  document.querySelectorAll('.lang-continue_github').forEach(e=>e.textContent=t('continue_github'));
  // Modal titles
  document.querySelectorAll('.lang-new_match').forEach(e=>e.textContent=t('new_match'));
  document.querySelectorAll('.lang-add_result').forEach(e=>e.textContent=t('add_result'));
  document.querySelectorAll('.lang-add_shooter').forEach(e=>e.textContent=t('add_shooter'));
  document.querySelectorAll('.lang-edit_profile').forEach(e=>e.textContent=t('edit_profile'));
  // Buttons
  document.querySelectorAll('.lang-save_result').forEach(e=>e.textContent=t('save_result'));
  document.querySelectorAll('.lang-save_shooter').forEach(e=>e.textContent=t('save_shooter'));
  document.querySelectorAll('.lang-save_profile').forEach(e=>e.textContent=t('save_profile'));
  // Field labels & misc
  document.querySelectorAll('.lang-match_name').forEach(e=>e.textContent=t('match_name'));
  document.querySelectorAll('.lang-type').forEach(e=>e.textContent=t('type'));
  document.querySelectorAll('.lang-date').forEach(e=>e.textContent=t('date'));
  document.querySelectorAll('.lang-location').forEach(e=>e.textContent=t('location'));
  document.querySelectorAll('.lang-stages_added_later').forEach(e=>e.textContent=t('stages_added_later'));
  // Match types
  document.querySelectorAll('.lang-match_types_stevne').forEach(e=>e.textContent=t('match_types_stevne'));
  document.querySelectorAll('.lang-match_types_trening').forEach(e=>e.textContent=t('match_types_trening'));
  document.querySelectorAll('.lang-match_types_klubbmatch').forEach(e=>e.textContent=t('match_types_klubbmatch'));
  document.querySelectorAll('.lang-match_types_landsmesterskap').forEach(e=>e.textContent=t('match_types_landsmesterskap'));
  document.querySelectorAll('.lang-match_types_internasjonalt').forEach(e=>e.textContent=t('match_types_internasjonalt'));
  // Prognose labels
  document.querySelectorAll('.lang-shots').forEach(e=>e.textContent=t('shots'));
  document.querySelectorAll('.lang-targets').forEach(e=>e.textContent=t('targets'));
  document.querySelectorAll('.lang-steel').forEach(e=>e.textContent=t('steel'));
  document.querySelectorAll('.lang-move_seconds').forEach(e=>e.textContent=t('move_seconds'));
  document.querySelectorAll('.lang-draw_seconds').forEach(e=>e.textContent=t('draw_seconds'));
  document.querySelectorAll('.lang-reload_seconds').forEach(e=>e.textContent=t('reload_seconds'));
  // Profile/Shooter fields
  document.querySelectorAll('.lang-first_name').forEach(e=>e.textContent=t('first_name'));
  document.querySelectorAll('.lang-last_name').forEach(e=>e.textContent=t('last_name'));
  document.querySelectorAll('.lang-club').forEach(e=>e.textContent=t('club'));
  document.querySelectorAll('.lang-region').forEach(e=>e.textContent=t('region'));
  document.querySelectorAll('.lang-category').forEach(e=>e.textContent=t('category'));
  document.querySelectorAll('.lang-select_power_factor').forEach(e=>e.textContent=t('select_power_factor'));
  // Stats labels
  document.querySelectorAll('.lang-matches_count').forEach(e=>e.textContent=t('matches_count'));
  document.querySelectorAll('.lang-stages_count').forEach(e=>e.textContent=t('stages_count'));
  document.querySelectorAll('.lang-avg_hf').forEach(e=>e.textContent=t('avg_hf'));
  document.querySelectorAll('.lang-a_rate').forEach(e=>e.textContent=t('a_rate'));
  // Re-render dynamic content
  renderHome();renderMatchList();renderResults();renderProfile();calcPrognose();
}
function initLanguage(){
  const saved=localStorage.getItem('ipsc_lang');
  if(saved&&(saved==='no'||saved==='en'))setLanguage(saved);
}
window.addEventListener('DOMContentLoaded',initLanguage);

// ── IPSC RULES ──
var SCORE={major:{A:5,C:4,D:2,miss:-10,ns:-10,proc:-10},minor:{A:5,C:3,D:1,miss:-10,ns:-10,proc:-10}};
// Magazine capacity per division/PF (IPSC rules)
var MAG_CAP={
  'Standard':       {minor:21,major:21},
  'Open':           {minor:28,major:28},
  'Production':     {minor:15,major:15},
  'Production Optics':{minor:15,major:15},
  'Production Optics Carbine':{minor:15,major:15},
  'Classic':        {minor:10,major:8},
  'Revolver':       {minor:8, major:6},
  'Pistol Caliber Carbine':{minor:30,major:30},
  'Pistol Caliber Carbine Optics':{minor:30,major:30}
};
function getMagCap(div,pf){var d=MAG_CAP[div];if(!d)return 15;return d[pf]||d.minor||15;}
function calcReloads(shots,div,pf){return Math.max(0,Math.ceil(shots/getMagCap(div,pf))-1);}
function calcShotTime(totalTime,draw,reloadT,shots,div,pf){
  var r=calcReloads(shots,div,pf);
  var net=totalTime-draw-r*reloadT;
  return shots>0?net/shots:0;
}
var DIVS=['Standard','Open','Production','Production Optics','Production Optics Carbine','Classic','Revolver','Pistol Caliber Carbine','Pistol Caliber Carbine Optics'];
var DIV_PF={Standard:['minor','major'],Open:['minor','major'],Production:['minor'],'Production Optics':['minor'],'Production Optics Carbine':['minor'],Classic:['minor','major'],Revolver:['minor','major'],'Pistol Caliber Carbine':['minor','major'],'Pistol Caliber Carbine Optics':['minor','major']};
var CATS=['—','Junior','Senior','Super Senior','Lady','Lady Junior','Lady Senior'];
var REGIONS=['Norge','Sverige','Danmark','Finland','Tyskland','Storbritannia','USA','Annet'];

function calcPoints(a,c,d,miss,ns,proc,pf){var t=SCORE[pf]||SCORE.minor;return(a*t.A)+(c*t.C)+(d*t.D)+(miss*t.miss)+(ns*t.ns)+((proc||0)*t.proc);}
function cap(s){return s.charAt(0).toUpperCase()+s.slice(1);}
function fmtDate(d){if(!d)return'';try{const locale=currentLang==='no'?'nb-NO':'en-US';return new Date(d).toLocaleDateString(locale,{day:'numeric',month:'short',year:'numeric'});}catch(e){return d;}}
function el(id){return document.getElementById(id);}
function gv(id){var e=el(id);return e?e.value:'';}
function gnv(id,def){var v=parseFloat(gv(id));return isNaN(v)?(def||0):v;}
function gnvi(id,def){var v=parseInt(gv(id));return isNaN(v)?(def||0):v;}

// ── STATE ──
var profile={firstName:'Espen',lastName:'Fiskebeck',division:'Classic',category:'—',powerFactor:'minor',region:'Norge',club:'NOP',draw:1.42,reloadTime:1.80};
var activeMatchId='m1';
var matchFilterVal='all';
var shooterStageCount=0;

var matches=[
  {id:'today',name:'Dagens match 2026',date:'2026-03-28',type:'Stevne',location:'',plannedStages:6,
   stages:[
     {num:1,name:'Sideline',          hf:5.7143,time:14.00,pts:80, a:13,c:5,d:0,miss:0,ns:0,proc:0,pf:'minor'},
     {num:2,name:"Up's I Did It Again",hf:5.1668,time:9.29, pts:48, a:9, c:1,d:0,miss:0,ns:0,proc:0,pf:'minor'},
     {num:3,name:'In N Out',           hf:6.1224,time:8.82, pts:54, a:9, c:3,d:0,miss:0,ns:0,proc:0,pf:'minor'},
     {num:4,name:"Peter Pan's Adventure",hf:4.9127,time:15.47,pts:76,a:14,c:2,d:0,miss:0,ns:0,proc:0,pf:'minor'},
     {num:5,name:"Don't Miss",         hf:2.6037,time:22.66,pts:59,a:14,c:3,d:0,miss:1,ns:1,proc:0,pf:'minor'},
     {num:6,name:'GO(A)T SPEED?',      hf:5.0067,time:29.96,pts:150,a:27,c:5,d:0,miss:0,ns:0,proc:0,pf:'minor'}
   ],
   shooters:[
     {id:'s_me',isMe:true,firstName:'Espen',lastName:'Fiskebeck',division:'Classic',pf:'minor',club:'NOP',
      stages:[
        {num:1,hf:5.7143,time:14.00,pts:80, pf:'minor'},
        {num:2,hf:5.1668,time:9.29, pts:48, pf:'minor'},
        {num:3,hf:6.1224,time:8.82, pts:54, pf:'minor'},
        {num:4,hf:4.9127,time:15.47,pts:76, pf:'minor'},
        {num:5,hf:2.6037,time:22.66,pts:59, pf:'minor'},
        {num:6,hf:5.0067,time:29.96,pts:150,pf:'minor'}
      ]},
     {id:'s_henrik',isMe:false,firstName:'Henrik',lastName:'Johansen',division:'Classic',pf:'minor',club:'NOP',draw:1.42,reloadTime:1.80,
      stages:[
        {num:1,hf:3.1564,time:13.94,pts:44,pf:'minor'},
        {num:2,hf:7.7206,time:5.44, pts:42,pf:'minor'},
        {num:3,hf:7.3491,time:7.62, pts:56,pf:'minor'},
        {num:4,hf:3.9360,time:16.26,pts:64,pf:'minor'},
        {num:5,hf:4.4153,time:16.76,pts:74,pf:'minor'},
        {num:6,hf:4.7531,time:27.14,pts:129,pf:'minor'}
      ]}
   ],
   stageDefs:[
     {num:1,name:'Sideline',maxPts:90,rounds:18,paper:8,poppers:2,plates:0},
     {num:2,name:"Up's I Did It Again",maxPts:50,rounds:10,paper:5,poppers:0,plates:0},
     {num:3,name:'In N Out',maxPts:60,rounds:12,paper:4,poppers:4,plates:0},
     {num:4,name:"Peter Pan's Adventure",maxPts:80,rounds:16,paper:7,poppers:2,plates:0},
     {num:5,name:"Don't Miss",maxPts:90,rounds:18,paper:7,poppers:4,plates:0},
     {num:6,name:'GO(A)T SPEED?',maxPts:160,rounds:32,paper:16,poppers:0,plates:0}
   ]},
  {id:'m1',name:'Bergen Open 2025',date:'2025-11-19',type:'Stevne',location:'Bergen',plannedStages:6,
   stages:[
     {num:4,name:'Hjemme Alene 1',hf:3.9942,time:13.77,pts:55,a:9,c:3,d:1,miss:0,ns:0,proc:0,pf:'minor'},
     {num:5,name:'Hjemme Alene 2',hf:6.8111,time:6.46,pts:44,a:8,c:1,d:1,miss:0,ns:0,proc:0,pf:'minor'},
     {num:6,name:'Hjemme Alene 3',hf:5.4187,time:26.39,pts:143,a:28,c:1,d:0,miss:0,ns:0,proc:0,pf:'minor'}
   ],
   shooters:[
     {id:'s1',isMe:true,firstName:'Espen',lastName:'Fiskebeck',division:'Standard',pf:'minor',club:'DSSNPistol',
      stages:[{num:4,hf:3.9942,time:13.77,pts:55,pf:'minor'},{num:5,hf:6.8111,time:6.46,pts:44,pf:'minor'},{num:6,hf:5.4187,time:26.39,pts:143,pf:'minor'}]},
     {id:'s2',isMe:false,firstName:'Jan Stian',lastName:'Fiskerstrand',division:'Standard',pf:'minor',club:'NOP',
      stages:[{num:4,hf:2.3121,time:17.30,pts:40,pf:'minor'},{num:5,hf:5.1200,time:8.60,pts:44,pf:'minor'},{num:6,hf:4.2000,time:30.00,pts:126,pf:'minor'}]},
     {id:'s3',isMe:false,firstName:'Andreas',lastName:'Kjøniksen',division:'Standard',pf:'minor',club:'HPI',
      stages:[{num:4,hf:1.5625,time:16.64,pts:26,pf:'minor'},{num:5,hf:4.8000,time:9.20,pts:44,pf:'minor'}]}
   ]},
  {id:'m2',name:'NM 2025',date:'2025-08-15',type:'Landsmesterskap',location:'Oslo',plannedStages:8,stages:[],shooters:[]},
  {id:'m4',name:'Vintercup 2024',date:'2024-12-07',type:'Stevne',location:'Stavanger',plannedStages:5,
   stages:[{num:1,name:'Stage 1',hf:3.88,time:12.50,pts:48,a:8,c:2,d:0,miss:0,ns:0,proc:0,pf:'minor'},{num:2,name:'Stage 2',hf:5.12,time:8.80,pts:45,a:8,c:1,d:1,miss:0,ns:0,proc:0,pf:'minor'}],shooters:[]}
];
var activeMatchId='today';

function activeMatch(){for(var i=0;i<matches.length;i++){if(matches[i].id===activeMatchId)return matches[i];}return null;}
function initials(){return(profile.firstName[0]||'')+(profile.lastName[0]||'');}

// ── IPSC COMSTOCK SCORING ──
function stageWinnerHF(stageNum,shooters){var max=0;for(var i=0;i<shooters.length;i++){var stg=findStage(shooters[i].stages,stageNum);if(stg&&stg.hf>max)max=stg.hf;}return max||1;}
function getStageMaxPts(stageNum){
  // Use stageDefs from active match if available
  var m=activeMatch();
  if(m&&m.stageDefs){var def=findStage(m.stageDefs,stageNum);if(def&&def.maxPts)return def.maxPts;}
  return null;
}
function shooterStageMatchPts(shooter,stageNum,shooters){
  var stg=findStage(shooter.stages,stageNum);if(!stg||!stg.hf)return 0;
  var winHF=stageWinnerHF(stageNum,shooters);
  // IPSC Rule 9.2.1.1: stage pts = (myHF/winnerHF) × stage MAX pts
  var maxPts=getStageMaxPts(stageNum);
  if(!maxPts){// fallback: use winner's actual pts
    for(var i=0;i<shooters.length;i++){var s=findStage(shooters[i].stages,stageNum);if(s&&s.hf>=winHF){maxPts=s.pts||0;break;}}
  }
  return(stg.hf/winHF)*(maxPts||stg.pts||1);
}
function shooterTotalMatchPts(shooter,shooters){var sum=0;for(var i=0;i<shooter.stages.length;i++)sum+=shooterStageMatchPts(shooter,shooter.stages[i].num,shooters);return sum;}
function shooterMatchPct(shooter,shooters){
  // Match% = my total match pts / leader's total match pts × 100
  var myPts=shooterTotalMatchPts(shooter,shooters);
  var topPts=0;
  for(var i=0;i<shooters.length;i++){
    var p=shooterTotalMatchPts(shooters[i],shooters);
    if(p>topPts)topPts=p;
  }
  return topPts>0?myPts/topPts*100:0;
}
function shooterAvgHF(shooter){var stgs=shooter.stages;if(!stgs.length)return 0;var sum=0;for(var i=0;i<stgs.length;i++)sum+=stgs[i].hf;return sum/stgs.length;}
function shooterEstNextHF(shooter){var stgs=shooter.stages;if(!stgs.length)return 0;var recent=stgs.slice(-3);var rs=0;for(var i=0;i<recent.length;i++)rs+=recent[i].hf;var as=0;for(var i=0;i<stgs.length;i++)as+=stgs[i].hf;return(rs/recent.length)*0.6+(as/stgs.length)*0.4;}
function findStage(stages,num){for(var i=0;i<stages.length;i++){if(stages[i].num===num)return stages[i];}return null;}

// ── NAVIGATION ──
function navigate(id){
  var screens=document.querySelectorAll('.screen');
  for(var i=0;i<screens.length;i++)screens[i].classList.remove('active');
  el(id).classList.add('active');
  window.scrollTo(0,0);
}
function switchTab(id){
  navigate(id);
  var allBars=document.querySelectorAll('.tab-bar');
  for(var b=0;b<allBars.length;b++){
    var items=allBars[b].querySelectorAll('.tab-item');
    for(var i=0;i<items.length;i++){
      items[i].classList.remove('active');
      var oc=items[i].getAttribute('onclick')||'';
      if(oc.indexOf(id)>=0)items[i].classList.add('active');
    }
  }
  if(id==='screen-home')renderHome();
  if(id==='screen-matches')renderMatchList();
  if(id==='screen-prognose'){calcPrognose();renderPrognoseHistory();renderPrognoseContext();renderSnapshots();renderForward();renderRivals();}
  if(id==='screen-results')renderResults();
  if(id==='screen-profile')renderProfile();
}

// ── HOME ──
function renderHome(){
  var m=activeMatch();
  el('home-chip-name').textContent=m?m.name:t('no_match_selected');
  var content=el('home-content');
  if(!m){
    content.innerHTML='<div class="no-match-banner" onclick="switchTab(\'screen-matches\')">'
      +'<div style="font-size:26px">&#127942;</div>'
      +'<div class="nmb-text"><div class="nmb-title">'+t('select_or_create_match')+'</div><div class="nmb-sub">'+t('tap_for_matches_tab')+'</div></div>'
      +'<span style="color:var(--accent);font-size:18px">&#8250;</span></div>';
    return;
  }
  var s=m.stages;
  var maxHF=s.length?Math.max.apply(null,s.map(function(r){return r.hf;})):1;
  var totalA=0,totalHits=0;
  for(var i=0;i<s.length;i++){totalA+=s[i].a;totalHits+=s[i].a+s[i].c+s[i].d;}
  var avgHF=s.length?(s.reduce(function(x,r){return x+r.hf;},0)/s.length).toFixed(4):'—';
  var aRate=totalHits?Math.round(totalA/totalHits*100)+'%':'—';
  var progress=m.plannedStages>0?Math.min(100,Math.round(s.length/m.plannedStages*100)):null;

  var html='<div style="background:linear-gradient(135deg,var(--card),var(--bg3));border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:12px">'
    +'<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">'
    +'<div><div class="mhc-name">'+m.name+'</div><div class="mhc-meta">'+fmtDate(m.date)+' · '+m.type+(m.location?' · '+m.location:'')+'</div></div>'
    +'<span class="badge badge-gold">'+profile.division+'</span></div>'
    +'<div class="mhc-stats">'
    +'<div><div class="mhc-val">'+s.length+(m.plannedStages>0?'/'+m.plannedStages:'')+'</div><div class="mhc-lbl">'+t('stages')+'</div></div>'
    +'<div><div class="mhc-val">'+avgHF+'</div><div class="mhc-lbl">'+t('avg_hf')+'</div></div>'
    +'<div><div class="mhc-val">'+aRate+'</div><div class="mhc-lbl">'+t('a_rate')+'</div></div>'
    +'</div>';
  if(progress!==null){
    html+='<div style="margin-top:12px"><div style="display:flex;justify-content:space-between;font-size:11px;color:var(--muted);margin-bottom:5px"><span>'+t('progress')+'</span><span style="color:var(--accent)">'+progress+'%</span></div>'
      +'<div class="progress-bar"><div class="progress-fill fill-gold" style="width:'+progress+'%"></div></div></div>';
  }
  html+='</div>';

  if(s.length===0){
    var defs=m.stageDefs||[];
    if(defs.length){
      html+='<div class="section-title">'+t('stage_overview')+'</div>';
      html+='<div style="background:rgba(232,184,75,.07);border:1px solid rgba(232,184,75,.15);border-radius:var(--radius-sm);padding:10px 12px;margin-bottom:12px;font-size:12px;color:var(--muted)">'+t('press_plus_to_add_results')+'</div>';
      html+='<div class="card" style="padding:4px 16px">';
      for(var di=0;di<defs.length;di++){
        var d=defs[di];
        html+='<div class="stage-row">'
          +'<div class="stage-num">'+d.num+'</div>'
          +'<div class="stage-info">'
          +'<div class="stage-name">'+d.name+'</div>'
          +'<div class="stage-meta">'+d.rounds+' '+t('rounds')+' · '+d.paper+' '+t('paper')+' · '+d.poppers+' poppers · '+t('max')+' '+d.maxPts+' '+t('pts')+'</div>'
          +'</div>'
          +'<div style="font-family:Rajdhani,sans-serif;font-size:14px;font-weight:700;color:var(--muted)">'+d.maxPts+'p</div>'
          +'</div>';
      }
      html+='</div>';
      var totalPts=0,totalRounds=0;
      for(var di=0;di<defs.length;di++){totalPts+=defs[di].maxPts;totalRounds+=defs[di].rounds;}
      html+='<div class="card"><div style="display:flex;justify-content:space-between;align-items:center">'
        +'<span style="font-weight:600">'+t('total')+'</span>'
        +'<span style="font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;color:var(--accent)">'+totalPts+' '+t('pts')+' · '+totalRounds+' '+t('rounds')+'</span>'
        +'</div></div>';
    } else {
      html+='<div class="empty-state"><div class="empty-icon">&#127919;</div><div class="empty-title">'+t('no_stages')+'</div><div class="empty-sub">'+t('press_plus_first_result')+'</div></div>';
    }
  } else {
    html+='<div class="card"><div class="card-header"><div class="card-title">'+t('performance')+'</div></div>'
      +'<div class="stats-grid">'
      +'<div class="stat-block"><div class="stat-value">'+avgHF+'</div><div class="stat-label">'+t('avg_hf')+'</div></div>'
      +'<div class="stat-block"><div class="stat-value">'+aRate+'</div><div class="stat-label">'+t('a_rate')+'</div></div>'
      +'<div class="stat-block"><div class="stat-value">'+s.reduce(function(x,r){return x+r.miss;},0)+'</div><div class="stat-label">'+t('miss')+'</div></div>'
      +'<div class="stat-block"><div class="stat-value">'+s.reduce(function(x,r){return x+r.pts;},0)+'</div><div class="stat-label">'+t('total_pts')+'</div></div>'
      +'</div>'
      +'<div class="section-label" style="margin-top:14px">'+t('hf_per_stage')+'</div>'
      +'<div class="mini-chart">';
    for(var i=0;i<s.length;i++){
      html+='<div class="chart-bar-wrap"><div class="chart-bar" style="height:'+Math.round(s[i].hf/maxHF*100)+'%"></div><span class="chart-bar-lbl">S'+s[i].num+'</span></div>';
    }
    html+='</div></div><div class="section-title">'+t('stage_results')+'</div><div class="card">';
    for(var i=0;i<s.length;i++){
      var missStr=s[i].miss?' · ⚠️'+s[i].miss+'M':'';
      html+='<div class="stage-row">'
        +'<div class="stage-num">'+s[i].num+'</div>'
        +'<div class="stage-info"><div class="stage-name">'+s[i].name+'</div>'
        +'<div class="stage-meta">'+s[i].a+'A '+s[i].c+'C '+s[i].d+'D'+missStr+' · '+s[i].time+'s · <span style="color:var(--accent)">'+(s[i].pf||profile.powerFactor).toUpperCase()+'</span></div></div>'
        +'<div class="stage-hf">'+s[i].hf.toFixed(4)+'</div></div>';
    }
    html+='</div>';
  }
  content.innerHTML=html;
}

// ── MATCH LIST ──
function setFilter(val,elem){
  matchFilterVal=val;
  var chips=document.querySelectorAll('.filter-chip');
  for(var i=0;i<chips.length;i++)chips[i].classList.remove('active');
  elem.classList.add('active');
  renderMatchList();
}
function renderMatchList(){
  var q=(gv('match-search')||'').toLowerCase();
  var container=el('match-list-container');
  var icons={Stevne:'&#127942;',Trening:'&#127919;',Klubbmatch:'&#127919;',Landsmesterskap:'&#129351;',Internasjonalt:'&#127757;'};
  var filtered=matches.filter(function(m){
    var hit=m.name.toLowerCase().indexOf(q)>=0||(m.location||'').toLowerCase().indexOf(q)>=0;
    if(!hit)return false;
    if(matchFilterVal==='all')return true;
    if(matchFilterVal==='active')return m.id===activeMatchId;
    if(matchFilterVal==='trening')return m.type==='Trening';
    if(matchFilterVal==='stevne')return m.type==='Stevne'||m.type==='Landsmesterskap'||m.type==='Internasjonalt';
    if(matchFilterVal==='2025')return m.date.indexOf('2025')===0;
    if(matchFilterVal==='2024')return m.date.indexOf('2024')===0;
    return true;
  });
  if(!filtered.length){container.innerHTML='<div class="empty-state"><div class="empty-icon">&#128269;</div><div class="empty-title">Ingen treff</div></div>';return;}
  var html='<div class="card" style="padding:4px 16px">';
  for(var i=0;i<filtered.length;i++){
    var m=filtered[i];
    var isActive=m.id===activeMatchId;
    var stg=m.stages.length;
    var avgHF=stg?(m.stages.reduce(function(s,r){return s+r.hf;},0)/stg).toFixed(2):'—';
    html+='<div class="match-row" onclick="selectMatch(\''+m.id+'\')">'
      +'<div class="match-row-icon'+(isActive?' is-active':'')+'">'+(icons[m.type]||'&#127942;')+'</div>'
      +'<div class="match-row-info">'
      +'<div class="match-row-name">'+(isActive?'● ':'')+'<strong>'+m.name+'</strong></div>'
      +'<div class="match-row-meta">'+fmtDate(m.date)+' · '+m.type+(m.location?' · '+m.location:'')+'</div>'
      +'<div class="match-row-meta" style="color:var(--accent)">HF snitt: '+avgHF+'</div>'
      +'</div>'
      +'<div class="match-row-right">'
      +'<div class="match-stg-count">'+stg+(m.plannedStages>0?'/'+m.plannedStages:'')+'</div>'
      +'<div class="match-stg-lbl">stages</div>'
      +(isActive?'<span class="badge badge-green">Aktiv</span>':'')
      +'</div></div>';
  }
  html+='</div>';
  container.innerHTML=html;
}
function selectMatch(id){
  activeMatchId=id;
  renderMatchList();
  renderHome();
  setTimeout(function(){switchTab('screen-home');},250);
}

// ── CREATE MATCH ──
function createMatch(){
  var name=gv('nm-name').trim();
  if(!name){el('nm-name').style.borderColor='var(--red)';return;}
  var id='m'+Date.now();
  matches.unshift({id:id,name:name,date:gv('nm-date')||new Date().toISOString().split('T')[0],type:gv('nm-type'),location:gv('nm-location').trim(),plannedStages:gnvi('nm-stages',0),stages:[],shooters:[]});
  activeMatchId=id;
  closeModal('modal-new-match');
  ['nm-name','nm-date','nm-location','nm-stages'].forEach(function(i){el(i).value='';});
  renderHome();renderMatchList();updateProfileStats();saveState();
  switchTab('screen-home');
}

// ── MODALS ──
function openModal(id){
  el(id).classList.add('open');
  if(id==='modal-add'){
    var sel=el('result-match-select');
    var wrap=el('modal-match-selector');
    var opts='';
    for(var i=0;i<matches.length;i++)opts+='<option value="'+matches[i].id+'"'+(matches[i].id===activeMatchId?' selected':'')+'>'+matches[i].name+'</option>';
    sel.innerHTML=opts;
    wrap.style.display=matches.length>1?'block':'none';
  }
}
function closeModal(id){el(id).classList.remove('open');}
function closeModalOutside(e,id){if(e.target===e.currentTarget)closeModal(id);}
function switchMode(btn,modeId){
  var btns=btn.closest('.modal').querySelectorAll('.seg-btn');
  for(var i=0;i<btns.length;i++)btns[i].classList.remove('active');
  btn.classList.add('active');
  var modes=['mode-manual','mode-email','mode-file'];
  for(var i=0;i<modes.length;i++)el(modes[i]).style.display=modes[i]===modeId?'block':'none';
}
function switchShooterMode(btn,modeId){
  var btns=btn.closest('.modal').querySelectorAll('.seg-btn');
  for(var i=0;i<btns.length;i++)btns[i].classList.remove('active');
  btn.classList.add('active');
  var modes=['sm-manual','sm-email','sm-scan','sm-paste'];
  for(var i=0;i<modes.length;i++)el(modes[i]).style.display=modes[i]===modeId?'block':'none';
}

// ── MANUAL ENTRY ──
function calcManual(){
  var a=gnvi('m-a'),c=gnvi('m-c'),d=gnvi('m-d'),miss=gnvi('m-miss'),ns=gnvi('m-ns'),proc=gnvi('m-proc'),time=gnv('m-time');
  var pts=calcPoints(a,c,d,miss,ns,proc,profile.powerFactor);
  var hf=time>0?pts/time:0;
  var t=SCORE[profile.powerFactor];
  var prev=el('manual-preview');
  if(a||c||d||miss||ns||time){
    prev.style.display='block';
    el('manual-pf-note').textContent=profile.powerFactor.toUpperCase()+' (A='+t.A+' C='+t.C+' D='+t.D+')';
    el('manual-hf').textContent=hf>0?hf.toFixed(4):'—';
    el('manual-pts').textContent=pts+' pts · '+time+'s';
  }
}
function saveManual(){
  var mid=gv('result-match-select')||activeMatchId;
  var m=null;for(var i=0;i<matches.length;i++){if(matches[i].id===mid){m=matches[i];break;}}
  if(!m)return;
  var stageNum=gnvi('m-stage',m.stages.length+1);
  var time=gnv('m-time'),a=gnvi('m-a'),c=gnvi('m-c'),d=gnvi('m-d'),miss=gnvi('m-miss'),ns=gnvi('m-ns'),proc=gnvi('m-proc');
  var pts=calcPoints(a,c,d,miss,ns,proc,profile.powerFactor);
  var hf=time>0?pts/time:0;
  m.stages.push({num:stageNum,name:'Stage '+stageNum,hf:hf,time:time,pts:pts,a:a,c:c,d:d,miss:miss,ns:ns,proc:proc,pf:profile.powerFactor});
  m.stages.sort(function(x,y){return x.num-y.num;});
  // Sync me-shooter
  if(!m.shooters)m.shooters=[];
  var me=null;for(var i=0;i<m.shooters.length;i++){if(m.shooters[i].isMe){me=m.shooters[i];break;}}
  if(!me){me={id:'s_me',isMe:true,firstName:profile.firstName,lastName:profile.lastName,division:profile.division,pf:profile.powerFactor,club:profile.club,stages:[]};m.shooters.unshift(me);}
  if(!findStage(me.stages,stageNum))me.stages.push({num:stageNum,hf:hf,pts:pts,pf:profile.powerFactor});
  me.stages.sort(function(a,b){return a.num-b.num;});
  activeMatchId=mid;
  ['m-stage','m-time','m-a','m-c','m-d','m-miss','m-ns','m-proc'].forEach(function(id){el(id).value='';});
  el('manual-preview').style.display='none';
  closeModal('modal-add');renderHome();updateProfileStats();saveState();
}

// ── EMAIL PARSER ──
function parseEmail(){
  var text=gv('email-paste');
  var nameM=text.match(/^\d+\s+(.+)/m);
  var stageM=text.match(/Stage[:\s]+(.+)/i);
  var hfM=text.match(/(\d+\.\d{4})/);
  var timeM=text.match(/(\d+\.\d{2})\s*$/m);
  var aM=text.match(/(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/);
  var prev=el('parse-preview');
  if(nameM||hfM){
    prev.classList.add('show');
    el('pp-name').textContent=nameM&&nameM[1]?nameM[1]:'—';
    el('pp-stage').textContent=stageM&&stageM[1]?stageM[1]:'—';
    el('pp-hf').textContent=hfM&&hfM[1]?hfM[1]:'—';
    el('pp-time').textContent=timeM&&timeM[1]?timeM[1]+'s':'—';
    el('pp-hits').textContent=aM?(aM[1]+'A '+aM[2]+'C '+aM[3]+'D '+aM[4]+'M '+aM[5]+'NS'):'—';
  }
}
function saveEmail(){
  var text=gv('email-paste');
  var hfM=text.match(/(\d+\.\d{4})/);
  var timeM=text.match(/(\d+\.\d{2})\s*$/m);
  var aM=text.match(/(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/);
  if(!hfM)return;
  var mid=gv('result-match-select')||activeMatchId;
  var m=null;for(var i=0;i<matches.length;i++){if(matches[i].id===mid){m=matches[i];break;}}
  if(!m)return;
  var stg=m.stages.length+1;
  var pts=aM?parseInt(aM[1])*5+parseInt(aM[2])*3+parseInt(aM[3]):0;
  m.stages.push({num:stg,name:'Stage '+stg,hf:parseFloat(hfM[1]),time:timeM?parseFloat(timeM[1]):0,pts:pts,a:aM?parseInt(aM[1]):0,c:aM?parseInt(aM[2]):0,d:aM?parseInt(aM[3]):0,miss:aM?parseInt(aM[4]):0,ns:aM?parseInt(aM[5]):0,proc:0,pf:profile.powerFactor});
  activeMatchId=mid;
  closeModal('modal-add');el('email-paste').value='';el('parse-preview').classList.remove('show');
  renderHome();updateProfileStats();saveState();
}

// ── PROGNOSE ──
function calcPrognose(){
  var shots=gnvi('prog-shots',12);
  var move=gnv('prog-move',3);
  // Use profile variables
  var draw=profile.draw||1.42;
  var reloadT=profile.reloadTime||1.80;
  var div=profile.division||'Standard';
  var pf=profile.powerFactor||'minor';
  var t=SCORE[pf];
  // Auto-calculate reloads from shots and mag capacity
  var autoReloads=Math.max(0,Math.ceil(shots/getMagCap(div,pf))-1);
  // Update reload input to show auto-calculated value
  var relInput=el('prog-reloads');if(relInput)relInput.value=autoReloads;
  // Shot time from match history if available
  var m=activeMatch();var avgShotTime=0.20;
  if(m&&m.stages&&m.stages.length){
    var stArr=[];
    for(var i=0;i<m.stages.length;i++){
      var s=m.stages[i];
      var sh_shots=(s.a||0)+(s.c||0)+(s.d||0)+(s.miss||0)+(s.ns||0);
      if(sh_shots>0&&s.time>0){
        var r2=Math.max(0,Math.ceil(sh_shots/getMagCap(div,pf))-1);
        var st=(s.time-draw-r2*reloadT)/sh_shots;
        if(st>0)stArr.push(st);
      }
    }
    if(stArr.length)avgShotTime=stArr.reduce(function(a,b){return a+b;},0)/stArr.length;
  }
  // Estimate: time = draw + reloads*reload + shots*shotTime + move
  var estTime=draw+(autoReloads*reloadT)+(shots*avgShotTime)+move;
  // A/C rate from match history
  var totA=0,totC=0,totHits=0;
  if(m&&m.stages){for(var i=0;i<m.stages.length;i++){totA+=m.stages[i].a||0;totC+=m.stages[i].c||0;totHits+=(m.stages[i].a||0)+(m.stages[i].c||0)+(m.stages[i].d||0);}}
  var aRate=totHits>0?totA/totHits:0.85;
  var estA=Math.round(aRate*shots);var estC=shots-estA;
  var estPts=(estA*t.A)+(estC*t.C);
  var estHF=estTime>0?estPts/estTime:0;
  el('prog-hf-out').textContent=estHF.toFixed(4);
  el('prog-pf-note').textContent=pf.toUpperCase()+' · '+div+' (kap. '+getMagCap(div,pf)+')';
  el('prog-breakdown').innerHTML=
    'Trekk: '+draw+'s · '+autoReloads+' reload(s) × '+reloadT+'s · '+shots+'×'+avgShotTime.toFixed(3)+'s/skudd · '+move+'s bev.<br>'
    +'= '+estTime.toFixed(2)+'s · '+estPts+' pts ('+estA+'A+'+estC+'C, '+Math.round(aRate*100)+'% A fra dagens data)';
  var m=activeMatch();
  var dw=el('prog-delta-wrap');var de=el('prog-delta');
  if(m&&m.stages.length&&estHF>0){
    var avgHF=m.stages.reduce(function(s,r){return s+r.hf;},0)/m.stages.length;
    var delta=estHF-avgHF;
    var sign=delta>=0?'+':'';
    de.textContent=sign+delta.toFixed(4);
    de.style.color=delta>=0?'var(--green)':'var(--red)';
    dw.style.display='block';
  } else {dw.style.display='none';}
}
function renderPrognoseContext(){
  var m=activeMatch();
  el('prog-chip-name').textContent=m?m.name:'Ingen match valgt';
  var ctx=el('prog-match-context');
  if(!ctx)return;
  if(!m){ctx.innerHTML='';return;}
  var stg=m.stages;
  var avgHF=stg.length?(stg.reduce(function(s,r){return s+r.hf;},0)/stg.length):null;
  var bestHF=stg.length?Math.max.apply(null,stg.map(function(s){return s.hf;})):null;
  var nextStageNum=stg.length+1;
  var planned=m.plannedStages>0?m.plannedStages:null;
  var html='<div class="card" style="margin-bottom:12px;border-color:rgba(232,184,75,.2);background:linear-gradient(135deg,var(--card),var(--bg3))">'
    +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">'
    +'<div><div style="font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700">'+m.name+'</div>'
    +'<div style="font-size:11px;color:var(--muted);margin-top:2px">'+m.type+' · '+fmtDate(m.date)+(m.location?' · '+m.location:'')+'</div></div>'
    +'<span class="badge badge-gold">Stage '+nextStageNum+(planned?' av '+planned:'')+'</span></div>';
  if(stg.length){
    html+='<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px;text-align:center"><div style="font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:var(--accent)">'+avgHF.toFixed(4)+'</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-top:2px">Snitt HF</div></div>'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px;text-align:center"><div style="font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:var(--green)">'+bestHF.toFixed(4)+'</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-top:2px">Best HF</div></div>'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px;text-align:center"><div style="font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:var(--blue)">'+stg.length+(planned?'/'+planned:'')+'</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-top:2px">Stages</div></div>'
      +'</div>';
  } else {
    html+='<div style="font-size:12px;color:var(--muted);text-align:center;padding:4px 0">Ingen stages registrert ennå</div>';
  }
  html+='</div>';
  ctx.innerHTML=html;
}
function renderSnapshots(){
  var container=el('snapshot-container');
  if(!container)return;
  var m=activeMatch();
  if(!m||!m.shooters||m.shooters.length<2){container.innerHTML='';return;}
  var shooters=m.shooters;
  var me=null;
  for(var i=0;i<shooters.length;i++){if(shooters[i].isMe){me=shooters[i];break;}}
  if(!me||!me.stages.length){container.innerHTML='';return;}
  var rivals=[];
  for(var i=0;i<shooters.length;i++){if(!shooters[i].isMe&&shooters[i].stages.length)rivals.push(shooters[i]);}
  if(!rivals.length){container.innerHTML='';return;}
  var bestRival=rivals[0];
  var MINOR={A:5,C:3,D:1};

  function stgMaxPts(n){if(m.stageDefs){var d=findStage(m.stageDefs,n);if(d)return d.maxPts||0;}return 0;}
  function stgRounds(n){if(m.stageDefs){var d=findStage(m.stageDefs,n);if(d)return d.rounds||12;}return 12;}
  function stgName(n){if(m.stageDefs){var d=findStage(m.stageDefs,n);if(d)return d.name||'';}return '';}
  function winHF(n){var max=0;for(var i=0;i<shooters.length;i++){var s=findStage(shooters[i].stages,n);if(s&&s.hf>max)max=s.hf;}return max||1;}
  function mPtsAt(sh,upTo){
    var sum=0;
    for(var n=1;n<=upTo;n++){
      var stg=findStage(sh.stages,n);if(!stg||!stg.hf)continue;
      var mp=stgMaxPts(n);
      if(!mp){for(var j=0;j<shooters.length;j++){var s2=findStage(shooters[j].stages,n);if(s2&&s2.hf>=winHF(n)){mp=s2.pts||0;break;}}}
      sum+=(stg.hf/winHF(n))*(mp||stg.pts||1);
    }
    return sum;
  }
  function calcRel(shots,div,pf){return Math.max(0,Math.ceil(shots/getMagCap(div||'Standard',pf||'minor'))-1);}
  function shotTimeOf(totalT,shots,div,pf){
    var dr=profile.draw||1.42;var rl=profile.reloadTime||1.80;
    var r=calcRel(shots,div,pf);
    return shots>0?(totalT-dr-r*rl)/shots:0;
  }
  function dagsform(upTo){
    // KORREKT MODELL:
    // 1. Tid/skudd = (total − trekk − reloads×reload) / skudd  — per stage, så snitt
    // 2. Treffprofil = A%/C%/D% av TREFF (uten bom/proc — de er stage-spesifikke)
    // 3. Projeksjon: trekk + neste_skudd×tid_per_skudd + reloads×reload → HF
    var dr=profile.draw||1.42;
    var rl=profile.reloadTime||1.80;
    var div=profile.division||'Standard';
    var pf=profile.powerFactor||'minor';
    var ta=0,tc=0,td=0,tm=0,tns=0,th=0,ts=0;
    var stArr=[];
    for(var n=1;n<=upTo;n++){
      var ms=m.stages?findStage(m.stages,n):null;
      var sh=findStage(me.stages,n);
      if(!sh||!sh.hf)continue;
      var a=ms?ms.a||0:0;
      var c=ms?ms.c||0:0;
      var d=ms?ms.d||0:0;
      var miss=ms?ms.miss||0:0;
      var ns2=ms?ms.ns||0:0;
      var time=ms?ms.time||0:0;
      var shots=a+c+d+miss+ns2;
      // Accumulate HITS only (no miss/ns) for treff-profil
      ta+=a; tc+=c; td+=d;
      th+=a+c+d;
      tm+=miss; tns+=ns2; ts+=shots;
      // Shot time per stage
      if(shots>0&&time>0){
        var r2=calcRel(shots,div,pf);
        var st=(time-dr-r2*rl)/shots;
        if(st>0)stArr.push(st);
      }
    }
    // Treff-profil (A/C/D%) — eksluderer bom og prosedyrer
    var ar=th>0?ta/th:0.85;
    var cr=th>0?tc/th:0.12;
    var dr2=th>0?td/th:0.03;
    // Snitt tid per skudd
    var avgST=stArr.length>0?stArr.reduce(function(s,v){return s+v;},0)/stArr.length:0.20;
    var missR=ts>0?(tm+tns)/ts:0;
    return{
      ar:ar, cr:cr, dr:dr2,
      avgST:avgST,
      missR:missR,
      ta:ta, tc:tc, td:td, th:th,
      tm:tm, tns:tns, ts:ts,
      myDraw:dr, myReload:rl
    };
  }

  function detectTrend(upTo){
    // Compare first half vs second half of stages played
    if(upTo<2)return null;
    var DR=profile.draw||1.42;
    var RL=profile.reloadTime||1.80;
    var div=profile.division||'Standard';
    var pf=profile.powerFactor||'minor';
    var mid=Math.max(1,Math.floor(upTo/2));
    function halfProfile(from,to){
      var ta=0,tc=0,td=0,th=0,sts=[];
      for(var n=from;n<=to;n++){
        var ms=m.stages?findStage(m.stages,n):null;
        var sh=findStage(me.stages,n);
        if(!sh||!sh.hf)continue;
        var a=ms?ms.a||0:0;var c=ms?ms.c||0:0;var d=ms?ms.d||0:0;
        var miss=ms?ms.miss||0:0;var ns2=ms?ms.ns||0:0;var time=ms?ms.time||0:0;
        var shots=a+c+d+miss+ns2;
        ta+=a;tc+=c;td+=d;th+=a+c+d;
        if(shots>0&&time>0){
          var r2=calcRel(shots,div,pf);
          var st=(time-DR-r2*RL)/shots;
          if(st>0)sts.push(st);
        }
      }
      var ar=th>0?ta/th:0;
      var avgST=sts.length>0?sts.reduce(function(s,v){return s+v;},0)/sts.length:0;
      return{ar:ar,avgST:avgST,stages:to-from+1};
    }
    var first=halfProfile(1,mid);
    var second=halfProfile(mid+1,upTo);
    if(!first.avgST||!second.avgST)return null;
    var tempoChange=second.avgST-first.avgST;  // positive = slower
    var treffChange=second.ar-first.ar;        // positive = more A
    var TEMPO_T=0.05;var TREFF_T=0.05;
    return{
      first:first,second:second,
      tempoChange:tempoChange,treffChange:treffChange,
      tempoFell:tempoChange>TEMPO_T,
      tempoRose:tempoChange<-TEMPO_T,
      treffFell:treffChange<-TREFF_T,
      treffRose:treffChange>TREFF_T
    };
  }

  function buildTrendMsg(t,df){
    if(!t)return null;
    var f=t.first;var s=t.second;
    if(t.tempoFell&&!t.treffFell){
      return'Tempoet falt ('+f.avgST.toFixed(3)+'s → '+s.avgST.toFixed(3)+'s/skudd), men treffbildet holder på '+Math.round(df.ar*100)+'%A. Teknisk stage? Mye bevegelse? Reflekter over hva som tok tid.';
    } else if(t.tempoFell&&t.treffFell){
      return'Både tempo og treff har falt. Sliten? Press deg på neste stage — du har mer i deg.';
    } else if(!t.tempoFell&&t.treffFell){
      return'Du holder tempoet bra, men A-raten har falt litt. Jager du for hardt? Ta ett ekstra øyeblikk på siktingen.';
    } else if(t.tempoRose&&t.treffRose){
      return'Du finner flyten — raskere og bedre treff. Hold det gående.';
    } else if(t.tempoRose){
      return'Tempoet øker, treffbildet stabilt. Du er i god rytme.';
    } else {
      return'Konsistent gjennom matchen — '+Math.round(df.ar*100)+'%A og '+df.avgST.toFixed(3)+'s/skudd. Hold rytmen.';
    }
  }

  function projectNextStage(df, nextShots, div, pf){
    // Project: trekk + skudd×tid/skudd + reloads×reload = forventet tid
    var dr=df.myDraw; var rl=df.myReload;
    var r=calcRel(nextShots,div||'Standard',pf||'minor');
    var expTime=dr+(nextShots*df.avgST)+(r*rl);
    // Forventede treff: skudd×A%, ×C%, ×D%
    var expA=nextShots*df.ar;
    var expC=nextShots*df.cr;
    var expD=nextShots*df.dr;
    var expPts=expA*5+expC*3+expD*1;
    var estHF=expTime>0?expPts/expTime:0;
    return{expTime:expTime, expA:expA, expC:expC, expD:expD,
           expPts:expPts, estHF:estHF, reloads:r};
  }
  function rivalEst(rival,upTo){
    var hfs=[];
    for(var n=1;n<=upTo;n++){var s=findStage(rival.stages,n);if(s&&s.hf)hfs.push(s.hf);}
    if(!hfs.length)return 0;
    var recent=hfs.slice(-3);
    return recent.reduce(function(s,v){return s+v;},0)/recent.length*0.65
          +hfs.reduce(function(s,v){return s+v;},0)/hfs.length*0.35;
  }
  function solveHF(ePts,rPts,rEst,rem){
    var lo=0.1,hi=25;
    for(var i=0;i<60;i++){
      var mid=(lo+hi)/2;var ef=0,rf=0;
      for(var j=0;j<rem.length;j++){
        var mp=stgMaxPts(rem[j]);var wHF=Math.max(mid,rEst);
        ef+=(mid/wHF)*mp;rf+=(rEst/wHF)*mp;
      }
      if((ePts+ef)>(rPts+rf))hi=mid;else lo=mid;
    }
    return(lo+hi)/2+0.001;
  }

  var maxN=0;
  for(var i=0;i<me.stages.length;i++){if(me.stages[i].num>maxN)maxN=me.stages[i].num;}

  var html='<div style="font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;margin:16px 0 4px">&#9889; Prognose underveis</div>';
  html+='<div style="font-size:12px;color:var(--muted);margin-bottom:12px">Hva ville appen sagt — basert på dagsform etter hver stage</div>';

  for(var after=1;after<=maxN;after++){
    if(!findStage(me.stages,after)||!findStage(bestRival.stages,after))continue;
    var remaining=[];
    for(var n=after+1;n<=m.plannedStages;n++){if(stgMaxPts(n)>0)remaining.push(n);}
    if(!remaining.length&&after<maxN)continue;

    var ePts=mPtsAt(me,after);
    var rPts=mPtsAt(bestRival,after);
    var top=Math.max(ePts,rPts);
    var iLead=ePts>=rPts;
    var gapPts=Math.abs(ePts-rPts);
    var df=dagsform(after);
    var rEst=rivalEst(bestRival,after);

    // Next stage specifics
    var nextN=remaining.length>0?remaining[0]:0;
    var nextShots=nextN>0?stgRounds(nextN):0;
    var nextName=nextN>0?stgName(nextN):'';
    var nextDiv=profile.division||'Standard';
    var nextPF=profile.powerFactor||'minor';
    var nextMaxPts=nextN>0?stgMaxPts(nextN):0;

    // Target HF (solve for all remaining)
    var targetHF=remaining.length>0?solveHF(ePts,rPts,rEst,remaining):0;

    // ── PROJECT NEXT STAGE using correct model ──
    // Estimated HF based on today's treff-profil and avg tid/skudd
    var proj=nextShots>0?projectNextStage(df,nextShots,nextDiv,nextPF):null;
    var estNextHF=proj?proj.estHF:0;

    // What shot time do I need to hit targetHF, keeping today's A/C/D%?
    var nextTimeNeeded=0,nextSTNeeded=0,maxCsameTime=0;
    var nextReloads=nextShots>0?calcRel(nextShots,nextDiv,nextPF):0;
    var dr=df.myDraw;var rl=df.myReload;
    if(nextShots>0&&targetHF>0){
      var expPtsAtProfile=nextShots*df.ar*5+nextShots*df.cr*3+nextShots*df.dr*1;
      nextTimeNeeded=expPtsAtProfile/targetHF;
      nextSTNeeded=(nextTimeNeeded-dr-nextReloads*rl)/nextShots;
      // Max C at current shot time — keeping same avg tid/skudd
      var currTotalT=dr+nextReloads*rl+nextShots*df.avgST;
      for(var nc=0;nc<=nextShots;nc++){
        var pts2=(nextShots-nc)*MINOR.A+nc*MINOR.C;
        if(currTotalT>0&&pts2/currTotalT>=targetHF)maxCsameTime=nc;else break;
      }
    }
    var missCost=targetHF>0?10/targetHF:0;
    var stDiff=df.avgST-nextSTNeeded;
    var needsFaster=nextSTNeeded>0&&stDiff>0.05;
    var missCost=targetHF>0?10/targetHF:0;
    var estNextHF=proj?proj.estHF:0;
    var hfGap=targetHF-estNextHF;

    // ── WHAT MUST CHANGE FROM DAGSFORM? ──
    // Opt 1: same A/C%, solve for shot time needed
    var ptsAtProfile=nextShots*df.ar*5+nextShots*df.cr*3+nextShots*df.dr*1;
    var timeNeededOpt1=targetHF>0?ptsAtProfile/targetHF:0;
    var stNeededOpt1=nextShots>0?(timeNeededOpt1-dr-nextReloads*rl)/nextShots:0;
    var stDiff1=df.avgST-stNeededOpt1;

    // Opt 2: same shot time, solve for A count needed
    var currTotalTime=dr+nextShots*df.avgST+nextReloads*rl;
    var ptsNeededOpt2=targetHF*currTotalTime;
    var aNeededOpt2=Math.min(nextShots,Math.max(0,(ptsNeededOpt2-3*nextShots)/2));
    var aNeededDiff=aNeededOpt2-(df.ar*nextShots);
    var aCurrRound=Math.round(df.ar*nextShots);

    // Realism checks
    var opt1Ok=stNeededOpt1>0&&stDiff1>=0&&stDiff1<df.avgST*0.30;
    var opt2Ok=aNeededOpt2<=nextShots&&aNeededDiff>0.5;
    var aCRoom=Math.max(0,Math.floor((df.ar*nextShots)-aNeededOpt2));

    // ── ADVICE — realistic, motivating, anchored to dagsform ──
    var advice='';
    var adviceColor='var(--text)';
    var aRatePct=Math.round(df.ar*100);
    var cRoom=aCRoom; // how many extra C you can take at same tempo
    var gapPct=top>0?(gapPts/top)*100:0; // Gap as percentage of leader's score

    if(remaining.length===0){
      advice=iLead?'🏆 Du vant matchen!':'Match ferdig.';

    } else if(gapPct<1){
      // Ekstremt jevnt (under 1%)
      advice='Ekstremt jevnt! Hold hodet kaldt, skyt din normale rytme. Det avgjøres på detaljer — fokus på hvert skudd.';
      adviceColor='var(--accent)';
    } else if(gapPct<2){
      // Svært jevnt (1-2%)
      advice='Svært jevnt! Hold rytmen, unngå stress. Skyt ditt normale treffbilde — små marginer avgjør.';
      adviceColor='var(--accent)';
    } else if(gapPct<4){
      // Meget jevnt (2-4%)
      advice='Meget jevnt! Hold fokus på prosessen. Skyt '+aRatePct+'%A som vanlig, unngå miss. Du har det du trenger.';
      adviceColor='var(--accent)';
    } else if(gapPct<6){
      // Veldig jevnt (4-6%)
      if(iLead){
        advice='Veldig jevnt. Hold samme rytme — du tåler '+(cRoom>0?cRoom+' C til':'små feil')+'. Ikke press unødvendig.';
      } else {
        advice='Veldig jevnt. Press litt på tempoet, hold '+aRatePct+'%A. Du kan ta dette tilbake.';
      }
      adviceColor=iLead?'var(--green)':'var(--accent)';
    } else if(gapPct<8){
      // Jevnt (6-8%)
      if(iLead){
        advice='Jevnt. Hold rytmen og treffbildet. Du har litt rom — ikke stress.';
      } else {
        advice='Jevnt. Du trenger å presse på — hold '+aRatePct+'%A, øk tempoet litt. 0 miss.';
      }
      adviceColor=iLead?'var(--green)':'var(--accent)';
    } else if(iLead){
      if(estNextHF>=targetHF){
        // Dagsform is enough — motivating hold message
        if(cRoom>0){
          advice='Du er i rute. Hold samme rytme — du tåler '+cRoom+' C til på denne stagen. Skyt A der det er naturlig.';
        } else {
          advice='Du er i rute. Hold samme rytme og treffbilde. Ikke press — du har det du trenger.';
        }
        adviceColor='var(--green)';
      } else {
        // Need small improvement — one thing to focus on
        var smallGap=hfGap<0.3;
        if(smallGap&&opt1Ok){
          advice='Nesten der. Press litt på tempoet — hold '+aRatePct+'%A som du har gjort. Ikke jag etter perfeksjon. 0 miss.';
        } else if(opt2Ok&&Math.round(aNeededDiff)<=3){
          advice='Hold tempoet. Prøv å bytte '+Math.round(aNeededDiff)+' C til A — det holder. 0 miss.';
        } else {
          advice='Press litt på — hold ditt treffbilde på '+aRatePct+'%A. Du er nærme. 0 miss.';
        }
        adviceColor='var(--accent)';
      }

    } else {
      // Behind
      var bigGap2=hfGap>0.8;
      if(bigGap2){
        // Large gap — honest but motivating
        advice='Du kan ta dette tilbake. Alt du har nå — høyeste tempo du klarer, hold '+aRatePct+'%A. Null miss, det koster '+missCost.toFixed(1)+'s.';
      } else if(opt1Ok&&opt2Ok&&Math.round(aNeededDiff)<=3){
        // Both adjustments are small
        advice='Du kan ta dette. Press tempoet litt og bytt '+Math.round(aNeededDiff)+' C til A. Hold '+aRatePct+'%A som base. 0 miss — det koster '+missCost.toFixed(1)+'s.';
      } else if(opt1Ok){
        // Just need more tempo
        advice='Du kan ta dette tilbake. Press tempoet — hold ditt treffbilde på '+aRatePct+'%A. 0 miss — det koster '+missCost.toFixed(1)+'s.';
      } else {
        advice='Alt du har. Høyeste tempo du klarer, hold ditt treffbilde. 0 miss — det koster '+missCost.toFixed(1)+'s.';
      }
      adviceColor='var(--red)';
    }

    var stageStageName=after+'';
    if(m.stageDefs){var def3=findStage(m.stageDefs,after);if(def3)stageStageName=after+'. '+def3.name;}
    var borderCol=iLead?'var(--green)':'var(--red)';

    html+='<div class="card" style="margin-bottom:10px;border-left:4px solid '+borderCol+'">';

    // Header + score
    html+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:14px;font-weight:700">Etter '+stageStageName+'</div>';
    html+='<div style="font-size:12px;font-weight:700;color:'+borderCol+'">'+(iLead?'LEDER':'BAK')+' '+gapPts.toFixed(1)+' pts</div>';
    html+='</div>';

    // Score bar
    html+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:10px">';
    html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:8px;text-align:center">';
    html+='<div style="font-size:10px;color:var(--muted)">'+me.firstName+' <span style="font-size:9px;opacity:0.6">(poeng totalt)</span></div>';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:20px;font-weight:700;color:var(--accent)">'+ePts.toFixed(1)+'</div>';
    html+='<div style="font-size:10px;color:var(--muted)">'+(top>0?ePts/top*100:0).toFixed(2)+'%</div></div>';
    html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:8px;text-align:center">';
    html+='<div style="font-size:10px;color:var(--muted)">'+bestRival.firstName+' <span style="font-size:9px;opacity:0.6">(poeng totalt)</span></div>';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:20px;font-weight:700;color:'+(iLead?'var(--muted)':'var(--red)')+'">'+rPts.toFixed(1)+'</div>';
    html+='<div style="font-size:10px;color:var(--muted)">'+(top>0?rPts/top*100:0).toFixed(2)+'%</div></div>';
    html+='</div>';

    // Dagsform — compact — shows the three key variables
    var projDisp=nextShots>0?projectNextStage(df,nextShots,nextDiv,nextPF):null;
    html+='<div style="display:flex;gap:6px;margin-bottom:10px">';
    // Tid per skudd
    html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:8px;flex:1;text-align:center">';
    html+='<div style="font-size:10px;color:var(--muted)">t/skudd</div>';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700">'+df.avgST.toFixed(3)+'s</div></div>';
    // Treff-profil
    html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:8px;flex:1;text-align:center">';
    html+='<div style="font-size:10px;color:var(--muted)">Treff</div>';
    html+='<div style="font-size:12px;font-weight:600;line-height:1.6">';
    html+='<span style="color:var(--green)">'+Math.round(df.ar*100)+'%A</span> ';
    html+='<span style="color:var(--accent)">'+Math.round(df.cr*100)+'%C</span>';
    html+=(df.dr>0.01?'<br><span style="color:#f59e0b">'+Math.round(df.dr*100)+'%D</span>':'');
    html+='</div></div>';
    // Estimert HF på neste stage
    html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:8px;flex:1;text-align:center">';
    html+='<div style="font-size:10px;color:var(--muted)">Est. HF neste</div>';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700;color:var(--accent)">'+(projDisp?projDisp.estHF.toFixed(3):'—')+'</div>';
    if(projDisp)html+='<div style="font-size:9px;color:var(--muted)">'+projDisp.expTime.toFixed(1)+'s · '+Math.round(projDisp.expPts)+'pts</div>';
    html+='</div>';
    html+='</div>';

    // ── THE ONE SENTENCE ──
    html+='<div style="background:var(--bg);border-radius:var(--radius-sm);padding:12px;border-left:3px solid '+adviceColor+'">';
    if(nextN>0){
      // Stage info with reloads
      var stageInfo='Neste: '+nextName+' ('+nextShots+' skudd';
      if(nextReloads>0)stageInfo+=', '+nextReloads+' reload'+(nextReloads>1?'s':'');
      stageInfo+=', max '+nextMaxPts+' pts)';
      html+='<div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-bottom:4px">'+stageInfo+'</div>';
    }
    html+='<div style="font-size:15px;font-weight:600;color:'+adviceColor+';line-height:1.5">'+advice+'</div>';
    
    // ── SCENARIO & CONTEXT ──
    if(remaining.length>0&&nextN>0){
      var scenarioText='';
      var hfGap=Math.abs(targetHF-estNextHF);
      
      // Realistisk vurdering av target HF
      if(targetHF>0&&estNextHF>0){
        if(hfGap>1.5){
          var difficulty=targetHF>estNextHF?'MYE høyere':'MYE lavere';
          scenarioText='Target HF '+targetHF.toFixed(2)+' er '+difficulty+' enn ditt estimat '+estNextHF.toFixed(2)+'. ';
          if(targetHF>estNextHF){
            scenarioText+='Dette krever perfekt gjennomføring.';
          }
        } else if(hfGap>0.5){
          scenarioText='Target HF '+targetHF.toFixed(2)+' vs estimat '+estNextHF.toFixed(2)+'. ';
          scenarioText+=targetHF>estNextHF?'Du må presse litt over vanlig nivå.':'Du har god margin.';
        }
      }
      
      // Scenario for gjenværende stages
      if(remaining.length>1){
        var avgNeeded=0;
        var totalMaxRemaining=0;
        for(var ri=0;ri<remaining.length;ri++){
          totalMaxRemaining+=stgMaxPts(remaining[ri]);
        }
        if(totalMaxRemaining>0){
          var ptsNeeded=iLead?(rPts+0.1-ePts):(ePts+0.1-rPts);
          if(!iLead)ptsNeeded=Math.abs(ptsNeeded)+0.1;
          avgNeeded=(ptsNeeded/remaining.length)*100/totalMaxRemaining*remaining.length;
          if(avgNeeded>0&&remaining.length>1){
            if(scenarioText)scenarioText+=' ';
            scenarioText+='Over '+remaining.length+' stages: gjennomsnittlig '+(iLead?'hold':'oppnå')+' ~'+avgNeeded.toFixed(0)+'% av max for å '+(iLead?'holde':'ta')+'.';
          }
        }
      }
      
      if(scenarioText){
        html+='<div style="font-size:11px;color:var(--sub);margin-top:8px;line-height:1.5;padding-top:8px;border-top:1px solid var(--border)">'+scenarioText+'</div>';
      }
    }
    
    html+='</div>';

    // ── TREND REFLECTION ──
    var trend=detectTrend(after);
    var trendMsg=buildTrendMsg(trend,df);
    if(trendMsg&&remaining.length>0){
      var trendIcon='&#128200;';
      var trendColor='var(--muted)';
      if(trend&&trend.tempoFell&&!trend.treffFell){trendIcon='&#9200;';trendColor='var(--accent)';}
      else if(trend&&trend.tempoFell&&trend.treffFell){trendIcon='&#9888;';trendColor='var(--red)';}
      else if(trend&&!trend.tempoFell&&trend.treffFell){trendIcon='&#127919;';trendColor='var(--accent)';}
      else if(trend&&trend.tempoRose&&trend.treffRose){trendIcon='&#9889;';trendColor='var(--green)';}
      html+='<div style="margin-top:8px;background:rgba(255,255,255,.03);border-radius:var(--radius-sm);padding:10px;border-left:2px solid '+trendColor+'">';
      html+='<div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-bottom:4px">'+trendIcon+' Refleksjon</div>';
      html+='<div style="font-size:13px;color:var(--sub);line-height:1.6">'+trendMsg+'</div>';
      html+='</div>';
    }

    html+='</div>';
  }
  container.innerHTML=html;
}


function renderPrognoseHistory(){
  var card=el('prog-history-card');
  var nameEl=el('prog-history-match-name');
  var m=activeMatch();
  if(nameEl)nameEl.textContent=m?m.name:'—';
  if(!m||!m.stages.length){card.innerHTML='<div style="color:var(--muted);font-size:13px;text-align:center;padding:10px 0">Ingen stage-data for aktiv match</div>';return;}
  var maxHF=Math.max.apply(null,m.stages.map(function(s){return s.hf;}));
  var html='';
  for(var i=0;i<m.stages.length;i++){
    var s=m.stages[i];
    html+='<div style="margin-top:10px"><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-bottom:5px"><span>Stage '+s.num+' – '+s.name+'</span><span style="color:var(--accent)">'+s.hf.toFixed(4)+'</span></div>'
      +'<div class="progress-bar"><div class="progress-fill fill-gold" style="width:'+Math.round(s.hf/maxHF*100)+'%"></div></div></div>';
  }
  card.innerHTML=html;
}

function renderForward(){
  var container=el('forward-container');
  if(!container)return;
  var m=activeMatch();
  if(!m){container.innerHTML='';return;}
  var shooters=m.shooters||[];
  var me=null;for(var i=0;i<shooters.length;i++){if(shooters[i].isMe){me=shooters[i];break;}}
  if(!me||!me.stages.length){
    container.innerHTML='<div class="card" style="text-align:center;padding:20px;color:var(--muted)"><div style="font-size:28px;margin-bottom:8px">&#128202;</div><div style="font-weight:600;margin-bottom:4px">Legg inn dine resultater</div><div style="font-size:13px">Fremskrivingen beregner hva som skjer</div></div>';
    return;
  }
  var mainStages=m.stages||[];
  var totA=0,totC=0,totD=0,totHits=0;
  for(var i=0;i<mainStages.length;i++){totA+=mainStages[i].a||0;totC+=mainStages[i].c||0;totD+=mainStages[i].d||0;}
  totHits=totA+totC+totD;
  var myARate=totHits>0?totA/totHits:0.85;
  var avgTime=mainStages.length?mainStages.reduce(function(s,r){return s+(r.time||0);},0)/mainStages.length:15;
  var avgShots=mainStages.length?mainStages.reduce(function(s,r){return s+(r.a+r.c+r.d+(r.miss||0));},0)/mainStages.length:12;
  var t=SCORE[profile.powerFactor];
  var draw=gnv('prog-draw',1.42);
  var reloads=gnvi('prog-reloads',1);
  var move=gnv('prog-move',3);
  var shots=gnvi('prog-shots',Math.round(avgShots)||12);
  var stagesPlayed=me.stages.length;
  var remaining=m.plannedStages>0?Math.max(0,m.plannedStages-stagesPlayed):null;
  var myEstHF=shooterEstNextHF(me);
  var rivals=[];for(var i=0;i<shooters.length;i++){if(!shooters[i].isMe&&shooters[i].stages.length)rivals.push(shooters[i]);}
  var bestRival=null;var bestRivalPct=null;var bestRivalEstHF=null;
  if(rivals.length){
    bestRival=rivals[0];
    for(var i=1;i<rivals.length;i++){if(shooterMatchPct(rivals[i],shooters)>shooterMatchPct(bestRival,shooters))bestRival=rivals[i];}
    bestRivalPct=shooterMatchPct(bestRival,shooters);
    bestRivalEstHF=shooterEstNextHF(bestRival);
  }
  var myMatchPct=shooterMatchPct(me,shooters);
  var targetHF=myEstHF;
  if(bestRival&&remaining){
    var lo=0.1,hi=20,res=myEstHF;
    for(var iter=0;iter<40;iter++){
      var mid=(lo+hi)/2;
      var estWin=Math.max(mid,bestRivalEstHF||0)*1.02;
      var myFutPct=mid/estWin*100;var rivFutPct=(bestRivalEstHF||0)/estWin*100;
      var ts=stagesPlayed+remaining;var rs=bestRival.stages.length+remaining;
      var myFin=(myMatchPct*stagesPlayed+myFutPct*remaining)/ts;
      var rivFin=(bestRivalPct*bestRival.stages.length+rivFutPct*remaining)/rs;
      if(myFin>rivFin){hi=mid;res=mid;}else lo=mid;
    }
    targetHF=res+0.001;
  } else if(bestRivalEstHF){
    targetHF=bestRivalEstHF*1.05;
  } else {
    targetHF=myEstHF*1.1;
  }
  var scenMyFin=myMatchPct,scenRivFin=bestRivalPct||0;
  if(remaining&&bestRival){
    var estWin2=Math.max(myEstHF,bestRivalEstHF||0)*1.02;
    var ts2=stagesPlayed+remaining;var rs2=bestRival.stages.length+remaining;
    scenMyFin=(myMatchPct*stagesPlayed+(myEstHF/estWin2*100)*remaining)/ts2;
    scenRivFin=(bestRivalPct*bestRival.stages.length+((bestRivalEstHF||0)/estWin2*100)*remaining)/rs2;
  }
  var iWinAsIs=scenMyFin>=scenRivFin;
  var gapPct=scenRivFin-scenMyFin;
  var targetPts=(myARate*shots*t.A)+((1-myARate)*shots*t.C);
  var targetTime=targetHF>0?targetPts/targetHF:avgTime;
  var impliedSplit=avgShots>1?Math.max(0.12,(avgTime-draw)/(avgShots-1)):0.20;
  var targetSplit=Math.max(0.10,(targetTime-draw)/Math.max(shots-1,1));
  var splitDelta=impliedSplit-targetSplit;
  var minA=shots;
  var ptsNeeded=targetHF*avgTime;
  for(var a=shots;a>=0;a--){var p=a*t.A+(shots-a)*t.C;if(p>=ptsNeeded){minA=a;break;}}
  var halfSplit=Math.max(0.10,impliedSplit-splitDelta*0.5);
  var halfA=Math.min(shots,Math.round(myARate*shots)+Math.ceil((minA-Math.round(myARate*shots))*0.5));
  var combTime=draw+(shots*halfSplit);
  var combPts=halfA*t.A+(shots-halfA)*t.C;
  var combHF=combTime>0?combPts/combTime:0;
  var combWins=combHF>=targetHF;
  var missCost=10/targetHF;
  var cToAVal=(t.A-t.C)/targetHF;
  var statusBorder=iWinAsIs?'rgba(76,175,125,0.4)':'rgba(224,82,82,0.4)';
  var statusIcon=iWinAsIs?'✅':'⚠️';
  var html='<div class="card" style="margin-bottom:10px;border-left:4px solid '+statusBorder+'">'
    +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'
    +'<div style="font-size:24px">'+statusIcon+'</div>'
    +'<div><div style="font-weight:700;font-size:15px">'+(iWinAsIs?'Fortsetter du som nå — du vinner':'Fortsetter du som nå — du taper')+'</div>'
    +'<div style="font-size:12px;color:var(--muted);margin-top:2px">'+(bestRival?'vs. '+bestRival.firstName+' '+bestRival.lastName:'Ingen rival')+(remaining!==null?' · '+remaining+' stage'+(remaining!==1?'r':'')+' igjen':'')+'</div></div></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:11px;text-align:center"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-bottom:3px">Meg</div><div style="font-family:Rajdhani,sans-serif;font-size:24px;font-weight:700;color:var(--accent)">'+scenMyFin.toFixed(1)+'%</div><div style="font-size:11px;color:var(--muted)">Est. neste: '+myEstHF.toFixed(3)+'</div></div>'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:11px;text-align:center"><div style="font-size:10px;color:var(--muted);text-transform:uppercase;margin-bottom:3px">'+(bestRival?bestRival.firstName:'Rival')+'</div><div style="font-family:Rajdhani,sans-serif;font-size:24px;font-weight:700;color:'+(iWinAsIs?'var(--muted)':'var(--red)')+'">'+scenRivFin.toFixed(1)+'%</div><div style="font-size:11px;color:var(--muted)">Est. neste: '+(bestRivalEstHF?bestRivalEstHF.toFixed(3):'—')+'</div></div>'
    +'</div>'
    +(iWinAsIs?'<div style="background:rgba(76,175,125,.1);border-radius:var(--radius-sm);padding:10px;font-size:13px;color:var(--sub)">Du er på rett kurs — est. '+Math.abs(gapPct).toFixed(1)+'% foran.</div>'
              :'<div style="background:rgba(224,82,82,.1);border-radius:var(--radius-sm);padding:10px;font-size:13px;color:var(--sub)">Du er estimert <strong style="color:var(--red)">'+Math.abs(gapPct).toFixed(1)+'% bak</strong>. Trenger HF <strong style="color:var(--accent)">'+targetHF.toFixed(3)+'</strong>.</div>')
    +'</div>';
  html+='<div class="card" style="margin-bottom:10px">'
    +'<div style="font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700;margin-bottom:12px;color:var(--accent)">&#127919; Mål per stage</div>'
    +'<div style="background:linear-gradient(135deg,rgba(232,184,75,.12),rgba(232,184,75,.05));border:1px solid rgba(232,184,75,.25);border-radius:var(--radius-sm);padding:14px;text-align:center;margin-bottom:12px">'
    +'<div style="font-size:11px;color:var(--muted);text-transform:uppercase;margin-bottom:2px">Nødvendig HF</div>'
    +'<div style="font-family:Rajdhani,sans-serif;font-size:42px;font-weight:700;color:var(--accent)">'+targetHF.toFixed(4)+'</div>'
    +(myEstHF>=targetHF?'<div style="font-size:12px;color:var(--green)">✅ innen dagsform</div>':'<div style="font-size:12px;color:var(--red)">⚠️ '+((targetHF-myEstHF)/myEstHF*100).toFixed(1)+'% forbedring</div>')
    +'</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:12px"><div style="font-size:11px;font-weight:600;color:var(--red);margin-bottom:6px;text-transform:uppercase">⏱ Raskere</div>'
    +'<div style="font-family:Rajdhani,sans-serif;font-size:20px;font-weight:700">'+targetTime.toFixed(2)+'s</div><div style="font-size:10px;color:var(--muted)">maks tid</div>'
    +'<div style="margin-top:6px;font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;color:'+(splitDelta>0?'var(--red)':'var(--green)')+'">'+targetSplit.toFixed(3)+'s</div>'
    +'<div style="font-size:10px;color:var(--muted)">split (nå '+impliedSplit.toFixed(3)+'s)</div></div>'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:12px"><div style="font-size:11px;font-weight:600;color:var(--green);margin-bottom:6px;text-transform:uppercase">&#127919; Mer presist</div>'
    +'<div style="font-family:Rajdhani,sans-serif;font-size:22px;font-weight:700;color:var(--green)">'+minA+'A</div><div style="font-size:10px;color:var(--muted)">min A av '+shots+'</div>'
    +'<div style="margin-top:6px;font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;color:var(--accent)">'+(shots-minA)+'C</div><div style="font-size:10px;color:var(--muted)">maks C</div></div>'
    +'</div>'
    +'<div style="background:'+(combWins?'rgba(76,175,125,.08)':'rgba(232,184,75,.08)')+';border:1px solid '+(combWins?'rgba(76,175,125,.25)':'rgba(232,184,75,.25)')+';border-radius:var(--radius-sm);padding:12px">'
    +'<div style="font-size:12px;font-weight:600;margin-bottom:6px;color:'+(combWins?'var(--green)':'var(--accent)')+'">⚡ Kombinert plan</div>'
    +'<div style="font-size:13px;line-height:2;color:var(--sub)">'
    +'🕐 Split: <strong style="color:var(--text)">'+halfSplit.toFixed(3)+'s</strong>'+(halfSplit<impliedSplit?' (−'+(impliedSplit-halfSplit).toFixed(3)+'s)':' (holder)')+'<br>'
    +'🎯 <strong style="color:var(--green)">'+halfA+'A</strong> + <strong style="color:var(--accent)">'+(shots-halfA)+'C</strong><br>'
    +'📈 HF: <strong style="color:'+(combWins?'var(--green)':'var(--red)')+'">'+combHF.toFixed(4)+'</strong> '+(combWins?'✅':'⚠️')
    +'</div></div></div>';
  html+='<div class="card" style="margin-bottom:12px"><div style="font-family:Rajdhani,sans-serif;font-size:15px;font-weight:600;margin-bottom:10px;color:var(--red)">&#128128; Feilkostnader</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:11px;text-align:center"><div style="font-family:Rajdhani,sans-serif;font-size:26px;font-weight:700;color:var(--red)">'+missCost.toFixed(2)+'s</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">1 Miss</div></div>'
    +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:11px;text-align:center"><div style="font-family:Rajdhani,sans-serif;font-size:26px;font-weight:700;color:var(--accent)">'+cToAVal.toFixed(2)+'s</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">C→A verdi</div></div>'
    +'</div></div>';
  container.innerHTML=html;
}

function removeShooter(matchId,shooterId){
  var m=null;for(var i=0;i<matches.length;i++){if(matches[i].id===matchId){m=matches[i];break;}}
  if(!m)return;
  m.shooters=m.shooters.filter(function(s){return s.id!==shooterId;});
  renderRivals();renderForward();saveState();
}

function renderRivals(){
  var m=activeMatch();
  var container=el('rivals-container');
  var standings=el('standings-container');
  if(!container)return;
  if(!m){container.innerHTML='';if(standings)standings.innerHTML='';return;}
  var shooters=m.shooters||[];
  if(!shooters.length){
    container.innerHTML='<div class="card" style="text-align:center;padding:20px"><div style="font-size:32px;margin-bottom:8px">&#127919;</div><div style="font-weight:600;margin-bottom:4px">Ingen skyttere</div><div style="font-size:13px;color:var(--muted)">Trykk + Legg til</div></div>';
    if(standings)standings.innerHTML='<div style="color:var(--muted);font-size:13px;text-align:center;padding:14px">Legg til skyttere</div>';
    return;
  }
  var stagesPlayed=0;for(var i=0;i<shooters.length;i++){if(shooters[i].stages.length>stagesPlayed)stagesPlayed=shooters[i].stages.length;}
  var remaining=m.plannedStages>0?Math.max(0,m.plannedStages-stagesPlayed):null;
  var me=null;for(var i=0;i<shooters.length;i++){if(shooters[i].isMe){me=shooters[i];break;}}
  var html='';
  for(var i=0;i<shooters.length;i++){
    var sh=shooters[i];var isMe=sh.isMe;
    var avgHF=shooterAvgHF(sh);var estHF=shooterEstNextHF(sh);
    var matchPct=shooterMatchPct(sh,shooters);var stgCount=sh.stages.length;
    var delta=null,reqHF=null;
    if(!isMe&&me){delta=shooterMatchPct(me,shooters)-matchPct;}
    var borderStyle=isMe?'border-color:rgba(232,184,75,.35);background:linear-gradient(135deg,var(--card),rgba(232,184,75,.04))':'';
    var avatarBg=isMe?'background:linear-gradient(135deg,var(--accent),#c97b2a);color:var(--bg)':'background:var(--bg3);color:var(--sub)';
    html+='<div class="card" style="margin-bottom:10px;'+borderStyle+'">'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">'
      +'<div style="width:38px;height:38px;border-radius:50%;'+avatarBg+';display:flex;align-items:center;justify-content:center;font-family:Rajdhani,sans-serif;font-weight:700;font-size:15px;flex-shrink:0">'+sh.firstName[0]+(sh.lastName?sh.lastName[0]:'')+'</div>'
      +'<div style="flex:1;min-width:0"><div style="font-weight:600;font-size:14px">'+(isMe?'👤 ':'')+sh.firstName+' '+sh.lastName+(isMe?' (meg)':'')+'</div>'
      +'<div style="font-size:11px;color:var(--muted)">'+sh.division+' · '+cap(sh.pf)+' · '+stgCount+' stages</div></div>'
      +(!isMe?'<button class="btn-sm danger" onclick="removeShooter(\'' +m.id+ '\',\'' +sh.id+ '\')">✕</button>':'')
      +'</div>'
      +'<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:7px;margin-bottom:'+(delta!==null?'10px':'0')+'">'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:9px;text-align:center"><div style="font-family:Rajdhani,sans-serif;font-size:17px;font-weight:700;color:'+(isMe?'var(--accent)':'var(--text)')+'">'+( avgHF>0?avgHF.toFixed(3):'—')+'</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Snitt HF</div></div>'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:9px;text-align:center"><div style="font-family:Rajdhani,sans-serif;font-size:17px;font-weight:700;color:var(--blue)">'+(estHF>0?estHF.toFixed(3):'—')+'</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Est. neste</div></div>'
      +'<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:9px;text-align:center"><div style="font-family:Rajdhani,sans-serif;font-size:17px;font-weight:700;color:var(--green)">'+matchPct.toFixed(1)+'%</div><div style="font-size:10px;color:var(--muted);text-transform:uppercase">Match%</div></div>'
      +'</div>';
    if(delta!==null){
      var ahead=delta>0;
      html+='<div style="background:var(--bg3);border-radius:var(--radius-sm);padding:10px;display:flex;justify-content:space-between;align-items:center">'
        +'<div><div style="font-size:11px;color:var(--muted);margin-bottom:2px">Match% diff</div>'
        +'<div style="font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;color:'+(ahead?'var(--green)':'var(--red)')+'">'+( ahead?'+':'')+delta.toFixed(1)+'%</div></div></div>';
    }
    html+='</div>';
  }
  container.innerHTML=html;
  if(!standings)return;
  var ranked=shooters.slice().sort(function(a,b){return shooterMatchPct(b,shooters)-shooterMatchPct(a,shooters);});
  var sHtml='';
  for(var i=0;i<ranked.length;i++){
    var sh=ranked[i];var isMe=sh.isMe;var pts=shooterMatchPct(sh,shooters);
    var posColor=i===0?'var(--accent)':i===1?'var(--sub)':'var(--muted)';
    sHtml+='<div style="padding:10px 0;border-bottom:'+(i<ranked.length-1?'1px solid var(--border)':'none')+'">'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">'
      +'<div style="font-family:Rajdhani,sans-serif;font-size:20px;font-weight:700;color:'+posColor+';width:24px;text-align:center">'+(i+1)+'</div>'
      +'<div style="flex:1"><div style="font-size:14px;font-weight:'+(isMe?700:500)+'">'+(isMe?'👤 ':'')+'<span style="color:'+(isMe?'var(--accent)':'var(--text)')+'">'+sh.firstName+' '+sh.lastName+'</span></div></div>'
      +'<div style="text-align:right"><div style="font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700;color:'+(isMe?'var(--accent)':'var(--text)')+'">'+pts.toFixed(2)+'%</div></div>'
      +'</div>'
      +'<div class="progress-bar"><div class="progress-fill '+(isMe?'fill-gold':'fill-blue')+'" style="width:'+Math.min(100,pts).toFixed(1)+'%"></div></div>'
      +'</div>';
  }
  standings.innerHTML=sHtml||'<div style="color:var(--muted);font-size:13px;text-align:center;padding:10px">—</div>';
}

function addShooterStageRow(){
  shooterStageCount++;
  var list=el('sh-stages-list');
  var row=document.createElement('div');
  row.style.cssText='display:grid;grid-template-columns:40px 1fr 1fr;gap:8px;margin-bottom:8px;align-items:end';
  row.innerHTML='<div><div class="field-label">Stg</div><input class="field-input" type="number" id="sh-stg-num-'+shooterStageCount+'" placeholder="'+shooterStageCount+'" style="padding:10px 8px;text-align:center"></div>'
    +'<div><div class="field-label">Hit Factor</div><input class="field-input" type="number" id="sh-stg-hf-'+shooterStageCount+'" placeholder="3.9942" style="padding:10px 8px"></div>'
    +'<div><div class="field-label">Total pts</div><input class="field-input" type="number" id="sh-stg-pts-'+shooterStageCount+'" placeholder="55" style="padding:10px 8px"></div>';
  list.appendChild(row);
}
function saveShooter(){
  var m=activeMatch();if(!m)return;
  var fn=gv('sh-firstname').trim();var ln=gv('sh-lastname').trim();
  if(!fn&&!ln){el('sh-firstname').style.borderColor='var(--red)';return;}
  var stages=[];
  for(var i=1;i<=shooterStageCount;i++){
    var numEl=el('sh-stg-num-'+i);var hfEl=el('sh-stg-hf-'+i);var ptsEl=el('sh-stg-pts-'+i);
    if(!numEl)continue;
    var num=parseInt(numEl.value)||i;var hf=parseFloat(hfEl.value)||0;var pts=parseInt(ptsEl.value)||0;
    if(hf>0)stages.push({num:num,hf:hf,pts:pts,pf:gv('sh-pf')});
  }
  if(!m.shooters)m.shooters=[];
  var existing=null;
  for(var i=0;i<m.shooters.length;i++){if(m.shooters[i].firstName.toLowerCase()===fn.toLowerCase()&&m.shooters[i].lastName.toLowerCase()===ln.toLowerCase()){existing=m.shooters[i];break;}}
  if(existing){for(var i=0;i<stages.length;i++){if(!findStage(existing.stages,stages[i].num))existing.stages.push(stages[i]);
    existing.draw=gnv('sh-draw',1.42)||1.42;existing.reloadTime=gnv('sh-reload',1.80)||1.80;}}
  else{m.shooters.push({id:'s'+Date.now(),isMe:false,firstName:fn,lastName:ln,division:gv('sh-division'),pf:gv('sh-pf'),club:gv('sh-club').trim(),draw:gnv('sh-draw',1.42)||1.42,reloadTime:gnv('sh-reload',1.80)||1.80,stages:stages});}
  shooterStageCount=0;el('sh-stages-list').innerHTML='';
  ['sh-firstname','sh-lastname','sh-club'].forEach(function(id){el(id).value='';});
  closeModal('modal-add-shooter');renderRivals();renderForward();saveState();saveState();
}
function parseShooterEmail(){
  var text=gv('sh-email-paste');
  var nameM=text.match(/^\d+\s+(.+)/m);var hfM=text.match(/(\d+\.\d{4})/);
  var timeM=text.match(/(\d+\.\d{2})\s*$/m);var aM=text.match(/(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/);
  var prev=el('sh-parse-preview');
  if(nameM||hfM){
    prev.classList.add('show');
    el('sh-pp-name').textContent=nameM&&nameM[1]?nameM[1]:'—';
    el('sh-pp-hf').textContent=hfM&&hfM[1]?hfM[1]:'—';
    el('sh-pp-time').textContent=timeM&&timeM[1]?timeM[1]+'s':'—';
    el('sh-pp-hits').textContent=aM?(aM[1]+'A '+aM[2]+'C '+aM[3]+'D '+aM[4]+'M '+aM[5]+'NS'):'—';
  }
}
function saveShooterFromEmail(){
  var m=activeMatch();if(!m)return;
  var text=gv('sh-email-paste');
  var nameM=text.match(/^\d+\s+([\w\s,]+)/m);var hfM=text.match(/(\d+\.\d{4})/);
  var stageM=text.match(/Stage[:\s]+.*?(\d+)/i);var aM=text.match(/(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)\s+(\d+)/);
  var pfM=text.match(/Factor[:\s]+(\w+)/i);
  if(!hfM||!nameM)return;
  var fullName=nameM[1].trim().replace(',','').split(/\s+/);
  var lastName=fullName.pop()||'';var firstName=fullName.join(' ')||lastName;
  var stageNum=stageM?parseInt(stageM[1]):1;
  var pts=aM?parseInt(aM[1])*5+parseInt(aM[2])*3+parseInt(aM[3]):0;
  var pf=(pfM&&pfM[1]?pfM[1]:'minor').toLowerCase();
  if(!m.shooters)m.shooters=[];
  var shooter=null;for(var i=0;i<m.shooters.length;i++){if(m.shooters[i].lastName.toLowerCase()===lastName.toLowerCase()){shooter=m.shooters[i];break;}}
  if(shooter){if(!findStage(shooter.stages,stageNum))shooter.stages.push({num:stageNum,hf:parseFloat(hfM[1]),pts:pts,pf:pf});}
  else{m.shooters.push({id:'s'+Date.now(),isMe:false,firstName:firstName,lastName:lastName,division:'Standard',pf:pf,club:'',stages:[{num:stageNum,hf:parseFloat(hfM[1]),pts:pts,pf:pf}]});}
  el('sh-email-paste').value='';el('sh-parse-preview').classList.remove('show');
  closeModal('modal-add-shooter');renderRivals();renderForward();
}
function parseShooterRaw(){el('sh-raw-preview').innerHTML='';}
function saveShootersFromRaw(){closeModal('modal-add-shooter');}

// ── RIVAL SCAN FUNCTIONS ──
var rivalScanResult=null;

function handleRivalScan(event){
  var file=event.target.files&&event.target.files[0];
  if(!file)return;
  el('rival-scan-preview').style.display='none';
  el('rival-scan-error').style.display='none';
  el('rival-scan-status').style.display='block';
  el('rival-scan-status-text').textContent='Analyserer bilde...';
  var reader=new FileReader();
  reader.onload=function(e){
    var base64=e.target.result.split(',')[1];
    callClaudeRivalScan(base64,file.type||'image/jpeg');
  };
  reader.readAsDataURL(file);
  event.target.value='';
}

function callClaudeRivalScan(base64,mediaType){
  var prompt='SSI IPSC stage-resultat bilde. Svar KUN med JSON: {"shooterName":null,"stage":0,"stageName":null,"hf":0.0,"time":0.0,"pts":0,"a":0,"c":0,"d":0,"miss":0,"ns":0,"proc":0}. Fyll inn verdiene du ser. Ingen annen tekst.';
  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:500,
      messages:[{role:'user',content:[
        {type:'image',source:{type:'base64',media_type:mediaType,data:base64}},
        {type:'text',text:prompt}
      ]}]
    })
  })
  .then(function(r){return r.json();})
  .then(function(data){
    el('rival-scan-status').style.display='none';
    if(!data.content||!data.content[0])throw new Error('Tomt svar');
    var text=data.content[0].text.replace(/```json/g,'').replace(/```/g,'').trim();
    var parsed=JSON.parse(text);
    rivalScanResult=parsed;
    showRivalScanPreview(parsed);
  })
  .catch(function(err){
    el('rival-scan-status').style.display='none';
    el('rival-scan-error').style.display='block';
    el('rival-scan-error-text').textContent='Feil: '+err.message;
  });
}

function showRivalScanPreview(r){
  el('rival-scan-preview').style.display='block';
  if(r.shooterName)el('rival-scan-name').value=r.shooterName;
  var rows=[
    {k:'Stage',v:r.stage?(r.stage+(r.stageName?' – '+r.stageName:'')):'—'},
    {k:'Hit Factor',v:r.hf?r.hf.toFixed(4):'—'},
    {k:'Tid',v:r.time?r.time+'s':'—'},
    {k:'A / C / D',v:(r.a||0)+'A   '+(r.c||0)+'C   '+(r.d||0)+'D'},
    {k:'Miss / NS',v:(r.miss||0)+' / '+(r.ns||0)},
  ];
  var html='';
  for(var i=0;i<rows.length;i++){
    html+='<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px">'
      +'<span style="color:var(--muted)">'+rows[i].k+'</span>'
      +'<span style="font-weight:600;font-family:Rajdhani,sans-serif">'+rows[i].v+'</span></div>';
  }
  el('rival-scan-content').innerHTML=html;
}

function confirmRivalScan(){
  if(!rivalScanResult)return;
  var m=activeMatch();if(!m)return;
  var r=rivalScanResult;
  var nameRaw=el('rival-scan-name').value.trim();
  if(!nameRaw)return;
  var parts=nameRaw.split(' ');
  var lastName=parts.pop()||'';
  var firstName=parts.join(' ')||lastName;
  var stageNum=r.stage||1;
  var pf='minor';
  if(!m.shooters)m.shooters=[];
  // Find existing rival by name
  var shooter=null;
  for(var i=0;i<m.shooters.length;i++){
    var s=m.shooters[i];
    if(!s.isMe&&(s.lastName.toLowerCase()===lastName.toLowerCase()||s.firstName.toLowerCase()===firstName.toLowerCase())){
      shooter=s;break;
    }
  }
  var stageData={num:stageNum,hf:r.hf||0,pts:r.pts||0,pf:pf};
  if(shooter){
    if(!findStage(shooter.stages,stageNum))shooter.stages.push(stageData);
    else{var ex=findStage(shooter.stages,stageNum);ex.hf=r.hf||ex.hf;ex.pts=r.pts||ex.pts;}
  } else {
    m.shooters.push({id:'s'+Date.now(),isMe:false,firstName:firstName,lastName:lastName,
      division:'Standard',pf:pf,club:'',draw:1.42,reloadTime:1.80,stages:[stageData]});
  }
  clearRivalScan();
  closeModal('modal-add-shooter');
  renderRivals();renderForward();renderSnapshots();saveState();
  // Show confirmation
  el('rival-scan-status').style.display='block';
  el('rival-scan-status-text').textContent='✅ '+nameRaw+' · Stage '+stageNum+' lagret';
  setTimeout(function(){el('rival-scan-status').style.display='none';},2000);
}

function clearRivalScan(){
  rivalScanResult=null;
  el('rival-scan-preview').style.display='none';
  el('rival-scan-error').style.display='none';
  el('rival-scan-status').style.display='none';
}

// ── SCAN FUNCTIONS ──
var scanResult=null;

function handleScanImage(event){
  var file=event.target.files&&event.target.files[0];
  if(!file)return;
  // Reset UI
  el('scan-preview').style.display='none';
  el('scan-error').style.display='none';
  el('scan-status').style.display='block';
  el('scan-status-text').textContent='Analyserer bilde...';
  el('scan-spinner').style.display='block';

  // Convert to base64
  var reader=new FileReader();
  reader.onload=function(e){
    var base64=e.target.result.split(',')[1];
    var mediaType=file.type||'image/jpeg';
    callClaudeWithImage(base64,mediaType);
  };
  reader.readAsDataURL(file);
  // Reset file input
  event.target.value='';
}

function callClaudeWithImage(base64,mediaType){
  var prompt='Dette er et skjermbilde fra Shoot N Score It (SSI) som viser stage-resultater for en IPSC-skytte. '
    +'Les av følgende verdier nøyaktig fra bildet og svar KUN med JSON, ingen annen tekst:\n'
    +'{\n'
    +'  "stage": <stage-nummer som heltall, eller null>,\n'
    +'  "stageName": "<stage-navn eller null>",\n'
    +'  "hf": <hit factor som desimaltall, f.eks. 5.7143>,\n'
    +'  "time": <tid i sekunder som desimaltall, f.eks. 14.00>,\n'
    +'  "pts": <poeng som heltall>,\n'
    +'  "a": <antall A-treff>,\n'
    +'  "c": <antall C-treff>,\n'
    +'  "d": <antall D-treff>,\n'
    +'  "miss": <antall miss>,\n'
    +'  "ns": <antall no-shoot>,\n'
    +'  "proc": <antall procedural>\n'
    +'}\n'
    +'Hvis du ikke finner en verdi, bruk 0 for tall og null for tekst. '
    +'Svar BARE med JSON-objektet, ingen forklaring.';

  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      model:'claude-sonnet-4-20250514',
      max_tokens:500,
      messages:[{
        role:'user',
        content:[
          {type:'image',source:{type:'base64',media_type:mediaType,data:base64}},
          {type:'text',text:prompt}
        ]
      }]
    })
  })
  .then(function(r){return r.json();})
  .then(function(data){
    el('scan-spinner').style.display='none';
    if(!data.content||!data.content[0]){throw new Error('Tomt svar');}
    var text=data.content[0].text||'';
    // Strip markdown if present
    text=text.replace(/```json/g,'').replace(/```/g,'').trim();
    var parsed=JSON.parse(text);
    scanResult=parsed;
    showScanPreview(parsed);
  })
  .catch(function(err){
    el('scan-status').style.display='none';
    el('scan-error').style.display='block';
    el('scan-error-text').textContent='Feil: '+err.message+'. Sjekk at bildet er tydelig og prøv igjen.';
  });
}

function showScanPreview(r){
  el('scan-status').style.display='none';
  el('scan-preview').style.display='block';
  var rows=[
    {k:'Stage',v:r.stage?(r.stage+(r.stageName?' – '+r.stageName:'')):'—'},
    {k:'Hit Factor',v:r.hf?r.hf.toFixed(4):'—'},
    {k:'Tid',v:r.time?r.time+'s':'—'},
    {k:'Poeng',v:r.pts||0},
    {k:'A / C / D',v:(r.a||0)+'A   '+(r.c||0)+'C   '+(r.d||0)+'D'},
    {k:'Miss / NS',v:(r.miss||0)+' / '+(r.ns||0)},
  ];
  var html='';
  for(var i=0;i<rows.length;i++){
    html+='<div style="display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px">'
      +'<span style="color:var(--muted)">'+rows[i].k+'</span>'
      +'<span style="font-weight:600;font-family:Rajdhani,sans-serif">'+rows[i].v+'</span></div>';
  }
  el('scan-preview-content').innerHTML=html;
}

function confirmScan(){
  if(!scanResult)return;
  var r=scanResult;
  // Switch to manual mode and fill in fields
  var manualBtn=document.querySelector('[onclick="switchMode(this,\'mode-manual\')"]');
  if(manualBtn)switchMode(manualBtn,'mode-manual');
  // Fill fields
  if(r.stage)el('m-stage').value=r.stage;
  if(r.time)el('m-time').value=r.time;
  if(r.a!==undefined)el('m-a').value=r.a||0;
  if(r.c!==undefined)el('m-c').value=r.c||0;
  if(r.d!==undefined)el('m-d').value=r.d||0;
  if(r.miss!==undefined)el('m-miss').value=r.miss||0;
  if(r.ns!==undefined)el('m-ns').value=r.ns||0;
  if(r.proc!==undefined)el('m-proc').value=r.proc||0;
  calcManual();
  clearScan();
  // Show confirmation
  el('scan-status').style.display='block';
  el('scan-spinner').style.display='none';
  el('scan-status-text').textContent='✅ Felt fylt ut — kontroller og trykk Lagre';
}

function clearScan(){
  scanResult=null;
  el('scan-preview').style.display='none';
  el('scan-error').style.display='none';
  el('scan-status').style.display='none';
}

function renderResults(){
  var container=el('results-content');
  var chip=el('results-chip-name');
  var av=el('nav-av-results');
  if(av)av.textContent=initials();
  var m=activeMatch();
  if(chip)chip.textContent=m?m.name:'Ingen match valgt';
  if(!container)return;
  if(!m){
    container.innerHTML='<div class="empty-state"><div class="empty-icon">&#127970;</div><div class="empty-title">Ingen match valgt</div><div class="empty-sub">Velg en match for å se resultater</div></div>';
    return;
  }
  var shooters=m.shooters||[];
  if(shooters.length<1){
    container.innerHTML='<div class="empty-state"><div class="empty-icon">&#127919;</div><div class="empty-title">Ingen skyttere</div><div class="empty-sub">Legg til skyttere i Prognose-fanen</div></div>';
    return;
  }

  // Find stages where ALL shooters have data
  var allStageNums=[];
  if(m.stageDefs){for(var i=0;i<m.stageDefs.length;i++)allStageNums.push(m.stageDefs[i].num);}
  else{
    var numSet={};
    for(var i=0;i<shooters.length;i++){
      for(var j=0;j<shooters[i].stages.length;j++)numSet[shooters[i].stages[j].num]=1;
    }
    for(var k in numSet)allStageNums.push(parseInt(k));
    allStageNums.sort(function(a,b){return a-b;});
  }

  // Only show stages where every shooter has a result
  var validStages=allStageNums.filter(function(n){
    for(var i=0;i<shooters.length;i++){
      if(!findStage(shooters[i].stages,n))return false;
    }
    return true;
  });

  // IPSC Comstock: stage pts = (myHF/winnerHF) * stageMaxPts
  function stageMaxPts(n){
    if(m.stageDefs){var d=findStage(m.stageDefs,n);if(d&&d.maxPts)return d.maxPts;}
    return 0;
  }
  function winnerHFOnStage(n){
    var max=0;
    for(var i=0;i<shooters.length;i++){var s=findStage(shooters[i].stages,n);if(s&&s.hf>max)max=s.hf;}
    return max||1;
  }
  function stagePts(sh,n){
    var stg=findStage(sh.stages,n);if(!stg||!stg.hf)return null;
    var mp=stageMaxPts(n);
    if(!mp){for(var i=0;i<shooters.length;i++){var s2=findStage(shooters[i].stages,n);if(s2&&s2.hf>=winnerHFOnStage(n)){mp=s2.pts||0;break;}}}
    return(stg.hf/winnerHFOnStage(n))*(mp||stg.pts||1);
  }
  function totalMatchPts(sh){
    var sum=0;for(var i=0;i<validStages.length;i++){var p=stagePts(sh,validStages[i]);if(p)sum+=p;}
    return sum;
  }

  // Build ranked list
  var ranked=shooters.slice().sort(function(a,b){return totalMatchPts(b)-totalMatchPts(a);});
  var topPts=totalMatchPts(ranked[0])||1;

  // Stage names
  function stageName(n){
    if(m.stageDefs){var d=findStage(m.stageDefs,n);if(d)return d.name||('S'+n);}
    return 'S'+n;
  }
  function stageShortName(n){
    var full=stageName(n);
    return full.length>10?full.substring(0,9)+'…':full;
  }

  // Find winner of each valid stage
  var stageWinners={};
  for(var i=0;i<validStages.length;i++){
    var n=validStages[i];var maxHF=0;var winnerId=null;
    for(var j=0;j<shooters.length;j++){
      var stg=findStage(shooters[j].stages,n);
      if(stg&&stg.hf>maxHF){maxHF=stg.hf;winnerId=shooters[j].id;}
    }
    stageWinners[n]=winnerId;
  }

  // ── BUILD TABLE ──
  var html='';

  // Match header
  html+='<div style="background:linear-gradient(135deg,var(--card),var(--bg3));padding:14px 18px;border-bottom:1px solid var(--border)">';
  html+='<div style="font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700">'+m.name+'</div>';
  html+='<div style="font-size:12px;color:var(--muted);margin-top:2px">'+fmtDate(m.date)+' · '+m.type+(m.location?' · '+m.location:'')+'</div>';
  html+='<div style="font-size:12px;color:var(--muted);margin-top:2px">';
  html+=validStages.length+' av '+m.plannedStages+' stages fullført av alle skyttere</div>';
  html+='</div>';

  // Scrollable table wrapper
  html+='<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">';
  html+='<table style="width:100%;border-collapse:collapse;min-width:'+(280+validStages.length*64)+'px">';

  // ── HEADER ROW ──
  html+='<thead>';
  html+='<tr style="background:var(--bg3);border-bottom:2px solid var(--border)">';
  html+='<th style="text-align:left;padding:10px 8px 10px 18px;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;white-space:nowrap;position:sticky;left:0;background:var(--bg3);min-width:130px">#  Navn</th>';
  html+='<th style="text-align:right;padding:10px 8px;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;white-space:nowrap;min-width:70px">Pts</th>';
  html+='<th style="text-align:right;padding:10px 12px 10px 4px;font-size:11px;font-weight:600;color:var(--accent);text-transform:uppercase;white-space:nowrap;min-width:60px">%</th>';
  for(var i=0;i<validStages.length;i++){
    var n=validStages[i];
    html+='<th style="text-align:right;padding:10px 8px;font-size:10px;font-weight:600;color:var(--muted);text-transform:uppercase;white-space:nowrap;min-width:60px">S'+n+'<br><span style="font-size:9px;font-weight:400;color:var(--border)">'+stageShortName(n)+'</span></th>';
  }
  html+='</tr></thead>';

  // ── DATA ROWS ──
  html+='<tbody>';
  for(var r=0;r<ranked.length;r++){
    var sh=ranked[r];var isMe=sh.isMe;
    var mPts=totalMatchPts(sh);
    var mPct=mPts/topPts*100;
    var rowBg=isMe?'background:rgba(232,184,75,.05)':'';
    var isFirst=r===0;

    html+='<tr style="border-bottom:1px solid var(--border);'+rowBg+'">';

    // Name cell — sticky left
    html+='<td style="padding:12px 8px 12px 18px;white-space:nowrap;position:sticky;left:0;background:'+(isMe?'rgba(24,28,36,.98)':'rgba(18,19,24,.98)')+';">';
    html+='<div style="display:flex;align-items:center;gap:8px">';
    html+='<div style="font-family:Rajdhani,sans-serif;font-size:18px;font-weight:700;color:'+(isFirst?'var(--accent)':r===1?'var(--sub)':r===2?'#cd7f32':'var(--muted)')+';width:16px;text-align:center">'+(r+1)+'</div>';
    html+='<div>';
    html+='<div style="font-size:13px;font-weight:'+(isMe?700:500)+';color:'+(isMe?'var(--accent)':'var(--text)')+'">'+(isMe?'👤 ':'')+sh.firstName+' '+sh.lastName+'</div>';
    html+='<div style="font-size:10px;color:var(--muted)">'+sh.division+' · '+cap(sh.pf)+'</div>';
    html+='</div></div></td>';

    // Match pts
    html+='<td style="text-align:right;padding:12px 8px;font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700;color:'+(isFirst?'var(--accent)':'var(--text)')+'">'+mPts.toFixed(2)+'</td>';

    // Match %
    html+='<td style="text-align:right;padding:12px 12px 12px 4px;font-family:Rajdhani,sans-serif;font-size:16px;font-weight:700;color:'+(isFirst?'var(--accent)':'var(--sub)')+'">'+mPct.toFixed(2)+'%</td>';

    // Stage pts
    for(var i=0;i<validStages.length;i++){
      var n=validStages[i];
      var sp=stagePts(sh,n);
      var isStageWinner=stageWinners[n]===sh.id;
      var stg=findStage(sh.stages,n);
      var hfStr=stg?stg.hf.toFixed(4):'—';
      var spStr=sp!==null?sp.toFixed(1):'—';
      var cellColor=isStageWinner?'var(--green)':'var(--text)';
      html+='<td style="text-align:right;padding:12px 8px;white-space:nowrap">';
      html+='<div style="font-family:Rajdhani,sans-serif;font-size:14px;font-weight:700;color:'+cellColor+'">'+spStr+'</div>';
      html+='<div style="font-size:10px;color:var(--muted)">'+hfStr+'</div>';
      html+='</td>';
    }
    html+='</tr>';
  }
  html+='</tbody></table></div>';

  // ── STAGE LEGEND ──
  if(validStages.length>0){
    html+='<div style="padding:14px 18px;border-top:1px solid var(--border)">';
    html+='<div style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;margin-bottom:8px">Stage-oversikt</div>';
    for(var i=0;i<validStages.length;i++){
      var n=validStages[i];
      var maxP=stageMaxPts(n);
      html+='<div style="display:flex;justify-content:space-between;font-size:12px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)">';
      html+='<span style="color:var(--muted)">S'+n+' — '+stageName(n)+'</span>';
      html+='<span style="color:var(--accent);font-family:Rajdhani,sans-serif;font-weight:600">'+maxP+' pts</span>';
      html+='</div>';
    }
    // Pending stages
    var pendingStages=allStageNums.filter(function(n){return validStages.indexOf(n)<0;});
    if(pendingStages.length>0){
      html+='<div style="margin-top:10px;font-size:11px;color:var(--muted)">';
      html+='Stages ikke fullført av alle: ';
      for(var i=0;i<pendingStages.length;i++){
        html+='<span style="background:var(--bg3);border-radius:4px;padding:2px 6px;margin:0 2px">S'+pendingStages[i]+'</span>';
      }
      html+='</div>';
    }
    html+='</div>';
  }

  container.innerHTML=html;
}

function renderProfile(){
  var av=initials();
  var navIds=['prof-avatar','nav-av-home','nav-av-matches','nav-av-prog'];
  for(var i=0;i<navIds.length;i++){var e2=el(navIds[i]);if(e2)e2.textContent=av;}
  el('prof-name').textContent=profile.firstName+' '+profile.lastName;
  el('prof-div').textContent=profile.division+' · '+profile.club;
  el('prof-badge-pf').textContent=cap(profile.powerFactor);
  el('prof-badge-region').textContent=profile.region;
  el('info-firstname').textContent=profile.firstName;
  el('info-lastname').textContent=profile.lastName;
  el('info-division').textContent=profile.division;
  el('info-category').textContent=profile.category;
  el('info-pf').textContent=cap(profile.powerFactor);
  el('info-region').textContent=profile.region;
  el('info-club').textContent=profile.club;
  updateProfileStats();
}
function updateProfileStats(){
  var all=[];for(var i=0;i<matches.length;i++)for(var j=0;j<matches[i].stages.length;j++)all.push(matches[i].stages[j]);
  var totalA=0,totalHits=0,totalHF=0;
  for(var i=0;i<all.length;i++){totalA+=all[i].a||0;totalHits+=(all[i].a||0)+(all[i].c||0)+(all[i].d||0);totalHF+=all[i].hf;}
  var avgHF=all.length?(totalHF/all.length).toFixed(2):'—';
  var aRate=totalHits?Math.round(totalA/totalHits*100)+'%':'—';
  el('stat-matches').textContent=matches.length;el('stat-stages').textContent=all.length;
  el('stat-avg-hf').textContent=avgHF;el('stat-a-rate').textContent=aRate;
  el('prog-a-rate').textContent=aRate;
}
function openEditProfile(){
  el('edit-firstname').value=profile.firstName;el('edit-lastname').value=profile.lastName;el('edit-club').value=profile.club;
  el('edit-draw').value=profile.draw||1.42;el('edit-reload').value=profile.reloadTime||1.80;
  var opts='';for(var i=0;i<DIVS.length;i++)opts+='<option value="'+DIVS[i]+'"'+(DIVS[i]===profile.division?' selected':'')+'>'+DIVS[i]+'</option>';
  el('edit-division').innerHTML=opts;
  var catOpts='';for(var i=0;i<CATS.length;i++)catOpts+='<option value="'+CATS[i]+'"'+(CATS[i]===profile.category?' selected':'')+'>'+CATS[i]+'</option>';
  el('edit-category').innerHTML=catOpts;
  var regOpts='';for(var i=0;i<REGIONS.length;i++)regOpts+='<option value="'+REGIONS[i]+'"'+(REGIONS[i]===profile.region?' selected':'')+'>'+REGIONS[i]+'</option>';
  el('edit-region').innerHTML=regOpts;
  updatePFOptions();openModal('modal-edit-profile');
}
function updatePFOptions(){
  var div=gv('edit-division');var allowed=DIV_PF[div]||['minor','major'];
  var html='';
  for(var i=0;i<allowed.length;i++){
    var pf=allowed[i];
    html+='<label class="pf-option'+(profile.powerFactor===pf?' active':'')+'" onclick="selectPF(this,\''+pf+'\')">'  
      +'<input type="radio" name="pf" value="'+pf+'" style="display:none">'
      +'<div class="pf-label">'+pf.toUpperCase()+'</div>'
      +'<div class="pf-sub">'+(pf==='major'?'≥170 PF':'<170 PF')+'</div></label>';
  }
  el('pf-options').innerHTML=html;
  if(allowed.indexOf(profile.powerFactor)<0)profile.powerFactor=allowed[0];
}
function selectPF(elem,pf){
  var opts=document.querySelectorAll('.pf-option');for(var i=0;i<opts.length;i++)opts[i].classList.remove('active');
  elem.classList.add('active');profile.powerFactor=pf;
}
function saveProfile(){
  profile.firstName=gv('edit-firstname').trim()||profile.firstName;
  profile.lastName=gv('edit-lastname').trim()||profile.lastName;
  profile.division=gv('edit-division');profile.category=gv('edit-category');
  profile.region=gv('edit-region');profile.club=gv('edit-club').trim()||profile.club;
  profile.draw=gnv('edit-draw',1.42)||1.42;profile.reloadTime=gnv('edit-reload',1.80)||1.80;
  var btn=el('save-profile-btn');
  btn.textContent='✓ Lagret!';btn.style.background='var(--green)';
  setTimeout(function(){btn.textContent='Lagre profil';btn.style.background='';},1800);
  renderProfile();calcPrognose();renderHome();closeModal('modal-edit-profile');saveState();
}

// ── LOCALSTORAGE PERSISTENCE ──
var STORAGE_KEY='ipsc_insight_v1';

function saveState(){
  try{
    var state={profile:profile,matches:matches,activeMatchId:activeMatchId};
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
  }catch(e){console.warn('Save failed:',e);}
}

function loadState(){
  try{
    var raw=localStorage.getItem(STORAGE_KEY);
    if(!raw)return false;
    var state=JSON.parse(raw);
    if(state.profile)Object.assign(profile,state.profile);
    if(state.matches&&state.matches.length)matches=state.matches;
    if(state.activeMatchId)activeMatchId=state.activeMatchId;
    return true;
  }catch(e){console.warn('Load failed:',e);return false;}
}

// Auto-save after any data change
function saveAndRender(fn){
  if(fn)fn();
  saveState();
}

// ── INIT ──
loadState();
renderProfile();
renderHome();
renderMatchList();
// Sync prognose inputs from profile
if(el('prog-draw'))el('prog-draw').value=profile.draw||1.42;
calcPrognose();
renderResults();

// Register Service Worker for offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('SW registered:', reg.scope))
      .catch(err => console.log('SW registration failed:', err));
  });
}


window.setLanguage = setLanguage;
window.navigate = navigate;
window.switchTab = switchTab;
window.setFilter = setFilter;
window.selectMatch = selectMatch;
window.createMatch = createMatch;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOutside = closeModalOutside;
window.switchMode = switchMode;
window.addStage = addStage;
window.addStageResult = addStageResult;
window.calcPrognose = calcPrognose;
window.removeShooter = removeShooter;
window.openEditProfile = openEditProfile;
window.selectPF = selectPF;
window.saveProfile = saveProfile;
