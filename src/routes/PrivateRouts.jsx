import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRouts = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to={"/auth/login"} />;
  }
};

PrivateRouts.propTypes = {
  children: PropTypes.object,
};

export default PrivateRouts;
