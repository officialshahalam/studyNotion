import React from 'react'
import { HiUsers } from "react-icons/hi2";
import { TbBinaryTree2 } from "react-icons/tb";

function CourseCard({courseData,currentCard,setCurrentCard}) {

    // ${courseData==currentCard?"":""}
  return (
    <div 
        onClick={()=>{setCurrentCard(courseData)}}
        className={
            `flex flex-col justify-between pb-4 bg-white space-y-3 w-[310px] h-[300px] 
            ${courseData===currentCard ?"bg-white shadow-[12px_12px_0px_0px_#FFD60A]":"bg-[#161d29]"}`
        }>
        <div className='px-6 pt-6 pb-24 border-b border-dashed space-y-4'>
            <h1 className={`text-xl font-semibold ${courseData==currentCard?"text-richblack-900":"text-white"}`}>{courseData.heading}</h1>
            <p className={`text-base font-normal`}>{courseData.description}</p>
        </div>
        
        <div className='flex justify-between px-6'>
            <div className={`flex gap-4 items-center font-medium ${courseData==currentCard?"text-blue-400":""}`}>
                <HiUsers />
                <p>beginner</p>
            </div>
            <div className={`flex gap-4 items-center font-medium ${courseData==currentCard?"text-blue-400":""}`}>
                <TbBinaryTree2/>
                <p>6 Lessons</p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard

