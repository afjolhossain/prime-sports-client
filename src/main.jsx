import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";
import AuthProvides from "./contexts/AuthProvides.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvides>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvides>
  </StrictMode>
);
