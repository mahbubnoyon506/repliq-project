import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Error";

import Home from "../pages/Home";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <SignIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    },

])
export default routes;