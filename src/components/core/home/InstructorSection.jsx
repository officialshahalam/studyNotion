import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTAButton from './CTAButton';
import { FaArrowRightLong } from "react-icons/fa6";

function InstructorSection() {
  return (
    <div className='flex flex-col-reverse lg:flex-row gap-[60px] items-center justify-between px-[40px] py-[80px]'>
        {/* left */}
        <div className='w-full lg:w-[500px]'>
            <img
                className='shadow-[-20px_-20px_0px_0px_rgba(255,255,255)]'
                src={Instructor} alt="A"/>
        </div>
        {/* right */}
        <div className='w-full lg:w-[500px] flex flex-col gap-4'>
            <h1 className='text-4xl font-semibold'>
                <p>Become An</p>
                <HighlightText text="instructor"/>
            </h1>
            <p className='text-base font-normal text-richblack-400'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>
            <CTAButton linkTo={"signup"} active={true}>
                <div className='flex items-center justify-center gap-2'>
                    Start Teaching Today 
                    <FaArrowRightLong/>
                </div>
            </CTAButton>
        </div>
    </div>
  )
}

export default InstructorSection;