import React, { useEffect } from "react";
import "./CheckoutSection.scss";
import Checkout from "../../components/checkout/Checkout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutScetion = () => {
  const navigate=useNavigate();

  const cartData = useSelector((state) => state?.CartReducer?.cart);
  console.log("checkout", cartData);
  var totalPrice = 0;
  cartData.map((data) => (totalPrice += data.spPrice));

  const handleBack=()=>{
    console.log("Welcome")
    navigate("/")
  }

  useEffect(() => {
    if(cartData){
      navigate("/checkout");
    }else{
      navigate("/");
    }
  }, [cartData,navigate])
  
  return (
    <div className="checkout-main">
      <div className="checkout-card-section">
        <div className="cart-header">
          <h2>Confirm Your Order</h2>
          <button className="btn-primary" onClick={handleBack}>Back</button>
        </div>
        
        {cartData?.map((data) => (
          <Checkout key={data.id} data={data} />
        ))}

        <div className="checkout-total">
          <h3>Total</h3>
          <h3>₹ {totalPrice}</h3>
        </div>
        <button className="buy-btn" onClick={handleBack}>Proceed To Pay</button>
      </div>
    </div>
  );
};

export default CheckoutScetion;
