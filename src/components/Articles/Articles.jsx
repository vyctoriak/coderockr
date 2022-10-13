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
            <span>Author</span>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              alias voluptatum, quos doloribus esse expedita nemo reprehenderit
              iusto repellendus deleniti blanditiis.
            </p>
          </div>
          <CaretDoubleRight className="articles__icon" size={24} />
        </div>
        <div className="articles__item">
          <div className="articles__photo">
            <Airplay size={320} />
          </div>
          <div className="articles__info">
            <span>Author</span>
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              alias voluptatum, quos doloribus esse expedita nemo reprehenderit
              iusto repellendus deleniti blanditiis.
            </p>
          </div>
          <CaretDoubleRight className="articles__icon" size={24} />
        </div>
      </div>
    </div>
  );
}
