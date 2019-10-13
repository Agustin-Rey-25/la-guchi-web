import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation'; 

import Form from './Components/Form'; 


import { tasks } from './task.json';

// Estados. Aca traemos los datos que simulan el servidor (task.json)
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
      }
    }

  render() {
    // aca esta todo el estado que guardamos en una var y la exportamos a cuerpo principal
    const tasks = this.state.tasks.map((tasks, i) => {
      return (
        <div className="col.md-4">
            <div className="card mt-4 mr-4">
            <div className="card-header">
              <h3>{ tasks.title }</h3>            
              <span className="badge badge-pill badge-danger ml-2">
                { tasks.priority }
              </span>
            </div>
            <div className="card-body">            
              <p>{ tasks.description }</p>
              <p>{ tasks.responsible }</p>
            </div>
            
          </div>
        </div>
      )
    })
  // Cuerpo principal. Aqui esta todo lo que se muestra en pantalla
  return (
    <div className="App">
      <Navigation titulo="Mi primer app"/>
      Task

      <div className="container">
        <div className="row mt-4">
        <Form />
        { tasks }
        </div>
      </div>
      
      <img src={logo} className="App-logo" alt="logo" />
    </div>

    
    );
  }
}

export default App;
