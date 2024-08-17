import App from "@/App";
import Analytics from "@/pages/UserDashboard/Analytics";
import Balance from "@/pages/UserDashboard/Balance";
import Home from "@/pages/UserDashboard/Home";
import Pricing from "@/pages/UserDashboard/Pricing";
import SalesByCategory from "@/pages/UserDashboard/SalesByCategory";
import UploadTaxInformation from "@/pages/UserDashboard/UploadTaxInformation";
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
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "analytics",
        element: <Analytics></Analytics>,
      },
      {
        path: 'analytics/sales-by-category',
        element: <SalesByCategory></SalesByCategory>
      },
      {
        path: 'analytics/upload-tax-info',
        element: <UploadTaxInformation></UploadTaxInformation>
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "/user-dashboard/investment_list",
        element: <InvestmentListPage />,
      },
    ],
  },
]);
