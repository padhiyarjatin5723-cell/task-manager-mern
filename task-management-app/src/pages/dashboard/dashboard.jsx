import { useEffect, useState } from "react";

import Loader from "../../components/loader/loader";
import AppLayout from "../../layouts/AppLayout";
import ActivityCard from "../../components/dashboard/ActivityCard";
import DashboardHero from "../../components/dashboard/DashboardHero";
import StatsGrid from "../../components/dashboard/StatsGrid";
import RecentTasks from "../../components/dashboard/RecentTasks";

import {
  getDashboardStats,
  getDashboardTasks,
} from "../../services/dashboard/dashboard.service";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    inProgress: 0,
  });

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [statsRes, tasksRes] = await Promise.all([
          getDashboardStats(),
          getDashboardTasks(),
        ]);

        setStats(statsRes.data);
        setTasks(tasksRes.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
  <AppLayout>

    <DashboardHero />

    <div className="mt-8">
      <StatsGrid
        stats={stats}
      />
    </div>

    <div className="grid xl:grid-cols-3 gap-8 mt-8">

      <div className="xl:col-span-2">

        <ActivityCard
          stats={stats}
        />

      </div>

      <RecentTasks
        tasks={tasks}
      />

    </div>

  </AppLayout>
);
}

export default Dashboard;