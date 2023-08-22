import React from "react";
import "./Checkout.scss";
import PrimeProgram from "../../assets/Prime Program.png";

const Checkout = (props) => {
  return (
    <div className="checkout-card">
      <div className="product-data">
        <div className="product-img-main">
          <img src={props.data.image} alt="PrimeProgram" />
        </div>
        <h3>{props.data.name}</h3>
      </div>
      <div className="product-price">
        <h3>₹ {props.data.spPrice}</h3>
      </div>
    </div>
  );
};

export default Checkout;
