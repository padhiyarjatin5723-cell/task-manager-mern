import TaskItem from "./TaskItem";

function TaskGrid({
  tasks,
  removeTask,
}) {
  return (

    <div className="grid gap-7 lg:grid-cols-2 2xl:grid-cols-3">

      {tasks.map((task) => (

        <TaskItem
          key={task._id}
          task={task}
          removeTask={removeTask}
        />

      ))}

    </div>

  );
}

export default TaskGrid;