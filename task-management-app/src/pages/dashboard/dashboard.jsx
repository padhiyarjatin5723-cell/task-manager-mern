import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Loader from "../../components/Loader/Loader";

import {
  getDashboardStats,
} from "../../services/dashboard/dashboard.service";

function Dashboard() {

  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    inProgress: 0,
  });

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        setLoading(true);

        const res = await getDashboardStats();

        setStats(res.data);

      } catch (error) {

        console.log(error);

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
    <div className="bg-slate-100 min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid grid-cols-4 gap-6">

            <DashboardCard
              title="Total Tasks"
              count={stats.total}
            />

            <DashboardCard
              title="Pending"
              count={stats.pending}
            />

            <DashboardCard
              title="Completed"
              count={stats.completed}
            />

            <DashboardCard
              title="In Progress"
              count={stats.inProgress}
            />

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;