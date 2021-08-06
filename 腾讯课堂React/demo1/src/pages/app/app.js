import React from 'react';
import './app.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../login/login';
import Welcome from '../welcome/welcome';


export default function App(){
    
    return (
        <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Login}></Route>
                <Route path='/welcome' component={Welcome}></Route>
            </Switch>
        </Router>
        </div>
    )
    
}