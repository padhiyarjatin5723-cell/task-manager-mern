import { Dialog } from "@headlessui/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { globalSearch } from "../../services/search/search.service";

function CommandPalette() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [query, setQuery] = useState("");

  const [result, setResult] = useState({
    tasks: [],
    projects: [],
  });

  useEffect(() => {

    const down = (e) => {

      if (e.ctrlKey && e.key === "k") {

        e.preventDefault();

        setOpen(true);

      }

      if (e.key === "Escape") {

        setOpen(false);

      }

    };

    window.addEventListener(
      "keydown",
      down
    );

    return () =>
      window.removeEventListener(
        "keydown",
        down
      );

  }, []);

  useEffect(() => {

    if (!query.trim()) {

      setResult({
        tasks: [],
        projects: [],
      });

      return;

    }

    const timer = setTimeout(async () => {

      try {

        const res =
          await globalSearch(query);

        setResult(res.data);

      } catch {}

    }, 300);

    return () =>
      clearTimeout(timer);

  }, [query]);

  return (

    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-[100]"
    >

      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="fixed inset-0 flex justify-center pt-24">

        <Dialog.Panel className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#151823] p-6">

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4">

            <Search
              size={20}
              className="text-slate-400"
            />

            <input
              autoFocus
              value={query}
              onChange={(e) =>
                setQuery(e.target.value)
              }
              placeholder="Search Tasks & Projects..."
              className="w-full bg-transparent py-4 text-white outline-none"
            />

          </div>

          <div className="mt-6 space-y-5">

            {

              result.tasks.map((task) => (

                <button
                  key={task._id}
                  onClick={() => {

                    navigate("/tasks");

                    setOpen(false);

                  }}
                  className="block w-full rounded-xl bg-white/5 p-4 text-left text-white hover:bg-violet-600"
                >

                  <p className="font-semibold">

                    {task.title}

                  </p>

                  <p className="text-sm text-slate-400">

                    {task.status}

                  </p>

                </button>

              ))

            }

            {

              result.projects.map((project) => (

                <button
                  key={project._id}
                  onClick={() => {

                    navigate("/projects");

                    setOpen(false);

                  }}
                  className="block w-full rounded-xl bg-white/5 p-4 text-left text-white hover:bg-violet-600"
                >

                  {project.name}

                </button>

              ))

            }

          </div>

        </Dialog.Panel>

      </div>

    </Dialog>

  );

}

export default CommandPalette;