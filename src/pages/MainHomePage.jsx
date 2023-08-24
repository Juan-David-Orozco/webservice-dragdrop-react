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
          {title: "Introduction",redirect:"/overview"},
          {title: "Donwload",redirect:"/donwload"},
          {title: "Content",redirect:"/content"},
        ],
      },
      {
        nombre: 'Layout',
        contenido: <DragAndDrop />,
        submenus: [
          {title: "Overview",redirect:"/overview"},
          {title: "Grid",redirect:"/grid"},
          {title: "Utilities",redirect:"/utilities"},
        ],
      },
      { 
        nombre: 'Components',
        contenido: 'Contenido de la pestaña 3',
        submenus: [
          {title: "Alert",redirect:"/alert"},
          {title: "Grid",redirect:"/badge"},
          {title: "Dropdowns",redirect:"/dropdowns"},
        ],
      },
      { 
        nombre: 'Content',
        contenido: 'Contenido de la pestaña 4',
        submenus: [
          {title: "Reboot",redirect:"/reboot"},
          {title: "Typography",redirect:"/typography"},
          {title: "Code",redirect:"/code"},
          {title: "Images",redirect:"/images"},
        ],
      }
    ]
    return (
      <HomePage navIndexActive={0} navs={sideBar} />
    )
  }
}
