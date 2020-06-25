import React from 'react';

function BookDescription(props) {
  const containerStyle = {
    margin: '8px',
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#898b8c',
    marginBottom: '8px',
    fontSize: '20px',
    textAlign: 'center'
  };

  const textStyle = {
    textIndent: '2em',
    textAlign: 'justify'
  };

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>About the book:</div>
      <div style={textStyle}>{ props.text }</div>
    </div>
  );
}

export default BookDescription;
