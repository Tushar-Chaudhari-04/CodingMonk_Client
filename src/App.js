import "./App.css";
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home/Home";
import CourseSection from "./pages/courses-section/CourseSection";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import CheckoutScetion from "./pages/checkout-section/CheckoutSection";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import RequireUser from "./components/requireUser/RequireUser";
import Payment from "./components/payment/Payment";

function App() {
  const user = useSelector((state) => state?.UserReducer?.getMyInfo);

  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUser />}>
          {/* <Route path="/checkout" element={<CheckoutScetion />} /> */}
          <Route path="/payments/:status?" element={<Payment/>} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
         
          <Route path="/courses/:course" element={<CourseSection />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

{/* <Route path="/CodingMonk_Client" element={<Home />} /> */}