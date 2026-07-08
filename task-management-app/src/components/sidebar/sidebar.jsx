import {
  LayoutDashboard,
  CheckSquare,
  PlusCircle,
  Settings,
  Sparkles,
  Crown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={21} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={21} />,
    },
    {
      name: "Create Task",
      path: "/create-task",
      icon: <PlusCircle size={21} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={21} />,
    },
  ];

  return (

    <aside className="w-80 p-6">

      <div className="sticky top-28">

        <div className="rounded-[30px] bg-white/70 backdrop-blur-2xl border border-white shadow-2xl p-7">

          <div className="mb-10">

            <div className="flex items-center gap-3">

              <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center shadow-lg">

                <Sparkles
                  size={24}
                  className="text-white"
                />

              </div>

              <div>

                <h2 className="font-black text-2xl">

                  Workspace

                </h2>

                <p className="text-slate-500 text-sm">

                  TaskFlow Pro

                </p>

              </div>

            </div>

          </div>

          <nav className="space-y-3">

            {menus.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-2xl px-5 py-4 font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-xl scale-105"
                      : "text-slate-600 hover:bg-slate-100 hover:translate-x-2"
                  }`
                }
              >

                <span>

                  {item.icon}

                </span>

                <span>

                  {item.name}

                </span>

              </NavLink>

            ))}

          </nav>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-6 text-white shadow-xl">

            <div className="flex items-center gap-3 mb-3">

              <Crown size={24} />

              <h3 className="font-bold text-xl">

                Pro Plan

              </h3>

            </div>

            <p className="text-sm text-indigo-100 leading-6">

              Unlock AI productivity, analytics,
              smart scheduling and advanced
              collaboration.

            </p>

            <button className="mt-6 w-full rounded-2xl bg-white py-3 font-bold text-indigo-700 hover:scale-105 duration-300">

              Upgrade Now

            </button>

          </div>

        </div>

      </div>

    </aside>

  );

}

export default Sidebar;