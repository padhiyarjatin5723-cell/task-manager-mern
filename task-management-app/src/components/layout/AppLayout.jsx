import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AppLayout;