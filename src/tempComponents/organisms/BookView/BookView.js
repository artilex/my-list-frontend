import React, { useState } from 'react';

import BookCover from '../../atoms/BookCover';
import BookTitle from '../../atoms/BookTitle';
import AuthorContainer from '../../molecules/AuthorContainer';
import Isbn from '../../atoms/Isbn';
import SerieContainer from '../../molecules/SerieContainer';
import TagContainer from '../../molecules/TagContainer';
import BookDescription from '../../atoms/BookDescription';
import ThreeDotsMenu from '../../common/ThreeDotsMenu/ThreeDotsMenu';
import { upArrow, downArrow, doneIcon, inProgressIcon, pendingIcon } from '../../common/Icons';

function BookView(props) {
  const {
    id,
    title,
    rating,
    isbn,
    description,
    imageLink,
    authors,
    series,
    tags
  } = props.book;

  const bookViewStyle = {
    display: 'flex',
    marginBottom: '24px',
    position: 'relative'
  };

  const bookInfoStyle = {
    marginLeft: '32px'
  }

  const [ isVisible, setVisible ] = useState(false);

  const handlerMouseEnter = () => {
    setVisible(true);
  }

  const handlerMouseLeave = () => {
    setVisible(false);
  }

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
    <div>
      <div style={ bookViewStyle } onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
        <div>
          <BookCover imageLink={ imageLink } />
          <div>
            Rating: { rating }
          </div>
        </div>

        <div style={ bookInfoStyle }>
          <BookTitle text={title} />
          <AuthorContainer authors={authors} />
          <Isbn text={isbn} />
          <SerieContainer series={series} />
          <TagContainer tags={tags} />
        </div>

        <ThreeDotsMenu items={menuItems} isVisible={isVisible} />
      </div>

      <BookDescription text={description} />
    </div>
  );
}

export default BookView;