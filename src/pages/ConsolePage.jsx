import React, { Component } from 'react'

export class ConsolePage extends Component {
  render() {
    return (
      <>
        <div className='container-fluid main-container px-0'>
          <main className='h-100'>
            <div className="row text-center mx-auto h-100 border border-info">
              <section className="col-12 col-md-3 bg-info">
                SideBar - Console
              </section>
              <section className="col-12 col-md-9 bg-success" role='main'>
                Main - Console
              </section>
            </div>
          </main>
        </div>
      </>
    )
  }
}
