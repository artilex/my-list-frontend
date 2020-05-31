import React from 'react';

const CustomInput = (props) => {
  const style = {
    color: '#393939',
    border: '2px solid #393939',
    fontSize: '24px',
    width: '480px'
  };

  let placeHolder = props.placeHolder ? props.placeHolder : '...';

  return (
    <input
      type={props.type}
      style={style}
      placeHolder={placeHolder}
    />
  );
}

export default CustomInput;
