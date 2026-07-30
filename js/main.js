/**
<<<<<<< HEAD
 * PACE Website — Main Controller
 */

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";
  injectLayout(page);

  initMobileMenu();
  initHeaderScroll();
  initScrollReveal();
  initAccordions();
  initTabs();
  initContactForm();
  initGalleryFilter();
  initProjectFilter();
  initEventTabs();
  initLightbox();
  initPageRenders(page);
});

function initMobileMenu() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  if (!hamburgerBtn || !navMenu) return;

  const navLinks = navMenu.querySelectorAll(".nav-link");
  hamburgerBtn.addEventListener("click", () => {
    const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    hamburgerBtn.setAttribute("aria-expanded", String(!isExpanded));
    document.body.style.overflow = isExpanded ? "" : "hidden";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburgerBtn.classList.remove("active");
      navMenu.classList.remove("active");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    header.classList.toggle("shrink", window.scrollY > 80);
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (document.body.dataset.page === "home") {
    initHomeNavObserver();
  }
}

function initHomeNavObserver() {
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  const sections = document.querySelectorAll("section[id]");
  if (!navLinks.length || !sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, { rootMargin: "-30% 0px -60% 0px", threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  if (!reveals.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  reveals.forEach(el => observer.observe(el));
}

function initAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      const panel = document.getElementById(trigger.getAttribute("aria-controls"));
      trigger.setAttribute("aria-expanded", String(!expanded));
      if (panel) panel.hidden = expanded;
    });
  });
}

function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach(tabGroup => {
    const triggers = tabGroup.querySelectorAll(".tab-trigger");
    const panels = tabGroup.querySelectorAll(".tab-panel");

    triggers.forEach(trigger => {
      trigger.addEventListener("click", () => {
        const target = trigger.dataset.tab;
        triggers.forEach(t => t.classList.toggle("active", t === trigger));
        panels.forEach(p => p.classList.toggle("active", p.dataset.tab === target));
      });
    });
  });
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("form-name")?.value.trim() || "there";
    showToast(`Thank you, ${name}! Your message has been recorded. (Frontend demo)`, "success");
    form.reset();
  });
}

function initGalleryFilter() {
  const filterBtns = document.querySelectorAll("[data-gallery-filter]");
  const items = document.querySelectorAll("[data-gallery-item]");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.galleryFilter;
      filterBtns.forEach(b => b.classList.toggle("active", b === btn));
      items.forEach(item => {
        const match = filter === "all" || item.dataset.galleryItem === filter;
        item.classList.toggle("hidden", !match);
      });
    });
  });
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll("[data-project-filter]");
  const cards = document.querySelectorAll("[data-project-category]");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.projectFilter;
      filterBtns.forEach(b => b.classList.toggle("active", b === btn));
      cards.forEach(card => {
        const cat = card.dataset.projectCategory;
        const match = filter === "all" || cat === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });
}

function initEventTabs() {
  const filterBtns = document.querySelectorAll("[data-event-filter]");
  const cards = document.querySelectorAll("[data-event-status]");
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.eventFilter;
      filterBtns.forEach(b => b.classList.toggle("active", b === btn));
      cards.forEach(card => {
        const status = card.dataset.eventStatus;
        const match = filter === "all" || status === filter;
        card.classList.toggle("hidden", !match);
      });
    });
  });
}

function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const titleEl = lightbox.querySelector(".lightbox-title");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll("[data-lightbox]").forEach(item => {
    item.addEventListener("click", () => {
      if (titleEl) titleEl.textContent = item.dataset.lightbox || "Gallery";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  closeBtn?.addEventListener("click", close);
  lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && lightbox.classList.contains("open")) close(); });
}

function initPageRenders(page) {
  const base = getBasePath();

  if (page === "home") renderHomePage(base);
  if (page === "about") renderAboutPage();
  if (page === "events") renderEventsPage(base);
  if (page === "projects") renderProjectsPage(base);
  if (page === "members") renderMembersPage();
  if (page === "gallery") renderGalleryPage();
  if (page === "achievements") renderAchievementsPage();
  if (page === "resources") renderResourcesPage();
  if (page === "contact") renderContactPage();
  if (page === "join") renderJoinPage(base);
}

function renderHomePage(base) {
  const focusGrid = document.getElementById("focusAreasGrid");
  if (focusGrid) focusGrid.innerHTML = PACE_DATA.focusAreas.map(renderFocusCard).join("");

  const eventsGrid = document.getElementById("homeEventsGrid");
  if (eventsGrid) eventsGrid.innerHTML = PACE_DATA.events.slice(0, 3).map(e => renderEventCard(e, base)).join("");

  const projectsGrid = document.getElementById("homeProjectsGrid");
  if (projectsGrid) projectsGrid.innerHTML = PACE_DATA.projects.slice(0, 3).map(p => renderProjectCard(p, base)).join("");

  const leadershipGrid = document.getElementById("leadershipGrid");
  if (leadershipGrid) leadershipGrid.innerHTML = PACE_DATA.leadership.map(p => renderProfileCard(p)).join("");
}

function renderAboutPage() {
  const valuesGrid = document.getElementById("coreValuesGrid");
  if (valuesGrid) {
    valuesGrid.innerHTML = PACE_DATA.coreValues.map(v => `
      <div class="feature-card reveal">
        <h3 class="feature-card-title">${v.title}</h3>
        <p class="feature-card-text">${v.description}</p>
      </div>
    `).join("");
  }

  const timelineSlot = document.getElementById("aboutTimeline");
  if (timelineSlot) timelineSlot.innerHTML = renderTimeline(PACE_DATA.timeline);
}

