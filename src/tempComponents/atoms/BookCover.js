import React from 'react';

function BookCover(props) {

  return (
    <div>
      <img
        width='256'
        height='384'
        src={ props.imageLink }
        alt='Image Cover'
      />
    </div>
  );
}

export default BookCover;
