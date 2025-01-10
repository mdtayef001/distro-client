import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useAuth();
  const [required, setRequired] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const location = useLocation();
  const from = location?.state?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const initialData = new FormData(e.target).entries();
    const formData = Object.fromEntries(initialData);
    const email = formData.email;
    const password = formData.password;

    // login user
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: `${user.displayName}, Login Success`,
          icon: "success",
        });
        navigate(from);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  const matchCaptcha = (e) => {
    if (validateCaptcha(e.target.value)) {
      return setRequired(false);
    } else {
      return setRequired(true);
    }
  };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  placeholder="Type the captcha"
                  onBlur={matchCaptcha}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button disabled={required} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>

            <p className="text-center mb-5">
              Don&apos;t have account{" "}
              <Link
                className="text-red-400 text-lg link link-hover"
                to={"/auth/signup"}
              >
                Create One
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
