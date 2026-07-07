import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import toast from "react-hot-toast";

import Card from "../../components/card/card";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import AuthLayout from "../../layouts/authlayout";

import { registerUser } from "../../services/auth/auth.service";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Registration Successful");

      navigate("/login");

    } catch (err) {

      toast.error(
        err.response?.data?.message ||
        "Registration Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <AuthLayout>
      <Card>

        <div className="flex justify-center mb-5">
          <div className="bg-blue-600 text-white p-4 rounded-full">
            <FaTasks size={35} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mt-2 mb-6">
          Register to continue
        </p>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </Button>

        </form>

        <p className="text-center mt-6">
          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-1"
          >
            Login
          </Link>

        </p>

      </Card>
    </AuthLayout>
  );
}

export default Register;