import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectAuthenticate";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import HomeAdmin from "../pages/HomeAdmin";
import Edit from "../pages/Edit";
import Detail from "../pages/Detail";
import AddItem from "../pages/AddItem";
import LoginAdmin from "../pages/LoginAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/HomeAdmin",
    element: <HomeAdmin />,
  },
  {
    path: "/Login",
    element: (
      <RedirectIfAuthenticate>
        <Login />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: "/LoginAdmin",
    element: (
      <RedirectIfAuthenticate>
        <LoginAdmin />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: "/Register",
    element: (
      <RedirectIfAuthenticate>
        <Register />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: "/Edit",
    element: (
      <ProtectedRoute>
        <Edit />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Detail",
    element: (
      <ProtectedRoute>
        <Detail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/AddItem",
    element: (
      <ProtectedRoute>
        <AddItem />
      </ProtectedRoute>
    ),
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
