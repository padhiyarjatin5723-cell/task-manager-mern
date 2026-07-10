import {
  Bell,
  Search,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ProfileModal from "../profile/ProfileModal";
import { globalSearch } from "../../services/task/task.service";

function Navbar() {
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);

  const [query, setQuery] = useState("");

  const [results, setResults] = useState({
  tasks: [],
  });

  const username =
    localStorage.getItem("username") || "Jatin";

  const email =
    localStorage.getItem("email") || "";

  useEffect(() => {
    if (!query.trim()) {
      setResults({
      tasks: [],
      });
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await globalSearch(query);
        setResults(res.data);
      } catch (err) {
        console.log(err);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    navigate("/login");
  };

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <>
      <ProfileModal
        open={openProfile}
        setOpen={setOpenProfile}
        user={{
          username,
          email,
        }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#151823]/80 backdrop-blur-2xl">

        <div className="flex items-center justify-between px-8 py-5">

          <div>

            <h1 className="text-4xl font-black tracking-tight text-white">

              {greeting},

              <span className="text-violet-400">
                {" "}
                {username}
              </span>

            </h1>

            <p className="mt-2 text-slate-400">
              Stay focused and finish what matters.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                placeholder="Search tasks ..."
                className="w-80 rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-20 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
              />

              {query.trim() &&
                  (
                  results.tasks.length > 0
                  ) && (

                <div className="absolute left-0 right-0 top-16 z-50 max-h-80 overflow-y-auto rounded-2xl border border-white/10 bg-[#151823] p-2 shadow-2xl">

                  {results.tasks.length === 0 && (

                    <p className="px-3 py-3 text-slate-400">
                      No results found
                    </p>

                  )}

                  {results.tasks.length > 0 && (

                    <>

                      <p className="px-3 py-2 text-xs uppercase text-slate-500">
                        Tasks
                      </p>

                      {results.tasks.map((task) => (

                        <button
                          key={task._id}
                          onClick={() => {

                          navigate("/tasks");

                          setResults({
                            tasks: [],
                            projects: [],
                          });

                          setQuery("");

                        }}
                          className="block w-full rounded-xl px-3 py-3 text-left text-white transition hover:bg-white/5"
                        >

                          📋 {task.title}

                        </button>

                      ))}

                    </>

                  )}

                </div>

              )}

            </div>
            <button
              onClick={() =>
                toast("No new notifications")
              }
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-violet-600 hover:text-white"
            >

              <Bell size={20} />

            </button>

            <Menu
              as="div"
              className="relative"
            >

              <Menu.Button className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 font-bold">

                  {username.charAt(0).toUpperCase()}

                </div>

                <div className="text-left">

                  <p className="font-semibold">
                    {username}
                  </p>

                  <p className="text-xs text-slate-400">
                    {email}
                  </p>

                </div>

                <ChevronDown size={18} />

              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-3 w-56 rounded-2xl border border-white/10 bg-[#151823] p-2 shadow-2xl">

                <Menu.Item>

                  {() => (

                    <button
                      onClick={() =>
                        setOpenProfile(true)
                      }
                      className="w-full rounded-xl px-4 py-3 text-left text-white transition hover:bg-white/5"
                    >

                      Change Password

                    </button>

                  )}

                </Menu.Item>

                <div className="my-2 border-t border-white/10"></div>

                <Menu.Item>

                  {() => (

                    <button
                      onClick={logout}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10"
                    >

                      <LogOut size={18} />

                      Logout

                    </button>

                  )}

                </Menu.Item>

              </Menu.Items>

            </Menu>

          </div>

        </div>

      </header>

    </>
  );
}

export default Navbar;