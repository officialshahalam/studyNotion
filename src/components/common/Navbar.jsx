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
import { AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';


function Navbar({ sidebar, setSidebar }) {

    const { token } = useSelector((state) => state.auth);
    const { user } = useSelector((state) => state.profile);
    const { totalItem } = useSelector((state) => state.cart);

    const location = useLocation();
    const matchRoute = (path) => {
        return matchPath({ path: path }, location.pathname);
    }

    const [subLinks, setSubLinks] = useState([]);

    const fetchSubLinks = async () => {
        try {
            const result = await apiConnector("get", categories.CATEGORY_API);
            setSubLinks(result.data.allCategory);
        }
        catch (e) {
            console.log("Could not fetch the category list");
        }
    }

    useEffect(() => {
        fetchSubLinks();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setSidebar(false); // Close sidebar if width is greater than 1200px
        }
    };

    return (
        <div className='h-14 border-b-[1px border-b-richblack-700 bg-richblack-900 flex items-center'>
            <div className='w-11/12 max-w-maxContent mx-auto flex items-center justify-between'>
                <NavLink to="/">
                    <img src={logo} height={42} width={160} alt='A' loading='lazy' />
                </NavLink>

                <nav className="md:flex hidden text-richblack-400 gap-4">

                    {
                        NavbarLinks.map((element, index) => (
                            <div key={index}>
                                {
                                    element.title === "Catalog"
                                        ?
                                        (
                                            <div className='flex items-center gap-2 group relative '>
                                                <p>
                                                    {element.title}
                                                </p>
                                                <IoIosArrowDropdownCircle />
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
                                                                    subLinks.map((subLink, index) => (
                                                                        <NavLink to={subLink.description} key={index}>
                                                                            <p className='border-b border-richblack-400 p-1 capitalize text-base'>{subLink.name}</p>
                                                                        </NavLink>
                                                                    ))
                                                                )
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>


                                            </div>
                                        )
                                        :
                                        (
                                            <NavLink to={element?.path}>
                                                <p className={`${matchRoute(element.path) ? "text-yellow-50" : "text-richblack-400"}`}>
                                                    {element.title}
                                                </p>
                                            </NavLink>
                                        )
                                }
                            </div>
                        ))
                    }
                </nav>

                <div className="md:flex hidden gap-y-2 gap-x-4 items-center">
                    {
                        user && user.accountType !== "instructor" &&
                        (
                            <NavLink to={"/dashboard/cart"} className="relative text-white text-xl">
                                <FaShoppingCart />
                                {
                                    totalItem > 0 &&
                                    (
                                        <span className='absolute text-caribbeangreen-400 text-sm top-[-1rem] right-0 animate-bounce font-bold'>{totalItem}</span>
                                    )
                                }
                            </NavLink>
                        )
                    }
                    {
                        token === null &&
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
                        token === null &&
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

                <AiOutlineMenu className='text-white text-2xl md:hidden' onClick={() => setSidebar(!sidebar)} />

                {/* sidebar */}
                <div
                    className={`text-richblack-900 z-50 bg-richblack-900 opacity-90 px-4 w-11/12 max-w-[400px] fixed top-14 right-0 ${sidebar ? "block" : "hidden"}`}>
                    <div className='flex justify-between items-center text-xl py-2 border-b border-richblack-400'>
                        <img src={logo} height={36} width={130} alt='A' loading='lazy' />
                        <IoClose className='text-richblack-5 text-2xl cursor-pointer' onClick={() => setSidebar(false)} />
                    </div>
                    <div className='my-4 flex flex-col gap-4'>
                        {
                            NavbarLinks.map((element, index) => (
                                <div key={index}>
                                    {
                                        element.title === "Catalog"
                                            ?
                                            (
                                                <div className='flex items-center gap-2 group relative'>
                                                    <p className='text-richblack-5 group-hover:text-yellow-50'>
                                                        {element.title}
                                                    </p>
                                                    <IoIosArrowDropdownCircle className='text-richblack-5 group-hover:text-yellow-50' />
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
                                                                        subLinks.map((subLink, index) => (
                                                                            <NavLink to={subLink.description} key={index}>
                                                                                <p className='border-b border-richblack-400 p-1 capitalize text-base'>{subLink.name}</p>
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
                                                    <p className={`${matchRoute(element.path) ? "text-yellow-50" : "text-richblack-5"}`}>
                                                        {element.title}
                                                    </p>
                                                </NavLink>
                                            )
                                    }

                                </div>
                            ))
                        }
                        {
                            user && user.accountType !== "instructor" &&
                            (
                                <NavLink to={"/dashboard/cart"} className="relative text-richblack-5 text-xl">
                                    <FaShoppingCart />
                                    {
                                        totalItem > 0 &&
                                        (
                                            <span className='absolute text-caribbeangreen-400 text-sm top-[-1rem] right-0 animate-bounce font-bold'>{totalItem}</span>
                                        )
                                    }
                                </NavLink>
                            )
                        }
                        {
                            token === null &&
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
                            token === null &&
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
        </div>
    )
}

export default Navbar;