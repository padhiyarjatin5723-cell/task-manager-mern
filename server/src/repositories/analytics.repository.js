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
    (task) => task.status === "In Progress"
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

  const today = new Date();

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 6);
  sevenDaysAgo.setHours(0, 0, 0, 0);

  tasks.forEach((task) => {

    if (task.status !== "Completed") return;

    const completedDate = new Date(task.updatedAt);

    if (completedDate < sevenDaysAgo) return;

    const day = completedDate.getDay();

    const map = [
      6, // Sunday
      0, // Monday
      1, // Tuesday
      2, // Wednesday
      3, // Thursday
      4, // Friday
      5, // Saturday
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
        : Math.round((completed / total) * 100),

    weekly,

  };

};