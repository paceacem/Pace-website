/**
 * PACE Website — Home Page Module
 */
import { fetchExecutiveMembers } from '../data/members.js';
import { fetchEvents } from '../data/events.js';
import { renderMemberCard } from '../components/memberCard.js';

export async function initHomePage() {
  // Render Executive Members preview on home page
  const membersGrid = document.getElementById("membersGrid");
  if (membersGrid) {
    try {
      const execMembers = await fetchExecutiveMembers();
      membersGrid.innerHTML = execMembers.map(m => renderMemberCard(m)).join('');
    } catch (err) {
      console.error("Error loading executive members for home page:", err);
    }
  }

  // Interactive subtle circuit node animation handler if applicable
  const circuit = document.querySelector(".interactive-circuit");
  if (circuit) {
    circuit.addEventListener("mouseenter", () => {
      circuit.style.transform = "scale(1.02)";
      circuit.style.transition = "transform 0.3s ease";
    });
    circuit.addEventListener("mouseleave", () => {
      circuit.style.transform = "scale(1)";
    });
  }
}
