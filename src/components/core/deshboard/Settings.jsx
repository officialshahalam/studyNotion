import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LuUpload } from "react-icons/lu";
import { updateProfile, updateDisplayPicture } from '../../../services/operations/settings';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUser } from '../../../slices/ProfileSlice';

function Settings() {

  // image update
  const inputFileRef = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [imgLoading, setImgLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(false);

  function changeHandler(e) {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(file);
    }
  }

  function clickHandler(e) {
    inputFileRef.current.click();
  }

  function fileUploadHandle(e) {
    try {
      setImgLoading(true);
      const formData = new FormData();
      formData.append("displayPicture", imageFile);
      dispatch(updateDisplayPicture(token, formData)).then(() => {
        setImgLoading(false);
      });
    }
    catch (e) {
      console.log("error while upload file:::", e);
    }
  }

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      }
    }
  })

  // profile update
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const profileSubmitHandle=(data)=>{
    console.log("profile form data:::",data);
    setProfileLoading(true);
    try{
      dispatch(updateProfile(token,data)).then(()=>{
        setProfileLoading(false);
      })
    }
    catch(e){
      console.log("error while updating profile:::,e");
    }
    setProfileLoading(false);
  }



  return (
    <div className='bg-richblack-900 h-[calc(100vh-3.5rem)] text-white overflow-auto'>
      <div className='w-11/12 max-w-[1000px] mx-auto flex flex-col gap-8 py-10'>
        <h1 className='text-3xl text-richblack-5'>Edit Profile</h1>
        {/* image upload */}
        <div className='mt-5 flex items-center p-6 bg-richblack-800 rounded-lg border border-richblack-700 gap-5'>
          <img src={previewImage || user.imageUrl} className='w-20 h-20 rounded-full' alt={user.firstName}/>
          <div className='flex flex-col gap-3'>
            <h1 className='text-base font-medium'>Change Your Profile</h1>
            <div className='flex gap-3'>
              <input
                ref={inputFileRef}
                onChange={changeHandler}
                accept="image/png, image/gif, image/jpeg"
                type="file"
                className='hidden'
              />
              <button
                disabled={imgLoading}
                onClick={clickHandler}
                className='bg-richblack-700 px-5 py-2 rounded-lg font-semibold'>
                Select
              </button>
              <button
                onClick={fileUploadHandle}
                className='flex bg-yellow-50 items-center gap-2 text-richblack-900 px-5 py-2 rounded-lg font-semibold'
              >
                {imgLoading ? "uploading..." : "upload"}
                {!imgLoading && <LuUpload />}
              </button>
            </div>
          </div>
        </div>

        {/* edit profile */}
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
                  defaultValue={user.firstName}
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
                  defaultValue={user.lastName}
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
                  defaultValue={user.additionalDetails.DOB}
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
                  name='gender' defaultValue={user.additionalDetails.gender}>
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
                  defaultValue={user.additionalDetails.phoneNumber}
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
                  <span className='text-xs italic mt-[-8px]'><span className='text-lg text-pink-600'>*</span>{errors.phoneNumber.message}</span>
                }
              </label>
              <label className='flex-1 flex flex-col gap-2'>
                <h1 className='text-sm font-normal text-richblack-5'>About</h1>
                <input
                  className='text-richblack-5 p-3 rounded-lg bg-richblack-700 border-b border-richblack-500'
                  defaultValue={user.additionalDetails.about}
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
                {!profileLoading ?"Save":"saving..."}
              </button>
            </div>
          </form>
        </div>

        {/* update password */}
      </div>
    </div>
  )
}

export default Settings;