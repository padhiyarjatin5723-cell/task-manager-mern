import TaskCard from "../TaskCard/taskcard";

function TaskGrid({
  tasks,
  removeTask,
}) {
  if (tasks.length === 0) {
    return (
      <div className="mt-10 rounded-[30px] border border-dashed border-white/10 bg-[#151823]/90 py-24 text-center">

        <div className="text-6xl">
          📂
        </div>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Nothing Here Yet
        </h2>

        <p className="mt-3 text-slate-500">
          Create your first task to get started.
        </p>

      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {tasks.map((task) => (

        <TaskCard
          key={task._id}
          task={task}
          handleDelete={removeTask}
        />

      ))}

    </div>
  );
}

export default TaskGrid;