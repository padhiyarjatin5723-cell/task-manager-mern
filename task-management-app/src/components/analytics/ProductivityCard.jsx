import {
  Trophy,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

function ProductivityCard({
  analytics,
}) {
  const level =
    analytics.completionRate >= 80
      ? "Excellent"
      : analytics.completionRate >= 60
      ? "Good"
      : analytics.completionRate >= 40
      ? "Average"
      : "Needs Improvement";

  return (
    <div className="rounded-[30px] bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <p className="text-white/80">
            Productivity Score
          </p>

          <h2 className="mt-3 text-6xl font-black text-white">

            {analytics.completionRate}%

          </h2>

          <p className="mt-3 text-lg text-white/80">

            {level}

          </p>

        </div>

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-2xl bg-white/10 p-5">

            <CheckCircle2
              className="mb-3 text-white"
              size={34}
            />

            <p className="text-white/70">
              Completed
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">

              {analytics.completed}

            </h3>

          </div>

          <div className="rounded-2xl bg-white/10 p-5">

            <TrendingUp
              className="mb-3 text-white"
              size={34}
            />

            <p className="text-white/70">
              Total Tasks
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">

              {analytics.total}

            </h3>

          </div>

          <div className="col-span-2 rounded-2xl bg-white/10 p-5">

            <Trophy
              className="mb-3 text-white"
              size={34}
            />

            <p className="text-white/70">
              Performance
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">

              {analytics.completionRate >= 80
                ? "🏆 Outstanding"
                : analytics.completionRate >= 60
                ? "🚀 Great Job"
                : analytics.completionRate >= 40
                ? "👍 Keep Going"
                : "💪 Work Harder"}

            </h3>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductivityCard;