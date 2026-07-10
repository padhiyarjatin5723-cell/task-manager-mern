import { useEffect, useState } from "react";

import AppLayout from "../../layouts/AppLayout";
import ActivityCard from "../../components/dashboard/ActivityCard";
import DashboardHero from "../../components/dashboard/DashboardHero";
import StatsGrid from "../../components/dashboard/StatsGrid";
import RecentTasks from "../../components/dashboard/RecentTasks";

import {
  getDashboardStats,
  getDashboardTasks,
} from "../../services/dashboard/dashboard.service";

import { getProjects } from "../../services/project/project.service";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    inProgress: 0,
  });

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [selectedProject, setSelectedProject] = useState("All");

  useEffect(() => {
    loadProjects();
  }, []);

  useEffect(() => {
    loadDashboard();
  }, [selectedProject]);

  const loadProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const [statsRes, tasksRes] = await Promise.all([
        getDashboardStats(selectedProject),
        getDashboardTasks(),
      ]);

      setStats(statsRes.data);

      setTasks(
        selectedProject === "All"
          ? tasksRes.data
          : tasksRes.data.filter((task) => {
              const taskProjectId =
                typeof task.project === "string"
                  ? task.project
                  : task.project?._id;

              return taskProjectId === selectedProject;
            })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AppLayout>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="h-40 animate-pulse rounded-[30px] bg-[#151823]/90" />
          <div className="h-40 animate-pulse rounded-[30px] bg-[#151823]/90" />
          <div className="h-40 animate-pulse rounded-[30px] bg-[#151823]/90" />
          <div className="h-40 animate-pulse rounded-[30px] bg-[#151823]/90" />

        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2 h-[330px] animate-pulse rounded-[30px] bg-[#151823]/90" />

          <div className="h-[330px] animate-pulse rounded-[30px] bg-[#151823]/90" />

        </div>

      </AppLayout>
    );
  }

  return (
    <AppLayout>

      <DashboardHero />

      <div className="mt-8">

        <StatsGrid stats={stats} />

      </div>

      <div className="grid gap-8 mt-8 xl:grid-cols-3">

        <div className="xl:col-span-2">

          <ActivityCard stats={stats} />

        </div>

        <RecentTasks tasks={tasks} />

      </div>

    </AppLayout>
  );
}

export default Dashboard;