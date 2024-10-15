import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex flex-col items-center justify-end mx-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            Justin
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-4px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            About
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-4px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            Projects
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-4px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500" : ""
              }`
            }
          >
            Contact
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-4px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="font-extrabold uppercase hover:text-sky-500 relative group"
          >
            Resume
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-4px" }}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
