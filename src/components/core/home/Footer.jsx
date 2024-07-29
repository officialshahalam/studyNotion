import React from 'react'
import Logo from "../../../assets/Logo/Logo-Full-Light.png"
import {Company,Resources,Support,Plans,Community,FooterLink2,BottomFooter} from "../../../data/footer-links";
import { FaFacebook,FaGoogle,FaTwitter,FaYoutube } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <div className='w-11/12 max-w-maxContent mx-auto'>
        <div className='flex flex-col gap-6 py-10'>
            {/* upper */}
            <div className='flex flex-wrap gap-6 justify-between border-b border-richblack-400 pb-10'>
                {/* left */}
                <div className='flex justify-between flex-col md:flex-row lg:w-[45%]'>
                    <div>
                        <img src={Logo} alt="A" />
                        {
                            Company.map((element,index)=>(
                                <div 
                                    className='my-2'
                                    key={index}>
                                    <h1 className='flex flex-col gap-4 text-base'>{element.title}</h1>
                                    <div className='flex flex-col gap-3 mt-5'>
                                        {
                                            element.links.map((link,index)=>(
                                                <NavLink to={link}>
                                                    <p className='text-sm text-richblack-400' key={index}>{link}</p>
                                                </NavLink>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <div className='flex gap-4 text-richblack-400'>
                            <FaFacebook/>
                            <FaGoogle />
                            <FaTwitter/>
                            <FaYoutube/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-6'>
                        {
                            Resources.map((element,index)=>(
                                <div
                                    className='flex flex-col gap-3' 
                                    key={index}>
                                    <h1 className='text-base'>{element.title}</h1>
                                    {
                                        element.links.map((link,index)=>(
                                            <p className='text-sm text-richblack-400' key={index}>{link}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        {
                            Support.map((element,index)=>(
                                <div
                                    className='' 
                                    key={index}>
                                    <h1 className='mb-4 text-base'>{element.title}</h1>
                                    {
                                        element.links.map((link,index)=>(
                                            <p className='text-sm text-richblack-400' key={index}>{link}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <div className='flex flex-col gap-6'>
                        {
                            Plans.map((element,index)=>(
                                <div 
                                    className='flex flex-col gap-2'
                                    key={index}>
                                    <h1 className='text-base'>{element.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            element.links.map((link,index)=>(
                                                <p className='text-sm text-richblack-400' key={index}>{link}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        {
                            Community.map((element,index)=>(
                                <div 
                                    className='flex flex-col gap-2'
                                    key={index}>
                                    <h1 className='text-base'>{element.title}</h1>
                                    <div className='flex flex-col gap-4'>
                                        {
                                            element.links.map((link,index)=>(
                                                <p className='text-sm text-richblack-400' key={index}>{link}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                {/* right */}
                <div className='flex flex-wrap gap-4 w-[45%] justify-between'>
                    {
                        FooterLink2.map((element,index)=>(
                            <div 
                                className='flex flex-col gap-2'
                                key={index}>
                                <h1 className='text-base'>{element.title}</h1>
                                {
                                    element.links.map((link,i)=>(
                                        <NavLink to={link.link} key={i}>
                                            <p className='text-sm text-richblack-400'>{link.title}</p>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* bottom footer */}
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    {
                        BottomFooter[0].links.map((element,index)=>(
                            <NavLink to={element.split(" ").join("-").toLowerCase()} key={index}>
                                <span className={`${index<=BottomFooter.length && "border-r border-richblack-400"} text-richblack-400 text-base pr-4`}>{element}</span>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="text-richblack-400">Made with ❤️ || CodePlay</div>
            </div>
        </div>
    </div>
  )
}

export default Footer;