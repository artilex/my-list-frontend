import React from 'react';

function BookTitle(props) {
  const style = {
    fontSize: '32px',
    fontWeight: 'bold',
    margin: '16px 0'
  };

  return (
    <div style={style} >
      { props.text }
    </div>
  );
}

export default BookTitle;
