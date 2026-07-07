import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { createTask } from "../../services/task/task.service";

function CreateTask() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Pending",
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

      await createTask(formData);

      toast.success("Task Created Successfully");

      navigate("/tasks");

    } catch (error) {

      console.log(error);

      toast.error("Failed to Create Task");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="bg-slate-100 min-h-screen">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-8">
            Create Task
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow max-w-2xl"
          >

            <div className="mb-5">
              <Input
                type="text"
                name="title"
                placeholder="Task Title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="mb-5">
              <textarea
                name="description"
                placeholder="Task Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded-lg p-4 h-32"
              />
            </div>

            <div className="mb-5">
              <Input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg p-3"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Creating..."
                : "Create Task"}
            </Button>

          </form>

        </main>

      </div>

    </div>
  );
}

export default CreateTask;