import React, { useState } from 'react';

function ContentItem(props) {
  const [ isFocused, setFocus ] = useState(false);

  const handlerMouseEnter = () => {
    setFocus(true);
  }

  const handlerMouseLeave = () => {
    setFocus(false);
  }

  const contentItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    cursor: 'pointer',
    userSelect: 'none',
  };

  if (isFocused) {
    contentItemStyle.backgroundColor = '#e0f4f4';
    contentItemStyle.color = '#3e99ed';
  }

  const textStyle = {
    fontSize: '16px',
    marginLeft: '16px',
  };

  return (
    <div style={contentItemStyle} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave} className='menu-item'>
      {props.icon}
      <span style={textStyle}>
        {props.text}
      </span>
    </div>
  );
}

export default ContentItem;