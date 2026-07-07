function TaskCard({ task }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h2 className="font-bold">{task?.title}</h2>
      <p>{task?.description}</p>
    </div>
  );
}

export default TaskCard;