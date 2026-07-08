import { useEffect, useState } from "react";

import Input from "../../components/input/input";
import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Loader from "../../components/loader/loader";
import TaskCard from "../../components/TaskCard/TaskCard";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

import {
  getTasks,
  deleteTask,
} from "../../services/task/task.service";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const loadTasks = async () => {
    try {
      setLoading(true);

      const res = await getTasks();

      setTasks(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      loadTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      const matchSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All"
          ? true
          : task.status === statusFilter;

      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      if (sortBy === "Newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }

      return new Date(a.createdAt) - new Date(b.createdAt);
    });

  if (loading) {
    return <Loader />;
  }

  return (
    <PageWrapper>

      <div className="bg-slate-100 min-h-screen">

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 p-8">

            <div className="flex justify-between items-center mb-8">

              <div>

                <h1 className="text-4xl font-bold">
                  Tasks
                </h1>

                <p className="text-slate-500 mt-2">
                  Manage all your daily work efficiently
                </p>

              </div>

              <div className="bg-indigo-100 text-indigo-700 px-5 py-3 rounded-2xl font-semibold">
                {filteredTasks.length} Tasks
              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">

              <div className="grid lg:grid-cols-3 gap-5">

                <Input
                  type="text"
                  placeholder="Search Tasks..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <select
                  className="border border-slate-200 rounded-2xl px-4 h-14"
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                >
                  <option value="All">
                    All
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                </select>

                <select
                  className="border border-slate-200 rounded-2xl px-4 h-14"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                >
                  <option value="Newest">
                    Newest
                  </option>

                  <option value="Oldest">
                    Oldest
                  </option>

                </select>

              </div>

            </div>

            {filteredTasks.length === 0 ? (

              <div className="bg-white rounded-3xl shadow-xl p-20 text-center">

                <h2 className="text-3xl font-bold">
                  No Tasks Found
                </h2>

                <p className="text-slate-500 mt-4">
                  Create your first task 🚀
                </p>

              </div>

            ) : (

              <div className="grid xl:grid-cols-2 gap-7">

                {filteredTasks.map((task) => (

                  <TaskCard
                    key={task._id}
                    task={task}
                    handleDelete={handleDelete}
                  />

                ))}

              </div>

            )}

          </main>

        </div>

      </div>

    </PageWrapper>
  );
}

export default Tasks;