import React from 'react'
import { NavLink } from 'react-router-dom';

function CTAButton({children,active,linkTo}) {
  return (
    <NavLink to={linkTo}>
        <button 
            className={`text-center px-6 py-3 rounded-lg text-base font-medium ${active?"bg-yellow-50 text-black" :"bg-richblack-800"} transition-all duration-200 hover:scale-95`}>
            {children}
        </button>
    </NavLink>
  )
}

export default CTAButton;