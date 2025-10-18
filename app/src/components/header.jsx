import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <div className="brand">My Weather App</div>
        <nav className="nav">
          <a href="#home">Home</a>
        </nav>
      </div>
    </header>
  )
}

