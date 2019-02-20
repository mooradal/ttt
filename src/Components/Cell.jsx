import React, { Component } from "react";

class Cell extends Component {
  constructor() {
    super();
    this.state = {
      player: "x"
    };
  }
  render() {
    return (
      <div className="cell" onClick={this.handleClick}>
        {this.state.player}
      </div>
    );
  }

  handleClick() {
    this.setState = { player: "o" };
  }
}

export default Cell;
