import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { Home } from "../pages/home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // back office
      {
        path: "/",
        element: <Home />,
      },
   
    ],
  },
]);

export default router;
