import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout";
import FilterBar from "../../components/tasks/FilterBar";
import TaskGrid from "../../components/tasks/TaskGrid";
import toast from "react-hot-toast";
import {
  deleteTask,
  getTasks,
} from "../../services/task/task.service";
import { getProjects } from "../../services/project/project.service";

function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [status, setStatus] = useState("All");

  const [selectedProject, setSelectedProject] = useState("All");

  useEffect(() => {
    loadTasks();
    loadProjects();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadProjects = async () => {
    try {
      const res = await getProjects();

      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeTask = async (id) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this task?"
  );

  if (!confirmDelete) return;

  try {

    await deleteTask(id);

    toast.success("Task Deleted");

    loadTasks();

  } catch (err) {

    console.log(err);

    toast.error("Failed to delete task");

  }

};

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {

      const searchMatch = true;

      const statusMatch =
        status === "All"
          ? true
          : task.status === status;

      const taskProjectId =
        typeof task.project === "string"
          ? task.project
          : task.project?._id;

      const projectMatch =
        selectedProject === "All"
          ? true
          : taskProjectId === selectedProject;

      return searchMatch && statusMatch && projectMatch;

    });
  }, [tasks, status, selectedProject]);

  return (
    <AppLayout>

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl md:text-5xl font-black text-white">
            Tasks
          </h1>

          <p className="mt-3 text-slate-400">
            Organize your work beautifully.
          </p>

        </div>

        <button
          onClick={() => navigate("/create-task")}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
        >

          <Plus size={20} />

          New Task

        </button>

      </div>

      <div className="mt-8">

        <select
          value={selectedProject}
          onChange={(e) =>
            setSelectedProject(e.target.value)
          }
          className="w-72 rounded-2xl border border-white/10 bg-[#151823] px-5 py-3 text-white outline-none"
        >
          <option value="All">
            All Projects
          </option>

          {projects.map((project) => (

            <option
              key={project._id}
              value={project._id}
            >
              {project.name}
            </option>

          ))}
        </select>

      </div>

      <FilterBar
        status={status}
        setStatus={setStatus}
      />

      <TaskGrid
        tasks={filteredTasks}
        removeTask={removeTask}
      />

    </AppLayout>
  );
}

export default Tasks;
