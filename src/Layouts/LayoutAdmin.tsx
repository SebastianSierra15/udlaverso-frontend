import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/Admin/organisms/SidebarAdmin";
import HeroAdmin from "../components/Admin/organisms/HeroAdmin";
import FooterAdmin from "../components/Admin/organisms/FooterAdmin";
import SEO from "../components/SEO/SEO";

const LayoutAdmin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Panel de administración - UdlaVerso"
        description="Panel privado de gestión del portal UdlaVerso."
        path="/admin"
        noindex
      />

      <header className="relative z-40 bg-white p-2 sm:p-4">
        <HeroAdmin />
      </header>

      <div className="flex flex-1 flex-col gap-4 px-3 pb-6 sm:px-4 md:flex-row md:items-start md:gap-6 md:px-6 lg:px-8">
        <aside className="w-full md:sticky md:top-4 md:w-64 md:shrink-0">
          <SidebarAdmin />
        </aside>

        <main className="min-w-0 flex-1 py-2 md:py-6">
          <Outlet />
        </main>
      </div>

      <footer className="z-20 border-t px-4 py-4 sm:px-6 md:px-8 lg:px-14">
        <FooterAdmin />
      </footer>
    </div>
  );
};

export default LayoutAdmin;
