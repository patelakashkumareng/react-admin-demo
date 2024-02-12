import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login";
import AdminList from "./pages/admin/AdminList";
import CreateAdmin from "./pages/admin/CreateAdmin";
import Dashboard from "./pages/dashboard/Dashboard";
import PageNotFound from "./pages/base/pageNotFound";
import Banner from "./pages/banner/Banner";
import CreateBanner from "./pages/banner/CreateBanner";

import RequireAuth from "./routes/RequireAuth";
const routes = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "*", element: <PageNotFound /> },
  {
    element: <RequireAuth />,
    children: [
      { path: "/", element: <Dashboard PageTitle="dashboard" /> },
      { path: "/admin/list", element: <AdminList /> },
      { path: "/admin/create", element: <CreateAdmin /> },
      { path: "/banner/list", element: <Banner /> },
      {
        path: "/banner/create",
        element: (
          <CreateBanner
            title={"Create Banner"}
            description={"Forn For Create Banner"}
          />
        ),
      },
    ],
  },
]);

export default routes;
