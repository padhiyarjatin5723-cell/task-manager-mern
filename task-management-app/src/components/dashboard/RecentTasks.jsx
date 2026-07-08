import {
  CheckCircle2,
  Clock3,
  LoaderCircle,
  AlertTriangle,
} from "lucide-react";

function RecentTasks({ tasks }) {
  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return {
          icon: <CheckCircle2 size={18} />,
          color: "bg-emerald-500/20 text-emerald-400",
        };

      case "In Progress":
        return {
          icon: <LoaderCircle size={18} className="animate-spin" />,
          color: "bg-cyan-500/20 text-cyan-400",
        };

      default:
        return {
          icon: <Clock3 size={18} />,
          color: "bg-orange-500/20 text-orange-400",
        };
    }
  };

  const getPriority = (priority) => {
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
    <div className="rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-7">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Tasks
          </h2>

          <p className="text-slate-400 mt-1">
            Latest activity
          </p>

        </div>

        <div className="rounded-xl bg-violet-600/20 px-4 py-2 text-violet-300 text-sm">
          {tasks.length} Tasks
        </div>

      </div>

      <div className="space-y-4">

        {tasks.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-white/10 py-14 text-center">

            <AlertTriangle
              size={34}
              className="mx-auto text-slate-500"
            />

            <p className="mt-4 text-slate-400">
              No tasks yet
            </p>

          </div>

        ) : (

          tasks.slice(0, 5).map((task) => {

            const status = getStatus(task.status);

            return (

              <div
                key={task._id}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition-all duration-300 hover:border-violet-500/30 hover:bg-white/[0.05]"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold text-white">
                      {task.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                      {task.description}
                    </p>

                  </div>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${status.color}`}
                  >
                    {status.icon}
                  </div>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                  >
                    {task.status}
                  </span>

                  <span
                    className={`text-sm font-medium ${getPriority(task.priority)}`}
                  >
                    {task.priority} Priority
                  </span>

                </div>

              </div>

            );

          })

        )}

      </div>

    </div>
  );
}

export default RecentTasks;
