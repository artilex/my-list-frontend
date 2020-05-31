import React from 'react';

const CustomButton = (props) => {
  const style = {
    color: '#393939',
    border: '2px solid #393939',
    fontSize: '24px'
  };

  return (
    <button style={style}>
      {props.text}
    </button>
  );
}

export default CustomButton;
