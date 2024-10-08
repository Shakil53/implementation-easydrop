import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaHandHoldingDollar } from "react-icons/fa6";
import OrderActivity from "../../components/ui/UserDashboard/OrderActivity";
import useOrder from "@/hook/useOrder";
import { IoNotifications } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { data } from "@/api/marketOverview";



const Home = () => {
  
  
const [orders] = useOrder()
console.log(orders)


 


  return (
    <section className="md:px-10 px-2">


    

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


      <div className='upper_part grid md:grid-cols-4 md:px-0 grid-cols-1 gap-2 md:gap-5 md: py-5 md:py-10'>

        <div className='border-2 p-6 py-10  rounded-md overflow-hidden '>
          <div className="flex items-start justify-between">
              <div>
              <h1 className="pb-2 text-lg font-medium text-gray-500">Total Balance</h1>
              <h1 className="md:text-3xl text-xl font-extrabold"> Tk. 710</h1>
              </div>
          <div className=" rounded-full bg-indigo-100 md:p-4 p-2 text-center">
              <FaWallet className=" text-3xl text-[#3a6ff8] inline-block" />
            </div>
          </div>

          
        </div>

        <div className='border-2 p-6 py-10  rounded-md overflow-hidden '>
          <div className="flex items-start justify-between">
              <div>
              <h1 className="pb-2 text-lg font-medium text-gray-500">Total Earnings</h1>
              <h1 className="md:text-3xl text-xl font-extrabold"> Tk. 710</h1>
              </div>
          <div className=" rounded-full bg-[#FFF7F2] md:p-4 p-2 text-center">
              <FaBangladeshiTakaSign className="text-3xl text-orange-600 inline-block" />
            </div>
          </div>

        </div>

        <div className='border-2 p-6 py-10  rounded-md overflow-hidden'>
          <div className="flex items-start justify-between">
              <div>
              <h1 className="pb-2 text-lg font-medium text-gray-500">Total Orders</h1>
              <h1 className="md:text-3xl text-xl font-extrabold"> 10</h1>
              </div>
          <div className="rounded-full bg-[#F6F2FF] md:p-4 p-2 text-center">
              <FaShoppingCart className="text-3xl text-indigo-600 inline-block" />
            </div>
          </div>

            
        </div>



        <div className='border-2 p-6 py-10  rounded-md overflow-hidden '>
          <div className="flex items-start justify-between">
              <div>
              <h1 className="pb-2 text-lg font-medium text-gray-500">Total Commission</h1>
              <h1 className="md:text-3xl text-xl font-extrabold"> Tk. 710</h1>
              </div>
          <div className=" rounded-full bg-[#EBFFE8] md:p-4 p-2 text-center">
              <FaHandHoldingDollar className="text-3xl text-lime-600 inline-block" />
            </div>
          </div>

        </div>


      </div>



      <div className='main_div md:grid grid-cols-3 gap-5 px-2 md:px-0 mb-5 lg:grid-cols-3 sm:grid-cols-1'>


        <div className='col-span-2 lg:col-span-2 sm:col-span-1'>

        <div className='app_section block lg:hidden py-6 md:pb-10'>
  <div className='bg-gradient-to-r from-[#852276] to-pink-600 p-3 rounded-lg'>
    <div className="text-xl font-extrabold text-white ">
      <h1>Refer More, Earn More!</h1>
      <h1>300TK Refer Bonus!!</h1>
    </div>
    
  </div>
</div>

          {/* Graph chart ---------------------- */}
          
          <ResponsiveContainer width="100%" height="50%">
                                      <AreaChart width={730} height={250} data={data}
                                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                          <defs>
                                              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="5%" stopColor="#5484FF" stopOpacity={0.8}/>
                                              <stop offset="95%" stopColor="#522F8F" stopOpacity={0}/>
                                              </linearGradient>
                                              
                                          </defs>
                                          <XAxis dataKey="name" />
                                          <YAxis />
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <Tooltip />
                                          <Area type="monotone" dataKey="uv" stroke="#3A6FF8" fillOpacity={10} fill="url(#colorUv)" />
                                      
                                          </AreaChart>
                                                  {/* <Area type="monotone" dataKey="uv" stroke="#FF0080" fill="#522F8F"/> */}
                                  </ResponsiveContainer>
          


          <div className="pt-2 md:pt-20">
            {/* for 2/3 area */}
            <h1 className="text-indigo-600 font-extrabold text-2xl">Orders</h1>
            <OrderActivity />
          </div>
        </div>



        <div className='lg:col-span-1 sm:col-span-1 mt-10 md:mt-0'>


   

<div className="app_section hidden md:block ">
  <div className="bg-gradient-to-r from-[#852276] to-pink-600 p-3 rounded-lg">
    <div className="text-xl font-extrabold text-white  ">
      <h1>Refer More, Earn More!</h1>
      <h1>300TK Refer Bonus!!</h1>
    </div>
    
  </div>
</div>


          <div className=' mt-5'>
            <div className=' recent_div border-2 md:p-5 p-3 w-full  rounded-lg '>
              <div className="flex justify-between items-center">
                <h1 className="text-indigo-700 text-xl md:text-2xl font-extrabold">Recent Order</h1>
                <Button variant="outline" className="text-sm">See All</Button>
              </div>
              <div className=" mt-6 md:mt-10">
                {orders.map(order => (
                  <div key={order.id} order={order}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src={order.img} alt="@shadcn" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h1 className="text-gray-400 text-sm">#{order.product_code}</h1>
                          <h1 className="font-semibold">{order.product_name}</h1>
                        </div>
                      </div>
                      <h1 className="text-gray-600">{order.price}TK</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Home;

