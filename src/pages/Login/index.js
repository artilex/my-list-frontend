import React from 'react';

import LoginForm from '../../components/LoginForm';
import ApiService from '../../api';
import './style.css';

function Login() {
  const login = (email, password) => {
    if (email !== undefined && password !== undefined) {
      ApiService.post('/auth/login', {
        email,
        password,
      }).then((response) => {
        localStorage.setItem('token', `Bearer ${response.data.access_token}`);
        console.log(response);
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
