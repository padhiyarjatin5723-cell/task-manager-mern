import Task from "../models/task.js";

export const globalSearchController = async (
  req,
  res
) => {
  try {

    const query = (req.query.query || "").trim();

    if (!query) {
      return res.json({
        tasks: [],
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

    res.json({
      tasks,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};