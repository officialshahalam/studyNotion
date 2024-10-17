import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';

function CourseInformationForm() {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{error}
    }= useForm();

    const dispatch=useDispatch();
    const {course,editCourse}=useSelector((state)=>state.course);
    const [loading,setLoading]=useState(false);

    const [courseCategory,setCourseCategory]=useState([]);


    useEffect(()=>{
        
    },[]);

  return (
    <div>
        
    </div>
  )
}

export default CourseInformationForm