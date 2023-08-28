import React, { useEffect } from "react";
import "./CheckoutSection.scss";
import Checkout from "../../components/checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetCart } from "../../redux/slice/CartSlice";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import { axiosClient } from "../../utils/axiosClient";
import {loadStripe} from '@stripe/stripe-js';
import { ImCross } from "react-icons/im";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//let key=process.env.REACT_APP_PUBLISHABLE_KEY;

const stripePromise = loadStripe(`${process.env.REACT_APP_PUBLISHABLE_KEY}`);


const CheckoutScetion = ({ onClose }) => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const userData = useSelector((state) => state?.UserReducer?.getMyInfo);
  const cartData = useSelector((state) => state?.CartReducer?.cart);
  const userCartData=cartData.filter(item=>(item.email===userData.email))
  var totalPrice = 0;
  userCartData.map((data) => (totalPrice += data.spPrice));

  const handleCheckout=async()=>{
    const checkoutResponse=await axiosClient.post("/orders/payment",{
      user:userData._id,
      products:userCartData
    })


    let stripeId=checkoutResponse?.data?.result?.stripeId
    const stripe=await stripePromise;
    await stripe.redirectToCheckout({
      sessionId:stripeId
    })
  }

  return (

    <div className="checkout-main">
    <div className="cart-overlay">
      <div className="checkout-card-section">
        <div className="cart-header">
          <h2>Confirm Your Order</h2>
          <div  onClick={onClose}>
          <ImCross className="back-btn"/>
          </div>
        </div>
        {userCartData?.map((data) => (
          <Checkout data={data} />
        ))}

        <div className="checkout-total">
          <h3>Total</h3>
          <h3 className="total-price">₹ {totalPrice}</h3>
        </div>
        <button className="buy-btn" onClick={handleCheckout}>Proceed To Pay</button>
      </div>
    </div>
    </div>
  );
};

export default CheckoutScetion;
