import { useEffect, useState } from "react";

import AppLayout from "../../layouts/AppLayout";

import AnalyticsGrid from "../../components/analytics/AnalyticsGrid";
import WeeklyChart from "../../components/analytics/WeeklyChart";
import StatusPieChart from "../../components/analytics/StatusPieChart";
import ProductivityCard from "../../components/analytics/ProductivityCard";

import { getAnalytics } from "../../services/analytics/analytics.service";

function Analytics() {
  const [analytics, setAnalytics] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    inProgress: 0,
    completionRate: 0,
  });

  useEffect(() => {
    const loadAnalytics = async () => {
      try {
        const res = await getAnalytics();
        setAnalytics(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadAnalytics();
  }, []);

  return (
    <AppLayout>

      <div className="mb-10">

        <h1 className="text-3xl md:text-5xl font-black text-white">
          Analytics
        </h1>

        <p className="mt-3 text-slate-400">
          Track your productivity and performance.
        </p>

      </div>

      <AnalyticsGrid analytics={analytics} />

      <div className="grid gap-8 xl:grid-cols-3 mt-8">

        <div className="xl:col-span-2">

          <WeeklyChart analytics={analytics} />

        </div>

        <StatusPieChart analytics={analytics} />

      </div>

      <div className="mt-8">

        <ProductivityCard analytics={analytics} />

      </div>

    </AppLayout>
  );
}

export default Analytics;
