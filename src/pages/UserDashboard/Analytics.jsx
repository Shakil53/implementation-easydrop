import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const Analytics = () => {
    return (
        <>
        {/* Header Section------------- */}
        <section>
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
        </section>
        {/* Main Content Section-------- */}
        <section className="p-4 grid sm:grid-cols-12 gap-4">
        <div className="bg-red-500 min-h-[100px]"></div>
                <div className="bg-yellow-500 min-h-[100px]"></div>
                <div className="bg-blue-500 min-h-[100px]"></div>
                <div className="bg-orange-500 min-h-[100px]"></div>
                <div className="bg-teal-500 min-h-[100px]"></div>
                <div className="bg-amber-700 min-h-[100px]"></div>
                <div className="bg-gray-400 min-h-[100px]"></div>
                <div className="bg-purple-500 min-h-[100px]"></div>
                <div className="bg-sky-500 min-h-[100px]"></div>
                
        </section>
        </>
        
    );
};

export default Analytics;