import { useEffect, useState } from "react";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import BoardColumn from "./BoardColumn";

import { getTasks } from "../../services/task/task.service";
import { updateTaskStatus } from "../../services/task/updateStatus.service";

function KanbanBoard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {

      const res = await getTasks();

      setTasks(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  const handleDragEnd = async ({ active, over }) => {

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    const draggedTask = tasks.find(
      (t) => t._id === taskId
    );

    if (!draggedTask) return;

    if (draggedTask.status === newStatus) return;

    // Optimistic UI update
    setTasks((prev) =>
      prev.map((task) =>
        task._id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );

    try {

      await updateTaskStatus(
        taskId,
        newStatus
      );

    } catch (err) {

      console.log(err);

      // Restore data if API fails
      loadTasks();

    }

  };

  return (

    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >

      <div className="grid gap-8 xl:grid-cols-3">

        <BoardColumn
          id="Pending"
          title="Pending"
          tasks={tasks.filter(
            (t) => t.status === "Pending"
          )}
        />

        <BoardColumn
          id="In Progress"
          title="In Progress"
          tasks={tasks.filter(
            (t) => t.status === "In Progress"
          )}
        />

        <BoardColumn
          id="Completed"
          title="Completed"
          tasks={tasks.filter(
            (t) => t.status === "Completed"
          )}
        />

      </div>

    </DndContext>

  );

}

export default KanbanBoard;