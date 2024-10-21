import React from "react";

export default function ActivityCard({
  img,
  position,
  organization,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <div
      className="box-content mt-3 mx-4 h-max rounded-sm group relative"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div className="flex flex-col h-max">
        <div className="flex flex-row mx-3 mt-2">
          <div className="basis-1/4">
            <img
              src={img}
              className="w-full h-20 lg:w-48 lg:h-24 object-cover"
            ></img>
          </div>
          <div className="basis-1/2 flex flex-col uppercase ml-2 font-semibold justify-center">
            <div className="text-lg">{position}</div>
            <div className="text-xs">{organization}</div>
          </div>
          <div className="basis-1/4 flex flex-col justify-end items-end text-slate-400 text-xs mobile-L:text-base text-right">
            <div>{startDate}</div>
            <div>{endDate}</div>
          </div>
        </div>
        <div className="box-content rounded-sm mx-3 my-2 bg-[#1b2838]">
          <div className="p-2 text-sm">{location}</div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 flex justify-center text-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-[0.5rem] mobile-L:text-sm">{description}</p>
      </div>
    </div>
  );
}
