import React, { useState } from 'react';
import ThreeDotsMenu from './common/ThreeDotsMenu/ThreeDotsMenu';
import {
  upArrow,
  downArrow,
  doneIcon,
  inProgressIcon,
  pendingIcon,
} from './common/Icons/';

function BookItem(props) {
  const [ isVisible, setVisible ] = useState(false);

  const bookItemStyle = {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.16)',
    margin: '16px auto',
    width: '80%',
  };

  const imageContainer = {
    margin: '8px',
  };

  const bookInfoStyle = {
    position: 'relative',
    margin: '8px',
    flexGrow: 1,
    maxHeight: '96px',
    //overflow: 'hidden',
  };

  const bookTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const bookAuthorsStyle = {
    margin: '8px 0px',
  };

  const handlerMouseEnter = () => {
    setVisible(true);
  }

  const handlerMouseLeave = () => {
    setVisible(false);
  }

  const { title, imageLink, authors } = props.book;

  const authorStyle = {
    fontStyle: 'italic',
    color: '#3e99ed',
  };

  const authorItems = authors.map( (author, i) => {
    const lastItem = (authors.length === (i + 1));
    const separator = lastItem ? '' : ', ';

    return (
      <span key={author.id} style={ authorStyle }>
        { author.name + separator}
      </span>
    );
  });

  const menuItems = [
    {
      text: 'To Up',
      icon: upArrow,
    },
    {
      text: 'To Down',
      icon: downArrow,
    },
    {
      text: 'To "Read"',
      icon: doneIcon,
    },
    {
      text: 'To "Currently Read"',
      icon: inProgressIcon,
    },
    {
      text: 'To "Want to Read"',
      icon: pendingIcon,
    },
  ];

  return (
    <div style={ bookItemStyle } onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
      <div style={ imageContainer }>
        <img width='64' height='96' src={ imageLink } alt={title} />
      </div>
      <div style={bookInfoStyle}>
        <div style={bookTitleStyle}>
          { title }
        </div>
        
        <div style={bookAuthorsStyle}>
          { authorItems }
        </div>

        <ThreeDotsMenu items={menuItems} isVisible={isVisible} />
      </div>
    </div>
  );
}

export default BookItem;
