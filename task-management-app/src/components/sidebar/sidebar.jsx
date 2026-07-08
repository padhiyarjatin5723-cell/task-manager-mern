import {
  LayoutDashboard,
  CheckSquare,
  PlusCircle,
  Settings,
  BarChart3,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <CheckSquare size={20} />,
    },
    {
      name: "Create Task",
      path: "/create-task",
      icon: <PlusCircle size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-[280px] shrink-0">

      <div className="sticky top-8">

        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,.45)] p-7 flex flex-col">

          <div className="mb-12">

            <h1 className="text-3xl font-black tracking-tight text-white">
              TaskFlow
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Productivity Workspace
            </p>

          </div>

          <nav className="space-y-2">

            {menus.map((item) => (

              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  flex
                  items-center
                  gap-4
                  rounded-2xl
                  px-5
                  py-4
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-xl"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                  `
                }
              >

                {item.icon}

                <span className="font-medium">
                  {item.name}
                </span>

              </NavLink>

            ))}

          </nav>

          <div className="mt-10 border-t border-white/10 pt-6">

            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-slate-500">
              Quick Access
            </p>

            <div className="space-y-3">

              <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-slate-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white">
                📅 Today's Tasks
              </button>

              <button className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-slate-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white">
                ⭐ High Priority
              </button>

              <button className="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-slate-300 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10 hover:text-white">
                <BarChart3 size={18} />
                Analytics
              </button>

            </div>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;