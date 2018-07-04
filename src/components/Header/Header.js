import React from 'react';
import { DrawerToggleButton, Drawer } from '../';

const Header = (props) => {
  return (
    <header className="header">
      <div className="toolbar">
        <DrawerToggleButton
          click={props.handleDrawerToggleButton}
        />
        {props.isOpen && <Drawer isOpen={props.isOpen} />}
      </div>
    </header>
  );

};

export default Header;
