(function () {
  var nav = document.querySelector('.topnav');
  if (!nav) return;

  var inner = nav.querySelector('.topnav-inner');
  if (!inner) return;

  // Inject scoped hamburger styles (works alongside per-page CSS).
  var css = '' +
    '.topnav.js-nav{display:flex!important;justify-content:flex-start!important;align-items:center!important;min-height:52px}' +
    '.topnav-toggle{background:transparent;border:1px solid rgba(255,255,255,0.12);border-radius:10px;width:42px;height:42px;padding:0;cursor:pointer;display:inline-flex;flex-direction:column;justify-content:center;align-items:center;gap:5px;color:#fff;transition:background .15s ease,border-color .15s ease}' +
    '.topnav-toggle:hover{background:rgba(123,44,191,0.10);border-color:rgba(157,78,221,0.45)}' +
    '.topnav-toggle span{display:block;width:18px;height:2px;background:currentColor;border-radius:2px;transition:transform .2s ease,opacity .15s ease}' +
    '.topnav.js-nav.is-open .topnav-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}' +
    '.topnav.js-nav.is-open .topnav-toggle span:nth-child(2){opacity:0}' +
    '.topnav.js-nav.is-open .topnav-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}' +
    '.topnav.js-nav .topnav-inner{position:fixed!important;top:62px;left:12px;right:auto!important;max-width:none!important;min-width:220px;margin:0!important;padding:10px!important;background:rgba(24,24,24,0.98)!important;border:1px solid rgba(255,255,255,0.12)!important;border-radius:14px!important;box-shadow:0 20px 50px rgba(0,0,0,0.55)!important;display:flex!important;flex-direction:column!important;flex-wrap:nowrap!important;gap:2px!important;font-size:14px!important;opacity:0;transform:translateY(-8px);pointer-events:none;transition:opacity .16s ease,transform .16s ease;z-index:60;overflow:visible!important}' +
    '.topnav.js-nav.is-open .topnav-inner{opacity:1;transform:translateY(0);pointer-events:auto}' +
    '.topnav.js-nav .topnav-link{padding:10px 14px!important;border-radius:10px!important;font-size:14px!important;white-space:nowrap!important;text-align:left!important}' +
    '@media(max-width:520px){.topnav.js-nav .topnav-inner{left:10px;top:58px;min-width:200px}}';
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  nav.classList.add('js-nav');

  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'topnav-toggle';
  btn.setAttribute('aria-label', 'Open menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';

  nav.insertBefore(btn, inner);

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!nav.classList.contains('is-open'));
  });

  inner.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && nav.classList.contains('is-open')) setOpen(false);
  });
})();
