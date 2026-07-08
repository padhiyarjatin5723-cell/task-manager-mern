import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import PageWrapper from "../PageWrapper/PageWrapper";

function AppLayout({ children }) {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50">

        <Navbar />

        <div className="flex">

          <Sidebar />

          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>

        </div>

      </div>
    </PageWrapper>
  );
}

export default AppLayout;