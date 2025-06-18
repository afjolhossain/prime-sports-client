import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AddProduct from "../pages/AddProduct/AddProduct";

import Details from "../pages/Details/Details";
import AllServices from "../pages/AllServices/AllServices";
import MyOrder from "../pages/my-order/MyOrder";
import PrivateRoute from "./privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <p>Page not fount</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "All-Products",
        element: <AllServices></AllServices>,
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://prime-play-sports-server.vercel.app/products/${params.id}`
          ),
      },

      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
      {
        path: "addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "myorder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
