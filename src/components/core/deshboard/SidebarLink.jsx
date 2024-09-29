import React from 'react'
import * as Icons from "react-icons/vsc";
import { matchPath, NavLink, useLocation } from 'react-router-dom';

function SidebarLink({ link }) {

  const Icon = Icons[link.icon];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: link.path }, location.pathname)
  }



  return (
    <NavLink
      to={link.path}
      className={`relative px-8 py-2 text-sm font-medium ${matchRoute(link.path) ? "bg-yellow-800" : "bg-opacity-0"}`}>
      <span className={`absolute top-0 left-0 h-full w-[.2rem] bg-yellow-50 ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>
      <div className='flex items-center gap-x-2 text-white'>
        <Icon className="text-lg"/>
        <span>{link.name}</span>
      </div>

    </NavLink>
  )
}

export default SidebarLink;