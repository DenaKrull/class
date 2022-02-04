import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'


export default function App() {
  return (
    <div>
      <h1>PCS Router App</h1>
      <Navbar />
      <hr />
      <Outlet />

    </div>
  )
}
