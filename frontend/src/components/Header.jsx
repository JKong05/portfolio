import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 mx-auto w-full bg-header-color flex items-center px-24 py-8">
      <div className="w-1/2 pl-96 ml-2">
        <h1 className="font-bold text-4xl">Justin Kong</h1>
      </div>
      <Nav />
    </header>
  );
}
