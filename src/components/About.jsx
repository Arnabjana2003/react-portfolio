import React from 'react'
import image6 from "../Assets/coding-programming-language-svgrepo-com.svg"
import image7 from "../Assets/complete-svgrepo-com.svg"
import image8 from "../Assets/html-tag-svgrepo-com.svg"
import image9 from "../Assets/IMG_20240110_181927.jpg"

function About() {
  return (
    <div className='p-3 mt-20 mb-6 w-full overflow-x-hidden'>
        <section className=' text-center animate'>
        <h3 className=" font-sans text-2xl sm:text-3xl md:4xl font-bold first-letter:text-slate-900 text-slate-800">About me</h3>
        <p className='text-slate-500 md:mt-1 text-sm md:text-lg'>My introduction</p>
        </section>

        <div className='md:flex justify-between'>
            <div>
            <div className=' flex justify-evenly mt-10 flex-wrap animate'>
            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 rounded-md shadow-md shadow-slate-900'>
                <img src={image6} alt='language' className=' w-8'/>
                <h5 className='font-semibold md:text-lg'>Languages</h5>
                <p className='text-slate-600 mt-1 md:mt-2 text-sm md:text-lg'>C, JavaScript</p>
            </div>

            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 rounded-md shadow-md shadow-slate-900'>
                <img src={image8} alt='technologies' className=' w-8'/>
                <h5 className='font-semibold md:text-lg'>Technologies</h5>
                <p className='text-slate-600 mt-1 md:mt-2 text-sm md:text-lg'>TailwindCSS, ReactJS</p>
            </div>

            <div className=' text-center my-3 mx-2 w-28 md:w-32 h-32 md:h-40 p-2 border flex flex-col items-center justify-center bg-slate-200 rounded-md shadow-md shadow-slate-900'>
                <img src={image7} alt='completed' className=' w-8'/>
                <h5 className='font-semibold md:text-lg'>Completed</h5>
                <p className='text-slate-600 mt-1 md:mt-2 text-sm md:text-lg'>2+ React big projects & 5+ basics</p>
            </div>
        </div>
        <div className='md:text-right p-4 animate'>
            <p className=" text-slate-700 mt-5 lg:text-lg">I'm currently pursuing BCA from Mahishadal Raj College, Purba Medinipur. I will be graduated by 2027. My passion and dedication to my work are evident in the effort and enthusiam I bring to every task.</p>
            <button className="shadow-md shadow-black mt-6 py-2 px-4 bg-slate-600 text-white rounded-lg md:text-lg lg:text-xl font-semibold">Download Resume</button>
        </div>
            </div>
            <div className='flex justify-center p-3 items-center animate'>
                <div className='flex justify-center items-center mt-10 w-72 h-72 rounded-full md:w-[24rem] md:h-[24rem] overflow-hidden border-4 border-slate-400 shadow-lg shadow-zinc-800'>
                <div className='w-full h-full rounded-full border-4 overflow-hidden'><img src={image9} alt="my photo" className=' w-full '/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About