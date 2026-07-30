/**
 * PACE Data Layer — Projects Module
 */
import { apiService } from '../services/api.js';

export async function fetchProjects() {
  return await apiService.getProjects();
}
