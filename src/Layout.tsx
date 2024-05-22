import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { useLayoutEffect } from "react";

const Layout = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <main className="relative flex flex-col items-center bg-background min-h-screen">
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
