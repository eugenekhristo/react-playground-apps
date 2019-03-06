import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {Switch, Route, Redirect} from 'react-router-dom';
// components
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/projects/:id" component={ProjectDetails} exact />
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
