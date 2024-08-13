import InvestmentList from "@/components/Wallet/InvestmentList";
import Header from "../UserDashboard/Header";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { data } from "@/api/InvestmentListDataApi";
import InvestmentButton from "@/components/Wallet/InvestmentButton";
import { FaPlus } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";

function InvestmentListPage() {
  return (
    <>
      {/*--------- Header----------  */}
      <Header />

      {/* -----------Investment Details page ---------- */}

      <div className="mt-4 p-4 shadow-md">
        {/* ----------- Investment Details page ----------- */}
        <div className="flex flex-row justify-between items-center md:px-2">
          <p className="text-[14px] md:text-[24px] text-[#484646] font-semibold mb-4 sm:mb-0 sm:text-center mt-4">
            Investment List
          </p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            <InvestmentButton icon={<RiDownload2Fill />} label="Export CSV" />
            <InvestmentButton icon={<FaPlus />} label="Add Invest" />
          </div>
        </div>

        <InvestmentList data={data} />

        {/* InvestMent List Pagination */}
        <div className="text-right py-8">
          <Pagination>
            <PaginationContent className="inline-flex">
              <PaginationItem className="border-2 rounded-md">
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="bg-[#64449B] rounded-md text-white hover:bg-[#64449B] hover:text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="border-2 rounded-md">
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default InvestmentListPage;
