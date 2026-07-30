/**
 * PACE Website — About Page Module
 */
import { fetchMembers } from '../data/members.js';
import { renderMemberCard } from '../components/memberCard.js';

export async function initAboutPage() {
  const fullTeamGrid = document.getElementById("fullTeamGrid");
  if (fullTeamGrid) {
    try {
      const allMembers = await fetchMembers();
      fullTeamGrid.innerHTML = allMembers.map(m => renderMemberCard(m)).join('');
    } catch (err) {
      console.error("Error loading team members for about page:", err);
    }
  }
}
