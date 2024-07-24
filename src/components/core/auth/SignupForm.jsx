import React, { useState } from 'react'
import { IoEye,IoEyeOff } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { setSignupData } from '../../../slices/authSlice';
import { sendOtp } from '../../../services/operations/auth';
import { useNavigate } from 'react-router-dom';


function SignupForm() {
    
    const navigate = useNavigate()
    const dispatch=useDispatch();

    const [formData,setFormData]=useState({
        accountType:"student",
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
    });

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    function changeHandler(event){
        const {type,name,value,checked}=event.target;
        setFormData((prev)=>{
            return {
                ...prev,
                [name]:type==="checkbox"?checked:value,
            }
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.warning("Password and confirm not match");
            return;
        }
        console.log("form data::",formData);

        //sent data to store which is use after verification
        dispatch(setSignupData(formData));
        //sent otp and navigate to verify email page
        dispatch(sendOtp(formData.email,navigate));

    }



  return (
    <div>
        <form 
            onSubmit={submitHandler}
            className='flex flex-col gap-4 text-richblack-5'
            >
            {/* chose account type */}
            <div className="bg-richblack-800 w-fit px-1  py-2 rounded-full space-x-2 ">
                <label className={`px-6 py-2 transition-all duration-200 rounded-full ${formData.accountType==="student"?"bg-richblack-900 text-richblack-5": "text-richblack-200"}`}>
                    <span>Student</span>
                    <input
                        className='hidden'
                        type='radio' name='accountType' value="student" checked={formData.accountType==="student"} onChange={changeHandler} 
                    />
                </label>
                <label className={`px-6 py-2 transition-all duration-200 rounded-full ${formData.accountType==="instructor"?"bg-richblack-900 text-richblack-5": "text-richblack-200"}`}>
                    <span>Instructor</span>
                    <input 
                        className='hidden'
                        type='radio' name='accountType' value="instructor" checked={formData.accountType==="instructor"} onChange={changeHandler} 
                    />
                </label>
            </div>
            {/* Enter name */}
            <div className='flex gap-4'>
                <label className='w-full'>
                    <p className='text-[14px] mb-1 leading-[22px] text-richblack-5'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='bg-richblack-800 w-full rounded-[8px] px-6 pl-3 py-2 border-b border-richblack-100 text-base placeholder:text-[14px]'
                        type='text' name='firstName' value={formData.firstName} onChange={changeHandler}
                        placeholder='Enter First Name'
                        required
                    />
                </label>
                <label className='w-full'>
                    <p className='text-[14px] text-richblack-5 leading-[22px] mb-1'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='w-full px-6 pl-3 py-2 bg-richblack-800 rounded-[8px] border-b border-richblack-100 text-base placeholder:text-[14px]'
                        type='text' name='lastName' value={formData.lastName} onChange={changeHandler}
                        placeholder='Enter Last Name'
                        required
                    />
                </label>
            </div>
            {/* enter email */}
            <label>
                <p className='text-[14px] leading-[22px] mb-1 text-richblack-5'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input  
                    className='w-full bg-richblack-800 rounded-[8px] px-6 pl-3 py-2 border-b border-richblack-100 text-base placeholder:text-[14px]'
                    type='email' name='email' value={formData.email} onChange={changeHandler}
                    placeholder='Enter Email Address'
                    required
                />
            </label>
            {/* enter password */}
            <div className='flex gap-4'>
                <label className='w-full relative'>
                    <p className='text-[14px] text-richblack-5 leading-[22px] mb-1'>Password<sup className='text-pink-200'>*</sup></p>
                    <input 
                        className='w-full bg-richblack-800 px-6 pl-3 py-2 text-base placeholder:text-[14px] rounded-[8px] border-b border-richblack-100'
                        type={showPassword?("text"):("password")} name='password' value={formData.password} onChange={changeHandler}
                        placeholder='Password'
                        required
                    />
                    <div   
                        className='absolute top-9 text-[20px] text-richblack-50 right-3 cursor-pointer'
                        onClick={()=>setShowPassword(!showPassword)}>
                        {showPassword?(<IoEyeOff/>):(<IoEye />)}
                    </div>
                </label>
                <label className='w-full relative'>
                    <p className='text-[14px] text-richblack-5 leading-[22px] mb-1'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        className='w-full bg-richblack-800 px-6 pl-3 py-2 text-base placeholder:text-[14px] rounded-[8px] border-b border-richblack-100' 
                        type={showConfirmPassword?("text"):("password")} name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password'
                        required
                    />
                    <div 
                        className='absolute top-9 text-[20px] text-richblack-50 right-3 cursor-pointer'
                        onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword?(<IoEyeOff/>):(<IoEye />)}
                    </div>
                </label>
            </div>
            {/* buttom */}
            <button
                className='bg-yellow-50 px-6 py-2 rounded-[8px] border border-richblack-700 text-richblack-900 font-medium'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm;