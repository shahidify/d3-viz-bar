import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <BarChart data={[2,5,10,1,4,4,9,7,3,5,10,1,3]} size={[400,400]} />
        </header>
      </div>
    );
  }
}

export default App;
