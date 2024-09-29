import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux'
import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { updatePassword } from '../../../../services/operations/auth';



function UpdatePassword() {


    const { token } = useSelector((state) => state.auth);
    const [isCurrentPassword, setIsCurrentPassword] = useState(true);
    const [isNewPassword, setIsNewPassword] = useState(true);
    const [isConfirmNewPassword, setIsConfirmNewPassword] = useState(true);
    const [profileLoading, setProfileLoading] = useState(false);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    function updatePasswordHandler(data) {
        console.log("data in password update:::", data);
        setProfileLoading(true);
        try {
            const response=dispatch(updatePassword(data,token));
            setProfileLoading(false);
            reset({
                currentPassword:"",
                newPassword:"",
                confirmNewPassword:""
            })
        }
        catch (e) {
            console.log("error while update profile:::",e);
            setProfileLoading(false);
        }
    }

    return (
        <div className='flex flex-col gap-5 p-6 bg-richblack-800 rounded-lg border border-richblack-700'>
            <h1 className='text-lg text-richblack-5 font-semibold'>Password</h1>
            <form 
                className='flex flex-col gap-5'
                onSubmit={handleSubmit(updatePasswordHandler)}>
                <div className='flex gap-6 '>
                    <label className='relative flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Current Password</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            type={isCurrentPassword ? "password" : "text"}
                            {
                            ...register("currentPassword", {
                                required: { value: true, message: "Please enter current password" }
                            })
                            }
                        />
                        {
                            isCurrentPassword ?
                                (
                                    <IoEye className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsCurrentPassword((prev) => !prev)} />
                                )
                                :
                                (
                                    <FaEyeSlash className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsCurrentPassword((prev) => !prev)} />

                                )
                        }
                        {
                            errors?.isCurrentPassword &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.isCurrentPassword.message}</span>
                        }
                    </label>
                </div>

                <div className='flex gap-6'>
                    <label className='relative flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>New Password</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            type={isNewPassword ? "password" : "text"}
                            {
                            ...register("newPassword", {
                                required: { value: true, message: "Please enter newPassword" }
                            })
                            }
                        />
                        {
                            isNewPassword ?
                                (
                                    <IoEye className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsNewPassword((prev) => !prev)} />
                                )
                                :
                                (
                                    <FaEyeSlash className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsNewPassword((prev) => !prev)} />

                                )
                        }

                        {
                            errors?.newPassword &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.newPassword.message}</span>
                        }
                    </label>
                    <label className='relative flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Confirm New Password</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            type={isConfirmNewPassword ? "password" : "text"}
                            {
                            ...register("confirmNewPassword", {
                                required: { value: true, message: "Please enter Confirm New Password" }
                            })
                            }
                        />
                        {
                            isConfirmNewPassword ?
                                (
                                    <IoEye className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsConfirmNewPassword((prev) => !prev)} />
                                )
                                :
                                (
                                    <FaEyeSlash className='absolute cursor-pointer right-3 text-xl top-[55%]' onClick={() => setIsConfirmNewPassword((prev) => !prev)} />

                                )
                        }
                        {
                            errors?.isConfirmNewPassword &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.isConfirmNewPassword.message}</span>
                        }
                    </label>
                </div>

                <div className='flex-1 flex justify-end gap-5'>
                    <NavLink
                        className='bg-richblack-700 px-5 py-2 rounded-lg font-semibold' to="/dashboard/my-profile"
                    >
                        Cancle
                    </NavLink>
                    <button
                        className='flex bg-yellow-50 items-center gap-2 text-richblack-900 px-5 py-2 rounded-lg font-semibold' type='submit'
                    >
                        {!profileLoading ? "Update" : "updating..."}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword