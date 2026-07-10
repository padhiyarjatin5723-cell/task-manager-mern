import {
  FolderKanban,
  Pencil,
  Trash2,
} from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="group rounded-[30px] border border-white/10 bg-[#151823]/90 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
        <FolderKanban size={34} />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        {project.name}
      </h2>

      <p className="mt-3 min-h-[48px] text-slate-400">
        {project.description?.trim()
          ? project.description
          : "No description added."}
      </p>

      <div className="mt-8 flex gap-3">

        <button
          className="flex-1 rounded-2xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-500"
        >
          <Pencil
            size={18}
            className="mr-2 inline"
          />
          Edit
        </button>

        <button
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={18} />
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;