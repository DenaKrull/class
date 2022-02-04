import './Header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>The PCS Blogs</h1>
      <nav>
        <ul>
          <li><NavLink to="/">blog list</NavLink></li> | 
          <li><NavLink to="/">test</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
