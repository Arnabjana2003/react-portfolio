import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import bars from "../Assets/bars-svgrepo-com.svg"
import cross from '../Assets/cross-svgrepo-com.svg'

function Header() {
    const [navLogo,setNavLogo] = useState(false)
  const navLinks = [
    {
     name: "Home",
      link: "/",
     },
     {
        name:"About",
        link: "/about"
     },
     {
        name:"Skills",
        link: "/skills"
     },
     {
        name:"Qualification",
        link: "/qualification"
     },
     {
        name:"Projects",
        link: "/projects"
     },
     {
        name:"Contact",
        link: "/contact"
     },
    ];
  return (
    <div>
      <header className={` bg-gray-100 p-3 h-20 md:h-24 w-full ${!navLogo?"null":null} border-b-2 flex justify-between items-center`}>
        <div>
          <h2 onClick={()=>setNavLogo(false)} className=" text-lg md:text-xl font-semibold ml-2">
            <Link to="/">ARNAB</Link>
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex">
            {navLinks.map(item=>(
                <li onClick={()=>setNavLogo(false)} className=" p-2 mx-1 lg:mx-5 md:text-lg font-semibold">
                    <Link className="hover:border-orange-300 hover:border-2 py-1 px-2 rounded-md" to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
          <div className=" w-8 md:hidden" onClick={()=>setNavLogo(prev=>!prev)}>
            <img src={`${!navLogo?bars:cross}`} className="w-full h-full"/>
          </div>
      </header>
      <div className="md:hidden">
      <div className={`${!navLogo?"h-0 p-0":"h-36 p-3"} overflow-hidden shadow-xl rounded-b-2xl`}>
          <ul className="flex flex-wrap justify-center">
            {navLinks.map(item=>(
                <li onClick={()=>setNavLogo(false)} className={`w-20 p-2 mx-5 md:text-lg font-semibold`}>
                    <Link className={"hover:border-orange-300 hover:border-2 py-1 px-2 rounded-md"} to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
