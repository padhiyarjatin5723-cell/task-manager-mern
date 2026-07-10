import { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import AnalyticsGrid from "../../components/analytics/AnalyticsGrid";
import WeeklyChart from "../../components/analytics/WeeklyChart";

function Analytics() {
  const [analytics] = useState({
    total: 10,
    completed: 5,
    pending: 3,
    inProgress: 2,
    completionRate: 50,
    weekly: [],
  });

  return (
    <AppLayout>

  <AnalyticsGrid analytics={analytics} />

  <div className="mt-8">
    <ProductivityCard analytics={analytics} />
  </div>


  {/* <StatusPieChart analytics={analytics} /> */}

  {/* <ProductivityCard analytics={analytics} /> */}

</AppLayout>
  );
}

export default Analytics;