import {
  createProjectRepo,
  getProjectsRepo,
  getProjectByIdRepo,
  updateProjectRepo,
  deleteProjectRepo,
} from "../repositories/project.repository.js";

export const createProject = async (
  userId,
  body
) => {
  return await createProjectRepo({
    ...body,
    user: userId,
  });
};

export const getProjects = async (
  userId
) => {
  return await getProjectsRepo(userId);
};

export const updateProject = async (
  id,
  body
) => {
  return await updateProjectRepo(
    id,
    body
  );
};

export const deleteProject = async (
  id
) => {
  return await deleteProjectRepo(id);
};

export const getProjectById = async (
  id
) => {
  return await getProjectByIdRepo(id);
};