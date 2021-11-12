import React, { useEffect, useState } from "react";
import "./ManageOrder.css";
import ManageOrderDetail from "./ManageOrderDetail/ManageOrderDetail";
const ManageOrder = () => {
  const [manageOrder, setManageOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrder(data));
  }, []);
  console.log(manageOrder);
  return (
    <div>
      {manageOrder.map((manageAllOrder) => (
        <ManageOrderDetail
          key={manageAllOrder._id}
          manageAllOrder={manageAllOrder}
        ></ManageOrderDetail>
      ))}
    </div>
  );
};

export default ManageOrder;
