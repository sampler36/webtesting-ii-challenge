import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        balls:0,
        strikes:0
    }
  }
  render() {
    return (
      <div>
          <h3>No Scores</h3>
        <div>

        </div>
      </div>
    );
  }
}

export default Display;
