import { UserCircle2 } from "lucide-react";

function ProfileCard({ user }) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-8">

      <div className="flex items-center gap-6">

        <UserCircle2
          size={90}
          className="text-violet-500"
        />

        <div>

          <h2 className="text-3xl font-bold text-white">
            {user.name}
          </h2>

          <p className="mt-2 text-slate-400">
            {user.email}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProfileCard;