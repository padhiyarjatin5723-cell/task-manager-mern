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
    return <Loader />;
  }

  return (
  <AppLayout>

    <div className="mb-8">

      <select
        value={selectedProject}
        onChange={(e) =>
          setSelectedProject(e.target.value)
        }
        className="w-72 rounded-2xl border border-white/10 bg-[#151823] px-5 py-3 text-white outline-none"
      >
        <option value="All">
          All Projects
        </option>

        {projects.map((project) => (

          <option
            key={project._id}
            value={project._id}
          >
            {project.name}
          </option>

        ))}
      </select>

    </div>

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
