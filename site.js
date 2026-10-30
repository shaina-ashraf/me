(() => {
  const panels = [...document.querySelectorAll('[data-panel]')];
  const navigation = [...document.querySelectorAll('[data-nav]')];
  const titles = {
    about: 'Shaina Ashraf · AI & NLP Researcher',
    experience: 'Experience · Shaina Ashraf',
    research: 'Research & Projects · Shaina Ashraf',
    teaching: 'Teaching · Shaina Ashraf',
    contact: 'Contact · Shaina Ashraf'
  };
  function showRoute(focus = false) {
    const fragment = window.location.hash.slice(1);
    const destination = fragment === 'main'
      ? panels.find(panel => !panel.hidden) || document.getElementById('about')
      : document.getElementById(fragment || 'about');
    const selected = destination?.closest('[data-panel]') || document.getElementById('about');
    panels.forEach(panel => { panel.hidden = panel !== selected; });
    navigation.forEach(link => {
      if (link.dataset.nav === selected.id) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    document.title = titles[selected.id];
    const isInnerSection = destination && destination !== selected;
    if (isInnerSection) destination.scrollIntoView({ behavior: 'instant', block: 'start' });
    else {
      const mobile = window.matchMedia('(max-width: 900px)').matches;
      const top = mobile && (fragment || focus) ? document.querySelector('.content-card').offsetTop - 12 : 0;
      window.scrollTo({ top, behavior: 'instant' });
    }
    if (focus) {
      const heading = isInnerSection ? destination.querySelector('h2') : selected.querySelector('[data-panel-title]');
      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus({ preventScroll: true });
      }
    }
  }
  window.addEventListener('hashchange', () => showRoute(true));
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      if (link.hash === window.location.hash) {
        event.preventDefault();
        showRoute(true);
      }
    });
  });
  showRoute();
})();
