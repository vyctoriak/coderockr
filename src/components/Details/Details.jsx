import React from 'react';
import SanitizeText from '../../utils/SanitizeText';
import './Details.scss';

const Details = ({ imageUrl, title, date, author, article }) => {
  return (
    <div className="details__container">
      <div className="details__item">
        <div className="details__info">
          <div className="details__photo">
            <img src={imageUrl} alt={title} />
          </div>
          <div className="details__titles">
            <span>{date}</span>

            <h3>{author}</h3>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="details__text">{SanitizeText(article)}</div>
      </div>
    </div>
  );
};

export default Details;
