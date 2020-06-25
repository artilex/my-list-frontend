import React from 'react';

function Isbn(props) {
  const isbnStyle = {
    margin: '8px 0'
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#898b8c',
    marginBottom: '8px'
  };

  const valueStyle = {
    color: '#000000'
  };

  return (
    <div style={isbnStyle}>
      <div style={labelStyle}>ISBN:</div>
      <span style={valueStyle}>
        { props.text }
      </span>
    </div>
  );
}

export default Isbn;
