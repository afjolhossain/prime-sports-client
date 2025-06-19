import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../hooks/UseAuth";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("successful sign out");
      })
      .catch((error) => {
        console.log("failed to sign out .stay here. dont leave me alone");
      });
  };
  const links = (
    <>
      <li className="hover:text-red-800 transition duration-200 ease-in">
        <NavLink to="/">HOME</NavLink>
      </li>
      <li className="hover:text-red-800 transition duration-200 ease-in">
        <NavLink to="/All-Products">PRODUCTS</NavLink>
      </li>
      <li className="hover:text-red-800 transition duration-200 ease-in">
        <NavLink>BLOGS</NavLink>
      </li>
      {user && (
        <>
          <li className="hover:text-red-800 transition duration-200 ease-in">
            <NavLink to="/addproduct">ADD-PRODUCTS</NavLink>
          </li>
          <li className="hover:text-red-800 transition duration-200 ease-in">
            <NavLink to="/myorder">MY-ORDER</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black z-10 fixed top-0 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-10 w-52 p-5 gap-2 shadow"
          >
            {links}
          </ul>
        </div>

        <img className="w-12" src={logo} alt="" />
        <a className="btn btn-ghost text-xl  ">
          <span className="text-red-600 ">PRIMEPLAY</span> SPORTS
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 ">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <>
            <p className="text-red-400 mr-4">{user.email}</p>
            <button onClick={handleSignOut}>SignOut</button>
          </>
        ) : (
          <Link to="/login">
            <CgProfile className="text-3xl mr-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
