import { Search } from "lucide-react";

function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="mt-8">

      <div className="relative rounded-3xl border border-white/10 bg-[#151823]/90 backdrop-blur-3xl">

        <Search
          size={20}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search tasks..."
          className="w-full bg-transparent py-5 pl-16 pr-6 text-white outline-none placeholder:text-slate-500"
        />

      </div>

    </div>
  );
}

export default SearchBar;