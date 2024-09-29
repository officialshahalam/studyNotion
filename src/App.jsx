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
import ProtectedRoute from "./components/common/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./components/core/deshboard/MyProfile";
import EnrolledCourse from "./components/core/deshboard/EnrolledCourse";
import PurchaseHistory from "./components/core/deshboard/PurchaseHistory";
import Cart from "./components/core/deshboard/Cart";
import Error from "./pages/Error";
import { ACCOUNT_TYPE } from "./utils/constants";
import { useSelector } from "react-redux";
import Settings from "./components/core/deshboard/settings/Settings";



function App() {

  const {user}=useSelector((state)=>state.profile);

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
        <Route element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
          {/* router for all loged in user */}
          <Route path="/dashboard/my-profile" element={<MyProfile />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {/* route for students */}
          {
            user?.accountType === ACCOUNT_TYPE.STUDENT &&
            (
              <>
                <Route path="/dashboard/enrolled-courses" element={<EnrolledCourse />} />
                <Route path="/dashboard/purchase-history" element={<PurchaseHistory />} />
                <Route path="/dashboard/cart" element={<Cart />} />
              </>
            )
          }
        </Route>
        <Route path="*" element={<Error />} />
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
