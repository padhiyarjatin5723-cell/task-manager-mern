import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Plus } from "lucide-react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import AppLayout from "../../layouts/AppLayout";
import FilterBar from "../../components/tasks/FilterBar";
import TaskGrid from "../../components/tasks/TaskGrid";

import {
  deleteTask,
  getTasks,
} from "../../services/task/task.service";

import { getProjects } from "../../services/project/project.service";

function Tasks() {
  const navigate = useNavigate();

  const [searchParams] =
    useSearchParams();

  const search =
    searchParams.get("search") || "";

  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] =
    useState([]);

  const [status, setStatus] =
    useState("All");

  const [
    selectedProject,
    setSelectedProject,
  ] = useState("All");

  const [sortBy, setSortBy] =
    useState("newest");

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
    if (!window.confirm("Delete this task?"))
      return;

    try {
      await deleteTask(id);

      toast.success("Task Deleted");

      loadTasks();
    } catch (err) {
      console.log(err);

      toast.error("Delete Failed");
    }
  };

  const filteredTasks = useMemo(() => {
    let result = tasks.filter((task) => {
      const searchMatch =
        task.title
          ?.toLowerCase()
          .includes(search.toLowerCase());

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
          : taskProjectId ===
            selectedProject;

      return (
        searchMatch &&
        statusMatch &&
        projectMatch
      );
    });

    switch (sortBy) {
      case "newest":
        result.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );
        break;

      case "oldest":
        result.sort(
          (a, b) =>
            new Date(a.createdAt) -
            new Date(b.createdAt)
        );
        break;

      case "due":
        result.sort(
          (a, b) =>
            new Date(a.dueDate) -
            new Date(b.dueDate)
        );
        break;

      case "priority":
        const order = {
          High: 1,
          Medium: 2,
          Low: 3,
        };

        result.sort(
          (a, b) =>
            order[a.priority] -
            order[b.priority]
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    tasks,
    status,
    selectedProject,
    sortBy,
    search,
  ]);

  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-white">
            Tasks
          </h1>

          <p className="mt-3 text-slate-400">
            Organize your work
            beautifully.
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/create-task")
          }
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white"
        >
          <Plus size={20} />
          New Task
        </button>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <select
          value={selectedProject}
          onChange={(e) =>
            setSelectedProject(
              e.target.value
            )
          }
          className="w-64 rounded-2xl border border-white/10 bg-[#151823] px-5 py-3 text-white"
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

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
          className="w-64 rounded-2xl border border-white/10 bg-[#151823] px-5 py-3 text-white"
        >
          <option value="newest">
            Newest First
          </option>

          <option value="oldest">
            Oldest First
          </option>

          <option value="due">
            Due Date
          </option>

          <option value="priority">
            Priority
          </option>
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