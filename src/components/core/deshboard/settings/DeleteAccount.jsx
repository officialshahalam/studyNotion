import React from 'react'
import { FiTrash2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../../../../services/operations/settings';

function DeleteAccount() {
    const {token}=useSelector((state)=>state.auth);
    const navigate=useNavigate();
    const dispatch=useDispatch();

    function deleteHandler(){
        try{
            const response=dispatch(deleteAccount(token,navigate));
        }
        catch(e){
            console.log("error while delete account:::",e);
        }
    }

    return (
        <div className='flex p-6 gap-5 bg-pink-900 rounded-lg border border-pink-700'>
            <div className='p-3 bg-pink-700 w-14 h-14 grid place-items-center rounded-full'>
                <FiTrash2 className="text-3xl text-pink-200" />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-bold text-pink-5'>Delete Account</h1>
                <p className='text-sm font-normal text-pink-25'>Would you like to delete account?</p>
                <p className='text-sm font-normal text-pink-25'>This account contains Paid Courses. Deleting your account will remove all the <br /> contain associated with it.</p>
                <button
                    onClick={deleteHandler}
                    className='text-start italic text-base text-pink-300'
                    >
                    I want to delete my account.
                </button>
            </div>
        </div>
    )
}

export default DeleteAccount;