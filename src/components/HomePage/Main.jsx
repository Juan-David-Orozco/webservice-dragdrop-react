import React, { Component } from 'react'
import { NavContent } from './NavContent';

export class Main extends Component {
  render() {
    const contenido = this.props.pestanas.map((pestana, index) => {
      return (
        <NavContent
          key={index} navIndex={index}
          active={this.props.activa == index ? 'show active': ''}
        >
          {pestana.contenido}
        </NavContent>
      )
    })
    return (
      <div className="row justify-content-center text-center p-1 mx-auto no-gutters">
        <div className="col-12 border border-info">
          <div className="tab-content m-1" id="tabContent">
            {contenido}
          </div>
        </div>
      </div>
    )
  }
}
