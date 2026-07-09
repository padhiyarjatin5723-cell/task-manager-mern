import Task from "../models/task.js";

export const getAnalyticsData = async (userId) => {

  const tasks = await Task.find({
    user: userId,
  });

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgress = tasks.filter(
    (task) =>
      task.status === "In Progress"
  ).length;

  const weekly = [
    { day: "Mon", tasks: 0 },
    { day: "Tue", tasks: 0 },
    { day: "Wed", tasks: 0 },
    { day: "Thu", tasks: 0 },
    { day: "Fri", tasks: 0 },
    { day: "Sat", tasks: 0 },
    { day: "Sun", tasks: 0 },
  ];

  tasks.forEach((task) => {

    if (task.status !== "Completed")
      return;

    const day =
      new Date(task.updatedAt).getDay();

    const map = [
      6,
      0,
      1,
      2,
      3,
      4,
      5,
    ];

    weekly[map[day]].tasks++;

  });

  return {

    total,

    completed,

    pending,

    inProgress,

    completionRate:
      total === 0
        ? 0
        : Math.round(
            (completed / total) * 100
          ),

    weekly,

  };

};