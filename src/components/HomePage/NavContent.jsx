import React, { Component } from 'react'

export class NavContent extends Component {
  render() {
    return (
      <div
        className={"tab-pane fade "+this.props.active}
        id={this.props.navIndex} role="tabpanel"
      >
        <p>{this.props.children}</p>
      </div>
    )
  }
}
