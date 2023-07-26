import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import NavBar from "./components/layout/Navbar";
import Contact from "./pages/home/components/Contact";

export default function Router() {
    const NavbarWrapper = () => {
        return (
            <div className="h-screen overflow-y-auto">
                <NavBar />
                <Outlet />
            </div>
        );
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <NavbarWrapper />,
            children: [
                {
                    id: "home",
                    path: "/",
                    element: <Home />,
                },
                {
                    id: "blog",
                    path: "/blog",
                    element: <Blog />,
                },
                {
                    id: "contact",
                    path: "/contact",
                    element: <Contact/>,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
