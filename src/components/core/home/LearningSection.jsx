import React from 'react'
import HighlightText from './HighlightText';
import CTAButton from './CTAButton';
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOther from "../../../assets/Images/Compare_with_others.png"
import planYourLesson from "../../../assets/Images/Plan_your_lessons.png";


function LearningSection() {
  return (
    <div className='flex flex-col gap-14 w-full pt-10'>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-4xl font-semibold '>Your swiss knife for<HighlightText text={"learning any language"}/></h1>
          <p className='text-base font-medium w-8/12 text-center'>
              Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
          </p>
        </div>
        <div className='flex relative w-11/12 mx-auto min-h-[500px]'>
          <img src={knowYourProgress} className='absolute top-10 left-4'/>
          <img src={compareWithOther} className='absolute top-2 left-[30%]'/>
          <img src={planYourLesson} className='absolute top-4 right-0'/>
        </div>
        <div className='flex justify-center items-center py-4'>
          <CTAButton active={true} linkTo={"/signup"}>Learn More</CTAButton>
        </div>
    </div>
  )
}

export default LearningSection;