import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import swal from "sweetalert";

import useAuth from "../../../Hooks/useAuth";
import "./OrderModal.css";
import { useHistory } from "react-router";

const OrderModal = ({ show, handleClose, data }) => {
  const { img, name } = data;
  const { users } = useAuth();
  const history = useHistory();
  const redirect = "/home";

  const initialInfo = {
    customerName: users.displayName,
    email: users.email,
    phone: "",
  };
  const [oderInfo, setOrderInfo] = useState(initialInfo);
  //collect data from input field
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...oderInfo };
    newInfo[field] = value;
    setOrderInfo(newInfo);
  };
  const handleModalSubmit = (e) => {
    e.preventDefault();
    //order
    const orders = {
      ...oderInfo,
      productImg: img,
      productName: name,
      userEmail: users.email,
      status: "pending",
    };

    //post order to the server

    fetch("https://blooming-chamber-22086.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Good job!", "You Successfully Order your Drone", "success");
          handleClose();
          history.push(redirect);
        }
      });
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <div className="modal-header d-flex justify-content-center">
        <img src={data.img} alt="" />
        <h5>{data.name}</h5>
      </div>

      <Modal.Body>
        <Form onSubmit={handleModalSubmit}>
          <Row className="mb-3 modal-form">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control
                defaultValue={users.displayName}
                type="text"
                name="customerName"
                onBlur={handleOnBlur}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                defaultValue={users.email}
                type="email"
                name="email"
                onBlur={handleOnBlur}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                name="phone"
                onBlur={handleOnBlur}
                type="number"
                placeholder="Your Phone"
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control
                disabled
                placeholder={`${data.price} $`}
                type="text"
              />
            </Form.Group>
          </Row>

          <div className="modal-submit-btn">
            <Button type="submit">Confirm Order</Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
