import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { AuthProvider, TicketProvider } from "./context";
import { DashboardLayout, ProtectedRoute } from "./layouts";
import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Error,
  Login,
  NotFound,
  Signup,
  AddTicket,
  Dashboard,
  TicketDetail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "tickets",
        element: <AddTicket />,
      },
      {
        path: "tickets/:id",
        element: <TicketDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <TicketProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            padding: "16px",
          },
          duration: 3000,
        }}
      />
    </TicketProvider>
  </AuthProvider>
);
