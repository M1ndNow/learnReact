import React, { Component } from "react";
import "./index.css";

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
