import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", tasks: 2 },
  { day: "Tue", tasks: 5 },
  { day: "Wed", tasks: 3 },
  { day: "Thu", tasks: 7 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 9 },
  { day: "Sun", tasks: 4 },
];

function WeeklyChart() {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-7">

      <h2 className="text-2xl font-bold text-white">
        Weekly Productivity
      </h2>

      <p className="mt-2 text-slate-400">
        Tasks completed this week
      </p>

      <div className="mt-8 h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid stroke="#2a2d3a" />

            <XAxis dataKey="day" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="tasks"
              stroke="#8b5cf6"
              strokeWidth={4}
              dot={{
                r: 5,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default WeeklyChart;