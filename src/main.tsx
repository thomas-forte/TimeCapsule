import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { App } from "./App.tsx";
import { DatePage } from "./pages/DatePage.tsx";
import { ErrorPage } from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
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
              return { date };
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
