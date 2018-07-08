import React from 'react';

const DrawerToggleButton = (props) => {
  const className = props.handleToggleButtonClassName + " hover";

  return (
    <div
      className={props.handleToggleButtonClassName}
      onClick={props.click}
      onMouseOver={props.isHoverToggleButton}
      onMouseOut={props.isHoverToggleButton}
    >
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
    </div>
  );
};

export default DrawerToggleButton;
