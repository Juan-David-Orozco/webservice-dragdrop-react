import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGears, faBars } from '@fortawesome/free-solid-svg-icons'

export class Navigation extends Component {
  render() {
    return (
      <>

        <div className='d-flex justify-content-around flex-row w-100'>
          <Link to="/" className="navbar-brand my-auto">
            <span className='d-none d-sm-inline'>Portafolio </span>
            <img src={reactLogo} className="logo-react my-auto" alt="React-logo"/>
          </Link>
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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>
        </div>

        <div className="collapse navbar-collapse text-right w-100" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/console">Console</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          </ul>
        </div>

      </>
    )
  }
}
