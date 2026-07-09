import { Dialog } from "@headlessui/react";
import { X, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  updateProfile,
  changePassword,
} from "../../services/auth/profile.service";

function ProfileModal({
  open,
  setOpen,
  user,
}) {

  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setProfile({
      name: user.username || "",
      email: user.email || "",
    });

  }, [user]);

  const handleProfile = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };

  const handlePassword = (e) => {

    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });

  };

  const saveProfile = async () => {

    try {

      setLoading(true);

      await updateProfile(profile);

      localStorage.setItem(
        "username",
        profile.name
      );

      localStorage.setItem(
        "email",
        profile.email
      );

      toast.success("Profile Updated");

      window.location.reload();

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Update Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  const updateUserPassword = async () => {

    if (
      password.newPassword !==
      password.confirmPassword
    ) {

      toast.error("Passwords do not match");

      return;

    }

    try {

      setLoading(true);

      await changePassword({
        currentPassword: password.currentPassword,
        newPassword: password.newPassword,
      });

      toast.success("Password Updated");

      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Update Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  const logout = () => {

    localStorage.clear();

    navigate("/login");

  };

  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-50"
    >

      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-6">

        <Dialog.Panel className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#151823] p-8">

          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-3xl font-bold text-white">
              My Profile
            </h2>

            <button
              onClick={() => setOpen(false)}
            >
              <X className="text-white" />
            </button>

          </div>

          <div className="space-y-5">

            <input
              name="name"
              value={profile.name}
              onChange={handleProfile}
              placeholder="Name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
            />

            <input
              name="email"
              value={profile.email}
              onChange={handleProfile}
              placeholder="Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
            />

            <button
              onClick={saveProfile}
              disabled={loading}
              className="w-full rounded-2xl bg-violet-600 py-3 font-semibold text-white"
            >
              Save Profile
            </button>

            <div className="border-t border-white/10 pt-6 space-y-4">

              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={password.currentPassword}
                onChange={handlePassword}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
              />

              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={password.newPassword}
                onChange={handlePassword}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={password.confirmPassword}
                onChange={handlePassword}
                className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
              />

              <button
                onClick={updateUserPassword}
                disabled={loading}
                className="w-full rounded-2xl bg-indigo-600 py-3 font-semibold text-white"
              >
                Change Password
              </button>

            </div>

            <button
              onClick={logout}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-red-600 py-3 font-semibold text-white"
            >
              <LogOut size={18} />
              Logout
            </button>

          </div>

        </Dialog.Panel>

      </div>

    </Dialog>
  );
}

export default ProfileModal;