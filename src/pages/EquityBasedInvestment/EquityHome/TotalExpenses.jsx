
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { FaBell } from "react-icons/fa";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
//   } from "@/components/ui/select"

//   import {
//     Pagination,
//     PaginationContent,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
//   } from "@/components/ui/pagination"
// import useTotalExpense from "@/hook/useEquTotalExpen";
// import {
//     Table,
//     TableBody,
    
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"

// const TotalExpenses = () => {
//   const [expenses] = useTotalExpense();
//   console.log(expenses)

//   return (
//       <section className='p-2 md:p-10'>

//           {/* Header Section */}
//           <div className="mx-auto flex flex-col md:flex-row justify-end gap-3 px-5 md:px-0">
//               <div className="flex items-center gap-3">
//                   <span className="bg-blue-100 rounded-full p-2">
//                       <FaBell className="text-lg sm:text-xl text-blue-700" />
//                   </span>
//                   <div className="flex items-center rounded-full gap-3">
//                       <Avatar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
//                           <AvatarImage src="https://github.com/shadcn.png" />
//                           <AvatarFallback>CN</AvatarFallback>
//                       </Avatar>
//                       <div className="text-gray-500 text-xs sm:text-sm">
//                           <p className="font-extrabold">Al Mamud Bijoy</p>
//                           <p>User Id: 457</p>
//                       </div>
//                   </div>
//               </div>
//           </div>
//           {/* Header Section End */}

//           {/* Table Header Start */}
//           <div className="flex  items-center justify-between pt-10">
//               <h1 className="font-bold md:text-2xl text-base">Total Expenses</h1>
//               <div className="flex gap-2 mt-4 sm:mt-0">
//                   <Select>
//                       <SelectTrigger className="w-[50px] md:w-[120px]">
//                           <SelectValue placeholder="Yearly" />
//                       </SelectTrigger>
//                       <SelectContent>
//                           <SelectItem value="light">1 Year</SelectItem>
//                           <SelectItem value="dark">2 Years</SelectItem>
//                           <SelectItem value="system">3 Years</SelectItem>
//                       </SelectContent>
//                   </Select>

//                   <Select>
//                       <SelectTrigger className="w-[80px] sm:w-[100px] md:w-[140px]">
//                           <SelectValue placeholder="Monthly Info" />
//                       </SelectTrigger>
//                       <SelectContent>
//                           <SelectItem value="light">This Month</SelectItem>
//                           <SelectItem value="dark">Last Month</SelectItem>
//                           <SelectItem value="system">Previous Month</SelectItem>
//                       </SelectContent>
//                   </Select>
//               </div>
//           </div>
//           {/* Table Header End */}

//           {/* Table Start */}
//           <div className="overflow-x-auto">
//               <Table className="mt-8 min-w-full">
//                   <TableHeader>
//                       <TableRow>
//                           <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">SL NO</TableHead>
//                           <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">Date</TableHead>
//                           <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">Description</TableHead>
//                           <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">Amount</TableHead>
//                           <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">Payment Method</TableHead>
//                       </TableRow>
//                   </TableHeader>

//                   <TableBody>
//                       {expenses.map((expense) => (
//                           <TableRow key={expense.id}>
//                               <TableCell className="font-medium text-center text-xs sm:text-sm">{expense.id}</TableCell>
//                               <TableCell className="font-medium text-center text-xs sm:text-sm">{expense.date}</TableCell>
//                               <TableCell className="font-medium text-center text-xs sm:text-sm">{expense.description}</TableCell>
//                               <TableCell className="text-center font-medium text-xs sm:text-sm">TK. {expense.amount}</TableCell>
//                               <TableCell className="text-center font-medium text-xs sm:text-sm">{expense.payment_method}</TableCell>
//                           </TableRow>
//                       ))}
//                   </TableBody>
//               </Table>
//           </div>
//           {/* Table End */}

//           {/* Pagination Start */}
//           <div className="pt-4 sm:pt-8">
//               <Pagination className="flex justify-end">
//                   <PaginationContent>
//                       <PaginationItem>
//                           <PaginationPrevious href="#" />
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">1</PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">2</PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">3</PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationNext href="#" />
//                       </PaginationItem>
//                   </PaginationContent>
//               </Pagination>
//           </div>
//           {/* Pagination End */}

//       </section>
//   );
// };

// export default TotalExpenses;


import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaBell } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useTotalExpense from "@/hook/useEquTotalExpen";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TotalExpenses = () => {
  const [expenses] = useTotalExpense();
  console.log(expenses);

  return (
    <section className="p-2 md:p-10">

      {/* Header Section */}
      <div className="mx-auto flex flex-col sm:flex-row justify-end gap-3 px-2 sm:px-5 md:px-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="bg-blue-100 rounded-full p-1 sm:p-2">
            <FaBell className="text-base sm:text-lg text-blue-700" />
          </span>
          <div className="flex items-center rounded-full gap-2 sm:gap-3">
            <Avatar className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-gray-500 text-xs sm:text-sm">
              <p className="font-extrabold">Al Mamud Bijoy</p>
              <p>User Id: 457</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header Section End */}

      {/* Table Header Start */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-10">
        <h1 className="font-bold text-lg sm:text-2xl">Total Expenses</h1>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Yearly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">1 Year</SelectItem>
              <SelectItem value="dark">2 Years</SelectItem>
              <SelectItem value="system">3 Years</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Monthly" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">This Month</SelectItem>
              <SelectItem value="dark">Last Month</SelectItem>
              <SelectItem value="system">Previous Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Table Header End */}

      {/* Table Start */}
      <div className="overflow-x-auto">
        <Table className="mt-4 sm:mt-8 min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">
                SL NO
              </TableHead>
              <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">
                Date
              </TableHead>
              <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">
                Description
              </TableHead>
              <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">
                Amount
              </TableHead>
              <TableHead className="text-center font-bold text-black text-xs sm:text-sm md:text-xl">
                Payment Method
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell className="font-medium text-center text-xs sm:text-sm">
                  {expense.id}
                </TableCell>
                <TableCell className="font-medium text-center text-xs sm:text-sm">
                  {expense.date}
                </TableCell>
                <TableCell className="font-medium text-center text-xs sm:text-sm">
                  {expense.description}
                </TableCell>
                <TableCell className="text-center font-medium text-xs sm:text-sm">
                  TK. {expense.amount}
                </TableCell>
                <TableCell className="text-center font-medium text-xs sm:text-sm">
                  {expense.payment_method}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Table End */}

      {/* Pagination Start */}
      <div className="pt-4 sm:pt-8">
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="font-semibold text-xs sm:text-sm">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      {/* Pagination End */}

    </section>
  );
};

export default TotalExpenses;
