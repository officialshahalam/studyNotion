import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoEye,IoEyeOff } from "react-icons/io5";
import { resetPassword } from '../services/operations/auth';
import { NavLink } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function UpdatePassword() {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const location=useLocation();

    const {loading}=useSelector((state)=>state.auth);
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setConfirmShowPassword]=useState(false);
    const [formData,setFormData]=useState({password:"",confirmPassword:""});

    function changeHandler(e){
        e.preventDefault();
        setFormData((prevData)=>(
            {
                ...prevData,
                [e.target.name]:e.target.value,
            }
        ));
    }
    function submitHandler(e){
        e.preventDefault();
        const {password,confirmPassword}=formData;
        const token=location.pathname.split("/").at(-1);
        dispatch(resetPassword(password,confirmPassword,token,navigate));
    }
  return (
    <div className='w-full h-[calc(100vh-42px)] bg-richblack-900 text-white relative'>
        <div className='w-11/12 max-w-maxContent mx-auto flex h-[90%] items-center justify-center'>
            {
                loading ? (<div>Loading</div>)
                :
                (
                    <div className='w-[37%] flex flex-col gap-4'>
                        <div className='space-y-3'>   
                            <h1 className='text-3xl font-semibold'>Choose  new password</h1>
                            <p className='text-lg text-richblack-200 font-normal'>Almost done. Enter your new password and youre all set.</p>
                        </div>
                        <form 
                            className='flex flex-col gap-5 w-full '
                            onSubmit={submitHandler}>
                            <label className='space-y-2 relative'>
                                <p className='text-sm text-richblack-200 relative' >
                                    New Password
                                    <sup className='text-pink-800 text-xl absolute top-[-4px]'>*</sup>
                                </p>
                                <input 
                                    type={showPassword?"text":"password"}
                                    name='password'
                                    value={formData.password}
                                    onChange={changeHandler}
                                    placeholder='Password'
                                    className='w-full bg-richblack-800 p-3 rounded-sm text-base'
                                />
                                <span 
                                    className='text-xl cursor-pointer absolute right-2 top-[43%]'
                                    onClick={(e)=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? (<IoEyeOff/>) : (<IoEye />)
                                    }
                                </span>
                            </label>
                            <label className='space-y-2 relative'>
                                <p className='text-sm text-richblack-200 relative'>
                                    Confirm New Password
                                    <sup className='text-pink-800 text-xl absolute top-[-4px]'>*</sup>
                                </p>
                                <input 
                                    type={showConfirmPassword?"text":"password"}
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={changeHandler}
                                    placeholder='Confirm Password'
                                    className='w-full bg-richblack-800 p-3 rounded-sm text-base'
                                />
                                <span 
                                    className='text-xl cursor-pointer absolute right-2 top-[43%]'
                                    onClick={(e)=>setConfirmShowPassword(!showConfirmPassword)}>
                                    {
                                        showConfirmPassword ? (<IoEyeOff/>) : (<IoEye />)
                                    }
                                </span>
                            </label>
                            <button 
                                className='w-full bg-yellow-50 p-2 rounded-sm text-lg text-richblack-900 cursor-pointer'
                                type='submit'>
                                Reset Password
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
    
  )
}

export default UpdatePassword;