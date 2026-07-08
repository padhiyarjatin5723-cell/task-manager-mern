import AppLayout from "../../components/layout/AppLayout";

import AnalyticsGrid from "../../components/analytics/AnalyticsGrid";
import WeeklyChart from "../../components/analytics/WeeklyChart";
import StatusPieChart from "../../components/analytics/StatusPieChart";
import ProductivityCard from "../../components/analytics/ProductivityCard";

function Analytics() {
  return (
    <AppLayout>
      <div className="mb-10">
        <h1 className="text-5xl font-black text-white">
          Analytics
        </h1>

        <p className="mt-3 text-slate-400">
          Productivity insights
        </p>
      </div>

      <AnalyticsGrid />

      <div className="grid xl:grid-cols-3 gap-8 mt-8">
        <div className="xl:col-span-2">
          <WeeklyChart />
        </div>

        <StatusPieChart />
      </div>

      <div className="mt-8">
        <ProductivityCard />
      </div>
    </AppLayout>
  );
}

export default Analytics;