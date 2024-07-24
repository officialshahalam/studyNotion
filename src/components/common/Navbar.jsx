import React, { useEffect, useState } from 'react'
import { matchPath, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import ProfileDropDown from '../core/auth/ProfileDropDown';
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { apiConnector } from '../../services/apiConnector';
import { categories } from '../../services/apis';


function Navbar() {

    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItem}=useSelector((state)=>state.profile);

    const location =useLocation();
    const matchRoute=(path)=>{
        return matchPath({path:path},location.pathname);
    }

    const [subLinks,setSubLinks]=useState([]);

    const fetchSubLinks=async ()=>{
        try{
            const result =await apiConnector("get",categories.CATEGORY_API);
            console.log("fetched categories are ::",result);
            setSubLinks(result.data.allCategory);
        }
        catch(e){
            console.log("Could not fetch the category list");
        }
    }

    useEffect(()=>{
        fetchSubLinks();
    },[]);

    // const subLinks=[
    //     {
    //         title:"python",
    //         link:"/catalog/python"
    //     },
    //     {
    //         title:"web development",
    //         link:"/catalog/web-development"
    //     },
    // ]

  return (
    <div className='h-14 border-b-[1px] border-b-richblack-700 bg-richblack-900 flex items-center'>
        <div className='w-11/12 max-w-maxContent mx-auto flex items-center justify-between'>
            <NavLink to="/">
                <img src={logo} height={42} width={160} loading='lazy'/>
            </NavLink>
            <nav className='flex gap-3 text-richblack-400'>
                {
                    NavbarLinks.map((element,index)=>(
                        <div key={index}>
                            {
                                element.title==="Catalog"
                                ?
                                (
                                    <div className='flex items-center gap-2 group relative'>
                                        <p>
                                            {element.title}
                                        </p>
                                        <IoIosArrowDropdownCircle/>
                                        <div 
                                            className='invisible absolute left-[50%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px] z-30 translate-x-[-50%] translate-y-[20%]'
                                            >
                                                <div 
                                                    className='w-6 h-6 absolute left-[50%] top-0 translate-y-[-6px] translate-x-5  rotate-45 rounded-sm bg-richblack-5'
                                                    >
                                                </div>
                                                <div>
                                                    {
                                                        subLinks.length
                                                        ? 
                                                        (
                                                            subLinks.map((subLink,index)=>(
                                                                <NavLink to={subLink.description} key={index}>
                                                                    <p>{subLink.name}</p>
                                                                </NavLink>
                                                            ))
                                                        ) 
                                                        : 
                                                        (<div></div>)
                                                    }
                                                </div>
                                        </div>


                                    </div>
                                )
                                :
                                (
                                    <NavLink to={element?.path}>
                                        <p className={`${matchRoute(element.path) ?"text-yellow-50" :"text-richblack-400" }`}>
                                            {element.title}
                                        </p>
                                    </NavLink>
                                )
                            }
                        </div>
                    ))
                }
            </nav>

            <div className='flex gap-x-4 items-center'>
                {
                    user && user.accountType != "instructor" && 
                    (
                        <NavLink to={"/dashboard/cart"} className="relative">
                            <FaShoppingCart/> 
                            {
                                totalItem > 0 &&
                                (
                                    <span>{totalItem}</span> 
                                )
                            }
                        </NavLink>
                    )
                }
                {
                    token == null && 
                    (
                        <NavLink to="/login">
                            <button
                                className='bg-richblack-800 border border-richblack-700 text-richblack-100 px-3 py-2 rounded-md'
                                >
                                Log In
                            </button>
                        </NavLink>
                    )
                }
                {
                    token == null && 
                    (
                        <NavLink to="/signup">
                            <button
                                className='bg-richblack-800 border border-richblack-700 text-richblack-100 px-3 py-2 rounded-md'
                                >
                                Sign Up
                            </button>
                        </NavLink>
                    )
                }
                {
                    token !== null && <ProfileDropDown />
                }
            </div>

            
        </div>
    </div>
  )
}

export default Navbar;