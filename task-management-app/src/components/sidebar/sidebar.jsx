import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    label: "Create Task",
    path: "/create-task",
  },
  {
    label: "Board",
    path: "/board",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Analytics",
    path: "/analytics",
  },
];

function Sidebar() {
  return (
    <aside
      className="
        w-64
        min-h-screen
        border-r
        border-white/10
        bg-[#151823]/90
        backdrop-blur-3xl
        px-5
        py-8
      "
    >
      <nav className="space-y-3">

        {navItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                flex
                items-center
                gap-3
                rounded-2xl
                px-4
                py-3
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/40"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >

              {Icon && <Icon size={20} />}

              <span className="font-medium">
                {item.label}
              </span>

            </NavLink>

          );

        })}

      </nav>
    </aside>
  );
}

export default Sidebar;