import React, { Component } from 'react'
import { HomePage } from './HomePage'
import { Content_DragDrop, Content_DragAndDrop, Content_GetStarted } from '../components/Contents/indexContents'

export class MainHomePage extends Component {
  render() {
    const sideBar = [
      {
        nombre:'Get Started',
        contenido: <Content_GetStarted />
      },
      {
        nombre: 'Drag Drop 1',
        contenido: <Content_DragDrop />,
      },
      { 
        nombre: 'Drag Drop 2',
        contenido: <Content_DragAndDrop />,
      },
      { 
        nombre: 'Content',
        contenido: 'Contenido de la pestaña 4',
      },
    ]
    return (
      <HomePage navIndexActive={0} navs={sideBar} />
    )
  }
}
