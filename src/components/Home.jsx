import React from "react";
import image2 from "../Assets/instalogo.svg"
import image3 from "../Assets/facebook-logo-svgrepo-com.svg"
import image4 from "../Assets/github-logo-svgrepo-com.svg"
import image5 from "../Assets/linkedin-logo-bold-svgrepo-com.svg"
import ProfileImg from "./ProfileImg";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";

function Home() {
  return <div className=" w-full">
    <div className="mt-12 flex justify-between load-animate">
        <div className=" p-3 mr-3 md:mr-10 lg:mr-14 my-auto">
            <ul className=" flex flex-col">
                <li className=" w-5 md:w-7 my-3">
                    <img src={image2} alt="insta"/>
                </li>
                <li className=" w-5 md:w-7 my-3">
                    <img src={image3} alt="fb"/>
                </li>
                <li className=" w-5 md:w-7 my-3">
                    <img src={image4} alt="github"/>
                </li>
                <li className=" w-5 md:w-7 my-3">
                    <img src={image5} alt="linkedin"/>
                </li>
            </ul>
        </div>
        <div className=" p-2 flex-grow justify-center md:justify-evenly items-center flex max-md:flex-col mb-6">
            <div><ProfileImg/></div>
            <div className=" mt-5 max-md: text-center">

                <h1 className=" font-sans text-4xl sm:text-5xl md:6xl font-bold first-letter:text-slate-900 tracking-wider text-slate-800">Arnab Jana</h1>

                <p className=" text-slate-500 mt-5 md:text-lg lg:text-xl">Web Developer inter,pursuing Bachelor's of Computer Application.</p>

                <button className="shadow-md shadow-black mt-6 py-2 px-4 bg-slate-600 text-white rounded-lg md:text-lg lg:text-xl font-semibold">Say Hello!!</button>
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
  </div>;
}

export default Home;
