import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
