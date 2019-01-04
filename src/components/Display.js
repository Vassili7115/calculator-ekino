import React from "react";

function Display(props) {
  let displayValue = Number(props.displayValue);
  return <div className="display">{displayValue}</div>;
}

export default Display;
