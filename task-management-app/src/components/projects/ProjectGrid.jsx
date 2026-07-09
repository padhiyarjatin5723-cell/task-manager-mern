import ProjectCard from "./ProjectCard";

function ProjectGrid({
  projects,
  refreshProjects,
}) {
  if (projects.length === 0) {
    return (
      <div className="mt-10 rounded-[30px] border border-dashed border-white/10 bg-[#151823]/90 py-24 text-center">

        <h2 className="text-3xl font-bold text-white">
          No Projects
        </h2>

        <p className="mt-3 text-slate-500">
          Create your first project.
        </p>

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