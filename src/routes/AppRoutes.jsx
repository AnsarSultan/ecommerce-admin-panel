import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Settings from "../pages/Settings";
import OrderDetail from "../pages/OrderDetail";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "../authentication/ProtectedRoutes";

export default function AppRoutes(){
    const routes = useRoutes([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              ),
            children:[
                {index: true , element: <Home/>},
                {path:'/orders' , element: <Orders/>},
                { path: "/orders/order-detail", element: <OrderDetail /> },
                {path:'/products' , element:<Products/>},
                {path:'/customers' , element: <Customers/>},
                {path: '/settings' , element: <Settings/>},
            ]
        },
        
        {path: '/sign-in' , element: <Login/>},
        {path: '/sign-up' , element: <SignUp/>},

    ]);
    return routes;
}