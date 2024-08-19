import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const OrderActivity = () => {
  return (
    <section className="mt-5">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">Items is pending</TabsContent>
        <TabsContent value="active">Total Active items</TabsContent>
        <TabsContent value="delivered">Total deliverd items</TabsContent>
        <TabsContent value="cancelled">Cancle items will show here</TabsContent>
      </Tabs>
    </section>
  );
};

export default OrderActivity;