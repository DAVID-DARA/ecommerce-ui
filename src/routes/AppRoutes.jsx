import { createBrowserRouter, RouterProvider } from "react-router";

const AppRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <h1>Welcome to Lorem Lorem</h1>
        }
    ])
        
    return (
        <RouterProvider router={router} />
    )
}


export default AppRoutes;