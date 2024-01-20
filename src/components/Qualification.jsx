import React from "react";
import SectionHeading from "./SectionHeading";
import expImg from "../Assets/job-search-symbol-of-suitcase-and-curriculum-paper-svgrepo-com.svg"
import eduImg from "../Assets/education-svgrepo-com.svg"

function Qualification({ qualification = false }) {
  const qualificationList = [
    {
      name: "Secondary",
      des: "Haldia Govt. Spons. Vivekananda Vidyabhawan",
      marks: "92.4%",
      year: "2021",
      type: "education",
    },
    {
      name: "Higher-Secondary",
      des: "Haldia Govt. Spons. Vivekananda Vidyabhawan",
      marks: "82.6%",
      year: "2023",
      type: "education",
    },
    {
      name: "Mahishadal Raj College",
      des: "Bachelor's in Computer Application",
      year: "2023-2027",
      type: "education",
    },
    {
      name: "Web Dev Projects",
      des: "5+ Web Dev Projects",
      year: "2023-2024",
      type: "experience",
    },
  ];
  return (
    <div >
      <SectionHeading
        h1={"Qualification"}
        p={"My personal journey"}
        animate={qualification}
      />

      <div className=" mt-20 flex flex-col items-center">
      <div className=" flex mb-3 w-full md:w-[25rem] justify-evenly">
          <h3 className=" max-md:mx-4 text-lg border-b font-mono font-semibold flex">
            <img src={eduImg} className=" w-5 md:w-7 mr-2"/>Education</h3>
          <h3 className=" max-md:mx-4 text-lg border-b font-mono font-semibold flex">
          <img src={expImg} className=" w-5 md:w-7 mr-2"/>Experience</h3>
        </div>
        <div className=" flex flex-col items-center">
        <div>
          {qualificationList.map((item,idx) => {
            return item.type == "education" ? (
              <div key={idx} className="flex justify-start w-56 md:w-[25rem]">
                <div className=" flex w-28 md:w-44">
                  <div className=" text-right mr-2">
                    <h4 className=" font-semibold md:text-lg mb-2">
                      {item.name}
                    </h4>
                    <p className=" mb-2 text-sm md:text-base text-slate-500">
                      {item.des}
                    </p>
                    {item.marks && (
                      <p className=" mb-2 text-sm md:text-base text-slate-500">
                        {item.marks}
                      </p>
                    )}
                    <p className=" mb-4 text-sm md:text-base text-slate-500">
                      {item.year}
                    </p>
                  </div>
                  <div className=" flex flex-col items-center">
                    <div className=" w-4 md:w-5 h-4 md:h-5 bg-green-700  rounded-full"></div>
                    <div className=" bg-green-700 w-[2px] h-full"></div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx} className="  flex justify-end w-56 md:w-[25rem]">
                <div className="flex w-[126px] md:w-[243px] ">
                  <div className=" flex flex-col items-center">
                    <div className=" w-4 md:w-5 h-4 md:h-5 bg-green-700  rounded-full"></div>
                    <div className=" bg-green-700 w-[2px] h-full"></div>
                  </div>
                  <div className=" text-left ml-2">
                    <h4 className=" font-semibold md:text-lg mb-2">
                      {item.name}
                    </h4>
                    <p className=" mb-2 text-sm md:text-base text-slate-500">
                      {item.des}
                    </p>
                    <p className=" mb-4 text-sm md:text-base text-slate-500">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
