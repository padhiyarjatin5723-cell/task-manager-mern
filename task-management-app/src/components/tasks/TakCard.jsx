import {
  CalendarDays,
  Flag,
  Pencil,
  Trash2,
  CheckCircle2,
  Clock3,
  LoaderCircle,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import DeleteModal from "../common/DeleteModal";
import { deleteTask } from "../../services/task/deleteTask.service";

function TaskCard({
  task,
  refreshTasks,
}) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return {
          icon: <CheckCircle2 size={16} />,
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
        };

      case "In Progress":
        return {
          icon: (
            <LoaderCircle
              size={16}
              className="animate-spin"
            />
          ),
          color: "text-cyan-400",
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/20",
        };

      default:
        return {
          icon: <Clock3 size={16} />,
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
        };
    }
  };

  const getPriority = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-400 bg-red-500/10";

      case "Medium":
        return "text-yellow-400 bg-yellow-500/10";

      default:
        return "text-emerald-400 bg-emerald-500/10";
    }
  };

  const status = getStatus(task.status);

  const handleDelete = async () => {
    try {

      await deleteTask(task._id);

      toast.success("Task Deleted");

      setOpen(false);

      refreshTasks();

    } catch (err) {

      console.log(err);

      toast.error("Delete Failed");

    }
  };

  return (
    <>

      <DeleteModal
        open={open}
        onClose={() => setOpen(false)}
        onDelete={handleDelete}
      />

      <motion.div
        whileHover={{
          y: -8,
        }}
        transition={{
          duration: .25,
        }}
        className={`group rounded-[30px] border ${status.border} bg-[#151823]/90 backdrop-blur-3xl p-7 shadow-[0_20px_60px_rgba(0,0,0,.35)]`}
      >

        <div className="flex justify-between">

          <div>

            <h2 className="text-2xl font-bold text-white">
              {task.title}
            </h2>

            <p className="mt-3 text-slate-400">
              {task.description || "No description"}
            </p>

          </div>

          <div className={status.color}>
            {status.icon}
          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-3">

          <span className={`rounded-xl px-4 py-2 ${status.bg} ${status.color}`}>
            {task.status}
          </span>

          <span className={`rounded-xl px-4 py-2 ${getPriority(task.priority)}`}>
            <Flag
              size={14}
              className="inline mr-2"
            />
            {task.priority}
          </span>

          <span className="rounded-xl bg-white/5 px-4 py-2 text-slate-300">

            <CalendarDays
              size={14}
              className="inline mr-2"
            />

            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No Due Date"}

          </span>

        </div>

        <div className="mt-8 flex gap-3">

          <button
            onClick={() =>
              navigate(`/edit-task/${task._id}`)
            }
            className="flex-1 rounded-2xl bg-violet-600 py-3 font-semibold text-white hover:bg-violet-500"
          >
            <Pencil
              size={18}
              className="inline mr-2"
            />
            Edit
          </button>

          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </motion.div>

    </>
  );
}

export default TaskCard;