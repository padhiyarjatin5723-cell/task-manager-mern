import {
  Bell,
  Search,
  LogOut,
  MoonStar,
  ChevronDown,
} from "lucide-react";

import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "Jatin";

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("username");

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
              placeholder="Search tasks..."
              className="w-80 rounded-2xl border border-white/10 bg-white/5 py-3 pl-12 pr-20 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-500">
              Ctrl K
            </span>

          </div>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:bg-violet-600 hover:text-white transition">

            <Bell size={20} />

          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 hover:bg-violet-600 hover:text-white transition">

            <MoonStar size={20} />

          </button>

          <Menu as="div" className="relative">

            <Menu.Button className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 font-bold">

                {username.charAt(0).toUpperCase()}

              </div>

              <div className="text-left">

                <p className="font-semibold">
                  {username}
                </p>

                <p className="text-xs text-slate-400">
                  Software Engineer
                </p>

              </div>

              <ChevronDown size={18} />

            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#151823] p-2 shadow-2xl">

              <Menu.Item>

                {() => (

                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
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
  );
}

export default Navbar;