import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom';
import { HiGift } from "react-icons/hi2";
import { FaHome, FaStore } from "react-icons/fa";
import { TbCoinTaka } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import companyLogo from '../assets/logo/logo.png';
import { MdQuestionMark } from "react-icons/md";
import { Rocket } from 'lucide-react';
import { HiMenu,HiX  } from 'react-icons/hi'
import { useState } from 'react';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
   

    return (
        <aside className='bg-[#f8fafc] col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5'>
                {/* Hamburger Menu Button for Mobile View */}
                <div className="lg:hidden flex justify-center mb-4">
                    <button onClick={toggleSidebar} className="text-gray-600 focus:outline-none">
                    {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
                    </button>
                </div>
                <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
                                {/* company logo ------------ */}
                            <div className='mb-16 hidden md:block'>
                                <img src={companyLogo} alt='company logo'></img>
                            </div>
                <nav className="flex flex-col gap-2">
                <NavLink to='/user-dashboard/home' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                            {
                                ' bg-[#4338CA] text-white' : isActive,
                            }
                            )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <FaHome className="shrink-0 "></FaHome>
                                    <span className="truncate hidden md:block">Home</span>
                            </div>
                        </NavLink>
                    <NavLink to='/user-dashboard/store' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                            {
                                ' bg-[#4338CA] text-white' : isActive,
                            }
                            )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <FaStore className="shrink-0 "></FaStore>
                                    <span className="truncate hidden md:block">Store</span>
                            </div>
                        </NavLink>
                        
                        <NavLink to='/user-dashboard/orders' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                        {
                            ' bg-[#4338CA] text-white' : isActive,
                        }
                        )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <IoMdCart className="shrink-0 "></IoMdCart>
                                    <span className="truncate hidden md:block">Orders</span>
                            </div>
                        </NavLink>
                        <NavLink to='/user-dashboard/reseller-referrals' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                        {
                            ' bg-[#4338CA] text-white' : isActive,
                        }
                        )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <HiGift className="shrink-0 "></HiGift>
                                    <span className="truncate hidden md:block">Reseller Referrals</span>
                            </div>
                        </NavLink>
                        <NavLink to='/user-dashboard/balance' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                        {
                            ' bg-[#4338CA] text-white' : isActive,
                        }
                        )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <TbCoinTaka className="shrink-0 "></TbCoinTaka>
                                    <span className="truncate hidden md:block">Balance</span>
                            </div>   
                        </NavLink>
                        <NavLink to='/user-dashboard/boost-request' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                        {
                            ' bg-[#4338CA] text-white' : isActive,
                        }
                        )}>
                            <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <Rocket className="shrink-0 size-4"></Rocket>
                                    <span className="truncate hidden md:block">Boost Request</span>
                            </div>  
                        </NavLink>
                        <NavLink to='/user-dashboard/settings' className={({ isActive }) => cn("p-1 md:p-3 bg-white rounded-sm border shadow-xm font-semibold text-black transition-all flex items-center gap-2",
                        {
                            ' bg-[#4338CA] text-white' : isActive,
                        }
                        )}>
                        <div className='mx-auto md:mx-0 md:flex gap-2 items-center '>
                                    <IoMdSettings className="shrink-0 "></IoMdSettings>
                                    <span className="truncate hidden md:block">Settings</span>
                            </div>  
                        </NavLink>
                    </nav>
                    {/* Footer section-------------- */}
                    <div className="hidden md:block bg-[#EBEEFF] max-w-lg p-8 shadow-md rounded-lg mt-5 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4338CA] rounded-full">
                            <span className="text-4xl text-white"><MdQuestionMark /></span>
                        </div>
                            <h1 className="text-xs font-bold mb-4">Need Help with Easydrop</h1>
                            
                                <Link to='/'>
                                    <button className='rounded-sm bg-[#4338CA] text-white p-2 text-sm font-semibold'>Go to Help Center</button>
                                </Link>
                        
                    </div>
            </div>
               
    </aside>
    );
};

export default Sidebar;