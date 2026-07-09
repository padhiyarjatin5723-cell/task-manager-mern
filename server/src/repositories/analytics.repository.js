import Task from "../models/Task.js";

export const getAnalyticsData = async (userId) => {
  const tasks = await Task.find({ user: userId });

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  return {
    total,
    completed,
    pending,
    inProgress,
    completionRate:
      total === 0
        ? 0
        : Math.round((completed / total) * 100),
  };
};
