import {
  CheckCircle2,
  Clock3,
  ListTodo,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Tasks Created",
    value: "124",
    icon: <ListTodo size={28} />,
  },
  {
    title: "Completed",
    value: "98",
    icon: <CheckCircle2 size={28} />,
  },
  {
    title: "Pending",
    value: "18",
    icon: <Clock3 size={28} />,
  },
  {
    title: "Efficiency",
    value: "92%",
    icon: <TrendingUp size={28} />,
  },
];

function AnalyticsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card) => (

        <div
          key={card.title}
          className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-7"
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-slate-400">
                {card.title}
              </p>

              <h2 className="mt-3 text-5xl font-black text-white">
                {card.value}
              </h2>

            </div>

            <div className="rounded-2xl bg-violet-600/20 p-4 text-violet-300">

              {card.icon}

            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default AnalyticsGrid;