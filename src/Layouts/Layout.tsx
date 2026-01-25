import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/Shared";

export const Layout = () => {
  return (
    <>
      <Header />

      <main className="">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
