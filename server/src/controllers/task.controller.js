import * as service from "../services/task.service.js";

export const createTask = async (req, res) => {
  const task = await service.createTask(req.body, req.user.id);

  res.status(201).json(task);
};

export const getTasks = async (req, res) => {
  const tasks = await service.getTasks(req.user.id);

  res.json(tasks);
};

export const getTaskById = async (req, res) => {
  const task = await service.getTaskById(
    req.params.id,
    req.user.id
  );

  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await service.updateTask(
    req.params.id,
    req.body,
    req.user.id
  );

  res.json(task);
};

export const deleteTask = async (req, res) => {
  await service.deleteTask(
    req.params.id,
    req.user.id
  );

  res.json({
    message: "Task Deleted",
  });
};