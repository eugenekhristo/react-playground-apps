import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import {Switch, Route} from 'react-router-dom';
// components
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route path="/create-project" component={CreateProject} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/" component={Dashboard} exact />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
