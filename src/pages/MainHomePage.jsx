import React, { Component } from 'react'
import { HomePage } from './HomePage'
import { DragDrop, DragAndDrop } from '../components/HomePage/'

export class MainHomePage extends Component {
  render() {
    const sideBar = [
      {
        nombre:'Get Started',
        contenido: <DragDrop />,
        submenus: [
          {title: "Introduction",content:"/overview"},
          {title: "Donwload",content:"/donwload"},
          {title: "Content",content:"/content"},
        ],
      },
      {
        nombre: 'Layout',
        contenido: <DragAndDrop />,
        submenus: [
          {title: "Overview",content:"/overview"},
          {title: "Grid",content:"/grid"},
          {title: "Utilities",content:"/utilities"},
        ],
      },
      { 
        nombre: 'Components',
        contenido: 'Contenido de la pestaña 3',
        submenus: [
          {title: "Alert",content:"/alert"},
          {title: "Grid",content:"/badge"},
          {title: "Dropdowns",content:"/dropdowns"},
        ],
      },
      { 
        nombre: 'Content',
        contenido: 'Contenido de la pestaña 4',
        submenus: [
          {title: "Reboot",content:"/reboot"},
          {title: "Typography",content:"/typography"},
          {title: "Code",content:"/code"},
          {title: "Images",content:"/images"},
        ],
      }
    ]
    return (
      <HomePage navIndexActive={0} navs={sideBar} />
    )
  }
}
