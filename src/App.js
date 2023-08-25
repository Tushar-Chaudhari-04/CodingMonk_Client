import "./App.css";
import {
  BrowserRouter,
  Link,
  Outlet,
  useRoutes,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import CourseSection from "./pages/courses-section/CourseSection";
import PageNotFound from "./components/pagenotfound/PageNotFound";
import CheckoutScetion from "./pages/checkout-section/CheckoutSection";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import RequireUser from "./components/requireUser/RequireUser";

function App() {
  const user = useSelector((state) => state?.UserReducer?.getMyInfo);
  console.log("user slice data ", user);

  return (
    <div className="App">
      <Routes>
        <Route element={<RequireUser />}>
          <Route path="/checkout" element={<CheckoutScetion />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/courses/:course" element={<CourseSection />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
