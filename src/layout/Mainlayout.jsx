import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");

  return (
    <>
      {isLogin || (
        <header className="container mx-auto">
          <Navbar />
        </header>
      )}
      <main className="container mx-auto">
        <Outlet />
      </main>
      {isLogin || (
        <footer className="container mx-auto">
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Mainlayout;
