import React from "react";
import Nav from "./Nav";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="fixed top-0 z-20 w-full bg-header-color flex items-center px-4 py-8">
      <div className="w-2/3 mx-auto flex items-center justify-between">
        <a className="font-bold text-4xl">Justin Kong</a>
        <Nav />
        <Socials />
      </div>
    </header>
  );
}
