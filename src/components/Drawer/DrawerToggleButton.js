import React from 'react';

const DrawerToggleButton = (props) => {
  const classNameHover = "drawer-button";

  return (
    <div
      className={props.handleToggleButtonClassName}
      onClick={props.click}
    >
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
    </div>
  );
};

export default DrawerToggleButton;
