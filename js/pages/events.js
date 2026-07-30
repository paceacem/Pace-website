/**
 * PACE Website — Events Page Module
 */
import { fetchEvents } from '../data/events.js';

export async function initEventsPage() {
  const eventsListContainer = document.getElementById("eventsListContainer");
  if (!eventsListContainer) return;

  try {
    const events = await fetchEvents();
    if (events.length === 0) {
      eventsListContainer.innerHTML = '<p class="text-muted">No events currently listed.</p>';
      return;
    }

    eventsListContainer.innerHTML = events.map(evt => `
      <div class="event-card">
        <div class="event-status-tag">${evt.status || 'TBD'}</div>
        <div class="event-card-content">
          <div class="event-meta">
            <span class="event-date">Date: ${evt.date}</span>
            <span class="event-location">${evt.location}</span>
          </div>
          <h3 class="event-title">${evt.title}</h3>
          <p class="event-desc">${evt.description}</p>
          <!-- TODO: wire up later to real event detail page -->
          <a href="#" class="btn btn-text-link" aria-label="Learn more about ${evt.title}">Learn More &rarr;</a>
        </div>
      </div>
    `).join('');
  } catch (err) {
    console.error("Error loading events:", err);
  }
}
