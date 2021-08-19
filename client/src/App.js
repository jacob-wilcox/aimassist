import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useEffect, useState} from "react"
import { browserHistory } from 'react-router';
import { Link, useHistory } from 'react-router-dom';


import Login from './components/login/Login.jsx';
import Sign from './components/login/Sign.jsx';
import Dashboard from './components/dash/Dashboard.jsx';
import Profile from './components/profile/Profile.jsx';

function App() {
  return (


    <Router>
    <div>      
      <Switch>
        <Route path="/Sign">
          <Sign />
        </Route>
        <Route path="/dashboard/">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
