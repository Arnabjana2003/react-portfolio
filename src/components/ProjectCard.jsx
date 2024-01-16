import React from 'react'

function ProjectCard({imgLink,name,desc,websiteLink,githubLink}) {
  return (
    <div className='p-5 rounded-2xl shadow-md shadow-slate-600'>
        <div className='w-56 md:64 min-h-[21rem]'>
            <div className='overflow-hidden w-full  h-36 md:h-40 bg-slate-300 rounded-lg'>
                <img src={imgLink} className=' w-full h-full object-top'/>
            </div>
            <div>
                <h4 className=' font-semibold py-1'>{name}</h4>
            </div>
            <div>
                <p>
                    {desc}
                </p>
                <div className=' flex justify-between mt-3'>
                    <button className=' py-2 px-4 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-700 md:font-semibold'>
                        <a href={websiteLink}>Website</a>
                    </button>
                    <button className=' py-2 px-4 bg-white text-slate-900 rounded-xl shadow-lg hover:bg-gray-300 md:font-semibold'>
                    <a href={githubLink}>GitHub</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard