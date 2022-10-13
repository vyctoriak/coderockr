import NavBar from '../components/NavBar/NavBar';
import Articles from '../components/Articles/Articles';
// import { useEffect, useState } from 'react';

export default function Home() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch(`https://stormy-shelf-93141.herokuapp.com/articles`)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // }, []);

  return (
    <div>
      <NavBar />
      <Articles />
    </div>
  );
}
