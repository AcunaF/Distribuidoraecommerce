import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import bebidas from "./Data/bebidas.js";
import BebidasView from "./views/BebidasView.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

bebidas.forEach((bebida) => {
  routes.push({
    path: bebida.name,
    element: <BebidasView bebidas={bebida} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
