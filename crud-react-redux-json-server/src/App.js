import './App.scss';
import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
// containers
import QuotesPage from './pages/quotes/containers/quotes-page/quotes-page';
import AddQuotePage from './pages/add-quote/containers/add-quote-page/add-quote-page';
import EditQuotePage from './pages/edit-quote/containers/edit-quote-page/edit-quote-page';
// components
import Nav from './shared/nav/nav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/quotes/update/:id" component={EditQuotePage}/>
            <Route path="/quotes/add-new" component={AddQuotePage}/>
            <Route path="/quotes" component={QuotesPage}/>
            <Redirect from="/" to="/quotes" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
