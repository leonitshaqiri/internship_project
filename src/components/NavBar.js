import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="px-6">
        <ul className="flex gap-x-8 border-b border-amber-300 py-6">
          <li>
            <Link to="/home-page">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
