import { useEffect, useState } from "react";

import AppLayout from "../../layouts/AppLayout";

import ProfileCard from "../../components/settings/ProfileCard";
import ThemeCard from "../../components/settings/ThemeCard";
import AccountCard from "../../components/settings/AccountCard";

import { getProfile } from "../../services/user/user.service";

function Settings() {

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {

    try {

      const res = await getProfile();

      setUser(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <AppLayout>

      <div>

        <h1 className="text-3xl md:text-5xl font-black text-white">

          Settings

        </h1>

        <p className="mt-3 text-slate-400">

          Manage your account and preferences.

        </p>

      </div>

      <div className="mt-10 grid gap-8 xl:grid-cols-2">

        <ProfileCard
          user={user}
        />

        <ThemeCard />

      </div>

      <div className="mt-8">

        <AccountCard />

      </div>

    </AppLayout>

  );

}

export default Settings;
