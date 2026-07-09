import AppLayout from "../../layouts/AppLayout";

import KanbanBoard from "../../components/board/KanbanBoard";

function Board() {
  return (
    <AppLayout>

      <div className="mb-10">

        <h1 className="text-5xl font-black text-white">
          Kanban Board
        </h1>

        <p className="mt-3 text-slate-400">
          Drag and drop your tasks like Trello.
        </p>

      </div>

      <KanbanBoard />

    </AppLayout>
  );
}

export default Board;