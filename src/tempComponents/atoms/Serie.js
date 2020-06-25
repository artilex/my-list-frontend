import React from 'react';

function Serie(props) {
  const containerStyle = {
    color: '#000000',
    margin: '8px 0'
  };

  const numberStyle = {
    fontWeight: 'bold'
  };

  const { id, name, orderNumber } = props;

  return (
    <div style={containerStyle}>
      <span>{ name }</span>
      <span>, book</span>
      <span style={numberStyle}> №{ orderNumber }</span>
    </div>
  );
}

export default Serie;
