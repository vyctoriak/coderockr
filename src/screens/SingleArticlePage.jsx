import React, { useState, useEffect } from 'react';
// import Details from '../components/Details/Details';
import './SingleArticlePage.scss';
import { api } from '../api/axios';
import { useParams } from 'react-router-dom';
import SanitizeText from '../utils/SanitizeText';

const SingleArticlePage = () => {
  let { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    getArticleById(id);
  }, []);

  const getArticleById = async (id) => {
    try {
      const response = await api.get(`articles/${id}`);
      const { data } = response;
      setArticle(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="details__container">
      {article && (
        <div className="details__item">
          <div className="details__info">
            <div className="details__photo">
              <img src={article.imageUrl} alt={article.title} />
            </div>
            <div className="details__titles">
              <span>{article.date}</span>

              <h3>{article.author}</h3>
              <h2>{article.title}</h2>
            </div>
          </div>
          <div className="details__text">{SanitizeText(article.article)}</div>
        </div>
      )}
    </div>
  );
};

export default SingleArticlePage;
