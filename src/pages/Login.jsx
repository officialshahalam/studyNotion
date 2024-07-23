import React from 'react'
import loginImage from "../assets/Images/login.webp";
import Template from '../components/core/auth/Template';

function Login({setIsLogedin}) {

  return (
    <div className='bg-richblack-900 min-h-screen'>
        <Template
            title="Welcome Back"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            formType="login"
            image={loginImage}
        />
    </div>
  )
}

export default Login