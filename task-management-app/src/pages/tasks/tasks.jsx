import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";

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

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // ✅ Updated Delete Function
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredTasks = tasks
    .filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : task.status === statusFilter;

      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      if (sortBy === "Newest") {
        return new Date(b.dueDate) - new Date(a.dueDate);
      }

      return new Date(a.dueDate) - new Date(b.dueDate);
    });

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-6">
            Tasks
          </h1>

          <div className="flex gap-4 mb-6 flex-wrap">

            <div className="w-80">
              <Input
                type="text"
                placeholder="Search Tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="w-60">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="All">All Tasks</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <div className="w-60">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>

          </div>

          <table className="w-full bg-white rounded-xl shadow">

            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-4">Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredTasks.length === 0 ? (

                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-500"
                  >
                    No Tasks Found
                  </td>
                </tr>

              ) : (

                filteredTasks.map((task) => (

                  <tr
                    key={task._id}
                    className="text-center border-b"
                  >

                    <td className="p-4">
                      {task.title}
                    </td>

                    <td>
                      {task.description}
                    </td>

                    <td>
                      {task.status}
                    </td>

                    <td>
                      {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString()
                        : "-"}
                    </td>

                    <td>

                      <Link to={`/edit-task/${task._id}`}>
                        <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                          Edit
                        </button>
                      </Link>

                      <button
                        onClick={() => handleDelete(task._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </main>

      </div>

    </div>
  );
}

export default Tasks;