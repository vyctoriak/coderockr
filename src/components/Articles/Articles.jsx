// css
import { Airplay, CaretDoubleRight } from 'phosphor-react';
import './Articles.scss';

export default function Articles() {
  return (
    <div className="articles">
      <div className="articles__two--colums">
        <div className="articles__item">
          <div className="articles__photo">
            <Airplay size={320} />
          </div>
          <div className="articles__info">
            <span className="articles__author">Author</span>
            <h1 className="articles__title">Title</h1>
            <p className="articles__content">
              Saepe quia culpa vero. Velit numquam corporis nihil sint enim
              exercitationem. Rem nulla illum sint et id dolore voluptas
            </p>
          </div>
          <CaretDoubleRight className="articles__icon" size={24} />
        </div>
        <div className="articles__item">
          <div className="articles__photo">
            <Airplay size={320} />
          </div>
          <div className="articles__info">
            <span className="articles__author">Author</span>
            <h1 className="articles__title">Title</h1>
            <p className="articles__content">
              Saepe quia culpa vero. Velit numquam corporis nihil sint enim
              exercitationem. Rem nulla illum sint et id dolore voluptas
            </p>
          </div>
          <CaretDoubleRight className="articles__icon" size={24} />
        </div>
      </div>
    </div>
  );
}
