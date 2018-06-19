import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import hmoe from './components/home'
import home from './components/home';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={home}/>
      <Route exact path='/landing' component={Landing}/>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
