import { useEffect, useState } from "react";
import {
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaSpinner,
} from "react-icons/fa";

import Loader from "../../components/loader/loader";
import AppLayout from "../../components/layout/AppLayout";
import DashboardCard from "../../components/dashboardcard/DashboardCard";
import ProductivityChart from "../../components/charts/ProductivityChart";
import QuickStats from "../../components/dashboard/QuickStats";
import WelcomeCard from "../../components/dashboard/WelcomeCard";
import TaskCalendar from "../../components/calendar/TaskCalendar";

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

  const cards = [
    {
      title: "Total Tasks",
      value: stats.total,
      icon: <FaTasks className="text-4xl" />,
      color: "from-indigo-600 via-violet-600 to-purple-600",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: <FaCheckCircle className="text-4xl" />,
      color: "from-emerald-500 to-green-600",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: <FaClock className="text-4xl" />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "In Progress",
      value: stats.inProgress,
      icon: <FaSpinner className="text-4xl" />,
      color: "from-cyan-500 to-sky-600",
    },
  ];

  return (
    <AppLayout>

      <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-700 p-10 mb-10 shadow-2xl">

        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              🚀 Productivity Dashboard
            </span>

            <h1 className="mt-6 text-6xl font-black text-white leading-tight">
              Welcome Back 👋
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-indigo-100">
              Stay organized, monitor progress and complete your work faster
              with your personal workspace.
            </p>

          </div>

          <div className="mt-8 lg:mt-0">

            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-indigo-700 shadow-xl hover:scale-105 duration-300">
              + Create New Task
            </button>

          </div>

        </div>

      </div>

      <div className="grid gap-7 mb-8 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (

          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />

        ))}

      </div>

      <div className="mb-8">

        <WelcomeCard />

      </div>

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="xl:col-span-2 space-y-8">

          <ProductivityChart
            stats={stats}
          />

          <TaskCalendar
            tasks={tasks}
          />

        </div>

        <QuickStats
          stats={stats}
        />

      </div>

    </AppLayout>
  );
}

export default Dashboard;