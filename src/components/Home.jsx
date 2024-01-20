import React, { useEffect } from "react";
import image2 from "../Assets/instalogo.svg"
import image3 from "../Assets/facebook-logo-svgrepo-com.svg"
import image4 from "../Assets/github-logo-svgrepo-com.svg"
import image5 from "../Assets/linkedin-logo-bold-svgrepo-com.svg"
import ProfileImg from "./ProfileImg";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import arrow from '../Assets/right-arrow-svgrepo-com.svg'

function Home() {

    const scroll = ()=>{
        const sr = document.getElementById("about-sec")
        sr.scrollIntoView(true)
        
    }
    return <div className=" w-full">
      {/* <div className="w-full flex justify-end pr-4">
      <p onClick={scroll} id="scroll" className=" flex items-center ">Scroll down<span><img className=" w-4 rotate-90" src={arrow}/></span></p>
      </div> */}
    <div className="mt-10 flex justify-between load-animate">
        <div className=" p-3 mr-1 md:mr-10 lg:mr-14 my-auto">
            <ul className=" flex flex-col">
                <li className=" w-4 md:w-5 my-3">
                    <a href="https://instagram.com/arnab_j.01?igshid=ZDdkNTZiNTM=">
                    <img src={image2} alt="insta"/>
                    </a>
                </li>
                <li className=" w-4 md:w-5 my-3">
                    <a href="https://m.facebook.com/arnabjana123">
                    <img src={image3} alt="fb"/>
                    </a>
                </li>
                <li className=" w-4 md:w-5 my-3">
                    <a href="https://github.com/Arnabjana2003">
                    <img src={image4} alt="github"/>
                    </a>
                </li>
                <li className=" w-4 md:w-5 my-3">
                    <a href="https://www.linkedin.com/in/arnabjana01">
                    <img src={image5} alt="linkedin"/>
                    </a>
                </li>
            </ul>
        </div>
        <div className=" p-2 flex-grow justify-center md:justify-evenly items-center flex max-md:flex-col mb-6">
            <div><ProfileImg/></div>
            <div className=" mt-5 text-center">

                <h1 className=" font-sans text-4xl sm:text-5xl md:6xl font-bold first-letter:text-slate-900 tracking-wider text-slate-800">Arnab Jana</h1>

                <p className=" text-slate-500 mt-5 md:text-lg lg:text-xl">Software development enthusiastic,pursuing Bachelor's of Computer Application. Currently working on Frontend Development</p>

                <button className="shadow-md shadow-black mt-6 py-2 px-4 bg-slate-600 text-white rounded-lg md:text-lg lg:text-xl font-semibold">
                    <a href="mailto:arnabjana0099@gmail.com">Say hello!!</a>
                </button>
            </div>
        </div>
    </div>
    <section id="about-sec" className=" mt-20">
    <About />
    </section>
    <section className=" mt-20">
    <Skills />
    </section>
    <section className=" mt-20">
    <Qualification />
    </section>
    <section className=" mt-32">
    <Projects />
    </section>
    <section className=" mt-32">
    <Contact />
    </section>
  </div>;
}

export default Home;
