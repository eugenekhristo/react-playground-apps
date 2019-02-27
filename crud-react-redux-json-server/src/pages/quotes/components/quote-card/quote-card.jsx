import './quote-card.scss';
import React from 'react';
import PropTypes from 'prop-types';

const QuoteCard = ({quote}) => {
  return (
    <React.Fragment>
      <div className="quote-card">
        <div className="quote-card__controls">
          <svg className="quote-card__icon quote-card__icon--edit">
            <use xlinkHref="./img/svg-icons-sprite.svg#icon-mode_edit" />
          </svg>
          <svg className="quote-card__icon quote-card__icon--remove">
            <use xlinkHref="./img/svg-icons-sprite.svg#icon-delete" />
          </svg>
        </div>

        <p className="quote-card__text">
          {quote.text}
        </p>

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
  })
}

export default QuoteCard;
