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
          key={index} navIndex={index}
          active={this.props.activa == index ? 'active': ''}
          navsUpdate={this.navsUpdate}
        >
          {pestana.nombre}
        </NavName>
        // <div className={"sidebar-item my-1 w-100 "} key={index} >
        //   <Link 
        //     className={"sidebar-link px-0 py-1 px-md-2 btn btn-link "+activa}
        //     tabIndex={index} key={index}
        //     to={"/#"}
        //     id={index} onClick={this.manejoOnClick.bind()}
        //   >
        //     {pestana.nombre}
        //   </Link>
        //   <ul className={'navbar-nav flex-column sidebar-subnav'}>
        //     {
        //       pestana.submenus.map((submenu,i) => {
        //         return (
        //         <li className={"nav-item"} key={i}>
        //           <Link to={submenu.redirect} className="nav-link">{submenu.title}</Link>
        //         </li>)
        //     })
        //     }
        //   </ul>
        // </div>
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
        <div className='navbar navbar-expand-md text-left'>
          <nav className="collapse navbar-collapse flex-column sidebar-links" id="SideBar">
            {pestanas}
          </nav>
        </div>
      </>
    )
  }

}
