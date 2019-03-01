import './add-quote-page.scss';
import React, { Component } from 'react';
import { Quote } from './../../../../state/quotes/reducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addQuote } from './../../../../state/quotes/actions';

class AddQuotePage extends Component {
  state = {
    quote: {
      text: '',
      author: ''
    }
  };

  handleSubmit = async e => {
    const {history} = this.props;
    e.preventDefault();
    const {addQuote} = this.props;
    const { text, author } = this.state.quote;
    const quote = new Quote(text, author);
    addQuote(quote);
    this.setState({quote: {}});
    history.replace(`/quotes`);
  };

  handleOnChange = ({ target }) => {
    const quote = { ...this.state.quote };
    const { name, value } = target;
    quote[name] = value;
    this.setState({ quote });
  };

  render() {
    const { text, author } = this.state.quote;
    // TODO: this quote bind to state - will be
    //  as values of inputs when updating
    const {quote} = this.props;

    return (
      <React.Fragment>
        <h1>Add</h1>
        <form action="#" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            name="author"
            value={author}
            onChange={this.handleOnChange}
          />
          <br />
          <button type="submit">Create</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes
})

const bindActionsToProps = dispatch => bindActionCreators({
  addQuote
}, dispatch);

export default connect(mapStateToProps, bindActionsToProps)(AddQuotePage);
