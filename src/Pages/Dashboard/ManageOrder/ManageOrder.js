import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";
const ManageOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);

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
            const remaining = manageOrders.filter(
              (singleOrderInfo) => singleOrderInfo._id !== id
            );
            setManageOrders(remaining);
          }
        });
    }
  };

  return (
    <div>
      {manageOrders.map((manageOrder) => (
        <div>
          <div>
            <Table
              responsive
              striped
              bordered
              hover
              className="table-manageOrder"
            >
              <thead>
                <tr className="table-manageOrder-head">
                  <th>Product Details</th>
                  <th>Users Details</th>{" "}
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="manageOrder-img">
                      <img src={manageOrder.productImg} alt="" />
                    </div>
                    <h6>Product Id : {manageOrder._id} </h6>
                    <h6>product Name : {manageOrder.productName}</h6>
                  </td>

                  <td>
                    <h6>Customer Name : {manageOrder.customerName} </h6>
                    <h6>Customer Email : {manageOrder.email} </h6>
                    <h6>Customer Phone : {manageOrder.phone} </h6>{" "}
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="manageOrder-btn">
              <button
                onClick={() => {
                  handleDelete(manageOrder._id);
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

export default ManageOrder;
