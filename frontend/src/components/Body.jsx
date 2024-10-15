import React from "react";

export default function Body({ children }) {
  return (
    <div className="background-container w-full mx-auto bg-fixed"> {/* come back and adjust the bg-img and height settings as well*/}
      <div className="w-2/3 mx-auto h-screen bg-custom-gradient pt-28 opacity-75">{children}</div>
    </div>
  );
}
