import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../services/operations/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { VscDashboard, VscSignOut } from 'react-icons/vsc';
import useOnClickOutside from '../../hooks/useOnClickOutSide';

function ProfileDropDown() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.profile);

  const dropDownRef=useRef(null);

  useOnClickOutside(dropDownRef,()=>setOpen(false));


  return (
    <div className='relative w-fit'>
      <div className='text-white flex items-center gap-2 cursor-pointer' onClick={() => setOpen((prev)=>!prev)}>
        <img src={user?.imageUrl } alt={user?.firstName} className="aspect-square w-[30px] rounded-full object-cover" />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {
        open &&
        (
          <div ref={dropDownRef} className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-richblack-700 overflow-hidden rounded-md border-[1px] border-richblack-700 bg-richblack-800">
            <NavLink to="/dashboard/my-profile" onClick={() => setOpen(false)}>
              <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25">
                <VscDashboard className="text-lg" />
                Dashboard
              </div>
            </NavLink>
            <button
              className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
              onClick={() => dispatch(logOut(navigate))}>
              <VscSignOut className="text-lg" />
              Logout
            </button>
          </div>
        )
      }
    </div>
  )
}

export default ProfileDropDown;