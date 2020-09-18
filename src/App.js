import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste';

class App extends Component{
  mostraMensagem = () => {
    return (
      <div>
        <h4>dsdsdsd</h4>dsdsdsd
        <h1> Aula tonre-se </h1>
      </div>
    )
  }

  exibirMensagem = () => {

  }

  render() {
    return (
      <div className="App">
        <Teste></Teste>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprendendo React na comunidade do torne-se um programador
          </a>
        </header>
      </div>
    );
  }
}

export default App;
