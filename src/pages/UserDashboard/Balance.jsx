import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { TbCoinTaka } from "react-icons/tb";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "@/api/balanceDataApi";
import BalanceTable from "@/utils/BalanceTable";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";





const Balance = () => {
   
    

    return (
        <>
             <div className="flex justify-center sm:justify-end">
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
            </div>
            <div className="p-3">
                <h1 className="text-2xl sm:hidden font-semibold mb-4">Balance</h1>
                
                    {/* ---------Balance content */}
                <div className="grid sm:grid-cols-12 grid-cols-1 gap-4">
                     
                     <div className="grid sm:grid-flow-row col-span-4 gap-4 sm:gap-2">
                        {/* Card section 1--------------------- */}
                            <div className="rounded-lg border p-4 shadow-md">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-semibold">Current Balance</h1>
                                        <Button className="bg-[#6366F1] rounded-2xl px-2 sm:px-3 py-1 sm:py-2 text-white">Request Payment</Button>
                                    </div>
                                    <h1 className="text-3xl font-bold">TK. 200</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                        <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                                        </div> 
                                        <div>
                                            <p><span className="text-[#00E676] text-sm">+50%</span> <span className="text-[#949494]">From last week</span></p>
                                        </div>
                                    </div>
                            
                            </div>
                        {/* Card section 2--------------------- */}
                            <div className="border rounded-lg p-4 shadow-md">
                                        <div className="flex justify-between items-center">
                                                    <h1 className="text-xl font-semibold">Request Payment</h1>
                                                    <TbCoinTaka className="size-8 text-[#6366F1]"></TbCoinTaka>
                                                </div>
                                                <h1 className="text-3xl font-bold">TK. 500</h1>
                                                <div className="flex items-center gap-2">          
                                                    <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                                    <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                                                    </div> 
                                                    <div>
                                                        <p><span className="text-[#00E676] text-sm">+50%</span> <span className="text-[#949494]">From last week</span></p>
                                                    </div>
                                                </div>
                            </div>
                    </div>
                
                    {/* Card section 3--------------------- */}
                    <div className="border rounded-lg p-3 col-span-4 shadow-md">
                                <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-semibold">Commission Earned</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-3xl font-bold">TK. 300</h1>
                                    <Select>
                                        <SelectTrigger className="w-[90px] sm:w-[150px]">
                                            <SelectValue placeholder="Last 7 payment" />
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
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                    <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                                    </div> 
                                    <div>
                                        <p><span className="text-[#00E676] text-sm">+50%</span> <span className="text-[#949494]">From last week</span></p>
                                    </div>
                                </div>
                        {/* Graph chart ---------------------- */}
                        <ResponsiveContainer width="100%" height="70%">
                                    <BarChart width={150} height={40} data={data}>
                                        <XAxis dataKey="name" scale="point"  padding={{ left: 18, right: 20}} />
                                        <YAxis dataKey='uv'/>
                                        <Tooltip dataKey='pv' />
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <Bar dataKey="uv"  barSize={20} fill="#6366F1" background={{ fill: '#eee' }} />
                                    </BarChart>
                                </ResponsiveContainer>
                    </div>
                    {/* Card section 4--------------------- */}
                    <div className="border rounded-lg p-3 col-span-4 shadow-md">
                                <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-semibold">Recived Payment</h1>
                                </div>
                                <div className="flex justify-between">
                                    <h1 className="text-3xl font-bold">TK. 200</h1>
                                    <Select>
                                        <SelectTrigger className="w-[90px] sm:w-[150px]">
                                            <SelectValue placeholder="Last 7 payment" />
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
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                    <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                                    </div> 
                                    <div>
                                        <p><span className="text-[#00E676] text-sm">+50%</span> <span className="text-[#949494]">From last week</span></p>
                                    </div>
                                </div>
                        {/* Graph chart ---------------------- */}
                        <ResponsiveContainer width="100%" height="70%">
                            <BarChart width={150} height={40} data={data}>
                                <XAxis dataKey="name" scale="point"  padding={{ left: 18, right: 20}} />
                                <YAxis dataKey='uv'/>
                                <Tooltip dataKey='pv' />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Bar dataKey="uv"  barSize={20} fill="#F163DA" background={{ fill: '#eee' }} />
                            </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
                {/* Payment Request table----------------- */}
                <div className="border mt-4 p-2 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4 sm:text-center mt-4">Payment Request</h1>

                <BalanceTable></BalanceTable>
                
                </div>
               
            </div>
        </>
    );
};

export default Balance;