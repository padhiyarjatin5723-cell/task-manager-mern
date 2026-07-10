import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import PageWrapper from "../components/PageWrapper/PageWrapper";

import useMobile from "../hooks/useMobile";

function AppLayout({ children }) {

  const isMobile = useMobile();

  return (

    <PageWrapper>

      <div className="min-h-screen bg-[#0B1120]">

        <Navbar />

        <div className="flex">

          {!isMobile && <Sidebar />}

          <main className="flex-1 overflow-y-auto p-4 md:p-8">

            {children}

          </main>

        </div>

      </div>

    </PageWrapper>

  );

}

export default AppLayout;