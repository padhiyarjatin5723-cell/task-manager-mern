import {
  CheckCircle2,
  Clock3,
  ListTodo,
  LoaderCircle,
  TrendingUp,
} from "lucide-react";

import CountUp from "react-countup";

function AnalyticsGrid({ analytics }) {

  const cards = [
    {
      title: "Total Tasks",
      value: analytics.total,
      color: "from-violet-600 to-indigo-600",
      bg: "bg-violet-500/10",
      text: "text-violet-400",
      icon: <ListTodo size={30} />,
    },
    {
      title: "Completed",
      value: analytics.completed,
      color: "from-emerald-600 to-green-600",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      icon: <CheckCircle2 size={30} />,
    },
    {
      title: "Pending",
      value: analytics.pending,
      color: "from-orange-500 to-yellow-500",
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      icon: <Clock3 size={30} />,
    },
    {
      title: "In Progress",
      value: analytics.inProgress,
      color: "from-cyan-500 to-blue-500",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400",
      icon: (
        <LoaderCircle
          size={30}
          className="animate-spin"
        />
      ),
    },
  ];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="group rounded-[30px] border border-white/10 bg-[#151823]/90 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-[0_20px_60px_rgba(124,58,237,.25)]"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400">

                {card.title}

              </p>

              <h2 className="mt-4 text-5xl font-black text-white">

                <CountUp
                  end={card.value}
                  duration={1.5}
                />

              </h2>

            </div>

            <div
              className={`rounded-2xl ${card.bg} p-4 ${card.text}`}
            >

              {card.icon}

            </div>

          </div>

          <div className="mt-8">

            <div className="h-2 overflow-hidden rounded-full bg-white/5">

              <div
                className={`h-full rounded-full bg-gradient-to-r ${card.color}`}
                style={{
                  width: `${
                    analytics.total === 0
                      ? 0
                      : (card.value /
                          analytics.total) *
                        100
                  }%`,
                }}
              />

            </div>

          </div>

          <div className="mt-5 flex items-center justify-between">

            <span className="text-sm text-slate-500">

              Performance

            </span>

            <span className="flex items-center gap-1 text-sm font-semibold text-emerald-400">

              <TrendingUp size={15} />

              {analytics.total === 0
                ? 0
                : Math.round(
                    (card.value /
                      analytics.total) *
                      100
                  )}
              %

            </span>

          </div>

        </div>

      ))}

    </div>

  );

}

export default AnalyticsGrid;