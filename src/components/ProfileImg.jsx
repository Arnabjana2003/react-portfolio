import React from "react";
import image1 from "../Assets/professional.jpg"

function ProfileImg() {
  return (
    <div className="shadow-lg shadow-slate-500 relative w-52 sm:w-62 md:w-72 lg:w-80 rounded-full overflow-hidden">
      <div className=" absolute top-0 bottom-0 left-0 right-0 border-y-4 border-x-8 border-y-red-400 animate-spin-slow rounded-full"></div>
      <div className=" border-4 border-orange-600 rounded-full m-2 overflow-hidden">
        <img src={image1} className=" z-10" />
      </div>
    </div>
  );
}

export default ProfileImg;
