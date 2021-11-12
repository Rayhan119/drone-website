import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./MyOrderDetail.css";
const MyOrderDetail = ({ order }) => {
  console.log(order);
  return (
    <div>
      <Table striped bordered hover className="table-order">
        <thead>
          <tr className="table-head">
            <th>Product Details</th>
            <th>Users Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="order-img">
                <img src={order.productImg} alt="" />
              </div>
              <h6>Product Id : {order._id} </h6>
              <h6>product Name : {order.productName}</h6>
            </td>
            <td>
              <h6>Customer Name : {order.customerName} </h6>
              <h6>Customer Email : {order.email} </h6>
              <h6>Customer Phone : {order.phone} </h6>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="myOrder-btn">
        <button>
          <i class="fas fa-trash"></i>delete
        </button>
      </div>
    </div>
  );
};

export default MyOrderDetail;
