// Modulos React y otros
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Pages y Components
import { NotFoundPage, HomePage, RegisterPage, LoginPage } from './pages'
// Styles
import './App.css'

import { sideBar } from './data'

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<HomePage sidebar={sideBar} />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
      </>
    )
  }
}
