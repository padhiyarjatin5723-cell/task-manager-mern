import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import {
  CalendarDays,
  Flag,
} from "lucide-react";

function BoardTaskCard({ task }) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useDraggable({
    id: task._id,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (

    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-violet-500/40 active:cursor-grabbing"
    >

      <h3 className="font-bold text-white">

        {task.title}

      </h3>

      <p className="mt-3 text-sm text-slate-400">

        {task.description || "No description"}

      </p>

      <div className="mt-5 flex flex-wrap gap-3 text-sm">

        <span className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-slate-300">

          <Flag size={14} />

          {task.priority}

        </span>

        <span className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-slate-300">

          <CalendarDays size={14} />

          {task.dueDate
            ? new Date(task.dueDate).toLocaleDateString()
            : "No Due Date"}

        </span>

      </div>

    </div>

  );

}

export default BoardTaskCard;