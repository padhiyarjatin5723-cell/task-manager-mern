import { useState } from "react";
import toast from "react-hot-toast";

import { createProject } from "../../services/project/project.service";

const colors = [
  "#7C3AED",
  "#2563EB",
  "#10B981",
  "#F97316",
  "#EF4444",
  "#EC4899",
];

function CreateProjectModal({
  open,
  onClose,
  refreshProjects,
}) {

  const [name, setName] = useState("");

  const [color, setColor] = useState(colors[0]);

  if (!open) return null;

  const handleCreate = async () => {

    if (!name.trim()) {

      toast.error("Project name is required");

      return;

    }

    try {

      await createProject({
        name,
        color,
      });

      toast.success("Project Created");

      refreshProjects();

      setName("");

      setColor(colors[0]);

      onClose();

    } catch (err) {

      console.log(err);

      toast.error("Failed to create project");

    }

  };

  return (

    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md">

      <div className="w-[500px] rounded-[30px] border border-white/10 bg-[#151823] p-8">

        <h2 className="text-3xl font-bold text-white">

          Create Project

        </h2>

        <input
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Project Name"
          className="mt-8 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none"
        />

        <div className="mt-8">

          <p className="mb-4 text-slate-400">

            Select Color

          </p>

          <div className="flex gap-4">

            {colors.map((item) => (

              <button
                key={item}
                onClick={() =>
                  setColor(item)
                }
                className={`h-10 w-10 rounded-full border-4 ${
                  color === item
                    ? "border-white"
                    : "border-transparent"
                }`}
                style={{
                  background: item,
                }}
              />

            ))}

          </div>

        </div>

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={onClose}
            className="rounded-2xl border border-white/10 px-6 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500"
          >
            Create
          </button>

        </div>

      </div>

    </div>

  );

}

export default CreateProjectModal;