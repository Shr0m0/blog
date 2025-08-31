import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <h2>My Blog</h2>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
