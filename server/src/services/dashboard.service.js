import {
  getStats,
  getRecentTasks,
} from "../repositories/dashboard.repository.js";

export const dashboardStats = async (userId) => {
  return await getStats(userId);
};

export const dashboardTasks = async (userId) => {
  return await getRecentTasks(userId);
};