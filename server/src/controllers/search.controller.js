import Task from "../models/task.js";
import Project from "../models/project.js";

export const globalSearchController = async (
  req,
  res
) => {
  try {

    

    const query = (req.query.query || "").trim();

    if (!query) {
      return res.json({
        tasks: [],
        projects: [],
      });
    }

    const regex = new RegExp(query, "i");

    const tasks = await Task.find({
      user: req.user.id,
      $or: [
        { title: regex },
        { description: regex },
      ],
    })
      .limit(5)
      .select("title status");

    const projects = await Project.find({
      user: req.user.id,
      name: regex,
    })
      .limit(5)
      .select("name color");

    res.json({
      tasks,
      projects,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};