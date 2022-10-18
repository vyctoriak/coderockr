// css
import { CaretDoubleRight } from 'phosphor-react';
import './Articles.scss';

export default function Articles(props) {
  return (
    <div className="article__item">
      <div className="article__photo">
        <img src={props.imageUrl} />
      </div>
      <div className="article__info">
        <span>{props.author}</span>
        <h3>{props.title}</h3>
        <p>{props.article}</p>
      </div>
      <CaretDoubleRight className="article__icon" size={32} />
    </div>
  );
}
