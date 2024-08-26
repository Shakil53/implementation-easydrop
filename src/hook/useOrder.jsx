import { orderData } from "@/api/orderData";
import { useEffect, useState } from "react";


const useOrder = () => {
  const [orders, setOrders] = useState(orderData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("../api/orderData.js")
      .then((res) => res.json())
      .then((data) => setOrders(data));
    setLoading(false);
  }, []);

  return [orders, loading];
};

export default useOrder;
