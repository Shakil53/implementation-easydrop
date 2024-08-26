import App from "@/App";
import EquityBasedInvestment from "@/pages/EquityBasedInvestment/EquityBasedInvestment";

import LatestInvestmentPage from "@/pages/product/LatestInvestmentPage";
import LatestOrderPage from "@/pages/product/LatestOrderPage";
import PopularAssetsPage from "@/pages/product/PopularAssetsPage";
import ProductHome from "@/pages/product/ProductHome";
import Balance from "@/pages/UserDashboard/Balance";
import Home from "@/pages/UserDashboard/Home";
import UserDashboard from "@/pages/UserDashboard/UserDashboard";
import InvestmentListPage from "@/pages/EquityBasedInvestment/wallet/InvestmentListPage";
import { createBrowserRouter } from "react-router-dom";
import EquityBasedAnalytics from "@/pages/EquityBasedInvestment/EquityBasedAnalytics";
import EquityBasedHome from "@/pages/EquityBasedInvestment/EquityBasedHome";
import UploadTaxInformation from "@/pages/EquityBasedInvestment/UploadTaxInformation";
import SalesByCategory from "@/pages/EquityBasedInvestment/SalesByCategory";
import WalletEquityBasedInvestment from "@/pages/EquityBasedInvestment/WalletEquityBasedInvestment";
import Pricing from "@/pages/EquityBasedInvestment/wallet/Pricing";
// import Home2 from "@/pages/UserDashboard/Home2";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
   // User dashboard -----------with child
  {
    path: "/user-dashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/user-dashboard/home",
        element: <Home></Home>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      
    ],
  },
  // Equity based -----------with child
  {
    path: 'equitybased-investment',
    element: <EquityBasedInvestment></EquityBasedInvestment>,
    children: [
      {
        path: 'equitybased-investment/home',
        element: <EquityBasedHome></EquityBasedHome>
      },
      {
        path: 'analytics',
        element: <EquityBasedAnalytics></EquityBasedAnalytics>
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
        path: 'wallet',
        element: <WalletEquityBasedInvestment></WalletEquityBasedInvestment>
      },
      {
        path: "investment_list",
        element: <InvestmentListPage />,
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
        path: 'pricing',
        element: <Pricing></Pricing>
      },
      
    ]
  },
]);
