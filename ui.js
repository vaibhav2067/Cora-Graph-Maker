// ui.js — dashboard interactivity, data modeling, SVG renderers, export
const qs = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];

// Global state
const state = {
  style: null,           // 'bar' | 'pie' | 'line' | 'scatter' | 'histogram'
  data: null,            // shape depends on style
  colors: null,          // depends on style
  valid: { style: false, data: false, color: false },
};

// --- Navigation logic ---
qsa('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) return;
    qsa('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    qsa('.panel').forEach(p => p.classList.remove('visible'));
    qs('#' + target).classList.add('visible');
  });
});

function updateBadges() {
  qs('#badge-style').textContent = `Style ${state.valid.style ? '✅' : '❌'}`;
  qs('#badge-data').textContent = `Data ${state.valid.data ? '✅' : '❌'}`;
  qs('#badge-color').textContent = `Color ${state.valid.color ? '✅' : '❌'}`;
  const previewBtn = qsa('.nav-btn').find(b => b.dataset.target === 'panel-preview');
  const unlocked = state.valid.style && state.valid.data && state.valid.color;
  if (unlocked) {
    previewBtn.classList.remove('disabled');
    previewBtn.disabled = false;
  } else {
    previewBtn.classList.add('disabled');
    previewBtn.disabled = true;
  }
  // Guards
  qs('#data-guard').classList.toggle('hidden', state.valid.style);
  qs('#data-content').classList.toggle('hidden', !state.valid.style);
  qs('#color-guard').classList.toggle('hidden', state.valid.style && state.valid.data);
  qs('#color-content').classList.toggle('hidden', !(state.valid.style && state.valid.data));
  qs('#preview-guard').classList.toggle('hidden', unlocked);
  qs('#preview-content').classList.toggle('hidden', !unlocked);
}
updateBadges();

