import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AppLayout from "../../layouts/AppLayout";
import Input from "../../components/input/input";
import Button from "../../components/button/button";

import { createTask } from "../../services/task/task.service";
import { getProjects } from "../../services/project/project.service";

function CreateTask() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [projects, setProjects] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    project: "",
    priority: "Medium",
    category: "Work",
    status: "Pending",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {

      const res = await getProjects();

      setProjects(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error("Task title is required");
      return;
    }

    if (!formData.project) {
      toast.error("Please select a project");
      return;
    }

    try {

      setLoading(true);

      await createTask(formData);

      toast.success("Task Created Successfully 🚀");

      navigate("/tasks");

    } catch (err) {

      console.log(err);

      toast.error(
        err?.response?.data?.message ||
        "Failed to Create Task"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <AppLayout>

      <div className="mx-auto max-w-4xl">

        <div className="mb-8">

          <h1 className="text-4xl font-black text-white">

            Create New Task

          </h1>

          <p className="mt-2 text-slate-400">

            Add a new task to your workspace.

          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-[#151823]/90 p-10"
        >

          <div className="mb-6">

            <Input
              type="text"
              name="title"
              placeholder="Task Title"
              value={formData.title}
              onChange={handleChange}
            />

          </div>

          <div className="mb-6">

            <textarea
              name="description"
              placeholder="Task Description"
              value={formData.description}
              onChange={handleChange}
              className="h-40 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />

          </div>

          <div className="mb-6 grid gap-6 md:grid-cols-2">

            <Input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />

            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-violet-500"
            >

              <option value="">
                Select Project
              </option>

              {projects.map((project) => (

                <option
                  key={project._id}
                  value={project._id}
                >
                  {project.name}
                </option>

              ))}

            </select>

          </div>

          <div className="mb-6 grid gap-6 md:grid-cols-2">

            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-violet-500"
            >

              <option value="Low">🟢 Low</option>
              <option value="Medium">🟡 Medium</option>
              <option value="High">🔴 High</option>

            </select>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-violet-500"
            >

              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>

            </select>

          </div>

          <div className="mb-8">

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-5 text-white outline-none focus:border-violet-500"
            >

              <option value="Work">💼 Work</option>
              <option value="Personal">🏠 Personal</option>
              <option value="Study">📚 Study</option>

            </select>

          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >

            {loading
              ? "Creating Task..."
              : "Create Task 🚀"}

          </Button>

        </form>

      </div>

    </AppLayout>

  );

}

export default CreateTask;