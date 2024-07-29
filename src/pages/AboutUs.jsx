import React from 'react'
import HighlightText from '../components/core/home/HighlightText'
import aboutus1 from "../assets/Images/aboutus1.webp";
import aboutus2 from "../assets/Images/aboutus2.webp";
import aboutus3 from "../assets/Images/aboutus3.webp";
import Quote from '../components/core/about/Quote';
import FoundingStroy from "../assets/Images/FoundingStory.png"
import StatesComponents from '../components/core/about/StatesComponents';
import LearningGrid from '../components/core/about/LearningGrid';
import ContactUs from '../components/core/contact/ContactUs';

function AboutUs() {
  return (
    <div>
        {/* section 1*/}
        <section>
            <div>
                <h1>
                    <p>Driving Innovation in Online Education for a</p>
                    <HighlightText text={"Brighter Future"}/>
                </h1>
                <p>
                    Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                </p>
                <div className='flex'>
                    <img src={aboutus1} alt='A'/>
                    <img src={aboutus2} alt='A'/>
                    <img src={aboutus3} alt='A'/>
                </div>
            </div>
        </section>

        {/* section2 */}
        <section>
            <div>
                <Quote/>
            </div>
        </section>

        {/* section3 */}
        <section className='w-full relative mt-16'>
            <div className='w-11/12 max-w-maxContent mx-auto flex flex-col gap-6'>
                {/* founding story div */}
                <div className='flex gap-6'>
                    {/* left */}
                    <div className='w-1/2'>
                        <h1>Our Founding Story </h1>
                        <p>
                            Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                        </p>
                        <p>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.
                        </p>
                    </div>
                    {/* right */}
                    <div className='w-1/2'>
                        <img src={FoundingStroy} alt="A" />
                    </div>
                </div>
                {/* our vision and mission div */}
                <div className='flex'>
                    {/* left */}
                    <div>
                        <h1>Our Vision</h1>
                        <p>
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>
                    {/* right */}
                    <div>
                        <h1>Our Mission</h1>
                        <p>
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
        <section>
            <div>
                <h1>Get in Touch</h1>
                <p>
                    We’d love to here for you, Please fill out this form.
                </p>
                <div>
                    <ContactUs/>
                </div>
            </div>
        </section>
       


    </div>
  )
}

export default AboutUs