// --- Style selection ---
qsa('.style-card').forEach(card => {
  card.addEventListener('click', () => {
    qsa('.style-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    state.style = card.dataset.style;
    state.valid.style = true;
    state.data = null;
    state.colors = null;
    state.valid.data = false;
    state.valid.color = false;
    buildCustomForm();
    renderColorForm();
    qs('#data-preview').value = '';
    updateBadges();
  });
});

// --- Data handling ---
const btnGenerate = qs('#btn-generate');
const btnApplyCustom = qs('#btn-apply-custom');
const customInputs = qs('#custom-inputs');
const customForm = qs('#custom-form');
const dataPreview = qs('#data-preview');

qsa('input[name="data-mode"]').forEach(r => {
  r.addEventListener('change', () => {
    const mode = getDataMode();
    customInputs.classList.toggle('hidden', mode !== 'custom');
  });
});

btnGenerate.addEventListener('click', () => {
  if (!state.style) { alert('Select a style first'); return; }
  const mode = getDataMode();
  if (mode === 'random') {
    state.data = randomData(state.style);
    state.valid.data = true;
    dataPreview.value = JSON.stringify(state.data, null, 2);
    renderColorForm();
    updateBadges();
  } else {
    // Custom: just reflect current fields; user must click Apply
    alert('Fill the custom fields below, then click Apply.');
  }
});

btnApplyCustom.addEventListener('click', () => {
  if (!state.style) return;
  try {
    const parsed = readCustomForm();
    state.data = parsed;
    state.valid.data = true;
    dataPreview.value = JSON.stringify(state.data, null, 2);
    renderColorForm();
    updateBadges();
  } catch (e) {
    alert('Please complete all required fields with valid values.\n\n' + e.message);
  }
});

function getDataMode() {
  return qs('input[name="data-mode"]:checked').value;
}

// Build custom input form according to style
function buildCustomForm() {
  customForm.innerHTML = '';
  customInputs.classList.add('hidden'); // start hidden until mode=custom
  qsa('input[name="data-mode"]').forEach(r => r.checked = r.value === 'random');

  if (!state.style) return;

  switch (state.style) {
    case 'pie': {
      customForm.appendChild(makeHelp('Enter labels and values for each slice.'));
      customForm.appendChild(makeKVList('Slices', 'Label', 'Value', 4));
      break;
    }
    case 'line': {
      customForm.appendChild(makeHelp('Enter X axis (categories/time), Y values, optional series labels.'));
      customForm.appendChild(makeText('X (comma-separated)', 'xcsv', 'Jan,Feb,Mar,Apr'));
      customForm.appendChild(makeText('Y (comma-separated)', 'ycsv', '10,20,15,30'));
      customForm.appendChild(makeText('Series label (optional)', 'series', 'Sales'));
      break;
    }
    case 'bar': {
      customForm.appendChild(makeHelp('Enter categories for X axis and values (single series or multiple series using semicolons).'));
      customForm.appendChild(makeText('Categories (comma-separated)', 'cats', 'A,B,C,D'));
      customForm.appendChild(makeText('Values (comma-separated or matrix rows with ";")', 'vals', '10,20,15,8'));
      customForm.appendChild(makeText('Series labels (comma-separated, optional if multi-series)', 'labels', 'Series 1'));
      break;
    }
    case 'scatter': {
      customForm.appendChild(makeHelp('Enter X and Y values. Optionally sizes (for bubbles).'));
      customForm.appendChild(makeText('X (comma-separated)', 'x', '5,8,10,12,14'));
      customForm.appendChild(makeText('Y (comma-separated)', 'y', '10,3,6,9,11'));
      customForm.appendChild(makeText('Sizes (optional, comma-separated)', 's', ''));
      break;
    }
    case 'histogram': {
      customForm.appendChild(makeHelp('Enter raw numeric values; optional number of bins and range.'));
      customForm.appendChild(makeText('Values (comma-separated)', 'vals', '3,4,6,8,8,10,12,13,15,17,20,23'));
      customForm.appendChild(makeNumber('Bins (optional)', 'bins', ''));
      customForm.appendChild(makeText('Range (min,max optional)', 'range', ''));
      break;
    }
  }
}

function readCustomForm() {
  switch (state.style) {
    case 'pie': {
      const rows = readKVList();
      const labels = rows.map(r => r.k);
      const values = rows.map(r => +r.v);
      if (labels.length === 0 || values.some(isNaN)) throw new Error('Invalid pie values.');
      return { labels, values };
    }
    case 'line': {
      const x = csv(qs('[name="xcsv"]').value);
      const y = csv(qs('[name="ycsv"]').value).map(Number);
      const label = qs('[name="series"]').value || 'Series';
      if (x.length !== y.length || y.some(isNaN)) throw new Error('X and Y length mismatch or invalid.');
      return { x, series: [{ label, y }] };
    }
    case 'bar': {
      const cats = csv(qs('[name="cats"]').value);
      const valsRaw = qs('[name="vals"]').value;
      let matrix = [];
      if (valsRaw.includes(';')) {
        matrix = valsRaw.split(';').map(row => csv(row).map(Number));
      } else {
        matrix = [csv(valsRaw).map(Number)];
      }
      const labels = (qs('[name="labels"]').value || '').split(',').map(s => s.trim()).filter(Boolean);
      matrix.forEach(row => {
        if (row.length !== cats.length || row.some(isNaN)) throw new Error('Each value row must match number of categories.');
      });
      const series = matrix.map((row, i) => ({ label: labels[i] || `Series ${i+1}`, y: row }));
      return { categories: cats, series };
    }
    case 'scatter': {
      const x = csv(qs('[name="x"]').value).map(Number);
      const y = csv(qs('[name="y"]').value).map(Number);
      if (x.length !== y.length || x.some(isNaN) || y.some(isNaN)) throw new Error('X and Y invalid or length mismatch.');
      let sizes = [];
      const s = qs('[name="s"]').value.trim();
      if (s) {
        sizes = csv(s).map(Number);
        if (sizes.length !== x.length || sizes.some(isNaN)) throw new Error('Sizes length mismatch.');
      } else {
        sizes = new Array(x.length).fill(6);
      }
      return { points: x.map((vx, i) => ({ x: vx, y: y[i], r: sizes[i] })) };
    }
    case 'histogram': {
      const vals = csv(qs('[name="vals"]').value).map(Number);
      if (vals.length === 0 || vals.some(isNaN)) throw new Error('Invalid values.');
      const bins = +qs('[name="bins"]').value || undefined;
      const rangeText = qs('[name="range"]').value.trim();
      let range;
      if (rangeText) {
        const [min, max] = rangeText.split(',').map(Number);
        if ([min, max].some(isNaN) || min >= max) throw new Error('Invalid range.');
        range = [min, max];
      }
      return { values: vals, bins, range };
    }
  }
}

// --- Color handling ---
function renderColorForm() {
  const wrap = qs('#color-form');
  wrap.innerHTML = '';
  state.colors = null;
  state.valid.color = false;

  if (!state.style || !state.data) { updateBadges(); return; }

  const picker = (label, name, value='#111111') => {
    const row = el('div', { class: 'color-row' });
    row.append(
      el('div', {}, label),
      (() => {
        const pair = el('div', { class: 'color-pair' });
        const input = el('input', { type: 'color', name, value });
        const hex = el('input', { type: 'text', value, 'data-hex-for': name, spellcheck: 'false' });
        input.addEventListener('input', () => { hex.value = input.value; });
        hex.addEventListener('input', () => { if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(hex.value)) input.value = hex.value; });
        pair.append(input, hex);
        return pair;
      })()
    );
    return row;
  };

  if (state.style === 'pie') {
    const n = state.data.labels.length;
    wrap.appendChild(makeHelp(`Pick ${n} slice color${n>1?'s':''}.`));
    for (let i=0;i<n;i++) wrap.appendChild(picker(`Slice ${i+1} — ${state.data.labels[i]}`, `c${i}`, defaultColor(i)));
  }
  if (state.style === 'bar') {
    const sCount = state.data.series.length;
    const catCount = state.data.categories.length;
    if (sCount > 1) {
      wrap.appendChild(makeHelp(`Multi-series bars: one color per series (${sCount}).`));
      for (let i=0;i<sCount;i++) wrap.appendChild(picker(`Series ${i+1} — ${state.data.series[i].label}`, `s${i}`, defaultColor(i)));
    } else {
      wrap.appendChild(makeHelp(`Single-series bars: one color per bar (${catCount}).`));
      for (let i=0;i<catCount;i++) wrap.appendChild(picker(`Bar ${i+1} — ${state.data.categories[i]}`, `b${i}`, defaultColor(i)));
    }
  }
  if (state.style === 'line') {
    wrap.appendChild(makeHelp('Line color.'));
    wrap.appendChild(picker('Line', 'line', '#111111'));
  }
  if (state.style === 'scatter') {
    wrap.appendChild(makeHelp('Point color.'));
    wrap.appendChild(picker('Points', 'points', '#111111'));
  }
  if (state.style === 'histogram') {
    wrap.appendChild(makeHelp('Bar color.'));
    wrap.appendChild(picker('Bars', 'bars', '#111111'));
  }

  // Save colors on-the-fly
  wrap.addEventListener('input', () => {
    state.colors = readColors();
    state.valid.color = !!state.colors;
    updateBadges();
  });
  // Initialize once
  state.colors = readColors();
  state.valid.color = !!state.colors;
  updateBadges();
}

