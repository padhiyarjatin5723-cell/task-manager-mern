function FilterBar({
  status,
  setStatus,
}) {
  const filters = [
    "All",
    "Pending",
    "In Progress",
    "Completed",
  ];

  return (
    <div className="mt-6 flex flex-wrap gap-3">

      {filters.map((item) => (

        <button
          key={item}
          onClick={() => setStatus(item)}
          className={`rounded-2xl px-6 py-3 font-medium transition-all duration-300 ${
            status === item
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
              : "border border-white/10 bg-[#151823]/90 text-slate-400 hover:border-violet-500/30 hover:text-white"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default FilterBar;