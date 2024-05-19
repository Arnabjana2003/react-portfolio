import React from 'react'
import image6 from "../Assets/coding-programming-language-svgrepo-com.svg"
import image7 from "../Assets/complete-svgrepo-com.svg"
import image8 from "../Assets/html-tag-svgrepo-com.svg"
import image9 from "../Assets/IMG_20240110_181927.jpg"
import resumeImg from "../Assets/resume-business-cv-work-job-curriculum-2-svgrepo-com.svg"
import resume from "../Assets/Resume_Arnab_Jana.pdf"
import SectionHeading from './SectionHeading'

function About({about=false}) {
  return (
    <div className='p-3 mt-10 mb-6 w-full overflow-x-hidden'>
        <SectionHeading h1={"About me"} p={"My introduction"} animate={about}/>
        <div className='md:flex justify-between'>
            <div>
            <div className={`${about?'animate':null} flex justify-evenly mt-10 flex-wrap`}>
            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-md shadow-md shadow-slate-900 dark:shadow-orange-500'>
                <img src={image6} alt='language' className=' w-8'/>
                <h5 className='font-semibold md:text-lg text-slate-800 dark:text-slate-50'>Languages</h5>
                <p className='text-slate-600 dark:text-slate-300 mt-1 md:mt-2 text-sm md:text-base'>C, JavaScript</p>
            </div>

            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-md shadow-md shadow-slate-900 dark:shadow-orange-500'>
                <img src={image8} alt='technologies' className=' w-8'/>
                <h5 className='font-semibold md:text-lg text-slate-800 dark:text-slate-50'>Technologies</h5>
                <p className='text-slate-600 dark:text-slate-300 mt-1 md:mt-2 text-sm md:text-base'>TailwindCSS, ReactJS</p>
            </div>

            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-700 rounded-md shadow-md shadow-slate-900 dark:shadow-orange-500'>
                <img src={image7} alt='completed' className=' w-8'/>
                <h5 className='font-semibold md:text-lg text-slate-800 dark:text-slate-50'>Completed</h5>
                <p className='text-slate-600 dark:text-slate-300 mt-1 md:mt-2 text-sm md:text-base'>2+ React big projects & 5+ basics</p>
            </div>
        </div>
        <div className={`${about?'animate':null} md:text-right p-4`}>
            <p className=" text-slate-700 mt-5 lg:text-lg dark:text-slate-300">I'm currently pursuing BCA from Mahishadal Raj College, Purba Medinipur. I will be graduated by 2027. My passion and dedication to my work are evident in the effort and enthusiam I bring to every task.</p>
            <button className="shadow-md shadow-black dark:gradient mt-6 py-2 px-4 bg-slate-600 text-white rounded-lg md:text-lg lg:text-xl font-semibold " >
            <a className='flex items-center' href={resume} download>Download Resume
            <img src={resumeImg} className=' p-1 rounded-md bg-white w-7 ml-3'/></a></button>
        </div>
            </div>
            <div className={`flex justify-center p-3 items-center ${about?'animate':null} `}>
                <div className='flex justify-center items-center mt-10 w-72 h-72 rounded-full md:w-[24rem] md:h-[24rem] overflow-hidden gradient p-1 shadow-lg shadow-zinc-800 dark:shadow-orange-400'>
                <div className='w-full h-full rounded-full border-4 overflow-hidden gradient'><img src={image9} alt="my photo" className=' w-full h-full object-cover object-top p-1 rounded-full'/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About