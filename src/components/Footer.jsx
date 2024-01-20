import React from 'react'
import SectionHeading from "./SectionHeading"
import image2 from "../Assets/instalogo.svg"
import image3 from "../Assets/facebook-logo-svgrepo-com.svg"
import image4 from "../Assets/github-logo-svgrepo-com.svg"
import image5 from "../Assets/linkedin-logo-bold-svgrepo-com.svg"

function Footer() {
  return (
    <div className=' flex flex-col items-center p-7 border-t-2'>
        <SectionHeading h1={"Arnab"} p={""}/>
        <div className=' mt-4'>
        <ul className=" flex ">
                <li className=" w-5 md:w-7 mx-3">
                    <a href="https://www.instagram.com/arnab_ariyel/">
                    <img src={image2} alt="insta"/>
                    </a>
                </li>
                <li className=" w-5 md:w-7 mx-3">
                    <a href="https://m.facebook.com/arnabjana123">
                    <img src={image3} alt="fb"/>
                    </a>
                </li>
                <li className=" w-5 md:w-7 mx-3">
                    <a href="https://github.com/Arnabjana2003">
                    <img src={image4} alt="github"/>
                    </a>
                </li>
                <li className=" w-5 md:w-7 mx-3">
                    <a href="https://www.linkedin.com/in/arnabjana01">
                    <img src={image5} alt="linkedin"/>
                    </a>
                </li>
            </ul>
        </div>
        <div className=' mt-8 '>
            <p className='text-sm'><span className='font-semibold'>@Arnab.</span> All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer