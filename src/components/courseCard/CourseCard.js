import React, { useState } from "react";
import "./CourseCard.scss";
import PrimeProgram from "../../assets/Prime Program.png";
import { BsCurrencyRupee } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetCart } from "../../redux/slice/CartSlice";
import CheckoutScetion from "../../pages/checkout-section/CheckoutSection";

const CourseCard = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openCart,setOpenCart]=useState(false);

  const cartData = useSelector((state) => state?.CartReducer?.cart);
  const userData = useSelector((state) => state?.UserReducer?.getMyInfo);
  
  const userCartData=cartData.filter(item=>(item.email===userData.email))

  const handlebuyNowFun=()=>{
    dispatch(addToCart({...data.data,userData})) &&
    //navigate("/")
      setOpenCart(!openCart);
  }
  const handleCourseFun=()=>{
    navigate(`/courses/${data.data.course}`);
  }

  return (
    <>
    <div className="course-card">
      <div className="course-card-Img">
        <img src={data.data.courseImg} alt={data.data.courseName} />
      </div>
      <div className="course-pricing">
        <h2 className="course-name">{data.data.courseName}</h2>
        <p className="course-mrp">
          <BsCurrencyRupee /> {data.data.courseMRP}
        </p>
        <p className="course-saleprice">
          <span style={{ color: "#757575" }}>
            <BsCurrencyRupee />
          </span>{" "}
          {data.data.courseSP}
        </p>
        <p className="course-emi">
          or EMI <BsCurrencyRupee />
          {data.data.courseEMI}
        </p>
        {data.data.buyFlag ? (
          <>
            <button
              className="btn-primary course-btn"
              onClick={handlebuyNowFun}
            >
              Buy Now
            </button>
          </>
        ) : (
          <button
            className="btn-primary course-btn"
            onClick={handleCourseFun}
          >
            Start Learning
          </button>
        )}
      </div>
      <div className="course-highlights">
        <h3 style={{ margin: "10px" }}>Key Features</h3>
        {data.data.courseFeatures.map((data) => (
          <p>{data}</p>
        ))}
      </div>
    </div>
    {userCartData.length>0 && openCart && (
      <CheckoutScetion
        onClose={() => {
          setOpenCart(false);
        }}
      />
    )}
    </>
  );
};
/*
()=>navigate(`/courses/${data.data.course}`)

onClick={()=>navigate(`/courses/${data.data.course}`)}
*/
export default CourseCard;
