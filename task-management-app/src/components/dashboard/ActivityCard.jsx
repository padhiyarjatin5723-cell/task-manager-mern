function ActivityCard({ stats }) {
  const percentage =
    stats.total === 0
      ? 0
      : Math.round((stats.completed / stats.total) * 100);

  return (
    <div className="group rounded-[30px] border border-white/10 bg-[#151823]/90 backdrop-blur-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/30">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Productivity
          </p>

          <h2 className="mt-2 text-5xl font-black text-white">
            {stats.completed}/{stats.total}
          </h2>

          <p className="mt-3 text-slate-400">
            Tasks completed
          </p>

        </div>

        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-5xl shadow-lg transition-all duration-500 group-hover:scale-110">
          🚀
        </div>

      </div>

      <div className="mt-10">

        <div className="mb-3 flex justify-between">

          <span className="text-slate-400">
            Progress
          </span>

          <span className="font-semibold text-emerald-400">
            {percentage}%
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default ActivityCard;