import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeckBuilder from "./pages/DeckBuilder";
import Home from "./pages/Home";
import TierList from "./pages/TierList";
import Layout from "./Layout/Layout";
import "./index.css";
import CardDetail from "./pages/CardDetail";
import DeckStore from "./pages/DeckStore";

import DeckProvider from "../Utility/DeckProvider";
import SearchProvider from "../Utility/SearchProvider";
import DarkMode from "../Utility/DarkMode";
import { Provider } from "react-redux";
import store from "./redux/store";
import LoginPage from "./pages/formlogin/LoginPage";
import AdminPage from "./pages/formlogin/AdminPage";
import PageHandling from "./pages/formlogin/PageHandling";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "DeckBuilder", element: <DeckBuilder /> },
      { path: "TierList", element: <TierList /> },
      { path: "Store", element: <DeckStore /> },
      {
        path: "Admin",
        element: <PageHandling />,
      },
      { path: "Login", element: <LoginPage /> },
      { path: "card/:cardId?", element: <CardDetail /> },
    ],
  },

  // {
  //   path: "Admin", element: <PageHandling />
  // }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkMode>
    <DeckProvider>
      <SearchProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      </SearchProvider>
    </DeckProvider>
  </DarkMode>
);
