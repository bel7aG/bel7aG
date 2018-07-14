import React from 'react';

const DrawerToggleButton = (props) => {
  const className = props.handleToggleButtonClassName + " hover";
  console.log(props.isToggleButtonClicked);
  return (
    <button
      className={props.handleToggleButtonClassName}
      onClick={props.click}
      onMouseOver={props.isHoverToggleButton}
      onMouseOut={props.isHoverToggleButton}
      disabled={props.isToggleButtonClicked}
    >
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
      <div className="drawer-button__line" />
    </button>
  );
};

export default DrawerToggleButton;
