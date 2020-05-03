import React, { Fragment } from 'react';

import './style.css';
import {
  BookList,
  FilterList,
} from '../../components';

function PublicHome() {
  return (
    <Fragment>
        <div className="left-block">
          <FilterList />
        </div>
        <div className="right-block">
          <BookList />
        </div>
    </Fragment>
  );
}

export default PublicHome;
