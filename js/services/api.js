/**
 * PACE Website — API Service Wrapper
 * Thin wrapper that reads local JSON files currently.
 * Structured so swapping to a real backend API endpoint later is a single-file change.
 */

const DATA_BASE_PATH = "data";

export const apiService = {
  async getMembers() {
    try {
      const res = await fetch(`${DATA_BASE_PATH}/members.json`);
      if (!res.ok) throw new Error("Failed to load members data");
      return await res.json();
    } catch (err) {
      console.error("[apiService] getMembers error:", err);
      return [];
    }
  },

  async getEvents() {
    try {
      const res = await fetch(`${DATA_BASE_PATH}/events.json`);
      if (!res.ok) throw new Error("Failed to load events data");
      return await res.json();
    } catch (err) {
      console.error("[apiService] getEvents error:", err);
      return [];
    }
  },

  async getProjects() {
    try {
      const res = await fetch(`${DATA_BASE_PATH}/projects.json`);
      if (!res.ok) throw new Error("Failed to load projects data");
      return await res.json();
    } catch (err) {
      console.error("[apiService] getProjects error:", err);
      return [];
    }
  },

  async getNotices() {
    try {
      const res = await fetch(`${DATA_BASE_PATH}/notices.json`);
      if (!res.ok) throw new Error("Failed to load notices data");
      return await res.json();
    } catch (err) {
      console.error("[apiService] getNotices error:", err);
      return [];
    }
  }
};
