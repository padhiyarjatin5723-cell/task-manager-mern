import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Completed",
    value: 48,
  },
  {
    name: "Pending",
    value: 22,
  },
  {
    name: "In Progress",
    value: 30,
  },
];

const COLORS = [
  "#10b981",
  "#f97316",
  "#06b6d4",
];

function StatusPieChart() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-7">

      <h2 className="text-2xl font-bold text-white">
        Task Status
      </h2>

      <div className="mt-6 h-[350px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
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

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default StatusPieChart;