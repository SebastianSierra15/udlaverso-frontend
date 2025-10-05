import { Outlet } from "react-router-dom";
import Header from "../components/Shared/organisms/Header";
import Footer from "../components/Shared/organisms/Footer";

const Layout = () => {
  return (
    <>
      <Header />

      <main className="pt-[70px] space-y-10">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
