import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import './style.css';

const AdminHome = ({ isAuth }) => {

  if (!isAuth) {
    return <Redirect to={'login'} />;
  }

  return (
    <Fragment>
      Admin Home Page
    </Fragment>
  );
}

export default AdminHome;
