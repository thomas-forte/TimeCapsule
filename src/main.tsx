import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

// styles
import "./index.css";
import "@fontsource/oxanium/400.css";

// components
import { Layout } from "./components/Layout.tsx";
import { Door } from "./components/Door.tsx";

// pages
import { DatePage } from "./pages/DatePage.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "",
        element: <Door />,
      },
      {
        path: ":year/:month/:day",
        element: <DatePage />,
        loader: async ({ params }) => {
          // check if values are present
          if (!params.year || !params.month || !params.day) {
            return redirect("/invalid-date");
          }

          // check if values are numbers
          if (
            !parseInt(params.year) ||
            !parseInt(params.month) ||
            !parseInt(params.day)
          ) {
            return redirect("/invalid-date");
          }

          // check if values are a valid date
          const date = new Date(`${params.year}/${params.month}/${params.day}`);
          if (!Number.isNaN(date.valueOf())) {
            return new Promise((resolve) =>
              setTimeout(() => resolve({ date }), 2000)
            );
          } else {
            return redirect("/invalid-date");
          }
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
