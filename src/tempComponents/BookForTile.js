import React, { useState } from 'react';

function BookForTile(props) {
  const [ isVisible, setVisible ] = useState(false);

  const bookContainerStyle = {
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.16)',
    margin: '16px',
    width: '128px',
  };

  const dropDownStyle = {
    display: isVisible ? 'block' : 'none',
    height: '24px',
    width: '16px',
    position: 'absolute',
    top: 8,
    right: 8,
    cursor: 'pointer',
  };

  const bookInfoStyle = {
    margin: '4px',
    overflow: 'hidden',
  };

  const titleStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
  };

  const authorStyle = {
    fontSize: '12px',
    fontStyle: 'italic',
    color: '#3e99ed',
  };

  const threeDotsSvg = (
    <svg width='16' height='24' viewBox='0 0 16 24' fill='red'>
      <circle cx='8' cy='6' r='2' />
      <circle cx='8' cy='12' r='2' />
      <circle cx='8' cy='18' r='2' />
    </svg>
  );

  const handlerMouseEnter = () => {
    setVisible(true);
  }

  const handlerMouseLeave = () => {
    setVisible(false);
  }

  const { title, imageLink, authors } = props.book;

  const authorItems = authors.map( (author, i) => {
    const lastItem = (authors.length === (i + 1));
    const separator = lastItem ? '' : ', ';

    return (
      <span key={author.id} style={ authorStyle }>
        { author.name + separator}
      </span>
    );
  });

  return (
    <div style={bookContainerStyle} onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
      <img width='128' height='192' src={ imageLink } alt={title} />
      <div style={bookInfoStyle}>
        <div style={titleStyle}>
          { title }
        </div>
        <div style={authorStyle}>
          { authorItems }
        </div>
      </div>
      <div style={dropDownStyle}>
        { threeDotsSvg }
      </div>
    </div>
  );
}

export default BookForTile;
