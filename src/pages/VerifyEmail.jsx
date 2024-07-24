import React from 'react'
import OTPInput from 'react-otp-input'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/auth';
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdRestore } from "react-icons/md";


function VarifyEmail() {

  const [otp, setOtp] = useState('');
  const {signUpData}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  function onSubmitHandle(e){
      e.preventDefault();
      const {accountType,firstName,lastName,email,password,confirmPassword}=signUpData;

      dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
  }


  return (
    <div className='h-[calc(100vh-42px)] w-full bg-richblack-900'>
        <div className='w-11/12 max-w-maxContent mx-auto text-richblack-5 flex place-content-center h-5/6'>
            <div className='flex flex-col place-content-center p-8 gap-6 w-[40%]'>
              <div className='flex flex-col'>
                <h1 className='text-3xl font-semibold'>Verify Email</h1>
                <p className='text-lg leading-6 font-light text-richblack-300 pt-2'>A verification code has been sent to you. Enter the code below</p>
              </div>
              <form onSubmit={onSubmitHandle}>
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderInput={(props) => 
                    <input {...props} 
                      placeholder='-'
                      style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                      }}
                      //class property is only applied when we use style also
                      className='w-14 aspect-square rounded bg-richblack-700 text-center focus:outline-yellow-50'
                    />}
                  containerStyle={{
                    justifyContent:'space-between',
                    gap: "0 16px"
                  }}
                />
                <button type='submit'
                  className='mt-6 w-full text-center py-3 rounded-md text-lg text-black bg-yellow-50'
                  >
                  Verify Email
                </button>
              </form> 
              <div className='flex justify-between items-center gap-3'>
                  <NavLink to="login">
                    <div className='flex items-center gap-1'>
                      <IoIosArrowRoundBack className='text-3xl'/>
                      <p className='text-base'>Back To Login</p>
                    </div>
                  </NavLink>
                  <button 
                    className='flex items-center gap-2 text-blue-300'
                    onClick={()=>{dispatch(sendOtp(signUpData.email,navigate))}}>
                    <MdRestore className='text-2xl'/>
                    <p className='text-lg'>Resend it</p>
                  </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default VarifyEmail