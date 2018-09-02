import React, { Component } from 'react';
import './App.css';
import Data from './components/data';
import SectionTitle from './components/SectionTitle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SectionTitle label="SLFE CAPSTONE"/>
        <Data />
      </div>
    );
  }
}

export default App;
