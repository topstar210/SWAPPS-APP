import { Routes, Route } from "react-router-dom";

// auth routers
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AddPayment from "pages/auth/AddPayment";
import ForgotPassword from "pages/auth/ForgotPassword"
import VerifyCode from "pages/auth/VerifyCode"
// home
import Home from "pages/home/Home";
import Search from "pages/search/Search";
// book
import Ticket from "pages/book/Ticket";
import AuthToBook from "pages/book/AuthToBook";
import Payment from "pages/book/Payment";
import TicketDetails from "pages/book/TicketDetails";
import Successful from "pages/book/Successful";
import Profile from "pages/profile/Profile";

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

        <Route path="/search" element={<Search />} />

        <Route path="/ticket" element={<Ticket />} />
        <Route path="/auth-to-book" element={<AuthToBook />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/ticket-details" element={<TicketDetails />} />
        <Route path="/ticket-success" element={<Successful />} />

        <Route path="/profile/account" element={<Profile page="account" />} />
        <Route path="/profile/history" element={<Profile page="history" />} />
        <Route path="/profile/payment" element={<Profile page="payment" />} />
      </Routes>
    </div>
  );  
}

export default App; 