import React from "react";

export default function Body({ children }) {
  return (
    <div className="w-full mx-auto bg-custom-gradient">
      {/* come back and adjust the bg-img and height settings as well*/}
      <div
        className="relative lg:w-10/12 xl:w-2/3 sm:mx-auto h-screen"
        style={{ paddingTop: "8.5rem", backgroundColor: "rgba(0, 0, 0, 0.25)" }}
      >
        {children}
      </div>
    </div>
  );
}
