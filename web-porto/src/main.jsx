import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Biodata from "./Pages/Biodata";
import Edukasi from "./Pages/Edukasi";
import Keahlian from "./Pages/Keahlian";
import Pengalaman from "./Pages/Pengalaman";
import Kontak from "./Pages/Kontak";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Biodata /> },
      { path: "Pendidikan", element: <Edukasi /> },
      { path: "Keahlian", element: <Keahlian /> },
      { path: "Kontak", element: <Kontak /> },
      { path: "Exp", element: <Pengalaman /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
 
);
