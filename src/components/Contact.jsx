import React from 'react'
import SectionHeading from './SectionHeading'
import whatsappImg from "../Assets/whatsapp-svgrepo-com.svg"
import emailImg from "../Assets/email-9-svgrepo-com.svg"
import arrow from "../Assets/right-arrow-svgrepo-com.svg"

function Contact({contact}) {
  return (
    <div className="p-3 mt-10 mb-6 w-full overflow-x-hidden min-h-screen">
        <SectionHeading h1={"Get in touch"} p={"Contact me"} animate={contact} />
        <div className='flex flex-wrap justify-center'>

            <div className='m-5 w-64 md:w-72 flex flex-col items-center p-7 border-2 rounded-xl shadow-lg bg-white'>
              <img src={emailImg} className=' w-7 my-4'/>
                <h6 className='md:text-lg font-semibold'>Email</h6>
                <p className=' max-md:text-sm text-slate-500'>arnabjana0099@gmail.com</p>
                <a className='mt-3 font-semibold text-sm flex items-center text-slate-900' href="mailto:arnabjana0099@gmail.com">Write me
                <img src={arrow} className=' w-5 ml-2'/></a>
            </div>
            <div className='m-5 w-64 md:w-72 flex flex-col items-center p-7 border-2 rounded-xl shadow-lg bg-white'>
              <img src={whatsappImg} className=' w-8 my-4'/>
                <h6 className='md:text-lg font-semibold'>Whatsapp</h6>
                <p className=' max-md:text-sm text-slate-500'>+91 8927136063</p>
                <a className='mt-3 font-semibold text-sm flex items-center text-slate-900' href="https://wa.me/8927136063">Write me
                <img src={arrow} className=' w-5 ml-2'/></a>
            </div>
        </div>
    </div>
  )
}

export default Contact