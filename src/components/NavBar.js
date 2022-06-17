import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Task Manager</Link>
      <ul>
        <Link to="/tasklog">
          <li>Task Log</li>
        </Link>
        <Link to="/taskform">
          <li>Add New Task</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;