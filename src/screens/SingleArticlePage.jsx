import React, { useState, useEffect } from 'react';
import { api } from '../api/axios';
import { useParams } from 'react-router-dom';
import Details from '../components/Details/Details';

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

  return article && <Details {...article} />;
};

export default SingleArticlePage;
