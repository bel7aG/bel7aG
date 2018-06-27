import React from 'react';
import { NavLink } from 'react-router-dom';
import { DrawerToggleButton } from '../';

const Header = () => (
  <header className="header">
    <div className="toolbar">
      <DrawerToggleButton />
      <nav className="toolbar__navigation">
        <div className="toolbar__list-items">
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
