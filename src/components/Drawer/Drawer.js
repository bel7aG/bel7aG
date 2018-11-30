import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Drawer = ({ pages, navClass, click }) => {
  return (
      <nav className={navClass}>
        <div className="toolbar__navigation__list-items">
          <ul>
            {pages.map(({ title, url }) => (
              <li key={title}>
                <NavLink to={url} onClick={click}>{title}</NavLink>
              </li>
            ))}
            <li>
              <a href="https://github.com/bel7aG" target="_blank">https://github.com/bel7aG</a>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Drawer;
