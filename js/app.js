/**
 * PACE Website — App Router / Init Dispatcher
 * Detects current page and dispatches page-specific initialization.
 */

import { initNavbar } from './components/navbar.js';
import { initFooter } from './components/footer.js';
import { initHomePage } from './pages/home.js';
import { initAboutPage } from './pages/about.js';
import { initEventsPage } from './pages/events.js';
import { initProjectsPage } from './pages/projects.js';
import { initGalleryPage } from './pages/gallery.js';
import { initContactPage } from './pages/contact.js';
import { getCurrentPageKey } from './utils/helpers.js';

export const App = {
  async init() {
    showLocalServerWarning();

    // Global components initialization
    initNavbar();
    initFooter();

    // Page-specific initialization
    const pageKey = document.body.dataset.page || getCurrentPageKey();

    switch (pageKey) {
      case 'home':
        await initHomePage();
        break;
      case 'about':
        await initAboutPage();
        break;
      case 'events':
        await initEventsPage();
        break;
      case 'projects':
        await initProjectsPage();
        break;
      case 'gallery':
        await initGalleryPage();
        break;
      case 'contact':
        await initContactPage();
        break;
      default:
        console.warn(`[App] Unknown page key: ${pageKey}`);
        break;
    }
  }
};

function showLocalServerWarning() {
  if (window.location.protocol !== "file:") return;
  if (document.getElementById("pace-local-server-warning")) return;

  const banner = document.createElement("div");
  banner.id = "pace-local-server-warning";
  banner.setAttribute("role", "status");
  banner.textContent = "This site loads events and projects from JSON files. Run a local web server to see all dynamic content: python3 -m http.server 8000";

  Object.assign(banner.style, {
    position: "sticky",
    top: "0",
    zIndex: "9999",
    padding: "12px 16px",
    background: "#1f2937",
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.4",
    textAlign: "center",
    borderBottom: "1px solid rgba(255,255,255,0.12)"
  });

  document.body.prepend(banner);
}