function renderEventsPage(base) {
  const grid = document.getElementById("eventsPageGrid");
  if (!grid) return;
  grid.innerHTML = PACE_DATA.events.map(e => `
    <article class="event-card reveal" id="${e.id}" data-event-status="${e.status}">
      <div class="event-image-placeholder" aria-hidden="true">
        <svg viewBox="0 0 400 200" fill="none"><rect width="400" height="200" fill="#EEF2FF"/><circle cx="200" cy="100" r="30" fill="#6366F1" opacity="0.2"/></svg>
      </div>
      <div class="event-card-content">
        <div class="event-meta">
          <span class="badge badge-info">${e.category}</span>
          <span class="event-date">${e.date}</span>
        </div>
        <h3 class="event-title">${e.title}</h3>
        <p class="event-desc">${e.description}</p>
        <p class="event-location-text">${e.location}</p>
        <a href="#" class="btn btn-outline btn-sm" aria-label="Register for ${e.title} (placeholder)">Register</a>
      </div>
    </article>
  `).join("");
}

function renderProjectsPage(base) {
  const grid = document.getElementById("projectsPageGrid");
  if (!grid) return;

  const categoryMap = { Software: "software", AI: "ai", Robotics: "robotics", IoT: "iot", Embedded: "embedded", Electronics: "electronics", Research: "research", "Open Source": "opensource" };

  grid.innerHTML = PACE_DATA.projects.map(p => {
    const cat = (categoryMap[p.category] || p.category).toLowerCase();
    const tags = p.technologies.map(t => `<span class="tag-chip">${t}</span>`).join("");
    return `
      <article class="project-card reveal" id="${p.id}" data-project-category="${cat}">
        <div class="project-image-placeholder"><svg viewBox="0 0 400 220" fill="none"><rect width="400" height="220" fill="#F0F9FF"/></svg></div>
        <div class="project-card-content">
          <div class="project-card-header">
            <h3 class="project-title">${p.title}</h3>
            <span class="badge badge-${p.status === "Completed" ? "success" : p.status === "In Progress" ? "info" : "neutral"}">${p.status}</span>
          </div>
          <div class="tag-list">${tags}</div>
          <p class="project-desc">${p.description}</p>
          <p class="project-team"><strong>Team:</strong> ${p.team.join(", ")}</p>
          <div class="project-links">
            <a href="${p.github}" class="btn btn-outline btn-sm">GitHub</a>
            <a href="${p.demo}" class="btn btn-primary btn-sm">Demo</a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderMembersPage() {
  const renderGroup = (containerId, filterFn) => {
    const el = document.getElementById(containerId);
    if (!el) return;
    el.innerHTML = filterFn().map(p => renderProfileCard({ ...p, bio: p.bio || "" }, true)).join("");
  };

  renderGroup("facultyGrid", () => PACE_DATA.facultyAdvisors);
  renderGroup("executiveGrid", () => PACE_DATA.members.filter(m => m.group === "Executive Committee"));
  renderGroup("coreTeamGrid", () => PACE_DATA.members.filter(m => m.group === "Core Team"));
  renderGroup("volunteersGrid", () => PACE_DATA.members.filter(m => m.group === "Volunteers"));
}

function renderGalleryPage() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = PACE_DATA.gallery.map(item => `
    <button class="gallery-item reveal" data-gallery-item="${item.category}" data-lightbox="${item.title}" aria-label="View ${item.title}">
      <div class="gallery-image-placeholder">
        <svg viewBox="0 0 300 220" fill="none"><rect width="300" height="220" fill="#F8FAFC"/><rect x="40" y="40" width="220" height="140" rx="8" stroke="#CBD5E1" stroke-width="2"/></svg>
      </div>
      <span class="gallery-item-title">${item.title}</span>
      <span class="badge badge-neutral">${item.category}</span>
    </button>
  `).join("");
}

function renderAchievementsPage() {
  const grid = document.getElementById("achievementsGrid");
  if (!grid) return;
  grid.innerHTML = PACE_DATA.achievements.map(a => `
    <article class="feature-card reveal">
      <span class="badge badge-info">${a.year}</span>
      <h3 class="feature-card-title">${a.title}</h3>
      <p class="feature-card-text">${a.description}</p>
    </article>
  `).join("");
}

function renderResourcesPage() {
  const grid = document.getElementById("resourcesGrid");
  if (!grid) return;
  grid.innerHTML = PACE_DATA.resources.map(r => `
    <article class="feature-card reveal">
      <span class="badge badge-neutral">${r.type}</span>
      <h3 class="feature-card-title">${r.title}</h3>
      <p class="feature-card-text">${r.description}</p>
      <a href="${r.link}" class="btn btn-text-link" target="_blank" rel="noopener noreferrer">Access Resource &rarr;</a>
    </article>
  `).join("");
}

function renderContactPage() {
  const faqSlot = document.getElementById("contactFaq");
  if (faqSlot) faqSlot.innerHTML = renderAccordion(PACE_DATA.contactFaqs, "contact-faq");
}

function renderJoinPage(base) {
  const faqSlot = document.getElementById("joinFaq");
  if (faqSlot) faqSlot.innerHTML = renderAccordion(PACE_DATA.joinFaqs, "join-faq");
}
=======
 * PACE Website — Main Javascript Controller (Entry Point)
 */
import { App } from './app.js';

document.addEventListener("DOMContentLoaded", () => {
  App.init().catch(err => console.error("[PACE App Init Error]:", err));
});
>>>>>>> 43c7723 ( Optimizing the Folder Structure)
