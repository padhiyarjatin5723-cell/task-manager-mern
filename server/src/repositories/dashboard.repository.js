import Task from "../models/task.js";

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

export const getRecentTasks = async (
  userId
) => {

  return await Task.find({
    user: userId,
  })
    .sort({
      updatedAt: -1,
    })
    .limit(8)
    .populate("project");

};

export const getActivityTimeline = async (
  userId
) => {

  const tasks =
    await Task.find({
      user: userId,
    })
      .sort({
        updatedAt: -1,
      })
      .limit(8)
      .populate("project");

  return tasks.map((task) => ({

    _id: task._id,

    title: task.title,

    status: task.status,

    project:
      task.project?.name ||
      "No Project",

    updatedAt: task.updatedAt,

  }));

};