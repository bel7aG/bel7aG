import React from 'react';
import { DrawerToggleButton, Drawer } from '../';

const Header = (props) => {
    console.log(props.handleDrawerToggleButton);
    return (
      <header className="header">
        <div className="toolbar">
          <DrawerToggleButton click={props.handleDrawerToggleButton} />
          {props.isOpen && <Drawer />}
        </div>
      </header>
  )
};

export default Header;
