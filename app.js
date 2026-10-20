(() => {
  'use strict';
  const content = window.SITE_CONTENT;
  // New preference key resets the earlier Chinese default for existing previews.
  const preferenceKey = 'yh-language-v2';
  let language = 'en';
  try {
    const saved = localStorage.getItem(preferenceKey);
    if (saved === 'zh' || saved === 'en') language = saved;
  } catch { /* Storage may be disabled. */ }
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  function render() {
    const { strings, skills, learning } = content[language];
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.documentElement.dataset.language = language;
    document.title = strings.title;
    document.querySelector('meta[name="description"]').content = strings.description;
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = strings[node.dataset.i18n]; });
    document.querySelectorAll('[data-label]').forEach(node => { node.setAttribute('aria-label', strings[node.dataset.label]); });
    document.querySelectorAll('[data-alt]').forEach(node => { node.alt = strings[node.dataset.alt]; });
    document.querySelectorAll('[data-profile]').forEach(node => { node.href = content.profile.github; });
    document.querySelectorAll('[data-email]').forEach(node => { node.href = `mailto:${content.profile.email}`; node.textContent = content.profile.email; });
    document.querySelector('meta[name="robots"]').content = content.profile.contentApproved ? 'index,follow' : 'noindex,nofollow';
    document.querySelector('#language-label').textContent = language === 'zh' ? 'EN' : '中文';
    document.querySelector('#language-toggle').setAttribute('aria-label', language === 'zh' ? 'Switch to English' : '切换到中文');
    const grid = document.querySelector('#skill-grid');
    grid.replaceChildren(...skills.map(skill => {
      const card = el('article', 'skill-card');
      const top = el('div', 'card-top');
      top.append(el('h3', '', skill.title));
      const tags = el('ul', 'tags'); skill.tags.forEach(tag => tags.append(el('li', '', tag)));
      card.append(top, el('p', 'skill-description', skill.description), tags);
      if (skill.project) {
        const link = el('a', 'project-link', `${skill.project.label} ↗`);
        link.href = skill.project.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        card.append(link);
      }
      return card;
    }));
    document.querySelector('#learning-grid').replaceChildren(...learning.map(item => {
      const card = el('article', 'learning-card');
      card.append(el('h3', '', item.title), el('p', 'learning-description', item.description));
      return card;
    }));
  }
  document.querySelector('#language-toggle').addEventListener('click', () => {
    language = language === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem(preferenceKey, language); } catch { /* Keep switching functional without persistence. */ }
    render();
  });
  render();
})();
