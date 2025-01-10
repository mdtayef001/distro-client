import { Helmet } from "react-helmet-async";
import {
  FaCalendar,
  FaHome,
  FaJediOrder,
  FaResearchgate,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <section className="flex gap-4 container mx-auto">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      {/* nav */}
      <section className="w-72 h-screen bg-orange-400">
        <ul className="menu gap-4 p-4 text-white font-semibold text-lg">
          <li>
            <NavLink to={"/dashboard/user"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaResearchgate />
              Reservation
            </NavLink>
          </li>

          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaStar />
              Add a review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaCalendar />
              My Booking
            </NavLink>
          </li>
          <div className="border border-white opacity-40 my-10 "></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaJediOrder />
              Order
            </NavLink>
          </li>
        </ul>
      </section>
      {/* content */}
      <section className="flex-1 p-8">
        <Outlet />
      </section>
    </section>
  );
};

export default DashboardLayout;
