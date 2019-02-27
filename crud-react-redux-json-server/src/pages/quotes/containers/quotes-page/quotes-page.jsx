import './quotes-page.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// components
import QuoteCard from '../../components/quote-card/quote-card';
// action generators
import { getQuotes, deleteQuote } from '../../../../state/quotes/actions';

class QuotesPage extends Component {
  render() {
    const { quotes, deleteQuote } = this.props;

    return (
      <React.Fragment>
        {quotes.map(quote => (
          <QuoteCard key={quote.id} quote={quote} onDeleteQuote={deleteQuote} />
        ))}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { getQuotes } = this.props;

    getQuotes();
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
});

const bindActionsToProps = dispath =>
  bindActionCreators(
    {
      getQuotes,
      deleteQuote
    },
    dispath
  );

export default connect(
  mapStateToProps,
  bindActionsToProps
)(QuotesPage);
