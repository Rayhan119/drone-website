import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";
const MyOrder = () => {
  const { users } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  console.log(myOrder);
  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [users?.email]);
  return (
    <div>
      <h1>This is my order page</h1>
    </div>
  );
};

export default MyOrder;
