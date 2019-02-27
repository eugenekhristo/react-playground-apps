import './quote-page.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import QuoteCard from '../../components/quote-card/quote-card';
// action generators
import {getQuotes} from '../../../../state/quotes/actions';

class QuotePage extends Component {
  render() {
    const {quotes} = this.props;

    return (
      <React.Fragment>
        {quotes.map(quote => <QuoteCard quote={quote} />)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
})

const bindActionsToProps = dispath => bindActionCreators({
  getQuotes
}, dispath)

export default connect(mapStateToProps, bindActionsToProps)(QuotePage);
