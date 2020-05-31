import React from 'react';

function DropDownTriangle(props) {
  const fillColor = props.color ? props.color : 'black';

  const closeTriangle = (
    <svg width='16' height='16' viewBox='0 0 16 16' fill={fillColor}>
      <polygon points='4,2 12,8 4,14' />
    </svg>
  );

  const openTriangle = (
    <svg width='16' height='16' viewBox='0 0 16 16' fill={fillColor}>
      <polygon points='2,4 14,4 8,12' />
    </svg>
  );

  const triangle = (props.isClose === true) ? closeTriangle : openTriangle;

  return (
    <React.Fragment>
      { triangle }
    </React.Fragment>
  );
}

export default DropDownTriangle;