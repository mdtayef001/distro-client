import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.pathname || "/";

  const handleGoogle = () => {
    loginWithGoogle().then((result) => {
      const user = result.user;
      const userInfo = {
        email: user.email,
        name: user.displayName,
      };

      axiosPublic.post("/user", userInfo).then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been done",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      });
    });
  };

  return (
    <div>
      <div className="p-8">
        <button
          onClick={handleGoogle}
          className="btn w-full bg-blue-500 text-black text-lg"
        >
          <FcGoogle className="" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
