import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./components/App";
import Login from "./pages/login";
import ToDo from "./pages/todo";

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/login/:id" component={Login}></Route>
        <Route path="/todo" component={ToDo}></Route>
      </Switch>
    </Router>
  );
}
