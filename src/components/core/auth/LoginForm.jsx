import React from 'react'
import { useState } from 'react';
import { IoEyeOff,IoEye } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { login } from '../../../services/operations/auth';

function LoginForm() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [formData,setFormData]=useState({
        email:"",
        password:"",
    })

    const [showPassword,setShowPassword]=useState(false);

    function changeHandler(event){
        const {name,value,type,checked}=event.target;
        setFormData((prev)=>{
            return {
                ...prev,
                [name]:type==="checkbox"?checked:value,
            }
        });
    }
    function submitHandler(event){
        event.preventDefault();
        console.log("login form data is :",formData);
        dispatch(login(formData.email,formData.password,navigate));
    }
  return (
    <div>
        <form
            onSubmit={submitHandler}
            className='flex flex-col gap-3'
            >
            <label className='w-full relative'>
                <p className='text-[14px] text-richblack-5 mb-1'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                    className='text-richblack-5 bg-richblack-800 p-3 w-full rounded-[8px] placeholder:text-richblack-100 border-b-2 border-richblack-100' required
                    placeholder='Enter Email Address' type='email' name='email' value={formData.email} onChange={changeHandler}
                />
            </label>
            <label className='relative w-full'>
                <p className='text-[14px] mb-1 text-richblack-5'>Password<sup className='text-pink-200'>*</sup></p>
                <input
                    className='bg-richblack-800 text-richblack-5 w-full  p-3 rounded-[8px] border-b-2 border-richblack-100 placeholder:text-richblack-100' required
                    placeholder='Enter Password' type={showPassword?"text":"password"} name='password' value={formData.password} onChange={changeHandler} 
                />
                <span 
                    className='cursor-pointer absolute top-9 right-3 text-[22px] text-richblack-50'
                    onClick={()=>setShowPassword(!showPassword)}
                    >
                    {
                        showPassword?(<IoEyeOff/>):(<IoEye/>)
                    }
                </span>
                <NavLink to="/reset-password">
                    <p className='text-xs w-full text-right mt-2 text-blue-100'>Forget Password</p>
                </NavLink>
            </label>
            <button className='w-full bg-yellow-50 py-3 rounded-[8px] text-richblack-700 font-medium border border-richblack-700'>Sign Up</button>
            
        </form>
    </div>
  )
}

export default LoginForm