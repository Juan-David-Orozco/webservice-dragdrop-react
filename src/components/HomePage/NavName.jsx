import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavName extends Component {
  render() {
    var navsUpdate = this.props.navsUpdate
    return (
      <div className={"sidebar-item my-1 w-100 "+this.props.active}>
        <Link
          className={"sidebar-link px-0 py-1 px-md-2 btn btn-link " + this.props.active}
          id={this.props.navIndex} to={'#'}
          onClick={() => navsUpdate(this)}
        >
          {this.props.children}
        </Link>
        {/* <ul className={'navbar-nav flex-column sidebar-subnav'}>
            {
              pestana.submenus.map((submenu,i) => {
                return (
                <li className={"nav-item"} key={i}>
                  <Link to={submenu.redirect} className="nav-link">{submenu.title}</Link>
                </li>)
            })
            }
          </ul> */}
      </div>
    )
  }
}
