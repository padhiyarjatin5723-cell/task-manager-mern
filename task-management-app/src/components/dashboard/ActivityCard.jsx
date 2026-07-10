import {
  Trophy,
  TrendingUp,
  CheckCircle2,
  Clock3,
  LoaderCircle,
} from "lucide-react";

import { motion } from "framer-motion";

function ActivityCard({ stats }) {

  const percentage =
    stats.total === 0
      ? 0
      : Math.round(
          (stats.completed /
            stats.total) *
            100
        );

  const level =
    percentage >= 80
      ? "Excellent"
      : percentage >= 60
      ? "Good"
      : percentage >= 40
      ? "Average"
      : "Needs Improvement";

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .4,
      }}
      className="group rounded-[30px] border border-white/10 bg-[#151823]/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40"
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-400">

            Productivity Score

          </p>

          <h2 className="mt-3 text-6xl font-black text-white">

            {percentage}%

          </h2>

          <p className="mt-3 text-emerald-400 font-semibold">

            {level}

          </p>

        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-xl transition group-hover:scale-110">

          <Trophy size={42} />

        </div>

      </div>

      <div className="mt-10">

        <div className="mb-3 flex justify-between">

          <span className="text-slate-400">

            Overall Progress

          </span>

          <span className="font-bold text-violet-400">

            {percentage}%

          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${percentage}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500"
          />

        </div>

      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-emerald-500/10 p-4 text-center">

          <CheckCircle2
            className="mx-auto mb-2 text-emerald-400"
            size={24}
          />

          <p className="text-xs text-slate-400">

            Completed

          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">

            {stats.completed}

          </h3>

        </div>

        <div className="rounded-2xl bg-orange-500/10 p-4 text-center">

          <Clock3
            className="mx-auto mb-2 text-orange-400"
            size={24}
          />

          <p className="text-xs text-slate-400">

            Pending

          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">

            {stats.pending}

          </h3>

        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-4 text-center">

          <LoaderCircle
            className="mx-auto mb-2 animate-spin text-cyan-400"
            size={24}
          />

          <p className="text-xs text-slate-400">

            Progress

          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">

            {stats.inProgress}

          </h3>

        </div>

      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-violet-400">

        <TrendingUp size={18} />

        <span className="font-semibold">

          Keep improving every day 🚀

        </span>

      </div>

    </motion.div>

  );

}

export default ActivityCard;