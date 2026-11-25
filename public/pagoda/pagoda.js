/* Nigel Kok portfolio: the pagoda site and its editor page. Plain browser script, loaded by components/Pagoda.tsx. */
(function () {
'use strict';
/* ---------- content: one source for the 3D panels and the readable page ---------- */
var IMG_SRC = {
  avatar:'/pagoda/img/avatar.jpg', cutf:'/pagoda/img/cutf.png', cutb:'/pagoda/img/cutb.png', pes1:'/pagoda/img/pes1.jpg', pes2:'/pagoda/img/pes2.jpg', pes3:'/pagoda/img/pes3.jpg', pes4:'/pagoda/img/pes4.jpg',
  ict1:'/pagoda/img/ict1.jpg', ict2:'/pagoda/img/ict2.jpg', ict3:'/pagoda/img/ict3.jpg', ict4:'/pagoda/img/ict4.jpg', bppp:'/pagoda/img/bppp.jpg',
  badge:'/pagoda/img/badge.png', my1:'/pagoda/img/my1.jpg', my2:'/pagoda/img/my2.jpg', my3:'/pagoda/img/my3.jpg', chutes:'/pagoda/img/chutes.jpg',
  app1:'/pagoda/img/app1.jpg', app2:'/pagoda/img/app2.jpg', app3:'/pagoda/img/app3.jpg'
};
var GH = 'https://github.com/Naijeruluvmatcha';
var RESUME = '/NIGELKOK_RESUME.pdf';
var STEPS = [
  { type:'hero', short:'Hello', piece:'HELLO', kicker:'Cloud Engineering · APU', title:'Nigel Kok Jia Wei',
    body:'Cloud Engineering undergraduate building resilient, automated infrastructure. Based in Kuala Lumpur, open to relocate.',
    tags:['Cloud Engineering','Networking','React / TypeScript','Infrastructure Design'], photo:'avatar',
    caption:'Kuala Lumpur, Malaysia',
    actions:[{t:'See my projects',step:2},{t:'Resume (PDF)',href:RESUME,ghost:1}] },
  { type:'about', short:'About', piece:'ABOUT', kicker:'01 · About', title:'Cloud Engineering student from APU.',
    body:'I have internship experience in programming and web development. My course gave me networking and base-layer network security, and I use both in my own projects.',
    stats:[['6','Featured projects'],['3','Academic builds'],['3','Certification tracks']],
    facts:[['Based in','Kuala Lumpur, Malaysia'],['Studying','BSc IT, Cloud Engineering'],['Open to','Relocation']],
    actions:[{t:'Open GitHub',href:GH,ghost:1},{t:'Resume (PDF)',href:RESUME,ghost:1}] },
  { type:'project', short:'PESAWI', piece:'PESAWI', kicker:'Project 1 of 6', title:'PESAWI 2026 Live Scoreboard',
    body:'Live scoring site for a 5-zone, 9-sport inter-region festival, with public and admin views and real-time standings.',
    tags:['Vanilla JS','Supabase'], frames:['pes1','pes2','pes3','pes4'],
    alt:'PESAWI scoreboard screens: schedule, standings and the scorekeeper dashboard',
    caption:'Captured locally, with sample matches added.',
    case:[['What it does','A public scoreboard plus an admin view for scorekeepers.'],['The hard part','Keeping standings right across 5 zones and 9 sports.'],['Built with','Vanilla JS and Supabase.']],
    actions:[{t:'View code',href:GH+'/pesawisportslivescoreboard',ghost:1}] },
  { type:'project', short:'Data Centre', piece:'DATA CENTRE', kicker:'Project 2 of 6', title:'Cloud Data Centre Infrastructure',
    body:'Multi-tenant cloud architecture with a 7-layer network topology, dual server halls and multi-ISP redundancy.',
    tags:['Network Design','Tier III'], frames:[], missing:'Topology diagram goes here',
    caption:'Image still to be added.',
    case:[['What it does','A multi-tenant cloud design on a 7-layer topology.'],['The hard part','Dual server halls and multi-ISP redundancy.'],['Built with','Network design and 3D modelling, as a group report.']],
    actions:[{t:'More on GitHub',href:GH,ghost:1}] },
  { type:'project', short:'ICTOSH', piece:'ICTOSH', kicker:'Project 3 of 6', title:'ICT & OSH Staff Portal',
    body:'Role-based internal ticket portal for Yayasan Sabah, ported to a full React and TypeScript app.',
    tags:['React','TypeScript','Vite'], frames:['ict1','ict2','ict3','ict4'],
    alt:'ICTOSH portal screens: dashboard, new request, admin queue and analytics',
    caption:'Captured locally, with the demo accounts.',
    case:[['What it does','Staff raise tickets and admins work a request queue.'],['The hard part','Different views and permissions for each role.'],['Built with','React, TypeScript and Vite.']],
    actions:[{t:'View code',href:GH+'/ictosh',ghost:1}] },
  { type:'project', short:'Childcare Portal', piece:'APPSCRIPT', kicker:'Project 4 of 6', title:'Childcare Application Portal',
    body:'Online application portal for the Tadika, Taska and Pusat Jagaan Ria childcare programmes, built on Google Apps Script at Yayasan Sabah Group.',
    tags:['Apps Script','Google Sheets','JavaScript','clasp'], frames:['app1','app2','app3'],
    alt:'Childcare application portal screens: home page, application form and admin login',
    caption:'Screenshots from the repo. The live site is in Malay.',
    case:[['What it does','Parents apply and check status online. Staff review in an admin page and a Google Sheet.'],['The hard part','Showing the right fee table per facility, with no password in the code.'],['Built with','Apps Script, Google Sheets as the database, clasp and GitHub.']],
    actions:[{t:'Live site',href:'https://tinyurl.com/Permohonan-tadika-YS'},{t:'More on GitHub',href:GH,ghost:1}] },
  { type:'project', short:'BPPP Portal', piece:'BPPP', kicker:'Project 5 of 6', title:'BPPP Loan Repayment Portal',
    body:"A redesign of Yayasan Sabah's education loan repayment portal. It began as an HCI coursework critique and grew into a bilingual rebuild.",
    tags:['HCI','React','Django','BM / EN'], frames:['bppp'], alt:'Homepage of the redesigned BPPP loan repayment portal',
    caption:'Screenshot from the repo.',
    case:[['What it does','Login, dashboard and rebate application in one portal.'],['The hard part','Making it clear in both Bahasa Malaysia and English.'],['Built with','An HCI critique first, then React and Django.']],
    actions:[{t:'Live site',href:'https://educationloanrepaymentportal.netlify.app/'},{t:'View code',href:GH+'/bppp-portal',ghost:1}] },
  { type:'project', short:'This Portfolio', piece:'THIS SITE', kicker:'Project 6 of 6', title:'About this portfolio',
    body:'A static site on AWS. A private S3 bucket sits behind CloudFront, GitHub Actions deploys every push, and Terraform defines the infrastructure.',
    tags:['AWS','S3','CloudFront','Terraform','GitHub Actions'], frames:[], diagram:true,
    alt:'Architecture diagram: visitors reach CloudFront and a private S3 bucket; GitHub Actions deploys; an API Gateway visitor counter; CloudWatch alarms notify through SNS; Terraform defines it all',
    caption:'Architecture of the portfolio on AWS.',
    case:[['How it is built','Next.js static export, uploaded to a private S3 bucket.'],['How AWS runs it','CloudFront serves it over HTTPS with origin access control. CloudWatch alarms alert through SNS.'],['How it ships','A push to master runs GitHub Actions: build, S3 sync, CloudFront invalidation.']],
    actions:[{t:'Live site',href:'https://d2t0v93771gi8b.cloudfront.net/'},{t:'More on GitHub',href:GH,ghost:1}] },
  { type:'skills', short:'Skills', piece:'SKILLS', kicker:'03 · Skills', title:'Tools I work with.',
    groups:[['Languages and frameworks',['Java','C#','ASP.NET','JavaScript','TypeScript','Node.js','React','SQL','MySQL']],
            ['Networking',['TCP/IP','Subnetting','VLANs','LAN/WAN troubleshooting','Cisco IOS']],
            ['Infrastructure and cloud',['AWS Console','AWS scripting','Terraform','S3','Multi-tenant cloud','Topology design','Linux CLI']]],
    also:'Also built: GogoCoffee (Java concurrency), KODOMO (ASP.NET e-learning), Hotel Reservation (UML design).',
    alsoList:[['GogoCoffee','Java concurrency'],['KODOMO','ASP.NET e-learning'],['Hotel Reservation','UML design']],
    actions:[{t:'More on GitHub',href:GH,ghost:1}] },
  { type:'certs', short:'Certificates', piece:'CERTS', kicker:'04 · Certifications', title:'Proof, with paper.',
    wall:[
      {n:'MY5G Ericsson Malaysia Pioneers Programme',by:'Ericsson',yr:'',img:'badge',more:['my1','my2','my3'],href:'',feat:1},
      {n:'Plug-and-Play AI: Building Applications with Chutes.ai',by:'Chutes.ai workshop',yr:'',img:'chutes',more:[],href:'',feat:0},
      {n:'Cisco Networking Academy',by:'Python, Linux, CCNA (in progress)',yr:'',img:'',more:[],href:'',feat:0}],
    actions:'certs' },
  { type:'contact', short:'Contact', piece:'CONTACT', kicker:'05 · Contact', title:"Let's build something.",
    body:'Looking for a cloud engineering internship in Kuala Lumpur or Selangor.',
    links:[['GitHub','Naijeruluvmatcha',GH],['LinkedIn','nigel-kok',"https://www.linkedin.com/in/nigel-kok-a512583b3"],['Resume','PDF',RESUME]],
    facts:[['Location','Kuala Lumpur, Malaysia']],
    actions:[{t:'GitHub',href:GH},{t:'LinkedIn',href:'https://www.linkedin.com/in/nigel-kok-a512583b3',ghost:1},{t:'Resume (PDF)',href:RESUME,ghost:1}] }
];
/* ---------- CMS: an edited copy of the content can be kept in this browser and replaces the defaults ---------- */
var CMS_KEY = 'nk-pagoda-content-v1', CMS_IMAGES = {};
STEPS.forEach(function (s, i) { if (s.prop == null) s.prop = i; });
var DEFAULT_STEPS = JSON.parse(JSON.stringify(STEPS));
function cmsValid(st){
  return Array.isArray(st) && st.length >= 5 && st.length <= 13 && st[0] && st[0].type === 'hero' && st[st.length - 1].type === 'contact' &&
    st.every(function (s) { return s && typeof s.title === 'string' && /^(hero|about|project|skills|certs|contact)$/.test(s.type); });
}
(function cmsLoad(){
  /* 1. the published content (content/content.json, turned into /pagoda/content.js at build time) */
  var pub = window.NK_CONTENT, pubT = 0;
  try {
    if (pub && cmsValid(pub.steps)) {
      pubT = +pub.t || 0; Object.keys(pub.images || {}).forEach(function (k) { IMG_SRC[k] = pub.images[k]; });
      STEPS = pub.steps; DEFAULT_STEPS = JSON.parse(JSON.stringify(pub.steps));
    }
  } catch (e) {}
  /* 2. edits saved in this browser by the editor page, unless the published file is newer */
  try {
    var raw = localStorage.getItem(CMS_KEY); if (!raw) return;
    var d = JSON.parse(raw); if (!d || !cmsValid(d.steps)) return;
    if (pubT && (+d.t || 0) <= pubT) { localStorage.removeItem(CMS_KEY); return; }
    CMS_IMAGES = d.images || {}; Object.keys(CMS_IMAGES).forEach(function (k) { IMG_SRC[k] = CMS_IMAGES[k]; });
    STEPS = d.steps;
  } catch (e) {}
})();
function cmsUrl(u){ u = String(u || '').trim(); return /^(https?:\/\/|mailto:|tel:|\/|#)/i.test(u) ? u.replace(/"/g, '%22').replace(/</g, '%3C').replace(/>/g, '%3E') : ''; }
function cmsTidy(st){ /* fill in anything a panel needs, drop pictures that no longer exist, number the projects */
  var np = st.filter(function (s) { return s.type === 'project'; }).length, pj = 0;
  st.forEach(function (s) {
    if (s.type === 'about') { s.stats = s.stats || []; s.facts = s.facts || []; }
    if (s.type === 'project') { pj++; s.frames = (s.frames || []).filter(function (k) { return IMG_SRC[k]; }); s.case = s.case || []; s.caption = s.caption || ''; s.tags = s.tags || []; if (!s.frames.length && !s.diagram && !s.missing) s.missing = 'Screenshot goes here'; if (/^Project \d+ of \d+$/.test(s.kicker || '')) s.kicker = 'Project ' + pj + ' of ' + np; }
    if (s.type === 'skills') { s.groups = s.groups || []; s.alsoList = s.alsoList || []; s.also = s.alsoList.length ? 'Also built: ' + s.alsoList.map(function (a) { return a[0] + ' (' + a[1] + ')'; }).join(', ') + '.' : ''; }
    if (s.type === 'certs') {
      if (!s.wall) s.wall = (s.cards || []).map(function (cd) { var ims = (cd.imgs || []).filter(function (k) { return IMG_SRC[k]; }); return { n:cd.h || '', by:cd.p || '', yr:'', img:ims[0] || '', more:ims.slice(1), href:'', feat:0 }; }); /* older saves used cards */
      s.wall = s.wall.slice(0, 8).map(function (t) { return { n:String(t.n || ''), by:String(t.by || ''), yr:String(t.yr || ''), img:IMG_SRC[t.img] ? t.img : '', more:(t.more || []).filter(function (k) { return IMG_SRC[k]; }), href:t.href ? cmsUrl(t.href) : '', feat:t.feat ? 1 : 0 }; });
      delete s.cards; delete s.certs; s.actions = 'certs';
    }
    if (s.type === 'contact') { s.links = s.links || []; s.facts = s.facts || []; s.actions = s.actions || []; }
    if (Array.isArray(s.actions)) s.actions = s.actions.filter(function (a) { return a && a.t; }).map(function (a) { if (a.href != null) a.href = cmsUrl(a.href); return a; });
    if (Array.isArray(s.links)) s.links = s.links.map(function (l) { return [l[0], l[1], cmsUrl(l[2])]; });
    s.kicker = String(s.kicker || ''); s.short = s.short || s.title; s.piece = (s.piece || s.short || 'ROOM').toUpperCase().slice(0, 12);
  });
  return st;
}
cmsTidy(STEPS);
function propOf(i){ var s = STEPS[i]; return s && s.prop != null ? s.prop : i; }
(function cmsLinks(){ /* menu buttons and the hero button point at wherever those rooms now are */
  function first(t){ for (var i = 0; i < STEPS.length; i++) if (STEPS[i].type === t) return i; return -1; }
  var map = { '1':'about', '2':'project', '8':'skills', '9':'certs', '10':'contact' };
  document.querySelectorAll('[data-step]').forEach(function (b) { var k = map[b.getAttribute('data-step')]; if (!k) return; var ix = first(k); if (ix < 0) b.hidden = true; else b.setAttribute('data-step', ix); });
  (STEPS[0].actions || []).forEach(function (a) { if (a.step != null) a.step = Math.max(1, first('project')); });
})();
var N = STEPS.length;
var reduce = false; try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
function $(id){ return document.getElementById(id); }
function pad2(n){ return (n < 10 ? '0' : '') + n; }
function el(tag, cls, html){ var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }

/* ---------- readable copy of everything (screen readers, SEO, no-WebGL) ---------- */
(function buildContent(){
  var m = $('content'), h = '';
  STEPS.forEach(function (s, i) {
    h += '<section id="sec' + i + '" aria-label="' + esc(s.short) + '"><div class="k">' + esc(s.kicker) + '</div>' +
      '<h' + (i === 0 ? 1 : 2) + '>' + esc(s.title) + '</h' + (i === 0 ? 1 : 2) + '>';
    if (s.photo) h += '<img alt="Portrait of Nigel Kok" src="' + IMG_SRC[s.photo] + '" width="180" height="180">';
    if (s.body) h += '<p>' + esc(s.body) + '</p>';
    if (s.stats) h += '<ul>' + s.stats.map(function (x) { return '<li><b>' + x[0] + '</b> ' + esc(x[1]) + '</li>'; }).join('') + '</ul>';
    if (s.tags) h += '<p>' + s.tags.map(esc).join(', ') + '</p>';
    if (s.case) h += '<ul>' + s.case.map(function (x) { return '<li><b>' + esc(x[0]) + ':</b> ' + esc(x[1]) + '</li>'; }).join('') + '</ul>';
    if (s.frames && s.frames.length) h += '<img alt="' + esc(s.alt || s.title) + '" src="' + IMG_SRC[s.frames[0]] + '">';
    if (s.groups) h += s.groups.map(function (g) { return '<h3>' + esc(g[0]) + '</h3><p>' + g[1].map(esc).join(', ') + '</p>'; }).join('') + '<p>' + esc(s.also) + '</p>';
    if (s.wall) h += s.wall.map(function (t) { return '<h3>' + esc(t.n) + '</h3><p>' + esc([t.by, t.yr].filter(Boolean).join(' · ')) + '</p>' + (t.img ? '<img alt="' + esc(t.n) + ' badge" src="' + IMG_SRC[t.img] + '" width="120">' : '') + (t.href ? '<p><a href="' + t.href + '" rel="noopener">Verify ' + esc(t.n) + '</a></p>' : ''); }).join('');
    if (s.facts) h += '<ul>' + s.facts.map(function (x) { return '<li><b>' + esc(x[0]) + ':</b> ' + esc(x[1]) + '</li>'; }).join('') + '</ul>';
    if (s.links) h += '<ul>' + s.links.map(function (x) { return '<li><a href="' + x[2] + '" rel="noopener">' + esc(x[0]) + '</a></li>'; }).join('') + '</ul>';
    if (Array.isArray(s.actions)) s.actions.forEach(function (a) { if (a.href) h += '<p><a href="' + a.href + '" rel="noopener">' + esc(a.t) + '</a></p>'; });
    h += '</section>';
  });
  m.innerHTML = h;
})();

(function fillContact(){
  var s = STEPS[N - 1], h = '<span class="seal" aria-hidden="true">\u7E01</span><div class="top"><div><p class="k">' + esc(s.kicker) + '</p><h2>' + esc(s.title) + '</h2></div><img class="pf" src="' + IMG_SRC.avatar + '" alt="Portrait of Nigel Kok" width="132" height="132"></div><p>' + esc(s.body) + '</p><dl>';
  (s.facts || []).forEach(function (f) { h += '<dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd>'; });
  (s.links || []).forEach(function (l) { h += '<dt>' + esc(l[0]) + '</dt><dd><a href="' + l[2] + '" target="_blank" rel="noopener">' + esc(l[1]) + '</a></dd>'; });
  h += '</dl><div class="row">';
  (s.actions || []).forEach(function (a) { h += '<a class="btn' + (a.ghost ? ' ghost' : '') + '" href="' + a.href + '" target="_blank" rel="noopener">' + esc(a.t) + '</a>'; });
  $('cc').innerHTML = h + '</div><p class="cc-foot">\u00A9 ' + new Date().getFullYear() + ' Nigel Kok Jia Wei<span id="ccvis"></span></p>';
  try { fetch('https://dj1nlgjgp2.execute-api.us-east-1.amazonaws.com/count').then(function (r) { if (!r.ok) throw 0; return r.json(); }).then(function (d) { if (typeof d.count === 'number') $('ccvis').textContent = ' \u00B7 ' + d.count.toLocaleString() + ' visitors'; }).catch(function () {}); } catch (e) {}
})();
(function fillHero(){
  var s = STEPS[0], parts = s.title.split(' ');
  $('heron').innerHTML = esc(parts.slice(0, 2).join(' ')) + '<span>' + esc(parts.slice(2).join(' ')) + '</span>';
  $('herob').textContent = s.body;
  $('herot').innerHTML = s.tags.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
  $('heror').href = RESUME;
})();
if (!window.BABYLON || !BABYLON.Engine.isSupported()) { document.documentElement.classList.add('nogl'); return; }
var BAB = BABYLON;

/* ---------- theme tokens ---------- */
var T = {}, css = null;
function readTheme(){
  css = getComputedStyle(document.documentElement);
  ['bg','card','ink','muted','line','accent','on-accent','sage','mint','sand','shell','core','rod','disc'].forEach(function (k) { T[k] = css.getPropertyValue('--' + k).trim(); });
}
readTheme();
function c3(hex){ return BAB.Color3.FromHexString(hex.length === 4 ? '#' + hex[1]+hex[1]+hex[2]+hex[2]+hex[3]+hex[3] : hex); }

/* ---------- engine, scene, camera, lights ---------- */
var canvas = $('c');
var engine;
try { engine = new BAB.Engine(canvas, true, { alpha:true, antialias:true, stencil:false, powerPreference:'high-performance' }, true); }
catch (e) { document.documentElement.classList.add('nogl'); return; }
var scene = new BAB.Scene(engine);
scene.clearColor = new BAB.Color4(0,0,0,0);
var IPC = scene.imageProcessingConfiguration; IPC.toneMappingEnabled = true; IPC.toneMappingType = BAB.ImageProcessingConfiguration.TONEMAPPING_ACES; IPC.exposure = 1.14; IPC.contrast = 1.06;
var plainIP = new BAB.ImageProcessingConfiguration(); plainIP.toneMappingEnabled = false;
scene.fogMode = BAB.Scene.FOGMODE_EXP2; scene.fogDensity = 0.017; scene.fogColor = new BAB.Color3(0.9, 0.84, 0.72);
scene.preventDefaultOnPointerDown = false; scene.preventDefaultOnPointerUp = false;
var FOV = 0.7, CAMZ = 15, DOLLY = 1.3, PANEL_Z = -3.4, CAMY = 1.1, PITCH = Math.atan2(CAMY, CAMZ);
var cam = new BAB.FreeCamera('cam', new BAB.Vector3(0, CAMY, -CAMZ - DOLLY), scene);
cam.setTarget(new BAB.Vector3(0, 0, 0)); cam.fov = FOV; cam.minZ = 0.08; cam.maxZ = 60;
var hemi = new BAB.HemisphericLight('h', new BAB.Vector3(0.2, 1, -0.4), scene); hemi.intensity = 0.55; hemi.groundColor = new BAB.Color3(0.52,0.45,0.38);
var sun = new BAB.DirectionalLight('d', new BAB.Vector3(-0.5, -0.6, 0.8), scene); sun.intensity = 0.95;

function mat(name, hex, spec, power){
  var m = new BAB.StandardMaterial(name, scene);
  m.diffuseColor = c3(hex); m.specularColor = new BAB.Color3(spec, spec, spec); m.specularPower = power || 48;
  return m;
}
var M = {
  shell: mat('shell', T.shell, 0.55, 40), core: mat('core', T.core, 0.5, 60), rod: mat('rod', T.rod, 0.4, 60),
  disc: mat('disc', T.disc, 0.3, 50), sand: mat('sand', T.sand, 0.6, 70), pine: mat('pine', T.sage, 0.5, 60)
};
M.pine.emissiveColor = c3(T.sage).scale(0.5);
M.sand.emissiveColor = c3(T.sand).scale(0.4);
function applyMaterialTheme(){ if (typeof sunMat !== 'undefined') sunMat.emissiveColor = c3(T.core); M.sand.emissiveColor = c3(T.sand).scale(0.4);
  M.shell.diffuseColor = c3(T.shell); M.core.diffuseColor = c3(T.core); M.rod.diffuseColor = c3(T.rod);
  M.disc.diffuseColor = c3(T.disc); M.sand.diffuseColor = c3(T.sand); M.pine.diffuseColor = c3(T.sage); M.pine.emissiveColor = c3(T.sage).scale(0.5);
}

/* ---------- the pagoda: five tiers, sliding fusuma doors, a lit tatami room behind each ---------- */
var JP = '"Noto Serif JP","Hiragino Mincho ProN","Yu Mincho","MS Mincho",serif';
var drum = new BAB.TransformNode('drum', scene);
var spin = new BAB.TransformNode('spin', scene); spin.parent = drum;
var pag = new BAB.TransformNode('pag', scene); pag.parent = spin; pag.position.y = 0.15;
var PAGY = 0.15, GLOWM = [];
function shade(hex, k){ var c = c3(hex); function f(v){ return Math.round(Math.max(0, Math.min(1, v * k)) * 255); } return 'rgb(' + f(c.r) + ',' + f(c.g) + ',' + f(c.b) + ')'; }
function dtex(name, w, h){ return new BAB.DynamicTexture(name, { width:w, height:h }, scene, true); }
function emat(name, tex, k){
  var m = new BAB.StandardMaterial(name, scene); m.disableLighting = true; m.diffuseColor = new BAB.Color3(0,0,0); m.specularColor = new BAB.Color3(0,0,0);
  if (tex) { m.emissiveColor = new BAB.Color3(0, 0, 0); m.emissiveTexture = tex; tex.level = k; } else m.emissiveColor = new BAB.Color3(k, k, k); m.backFaceCulling = false; return m;
}
var TW = [1.95, 1.68, 1.41, 1.14, 0.9], BH = 1.06, PT = 1.36, Y0 = -4.0, DD = 0.82, DH = 0.8;
var TIER_DOORS = (function (R) { /* share the rooms over the 4 lower floors (bottom holds most); the top floor is the start page */
  var caps = [4, 3, 3, 2], cnt = [1, 1, 1, 1], left = R - 4;
  while (left-- > 0) { var best = -1, br = 9; for (var t = 0; t < 4; t++) { if (cnt[t] >= caps[t]) continue; var r = cnt[t] / caps[t]; if (r < br - 1e-9) { br = r; best = t; } } if (best < 0) break; cnt[best]++; }
  var out = [[], [], [], [], [0]], id = 1; for (var t2 = 3; t2 >= 0; t2--) for (var q = 0; q < cnt[t2]; q++) out[t2].push(id++); return out;
})(N - 1);
var leafTex = [], backMats = [], bkTex = [], sideTex = [];
var tiers = [], doors = [], lanterns = [], sunRays, sunCore, mist = [], platRoot, finRoot;
var roofTex = dtex('proofT', 256, 256), tatTex = dtex('ptat', 512, 256), latTex = dtex('plat', 256, 256), backTex = dtex('pback', 512, 384);
var raysTex = dtex('prays', 1024, 1024), mistTex = dtex('pmist', 1024, 128); raysTex.hasAlpha = true; mistTex.hasAlpha = true;
var MR = {
  wood: mat('pwood', T.rod, 0, 20), lacq: mat('placq', T.core, 0, 60), gold: mat('pgold', T.sand, 0.25, 30), stone: mat('pstone', T.disc, 0, 20),
  roof: mat('proof', '#ffffff', 0, 50), tat: emat('ptatm', tatTex, 0.86), lat: emat('platm', latTex, 0.92), ceil: emat('pceil', null, 1), side: emat('pside', null, 1),
  green: mat('pgreen', '#5A6E4C', 0, 20), white: mat('pwhite', '#D9CFBC', 0.08, 30),
  lant: mat('plant', T.core, 0.2, 20), flame: emat('pflame', null, 1)
};
MR.roof.diffuseTexture = roofTex; MR.white.emissiveColor = new BAB.Color3(0.2, 0.19, 0.17); MR.green.emissiveColor = new BAB.Color3(0.05, 0.08, 0.05); MR.gold.emissiveColor = c3(T.sand).scale(0.3); MR.lant.emissiveColor = c3(T.core).scale(1.1);
function Bx(L, w, h, d, x, y, z){ var b = BAB.MeshBuilder.CreateBox('b', { width:w, height:h, depth:d }, scene); b.position.set(x, y, z); L.push(b); return b; }
function Cy(L, dia, h, x, y, z, ts){ var c = BAB.MeshBuilder.CreateCylinder('c', { diameter:dia, height:h, tessellation:ts || 14 }, scene); c.position.set(x, y, z); L.push(c); return c; }
function Sp(L, dia, x, y, z){ var s = BAB.MeshBuilder.CreateSphere('s', { diameter:dia, segments:8 }, scene); s.position.set(x, y, z); L.push(s); return s; }
function Pl(L, w, h, x, y, z, rx, ry){ var p = BAB.MeshBuilder.CreatePlane('p', { width:w, height:h, sideOrientation:BAB.Mesh.DOUBLESIDE }, scene); p.position.set(x, y, z); p.rotation.set(rx || 0, ry || 0, 0); L.push(p); return p; }
var INK = new BAB.Color3(0.08, 0.06, 0.12);
function inkIt(r, w){ /* outlines removed for a calmer, less cartoony finish */ }
function fuse(L, m, parent, glow, flat){ if (!L.length) return null; var r = L.length > 1 ? BAB.Mesh.MergeMeshes(L, true) : L[0]; r.material = m; r.parent = parent; r.isPickable = false; if (glow) GLOWM.push(r); if (!flat) inkIt(r); return r; }
function makeRoof(hw, rise, lift, G){
  var pos = [], uv = [], ind = [], nor = [];
  for (var a = 0; a <= G; a++) for (var b = 0; b <= G; b++) {
    var x = (a / G - 0.5) * 2 * hw, z = (b / G - 0.5) * 2 * hw, ax = Math.abs(x) / hw, az = Math.abs(z) / hw, r = Math.max(ax, az);
    var y = rise * Math.pow(1 - r, 1.55) + lift * Math.pow(ax * az, 2.4) - 0.07 * Math.sin(Math.PI * Math.min(ax, az)) * r * r;
    pos.push(x, y, z); var al = ax > az ? z : x; uv.push(al / hw * 3 + 0.5, r * 6);
  }
  for (var i = 0; i < G; i++) for (var j = 0; j < G; j++) { var p0 = i * (G + 1) + j, p1 = p0 + 1, p2 = p0 + G + 1, p3 = p2 + 1; ind.push(p0, p1, p2, p1, p3, p2); }
  BAB.VertexData.ComputeNormals(pos, ind, nor);
  var m = new BAB.Mesh('roof', scene), vd = new BAB.VertexData(); vd.positions = pos; vd.indices = ind; vd.normals = nor; vd.uvs = uv; vd.applyToMesh(m); return m;
}
(function buildTiers(){
  platRoot = new BAB.TransformNode('plat', scene); platRoot.parent = pag; var LP = [], LG0 = [];
  Bx(LP, 2 * TW[0] + 2.4, 0.18, 2 * TW[0] + 2.4, 0, Y0 - 0.36, 0); Bx(LP, 2 * TW[0] + 1.7, 0.18, 2 * TW[0] + 1.7, 0, Y0 - 0.18, 0); Bx(LP, 2 * TW[0] + 1.0, 0.16, 2 * TW[0] + 1.0, 0, Y0 - 0.02, 0);
  Bx(LP, 1.3, 0.1, 0.5, 0, Y0 - 0.3, -(TW[0] + 1.25)); Bx(LP, 1.3, 0.1, 0.5, 0, Y0 - 0.13, -(TW[0] + 0.95));
  fuse(LP, MR.stone, platRoot);
  for (var t = 0; t < 5; t++) {
    var W = TW[t], root = new BAB.TransformNode('tier' + t, scene); root.parent = pag; root.position.y = Y0 + t * PT; tiers.push(root);
    var Lw = [], Lg = [], Lq = [], Lt = [], Lf = [], Lc = [], Ls = [], PLw = [], PLg = [], PLq = [], PLgr = [], PLwh = [], Wi = 2 * W - 0.24;
    Bx(Lw, 2 * W + 0.5, 0.07, 2 * W + 0.5, 0, 0, 0);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (s) { Cy(Lq, 0.2, BH, s[0] * (W - 0.06), BH / 2, s[1] * (W - 0.06), 14); });
    Bx(Lw, 2 * W + 0.16, 0.14, 0.22, 0, BH - 0.08, -W); Bx(Lw, 2 * W, 0.1, 0.16, 0, 0.05, -W);
    Pl(Lf, 2 * W, BH - 0.14, -W + 0.01, 0.55, 0, 0, Math.PI / 2); Pl(Lf, 2 * W, BH - 0.14, W - 0.01, 0.55, 0, 0, Math.PI / 2); Pl(Lf, 2 * W, BH - 0.14, 0, 0.55, W - 0.01, 0, 0);
    var ids = TIER_DOORS[t], n = ids.length, cw = Wi / n;
    ids.forEach(function (id, k) {
      var pk = propOf(id); /* which room props this door gets */
      var cx = -Wi / 2 + (k + 0.5) * cw, zf = -W;
      var bk = BAB.MeshBuilder.CreatePlane('bk' + id, { width:cw, height:DH }, scene); bk.position.set(cx, 0.5, zf + DD); bk.parent = root; bk.isPickable = false;
      var bt = dtex('pbkt' + id, 256, 192), bm = emat('pbk' + id, bt, 0.3); bk.material = bm; bkTex[id] = bt;
      Pl(Lt, cw, DD, cx, 0.1, zf + DD / 2, Math.PI / 2, 0); Pl(Lc, cw, DD, cx, 0.9, zf + DD / 2, Math.PI / 2, 0);
      var sdt = dtex('psdt' + id, 128, 128), sdm = emat('psd' + id, sdt, 0.95); sideTex[id] = sdt;
      [-1, 1].forEach(function (sg) { var spn = BAB.MeshBuilder.CreatePlane('sd' + id, { width:DD, height:DH, sideOrientation:BAB.Mesh.DOUBLESIDE }, scene); spn.position.set(cx + sg * (cw / 2 - 0.006), 0.5, zf + DD / 2); spn.rotation.y = Math.PI / 2; spn.parent = root; spn.isPickable = false; spn.material = sdm; });
      (function (xl, xr, z, F) {
        function lap(x){ Bx(PLw, 0.14, 0.008, 0.1, x, F + 0.004, z); var sc = Bx(PLw, 0.14, 0.09, 0.008, x, F + 0.05, z + 0.055); sc.rotation.x = -0.25; var fc = Bx(PLwh, 0.12, 0.072, 0.004, x, F + 0.05, z + 0.049); fc.rotation.x = -0.25; }
        function cloud(x, y){ var vb = Sp(PLwh, 0.085, x, F + 0.05, z); vb.scaling.y = 1.15; Cy(PLwh, 0.04, 0.05, x, F + 0.115, z, 12); Cy(PLwh, 0.055, 0.012, x, F + 0.142, z, 12); }
        if (pk === 1) { Bx(PLq, 0.1, 0.045, 0.1, xl, F + 0.022, z); Cy(PLw, 0.022, 0.1, xl, F + 0.09, z, 6); var cA = Sp(PLgr, 0.09, xl - 0.02, F + 0.15, z); cA.scaling.y = 0.55; var cB = Sp(PLgr, 0.065, xl + 0.04, F + 0.125, z); cB.scaling.y = 0.55; cloud(xr, F + 0.16); }
        else if (pk === 2) { Cy(PLg, 0.09, 0.025, xl, F + 0.012, z); Cy(PLg, 0.026, 0.07, xl, F + 0.06, z); var cup = BAB.MeshBuilder.CreateCylinder('cup', { diameterTop:0.11, diameterBottom:0.04, height:0.08, tessellation:14 }, scene); cup.position.set(xl, F + 0.135, z); PLg.push(cup); Sp(PLwh, 0.1, xr, F + 0.05, z); }
        else if (pk === 3) { [xl, xr].forEach(function (x) { Bx(PLw, 0.1, 0.2, 0.1, x, F + 0.1, z); for (var q = 0; q < 4; q++) { Bx(PLg, 0.05, 0.008, 0.006, x - 0.012, F + 0.04 + q * 0.04, z - 0.052); Bx(PLgr, 0.012, 0.012, 0.006, x + 0.03, F + 0.04 + q * 0.04, z - 0.052); } }); }
        else if (pk === 4) { var hat = Sp(PLg, 0.12, xl, F + 0.02, z); hat.scaling.y = 0.8; Cy(PLg, 0.16, 0.012, xl, F + 0.012, z); for (var q2 = 0; q2 < 4; q2++) { var tk = Bx(PLwh, 0.11, 0.012, 0.07, xr + q2 * 0.008, F + 0.008 + q2 * 0.014, z); tk.rotation.y = q2 * 0.18; } }
        else if (pk === 5) { Bx(PLq, 0.075, 0.075, 0.075, xl - 0.04, F + 0.038, z); Bx(PLgr, 0.075, 0.075, 0.075, xl + 0.04, F + 0.038, z); var tb = Bx(PLg, 0.075, 0.075, 0.075, xl, F + 0.113, z); tb.rotation.y = 0.5; Sp(PLq, 0.09, xr, F + 0.045, z); Sp(PLwh, 0.05, xr + 0.08, F + 0.025, z); }
        else if (pk === 6) { for (var q3 = 0; q3 < 5; q3++) { var pp = Bx(PLwh, 0.12, 0.01, 0.15, xl, F + 0.006 + q3 * 0.012, z); pp.rotation.y = (q3 % 2 ? 0.12 : -0.08); } Cy(PLq, 0.055, 0.03, xr, F + 0.015, z); Cy(PLw, 0.03, 0.07, xr, F + 0.06, z, 8); Sp(PLw, 0.05, xr, F + 0.1, z); }
        else if (pk === 7) { cloud(xl, F + 0.17); Bx(PLq, 0.016, 0.07, 0.016, xl, F + 0.07, z); lap(xr); }
        else if (pk === 8) { var gr = BAB.MeshBuilder.CreateTorus('gear', { diameter:0.12, thickness:0.035, tessellation:12 }, scene); gr.position.set(xl, F + 0.08, z); gr.rotation.x = Math.PI / 2; PLg.push(gr); Bx(PLw, 0.03, 0.05, 0.03, xl, F + 0.02, z); lap(xr); }
        else if (pk === 9) { var sc2 = Cy(PLwh, 0.05, 0.16, xl, F + 0.026, z, 10); sc2.rotation.z = Math.PI / 2; var bd = Cy(PLq, 0.056, 0.03, xl, F + 0.026, z, 10); bd.rotation.z = Math.PI / 2; var md = Cy(PLg, 0.1, 0.014, xr, F + 0.12, z); md.rotation.x = Math.PI / 2; Bx(PLq, 0.035, 0.09, 0.01, xr, F + 0.045, z); }
        else if (pk === 10) { var ev = Bx(PLwh, 0.14, 0.09, 0.012, xl, F + 0.055, z); ev.rotation.x = -0.3; Sp(PLq, 0.03, xl, F + 0.055, z - 0.012); var ln3 = Sp(PLq, 0.09, xr, F + 0.075, z); ln3.scaling.y = 1.3; Cy(PLw, 0.05, 0.015, xr, F + 0.012, z, 8); Cy(PLw, 0.05, 0.015, xr, F + 0.138, z, 8); }
      })(cx - cw * 0.36, cx + cw * 0.36, zf + 0.3, 0.1);
      Bx(Lq, 0.09, DH + 0.06, 0.12, cx - cw / 2, 0.5, zf + 0.02); if (k === n - 1) Bx(Lq, 0.09, DH + 0.06, 0.12, cx + cw / 2, 0.5, zf + 0.02);
      var lw = cw / 2 + 0.012, lt = [dtex('lfa' + id, 256, 384), dtex('lfb' + id, 256, 384)], nodes = [], meshes = [];
      for (var sd = 0; sd < 2; sd++) {
        var nd = new BAB.TransformNode('lfn' + id + sd, scene); nd.parent = root; nd.position.set(sd ? cx + cw / 2 : cx - cw / 2, 0.5, zf + 0.015);
        var lm = BAB.MeshBuilder.CreatePlane('lf' + id + sd, { width:lw, height:DH }, scene); lm.parent = nd; lm.position.x = sd ? -lw / 2 : lw / 2;
        lm.material = emat('plf' + id + sd, lt[sd], 0.96); lm.metadata = { step:id }; nodes.push(nd); meshes.push(lm);
      }
      leafTex[id] = lt; backMats[id] = bm;
      doors[id] = { bt:bt, t:t, x:cx, y:Y0 + t * PT + 0.5 + PAGY, z:zf + 0.2, w:cw, h:DH, nL:nodes[0], nR:nodes[1], bm:bm, open:0 };
    });
    var rz = W + 0.2, Lr = [];
    Bx(Lr, 2 * rz, 0.035, 0.035, 0, 0.2, -rz); Bx(Lr, 0.035, 0.035, 2 * rz, -rz, 0.2, 0); Bx(Lr, 0.035, 0.035, 2 * rz, rz, 0.2, 0); Bx(Lr, 2 * rz, 0.035, 0.035, 0, 0.2, rz);
    for (var rp = 0; rp <= 6; rp++) { var rx = -rz + rp * (2 * rz / 6); Bx(Lr, 0.04, 0.17, 0.04, rx, 0.12, -rz); Bx(Lr, 0.04, 0.17, 0.04, rx, 0.12, rz); Bx(Lr, 0.04, 0.17, 0.04, -rz, 0.12, rx); Bx(Lr, 0.04, 0.17, 0.04, rz, 0.12, rx); }
    fuse(Lr, MR.lacq, root, false, true);
    var hw = W + 0.7, roof = makeRoof(hw, 0.5, 0.7, 20); roof.material = MR.roof; roof.parent = root; roof.position.y = BH - 0.02; roof.isPickable = false;
    MR.roof.backFaceCulling = false; MR.roof.twoSidedLighting = true; MR.roof.emissiveColor = new BAB.Color3(0.07, 0.075, 0.09); MR.roof.specularColor = new BAB.Color3(0.12, 0.12, 0.14); MR.roof.specularPower = 24;
    Bx(Lw, 2 * W + 0.5, 0.07, 2 * W + 0.5, 0, BH - 0.05, 0);
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(function (s) { Sp(Lg, 0.07, s[0] * hw, BH - 0.02 + 0.7 + 0.02, s[1] * hw); });
    [-1, 1].forEach(function (sx) {
      var ln = new BAB.TransformNode('ln', scene); ln.parent = root; ln.position.set(sx * (hw - 0.16), BH + 0.26, -(hw - 0.16));
      var cord = BAB.MeshBuilder.CreateCylinder('cord', { diameter:0.012, height:0.22, tessellation:4 }, scene); cord.parent = ln; cord.position.y = -0.06; cord.material = MR.wood; cord.isPickable = false;
      var lm2 = BAB.MeshBuilder.CreateSphere('lant', { diameter:0.19, segments:12 }, scene); lm2.parent = ln; lm2.position.y = -0.26; lm2.scaling.set(1, 1.3, 1); lm2.material = MR.lant; lm2.isPickable = false; GLOWM.push(lm2); inkIt(lm2, 0.02);
      var cap = BAB.MeshBuilder.CreateCylinder('lcap', { diameter:0.14, height:0.04, tessellation:8 }, scene); cap.parent = ln; cap.position.y = -0.06; cap.material = MR.gold; cap.isPickable = false;
      lanterns.push(ln);
    });
    [[PLw, MR.wood], [PLg, MR.gold], [PLq, MR.lacq], [PLgr, MR.green], [PLwh, MR.white]].forEach(function (q) { var pm = fuse(q[0], q[1], root, false, true); if (pm) inkIt(pm, 0.007); }); fuse(Lw, MR.wood, root); fuse(Lg, MR.gold, root, true); fuse(Lq, MR.lacq, root); fuse(Lt, MR.tat, root, false, true); fuse(Lf, MR.lat, root, false, true); fuse(Lc, MR.ceil, root, false, true); fuse(Ls, MR.side, root, false, true);
  }
  finRoot = new BAB.TransformNode('fin', scene); finRoot.parent = pag; finRoot.position.y = Y0 + 4 * PT + BH - 0.02 + 0.5;
  var LF = [], LR = [];
  Cy(LF, 0.07, 1.25, 0, 0.62, 0, 8); Sp(LF, 0.2, 0, 1.3, 0);
  for (var rk = 0; rk < 7; rk++) { var tr = BAB.MeshBuilder.CreateTorus('ring', { diameter:0.42 - rk * 0.04, thickness:0.04, tessellation:20 }, scene); tr.position.y = 0.2 + rk * 0.14; LR.push(tr); }
  fuse(LF, MR.gold, finRoot, true); fuse(LR, MR.gold, finRoot, true);
  var flame = BAB.MeshBuilder.CreateSphere('flame', { diameter:0.16, segments:8 }, scene); flame.parent = finRoot; flame.position.y = 1.5; flame.scaling.set(1, 1.5, 1); flame.material = MR.lant; flame.isPickable = false; GLOWM.push(flame);
})();
/* koi pond around the base (mirrors the pagoda on larger screens) */
var PONDY = Y0 - 0.43, waterTex = dtex('pwater', 512, 512), pond = BAB.MeshBuilder.CreateDisc('pond', { radius:9.5, tessellation:64 }, scene), pondMat = new BAB.StandardMaterial('pondm', scene), mirror = null;
pond.rotation.x = Math.PI / 2; pond.parent = pag; pond.position.y = PONDY; pond.isPickable = false; pondMat.diffuseTexture = waterTex; waterTex.uScale = 3; waterTex.vScale = 3; pondMat.specularColor = new BAB.Color3(0.25, 0.3, 0.35); pondMat.alpha = 0.9; pondMat.backFaceCulling = false; pond.material = pondMat;
try { if (window.innerWidth >= 760) { mirror = new BAB.MirrorTexture('mir', 512, scene, true); mirror.mirrorPlane = new BAB.Plane(0, -1, 0, PONDY + PAGY); mirror.level = 0.42; mirror.renderList = pag.getChildMeshes(false).filter(function (m) { return m !== pond; }); pondMat.reflectionTexture = mirror; } } catch (e) { mirror = null; }
var koiTex = dtex('pkoi', 128, 64), koi = []; koiTex.hasAlpha = true;
(function () { var c = koiTex.getContext(); c.clearRect(0, 0, 128, 64); c.fillStyle = '#F4EDE0'; c.beginPath(); c.ellipse(70, 32, 38, 13, 0, 0, 7); c.fill(); c.beginPath(); c.moveTo(36, 32); c.lineTo(8, 14); c.lineTo(16, 32); c.lineTo(8, 50); c.closePath(); c.fill();
  c.fillStyle = '#E2562C'; c.beginPath(); c.ellipse(84, 30, 16, 9, 0.2, 0, 7); c.fill(); c.beginPath(); c.ellipse(54, 34, 9, 6, -0.3, 0, 7); c.fill(); c.fillStyle = '#1B2236'; c.beginPath(); c.arc(98, 28, 2.2, 0, 7); c.fill(); koiTex.update(true); })();
for (var kf = 0; kf < 5; kf++) { var km = BAB.MeshBuilder.CreatePlane('koi' + kf, { width:0.9, height:0.45 }, scene), kmt = emat('pkoim' + kf, koiTex, 1); kmt.opacityTexture = koiTex; km.material = kmt; km.parent = pag; km.rotation.x = Math.PI / 2; km.isPickable = false; km.metadata = { r:4.6 + kf * 0.8, sp:(kf % 2 ? -1 : 1) * (0.16 + kf * 0.03), ph:kf * 1.7 }; koi.push(km); }
/* a floating staircase that winds once around the pagoda per tier; the camera walks it between floors */
var PATHM = emat('ppathm', null, 1), pathL = [], stairL = [], HX0 = Y0 - 0.34, HX1 = Y0 + 4 * PT + 0.08;
function stairR(yl){ var t = Math.max(0, Math.min(4, (yl - Y0) / PT)), k = Math.min(3, Math.floor(t)), w = TW[k] + (TW[k + 1] - TW[k]) * (t - k); return 1.41 * (w + 0.7) + 0.45; }
function helix(y){ var a = Math.PI * 2 * (y - (Y0 + 0.08)) / PT, r = stairR(y); return { x:Math.sin(a) * r, y:y, z:-Math.cos(a) * r, a:a, r:r }; }
(function () { var n = Math.round((HX1 - HX0) / PT * 20); for (var hk = 0; hk <= n; hk++) { var hp = helix(HX0 + (HX1 - HX0) * hk / n); if (Math.cos(hp.a) > -0.25) continue; /* steps only round the back and sides, so the front view stays clear */
  var st = Bx(stairL, 0.42, 0.035, 0.26, hp.x, hp.y, hp.z); st.rotation.y = Math.PI / 2 - hp.a;
  if (hk % 5 === 0) { var ox = Math.sin(hp.a) * (hp.r + 0.3), oz = -Math.cos(hp.a) * (hp.r + 0.3); Sp(pathL, 0.06, ox, hp.y + 0.12, oz); } } })();
stairL.concat(pathL).forEach(function (m) { m.dispose(); }); /* staircase removed: the camera no longer climbs it */
var guide = BAB.MeshBuilder.CreateSphere('guide', { diameter:0.3, segments:10 }, scene); guide.material = emat('pguidem', null, 1); guide.parent = pag; guide.isPickable = false; GLOWM.push(guide);
/* sun, rays and drifting mist behind the pagoda */
sunRays = BAB.MeshBuilder.CreatePlane('rays', { size:15 }, scene); sunRays.parent = drum; sunRays.position.set(0, 0.2, 3.6); sunRays.isPickable = false;
sunRays.material = (function () { var m = emat('praysm', raysTex, 1); m.opacityTexture = raysTex; return m; })();
var sunMat = new BAB.StandardMaterial('sunm', scene); sunMat.disableLighting = true; sunMat.emissiveColor = c3(T.core); sunMat.diffuseColor = new BAB.Color3(0,0,0); sunMat.specularColor = new BAB.Color3(0,0,0); sunMat.alpha = 0.95;
sunCore = BAB.MeshBuilder.CreateDisc('sunDisc', { radius:2.5, tessellation:72 }, scene); sunCore.material = sunMat; sunCore.isPickable = false; sunCore.parent = drum; sunCore.position.set(0, 0.2, 3.5);
[[-2.4, 2.0, 13, 1.6, 0.55], [0.5, 2.9, 15, 1.9, 0.5], [3.0, 3.2, 14, 1.5, 0.45]].forEach(function (q, k) {
  var mp = BAB.MeshBuilder.CreatePlane('mist' + k, { width:q[2], height:q[3] }, scene); mp.parent = drum; mp.position.set(0, q[0], q[1]); mp.isPickable = false;
  var mm = emat('pmistm' + k, mistTex, 1); mm.opacityTexture = mistTex; mm.alpha = q[4]; mp.material = mm; mp.metadata = { base:q[0], k:k }; mist.push(mp);
});
/* paint every texture from the current theme (also runs on light/dark change) */
function rng(seed){ var s = seed; return function () { s = (s * 16807) % 2147483647; return s / 2147483647; }; }
function paintLeaf(tex, i, half){
  var c = tex.getContext(), W = 256, H = 384, R = rng(97 + i * 31); c.save(); c.clearRect(0, 0, W, H); c.translate(-half * W, 0);
  var g = c.createLinearGradient(0, 0, 2 * W, H); g.addColorStop(0, shade(T.sand, 1.12)); g.addColorStop(0.5, shade(T.sand, 0.98)); g.addColorStop(1, shade(T.sand, 1.08)); c.fillStyle = g; c.fillRect(0, 0, 2 * W, H);
  for (var k = 0; k < 140; k++) { c.fillStyle = R() > 0.5 ? 'rgba(255,248,214,.45)' : 'rgba(150,100,30,.18)'; c.fillRect(R() * 2 * W, R() * H, 2 + R() * 6, 1 + R() * 2); }
  var m = i % 5; c.lineJoin = 'round';
  if (m === 0) { c.fillStyle = T.core; c.beginPath(); c.arc(360, 120, 54, 0, 7); c.fill(); c.fillStyle = shade(T.shell, 0.95); c.beginPath(); c.moveTo(40, 340); c.lineTo(250, 150); c.lineTo(470, 340); c.closePath(); c.fill(); c.fillStyle = T.card; c.beginPath(); c.moveTo(188, 205); c.lineTo(250, 150); c.lineTo(312, 205); c.quadraticCurveTo(290, 190, 270, 214); c.quadraticCurveTo(250, 192, 230, 214); c.quadraticCurveTo(212, 192, 188, 205); c.fill(); c.fillStyle = 'rgba(255,246,220,.7)'; c.fillRect(0, 270, 2 * W, 26); }
  else if (m === 1) { for (var row = 0; row < 7; row++) for (var x = -30 + (row % 2) * 30; x < 2 * W + 30; x += 60) for (var r2 = 30; r2 > 6; r2 -= 8) { c.fillStyle = (r2 / 8 | 0) % 2 ? shade(T.shell, 1.15) : T.card; c.strokeStyle = shade(T.shell, 0.7); c.lineWidth = 1.4; c.beginPath(); c.arc(x, 150 + row * 28, r2, Math.PI, 0); c.closePath(); c.fill(); c.stroke(); } c.fillStyle = T.core; c.beginPath(); c.arc(130, 90, 36, 0, 7); c.fill(); }
  else if (m === 2) { c.strokeStyle = T.rod; c.lineWidth = 16; c.lineCap = 'round'; c.beginPath(); c.moveTo(90, 384); c.bezierCurveTo(130, 300, 60, 230, 150, 140); c.stroke(); c.lineWidth = 8; c.beginPath(); c.moveTo(110, 250); c.quadraticCurveTo(220, 230, 300, 190); c.stroke(); c.beginPath(); c.moveTo(140, 170); c.quadraticCurveTo(80, 120, 40, 110); c.stroke(); [[300, 190], [150, 130], [60, 110], [380, 215]].forEach(function (p) { c.fillStyle = '#2F4A3A'; c.beginPath(); c.ellipse(p[0], p[1], 52, 22, -0.2, 0, 7); c.fill(); c.strokeStyle = 'rgba(240,230,190,.55)'; c.lineWidth = 1.4; for (var q = 0; q < 14; q++) { c.beginPath(); c.moveTo(p[0] - 34 + q * 5, p[1] + 8); c.lineTo(p[0] - 28 + q * 5, p[1] - 12); c.stroke(); } }); c.fillStyle = T.core; c.beginPath(); c.arc(420, 80, 38, 0, 7); c.fill(); }
  else if (m === 3) { c.strokeStyle = shade(T.rod, 1.3); c.lineWidth = 9; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 70); c.bezierCurveTo(140, 90, 260, 220, 420, 180); c.stroke(); c.lineWidth = 5; c.beginPath(); c.moveTo(200, 150); c.quadraticCurveTo(260, 90, 330, 90); c.stroke(); for (var d = 0; d < 46; d++) { var px = 30 + R() * 420, py = 60 + R() * 200; c.fillStyle = R() > 0.4 ? '#F3B6C4' : '#FFF0F2'; c.beginPath(); c.arc(px, py, 7 + R() * 8, 0, 7); c.fill(); c.fillStyle = '#C94A6C'; c.beginPath(); c.arc(px, py, 2, 0, 7); c.fill(); } c.fillStyle = T.card; c.beginPath(); c.arc(380, 320, 40, 0, 7); c.fill(); }
  else { c.fillStyle = T.card; c.beginPath(); c.arc(380, 110, 70, 0, 7); c.fill(); for (var b = 0; b < 3; b++) { c.fillStyle = 'rgba(255,246,220,.75)'; c.beginPath(); c.moveTo(0, 200 + b * 70); for (var x2 = 0; x2 <= 2 * W; x2 += 32) c.quadraticCurveTo(x2 + 16, 178 + b * 70 + (x2 / 32 % 2) * 16, x2 + 32, 200 + b * 70); c.lineTo(2 * W, 260 + b * 70); c.lineTo(0, 260 + b * 70); c.fill(); } c.strokeStyle = T.rod; c.lineWidth = 3; [[120, 90], [170, 120], [90, 140]].forEach(function (p) { c.beginPath(); c.moveTo(p[0] - 14, p[1] - 6); c.quadraticCurveTo(p[0] - 5, p[1] - 14, p[0], p[1]); c.quadraticCurveTo(p[0] + 5, p[1] - 14, p[0] + 14, p[1] - 6); c.stroke(); }); }
  c.restore();
  c.strokeStyle = shade(T.rod, 1.1); c.lineWidth = 10; c.strokeRect(5, 5, W - 10, H - 10); c.lineWidth = 2; c.strokeStyle = 'rgba(255,240,200,.5)'; c.strokeRect(13, 13, W - 26, H - 26);
  c.fillStyle = T.core; c.beginPath(); c.arc(half ? 26 : W - 26, H * 0.56, 9, 0, 7); c.fill(); c.strokeStyle = T.sand; c.lineWidth = 2; c.stroke();
  if (!half) { c.fillStyle = T.core; c.fillRect(24, 28, 58, 250); c.strokeStyle = T.card; c.lineWidth = 2; c.strokeRect(28, 32, 50, 242);
    c.fillStyle = T.card; c.textAlign = 'center'; c.textBaseline = 'middle'; c.font = '600 22px ' + MONO; c.fillText(pad2(i + 1), 53, 54);
    c.save(); c.translate(53, 168); c.rotate(-Math.PI / 2); c.font = '600 ' + (STEPS[i].piece.length > 8 ? 22 : 27) + 'px ' + MONO; c.fillText(STEPS[i].piece, 0, 0); c.restore(); c.textAlign = 'left'; }
  tex.update(true);
}
function paintRoof(){
  var RS = REF.roof, c = roofTex.getContext(), teal = shade(RS, 1.12); c.fillStyle = shade(RS, 0.75); c.fillRect(0, 0, 256, 256);
  for (var r = 0; r < 8; r++) { var y = r * 32, g = c.createLinearGradient(0, y, 0, y + 32); g.addColorStop(0, shade(RS, 1.22)); g.addColorStop(0.55, teal); g.addColorStop(1, shade(RS, 0.78)); c.fillStyle = g; c.fillRect(0, y, 256, 32);
    c.fillStyle = 'rgba(20,14,40,.55)'; c.fillRect(0, y + 29, 256, 3);
    for (var x = (r % 2) * 16; x < 256; x += 32) { c.fillStyle = 'rgba(20,14,40,.4)'; c.fillRect(x, y, 2, 29); c.fillStyle = 'rgba(255,255,255,.1)'; c.fillRect(x + 4, y + 3, 3, 22); } }
  roofTex.update(true);
}
function paintWater(){
  var c = waterTex.getContext(), g = c.createLinearGradient(0, 0, 512, 512); g.addColorStop(0, shade(T.shell, 1.25)); g.addColorStop(1, shade(T.shell, 0.9)); c.fillStyle = g; c.fillRect(0, 0, 512, 512);
  c.strokeStyle = 'rgba(255,255,255,.22)'; c.lineWidth = 2; for (var r = 0; r < 9; r++) for (var x = -32 + (r % 2) * 32; x < 544; x += 64) for (var q = 26; q > 6; q -= 9) { c.beginPath(); c.arc(x, r * 64 + 20, q, Math.PI, 0); c.stroke(); }
  waterTex.update(true);
}
function paintTatami(){
  var c = tatTex.getContext(); for (var m = 0; m < 2; m++) { var x0 = m * 256; c.fillStyle = m ? '#98AC6A' : '#A4B878'; c.fillRect(x0, 0, 256, 256);
    for (var k = 0; k < 256; k += 5) { c.fillStyle = k % 10 ? 'rgba(255,255,220,.13)' : 'rgba(70,90,30,.12)'; c.fillRect(x0 + 8, k, 240, 2); } c.fillStyle = '#1B2236'; c.fillRect(x0, 0, 256, 7); c.fillRect(x0, 249, 256, 7); c.fillRect(x0, 0, 4, 256); c.fillRect(x0 + 252, 0, 4, 256); c.fillStyle = 'rgba(240,215,140,.5)'; c.fillRect(x0 + 4, 7, 248, 1); }
  tatTex.update(true);
}
function paintLattice(){
  var c = latTex.getContext(), g = c.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#F6E9C6'); g.addColorStop(1, '#E8D4A0'); c.fillStyle = g; c.fillRect(0, 0, 256, 256);
  c.fillStyle = shade(T.rod, 1.3); for (var x = 0; x <= 256; x += 32) c.fillRect(x - 2, 0, 4, 256); for (var y = 0; y <= 256; y += 51) c.fillRect(0, y - 2, 256, 4); c.fillRect(0, 0, 256, 6); c.fillRect(0, 250, 256, 6);
  latTex.update(true);
}
function paintBack(){
  var c = backTex.getContext(), g = c.createLinearGradient(0, 0, 0, 384); g.addColorStop(0, '#F8E4A8'); g.addColorStop(1, '#E3BE74'); c.fillStyle = g; c.fillRect(0, 0, 512, 384);
  var rg = c.createRadialGradient(256, 70, 10, 256, 70, 260); rg.addColorStop(0, 'rgba(255,255,235,.95)'); rg.addColorStop(1, 'rgba(255,230,160,0)'); c.fillStyle = rg; c.fillRect(0, 0, 512, 384);
  c.fillStyle = 'rgba(120,70,20,.16)'; for (var x = 0; x <= 512; x += 64) c.fillRect(x - 1, 0, 2, 384);
  c.fillStyle = T.core; c.fillRect(196, 36, 120, 250); c.fillStyle = '#F6EBCB'; c.fillRect(210, 62, 92, 190); c.strokeStyle = '#1B2236'; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.arc(256, 156, 30, 0.6, 5.7); c.stroke();
  c.fillStyle = T.core; c.fillRect(244, 238, 24, 24); c.fillStyle = '#7B4A1F'; c.fillRect(186, 28, 140, 8); c.fillRect(186, 286, 140, 8);
  c.fillStyle = 'rgba(80,40,10,.5)'; c.fillRect(0, 340, 512, 44);
  backTex.update(true);
  var src = backTex.getContext().canvas; for (var bi = 0; bi < bkTex.length; bi++) if (bkTex[bi]) { var bc = bkTex[bi].getContext(); bc.drawImage(src, 0, 0, 256, 192); bkTex[bi].update(true); }
}
function paintRays(){
  var c = raysTex.getContext(); c.save(); c.clearRect(0, 0, 1024, 1024);
  for (var k = 0; k < 28; k++) { var a = k * Math.PI * 2 / 28; c.fillStyle = k % 2 ? 'rgba(255,255,255,0)' : shade(T.core, 1.0); c.globalAlpha = 0.5; c.beginPath(); c.moveTo(512, 512); c.arc(512, 512, 512, a, a + Math.PI / 28); c.closePath(); c.fill(); }
  c.globalAlpha = 1; c.globalCompositeOperation = 'destination-in'; var g = c.createRadialGradient(512, 512, 120, 512, 512, 512); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(0.7, 'rgba(0,0,0,.5)'); g.addColorStop(1, 'rgba(0,0,0,0)'); c.fillStyle = g; c.fillRect(0, 0, 1024, 1024); c.restore();
  raysTex.update(true);
}
function paintMist(){
  var c = mistTex.getContext(), R = rng(5); c.clearRect(0, 0, 1024, 128);
  for (var k = 0; k < 16; k++) { var x = k * 64 + R() * 30, w = 120 + R() * 140, y = 60 + R() * 20; var g = c.createRadialGradient(x, y, 4, x, y, w / 2); g.addColorStop(0, 'rgba(255,244,214,.95)'); g.addColorStop(1, 'rgba(255,236,180,0)'); c.fillStyle = g; c.beginPath(); c.ellipse(x, y, w / 2, 34 + R() * 12, 0, 0, 7); c.fill(); }
  c.globalCompositeOperation = 'destination-out'; var f = c.createLinearGradient(0, 0, 0, 128); f.addColorStop(0, 'rgba(0,0,0,.9)'); f.addColorStop(0.35, 'rgba(0,0,0,0)'); f.addColorStop(0.75, 'rgba(0,0,0,0)'); f.addColorStop(1, 'rgba(0,0,0,.9)'); c.fillStyle = f; c.fillRect(0, 0, 1024, 128); var fh = c.createLinearGradient(0, 0, 1024, 0); fh.addColorStop(0, 'rgba(0,0,0,1)'); fh.addColorStop(0.22, 'rgba(0,0,0,0)'); fh.addColorStop(0.78, 'rgba(0,0,0,0)'); fh.addColorStop(1, 'rgba(0,0,0,1)'); c.fillStyle = fh; c.fillRect(0, 0, 1024, 128); c.globalCompositeOperation = 'source-over';
  mistTex.update(true);
}
function paintSide(tex, i){
  var c = tex.getContext(), g = c.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, '#F1DDB0'); g.addColorStop(1, '#D8B77A'); c.fillStyle = g; c.fillRect(0, 0, 128, 128);
  c.strokeStyle = 'rgba(90,50,20,.5)'; c.lineWidth = 3; c.strokeRect(10, 10, 108, 108); c.lineWidth = 1; c.strokeRect(15, 15, 98, 98);
  var ink = '#1B2236', red = T.core; c.lineWidth = 4; c.lineCap = 'round'; c.lineJoin = 'round'; c.strokeStyle = ink; c.fillStyle = ink; c.textAlign = 'center'; c.textBaseline = 'middle';
  function cloud(x, y, k){ c.beginPath(); c.arc(x - 14 * k, y + 4 * k, 10 * k, 0, 7); c.arc(x, y - 4 * k, 14 * k, 0, 7); c.arc(x + 15 * k, y + 4 * k, 10 * k, 0, 7); c.fill(); }
  if (i === 1) { c.beginPath(); c.arc(64, 48, 14, 0, 7); c.fill(); c.beginPath(); c.arc(64, 98, 28, Math.PI, 0); c.fill(); c.fillStyle = red; cloud(92, 34, 0.6); }
  else if (i === 2) { c.strokeRect(26, 34, 76, 46); c.font = '700 30px monospace'; c.fillStyle = red; c.fillText('1:1', 64, 58); c.beginPath(); c.moveTo(64, 80); c.lineTo(64, 98); c.moveTo(44, 98); c.lineTo(84, 98); c.stroke(); }
  else if (i === 3) { for (var k = 0; k < 3; k++) { c.strokeRect(30, 30 + k * 24, 68, 18); c.fillStyle = red; c.beginPath(); c.arc(42, 39 + k * 24, 3, 0, 7); c.fill(); c.beginPath(); c.moveTo(54, 39 + k * 24); c.lineTo(88, 39 + k * 24); c.stroke(); } }
  else if (i === 4) { c.beginPath(); c.moveTo(64, 26); c.lineTo(96, 38); c.lineTo(96, 66); c.quadraticCurveTo(92, 92, 64, 104); c.quadraticCurveTo(36, 92, 32, 66); c.lineTo(32, 38); c.closePath(); c.stroke(); c.strokeStyle = red; c.lineWidth = 6; c.beginPath(); c.moveTo(48, 64); c.lineTo(60, 76); c.lineTo(82, 50); c.stroke(); }
  else if (i === 5) { c.font = '700 20px monospace'; [['A', 30, 66], ['B', 68, 66], ['C', 49, 30]].forEach(function (b, k) { c.strokeStyle = ink; c.strokeRect(b[1], b[2], 32, 32); c.fillStyle = k === 2 ? red : ink; c.fillText(b[0], b[1] + 16, b[2] + 17); }); }
  else if (i === 6) { c.beginPath(); c.moveTo(38, 24); c.lineTo(78, 24); c.lineTo(92, 38); c.lineTo(92, 104); c.lineTo(38, 104); c.closePath(); c.stroke(); for (var q = 0; q < 3; q++) { c.beginPath(); c.moveTo(48, 50 + q * 14); c.lineTo(82, 50 + q * 14); c.stroke(); } c.fillStyle = red; c.fillRect(70, 84, 16, 14); }
  else if (i === 7) { cloud(64, 56, 1.25); c.strokeStyle = red; c.lineWidth = 6; c.beginPath(); c.moveTo(64, 104); c.lineTo(64, 76); c.moveTo(52, 86); c.lineTo(64, 74); c.lineTo(76, 86); c.stroke(); }
  else if (i === 8) { c.font = '700 40px monospace'; c.fillText('</>', 64, 60); c.fillStyle = red; c.fillRect(34, 88, 60, 6); }
  else if (i === 9) { c.fillStyle = red; c.beginPath(); c.moveTo(50, 70); c.lineTo(42, 108); c.lineTo(56, 98); c.lineTo(64, 110); c.lineTo(72, 98); c.lineTo(86, 108); c.lineTo(78, 70); c.fill(); c.fillStyle = '#D4A03E'; c.beginPath(); c.arc(64, 52, 26, 0, 7); c.fill(); c.stroke(); c.fillStyle = ink; c.beginPath(); c.arc(64, 52, 9, 0, 7); c.fill(); }
  else if (i === 10) { c.strokeRect(24, 38, 80, 54); c.beginPath(); c.moveTo(24, 38); c.lineTo(64, 70); c.lineTo(104, 38); c.stroke(); c.fillStyle = red; c.beginPath(); c.arc(64, 82, 7, 0, 7); c.fill(); }
  else { c.fillStyle = red; c.beginPath(); c.arc(64, 64, 26, 0, 7); c.fill(); }
  c.fillStyle = 'rgba(232,212,168,.62)'; c.fillRect(0, 0, 128, 128); c.strokeStyle = 'rgba(90,50,20,.35)'; c.lineWidth = 2; c.strokeRect(10, 10, 108, 108);
  tex.update(true);
}
var REF = { wood:'#2E221B', lacq:'#8E3324', gold:'#A8854E', roof:'#46546B', lant:'#C25B3C', stone:'#B9B2A2' };
function paintPagoda(){
  MR.wood.diffuseColor = c3(REF.wood); MR.lacq.diffuseColor = c3(REF.lacq).scale(0.9); MR.lacq.specularColor = new BAB.Color3(0.18, 0.16, 0.14); MR.lacq.specularPower = 36; MR.gold.diffuseColor = c3(REF.gold); MR.gold.specularColor = new BAB.Color3(0.35, 0.3, 0.22); MR.gold.emissiveColor = c3(REF.gold).scale(0.12); MR.stone.diffuseColor = c3(REF.stone); MR.lant.diffuseColor = c3(REF.lant); MR.lant.emissiveColor = c3(REF.lant).scale(0.55);
  MR.ceil.emissiveColor = c3('#5A2F26'); MR.side.emissiveColor = c3('#E7C98A').scale(0.78); sunMat.emissiveColor = c3(T.core);
  PATHM.emissiveColor = c3(T.sand); paintWater(); paintRoof(); paintTatami(); paintLattice(); paintBack(); paintRays(); paintMist();
  for (var i = 0; i < N; i++) if (leafTex[i]) { paintLeaf(leafTex[i][0], i, 0); paintLeaf(leafTex[i][1], i, 1); if (sideTex[i]) paintSide(sideTex[i], propOf(i)); }
}
function buildPieceMats(){ paintPagoda(); }
paintPagoda();
/* a stand-in for "pieces": the door leaves, so clicking a door still jumps to its section */
var pieces = []; doors.forEach(function (d, i) { pieces[i] = { metadata:{ step:i } }; });


/* ---------- panels (the website itself): a flat piece of the shell that detached ---------- */
/* ---------- construct / deconstruct: a blueprint draws each floor, then the real parts rise into it ---------- */
var BUILD = [], GHOSTM = new BAB.StandardMaterial('ghostm', scene); GHOSTM.disableLighting = true; GHOSTM.emissiveColor = c3('#2B4E78'); GHOSTM.diffuseColor = new BAB.Color3(0, 0, 0); GHOSTM.specularColor = new BAB.Color3(0, 0, 0); GHOSTM.alpha = 0.02; GHOSTM.backFaceCulling = false;
var GHOSTC = c3('#2B4E78'); /* blueprint blue, so the outline never reads as a red pillar */
(function initBuild(){
  tiers.forEach(function (root, t) {
    var B = { wood:[], frame:[], wall:[], leaf:[], gold:[], roof:null, roofY:0, lant:[lanterns[t * 2], lanterns[t * 2 + 1]], ghosts:[] };
    root.getChildMeshes(false).forEach(function (m) {
      var n = m.name, mn = m.material ? m.material.name : '';
      if (/^(lant|cord|lcap)/.test(n)) return;
      if (n === 'roof') { B.roof = m; B.roofY = m.position.y; }
      else if (/^lf/.test(n)) B.leaf.push(m);
      else if (/^(bk|sd)/.test(n) || /^(ptatm|platm|pceil|pside)$/.test(mn)) B.wall.push(m);
      else if (mn === 'placq') B.frame.push(m);
      else if (mn === 'pgold') B.gold.push(m);
      else B.wood.push(m);
    });
    BUILD.push(B);
  });
})();
function applyBuild(iu, dir){
  var done = iu >= 1;
  platRoot.scaling.set(1, Math.max(0.001, ease(seg(iu, 0.0, 0.1))), 1);
  for (var t = 0; t < 5; t++) {
    var B = BUILD[t], s0 = 0.1 + t * 0.14, st = done ? 1 : seg(iu, s0, s0 + 0.34);
    var gA = done ? 0 : Math.min(1, seg(iu, s0 - 0.1, s0 + 0.02)) * (1 - seg(st, 0.72, 1));
    tiers[t].setEnabled(done || gA > 0.001 || st > 0.001); tiers[t].position.y = Y0 + t * PT; tiers[t].rotation.y = 0;
    for (var g = 0; g < B.ghosts.length; g++) { var gm = B.ghosts[g]; if (gA > 0.01) { gm.setEnabled(true); gm.edgesColor.a = 0.9 * gA; } else gm.setEnabled(false); }
    var a = ease(seg(st, 0, 0.3)), b = ease(seg(st, 0.12, 0.45)), c = seg(st, 0.3, 0.6), d = ease(seg(st, 0.42, 0.72)), e = seg(st, 0.55, 0.8), r = ease(seg(st, 0.55, 0.95)), l = ease(seg(st, 0.82, 1));
    B.wood.forEach(function (m) { m.scaling.y = Math.max(0.001, a); });
    B.frame.forEach(function (m) { m.scaling.y = Math.max(0.001, b); });
    B.wall.forEach(function (m) { m.visibility = c; m.setEnabled(c > 0.001); });
    B.leaf.forEach(function (m) { m.scaling.y = Math.max(0.001, d); });
    B.gold.forEach(function (m) { m.visibility = e; m.setEnabled(e > 0.001); });
    if (B.roof) { var up = dir < 0 ? 2.6 : 1.2; B.roof.position.y = B.roofY + (1 - r) * up; B.roof.scaling.set(0.8 + 0.2 * r, 1, 0.8 + 0.2 * r); B.roof.rotation.y = (1 - r) * (dir < 0 ? 0.7 : 0.18); B.roof.visibility = r; B.roof.setEnabled(r > 0.001); }
    B.lant.forEach(function (n) { if (n) n.scaling.setAll(Math.max(0.001, l)); });
  }
  var lf = done ? 1 : seg(iu, 0.84, 1); finRoot.setEnabled(lf > 0.001); finRoot.scaling.set(1, Math.max(0.001, ease(lf)), 1); finRoot.position.y = Y0 + 4 * PT + BH - 0.02 + 0.5;
}
/* ---------- cloud curtain: original swirl clouds (xiangyun style), parted by the slider ---------- */
var CL = { open:0, planes:[], tex:[], asp:0, Z:2.2 };
function cloudPaint(c, W, H, side, seed){
  /* flat aqua sky; line-drawn clouds: a beige back layer, an ivory front layer, thin ink outlines, inward curls, long wisps */
  var R2 = rng(seed), SKY = '#9EDAD3', INK = '#3F4C4F', IV = '#F6F2EA', BG2 = '#E9E1D4', k = H / 1024, LW = 1.25 * k;
  var seamX = side < 0 ? W * 0.8 : W * 0.2;
  function inSide(x){ return side < 0 ? x < seamX + 80 * k : x > seamX - 80 * k; }
  c.clearRect(0, 0, W, H); c.fillStyle = SKY;
  if (side < 0) c.fillRect(0, 0, seamX, H); else c.fillRect(seamX, 0, W - seamX, H);
  for (var y = -20; y < H + 60; y += 64 * k) { var r = (46 + R2() * 46) * k; c.beginPath(); c.arc(seamX - side * 0.2 * r, y, r, 0, 7); c.fill(); }
  c.lineJoin = 'round'; c.lineCap = 'round';
  function curl(cx, cy, r, dir){ /* a stroke that sweeps along the puff and spirals inward */
    c.lineWidth = LW; c.strokeStyle = INK; c.beginPath();
    for (var t = 0; t <= 1.0001; t += 0.02) {
      var a = Math.PI * (dir > 0 ? 0.95 : 0.05) + dir * t * Math.PI * 2.35, rr = r * (1 - 0.82 * Math.pow(t, 0.8));
      var px = cx + Math.cos(a) * rr * (dir > 0 ? 1 : 1), py = cy + Math.sin(a) * rr * 0.92;
      if (t === 0) c.moveTo(px, py); else c.lineTo(px, py);
    }
    c.stroke();
  }
  function layer(x, y, w, h, fill, details){
    var n = Math.max(4, Math.round(w / (h * 0.3))), B = [];
    for (var b = 0; b < n; b++) { var f = (b + 0.5) / n; B.push([x + f * w + (R2() - 0.5) * h * 0.1, y - h * 0.42 * Math.pow(Math.sin(Math.PI * f), 0.8) - R2() * h * 0.08, h * (0.17 + R2() * 0.12)]); }
    for (var u = 0; u < Math.round(n / 2.5); u++) { var f2 = 0.2 + R2() * 0.6; B.push([x + w * f2, y - h * (0.52 + R2() * 0.2) * Math.sin(Math.PI * f2), h * (0.16 + R2() * 0.12)]); }
    for (var q = 0; q < n - 1; q++) B.push([x + (q + 0.8) / n * w, y + h * 0.04, h * (0.12 + R2() * 0.06)]);
    c.strokeStyle = INK; c.lineWidth = LW * 2.2;
    B.forEach(function (p) { c.beginPath(); c.arc(p[0], p[1], p[2], 0, 7); c.stroke(); });
    c.beginPath(); c.ellipse(x + w / 2, y - h * 0.12, w / 2 - h * 0.05, h * 0.26, 0, 0, 7); c.stroke();
    c.fillStyle = fill; c.beginPath(); c.ellipse(x + w / 2, y - h * 0.12, w / 2 - h * 0.05, h * 0.26, 0, 0, 7); c.fill();
    B.forEach(function (p) { c.beginPath(); c.arc(p[0], p[1], p[2], 0, 7); c.fill(); });
    if (!details) return;
    B.forEach(function (p, m) {
      if (m % 2 === 0) { c.lineWidth = LW; c.strokeStyle = INK; c.beginPath(); c.arc(p[0] + p[2] * 0.2, p[1] + p[2] * 0.25, p[2] * 0.85, Math.PI * 1.0, Math.PI * 1.6); c.stroke(); } /* sub-puff contour */
      if (p[2] > h * 0.2 && R2() < 0.6) curl(p[0] + (R2() - 0.5) * p[2] * 0.4, p[1] + p[2] * 0.15, p[2] * 0.62, R2() < 0.5 ? 1 : -1);
    });
  }
  function cloud(x, y, w, h){
    layer(x + w * 0.12, y - h * 0.28, w * 0.75, h * 0.9, BG2, true); /* back layer, a little higher */
    layer(x, y, w, h, IV, true);                                     /* front layer */
  }
  function wisp(x, y, len, th, dir){
    var N = 48, top = [], bot = [], A = th * (0.8 + R2() * 1.2), ph = R2() * 6, fr = 1.2 + R2() * 1.6;
    for (var i = 0; i <= N; i++) { var t = i / N, px = x + t * len, py = y + Math.sin(t * Math.PI * fr + ph) * A, wdt = th * Math.pow(Math.sin(Math.PI * Math.min(1, t * 1.08)), 0.6); top.push([px, py - wdt * 0.5]); bot.push([px, py + wdt * 0.5]); }
    c.beginPath(); top.forEach(function (p, i) { if (i) c.lineTo(p[0], p[1]); else c.moveTo(p[0], p[1]); }); for (var b = bot.length - 1; b >= 0; b--) c.lineTo(bot[b][0], bot[b][1]); c.closePath();
    c.fillStyle = IV; c.fill(); c.lineWidth = LW; c.strokeStyle = INK; c.stroke();
    var ex = dir > 0 ? top[0] : top[N]; curl(ex[0] + dir * th * 0.2, ex[1] + th * 0.25, th * 0.9, -dir);
  }
  for (var wy = 20 * k; wy < H; wy += (46 + R2() * 46) * k) { var wx = (R2() * 0.9 - 0.15) * W, ln = (220 + R2() * 380) * k; if (inSide(wx + ln / 2)) wisp(wx, wy, ln, (7 + R2() * 9) * k, R2() < 0.5 ? 1 : -1); }
  [0.2, 0.47, 0.74, 0.98].forEach(function (ry, ri) {
    var xx = -160 * k + (ri % 2) * 170 * k + R2() * 80 * k;
    while (xx < W + 60 * k) {
      var big = R2() < 0.5, w = (big ? 320 + R2() * 220 : 150 + R2() * 110) * k, h = (big ? 170 + R2() * 70 : 90 + R2() * 40) * k;
      if (inSide(xx + w / 2)) { cloud(xx, ry * H + (R2() - 0.5) * 50 * k, w, h); if (R2() < 0.6) wisp(xx + w * 0.55, ry * H + h * 0.12, (160 + R2() * 220) * k, (8 + R2() * 6) * k, 1); }
      xx += w + (70 + R2() * 180) * k;
    }
  });
  for (var sy = 40 * k; sy < H; sy += 180 * k) cloud(seamX - 140 * k + (R2() - 0.5) * 50 * k, sy + 70 * k + R2() * 30 * k, 280 * k, 130 * k); /* seam clouds hide the join */
}
var GY = Y0 + PAGY - 0.45, EYE = 1.5; /* ground level, and the walker's eye height above it */
(function buildApproach(){
  /* raked gravel ground that fades out into the painted landscape */
  var gt = dtex('gravelT', 1024, 1024), c = gt.getContext(), C = 512;
  var gr = c.createRadialGradient(C, C, 0, C, C, C); gr.addColorStop(0, 'rgba(222,208,174,1)'); gr.addColorStop(0.55, 'rgba(218,203,168,1)'); gr.addColorStop(1, 'rgba(214,198,162,0)');
  c.clearRect(0, 0, 1024, 1024); c.fillStyle = gr; c.fillRect(0, 0, 1024, 1024);
  c.globalCompositeOperation = 'source-atop'; c.strokeStyle = 'rgba(140,118,82,.42)'; c.lineWidth = 2.4;
  for (var r = 150; r < 512; r += 9) { c.beginPath(); c.arc(C, C, r, 0, 7); c.stroke(); } /* raked rings around the pagoda */
  c.globalCompositeOperation = 'source-over'; gt.hasAlpha = true; gt.update(true);
  var gm = new BAB.StandardMaterial('gravelM', scene); gm.diffuseTexture = gt; gm.opacityTexture = gt; gm.specularColor = new BAB.Color3(0, 0, 0); gm.emissiveColor = new BAB.Color3(0.18, 0.17, 0.15);
  var ground = BAB.MeshBuilder.CreateDisc('ground', { radius:34, tessellation:72 }, scene); ground.rotation.x = Math.PI / 2; ground.position.y = GY - 0.03; ground.material = gm; ground.isPickable = false;
  /* stone path from far away to the pond, then stepping stones to the pagoda steps */
  var R3 = rng(77), LS = [], LL = [], stone = mat('pathStone', '#A8A193', 0.08, 20), stone2 = mat('pathStone2', '#948D80', 0.06, 20);
  for (var z = -46; z < -9.4; z += 0.98) { var b = BAB.MeshBuilder.CreateBox('ps', { width:1.75 + R3() * 0.12, height:0.1, depth:0.84 }, scene); b.position.set((R3() - 0.5) * 0.06, GY + 0.04, z); b.rotation.y = (R3() - 0.5) * 0.04; LS.push(b); }
  for (var e = -46; e < -9.4; e += 0.5) [-1, 1].forEach(function (sx) { var k = BAB.MeshBuilder.CreateBox('pe', { width:0.12, height:0.06, depth:0.46 }, scene); k.position.set(sx * 1.02, GY + 0.02, e); LL.push(k); }); /* edging */
  for (var w = -9.0; w < -3.7; w += 1.06) { var st = BAB.MeshBuilder.CreateCylinder('pw', { height:0.14, diameter:0.95 + R3() * 0.15, tessellation:9 }, scene); st.position.set((R3() - 0.5) * 0.18, GY + 0.09, w); st.rotation.y = R3() * 3; LS.push(st); }
  var pm1 = BAB.Mesh.MergeMeshes(LS, true); pm1.material = stone; pm1.isPickable = false;
  var pm2 = BAB.Mesh.MergeMeshes(LL, true); pm2.material = stone2; pm2.isPickable = false;
  /* stone lanterns (toro) in pairs along the path */
  var LT = [], LTl = [], lit = new BAB.StandardMaterial('toroLit', scene); lit.disableLighting = true; lit.emissiveColor = c3('#F2C57C');
  [-22, -28].forEach(function (zz) { [-1, 1].forEach(function (sx) {
    var x = sx * 1.75, y = GY;
    var a = BAB.MeshBuilder.CreateBox('tb', { width:0.5, height:0.14, depth:0.5 }, scene); a.position.set(x, y + 0.07, zz); LT.push(a);
    var p = BAB.MeshBuilder.CreateCylinder('tpost', { height:0.85, diameter:0.2, tessellation:10 }, scene); p.position.set(x, y + 0.56, zz); LT.push(p);
    var pl = BAB.MeshBuilder.CreateBox('tplat', { width:0.52, height:0.08, depth:0.52 }, scene); pl.position.set(x, y + 1.02, zz); LT.push(pl);
    var cap = BAB.MeshBuilder.CreateCylinder('tcap', { height:0.28, diameterTop:0.06, diameterBottom:0.82, tessellation:4 }, scene); cap.position.set(x, y + 1.43, zz); cap.rotation.y = Math.PI / 4; LT.push(cap);
    var tip = BAB.MeshBuilder.CreateSphere('ttip', { diameter:0.1, segments:6 }, scene); tip.position.set(x, y + 1.6, zz); LT.push(tip);
    var lb = BAB.MeshBuilder.CreateBox('tlight', { width:0.34, height:0.3, depth:0.34 }, scene); lb.position.set(x, y + 1.21, zz); LTl.push(lb);
  }); });
  var tm = BAB.Mesh.MergeMeshes(LT, true); tm.material = stone2; tm.isPickable = false;
  var tl = BAB.Mesh.MergeMeshes(LTl, true); tl.material = lit; tl.isPickable = false; GLOWM.push(tl);
})();
var TOR = new BAB.TransformNode('torii', scene); TOR.position.set(0, GY - 0.02, -13.6);
(function buildTorii(){
  var red = mat('torRed', '#A9301F', 0.15, 30), blk = mat('torBlk', '#1C1A1E', 0.2, 40), gld = mat('torGld', '#B08E4F', 0.3, 40), Lr = [], Lb = [], Lg = [], PX = 2.45, PH = 5.9;
  [-1, 1].forEach(function (sx) {
    var p = BAB.MeshBuilder.CreateCylinder('tp', { height:PH, diameterTop:0.34, diameterBottom:0.44, tessellation:20 }, scene); p.position.set(sx * PX, PH / 2, 0); p.rotation.z = sx * 0.025; Lr.push(p); /* posts lean in very slightly */
    var kb = BAB.MeshBuilder.CreateCylinder('tk', { height:0.42, diameterTop:0.5, diameterBottom:0.6, tessellation:20 }, scene); kb.position.set(sx * PX, 0.21, 0); Lb.push(kb);
    var ring = BAB.MeshBuilder.CreateCylinder('tr', { height:0.08, diameter:0.47, tessellation:20 }, scene); ring.position.set(sx * PX, 0.46, 0); Lb.push(ring);
  });
  var nuki = BAB.MeshBuilder.CreateBox('tn', { width:2 * PX + 1.1, height:0.26, depth:0.2 }, scene); nuki.position.y = PH - 0.75; Lr.push(nuki);
  var gz = BAB.MeshBuilder.CreateBox('tg', { width:0.22, height:0.55, depth:0.18 }, scene); gz.position.y = PH - 0.42; Lr.push(gz);
  var shim = BAB.MeshBuilder.CreateBox('ts', { width:2 * PX + 1.5, height:0.3, depth:0.34 }, scene); shim.position.y = PH - 0.1; Lr.push(shim);
  var gaku = BAB.MeshBuilder.CreateBox('tga', { width:0.5, height:0.52, depth:0.08 }, scene); gaku.position.set(0, PH - 0.42, -0.13); Lb.push(gaku);
  var gi = BAB.MeshBuilder.CreateBox('tgi', { width:0.36, height:0.38, depth:0.02 }, scene); gi.position.set(0, PH - 0.42, -0.18); Lg.push(gi);
  for (var q = -6; q < 6; q++) { /* kasagi: the black top beam sweeps up at both ends */
    var x0 = q * 0.62, x1 = x0 + 0.62, f = function (x) { return PH + 0.32 + 0.0022 * Math.pow(Math.abs(x), 4); }, y0 = f(x0), y1 = f(x1);
    var sg = BAB.MeshBuilder.CreateBox('tks', { width:Math.hypot(0.62, y1 - y0) + 0.02, height:0.32, depth:0.5 }, scene); sg.position.set((x0 + x1) / 2, (y0 + y1) / 2, 0); sg.rotation.z = Math.atan2(y1 - y0, 0.62); Lb.push(sg);
  }
  [[Lr, red], [Lb, blk], [Lg, gld]].forEach(function (g) { var m = BAB.Mesh.MergeMeshes(g[0], true); m.material = g[1]; m.parent = TOR; m.isPickable = false; });
  TOR.setEnabled(false);
})();
function buildClouds(){
  var asp = engine.getRenderWidth() / Math.max(1, engine.getRenderHeight()); if (Math.abs(asp - CL.asp) < 0.02 && CL.planes.length) return; CL.asp = asp;
  CL.planes.forEach(function (p) { p.dispose(false, true); }); CL.planes = []; CL.tex = [];
  var h = 2 * CL.Z * Math.tan(FOV / 2), w = h * asp, pw = 0.7 * w, TH = 1024, TW2 = Math.min(2048, Math.round(TH * pw / h));
  [-1, 1].forEach(function (side, i) {
    var tx = new BAB.DynamicTexture('cloudT' + i, { width:TW2, height:TH }, scene, true); tx.hasAlpha = true; cloudPaint(tx.getContext(), TW2, TH, side, 11 + i * 7); tx.update(true);
    var m = emat('cloudM' + i, tx, 1); m.opacityTexture = tx; m.imageProcessingConfiguration = plainIP; m.backFaceCulling = false;
    var p = BAB.MeshBuilder.CreatePlane('cloud' + i, { width:pw, height:h * 1.04 }, scene); p.material = m; p.parent = cam; p.isPickable = false; p.applyFog = false;
    p.metadata = { side:side, x:side * 0.21 * w, w:w }; p.position.set(p.metadata.x, 0, CL.Z - i * 0.02); CL.planes.push(p); CL.tex.push(tx);
  });
}
function placeClouds(dt){
  var t;
  if (gate === 1) t = ease(seg(introT, 0.0, 0.3)); else if (gate === 3) t = ease(seg(introT, 0.04, 0.36)); else if (gate === 0) t = Math.max(0, CL.open - dt / 1300); else t = 1;
  CL.open = t; var vis = 1 - seg(t, 0.75, 1);
  CL.planes.forEach(function (p) { var md = p.metadata; p.setEnabled(vis > 0.001); p.position.x = md.x + md.side * t * md.w * 0.62; p.position.y = -t * md.w * 0.02; p.rotation.z = md.side * t * 0.06; p.visibility = vis; });
}
var panels = [], panelTex = [], panelCtx = [], PM = [], rods = [];
[0, 1].forEach(function (k) { var rd = BAB.MeshBuilder.CreateCylinder('rod' + k, { diameter:1, height:1, tessellation:12 }, scene); rd.rotation.z = Math.PI / 2; rd.material = MR.wood; rd.isPickable = false; rd.renderingGroupId = 1; rd.setEnabled(false); rods.push(rd); });
for (var j = 0; j < N; j++) {
  var pl = BAB.MeshBuilder.CreatePlane('panel' + j, { width:1, height:1 }, scene);
  var pm = new BAB.StandardMaterial('panelm' + j, scene);
  pm.disableLighting = true; pm.backFaceCulling = false; pm.diffuseColor = new BAB.Color3(0,0,0); pm.specularColor = new BAB.Color3(0,0,0); pm.emissiveColor = new BAB.Color3(0,0,0);
  pm.imageProcessingConfiguration = plainIP; pl.applyFog = false;
  pl.material = pm; pl.setEnabled(false); pl.isPickable = false; pl.renderingGroupId = 1;
  panels.push(pl); PM.push(pm);
}

var glow = new BAB.GlowLayer('glow', scene, { mainTextureFixedSize:512, blurKernelSize:24 }); glow.intensity = 0.3;
GLOWM.forEach(function (m) { glow.addIncludedOnlyMesh(m); });
var tether = BAB.MeshBuilder.CreateLineSystem('tether', { lines:[[new BAB.Vector3(0,0,0), new BAB.Vector3(0,0.1,0)],[new BAB.Vector3(0,0,0), new BAB.Vector3(0,0.1,0)],[new BAB.Vector3(0,0,0), new BAB.Vector3(0,0.1,0)],[new BAB.Vector3(0,0,0), new BAB.Vector3(0,0.1,0)]], updatable:true }, scene);
tether.color = c3(T.accent); tether.isPickable = false; tether.alwaysSelectAsActiveMesh = true; tether.setEnabled(false); glow.addIncludedOnlyMesh(tether);
var shadow = BAB.MeshBuilder.CreatePlane('shadow', { width:1, height:1 }, scene), shMat = new BAB.StandardMaterial('shm', scene), shTex = new BAB.DynamicTexture('sht', { width:512, height:320 }, scene, true);
(function () { var c = shTex.getContext(); c.clearRect(0,0,512,320); for (var k = 0; k < 22; k++) { var p = 8 + k * 5; c.fillStyle = 'rgba(8,20,14,0.032)'; c.beginPath(); c.roundRect ? c.roundRect(p, p, 512 - 2 * p, 320 - 2 * p, 24) : c.rect(p, p, 512 - 2 * p, 320 - 2 * p); c.fill(); } shTex.hasAlpha = true; shTex.update(true); })();
shMat.diffuseTexture = shTex; shMat.useAlphaFromDiffuseTexture = true; shMat.disableLighting = true; shMat.diffuseColor = new BAB.Color3(0,0,0); shMat.specularColor = new BAB.Color3(0,0,0); shMat.emissiveColor = new BAB.Color3(0,0,0); shMat.backFaceCulling = false;
shadow.material = shMat; shadow.renderingGroupId = 1; shadow.isPickable = false; shadow.setEnabled(false);

/* ---------- extra spectacle: dust, burst, shockwave (all scaled by fx) ---------- */
var fx = 0.25; /* effects always calm */
if (reduce) fx = 0;
var dotTex = new BAB.DynamicTexture('dot', { width:64, height:64 }, scene, false);
(function () { var c = dotTex.getContext(), g = c.createRadialGradient(32,32,0,32,32,32); g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(0.35,'rgba(255,255,255,0.55)'); g.addColorStop(1,'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0,0,64,64); dotTex.hasAlpha = true; dotTex.update(); })();
var emitMesh = BAB.MeshBuilder.CreateBox('emit', { size:1 }, scene); emitMesh.isVisible = false; emitMesh.isPickable = false;
var dust = new BAB.ParticleSystem('dust', 260, scene);
dust.particleTexture = dotTex; dust.emitter = emitMesh; dust.minEmitBox = new BAB.Vector3(-3.4, 0, -3.4); dust.maxEmitBox = new BAB.Vector3(3.4, 0.4, 3.4);
dust.color1 = new BAB.Color4(0.82, 0.77, 0.62, 0.9); dust.color2 = new BAB.Color4(0.62, 0.76, 0.86, 0.8); dust.colorDead = new BAB.Color4(0.8, 0.9, 0.85, 0);
dust.minSize = 0.04; dust.maxSize = 0.16; dust.minLifeTime = 3; dust.maxLifeTime = 6.5; dust.emitRate = 40;
dust.direction1 = new BAB.Vector3(-0.15, 1, -0.15); dust.direction2 = new BAB.Vector3(0.15, 1, 0.15); dust.minEmitPower = 0.5; dust.maxEmitPower = 1.3;
dust.gravity = new BAB.Vector3(0, 0.1, 0); dust.blendMode = BAB.ParticleSystem.BLENDMODE_STANDARD; dust.minAngularSpeed = -1; dust.maxAngularSpeed = 1; dust.start();

/* sakura petals drifting across the whole scene */
var petalTex = new BAB.DynamicTexture('petal', { width:64, height:64 }, scene, true);
(function () { var c = petalTex.getContext(); c.clearRect(0, 0, 64, 64); var g = c.createRadialGradient(32, 38, 2, 32, 34, 30); g.addColorStop(0, '#FFE3EA'); g.addColorStop(1, '#F29BB4'); c.fillStyle = g;
  c.beginPath(); c.moveTo(32, 58); c.bezierCurveTo(6, 44, 6, 14, 24, 8); c.lineTo(32, 18); c.lineTo(40, 8); c.bezierCurveTo(58, 14, 58, 44, 32, 58); c.fill(); petalTex.hasAlpha = true; petalTex.update(true); })();
var petals = new BAB.ParticleSystem('petals', 120, scene);
petals.particleTexture = petalTex; petals.emitter = new BAB.Vector3(0, 7.2, 0); petals.minEmitBox = new BAB.Vector3(-15, 0, -6); petals.maxEmitBox = new BAB.Vector3(15, 0, 3);
petals.color1 = new BAB.Color4(1, 0.88, 0.92, 0.95); petals.color2 = new BAB.Color4(0.98, 0.72, 0.82, 0.95); petals.colorDead = new BAB.Color4(1, 0.85, 0.9, 0);
petals.minSize = 0.16; petals.maxSize = 0.36; petals.minLifeTime = 9; petals.maxLifeTime = 14; petals.emitRate = 6;
petals.direction1 = new BAB.Vector3(-0.9, -1.1, 0); petals.direction2 = new BAB.Vector3(0.2, -0.6, 0.2); petals.minEmitPower = 0.7; petals.maxEmitPower = 1.5; petals.gravity = new BAB.Vector3(0.12, -0.12, 0);
petals.minInitialRotation = 0; petals.maxInitialRotation = 6.28; petals.minAngularSpeed = -1.6; petals.maxAngularSpeed = 1.6; petals.blendMode = BAB.ParticleSystem.BLENDMODE_STANDARD; petals.start();

/* anime sparkle: four-point twinkles drifting around the pagoda */
var starTex = new BAB.DynamicTexture('star', { width:64, height:64 }, scene, true);
(function () { var c = starTex.getContext(); c.clearRect(0, 0, 64, 64); c.fillStyle = '#fff'; c.beginPath(); c.moveTo(32, 2); c.quadraticCurveTo(34, 30, 62, 32); c.quadraticCurveTo(34, 34, 32, 62); c.quadraticCurveTo(30, 34, 2, 32); c.quadraticCurveTo(30, 30, 32, 2); c.fill(); starTex.hasAlpha = true; starTex.update(true); })();
var stars = new BAB.ParticleSystem('stars', 80, scene);
stars.particleTexture = starTex; stars.emitter = new BAB.Vector3(0, 0, 0); stars.minEmitBox = new BAB.Vector3(-3, -4, -3); stars.maxEmitBox = new BAB.Vector3(3, 4.5, 1);
stars.color1 = new BAB.Color4(1, 0.95, 0.7, 1); stars.color2 = new BAB.Color4(1, 1, 1, 1); stars.colorDead = new BAB.Color4(1, 0.9, 0.6, 0);
stars.minSize = 0.12; stars.maxSize = 0.34; stars.minLifeTime = 1.2; stars.maxLifeTime = 2.4; stars.emitRate = 14; stars.direction1 = new BAB.Vector3(-0.1, 0.25, -0.1); stars.direction2 = new BAB.Vector3(0.1, 0.5, 0.1);
stars.minEmitPower = 0.2; stars.maxEmitPower = 0.5; stars.minAngularSpeed = -1; stars.maxAngularSpeed = 1; stars.blendMode = BAB.ParticleSystem.BLENDMODE_ADD; stars.start();
var mapleTex = new BAB.DynamicTexture('maple', { width:64, height:64 }, scene, true), snowTex = new BAB.DynamicTexture('snow', { width:64, height:64 }, scene, true), skyTex = new BAB.DynamicTexture('skyl', { width:64, height:96 }, scene, true);
(function () {
  var c = mapleTex.getContext(); c.clearRect(0, 0, 64, 64); c.fillStyle = '#fff'; c.beginPath(); for (var k = 0; k < 10; k++) { var a = -Math.PI / 2 + k * Math.PI / 5, r = k % 2 ? 12 : 30; c.lineTo(32 + Math.cos(a) * r, 30 + Math.sin(a) * r); } c.closePath(); c.fill(); c.fillRect(30, 44, 4, 16); mapleTex.hasAlpha = true; mapleTex.update(true);
  c = snowTex.getContext(); c.clearRect(0, 0, 64, 64); var g = c.createRadialGradient(32, 32, 2, 32, 32, 28); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); snowTex.hasAlpha = true; snowTex.update(true);
  c = skyTex.getContext(); c.clearRect(0, 0, 64, 96); g = c.createLinearGradient(0, 10, 0, 86); g.addColorStop(0, '#FFE9A8'); g.addColorStop(0.6, '#FFB14A'); g.addColorStop(1, '#E2562C'); c.fillStyle = g; c.beginPath(); c.moveTo(14, 12); c.quadraticCurveTo(32, 2, 50, 12); c.lineTo(46, 80); c.lineTo(18, 80); c.closePath(); c.fill(); c.fillStyle = '#7A2A14'; c.fillRect(18, 80, 28, 5); skyTex.hasAlpha = true; skyTex.update(true);
})();
var skyl = new BAB.ParticleSystem('skyl', 90, scene);
skyl.particleTexture = skyTex; skyl.emitter = new BAB.Vector3(0, -3.6, 0); skyl.minEmitBox = new BAB.Vector3(-8, 0, -6); skyl.maxEmitBox = new BAB.Vector3(8, 1, 5);
skyl.color1 = new BAB.Color4(1, 1, 1, 1); skyl.color2 = new BAB.Color4(1, 0.9, 0.8, 1); skyl.colorDead = new BAB.Color4(1, 0.8, 0.5, 0);
skyl.minSize = 0.35; skyl.maxSize = 0.7; skyl.minLifeTime = 9; skyl.maxLifeTime = 14; skyl.emitRate = 0; skyl.direction1 = new BAB.Vector3(-0.15, 1, -0.1); skyl.direction2 = new BAB.Vector3(0.15, 1, 0.1);
skyl.minEmitPower = 0.5; skyl.maxEmitPower = 1.0; skyl.blendMode = BAB.ParticleSystem.BLENDMODE_STANDARD; skyl.start();
var SEASONS = [
  { n:'Spring', tex:null, c1:[1, 0.88, 0.92], c2:[0.98, 0.72, 0.82], sz:1, pw:1, rate:1 },
  { n:'Autumn', tex:mapleTex, c1:[0.9, 0.42, 0.14], c2:[0.86, 0.2, 0.12], sz:1.25, pw:1.1, rate:1 },
  { n:'Winter', tex:snowTex, c1:[1, 1, 1], c2:[0.9, 0.95, 1], sz:0.6, pw:0.55, rate:2.6 }
], seasonI = 0, SEA = SEASONS[0];
function setSeason(k){
  seasonI = k % SEASONS.length; SEA = SEASONS[seasonI]; petals.particleTexture = SEA.tex || petalTex;
  petals.color1 = new BAB.Color4(SEA.c1[0], SEA.c1[1], SEA.c1[2], 0.95); petals.color2 = new BAB.Color4(SEA.c2[0], SEA.c2[1], SEA.c2[2], 0.95); petals.colorDead = new BAB.Color4(SEA.c2[0], SEA.c2[1], SEA.c2[2], 0);
  petals.minEmitPower = 0.7 * SEA.pw; petals.maxEmitPower = 1.5 * SEA.pw;
  document.documentElement.setAttribute('data-season', SEA.n.toLowerCase()); var sb = $('seab'); if (sb) sb.textContent = SEA.n;
}
/* sound: all synthesised, off until the visitor turns it on */
var AC = null, sndOn = false, sMaster = null, sWind = null, sNoise = null, sLast = 0;
function sndInit(){
  if (AC) return; var Ctx = window.AudioContext || window.webkitAudioContext; if (!Ctx) return; AC = new Ctx(); sMaster = AC.createGain(); sMaster.gain.value = 0.55; sMaster.connect(AC.destination);
  sNoise = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate); var d = sNoise.getChannelData(0); for (var k = 0; k < d.length; k++) d[k] = Math.random() * 2 - 1;
  var src = AC.createBufferSource(); src.buffer = sNoise; src.loop = true; var lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380; sWind = AC.createGain(); sWind.gain.value = 0; src.connect(lp); lp.connect(sWind); sWind.connect(sMaster); src.start();
}
function sndSet(on){ sndOn = on; if (on) { sndInit(); if (AC && AC.state === 'suspended') AC.resume(); } if (sWind && AC) sWind.gain.setTargetAtTime(on ? 0.03 : 0, AC.currentTime, 0.4); var b = $('sndb'); if (b) { b.setAttribute('aria-pressed', on ? 'true' : 'false'); b.setAttribute('aria-label', on ? 'Mute' : 'Unmute'); } }
function sDoor(open){
  if (!sndOn || !AC) return; var t = AC.currentTime; if (t - sLast < 0.12) return; sLast = t;
  var src = AC.createBufferSource(); src.buffer = sNoise; var bp = AC.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.4; bp.frequency.setValueAtTime(open ? 320 : 1000, t); bp.frequency.exponentialRampToValueAtTime(open ? 1100 : 300, t + 0.42);
  var g = AC.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5); src.connect(bp); bp.connect(g); g.connect(sMaster); src.start(t); src.stop(t + 0.55);
  var o = AC.createOscillator(), og = AC.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(open ? 150 : 110, t + 0.4); og.gain.setValueAtTime(0.0001, t + 0.4); og.gain.exponentialRampToValueAtTime(0.07, t + 0.42); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.6); o.connect(og); og.connect(sMaster); o.start(t + 0.4); o.stop(t + 0.65);
}
function sBell(){
  /* a soft koto-style pluck, one note of a pentatonic scale per section, with a quiet echo */
  if (!sndOn || !AC) return; var t = AC.currentTime, NOTES = [293.66, 329.63, 392, 440, 493.88, 587.33, 659.25, 587.33, 493.88, 440], f = NOTES[Math.max(0, Math.min(NOTES.length - 1, cgoal - 1))];
  var lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(2400, t); lp.frequency.exponentialRampToValueAtTime(700, t + 0.9);
  var g = AC.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.11, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
  var dl = AC.createDelay(0.5), fb = AC.createGain(); dl.delayTime.value = 0.24; fb.gain.value = 0.22; g.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(sMaster); g.connect(sMaster); lp.connect(g);
  [[1, 1], [2, 0.3]].forEach(function (p) { var o = AC.createOscillator(), og = AC.createGain(); o.type = 'triangle'; o.frequency.value = f * p[0]; og.gain.value = p[1]; o.connect(og); og.connect(lp); o.start(t); o.stop(t + 1.4); });
}
var burst = new BAB.ParticleSystem('burst', 400, scene);
burst.particleTexture = dotTex; burst.emitter = new BAB.Vector3(0, 0, 0); burst.minEmitBox = new BAB.Vector3(-3, -2, 0); burst.maxEmitBox = new BAB.Vector3(3, 2, 0);
burst.color1 = new BAB.Color4(0.9, 0.82, 0.55, 1); burst.color2 = new BAB.Color4(0.95, 0.5, 0.36, 1); burst.colorDead = new BAB.Color4(0.9, 0.95, 0.9, 0);
burst.minSize = 0.06; burst.maxSize = 0.22; burst.minLifeTime = 0.7; burst.maxLifeTime = 1.5; burst.emitRate = 0;
burst.direction1 = new BAB.Vector3(-1.4, -0.9, -0.6); burst.direction2 = new BAB.Vector3(1.4, 0.9, 0.4); burst.minEmitPower = 1.5; burst.maxEmitPower = 5; burst.gravity = new BAB.Vector3(0, -0.4, 0);
burst.blendMode = BAB.ParticleSystem.BLENDMODE_ADD; burst.start();
var shockMat = new BAB.StandardMaterial('shockm', scene); shockMat.disableLighting = true; shockMat.emissiveColor = c3(T.sand); shockMat.diffuseColor = new BAB.Color3(0,0,0); shockMat.specularColor = new BAB.Color3(0,0,0);
var shock = BAB.MeshBuilder.CreateTorus('shock', { diameter:5.4, thickness:0.07, tessellation:72 }, scene); shock.material = shockMat; shock.isPickable = false; shock.setEnabled(false); glow.addIncludedOnlyMesh(shock);
var finDone = false, shockT = 1, phase = 0, ZERO = new BAB.Vector3(0, 0, 0);
function assembleBoom(){
  if (fx <= 0) return;
  burst.emitter = new BAB.Vector3(DRUM.x, DRUM.y, 0); burst.minEmitBox = new BAB.Vector3(-2.5 * DRUM.s, -3.5 * DRUM.s, -1); burst.maxEmitBox = new BAB.Vector3(2.5 * DRUM.s, 3.5 * DRUM.s, 1);
  burst.manualEmitCount = Math.round(90 * fx); /* no gold shock ring */
}
function fireBurst(){
  if (fx <= 0) return;
  var bpn = panels[Math.max(1, last)];
  burst.emitter = new BAB.Vector3(bpn.position.x, bpn.position.y, bpn.position.z - 0.15);
  burst.minEmitBox = new BAB.Vector3(-bpn.scaling.x / 2, -bpn.scaling.y / 2, 0); burst.maxEmitBox = new BAB.Vector3(bpn.scaling.x / 2, bpn.scaling.y / 2, 0);
  burst.manualEmitCount = Math.round(45 * fx);
}

