import React from 'react';
import {Link} from "react-router-dom";

import './style.css';

function Header(props) {
  return (
    <div className="header">
      <div className="logo">My List</div>
      <Link to="/">Filter</Link>
      <Link to="/history">History</Link>
      <Link to="/admin">Admin Panel</Link>
      <div>{props.email}</div>
    </div>
  );
}

export default Header;
