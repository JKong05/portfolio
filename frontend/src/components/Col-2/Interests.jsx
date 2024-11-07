import React from "react";
import Ultimate from "../../assets/armada-logo.jpg";
import Climb from "../../assets/climb.jpg";
import Biking from "../../assets/biking.jpg";

export default function Interests() {
  return (
    <div className="flex flex-col px-2.5 mt-4 font-semibold">
      <div className="text-xl">Interests</div>
      <div className="flex flex-col space-y-2">
        <div className="relative group">
          <img
            src={Ultimate}
            alt="armada"
            className="w-full h-28 object-cover"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[0.5rem] mobile-L:text-sm">Ultimate Frisbee</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Climb}
            alt="bouldering"
            className="w-full h-28 object-cover"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[0.5rem] mobile-L:text-sm">Bouldering</p>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Biking}
            alt="biking"
            className="w-full h-28 object-cover pb-2"
          ></img>
          <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[0.5rem] mobile-L:text-sm">Biking</p>
          </div>
        </div>
      </div>
    </div>
  );
}
