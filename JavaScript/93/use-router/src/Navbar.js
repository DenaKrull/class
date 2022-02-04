import React from 'react'
import { Link, NavLink } from 'react-router-dom'




export default function Navbar() {
  return (
    <nav>
      <ul>
        <li> <Link to="/">Home </Link></li> | {' '}
        <li>  <NavLink to="/about">About </NavLink></li> | {' '}
        <li>  <NavLink to="/contact">Contact </NavLink></li> | {' '}

        <li>  <NavLink to="/foo">Foo </NavLink></li>
      </ul>
    </nav>
  )
}