/* ---------- images + canvas drawing ---------- */
var IMG = {}, SERIF = '"Kode Mono", ui-monospace, monospace', SANS = '"Kode Mono", ui-monospace, monospace', MONO = '"Kode Mono", ui-monospace, monospace'; buildPieceMats();
var L = { mobile:false, W:1200, H:750, K:1.5 };
function rr(c, x, y, w, h, r){
  c.beginPath(); c.moveTo(x + r, y); c.arcTo(x + w, y, x + w, y + h, r); c.arcTo(x + w, y + h, x, y + h, r); c.arcTo(x, y + h, x, y, r); c.arcTo(x, y, x + w, y, r); c.closePath();
}
function wrap(c, text, maxW){
  var words = String(text).split(' '), lines = [], line = '';
  words.forEach(function (w) { var t = line ? line + ' ' + w : w; if (c.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; });
  if (line) lines.push(line); return lines;
}
function text(c, s, x, y, w, lh, font, color, maxLines){
  c.font = font; c.fillStyle = color; c.textBaseline = 'top'; c.textAlign = 'left';
  var lines = wrap(c, s, w);
  if (maxLines && lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, '') + '...'; }
  lines.forEach(function (t, k) { c.fillText(t, x, y + k * lh); });
  return y + lines.length * lh;
}
function chip(c, s, x, y, size){
  c.font = '500 ' + size + 'px ' + MONO; var w = c.measureText(s).width + 20, h = size + 14;
  rr(c, x, y, w, h, 4); c.fillStyle = T.bg; c.fill(); c.strokeStyle = T.line; c.lineWidth = 1; c.stroke();
  c.fillStyle = T.ink; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillText(s, x + 10, y + h / 2 + 1); return w;
}
function chips(c, list, x, y, maxW, size){
  var cx = x, cy = y, h = size + 14;
  list.forEach(function (s) { c.font = '500 ' + size + 'px ' + MONO; var w = c.measureText(s).width + 20; if (cx + w > x + maxW && cx > x) { cx = x; cy += h + 8; } chip(c, s, cx, cy, size); cx += w + 8; });
  return cy + h;
}
function bullets(c, list, x, y, maxW, size, cols, lh){
  cols = cols || 1; lh = lh || size + 9; var cw = maxW / cols, rows = Math.ceil(list.length / cols);
  list.forEach(function (t, k) {
    var col = Math.floor(k / rows), row = k % rows, bx = x + col * cw, by = y + row * lh;
    c.fillStyle = T.accent; c.save(); c.translate(bx + 4, by + size * 0.55); c.rotate(Math.PI / 4); c.fillRect(-2.5, -2.5, 5, 5); c.restore();
    c.fillStyle = T.ink; c.font = '500 ' + size + 'px ' + SANS; c.textBaseline = 'top'; c.textAlign = 'left'; c.fillText(t, bx + 16, by);
  });
  return y + rows * lh;
}
function imgBox(c, img, x, y, w, h, r, mode){
  c.save(); rr(c, x, y, w, h, r); c.clip();
  if (img && img.naturalWidth) {
    var iw = img.naturalWidth, ih = img.naturalHeight, s = mode === 'contain' ? Math.min(w / iw, h / ih) : Math.max(w / iw, h / ih);
    var dw = iw * s, dh = ih * s, dx = x + (w - dw) / 2, dy = mode === 'contain' ? y + (h - dh) / 2 : y;
    if (mode === 'contain') { c.fillStyle = T.bg; c.fillRect(x, y, w, h); }
    c.drawImage(img, dx, dy, dw, dh);
  } else { c.fillStyle = T.bg; c.fillRect(x, y, w, h); }
  c.restore();
}
function dotGrid(c, x, y, w, h){
  c.fillStyle = T.line; c.globalAlpha = 0.45;
  for (var gx = x + 14; gx < x + w; gx += 26) for (var gy = y + 14; gy < y + h; gy += 26) c.fillRect(gx, gy, 2, 2);
  c.globalAlpha = 1;
}
function cardBase(c, i){
  var W = L.W, H = L.H, s = STEPS[i], m = L.mobile;
  rr(c, 1, 1, W - 2, H - 2, 22); c.fillStyle = T.card; c.fill();
  c.save(); rr(c, 1, 1, W - 2, H - 2, 22); c.clip();
  var g = c.createLinearGradient(0, 0, W, 0); g.addColorStop(0, T.accent); g.addColorStop(1, T.sand); c.fillStyle = g; c.fillRect(0, 0, W, 6);
  c.restore();
  rr(c, 1, 1, W - 2, H - 2, 22); c.strokeStyle = T.line; c.lineWidth = 2; c.stroke();
  rr(c, 10, 10, W - 20, H - 20, 14); c.globalAlpha = 0.7; c.lineWidth = 1; c.stroke(); c.globalAlpha = 1;
  c.fillStyle = T.accent; c.font = '600 ' + (m ? 13 : 15) + 'px ' + MONO; c.textBaseline = 'middle'; c.textAlign = 'left';
  c.fillText(s.kicker.toUpperCase(), 30, 34);
  c.textAlign = 'right'; c.fillStyle = T.muted; c.fillText(pad2(i + 1) + ' / ' + N, W - 30, 34); c.textAlign = 'left';
  c.fillStyle = T.line; c.fillRect(30, 58, W - 60, 1);
  /* ukiyo-e ornaments: gold corner brackets, tiny seigaiha foot, diamond joints on the rule */
  c.save(); c.strokeStyle = T.sand; c.lineWidth = 3; c.lineCap = 'square';
  [[14, 14, 1, 1], [W - 14, 14, -1, 1], [14, H - 14, 1, -1], [W - 14, H - 14, -1, -1]].forEach(function (k) { c.beginPath(); c.moveTo(k[0], k[1] + k[3] * 28); c.lineTo(k[0], k[1]); c.lineTo(k[0] + k[2] * 28, k[1]); c.stroke(); });
  c.restore();
  c.fillStyle = T.accent; [30, W / 2, W - 30].forEach(function (dx) { c.save(); c.translate(dx, 58.5); c.rotate(Math.PI / 4); c.fillRect(-3, -3, 6, 6); c.restore(); });
  return 58;
}
function caseRows(c, rows, x, y, w, size, maxL, tight){
  var off = Math.round(size * 2.5);
  rows.forEach(function (r, k) {
    c.fillStyle = T.accent; c.font = '600 ' + (size + 12) + 'px ' + SERIF; c.textBaseline = 'top'; c.textAlign = 'left'; c.fillText(pad2(k + 1), x, y - 4);
    c.font = '500 ' + (size - 4) + 'px ' + MONO; c.fillText(r[0].toUpperCase(), x + off, y);
    y = text(c, r[1], x + off, y + size, w - off, size + (tight ? 6 : 7), '400 ' + size + 'px ' + SANS, T.ink, maxL || 2) + (tight ? 12 : 14);
  });
  return y;
}
function pill(c, label, x, y, size){
  c.font = '500 ' + size + 'px ' + MONO; var w = c.measureText(label).width + 30, h = size + 16;
  rr(c, x, y, w, h, h / 2); c.fillStyle = T.accent; c.fill();
  c.fillStyle = T['on-accent']; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillText(label, x + 15, y + h / 2 + 1); return w;
}
function portrait(c, img, px, py, ps){
  rr(c, px + 14, py + 14, ps, ps, 28); c.fillStyle = T.sand; c.fill();
  rr(c, px - 8, py - 8, ps + 16, ps + 16, 32); c.fillStyle = T.mint; c.fill();
  imgBox(c, img, px, py, ps, ps, 24, 'cover');
}
var DRAW = {
  hero:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H;
    if (!m) {
      var x = 44;
      pill(c, 'OPEN TO INTERNSHIPS · KL / SELANGOR', x, top + 34, 13);
      c.textBaseline = 'top'; c.textAlign = 'left'; c.font = '600 94px ' + SERIF;
      c.fillStyle = T.ink; c.fillText('Nigel Kok', x, top + 84); c.fillStyle = T.accent; c.fillText('Jia Wei', x, top + 84 + 92);
      var y = top + 84 + 92 + 112;
      y = text(c, s.body, x, y, 470, 31, '400 22px ' + SANS, T.muted, 3) + 20;
      chips(c, s.tags, x, y, 520, 14);
      var ps = 320, px = 700, py = top + 56;
      portrait(c, IMG[s.photo], px, py, ps);
      c.fillStyle = T.ink; c.font = '500 14px ' + MONO; c.textAlign = 'left'; c.textBaseline = 'top';
      c.fillText(s.caption.toUpperCase(), px, py + ps + 38);
      c.fillStyle = T.muted; c.fillText('BSC IT · CLOUD ENGINEERING · APU', px, py + ps + 62);
    } else {
      var ps2 = 150, px2 = (W - ps2) / 2;
      pill(c, 'OPEN TO INTERNSHIPS', (W - 214) / 2, top + 22, 11);
      portrait(c, IMG[s.photo], px2, top + 76, ps2);
      c.textBaseline = 'top'; c.textAlign = 'center'; c.font = '600 50px ' + SERIF;
      c.fillStyle = T.ink; c.fillText('Nigel Kok', W / 2, top + 258); c.fillStyle = T.accent; c.fillText('Jia Wei', W / 2, top + 308); c.textAlign = 'left';
      var y2 = text(c, s.body, 30, top + 376, W - 60, 24, '400 16px ' + SANS, T.muted, 4) + 14;
      chips(c, s.tags, 30, y2, W - 60, 12);
    }
  },
  about:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H;
    if (!m) {
      var y = text(c, s.title, 44, top + 42, 580, 60, '600 54px ' + SERIF, T.ink, 3) + 16;
      y = text(c, s.body, 44, y, 560, 31, '400 22px ' + SANS, T.ink, 5) + 24;
      s.facts.forEach(function (f) {
        c.font = '500 14px ' + MONO; c.fillStyle = T.accent; c.textBaseline = 'top'; c.fillText(f[0].toUpperCase(), 44, y + 3);
        c.fillStyle = T.ink; c.font = '500 20px ' + SANS; c.fillText(f[1], 170, y); y += 36;
      });
      s.stats.forEach(function (st, k) {
        var sy = top + 38 + k * 164, sx = 700;
        c.fillStyle = T.accent; c.font = '600 100px ' + SERIF; c.textBaseline = 'top'; c.textAlign = 'left'; c.fillText(st[0], sx, sy);
        text(c, st[1], sx + 120, sy + 40, 220, 28, '500 18px ' + SANS, T.ink, 2);
        c.fillStyle = T.line; c.fillRect(sx, sy + 140, 340, 1);
      });
    } else {
      var y2 = text(c, s.title, 30, top + 30, W - 60, 40, '600 34px ' + SERIF, T.ink, 3) + 12;
      y2 = text(c, s.body, 30, y2, W - 60, 25, '400 16px ' + SANS, T.ink, 5) + 22;
      var bw = (W - 60 - 20) / 3;
      s.stats.forEach(function (st, k) {
        var x = 30 + k * (bw + 10);
        rr(c, x, y2, bw, 104, 8); c.fillStyle = T.bg; c.fill(); c.strokeStyle = T.line; c.lineWidth = 1; c.stroke();
        c.fillStyle = T.accent; c.font = '600 44px ' + SERIF; c.textBaseline = 'top'; c.fillText(st[0], x + 14, y2 + 10);
        text(c, st[1], x + 14, y2 + 66, bw - 20, 17, '500 11px ' + MONO, T.muted, 2);
      });
      y2 += 104 + 22;
      s.facts.forEach(function (f) {
        c.font = '500 12px ' + MONO; c.fillStyle = T.accent; c.textBaseline = 'top'; c.fillText(f[0].toUpperCase(), 30, y2 + 3);
        c.fillStyle = T.ink; c.font = '400 16px ' + SANS; c.fillText(f[1], 120, y2); y2 += 30;
      });
    }
  },
  project:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H, fi = s.frames.length ? (tickN % s.frames.length) : 0, im = s.frames.length ? IMG[s.frames[fi]] : null;
    function arrow(x1, y1, x2, y2, col) {
      c.strokeStyle = col || T.muted; c.fillStyle = col || T.muted; c.lineWidth = 1.5; c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke();
      var an = Math.atan2(y2 - y1, x2 - x1); c.beginPath(); c.moveTo(x2, y2); c.lineTo(x2 - 7 * Math.cos(an - 0.45), y2 - 7 * Math.sin(an - 0.45)); c.lineTo(x2 - 7 * Math.cos(an + 0.45), y2 - 7 * Math.sin(an + 0.45)); c.closePath(); c.fill();
    }
    function diagram(x, y, w, h) {
      var cw = w / 3, rh = h / 4, bw = cw * 0.8, bh = Math.min(rh * 0.62, m ? 28 : 40), fs = m ? 10 : 13;
      function P(col, row) { return { x:x + col * cw + (cw - bw) / 2, y:y + row * rh + (rh - bh) / 2 }; }
      function node(col, row, t1, t2, kind) {
        var p = P(col, row); rr(c, p.x, p.y, bw, bh, 6);
        c.fillStyle = kind === 'tf' ? T.accent : T.bg; c.fill(); c.strokeStyle = kind === 'aws' ? T.accent : T.line; c.lineWidth = kind === 'aws' ? 2 : 1.2; c.stroke();
        c.fillStyle = kind === 'tf' ? T['on-accent'] : T.ink; c.font = '600 ' + fs + 'px ' + MONO; c.textBaseline = 'middle'; c.textAlign = 'center';
        if (t2 && !m) { c.fillText(t1, p.x + bw / 2, p.y + bh / 2 - 7); c.fillStyle = kind === 'tf' ? T['on-accent'] : T.muted; c.font = '400 11px ' + MONO; c.fillText(t2, p.x + bw / 2, p.y + bh / 2 + 9); }
        else c.fillText(t1, p.x + bw / 2, p.y + bh / 2 + 1);
        c.textAlign = 'left';
      }
      function mid(col, row) { var p = P(col, row); return { l:p.x, r:p.x + bw, t:p.y, b:p.y + bh, cx:p.x + bw / 2, cy:p.y + bh / 2 }; }
      var v = mid(0, 0), cf = mid(1, 0), s3 = mid(2, 0), gh = mid(0, 1), ga = mid(1, 1), br = mid(0, 2), ag = mid(1, 2), ct = mid(2, 2), cw2 = mid(0, 3), sn = mid(1, 3), tf = mid(2, 3);
      arrow(v.r, v.cy, cf.l - 2, cf.cy); arrow(cf.r, cf.cy, s3.l - 2, s3.cy);
      arrow(gh.r, gh.cy, ga.l - 2, ga.cy); arrow(ga.cx, ga.t, cf.cx, cf.b + 2, T.accent);
      c.strokeStyle = T.accent; c.fillStyle = T.accent; c.lineWidth = 1.5; c.beginPath(); c.moveTo(ga.r, ga.cy); c.lineTo(s3.cx, ga.cy); c.stroke(); arrow(s3.cx, ga.cy, s3.cx, s3.b + 2, T.accent);
      arrow(br.r, br.cy, ag.l - 2, ag.cy); arrow(ag.r, ag.cy, ct.l - 2, ct.cy);
      arrow(cw2.r, cw2.cy, sn.l - 2, sn.cy);
      node(0, 0, 'Visitor', 'browser'); node(1, 0, 'CloudFront', 'HTTPS · OAC', 'aws'); node(2, 0, 'S3 bucket', 'private', 'aws');
      node(0, 1, 'git push', 'master'); node(1, 1, 'GitHub Actions', 'build · sync', 'aws');
      node(0, 2, 'Footer', 'fetch /count'); node(1, 2, 'API Gateway', 'HTTP API', 'aws'); node(2, 2, 'Visitor count', 'serverless', 'aws');
      node(0, 3, 'CloudWatch', 'alarm', 'aws'); node(1, 3, 'SNS', 'email alert', 'aws'); node(2, 3, 'Terraform', 'defines it all', 'tf');
      c.fillStyle = T.accent; c.font = '500 ' + (m ? 9 : 11) + 'px ' + MONO; c.textBaseline = 'middle'; c.textAlign = 'left';
      if (!m) c.fillText('invalidate', ga.cx + 5, (ga.t + cf.b) / 2);
    }
    function frame(x, y, w, h) {
      c.save(); c.shadowColor = 'rgba(40,28,14,0.24)'; c.shadowBlur = 24; c.shadowOffsetY = 10; rr(c, x, y, w, h, 10); c.fillStyle = T.bg; c.fill(); c.restore();
      rr(c, x, y, w, h, 10); c.strokeStyle = T.line; c.lineWidth = 1.5; c.stroke();
      c.fillStyle = T.line; [0, 1, 2].forEach(function (k) { c.beginPath(); c.arc(x + 16 + k * 14, y + 16, 4, 0, 7); c.fill(); });
      c.fillStyle = T.muted; c.font = '400 12px ' + MONO; c.textBaseline = 'middle'; c.textAlign = 'left';
      c.fillText(s.diagram ? 'architecture' : s.frames.length ? 'screen ' + (fi + 1) + ' of ' + s.frames.length : 'coming soon', x + 76, y + 16);
      if (s.diagram) diagram(x + 10, y + 36, w - 20, h - 44);
      else if (im) imgBox(c, im, x + 1, y + 32, w - 2, h - 33, 9, 'cover');
      else {
        c.fillStyle = T.mint; for (var k = 0; k < 4; k++) { rr(c, x + 26, y + 60 + k * 34, (w - 52) * [0.7, 0.9, 0.5, 0.78][k], 14, 5); c.fill(); }
        c.fillStyle = T.muted; c.font = '500 14px ' + MONO; c.textAlign = 'center'; c.fillText(s.missing || '', x + w / 2, y + h - 34); c.textAlign = 'left';
      }
    }
    function pips(x, y) {
      var n = s.frames.length; if (n < 2) return;
      for (var k = 0; k < n; k++) { var w = k === fi ? 28 : 10; rr(c, x, y, w, 6, 3); c.fillStyle = k === fi ? T.accent : T.line; c.fill(); x += w + 6; }
    }
    if (!m) {
      var y = text(c, s.title, 44, top + 38, 470, 46, '600 40px ' + SERIF, T.ink, 2) + 12;
      y = text(c, s.body, 44, y, 470, 28, '400 19px ' + SANS, T.ink, 4) + 22;
      c.fillStyle = T.line; c.fillRect(44, y - 10, 470, 1);
      caseRows(c, s.case, 44, y + 6, 470, 17, 3);
      var fx = 560, fw = 500, fh = 350, fy = top + 36;
      frame(fx, fy, fw, fh);
      pips(fx, fy + fh + 22);
      c.fillStyle = T.muted; c.font = '400 13px ' + MONO; c.textBaseline = 'top'; c.textAlign = 'left'; c.fillText(s.caption, fx, fy + fh + 44);
    } else {
      /* mobile: measure first, then shrink the picture until every line of text fits */
      var cfgs = [[99, 15, 99], [99, 14, 99], [99, 13, 99], [99, 12, 99], [5, 12, 3]], pick = cfgs[cfgs.length - 1], fh2 = 90, y0 = top + 24, ty, bodyH, chipsH, caseH;
      c.font = '600 28px ' + SERIF; var tl = Math.min(2, wrap(c, s.title, W - 60).length); ty = y0 + tl * 36 + 10;
      for (var q = 0; q < cfgs.length; q++) {
        var cf0 = cfgs[q]; c.font = '400 15px ' + SANS; bodyH = Math.min(cf0[0], wrap(c, s.body, W - 60).length) * 23 + 8;
        chipsH = 6;
        caseH = 0; var off = Math.round(cf0[1] * 2.5); c.font = '400 ' + cf0[1] + 'px ' + SANS;
        s.case.forEach(function (r) { caseH += cf0[1] + Math.min(cf0[2], wrap(c, r[1], W - 60 - off).length) * (cf0[1] + 6) + 12; });
        var room = H - 18 - ty - bodyH - chipsH - caseH - 38; pick = cf0; fh2 = Math.max(90, Math.min(s.diagram ? 230 : 200, room));
        if (room >= (s.diagram ? 170 : 105)) break;
      }
      text(c, s.title, 30, y0, W - 60, 36, '600 28px ' + SERIF, T.ink, 2);
      frame(30, ty, W - 60, fh2);
      pips(30, ty + fh2 + 10);
      c.fillStyle = T.muted; c.font = '400 11px ' + MONO; c.textBaseline = 'top'; c.textAlign = 'left'; c.fillText(s.caption, 30, ty + fh2 + 24);
      var y3 = ty + fh2 + 44;
      y3 = text(c, s.body, 30, y3, W - 60, 23, '400 15px ' + SANS, T.ink, pick[0]) + 14;
      caseRows(c, s.case, 30, y3, W - 60, pick[1], pick[2], true);
    }
  },
  skills:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H;
    if (!m) {
      var y = text(c, s.title, 44, top + 38, W - 88, 64, '600 56px ' + SERIF, T.ink, 1) + 20, cw = 310, maxY = y;
      s.groups.forEach(function (g, k) {
        var x = 44 + k * (cw + 36), yy = y;
        if (k) { c.fillStyle = T.line; c.fillRect(x - 18, yy, 1, 220); }
        c.fillStyle = T.accent; c.font = '500 14px ' + MONO; c.textBaseline = 'top'; c.fillText(pad2(k + 1) + ' · ' + pad2(g[1].length) + ' ITEMS', x, yy);
        var hy = text(c, g[0], x, yy + 24, cw, 30, '600 24px ' + SERIF, T.ink, 2) + 10;
        maxY = Math.max(maxY, bullets(c, g[1], x, hy + 4, cw, 17, 1, 27));
      });
      var ay = maxY + 14;
      c.fillStyle = T.line; c.fillRect(44, ay, W - 88, 1);
      c.fillStyle = T.accent; c.font = '600 14px ' + MONO; c.textBaseline = 'top'; c.fillText('ALSO BUILT IN COURSE WORK', 44, ay + 14);
      s.alsoList.forEach(function (a, k) {
        var x = 44 + k * 346;
        c.fillStyle = T.ink; c.font = '600 18px ' + SANS; c.textBaseline = 'top'; c.fillText(a[0], x, ay + 40);
        c.fillStyle = T.muted; c.font = '500 14px ' + MONO; c.fillText(a[1], x, ay + 66);
      });
    } else {
      var y2 = text(c, s.title, 30, top + 28, W - 60, 40, '600 34px ' + SERIF, T.ink, 2) + 14;
      s.groups.forEach(function (g) {
        c.fillStyle = T.accent; c.font = '600 13px ' + MONO; c.textBaseline = 'top'; c.fillText(g[0].toUpperCase(), 30, y2);
        y2 = bullets(c, g[1], 30, y2 + 24, W - 60, 12.5, 2, 22) + 12;
      });
      c.fillStyle = T.line; c.fillRect(30, y2 - 4, W - 60, 1); text(c, s.also, 30, y2 + 6, W - 60, 21, '400 13px ' + SANS, T.ink, 4);
    }
  },
  certs:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H, PAD = m ? 30 : 44, G = m ? 10 : 14;
    var y = text(c, s.title, PAD, top + (m ? 24 : 38), W - PAD * 2, m ? 40 : 64, '600 ' + (m ? 32 : 56) + 'px ' + SERIF, T.ink, 2) + (m ? 14 : 20);
    var wall = (s.wall || []).slice(0, 8), feat = wall.filter(function (t) { return t.feat; }), rest = wall.filter(function (t) { return !t.feat; });
    if (!wall.length) { text(c, 'Certificates coming soon.', PAD, y, W - PAD * 2, 24, '400 ' + (m ? 15 : 18) + 'px ' + SANS, T.muted, 1); return; }
    /* rows: featured first and taller, then the rest; the badge picture gets most of each tile */
    function chunk(a, k){ var o = []; for (var q = 0; q < a.length; q += k) o.push(a.slice(q, q + k)); return o; }
    var rows;
    if (m) rows = chunk(feat, 2).map(function (r) { return { t:r, f:1, k:r.length === 1 ? 1 : 2 }; }).concat(chunk(rest, 2).map(function (r) { return { t:r, f:0, k:2 }; }));
    else { var all = feat.concat(rest), k0 = all.length <= 4 ? all.length : all.length <= 6 ? 3 : 4; rows = chunk(all, k0).map(function (r) { return { t:r, f:0, k:k0 }; }); } /* computer: one even grid, featured first */
    var avail = H - y - (m ? 46 : 54) - G * (rows.length - 1), wsum = rows.reduce(function (a, r) { return a + (r.f ? 1.45 : 1); }, 0);
    var nameF = m ? 13 : 15, metaF = m ? 11 : 12, txtH = nameF * 2 + 8 + metaF + 14;
    rows.forEach(function (r) {
      var h = Math.min(avail * (r.f ? 1.45 : 1) / wsum, m ? (r.f ? 230 : 190) : 330);
      var full = W - PAD * 2, w = Math.min((full - G * (r.k - 1)) / r.k, m ? 999 : 340), x = PAD;
      r.t.forEach(function (t) {
        rr(c, x, y, w, h, 8); c.fillStyle = T.bg; c.fill(); c.strokeStyle = t.feat ? T.accent : T.line; c.lineWidth = t.feat ? 2 : 1; c.stroke();
        var ih = Math.max(24, h - txtH - 12), im = t.img ? IMG[t.img] : null;
        if (im && im.naturalWidth) imgBox(c, im, x + 10, y + 10, w - 20, ih, 6, 'contain');
        else { var cx = x + w / 2, cy = y + 10 + ih / 2, rad = Math.min(ih, w - 20) * 0.36; c.beginPath(); c.arc(cx, cy, rad, 0, 7); c.fillStyle = T.card; c.fill(); c.strokeStyle = T.line; c.stroke();
          c.fillStyle = T.muted; c.font = '600 ' + Math.round(rad * 0.7) + 'px ' + SANS; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(String(t.n || '?').replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 2).map(function (w2) { return w2[0]; }).join('').toUpperCase(), cx, cy + 1); }
        if (t.feat) { c.font = '600 10px ' + MONO; var fw = c.measureText('FEATURED').width + 12; rr(c, x + 8, y + 8, fw, 18, 3); c.fillStyle = T.accent; c.fill(); c.fillStyle = T['on-accent'] || '#fff'; c.textAlign = 'left'; c.textBaseline = 'middle'; c.fillText('FEATURED', x + 14, y + 18); }
        var ty = text(c, t.n, x + 12, y + 10 + ih + 8, w - 24, nameF + 3, '600 ' + nameF + 'px ' + SANS, T.ink, 2);
        var meta = [t.by, t.yr].filter(Boolean).join(' · ') + (t.more && t.more.length ? '  +' + t.more.length : '') + (t.href ? '  ✓ verify' : '');
        if (meta) text(c, meta, x + 12, ty + 3, w - 24, metaF + 3, '500 ' + metaF + 'px ' + MONO, T.muted, 1);
        x += w + G;
      });
      y += h + G;
    });
    c.fillStyle = T.muted; c.font = '500 ' + (m ? 11 : 12) + 'px ' + MONO; c.textBaseline = 'top'; c.textAlign = 'left';
    c.fillText('PRESS BROWSE CERTIFICATES BELOW TO ENLARGE AND VERIFY', PAD, H - (m ? 34 : 38));
  },
  contact:function (c, s, i, top) {
    var m = L.mobile, W = L.W, H = L.H;
    if (!m) {
      c.textBaseline = 'top'; c.textAlign = 'left'; c.font = '600 80px ' + SERIF;
      c.fillStyle = T.ink; c.fillText("Let's build", 44, top + 34); c.fillStyle = T.accent; c.fillText('something.', 44, top + 34 + 82);
      var y = text(c, s.body, 44, top + 34 + 82 + 108, 560, 30, '400 21px ' + SANS, T.ink, 3) + 20;
      s.links.forEach(function (l) {
        var w = 600, h = 56;
        rr(c, 44, y, w, h, 6); c.fillStyle = T.bg; c.fill(); c.strokeStyle = T.line; c.lineWidth = 1; c.stroke();
        c.fillStyle = T.ink; c.font = '600 20px ' + SANS; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillText(l[0], 64, y + h / 2);
        c.fillStyle = T.accent; c.font = '500 14px ' + MONO; c.textAlign = 'right'; c.fillText(l[1] + ' ->', 44 + w - 20, y + h / 2); c.textAlign = 'left';
        y += h + 10;
      });
      portrait(c, IMG.avatar, 780, top + 70, 220);
      c.fillStyle = T.ink; c.font = '500 14px ' + MONO; c.textBaseline = 'top'; c.fillText('KUALA LUMPUR, MALAYSIA', 780, top + 70 + 220 + 38);
      c.fillStyle = T.muted; c.fillText('INTERNSHIP · KL OR SELANGOR', 780, top + 70 + 220 + 62);
    } else {
      c.textBaseline = 'top'; c.textAlign = 'left'; c.font = '600 48px ' + SERIF;
      c.fillStyle = T.ink; c.fillText("Let's build", 30, top + 28); c.fillStyle = T.accent; c.fillText('something.', 30, top + 78);
      var y2 = text(c, s.body, 30, top + 146, W - 60, 25, '400 16px ' + SANS, T.ink, 3) + 20;
      s.links.forEach(function (l) {
        var w = W - 60, h = 52;
        rr(c, 30, y2, w, h, 6); c.fillStyle = T.bg; c.fill(); c.strokeStyle = T.line; c.lineWidth = 1; c.stroke();
        c.fillStyle = T.ink; c.font = '600 16px ' + SANS; c.textBaseline = 'middle'; c.textAlign = 'left'; c.fillText(l[0], 48, y2 + h / 2);
        c.fillStyle = T.accent; c.font = '500 12px ' + MONO; c.textAlign = 'right'; c.fillText(l[1] + ' ->', 30 + w - 16, y2 + h / 2); c.textAlign = 'left';
        y2 += h + 10;
      });
      c.fillStyle = T.accent; c.font = '500 12px ' + MONO; c.textBaseline = 'top'; c.fillText('LOCATION', 30, y2 + 14);
      c.fillStyle = T.ink; c.font = '400 16px ' + SANS; c.fillText('Kuala Lumpur, Malaysia', 120, y2 + 11);
    }
  }
};
var twB = Infinity, twClip = false, twIdx = -1, twStart = 0, twLast = 0, twOn = {};
function hookCtx(c){
  if (c._tw) return; c._tw = true; var ft = c.fillText;
  c.fillText = function (t, x, y, mw) {
    if (twB === Infinity) return ft.call(c, t, x, y, mw);
    t = String(t); var n = t.length;
    if (twB <= 0) { twClip = true; return; }
    if (twB < n) { twClip = true; var part = t.slice(0, Math.floor(twB)); twB = 0; return ft.call(c, part, x, y, mw); }
    twB -= n; return ft.call(c, t, x, y, mw);
  };
}
function typeDraw(i, budget){ twB = budget; twClip = false; drawPanel(i); twB = Infinity; return twClip; }
function startType(i){ twIdx = i; twStart = performance.now(); twLast = 0; typeDraw(i, 0); }
function stepType(now){
  if (twIdx < 0 || now - twLast < 45) return; twLast = now;
  var b = (now - twStart - 60) / 1000 * 520; if (b < 0) b = 0;
  if (!typeDraw(twIdx, b)) twIdx = -1;
}
function drawPanel(i){
  var c = panelCtx[i]; if (!c) return; hookCtx(c);
  c.setTransform(L.K, 0, 0, L.K, 0, 0); c.clearRect(0, 0, L.W, L.H);
  var top = cardBase(c, i); DRAW[STEPS[i].type](c, STEPS[i], i, top);
  panelTex[i].update(true);
}
function buildTextures(){
  panelTex.forEach(function (t) { if (t) t.dispose(); });
  for (var i = 0; i < N; i++) {
    if (i === 0) continue;
    var dt = new BAB.DynamicTexture('pt' + i, { width:Math.round(L.W * L.K), height:Math.round(L.H * L.K) }, scene, true, BAB.Texture.TRILINEAR_SAMPLINGMODE);
    dt.hasAlpha = true; dt.anisotropicFilteringLevel = 8; panelTex[i] = dt; panelCtx[i] = dt.getContext();
    PM[i].emissiveTexture = dt; PM[i].opacityTexture = dt; PM[i].diffuseTexture = null;
    drawPanel(i);
  }
}
function loadImages(){
  return Promise.all(Object.keys(IMG_SRC).map(function (k) {
    return new Promise(function (res) { var im = new Image(); im.onload = im.onerror = function () { IMG[k] = im; res(); }; im.src = IMG_SRC[k]; });
  }));
}
var tickN = 0;

