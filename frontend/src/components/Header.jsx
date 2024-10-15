import { React, useState, useEffect } from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import { BsJustify } from "react-icons/bs";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", resize);
    resize();
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <header className="fixed top-0 z-20 w-full bg-header-color flex flex-wrap items-center px-4 py-8">
      <div className="w-2/3 mx-auto flex items-center justify-between ">
        <div className="relative lg:hidden lg:items-center">
          <button
            className={`text-slate-300 hover:brightness-150 focus:outline-none duration-300 ease-in-out ${
              isOpen ? "ring-2 ring-white rounded-md" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsJustify size={24} />
          </button>
        </div>

        {/** the dropdown is created when state (isOpen) is updated */}
        {isOpen && (
            <div
              className="absolute left-10 z-10 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
              style={{ top: "100%" }}
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  Justin
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-4"
                >
                  Resume
                </a>
                
              </div>
            </div>
          )}
        

        <nav className={"hidden lg:flex lg:items-center"}>
          <Nav />
        </nav>
        <div className="flex items-center">
          <Socials />
        </div>
      </div>
    </header>
  );
}
