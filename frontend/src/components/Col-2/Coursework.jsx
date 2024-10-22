import React from "react";

export default function Coursework() {
  return (
    <div className="flex flex-col px-2.5 mt-4 font-semibold group relative">
      <div>Awards</div>
      <div className="flex flex-col font-normal ">
        <div className="mobile-L:text-sm md:text-base">Dean's List</div>
        <div className="mobile-L:text-sm md:text-base">National Merit Finalist</div>
      </div>
      <div className="mt-4">Coursework</div>
      <div className="flex flex-col font-normal">
        <div className="mobile-L:text-sm md:text-base">Data Structures and Algorithms</div>
        <div className="mobile-L:text-sm md:text-base">Discrete Structures</div>
        <div className="mobile-L:text-sm md:text-base">Biology: Molecules and Cells</div>
      </div>
      
    </div>
  );
}
