import { Link, useLocation, useNavigate } from "react-router-dom";
import registerImage from "../../../assets/logo/register-image.png";
import { useState } from "react";
import useAuth from "../../../hooks/UseAuth";

const Register = () => {
  const { createUser } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  console.log("in signIn page", location);
  const from = location.state || "/";
  // start register :
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError(" Password must include at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError(" Password must include at least one lowercase letter.");
      return;
    }

    console.log(name, email, password);
    const newUser = { displayName: name, email, password };
    createUser(email, password)
      .then((result) => {
        console.log(result?.user);
        fetch("https://prime-play-sports-server.vercel.app/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setSuccess(true);
            navigate(from);
          });
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
      });

    form.reset();
  };
  return (
    <div className=" bg-white max-w-7xl ">
      <div
        className=" max-w-md
       py-6 mx-auto"
      >
        <div>
          <div className="text-black  mt-16 space-y-3 max-w-md mx-auto bg-stone-100 p-6 ">
            <h1 className="text-2xl font-bold text-center">Create Account</h1>
            <form
              onSubmit={handleRegister}
              noValidate=""
              action=""
              className="space-y-3 w-96 p-4"
            >
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="Name"
                  className="bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="username" className="block">
                  Email
                </label>
                <input
                  type="Email"
                  name="email"
                  id="username"
                  placeholder="Entre Your Email"
                  className="bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block  font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="bg-white border border-gray-300 focus:border-red-500 focus:outline-none p-2 rounded w-full "
                />
                <div className="flex justify-end text-xs ">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:text-red-800 transition duration-300 ease-in font-bold"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className=" flex justify-between text-white ">
                <button
                  type="submit"
                  className="block bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center "
                >
                  Create
                </button>

                <Link
                  to="/"
                  className="block bg-red-600 hover:bg-slate-400 hover:text-black transition duration-400 ease-in px-3 py-1 text-center "
                >
                  Retrun Home
                </Link>
              </div>
            </form>
            {error && (
              <div
                role="alert"
                className="alert alert-error md:w-11/12 mx-auto sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-red-950">{error}</span>
              </div>
            )}
            {success && (
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span> Registered is successFully </span>
              </div>
            )}
            <div className="flex items-center pt-4 space-x-1  ">
              <div className="flex-1 h-px sm:w-16 bg-red-500 "></div>
              <p className="px-3 text-sm text-black">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-red-500"></div>
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

            <div className=" text-center">
              <span className="text-xs text-center">
                Allready have an account?
                <Link
                  to="/login"
                  className="text-yellow-700 hover:text-red-800 transition duration-200 ease-in font-bold underline ml-2"
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
