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
import OpenRoute from "./components/common/OpenRoute";



function App() {

  const [sideNavbar, setSideNavbar] = useState(false);

  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Navbar sideNavbar={sideNavbar} setSideNavbar={setSideNavbar} />
      <Routes>
        {/* open route */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* routes for not loged in user */}
        <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
        <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
        <Route path="/verify-email" element={<OpenRoute><VerifyEmail /></OpenRoute>} />
        <Route path="/reset-password" element={<OpenRoute><ResetPassword /></OpenRoute>} />
        <Route path="/reset-password/:id" element={<UpdatePassword />} />

        {/* route for loged in user */}
        <Route>
          
        </Route>
      </Routes>


      {/* overlay */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-20  bg-richblack-100 opacity-50 ${sideNavbar ? "block" : "hidden"}`}
        onClick={() => setSideNavbar(false)}>
      </div>
    </div>
  );
}

export default App;
