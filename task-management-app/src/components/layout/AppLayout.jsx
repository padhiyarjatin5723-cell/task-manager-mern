import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090B]">

      {/* Aurora Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />

        <div className="absolute top-60 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[180px]" />

      </div>

      {/* Content */}

      <div className="relative z-10">

        <Navbar />

        <div className="mx-auto flex max-w-[1700px] gap-8 px-8 py-8">

          <Sidebar />

          <main className="flex-1 overflow-y-auto">

            {children}

          </main>

        </div>

      </div>

    </div>
  );
}

export default AppLayout;