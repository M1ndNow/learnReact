import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BoradItem extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { comment, deleteComment, index } = this.props;
    deleteComment(index);
  };

  render() {
    const { comment } = this.props;
    return (
      <li>
        {comment.userName}说：{comment.content}
        <button onClick={this.handleClick}>删除</button>
      </li>
    );
  }
}
