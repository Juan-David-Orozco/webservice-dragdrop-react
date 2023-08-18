import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand">DragDrop</Link>
        <button 
          className="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav text-right mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" >
                DragDrop_1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/drag-drop">DragDrop_2</Link>
            </li>
          </ul>
          <ul className="navbar-nav text-right">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
