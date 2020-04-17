import React from 'react';

import './Home.css';
import FilterList from '../../components/FilterList';
import BookList from '../../components/BookList';

function Home() {
  return (
    <div className="wrapper">
      <div className="left-block">
        <FilterList />
      </div>
      <div className="right-block">
        <BookList />
      </div>
    </div>
  );
}

export default Home;
