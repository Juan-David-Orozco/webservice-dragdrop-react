import React, { Component } from 'react'

export class DragDrop extends Component {

  constructor(props){
    super(props);
    const min=7;
    const max=22;
    const numelementos = Math.floor(Math.random() * (max - min + 1)) + min;
    const categorias = ['nuevos','aceptados']
    var elementosInit = []
    for (let index = 1; index <= numelementos; index++) {
      elementosInit.push({
        id: index,
        name:'Elemento '+ index,
        category:categorias[Math.floor(Math.random() * (2))]})
    }
    this.state = {elementos: elementosInit} // Se define la propiedad elementos en el estado inicial
  }

  componentDidMount() {
    console.log(this.state.elementos)
  }

  onDragOver = (ev) => {
    ev.preventDefault();
  }

  onDragStart = (ev, id) => {
    console.log(ev.dataTransfer)
    ev.dataTransfer.setData("id", id);
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    console.log(id)

    let elementos = this.state.elementos.filter((elemento) => {
      if (elemento.id == id) {
        console.log(elemento.category, cat)
        elemento.category = cat;
        console.log(elemento.category, cat)
      }
      return elemento;
    });

    console.log(elementos)
    console.log({...this.state, elementos})

    this.setState({ ...this.state, elementos });
  }

  render() {
    // Se define un objeto elementos y en el se definen 2 propiedades como
    // arreglos vacios, en ellos vamos a almacenar los elementos del estado
    // en cada una de las categorias correspondientes
    var elementos = { nuevos: [], aceptados: [] }

    this.state.elementos.forEach ((elemento) => {
      elementos[elemento.category].push(
        <div key={elemento.id}
          onDragStart = {(e) => this.onDragStart(e, elemento.id)}
          draggable
          className='card bg-dark m-1 p-1 text-white'>
          <small>{elemento.name}</small>
        </div>
      );
    });

    return (
      <section className="container-drag">
        <h3><small className='text-primary'>Elementos</small></h3>
        <div className='container'>
          <div className='row'>
            <div className='border col-sm px-0'
              onDragOver={this.onDragOver}
              onDrop={(e)=>{this.onDrop(e, "nuevos")}}
            >
              <p className="bg-primary text-white my-0 py-0">Nuevos</p>
              {elementos.nuevos}
            </div>
            <div className="border col-sm px-0" 
              onDragOver={this.onDragOver}
              onDrop={(e)=>this.onDrop(e, "aceptados")}
            >
              <p className="bg-success text-white my-0 py-0">Aceptados</p>
              {elementos.aceptados}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
