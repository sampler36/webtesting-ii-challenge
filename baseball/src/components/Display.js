import React, { Component } from "react";

class Display extends Component {
 
  render() {
    return (
      <div>
        <h3>Counts</h3>
        <div>
          {/* {Strike} */}
          <div data-testid="Strike">{`${this.props.strikes} Strikes`}</div>
          <button data-testid="Strike" onClick={this.props.strike}>
            Strike
          </button>
           {/* {Ball} */}
          <div data-testid="Ball">{`${this.props.balls} Balls`}</div>
          <button data-testid="Ball" onClick={this.props.ball}>
            Ball
          </button>

            {/* {Fouls} */}
          <div data-testid="Foul">{`${this.props.fouls} Fouls`}</div>

          <button data-testid="Foul" onClick={this.props.foul}>
            Foul
          </button>

             {/* {Hits} */}
          <div data-testid="Hit">{`${this.props.hits} Hit`}</div>
          <button data-testid="Hit" onClick={this.props.hit}>
            Hit
          </button>
        </div>
      </div>
    );
  }
}

export default Display;
