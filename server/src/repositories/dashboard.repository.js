import Task from "../models/Task.js";

export const getStats = async (
  userId,
  projectId
) => {
  const filter = {
    user: userId,
  };

  if (
    projectId &&
    projectId !== "All"
  ) {
    filter.project = projectId;
  }

  const total =
    await Task.countDocuments(filter);

  const pending =
    await Task.countDocuments({
      ...filter,
      status: "Pending",
    });

  const completed =
    await Task.countDocuments({
      ...filter,
      status: "Completed",
    });

  const inProgress =
    await Task.countDocuments({
      ...filter,
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
