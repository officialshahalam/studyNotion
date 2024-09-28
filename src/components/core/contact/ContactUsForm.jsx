import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from "../../../data/countrycode.json";
import { useDispatch } from 'react-redux';
import { contactUs } from '../../../services/operations/contactus';

function ContactUsForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful },
    } = useForm();

    const dispatch=useDispatch();

    const submitContactForm = async (data)=>{
        console.log("Contact Form Data is::",data);

        dispatch(contactUs(data.firstName, data.lastName, data.email, data.CountryCode, data.phoneNumber, data.message));

    }

    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                firstName:"",
                lastName:"",
                email:"",
                message:"",
                phoneNumber:"",
            })
        }
    },[isSubmitSuccessful,reset]);

  return (
    <form 
        className='flex flex-col w-full gap-4'
        onSubmit={handleSubmit(submitContactForm)}>

        {/* names    */}
        <div className='flex justify-between gap-6 w-full'>
            <label className='w-full space-y-2'>
                <p className='text-base'>First Name</p>
                <input 
                    className='w-full p-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    {...register("firstName",{required:true})}
                />
                {
                    errors.firstName && (
                        <span className='text-xs italic'><span className='text-brown-300 text-xl'>*</span>Please Enter Your Name</span>
                    )
                }
            </label>
            <label className='w-full space-y-2'>
                <p className='text-base'>Last Name</p>
                <input 
                    className='w-full p-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    {...register("lastName")}
                />
            </label>
        </div>

        {/* email */}
        <div>
            <label className='w-full space-y-2'>
                <p>Email</p>
                <input 
                    className='w-full p-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    {...register("email",{required:true})}
                />
                {
                    errors.email && (
                        <span className='text-xs italic'><span className='text-brown-300 text-xl'>*</span>Please Enter correct email</span>
                    )
                }
            </label>
        </div>

        {/* phone number */}
        <div className='flex flex-col gap-2'>
            <label htmlFor="phoneNumber" className='text-base'>Phone Number</label>
            <div className='flex flex-col'>
                <div className='flex gap-5'>
                    <select 
                        className='w-[20%] px-1 py-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                        name="countryCode" id="phoneNumber">
                        {
                            CountryCode.map((element,index)=>(
                                <option key={index} value={element.code}>{element.code}-{element.country}</option>
                            ))
                        }
                    </select>
                    <input 
                        className='w-[80%] p-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                        type="text" 
                        name="phoneNumber" 
                        id="phoneNumber" 
                        placeholder='12345 67890'
                        {
                            ...register("phoneNumber",{
                                required:{value:true,message:"Please Enter Phone Number"},
                                maxLength:{value:"10",message:"Invalid Phone Number"},
                                minLength:{value:"10",message:"Invalid Phone Number"}
                            })
                        }
                    />
                </div>
                {
                    errors.phoneNumber && (
                        <span className='text-xs italic'><span className='text-brown-300 text-xl'>*</span>{errors.phoneNumber.message}</span>
                    )
                }
            </div>
        </div>

        {/* message*/}
        <div>
            <label className='flex flex-col gap-3'>
                <p>Message</p>
                <textarea 
                    className='w-full p-3 bg-richblack-800 rounded-lg border-b border-richblack-200'
                    name="message" 
                    cols={30}
                    rows={5}
                    placeholder='Enter Message'
                    {...register("message",{required:true})}
                />
                {
                    errors.message && (
                        <span className='text-xs italic'><span className='text-brown-300 text-xl'>*</span>Please Enter Some Message</span>
                    )
                }
            </label>
        </div>
        {/* button */}
        <button 
            type='submit'
            className='w-full bg-yellow-50 text-black p-3 rounded-lg'
            >
            Send Message
        </button>
        
    </form>
  )
}

export default ContactUsForm;