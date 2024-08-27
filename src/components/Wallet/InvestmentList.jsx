import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useState } from "react";

function InvestmentList({ data, details }) {
  // State for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Define how many items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const maxPageNumbersToShow = 3; // Number of pages to show at a time

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate page numbers to display
  const pageNumbers = [];
  const halfMaxPages = Math.floor(maxPageNumbersToShow / 2);
  let startPage = Math.max(1, currentPage - halfMaxPages);
  let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage < maxPageNumbersToShow - 1) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-center">Ownership</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.date}</TableCell>
              <TableCell>{data.amount} Tk</TableCell>
              <TableCell
                className={
                  data.status === "Pending"
                    ? "text-[#D61D1D]"
                    : "text-[#00E676]"
                }
              >
                {data.status}
              </TableCell>
              <TableCell className="text-center">{data.ownership}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* InvestMent List Pagination */}
        {/* <div className="text-right py-8"> */}

        {/* </div> */}
      </Table>
      {details && (
        <div className="text-right py-4">
          <Pagination>
            <PaginationContent className="inline-flex">
              <PaginationItem className="border-2 rounded-md">
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
              </PaginationItem>

              {/* Display first page and ellipsis */}
              {startPage > 1 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(1)}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {startPage > 2 && <PaginationEllipsis />}
                </>
              )}

              {/* Display page numbers */}
              {pageNumbers.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(page)}
                    className={`${
                      currentPage === page
                        ? "bg-[#64449B] text-white"
                        : "hover:bg-[#64449B] hover:text-white"
                    }`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {/* Display ellipsis and last page */}
              {endPage < totalPages && (
                <>
                  {endPage < totalPages - 1 && <PaginationEllipsis />}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(totalPages)}
                    >
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem className="border-2 rounded-md">
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </>
  );
}

export default InvestmentList;
