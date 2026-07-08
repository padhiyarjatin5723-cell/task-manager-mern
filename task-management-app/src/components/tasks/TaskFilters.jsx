import { Search } from "lucide-react";

function TaskFilters({
  search,
  setSearch,
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

    <div className="mt-8 mb-8 rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-3xl p-6">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="relative w-full lg:max-w-md">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-[#151515]
              py-4
              pl-14
              pr-5
              text-white
              placeholder:text-slate-500
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:ring-2
              focus:ring-violet-500/20
            "
          />

        </div>

        <div className="flex flex-wrap gap-3">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`
                rounded-2xl
                px-6
                py-3
                font-medium
                transition-all
                duration-300

                ${
                  status === item
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:border-violet-500 hover:text-white"
                }
              `}
            >

              {item}

            </button>

          ))}

        </div>

      </div>

    </div>

  );
}

export default TaskFilters;