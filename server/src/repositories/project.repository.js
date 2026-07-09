import Project from "../models/project.js";

export const createProjectRepo = async (data) => {
  return await Project.create(data);
};

export const getProjectsRepo = async (userId) => {
  return await Project.find({
    user: userId,
  }).sort({
    createdAt: -1,
  });
};

export const getProjectByIdRepo = async (id) => {
  return await Project.findById(id);
};

export const updateProjectRepo = async (
  id,
  data
) => {
  return await Project.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  );
};

export const deleteProjectRepo = async (id) => {
  return await Project.findByIdAndDelete(id);
};