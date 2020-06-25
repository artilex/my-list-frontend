import React, { useState } from 'react';

function Tag(props) {
  const innerStyle = {
    margin: '4px'
  };

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8px',
    marginBottom: '8px',
    border: '1px solid #3e99ed',
    borderRadius: '8px',
    cursor: 'pointer',
    userSelect: 'none'
  };

  const hoverStyle = {
    ...defaultStyle,
    color: '#fff',
    backgroundColor: '#3e99ed',
  };

  const normalStyle = {
    ...defaultStyle,
    color: '#3e99ed',
    backgroundColor: '#edf0f2',
  }

  const [ isFocused, setFocus ] = useState(false);

  const handlerMouseEnter = () => {
    setFocus(true);
  }

  const handlerMouseLeave = () => {
    setFocus(false);
  }

  const containerStyle = isFocused ? hoverStyle : normalStyle;

  return (
    <div
      style={containerStyle}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <span style={innerStyle}>
        { props.name }
      </span>
    </div>
  );
}

export default Tag;
