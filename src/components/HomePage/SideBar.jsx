import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export class SideBar extends Component {
  render() {
    return (
      <>
        <form className="form d-flex p-2 my-2 mx-auto justify-content-center">
          <input type="text" className="form-control w-100" placeholder="Search..." />
          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-toggle="collapse"
            data-target="#SideBar"
            aria-controls="SideBar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon="fa-solid fa-list" />
          </button>
        </form>
        <div className='navbar navbar-expand-md flex-row text-left'>
          <nav className="collapse navbar-collapse sidebar-links py-1" id="SideBar">

            <div className="sidebar-item active mb-1">
              <Link to={"/Start"} className="sidebar-link font-weight-bold px-2 py-1 d-block" >
                Get started
              </Link>
              <ul className='nav flex-column sidebar-subnav'>
                <li className="nav-item active">
                  <Link to={"/intro"} className="nav-link">Introduction</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/download"} className="nav-link">Dowload</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/content"} className="nav-link">Content</Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-item mb-1">
              <Link to={"/Layout"} className="sidebar-link font-weight-bold px-2 py-1 d-block" >
                Layout
              </Link>
              <ul className='nav flex-column sidebar-subnav'>
                <li className="nav-item active">
                  <Link to={"/overview"} className="nav-link">Overview</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/grid"} className="nav-link">Grid</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/utilitities"} className="nav-link">Utiliites</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    )
  }
}
