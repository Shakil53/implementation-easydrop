import { data } from "@/api/marketOverview";
import { COLORSForOverAllRating, dataForOverAllRating } from "@/api/overallRating";
import { COLORS, dataForRevenue, renderCustomizedLabel, style } from "@/api/revenueData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MoveUpRight } from 'lucide-react';
import { dataForInvestorIncomeGrowth } from "@/api/investorIncomeGrowth";
import { dataForSalesByCategory } from "@/api/salesByCategory";
import { Outlet, useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import topGainProductImg from '../../assets/images/img.png'




const EquityBasedAnalytics = () => {
    const navigate = useNavigate();

    const goToSalesByCategory = () => {
        navigate('/equitybased-investment/analytics/sales-by-category');
    };
    const goToUploadPage = () => {
        navigate('/equitybased-investment/analytics/upload-tax-info');
    };

   
    return (
        <>
        {/* Header Section------------- */}
            {/* --------Header Avater */}
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
                            <div className="">
                                <IoNotifications></IoNotifications>
                            </div>
                    </div>
                    
                    <div className="hidden sm:block">
                            <Menubar>
                                <MenubarMenu>
                                    <MenubarTrigger><IoIosArrowDown></IoIosArrowDown></MenubarTrigger>
                                    <MenubarContent className='mt-5'>
                                    <MenubarItem>
                                        Settings <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSeparator/>
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
       
        {/* Main Content Section-------- */}
            <div className="p-3 grid sm:grid-cols-12 gap-4">
               {/* Content------------1 */}
                <div className="sm:col-span-5 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Market Overview</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
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

                    </div>
                        {/* Graph chart ---------------------- */}
                     <ResponsiveContainer width="100%" height="85%">
                            <AreaChart width={730} height={250} data={data}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF0080" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#522F8F" stopOpacity={0}/>
                                    </linearGradient>
                                    
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#FF0080" fillOpacity={1} fill="url(#colorUv)" />
                            
                                </AreaChart>
                                        {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                        </ResponsiveContainer>
                    
                </div>
                {/* Content------------2 */}
                <div className="sm:col-span-3 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Revenue</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
                                <SelectValue placeholder="This month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="apple">Jan - April</SelectItem>
                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                     </div>

                     <div style={{ width: '100%', height: 250 }}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    data={dataForRevenue}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend iconSize={10} layout="horizontal" horizOriginX="bottom" wrapperStyle={style} />
                            </PieChart>
                        </ResponsiveContainer>
                        
                    </div>

                    
                </div>
                {/* Content------------3 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Overall Rating</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
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
                    </div>
                    <div className="flex justify-evenly items-center">
                        <PieChart width={130} height={220}>
                            <Pie
                            data={dataForOverAllRating}
                            cx={55}
                            cy={110}
                            innerRadius={40}
                            outerRadius={60}
                            fill="#8884d8"
                            paddingAngle={0}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORSForOverAllRating[index % COLORSForOverAllRating.length]} />
                            ))}
                            </Pie>
                            
                        </PieChart>
                        <div>
                            <p className="text-md">Overall Rating Performance</p> 
                            <p className="text-md font-bold">Very good. Keep it up.</p>
                            <div className="flex items-center gap-1">
                                        <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                        <MoveUpRight className=" text-[#00E676] size-3"></MoveUpRight> 
                                        </div> 
                                        <div>
                                            <p><span className="text-[#00E676] text-sm bg-gray-50 rounded-sm">5.48%</span> <span className="text-[#949494] text-sm">From last week</span></p>
                                        </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Content------------4 */}
                <div className="sm:col-span-5 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-md sm:text-xl">Investor Income Growth</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
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

                    </div>
                        {/* Graph chart ---------------------- */}
                     <ResponsiveContainer width="100%" height="85%">
                            <AreaChart width={730} height={250} data={dataForInvestorIncomeGrowth}
                                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv1" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#522F8F" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#522F8F" stopOpacity={0}/>
                                    </linearGradient>
                                    
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#FF0080" fillOpacity={1} fill="url(#colorUv1)" />
                            
                                </AreaChart>
                                        {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                        </ResponsiveContainer>
                    
                </div>
                {/* Content------------5 */}
                <div className="sm:col-span-3 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl">Investor Gross Profit</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
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

                    </div>
                        <div className="justify-center items-center p-6 mt-6 ml-2">
                            <p>Revenue <span className="ml-20">Tk. 15,000</span></p>
                            <p>Initial Investment <span className="ml-5">Tk. 10,000</span></p>
                            <div className="w-auto h-px bg-gray-300 my-2"></div>
                            <p>Gross profit<span className="ml-16">Tk. 5,000</span></p>
                        </div>
                </div>
                 {/* Content------------6 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between items-center mb-1">
                        <h1 className="font-semibold text-xl">Sales By Category</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="apple">Jan - April</SelectItem>
                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                      </div>
                      <ResponsiveContainer width="100%" height="70%">
                        <BarChart width={150} height={40} data={dataForSalesByCategory}>
                            <XAxis dataKey="name" scale="point"  padding={{ left: 18, right: 20}} />
                            <YAxis dataKey='uv'/>
                            <Tooltip dataKey='pv' />
                           <CartesianGrid strokeDasharray="3 3" />
                            <Bar dataKey="uv" barSize={20} fill="#D31A65" background={{ fill: '#eee' }}>
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    <div className="flex justify-end">
                        <button onClick={goToSalesByCategory} className="text-xs px-2.5 py-1 shadow-2xl text-white rounded-xl bg-[#522F8F]">View More</button>
                    </div>
                    <Outlet />
                   
                </div>
                {/* Content------------7 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between items-center mb-1">
                        <h1 className="font-semibold text-xl">Top Gainer Product</h1>
                        <Select>
                            <SelectTrigger className="w-[100px] sm:w-[150px]">
                                <SelectValue placeholder="month" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Months</SelectLabel>
                                <SelectItem value="apple">Jan - April</SelectItem>
                                <SelectItem value="pineapple">May- Aug</SelectItem>
                                <SelectItem value="mango">Sep - Dec</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* product here----------------- */}
                    <div>
                        <Table>
                            <TableHeader>
                            <TableRow>
                                    <TableHead className="text-md">Image</TableHead>
                                    <TableHead className="text-md">Category</TableHead>
                                <TableHead className="text-md">Selling amount</TableHead>
                            </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell><img src={topGainProductImg}></img></TableCell>
                                    <TableCell>Bag TODO</TableCell>
                                    <TableCell>10,0 TODO</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <div>

                        </div>
                    </div>
                </div>
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                
                    <div className="space-y-8">
                        <p className="text-center text-lg">Submit your tax Information file here in the box</p>
                        <div className="flex justify-center">
                            <button onClick={goToUploadPage} className="text-xs px-2.5 py-1 shadow-2xl text-white rounded-xl bg-[#522F8F]">Upload pdf here</button>
                        </div>

                    </div>
                 </div>
                    
                    
        </div>
        </>
        
    );
};

export default EquityBasedAnalytics;
