import './App.scss';
import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// containers
import QuotePage from './pages/quotes/containers/quote-page/quote-page';
import AddQuotePage from './pages/add-quote/containers/add-quote-page/add-quote-page';
// components
import Nav from './shared/nav/nav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/quotes/add-new" component={AddQuotePage}/>
            <Route path="/quotes" component={QuotePage}/>
            <Redirect from="/" to="/quotes" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
