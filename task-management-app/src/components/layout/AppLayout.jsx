import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import FloatingActionButton from "../FloatingActionButton";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B1120]">

      <Navbar />

      <div className="mx-auto flex max-w-[1700px] gap-8 px-8 py-8">

        <Sidebar />

        <main className="flex-1">

          {children}

        </main>

      </div>

      <FloatingActionButton />

    </div>
  );
}

export default AppLayout;
