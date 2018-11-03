import React, { Component } from 'react';
import './App.css';
import NewMovie from '../containers/newMovie';
import ListMovies from '../containers/ListMovies';
import logo from '../logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <img src={logo} alt="reactLogo" className="App-logo"/>
          <h1>React Topic 4</h1>
        </header>
        <NewMovie/>
        <ListMovies/>
      </div>
    );
  }
}

export default App;
