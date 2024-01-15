import React from 'react'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import photosbook from "../Assets/Screenshot (18).png"
import onlineattendance from "../Assets/Screenshot (19).png"

function Projects({projects=false}) {
    const projectsList = [
        {
            imgLink: photosbook,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, vitae.",
            websiteLink: "https://photosbook.vercel.app",
            githubLink: "https://github.com/Arnabjana2003/photobook"
        },
        {
            imgLink: onlineattendance,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, vitae.",
            websiteLink: "https://onlineattendance.vercel.app",
            githubLink: "https://github.com/Arnabjana2003/online-attendance"
        },
        {
            imgLink: onlineattendance,
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, vitae.",
            websiteLink: "https://onlineattendance.vercel.app",
            githubLink: "https://github.com/Arnabjana2003/online-attendance"
        },
    ]
  return (
    <div className="p-3 mt-10 mb-6 w-full overflow-x-hidden min-h-screen">
        <SectionHeading h1={"Projects"} p={"My portfolio"} animate={projects} />
        <div className=' flex flex-wrap justify-center'>
            {projectsList.map((project,index)=><div key={index} className=' m-4'>
                <ProjectCard imgLink={project.imgLink} desc={project.desc} websiteLink={project.websiteLink} githubLink={project.githubLink} />
            </div>)}
        </div>
    </div>
  )
}

export default Projects