import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaTasks,
  FaPlus,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  const activeClass =
    "flex items-center gap-3 bg-blue-600 text-white p-3 rounded-lg";

  const normalClass =
    "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100";

  return (
    <aside className="w-64 bg-white shadow h-screen p-6">

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? activeClass : normalClass
        }
      >
        <FaHome />
        Dashboard
      </NavLink>

      <NavLink
        to="/tasks"
        className={({ isActive }) =>
          isActive ? activeClass : normalClass
        }
      >
        <FaTasks />
        Tasks
      </NavLink>

      <NavLink
        to="/create-task"
        className={({ isActive }) =>
          isActive ? activeClass : normalClass
        }
      >
        <FaPlus />
        Create Task
      </NavLink>

      <NavLink
        to="#"
        className={({ isActive }) =>
          isActive ? activeClass : normalClass
        }
      >
        <FaCog />
        Settings
      </NavLink>

    </aside>
  );
}

export default Sidebar;