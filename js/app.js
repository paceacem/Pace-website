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
