import {
  CheckCircle2,
  Clock3,
  ListTodo,
  LoaderCircle,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

function StatsGrid({ stats }) {
  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: <ListTodo size={32} />,
      color: "from-violet-600 via-indigo-600 to-blue-600",
      iconBg: "bg-violet-500/20",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <CheckCircle2 size={32} />,
      color: "from-emerald-500 to-green-600",
      iconBg: "bg-emerald-500/20",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <Clock3 size={32} />,
      color: "from-orange-500 to-red-500",
      iconBg: "bg-orange-500/20",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: <LoaderCircle size={32} />,
      color: "from-cyan-500 to-sky-600",
      iconBg: "bg-cyan-500/20",
    },
  ];

  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .35,
            delay: index * .08,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151823]/90 backdrop-blur-3xl shadow-[0_15px_50px_rgba(0,0,0,.35)]"
        >

          <div
            className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.color}`}
          />

          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-600/10 blur-3xl transition duration-500 group-hover:scale-150" />

          <div className="relative p-7">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-5 text-6xl font-black tracking-tight text-white">
                  {card.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl ${card.iconBg} p-4 text-white transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
              >
                {card.icon}
              </div>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                  style={{
                    width:
                      stats.total === 0
                        ? "0%"
                        : `${(card.value / stats.total) * 100}%`,
                  }}
                />

              </div>

              <div className="ml-4 flex items-center gap-1 text-emerald-400">

                <TrendingUp size={16} />

                <span className="text-sm font-semibold">

                  {stats.total === 0
                    ? 0
                    : Math.round(
                        (card.value / stats.total) * 100
                      )}

                  %

                </span>

              </div>

            </div>

          </div>

        </motion.div>

      ))}

    </div>
  );
}

export default StatsGrid;