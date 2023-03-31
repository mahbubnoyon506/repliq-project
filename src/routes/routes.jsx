import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Error";

import Home from "../pages/Home";
import FilterPage from "../pages/FilterPage";
import Product from "../components/Products/Product";
import Cart from "../components/Products/Cart";
import Wishlist from "../components/Products/Wishlist";
import Checkout from "../components/Products/Checkout";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminsDashboard from "../pages/dashboard/AdminDashboard/AdminsDashboard";
import Orders from "../pages/dashboard/AdminDashboard/Orders";
import Customers from "../pages/dashboard/AdminDashboard/Customers";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:category",
        element: <FilterPage />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {},
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <AdminsDashboard />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: 'customers',
        element: <Customers /> 
      },
      {},
    ],
  },
]);
export default routes;
