import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Edit",
    element: <Edit />,
  },
  {
    path: "/Detail",
    element: <Detail />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
