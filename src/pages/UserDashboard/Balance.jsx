import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import {Popover} from "@/components/ui/popover"
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";



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
            <div className=" p-4">
                <h1 className="text-xl sm:hidden font-semibold">Balance</h1>
                <div className="grid grid-row">
                        {/* ---------Balance */}
                    <div className="grid grid-cols-12 gap-4">
                        <div className="grid grid-flow-col sm:grid-flow-row col-span-4 gap-2">
                            <div className="bg-red-500 rounded-lg p-2">
                                    <h1 className="text-white">Demo</h1>
                            </div>
                            <div className="bg-purple-500 rounded-lg p-2">
                                    <h1 className="text-white">Demo</h1>
                            </div>
                        </div>
                        <div className="bg-teal-500 rounded-lg p-2 col-span-4">
                                <h1 className="text-white">Demo</h1>
                        </div>
                        <div className="bg-yellow-500 rounded-lg p-2 col-span-4">
                                <h1 className="text-white">Demo</h1>
                        </div>
                        
                    </div>
               </div>
            </div>
        </>
    );
};

export default Balance;