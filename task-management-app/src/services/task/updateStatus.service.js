import api from "../api";

export const updateTaskStatus = async (
  id,
  status
) => {
  return await api.put(`/tasks/${id}`, {
    status,
  });
};