import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/Auth/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRouts from "./PrivateRouts";
import AlUsers from "../pages/Dashboard/All-Users/AllUsers";
import AdminRouts from "./AdminRouts";
import Additems from "../pages/Dashboard/AddItems/Additems";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdataItems/UpdateItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouts>
        <DashboardLayout />
      </PrivateRouts>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "/dashboard/cart",
        element: <Cart />,
      },
      // admin routs
      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRouts>
            <AlUsers />
          </AdminRouts>
        ),
      },
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRouts>
            <Additems />
          </AdminRouts>
        ),
      },
      {
        path: "/dashboard/manageItems",
        element: (
          <AdminRouts>
            <ManageItems />
          </AdminRouts>
        ),
      },
      {
        path: "/dashboard/update/:id",
        element: (
          <AdminRouts>
            <UpdateItems />
          </AdminRouts>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menus/${params.id}`),
      },
    ],
  },

  {
    path: "*",
    element: (
      <div>
        Error ....
        <Link to={"/"} className="btn">
          Home
        </Link>
      </div>
    ),
  },
]);

export default router;
