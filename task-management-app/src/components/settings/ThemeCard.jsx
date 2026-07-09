import { Moon, Sun } from "lucide-react";

function ThemeCard({
  theme,
  setTheme,
}) {
  return (
    <div className="rounded-[30px] border border-white/10 bg-[#151823]/90 p-8">

      <h2 className="text-2xl font-bold text-white">
        Appearance
      </h2>

      <div className="mt-8 flex gap-4">

        <button
          onClick={() => setTheme("dark")}
          className={`flex flex-1 items-center justify-center gap-3 rounded-2xl py-4 ${
            theme === "dark"
              ? "bg-violet-600 text-white"
              : "bg-white/5 text-slate-400"
          }`}
        >

          <Moon size={20} />

          Dark

        </button>

        <button
          onClick={() => setTheme("light")}
          className={`flex flex-1 items-center justify-center gap-3 rounded-2xl py-4 ${
            theme === "light"
              ? "bg-yellow-500 text-white"
              : "bg-white/5 text-slate-400"
          }`}
        >

          <Sun size={20} />

          Light

        </button>

      </div>

    </div>
  );
}

export default ThemeCard;