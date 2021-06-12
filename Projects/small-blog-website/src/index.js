import React from "react";
import ReactDOM from "react-dom";
import MyRouter from "./routers";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

// Redux
const SWITCH_PAGE = "SWITCH_PAGE";
const ADD_BLOG = "ADD_BLOG";
const DELETE_BLOG = "DELETE_BLOG";

// Action Creators
const addBlogAction = (blog) => {
  return {
    type: ADD_BLOG,
    data: blog,
  };
};

const defaultState = {
  blogs: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
    case ADD_BLOG:
      return [...state, action.data];
    case DELETE_BLOG:
    default:
      return state;
  }
};

const store = createStore(reducer);
const mapStateToProps = (state) => {
  return {
    blogs: state.blogs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewBlog: function (blog) {
      dispatch(addBlogAction(blog));
    },
  };
};

const ConnectedRouter = connect(mapStateToProps, mapDispatchToProps)(MyRouter);
// React
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter />
  </Provider>,
  document.getElementById("root")
);
