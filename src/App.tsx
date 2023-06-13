import { Routes, Route } from "react-router-dom";

import Login from "pages/auth/Login";
import Register from "pages/auth/Register";

function App() {
  return (
    <div> 
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<Register />} />
      </Routes>
    </div>
  );  
}

export default App; 