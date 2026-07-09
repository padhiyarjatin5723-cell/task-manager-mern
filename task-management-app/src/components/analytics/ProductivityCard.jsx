import {
  Trophy,
  TrendingUp,
} from "lucide-react";

function ProductivityCard({ analytics }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 p-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-white/80">
            Productivity Score
          </p>

          <h2 className="mt-3 text-6xl font-black text-white">
            {analytics.completionRate}%
          </h2>

          <p className="mt-4 text-white/80">
            Based on your completed tasks.
          </p>

        </div>

        <div className="space-y-5 text-white">

          <Trophy size={48} />

          <TrendingUp size={48} />

        </div>

      </div>

    </div>
  );
}

export default ProductivityCard;