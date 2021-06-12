import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import App from "./pages/App";
import BlogWriting from "./pages/write-blog";

export default class MyRouter extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/write" component={BlogWriting}></Route>
        </Switch>
      </Router>
    );
  }
}
