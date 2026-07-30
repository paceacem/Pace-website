/**
 * PACE Data Layer — Members Module
 */
import { apiService } from '../services/api.js';

export async function fetchMembers() {
  return await apiService.getMembers();
}

export async function fetchExecutiveMembers() {
  const members = await apiService.getMembers();
  return members.filter(m => m.category === 'executive');
}
