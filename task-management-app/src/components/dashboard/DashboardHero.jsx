import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DashboardHero() {
  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "User";

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#161b33] via-[#191d3f] to-[#24173c] p-10 shadow-[0_25px_80px_rgba(0,0,0,.45)]">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute -bottom-20 left-20 h-60 w-60 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between">

        <div>

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">

            🚀 TaskFlow Workspace

          </span>

          <h1 className="mt-6 text-6xl font-black leading-tight text-white">

            {greeting},

            <br />

            {username}

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Stay focused, manage deadlines, and finish your work faster with a
            clean productivity workspace.

          </p>

        </div>

        <button
          onClick={() => navigate("/create-task")}
          className="group mt-10 flex items-center gap-3 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-5 text-lg font-bold text-white transition hover:scale-105 lg:mt-0"
        >

          Create Task

          <ArrowRight
            size={22}
            className="transition group-hover:translate-x-1"
          />

        </button>

      </div>

    </section>
  );
}

export default DashboardHero;