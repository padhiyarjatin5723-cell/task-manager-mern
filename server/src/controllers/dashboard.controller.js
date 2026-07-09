import {
  dashboardStats,
  dashboardTasks,
} from "../services/dashboard.service.js";

export const getDashboardStats = async (req, res) => {
  try {
    const stats = await dashboardStats(
      req.user.id,
      req.query.project
    );

    res.json(stats);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getDashboardTasks = async (req, res) => {
  try {
    const tasks = await dashboardTasks(req.user.id);

    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
