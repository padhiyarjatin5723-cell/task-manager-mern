import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  LoaderCircle,
  Flag,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function RecentTasks({ tasks }) {
  const navigate = useNavigate();

  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return {
          icon: <CheckCircle2 size={18} />,
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/20",
        };

      case "In Progress":
        return {
          icon: <LoaderCircle size={18} className="animate-spin" />,
          color: "text-cyan-400",
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/20",
        };

      default:
        return {
          icon: <Clock3 size={18} />,
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/20",
        };
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "text-red-400";
      case "Medium":
        return "text-yellow-400";
      default:
        return "text-emerald-400";
    }
  };

  return (
    <div className="rounded-[30px] border border-white/10 bg-[#151823]/90 backdrop-blur-3xl p-7 shadow-[0_20px_60px_rgba(0,0,0,.35)]">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black text-white">
            Recent Tasks
          </h2>

          <p className="mt-2 text-slate-400">
            Latest activity
          </p>

        </div>

        <button
          onClick={() => navigate("/tasks")}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >

          View All

          <ArrowRight size={16} />

        </button>

      </div>

      <div className="space-y-4">

        {tasks.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-white/10 py-14 text-center">

            <h3 className="text-lg font-bold text-white">
              No Tasks Yet
            </h3>

            <p className="mt-2 text-slate-500">
              Create your first task.
            </p>

          </div>

        ) : (

          tasks.slice(0, 5).map((task, index) => {

            const status = getStatus(task.status);

            return (

              <motion.div
                key={task._id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className={`rounded-2xl border ${status.border} ${status.bg} p-5`}
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-bold text-white">
                      {task.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-400">
                      {task.description || "No description"}
                    </p>

                  </div>

                  <div className={status.color}>
                    {status.icon}
                  </div>

                </div>

                <div className="mt-5 flex flex-wrap gap-3 text-sm">

                  <span className={`rounded-lg px-3 py-1 ${status.bg} ${status.color}`}>
                    {task.status}
                  </span>

                  <span className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-slate-300">

                    <Flag size={14} />

                    <span className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </span>

                  </span>

                  <span className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-slate-300">

                    <CalendarDays size={14} />

                    {task.dueDate
                      ? new Date(task.dueDate).toLocaleDateString()
                      : "No Due Date"}

                  </span>

                </div>

              </motion.div>

            );

          })

        )}

      </div>

    </div>
  );
}

export default RecentTasks;