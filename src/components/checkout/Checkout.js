import React from "react";
import "./Checkout.scss";
import {ImCross} from "react-icons/im"
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/slice/CartSlice";
import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const Checkout = (props) => { 
  const dispatch=useDispatch();
  const productData=props.data;
  const removeItemFun=()=>{
    dispatch(removeItemFromCart(productData))
  }

  

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
      <ImCross className="remove-btn" onClick={removeItemFun}/>
    </div>
  );
};

export default Checkout;
