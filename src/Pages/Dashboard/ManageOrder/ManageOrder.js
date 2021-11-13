import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";
const ManageOrder = () => {
  const [manageOrders, setManageOrders] = useState([]);
  useEffect(() => {
    fetch("https://blooming-chamber-22086.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, []);

  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure want to delete?");
    if (proceed) {
      const url = `https://blooming-chamber-22086.herokuapp.com/orders/${id}`;
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
  const [status, setStatus] = useState(false);
  console.log(status);
  const handleUpdate = (id) => {
    fetch(`https://blooming-chamber-22086.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => {
      if (res.status == 200) {
        alert("approved successfully");
        setStatus(true);
      }
    });
  };
  return (
    <div>
      <div className="manage-order-top">
        <h1>Total Products : {manageOrders.length}</h1>
      </div>
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
                  <th>Users Details</th>
                  <th>Order Status</th>
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

                  <td>
                    {status === false ? (
                      <>
                        <h2>Pending</h2>
                      </>
                    ) : (
                      <h2>Shiped</h2>
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="mangeOrder-handle-btn">
              <div className="manageOrder-btn">
                <button
                  onClick={() => {
                    handleDelete(manageOrder._id);
                  }}
                >
                  <i class="fas fa-trash"></i>delete
                </button>
              </div>
              <div className="update-btn">
                <button
                  onClick={() => {
                    handleUpdate(manageOrder._id);
                  }}
                >
                  <i class="fas fa-sync"></i>update
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
