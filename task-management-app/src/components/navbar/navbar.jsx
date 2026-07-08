import {
  Bell,
  Search,
  LogOut,
  UserCircle2,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const username =
    localStorage.getItem("username") || "Jatin";

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/50">

      <div className="h-20 px-10 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

            TaskFlow

          </h1>

          <p className="text-sm text-slate-500">

            Premium Workspace

          </p>

        </div>

        <div className="flex items-center gap-6">

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-4 text-slate-400"
            />

            <input
              placeholder="Search..."
              className="w-72 rounded-2xl border border-slate-200 bg-white/70 py-3 pl-11 pr-5 outline-none focus:border-indigo-500 duration-300"
            />

          </div>

          <button className="relative h-12 w-12 rounded-2xl bg-white shadow-lg hover:scale-110 duration-300">

            <Bell
              size={20}
              className="mx-auto mt-3 text-slate-600"
            />

            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"/>

          </button>

          <div className="flex items-center gap-3 rounded-2xl bg-white shadow-lg px-5 py-3">

            <UserCircle2
              size={42}
              className="text-indigo-600"
            />

            <div>

              <h3 className="font-bold">

                {username}

              </h3>

              <p className="text-xs text-slate-500 flex items-center gap-1">

                <Sparkles size={12}/>

                Premium User

              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="h-12 w-12 rounded-2xl bg-red-500 text-white shadow-lg hover:scale-110 duration-300"
          >

            <LogOut
              size={20}
              className="mx-auto"
            />

          </button>

        </div>

      </div>

    </header>

  );

}

export default Navbar;