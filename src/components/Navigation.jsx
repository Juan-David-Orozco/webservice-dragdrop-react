import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGears, faBars } from '@fortawesome/free-solid-svg-icons'

export class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">

        <div>
          <Link to="/" className="navbar-brand">DragDrop</Link>
          <button 
            className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNav" 
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </div>

        <div>
          <ul className='d-flex flex-row justify-content-aroud'>
            <li className="nav-item my-auto dropdown">
              <Link
                className="nav-link dropdown-toggle" href="#"
                id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"
              >
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" href="#">Action</Link>
                <Link className="dropdown-item" href="#">Another action</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                <FontAwesomeIcon icon="fa-solid fa-gears" />
              </Link>
            </li>
          </ul>
        </div>

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
