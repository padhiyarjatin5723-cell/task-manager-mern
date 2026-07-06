import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">
        Task Manager
      </h1>

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2">

          <FaUserCircle
            size={28}
            className="text-blue-600"
          />

          <span className="font-medium text-gray-700">
            Hi, {user?.name || "User"}
          </span>

        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;