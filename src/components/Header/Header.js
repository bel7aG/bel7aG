import React from 'react';
import { DrawerToggleButton, Drawer } from '../';

const Header = (props) => {
  return (
    <header className="header">
      <div className="toolbar">
        <DrawerToggleButton
          handleToggleButtonClassName={props.handleToggleButtonClassName}
          click={props.handleDrawerToggleButton}
          isHoverToggleButton={props.isHoverToggleButton}
          isToggleButtonClicked={props.isToggleButtonClicked}
        />
        {
          props.isOpen &&
          <Drawer
            pages={props.pages}
            isOpen={props.isOpen}
            click={props.handleDrawerToggleButton}
            navClass={props.navClass}
          />
        }
      </div>
    </header>
  );

};

export default Header;
