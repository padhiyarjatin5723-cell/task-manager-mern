import { useEffect, useState } from "react";

import AppLayout from "../../components/layout/AppLayout";
import Loader from "../../components/loader/loader";

import TaskHeader from "../../components/tasks/TaskHeader";
import TaskFilters from "../../components/tasks/TaskFilters";
import TaskGrid from "../../components/tasks/TaskGrid";
import EmptyState from "../../components/tasks/EmptyState";

import {
  getTasks,
  deleteTask,
} from "../../services/task/task.service";

function Tasks() {

  const [loading, setLoading] = useState(true);

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("All");

  const loadTasks = async () => {

    try {

      const res = await getTasks();

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    loadTasks();

  }, []);

  const filtered = tasks.filter((task) => {

    const title =
      task.title.toLowerCase();

    const matchSearch =
      title.includes(search.toLowerCase());

    const matchStatus =
      status === "All"
        ? true
        : task.status === status;

    return matchSearch && matchStatus;

  });

  const removeTask = async (id) => {

    await deleteTask(id);

    loadTasks();

  };

  if (loading) {

    return <Loader />;

  }

  return (

    <AppLayout>

      <TaskHeader />

      <TaskFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {

        filtered.length === 0

        ?

        <EmptyState />

        :

        <TaskGrid
          tasks={filtered}
          removeTask={removeTask}
        />

      }

    </AppLayout>

  );

}

export default Tasks;