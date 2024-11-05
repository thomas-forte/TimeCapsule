import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Door />,
      },
      {
        path: ":year/:month/:day",
        element: <DatePage />,
        loader: async ({ params }) => {
          if (!params.year || !params.month || !params.day) {
            throw new Response("Not Found", { status: 404 });
          } else if (
            !parseInt(params.year) ||
            !parseInt(params.month) ||
            !parseInt(params.day)
          ) {
            throw new Response("Not Found", { status: 404 });
          } else {
            const date = new Date(
              `${params.year}/${params.month}/${params.day}`
            );
            if (!Number.isNaN(date.valueOf())) {
              return new Promise((resolve) =>
                setTimeout(() => resolve({ date }), 2000)
              );
            } else {
              throw new Response("Not Found", { status: 404 });
            }
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
