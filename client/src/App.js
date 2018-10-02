import React, { Component } from 'react';
import SectionTitle from './components/PageComponents/SectionTitle';
import SearchBar from './components/PageComponents/SearchBar';
import Header from './components/PageComponents/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={{marginTop: '20px'}} >
          <SearchBar/>
        </div>
      </div>
    ); 
  }
}

export default App;
