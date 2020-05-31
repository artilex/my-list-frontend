import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

const AdminHome = ({ isAuth }) => {

  if (!isAuth) {
    return <Redirect to={'login'} />;
  }

  return (
    <Fragment>
      <input type='text' placeHolder='Enter the title' />
      <button>Search</button>

      <div>
      </div>
    </Fragment>
  );
}

export default AdminHome;
