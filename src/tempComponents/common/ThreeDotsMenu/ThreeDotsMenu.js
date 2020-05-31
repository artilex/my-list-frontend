import React, { useState } from 'react';
import ContentItem from './ContentItem';
import { threeDots } from '../Icons/'
import './ThreeDotsMenu.css';

function ThreeDotsMenu(props) {
  const [ isShow, setShow ] = useState(false);

  const contentStyle = {
    display: isShow ? 'block' : 'none',
    position: 'absolute',
    background: '#fff',
    top: '28px',
    right: 0,
    zIndex: 10,
    border: '1px solid #f3f3f3',
  };

  const buttonStyle = {
    display: props.isVisible ? 'block' : 'none',
    height: '24px',
    width: '16px',
    position: 'absolute',
    top: 0,
    right: 0,
    cursor: 'pointer',
  };

  const items = props.items.map((item) => {
    return (
      <ContentItem icon={item.icon} text={item.text} />
    );
  });

  const handleClick = () => {
    setShow(!isShow);
  };

  return (
    <React.Fragment>
      <div style={buttonStyle} onClick={handleClick}>
        { threeDots }
      </div>

      <div style={contentStyle}>
        { items }
      </div>
    </React.Fragment>
  );
}

export default ThreeDotsMenu;