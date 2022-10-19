import React from 'react';
import { SanitizeText } from '../../utils/SanitizeText';
// css
import { CaretDoubleRight } from 'phosphor-react';
import './Articles.scss';

const Articles = React.forwardRef(({ props }, ref) => {
  const postBody = (
    <>
      <div className="article__photo">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="article__info">
        <span>{props.author}</span>
        <h3>{SanitizeText(props.title)}</h3>
        <p>{SanitizeText(props.article)}</p>
      </div>
      <CaretDoubleRight className="article__icon" size={32} />
    </>
  );

  const content = ref ? (
    <div className="article__item" ref={ref}>
      {postBody}
    </div>
  ) : (
    <div className="article__item">{postBody}</div>
  );

  return content;
});

export default Articles;
