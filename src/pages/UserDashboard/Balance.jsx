import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {Popover} from "@/components/ui/popover"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { TbCoinTaka } from "react-icons/tb";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";



const Balance = () => {
    return (
        <>
             <div className="flex justify-center sm:justify-end">
                {/* --------Header Avater */}
                <div className="flex items-center gap-2 justify-end p-4 lg:p-5">
                <div className="flex items-center gap-5 sm:flex-row-reverse">
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
                        <Popover>
                            <PopoverTrigger >
                                <IoIosArrowDown></IoIosArrowDown>
                            </PopoverTrigger>
                                <PopoverContent className="w-80 mt-8 items-center shadow-lg p-5 rounded">
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Dimensions</h4>
                                        <p className="text-sm text-muted-foreground">
                                        Set the dimensions for the layer.
                                        </p>
                                    </div>
                                </div>
                                </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <h1 className="text-xl sm:hidden font-semibold mb-4">Balance</h1>
                
                        {/* ---------Balance */}
                    <div className="grid sm:grid-cols-12 grid-cols-1 gap-4">
                        <div className="grid sm:grid-flow-row col-span-4 gap-4 sm:gap-2">
                            <div className="rounded-lg border p-2 shadow-md">
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-xl font-semibold">Current Balance</h1>
                                        <Button className="bg-[#6366F1] rounded-2xl px-3 py-2 text-white">Request Payment</Button>
                                    </div>
                                    <h1 className="text-4xl font-bold">TK. 200</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="bg-[#00E676] bg-opacity-20 size-5 rounded-full flex items-center justify-center">
                                        <ArrowUp className=" text-[#00E676] size-4"></ArrowUp> 
                                        </div> 
                                        <div>
                                            <p><span className="text-[#00E676] text-sm">+50%</span> <span className="text-[#949494]">From last week</span></p>
                                        </div>
                                    </div>
                            
                            </div>
                            <div className="b order rounded-lg p-2 shadow-md">
                                        <div className="flex justify-between items-center">
                                                    <h1 className="text-xl font-semibold">Current Balance</h1>
                                                    <TbCoinTaka className="size-8 text-[#6366F1]"></TbCoinTaka>
                                                </div>
                                                <h1 className="text-4xl font-bold">TK. 200</h1>
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
                        <div className="border rounded-lg p-2 col-span-4 shadow-md">
                                    <div className="flex justify-between items-center">
                                            <h1 className="text-xl font-semibold">Commission Earned</h1>
                                     </div>
                                    <div className="flex justify-between">
                                        <h1 className="text-4xl font-bold">TK. 300</h1>
                                        <Select>
                                            <SelectTrigger className="w-[180px]">
                                                <SelectValue placeholder="Last 7  payment" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                <SelectLabel>Months</SelectLabel>
                                                <SelectItem value="apple">Jan - April</SelectItem>
                                                <SelectItem value="pineapple">May - Aug</SelectItem>
                                                <SelectItem value="pineapple">Sep - Dec</SelectItem>
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
                        </div>
                        <div className="bg-yellow-500 rounded-lg p-2 col-span-4 shadow-md">
                                <h1 className="text-white">Demo</h1>
                        </div>
                        
                </div>
                {/* Payment Request table----------------- */}
                <div>
                <h1 className="text-xl font-semibold mb-4 sm:text-center mt-4">Payment Request</h1>
                    <div className="bg-orange-600 p-2 rounded-lg shadow-md">
                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, minus!</p>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Balance;