/* ---------- layout: where the drum sits and where a pulled-out piece lands ---------- */
var LY = { drumX:0, drumY:0, drumS:1, hx:0, hy:0, hs:1, fx:0, fy:0, fw:1, fh:1 };
function frustum(dist){ var vh = 2 * dist * Math.tan(FOV / 2), asp = engine.getRenderWidth() / engine.getRenderHeight(); return { vh:vh, vw:vh * asp, asp:asp }; }
function computeLayout(){
  var asp = window.innerWidth / Math.max(1, window.innerHeight), mobile = asp < 0.9;
  var chg = (mobile !== L.mobile) || !panelTex.length;
  L.mobile = mobile; L.W = mobile ? 440 : 1100; L.H = mobile ? 680 : 640; L.K = mobile ? 2 : 1.5;
  try { engine.setHardwareScalingLevel(1 / Math.min(window.devicePixelRatio || 1, mobile ? 2 : 2.5)); } catch (e) {}
  var dp = CAMZ + PANEL_Z, f = frustum(dp), fd = frustum(CAMZ);
  if (!mobile) {
    var pw = Math.min(f.vw * 0.62, f.vh * 0.74 * (L.W / L.H)); LY.fw = pw; LY.fh = pw * L.H / L.W;
    LY.fx = f.vw * 0.03; LY.fy = -f.vh * 0.01; LY.fwF = LY.fw / f.vw; LY.fxF = LY.fx / f.vw; LY.fyF = LY.fy / f.vh; LY.fhF = LY.fh / f.vh;
    LY.drumS = 0.66 * fd.vh / 8.8; LY.drumX = -0.305 * fd.vw; LY.drumY = 0;
    LY.hx = 0; LY.hy = -fd.vh * 0.04; LY.hs = 1.0 * fd.vh / 8.8;
  } else {
    var pw2 = Math.min(f.vw * 0.93, f.vh * 0.72 * (L.W / L.H)); LY.fw = pw2; LY.fh = pw2 * L.H / L.W;
    LY.fx = -f.vw * 0.02; LY.fy = -f.vh * 0.05; LY.fwF = LY.fw / f.vw; LY.fxF = LY.fx / f.vw; LY.fyF = LY.fy / f.vh; LY.fhF = LY.fh / f.vh;
    LY.drumS = 0.36 * fd.vh / 8.8; LY.drumX = 0; LY.drumY = fd.vh * 0.275;
    LY.hx = 0; LY.hy = -fd.vh * 0.1; LY.hs = 0.62 * fd.vh / 8.8;
  }
  drum.position.set(LY.drumX, LY.drumY, 0); drum.scaling.setAll(LY.drumS);
  return chg;
}
function ease(t){ return t * t * (3 - 2 * t); }
function norm(a){ while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; }

