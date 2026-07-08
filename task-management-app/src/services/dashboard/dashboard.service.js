import api from "../api";

export const getDashboardStats = () =>
  api.get("/dashboard/stats");

export const getDashboardTasks = () =>
  api.get("/tasks");