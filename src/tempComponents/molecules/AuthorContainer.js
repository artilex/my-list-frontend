import React from 'react';
import Author from '../atoms/Author';

function AuthorContainer(props) {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '16px 0'
  };

  const authorStyle = {
    marginRight: '16px'
  };

  const authorCount = props.authors.length;
  const authors = props.authors.map( (author, i) => {
    const isLast = (authorCount === i + 1);
    return (
      <div style={authorStyle}>
        <Author
          key={author.id}
          id={author.id}
          name={author.name}
          isLast={isLast}
        />
      </div>
    );
  });

  return (
    <div style={containerStyle}>
        { authors }
    </div>
  );
}

export default AuthorContainer;
