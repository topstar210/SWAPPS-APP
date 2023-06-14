import { Routes, Route } from "react-router-dom";

import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AddPayment from "pages/auth/AddPayment";

function App() {
  return (
    <div> 
      <Routes>
        <Route index element={<div>home page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/payment" element={<AddPayment />} />
        <Route path="/auth/forgot-password" element={<Register />} />
      </Routes>
    </div>
  );  
}

export default App; 