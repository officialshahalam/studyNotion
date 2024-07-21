import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/home/HighlightText';
import CTAButton from '../components/core/home/CTAButton';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/home/CodeBlocks';
import BlueGradient from '../components/common/BlueGradient';
import OrangeGradient from '../components/common/OrangeGradient';

function Home() {
  return (
    // home
    <div className=''>
        {/* section 1 */}
        <section className='w-full relative bg-richblack-900 pb-24'>
            {/* width container */}
            <div className='w-11/12 max-w-[1260px] mx-auto flex flex-col items-center justify-cente text-richblack-200'>

                {/* become instructor */}
                <NavLink>
                    <button className='bg-richblack-800 rounded-full mt-16 p-1 border-b border-richblack-400 transition-all duration-200 hover:scale-95'>
                        <div className='px-[18px] py-[6px] flex items-center gap-3 font-medium text-base'>
                            <p className=''>Become a Instructor</p>
                            <FaArrowRight className='text-sm'/>
                        </div>
                    </button>
                </NavLink>

                <div className='w-10/12 max-w-[913px] text-center mt-6'>
                    <p className='text-4xl font-semibold text-white'>Empower Your Future with <HighlightText text={"Coding Skills"}/></p>
                    <p className='text-base font-medium mt-4'>
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors
                    </p>
                </div>

                <div className='flex gap-6 mt-8'>
                    <CTAButton active={true} linkTo={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkTo={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className='right relative w-11/12 max-w-[1035px] min-h-[600px] mt-24'>
                    <div className='bg-white w-[1035px] h-[580px] absolute right-[-20px] top-7 z-10'></div>
                    <video className='absolute z-20' autoPlay muted loop controls src={Banner}/>
                    <div className='absolute -top-[80px] right-[250px]'>
                        <BlueGradient/>
                    </div>
                    
                </div>

                <div className='flex flex-col w-full'>
                    <CodeBlocks 
                        order={`flex-row`}
                        heading={
                            <div>
                                Unlock Your 
                                <HighlightText text={"Coding Potential"}/> 
                                with our online course.
                            </div>
                        }
                        subHeading="Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        ctaBtn1={
                            {
                                btnText:"try it Your self",
                                active:true,
                                linkTo:"/signup"
                            }
                        }
                        ctaBtn2={
                            {
                                btnText:"Learn More",
                                active:false,
                                linkTo:"/login"
                            }
                        }

                        codeText={
                                    `<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title><link ref="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav>\n<ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>`}
                        codeColor={`text-yellow-25`}
                        gradientColor="orange"
                    />
                    <CodeBlocks 
                        order={`flex-row-reverse`}
                        heading={
                            <div>
                                Start 
                                <HighlightText text={"coding in seconds"}/> 
                            </div>
                        }
                        subHeading="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                        ctaBtn1={
                            {
                                btnText:"Continue Lesson",
                                active:true,
                                linkTo:"/signup"
                            }
                        }
                        ctaBtn2={
                            {
                                btnText:"Learn More",
                                active:false,
                                linkTo:"/login"
                            }
                        }

                        codeText={
                                    `<!DOCTYPE html>\n<html>\n<head>\n<title>Example</title><link ref="stylesheet" href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a></h1>\n<nav>\n<ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>`}
                        codeColor={`text-white`}
                        gradientColor="blue"
                    />
                </div>


            </div>
            
        </section>
         

        {/* section 2 */}


        {/* section 3 */}


        {/* foother */}

    </div>
  )
}

export default Home;