function readColors() {
  if (!state.style) return null;
  const get = (name) => qs(`[name="${name}"]`)?.value || '#111111';
  switch (state.style) {
    case 'pie': {
      const n = state.data.labels.length;
      return { slices: Array.from({length:n}, (_,i)=> get(`c${i}`)) };
    }
    case 'bar': {
      const sCount = state.data.series.length;
      if (sCount > 1) return { series: Array.from({length:sCount}, (_,i)=> get(`s${i}`)) };
      return { bars: Array.from({length: state.data.categories.length}, (_,i)=> get(`b${i}`)) };
    }
    case 'line': return { line: get('line') };
    case 'scatter': return { points: get('points') };
    case 'histogram': return { bars: get('bars') };
  }
}

// --- Preview + Export ---
const svgHost = qs('#svg-host');
const btnExport = qs('#btn-export');
const btnClose = qs('#btn-close');

function renderPreview() {
  if (!(state.valid.style && state.valid.data && state.valid.color)) return;
  const w = 720, h = 420, pad = 48;

  let svg = '';

  if (state.style === 'pie') {
    svg = renderPie(state.data, state.colors, w, h);
  }
  if (state.style === 'bar') {
    svg = renderBar(state.data, state.colors, w, h, pad);
  }
  if (state.style === 'line') {
    svg = renderLine(state.data, state.colors, w, h, pad);
  }
  if (state.style === 'scatter') {
    svg = renderScatter(state.data, state.colors, w, h, pad);
  }
  if (state.style === 'histogram') {
    svg = renderHistogram(state.data, state.colors, w, h, pad);
  }

  svgHost.innerHTML = svg;
}

