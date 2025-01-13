import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Loading from "../components/Loading";

const axiosInstance = axios.create({
  // baseURL: "https://server-mu-two-63.vercel.app",
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  // for all secure request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // for all secure response
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logOut();
        navigate("/auth/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
