import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import toast from "react-hot-toast";

import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import AuthLayout from "../../layouts/AuthLayout";

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

      toast.success("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      toast.error(
        err.response?.data?.message || "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <AuthLayout>
      <Card>

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div className="bg-blue-600 text-white p-4 rounded-full">
            <FaTasks size={35} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">
          Task Manager
        </h1>

        {/* Description */}
        <p className="text-gray-500 text-center mt-2 mb-6">
          Welcome back! Please login to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center mb-5">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-1"
          >
            Register
          </Link>

        </p>

      </Card>
    </AuthLayout>
  );
}

export default Login;