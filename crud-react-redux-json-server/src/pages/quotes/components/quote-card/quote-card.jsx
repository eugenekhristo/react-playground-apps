import './quote-card.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const QuoteCard = ({ quote, onDeleteQuote }) => {
  return (
    <React.Fragment>
      <div className="quote-card">
        <div className="quote-card__controls">
          <Link to={`/quotes/update/${quote.id}`}>
            <svg className="quote-card__icon quote-card__icon--edit">
              <use xlinkHref="./img/svg-icons-sprite.svg#icon-mode_edit" />
            </svg>
          </Link>
          <svg
            className="quote-card__icon quote-card__icon--remove"
            onClick={() => onDeleteQuote(quote.id)}
          >
            <use xlinkHref="./img/svg-icons-sprite.svg#icon-delete" />
          </svg>
        </div>

        <p className="quote-card__text">{quote.text}</p>

        <span className="quote-card__author">&mdash; {quote.author}</span>
      </div>
    </React.Fragment>
  );
};

QuoteCard.propTypes = {
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onDeleteQuote: PropTypes.func.isRequired
};

export default QuoteCard;