btnExport.addEventListener('click', () => {
  if (!(state.valid.style && state.valid.data && state.valid.color)) return;
  const svg = svgHost.innerHTML.trim();
  parent.postMessage({ pluginMessage: { type: 'EXPORT_SVG', svg } }, '*');
});

btnClose.addEventListener('click', () => {
  parent.postMessage({ pluginMessage: { type: 'CLOSE' } }, '*');
});

// Re-render preview whenever entering preview tab or inputs change
const previewBtn = qsa('.nav-btn').find(b => b.dataset.target === 'panel-preview');
previewBtn.addEventListener('click', renderPreview);
document.addEventListener('input', (e) => {
  if (qs('#panel-preview').classList.contains('visible')) renderPreview();
});

// --- SVG renderers ---
// Helpers
function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }
function max(arr){ return arr.reduce((m,v)=> v>m?v:m, -Infinity); }
function min(arr){ return arr.reduce((m,v)=> v<m?v:m, Infinity); }
function sum(arr){ return arr.reduce((s,v)=> s+v, 0); }
function csv(s){ return s.split(',').map(t => t.trim()).filter(Boolean); }
function defaultColor(i){ // pleasant grayscale steps to stay in B/W vibe but allow variation
  const g = 20 + ((i*40) % 180);
  const hex = (x)=> x.toString(16).padStart(2,'0');
  return `#${hex(g)}${hex(g)}${hex(g)}`;
}
function el(tag, attrs={}, text){
  const n = document.createElement(tag);
  Object.entries(attrs).forEach(([k,v])=> n.setAttribute(k, v));
  if (text) n.textContent = text;
  return n;
}
function makeText(label, name, placeholder=''){
  const wrap = el('div', { class: 'seg' });
  wrap.append(el('label', { class:'seg-label' }, label));
  const input = el('input', { type:'text', name, placeholder });
  wrap.append(input);
  return wrap;
}
function makeNumber(label, name, placeholder=''){
  const wrap = el('div', { class: 'seg' });
  wrap.append(el('label', { class:'seg-label' }, label));
  const input = el('input', { type:'number', name, placeholder, step:'any' });
  wrap.append(input);
  return wrap;
}
function makeHelp(text){ return el('div', { class:'seg-label', style:'color:#555' }, text); }

