import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [captcha, setCaptcha] = useState("");
  const [required, setRequired] = useState(true);
  const navigate = useNavigate();

  const { loginUser } = useAuth();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

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
        navigate("/");
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  const matchCaptcha = () => {
    if (validateCaptcha(captcha)) {
      setRequired(false);
    } else {
      setRequired(true);
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
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="input input-bordered"
                  required
                />
                <button onClick={matchCaptcha} className="btn btn-sm">
                  Validate
                </button>
              </div>
              <label className="label">
                <p>
                  Don&apos;t have account{" "}
                  <Link className="text-red-400 text-lg" to={"/auth/signup"}>
                    Create One
                  </Link>
                </p>
              </label>
              <div className="form-control mt-6">
                <button disabled={required} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