/* ---------- per-frame update ---------- */
var target = 0, sp = 0, last = -1, px = 0, pxs = 0, tPrev = performance.now();
function readScroll(){ target = gate < 2 ? 0 : Math.max(0, Math.min(N - 1, window.scrollY / Math.max(1, window.innerHeight))); }
var orbAz = 0, orbEl = 0, orbDrag = false, intent = null, cgoal = 0, cstart = 0, cu = 1, tdur = 1.7, arriveAt = 0, ZOOM = 0, CAMD = 14, CAMAZ = 0, DRUM = { x:0, y:0, s:1 }, introT = 0, V3 = BAB.Vector3;
var departed = true, camNow = { x:0, y:0.5, z:0, d:12.8, az:0, el:0 }, camFrom = null;
var gate = 0, pendingGo = 0, ASM = 4800, asmAt = 0, SC = [], finBoom = false;
for (var si = 0; si < N; si++) SC.push({ x:(Math.random() - 0.5) * 2, y:(Math.random() - 0.3) * 2, z:(Math.random() - 0.5) * 2, rx:Math.random() * 2 - 1, ry:Math.random() * 2 - 1 });
drum.setEnabled(false);
try { history.scrollRestoration = 'manual'; } catch (e) {} window.scrollTo(0, 0);
document.documentElement.style.overflow = 'hidden';
function seg(u, a, b){ var t = Math.max(0, Math.min(1, (u - a) / (b - a))); return t; }
function back(f){ var t = f - 1; return 1 + 2.1 * t * t * t + 1.1 * t * t; }
var DS = [];
for (var di = 0; di < N; di++) DS.push({ o:0, v:0 });
function homeOf(i){ var d = doors[i]; return { x:DRUM.x + d.x * DRUM.s, y:DRUM.y + d.y * DRUM.s, z:d.z * DRUM.s, ang:Math.PI }; }
function setDoor(d, st, target, dt, now){
  var k = 190, c = 17, h = Math.min(0.033, dt / 1000); /* underdamped spring: doors overshoot then settle */
  st.v += (k * (target - st.o) - c * st.v) * h; st.o += st.v * h; if (reduce) { st.o = target; st.v = 0; }
  if (st.tg !== target) { if (st.tg != null) sDoor(target > 0); st.tg = target; }
  var o = Math.max(0, Math.min(1.04, st.o)), sc = Math.max(0.06, 1 - o * 0.94);
  d.nL.scaling.x = sc; d.nR.scaling.x = sc; d.open = o;
  d.bt.level = 0.26 + 0.74 * Math.min(1, o);
}
function corner(x, y, z, yaw, w, h, sx, sy){ return new V3(x + sx * w / 2 * Math.cos(yaw), y + sy * h / 2, z - sx * w / 2 * Math.sin(yaw)); }
/* ---------- me, as a layered 3D cut-out (Hello page only) ---------- */
var FIG = new BAB.TransformNode('fig', scene), figL = [], FZ = -5, FLAY = 9;
(function () {
  var asp = 640 / 1000;
  ['cutb', 'cutf'].forEach(function (key, kk) {
    var tex = new BAB.Texture(IMG_SRC[key], scene, false, true, BAB.Texture.TRILINEAR_SAMPLINGMODE); tex.hasAlpha = true; tex.wrapU = BAB.Texture.CLAMP_ADDRESSMODE; tex.wrapV = BAB.Texture.CLAMP_ADDRESSMODE;
    var n = kk ? 1 : FLAY - 1;
    for (var i = 0; i < n; i++) {
      var m = BAB.MeshBuilder.CreatePlane('fig' + key + i, { width:asp, height:1 }, scene), mt = new BAB.StandardMaterial('figm' + key + i, scene);
      mt.disableLighting = true; mt.diffuseColor = new BAB.Color3(0, 0, 0); mt.specularColor = new BAB.Color3(0, 0, 0); mt.emissiveColor = new BAB.Color3(0, 0, 0);
      mt.emissiveTexture = tex; mt.opacityTexture = tex; mt.backFaceCulling = false;
      mt.imageProcessingConfiguration = plainIP; m.applyFog = false;
      m.material = mt; m.parent = FIG; m.isPickable = false; m.renderingGroupId = 1;
      m.metadata = { d: kk ? 0 : (i + 1) / (FLAY - 1) }; figL.push(m);
    }
  });
  figL.sort(function (a, b) { return b.metadata.d - a.metadata.d; });
})();
function placeFig(ho, tt){
  var vis = ho > 0.01; FIG.setEnabled(vis); if (!vis) return;
  var mob = L.mobile, dist = Math.abs(cam.position.z - FZ), vh = 2 * dist * Math.tan(cam.fov / 2);
  var H = vh * (mob ? 0.54 : 0.8), top = 0.045;
  FIG.position.set(0, vh * (0.5 - top) - H / 2 + Math.sin(tt * 0.8) * 0.06 * fx - ((1 - ho) * vh * 0.1), FZ);
  FIG.scaling.setAll(H); FIG.rotation.x = PITCH; FIG.rotation.y = pxs * 0.22 + Math.sin(tt * 0.45) * 0.05 * fx;
  var depth = 0.1;
  figL.forEach(function (m, i) {
    var d = m.metadata.d; m.position.z = d * depth; m.position.x = -pxs * 0.035 * d + Math.sin(tt * 0.6) * 0.004 * d;
    m.material.alpha = ho * (d ? 1 : 1);
  });
}
var scnEl = document.querySelector('.scn'), scnKey = '', skyEl = $('sky'), skyKey = '', starsEl = document.querySelector('.scn .stars'), ngtPrev = -1;
var ccEl = $('cc'), ccPrev = -1, arcEl = $('arc');
var heroEl = $('hero'), heroTag = $('herotag'); document.body.appendChild(heroTag);
scene.onBeforeRenderObservable.add(function () {
  var now = performance.now(), dt = Math.min(100, now - tPrev); tPrev = now;
  readScroll();
  /* sequencer: close the door, glide the camera to the next door at a medium pace, then open that door */
  if (intent != null && Math.abs(window.scrollY - intent * window.innerHeight) < 6) intent = null;
  var gs = gate === 1 ? introGoal : ((gate === 3 || relocking) ? cgoal : (gate < 2 ? 0 : (intent != null ? intent : Math.round(target)))); /* build: head for the first room; unbuild: stay where you are */
  if (gs !== cgoal) { cstart = sp; cgoal = gs; cu = 0; departed = false; camFrom = { x:camNow.x, y:camNow.y, z:camNow.z, d:camNow.d, az:camNow.az, el:camNow.el };
    var dist = Math.abs(cgoal - cstart); if (dist < 0.001) cu = 1;
    /* one smooth move whatever the distance: 1.8 s for a neighbour, at most 2.8 s for a far jump */
    tdur = cgoal === N - 1 || cgoal === 0 ? 2.6 : Math.min(2.8, 1.8 + 0.25 * Math.max(0, dist - 1)); markDot(cgoal); }
  var dep = Math.round(cstart), depClosed = departed || dep < 1 || DS[dep].o < 0.1; if (depClosed) departed = true; /* once the old door has shut, keep going even if the finale opens it again */
  if (reduce) { cu = 1; sp = cgoal; }
  else if (cu < 1) { if (depClosed) { cu = Math.min(1, cu + dt / 1000 / tdur); if (cu >= 1) { arriveAt = now; if (cgoal > 0) sBell(); } } sp = cstart + (cgoal - cstart) * ease(cu); }
  else sp = cgoal;
  var moving = cu < 1 && depClosed, vel = moving ? 0.4 * Math.sin(Math.PI * cu) : 0, arrived = cu >= 1 && (reduce || now - arriveAt > 220);
  pxs += (px - pxs) * (1 - Math.exp(-dt / 200));
  if (gate === 1 && !reduce) { introT = Math.min(1, (now - asmAt) / ASM); if (introT >= 1) finishOpen(); }
  if (gate === 3) { introT = Math.max(0, introT - dt / 4000); if (introT <= 0) relockDone(); }
  if (gate === 0) introT = 0; if (gate === 2) introT = 1; if (gate === 3) introT = Math.min(introT, 1); var ie = ease(introT), iu = introT;
  DRUM.x = 0; DRUM.y = 0; DRUM.s = 1; /* the pagoda never moves: the camera does the travelling */
  var finl = Math.max(0, Math.min(1, (sp - (N - 1.85)) / 0.85)); finl = finl * finl * (3 - 2 * finl);
  if (finl > 0.97 && !finDone) { finDone = true; try { fireBurst(); } catch (e) {} } if (finl < 0.5) finDone = false;
  drum.position.set(DRUM.x, DRUM.y, 0); drum.scaling.setAll(DRUM.s);
  phase += dt / 1000 * (1 + Math.min(4, vel * 5) * fx); var tt = reduce ? 0 : phase;
  /* assembly: platform first, tiers drop in with a spring-like overshoot, finial last */
  applyBuild(iu, gate === 3 ? -1 : 1);
  if (iu >= 0.9 && !finBoom && gate === 1) { finBoom = true; try { assembleBoom(); } catch (e) {} }
  for (var lk = 0; lk < lanterns.length; lk++) lanterns[lk].rotation.z = reduce ? 0 : Math.sin(tt * 1.3 + lk * 1.7) * 0.13;
  var bl = Math.hypot(cam.position.x, cam.position.z) || 1, bx = -cam.position.x / bl, bz = -cam.position.z / bl, px2 = bz, pz2 = -bx;
  sunRays.position.set(bx * 3.6, 0.2, bz * 3.6); sunCore.position.set(bx * 3.5, 0.2, bz * 3.5);
  sunRays.billboardMode = BAB.Mesh.BILLBOARDMODE_Z; sunCore.billboardMode = BAB.Mesh.BILLBOARDMODE_Z;
  sunCore.scaling.setAll(1 + (reduce ? 0 : Math.sin(tt * 0.9) * 0.02) + finl * 0.15);
  for (var mk = 0; mk < mist.length; mk++) { var mm = mist[mk], dd2 = reduce ? 0 : Math.sin(tt * (0.12 + mk * 0.05) + mk * 2) * (1.2 + mk * 0.5), dz = [2.0, 2.9, 3.2][mk]; mm.billboardMode = BAB.Mesh.BILLBOARDMODE_Z; mm.position.set(bx * dz + px2 * dd2, mm.metadata.base + (reduce ? 0 : Math.sin(tt * 0.3 + mk) * 0.12), bz * dz + pz2 * dd2); }
  var spinY = 0;
  spin.rotation.y = spinY;
  var FIN = gate === 2 && cgoal === N - 1 && gs === N - 1; /* finale: every door opens and sky lanterns rise */
  var fMax = 0, best = -1, bestH = null, hw = 1, hh = 1;
  for (var i = 0; i < N; i++) {
    var pn = panels[i];
    var dr = doors[i], DSi = DS[i];
    if (i === 0) { pn.setEnabled(false); setDoor(dr, DSi, 0, dt, now); twOn[0] = false; continue; }
    if (i === N - 1) { setDoor(dr, DSi, (gate === 2 && !relocking && FIN && cu > 0.25) ? 1 : 0, dt, now); pn.setEnabled(false); rods[0].setEnabled(false); rods[1].setEnabled(false); twOn[i] = false; continue; }
    setDoor(dr, DSi, (gate === 2 && !relocking && ((gs === i && arrived) || (FIN && cu > 0.3))) ? 1 : 0, dt, now);
    var f = Math.max(0, Math.min(1, DSi.o)), e = ease(f), e2 = f;
    hw = dr.w * DRUM.s; hh = dr.h * DRUM.s;
    if (f <= 0.03) { if (i === N - 1) { rods[0].setEnabled(false); rods[1].setEnabled(false); } pn.setEnabled(false); twOn[i] = false; if (twIdx === i) { twIdx = -1; drawPanel(i); } continue; }
    if (!twOn[i]) { twOn[i] = true; if (!reduce && fx > 0 && i === gs) startType(i); }
    if (f > fMax) { fMax = f; best = i; }
    var h = homeOf(i), yaw = norm(h.ang - Math.PI);
    pn.setEnabled(true);
    var plw2 = Math.min(dr.w * 0.94, DH * 0.94 * L.W / L.H);
    var phh = plw2 * L.H / L.W, un = 1;
    if (i === N - 1 && panelTex[i]) { un = reduce ? 1 : ease(Math.max(0, Math.min(1, (f - 0.3) * 1.6))); panelTex[i].vScale = un; panelTex[i].vOffset = 1 - un; /* the scroll unrolls from its top rod */
      var topY = dr.y + phh / 2, zr = -(TW[dr.t] - 0.75) - 0.012; rods[0].setEnabled(true); rods[1].setEnabled(true);
      rods[0].position.set(dr.x, topY + 0.006, zr); rods[0].scaling.set(0.026, plw2 + 0.07, 0.026); rods[1].position.set(dr.x, topY - phh * un - 0.006, zr); rods[1].scaling.set(0.032, plw2 + 0.09, 0.032);
      pn.position.set(dr.x, topY - phh * un / 2, -(TW[dr.t] - 0.75)); pn.scaling.set(plw2, Math.max(0.001, phh * un), 1); pn.rotation.set(0, 0, 0); }
    else { pn.position.set(dr.x, dr.y, -(TW[dr.t] - 0.75)); pn.scaling.set(plw2, phh, 1); pn.rotation.set(0, 0, 0); }
    pn.visibility = (i === cgoal || (i === dep && !FIN) ? 1 : 0) * Math.max(0, Math.min(1, (f - 0.35) * 2.2)) * (ie > 0.5 ? 1 : ie * 2);
    if (i === N - 1) { rods[0].visibility = pn.visibility; rods[1].visibility = pn.visibility; }
    if (i === best) bestH = { x:h.x, y:h.y, z:h.z, yaw:yaw, e:e, f:f, hw:hw, hh:hh };
  }
  shadow.setEnabled(false); tether.setEnabled(false);
  stepType(now);
  /* the camera travels: it swings around the still pagoda between doors and settles square-on in front of each room */
  var asp2 = engine.getRenderWidth() / engine.getRenderHeight(), th = Math.tan(FOV / 2), kk = LY.fwF * (L.mobile ? 1 : 0.8) * 2 * th * asp2;
  function keyFor(i){
    if (i <= 0) { var d0 = Math.max(12.8, 5.8 / (2 * th * asp2)); return { x:0, y:L.mobile ? 0.7 : 0.5, z:0, d:d0 }; }
    var dr = doors[i], plw = Math.min(dr.w * 0.94, DH * 0.94 * L.W / L.H), D = plw / kk, vh = 2 * D * th, vw = vh * asp2;
    return { x:dr.x - LY.fxF * vw, y:dr.y - LY.fyF * vh, z:-(TW[dr.t] - 0.75), d:D };
  }
  function poseFor(i){ /* where the camera wants to be for page i: a target point, a distance, a side angle and a height */
    var k = keyFor(i);
    if (i === N - 1) { /* Contact: pull right out, the whole pagoda stands behind the card */
      var dC = L.mobile ? 34 : 17.5, vhC = 2 * dC * th, vwC = vhC * asp2;
      return L.mobile ? { x:0, y:0.1 - vhC * 0.26, z:0, d:dC, az:-0.22, el:0.02 } : { x:-vwC * 0.2, y:0.35, z:0, d:dC, az:-0.3, el:0.03 };
    }
    return { x:k.x, y:k.y, z:k.z, d:k.d, az:0, el:0 };
  }
  var G = poseFor(cgoal), A = camFrom || G, e = reduce ? 1 : ease(Math.min(1, cu)), sw = cu < 1 ? Math.sin(Math.PI * e) : 0;
  if (cu >= 1) A = G;
  var travel = Math.hypot(G.x - A.x, G.y - A.y), nearBoth = Math.min(A.d, G.d) < 9;
  var bump = nearBoth ? Math.min(6, 1.2 + travel * 0.9) : 0; /* step back while sliding between two doors, so the view never whips past the walls */
  var sway = Math.max(-0.22, Math.min(0.22, (G.x - A.x) * 0.08)) * (reduce ? 0 : 1);
  var tx = A.x + (G.x - A.x) * e, ty = A.y + (G.y - A.y) * e, tz = A.z + (G.z - A.z) * e;
  var cdd = A.d + (G.d - A.d) * e + bump * sw, az = A.az + (G.az - A.az) * e + sway * sw, el = A.el + (G.el - A.el) * e;
  var TZ = -(keyFor(0).d + 0.8); TOR.position.z = TZ; TOR.setEnabled(gate === 1 || gate === 3); TOR.scaling.x = L.mobile ? 0.45 : 1;
  var wp = 0, wb = 0; /* wp: how far along the path, wb: 1 = walking on the path, 0 = home view */
  if (gate === 1) { wp = ease(seg(introT, 0.0, 0.84)); wb = 1 - ease(seg(introT, 0.8, 0.98)); }
  else if (gate === 3) { wp = ease(seg(introT, 0.0, 0.8)); wb = 1 - ease(seg(introT, 0.8, 0.98)); } /* stay low until past the gate, so the camera passes under the tie beam */ /* while it builds, step back so the whole pagoda, base to finial, is in view */
  var h0 = Math.max(0, 1 - sp * 2.5);
  if (!(cgoal === 0 && cu >= 1) && !orbDrag) { orbAz *= 0.9; orbEl *= 0.9; } az += orbAz * h0;
  camNow.x = tx; camNow.y = ty; camNow.z = tz; camNow.d = cdd - bump * sw; camNow.az = az - orbAz * h0 - sway * sw; camNow.el = el;
  if (cu < 1) { camNow.d = cdd; camNow.az = az - orbAz * h0; } /* a snapshot taken mid-move keeps the current framing, so an interrupted move never jumps */
  ZOOM = Math.min(1, Math.max(0, (16 - cdd) / 14)); CAMD = cdd;
  var cpx = tx + Math.sin(az) * cdd, cpy = ty + el * cdd + sw * 0.35 * (reduce ? 0 : 1) + orbEl * cdd * h0, cpz = tz - Math.cos(az) * cdd, gyy = ty;
  if (wb > 0) {
    var zS = TZ - (L.mobile ? 19 : 15), zE = TZ + (L.mobile ? 3 : 2.6), wz = zS + (zE - zS) * wp;
    var wy = GY + EYE + (reduce ? 0 : 0.02 * Math.sin(wz * 4.4)); /* a very small step rhythm */
    cpx += (0 - cpx) * wb; cpy += (wy - cpy) * wb; cpz += (wz - cpz) * wb;
    tx += (0 - tx) * wb; ty += ((0.3 + 0.5 * wp) - ty) * wb; tz += (0 - tz) * wb; /* look up the path at the pagoda */
  }
  cam.position.set(cpx, cpy, cpz); cam.setTarget(new V3(tx, ty, tz));
  cam.fov = FOV + 0.04 * sw * fx + 0.1 * wb;
  /* day turns to night as the visitor goes deeper */
  var dp = gate < 2 ? 0 : Math.max(0, Math.min(1, sp / (N - 1))), SK = [[0, [255, 170, 150, 0.26], [255, 214, 150, 0.16]], [0.3, [255, 220, 190, 0], [255, 230, 190, 0]], [0.66, [110, 60, 120, 0.4], [240, 120, 60, 0.36]], [1, [8, 12, 40, 0.84], [24, 34, 84, 0.72]]], si = 0;
  while (si < SK.length - 2 && dp > SK[si + 1][0]) si++;
  var su = (dp - SK[si][0]) / (SK[si + 1][0] - SK[si][0]), mixc = function (a, b) { return 'rgba(' + Math.round(a[0] + (b[0] - a[0]) * su) + ',' + Math.round(a[1] + (b[1] - a[1]) * su) + ',' + Math.round(a[2] + (b[2] - a[2]) * su) + ',' + (a[3] + (b[3] - a[3]) * su).toFixed(2) + ')'; };
  var skk = mixc(SK[si][1], SK[si + 1][1]) + mixc(SK[si][2], SK[si + 1][2]);
  if (skk !== skyKey) { skyKey = skk; skyEl.style.background = 'linear-gradient(to bottom,' + mixc(SK[si][1], SK[si + 1][1]) + ',' + mixc(SK[si][2], SK[si + 1][2]) + ')'; }
  var ngt = Math.max(0, Math.min(1, (dp - 0.62) / 0.38)); if (Math.abs(ngt - ngtPrev) > 0.01) { ngtPrev = ngt; if (starsEl) starsEl.style.opacity = Math.max(ngt, 0).toFixed(2);
    hemi.intensity = 0.55 - 0.3 * ngt; sun.intensity = 0.95 - 0.7 * ngt; hemi.diffuse.set(1 - 0.35 * ngt, 1 - 0.22 * ngt, 1);
    var sc0 = c3(T.core); sunMat.emissiveColor.set(sc0.r + (0.96 - sc0.r) * ngt, sc0.g + (0.93 - sc0.g) * ngt, sc0.b + (0.82 - sc0.b) * ngt); sunRays.material.alpha = 0.3 * (1 - 0.85 * ngt);
    MR.lant.emissiveColor = c3(REF.lant).scale(0.55 + 0.9 * ngt);
    scene.fogColor = BAB.Color3.Lerp(c3('#E6D7B8'), c3('#1A2340'), ngt); document.documentElement.style.setProperty('--ngt', ngt.toFixed(2)); }
  glow.intensity = 0.16 + 0.42 * ngt;
  waterTex.vOffset = tt * 0.012; waterTex.uOffset = Math.sin(tt * 0.2) * 0.02;
  for (var kq = 0; kq < koi.length; kq++) { var kk2 = koi[kq], ka2 = kk2.metadata.ph + tt * kk2.metadata.sp; kk2.position.set(Math.sin(ka2) * kk2.metadata.r, PONDY + 0.03, -Math.cos(ka2) * kk2.metadata.r); kk2.rotation.y = -ka2 + (kk2.metadata.sp > 0 ? Math.PI : 0) + Math.sin(tt * 3 + kq) * 0.15; }
  var gp = helix(Math.max(HX0, Math.min(HX1, gyy - PAGY - 0.2))); guide.position.set(gp.x, gp.y, gp.z); guide.setEnabled(false);
  skyl.emitRate = FIN ? (L.mobile ? 5 : 9) * fx : 0;
  stars.emitRate = (L.mobile ? 6 : 14) * fx; var spd = $('speed'); if (spd) spd.style.opacity = reduce ? 0 : Math.min(0.3, vel * 0.6).toFixed(2); var pk = Math.max(0.15, Math.min(1.2, CAMD / 14)); petals.emitter.set(cam.position.x, cam.position.y + 9 * pk + 1.5, cam.position.z + 3 * pk); petals.minEmitBox.set(-9 * pk, 0, -4 * pk); petals.maxEmitBox.set(9 * pk, 0, 6 * pk); petals.minSize = 0.16 * pk * SEA.sz; petals.maxSize = 0.36 * pk * SEA.sz; petals.emitRate = (L.mobile ? 3.5 : 7) * fx * SEA.rate; dust.emitRate = 24 * fx; emitMesh.position.set(DRUM.x, DRUM.y - 3.6 * DRUM.s, 0); emitMesh.scaling.setAll(DRUM.s * 0.9);
  if (shockT < 1) { shockT = Math.min(1, shockT + dt / 1300); var se = 1 - Math.pow(1 - shockT, 3); shock.setEnabled(true); shock.position.set(DRUM.x, DRUM.y, 0); shock.scaling.setAll(DRUM.s * (0.6 + se * 3.2)); shock.visibility = Math.pow(1 - shockT, 1.5) * 0.4 * fx; } else shock.setEnabled(false);
  MR.flame.emissiveColor = c3(T.sand).scale(0.8 + 0.2 * Math.sin(now / 180));
  var cur = cu >= 1 ? cgoal : last; if (cur !== last) onStep(cur);
  $('hudf').style.width = (sp / (N - 1) * 100).toFixed(1) + '%';
  $('hint').style.opacity = sp < 0.15 ? 1 : 0;
  var ho = 1 - ease(Math.max(0, Math.min(1, sp / 0.42)));
  if (gate === 0 && heroBackAt) ho *= ease(Math.min(1, (now - heroBackAt) / 900));
  if (gate === 1) ho *= 1 - Math.min(1, (performance.now() - asmAt) / 450); else if (gate === 3) ho *= ease(seg(introT, 0.94, 1)) * (heroWas ? 1 : 0); else if (relocking) ho = 0; /* the name card waits until the pagoda is built, and leaves before it comes apart */
  buildClouds(); placeClouds(dt);
  arcEl.style.opacity = 0; placeFig(ho, tt); heroTag.style.opacity = ho; heroTag.style.visibility = ho < 0.01 ? 'hidden' : 'visible'; heroEl.style.opacity = ho; heroEl.style.visibility = ho < 0.01 ? 'hidden' : 'visible';
  heroEl.style.setProperty('--ho', (-sp * 150 - pxs * 10 * fx).toFixed(1) + 'px');
  if (scnEl && !reduce) { var tx = (-pxs * 14).toFixed(1), ty = (-sp * 5).toFixed(1); if (tx + ty !== scnKey) { scnKey = tx + ty; scnEl.style.transform = 'translate3d(' + tx + 'px,' + ty + 'px,0) scale(1.04)'; } }
  var cv = (gate === 2 && cgoal === N - 1) ? (reduce ? 1 : Math.max(0, Math.min(1, (cu - 0.55) / 0.45))) : 0;
  if (cv !== ccPrev) { ccPrev = cv; ccEl.style.setProperty('--cv', cv.toFixed(3)); var onC = cv > 0.02; ccEl.classList.toggle('on', onC); ccEl.setAttribute('aria-hidden', onC ? 'false' : 'true'); }
  placeActions();
});

