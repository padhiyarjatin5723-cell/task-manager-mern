import {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} from "../services/project.service.js";

export const createProjectController = async (
  req,
  res
) => {
  try {

    const project = await createProject(
      req.user.id,
      req.body
    );

    res.status(201).json(project);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

export const getProjectsController = async (
  req,
  res
) => {
  try {

    const projects = await getProjects(
      req.user.id
    );

    res.json(projects);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

export const updateProjectController = async (
  req,
  res
) => {
  try {

    const project = await updateProject(
      req.params.id,
      req.body
    );

    res.json(project);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

export const deleteProjectController = async (
  req,
  res
) => {
  try {

    await deleteProject(req.params.id);

    res.json({
      message: "Project Deleted",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};