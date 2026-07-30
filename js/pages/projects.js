/**
 * PACE Website — Projects Page Module
 */
import { fetchProjects } from '../data/projects.js';

export async function initProjectsPage() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  try {
    const projects = await fetchProjects();
    if (projects.length === 0) {
      projectsGrid.innerHTML = '<p class="text-muted">No projects currently listed.</p>';
      return;
    }

    projectsGrid.innerHTML = projects.map(proj => `
      <div class="project-card">
        <span class="project-category">${proj.category}</span>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="tech-tag-list">
          ${(proj.techStack || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <!-- TODO: wire up later to project details/repo -->
        <a href="#" class="btn btn-text-link" aria-label="View details for ${proj.title}">Learn More &rarr;</a>
      </div>
    `).join('');
  } catch (err) {
    console.error("Error loading projects:", err);
  }
}
