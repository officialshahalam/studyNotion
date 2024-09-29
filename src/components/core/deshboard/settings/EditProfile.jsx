import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../../../services/operations/settings';
import { NavLink } from 'react-router-dom';

function EditProfile() {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [profileLoading, setProfileLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const profileSubmitHandle = (data) => {
        setProfileLoading(true);
        try {
            dispatch(updateProfile(token, data)).then(() => {
                setProfileLoading(false);
            })
        }
        catch (e) {
            console.log("error while updating profile:::,e");
        }
        setProfileLoading(false);
    }

    return (
        <div className='flex flex-col p-6 bg-richblack-800 rounded-lg border border-richblack-700'>
            <h1 className='text-lg text-richblack-5 font-semibold'>Profile Information</h1>

            <form
                className='flex flex-col gap-5 mt-5'
                onSubmit={handleSubmit(profileSubmitHandle)}>
                <div className='flex gap-6'>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>First Name</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            defaultValue={user?.firstName}
                            type="text"
                            {
                            ...register("firstName", {
                                required: { value: true, message: "Please enter first name" }
                            })
                            }
                        />
                        {
                            errors?.firstName &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.firstName.message}</span>
                        }
                    </label>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Last Name</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            defaultValue={user?.lastName}
                            type="text"
                            {
                            ...register("lastName", {
                                required: { value: true, message: "Please enter last name" }
                            })
                            }
                        />
                        {
                            errors?.lastName &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.lastName.message}</span>
                        }
                    </label>
                </div>

                <div className='flex gap-6'>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Date Of Birth</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            defaultValue={user?.additionalDetails?.DOB}
                            type="date"
                            {
                            ...register("DOB", {
                                required: { value: true, message: "Please enter DOB name" }
                            })
                            }
                        />
                        {
                            errors?.DOB &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.DOB.message}</span>
                        }
                    </label>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Gender</h1>
                        <select
                            {...register("gender")}
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            name='gender' defaultValue={user?.additionalDetails?.gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="transe">transe</option>
                        </select>

                    </label>
                </div>

                <div className='flex gap-6'>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>Phone Number</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            defaultValue={user?.additionalDetails?.phoneNumber}
                            type="text"
                            {
                            ...register("phoneNumber", {
                                required: { value: true, message: "Please enter Phone Number", type: Number },
                                maxLength: { value: 12, message: "Invalid Contact Number" },
                                minLength: { value: 10, message: "Invalid Contact Number" },
                            })
                            }
                        />
                        {
                            errors?.phoneNumber &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors?.phoneNumber?.message}</span>
                        }
                    </label>
                    <label className='flex-1 flex flex-col gap-2'>
                        <h1 className='text-sm font-normal text-richblack-5'>About</h1>
                        <input
                            className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                            defaultValue={user?.additionalDetails?.about}
                            type="text"
                            {
                            ...register("about", {
                                required: { value: true, message: "Please enter last name" }
                            })
                            }
                        />
                        {
                            errors?.about &&
                            <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.about.message}</span>
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
                        {!profileLoading ? "Save" : "saving..."}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile;