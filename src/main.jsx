import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen.jsx";
import Home from "./pages/Home.jsx";
import Parc from "./pages/Parc.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <SplashScreen />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/parc",
        element: <Parc />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
