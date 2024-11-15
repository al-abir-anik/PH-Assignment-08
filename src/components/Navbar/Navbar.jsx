
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
const location = useLocation();

const isHome = location.pathname === "/";

  return (
    <nav className={`${isHome ? "bg-[#9538e2] text-white w-5/6 mx-auto rounded-t-3xl pt-10 px-32" : "bg-white w-full"} navbar`}>
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
          <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
          <li><NavLink to={'/support'}>Support</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FontAwesomeIcon icon={faCartShopping} />
        
        </button>
        <button className="btn btn-ghost btn-circle">
        <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
