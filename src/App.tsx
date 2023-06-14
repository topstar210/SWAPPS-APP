import { Routes, Route } from "react-router-dom";

import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AddPayment from "pages/auth/AddPayment";
import ForgotPassword from "pages/auth/ForgotPassword"
import VerifyCode from "pages/auth/VerifyCode"

function App() {
  return (
    <div> 
      <Routes>
        <Route index element={<div>home page</div>} />
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