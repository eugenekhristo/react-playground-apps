import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Quote } from '../../state/quotes/reducer';
import { addQuote, getQuotes, updateQuote } from '../../state/quotes/actions';

class EditForm extends Component {
  state = {
    quote: {
      text: '',
      author: '',
    },
    isUpdatingPage: !!this.props.match.params.id,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      history, addQuote, updateQuote, match,
    } = this.props;
    const { text, author } = this.state.quote;

    if (this.state.isUpdatingPage) {
      const quote = new Quote(text, author, +match.params.id);
      updateQuote(quote);
    } else {
      const quote = new Quote(text, author);
      addQuote(quote);
    }

    this.setState({ quote: {} });
    history.replace('/quotes');
  };

  handleOnChange = ({ target }) => {
    const quote = { ...this.state.quote };
    const { name, value } = target;
    quote[name] = value;
    this.setState({ quote });
  };

  render() {
    const { text, author } = this.state.quote;
    const { isUpdatingPage } = this.state;

    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <input type="text" name="text" value={text} onChange={this.handleOnChange} />
        <br />
        <input type="text" name="author" value={author} onChange={this.handleOnChange} />
        <br />
        <button type="submit">{isUpdatingPage ? 'Update' : 'Create'}</button>
      </form>
    );
  }

  async componentDidMount() {
    const { getQuotes } = this.props;
    const { id } = this.props.match.params;
    if (!id) return;
    await getQuotes();

    const { quotes } = this.props;
    const quote = quotes.find(q => q.id === +id);
    this.setState({ quote });
  }
}

const mapStateToProps = state => ({
  quotes: state.quotes.quotes,
});

const bindActionsToProps = dispatch => bindActionCreators(
  {
    addQuote,
    getQuotes,
    updateQuote,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  bindActionsToProps,
)(EditForm);
