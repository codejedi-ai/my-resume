import React from 'react';

function ButtonComponent(props) {
  return (
    <button onClick={props.handleClick}>
      {props.label}
    </button>
  );
}

export default ButtonComponent;