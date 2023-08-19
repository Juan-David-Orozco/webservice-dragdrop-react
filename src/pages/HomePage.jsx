import React, { Component } from 'react'
import { Navigation } from '../components'

export class HomePage extends Component {
  render() {
    return (
      <>
        <header className='container'>
          <Navigation />
        </header>
        <main>
          <section className='container text-center align-items-center h-100'>
            HomePage
          </section>
        </main>
      </>
    )
  }
}