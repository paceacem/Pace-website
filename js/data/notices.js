/**
 * PACE Data Layer — Notices Module
 */
import { apiService } from '../services/api.js';

export async function fetchNotices() {
  return await apiService.getNotices();
}
