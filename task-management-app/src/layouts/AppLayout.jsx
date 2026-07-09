import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import FloatingActionButton from "../components/FloatingActionButton";
import PageWrapper from "../components/PageWrapper/PageWrapper";

function AppLayout({ children }) {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-[#0B1120] via-[#111827] to-[#1E1B4B]">

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>

        </div>

        <FloatingActionButton />

      </div>
    </PageWrapper>
  );
}

export default AppLayout;