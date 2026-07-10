import {
  getStats,
  getRecentTasks,
  getActivityTimeline,
} from "../repositories/dashboard.repository.js";

export const dashboardStats = async (
  userId,
  projectId
) => {

  const stats = await getStats(
    userId,
    projectId
  );

  const activity =
    await getActivityTimeline(
      userId
    );

  return {
    ...stats,
    activity,
  };

};

export const dashboardTasks = async (
  userId
) => {

  return await getRecentTasks(
    userId
  );

};