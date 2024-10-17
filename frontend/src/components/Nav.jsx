import { NavLink } from "react-router-dom";
import Resume from "/justin-kong-resume.pdf";

export default function Nav() {
  return (
    <nav className="flex flex-col items-center justify-end mx-4">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500 underline decoration-2 decoration-sky-500 underline-offset-4" : ""
              }`
            }
          >
            Justin
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-2.5px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500 underline decoration-2 decoration-sky-500 underline-offset-4" : ""
              }`
            }
          >
            About
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-2.5px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500 underline decoration-2 decoration-sky-500 underline-offset-4" : ""
              }`
            }
          >
            Projects
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-2.5px" }}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-extrabold uppercase hover:text-sky-500 relative group ${
                isActive ? "text-sky-500 underline decoration-2 decoration-sky-500 underline-offset-4" : ""
              }`
            }
          >
            Contact
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-2.5px" }}
            />
          </NavLink>
        </li>
        <li>
          <a
            href={Resume}
            download="justin-kong-resume.pdf"
            target="_blank"
            className="font-extrabold uppercase hover:text-sky-500 relative group"
          >
            Resume
            <span
              className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ bottom: "-2.5px" }}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
