/**
 * PACE Website — Utility Helpers
 */

export function getInitials(name) {
  if (!name) return "P";
  return name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
}

export function formatDate(dateString) {
  if (!dateString || dateString === "TBD") return "Date: TBD";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' });
}

export function debounce(func, wait = 100) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export function getCurrentPageKey() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  if (!page || page === "index.html" || page === "") return "home";
  return page.replace(".html", "");
}
