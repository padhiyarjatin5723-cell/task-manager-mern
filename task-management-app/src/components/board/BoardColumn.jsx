import { useDroppable } from "@dnd-kit/core";

import BoardTaskCard from "./BoardTaskCard";

function BoardColumn({
  id,
  title,
  tasks,
}) {

  const { setNodeRef } = useDroppable({
    id,
  });

  return (

    <div
      ref={setNodeRef}
      className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-6"
    >

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-white">

          {title}

        </h2>

        <span className="rounded-xl bg-violet-600 px-3 py-1 text-sm text-white">

          {tasks.length}

        </span>

      </div>

      <div className="min-h-[520px] space-y-4">

        {tasks.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center text-slate-500">

            Drop Tasks Here

          </div>

        ) : (

          tasks.map((task) => (

            <BoardTaskCard
              key={task._id}
              task={task}
            />

          ))

        )}

      </div>

    </div>

  );

}

export default BoardColumn;