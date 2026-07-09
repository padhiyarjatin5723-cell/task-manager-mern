import {
  CheckCircle2,
  Clock3,
  ListTodo,
  LoaderCircle,
} from "lucide-react";

function AnalyticsGrid({ analytics }) {
  const cards = [
    {
      title: "Total Tasks",
      value: analytics.total,
      icon: <ListTodo size={30} />,
    },
    {
      title: "Completed",
      value: analytics.completed,
      icon: <CheckCircle2 size={30} />,
    },
    {
      title: "Pending",
      value: analytics.pending,
      icon: <Clock3 size={30} />,
    },
    {
      title: "In Progress",
      value: analytics.inProgress,
      icon: <LoaderCircle size={30} />,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-[28px] border border-white/10 bg-[#151823] p-7"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-slate-400">
                {card.title}
              </p>

              <h2 className="mt-4 text-5xl font-black text-white">
                {card.value}
              </h2>

            </div>

            <div className="rounded-2xl bg-violet-600/20 p-4 text-violet-400">

              {card.icon}

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default AnalyticsGrid;