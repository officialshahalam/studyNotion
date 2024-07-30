import React from 'react'
import { SiImessage } from "react-icons/si";
import { TbWorldExclamation } from "react-icons/tb";
import { FaPhoneAlt } from "react-icons/fa";
import ContactUsForm from '../components/core/contact/ContactUsForm';
import Footer from '../components/common/Footer';



function ContactUs() {
  return (
    <div className='relative w-full'>
      {/* section1 */}
      <section className='relative w-full bg-richblack-900 text-white py-10'>
        <div className='w-11/12 max-w-maxContent mx-auto flex flex-col lg:flex-row justify-between gap-6 pt-16'>
          {/* left */}
          <div className='lg:w-[30%] bg-richblack-800 h-fit flex flex-col gap-6 p-6 rounded-xl'>
            <div className='flex gap-2 items-start'>
              <div className='text-xl'>
                <SiImessage/>
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold'>Chat on us</h1>
                <p className='text-sm text-richblack-400 font-medium'>Our friendly team is here to help.</p>
                <p className='text-sm text-richblack-400 font-medium'>@gmail.com</p>
              </div>
            </div>
            <div className='flex gap-2 items-start'>
              <div className='text-xl'>
                <TbWorldExclamation />
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold'>Visit us</h1>
                <p className='text-sm text-richblack-400 font-medium'>Come and say hello at our office HQ.</p>
                <p className='text-sm text-richblack-400 font-medium'>Here is the location/ address</p>
              </div>
            </div>
            <div className='flex gap-2 items-start'>
              <div className='text-xl'>
                <FaPhoneAlt />
              </div>
              <div className='flex flex-col gap-1'>
                <h1 className='text-lg font-semibold'>Call us</h1>
                <p className='text-sm text-richblack-400 font-medium'>Mon - Fri From 8am to 5pm</p>
                <p className='text-sm text-richblack-400 font-medium'>+123 456 7890</p>
              </div>
            </div>
            <div>
              
            </div>
          </div>

          {/* right */}
          <div className='lg:w-[50%] border border-richblack-400 p-3 lg:p-12 rounded-xl flex flex-col gap-8'>
            <h1 className='text-4xl font-semibold'>Got a Idea? We’ve got the skills. Let’s team up</h1>
            <p className='text-base text-richblack-400'>Tall us more about yourself and what you’re got in mind.</p>
            <div>
              <ContactUsForm/>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className='relative w-full bg-richblack-900 text-white'>
        <div className='w-11/12 max-w-maxContent mx-auto py-24'>
          <h1 className='text-center text-4xl font-semibold'>Review from other learner</h1>
          {/* <ReviewSlider/> */}
        </div>
      </section>

      <footer className='w-full bg-richblack-800 text-white'>
            <Footer/>
        </footer>
    </div>
  )
}

export default ContactUs;