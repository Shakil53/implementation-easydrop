import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', Total: 3256, amt: 2400 },
  { name: 'Feb', Total: 15448, amt: 2210 },
  { name: 'Mar', Total: 11500, amt: 2290 },
  { name: 'Apr', Total: 17596, amt: 2000 },
  { name: 'May', Total: 9500, amt: 2181 },
  { name: 'June', Total: 14000, amt: 2500 },
  { name: 'Jul', Total: 13750, amt: 2100 },
];



const InfoGraph = () => {
  return (
    <section>
      <div className='flex items-center justify-between pb-10'>
        <h1 className='text-2xl font-extrabold text-indigo-600'>Overview</h1>
        <Button variant="outline" classname="rounded-none">Income</Button>
      </div>

      <div className='pb-10'>
        <Tabs defaultValue="account" className="w-[400px] ">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
          <TabsContent value="day">Daily sell data will show here</TabsContent>
          <TabsContent value="week">Weekly sell data will show here</TabsContent>
          <TabsContent value="month">Monthly sell data will show here</TabsContent>
          <TabsContent value="year">Yearly sell data will show here</TabsContent>
        </Tabs>

      </div>


      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#051fb3" fill="#a1b0d6" />
        </AreaChart>
      </ResponsiveContainer>
      <h2 className='text-center py-5 text-gray-400'>Some info about graph will be here</h2>
    </section>
  );
};

export default InfoGraph;