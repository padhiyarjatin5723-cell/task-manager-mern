import { Plus, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function TaskHeader() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#14192e] via-[#171f39] to-[#25164f] p-8 shadow-[0_20px_80px_rgba(0,0,0,.35)]">

      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

            <Sparkles size={16} />

            Task Management

          </div>

          <h1 className="mt-6 text-5xl font-black text-white">

            Your Tasks

          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-400 leading-8">

            Organize your work, track progress and finish projects
            with a clean productivity workflow.

          </p>

        </div>

        <Link
          to="/create-task"
          className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-105"
        >

          <Plus size={22} />

          Create Task

        </Link>

      </div>

    </section>
  );
}

export default TaskHeader;