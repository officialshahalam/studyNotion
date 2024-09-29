import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateDisplayPicture } from '../../../../services/operations/settings';
import { LuUpload } from 'react-icons/lu';

function UpdateProfile() {

    const inputFileRef = useRef(null);
    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [imageFile, setImageFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [imgLoading, setImgLoading] = useState(false);

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

    return (
        <div className='mt-5 flex items-center p-6 bg-richblack-800 rounded-lg border border-richblack-700 gap-5'>
            <img src={previewImage || user?.imageUrl} className='w-20 h-20 rounded-full' alt={user?.firstName} />
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
    )
}

export default UpdateProfile;