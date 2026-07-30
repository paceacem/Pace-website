/**
 * PACE Website — Navbar Component Controller
 */

export function initNavbar() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isExpanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
      hamburgerBtn.setAttribute("aria-expanded", !isExpanded);
      navMenu.classList.toggle("is-open");
    });

    // Close menu when clicking outside or on a link
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("is-open");
      }
    });
  }

  // Highlight active link based on current page URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (linkHref === currentPath || (currentPath === "index.html" && linkHref === "index.html")) {
      link.classList.add("active");
    } else if (linkHref !== "index.html" && currentPath.includes(linkHref)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}
