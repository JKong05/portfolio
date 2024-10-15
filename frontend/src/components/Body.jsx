import React from "react";

export default function Body({ children }) {
  return (
    <div className="w-full mx-auto bg-img"> {/* come back and adjust the bg-img and height settings as well*/}
      <div className="w-2/3 mx-auto h-screen bg-white pt-32">{children}</div>
    </div>
  );
}
