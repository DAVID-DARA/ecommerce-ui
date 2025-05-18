import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage/HomePage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
