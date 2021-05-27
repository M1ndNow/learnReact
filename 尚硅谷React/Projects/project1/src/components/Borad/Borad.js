import React, { Component } from "react";
import PropTypes from "prop-types";
import BoradItem from "../BoradItem/BoradItem";

class Borad extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };

  render() {
    const { comments, deleteComment } = this.props;
    return (
      <div>
        <h2>全部评论：</h2>
        <ul>
          {comments.map((comment, index) => (
            <BoradItem
              key={index}
              comment={comment}
              deleteComment={deleteComment}
              index={index}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Borad;
