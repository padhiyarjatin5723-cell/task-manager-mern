import { ArrowRight, Sparkles, Plus } from "lucide-react";
import { Link } from "react-router-dom";

function DashboardHero() {
  return (
    <section className="relative overflow-hidden rounded-[38px] border border-white/10 bg-gradient-to-br from-[#14192e] via-[#171f39] to-[#25164f] p-10 shadow-[0_30px_100px_rgba(0,0,0,.45)]">

      {/* Glow */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">

        <div className="max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

            <Sparkles size={16} />

            AI Powered Workspace

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight text-white">

            Organize.
            <br />
            Focus.
            <br />
            Deliver.

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            A premium productivity workspace designed for developers,
            students and teams. Manage tasks, track progress and stay
            focused with an elegant experience.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/create-task"
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
            >
              <Plus size={20} />

              Create Task

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white">

              View Analytics

            </button>

          </div>

        </div>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <p className="text-sm text-slate-400">

              Today's Goal

            </p>

            <h2 className="mt-3 text-4xl font-black text-white">

              5

            </h2>

            <p className="mt-2 text-sm text-slate-500">

              Tasks Planned

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <p className="text-sm text-slate-400">

              Productivity

            </p>

            <h2 className="mt-3 text-4xl font-black text-emerald-400">

              92%

            </h2>

            <p className="mt-2 text-sm text-slate-500">

              Weekly Score

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <p className="text-sm text-slate-400">

              Active Projects

            </p>

            <h2 className="mt-3 text-4xl font-black text-cyan-400">

              03

            </h2>

            <p className="mt-2 text-sm text-slate-500">

              Running

            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <p className="text-sm text-slate-400">

              Focus Time

            </p>

            <h2 className="mt-3 text-4xl font-black text-orange-400">

              4h

            </h2>

            <p className="mt-2 text-sm text-slate-500">

              Today

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardHero;