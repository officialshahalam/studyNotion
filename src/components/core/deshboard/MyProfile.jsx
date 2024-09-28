import React from 'react'
import { useSelector } from 'react-redux'
import { RiEditBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

function MyProfile() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  
  return (
    <div className='bg-richblack-900 h-[calc(100vh-3.5rem)] text-white py-10 overflow-auto'>
      <div className='w-11/12 max-w-[1000px] mx-auto flex flex-col gap-4'>
        <h1 className='text-3xl font-semibold mb-10'>My Profile</h1>

        <div className='flex justify-between items-center bg-richblack-800 p-6 border-[1px] border-richblack-600 rounded-lg'>
          <div className='flex items-center gap-6'>
            <img src={user.imageUrl} alt="image" className='w-20 h-20 rounded-full' />
            <div >
              <p className='text-lg text-richblack-5'>{`${user.firstName} ${user.lastName}`}</p>
              <p className='text-sm text-richblack-300'>{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard/settings")}
            className='flex items-center gap-2 bg-yellow-50 px-5 py-2 rounded-lg text-richblack-900'>
            <h1>Edit</h1>
            <RiEditBoxLine />
          </button>
        </div>

        <div className='flex flex-col  bg-richblack-800 p-6 border-[1px] border-richblack-600 rounded-lg'>
          <div className='flex justify-between'>
            <h1 className='text-xl text-richblack-5'>About</h1>
            <button
              onClick={() => navigate("/dashboard/settings")}
              className='flex items-center gap-2 bg-yellow-50 px-5 py-2 rounded-lg text-richblack-900'>
              <h1>Edit</h1>
              <RiEditBoxLine />
            </button>
          </div>
          <p className='text-richblack-300 text-sm'>Write Something About Yourself</p>
        </div>

        <div className='flex flex-col  bg-richblack-800 p-6 border-[1px] border-richblack-600 rounded-lg'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl '>Personal Details</h1>
            <button
              onClick={() => navigate("/dashboard/settings")}
              className='flex items-center gap-2 bg-yellow-50 px-5 py-2 rounded-lg text-richblack-900'>
              <h1>Edit</h1>
              <RiEditBoxLine />
            </button>
          </div>
          <div className='flex pt-4 text-sm'>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300 text-sm'>First Name</p>
              <p className='text-richblack-5 capitalize'>{user?.firstName}</p>
            </div>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300'>Last Name</p>
              <p className='text-richblack-5 capitalize'>{user?.lastName}</p>
            </div>
          </div>
          <div className='flex pt-4 text-sm'>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300 text-sm'>Email</p>
              <p className='text-richblack-5'>{user?.email}</p>
            </div>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300'>Phone Number</p>
              <p className='text-richblack-5 capitalize'>{user?.additionalDetails?.phoneNumber ?? "Add Contact Number"}</p>
            </div>
          </div>
          <div className='flex pt-4 text-sm'>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300 text-sm'>Gender</p>
              <p className='text-richblack-5 capitalize'>{user?.additionalDetails?.gender ?? "add gender"}</p>
            </div>
            <div className='flex-1 space-y-1'>
              <p className='text-richblack-300'>Date of Birth</p>
              <p className='text-richblack-5 capitalize'>{user?.additionalDetails?.DOB ?? "add DOB"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;