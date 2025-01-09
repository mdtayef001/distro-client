import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="container mx-auto">
      <Outlet />
    </section>
  );
};

export default AuthLayout;
