import { dashboardStats } from "../services/dashboard.service.js";

export const getDashboard = async (req, res) => {
  const stats = await dashboardStats(req.user.id);

  res.json(stats);
};