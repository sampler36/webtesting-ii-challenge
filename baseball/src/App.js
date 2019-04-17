import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
class App extends Component {
  state = {
    greeting:'',
      balls:0,
      strikes:0,
      fouls:0,
      hits:0
  }
  strike = e => {
    e.preventDefault();
    let strikes = this.state.strikes + 1;
    if(strikes < 4) { 
      this.setState({
        strikes: strikes
      })
    } else{
      this.setState({
        strikes:0
      })
    }
  };

  ball = e => {
    e.preventDefault();
    let balls = this.state.balls + 1;
    if(balls < 5 ) { 
      this.setState({
        balls: balls
      })
    } else{
      this.setState({
        balls:0
      })
    }
  };

  foul = e => {
    e.preventDefault();
    let fouls = this.state.fouls + 1;
    this.setState({
      fouls: fouls
    });
  };

  hit = e => {
    e.preventDefault();
    let hits = this.state.hits + 1;
    this.setState({
      hits: hits
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Baseball Score Board </h2>
        </header>
        <Display
            {...this.state}
            strike = {this.strike}
            ball = {this.ball}
            foul = {this.foul}
            hit = {this.hit}
 
        />
      </div>
    );
  }
}

export default App;
