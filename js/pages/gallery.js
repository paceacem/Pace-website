/**
 * PACE Website — Gallery Page Module
 */

export async function initGalleryPage() {
  const galleryGrid = document.getElementById("galleryGrid");
  if (!galleryGrid) return;

  // Placeholder images grid until real event photos are uploaded
  const placeholders = [
    { title: "Protobytes Hackathon (Placeholder)" },
    { title: "Hardware Workshop Session (Placeholder)" },
    { title: "Git & GitHub Seminar (Placeholder)" },
    { title: "IIT Bombay Techfest Delegation (Placeholder)" },
    { title: "Robotics Club Joint Challenge (Placeholder)" },
    { title: "Annual ECE Orientation (Placeholder)" }
  ];

  galleryGrid.innerHTML = placeholders.map(item => `
    <div class="gallery-item">
      <div class="gallery-placeholder-inner">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="gallery-placeholder-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <div class="gallery-placeholder-title">${item.title}</div>
        <span class="placeholder-tag">Photos Coming Soon</span>
      </div>
    </div>
  `).join('');
}
