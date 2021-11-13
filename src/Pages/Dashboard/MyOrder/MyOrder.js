import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./MyOrder.css";
const MyOrder = () => {
  const { users } = useAuth();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${users?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [users?.email]);
  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = myOrders.filter(
              (singleOrderInfo) => singleOrderInfo._id !== id
            );
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div>
      {myOrders.map((myOrder) => (
        <div>
          <div>
            <Table responsive striped bordered hover className="table-order">
              <thead>
                <tr className="table-head">
                  <th>Product Details</th>
                  <th>Users Details</th>{" "}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="order-img">
                      <img src={myOrder.productImg} alt="" />
                    </div>
                    <h6>Product Id : {myOrder._id} </h6>
                    <h6>product Name : {myOrder.productName}</h6>
                  </td>

                  <td>
                    <h6>Customer Name : {myOrder.customerName} </h6>
                    <h6>Customer Email : {myOrder.email} </h6>
                    <h6>Customer Phone : {myOrder.phone} </h6>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="myOrder-btn">
              <button
                onClick={() => {
                  handleDelete(myOrder._id);
                }}
              >
                <i class="fas fa-trash"></i>delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
