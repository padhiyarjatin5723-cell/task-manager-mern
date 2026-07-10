import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#10b981",
  "#f97316",
  "#06b6d4",
];

function StatusPieChart({ analytics }) {
  const data = [
    {
      name: "Completed",
      value: analytics.completed,
    },
    {
      name: "Pending",
      value: analytics.pending,
    },
    {
      name: "In Progress",
      value: analytics.inProgress,
    },
  ];

  return (
    <div className="h-full rounded-[30px] border border-white/10 bg-[#151823]/90 p-7">

      <h2 className="text-2xl font-bold text-white">
        Task Status
      </h2>

      <p className="mt-2 text-slate-400">
        Current task distribution
      </p>

      <div className="mt-6 flex h-[420px] items-center justify-center"> 

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
            >

              {data.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default StatusPieChart;