import React from 'react'
import Template from '../components/core/auth/Template';
import signupImage from "../assets/Images/signup.webp"

function Signup({setIsLogedin}) {
  return (
    <div className='bg-richblack-900 min-h-screen'>
        <Template
            title="Join the millions learning to code with StudyNotion for free"
            desc1="Build skills for today, tomorrow, and beyond."
            desc2="Education to future-proof your career."
            image={signupImage}
            formType="signup"
        />
    </div>
  )
}

export default Signup