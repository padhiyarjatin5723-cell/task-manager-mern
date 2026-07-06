import * as repository from "../repositories/task.repository.js";

export const createTask = async (data, userId) => {
  return await repository.createTask({
    ...data,
    user: userId,
  });
};

export const getTasks = async (userId) => {
  return await repository.getTasks(userId);
};

export const getTaskById = async (id, userId) => {
  return await repository.getTaskById(id, userId);
};

export const updateTask = async (id, data, userId) => {
  return await repository.updateTask(id, data, userId);
};

export const deleteTask = async (id, userId) => {
  return await repository.deleteTask(id, userId);
};