import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore";
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

let tabsName=[
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths"
]

function ExploreMore() {
    const [currentTab,setCurrentTab]=useState(tabsName[0]);
    const [course,setCourse]=useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0]);

    const setExplore = (value) => { 
        setCurrentTab(value);
        const result=HomePageExplore.filter((category)=>{
            return category.tag===value
        });
        setCourse(result[0].courses);
        setCurrentCard(result[0].courses[0]);
    }
  return (
    <div className='relative w-full flex flex-col gap-9 items-center justify-center pb-10 lg:pb-[300px]'>  
        <div className='flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-4xl text-center font-semibold'>Unlock the <HighlightText text="Power of Code"/></h1>
            <p className='text-base'>Learn to Build Anything You Can Imagine</p>
        </div>
        <div className='flex w-full sm:w-fit justify-evenly items-center p-1 bg-richblack-800 border border-richblack-100 rounded-full'>
            {
                tabsName.map((tab,index)=>{
                    return (
                        <div 
                            className={`flex justify-center items-center text-[8px] sm:text-base  lg:text-base rounded-full font-medium cursor-pointer transition-all duration-500 px-3 sm:px-4 lg:px-7 py-1 sm:py-2 lg:py-2 ${tab===currentTab?"bg-richblack-900 text-richblack-5":"bg-transparent text-richblack-200"}`}
                            key={index}
                            onClick={()=>setExplore(tab)}>
                            {tab}
                        </div>
                    )
                })
            }
        </div>
        <div className='flex flex-col lg:flex-row w-full gap-9 items-center justify-center lg:absolute lg:bottom-[-80px] z-10'>
            {
                course.map((course,index)=>{
                    return (
                        <CourseCard
                            key={index}
                            courseData={course}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    )
                })
            }
        </div>
        
    </div>
  )
}

export default ExploreMore;