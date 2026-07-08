import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";

function QuickStats({ stats }) {

  const completion =
    stats.total === 0
      ? 0
      : Math.round((stats.completed / stats.total) * 100);

  const cards = [
    {
      title: "Total",
      value: stats.total,
      icon: <FaTasks className="text-indigo-600 text-2xl" />,
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <FaCheckCircle className="text-green-600 text-2xl" />,
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <FaClock className="text-orange-500 text-2xl" />,
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: <FaSpinner className="text-cyan-600 text-2xl" />,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-8">
        Quick Stats
      </h2>

      <div className="space-y-5">

        {cards.map((card) => (

          <div
            key={card.title}
            className="flex justify-between items-center bg-slate-50 rounded-2xl p-4"
          >

            <div className="flex items-center gap-3">

              {card.icon}

              <span className="font-medium">
                {card.title}
              </span>

            </div>

            <span className="text-xl font-bold">
              {card.value}
            </span>

          </div>

        ))}

      </div>

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span>Completion</span>

          <span className="font-bold">
            {completion}%
          </span>

        </div>

        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

          <div
            className="h-full bg-gradient-to-r from-green-500 to-emerald-600"
            style={{
              width: `${completion}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

export default QuickStats;