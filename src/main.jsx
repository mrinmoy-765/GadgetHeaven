import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Home from "./components/Home/Home.jsx";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails.jsx";
import Offer from "./components/Offer/Offer.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // ✅ Root wraps all pages
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "Gadgets/:product_id",
        element: <GadgetDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        loader: () => fetch("/data.json"),
      },
      { path: "/offer", element: <Offer /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
