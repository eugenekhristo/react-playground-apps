import './quote-card.scss';
import React from 'react';

const QuoteCard = () => {
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
          Simplicity is the ultimate sophistication.
        </p>

        <span className="quote-card__author">&mdash; Leonardo da Vinci</span>
      </div>
    </React.Fragment>
  );
};

export default QuoteCard;
