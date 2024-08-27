
import {FaArrowCircleUp, FaArrowRight, FaBell, FaHandHoldingUsd, FaWallet } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,PieChart, Pie, Cell, Legend } from 'recharts';
import useEquityTrans from '../../../hook/useEquityTrans';
import { Link, NavLink } from 'react-router-dom';

const dataPie = [
  { name: 'Office rent', value: 15 },
  { name: 'Employee salary', value: 40 },
  { name: 'Transport', value: 15 },
  { name: 'Etc', value:  30},
];
const COLORS = ['#FF4081', '#7C4DFF', '#F8BBD0', '#673AB7'];


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


const data = [
  { name: 'Jan', Total: 356, amt: 2400 },
  { name: 'Feb', Total: 448, amt: 2210 },
  { name: 'Mar', Total: 500, amt: 2290 },
  { name: 'Apr', Total: 596, amt: 2000 },
  { name: 'May', Total: 500, amt: 2181 },
  { name: 'June', Total:600, amt: 2500 },
  { name: 'Jul', Total: 750, amt: 1500 },
  { name: 'Aug', Total: 850, amt: 1800 },
  { name: 'Sep', Total: 650, amt: 2700 },
  { name: 'Oct', Total: 750, amt: 2100 },
  { name: 'Nov', Total: 575, amt: 1900 },
  { name: 'Dec', Total: 750, amt: 1700 },
];




