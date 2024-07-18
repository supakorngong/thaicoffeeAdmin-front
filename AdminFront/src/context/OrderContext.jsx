import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import OrderApi from "../api/Order";
import useAuth from "../hooks/useAuth";

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const { authUser } = useAuth();

  const fetchOrder = async () => {
    const orders = await OrderApi.getAllOrder();
    const sortedOrder = orders.data.sort((a, b) => b.order_id - a.order_id);
    console.log("orders", orders);
    // setOrder(orders.data);
    setOrder(sortedOrder);
  };

  useEffect(() => {
    fetchOrder();
  }, [authUser]);

  return <OrderContext.Provider value={{ order, setOrder, fetchOrder }}>{children}</OrderContext.Provider>;
}
