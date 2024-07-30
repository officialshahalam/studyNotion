import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import HighlightText from '../components/core/home/HighlightText';
import CTAButton from '../components/core/home/CTAButton';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/home/CodeBlocks';
import BlueGradient from '../components/common/BlueGradient';
import TimeLineSection from '../components/core/home/TimeLineSection';
import LearningSection from '../components/core/home/LearningSection';
import ExploreMore from '../components/core/home/ExploreMore';
import InstructorSection from '../components/core/home/InstructorSection';
import Footer from '../components/common/Footer';


function Home() {
  return (
    // home
    <div className=''>
        {/* section 1 */}
        <section className='w-full relative bg-richblack-900'>
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

                <div className='right relative w-11/12 max-w-[1035px]  mt-24 lg:min-h-[600px]'>
                    <video className='lg:absolute shadow-[20px_20px_0px_0px_rgba(255,255,255)] z-10' autoPlay muted loop controls src={Banner} />
                    <div className='hidden lg:block lg:absolute top-[-80px] md:right-[30%] z-[1]'>
                        <BlueGradient/>
                    </div>
                </div>

                <div className='flex flex-col gap-[100px] w-full my-[120px]'>
                    <CodeBlocks order={`lg:flex-row`}
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
                    <CodeBlocks order={`lg:flex-row-reverse`}
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
               
                <ExploreMore />


            </div>
        </section>
         

        {/* section 2 */}
        <section className='w-full relative bg-pure-greys-5 pb-24'>

            <div className='home_bg h-[320px]'>
                <div className='w-11/12 max-w-[1260px] mx-auto h-full'>
                    <div className='flex items-center h-full justify-center gap-5'>
                        <CTAButton active={true} linkTo={"/signup"}>
                           <div className='flex items-center justify-center gap-2 '>
                                Explore Full Catalog
                                <FaArrowRight className='text-sm'/>
                           </div>
                        </CTAButton>
                        <CTAButton active={false} linkTo={"/login"}>
                            Learn More
                        </CTAButton>
                    </div>
                </div>
            </div>
            {/* width container */}
            <div className='w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col md:flex-row gap-3 mt-16 justify-between'>
                    {/* left */}
                    <div className='md:w-[45%] text-4xl font-semibold'>
                        Get the skills you need for a
                        <HighlightText text={"job that is in demand."}/>
                    </div>
                    {/* right */}
                    <div className='md:w-[40%] flex flex-col gap-10'>
                        <p className='text-base font-medium'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </p>
                        <CTAButton active={true} linkTo={"/login"} >
                            Learn More
                        </CTAButton>
                    </div>

                </div>
                <TimeLineSection/>
                <LearningSection/>
            </div>
        </section>


        {/* section 3 */}
        <section className='w-full relative bg-richblack-900 text-white'>
            {/* widthcontainer */}
            <div className='w-11/12 max-w-maxContent mx-auto'>
                <InstructorSection/>
            </div>
        </section>
        {/* foother */}

        <footer className='w-full bg-richblack-800 text-white'>
            <Footer/>
        </footer>

    </div>
  )
}

export default Home;