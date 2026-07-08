import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CommandPalette() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  useHotkeys("ctrl+k", (e) => {
    e.preventDefault();
    setOpen(true);
  });

  const actions = [
    {
      title: "Dashboard",
      action: () => navigate("/dashboard"),
    },
    {
      title: "Tasks",
      action: () => navigate("/tasks"),
    },
    {
      title: "Create Task",
      action: () => navigate("/create-task"),
    },
    {
      title: "Settings",
      action: () => navigate("/settings"),
    },
  ];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-black/50 pt-32 backdrop-blur-sm">

      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#151515] shadow-2xl">

        <div className="flex items-center border-b border-white/10 px-6 py-5">

          <Search size={20} className="text-slate-400" />

          <input
            autoFocus
            placeholder="Search anything..."
            className="ml-4 flex-1 bg-transparent text-white outline-none placeholder:text-slate-500"
          />

          <button
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 hover:bg-white/10"
          >
            <X className="text-slate-400" />
          </button>

        </div>

        <div className="p-3">

          {actions.map((item) => (

            <button
              key={item.title}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="mb-2 flex w-full rounded-2xl px-5 py-4 text-left text-white transition hover:bg-violet-600"
            >

              {item.title}

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}

export default CommandPalette;