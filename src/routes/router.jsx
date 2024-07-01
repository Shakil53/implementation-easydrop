import App from "@/App";
import Balance from "@/pages/UserDashboard/Balance";
import BoostRequest from "@/pages/UserDashboard/BoostRequest";
import Home from "@/pages/UserDashboard/Home";
import Orders from "@/pages/UserDashboard/Orders";
import ResellerReferrals from "@/pages/UserDashboard/ResellerReferrals";
import Settings from "@/pages/UserDashboard/Settings";
import Store from "@/pages/UserDashboard/Store";
import UserDashboard from "@/pages/UserDashboard/UserDashboard";

import {  createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {   
        path: '/user-dashboard',
        element: <UserDashboard></UserDashboard>,
        children: [
           
            {
                index: true,
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'store',
                element: <Store></Store>
            },
            {
                path: 'orders',
                element: <Orders></Orders>
            },
            {
                path: 'reseller-referrals',
                element: <ResellerReferrals></ResellerReferrals>
            },
            {
                path: 'balance',
                element: <Balance></Balance>
            },
            {
                path: 'boost-request',
                element: <BoostRequest></BoostRequest>
            },
            {
                path: 'settings',
                element: <Settings></Settings>
            }
        ]
    }
])