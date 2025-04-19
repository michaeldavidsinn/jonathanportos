import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header font-medium'>
      <NavLink to='/' className={({ isActive }) => isActive ? "text-black" : "text-black" }>
      Home
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-black" : "text-black" }>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
