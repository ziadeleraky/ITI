import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserDetail from "./Components/UserDetail/UserDetail";
import Add from "./Components/Add/Add";

const routes = createBrowserRouter([
  {
    path: "/movies",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      {
        path: ":id",
        element: <UserDetail />,
      },
      {
        path: "add",
        element: <Add />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={routes}></RouterProvider>);
