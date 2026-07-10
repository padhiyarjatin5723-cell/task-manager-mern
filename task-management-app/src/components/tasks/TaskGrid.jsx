import {
  ClipboardList,
  Plus,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import TaskCard from "../taskcard/taskcard";

function TaskGrid({
  tasks,
}) {

  const navigate = useNavigate();

  if (tasks.length === 0) {

    return (

      <div className="mt-10 rounded-[32px] border border-dashed border-violet-500/30 bg-[#151823]/90 p-16 text-center">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">

          <ClipboardList size={46} />

        </div>

        <h2 className="mt-8 text-4xl font-black text-white">

          No Tasks Found

        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-400">

          Start organizing your work by creating your first task.

        </p>

        <button
          onClick={() =>
            navigate("/create-task")
          }
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >

          <Plus size={20} />

          Create First Task

        </button>

      </div>

    );

  }

  return (

    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {tasks.map((task) => (

        <TaskCard
          key={task._id}
          task={task}
        />

      ))}

    </div>

  );

}

export default TaskGrid;