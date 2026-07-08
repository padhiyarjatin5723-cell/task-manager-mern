import {
  CheckCircle2,
  Clock3,
  ListTodo,
  LoaderCircle,
} from "lucide-react";

function StatsGrid({ stats }) {
  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: <ListTodo size={34} />,
      border: "border-violet-500/20",
      glow: "from-violet-600/30 via-indigo-500/10 to-transparent",
      iconBg: "bg-violet-600/20",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <CheckCircle2 size={34} />,
      border: "border-emerald-500/20",
      glow: "from-emerald-500/25 via-green-500/10 to-transparent",
      iconBg: "bg-emerald-500/20",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <Clock3 size={34} />,
      border: "border-orange-500/20",
      glow: "from-orange-500/25 via-red-500/10 to-transparent",
      iconBg: "bg-orange-500/20",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: <LoaderCircle size={34} />,
      border: "border-cyan-500/20",
      glow: "from-cyan-500/25 via-sky-500/10 to-transparent",
      iconBg: "bg-cyan-500/20",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`group relative overflow-hidden rounded-[28px] border ${card.border} bg-white/[0.04] backdrop-blur-3xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(124,58,237,.25)]`}
        >

          <div
            className={`absolute inset-0 bg-gradient-to-br ${card.glow} opacity-0 transition duration-500 group-hover:opacity-100`}
          />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-6xl font-black text-white">
                  {card.value}
                </h2>

              </div>

              <div
                className={`rounded-2xl ${card.iconBg} p-4 text-white transition duration-500 group-hover:scale-110`}
              >
                {card.icon}
              </div>

            </div>

            <div className="mt-8 h-1 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                style={{
                  width:
                    stats.total === 0
                      ? "0%"
                      : `${(card.value / stats.total) * 100}%`,
                }}
              />

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StatsGrid;