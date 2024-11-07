import React from "react";
import University from "../../assets/Vanderbilt-Logo.jpg";

export default function Education() {
  return (
    <div className="flex flex-col px-2.5 mt-4 font-semibold">
      <div className="text-xl">Education</div>
      <div className="relative group flex flex-col">
        <img
          src={University}
          alt="university logo"
          className="w-full h-28 object-cover rounded-sm "
        ></img>
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-2 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-[0.6rem] xl:text-xs flex flex-col text-center">
            <div>Awards: Dean's List | National Merit Finalist</div>
            <div>Coursework: Data Structures and Algorithms, Discrete Structures, Biology: Molecules and Cells</div>
          </p>
        </div>
      </div>
    </div>
  );
}
