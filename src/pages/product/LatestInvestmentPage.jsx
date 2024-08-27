import { latestInvestmentDataApi } from "@/api/latestInvestmentDataApi";
import LatestInvestmentTable from "@/components/products/LatestInvestmentTable";
import Header from "../UserDashboard/Header";

function LatestInvestmentPage({ onButtonClick }) {
  return (
    <>
      <Header />
      <div className="px-4 py-2">
        <LatestInvestmentTable
          title="Latest Investment"
          data={latestInvestmentDataApi}
          onButtonClick={onButtonClick}
          details
        />
      </div>
    </>
  );
}

export default LatestInvestmentPage;
