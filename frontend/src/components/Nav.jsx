import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/about" className="font-steam font-extrabold uppercase hover:text-sky-500 relative group">
            About
          <span className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ bottom: '-4px' }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="font-steam font-extrabold uppercase hover:text-sky-500 relative group">
            Projects
            <span className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ bottom: '-4px' }} />
            </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="font-steam font-extrabold uppercase hover:text-sky-500 relative group">
            Contact
            <span className="absolute left-0 right-0 h-0.5 bg-sky-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" style={{ bottom: '-4px' }} />
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}
