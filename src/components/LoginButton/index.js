import React, { useState, Fragment } from 'react';

import './style.css';
import LoginForm from '../LoginForm';

function LoginButton() {
  const [show, setShow] = useState(false);

  const showForm = () => {
    setShow(true);
  }

  const handleCloseForm = () => {
    setShow(false);
  }

  return (
    <Fragment>
      <div className="login-button" onClick={showForm}>
        Sign in
      </div>

      {show && <LoginForm onClose={handleCloseForm} />}
    </Fragment>
  );
}

export default LoginButton;
