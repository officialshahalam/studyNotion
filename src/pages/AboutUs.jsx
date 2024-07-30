import React from 'react'
import HighlightText from '../components/core/home/HighlightText'
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import Quote from '../components/core/about/Quote';
import FoundingStroy from "../assets/Images/FoundingStory.png"
import StatesComponents from '../components/core/about/StatesComponents';
import LearningGrid from '../components/core/about/LearningGrid';
import ContactUsForm from '../components/core/contact/ContactUsForm';
import Footer from '../components/common/Footer';

function AboutUs() {
  return (
    <div>
        {/* section 1*/}
        <section className='relative w-full bg-richblack-800'>
            <div className='w-11/12 relative max-w-maxContent mx-auto flex flex-col gap-12 items-center justify-center py-16 lg:pb-[250px]'>
                <div className='flex flex-col gap-4 lg:w-[70%]'>
                    <h1 className='text-center text-4xl text-white font-semibold'>
                        <p>Driving Innovation in Online Education for a</p>
                        <HighlightText text={"Brighter Future"}/>
                    </h1>
                    <p className='text-center text-base text-richblack-400'>
                        Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>
                <div className='flex flex-col w-full lg:flex-row gap-6 lg:absolute z-20 bottom-[-100px]'>
                    <img src={aboutus1} alt='A'/>
                    <img src={aboutus2} alt='A'/>
                    <img src={aboutus3} alt='A'/>
                </div>
            </div>
        </section>

        {/* section2 */}
        <section className='w-full relative bg-richblack-900 pt-[200px] pb-16 border-b border-richblack-400 text-white'>
            <div className='w-11/12 max-w-maxContent mx-auto'>
                <Quote/>
            </div>
        </section>

        {/* section3 */}
        <section className='w-full relative py-16 bg-richblack-900 text-white'>
            <div className='w-11/12 max-w-maxContent mx-auto flex flex-col gap-[100px]'>
                {/* founding story div */}
                <div className='flex flex-col lg:flex-row gap-20 justify-center items-center'>
                    {/* left */}
                    <div className='lg:w-[40%] flex flex-col gap-6 '>
                        <h1 
                            className='text-4xl font-semibold bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-transparent bg-clip-text'>
                            Our Founding Story 
                        </h1>
                        <p className='text-base text-richblack-400 '>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>
                        <p className='text-base text-richblack-400'>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>
                    {/* right */}
                    <div className='lg:w-[40%] w-full'>
                        <img src={FoundingStroy} alt="A" />
                    </div>
                </div>
                {/* our vision and mission div */}
                <div className='flex flex-col lg:flex-row gap-20 justify-center'>
                    {/* left */}
                    <div className='lg:w-[40%] flex flex-col gap-6 '>
                        <h1 
                            className='text-4xl font-semibold bg-gradient-to-r from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text'
                            >
                            Our Vision
                        </h1>
                        <p className='text-base text-richblack-400'>
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>
                    {/* right */}
                    <div className='lg:w-[40%] flex flex-col gap-6'>
                        <h1
                            className='text-4xl font-semibold bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text'
                            >
                            Our Mission
                        </h1>
                        <p className='text-base text-richblack-400'>
                            our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        {/* section 4 */}
        <StatesComponents/>

        {/* section 5 */}
        <LearningGrid/>

        {/* section 6 */}
        <section className='relative w-full bg-richblack-900 text-white'>
            <div className='w-11/12 max-w-maxContent mx-auto flex flex-col items-center gap-3'>
                <h1 className='text-4xl font-semibold'>Get in Touch</h1>
                <p className='text-base text-richblack-400 text-center'>
                    We’d love to here for you, Please fill out this form.
                </p>
                <div className='flex lg:w-[40%] items-center justify-center pb-10'>
                    <ContactUsForm/>
                </div>
            </div>
        </section>

        {/* section 7 */}
        <section className='relative w-full bg-richblack-900 text-white py-16'>
            <div className='w-11/12 max-w-maxContent mx-auto '>
                <h1 className='text-center'>Review From Other Learners</h1>
                {/* <ReviewSlider/> */}
            </div>
        </section>

        {/* section 8 */}
        <footer className='w-full bg-richblack-800 text-white'>
            <Footer/>
        </footer>


       


    </div>
  )
}

export default AboutUs