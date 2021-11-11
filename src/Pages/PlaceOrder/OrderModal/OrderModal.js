import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import "./OrderModal.css";

const OrderModal = ({ show, handleClose, data }) => {
  const handleModalSubmit = (e) => {
    e.preventDefault();
    handleClose();
    alert("successfully submitted");
  };
  const { users } = useAuth();

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title className="text-primary"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleModalSubmit}>
          <Row className="mb-3 modal-form">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control disabled type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control disabled type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control disabled type="email" placeholder={users.email} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="number" placeholder="Your Phone" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control disabled type="text" />
            </Form.Group>
          </Row>

          <div className="modal-submit-btn">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
