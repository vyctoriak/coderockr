import React from 'react';
import SanitizeText from '../../utils/SanitizeText';
// css
import { CaretDoubleRight } from 'phosphor-react';
import './Articles.scss';
import { Link } from 'react-router-dom';

const Articles = React.forwardRef(({ props }, ref) => {
  const postBody = (
    <>
      <div className="article__photo">
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <div className="article__info">
        <span>{props.author}</span>
        <h2>{SanitizeText(props.title)}</h2>
        <p>{SanitizeText(props.article)}</p>
      </div>
      <Link to={`/articles/${props.id}`}>
        <CaretDoubleRight className="article__icon" size={32} />
      </Link>
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
