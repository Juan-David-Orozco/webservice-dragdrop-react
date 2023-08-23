// Modulos React y otros
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages y Components
import { NotFoundPage, HomePage, RegisterPage, LoginPage } from './pages'
// Styles
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
      </>
    )
  }
}
