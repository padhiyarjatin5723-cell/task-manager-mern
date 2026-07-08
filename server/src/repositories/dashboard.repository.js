import Task from "../models/task.js";

export const getStats = async (userId) => {
  const total = await Task.countDocuments({
    user: userId,
  });

  const pending = await Task.countDocuments({
    user: userId,
    status: "Pending",
  });

  const completed = await Task.countDocuments({
    user: userId,
    status: "Completed",
  });

  const inProgress = await Task.countDocuments({
    user: userId,
    status: "In Progress",
  });

  return {
    total,
    pending,
    completed,
    inProgress,
  };
};

export const getRecentTasks = async (userId) => {
  return await Task.find({
    user: userId,
  })
    .sort({
      createdAt: -1,
    })
    .limit(5);
};