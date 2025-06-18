import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import { useState } from "react";
const Login = () => {
  const { singInUser } = useAuth();
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log("in signIn page", location);
  const from = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    singInUser(email, password)
      .then((result) => {
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });

    form.reset();
  };
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <div>
        <div className="py-10 ">
          <div className=" text-black  mt-16 space-y-3 max-w-md mx-auto bg-stone-100 p-6 ">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form
              onSubmit={handleLogin}
              noValidate=""
              action=""
              className="space-y-3 "
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full"
                />
              </div>
              <div className="space-y-1 text-sm">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" Enter Password"
                  className="bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full"
                />
                <div className="flex justify-end text-xs hover:text-red-800 transition duration-200 ease-in ">
                  <a rel="noopener noreferrer" href="#">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className=" flex justify-between text-white ">
                <button
                  type="submit"
                  className="block bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center "
                >
                  Login
                </button>

                <Link
                  to="/"
                  className="block bg-red-600 hover:bg-slate-400 hover:text-black transition duration-400 ease-in px-3 py-1 text-center "
                >
                  Retrun Home
                </Link>
              </div>

              <span className="text-yellow-400">{error}</span>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px bg-red-700 sm:w-16"></div>
              <p className="px-3 text-sm  hover:text-red-800 transition duration-200 ease-in">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-red-700 "></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="btn bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full text-black shadow-none">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            <p className="text-xs text-center sm:px-6 ">
              Don't have an account?
              <Link
                className="text-yellow-700 font-bold underline ml-2 hover:text-red-800 transition duration-200 ease-in"
                to="/register"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
