import React, { Component } from 'react'
import { Main, NavAux, SideBar } from '../components/HomePage'
import { Navigation } from '../components'

export class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      sidebar: this.props.sidebar
    };
  }

  componentDidMount() {
    console.log(this.state.sidebar)
  }

  render() {
    return (
      <>
        <header className="navbar navbar-expand-md navbar-dark bg-dark flex-column flex-md-row">
          <Navigation />
        </header>
        <div className='container-fluid main-container px-0'>
          <main className='h-100'>
            <div className="row flex-xl-nowrap mx-auto">
              <section className="col-12 col-md-3 col-xl-2 border border-info">
                <SideBar pestanas={this.state.sidebar} activa={0} />
              </section>
              <section className="col-12 col-md-9 col-xl-8 bg-primary" role='main'>
                <Main />
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