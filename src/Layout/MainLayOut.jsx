import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navber/Navbar";
import Footer from "../shared/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayOut;
