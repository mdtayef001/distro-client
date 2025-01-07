import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Mainlayout = () => {
  return (
    <>
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main className="container mx-auto">
        <Outlet />
      </main>
      <footer className="container mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Mainlayout;
