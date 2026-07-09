import {
  getStats,
  getRecentTasks,
} from "../repositories/dashboard.repository.js";

export const dashboardStats = async (
  userId,
  projectId
) => {
  return await getStats(
    userId,
    projectId
  );
};

export const dashboardTasks = async (userId) => {
  return await getRecentTasks(userId);
};
