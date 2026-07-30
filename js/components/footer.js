/**
 * PACE Website — Footer Component Controller
 */

export function initFooter() {
  const yearEl = document.getElementById("copyrightYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
