import { Outlet } from "react-router-dom";
import SidebarAdmin from "../components/Admin/organisms/SidebarAdmin";
import HeroAdmin from "../components/Admin/organisms/HeroAdmin";
import FooterAdmin from "../components/Admin/organisms/FooterAdmin";

const LayoutAdmin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 md:px-6 lg:px-8 py-4">
        <HeroAdmin />
      </div>

      <div className="flex-1 px-4 md:px-6 lg:px-8 pb-4">
        <div className="mt-2 grid grid-cols-1 md:grid-cols-[16rem,1fr] gap-6">
          <SidebarAdmin />
          <main className="space-y-8">
            <Outlet />
          </main>
        </div>
      </div>

      <footer className="border-t mt-auto px-6 md:px-8 lg:px-14 py-4 bg-white">
        <FooterAdmin />
      </footer>
    </div>
  );
};

export default LayoutAdmin;
