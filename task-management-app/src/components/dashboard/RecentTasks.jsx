import {
  CalendarDays,
  Circle,
  Clock3,
  CheckCircle2,
  LoaderCircle,
  Flag,
} from "lucide-react";

import { motion } from "framer-motion";

function RecentTasks({ tasks }) {
  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return {
          icon: <CheckCircle2 size={18} />,
          color: "text-emerald-400",
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
        };

      case "In Progress":
        return {
          icon: <LoaderCircle size={18} className="animate-spin" />,
          color: "text-cyan-400",
          bg: "bg-cyan-500/10",
          border: "border-cyan-500/30",
        };

      default:
        return {
          icon: <Clock3 size={18} />,
          color: "text-orange-400",
          bg: "bg-orange-500/10",
          border: "border-orange-500/30",
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

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-black text-white">
            Recent Activity
          </h2>

          <p className="mt-2 text-slate-400">
            Latest created tasks
          </p>

        </div>

        <div className="rounded-2xl bg-violet-600/10 border border-violet-500/20 px-4 py-2">

          <span className="text-violet-300 font-semibold">
            {tasks.length} Tasks
          </span>

        </div>

      </div>

      <div className="space-y-5">

        {tasks.length === 0 ? (

          <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">

            <Circle
              size={38}
              className="mx-auto text-slate-600"
            />

            <h3 className="mt-6 text-xl font-bold text-white">
              No Recent Tasks
            </h3>

            <p className="mt-2 text-slate-500">
              Create your first task to get started.
            </p>

          </div>

        ) : (

          tasks.map((task, index) => {

            const status = getStatus(task.status);

            return (

              <motion.div
                key={task._id}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .08,
                }}
                whileHover={{
                  x: 6,
                }}
                className={`rounded-3xl border ${status.border} ${status.bg} p-6 transition-all duration-300`}
              >

                <div className="flex justify-between items-start">

                  <div>

                    <h3 className="text-xl font-bold text-white">
                      {task.title}
                    </h3>

                    <p className="mt-2 text-slate-400 line-clamp-2">
                      {task.description || "No description"}
                    </p>

                  </div>

                  <div className={`${status.color}`}>
                    {status.icon}
                  </div>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  <span className={`rounded-xl px-4 py-2 text-sm font-semibold ${status.bg} ${status.color}`}>
                    {task.status}
                  </span>

                  <span className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-slate-300 text-sm">

                    <Flag size={15} />

                    <span className={getPriorityColor(task.priority)}>
                      {task.priority}
                    </span>

                  </span>

                  <span className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-slate-300 text-sm">

                    <CalendarDays size={15} />

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