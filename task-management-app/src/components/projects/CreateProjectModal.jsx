import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { updateProject } from "../../services/project/project.service";

function CreateProjectModal({
  open,
  onClose,
  project,
  refreshProjects,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (project) {
      setName(project.name || "");
      setDescription(project.description || "");
    }
  }, [project]);

  if (!open) return null;

  const handleUpdate = async () => {
    if (!name.trim()) {
      toast.error("Project name is required");
      return;
    }

    try {
      await updateProject(project._id, {
        name,
        description,
      });

      toast.success("Project Updated");

      refreshProjects();

      onClose();
    } catch (err) {
      console.log(err);
      toast.error("Failed to update project");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md">

      <div className="w-[520px] rounded-[30px] border border-white/10 bg-[#151823] p-8">

        <h2 className="text-3xl font-bold text-white">
          Edit Project
        </h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
        />

        <textarea
          rows={4}
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          placeholder="Project Description (Optional)"
          className="mt-5 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
        />

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 px-6 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500"
          >
            Update
          </button>

        </div>

      </div>

    </div>
  );
}

export default CreateProjectModal;