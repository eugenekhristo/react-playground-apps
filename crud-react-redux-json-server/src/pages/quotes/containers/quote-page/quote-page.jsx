import './quote-page.scss';
import React, { Component } from 'react';
// components
import QuoteCard from '../../components/quote-card/quote-card';

class QuotePage extends Component {
  render() {
    return (
      <React.Fragment>
        <QuoteCard />
      </React.Fragment>
    );
  }
}

export default QuotePage;
