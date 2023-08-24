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
      <div className="row justify-content-center text-center py-2 mx-auto no-gutters">
        <div className="col-12 ">
          <div className="tab-content border m-1 p-2" id="tabContent">
            {contenido}
          </div>
        </div>
      </div>
    )
  }
}
