import NavBar from '../components/NavBar/NavBar';
import Articles from '../components/Articles/Articles';
import { useEffect, useState } from 'react';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-shelf-93141.herokuapp.com/articles?_limit=3`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  function sanitize(text) {
    return text
      .trim()
      .replace(/\n/g, '')
      .replace(/\<p\>/g, '')
      .replace(/\<\/p\>/g, '')
      .replace(/\<img.*.\/\>/g, '');
  }

  return (
    <div className="home">
      <NavBar />
      <div className="articles__container">
        {articles.map((article) => {
          return (
            <Articles
              key={article.id}
              imageUrl={article.imageUrl}
              author={article.author}
              title={sanitize(article.title)}
              article={sanitize(article.article)}
            />
          );
        })}
      </div>
    </div>
  );
}
