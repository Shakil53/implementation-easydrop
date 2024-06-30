
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { HiDocumentAdd, HiClipboardList } from "react-icons/hi";
import { FaHome,FaStore  } from "react-icons/fa";
import companyLogo from '../assets/logo/logo.png'

const Sidebar = () => {
   

    return (
        <aside className='bg-[#f8fafc] col-span-2 h-screen sticky left-0 top-0 overflow-auto p-4 lg:p-5'>
            <div className='mb-16'>
                <img src={companyLogo}></img>
            </div>
            <nav className="flex flex-col gap-2">
                <NavLink to='/' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <FaHome className="shrink-0 ml-1"></FaHome>
                    <span className="truncate">Home</span>
                </NavLink>
                <NavLink to='/user-dashboard/store' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <FaStore className="shrink-0 ml-1"></FaStore>
                    <span className="truncate">Store</span>
                </NavLink>
                <NavLink to='/user-dashboard/orders' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <HiDocumentAdd className="shrink-0 ml-1"></HiDocumentAdd>
                    <span className="truncate">Orders</span>
                </NavLink>
                <NavLink to='/user-dashboard/reseller-referrals' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <HiClipboardList className="shrink-0 ml-1"></HiClipboardList>
                    <span className="truncate">Reseller Referrals</span>
                </NavLink>
                <NavLink to='/user-dashboard/balance' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <HiClipboardList className="shrink-0 ml-1"></HiClipboardList>
                    <span className="truncate">Balance</span>
                </NavLink>
                <NavLink to='/user-dashboard/boost-request' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <HiClipboardList className="shrink-0 ml-1"></HiClipboardList>
                    <span className="truncate">Boost Request</span>
                </NavLink>
                <NavLink to='/user-dashboard/settings' className={({ isActive }) => cn("p-3 bg-white rounded-sm border shadow-xm font-semibold hover:bg-dark-gray text-black transition-all flex items-center gap-2",
                {
                    ' bg-[#4338CA] text-white' : isActive,
                }
                )}>
                    <HiClipboardList className="shrink-0 ml-1"></HiClipboardList>
                    <span className="truncate">Settings</span>
                </NavLink>
            </nav>
               
        </aside>
    );
};

export default Sidebar;