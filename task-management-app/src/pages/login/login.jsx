import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEnvelope, FaLock } from "react-icons/fa";

import AuthLayout from "../../layouts/TempLayout";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { loginUser } from "../../services/auth/auth.service";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await loginUser(formData);

      localStorage.setItem(
        "token",
        res.data.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.data.user)
      );

      localStorage.setItem(
        "username",
        res.data.data.user.name
      );

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      console.log(err);

      console.log("Response :", err.response);

      console.log("Data :", err.response?.data);

      toast.error(
        err.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (

    <AuthLayout>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Login to continue your productivity.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="pl-12 h-14 rounded-xl"
            />

          </div>

          <div className="relative">

            <FaLock className="absolute left-4 top-4 text-slate-400" />

            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="pl-12 h-14 rounded-xl"
            />

          </div>

          <div className="flex justify-between text-sm">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember me

            </label>

            <button
              type="button"
              className="text-indigo-600"
            >
              Forgot Password?
            </button>

          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:opacity-90"
          >

            {loading
              ? "Signing In..."
              : "Sign In"}

          </Button>

        </form>

        <div className="text-center mt-8">

          <span className="text-slate-500">
            Don't have an account?
          </span>

          <Link
            to="/register"
            className="ml-2 font-semibold text-indigo-600"
          >
            Register
          </Link>

        </div>

      </div>

    </AuthLayout>

  );
}

export default Login;