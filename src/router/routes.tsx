import MainLayout from "@/components/layout/MainLayout";
import IndexPage from "@/pages/index/IndexPage";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: '/',
                element: <IndexPage />,
            }
        ]
    }
];

const router = createBrowserRouter(routes);
export default router;