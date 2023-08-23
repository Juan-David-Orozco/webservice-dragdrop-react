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
        <div className='navbar navbar-expand-md text-left'>
          <nav className="collapse navbar-collapse flex-column sidebar-links" id="SideBar">

            <div className="sidebar-item active my-1 w-100">
              <Link to={"/Start"} className="sidebar-link font-weight-bold px-0 py-1 px-md-2 btn btn-link" >
                Get started
              </Link>
              <ul className='navbar-nav flex-column sidebar-subnav'>
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

            <div className="sidebar-item my-1 w-100">
              <Link to={"/Layout"} className="sidebar-link font-weight-bold px-0 py-1 px-md-2 btn btn-link" >
                Layout
              </Link>
              <ul className='navbar-nav flex-column sidebar-subnav'>
                <li className="nav-item active">
                  <Link to={"/overview"} className="nav-link">Overview</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/grid"} className="nav-link">Grid</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/utilities"} className="nav-link">Utilities</Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-item my-1 w-100">
              <Link to={"/Components"} className="sidebar-link font-weight-bold px-0 py-1 px-md-2 btn btn-link" >
                Components
              </Link>
              <ul className='navbar-nav flex-column sidebar-subnav'>
                <li className="nav-item active">
                  <Link to={"/alert"} className="nav-link">Alert</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/badge"} className="nav-link">Badge</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dropdowns"} className="nav-link">Dropdowns</Link>
                </li>
              </ul>
            </div>

          </nav>
        </div>
      </>
    )
  }
}
