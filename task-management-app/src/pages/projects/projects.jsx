import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import AppLayout from "../../layouts/AppLayout";
import ProjectGrid from "../../components/projects/ProjectGrid";
import CreateProjectModal from "../../components/projects/CreateProjectModal";

import { getProjects } from "../../services/project/project.service";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {

      const res = await getProjects();

      setProjects(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  return (
    <AppLayout>

      <CreateProjectModal
        open={open}
        onClose={() => setOpen(false)}
        refreshProjects={loadProjects}
      />

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl md:text-5xl font-black text-white">
            Projects
          </h1>

          <p className="mt-3 text-slate-400">
            Organize your workspaces.
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-4 font-semibold text-white"
        >

          <Plus size={20} />

          New Project

        </button>

      </div>

      <ProjectGrid
        projects={projects}
        refreshProjects={loadProjects}
      />

    </AppLayout>
  );
}

export default Projects;
