import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import UserDetail from "./Components/UserDetail/UserDetail";
import Add from "./Components/Add/Add";
import { Provider } from "react-redux";
import store from "./redux/store/store";

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
console.log(store.getState());

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes}></RouterProvider>
  </Provider>
);
