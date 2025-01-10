import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Auth/Login";
import AuthLayout from "../layout/AuthLayout";
import Signup from "../pages/Auth/Signup";
// import PrivateRouts from "./PrivateRouts";

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
