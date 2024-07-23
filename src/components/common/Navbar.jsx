import React from 'react'
import { matchPath, NavLink } from 'react-router-dom';
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {

    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItem}=useSelector((state)=>state.profile);

    const location =useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className='h-14 border-b-[1px] border-b-richblack-700 bg-richblack-800 flex items-center'>
        <div className='w-11/12 max-w-maxContent mx-auto flex items-center justify-between'>
            <NavLink to="/">
                <img src={logo} height={42} width={160} loading='lazy'/>
            </NavLink>
            <nav className='flex gap-3'>
                {
                    NavbarLinks.map((link,index)=>(
                        <div key={index}>
                            {
                                link.title==="Catalog"
                                ?
                                (
                                    <div></div>
                                )
                                :
                                (
                                    <NavLink to={link?.path}>
                                        <p className={`${matchRoute(link.path) ?"text-yellow-50" :"text-richblack-400" }`}>
                                            {link.title}
                                        </p>
                                    </NavLink>
                                )
                            }
                        </div>
                    ))
                }
            </nav>

            
        </div>
    </div>
  )
}

export default Navbar;