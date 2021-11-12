import React from "react";
import { Table } from "react-bootstrap";
import "./ManageOrderDetail.css";

const ManageOrderDetail = ({ manageAllOrder }) => {
  const {
    customerName,
    email,
    productImg,
    productName,
    userEmail,
    _id,
    phone,
  } = manageAllOrder;
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
                <img src={productImg} alt="" />
              </div>
              <h6>Product Id : {_id} </h6>
              <h6>product Name : {productName}</h6>
            </td>
            <td>
              <h6>Customer Name : {customerName} </h6>
              <h6>Customer Email : {email} </h6>
              <h6>Customer Phone : {phone} </h6>
            </td>
          </tr>
        </tbody>
      </Table>

      <div className="manageOrder-btn">
        <button>
          <i class="fas fa-trash"></i>delete
        </button>
      </div>
    </div>
  );
};

export default ManageOrderDetail;
