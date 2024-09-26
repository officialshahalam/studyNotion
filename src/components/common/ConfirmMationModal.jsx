import React from 'react'

function ConfirmMationModal({ confirmationModalData }) {
    return (
        <div className='fixed inset-0 grid place-items-center backdrop-blur-[2px] z-[100] bg-white bg-opacity-10'>
            <div className='w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6'>
                <h1 className="text-2xl font-semibold text-richblack-5">{confirmationModalData.text1}</h1>
                <p className="mt-3 mb-5 leading-6 text-richblack-200">{confirmationModalData.text2}</p>
                <div className='flex items-center gap-x-4'>
                    <button
                        onClick={confirmationModalData.btn1Handler}
                        className='bg-richblack-300 px-4 py-2 rounded-md font-semibold'>
                        {confirmationModalData.btn1Text}
                    </button>
                    <button
                        className='bg-yellow-50 px-4 py-2 rounded-md font-semibold'
                        onClick={confirmationModalData.btn2Handler}>
                        {confirmationModalData.btn2Text}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmMationModal