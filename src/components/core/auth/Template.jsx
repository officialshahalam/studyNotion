import React from 'react'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { FcGoogle } from "react-icons/fc";
import frameImage from "../../../assets/Images/frame.png";

function Template({title,desc1,desc2,formType,image}) {
  return (
    <div className='w-10/12 max-w-[1160px] mx-auto my-[5rem] flex flex-col-reverse gap-4  lg:flex-row justify-between items-start lg:items-center'>
        <div className='left flex flex-col gap-4 lg:w-10/12 lg:max-w-[500px]'>
            <h1 className='text-[30px] leading-[38px] font-semibold text-richblack-5 mt-16'>{title}</h1>
            <div className='text-[20px] leading-6'>
                <p className='text-richblack-100'>{desc1}</p>
                <p className='text-blue-100 italic'>{desc2}</p>
            </div>
            {
                formType==="login"?(<LoginForm />):(<SignupForm />)
            }
            <div className='flex justify-center items-center'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='mx-2 text-richblack-700'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>
            <button className='flex justify-center items-center space-x-3 border border-richblack-700 py-3 rounded-lg'>
                <FcGoogle/>
                <span className='text-richblack-100 font-medium'>Sign Up With Google</span>
            </button>
        </div>
        <div className='right relative w-10/12 max-w-[450px]'>
            <img className='absolute top-4 -right-4' src={image} alt='A'/>
            <img src={frameImage} alt='A'/>
        </div>
    </div>
  )
}

export default Template;