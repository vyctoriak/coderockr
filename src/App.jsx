import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import NavBar from './components/NavBar/NavBar';
import Home from './screens/Home';
import SingleArticlePage from './screens/SingleArticlePage';
// css
import './global.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<SingleArticlePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
