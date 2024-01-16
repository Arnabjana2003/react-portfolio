import React from 'react'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import photosbook from "../Assets/Screenshot (18).png"
import onlineattendance from "../Assets/Screenshot (19).png"
import currency from "../Assets/Screenshot (22).png"

function Projects({projects=false}) {
    const projectsList = [
        {
            imgLink: photosbook,
            name: "Photosbook",
            desc: "Photos sharing web app like FACEBOOK using React JS in Frontend and Appwrite backend as service",
            websiteLink: "https://photosbook.vercel.app",
            githubLink: "https://github.com/Arnabjana2003/photobook"
        },
        {
            imgLink: onlineattendance,
            name: "Online Attendance",
            desc: "A webapp for college to take attendance and manage students and check students total present online",
            websiteLink: "https://onlineattendance.vercel.app",
            githubLink: "https://github.com/Arnabjana2003/online-attendance"
        },
        {
            imgLink: currency,
            name: "Currency converter",
            desc: "A simple react app to check different types of currency value ",
            websiteLink: "https://currencyconverter-arnab.netlify.app/",
            githubLink: "https://github.com/Arnabjana2003/currency-convertor"
        },
    ]
  return (
    <div className="p-3 mt-10 mb-6 w-full overflow-x-hidden min-h-screen">
        <SectionHeading h1={"Projects"} p={"My portfolio"} animate={projects} />
        <div className=' flex flex-wrap justify-center'>
            {projectsList.map((project,index)=><div key={index} className={`m-4 ${projects?"animate":null}`}>
                <ProjectCard imgLink={project.imgLink} name={project.name} desc={project.desc} websiteLink={project.websiteLink} githubLink={project.githubLink} />
            </div>)}
        </div>
    </div>
  )
}

export default Projects