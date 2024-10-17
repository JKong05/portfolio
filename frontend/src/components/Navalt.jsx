import { NavLink } from "react-router-dom";
import Resume from "/justin-kong-resume.pdf";

export default function Navalt({ setIsOpen }) {
  return (
    <div
      className="absolute z-10 w-32 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
      style={{ top: "100%" }}
    >
      <div className="py-1" role="none">
        <NavLink
          to="/"
          className="block px-4 py-2 text-sm text-black hover:text-sky-500 hover:font-bold"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={() => setIsOpen(false)}
        >
          Justin
        </NavLink>
        <NavLink
          to="/about"
          className="block px-4 py-2 text-sm text-black hover:text-sky-500 hover:font-bold"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-1"
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className="block px-4 py-2 text-sm text-black hover:text-sky-500 hover:font-bold"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-2"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </NavLink>
      </div>
      <div className="pb-1" role="none">
        <NavLink
          to="/contact"
          className="block px-4 py-2 text-sm text-black hover:text-sky-500 hover:font-bold"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
        {/** use a tag because navlink corrupted file */}
        <a
          href={Resume}
          download="justin-kong-resume.pdf"
          target="_blank"
          className="block px-4 py-2 text-sm text-black hover:text-sky-500 hover:font-bold"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-1"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </a>
      </div>
    </div>
  );
}
