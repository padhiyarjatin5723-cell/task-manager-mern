import api from "../api";

export const getDashboardStats = (
  project = "All"
) =>
  api.get(
    `/dashboard/stats?project=${project}`
  );

export const getDashboardTasks = () =>
  api.get("/tasks");
