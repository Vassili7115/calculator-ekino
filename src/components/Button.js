import React from 'react';

const Button = (props) => {
  return(
    <button onClick={props.onClick} className={props.style}
    >
    {props.value}
    </button>
  );
}

export default Button;
