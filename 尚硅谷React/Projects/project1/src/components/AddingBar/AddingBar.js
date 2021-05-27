import React, { Component } from "react";
import PropTypes from "prop-types";

class AddingBar extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  state = {
    userName: "",
    content: "",
  };

  handleNameChange = (event) => {
    let userName = event.target.value;
    this.setState({ userName });
  };

  handleContentChange = (event) => {
    let content = event.target.value;
    this.setState({ content });
  };

  handleSubmit = () => {
    let comment = this.state;
    let { addComment } = this.props;
    addComment(comment);
    this.setState({
      userName: "",
      content: "",
    });
  };

  render() {
    const { userName, content } = this.state;
    return (
      <div>
        <label htmlFor="userName">用户名：</label>
        <input type="text" value={userName} onChange={this.handleNameChange} />
        <label htmlFor="content">评论：</label>
        <input
          type="text"
          value={content}
          onChange={this.handleContentChange}
        />
        <input type="submit" value="提交" onClick={this.handleSubmit}></input>
      </div>
    );
  }
}

export default AddingBar;
