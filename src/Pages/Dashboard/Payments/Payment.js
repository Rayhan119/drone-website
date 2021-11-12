import React from "react";
import "./Payment.css";
import paymentImg from "../../../images/istockphoto-1144514162-612x612.jpg";
const Payment = () => {
  return (
    <div>
      <div className="payment-header ">
        <h1>Payment System Added Very Soon!!</h1>
        <h3>Work in Progress...</h3>
      </div>
      <div className="payment-img">
        <img src={paymentImg} alt="" />
      </div>
    </div>
  );
};

export default Payment;
