// LizoCalc intro page — small live demo + footer utilities

document.addEventListener('DOMContentLoaded', function () {

  // ---- Live percentage calculator (hero signature element) ----
  var pctInput   = document.getElementById('pctInput');
  var baseInput  = document.getElementById('baseInput');
  var pctLabel   = document.getElementById('pctLabel');
  var baseLabel  = document.getElementById('baseLabel');
  var result     = document.getElementById('screenResult');

  function formatNumber(n) {
    if (!isFinite(n)) return '0';
    // trim to at most 2 decimal places, drop trailing zeros
    return parseFloat(n.toFixed(2)).toString();
  }

  function recalc() {
    var pct  = parseFloat(pctInput.value);
    var base = parseFloat(baseInput.value);

    if (isNaN(pct))  pct  = 0;
    if (isNaN(base)) base = 0;

    var answer = (pct / 100) * base;

    pctLabel.textContent  = formatNumber(pct);
    baseLabel.textContent = formatNumber(base);
    result.textContent    = formatNumber(answer);
  }

  if (pctInput && baseInput) {
    pctInput.addEventListener('input', recalc);
    baseInput.addEventListener('input', recalc);
    recalc();
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});