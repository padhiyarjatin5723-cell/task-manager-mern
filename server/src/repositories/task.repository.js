import Task from "../models/task.js";

export const createTask = async (data) => {
  return await Task.create(data);
};

export const getTasks = async (userId) => {
  return await Task.find({
    user: userId,
  }).populate("project");
};

export const getTaskById = async (id, userId) => {
  return await Task.findOne({
    _id: id,
    user: userId,
  }).populate("project");
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
