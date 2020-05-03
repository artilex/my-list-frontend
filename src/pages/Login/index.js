import React from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../../components/LoginForm';
import ApiService from '../../api';
import './style.css';

const Login = ({ isAuth }) => {

  if (isAuth) {
    return <Redirect to={'/'} />;
  }

  const login = (email, password) => {
    if (email !== undefined && password !== undefined) {
      ApiService.post('/auth/login', {
        email,
        password,
      }).then((response) => {
        localStorage.setItem('token', `Bearer ${response.data.access_token}`);
        console.log('Sign in successfully');
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  return (
    <LoginForm
      login={login}
    />
  );
}

export default Login;
