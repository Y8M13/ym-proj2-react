import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <Link style={ navStyle } to="/">Task Manager</Link>
      <ul className="nav-links">
        <Link style={ navStyle }to="/tasklog">
          <li>Task Log</li>
        </Link>
        <Link style={ navStyle }to="/taskform">
          <li>Add New Task</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;