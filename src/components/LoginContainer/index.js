import React from 'react';

import './style.css';
import UserAvatar from '../UserAvatar';
import LoginButton from '../LoginButton';

const LoginContainer = ({ isAuth }) => {
  const output = isAuth ? <UserAvatar /> : <LoginButton />;

  return (
    <div className='login-block'>
      {output}
    </div>
  );
}

export default LoginContainer;
