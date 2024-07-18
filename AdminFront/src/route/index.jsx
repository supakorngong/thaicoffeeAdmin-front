import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfLogged from "../feature/authentication/component/RedirectIfLogged";
import ProtectedRoute from "../feature/authentication/component/ProtectedRoute";
import { lazy } from "react";
import LoginPage from "../pages/LoginPage";

//page component layout
// const LoginPage = lazy(() => import("../pages/LoginPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const MainContainer = lazy(() => import("../layout/MainContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //guard ว่าเข้าไปได้มั้ย
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    path: "/login",
    element: (
      <RedirectIfLogged>
        <LoginPage />
      </RedirectIfLogged>
    ),
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
