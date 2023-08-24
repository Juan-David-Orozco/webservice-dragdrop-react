// Modulos React y otros
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages y Components
import { NotFoundPage, MainHomePage, ConsolePage, RegisterPage, LoginPage } from './pages/indexPages/'
import { Navigation } from './components/indexComponents'
// Styles
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <header className="navbar navbar-expand-md navbar-dark bg-dark flex-column flex-md-row">
            <Navigation />
          </header>
          <Routes>
            <Route path='/' element={<MainHomePage />} />
            <Route path='/console' element={<ConsolePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}
