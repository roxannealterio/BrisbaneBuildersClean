/* Brisbane Builders Cleans */
var BBC_CONFIG = {
  formspree: "https://formspree.io/f/xnjkvdoo",   // <-- your Formspree endpoint
  email: "info@brisbanebuildersclean.com.au"
};

/* mobile nav */
(function () {
  var t = document.getElementById('navToggle'), n = document.getElementById('nav');
  if (!t || !n) return;
  t.addEventListener('click', function () {
    var open = n.classList.toggle('open');
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

/* forms -> Formspree, with mailto fallback */
(function () {
  function wire(formId, errId) {
    var f = document.getElementById(formId);
    if (!f) return;
    var err = errId ? document.getElementById(errId) : null;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var req = f.querySelectorAll('[required]'), ok = true;
      for (var i = 0; i < req.length; i++) { if (!req[i].value.trim()) { ok = false; } }
      if (!ok) { if (err) err.style.display = 'block'; return; }
      if (err) err.style.display = 'none';

      var data = {}, fd = new FormData(f);
      fd.forEach(function (v, k) { data[k] = v; });
      var btn = f.querySelector('button[type=submit]');
      var label = btn ? btn.innerHTML : '';
      if (btn) { btn.disabled = true; btn.innerHTML = 'Sending...'; }

      fetch(BBC_CONFIG.formspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data)
      }).then(function (r) {
        if (!r.ok) throw new Error('bad response');
        f.innerHTML = '<div style="text-align:center;padding:40px 0;">' +
          '<h3 style="margin-bottom:10px;">Thanks, we\'ve got it.</h3>' +
          '<p>We\'ll be in touch within one business day. Need us sooner? Call <a href="tel:0419382733" style="color:#D89A1E;font-weight:600;">0419 382 733</a>.</p></div>';
      }).catch(function () {
        var lines = [];
        for (var k in data) { lines.push(k + ': ' + data[k]); }
        var body = 'Hi Brisbane Builders Cleans,\n\nI\'d like a quote:\n\n' + lines.join('\n') + '\n\nThanks!';
        window.location.href = 'mailto:' + BBC_CONFIG.email +
          '?subject=' + encodeURIComponent('Quote request') + '&body=' + encodeURIComponent(body);
        if (btn) { btn.disabled = false; btn.innerHTML = label; }
      });
    });
  }
  wire('contactForm', 'cErr');
  wire('quoteForm', 'qErr');
})();

/* swipeable reviews: arrows + click-drag (touch swipe is native) */
(function () {
  var track = document.getElementById('revTrack');
  if (!track) return;
  var prev = document.getElementById('revPrev');
  var next = document.getElementById('revNext');
  function step() {
    var card = track.querySelector('.rev-card');
    return card ? card.getBoundingClientRect().width + 20 : 340;
  }
  if (next) next.addEventListener('click', function () { track.scrollLeft += step(); });
  if (prev) prev.addEventListener('click', function () { track.scrollLeft -= step(); });

  /* click-and-drag on desktop */
  var down = false, startX = 0, startLeft = 0;
  track.addEventListener('mousedown', function (e) {
    down = true; startX = e.pageX; startLeft = track.scrollLeft;
    track.style.cursor = 'grabbing';
  });
  ['mouseup', 'mouseleave'].forEach(function (ev) {
    track.addEventListener(ev, function () { down = false; track.style.cursor = 'grab'; });
  });
  track.addEventListener('mousemove', function (e) {
    if (!down) return;
    e.preventDefault();
    track.scrollLeft = startLeft - (e.pageX - startX);
  });
  track.style.cursor = 'grab';
})();
