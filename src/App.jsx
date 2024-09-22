import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import UpdatePassword from "./pages/UpdatePassword";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";



function App() {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/:id" element={<UpdatePassword />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>


      {/* overlay */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-20 bg-richblack-100 opacity-50 ${sidebar ? "block" : "hidden"}`}
        onClick={() => setSidebar(false)}>
      </div>
    </div>
  );
}

export default App;
