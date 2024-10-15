import React from "react";

export default function Body({ children }) {
  return (
    <div className="w-1/2 mx-auto h-screen bg-white pt-32">
        {children}
    </div>

  );
}
