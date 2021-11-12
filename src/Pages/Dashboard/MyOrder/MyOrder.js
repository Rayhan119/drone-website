import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";
import MyOrderDetail from "./MyOrderDetail/MyOrderDetail";
const MyOrder = () => {
  const { users } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [users?.email]);
  return (
    <div>
      {myOrders.map((myOrder) => (
        <MyOrderDetail order={myOrder}></MyOrderDetail>
      ))}
    </div>
  );
};

export default MyOrder;
