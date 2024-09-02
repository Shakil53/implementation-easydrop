import { useState } from 'react';
import { tableDatasSalesByCategory } from "@/api/salesByCategoryAnalytics";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import TablePagination from '@/components/ui/TablePagination';



const SalesByCategory = () => {
    // pagination-------
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(tableDatasSalesByCategory.length / itemsPerPage);

  // Get data for the current page
  const currentData = tableDatasSalesByCategory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    };
    

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

                    {/* Pagination Section */}
                <div className="text-right py-4">
                    <TablePagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePageChange={handlePageChange}
                    maxPageNumbersToShow={3}
                    />
                </div>
                </div>
            </div>
        </>
    );
};

export default SalesByCategory;
