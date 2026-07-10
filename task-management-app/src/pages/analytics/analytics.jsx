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
    weekly: [],
  });

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const res = await getAnalytics();
      console.log("Analytics API Response:", res.data);
      setAnalytics(res.data);
    } catch (err) {
      console.error("Analytics Error:", err);
    }
  };

  return (
    <AppLayout>
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          Analytics
        </h1>

        <p className="mt-2 text-slate-400">
          Track your productivity and performance.
        </p>
      </div>

      <AnalyticsGrid analytics={analytics} />

      <div className="mt-8">
        <WeeklyChart analytics={analytics} />
      </div>

      <div className="mt-8">
        <StatusPieChart analytics={analytics} />
      </div>

      <div className="mt-8">
        <ProductivityCard analytics={analytics} />
      </div>
    </AppLayout>
  );
}

export default Analytics;