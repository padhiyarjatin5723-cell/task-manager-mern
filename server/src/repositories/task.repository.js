import Task from "../models/Task.js";

export const createTask = async (data) => {
  return await Task.create(data);
};

export const getTasks = async (userId) => {
  return await Task.find({
    user: userId,
  });
};

export const getTaskById = async (id, userId) => {
  return await Task.findOne({
    _id: id,
    user: userId,
  });
};

export const updateTask = async (id, data, userId) => {
  return await Task.findOneAndUpdate(
    {
      _id: id,
      user: userId,
    },
    data,
    {
      new: true,
    }
  );
};

export const deleteTask = async (id, userId) => {
  return await Task.findOneAndDelete({
    _id: id,
    user: userId,
  });
};