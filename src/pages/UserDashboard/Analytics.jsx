<<<<<<< HEAD
import { data } from "@/api/analyticsData";
import { COLORS, dataForRevenue, renderCustomizedLabel, style } from "@/api/revenueData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Area, AreaChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";




const Analytics = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
    const optionsYear = ['2024', '2023', '2022', '2021', '2020'].map(year => ({ value: year, label: year }));
    
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
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
            <div className="p-4 grid sm:grid-cols-12 gap-4">
               {/* Content------------1 */}
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                    {/* heading--- */}
                    <div className="flex justify-between">
                        <h1 className="font-medium text-2xl">Market Overview</h1>
                        <div className="relative inline-block w-16">
                            <div className="bg-white border border-gray-300 rounded-md shadow-sm p-2 flex justify-between items-center cursor-pointer"
                                onClick={toggleDropdown}
                            ><span>{selectedOption ? selectedOption.label : 'Year'}</span>
                            <MdOutlineKeyboardArrowDown className={` transform transition-transform ${isOpen ? 'rotate-180' : ''}`}></MdOutlineKeyboardArrowDown>
                            </div>
                            {isOpen && (
                                <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                {optionsYear.map((option) => (
                                    <li
                                    key={option.value}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelect(option)}
                                    >{option.label}
                                    </li>
                                ))}
                                </ul>
                            )}
                        </div>

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
                <div className="sm:col-span-4 rounded-lg border p-4 shadow-md">
                     {/* heading--- */}
                     <div className="flex justify-between">
                        <h1 className="font-medium text-2xl">Revenue</h1>
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
                <div className="bg-blue-500 sm:col-span-4 min-h-[185px]"></div>
                <div className="bg-orange-500 sm:col-span-4 min-h-24"></div>
                <div className="bg-teal-500 min-h-[100px]"></div>
                <div className="bg-amber-700 min-h-[100px]"></div>
                <div className="bg-gray-400 min-h-[100px]"></div>
                <div className="bg-purple-500 min-h-[100px]"></div>
                <div className="bg-sky-500 min-h-[100px]"></div>
                
        </div>
        </>
        
    );
=======
import Wallet from "../wallet/Wallet";
import Header from "./Header";

const Analytics = () => {
  return (
    <>
      {/* Header Section------------- */}
      <Header />
      {/* -------------Wallet Section------------- */}

      <Wallet />
    </>
  );
>>>>>>> 488c34e7de26b9b866c0edc72b0d6194fbfe0134
};

export default Analytics;
