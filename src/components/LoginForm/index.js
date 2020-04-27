import React, { useState } from 'react';

import './style.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (event) => {
    setEmail(event.target.value)
  }

  const changePass = (event) => {
    setPassword(event.target.value)
  }

  const loginHandler = () => {
    props.login(email, password)
  }

  return (
    <div>
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
            value={password}
            placeholder="Enter Password"
            onChange={changePass}
          />
        </div>

        <button type="button" className="login__button" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;