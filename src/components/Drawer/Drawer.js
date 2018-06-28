import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Drawer = () => (
  <div>
    <nav className="toolbar__navigation">
      <div className="toolbar__navigation__list-items">
        <ul>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/Cv">Cv</NavLink>
          </li>
          <li>
            <a href="https://github.com/bel7aG" target="_blank">https://github.com/bel7aG</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Drawer;
