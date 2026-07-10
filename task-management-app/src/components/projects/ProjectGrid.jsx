import {
  FolderKanban,
  Plus,
} from "lucide-react";

import ProjectCard from "./ProjectCard";

function ProjectGrid({
  projects,
  refreshProjects,
}) {

  if (projects.length === 0) {

    return (

      <div className="mt-10 rounded-[32px] border border-dashed border-violet-500/30 bg-[#151823]/90 p-16 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">

          <FolderKanban size={46} />

        </div>

        <h2 className="mt-8 text-4xl font-black text-white">

          No Projects Yet

        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-400">

          Create a project to organize related tasks efficiently.

        </p>

        <button
          className="mt-8 inline-flex cursor-default items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white"
        >

          <Plus size={20} />

          Click "New Project"

        </button>

      </div>

    );

  }

  return (

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {projects.map((project) => (

        <ProjectCard
          key={project._id}
          project={project}
          refreshProjects={refreshProjects}
        />

      ))}

    </div>

  );

}

export default ProjectGrid;