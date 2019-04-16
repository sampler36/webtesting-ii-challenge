import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
class App extends Component {
  state = {
    greeting:'',
      balls:0,
      strikes:0
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Baseball Score Board </h2>
        </header>
        <Display />
      </div>
    );
  }
}

export default App;
