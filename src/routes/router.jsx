import App from "@/App";
import EquityBasedInvestment from "@/pages/EquityBasedInvestment/EquityBasedInvestment";


import Balance from "@/pages/UserDashboard/Balance";
import Home from "@/pages/UserDashboard/Home";
import UserDashboard from "@/pages/UserDashboard/UserDashboard";
import InvestmentListPage from "@/pages/EquityBasedInvestment/wallet/InvestmentListPage";
import { createBrowserRouter } from "react-router-dom";
import EquityBasedAnalytics from "@/pages/EquityBasedInvestment/EquityBasedAnalytics";
import EquityBasedHome from "@/pages/EquityBasedInvestment/EquityHome/EquityBasedHome";
import UploadTaxInformation from "@/pages/EquityBasedInvestment/UploadTaxInformation";
import SalesByCategory from "@/pages/EquityBasedInvestment/SalesByCategory";
import WalletEquityBasedInvestment from "@/pages/EquityBasedInvestment/WalletEquityBasedInvestment";
import Pricing from "@/pages/EquityBasedInvestment/wallet/Pricing";
import TotaleExpenses from "@/pages/EquityBasedInvestment/EquityHome/TotalExpenses";
import HelpSupport from "@/pages/EquityBasedInvestment/EquityHome/HelpSupport";
import RequestPayment from "@/pages/EquityBasedInvestment/EquityHome/RequestPayment";
import TotalIncome from "@/pages/EquityBasedInvestment/EquityHome/TotalIncome";
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
    path: "equitybased-investment",
    element: <EquityBasedInvestment></EquityBasedInvestment>,
    children: [
     
      {
          path:'equity-home',
          element: <EquityBasedHome/>
      },
      {
        path:'request_payment',
        element: <RequestPayment/>
    },
      {
        path:"helpSupport",
        element:<HelpSupport/>
      },
      
      {
        path:'total_expense',
        element: <TotaleExpenses/>
    },
      {
        path:'total_income',
        element: <TotalIncome/>
    },
    
      {
        path: 'analytics',
        element: <EquityBasedAnalytics></EquityBasedAnalytics>
      },
      {
        path: "analytics/sales-by-category",
        element: <SalesByCategory></SalesByCategory>,
      },
      {
        path: "analytics/upload-tax-info",
        element: <UploadTaxInformation></UploadTaxInformation>,
      },
      {
        path: "/equitybased-investment/wallet",
        element: <WalletEquityBasedInvestment></WalletEquityBasedInvestment>,
      },
      {
        path: "investment_list",
        element: <InvestmentListPage />,
      },
      {
        path: "/equitybased-investment/pricing",
        element: <Pricing></Pricing>,
      }
    ],
  },
]);
