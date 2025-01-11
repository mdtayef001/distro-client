import PropTypes from "prop-types";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRouts = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, adminLoading] = useAdmin();

  const location = useLocation();

  if (loading || adminLoading) {
    return <Loading />;
  }

  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} state={location} />;
  }
};

AdminRouts.propTypes = {
  children: PropTypes.array,
};

export default AdminRouts;
