import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { registerUser } from "../../services/auth/auth.service";

function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

      await registerUser(formData);

      toast.success("Registration Successful");

      navigate("/login");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AuthLayout>

      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-slate-800">
          Create Account 🚀
        </h1>

        <p className="mt-2 text-slate-500">
          Join TaskFlow and start managing your work.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div className="relative">

            <FaUser className="absolute left-4 top-4 text-slate-400" />

            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="h-14 rounded-xl pl-12"
            />

          </div>

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="h-14 rounded-xl pl-12"
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
              className="h-14 rounded-xl pl-12"
            />

          </div>

          <Button
            type="submit"
            disabled={loading}
            className="h-14 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 font-semibold text-white hover:opacity-90"
          >

            {loading
              ? "Creating..."
              : "Create Account"}

          </Button>

        </form>

        <div className="mt-8 text-center">

          <span className="text-slate-500">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 font-semibold text-indigo-600"
          >
            Login
          </Link>

        </div>

      </div>

    </AuthLayout>

  );

}

export default Register;