const EquityHome = () => {

  const [transations] = useEquityTrans()
  console.log(transations)
  
      return (
          <section className='p-2 md:p-10'>
  
               {/* Header Section */}
               <div className="mx-auto flex flex-col md:flex-row justify-end gap-3 px-5 md:px-0">
                <div className="flex items-center gap-3">
                  <span className="bg-blue-100 rounded-full p-2">
                    <FaBell className="text-xl text-blue-700" />
                  </span>
                  <div className="flex items-center rounded-full gap-3">
                    <Avatar className="w-10 h-10 md:w-12 md:h-12">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="text-gray-500 text-sm">
                      <p className="font-extrabold">Al Mamud Bijoy</p>
                      <p>User Id: 457</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Header Section End */}
  
              {/* Balance, Income, Expenses Section */}
              <div className='grid grid-cols-4 gap-5 py-8 md:py-14 hidden lg:grid'>
  
                  <div className='border-2 p-5 gap-10 rounded-lg flex flex-col justify-between'>
                      <div className='flex items-start justify-between'>
                         <div>
                         <h3 className='font-bold text-gray-600'>Current Balance</h3>
                         <h1 className='text-2xl md:text-3xl font-extrabold pt-2'>Tk 200</h1>
                         </div>
                      </div>
                      <Link to="/equitybased-investment/request_payment" className='flex justify-end'>
                           <Button className="text-sm md:text-base">Request Payment</Button>
                      </Link>
                  </div>
  
                  <div className='border-2 p-5 rounded-lg flex flex-col justify-between gap-10'>
                      <div className='flex items-start justify-between'>
                         <div>
                          <h3 className='font-bold text-gray-600'>Total Income</h3>
                          <h1 className='text-2xl md:text-3xl font-extrabold pt-2'>Tk 200</h1>
                          <h3 className='flex items-center gap-2 mt-2'>
                                <FaArrowCircleUp className='text-green-500'/>
                                <p className='text-sm text-gray-500'> <span className='text-green-500'>+50</span> From last week</p>
                            </h3>
                         </div>
                         <FaWallet className='text-3xl md:text-4xl mt-2 text-[#64449B]'/>
                      </div>
                      <Link to="/equitybased-investment/total_income" className='flex justify-end'>
                          <FaArrowRight className='text-2xl'/>
                      </Link>
                  </div>
  
                  <div className='border-2 p-5 rounded-lg flex flex-col justify-between gap-10'>
                      <div className='flex items-start justify-between'>
                         <div>
                          <h3 className='font-bold text-gray-600'>Total Expenses</h3>
                          <h1 className='text-2xl md:text-3xl font-extrabold pt-2'>Tk 200</h1>
                          <h3 className='flex items-center gap-2 mt-2'>
                                <FaArrowCircleUp className='text-green-500'/>
                                <p className='text-sm text-gray-500'> <span className='text-green-500'>+50</span> From last week</p>
                            </h3>
                         </div>
                         <FaHandHoldingUsd className='text-3xl md:text-4xl mt-2 text-[#64449B]'/>
                      </div>
                      <Link to="/equitybased-investment/total_expense">
                        <div className='flex justify-end'>
                          <FaArrowRight className='text-2xl'/>  
                        </div>
                      </Link>
                    
                          
                    
                  </div>
  
                  <div className='flex flex-col justify-between gap-5'>
                    <div className='border-2 p-5 py-8 flex justify-between items-center rounded-lg'>
                      <p className='text-lg text-gray-600 font-semibold'>Company Paperwork</p>
                      <FaArrowRight className='text-xl'/>
                    </div>
  
                    <div className='border-2 p-5 py-8 flex justify-between items-center rounded-lg'>
                      <p className='text-lg text-gray-600 font-semibold'>Investor Paperwork</p>
                      <FaArrowRight className='text-xl'/>
                    </div>
                  </div>
              </div>

    {/* for mobile device */}

    <div className='for_mob md:hidden block py-4'>
    <div className='border-2 p-3 mb-4 gap-4 rounded-lg flex justify-between items-center'>
        <div className='w-2/3'>
            <h3 className='font-medium text-sm md:text-base text-gray-600'>Current Balance</h3>
            <h1 className='text-xl md:text-2xl font-medium'>Tk 200</h1>
        </div>
        <div>
            <Button className="text-xs md:text-sm">Request Payment</Button>
        </div>
    </div>

    <div className='grid grid-cols-2 gap-3'>
        <div className='border-2 p-3 rounded-lg flex flex-col justify-between gap-2'>
            <div className='flex items-start justify-between'>
                <div>
                    <h3 className='font-medium text-sm  text-gray-600'>Total Income</h3>
                    <h1 className='text-lg md:text-xl font-medium pt-1'>Tk 200</h1>
                    {/* <h3 className='flex items-center gap-1 mt-1'>
                        <FaArrowCircleUp className='text-green-500'/>
                        <p className='text-xs  text-gray-500'><span className='text-green-500'>+50</span> From last week</p>
                    </h3> */}
                </div>
                <FaWallet className='text-xl mt-2 text-[#64449B]'/>
            </div>
            <div className='flex justify-end'>
                <FaArrowRight className='text-xl'/>
            </div>
        </div>

        <div className='border-2 p-3 rounded-lg flex flex-col justify-between gap-2'>
            <div className='flex items-start justify-between '>
                <div>
                    <h3 className='font-medium text-sm md:text-base text-gray-600'>Total Expenses</h3>
                    <h1 className='text-lg md:text-xl font-medium pt-1'>Tk 200</h1>
                    {/* <h3 className='flex items-center gap-1 mt-1'>
                        <FaArrowCircleUp className='text-green-500'/>
                        <p className='text-xs md:text-sm text-gray-500'><span className='text-green-500'>+50</span> From last week</p>
                    </h3> */}
                </div>
                <FaHandHoldingUsd className='text-xl  mt-2 text-[#64449B]'/>
            </div>
            <NavLink to="/equitybased-investment/total_expense">
                        <div className='flex justify-end'>
                          <FaArrowRight className='text-2xl'/>  
                        </div>
                      </NavLink>
        </div>

        <div className='border-2 p-2 flex justify-between items-center rounded-lg'>
            <p className='text-xs md:text-lg text-gray-600 font-semibold'>Company Paperwork</p>
            <FaArrowRight className='text-lg'/>
        </div>

        <div className='border-2 p-2 flex justify-between items-center rounded-lg'>
            <p className='text-xs md:text-lg text-gray-600 font-semibold'>Investor Paperwork</p>
            <FaArrowRight className='text-lg'/>
        </div>
    </div>
</div>



              {/* Balance, Income, Expenses Section End */}
  
              {/* Graph Section */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10'>
                 <div className='border-2 p-5 rounded-lg'>
                    <div className='flex flex-col md:flex-row items-center justify-between pb-10'>
                          <h1 className='text-lg md:text-xl font-bold'>Company Overview</h1>
                          <Select>
                                <SelectTrigger className="w-[150px]">
                                  <SelectValue placeholder="Sells Overviews" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">1 Year</SelectItem>
                                  <SelectItem value="dark">2 Years</SelectItem>
                                  <SelectItem value="system">3 Years</SelectItem>
                                </SelectContent>
                          </Select>
                      </div>
  
                      {/* Graph Start */}
                      <ResponsiveContainer width="100%" height={300}>
                          <AreaChart
                            data={data}
                            margin={{
                              top: 0,
                              right: 5,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="Total" stroke="#522F8F" fill="#D31A65" />
                          </AreaChart>
                      </ResponsiveContainer>
                      {/* Graph End */}
                 </div>
  
                  <div className='border-2 p-5 rounded-lg'>
                        <h1 className='text-lg md:text-xl font-bold mb-10'>Expense Budget</h1>
                        {/* Pie Graph Start */}
                        <ResponsiveContainer width="100%" height={300}>
                              <PieChart>
                                <Pie
                                  data={dataPie}
                                  cx="50%"
                                  cy="50%"
                                  labelLine={false}
                                  label={renderCustomizedLabel}
                                  outerRadius={110}
                                  fill="#8884d8"
                                  dataKey="value"
                                >
                                  {dataPie.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                  ))}
                                </Pie>
                                <Legend />
                              </PieChart>
                        </ResponsiveContainer>
                        {/* Pie Graph End */}
                  </div>
              </div>
              {/* Graph Section End */}
  
              {/* Last Transactions Section */}
              <div className='pt-8 md:pt-14'>
                  <div className='border-2 p-2 md:p-5 rounded-lg'>
                      <h2 className='ms-4 text-lg md:text-xl font-extrabold pb-3'>Last Transactions</h2>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead className="text-start font-bold text-black">Date</TableHead>
                                  <TableHead className="text-start font-bold text-black">Method</TableHead>
                                  <TableHead className="text-start font-bold text-black">Details</TableHead>
                                  <TableHead className="text-start font-bold text-black">Amount</TableHead>
                              </TableRow>
                          </TableHeader>
  
                          <TableBody>
                              {transations.map((transation) => (
                                  <TableRow key={transation.id} >
                                      <TableCell className="font-medium">{transation.Date}</TableCell>
                                      <TableCell>{transation.Method}</TableCell>
                                      <TableCell className={`text-start ${transation.Details === "Cash out" ? 'text-red-600' : transation.Details === "Cash in" ? 'text-green-500' : ''}`}>
                                          {transation.Details}
                                      </TableCell>
                                      <TableCell className="text-start">Tk {transation.Amount}</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </div>
              </div>
              {/* Last Transactions Section End */}
  
          </section>
      );
  };
  
  export default EquityHome;
  