import React from 'react';

function Author(props) {
  const style = {
    fontStyle: 'italic',
    color: '#3e99ed',
    fontSize: '20px',
  };

  return (
    <div style={ style }>
      { props.name }
      { !props.isLast && ',' }
    </div>
  );
}

export default Author;
