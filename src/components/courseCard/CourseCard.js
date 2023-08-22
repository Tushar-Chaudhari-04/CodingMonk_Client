import React from "react";
import "./CourseCard.scss";
import PrimeProgram from "../../assets/Prime Program.png";
import { BsCurrencyRupee } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, resetCart } from "../../redux/slice/CartSlice";

const CourseCard = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state?.CartReducer?.cart);
  console.log("cartData ", cartData);
  //
  return (
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
              onClick={() => {
                dispatch(addToCart(data.data)) &&
                navigate("/checkout")
              }}
            >
              Buy Now
            </button>
          </>
        ) : (
          <button
            className="btn-primary course-btn"
            onClick={() => navigate(`/courses/${data.data.course}`)}
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
  );
};
/*
()=>navigate(`/courses/${data.data.course}`)

onClick={()=>navigate(`/courses/${data.data.course}`)}
*/
export default CourseCard;