function makeKVList(title, kLabel, vLabel, initialRows=3){
  const wrap = el('div', { class:'seg' });
  wrap.append(el('label', { class:'seg-label' }, title));

  const list = el('div', { class:'seg', id:'kv-list' });
  const addRow = (k='', v='') => {
    const row = el('div', { class:'seg-row' });
    const ki = el('input', { type:'text', placeholder:kLabel, 'data-role':'k', value:k });
    const vi = el('input', { type:'number', placeholder:vLabel, 'data-role':'v', step:'any', value:v });
    const rm = el('button', { class:'btn' }, 'Remove');
    rm.addEventListener('click', () => row.remove());
    row.append(ki, vi, rm);
    list.append(row);
  };
  for (let i=0;i<initialRows;i++) addRow();
  const add = el('button', { class:'btn' }, 'Add Slice');
  add.addEventListener('click', () => addRow());
  wrap.append(list, add);
  return wrap;
}
function readKVList(){
  const list = qsa('#kv-list .seg-row').map(r => ({
    k: qs('[data-role="k"]', r).value.trim(),
    v: qs('[data-role="v"]', r).value.trim()
  })).filter(r => r.k && r.v !== '');
  return list.map(r => ({ k:r.k, v:+r.v })).filter(r => !isNaN(r.v));
}

