import React, { Component } from 'react';
//import logo from './logo.svg';
import Header from './Components/Header.js';
import Bio from './Components/Bio.js';
import Contact from './Components/Contact.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Bio />
        <hr />
        <Contact />
        <hr />
      </div>
    );
  }
}

export default App;
