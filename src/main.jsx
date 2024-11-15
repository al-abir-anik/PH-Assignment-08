import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Support from "./components/Support/Support";
import ProductDetail from "./components/productDetails/ProductDetail";
import Products from "./Main Section/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categoryName.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../productData.json"),
          },
          {
            path: "category/:category",
            element: <Products></Products>,
            loader: () => fetch("../productData.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../productData.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../productData.json"),
      },
      {
        path: "support",
        element: <Support></Support>,
      },
      {
        path: "product/:product_id",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("../productData.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
