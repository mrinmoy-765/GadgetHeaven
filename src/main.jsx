import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails.jsx";
import Offer from "./components/Offer/Offer.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "Gadgets/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/dashboard",
        
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
