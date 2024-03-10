import App from "@/App";
import ErrorPage from "@/pages/errorPage";
import { createBrowserRouter, redirect } from "react-router-dom";
import { MasterSignIn } from "./pages/masterSignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: loginLoader,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <MasterSignIn />,
  },
]);

async function loginLoader() {
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")!) : null;
  if (!token) {
    return redirect("/signin");
  }
  return null;
}