/* ---------- chrome: dots, hud, actions, lightbox, nav ---------- */
var dotsEl = $('dots'), actEl = $('actions'), groups = [];
STEPS.forEach(function (s, i) {
  var b = el('button'); b.type = 'button'; b.setAttribute('aria-label', s.short); b.title = s.short; b.onclick = function () { go(i); }; dotsEl.appendChild(b);
  var g = el('div', 'ag'); g.setAttribute('role', 'group'); g.setAttribute('aria-label', s.short + ' links');
  if (s.actions === 'certs') {
    if (lbItems(s).length) { var bt = el('button', 'btn', 'Browse certificates'); bt.type = 'button'; bt.onclick = function () { openLb(s, 0); }; g.appendChild(bt); }
  } else s.actions.forEach(function (a) {
    var n;
    if (a.href) { n = el('a', 'btn' + (a.ghost ? ' ghost' : ''), esc(a.t)); n.href = a.href; n.target = '_blank'; n.rel = 'noopener'; }
    else { n = el('button', 'btn' + (a.ghost ? ' ghost' : ''), esc(a.t)); n.type = 'button'; n.onclick = function () { go(a.step); }; }
    g.appendChild(n);
  });
  actEl.appendChild(g); groups.push(g);
});
function unlock(){
  if (gate !== 0) return; gate = 1; introGoal = pendingGo || 1; pendingGo = 0; drum.setEnabled(true); introT = reduce ? 1 : 0; asmAt = performance.now(); document.documentElement.classList.add('opened');
  if (reduce) finishOpen();
}
function finishOpen(){ gate = 2; document.documentElement.style.overflow = ''; go(introGoal); } /* the door of the first room opens straight after the walk */
/* swipe paging on touch screens: one swipe = one page */
(function () {
  var coarse = false; try { coarse = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window; } catch (e) {}
  if (!coarse) return;
  document.documentElement.classList.add('swipe');
  var sx = 0, sy = 0, st = 0, busy = false, on = false;
  function curStep(){ return Math.round(window.scrollY / Math.max(1, window.innerHeight)); }
  window.addEventListener('touchstart', function (e) {
    on = e.touches.length === 1 && !cmsIsOpen() && !(e.target.closest && e.target.closest('#unlock,#lb,.ag,nav.top,#cms,#kjScroll,#kjBanner'));
    if (on) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; st = performance.now(); }
  }, { passive:true });
  window.addEventListener('touchend', function (e) {
    if (!on || gate !== 2 || busy || !e.changedTouches.length) return; on = false;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy, dt = performance.now() - st;
    if (Math.abs(dy) < 44 || Math.abs(dy) < Math.abs(dx) * 1.2 || dt > 900) return;
    var next = Math.max(0, Math.min(N - 1, curStep() + (dy < 0 ? 1 : -1)));
    if (next === curStep()) return; busy = true; go(next); setTimeout(function () { busy = false; }, 850);
  }, { passive:true });
})();
function relockDone(){
  relocking = false; gate = 0; finBoom = false; heroBackAt = performance.now(); intent = 0; window.scrollTo(0, 0);
  cstart = 0; cgoal = 0; cu = 1; sp = 0; camFrom = null; last = 0; /* the clouds are closed, so jump home at once and the name card can come straight back */ drum.setEnabled(false); document.documentElement.classList.remove('opened');
  var k = $('ulk'); k.classList.remove('snap'); k.style.transform = ''; $('ulf').style.width = '0';
}
function relock(){
  if (gate !== 2 || relocking) return; relocking = true; document.documentElement.style.overflow = 'hidden';
  var t0 = performance.now();
  /* 1) the open door shuts and the camera glides back out to the full pagoda, 2) only then the pagoda lifts apart, 3) the gate and slider return */
  heroWas = cgoal === 0 && sp < 0.02; /* already on the home page: let the name card fade out quickly instead of vanishing */
  function begin(){ if (gate !== 2) return; intent = null; gate = 3; introT = 1; if (reduce) relockDone(); }
  (function wait(){ var d = cgoal, shut = d < 1 || (DS[d].o < 0.08 && cu >= 1); if (shut || reduce || performance.now() - t0 > 6000) begin(); else requestAnimationFrame(wait); })();
}
window.addEventListener('wheel', function (e) {
  if (gate !== 2 || !lb.hidden || cmsIsOpen()) return; e.preventDefault();
  var now2 = performance.now(); if (now2 < wheelBusy || Math.abs(e.deltaY) < 4) return;
  var cur = intent != null ? intent : Math.round(target), nx = Math.max(0, Math.min(N - 1, cur + (e.deltaY > 0 ? 1 : -1)));
  if (nx !== cur) { wheelBusy = now2 + 900; go(nx); }
}, { passive:false });
var wheelBusy = 0, relocking = false, heroWas = false, heroBackAt = 0, introGoal = 1;
window.addEventListener('keydown', function (e) {
  if (gate !== 2 || !lb.hidden || e.altKey || e.ctrlKey || e.metaKey || cmsIsOpen()) return; var tg = e.target && e.target.tagName; if (tg === 'INPUT' || tg === 'TEXTAREA') return;
  var cur = intent != null ? intent : Math.round(target), nx = cur;
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || (e.key === ' ' && tg !== 'BUTTON' && tg !== 'A')) nx = cur + 1; else if (e.key === 'ArrowUp' || e.key === 'PageUp') nx = cur - 1; else if (e.key === 'Home') nx = 0; else if (e.key === 'End') nx = N - 1; else return;
  e.preventDefault(); nx = Math.max(0, Math.min(N - 1, nx)); if (nx !== cur) go(nx);
});
function go(i){
  if (relocking) return;
  if (gate < 2) { pendingGo = i > 0 ? i : 0; if (gate === 0) unlock(); return; }
  intent = i; window.scrollTo({ top:i * window.innerHeight, behavior:reduce ? 'auto' : 'smooth' });
}
(function () {
  var k = $('ulk'), t = $('ult'), f = $('ulf'), drag = false, x0 = 0, dx = 0, moved = false, max = 0;
  function mx(){ return t.clientWidth - k.clientWidth - 10; }
  function set(v){ dx = Math.max(0, Math.min(max, v)); k.style.transform = 'translateX(' + dx + 'px)'; f.style.width = (dx + 28) + 'px'; }
  k.addEventListener('pointerdown', function (e) { drag = true; moved = false; max = mx(); x0 = e.clientX - dx; k.classList.remove('snap'); try { k.setPointerCapture(e.pointerId); } catch (er) {} });
  k.addEventListener('pointermove', function (e) { if (!drag) return; var v = e.clientX - x0; if (Math.abs(v) > 4) moved = true; set(v); });
  function end(){ if (!drag) return; drag = false; if (dx > max * 0.82) { set(max); unlock(); } else if (moved) { k.classList.add('snap'); set(0); f.style.width = '0'; } }
  k.addEventListener('pointerup', end); k.addEventListener('pointercancel', end);
  k.addEventListener('click', function () { if (moved) { moved = false; return; } max = mx(); k.classList.add('snap'); set(max); setTimeout(unlock, 260); });
  function nudge(){ if (gate !== 0) return; var u = $('unlock'); u.classList.remove('nudge'); void u.offsetWidth; u.classList.add('nudge'); }
  window.addEventListener('wheel', nudge, { passive:true }); window.addEventListener('touchmove', nudge, { passive:true });
  window.addEventListener('keydown', function (e) { if (gate === 0 && (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown')) { nudge(); } });
})();
document.querySelectorAll('[data-step]').forEach(function (b) { b.addEventListener('click', function () { go(+b.getAttribute('data-step')); }); });
$('brand').addEventListener('click', function (e) { e.preventDefault(); if (gate === 2) relock(); else if (gate === 0) { var u = $('unlock'); u.classList.remove('nudge'); void u.offsetWidth; u.classList.add('nudge'); } });
var SPR = 'outElastic(1, .55)';
function stamp(sel, from, to, rot0, rot1){ try { if (!reduce && window.anime && anime.animate) anime.animate(sel, { scale:[from, to], rotate:[rot0, rot1], opacity:[0, 1], duration:760, ease:SPR }); } catch (e) {} }
(function () { var hn = document.querySelector('.hero .hn'); if (hn) { var sl = document.createElement('span'); sl.className = 'seal'; sl.setAttribute('aria-hidden', 'true'); sl.textContent = '\u96F2'; hn.appendChild(sl); window.__seal = sl; } })();
function markDot(i){ [].forEach.call(dotsEl.children, function (b, k) { b.classList.toggle('on', k === i); }); }
function onStep(i){
  if (last !== -1) { try { fireBurst(); } catch (e) {} stamp('.brand i', 1.35, 1, -14, -4); }
  if (i === 0 && window.__seal) stamp(window.__seal, 2.2, 1, -25, 7);
  try { if (!reduce && window.anime && anime.animate) { var dd = dotsEl.children[i]; if (dd) anime.animate(dd, { scale:[1.7, 1], duration:520, ease:SPR }); } } catch (e) {}
  last = i;
  [].forEach.call(dotsEl.children, function (b, k) { b.classList.toggle('on', k === i); if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
  $('hudl').textContent = pad2(i + 1) + ' / ' + N + ' · ' + STEPS[i].short;
  groups.forEach(function (g, k) { g.classList.toggle('on', k === i); });
  try { if (!reduce && window.anime && anime.animate) anime.animate(groups[i].children, { opacity:[0, 1], translateY:[10, 0], delay:anime.stagger(70), duration:420, ease:'outQuart' }); } catch (e) {}
}
var proj = { x:0, y:0 }, projKey = '';
function placeActions(){
  {
    proj.x = window.innerWidth * (0.5 + LY.fxF); proj.y = window.innerHeight * (0.5 - (LY.fyF - LY.fhF / 2));
    actEl.style.left = proj.x + 'px'; actEl.style.top = (proj.y + 14) + 'px'; actEl.style.maxWidth = Math.min(window.innerWidth - 24, 640) + 'px';
  }
  actEl.style.opacity = (last === 0 || !panels[last] || cgoal === N - 1) ? 0 : (panels[last].isEnabled() ? Math.min(1, panels[last].visibility).toFixed(2) : 0);
  actEl.style.visibility = actEl.style.opacity === '0' ? 'hidden' : 'visible';
}
var lb = $('lb'), lbimg = $('lbimg'), lastFocus = null;
var lbList = [], lbAt = 0;
function lbItems(s){ var o = [], wl = (s.wall || []).filter(function (t) { return t.feat; }).concat((s.wall || []).filter(function (t) { return !t.feat; })); wl.forEach(function (t) { var ims = (t.img ? [t.img] : []).concat(t.more || []); ims.forEach(function (k, q) { o.push({ k:k, n:t.n, m:[t.by, t.yr].filter(Boolean).join(' \u00B7 ') + (ims.length > 1 ? '  (' + (q + 1) + ' of ' + ims.length + ')' : ''), v:t.href }); }); }); return o; }
function lbShow(){ var it = lbList[lbAt]; lbimg.src = IMG_SRC[it.k]; lbimg.alt = it.n; $('lbn').textContent = it.n; $('lbm').textContent = it.m + '  \u00B7  ' + (lbAt + 1) + ' / ' + lbList.length; var v = $('lbv'); if (it.v) { v.href = it.v; v.hidden = false; } else { v.removeAttribute('href'); v.hidden = true; } lb.querySelectorAll('.lb-nav').forEach(function (b) { b.hidden = lbList.length < 2; }); }
function lbGo(d){ if (!lbList.length) return; lbAt = (lbAt + d + lbList.length) % lbList.length; lbShow(); }
function openLb(s, at){ lbList = lbItems(s); if (!lbList.length) return; lbAt = at || 0; lastFocus = document.activeElement; lbShow(); lb.hidden = false; lb.querySelector('.lb-x').focus(); }
function closeLb(){ lb.hidden = true; lbimg.src = ''; if (lastFocus && lastFocus.focus) lastFocus.focus(); }
lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb-x')) closeLb(); var nb = e.target.closest && e.target.closest('.lb-nav'); if (nb) lbGo(+nb.getAttribute('data-d')); });
document.addEventListener('keydown', function (e) { if (lb.hidden) return; if (e.key === 'Escape') closeLb(); if (e.key === 'ArrowRight') lbGo(1); if (e.key === 'ArrowLeft') lbGo(-1); });
(function () { var sx = 0; lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive:true }); lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) lbGo(dx < 0 ? 1 : -1); }, { passive:true }); })();

/* click a piece on the drum to jump to its section; pointer drives a tiny sway */
var pickQ = null;
canvas.addEventListener('pointermove', function (e) {
  px = (e.clientX / window.innerWidth - 0.5) * 2;
  if (pickQ) return; pickQ = requestAnimationFrame(function () {
    pickQ = null; var r = scene.pick(scene.pointerX, scene.pointerY, function (m) { return m.metadata && m.metadata.step != null && m.isVisible && m.visibility > 0.5; });
    canvas.style.cursor = r && r.hit ? 'pointer' : 'default';
  });
});
canvas.addEventListener('pointerup', function () {
  var r = scene.pick(scene.pointerX, scene.pointerY, function (m) { return m.metadata && m.metadata.step != null && m.isVisible && m.visibility > 0.5; });
  if (gate === 2 && r && r.hit) go(r.pickedMesh.metadata.step);
});

/* ---------- start ---------- */
$('sndb').addEventListener('click', function () { sndSet(!sndOn); });
$('seab').addEventListener('click', function () { setSeason(seasonI + 1); });
setSeason(0);
(function () {
  var lx = 0, ly = 0, touchAxis = 0;
  window.addEventListener('pointerdown', function (e) {
    if (gate !== 2 || cgoal !== 0 || cu < 1 || (e.target.closest && e.target.closest('button,a,header,.ctl,.dots,#lb,#cms,#cmsHint,#kjScroll,#kjBanner'))) return;
    orbDrag = true; lx = e.clientX; ly = e.clientY; touchAxis = 0;
  });
  window.addEventListener('pointermove', function (e) {
    if (!orbDrag) return; var dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
    if (e.pointerType === 'touch') { if (!touchAxis) touchAxis = Math.abs(dx) >= Math.abs(dy) ? 1 : 2; if (touchAxis === 2) return; dy = 0; }
    orbAz = Math.max(-2.6, Math.min(2.6, orbAz - dx * 0.006)); orbEl = Math.max(-0.12, Math.min(0.55, orbEl + dy * 0.003));
  });
  ['pointerup', 'pointercancel'].forEach(function (ev) { window.addEventListener(ev, function () { orbDrag = false; }); });
})();
function setSpacer(){ $('spacer').style.height = (N * window.innerHeight) + 'px'; }
setSpacer(); computeLayout();
var rsz = 0;
window.addEventListener('resize', function () {
  clearTimeout(rsz); rsz = setTimeout(function () {
    engine.resize(); setSpacer(); if (computeLayout()) buildTextures(); else for (var i = 0; i < N; i++) drawPanel(i); projKey = '';
  }, 120);
});
function retheme(){ readTheme(); applyMaterialTheme(); buildPieceMats(); for (var i = 0; i < N; i++) drawPanel(i); }
try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', retheme); } catch (e) {}
try { new MutationObserver(retheme).observe(document.documentElement, { attributes:true, attributeFilter:['data-theme'] }); } catch (e) {}

var fontP = (document.fonts && document.fonts.load) ? Promise.all(['600 40px "Kode Mono"','400 20px "Kode Mono"','500 14px "Kode Mono"'].map(function (f) { return document.fonts.load(f).catch(function () {}); })) : Promise.resolve();
Promise.all([loadImages(), Promise.race([fontP, new Promise(function (r) { setTimeout(r, 1500); })])]).then(function () {
  buildTextures(); readScroll(); sp = target; onStep(Math.round(sp));
  engine.runRenderLoop(function () { scene.render(); });
  setTimeout(function () { $('veil').classList.add('gone'); }, 120);
  try { var cg = sessionStorage.getItem('nk-cms-goto'), ca = sessionStorage.getItem('nk-cms-admin'); sessionStorage.removeItem('nk-cms-goto'); sessionStorage.removeItem('nk-cms-admin'); sessionStorage.removeItem('nk-cms-open');
    if (ca) setTimeout(function () { window.__nk.snap(); cmsOpen(1); cmsSiteChanged = false; cmsDirty(false); }, 250);
    else if (cg != null) setTimeout(function () { window.__nk.snap(); var gi = Math.max(0, Math.min(N - 1, +cg)); if (gi > 0) go(gi); }, 250); } catch (er) {}
  document.documentElement.setAttribute('data-ready', '1');
  if (!reduce) setInterval(function () {
    tickN++; var i = Math.round(sp), s = STEPS[i]; if (s.frames && s.frames.length > 1 && document.visibilityState === 'visible') drawPanel(i);
  }, 1800);
});
window.addEventListener('pagehide', function () { try { engine.stopRenderLoop(); scene.dispose(); engine.dispose(); } catch (e) {} });
/* ---------- CMS editor page: a separate page, reached with Ctrl+8 (or Ctrl+Shift+8, or holding the NK logo on a phone) ---------- */
var cms = { base:null, dirty:false, el:null, draft:null, imgs:null, sel:1, changed:false, saveT:0, addOpen:false, delAsk:false, prevT:0 };
var cmsDl = null; try { if (window.claude && window.claude.use) window.claude.use('downloads').then(function (d) { cmsDl = d; }, function () {}); } catch (er) {} /* the artifact viewer's save prompt; on a normal website this stays null */
var CMS_TYPE = { hero:'Start page', about:'Text room', project:'Project', skills:'Skills', certs:'Certificates', contact:'Contact' };
var CMS_ADD = [['project','Project','Something you built, with screenshots and details.'], ['about','Text room','A title, a paragraph, a few facts and numbers.'], ['skills','Skills','Groups of tools and skills.'], ['certs','Certificates','Certificate pictures people can enlarge.']];
var CMS_HELP = {
  short:'The name in the top menu and on the room list.', piece:'The short word painted on the door. Up to 12 letters, it is shown in capitals.',
  kicker:'The small line above the title.', title:'The big heading inside the room.', body:'A short paragraph. Two or three sentences reads best.',
  tags:'Separate them with commas, for example: React, AWS, Terraform.', stats:'A big number with a label, for example 6 / Featured projects.',
  facts:'Short label and value pairs, for example Based in / Kuala Lumpur.', actions:'Buttons under the room. Paste the full web address, starting with https://',
  case:'Up to 3 short details, for example The hard part / Keeping scores in sync.', frames:'Pictures of your project. They are shrunk automatically. The first one shows first.',
  caption:'One small line under the screenshots.', groups:'A group name, then the skills in it separated by commas.', alsoList:'Small extra projects, with a few words on each.',
  wall:'Up to 8 per room. Featured ones show first and bigger. Need more? Add another Certificates room.', cards:'Up to 3 cards. Each card can hold its own pictures; each picture gets a button to enlarge it.', links:'How people reach you. The web address must start with https://'
};
var CMS_FIELDS = {
  hero:   [['kicker','Small line above your name','text'], ['title','Your name','text'], ['body','Intro sentence','area'], ['tags','Tags','csv']],
  about:  [['short','Menu name','text'], ['piece','Door sign','text'], ['kicker','Small heading','text'], ['title','Title','text'], ['body','Text','area'], ['stats','Big numbers (up to 3)','rows',['Number','Label'],3], ['facts','Facts','rows',['Label','Value'],5], ['actions','Buttons','links',3]],
  project:[['short','Menu name','text'], ['piece','Door sign','text'], ['kicker','Small heading','text'], ['title','Title','text'], ['body','Summary','area'], ['tags','Tags','csv'], ['frames','Screenshots','images'], ['caption','Caption','text'], ['case','Details (up to 3)','rows',['Heading','Text'],3], ['actions','Buttons','links',3]],
  skills: [['short','Menu name','text'], ['piece','Door sign','text'], ['kicker','Small heading','text'], ['title','Title','text'], ['groups','Skill groups (up to 3)','groups',3], ['alsoList','Also built (up to 3)','rows',['Name','What'],3], ['actions','Buttons','links',3]],
  certs:  [['short','Menu name','text'], ['piece','Door sign','text'], ['kicker','Small heading','text'], ['title','Title','text'], ['wall','Certificates (up to 8)','wall',8]],
  contact:[['kicker','Small heading','text'], ['title','Title','text'], ['body','Text','area'], ['links','Links (up to 4)','rows',['Label','Shown text','Web address'],4], ['facts','Facts','rows',['Label','Value'],3], ['actions','Buttons','links',3]]
};
var CMS_NEW = {
  project:function (n) { return { type:'project', short:'New project', piece:'NEW', kicker:'Project 1 of 1', title:'New project', body:'What it does, in one or two sentences.', tags:['Tag'], frames:[], missing:'Screenshot goes here', caption:'', case:[['What it does',''],['The hard part',''],['Built with','']], actions:[], prop:2 + (n % 6) }; },
  about:  function () { return { type:'about', short:'New room', piece:'ROOM', kicker:'Section', title:'New section', body:'Write something here.', stats:[], facts:[], actions:[], prop:1 }; },
  skills: function () { return { type:'skills', short:'Skills', piece:'SKILLS', kicker:'Skills', title:'Tools I work with.', groups:[['Group',['Skill']]], alsoList:[], actions:[], prop:8 }; },
  certs:  function () { return { type:'certs', short:'Certificates', piece:'CERTS', kicker:'Certificates', title:'Certificates', wall:[], actions:'certs', prop:9 }; }
};
function cmsA(s){ return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
function cmsIsOpen(){ return !!(cms.el && !cms.el.hidden); }
function cmsImg(k){ return (cms.imgs && cms.imgs[k]) || IMG_SRC[k] || ''; }
function cmsMsg(t, bad){ var m = $('admMsg'); if (!m) return; m.textContent = t; m.className = 'adm-msg' + (bad ? ' bad' : ''); clearTimeout(m._t); m._t = setTimeout(function () { m.textContent = ''; }, 6000); }
function cmsState(t, bad){ var st = $('admState'); if (st) { st.textContent = t; st.className = bad ? 'bad' : ''; } }
function cmsBuild(){
  var el = document.createElement('div'); el.id = 'cms'; el.className = 'adm'; el.hidden = true;
  el.innerHTML =
    '<div class="adm-top"><div class="adm-brand"><i>NK</i><div><b>Portfolio editor</b><span id="admState">Saved</span></div></div>' +
    '<div class="adm-topbtns"><button type="button" class="adm-cancel" data-act="cancel" disabled>Cancel changes</button><button type="button" class="adm-save" data-act="save" disabled>Save changes</button><button type="button" class="adm-view" data-act="view">View site</button></div></div>' +
    '<div class="adm-main">' +
      '<nav class="adm-side" aria-label="Rooms"><h2>Your rooms</h2><p class="adm-sub">In the order visitors walk through them. Click one to edit it.</p><ol id="admList"></ol>' +
        '<button type="button" class="adm-add" data-act="addopen">+ Add a room</button><div id="admAdd"></div>' +
        '<div class="adm-tools"><h2>Backup</h2><p class="adm-sub">Export makes a <code>content.json</code> file for your real website, or a backup.</p>' +
        '<div class="adm-row"><button type="button" data-act="export">Export</button><button type="button" data-act="copy">Copy as text</button><label class="adm-file">Import<input type="file" accept="application/json,.json" data-act="import"></label></div>' +
        '<button type="button" class="adm-link" data-act="reset">Reset everything to the original</button></div></nav>' +
      '<main class="adm-edit" id="admForm"></main>' +
      '<aside class="adm-prev" aria-label="Preview"><h2>Preview</h2><p class="adm-sub">The card visitors see inside this room. It updates as you type.</p><div class="adm-canvas"><canvas id="admCanvas" aria-label="Preview of the room card"></canvas><div id="admHeroPrev"></div></div></aside>' +
    '</div><p id="admMsg" class="adm-msg" role="status" aria-live="polite"></p>';
  document.body.appendChild(el); cms.el = el;
  el.addEventListener('click', cmsClick); el.addEventListener('input', cmsInput); el.addEventListener('change', cmsChange);
}
var cmsSiteChanged = false;
function cmsOpen(i){
  if (!cms.el) cmsBuild();
  if (!cms.draft) { cms.draft = JSON.parse(JSON.stringify(STEPS)); cms.imgs = JSON.parse(JSON.stringify(CMS_IMAGES)); cmsSnap(); }
  cms.sel = Math.min(cms.draft.length - 1, Math.max(0, i != null ? i : (last > 0 ? last : 1)));
  cms.el.hidden = false; document.documentElement.classList.add('adm-on'); window.scrollTo(0, 0);
  try { engine.stopRenderLoop(); } catch (er) {} /* the 3D site sleeps while you edit */
  var hn = $('cmsHint'); if (hn) hn.hidden = true;
  cmsRender(); cmsDirty(cms.dirty);
}
function cmsView(){
  if (cms.dirty) { cmsMsg('You have unsaved changes. Press Save changes to keep them, or Cancel changes to throw them away.', true); cms.el.classList.remove('adm-nudge'); void cms.el.offsetWidth; cms.el.classList.add('adm-nudge'); return; }
  if (cmsSiteChanged) { cms.leaving = true; try { sessionStorage.setItem('nk-cms-goto', String(cms.sel)); } catch (er) {} location.reload(); return; }
  cms.el.hidden = true; document.documentElement.classList.remove('adm-on');
  try { engine.runRenderLoop(function () { scene.render(); }); } catch (er) {}
  if (cms.sel > 0 && gate === 2) go(cms.sel);
}
function cmsRender(){ cmsRenderList(); cmsRenderForm(); cmsPreview(); }
function cmsRenderList(){
  var d = cms.draft, h = '';
  d.forEach(function (s, i) { h += '<li><button type="button" class="' + (i === cms.sel ? 'on' : '') + '" data-act="pick" data-i="' + i + '"' + (i === cms.sel ? ' aria-current="true"' : '') + '><b>' + pad2(i) + '</b><span>' + cmsA(s.short || s.title) + '</span><i>' + CMS_TYPE[s.type] + '</i></button></li>'; });
  $('admList').innerHTML = h;
  var onB = $('admList').querySelector('.on'); if (onB && window.innerWidth < 760) { var ol = $('admList'); ol.scrollLeft = onB.parentNode.offsetLeft - (ol.clientWidth - onB.offsetWidth) / 2; } /* phone: keep the chosen room visible in the sideways list */
  var ad = $('admAdd');
  ad.innerHTML = cms.addOpen ? '<p class="adm-sub">What kind of room? It goes just before Contact.</p>' + CMS_ADD.map(function (a) { return '<button type="button" class="adm-type" data-act="add" data-t="' + a[0] + '"' + (d.length >= 13 ? ' disabled' : '') + '><b>' + a[1] + '</b><span>' + a[2] + '</span></button>'; }).join('') + (d.length >= 13 ? '<p class="adm-sub bad">The pagoda is full (12 rooms). Delete one first.</p>' : '') : '';
  cms.el.querySelector('[data-act=addopen]').textContent = cms.addOpen ? 'Cancel' : '+ Add a room';
}
function cmsRows(key, rows, cols, max){
  var h = '';
  (rows || []).forEach(function (row, r) { h += '<div class="adm-pair">' + cols.map(function (cn, c) { return '<input data-k="' + key + '" data-r="' + r + '" data-c="' + c + '" placeholder="' + cn + '" aria-label="' + cn + '" value="' + cmsA(row[c]) + '">'; }).join('') + '<button type="button" class="adm-x" data-act="rowdel" data-k="' + key + '" data-r="' + r + '" aria-label="Remove">&times;</button></div>'; });
  if (!max || (rows || []).length < max) h += '<button type="button" class="adm-more" data-act="rowadd" data-k="' + key + '" data-n="' + cols.length + '">+ Add</button>';
  return h;
}
function cmsRenderForm(){
  var d = cms.draft, i = cms.sel, s = d[i], fixed = i === 0 || i === d.length - 1;
  var h = '<div class="adm-head"><div><p class="adm-kick">Room ' + pad2(i) + ' &middot; ' + CMS_TYPE[s.type] + '</p><h1>' + cmsA(s.short || s.title) + '</h1></div>';
  if (fixed) h += '<p class="adm-sub">' + (i === 0 ? 'The start page is always first.' : 'Contact is always last.') + '</p>';
  else h += '<div class="adm-row"><button type="button" data-act="up"' + (i <= 1 ? ' disabled' : '') + '>Move earlier</button><button type="button" data-act="down"' + (i >= d.length - 2 ? ' disabled' : '') + '>Move later</button>' +
    (cms.delAsk ? '<span class="adm-ask">Delete this room? <button type="button" class="danger" data-act="delyes">Yes, delete</button><button type="button" data-act="delno">No</button></span>' : '<button type="button" class="danger-o" data-act="del">Delete room</button>') + '</div>';
  h += '</div>';
  CMS_FIELDS[s.type].forEach(function (f) {
    var key = f[0], kind = f[2], v = s[key], id = 'f_' + key;
    h += '<div class="adm-f"><label for="' + id + '">' + f[1] + '</label>' + (CMS_HELP[key] ? '<p class="adm-help">' + CMS_HELP[key] + '</p>' : '');
    if (kind === 'text') h += '<input id="' + id + '" data-k="' + key + '" value="' + cmsA(v) + '"' + (key === 'piece' ? ' maxlength="12"' : '') + '>';
    else if (kind === 'area') h += '<textarea id="' + id + '" data-k="' + key + '" rows="4">' + cmsA(v) + '</textarea>';
    else if (kind === 'csv') h += '<input id="' + id + '" data-k="' + key + '" data-csv="1" value="' + cmsA((v || []).join(', ')) + '">';
    else if (kind === 'rows') h += cmsRows(key, v, f[3], f[4]);
    else if (kind === 'links') {
      (Array.isArray(v) ? v : []).forEach(function (a, r) { h += '<div class="adm-pair"><input data-k="' + key + '" data-r="' + r + '" data-p="t" placeholder="Button text" aria-label="Button text" value="' + cmsA(a.t) + '"><input data-k="' + key + '" data-r="' + r + '" data-p="href" placeholder="https://" aria-label="Web address" value="' + cmsA(a.href) + '"><button type="button" class="adm-x" data-act="rowdel" data-k="' + key + '" data-r="' + r + '" aria-label="Remove button">&times;</button></div>'; });
      if (!Array.isArray(v) || v.length < f[3]) h += '<button type="button" class="adm-more" data-act="linkadd" data-k="' + key + '">+ Add button</button>';
    } else if (kind === 'groups') {
      (v || []).forEach(function (g, r) { h += '<div class="adm-pair"><input data-k="' + key + '" data-r="' + r + '" data-c="0" placeholder="Group name" aria-label="Group name" value="' + cmsA(g[0]) + '"><input class="wide" data-k="' + key + '" data-r="' + r + '" data-c="1" data-csv="1" placeholder="Skills, separated by commas" aria-label="Skills" value="' + cmsA((g[1] || []).join(', ')) + '"><button type="button" class="adm-x" data-act="rowdel" data-k="' + key + '" data-r="' + r + '" aria-label="Remove group">&times;</button></div>'; });
      if ((v || []).length < f[3]) h += '<button type="button" class="adm-more" data-act="groupadd" data-k="' + key + '">+ Add group</button>';
    } else if (kind === 'images') {
      h += '<div class="adm-thumbs">' + (v || []).map(function (k, r) { return '<figure><img alt="Screenshot ' + (r + 1) + '" src="' + cmsImg(k) + '"><button type="button" class="adm-x" data-act="imgdel" data-k="' + key + '" data-r="' + r + '" aria-label="Remove screenshot ' + (r + 1) + '">&times;</button></figure>'; }).join('') +
        '<label class="adm-drop">+ Add a picture<input type="file" accept="image/*" data-act="upload" data-k="' + key + '"></label></div>';
    } else if (kind === 'wall') {
      (v || []).forEach(function (t, r) {
        var pic = t.img ? '<figure class="adm-badge"><img alt="' + cmsA(t.n) + ' badge" src="' + cmsImg(t.img) + '"><button type="button" class="adm-x" data-act="wimgdel" data-r="' + r + '" data-q="-1" aria-label="Remove badge">&times;</button></figure>'
          : '<label class="adm-drop adm-badge">+ Badge<input type="file" accept="image/*" data-act="wupload" data-r="' + r + '" data-q="img"></label>';
        h += '<div class="adm-card adm-tile' + (t.feat ? ' feat' : '') + '"><div class="adm-tile-top">' + pic + '<div class="adm-tile-f">' +
          '<input data-k="wall" data-r="' + r + '" data-p="n" placeholder="Certificate name" aria-label="Certificate name" value="' + cmsA(t.n) + '">' +
          '<div class="adm-pair"><input data-k="wall" data-r="' + r + '" data-p="by" placeholder="Given by, for example Cisco" aria-label="Given by" value="' + cmsA(t.by) + '"><input class="yr" data-k="wall" data-r="' + r + '" data-p="yr" placeholder="Year" aria-label="Year" inputmode="numeric" maxlength="9" value="' + cmsA(t.yr) + '"></div>' +
          '<input data-k="wall" data-r="' + r + '" data-p="href" placeholder="Verify link (optional), https://..." aria-label="Verify link" value="' + cmsA(t.href) + '">' +
          '<label class="adm-check"><input type="checkbox" data-k="wall" data-r="' + r + '" data-p="feat"' + (t.feat ? ' checked' : '') + '> Featured (shows first and bigger)</label></div></div>' +
          '<p class="adm-help">Extra pictures, like full certificates. They show when someone taps through.</p><div class="adm-thumbs">' + (t.more || []).map(function (k, q) { return '<figure><img alt="" src="' + cmsImg(k) + '"><button type="button" class="adm-x" data-act="wimgdel" data-r="' + r + '" data-q="' + q + '" aria-label="Remove picture">&times;</button></figure>'; }).join('') +
          '<label class="adm-drop">+ Add a picture<input type="file" accept="image/*" data-act="wupload" data-r="' + r + '" data-q="more"></label></div>' +
          '<div class="adm-row adm-tile-b"><button type="button" data-act="wup" data-r="' + r + '"' + (r === 0 ? ' disabled' : '') + '>Move up</button><button type="button" data-act="wdown" data-r="' + r + '"' + (r === v.length - 1 ? ' disabled' : '') + '>Move down</button><button type="button" class="danger-o" data-act="rowdel" data-k="wall" data-r="' + r + '">Remove</button></div></div>';
      });
      if ((v || []).length < f[3]) h += '<button type="button" class="adm-more" data-act="walladd">+ Add certificate</button>';
      else h += '<p class="adm-sub">This room is full. Add another Certificates room for more.</p>';
    }
    h += '</div>';
  });
  $('admForm').innerHTML = h;
}
function cmsPreview(){ /* draw this room's card with the same code the pagoda uses */
  cancelAnimationFrame(cms.prevT);
  cms.prevT = requestAnimationFrame(function () {
    var s = cms.draft[cms.sel], cv = $('admCanvas'), hp = $('admHeroPrev');
    if (s.type === 'hero') { cv.hidden = true; hp.hidden = false; hp.innerHTML = '<p class="k">' + cmsA(s.kicker) + '</p><h3>' + cmsA(s.title) + '</h3><p>' + cmsA(s.body) + '</p><p class="adm-sub">The start page shows on the cloud screen, with your photo.</p>'; return; }
    cv.hidden = false; hp.hidden = true;
    var K = 1.5; cv.width = Math.round(L.W * K); cv.height = Math.round(L.H * K); var c = cv.getContext('2d'); c.setTransform(K, 0, 0, K, 0, 0); c.clearRect(0, 0, L.W, L.H);
    var keep = STEPS[cms.sel], t = cmsTidy(JSON.parse(JSON.stringify(cms.draft)))[cms.sel];
    var n0 = N; try { N = cms.draft.length; STEPS[cms.sel] = t; var top = cardBase(c, cms.sel); DRAW[t.type](c, t, cms.sel, top); } catch (er) {} finally { N = n0; if (keep === undefined) STEPS.length = N; else STEPS[cms.sel] = keep; }
  });
}
function cmsSnap(){ cms.base = JSON.stringify({ d:cms.draft, i:cms.imgs }); }
function cmsDirty(on){ /* nothing is kept until you press Save changes */
  cms.dirty = on; if (!cms.el) return;
  cms.el.querySelector('[data-act=save]').disabled = !on; cms.el.querySelector('[data-act=cancel]').disabled = !on; cms.el.classList.toggle('adm-dirty', on);
  if (on) cmsState('Unsaved changes', true); else cmsState(cmsSiteChanged ? 'Saved. View site to see the changes.' : 'All changes saved');
}
function cmsChanged(){ cmsDirty(true); cmsPreview(); }
function cmsCancel(){ var b = JSON.parse(cms.base); cms.draft = b.d; cms.imgs = b.i; cms.sel = Math.min(cms.sel, cms.draft.length - 1); cms.delAsk = false; cms.addOpen = false; cmsRender(); cmsDirty(false); cmsMsg('Changes cancelled. Everything is back to your last save.'); }
window.addEventListener('beforeunload', function (e) { if (cms.dirty && !cms.leaving) { e.preventDefault(); e.returnValue = ''; } });
function cmsCheck(){ /* returns [room, problem] for the first thing that would break the site */
  var ok = /^(https?:\/\/\S+|mailto:\S+|tel:\S+|\/\S*|#\S*)$/i;
  for (var i = 0; i < cms.draft.length; i++) {
    var s = cms.draft[i];
    if (!String(s.title || '').trim()) return [i, 'it needs a title.'];
    var acts = Array.isArray(s.actions) ? s.actions : [];
    for (var a = 0; a < acts.length; a++) if (acts[a].t && acts[a].step == null && !ok.test(String(acts[a].href || '').trim())) return [i, 'the button "' + acts[a].t + '" needs a web address starting with https://'];
    var wl = s.wall || [];
    for (var w = 0; w < wl.length; w++) { if (!String(wl[w].n || '').trim()) return [i, 'certificate ' + (w + 1) + ' needs a name.']; if (String(wl[w].href || '').trim() && !ok.test(String(wl[w].href).trim())) return [i, 'the verify link for "' + wl[w].n + '" must start with https://']; }
    var ln = s.links || [];
    for (var l = 0; l < ln.length; l++) if ((ln[l][0] || ln[l][1]) && !ok.test(String(ln[l][2] || '').trim())) return [i, 'the link "' + (ln[l][0] || ln[l][1]) + '" needs a web address starting with https://'];
  }
  return null;
}
function cmsSaveNow(){
  clearTimeout(cms.saveT); if (!cms.draft) return true;
  var bad = cmsCheck(); if (bad) { cms.sel = bad[0]; cmsRender(); cmsState('Not saved', true); cmsMsg('Not saved. Room ' + pad2(bad[0]) + ': ' + bad[1], true); return false; }
  var p = cmsPayload();
  if (!cmsValid(p.steps)) { cmsState('Not saved', true); return false; }
  try { var txt = JSON.stringify(p); if (localStorage.getItem(CMS_KEY) !== txt) { localStorage.setItem(CMS_KEY, txt); cmsSiteChanged = true; } } catch (er) { cmsState('Not saved: the browser is out of space for pictures', true); return false; }
  cmsSnap(); cmsDirty(false); return true;
}
function cmsInput(e){
  var t = e.target, s = cms.draft[cms.sel]; if (t.type === 'file') return; /* pictures are handled on change */
  if (t.hasAttribute('data-lab')) { var k = t.getAttribute('data-lab'); s.certs = s.certs || []; var hit = s.certs.filter(function (c) { return c[0] === k; })[0]; if (hit) hit[1] = t.value; else s.certs.push([k, t.value]); cmsChanged(); return; }
  var key = t.getAttribute('data-k'); if (!key) return;
  var r = t.getAttribute('data-r'), c = t.getAttribute('data-c'), p = t.getAttribute('data-p');
  var val = t.type === 'checkbox' ? (t.checked ? 1 : 0) : t.hasAttribute('data-csv') ? t.value.split(',').map(function (x) { return x.trim(); }).filter(Boolean) : t.value;
  if (r == null) s[key] = val; else if (p) s[key][+r][p] = val; else s[key][+r][+c] = val;
  if (t.type === 'checkbox') { cmsChanged(); cmsRenderForm(); return; }
  if (key === 'short' || key === 'title') { cmsRenderList(); var h1 = cms.el.querySelector('.adm-head h1'); if (h1) h1.textContent = s.short || s.title; }
  cmsChanged();
}
function cmsResize(file, cb){
  var fr = new FileReader();
  fr.onload = function () { var im = new Image(); im.onload = function () { var k = Math.min(1, 1100 / Math.max(im.width, im.height)), cv = document.createElement('canvas'); cv.width = Math.round(im.width * k); cv.height = Math.round(im.height * k); var g = cv.getContext('2d'); g.drawImage(im, 0, 0, cv.width, cv.height);
    var alpha = false; try { var px = g.getImageData(0, 0, cv.width, cv.height).data; for (var q = 3; q < px.length; q += 16) if (px[q] < 250) { alpha = true; break; } } catch (er) {}
    if (alpha && Math.max(cv.width, cv.height) > 700) { /* see-through pictures (badges) stay PNG, a bit smaller to save space */ var k2 = 700 / Math.max(cv.width, cv.height), c2 = document.createElement('canvas'); c2.width = Math.round(cv.width * k2); c2.height = Math.round(cv.height * k2); c2.getContext('2d').drawImage(cv, 0, 0, c2.width, c2.height); cv = c2; }
    cb(alpha ? cv.toDataURL('image/png') : cv.toDataURL('image/jpeg', 0.82)); }; im.onerror = function () { cmsMsg('That file is not a picture I can read.', true); }; im.src = fr.result; };
  fr.readAsDataURL(file);
}
function cmsChange(e){
  var t = e.target, act = t.getAttribute('data-act'), s = cms.draft[cms.sel]; if (!act || !t.files || !t.files[0]) return;
  var file = t.files[0]; t.value = '';
  if (act === 'import') {
    var fr = new FileReader(); fr.onload = function () { try { var d = JSON.parse(fr.result); if (!cmsValid(d.steps)) throw 0; localStorage.setItem(CMS_KEY, JSON.stringify({ v:1, steps:d.steps, images:d.images || {} })); cms.leaving = true; try { sessionStorage.setItem('nk-cms-admin', '1'); } catch (er) {} location.reload(); } catch (er) { cmsMsg('That file is not a content.json from this editor.', true); } }; fr.readAsText(file); return;
  }
  cmsResize(file, function (url) {
    var k = 'u' + Date.now().toString(36); cms.imgs[k] = url; IMG_SRC[k] = url; var im = new Image(); im.onload = function () { cmsPreview(); }; im.src = url; IMG[k] = im;
    if (act === 'upload') { s.frames = s.frames || []; s.frames.push(k); }
    if (act === 'wupload') { var wt = s.wall[+t.getAttribute('data-r')]; if (t.getAttribute('data-q') === 'img') wt.img = k; else { wt.more = wt.more || []; wt.more.push(k); } }
    if (act === 'cupload') { var cd = s.cards[+t.getAttribute('data-r')]; cd.imgs = cd.imgs || []; cd.imgs.push(k); s.certs = s.certs || []; s.certs.push([k, cd.h]); }
    cmsRenderForm(); cmsChanged();
  });
}
function cmsClick(e){
  var b = e.target.closest('[data-act]'); if (!b || b.tagName === 'INPUT') return;
  var act = b.getAttribute('data-act'), d = cms.draft, i = cms.sel, s = d[i], key = b.getAttribute('data-k'), r = +b.getAttribute('data-r');
  if (act === 'view') return cmsView();
  if (act === 'save') { if (cmsSaveNow()) cmsMsg('Saved. Press View site to see it on the pagoda.'); return; }
  if (act === 'cancel') return cmsCancel();
  if (act === 'pick') { cms.sel = +b.getAttribute('data-i'); cms.delAsk = false; cmsRender(); var f = $('admForm'); if (f && window.innerWidth < 900) f.scrollIntoView({ block:'start' }); return; }
  if (act === 'addopen') { cms.addOpen = !cms.addOpen; cmsRenderList(); return; }
  if (act === 'add') { if (d.length >= 13) return; var np = d.filter(function (x) { return x.type === 'project'; }).length; d.splice(d.length - 1, 0, CMS_NEW[b.getAttribute('data-t')](np)); cms.sel = d.length - 2; cms.addOpen = false; cms.delAsk = false; cmsRender(); cmsChanged(); cmsMsg('Room added before Contact. Its door appears when you view the site.'); return; }
  if (act === 'up' || act === 'down') { var j = act === 'up' ? i - 1 : i + 1; if (j < 1 || j > d.length - 2) return; var tmp = d[i]; d[i] = d[j]; d[j] = tmp; cms.sel = j; cmsRender(); cmsChanged(); return; }
  if (act === 'del') { if (d.length <= 5) { cmsMsg('The pagoda needs at least 4 rooms, so this one stays.', true); return; } cms.delAsk = true; cmsRenderForm(); return; }
  if (act === 'delno') { cms.delAsk = false; cmsRenderForm(); return; }
  if (act === 'delyes') { var gone = s.short || s.title; d.splice(i, 1); cms.delAsk = false; cms.sel = Math.min(i, d.length - 2); cmsRender(); cmsChanged(); cmsMsg('Deleted "' + gone + '".'); return; }
  if (act === 'rowadd') { s[key] = s[key] || []; var n = +b.getAttribute('data-n'), row = []; for (var q = 0; q < n; q++) row.push(''); s[key].push(row); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'linkadd') { s[key] = Array.isArray(s[key]) ? s[key] : []; s[key].push({ t:'Button', href:'https://', ghost:1 }); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'groupadd') { s[key].push(['Group', []]); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'walladd') { s.wall = s.wall || []; if (s.wall.length >= 8) return; s.wall.push({ n:'', by:'', yr:'', img:'', more:[], href:'', feat:0 }); cmsRenderForm(); cmsChanged(); var ins = cms.el.querySelectorAll('[data-k=wall][data-p=n]'); if (ins.length) ins[ins.length - 1].focus(); return; }
  if (act === 'wup' || act === 'wdown') { var j2 = act === 'wup' ? r - 1 : r + 1; if (j2 < 0 || j2 >= s.wall.length) return; var tw = s.wall[r]; s.wall[r] = s.wall[j2]; s.wall[j2] = tw; cmsRenderForm(); cmsChanged(); return; }
  if (act === 'wimgdel') { var q2 = +b.getAttribute('data-q'); if (q2 < 0) s.wall[r].img = ''; else s.wall[r].more.splice(q2, 1); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'cardadd') { s.cards.push({ h:'Certificate name', p:'', imgs:[] }); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'rowdel' || act === 'imgdel') { s[key].splice(r, 1); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'cimgdel') { s.cards[r].imgs.splice(+b.getAttribute('data-q'), 1); cmsRenderForm(); cmsChanged(); return; }
  if (act === 'export') return cmsExport(false);
  if (act === 'copy') return cmsExport(true);
  if (act === 'reset') { if (!b.classList.contains('arm')) { b.classList.add('arm'); b.textContent = 'Click again to reset everything'; return; } cms.leaving = true; try { localStorage.removeItem(CMS_KEY); sessionStorage.setItem('nk-cms-admin', '1'); } catch (er) {} location.reload(); return; }
}
function cmsPayload(){
  var d = cmsTidy(JSON.parse(JSON.stringify(cms.draft))), used = {}, imgs = {};
  d.forEach(function (s) { (s.frames || []).forEach(function (k) { used[k] = 1; }); (s.wall || []).forEach(function (t) { if (t.img) used[t.img] = 1; (t.more || []).forEach(function (k) { used[k] = 1; }); }); (s.cards || []).forEach(function (cd) { (cd.imgs || []).forEach(function (k) { used[k] = 1; }); }); });
  Object.keys(cms.imgs).forEach(function (k) { if (used[k]) imgs[k] = cms.imgs[k]; });
  return { v:1, t:Date.now(), steps:d, images:imgs };
}
function cmsExport(asText){
  if (cms.dirty) { cmsMsg('Save or cancel your changes first, so the file matches what you saved.', true); return; }
  var p = cmsPayload(), txt = JSON.stringify({ version:1, exported:new Date().toISOString(), steps:p.steps, images:p.images }, null, 1);
  if (asText) {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { cmsMsg('Copied. Paste it into content/content.json in your project.'); }, function () { cmsMsg('This browser blocked copying here. Use Export instead.', true); });
    else cmsMsg('This browser blocked copying here. Use Export instead.', true);
    return;
  }
  if (cmsDl) {
    cmsDl.save({ filename:'content.json', data:txt }).then(function () { cmsMsg('content.json saved.'); }, function (er) { var c = er && er.code; cmsMsg(c === 'declined' ? 'Save cancelled.' : c === 'rate_limited' ? 'A save is already waiting. Try again in a moment.' : 'Saving is not available here. Use Copy as text.', c !== 'declined'); });
    return;
  }
  try { var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([txt], { type:'application/json' })); a.download = 'content.json'; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500); cmsMsg('content.json is downloading.'); }
  catch (er) { cmsMsg('Download was blocked here. Use Copy as text.', true); }
}
/* the secret ways in */
window.addEventListener('keydown', function (e) {
  var eight = e.code === 'Digit8' || e.code === 'Numpad8' || e.key === '8';
  if (e.ctrlKey && !e.altKey && !e.metaKey && eight) { e.preventDefault(); if (cmsIsOpen()) cmsView(); else if (gate === 0 && !relocking) cmsOpen(); }
}, true);
/* ---------- 郭 check: compares finger strokes with the printed character on a small grid ---------- */
var KJ = { G:48, tol:1.6, target:'郭', decoys:['享', '部', '国', '田', '都', '字', '回', '郊'], tpl:null, font:'"Noto Sans SC","PingFang SC","Hiragino Sans","Noto Sans CJK SC","Microsoft YaHei",sans-serif' };
function kjGrid(draw){ /* draw(ctx, size) paints black ink on a size x size canvas; returns a G x G 0/1 grid, cropped to the ink and centred */
  var S = 200, cv = document.createElement('canvas'); cv.width = cv.height = S; var c = cv.getContext('2d');
  c.fillStyle = '#fff'; c.fillRect(0, 0, S, S); c.fillStyle = c.strokeStyle = '#000'; draw(c, S);
  var d = c.getImageData(0, 0, S, S).data, x0 = S, y0 = S, x1 = -1, y1 = -1;
  for (var y = 0; y < S; y++) for (var x = 0; x < S; x++) if (d[(y * S + x) * 4] < 128) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  var G = KJ.G, g = new Uint8Array(G * G); if (x1 < 0) return g;
  var pad = 3, w = x1 - x0 + 1, h = y1 - y0 + 1, sx = (G - pad * 2) / Math.max(w, h * 0.55), sy = (G - pad * 2) / Math.max(h, w * 0.55); /* stretch to the box, so a wide or tall 郭 still lines up (very thin shapes are not stretched) */
  var ox = pad + ((G - pad * 2) - w * sx) / 2, oy = pad + ((G - pad * 2) - h * sy) / 2;
  for (var yy = y0; yy <= y1; yy++) for (var xx = x0; xx <= x1; xx++) if (d[(yy * S + xx) * 4] < 128) { var gx = Math.floor(ox + (xx - x0) * sx), gy = Math.floor(oy + (yy - y0) * sy); if (gx >= 0 && gy >= 0 && gx < G && gy < G) g[gy * G + gx] = 1; }
  return g;
}
function kjDist(g){ /* distance (in cells) from every cell to the nearest ink cell, two-pass chamfer */
  var G = KJ.G, D = new Float32Array(G * G), INF = 1e4, i, x, y;
  for (i = 0; i < G * G; i++) D[i] = g[i] ? 0 : INF;
  for (y = 0; y < G; y++) for (x = 0; x < G; x++) { i = y * G + x; if (x > 0) D[i] = Math.min(D[i], D[i - 1] + 1); if (y > 0) D[i] = Math.min(D[i], D[i - G] + 1); if (x > 0 && y > 0) D[i] = Math.min(D[i], D[i - G - 1] + 1.414); if (x < G - 1 && y > 0) D[i] = Math.min(D[i], D[i - G + 1] + 1.414); }
  for (y = G - 1; y >= 0; y--) for (x = G - 1; x >= 0; x--) { i = y * G + x; if (x < G - 1) D[i] = Math.min(D[i], D[i + 1] + 1); if (y < G - 1) D[i] = Math.min(D[i], D[i + G] + 1); if (x < G - 1 && y < G - 1) D[i] = Math.min(D[i], D[i + G + 1] + 1.414); if (x > 0 && y < G - 1) D[i] = Math.min(D[i], D[i + G - 1] + 1.414); }
  return D;
}
function kjGlyph(ch){ return kjGrid(function (c, S) { c.font = '300 ' + Math.round(S * 0.86) + 'px ' + KJ.font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(ch, S / 2, S / 2); }); }
function kjPrep(){ if (KJ.tpl) return; KJ.tpl = [KJ.target].concat(KJ.decoys).map(function (ch) { var g = kjGlyph(ch); return { ch:ch, g:g, D:kjDist(g) }; }); }
function kjScore(a, Da, b, Db){ /* how well two ink grids overlap, allowing about 2 cells of wobble: 0 to 1 */
  var tol = KJ.tol, n1 = 0, h1 = 0, n2 = 0, h2 = 0;
  for (var i = 0; i < a.length; i++) { if (a[i]) { n1++; if (Db[i] <= tol) h1++; } if (b[i]) { n2++; if (Da[i] <= tol) h2++; } }
  if (!n1 || !n2) return 0; var p = h1 / n1, r = h2 / n2; return p + r ? 2 * p * r / (p + r) : 0;
}
function kjStrokesGrid(strokes){ /* strokes: [[x,y],...] in any units; drawn with a pen about as thick as the printed strokes */
  var xs = [], ys = []; strokes.forEach(function (s) { s.forEach(function (p) { xs.push(p[0]); ys.push(p[1]); }); });
  var x0 = Math.min.apply(0, xs), x1 = Math.max.apply(0, xs), y0 = Math.min.apply(0, ys), y1 = Math.max.apply(0, ys), side = Math.max(x1 - x0, y1 - y0) || 1;
  return kjGrid(function (c, S) {
    var k = (S * 0.84) / side, ox = (S - (x1 - x0) * k) / 2, oy = (S - (y1 - y0) * k) / 2;
    c.lineWidth = S * 0.04; c.lineCap = c.lineJoin = 'round';
    strokes.forEach(function (s) { c.beginPath(); s.forEach(function (p, j) { var X = ox + (p[0] - x0) * k, Y = oy + (p[1] - y0) * k; if (j) c.lineTo(X, Y); else c.moveTo(X, Y); }); if (s.length === 1) c.lineTo(ox + (s[0][0] - x0) * k + 0.1, oy + (s[0][1] - y0) * k); c.stroke(); });
  });
}
function kjCheck(strokes){ /* returns {ok, score, best} */
  kjPrep(); if (strokes.length < 5 || strokes.length > 22) return { ok:false, score:0, best:'' };
  var g = kjStrokesGrid(strokes), D = kjDist(g), ink = 0; for (var i = 0; i < g.length; i++) ink += g[i];
  if (ink > g.length * 0.55) return { ok:false, score:0, best:'' }; /* a filled-in blob is not writing */
  var sc = KJ.tpl.map(function (t) { return { ch:t.ch, s:kjScore(g, D, t.g, t.D) }; });
  var me = sc[0].s, other = Math.max.apply(0, sc.slice(1).map(function (o) { return o.s; })), best = sc.slice().sort(function (a, b) { return b.s - a.s; })[0].ch;
  return { ok: me >= 0.62 && me >= other + 0.02, score:me, other:other, best:best };
}
/* ---------- phone way in: a small hanging scroll; write 郭 on it to open the editor page ---------- */
(function kjScrollUI(){
  var ban = document.createElement('button'); ban.type = 'button'; ban.id = 'kjBanner'; ban.className = 'kj-ban'; ban.setAttribute('aria-label', 'Scroll');
  ban.innerHTML = '<i class="rod"></i><i class="paper"></i><i class="rod b"></i>';
  var ov = document.createElement('div'); ov.id = 'kjScroll'; ov.className = 'kj'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Scroll');
  ov.innerHTML = '<div class="kj-wrap"><div class="kj-rod"><i></i><i></i></div><div class="kj-paper" id="kjPaper"><div class="kj-grid" aria-hidden="true"></div><canvas id="kjCanvas"></canvas><div class="kj-seal" id="kjSeal" aria-hidden="true">郭</div></div><div class="kj-rod b"><i></i><i></i></div>' +
    '<div class="kj-btns"><button type="button" data-kj="clear">Clear</button><button type="button" data-kj="close">Close</button></div></div>';
  document.body.appendChild(ban); document.body.appendChild(ov);
  var cv = ov.querySelector('#kjCanvas'), paper = ov.querySelector('#kjPaper'), seal = ov.querySelector('#kjSeal'), c = null, strokes = [], cur = null, tCheck = 0, tFail = 0, busy = false, DPR = 1;
  function size(){ var r = paper.getBoundingClientRect(); DPR = Math.min(2, window.devicePixelRatio || 1); cv.width = Math.round(r.width * DPR); cv.height = Math.round(r.height * DPR); c = cv.getContext('2d'); c.setTransform(DPR, 0, 0, DPR, 0, 0); redraw(); }
  function redraw(){ if (!c) return; c.clearRect(0, 0, cv.width, cv.height); strokes.forEach(function (s) { ink(s, 0); }); }
  function ink(s, from){ /* brush: thicker when slow, thinner when fast */
    c.lineCap = c.lineJoin = 'round'; c.strokeStyle = 'rgba(28,26,30,.92)';
    for (var i = Math.max(1, from); i < s.length; i++) { var a = s[i - 1], b = s[i], v = Math.hypot(b[0] - a[0], b[1] - a[1]) / Math.max(8, b[2] - a[2]); c.lineWidth = Math.max(4, Math.min(11, 11 - v * 9)); c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke(); }
    if (s.length === 1) { c.fillStyle = 'rgba(28,26,30,.92)'; c.beginPath(); c.arc(s[0][0], s[0][1], 5, 0, 7); c.fill(); }
  }
  function pt(e){ var r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top, performance.now()]; }
  cv.addEventListener('pointerdown', function (e) { if (busy) return; e.preventDefault(); cv.setPointerCapture(e.pointerId); clearTimeout(tCheck); clearTimeout(tFail); cur = [pt(e)]; strokes.push(cur); ink(cur, 0); });
  cv.addEventListener('pointermove', function (e) { if (!cur) return; e.preventDefault(); var p = pt(e), q = cur[cur.length - 1]; if (Math.hypot(p[0] - q[0], p[1] - q[1]) < 1.5) return; cur.push(p); ink(cur, cur.length - 1); });
  function up(){ if (!cur) return; cur = null; clearTimeout(tCheck); tCheck = setTimeout(check, 650); }
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  function check(){
    var r = kjCheck(strokes.map(function (s) { return s.map(function (p) { return [p[0], p[1]]; }); }));
    if (r.ok) return success();
    if (strokes.length >= 8) { clearTimeout(tFail); tFail = setTimeout(fail, 1400); }
  }
  function fail(){ paper.classList.add('kj-no'); setTimeout(function () { strokes = []; redraw(); paper.classList.remove('kj-no'); }, 520); }
  function success(){
    busy = true; seal.classList.add('on'); if (navigator.vibrate) try { navigator.vibrate([18, 40, 18]); } catch (er) {}
    setTimeout(function () { ov.classList.remove('open'); }, 900);
    setTimeout(function () { close(true); cmsOpen(); }, 1700);
  }
  function open(){
    try { document.fonts.load('300 40px "Noto Sans SC"', '郭').then(function () { KJ.tpl = null; }, function () {}); } catch (er) {}
    strokes = []; busy = false; seal.classList.remove('on'); ov.hidden = false; document.documentElement.classList.add('kj-on');
    requestAnimationFrame(function () { requestAnimationFrame(function () { ov.classList.add('open'); setTimeout(function () { size(); if (!ov.hidden) { try { engine.stopRenderLoop(); } catch (er) {} } }, 950); }); }); /* the 3D scene rests while the scroll is open */
  }
  function close(now){ if (!now) { try { engine.runRenderLoop(function () { scene.render(); }); } catch (er) {} } ov.classList.remove('open'); document.documentElement.classList.remove('kj-on'); setTimeout(function () { ov.hidden = true; strokes = []; redraw(); }, now ? 0 : 700); }
  ban.addEventListener('click', function () { if (gate === 0 && !relocking) open(); });
  ov.addEventListener('click', function (e) { var b = e.target.closest('[data-kj]'); if (b) { if (b.getAttribute('data-kj') === 'clear') { strokes = []; redraw(); } else close(); return; } if (e.target === ov) close(); });
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !ov.hidden) close(); });
  window.addEventListener('resize', function () { if (!ov.hidden) size(); });
  window.__kj = { open:open, check:function () { return kjCheck(strokes.map(function (s) { return s.slice(); })); }, strokes:function () { return strokes; } };
})();
window.__nk = { tex:function (i) { return panelTex[i].getContext().canvas.toDataURL('image/png'); }, snap:function () { if (gate < 2) { gate = 2; drum.setEnabled(true); introT = 1; document.documentElement.classList.add('opened'); document.documentElement.style.overflow = ''; } readScroll(); sp = target; }, full:function () { twIdx = -1; for (var i = 1; i < N; i++) drawPanel(i); }, unlock:unlock, intro:function (u) { ASM = 1e9; gate = 1; drum.setEnabled(true); asmAt = performance.now() - u * 1e9; }, gate:function () { return gate; }, steps:N, dbg:function () { return { LY:LY, sp:sp, doors:doors.map(function (d) { return d.open; }) }; }, scene:scene };
})();
