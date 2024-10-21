import React from "react";

export default function Body({ children }) {
  return (
    <div className="w-full mx-auto bg-custom-gradient">
      {/* come back and adjust the bg-img and height settings as well*/}
      <div
        className="relative xl:w-1/2 lg:w-10/12 xl:w-2/3 2xl:w-7/12 sm:mx-auto min-h-screen"
        style={{ paddingTop: "8.5rem", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        {children}
      </div>
    </div>
  );
}
