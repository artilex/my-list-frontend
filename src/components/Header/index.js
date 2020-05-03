import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';
import LoginContainer from '../LoginContainer';

const Header = () => {
  const { isAuth } = useSelector(state => state.authReducer);

  const adminLink = isAuth && (
    <Link className='header__item' to='/admin'>
      Admin Panel
    </Link>
  );

  return (
    <div className='header'>
      <Link className='header__item' to='/'>
        <div className='header__logo'>My List</div>
      </Link>

      <Link className='header__item' to='/history'>
        History
      </Link>

      {adminLink}

      <div className='header__item'>
        <LoginContainer
          isAuth={isAuth}
        />
      </div>
    </div>
  );
}

export default Header;
