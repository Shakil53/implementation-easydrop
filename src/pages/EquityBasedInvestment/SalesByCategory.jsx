import { useState } from 'react';
import { tableDatasSalesByCategory } from "@/api/salesByCategoryAnalytics";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";



const SalesByCategory = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const totalPages = Math.ceil(tableDatasSalesByCategory.length / itemsPerPage);
    const maxPageNumbersToShow = 3;

    // Get data for the current page
    const currentData = tableDatasSalesByCategory.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return; // Ensure page number is within bounds
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
            {/* Header Section */}
            <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
                <div className="flex items-center gap-28 md:gap-5 sm:flex-row-reverse">
                    <div className="flex gap-3">
                        <div className="flex sm:flex-row-reverse gap-3 items-center">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-bold text-xl">Shakil</p>
                                <p className="text-[#8F8F8F] font-semibold">User Id: TODO</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <IoNotifications />
                    </div>
                </div>

                <div className="hidden sm:block">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger><IoIosArrowDown /></MenubarTrigger>
                            <MenubarContent className="mt-5">
                                <MenubarItem>Settings <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Print</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Share</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem>Logout</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex justify-between">
                <h1 className="font-bold sm:font-semibold text-md sm:text-3xl">Sales of Category Items</h1>
                <div className="flex gap-2 items-center">
                    <Select>
                        <SelectTrigger className="w-[65px] sm:w-[150px]">
                            <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Years</SelectLabel>
                                {[2024, 2023, 2022, 2021, 2020].map((year) => (
                                    <SelectItem key={year} value={year.toString()}>
                                        {year}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="w-[80px] sm:w-[150px]">
                            <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="jan-apr">Jan - April</SelectItem>
                                <SelectItem value="may-aug">May - Aug</SelectItem>
                                <SelectItem value="sep-dec">Sep - Dec</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table Section */}
            <div className="p-3 grid sm:grid-cols-10">
                <div className="sm:col-span-10 col-span-1 w-full min-h-[100px] rounded-lg border p-4 shadow-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px] text-md sm:text-lg">Sl No</TableHead>
                                <TableHead className="text-md sm:text-lg">Name</TableHead>
                                <TableHead className="text-md sm:text-lg">Quantity</TableHead>
                                <TableHead className="text-md sm:text-lg">Purchase Value</TableHead>
                                <TableHead className="text-md sm:text-lg">Total Value</TableHead>
                                <TableHead className="text-md sm:text-lg">Sold Value</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentData.map((data, index) => (
                                <TableRow key={data.invoice}>
                                   <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                                    <TableCell>{data.name}</TableCell>
                                    <TableCell>{data.quantity}</TableCell>
                                    <TableCell>{data.purchse_value}</TableCell>
                                    <TableCell>{data.total_value}</TableCell>
                                    <TableCell>{data.sold_value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* *******Pagination*********** */}
                    <div className="text-right py-4">
                        <Pagination>
                            <PaginationContent className="inline-flex">
                                <PaginationItem className="border-2 rounded-md">
                                    <PaginationPrevious
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageChange(currentPage - 1);
                                        }}
                                    />
                                </PaginationItem>

                                {/* Display first page and ellipsis */}
                                {startPage > 1 && (
                                    <>
                                        <PaginationItem>
                                            <PaginationLink href="#" onClick={() => handlePageChange(1)}>
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
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handlePageChange(currentPage + 1);
                                        }}
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SalesByCategory;
