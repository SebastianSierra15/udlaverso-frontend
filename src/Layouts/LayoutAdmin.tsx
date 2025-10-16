import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/Admin/organisms/SidebarAdmin";
import HeroAdmin from "../components/Admin/organisms/HeroAdmin";
import FooterAdmin from "../components/Admin/organisms/FooterAdmin";

const LayoutAdmin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed bg-white top-0 left-0 right-0 z-40 p-4">
        <HeroAdmin />
      </header>

      <div className="flex flex-1 pt-[104px]">
        <aside className="hidden md:block fixed top-[104px] left-0 w-64 h-[calc(100vh-104px)] p-4 z-30">
          <SidebarAdmin />
        </aside>

        <main className="flex-1 md:ml-72 px-4 md:px-8 py-6">
          <Outlet />
        </main>
      </div>

      <footer className="border-t px-6 md:px-8 lg:px-14 py-4 z-20">
        <FooterAdmin />
      </footer>
    </div>
  );
};

export default LayoutAdmin;
