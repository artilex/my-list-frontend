import React from 'react';

import './style.css';
import ModalContainer from '../ModalForm';

function LoginForm(props) {
  const closeHandler = () => {
    props.onClose();
  }
  return (
    <ModalContainer onClose={closeHandler}>
      <div className="login__title">Login</div>
      <form className="login__form">

        <div className="login__field">
          <label for="login-email">Email</label>
          <input type="text" name="login-email" placeholder="Enter Email" />
        </div>
        
        <div className="login__field">
          <label for="login-password">Password</label>
          <input type="password" name="login-password" placeholder="Enter Password" />
        </div>

        <button type="button" className="login__button">
          Login
        </button>
      </form>
    </ModalContainer>
  );
}

export default LoginForm;
