import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import login from '../../redux/actions/login';

import './style.css';
import ModalContainer from '../ModalForm';

function LoginForm(props) {
  const closeHandler = () => {
    props.onClose();
  }

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePass = (event) => {
    setPass(event.target.value)
  }

  const dispatch = useDispatch();

  const auth = () => {
    dispatch(login(email, pass));
    closeHandler();
  }

  return (
    <ModalContainer onClose={closeHandler}>
      <div className="login__title">Login</div>
      <form className="login__form">

        <div className="login__field">
          <label htmlFor="login-email">Email</label>
          <input
            type="text"
            name="login-email"
            value={email}
            placeholder="Enter Email"
            onChange={changeEmail}
          />
        </div>
        
        <div className="login__field">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            name="login-password"
            value={pass}
            placeholder="Enter Password"
            onChange={changePass}
          />
        </div>

        <button type="button" className="login__button" onClick={auth}>
          Login
        </button>
      </form>
    </ModalContainer>
  );
}

export default LoginForm;