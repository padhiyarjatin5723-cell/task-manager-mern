import { motion } from "framer-motion";
import {
  FaRegCalendarAlt,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function TaskCard({ task, handleDelete }) {
  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-600",
  };

  const statusColor = {
    Pending: "bg-orange-100 text-orange-600",
    "In Progress": "bg-cyan-100 text-cyan-700",
    Completed: "bg-green-100 text-green-700",
  };

  const categoryColor = {
    Work: "bg-indigo-100 text-indigo-700",
    Study: "bg-purple-100 text-purple-700",
    Personal: "bg-pink-100 text-pink-700",
  };

  const overdue =
    task.isOverdue ||
    (task.status !== "Completed" &&
      new Date(task.dueDate) < new Date());

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`group rounded-[30px] border p-7 backdrop-blur-xl shadow-xl transition
        ${
          overdue
            ? "border-red-500 bg-red-50 shadow-red-300/40"
            : "border-slate-200 bg-white/80 hover:shadow-indigo-300/30"
        }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-800">
            {task.title}
          </h2>

          <p className="mt-2 text-slate-500 leading-7">
            {task.description || "No description"}
          </p>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-bold ${
            priorityColor[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            statusColor[task.status]
          }`}
        >
          {task.status}
        </span>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${
            categoryColor[task.category]
          }`}
        >
          {task.category}
        </span>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="flex items-center text-slate-500">
          <FaRegCalendarAlt />

          <span className="ml-3">
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        </div>

        {overdue && (
          <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            OVERDUE
          </span>
        )}
      </div>

      <div className="mt-8 flex gap-4">
        <Link
          to={`/edit-task/${task._id}`}
          className="flex-1"
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
            <FaEdit />
            Edit
          </button>
        </Link>

        <button
          onClick={() => handleDelete(task._id)}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600"
        >
          <FaTrash />
          Delete
        </button>
      </div>
    </motion.div>
  );
}

export default TaskCard;