import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Drawer = (props) => {
  return (
    <React.Fragment>
      <nav className={props.navClass}>
        <div className="toolbar__navigation__list-items">
          <ul>
            <li>
              <NavLink to="/" onClick={props.click}>About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={props.click}>Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/Cv" onClick={props.click}>Cv</NavLink>
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
