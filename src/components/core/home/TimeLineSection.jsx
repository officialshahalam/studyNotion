import React from 'react'
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import BlueGradient from '../../common/BlueGradient'
import timelineImage from "../../../assets/Images/TimelineImage.png"

function TimeLineSection() {
    var timeLine=[
        {
            logo: logo1,
            heading:"Leadership",
            description:"Fully commited to the success company"
        },
        {
            logo: logo2,
            heading:"Leadership",
            description:"Students will always be our top priority"
        },
        {
            logo: logo3,
            heading:"Flexibility",
            description:"The ability to switch is an important skills"
        },
        {
            logo: logo4,
            heading:"Solve the problem",
            description:"Code your way to a solution"
        },
    ]
  return (
    <div className='flex justify-between items-center gap-[76px] mt-12'>
        {/* left */}
        <div className='flex flex-col gap-4 w-[410px]'>
            {
                timeLine.map((element,index)=>{
                    return (
                        <div className='flex gap-3 w-full items-center justify-between px-3 py-4' key={index}>
                            <div className='h-12 w-12 bg-white rounded-full flex items-center justify-center'>
                                <img src={element.logo} alt='A'/>
                            </div>
                            <div className='flex flex-col gap-1 flex-1'>
                                <p className='text-lg font-semibold'>{element.heading}</p>
                                <p className='text-sm font-normal text-richblack-700'>{element.description}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        {/* right */}
        <div className='relative w-[600px] min-h-[545px]'>
            <img src={timelineImage} className='absolute z-10' alt='A'/>
            <div className='absolute scale-[2] top-[100px] right-[100px]'>
                <BlueGradient/>
            </div>
            <div className='bg-caribbeangreen-700 w-[500px] flex p-11 absolute bottom-[30px] right-12 z-20'>
                <div className='flex gap-6 w-1/2 border-r-2 border-caribbeangreen-300'>
                    <p className='text-4xl font-bold text-white'>10</p>
                    <p className='text-base capitalize text-caribbeangreen-300 font-light leading-5'>Year <br/> Expirence</p>
                </div>
                <div className='flex gap-6 w-1/2'>
                    <p className='text-4xl font-bold text-white ml-6'>250</p>
                    <p className='text-base capitalize text-caribbeangreen-300 font-light leading-5'>Types of Courses</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TimeLineSection