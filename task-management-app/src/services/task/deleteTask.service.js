import api from "../api";

export const deleteTask = async (id) => {
  return await api.delete(`/tasks/${id}`);
};