import React, { useState } from 'react'
import UpdateProfile from './UpdateProfilePicture';
import EditProfile from './EditProfile';
import UpdatePassword from './UpdatePassword';
import DeleteAccount from './DeleteAccount';

function Settings() {
  
  return (
    <div className='bg-richblack-900 h-[calc(100vh-3.5rem)] text-white overflow-auto'>
      <div className='w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 py-10'>
        <h1 className='text-3xl text-richblack-5'>Edit Profile</h1>
        {/* image upload */}
        <UpdateProfile/>

        {/* edit profile */}
        <EditProfile/>

        {/* update password */}
        <UpdatePassword/>

        {/* delete account */}
        <DeleteAccount/>
      </div>
    </div>
  )
}

export default Settings;