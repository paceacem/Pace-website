/**
 * PACE Website — Shared UI Components
 */

const PACE_ICONS = {
  code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  cpu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>',
  chip: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 1v3M14 1v3M10 20v3M14 20v3M1 10h3M1 14h3M20 10h3M20 14h3"/></svg>',
  bot: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2M20 14h2M15 13v2M9 13v2"/></svg>',
  brain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>',
  wifi: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>',
};

function getBasePath() {
  return document.body.dataset.base || "";
}

function getInitials(name) {
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

function renderNav(activePage = "home") {
  const base = getBasePath();
  const isHome = activePage === "home";
  const homeHref = isHome ? "#home" : `${base}index.html`;

  const links = [
    { id: "home", label: "Home", href: homeHref },
    { id: "about", label: "About", href: isHome ? "#about" : `${base}pages/about.html` },
    { id: "events", label: "Events", href: isHome ? "#events" : `${base}pages/events.html` },
    { id: "projects", label: "Projects", href: isHome ? "#projects" : `${base}pages/projects.html` },
    { id: "members", label: "Members", href: isHome ? "#members" : `${base}pages/members.html` },
    { id: "contact", label: "Contact", href: isHome ? "#contact" : `${base}pages/contact.html` },
  ];

  return `
    <header class="navbar-header" id="siteHeader">
      <div class="nav-container">
        <a href="${homeHref}" class="nav-brand" aria-label="PACE Home">
          <img src="${base}assets/paceofficallogo.png" alt="PACE Logo" class="nav-logo">
          <div class="brand-text">
            <span class="brand-title">PACE</span>
            <span class="brand-subtitle">ACEM</span>
          </div>
        </a>
        <nav class="nav-menu" id="navMenu" aria-label="Main Navigation">
          <ul class="nav-list">
            ${links.map(l => `
              <li class="nav-item">
                <a href="${l.href}" class="nav-link${activePage === l.id ? " active" : ""}">${l.label}</a>
              </li>
            `).join("")}
          </ul>
        </nav>
        <div class="nav-actions">
          <a href="${base}pages/join.html" class="btn btn-primary btn-sm nav-cta">Join PACE</a>
          <button class="hamburger-menu" id="hamburgerBtn" aria-expanded="false" aria-controls="navMenu" aria-label="Toggle menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  const base = getBasePath();
  return `
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-brand-section">
          <a href="${base}index.html" class="footer-logo-wrapper" aria-label="PACE Home">
            <img src="${base}assets/paceofficallogo.png" alt="PACE Logo" class="footer-logo">
            <div class="footer-logo-text">
              <span class="footer-logo-title">PACE</span>
              <span class="footer-logo-subtitle">ACEM</span>
            </div>
          </a>
          <p class="footer-desc">Project Association for Computer and Electronics — empowering future engineers through innovation and practical learning at ACEM, Kathmandu.</p>
        </div>
        <div class="footer-nav-section">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links-list">
            <li><a href="${base}index.html">Home</a></li>
            <li><a href="${base}pages/about.html">About</a></li>
            <li><a href="${base}pages/events.html">Events</a></li>
            <li><a href="${base}pages/projects.html">Projects</a></li>
            <li><a href="${base}pages/members.html">Members</a></li>
            <li><a href="${base}pages/contact.html">Contact</a></li>
            <li><a href="${base}pages/join.html">Join PACE</a></li>
          </ul>
        </div>
        <div class="footer-social-section">
          <h4 class="footer-heading">Connect</h4>
          <p class="footer-contact-line"><a href="mailto:info@acem.edu.np">info@acem.edu.np</a></p>
          <div class="social-icons-wrapper">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/pace_acem/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container footer-bottom-container">
          <p class="copyright-text">&copy; 2026 PACE (Project Association for Computer and Electronics), ACEM. All Rights Reserved.</p>
          <p class="credit-text">Developed by PACE</p>
        </div>
      </div>
    </footer>
  `;
}

function renderPageHero(title, subtitle, breadcrumbs = []) {
  const base = getBasePath();
  const crumbs = [
    { label: "Home", href: `${base}index.html` },
    ...breadcrumbs,
    { label: title, href: null },
  ];

  return `
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            ${crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return `<li class="breadcrumb-item${isLast ? " active" : ""}">${isLast || !c.href ? `<span>${c.label}</span>` : `<a href="${c.href}">${c.label}</a>`}</li>`;
            }).join("")}
          </ol>
        </nav>
        <h1 class="page-hero-title">${title}</h1>
        ${subtitle ? `<p class="page-hero-subtitle">${subtitle}</p>` : ""}
      </div>
    </section>
  `;
}

function renderFocusCard(area) {
  return `
    <div class="feature-card reveal">
      <div class="card-icon-wrapper" aria-hidden="true">${PACE_ICONS[area.icon] || PACE_ICONS.code}</div>
      <h3 class="feature-card-title">${area.title}</h3>
      <p class="feature-card-text">${area.description}</p>
    </div>
  `;
}

function renderEventCard(event, base) {
  return `
    <article class="event-card reveal">
      <div class="event-image-placeholder" aria-hidden="true">
        <svg viewBox="0 0 400 200" fill="none"><rect width="400" height="200" fill="#EEF2FF"/><path d="M0 140 Q100 100 200 130 T400 120" stroke="#C7D2FE" stroke-width="2"/><circle cx="200" cy="90" r="24" fill="#6366F1" opacity="0.15"/><rect x="170" y="70" width="60" height="40" rx="6" fill="#6366F1" opacity="0.25"/></svg>
      </div>
      <div class="event-card-content">
        <div class="event-meta">
          <span class="event-date">${event.date}</span>
          <span class="event-location">${event.location}</span>
        </div>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-desc">${event.description}</p>
        <a href="${base}pages/events.html#${event.id}" class="btn btn-text-link">Learn More &rarr;</a>
      </div>
    </article>
  `;
}

function renderProjectCard(project, base) {
  const tags = project.technologies.map(t => `<span class="tag-chip">${t}</span>`).join("");
  return `
    <article class="project-card reveal">
      <div class="project-image-placeholder" aria-hidden="true">
        <svg viewBox="0 0 400 220" fill="none"><rect width="400" height="220" fill="#F0F9FF"/><rect x="60" y="50" width="280" height="120" rx="8" stroke="#0EA5E9" stroke-width="2" opacity="0.3"/><path d="M80 160 L160 100 L240 140 L320 80" stroke="#0284C7" stroke-width="2" opacity="0.4"/></svg>
      </div>
      <div class="project-card-content">
        <div class="project-card-header">
          <h3 class="project-title">${project.title}</h3>
          <span class="badge badge-${project.status === "Completed" ? "success" : project.status === "In Progress" ? "info" : "neutral"}">${project.status}</span>
        </div>
        <div class="tag-list">${tags}</div>
        <p class="project-desc">${project.description}</p>
        <a href="${base}pages/projects.html#${project.id}" class="btn btn-text-link">View Project &rarr;</a>
      </div>
    </article>
  `;
}

function renderProfileCard(person, showBio = false) {
  const photoHtml = person.photo
    ? `<img src="${getBasePath()}${person.photo}" alt="${person.name}" class="profile-photo" loading="lazy">`
    : `<div class="profile-avatar">${getInitials(person.name)}</div>`;

  return `
    <article class="profile-card reveal">
      <div class="profile-photo-wrap">${photoHtml}</div>
      <div class="profile-info">
        <h3 class="profile-name">${person.name}</h3>
        <p class="profile-role">${person.role}</p>
        ${showBio && person.bio ? `<p class="profile-bio">${person.bio}</p>` : ""}
        <div class="profile-links">
          ${person.linkedin ? `<a href="${person.linkedin}" class="profile-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>` : ""}
          ${person.github ? `<a href="${person.github}" class="profile-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></a>` : ""}
          ${person.email ? `<a href="mailto:${person.email}" class="profile-link" aria-label="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>` : ""}
        </div>
      </div>
    </article>
  `;
}

function renderAccordion(items, idPrefix = "faq") {
  return `
    <div class="accordion" id="${idPrefix}Accordion">
      ${items.map((item, i) => `
        <div class="accordion-item">
          <button class="accordion-trigger" aria-expanded="false" aria-controls="${idPrefix}-panel-${i}" id="${idPrefix}-trigger-${i}">
            <span>${item.question}</span>
            <svg class="accordion-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </button>
          <div class="accordion-panel" id="${idPrefix}-panel-${i}" role="region" aria-labelledby="${idPrefix}-trigger-${i}" hidden>
            <p>${item.answer}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderTimeline(items) {
  return `
    <div class="timeline">
      ${items.map(item => `
        <div class="timeline-item reveal">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <span class="timeline-year">${item.year}</span>
            <h3 class="timeline-title">${item.title}</h3>
            <p class="timeline-desc">${item.description}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function injectLayout(activePage) {
  const navSlot = document.getElementById("site-nav");
  const footerSlot = document.getElementById("site-footer");
  if (navSlot) navSlot.innerHTML = renderNav(activePage);
  if (footerSlot) footerSlot.innerHTML = renderFooter();
}

function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    container.setAttribute("aria-live", "polite");
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
