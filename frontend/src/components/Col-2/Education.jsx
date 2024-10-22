import React from "react";
import University from "../../assets/Vanderbilt-Logo.png";

export default function Education() {
  return (
    <div className="flex flex-col px-2.5 mt-4 font-semibold">
      <div>Education</div>
      <div className="flex flex-col">
        <img src={University} alt="university logo" className="w-auto h-full bg-white rounded-sm px-2 py-2"></img>
      </div>
    </div>
  );
}
