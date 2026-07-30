/**
 * PACE Website — Member Card Component Renderer
 */
import { getInitials } from '../utils/helpers.js';

export function renderMemberCard(member) {
  const photoSrc = member.photo ? member.photo : 'assets/members/placeholder.png';

  return `
    <div class="member-card">
      <div class="member-photo-wrap">
        <img src="${photoSrc}" alt="${member.name}" class="member-photo" loading="lazy" onerror="this.onerror=null; this.src='assets/members/placeholder.png';">
      </div>
      <div class="member-details">
        <h4 class="member-name">${member.name}</h4>
        <span class="member-role">${member.role}</span>
      </div>
    </div>
  `;
}
