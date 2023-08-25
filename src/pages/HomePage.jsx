import React, { Component } from 'react'
import { Main, NavAux, SideBar } from '../components/HomePage'

export class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      navs: this.props.navs,
      selected: this.props.navIndexActive
    };
  }

  componentDidMount() {
    console.log(this.state.navs)
    console.log(this.state.selected)
  }

  navsUpdateHome = (navSelected) => {
    this.setState({
      selected: navSelected.props.navIndex
    })
  }

  render() {
    return (
      <>
        <div className='container-fluid main-container px-0'>
          <main className='h-100'>
            <div className="row flex-xl-nowrap mx-auto">
              <section className="col-12 col-md-3 col-xl-2" id="SideBarContainer">
                <SideBar 
                  pestanas={this.state.navs} 
                  activa={this.state.selected}
                  navsUpdateHome={this.navsUpdateHome}
                />
              </section>
              <section className="col-12 col-md-9 col-xl-8" role='main'>
                <Main 
                  pestanas={this.state.navs} 
                  activa={this.state.selected} 
                />
              </section>
              <section className="d-none d-xl-block col-xl-2 bg-secondary">
                <NavAux />
              </section>
            </div>
          </main>
        </div>
      </>
    )
  }
}