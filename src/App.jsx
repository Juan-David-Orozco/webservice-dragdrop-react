// Modulos React y otros
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages y Components
import { DragDrop, DragAndDrop, Navigation } from './components'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
// Styles
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <header className='container-fluid'>
            <Navigation />
          </header>
          <main className="container my-2 py-2">
            <Routes>
              <Route path='/' element={<DragDrop />} />
              <Route path='/drag-drop' element={<DragAndDrop />} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
          </main>
        </BrowserRouter>
      </>
    )
  }
}
