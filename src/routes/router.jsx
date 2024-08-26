import App from "@/App";
import LatestInvestmentPage from "@/pages/product/LatestInvestmentPage";
import LatestOrderPage from "@/pages/product/LatestOrderPage";
import PopularAssetsPage from "@/pages/product/PopularAssetsPage";
import ProductHome from "@/pages/product/ProductHome";
import Analytics from "@/pages/UserDashboard/Analytics";
import Balance from "@/pages/UserDashboard/Balance";
import Home from "@/pages/UserDashboard/Home";
import Orders from "@/pages/UserDashboard/Orders";
import Pricing from "@/pages/UserDashboard/Pricing";
import ResellerReferrals from "@/pages/UserDashboard/ResellerReferrals";
import Settings from "@/pages/UserDashboard/Settings";
import Store from "@/pages/UserDashboard/Store";
import UserDashboard from "@/pages/UserDashboard/UserDashboard";
import InvestmentListPage from "@/pages/wallet/InvestmentListPage";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/user-dashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/user-dashboard/home",
        element: <Home></Home>,
      },

      // {

      //     path: 'home',
      //     element: <Home></Home>
      // },
      {
        path: "store",
        element: <Store></Store>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
      {
        path: "reseller-referrals",
        element: <ResellerReferrals></ResellerReferrals>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: "settings",
        element: <Settings></Settings>,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "/user-dashboard/product/assets",
        element: <PopularAssetsPage />,
      },
      {
        path: "/user-dashboard/product/investment",
        element: <LatestInvestmentPage />,
      },
      {
        path: "/user-dashboard/product/order",
        element: <LatestOrderPage />,
      },
      {
        path: "/user-dashboard/product/home",
        element: <ProductHome />,
      },
      {
        path: "/user-dashboard/investment_list",
        element: <InvestmentListPage />,
      },
    ],
  },
]);
