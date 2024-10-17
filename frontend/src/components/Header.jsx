import { React, useState, useEffect, useRef } from "react";
import Nav from "./Nav";
import Navalt from "./Navalt";
import Socials from "./Socials";
import { BsJustify } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const clickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const resize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    window.addEventListener("resize", resize);

    resize();

    return () => {
      document.removeEventListener("mousedown", clickOutside);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-20 w-full bg-header-color flex flex-wrap items-center px-4 py-8">
      <div className="relative w-full lg:w-2/3 mx-auto flex items-center justify-between h-10">
        <div className="relative md:hidden md:items-center lg:justify-start" ref={dropdownRef}>
          <button
            className={`text-slate-300 hover:brightness-150 focus:outline-none duration-300 ease-in-out items-center${
              isOpen ? "ring-2 ring-white rounded-md" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsJustify size={24} />
          </button>
          {isOpen && <Navalt setIsOpen={setIsOpen} />}
        </div>
        <nav className={"hidden md:flex md:items-center"}>
          <Nav />
        </nav>
        <div className="flex items-center">
          <Socials />
        </div>
      </div>
    </header>
  );
}
