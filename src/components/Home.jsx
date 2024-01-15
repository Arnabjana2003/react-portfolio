import React from "react";
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

function Home() {
  return <div className=" w-full">
    <div className="mt-12 flex justify-between load-animate">
        <div className=" p-3 mr-3 md:mr-10 lg:mr-14 my-auto">
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

                <p className=" text-slate-500 mt-5 md:text-lg lg:text-xl">Software development enthusiastic,pursuing Bachelor's of Computer Application. Currently working on Web Development</p>

                <button className="shadow-md shadow-black mt-6 py-2 px-4 bg-slate-600 text-white rounded-lg md:text-lg lg:text-xl font-semibold">
                    <a href="mailto:arnabjana0099@gmail.com">Say hello!!</a>
                </button>
            </div>
        </div>
    </div>
    <section className=" mt-20">
    <About about/>
    </section>
    <section className=" mt-20">
    <Skills skills/>
    </section>
    <section className=" mt-20">
    <Qualification qualification/>
    </section>
    <section className=" mt-32">
    <Projects projects/>
    </section>
    <section className=" mt-32">
    <Contact contact/>
    </section>
  </div>;
}

export default Home;
