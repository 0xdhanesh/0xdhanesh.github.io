// Responsive nav + footer — injected at runtime to keep pages small and consistent.
(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const NAV = [
    ['index.html', 'index'],
    ['about.html', 'about'],
    ['work.html', 'work'],
    ['research.html', 'research'],
  ];

  const isActive = (href) => href === path || (path === '' && href === 'index.html');

  const desktopLinks = NAV.map(([href, label]) => {
    const active = isActive(href) ? ' class="active"' : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join('');

  const drawerLinks = NAV.map(([href, label]) => {
    const active = isActive(href) ? ' class="active"' : '';
    return `<a href="${href}"${active}>${label}</a>`;
  }).join('');

  const navHTML = `
    <header class="nav">
      <div class="container nav-inner">
        <a href="index.html" class="brand" aria-label="Dhanesh Sivasamy — home">
          <span class="sigil" aria-hidden="true">D</span>
          <span>dhanesh<span class="muted">.sivasamy</span></span>
          <span class="dot" title="available" aria-hidden="true"></span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          ${desktopLinks}
          <a href="https://0xdhanesh.gitbook.io/" target="_blank" rel="noopener">blog&nbsp;↗</a>
        </nav>
        <a href="mailto:dhanesh.professional@gmail.com" class="nav-cta">contact</a>
        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">☰</button>
      </div>
    </header>
    <div id="mobile-drawer" class="mobile-drawer" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Site menu">
      <button class="close" aria-label="Close menu">✕</button>
      ${drawerLinks}
      <a href="https://0xdhanesh.gitbook.io/" target="_blank" rel="noopener">blog&nbsp;↗</a>
      <a href="mailto:dhanesh.professional@gmail.com" style="color: var(--amber);">contact&nbsp;→</a>
    </div>`;

  const footerHTML = `
    <footer class="footer">
      <div class="page wide">
        <div class="footer-bottom">
          <span>© 2026 &nbsp; Dhanesh Sivasamy &nbsp;·&nbsp; Bengaluru, IN</span>
          <span>
            <a href="mailto:dhanesh.professional@gmail.com">email</a> &nbsp;·&nbsp;
            <a href="https://github.com/0xdhanesh" target="_blank" rel="noopener">github</a> &nbsp;·&nbsp;
            <a href="https://0xdhanesh.gitbook.io/" target="_blank" rel="noopener">blog</a>
          </span>
        </div>
      </div>
    </footer>`;

  const wireDrawer = () => {
    const toggle = document.querySelector('.nav-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const close = drawer && drawer.querySelector('.close');
    if (!toggle || !drawer) return;

    const open = () => {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
    };
    const shut = () => {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
    };

    toggle.addEventListener('click', open);
    close && close.addEventListener('click', shut);
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', shut));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') shut(); });
  };

  const mount = () => {
    const navMount = document.getElementById('nav');
    const footMount = document.getElementById('footer');
    if (navMount) navMount.outerHTML = navHTML;
    if (footMount) footMount.outerHTML = footerHTML;
    wireDrawer();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
