import {
  CalendarDays,
  Pencil,
  Trash2,
  Flag,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function TaskItem({
  task,
  removeTask,
}) {
  const priorityColor = {
    High: "bg-red-500",
    Medium: "bg-yellow-500",
    Low: "bg-emerald-500",
  };

  const statusColor = {
    Pending:
      "bg-orange-500/20 text-orange-300",

    "In Progress":
      "bg-cyan-500/20 text-cyan-300",

    Completed:
      "bg-emerald-500/20 text-emerald-300",
  };

  return (

    <motion.div

      whileHover={{
        y: -8,
        scale: 1.02,
      }}

      transition={{
        duration: .25,
      }}

      className="
      group
      relative
      overflow-hidden
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.05]
      backdrop-blur-3xl
      p-6
      shadow-xl
      "

    >

      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-violet-500 to-cyan-500"/>

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">

            {task.title}

          </h2>

          <p className="mt-3 line-clamp-3 text-slate-400">

            {task.description || "No description"}

          </p>

        </div>

        <div
          className={`h-4 w-4 rounded-full ${priorityColor[task.priority]}`}
        />

      </div>

      <div className="mt-8 flex flex-wrap gap-3">

        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${statusColor[task.status]}`}
        >
          {task.status}
        </span>

        <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">

          <Flag size={16} />

          {task.priority}

        </span>

        <span className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">

          <CalendarDays size={16} />

          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}

        </span>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <Link
          to={`/edit-task/${task._id}`}
          className="rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
        >

          <div className="flex items-center gap-2">

            <Pencil size={17} />

            Edit

          </div>

        </Link>

        <button
          onClick={() => removeTask(task._id)}
          className="rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700"
        >

          <div className="flex items-center gap-2">

            <Trash2 size={17} />

            Delete

          </div>

        </button>

      </div>

    </motion.div>

  );

}

export default TaskItem;