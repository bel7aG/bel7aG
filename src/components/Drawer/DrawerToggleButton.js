import React from 'react';

const DrawerToggleButton = (props) => {

  return (
    <div
      className="drawer-button"
      onClick={props.click}
    >
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
    </div>
  );
};

export default DrawerToggleButton;
