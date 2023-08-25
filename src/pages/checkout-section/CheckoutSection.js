import React, { useEffect } from "react";
import "./CheckoutSection.scss";
import Checkout from "../../components/checkout/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetCart } from "../../redux/slice/CartSlice";
import {BsFillArrowLeftCircleFill} from "react-icons/bs"

const CheckoutScetion = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const cartData = useSelector((state) => state?.CartReducer?.cart);
  console.log("checkout", cartData);
  var totalPrice = 0;
  cartData.map((data) => (totalPrice += data.spPrice));

  const handleBack=()=>{
    console.log("Welcome Back")
    navigate("/");
  }

  const handlePayNow=()=>{
    console.log("Welcome")
    navigate("/");
    dispatch(resetCart());
}

  useEffect(() => {
    if(cartData.length!==0){
      navigate("/checkout");
    }else{
      //alert("Cart is Empty");
      navigate("/");
      
    }
  }, [cartData])
  
  return (
    <div className="checkout-main">
      <div className="checkout-card-section">
        <div className="cart-header">
          <h2>Confirm Your Order</h2>
          <BsFillArrowLeftCircleFill  className="back-btn" onClick={handleBack}/>
        </div>
        {cartData?.map((data) => (
          <Checkout data={data} />
        ))}

        <div className="checkout-total">
          <h3>Total</h3>
          <h3 className="total-price">₹ {totalPrice}</h3>
        </div>
        <button className="buy-btn" onClick={handlePayNow}>Proceed To Pay</button>
      </div>
    </div>
  );
};

export default CheckoutScetion;
