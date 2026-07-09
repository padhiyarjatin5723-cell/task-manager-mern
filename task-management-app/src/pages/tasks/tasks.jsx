import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

import AppLayout from "../../layouts/AppLayout";

import SearchBar from "../../components/tasks/SearchBar";
import FilterBar from "../../components/tasks/FilterBar";
import TaskGrid from "../../components/tasks/TaskGrid";

import { getTasks } from "../../services/task/task.service";

function Tasks() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {

      const searchMatch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const statusMatch =
        status === "All"
          ? true
          : task.status === status;

      return searchMatch && statusMatch;

    });
  }, [tasks, search, status]);

  return (
    <AppLayout>

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black text-white">
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

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterBar
        status={status}
        setStatus={setStatus}
      />

      <TaskGrid
        tasks={filteredTasks}
        refreshTasks={loadTasks}
      />

    </AppLayout>
  );
}

export default Tasks;