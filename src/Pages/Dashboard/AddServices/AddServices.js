import axios from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import swal from "sweetalert";

import "./AddServices.css";
const AddServices = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect = "/shop";
  //react form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        swal("Good job!", "You Successfully added the service", "success");

        history.push(redirect);
        reset();
      }
    });
  };
  return (
    <div>
      <Container className="add-section">
        <Row>
          <Col>
            <div className="add-service-form">
              <h2>Add a Service!!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Image URL of the Product"
                  {...register("img")}
                />
                <input placeholder="Name Your Place" {...register("name")} />
                <input
                  placeholder="Description of the Product"
                  {...register("description")}
                />
                <input
                  placeholder="Price Of the Product"
                  {...register("price")}
                />

                <div className="add-sub-button">
                  <input type="submit" value="Add service" />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddServices;
