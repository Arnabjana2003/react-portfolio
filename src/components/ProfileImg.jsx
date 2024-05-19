import React from "react";
import image1 from "../Assets/professional.jpg"

function ProfileImg() {
  return (
    <div className="shadow-lg shadow-slate-500 dark:shadow-slate-950 relative w-52 sm:w-62 md:w-72 lg:w-80 h-52 sm:h-62 md:h-72 lg:h-80 rounded-full overflow-hiddn">
      <div className="w-full h-full bg-slate-700 dark:gradient animate-spin-slow rounded-full z-0"></div>
      <div className="absolute top-0 rounded-full p-2 overflow-hidden">
        <img src={image1} className=" z-10 rounded-full border-2 p-1" />
      </div>
    </div>
  );
}

export default ProfileImg;
