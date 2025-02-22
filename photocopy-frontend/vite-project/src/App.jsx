import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BuyerDashboard from "./pages/BuyerDashboard";
import Home from "./pages/Home";
import UploadFile from "./pages/UploadFile";
import SellerLogin from "./pages/SellerLogin";
import Payment from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";
import SellerRegister from "./pages/SellerRegister";
import SellerDashboard from "./pages/SellerDashboard";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        <Route path="/upload" element={<UploadFile />} />
        <Route path="/seller-login" element={<SellerLogin />} />
        <Route path="/seller-register" element={<SellerRegister />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />


      </Routes>
    </Router>
  );
};

export default App;