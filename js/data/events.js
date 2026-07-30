/**
 * PACE Data Layer — Events Module
 */
import { apiService } from '../services/api.js';

export async function fetchEvents() {
  return await apiService.getEvents();
}
