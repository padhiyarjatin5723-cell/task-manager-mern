function ActivityCard({ stats }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 text-sm">
            Productivity
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {stats.completed}/{stats.total}
          </h2>

          <p className="mt-2 text-slate-500">
            Tasks completed
          </p>
        </div>

        <div className="h-24 w-24 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 flex items-center justify-center">
          <span className="text-3xl">
            🚀
          </span>
        </div>
      </div>

      <div className="mt-8">
        <div className="h-3 rounded-full bg-slate-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
            style={{
              width:
                stats.total === 0
                  ? "0%"
                  : `${(stats.completed / stats.total) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;