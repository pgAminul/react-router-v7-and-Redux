import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <ul className="flex justify-center items-center gap-5 text-2xl">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
