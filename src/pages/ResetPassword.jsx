import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { resetPasswordToken } from '../services/operations/auth';

function ResetPassword() {

    const [isEmailSent,setisEmailSent]=useState(false);
    const [email,setEmail]=useState("");
    const {loading}=useSelector((state)=>state.auth);

    const dispatch=useDispatch();

    function submitHandler(e){
        e.preventDefault();
        dispatch(resetPasswordToken(email,setisEmailSent));
    }


  return (
    <div className=' bg-richblack-900 w-full h-[calc((100vh-42px))] text-white'>
        <div className='w-11/12 max-w-maxContent mx-auto h-full flex items-center justify-center'>
            <div className='w-full flex items-center justify-center'>
                {
                    loading
                    ?(<div>Loading...</div>)
                    :
                    (
                        <div className='lg:w-[50%] mx-auto flex flex-col gap-6 p-8'>
                            <div className='space-y-3'>
                                <h1 className='text-3xl text-richblack-5 font-semibold'>
                                    {
                                        !isEmailSent?"Reset Your Password":"Check email"
                                    }
                                </h1>
                                <p className='text-base leading-5 font-normal text-richblack-200'>
                                    {
                                        !isEmailSent
                                        ?"Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
                                        :`We have sent the reset email to ${email}`
                                    }
                                </p>
                            </div>
                            <form 
                                className='w-full flex flex-col gap-5'
                                onSubmit={submitHandler}>
                                {
                                    !isEmailSent && 
                                    (
                                        <label className='space-y-1'>
                                            <p className='text-sm text-richblack-200 relative'>
                                                Email address
                                                <sup className='text-pink-700 text-xl absolute top-[-4px]'>*</sup>
                                            </p>
                                            <input 
                                                required
                                                type="email" 
                                                name='email'
                                                value={email}
                                                onChange={(e)=>setEmail(e.target.value)}
                                                placeholder='Enter your email'
                                                className='w-full  p-2 bg-richblack-800 rounded-sm'
                                            />
                                        </label>
                                    )
                                }
                                <button 
                                    className='w-full bg-yellow-50 p-3 rounded-lg text-richblack-900'
                                    type='submit'>
                                    {!isEmailSent ?"Reset Password":"resend email"}
                                </button>
                            </form>
                            <NavLink to="/login">
                                <div className='flex justify-start items-center gap-3 text-base'>
                                    <FaArrowLeftLong/>
                                    <p>Back to Login</p>
                                </div>
                            </NavLink>
                        </div>
                    )
                } 
            </div>
        </div>
    </div>
    
  )
}

export default ResetPassword;