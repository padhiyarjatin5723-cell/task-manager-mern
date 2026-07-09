import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AccountCard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.clear();

    navigate("/login");

  };

  return (
    <div className="rounded-[30px] border border-red-500/20 bg-red-500/5 p-8">

      <h2 className="text-2xl font-bold text-white">
        Account
      </h2>

      <button
        onClick={logout}
        className="mt-8 flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-semibold text-white hover:bg-red-500"
      >

        <LogOut size={20} />

        Logout

      </button>

    </div>
  );
}

export default AccountCard;