// # lib
import { Outlet } from "react-router-dom";

// # layout
import { Header, Sidebar, Footer } from "@core/layout";

const Main = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
