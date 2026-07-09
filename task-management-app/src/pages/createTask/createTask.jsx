import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../../components/navbar/navbar";
import Sidebar from "../../components/sidebar/sidebar";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

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
    <PageWrapper>
      <div className="min-h-screen bg-slate-100">

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 p-8">

            <div className="mb-8">

              <h1 className="text-4xl font-bold text-slate-800">
                Create New Task
              </h1>

              <p className="mt-2 text-slate-500">
                Add a new task to your workspace.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-3xl rounded-3xl bg-white p-10 shadow-xl"
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
                  className="h-40 w-full resize-none rounded-2xl border border-slate-200 p-5 outline-none duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
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
                  className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-4 focus:ring-indigo-100"
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
                  className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-4 focus:ring-indigo-100"
                >

                  <option value="Low">
                    🟢 Low Priority
                  </option>

                  <option value="Medium">
                    🟡 Medium Priority
                  </option>

                  <option value="High">
                    🔴 High Priority
                  </option>

                </select>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-4 focus:ring-indigo-100"
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                </select>

              </div>

              <div className="mb-8">

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="h-14 w-full rounded-2xl border border-slate-200 px-5 outline-none focus:ring-4 focus:ring-indigo-100"
                >

                  <option value="Work">
                    💼 Work
                  </option>

                  <option value="Personal">
                    🏠 Personal
                  </option>

                  <option value="Study">
                    📚 Study
                  </option>

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

          </main>

        </div>

      </div>
    </PageWrapper>
  );
}

export default CreateTask;