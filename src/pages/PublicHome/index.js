import React from 'react';

import './style.css';
import {
  Header,
  BookList,
  FilterList,
} from '../../components';

function PublicHome() {
  return (
    <div>
      <Header />

      <div className="wrapper">
        <div className="left-block">
          <FilterList />
        </div>
        <div className="right-block">
          <BookList />
        </div>
      </div>
    </div>
  );
}

export default PublicHome;
