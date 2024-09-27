import React, { useState } from 'react'

import { sidebarLinks } from "../../../data/dashboard-links";
import { logOut } from '../../../services/operations/auth';
import { useDispatch, useSelector } from 'react-redux';
import SidebarLink from './SidebarLink';
import { useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc';
import ConfirmMationModal from '../../common/ConfirmMationModal';

function Sidebar() {

    const { user, loading: profileLoading } = useSelector((state) => state.profile);
    const { loading: authLoading } = useSelector((state) => state.auth);
    const [confirmationModalData, setConfirmationModalData] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    if (profileLoading || authLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }



    return (
        <div >
            <div className='flex flex-col min-w-[222px] border-r-[1px] border-r-richblack-700  min-h-[calc(100vh-3.5rem)] bg-richblack-800 py-10'>
                <div className='flex flex-col'>
                    {
                        sidebarLinks.map((link, index) => {
                            if (link.type && user.accountType !== link.type) return null;
                            return (
                                <SidebarLink link={link} key={index} />
                            )
                        })
                    }
                </div>
                <div className='h-[1px] w-10/12 mx-auto my-6 bg-richblack-600'></div>
                <div className='flex flex-col'>
                    <SidebarLink link={{ name: "Settings", path: "/dashboard/settings", icon: "VscSettingsGear" }} />
                    <button
                        onClick={() => setConfirmationModalData({
                            text1: "Are you sure ?",
                            text2: "You will be Loged out of your account",
                            btn1Text: "Cancel",
                            btn2Text: "Logout",
                            btn1Handler: () => setConfirmationModalData(null),
                            btn2Handler: () => dispatch(logOut(navigate)),
                        })}
                        className='text-sm font-medium text-richblack-300 '
                        >
                        <div className='flex items-center gap-x-2 px-8 py-2'>
                            <VscSignOut className="text-lg"/>
                            <span>Logout</span>
                        </div>
                    </button>
                </div>
                {confirmationModalData && <ConfirmMationModal confirmationModalData={confirmationModalData}/>}
            </div>
            
        </div>
    )
}

export default Sidebar