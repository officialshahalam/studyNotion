import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import CountryCode from "../../../data/countrycode.json";

function ContactUs() {
    const [loading,setLoading]=useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors,isSubmitSuccessful },
    } = useForm();

    const submitContactForm = async (data)=>{
        console.log("Contact Form Data is::",data);
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
        className='flex flex-col'
        onSubmit={handleSubmit(submitContactForm)}>

        {/* names    */}
        <div className='flex '>
            <label >
                <p>First Name</p>
                <input 
                    type='text'
                    name='firstName'
                    placeholder='Enter First Name'
                    {...register("firstName",{required:true})}
                />
                {
                    errors.firstName && (
                        <span>Please Enter Your Name</span>
                    )
                }
            </label>
            <label >
                <p>Last Name</p>
                <input 
                    type='text'
                    name='lastName'
                    placeholder='Enter Last Name'
                    {...register("lastName")}
                />
            </label>
        </div>

        {/* email */}
        <div>
            <label >
                <p>Email</p>
                <input 
                    type='email'
                    name='email'
                    placeholder='Enter Email'
                    {...register("email",{required:true})}
                />
                {
                    errors.email && (
                        <span>please enter youe correct email</span>
                    )
                }
            </label>
        </div>

        {/* phone number */}
        <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <div>
                <select name="countryCode" id="phoneNumber">
                    {
                        CountryCode.map((element,index)=>(
                            <option key={index} value={element.code}>{element.code}-{element.country}</option>
                        ))
                    }
                </select>
                <input 
                    type="text" 
                    name="phoneNumber" 
                    id="phoneNumber" 
                    placeholder='12345 67890'
                    {
                        ...register("phoneNumber",{
                            required:{value:true,message:"Please Enter Phone Number"},
                            maxLength:{value:"10",message:"Invalid Phone Number"},
                            minLength:{value:"10",message:"Invalid Phone Number"}
                        }
                    )}
                />
                {
                    errors.phoneNumber && (
                        <span>
                            {errors.phoneNumber.message}
                        </span>
                    )
                }
            </div>
        </div>

        {/* message*/}
        <div>
            <label >
                <p>Message</p>
                <textarea 
                    name="message" 
                    cols={30}
                    rows={5}
                    placeholder='Enter Message'
                    {...register("message",{required:true})}
                />
                {
                    errors.message && (
                        <span>Please Enter the Message</span>
                    )
                }
            </label>
        </div>
        {/* button */}
        <button 
            type='submit'
            className=''
            >
            Send Message
        </button>
        
    </form>
  )
}

export default ContactUs