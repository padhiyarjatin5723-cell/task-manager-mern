import { useEffect, useState } from "react";
import AppLayout from "../../layouts/AppLayout";
import AnalyticsGrid from "../../components/analytics/AnalyticsGrid";

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

  {/* <WeeklyChart analytics={analytics} /> */}

  {/* <StatusPieChart analytics={analytics} /> */}

  {/* <ProductivityCard analytics={analytics} /> */}

</AppLayout>
  );
}

export default Analytics;