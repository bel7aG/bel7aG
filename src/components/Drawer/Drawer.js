import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Drawer = (props) => {
  let className = "toolbar__navigation__list-items";

  if (props.isOpen) {
    className = "toolbar__navigation__list-items opened"
  }

  return (
    <React.Fragment>
      <nav className="toolbar__navigation">
        <div className={className}>
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
    </React.Fragment>
  );
};

export default Drawer;
