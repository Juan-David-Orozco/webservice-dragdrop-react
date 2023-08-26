import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavName } from './NavName'

export class SideBar extends Component {

  navsUpdate = (navSelected) => {
    this.props.navsUpdateHome(navSelected)
  }

  render() {
    const pestanas = this.props.pestanas.map((pestana, index) => {
      return (
        <NavName
          navIndex={index} key={index}
          active={this.props.activa == index ? 'active' : ''}
          navsUpdate={this.navsUpdate} pestana={pestana}
        >
          {pestana.nombre}
        </NavName>
      )
    })
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
        <div className='navbar navbar-expand-md text-left py-2 px-0'>
          <nav className="collapse navbar-collapse flex-column sidebar-links pl-3 mr-1" id="SideBar">
            {pestanas}
          </nav>
        </div>
      </>
    )
  }

}
