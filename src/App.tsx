import { Routes, Route } from "react-router-dom";

// auth routers
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AddPayment from "pages/auth/AddPayment";
import ForgotPassword from "pages/auth/ForgotPassword"
import VerifyCode from "pages/auth/VerifyCode"
// home
import Home from "pages/home/Home";


function App() {
  return (
    <div> 
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/payment" element={<AddPayment />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/verify-code" element={<VerifyCode />} />
      </Routes>
    </div>
  );  
}

export default App; 