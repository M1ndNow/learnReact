import React, { Component } from "react";
import Borad from "../Borad/Borad";
import AddingBar from "../AddingBar/AddingBar";

class App extends Component {
  state = {
    comments: [
      {
        userName: "Tom",
        content: "撒肯定就啊",
      },
      {
        userName: "Jack",
        content: "a啊大大",
      },
    ],
  };

  addComment = (comment) => {
    let { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
  };

  deleteComment = (index) => {
    let { comments } = this.state;
    comments.splice(index, 1);
    this.setState({ comments });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <Borad comments={comments} deleteComment={this.deleteComment} />
        <AddingBar addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
