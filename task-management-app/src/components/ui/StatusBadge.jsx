function StatusBadge({
  status,
}) {
  const styles = {
    Pending:
      "bg-orange-500/20 text-orange-300",

    "In Progress":
      "bg-cyan-500/20 text-cyan-300",

    Completed:
      "bg-emerald-500/20 text-emerald-300",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;