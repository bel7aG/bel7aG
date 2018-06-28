import React from 'react';

const DrawerToggleButton = (props) => (
  <div
    className="drawer-button"
    onClick={props.click}
  >
    <div className="drawer-button__line"></div>
  </div>
);

export default DrawerToggleButton;
