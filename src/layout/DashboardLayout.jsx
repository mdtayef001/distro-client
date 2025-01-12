import { Helmet } from "react-helmet-async";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaJediOrder,
  FaList,
  FaResearchgate,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();

  const adminLinks = (
    <>
      <li>
        <NavLink to={"/dashboard/adminHome"}>
          <FaHome />
          Admin Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/addItems"}>
          <FaUtensils />
          Add Items
        </NavLink>
      </li>

      <li>
        <NavLink to={"/dashboard/manageItems"}>
          <FaList />
          Manage Items
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/bookings"}>
          <FaBook />
          Manage Bookings
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard/allUsers"}>
          <FaUsers />
          All Users
        </NavLink>
      </li>
    </>
  );
  const userLinks = (
    <>
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
    </>
  );

  return (
    <section className="flex gap-4 container mx-auto">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      {/* nav */}
      <section className="w-72 h-screen bg-orange-400">
        <ul className="menu gap-4 p-4 text-white font-semibold text-lg">
          {/* common */}
          {isAdmin ? adminLinks : userLinks}
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
