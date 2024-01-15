import React from 'react'
import SectionHeading from './SectionHeading'
import Tick from './Tick'

function Skills({skills=false}) {
    const skillList1 = [
        {
            name: "HTML",
            level: "Advanced" 
        },
        {
            name: "React JS",
            level: "Intermediate" 
        },
        {
            name: "TailwindCSS",
            level: "Intermediate" 
        },
        {
            name: "CSS",
            level: "Advanced" 
        },
        {
            name: "JavaScript",
            level: "Intermediate" 
        },
        {
            name: "RTK",
            level: "Basics" 
        },
    ]
    const skillList2 = [
        {
            name: "C",
            level: "Intermediate" 
        },
        {
            name: "Node JS",
            level: "Basics" 
        },
        {
            name: "Firebase",
            level: "Intermediate" 
        },
        {
            name: "Express",
            level: "Basics" 
        },
        {
            name: "Appwrite",
            level: "Intermediate" 
        },
        {
            name: "HTML",
            level: "advanced" 
        },
    ]
  return (
    <div className='p-3 mt-10 mb-6 w-full overflow-x-hidden min-h-screen'>
        <SectionHeading h1={"Skills"} p={"My technical level"} animate={skills} />
        <div className=' mt-10 flex max-md:flex-col justify-evenly items-center'>
            <diV className={`my-5 w-72 md:w-[20rem] bg-white shadow-md flex flex-wrap justify-evenly py-4 rounded-xl ${skills?"animate":null}`}>
                {skillList1.map((skill,index)=>(
                    <div key={index} className=' flex p-2 my-3'>
                    <div className=' mt-2'><Tick/></div>
                    <div className=' ml-2'>
                        <h4 className=' font-semibold'>{skill.name}</h4>
                        <p className=' text-sm'>{skill.level}</p>
                    </div>
                </div>
                ))}
            </diV>
            <diV className={`my-5 w-72 md:w-[20rem] bg-white shadow-md flex flex-wrap justify-evenly py-4 rounded-xl ${skills?"animate":null}`}>
                {skillList2.map((skill,index)=>(
                    <div key={index} className=' flex p-2 my-3'>
                    <div className=' mt-2'><Tick/></div>
                    <div className=' ml-2'>
                        <h4 className=' font-semibold'>{skill.name}</h4>
                        <p className=' text-sm'>{skill.level}</p>
                    </div>
                </div>
                ))}
            </diV>
        </div>
    </div>
  )
}

export default Skills