// Pie
function renderPie(data, colors, W, H){
  const cx = W/2, cy = H/2, r = Math.min(W,H)*0.35;
  const total = sum(data.values);
  let angle = -Math.PI/2; // start at top
  const slices = data.values.map((v,i) => {
    const a2 = angle + (v/total) * Math.PI*2;
    const x1 = cx + r*Math.cos(angle), y1 = cy + r*Math.sin(angle);
    const x2 = cx + r*Math.cos(a2),    y2 = cy + r*Math.sin(a2);
    const large = (a2 - angle) > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
    angle = a2;
    return `<path d="${d}" fill="${colors.slices[i] || defaultColor(i)}" />`;
  }).join('');
  const labels = data.labels.map((lbl,i)=> `<text x="${W-12}" y="${20+i*16}" text-anchor="end" font-size="11">${lbl}</text>`).join('');
  const swatches = data.labels.map((_,i)=> `<rect x="${W-10}" y="${10+i*16-8}" width="8" height="8" fill="${colors.slices[i] || defaultColor(i)}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="#fff"/>
    ${slices}
    ${labels}
    ${swatches}
  </svg>`;
}

// Axes
function axes(W,H,pad){
  const x1 = pad, y1 = H - pad, x2 = W - pad, y2 = pad;
  return `
    <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y1}" stroke="#222"/>
    <line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y2}" stroke="#222"/>
  `;
}
function scaleLinear(domain, range){
  const [d0,d1] = domain, [r0,r1]=range;
  const m = (r1-r0)/(d1-d0);
  return v => r0 + (v-d0)*m;
}

// Bar
function renderBar(data, colors, W,H,pad){
  const cats = data.categories;
  const multi = data.series.length > 1;
  const maxY = max(data.series.flatMap(s => s.y));
  const x0 = pad, x1 = W - pad, y0 = H - pad, y1 = pad;
  const toY = scaleLinear([0, maxY], [y0, y1]);

  const band = (x1-x0)/cats.length;
  const barGap = 6;
  const barW = multi ? (band - 10)/data.series.length : band - 10;

  let bars = '';
  cats.forEach((c, ci) => {
    if (multi) {
      data.series.forEach((s, si) => {
        const v = s.y[ci];
        const x = x0 + ci*band + 5 + si*barW;
        const y = toY(v);
        const h = y0 - y;
        bars += `<rect x="${x}" y="${y}" width="${barW - barGap}" height="${Math.max(0,h)}" fill="${colors.series?.[si] || defaultColor(si)}"/>`;
      });
    } else {
      const v = data.series[0].y[ci];
      const x = x0 + ci*band + 5;
      const y = toY(v);
      const h = y0 - y;
      const fill = colors.bars?.[ci] || defaultColor(ci);
      bars += `<rect x="${x}" y="${y}" width="${barW - barGap}" height="${Math.max(0,h)}" fill="${fill}"/>`;
    }
  });

  const ticks = 4;
  const tickEls = [];
  for (let i=0;i<=ticks;i++){
    const t = i/ticks;
    const y = y0 - t*(y0-y1);
    const val = Math.round(t*maxY);
    tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#eee"/>`);
    tickEls.push(`<text x="${x0-6}" y="${y+4}" text-anchor="end" font-size="10" fill="#333">${val}</text>`);
  }
  const catLabels = cats.map((c,ci)=>{
    const x = x0 + ci*band + band/2;
    return `<text x="${x}" y="${y0+16}" text-anchor="middle" font-size="10">${c}</text>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="#fff"/>
    ${axes(W,H,pad)}
    ${tickEls.join('')}
    ${bars}
    ${catLabels}
  </svg>`;
}

// Line
function renderLine(data, colors, W,H,pad){
  const X = data.x.map((_,i)=>i);
  const Y = data.series[0].y;
  const maxY = max(Y), minY = Math.min(0, min(Y));
  const x0 = pad, x1 = W - pad, y0 = H - pad, y1 = pad;
  const toX = scaleLinear([0, X.length-1], [x0, x1]);
  const toY = scaleLinear([minY, maxY], [y0, y1]);

  const pts = X.map((i)=> `${toX(i)},${toY(Y[i])}`).join(' ');
  const dots = X.map((i)=> `<circle cx="${toX(i)}" cy="${toY(Y[i])}" r="3" fill="${colors.line}"/>`).join('');
  const xlabels = data.x.map((lbl,i)=> `<text x="${toX(i)}" y="${y0+16}" text-anchor="middle" font-size="10">${lbl}</text>`).join('');

  const ticks = 4;
  const tickEls = [];
  for (let i=0;i<=ticks;i++){
    const t = i/ticks;
    const y = y0 - t*(y0-y1);
    const val = (minY + t*(maxY-minY)).toFixed(0);
    tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#eee"/>`);
    tickEls.push(`<text x="${x0-6}" y="${y+4}" text-anchor="end" font-size="10" fill="#333">${val}</text>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="#fff"/>
    ${axes(W,H,pad)}
    ${tickEls.join('')}
    <polyline fill="none" stroke="${colors.line}" stroke-width="2" points="${pts}"/>
    ${dots}
    ${xlabels}
  </svg>`;
}

// Scatter
function renderScatter(data, colors, W,H,pad){
  const xs = data.points.map(p=>p.x);
  const ys = data.points.map(p=>p.y);
  const xmin = min(xs), xmax = max(xs);
  const ymin = min(ys), ymax = max(ys);
  const x0 = pad, x1 = W - pad, y0 = H - pad, y1 = pad;
  const toX = scaleLinear([xmin, xmax], [x0, x1]);
  const toY = scaleLinear([ymin, ymax], [y0, y1]);

  const dots = data.points.map(p=> `<circle cx="${toX(p.x)}" cy="${toY(p.y)}" r="${p.r||6}" fill="${colors.points}" opacity="0.9"/>`).join('');

  const ticks = 4;
  const tickEls = [];
  for (let i=0;i<=ticks;i++){
    const tx = xmin + i*(xmax-xmin)/ticks;
    const x = toX(tx);
    tickEls.push(`<line x1="${x}" y1="${y0}" x2="${x}" y2="${y1}" stroke="#f1f1f1"/>`);
    tickEls.push(`<text x="${x}" y="${y0+16}" text-anchor="middle" font-size="10">${tx.toFixed(0)}</text>`);
  }
  for (let i=0;i<=ticks;i++){
    const ty = ymin + i*(ymax-ymin)/ticks;
    const y = toY(ty);
    tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#f1f1f1"/>`);
    tickEls.push(`<text x="${x0-6}" y="${y+4}" text-anchor="end" font-size="10">${ty.toFixed(0)}</text>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="#fff"/>
    ${axes(W,H,pad)}
    ${tickEls.join('')}
    ${dots}
  </svg>`;
}

// Histogram
function renderHistogram(data, colors, W,H,pad){
  const vals = data.values.slice().sort((a,b)=>a-b);
  const minv = data.range?.[0] ?? vals[0];
  const maxv = data.range?.[1] ?? vals[vals.length-1];
  const bins = data.bins || Math.ceil(Math.sqrt(vals.length)); // Rice rule-ish
  const step = (maxv - minv) / bins;
  const edges = Array.from({length: bins+1}, (_,i)=> minv + i*step);
  const counts = new Array(bins).fill(0);
  vals.forEach(v => {
    if (v < minv || v > maxv) return;
    let b = Math.min(bins-1, Math.floor((v - minv)/step));
    counts[b]++;
  });

  const x0 = pad, x1 = W - pad, y0 = H - pad, y1 = pad;
  const band = (x1-x0)/bins;
  const maxC = max(counts);
  const toY = scaleLinear([0,maxC],[y0,y1]);

  const bars = counts.map((c,i) => {
    const x = x0 + i*band + 2;
    const y = toY(c);
    const h = y0 - y;
    return `<rect x="${x}" y="${y}" width="${band-4}" height="${Math.max(0,h)}" fill="${colors.bars}"/>`;
  }).join('');

  const xlabels = counts.map((_,i)=>{
    const x = x0 + i*band + band/2;
    const lbl = `${edges[i].toFixed(0)}–${edges[i+1].toFixed(0)}`;
    return `<text x="${x}" y="${y0+16}" text-anchor="middle" font-size="10">${lbl}</text>`;
  }).join('');

  const ticks = 4;
  const tickEls = [];
  for (let i=0;i<=ticks;i++){
    const t = i/ticks;
    const y = y0 - t*(y0-y1);
    const val = Math.round(t*maxC);
    tickEls.push(`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="#eee"/>`);
    tickEls.push(`<text x="${x0-6}" y="${y+4}" text-anchor="end" font-size="10" fill="#333">${val}</text>`);
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="100%" height="100%" fill="#fff"/>
    ${axes(W,H,pad)}
    ${tickEls.join('')}
    ${bars}
    ${xlabels}
  </svg>`;
}

// --- Random data generators ---
function randomInt(a,b){ return Math.floor(a + Math.random()*(b-a+1)); }
function randomData(style){
  if (style === 'pie') {
    const n = randomInt(3,6);
    const labels = Array.from({length:n},(_,i)=>`Slice ${i+1}`);
    const values = Array.from({length:n},()=> randomInt(5,25));
    return { labels, values };
  }
  if (style === 'line') {
    const n = randomInt(4,8);
    const x = Array.from({length:n},(_,i)=>`T${i+1}`);
    const y = Array.from({length:n},()=> randomInt(5,30));
    return { x, series: [{ label:'Series', y }] };
  }
  if (style === 'bar') {
    const n = randomInt(4,7);
    const cats = Array.from({length:n},(_,i)=>`C${i+1}`);
    const multi = Math.random() < 0.5;
    if (multi) {
      const s = randomInt(2,3);
      const series = Array.from({length:s}, (_,si)=> ({
        label: `S${si+1}`,
        y: Array.from({length:n}, ()=> randomInt(5,30))
      }));
      return { categories: cats, series };
    }
    return { categories: cats, series: [{ label:'Series 1', y: Array.from({length:n}, ()=> randomInt(5,30)) }] };
  }
  if (style === 'scatter') {
    const n = randomInt(12,24);
    const points = Array.from({length:n},()=> ({ x: randomInt(0,100), y: randomInt(0,100), r: randomInt(4,8) }));
    return { points };
  }
  if (style === 'histogram') {
    const n = randomInt(30,80);
    const values = Array.from({length:n},()=> Math.round(Math.max(0, Math.min(100, (Math.random()**0.7)*100 ))));
    return { values };
  }
}

// Auto-render preview when all ready
['input','change','click'].forEach(evt => document.addEventListener(evt, () => {
  if (state.valid.style && state.valid.data && state.valid.color) renderPreview();
}));
