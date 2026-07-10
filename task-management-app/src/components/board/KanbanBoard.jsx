import { useEffect, useState } from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import toast from "react-hot-toast";

import BoardColumn from "./BoardColumn";

import {
  getTasks,
  updateTaskStatus,
} from "../../services/task/task.service";

function KanbanBoard() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {

    try {

      const res = await getTasks();

      setTasks(res.data);

    } catch (err) {

      console.log(err);

      toast.error(
        "Failed to load tasks"
      );

    } finally {

      setLoading(false);

    }

  };

  const handleDragEnd = async ({
    active,
    over,
  }) => {

    if (!over) return;

    const taskId = active.id;

    const newStatus = over.id;

    const oldTasks = [...tasks];

    const task = tasks.find(
      (t) => t._id === taskId
    );

    if (!task) return;

    if (
      task.status === newStatus
    )
      return;

    setTasks((prev) =>
      prev.map((t) =>
        t._id === taskId
          ? {
              ...t,
              status: newStatus,
            }
          : t
      )
    );

    try {

      await updateTaskStatus(
        taskId,
        newStatus
      );

      toast.success(
        `Moved to ${newStatus}`
      );

    } catch (err) {

      console.log(err);

      setTasks(oldTasks);

      toast.error(
        "Failed to update task"
      );

    }

  };

  if (loading) {

    return (

      <div className="py-32 text-center text-slate-400">

        Loading Board...

      </div>

    );

  }

  return (

    <DndContext
      collisionDetection={
        closestCenter
      }
      onDragEnd={handleDragEnd}
    >

      <div className="grid gap-8 xl:grid-cols-3">

        <BoardColumn
          id="Pending"
          title="Pending"
          tasks={tasks.filter(
            (task) =>
              task.status ===
              "Pending"
          )}
        />

        <BoardColumn
          id="In Progress"
          title="In Progress"
          tasks={tasks.filter(
            (task) =>
              task.status ===
              "In Progress"
          )}
        />

        <BoardColumn
          id="Completed"
          title="Completed"
          tasks={tasks.filter(
            (task) =>
              task.status ===
              "Completed"
          )}
        />

      </div>

    </DndContext>

  );

}

export default KanbanBoard;