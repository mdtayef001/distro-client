import { useContext } from "react";
import AuthContext from "../provider/AuthContext/AuthContext";

const useAuth = () => {
  const userContext = useContext(AuthContext);
  return userContext;
};

export default useAuth;
