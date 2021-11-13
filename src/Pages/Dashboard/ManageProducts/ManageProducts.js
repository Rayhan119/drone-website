import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageProducts.css";
const ManageProducts = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://blooming-chamber-22086.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You sure want to delete?");
    if (proceed) {
      const url = `https://blooming-chamber-22086.herokuapp.com/services/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remaining = services.filter(
              (singleOrderInfo) => singleOrderInfo._id !== id
            );
            setServices(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div className="manage-product-top">
        <h1>Total Products : {services.length}</h1>
      </div>
      {services.map((service) => (
        <div>
          <div>
            <Table
              responsive
              striped
              bordered
              hover
              className="table-manageProduct"
            >
              <thead>
                <tr className="table-manageProduct-head">
                  <th>Product Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="manageProduct-img">
                      <img src={service.img} alt="" />
                    </div>
                    <h6>Product Id : {service._id} </h6>
                    <h6>product Name : {service.name}</h6>
                    <h6>
                      Product Details: {service.description.slice(0, 130)}
                    </h6>
                    <h6>Price : {service.price}</h6>
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="manageProduct-btn">
              <button
                onClick={() => {
                  handleDelete(service._id);
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

export default ManageProducts;
