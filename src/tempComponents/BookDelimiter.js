import React from 'react';
import DropDownTriangle from './DropDownTriangle';

function BookDelimiter(props) {
  const color = 'gray';
  const text = props.name;
  const bookCount = props.bookCount;

  const delimiterContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const innerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px 8px',
    lineHeight: '32px',
    width: '100%',
    color,
  };

  const isClose = props.isClose;

  if (isClose) {
    innerContainerStyle.borderBottom = `1px solid ${color}`;
  }

  return (
    <div style={delimiterContainerStyle} onClick={props.handleClick}>
      <div>
        <DropDownTriangle isClose={isClose} color={color} />
      </div>
      <div style={innerContainerStyle}>
        <div>
          { text }
        </div>
        <div>
          { bookCount }
        </div>
      </div>
    </div>
  );
}

export default BookDelimiter;