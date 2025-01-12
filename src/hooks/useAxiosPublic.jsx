import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-mu-two-63.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
