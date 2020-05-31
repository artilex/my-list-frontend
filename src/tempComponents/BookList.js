import React, { useState } from 'react';
import BookDelimiter from './BookDelimiter';
import BookItem from './BookItem';

function BookList(props) {
  const [ isClose, setState ] = useState(props.isClose);

  const handleClick = () => {
    setState(!isClose)
  }

  const books = props.books.map((book) => {
    return <BookItem key={book.id} book={book} />
  });

  const bookCount = books.length;

  const bookContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evently',
    border: '1px solid gray',
  };

  const bookContainer = !isClose && (
    <div style={bookContainerStyle}>
      { books }
    </div>
  );

  return (
    <div>
      <BookDelimiter name={props.name} bookCount={bookCount} isClose={isClose} handleClick={handleClick} />
      { bookContainer }
    </div>
  );
}

export default BookList;