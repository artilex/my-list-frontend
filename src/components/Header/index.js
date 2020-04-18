import React from 'react';

import './style.css';
import LoginButton from '../LoginButton';

function Header() {
  return (
    <div className="header">
      <div className="logo">My List</div>
      <LoginButton />
    </div>
  );
}

export default Header;
