import App from "@/App";
import ErrorPage from "@/pages/errorPage";
import { createBrowserRouter, redirect } from "react-router-dom";
import { MasterSignIn } from "./pages/masterSignIn";
import { Dashboard } from "@/pages/dashboard/dashboard";
import { Customers } from "@/pages/customers/customers";
import { Settings } from "./pages/settings.tsx/settings";
import { CreateCustomer } from "@/pages/customers/components/createCreate";
import { CustomerDashboard } from "./pages/customers/components/customerDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: loginLoader,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
        children: [
          {
            path: "",
            element: <CustomerDashboard />,
          },
          {
            path: "create",
            element: <CreateCustomer />,
          },
        ],
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/signin",
    element: <MasterSignIn />,
  },
]);

async function loginLoader() {
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null;
  if (!token) return redirect("/signin");
  return null;
}
