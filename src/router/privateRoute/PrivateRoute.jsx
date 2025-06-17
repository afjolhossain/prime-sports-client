import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-ring loading-lg bg-red-700"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/Login" state={location?.pathname}></Navigate>;
};

export default PrivateRoute;
