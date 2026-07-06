import { getStats } from "../repositories/dashboard.repository.js";

export const dashboardStats = async (userId) => {
  return await getStats(userId);
};