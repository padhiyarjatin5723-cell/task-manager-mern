import { analyticsService } from "../services/analytics.service.js";

export const getAnalytics = async (req, res) => {
  const data = await analyticsService(req.user.id);

  res.json(data);
};