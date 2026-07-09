import { getAnalyticsData } from "../repositories/analytics.repository.js";

export const analyticsService = async (userId) => {
  return await getAnalyticsData(userId);
};