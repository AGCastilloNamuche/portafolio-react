import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
// import appLayout from "./layouts/AppLayout";
import Home from "./pages/public/Home";
import Login from "./pages/public/Login";
import NotFound from "./pages/NotFound";
import Forbidden from "./pages/Forbidden";
import About from "./pages/public/about";
import Services from "./pages/public/Services";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "not-found",
                element: <NotFound/>
            },
            {
                path: "forbidden",
                element: <Forbidden/>
            }
        ]
    }
])
