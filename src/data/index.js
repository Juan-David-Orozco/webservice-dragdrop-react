export const sideBar = [
  {
    nombre:'Get Started', 
    contenido:'Contenido de la pestaña 1',
    submenus: [
      {title: "Introduction",redirect:"/overview"},
      {title: "Donwload",redirect:"/donwload"},
      {title: "Content",redirect:"/content"},
    ],
  },
  {
    nombre: 'Layout',
    contenido: 'Contenido de la pestaña 2',
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