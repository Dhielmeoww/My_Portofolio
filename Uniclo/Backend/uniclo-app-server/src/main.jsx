import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import ListCelana from "./pages/ListCelana.jsx";
import ListPakaian from "./pages/ListPakaian.jsx";
import ItemProvider from "./utility/ItemProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/Pakaian", element: <ListPakaian /> },
      { path: "/Celana", element: <ListCelana /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ItemProvider>
    <RouterProvider router={router} />
  </ItemProvider>
);
