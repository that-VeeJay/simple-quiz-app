import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/form/:category", element: <Quiz /> },
    { path: "*", element: <NotFoundPage /> }
];

const router = createBrowserRouter(routes);

export default function App() {
    return <RouterProvider router={router} />;
}
